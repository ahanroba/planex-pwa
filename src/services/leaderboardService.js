// Leaderboard Service for PlanEx Web
// Private Study Squads (اتاق‌های رقابت گروهی خصوصی با اعضای ماندگار و کد اختصاصی)
// Pure manual synchronization, resilient local cache, and Cloudflare KV integration

import { db } from '../db.js';
import { isStudyCategory } from '../constants.js';
import { API_BASE_URL } from '../config.js';

export const LEADERBOARD_STORAGE_KEYS = {
  USER_ID: 'planex_leaderboard_user_id',
  NICKNAME: 'planex_leaderboard_nickname',
  TARGET: 'planex_leaderboard_target',
  LAST_SYNC: 'planex_leaderboard_last_sync',
  CACHE: 'planex_leaderboard_cache',
  CACHE_DATE: 'planex_leaderboard_cache_date',
  SYNC_CODE: 'planex_sync_code',
  USER_GROUP_DATA: 'planex_user_group_data',
  GROUP_CACHE_PREFIX: 'planex_group_cache_',
  GROUP_ROSTER_PREFIX: 'planex_group_roster_',
  EARLY_BIRD_HISTORY: 'planex_early_bird_history',
  EARLY_BIRD_CACHE: 'planex_early_bird_cache',
  EARLY_BIRD_CACHE_DATE: 'planex_early_bird_cache_date'
};

// بازه مجاز ثبت بیداری: ۰۵:۰۰ تا ۰۷:۰۰ به وقت ایران
export const EARLY_BIRD_WINDOW = {
  START_MIN: 5 * 60,
  END_MIN: 7 * 60
};

/**
 * Normalizes a leaderboard member item so that weekly and all-time stats
 * are always available in camelCase regardless of server response format.
 */
function normalizeLeaderboardItem(item) {
  if (!item) return item;
  const studyMins = parseFloat(item.study_minutes || item.studyMinutes || item.total_study_minutes || 0);
  const testCount = parseInt(item.test_count || item.testCount || item.total_tests || 0) || 0;
  let weeklyMins = parseFloat(item.weekly_study_minutes || item.weeklyStudyMinutes || 0);
  let weeklyTests = parseInt(item.weekly_test_count || item.weeklyTestCount || 0) || 0;
  if (!weeklyMins && studyMins > 0) weeklyMins = studyMins;
  if (!weeklyTests && testCount > 0) weeklyTests = testCount;
  const allTimeMins = parseFloat(item.alltime_study_minutes || item.allTimeStudyMinutes || item.total_study_minutes_alltime || 0);
  const allTimeTests = parseInt(item.alltime_test_count || item.allTimeTestCount || item.total_tests_alltime || 0) || 0;
  return {
    ...item,
    studyMinutes: Math.round(studyMins),
    testCount,
    weeklyStudyMinutes: Math.round(Math.max(weeklyMins, studyMins)),
    weeklyTestCount: Math.max(weeklyTests, testCount),
    allTimeStudyMinutes: Math.round(Math.max(allTimeMins, weeklyMins, studyMins)),
    allTimeTestCount: Math.max(allTimeTests, weeklyTests, testCount)
  };
}

export const leaderboardService = {
  _studyHeartbeatInterval: null,
  _currentStudySubject: '',

  /**
   * Returns true strictly if the current user is actively in a study focus timer
   */
  isCurrentStudyingActive() {
    try {
      if (typeof window !== 'undefined' && typeof window.isUserStudyingNow === 'function') {
        return window.isUserStudyingNow();
      }
      const targetState = (typeof window !== 'undefined' ? window.appState : null);
      if (!targetState) return false;
      const isRunning = Boolean(targetState.isPomodoroRunning || targetState.isStopwatchRunning);
      if (!isRunning) return false;
      const isBreak = (targetState.focusTimerType === 2);
      const isNonStudy = (targetState.focusActivityMode === 'non-study' && !isBreak);
      return !isBreak && !isNonStudy;
    } catch (_) {
      return false;
    }
  },

  /**
   * Checks whether a group member is actively studying right now
   */
  isMemberStudying(member) {
    if (!member || !member.isStudying) return false;
    try {
      const profile = this.getUserProfile();
      if (member.userId === profile.userId || member.isCurrentUser || member.isUser) {
        return this.isCurrentStudyingActive();
      }
    } catch (_) {}
    const lastBeat = Number(member.lastHeartbeat) || 0;
    if (!lastBeat) return false;
    const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
    const diff = Date.now() - lastBeat;
    return diff >= 0 && diff < FIFTEEN_MINUTES_MS;
  },

  /**
   * Generates or retrieves full backup dataset using the offline engine (db.exportAllDataJSON)
   */
  exportAppState() {
    try {
      const jsonStr = db.exportAllDataJSON();
      return JSON.parse(jsonStr);
    } catch (e) {
      console.warn('[Sync] db.exportAllDataJSON failed, using fallback:', e);
      const backupObj = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.startsWith('planex_') ||
          key.startsWith('theme_') ||
          key.startsWith('app_') ||
          key.startsWith('timer_')
        )) {
          try {
            backupObj[key] = JSON.parse(localStorage.getItem(key));
          } catch (err) {
            backupObj[key] = localStorage.getItem(key);
          }
        }
      }
      return backupObj;
    }
  },

  /**
   * Restores full backup dataset using the offline engine (db.importAllDataJSON)
   */
  importAppState(appState) {
    if (!appState) return false;
    try {
      return db.importAllDataJSON(appState);
    } catch (e) {
      console.error('[Sync] db.importAllDataJSON failed:', e);
      return false;
    }
  },

  /**
   * Retrieves or creates a 6-character memorable sync code (e.g. PLX-8K4)
   */
  getOrCreateSyncCode() {
    let code = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.SYNC_CODE);
    if (!code) {
      const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      const rand = Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      code = `PLX-${rand}`;
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.SYNC_CODE, code);
    }
    return code;
  },

  /**
   * Sets custom/retrieved sync code
   */
  setSyncCode(code) {
    if (code) {
      const clean = String(code).trim().toUpperCase();
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.SYNC_CODE, clean);
    }
  },

  /**
   * Pushes full offline backup data to Cloudflare KV cloud (Manual trigger only)
   */
  async pushSyncCode(customCode = null) {
    const code = customCode || this.getOrCreateSyncCode();
    const profile = this.getUserProfile();
    const backupData = this.exportAppState();
    const storedAvatar = localStorage.getItem('planex_user_avatar') || profile.avatar || profile.avatar_url || '';

    if (storedAvatar && backupData && typeof backupData === 'object') {
      backupData.planex_user_avatar = storedAvatar;
    }

    const payload = {
      code,
      syncCode: code,
      userId: profile.userId,
      nickname: profile.nickname,
      target: profile.target,
      avatarUrl: storedAvatar,
      avatar_url: storedAvatar,
      avatar: storedAvatar,
      backupData: backupData,
      appState: backupData,
      updatedAt: Date.now()
    };

    try {
      let res = await fetch(`${API_BASE_URL}/api/sync-code.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        res = await fetch(`${API_BASE_URL}/api/v1/sync-code.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (res.ok) {
        return {
          success: true,
          code,
          message: `کد کپی و اطلاعات شما روی سرور ذخیره شد.`
        };
      }
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `خطای سرور (${res.status})`);
    } catch (err) {
      console.warn('[Sync] Push sync code failed:', err);
      return {
        success: false,
        code,
        message: 'خطا در ذخیره ابری داده‌ها: ' + err.message
      };
    }
  },

  /**
   * Applies and recovers complete dataset using the exact offline restore engine (db.importAllDataJSON)
   */
  async applySyncCode(inputCode) {
    if (!inputCode || !inputCode.trim()) {
      return { success: false, message: 'لطفاً کد همگام‌سازی را وارد کنید.' };
    }

    const safeCode = inputCode.trim().toUpperCase();

    try {
      let res = await fetch(`${API_BASE_URL}/api/sync-code.php?code=${safeCode}`);
      if (!res.ok) {
        res = await fetch(`${API_BASE_URL}/api/v1/sync-code.php?code=${safeCode}`);
      }
      if (!res.ok) {
        res = await fetch(`${API_BASE_URL}/api/leaderboard.php?sync_code=${safeCode}`);
      }

      const rawText = await res.text();
      let json = null;
      try {
        json = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        json = null;
      }

      if (res.ok && json && json.success && json.data) {
        const remote = json.data;
        const backupData = remote.backupData || remote.appState || null;
        if (backupData) {
          this.importAppState(backupData);
        }

        if (remote.userId) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.USER_ID, remote.userId);
        }
        if (remote.nickname) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.NICKNAME, remote.nickname);
          if (db && typeof db.setUserProfile === 'function') {
            const cur = db.getUserProfile() || {};
            db.setUserProfile({ ...cur, name: remote.nickname });
          }
        }
        if (remote.target) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.TARGET, remote.target);
        }

        const pulledAvatar = remote.avatarUrl || remote.avatar || remote.avatar_url || backupData?.planex_user_avatar || null;
        if (pulledAvatar) {
          localStorage.setItem('planex_user_avatar', pulledAvatar);
          if (db && typeof db.setUserProfile === 'function') {
            const cur = db.getUserProfile() || {};
            db.setUserProfile({ ...cur, avatar: pulledAvatar, avatar_url: pulledAvatar, photo: pulledAvatar, photoUrl: pulledAvatar });
          }
          try {
            const auth = JSON.parse(localStorage.getItem('planex_auth_user') || '{}');
            if (auth && typeof auth === 'object') {
              auth.avatar_url = pulledAvatar;
              auth.photo_url = pulledAvatar;
              auth.avatar = pulledAvatar;
              localStorage.setItem('planex_auth_user', JSON.stringify(auth));
              localStorage.setItem('planex_user_account', JSON.stringify(auth));
            }
          } catch (_) {}
          if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(new CustomEvent('profileUpdated'));
          }
        }

        localStorage.setItem(LEADERBOARD_STORAGE_KEYS.SYNC_CODE, safeCode);

        return {
          success: true,
          data: remote,
          message: `🎉 تمام اطلاعات، روتین‌ها و ساعات مطالعه با موفقیت از کد «${safeCode}» بازیابی و اعمال شد!`
        };
      }

      return {
        success: false,
        message: json?.message || `کد «${safeCode}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`
      };
    } catch (err) {
      console.error('[Sync] Sync code lookup failed:', err);
      return {
        success: false,
        message: 'خطا در ارتباط با سرور ابری هنگام بازیابی کد: ' + err.message
      };
    }
  },

  /**
   * Retrieves or creates a persistent unique user ID for leaderboard syncing
   */
  getOrCreateUserId() {
    let uid = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.USER_ID);
    if (!uid) {
      const deviceId = localStorage.getItem('planex_device_sync_id');
      if (deviceId) {
        uid = deviceId;
      } else {
        uid = 'usr_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
      }
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.USER_ID, uid);
    }
    return uid;
  },

  /**
   * Retrieves current user's leaderboard nickname and target
   */
  getUserProfile() {
    const defaultProfile = db.getUserProfile() || {};
    let authUser = null;
    try {
      authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
    } catch(e) {}

    // Auto-fetch from Telegram WebApp
    try {
      const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
      if (tgUser) {
        const tgName = [tgUser.first_name, tgUser.last_name].filter(Boolean).join(' ').trim();
        const tgAvatar = tgUser.photo_url || '';
        const currentName = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.NICKNAME) || (authUser && (authUser.full_name || authUser.name)) || defaultProfile.name || '';
        const isDefaultName = !currentName || currentName === 'دانش‌آموز پرتلاش' || currentName === 'کاربر' || currentName === 'X' || currentName === 'داوطلب پرتلاش';

        if (isDefaultName && tgName) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.NICKNAME, tgName);
          if (db && typeof db.setUserProfile === 'function') {
            const cur = db.getUserProfile() || {};
            db.setUserProfile({ ...cur, name: tgName });
          }
        }
        if (tgAvatar && (!authUser || !authUser.avatar_url)) {
          authUser = authUser || {};
          authUser.avatar_url = tgAvatar;
          authUser.photo_url = tgAvatar;
          localStorage.setItem('planex_auth_user', JSON.stringify(authUser));
        }
      }
    } catch (e) {}

    const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
    const avatar = storedAvatar || (authUser && (authUser.avatar_url || authUser.avatarUrl || authUser.photo_url || authUser.avatar)) || defaultProfile.avatar || defaultProfile.avatar_url || defaultProfile.photo || defaultProfile.photoUrl || '';
    const nickname = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.NICKNAME) || (authUser && (authUser.full_name || authUser.name)) || defaultProfile.name || 'داوطلب پرتلاش';
    const target = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.TARGET) || defaultProfile.targetField || defaultProfile.major || 'کنکور سراسری ۱۴۰۶';
    const uid = (authUser && (authUser.id || authUser.telegram_id || authUser.uid)) || this.getOrCreateUserId();
    const phone = (authUser && (authUser.phone || authUser.phone_number)) || defaultProfile.phone || '';
    
    return {
      nickname,
      target,
      userId: uid,
      id: uid,
      telegram_id: authUser?.telegram_id || uid,
      uid: uid,
      user_id: uid,
      phone: phone,
      phone_number: phone,
      syncCode: this.getOrCreateSyncCode(),
      avatar_url: avatar,
      avatarUrl: avatar,
      avatar: avatar,
      photo_url: avatar,
      photoUrl: avatar
    };
  },

  /**
   * Saves updated nickname, target, and avatar
   */
  saveUserProfile(nickname, target, avatarUrl) {
    if (nickname) localStorage.setItem(LEADERBOARD_STORAGE_KEYS.NICKNAME, nickname.trim());
    if (target !== undefined) localStorage.setItem(LEADERBOARD_STORAGE_KEYS.TARGET, target.trim());
    if (avatarUrl) {
      try {
        localStorage.setItem('planex_user_avatar', avatarUrl);
      } catch(e) {}

      try {
        const authRaw = localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account');
        let authUser = authRaw ? JSON.parse(authRaw) : {};
        authUser.avatar_url = avatarUrl;
        authUser.photo_url = avatarUrl;
        authUser.avatar = avatarUrl;
        localStorage.setItem('planex_auth_user', JSON.stringify(authUser));
        localStorage.setItem('planex_user_account', JSON.stringify(authUser));
      } catch(e) {}

      try {
        const profileRaw = localStorage.getItem('planex_user_profile');
        let prof = profileRaw ? JSON.parse(profileRaw) : {};
        prof.avatar = avatarUrl;
        prof.avatar_url = avatarUrl;
        prof.photo = avatarUrl;
        prof.photoUrl = avatarUrl;
        if (nickname) prof.name = nickname;
        if (target) { prof.targetField = target; prof.major = target; }
        localStorage.setItem('planex_user_profile', JSON.stringify(prof));
      } catch(e) {}
    }
  },

  // ────────────────────────────────────────────────────────────
  // ────────────────────────────────────────────────────────────
  // Private Study Squads (اتاق‌های رقابت گروهی کاملاً خصوصی - پشتیبانی از چند گروه)
  // ────────────────────────────────────────────────────────────

  /**
   * Get all groups the user has joined
   */
  getUserGroups() {
    return (db && typeof db.getUserGroups === 'function') ? db.getUserGroups() : [];
  },

  /**
   * Set user's groups list
   */
  setUserGroups(groupsList) {
    return (db && typeof db.setUserGroups === 'function') ? db.setUserGroups(groupsList) : [];
  },

  /**
   * Get code of currently selected/viewed group
   */
  getActiveGroupCode() {
    return (db && typeof db.getActiveGroupCode === 'function') ? db.getActiveGroupCode() : null;
  },

  /**
   * Switch the active group by code
   */
  setActiveGroupCode(code) {
    return (db && typeof db.setActiveGroupCode === 'function') ? db.setActiveGroupCode(code) : null;
  },

  /**
   * Get the active group object
   */
  getActiveGroup() {
    return (db && typeof db.getActiveGroup === 'function') ? db.getActiveGroup() : null;
  },

  /**
   * Get user's current private group data or null (active group)
   */
  getUserGroupData() {
    return this.getActiveGroup();
  },

  /**
   * Set or add user private group data
   */
  setUserGroupData(groupData) {
    if (!groupData) return null;
    return (db && typeof db.addUserGroup === 'function') ? db.addUserGroup(groupData) : null;
  },

  /**
  async leaveUserGroup(specificGroupCode = null) {
    const code = String(specificGroupCode || this.getActiveGroupCode() || '').trim().toUpperCase();
    if (!code) return { success: false, message: 'کد گروه مشخص نشده است.' };

    const profile = this.getUserProfile();

    try {
      await Promise.allSettled([
        fetch(`${API_BASE_URL}/api/rooms/leave.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            room_code: code,
            user_id: profile.userId,
            phone: profile.phone
          })
        }),
        fetch(`${API_BASE_URL}/api/leaderboard.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'leave_group',
            groupCode: code,
            userId: profile.userId,
            phone: profile.phone
          })
        })
      ]);
    } catch (e) {
      console.warn('[LeaderboardService] leaveUserGroup backend warning:', e);
    }

    // Clear local storage keys for this group
    localStorage.removeItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${code}`);
    localStorage.removeItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_ROSTER_PREFIX}${code}`);
    localStorage.removeItem(`squad_pending_${code}`);

    // Remove group from local DB
    if (db && typeof db.removeUserGroup === 'function') {
      db.removeUserGroup(code);
    }

    if (this.getActiveGroupCode() === code) {
      this.setActiveGroupCode(null);
      localStorage.removeItem('planex_active_group_code');
      localStorage.removeItem('active_room');
      localStorage.removeItem('planex_active_room');
      localStorage.removeItem('planex_user_group_data');
    }

    // Re-sync rooms with backend
    await this.fetchMyRooms().catch(() => {});

    return { success: true, message: `با موفقیت از گروه «${code}» خارج شدید.` };
  },

  /**
   * Deletes a group completely (Creator/Admin capability)
   */
  async deleteGroup(groupCode = null) {
    const code = String(groupCode || this.getActiveGroupCode() || '').trim().toUpperCase();
    if (!code) return { success: false, message: 'کد گروه مشخص نشده است.' };

    const profile = this.getUserProfile();

    try {
      await fetch(`${API_BASE_URL}/api/rooms/delete.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_code: code,
          user_id: profile.userId,
          phone: profile.phone,
          creator_id: profile.userId
        })
      });
    } catch (e) {
      console.warn('[LeaderboardService] Backend delete room warning:', e);
    }

    localStorage.removeItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${code}`);
    localStorage.removeItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_ROSTER_PREFIX}${code}`);
    localStorage.removeItem(`squad_pending_${code}`);

    if (db && typeof db.removeUserGroup === 'function') {
      db.removeUserGroup(code);
    }

    if (this.getActiveGroupCode() === code) {
      this.setActiveGroupCode(null);
      localStorage.removeItem('planex_active_group_code');
      localStorage.removeItem('active_room');
      localStorage.removeItem('planex_active_room');
      localStorage.removeItem('planex_user_group_data');
    }

    // Re-sync rooms with backend
    await this.fetchMyRooms().catch(() => {});

    return { success: true, message: `گروه «${code}» با موفقیت به طور کامل حذف شد.` };
  },

  /**
   * Explicitly fetches user's joined groups from database/backend and updates local state & UI
   */
  async fetchUserGroups(forceRefresh = true) {
    const profile = this.getUserProfile();
    try {
      let authUser = null;
      try {
        authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
      } catch (_) {}

      const userPhone = profile.phone || authUser?.phone || authUser?.phone_number || (() => {
        try {
          const prof = JSON.parse(localStorage.getItem('planex_user_profile') || '{}');
          return prof.phone || prof.mobile || '';
        } catch (_) { return ''; }
      })() || '';
      const userId = profile.userId || authUser?.id || authUser?.telegram_id || authUser?.uid || '';
      const params = new URLSearchParams();
      if (userId) params.set('user_id', userId);
      if (userPhone) params.set('phone', userPhone);
      if (forceRefresh) {
        params.set('force', '1');
        params.set('_t', Date.now().toString());
      }

      const res = await fetch(`${API_BASE_URL}/api/rooms/my-rooms.php?${params.toString()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      const data = await res.json();
      if (data && data.success && Array.isArray(data.rooms)) {
        if (data.rooms.length > 0) {
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups(data.rooms);
          }
          try {
            localStorage.setItem('planex_my_groups', JSON.stringify(data.rooms));
            localStorage.setItem('planex_my_rooms', JSON.stringify(data.rooms));
          } catch (_) {}

          // Ensure active group code is selected if currently none
          const currentActive = this.getActiveGroupCode();
          if ((!currentActive || !data.rooms.some(r => (r.code || r.groupCode) === currentActive)) && data.rooms.length > 0) {
            const firstCode = data.rooms[0].code || data.rooms[0].groupCode;
            if (firstCode) this.setActiveGroupCode(firstCode);
          }

          window.dispatchEvent(new CustomEvent('groups-updated', { detail: data.rooms }));
          window.dispatchEvent(new CustomEvent('groups-changed', { detail: data.rooms }));
          return data.rooms;
        } else {
          // RACE CONDITION SHIELD:
          // If server returns 0 rooms, do NOT overwrite local storage if groups already exist locally!
          const localGroups = this.getUserGroups();
          if (localGroups && localGroups.length > 0) {
            console.warn('[LeaderboardService] fetchUserGroups received 0 rooms from server, preserving', localGroups.length, 'local groups.');
            return localGroups;
          }
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups([]);
          }
          window.dispatchEvent(new CustomEvent('groups-updated', { detail: [] }));
          window.dispatchEvent(new CustomEvent('groups-changed', { detail: [] }));
          return [];
        }
      }
    } catch (e) {
      console.warn('[LeaderboardService] fetchUserGroups error:', e);
    }
    return this.getUserGroups();
  },

  /**
   * Fetches user's rooms from cloud backend and syncs with local DB
   */
  async fetchMyRooms(forceRefresh = true) {
    return this.fetchUserGroups(forceRefresh);
  },

  /**
   * Fetches real public rooms from cloud backend (No mock data)
   */
  async fetchPublicRooms() {
    try {
      const res = await fetch(`${API_BASE_URL}/api/rooms/public.php`);
      const data = await res.json();
      if (data && data.success && Array.isArray(data.rooms)) {
        return data.rooms;
      }
    } catch (e) {
      console.warn('[LeaderboardService] fetchPublicRooms error:', e);
    }
    return [];
  },

  /**
   * Fetches pending join requests for group creator
   */
  async fetchPendingRequests(groupCode = null) {
    const code = groupCode || this.getActiveGroupCode();
    if (!code) return [];
    try {
      const profile = this.getUserProfile();
      const res = await fetch(`${API_BASE_URL}/api/rooms/requests.php?room_code=${encodeURIComponent(code)}&user_id=${encodeURIComponent(profile.userId)}`);
      const data = await res.json();
      if (data && data.success && Array.isArray(data.requests)) {
        return data.requests;
      }
    } catch (e) {
      console.warn('[LeaderboardService] fetchPendingRequests error:', e);
    }
    return [];
  },

  /**
   * Approves or rejects a pending join request
   */
  async handleMembershipRequest(groupCode, targetUserId, action = 'approve') {
    const code = groupCode || this.getActiveGroupCode();
    const profile = this.getUserProfile();
    try {
      const res = await fetch(`${API_BASE_URL}/api/rooms/requests.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_code: code,
          action: action,
          target_user_id: targetUserId,
          admin_id: profile.userId,
          phone: profile.phone
        })
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error('[LeaderboardService] handleMembershipRequest error:', e);
      return { success: false, message: e.message };
    }
  },

  /**
   * Approves a member's pending join request:
   * Moves user from pending requests to roster/members, persists updated data, and notifies backend.
   */
  async approveMember(groupId, userId) {
    const code = String(groupId || this.getActiveGroupCode() || '').trim().toUpperCase();
    if (!code || !userId) return { success: false, message: 'شناسه گروه یا کاربر نامعتبر است.' };

    const serverRes = await this.handleMembershipRequest(code, userId, 'approve');

    // Update local persistent roster
    const roster = this.getGroupRoster(code);
    const existingIdx = roster.findIndex(m => m.userId === userId || m.id === userId || m.phone === userId);
    if (existingIdx >= 0) {
      roster[existingIdx].status = 'approved';
    } else {
      const pendingList = window.groupPendingRequests || [];
      const pendingItem = pendingList.find(r => (r.userId || r.user_id || r.phone) === userId) || {};
      roster.push({
        userId: userId,
        nickname: pendingItem.nickname || pendingItem.name || 'کاربر جدید',
        target: pendingItem.target || 'کنکور سراسری',
        joinedAt: Date.now(),
        isOwner: false,
        status: 'approved'
      });
    }
    this.saveGroupRoster(code, roster);

    // Filter out approved user from active pending requests list
    if (Array.isArray(window.groupPendingRequests)) {
      window.groupPendingRequests = window.groupPendingRequests.filter(r => (r.userId || r.user_id || r.phone) !== userId);
    }

    // Force re-fetch cached leaderboard
    this.fetchLeaderboard(null, true, code).catch(() => {});

    return {
      success: true,
      message: (serverRes && serverRes.message) ? serverRes.message : 'کاربر با موفقیت به گروه اضافه شد'
    };
  },

  /**
   * Rejects a member's pending join request:
   * Removes user from pending requests, persists updated data, and notifies backend.
   */
  async rejectMember(groupId, userId) {
    const code = String(groupId || this.getActiveGroupCode() || '').trim().toUpperCase();
    if (!code || !userId) return { success: false, message: 'شناسه گروه یا کاربر نامعتبر است.' };

    const serverRes = await this.handleMembershipRequest(code, userId, 'reject');

    // Update local roster
    const roster = this.getGroupRoster(code);
    const updatedRoster = roster.filter(m => m.userId !== userId && m.id !== userId && m.phone !== userId);
    this.saveGroupRoster(code, updatedRoster);

    // Filter out rejected user from active pending requests list
    if (Array.isArray(window.groupPendingRequests)) {
      window.groupPendingRequests = window.groupPendingRequests.filter(r => (r.userId || r.user_id || r.phone) !== userId);
    }

    return {
      success: true,
      message: (serverRes && serverRes.message) ? serverRes.message : 'درخواست عضویت رد شد'
    };
  },

  /**
   * Toggles group type between private (is_private = 1) and public (is_private = 0)
   */
  async toggleGroupPrivacy(groupCode, newIsPrivate) {
    const code = groupCode || this.getActiveGroupCode();
    try {
      const res = await fetch(`${API_BASE_URL}/api/rooms/toggle-type.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_code: code,
          is_private: newIsPrivate ? 1 : 0
        })
      });
      const data = await res.json();
      if (data && data.success) {
        const groups = this.getUserGroups();
        const grp = groups.find(g => (g.code || g.groupCode) === code);
        if (grp) {
          grp.is_private = newIsPrivate ? 1 : 0;
          grp.type = newIsPrivate ? 'private' : 'public';
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups(groups);
          }
        }
        return data;
      }
      return data;
    } catch (e) {
      console.error('[LeaderboardService] toggleGroupPrivacy error:', e);
    }
    return { success: false, message: 'خطا در برقراری ارتباط با سرور' };
  },

  /**
   * Generates a 6-character unique formatted group code (e.g. PLX-4829)
   */
  generateGroupCode() {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `PLX-${num}`;
  },

  /**
   * Creates a brand new group (Public or Private) and adds to user's groups list
   */
  async createPrivateGroup(groupName, isPrivate = false, extraMeta = {}) {
    const code = this.generateGroupCode();
    const profile = this.getUserProfile();
    const finalName = (groupName && groupName.trim()) ? groupName.trim() : `گروه ${code}`;

    const groupData = {
      code: code,
      groupCode: code,
      name: finalName,
      groupName: finalName,
      joinedAt: Date.now(),
      isOwner: true,
      is_private: isPrivate ? 1 : 0,
      type: isPrivate ? 'private' : 'public',
      status: 'approved',
      userId: profile.userId,
      category: extraMeta.category || 'general',
      capacity: extraMeta.capacity || 600,
      announcement: extraMeta.announcement || ''
    };

    if (db && typeof db.addUserGroup === 'function') {
      db.addUserGroup(groupData);
    }

    try {
      await fetch(`${API_BASE_URL}/api/rooms/create.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_code: code,
          title: finalName,
          phone: profile.phone,
          creator_phone: profile.phone,
          creator_id: profile.userId,
          admin_id: profile.userId,
          user_id: profile.userId,
          is_private: isPrivate ? 1 : 0,
          type: isPrivate ? 'private' : 'public',
          user: { name: profile.nickname, avatar_url: profile.avatarUrl },
          category: extraMeta.category || 'general',
          announcement: extraMeta.announcement || ''
        })
      });
    } catch (err) {
      console.warn('[LeaderboardService] Backend create room call warning:', err);
    }

    // Initialize local persistent roster
    const initialRoster = [{
      userId: profile.userId,
      nickname: profile.nickname,
      target: profile.target,
      joinedAt: Date.now(),
      isOwner: true,
      status: 'approved'
    }];
    this.saveGroupRoster(code, initialRoster);

    // Sync to Cloud KV immediately
    await this.syncUserScore(true, code);

    return {
      success: true,
      groupCode: code,
      groupName: finalName,
      groupData
    };
  },

  /**
   * Alias for createPrivateGroup to satisfy createGroup requests
   */
  async createGroup(groupName, isPrivate = false, extraMeta = {}) {
    return this.createPrivateGroup(groupName, isPrivate, extraMeta);
  },

  /**
   * Checks if user is authenticated/verified (has a valid Telegram ID or verified account)
   */
  isUserVerified() {
    let authUser = null;
    try {
      authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch(e) {}

    const profile = this.getUserProfile();
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

    const isVerified = Boolean(
      (tgUser && tgUser.id) ||
      (authUser && (authUser.id || authUser.telegram_id || authUser.phone || authUser.phone_number)) ||
      (profile && (profile.phone || profile.phone_number || profile.telegram_id || (profile.userId && !profile.userId.startsWith('usr_')))) ||
      localStorage.getItem('planex_user_phone')
    );

    return isVerified;
  },

  /**
   * Joins an existing group with 6-char group code (instant auto-join for verified users)
   */
  async joinPrivateGroup(inputCode, groupName = null) {
    if (!inputCode || !inputCode.trim()) {
      return { success: false, message: 'لطفاً کد ۶ رقمی یا شماره گروه را وارد نمایید.' };
    }

    const cleanCode = String(inputCode).trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    if (cleanCode.length < 4) {
      return { success: false, message: 'فرمت کد گروه نامعتبر است (مثال: PLX-4829).' };
    }

    const profile = this.getUserProfile();

    // Verification check
    if (!this.isUserVerified()) {
      if (typeof window.openLoginModal === 'function') {
        window.openLoginModal();
      } else if (window.appState) {
        window.appState.activeModal = 'login';
        if (window.renderApp) window.renderApp();
      }
      return {
        success: false,
        requiresVerification: true,
        message: 'برای پیوستن به گروه، لطفاً ابتدا حساب کاربری خود را در ربات تلگرام یا اپلیکیشن تایید نمایید.'
      };
    }

    let backendRes = null;
    try {
      const res = await fetch(`${API_BASE_URL}/api/rooms/join.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_code: cleanCode,
          phone: profile.phone,
          user_phone: profile.phone,
          user_id: profile.userId,
          nickname: profile.nickname,
          user: { name: profile.nickname, avatar_url: profile.avatarUrl },
          bypass_pending: true,
          auto_approve: true,
          action: 'join'
        })
      });
      backendRes = await res.json().catch(() => null);
    } catch (e) {
      console.warn('[LeaderboardService] Backend join call warning:', e);
    }

    const serverRoom = (backendRes && backendRes.room) ? backendRes.room : null;
    const finalName = groupName || (serverRoom ? serverRoom.title : `گروه ${cleanCode}`);

    // Verified users auto-join directly as approved members (bypassing pendingRequests)
    const groupData = {
      code: cleanCode,
      groupCode: cleanCode,
      name: finalName,
      groupName: finalName,
      joinedAt: Date.now(),
      isOwner: false,
      status: 'approved',
      is_private: (serverRoom && serverRoom.is_private) ? 1 : 0,
      userId: profile.userId
    };

    if (db && typeof db.addUserGroup === 'function') {
      db.addUserGroup(groupData);
    }

    // Push directly to group roster
    const currentRoster = this.getGroupRoster(cleanCode);
    const existingIdx = currentRoster.findIndex(m => m.userId === profile.userId || m.id === profile.userId);
    if (existingIdx < 0) {
      currentRoster.push({
        userId: profile.userId,
        nickname: profile.nickname,
        target: profile.target,
        joinedAt: Date.now(),
        isOwner: false,
        status: 'approved'
      });
    } else {
      currentRoster[existingIdx].status = 'approved';
      currentRoster[existingIdx].nickname = profile.nickname || currentRoster[existingIdx].nickname;
      currentRoster[existingIdx].target = profile.target || currentRoster[existingIdx].target;
    }
    this.saveGroupRoster(cleanCode, currentRoster);

    // Set active group code
    this.setActiveGroupCode(cleanCode);

    // Persist and sync to cloud immediately
    await this.syncUserScore(true, cleanCode).catch(() => {});
    await this.fetchLeaderboard(null, true, cleanCode).catch(() => {});

    return {
      success: true,
      pending: false,
      groupCode: cleanCode,
      groupName: finalName,
      groupData,
      message: 'با موفقیت به گروه پیوستید! 🎉'
    };
  },

  /**
   * Alias for joining group by code
   */
  async joinGroupByCode(code, name = null) {
    return this.joinPrivateGroup(code, name);
  },

  /**
   * Alias for joining group by link
   */
  async joinGroupByLink(linkOrCode) {
    let code = linkOrCode;
    if (code && code.includes('group=')) {
      const match = code.match(/group=([^&]+)/);
      if (match) code = match[1];
    }
    return this.joinPrivateGroup(code);
  },

  /**
   * Get persistent roster from local storage
   */
  getGroupRoster(groupCode) {
    if (!groupCode) return [];
    try {
      const raw = localStorage.getItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_ROSTER_PREFIX}${groupCode}`);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  },

  /**
   * Save persistent roster to local storage
   */
  saveGroupRoster(groupCode, roster) {
    if (!groupCode || !Array.isArray(roster)) return;
    try {
      localStorage.setItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_ROSTER_PREFIX}${groupCode}`, JSON.stringify(roster));
    } catch (e) {}
  },

  /**
   * Returns current day in Iran timezone (YYYY-MM-DD)
   */
  getTodayDateStr() {
    try {
      const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran', year: 'numeric', month: '2-digit', day: '2-digit' });
      return formatter.format(new Date());
    } catch (e) {
      return new Date().toISOString().split('T')[0];
    }
  },

  /**
   * Calculates today's study minutes, hours, test count and studied subjects strictly from actual logged sessions
   */
  getTodayStats() {
    const todayJalaliStr = db.getTodayJalaliString();
    const studyMinutes = db.getStudyMinutesByDate(todayJalaliStr);
    const studyHours = +(studyMinutes / 60).toFixed(2);
    const testCount = db.getDailyTestCount(todayJalaliStr);
    const subjects = (typeof db.getTodayStudiedSubjects === 'function')
      ? db.getTodayStudiedSubjects(todayJalaliStr)
      : [];
    const gregorianDate = this.getTodayDateStr();
    const jalaliDateStr = todayJalaliStr;

    return {
      studyMinutes,
      studyHours,
      testCount,
      subjects: Array.isArray(subjects) ? subjects : [],
      gregorianDate,
      jalaliDateStr
    };
  },

  /**
   * Defines the Persian weekly window strictly from Saturday 00:00:00 to Friday 23:59:59 of current week
   */
  getPersianWeekWindow(refDate = new Date()) {
    const d = new Date(refDate);
    const dayOfWeek = (d.getDay() + 1) % 7; // 0=Sat, 1=Sun, ..., 6=Fri
    const satDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() - dayOfWeek, 0, 0, 0, 0);
    const friDate = new Date(satDate.getFullYear(), satDate.getMonth(), satDate.getDate() + 6, 23, 59, 59, 999);

    const weekJalaliDates = [];
    const weekGregorianDates = [];
    for (let i = 0; i < 7; i++) {
      const cur = new Date(satDate.getFullYear(), satDate.getMonth(), satDate.getDate() + i);
      const gy = cur.getFullYear();
      const gm = String(cur.getMonth() + 1).padStart(2, '0');
      const gd = String(cur.getDate()).padStart(2, '0');
      weekGregorianDates.push(`${gy}-${gm}-${gd}`);
      if (db && typeof db.gregorianToJalali === 'function') {
        const [jy, jm, jd] = db.gregorianToJalali(gy, cur.getMonth() + 1, cur.getDate());
        weekJalaliDates.push(`${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`);
      }
    }

    return {
      satDate,
      friDate,
      startTimestamp: satDate.getTime(),
      endTimestamp: friDate.getTime(),
      satDateStr: `${satDate.getFullYear()}-${String(satDate.getMonth() + 1).padStart(2, '0')}-${String(satDate.getDate()).padStart(2, '0')}`,
      weekJalaliDates,
      weekGregorianDates
    };
  },

  /**
   * Aggregates (SUM) total study minutes and total tests logged across all 7 days of the current Persian week
   */
  getWeeklyStats() {
    const weekWindow = this.getPersianWeekWindow();
    let totalStudyMinutes = 0;
    let totalTests = 0;
    const subjectsSet = new Set();

    // 1. Gather all logged sessions from db / localStorage
    let allSessions = [];
    try {
      const recent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      const logs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      const sessionMap = new Map();
      if (Array.isArray(logs)) logs.forEach(s => { if (s && (s.id || s.timestamp)) sessionMap.set(s.id || (`ts_${s.timestamp}_${s.duration}`), s); });
      if (Array.isArray(recent)) recent.forEach(s => { if (s && (s.id || s.timestamp)) sessionMap.set(s.id || (`ts_${s.timestamp}_${s.duration}`), s); });
      allSessions = Array.from(sessionMap.values());
    } catch (e) {
      allSessions = [];
    }

    allSessions.forEach(s => {
      if (!s || typeof s !== 'object') return;
      const sTime = Number(s.timestamp || s.createdAt || s.endTime || 0);
      const sDateStr = (db && typeof db.normalizeJalaliDate === 'function') ? db.normalizeJalaliDate(s.dateStr || s.date) : (s.dateStr || s.date);

      const inTimestampWindow = (sTime >= weekWindow.startTimestamp && sTime <= weekWindow.endTimestamp);
      const inJalaliWeek = sDateStr && weekWindow.weekJalaliDates.includes(sDateStr);

      if (inTimestampWindow || inJalaliWeek) {
        const isNonStudy = (
          s.type === 'non-study' || s.type === 'non_study' || s.type === 'break' ||
          s.activityType === 'non_study' || s.activityType === 'non-study' || s.activityType === 'break' ||
          s.isStudy === false || s.is_study_time === false || s.counts_for_study === false ||
          s.isBreak === true || s.is_break === true || s.timerType === 'break' || s.timerType === 2
        );
        if (!isNonStudy) {
          totalStudyMinutes += Math.max(0, Math.ceil(Number(s.duration !== undefined ? s.duration : s.minutes) || 0));
          totalTests += Math.max(0, Number(s.testCount !== undefined ? s.testCount : s.tests) || 0);
          const subName = (s.subject && s.subject.trim() !== 'مطالعه متمرکز') ? s.subject.trim() : (s.categoryTitle || s.category);
          if (subName && subName.trim()) subjectsSet.add(subName.trim());
        }
      }
    });

    // 2. Aggregate from planex_recorded_timer across the 7 Jalali dates of this week
    try {
      const recorded = JSON.parse(localStorage.getItem('planex_recorded_timer') || '{}');
      let recMins = 0;
      let recTests = 0;
      weekWindow.weekJalaliDates.forEach(jDate => {
        if (recorded[jDate]) {
          recMins += Number(recorded[jDate].minutes) || 0;
          recTests += Number(recorded[jDate].tests) || 0;
        }
      });
      totalStudyMinutes = Math.max(totalStudyMinutes, recMins);
      totalTests = Math.max(totalTests, recTests);
    } catch (e) {}

    // 3. Aggregate from db.getDailyStats across each day of the week
    if (db && typeof db.getDailyStats === 'function') {
      let dbDaysMins = 0;
      let dbDaysTests = 0;
      weekWindow.weekJalaliDates.forEach(jDate => {
        try {
          const ds = db.getDailyStats(jDate);
          if (ds) {
            dbDaysMins += Number(ds.studyMinutes) || 0;
            dbDaysTests += Number(ds.totalTests) || 0;
          }
        } catch (e) {}
      });
      totalStudyMinutes = Math.max(totalStudyMinutes, dbDaysMins);
      totalTests = Math.max(totalTests, dbDaysTests);
    }

    // 4. Do NOT overwrite weekly totals with today's single-day values, but ensure weekly >= today
    const todayStats = this.getTodayStats();
    totalStudyMinutes = Math.max(totalStudyMinutes, Number(todayStats.studyMinutes) || 0);
    totalTests = Math.max(totalTests, Number(todayStats.testCount) || 0);

    return {
      studyMinutes: totalStudyMinutes,
      studyHours: +(totalStudyMinutes / 60).toFixed(2),
      testCount: totalTests,
      subjects: Array.from(subjectsSet),
      weekWindow
    };
  },

  /**
   * Universal Group-Wide Aggregation for ANY group member.
   * Calculates total study minutes and total tests for a member for:
   * - "today": today's study minutes and tests
   * - "week": from Saturday 00:00 to Friday 23:59 (or aggregate member's weekly history)
   * - "all": entire lifetime study minutes and tests recorded for member
   */
  calculateMemberPeriodStats(member, period = 'week', persianWeekWindow = null) {
    if (!member) return { totalMinutes: 0, totalTests: 0 };
    const win = persianWeekWindow || this.getPersianWeekWindow();
    const isUser = Boolean(member.isUser || member.isCurrentUser || (this.getUserProfile() && member.userId === this.getUserProfile().userId));

    const todayMinutes = Number(member.studyMinutes || member.study_minutes || 0);
    const todayTests = Number(member.testCount || member.test_count || 0);

    if (period === 'today') {
      let m = todayMinutes;
      let t = todayTests;
      if (isUser) {
        const todayStats = this.getTodayStats();
        m = Math.max(m, Number(todayStats?.studyMinutes || 0));
        t = Math.max(t, Number(todayStats?.testCount || 0));
      }
      return { totalMinutes: Math.round(m), totalTests: Math.round(t) };
    }

    let historyMinutes = 0;
    let historyTests = 0;

    const evaluateEntry = (entry) => {
      if (!entry || typeof entry !== 'object') return;
      const duration = Number(entry.duration !== undefined ? entry.duration : (entry.minutes !== undefined ? entry.minutes : (entry.studyMinutes || entry.study_minutes || 0))) || 0;
      const tests = Number(entry.testCount !== undefined ? entry.testCount : (entry.tests !== undefined ? entry.tests : (entry.test_count || 0))) || 0;

      const isNonStudy = (
        entry.type === 'non-study' || entry.type === 'non_study' || entry.type === 'break' ||
        entry.activityType === 'non_study' || entry.activityType === 'non-study' || entry.activityType === 'break' ||
        entry.isStudy === false || entry.is_study_time === false || entry.counts_for_study === false ||
        entry.isBreak === true || entry.is_break === true || entry.timerType === 'break' || entry.timerType === 2
      );
      if (isNonStudy) return;

      if (period === 'all') {
        historyMinutes += Math.max(0, duration);
        historyTests += Math.max(0, tests);
      } else if (period === 'week') {
        const time = Number(entry.timestamp || entry.createdAt || entry.endTime || 0);
        const dateStr = String(entry.dateStr || entry.date || entry.jalaliDate || '').trim();
        const normDateStr = dateStr.replace(/\//g, '-');

        const inTimestampWindow = (time >= win.startTimestamp && time <= win.endTimestamp);
        const inJalaliWeek = dateStr && (
          win.weekJalaliDates.includes(dateStr) ||
          win.weekJalaliDates.map(d => d.replace(/\//g, '-')).includes(normDateStr) ||
          win.weekGregorianDates.includes(dateStr)
        );

        if (inTimestampWindow || inJalaliWeek || (!time && !dateStr)) {
          historyMinutes += Math.max(0, duration);
          historyTests += Math.max(0, tests);
        }
      }
    };

    // 1. member.weeklyHistory
    if (period === 'week' && Array.isArray(member.weeklyHistory)) {
      member.weeklyHistory.forEach(evaluateEntry);
    }

    // 2. member.history
    if (Array.isArray(member.history)) {
      member.history.forEach(evaluateEntry);
    } else if (member.history && typeof member.history === 'object') {
      Object.entries(member.history).forEach(([dateKey, val]) => {
        if (typeof val === 'number') {
          evaluateEntry({ date: dateKey, duration: val, testCount: 0 });
        } else if (val && typeof val === 'object') {
          evaluateEntry({ date: dateKey, ...val });
        }
      });
    }

    // 3. member.sessions, member.dailyLogs, member.logs, member.dailyHistory
    const otherLogs = member.sessions || member.dailyLogs || member.logs || member.dailyHistory;
    if (Array.isArray(otherLogs)) {
      otherLogs.forEach(evaluateEntry);
    }

    // 4. Pre-calculated fields from backend or previous syncs
    let weeklyMins = Math.max(
      historyMinutes,
      Number(member.weeklyStudyMinutes !== undefined ? member.weeklyStudyMinutes : (member.weekly_study_minutes || member.weeklyMinutes || 0)),
      todayMinutes
    );
    let weeklyTests = Math.max(
      historyTests,
      Number(member.weeklyTestCount !== undefined ? member.weeklyTestCount : (member.weekly_test_count || member.weeklyTests || 0)),
      todayTests
    );

    let allTimeMins = Math.max(
      historyMinutes,
      Number(member.allTimeStudyMinutes !== undefined ? member.allTimeStudyMinutes : (member.alltime_study_minutes || member.totalStudyMinutes || member.totalMinutes || 0)),
      weeklyMins,
      todayMinutes
    );
    let allTimeTests = Math.max(
      historyTests,
      Number(member.allTimeTestCount !== undefined ? member.allTimeTestCount : (member.alltime_test_count || member.totalTestCount || member.totalTests || 0)),
      weeklyTests,
      todayTests
    );

    // 5. Current user local database overlay
    if (isUser) {
      const userWeeklyStats = this.getWeeklyStats();
      if (userWeeklyStats) {
        weeklyMins = Math.max(weeklyMins, Number(userWeeklyStats.studyMinutes || 0));
        weeklyTests = Math.max(weeklyTests, Number(userWeeklyStats.testCount || 0));
      }
      if (db && typeof db.getStudyStatsByPeriod === 'function') {
        const allStats = db.getStudyStatsByPeriod('all');
        if (allStats) {
          allTimeMins = Math.max(allTimeMins, Number(allStats.studyMinutes || 0), weeklyMins);
          allTimeTests = Math.max(allTimeTests, Number(allStats.testCount || 0), weeklyTests);
        }
      }
    }

    if (period === 'week') {
      return {
        totalMinutes: Math.round(weeklyMins),
        totalTests: Math.round(weeklyTests)
      };
    } else {
      return {
        totalMinutes: Math.round(allTimeMins),
        totalTests: Math.round(allTimeTests)
      };
    }
  },

  /**
   * Universally sorts all members descending according to:
   * score = (member.totalMinutes * 60) + (member.totalTests * 10)
   * And re-assigns ranks (1, 2, 3...)
   */
  aggregateAndRankMembers(members, period = 'today') {
    if (!Array.isArray(members)) return [];
    const window = this.getPersianWeekWindow();

    const calculated = members.map(m => {
      const stats = this.calculateMemberPeriodStats(m, period, window);
      const totalMinutes = stats.totalMinutes;
      const totalTests = stats.totalTests;
      const score = (totalMinutes * 60) + (totalTests * 10);
      return {
        ...m,
        totalMinutes,
        totalTests,
        displayStudyMins: totalMinutes,
        displayTestCount: totalTests,
        studyMinutes: (period === 'today' ? totalMinutes : (m.studyMinutes || m.study_minutes || 0)),
        testCount: (period === 'today' ? totalTests : (m.testCount || m.test_count || 0)),
        weeklyStudyMinutes: (period === 'week' ? totalMinutes : (m.weeklyStudyMinutes || m.weekly_study_minutes || totalMinutes)),
        weeklyTestCount: (period === 'week' ? totalTests : (m.weeklyTestCount || m.weekly_test_count || totalTests)),
        allTimeStudyMinutes: (period === 'all' ? totalMinutes : (m.allTimeStudyMinutes || m.alltime_study_minutes || totalMinutes)),
        allTimeTestCount: (period === 'all' ? totalTests : (m.allTimeTestCount || m.alltime_test_count || totalTests)),
        score
      };
    });

    // Sort descending by: score = (member.totalMinutes * 60) + (member.totalTests * 10)
    calculated.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (b.totalMinutes !== a.totalMinutes) {
        return b.totalMinutes - a.totalMinutes;
      }
      return b.totalTests - a.totalTests;
    });

    // Re-assign ranks 1, 2, 3...
    return calculated.map((item, idx) => ({
      ...item,
      rank: idx + 1
    }));
  },


  /**
   * No auto-sync: only manual sync is enabled
   */
  canAutoSync() {
    return false;
  },

  /**
   * Formatted status of the last manual sync
   */
  getSyncStatus() {
    const lastSync = parseInt(localStorage.getItem(LEADERBOARD_STORAGE_KEYS.LAST_SYNC) || '0');
    if (!lastSync) {
      return {
        hasSyncedBefore: false,
        lastSyncText: 'هنوز همگام‌سازی نشده'
      };
    }

    const diffMs = Date.now() - lastSync;
    const minsAgo = Math.floor(diffMs / (60 * 1000));
    const hoursAgo = Math.floor(minsAgo / 60);
    let lastSyncText = '';
    if (minsAgo < 1) lastSyncText = 'لحظاتی پیش';
    else if (minsAgo < 60) lastSyncText = `${minsAgo} دقیقه پیش`;
    else lastSyncText = `${hoursAgo} ساعت و ${minsAgo % 60} دقیقه پیش`;

    return {
      hasSyncedBefore: true,
      lastSyncTimestamp: lastSync,
      lastSyncText
    };
  },

  /**
   * Syncs user's study score across all enrolled Private Study Squads
   */
  async syncUserScore(force = false, specificGroupCode = null) {
    const groups = this.getUserGroups();
    if (groups.length === 0 && !specificGroupCode) {
      return {
        success: false,
        noGroup: true,
        message: 'شما در هیچ گروه رقابتی عضو نیستید. لطفاً ابتدا یک گروه بسازید یا با کد وارد شوید.'
      };
    }

    const targetGroups = specificGroupCode
      ? groups.filter(g => g.code === String(specificGroupCode).trim().toUpperCase())
      : groups;

    if (targetGroups.length === 0 && specificGroupCode) {
      targetGroups.push({ code: String(specificGroupCode).trim().toUpperCase(), name: `گروه ${specificGroupCode}` });
    }

    let primaryResult = null;
    const activeCode = this.getActiveGroupCode();

    for (const grp of targetGroups) {
      const res = await this.syncSingleGroupScore(grp);
      if (!primaryResult || grp.code === activeCode) {
        primaryResult = res;
      }
    }

    return primaryResult || { success: true, message: 'کارنامه در گروه‌ها ثبت شد.' };
  },

  /**
   * Sends real-time study status (set_status action) to private squad endpoint
   */
  async setStudyStatus(isStudying, subject = '', isUnload = false, statusType = 'study') {
    const groups = this.getUserGroups();
    const activeGroup = this.getActiveGroup();
    const profile = this.getUserProfile();
    const now = Date.now();
    const safeSubject = String(subject || '').trim();

    const isRealStudy = Boolean(isStudying) && statusType === 'study';
    let statusLabel = '';
    if (isRealStudy) {
      statusLabel = '🟢 در حال مطالعه';
    } else if (statusType === 'break') {
      statusLabel = '☕ در حال استراحت';
    } else if (statusType === 'non-study' || statusType === 'non_study') {
      statusLabel = '🧘 فعالیت غیردرسی';
    }

    const targetGroups = (Array.isArray(groups) && groups.length > 0)
      ? groups
      : (activeGroup ? [activeGroup] : []);

    if (targetGroups.length === 0) {
      return { success: false, noGroup: true };
    }

    // 1. Optimistically update local group roster and cache
    targetGroups.forEach(grp => {
      const groupCode = String(grp.code || grp.groupCode).trim().toUpperCase();
      if (!groupCode) return;

      const roster = this.getGroupRoster(groupCode);
      const rIdx = roster.findIndex(m => m.userId === profile.userId);
      if (rIdx >= 0) {
        roster[rIdx].isStudying = isRealStudy;
        roster[rIdx].statusType = statusType;
        roster[rIdx].statusLabel = statusLabel;
        roster[rIdx].studySubject = isRealStudy ? safeSubject : '';
        roster[rIdx].subject = isRealStudy ? safeSubject : '';
        roster[rIdx].lastHeartbeat = isRealStudy ? now : 0;
        this.saveGroupRoster(groupCode, roster);
      }

      try {
        const cachedStr = localStorage.getItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`);
        if (cachedStr) {
          let list = JSON.parse(cachedStr);
          if (Array.isArray(list)) {
            const cIdx = list.findIndex(m => m.userId === profile.userId);
            if (cIdx >= 0) {
              list[cIdx].isStudying = isRealStudy;
              list[cIdx].statusType = statusType;
              list[cIdx].statusLabel = statusLabel;
              list[cIdx].studySubject = isRealStudy ? safeSubject : '';
              list[cIdx].subject = isRealStudy ? safeSubject : '';
              list[cIdx].lastHeartbeat = isRealStudy ? now : 0;
            }
            localStorage.setItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`, JSON.stringify(list));
          }
        }
      } catch (e) {}
    });

    // Also sweep any other cached rosters/lists in localStorage when timer is stopped to ensure user is never stuck
    if (!isRealStudy) {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.startsWith(LEADERBOARD_STORAGE_KEYS.GROUP_ROSTER_PREFIX) || key.startsWith(LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX))) {
            const val = localStorage.getItem(key);
            if (val && val.includes(profile.userId)) {
              const arr = JSON.parse(val);
              if (Array.isArray(arr)) {
                let mutated = false;
                arr.forEach(item => {
                  if (item.userId === profile.userId && item.isStudying) {
                    item.isStudying = false;
                    item.statusType = 'stopped';
                    item.statusLabel = '';
                    item.studySubject = '';
                    item.subject = '';
                    item.lastHeartbeat = 0;
                    mutated = true;
                  }
                });
                if (mutated) localStorage.setItem(key, JSON.stringify(arr));
              }
            }
          }
        }
      } catch (_) {}
    }

    // 2. Post lightweight status update to server
    const promises = targetGroups.map(async (grp) => {
      const groupCode = String(grp.code || grp.groupCode).trim().toUpperCase();
      if (!groupCode) return;

      const avatar = profile.avatar_url || profile.avatarUrl || profile.avatar || profile.photo_url || '';
      const payload = {
        action: 'set_status',
        groupCode: groupCode,
        userId: profile.userId,
        nickname: profile.nickname,
        name: profile.nickname,
        target: profile.target,
        avatar_url: avatar,
        avatarUrl: avatar,
        avatar: avatar,
        photo_url: avatar,
        isStudying: isRealStudy,
        statusType: statusType,
        statusLabel: statusLabel,
        subject: isRealStudy ? safeSubject : '',
        studySubject: isRealStudy ? safeSubject : '',
        lastHeartbeat: isRealStudy ? now : 0
      };

      const endpoints = [`${API_BASE_URL}/api/leaderboard.php`, `${API_BASE_URL}/api/v1/leaderboard.php`];
      for (const endpoint of endpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            },
            body: JSON.stringify(payload),
            keepalive: isUnload
          });
          if (res.ok) {
            return await res.json().catch(() => ({ success: true }));
          }
        } catch (e) {}
      }
    });

    try {
      await Promise.allSettled(promises);
      return { success: true, isStudying: isRealStudy, statusType, statusLabel, subject: isRealStudy ? safeSubject : '', lastHeartbeat: isRealStudy ? now : 0 };
    } catch (e) {
      return { success: false, offline: true };
    }
  },

  /**
   * Event-Driven: Sends immediate status to squad
   */
  startStudyHeartbeat(subject = '', statusType = 'study') {
    this._currentStudySubject = subject || '';
    if (this._studyHeartbeatInterval) {
      if (typeof this._studyHeartbeatInterval !== 'boolean') {
        clearInterval(this._studyHeartbeatInterval);
      }
      this._studyHeartbeatInterval = null;
    }
    this._studyHeartbeatInterval = true;

    const isStudyMode = (statusType === 'study');
    this.setStudyStatus(isStudyMode, this._currentStudySubject, false, statusType).catch(() => {});
  },

  /**
   * Event-Driven: Notifies squad immediately on timer stop (isStudying: false)
   */
  stopStudyHeartbeat() {
    if (this._studyHeartbeatInterval) {
      if (typeof this._studyHeartbeatInterval !== 'boolean') {
        clearInterval(this._studyHeartbeatInterval);
      }
      this._studyHeartbeatInterval = null;
    }
    this._currentStudySubject = '';
    this.setStudyStatus(false, '', false, 'stopped').catch(() => {});
  },

  /**
   * Syncs study score strictly inside a single private squad
   */
  async syncSingleGroupScore(groupData) {
    if (!groupData) return { success: false, noGroup: true };
    const profile = this.getUserProfile();
    const stats = this.getTodayStats();
    const weekStats = this.getWeeklyStats();
    const allStats = (db && typeof db.getStudyStatsByPeriod === 'function') ? db.getStudyStatsByPeriod('all') : stats;
    const groupCode = String(groupData.code || groupData.groupCode || groupData.room_code || groupData.id || '').trim().toUpperCase();
    if (!groupCode || groupCode === 'UNDEFINED' || groupCode === 'NULL' || groupCode === '0') {
      return { success: false, noGroup: true, message: 'کد گروه معتبر نیست.' };
    }
    const groupName = String(groupData.name || groupData.groupName || `گروه ${groupCode}`).trim();
    const myRoster = this.getGroupRoster(groupCode).find(m => m.userId === profile.userId) || {};
    const isStudyingNow = this.isCurrentStudyingActive();
    const currentSub = isStudyingNow ? (this._currentStudySubject || myRoster.studySubject || '') : '';

    const avatar = profile.avatar_url || profile.avatarUrl || profile.avatar || profile.photo_url || '';
    const payload = {
      action: 'sync',
      groupCode: groupCode,
      groupName: groupName,
      userId: profile.userId,
      nickname: profile.nickname,
      name: profile.nickname,
      target: profile.target,
      avatar_url: avatar,
      avatarUrl: avatar,
      avatar: avatar,
      photo_url: avatar,
      syncCode: profile.syncCode || this.getOrCreateSyncCode(),
      studyMinutes: stats.studyMinutes,
      testCount: stats.testCount,
      weeklyStudyMinutes: Math.max(Number(weekStats.studyMinutes || 0), Number(stats.studyMinutes || 0)),
      weeklyTestCount: Math.max(Number(weekStats.testCount || 0), Number(stats.testCount || 0)),
      allTimeStudyMinutes: Math.max(Number(allStats.studyMinutes || 0), Number(weekStats.studyMinutes || 0), Number(stats.studyMinutes || 0)),
      allTimeTestCount: Math.max(Number(allStats.testCount || 0), Number(weekStats.testCount || 0), Number(stats.testCount || 0)),
      subjects: stats.subjects || [],
      isStudying: isStudyingNow,
      subject: currentSub,
      studySubject: currentSub,
      lastHeartbeat: isStudyingNow ? Date.now() : 0,
      date: stats.gregorianDate,
      updatedAt: Date.now()
    };

    const endpoints = [`${API_BASE_URL}/api/leaderboard.php`, `${API_BASE_URL}/api/v1/leaderboard.php`];
    for (const endpoint of endpoints) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          },
          body: JSON.stringify(payload)
        });

        const rawText = await res.text();
        let data = null;
        try {
          data = rawText ? JSON.parse(rawText) : null;
        } catch (parseErr) {
          data = null;
        }

        if (res.ok && data && data.success !== false) {
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.LAST_SYNC, String(Date.now()));
          const rawSyncList = data.list || data.leaderboard || [];
          const list = Array.isArray(rawSyncList) ? rawSyncList.map(normalizeLeaderboardItem) : [];

          if (list.length > 0) {
            localStorage.setItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`, JSON.stringify(list));
            localStorage.setItem(LEADERBOARD_STORAGE_KEYS.CACHE_DATE, stats.gregorianDate);
          } else {
            this.updateLocalGroupCacheWithUser(groupCode, payload);
          }

          if (Array.isArray(data.roster) && data.roster.length > 0) {
            this.saveGroupRoster(groupCode, data.roster);
          }

          return {
            success: true,
            serverConfirmed: true,
            endpoint,
            rank: data.rank,
            groupCode: groupCode,
            groupName: data.groupName || groupName,
            leaderboard: list,
            list: list,
            entry: payload,
            message: data.message || 'کارنامه با موفقیت در گروه اختصاصی ثبت شد.'
          };
        }
      } catch (err) {
        console.error('[Leaderboard] Sync failed for group', groupCode, err);
      }
    }

    this.updateLocalGroupCacheWithUser(groupCode, payload);
    const cached = this.getCachedLeaderboard(stats.gregorianDate, groupCode);
    return {
      success: false,
      serverConfirmed: false,
      offline: true,
      entry: payload,
      groupCode: groupCode,
      groupName: groupName,
      leaderboard: cached.leaderboard,
      message: 'ثبت محلی در گروه انجام شد (سرور موقتاً در دسترس نیست).'
    };
  },

  /**
   * Alias for syncUserScore
   */
  async syncUserProgress() {
    return this.syncUserScore();
  },

  /**
   * Fetches group leaderboard from server or returns cached list
   */
  async fetchLeaderboard(date = null, force = false, specificGroupCode = null) {
    const targetDate = date || this.getTodayDateStr();
    const groupCode = specificGroupCode || this.getActiveGroupCode();
    const groups = this.getUserGroups();
    const groupData = groups.find(g => g.code === groupCode) || this.getActiveGroup();

    if (!groupCode) {
      return {
        success: true,
        noGroup: true,
        fromCache: false,
        leaderboard: [],
        list: [],
        date: targetDate
      };
    }

    try {
      const cacheBuster = force ? `&_t=${Date.now()}` : '';
      let res = await fetch(`${API_BASE_URL}/api/leaderboard.php?groupCode=${groupCode}&date=${targetDate}${cacheBuster}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      if (!res.ok) {
        res = await fetch(`${API_BASE_URL}/api/v1/leaderboard.php?groupCode=${groupCode}&date=${targetDate}${cacheBuster}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
      }

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        data = null;
      }

      if (res.ok && data) {
        const rawList = data.list || data.leaderboard;
        if (data.success && Array.isArray(rawList)) {
          const isStudyingNow = this.isCurrentStudyingActive();
          const list = rawList.map(raw => {
            const item = normalizeLeaderboardItem(raw);
            if (item.userId === profile.userId) {
              item.isStudying = isStudyingNow;
              if (!isStudyingNow) {
                item.studySubject = '';
                item.subject = '';
                item.lastHeartbeat = 0;
              }
            }
            return item;
          });
          localStorage.setItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`, JSON.stringify(list));
          localStorage.setItem(LEADERBOARD_STORAGE_KEYS.CACHE_DATE, targetDate);

          if (Array.isArray(data.roster)) {
            const updatedRoster = data.roster.map(m => {
              if (m.userId === profile.userId) {
                return {
                  ...m,
                  isStudying: isStudyingNow,
                  studySubject: isStudyingNow ? (m.studySubject || '') : '',
                  subject: isStudyingNow ? (m.subject || '') : '',
                  lastHeartbeat: isStudyingNow ? (m.lastHeartbeat || Date.now()) : 0
                };
              }
              return m;
            });
            this.saveGroupRoster(groupCode, updatedRoster);
          }

          if (groupData) {
            groupData.members = list;
            this.setUserGroupData({
              ...groupData,
              members: list,
              ...(data.groupName ? { name: data.groupName, groupName: data.groupName } : {})
            });
          }

          return {
            success: true,
            fromCache: false,
            leaderboard: list,
            list: list,
            groupCode,
            groupName: data.groupName || (groupData ? (groupData.name || groupData.groupName) : `گروه ${groupCode}`),
            groupData: this.getUserGroupData() || groupData,
            date: targetDate
          };
        }
      }
      throw new Error('Non-success leaderboard response');
    } catch (err) {
      console.warn('Leaderboard fetch failed, falling back to local group cache:', err);
      return this.getCachedLeaderboard(targetDate, groupCode);
    }
  },

  /**
   * Retrieves cached group leaderboard combining persistent roster and today's activity
   */
  getCachedLeaderboard(targetDate = null, specificGroupCode = null) {
    const date = targetDate || this.getTodayDateStr();
    const groupCode = specificGroupCode || this.getActiveGroupCode();
    const groups = this.getUserGroups();
    const groupData = groups.find(g => g.code === groupCode) || this.getActiveGroup();

    if (!groupCode) {
      return {
        success: true,
        noGroup: true,
        fromCache: true,
        offline: true,
        leaderboard: [],
        list: [],
        date
      };
    }

    const roster = this.getGroupRoster(groupCode);
    const cachedStr = localStorage.getItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`);
    let cachedList = [];

    if (cachedStr) {
      try {
        cachedList = JSON.parse(cachedStr);
      } catch (e) {
        cachedList = [];
      }
    }
    if (!Array.isArray(cachedList)) cachedList = [];

    const profile = this.getUserProfile();
    const stats = this.getTodayStats();

    // Map by userId to merge persistent roster with scores
    const memberMap = new Map();

    // 1. Fill all enrolled roster members first with calculated period stats
    roster.forEach(m => {
      const todayCalc = this.calculateMemberPeriodStats(m, 'today');
      const weekCalc = this.calculateMemberPeriodStats(m, 'week');
      const allCalc = this.calculateMemberPeriodStats(m, 'all');

      memberMap.set(m.userId, {
        userId: m.userId,
        nickname: m.nickname || 'داوطلب',
        target: m.target || 'کنکور سراسری',
        avatarUrl: m.avatarUrl || '',
        studyMinutes: Math.max(Number(m.studyMinutes || 0), todayCalc.totalMinutes),
        testCount: Math.max(Number(m.testCount || 0), todayCalc.totalTests),
        weeklyStudyMinutes: Math.max(Number(m.weeklyStudyMinutes || 0), weekCalc.totalMinutes),
        weeklyTestCount: Math.max(Number(m.weeklyTestCount || 0), weekCalc.totalTests),
        allTimeStudyMinutes: Math.max(Number(m.allTimeStudyMinutes || 0), allCalc.totalMinutes),
        allTimeTestCount: Math.max(Number(m.allTimeTestCount || 0), allCalc.totalTests),
        subjects: m.subjects || [],
        dailyLogs: m.dailyLogs || m.logs || m.history || [],
        history: m.history || [],
        isOwner: !!m.isOwner,
        joinedAt: m.joinedAt || Date.now(),
        date: date,
        isStudying: Boolean(m.isStudying),
        studySubject: m.studySubject || m.subject || '',
        subject: m.studySubject || m.subject || '',
        lastHeartbeat: m.lastHeartbeat || 0,
        updatedAt: m.joinedAt || Date.now()
      });
    });

    // 2. Overlay cached daily stats (normalized to ensure weekly/alltime fields)
    cachedList.forEach(rawItem => {
      if (rawItem && rawItem.userId) {
        const item = normalizeLeaderboardItem(rawItem);
        const existing = memberMap.get(item.userId) || {};
        const todayCalc = this.calculateMemberPeriodStats(item, 'today');
        const weekCalc = this.calculateMemberPeriodStats(item, 'week');
        const allCalc = this.calculateMemberPeriodStats(item, 'all');

        memberMap.set(item.userId, {
          ...existing,
          ...item,
          studyMinutes: Math.max(Number(existing.studyMinutes || 0), Number(item.studyMinutes || 0), todayCalc.totalMinutes),
          testCount: Math.max(Number(existing.testCount || 0), Number(item.testCount || 0), todayCalc.totalTests),
          weeklyStudyMinutes: Math.max(Number(existing.weeklyStudyMinutes || 0), Number(item.weeklyStudyMinutes || 0), weekCalc.totalMinutes),
          weeklyTestCount: Math.max(Number(existing.weeklyTestCount || 0), Number(item.weeklyTestCount || 0), weekCalc.totalTests),
          allTimeStudyMinutes: Math.max(Number(existing.allTimeStudyMinutes || 0), Number(item.allTimeStudyMinutes || 0), allCalc.totalMinutes),
          allTimeTestCount: Math.max(Number(existing.allTimeTestCount || 0), Number(item.allTimeTestCount || 0), allCalc.totalTests),
          dailyLogs: item.dailyLogs || item.logs || existing.dailyLogs || [],
          history: item.history || existing.history || [],
          isStudying: item.isStudying !== undefined ? Boolean(item.isStudying) : Boolean(existing.isStudying),
          studySubject: item.studySubject || item.subject || existing.studySubject || '',
          subject: item.studySubject || item.subject || existing.subject || '',
          lastHeartbeat: item.lastHeartbeat || existing.lastHeartbeat || 0
        });
      }
    });

    // 3. Overlay current user's live local stats
    const myRoster = roster.find(m => m.userId === profile.userId) || {};
    const isStudyingNow = this.isCurrentStudyingActive();
    const mySubject = isStudyingNow ? (this._currentStudySubject || myRoster.studySubject || myRoster.subject || '') : '';
    const myHeartbeat = isStudyingNow ? Date.now() : 0;

    if (myRoster && myRoster.userId) {
      myRoster.isStudying = isStudyingNow;
      myRoster.studySubject = mySubject;
      myRoster.subject = mySubject;
      myRoster.lastHeartbeat = myHeartbeat;
      this.saveGroupRoster(groupCode, roster);
    }

    const weekStats = this.getWeeklyStats();
    const allStats = (db && typeof db.getStudyStatsByPeriod === 'function') ? db.getStudyStatsByPeriod('all') : stats;

    const currentUserItem = {
      userId: profile.userId,
      nickname: profile.nickname,
      target: profile.target,
      avatarUrl: profile.avatar_url || profile.avatarUrl || '',
      avatar_url: profile.avatar_url || profile.avatarUrl || '',
      studyMinutes: stats.studyMinutes,
      testCount: stats.testCount,
      weeklyStudyMinutes: Math.max(Number(weekStats.studyMinutes || 0), Number(stats.studyMinutes || 0)),
      weeklyTestCount: Math.max(Number(weekStats.testCount || 0), Number(stats.testCount || 0)),
      allTimeStudyMinutes: Math.max(Number(allStats.studyMinutes || 0), Number(weekStats.studyMinutes || 0), Number(stats.studyMinutes || 0)),
      allTimeTestCount: Math.max(Number(allStats.testCount || 0), Number(weekStats.testCount || 0), Number(stats.testCount || 0)),
      subjects: stats.subjects || [],
      date: date,
      isCurrentUser: true,
      isOwner: !!(groupData && groupData.isOwner),
      isStudying: isStudyingNow,
      studySubject: mySubject,
      subject: mySubject,
      lastHeartbeat: myHeartbeat,
      updatedAt: Date.now()
    };
    memberMap.set(profile.userId, currentUserItem);

    const list = Array.from(memberMap.values());
    list.sort((a, b) => {
      if ((b.studyMinutes || 0) !== (a.studyMinutes || 0)) {
        return (b.studyMinutes || 0) - (a.studyMinutes || 0);
      }
      return (b.testCount || 0) - (a.testCount || 0);
    });

    if (groupData) {
      groupData.members = list;
    }

    return {
      success: true,
      fromCache: true,
      offline: true,
      groupCode: groupData ? (groupData.groupCode || groupData.code) : groupCode,
      groupName: groupData ? (groupData.groupName || groupData.name) : `گروه ${groupCode}`,
      groupData,
      leaderboard: list,
      list: list,
      date
    };
  },

  /**
   * Optimistically updates local cache when user syncs
   */
  updateLocalGroupCacheWithUser(groupCode, userEntry) {
    try {
      const roster = this.getGroupRoster(groupCode);
      const existingRosterIdx = roster.findIndex(m => m.userId === userEntry.userId);
      if (existingRosterIdx < 0) {
        roster.push({
          userId: userEntry.userId,
          nickname: userEntry.nickname,
          target: userEntry.target,
          joinedAt: Date.now(),
          isOwner: !!userEntry.isOwner,
          isStudying: Boolean(userEntry.isStudying),
          studySubject: userEntry.studySubject || userEntry.subject || '',
          subject: userEntry.studySubject || userEntry.subject || '',
          lastHeartbeat: userEntry.lastHeartbeat || Date.now()
        });
        this.saveGroupRoster(groupCode, roster);
      } else {
        roster[existingRosterIdx] = {
          ...roster[existingRosterIdx],
          isStudying: userEntry.isStudying !== undefined ? Boolean(userEntry.isStudying) : roster[existingRosterIdx].isStudying,
          studySubject: userEntry.studySubject || userEntry.subject || roster[existingRosterIdx].studySubject || '',
          subject: userEntry.studySubject || userEntry.subject || roster[existingRosterIdx].subject || '',
          lastHeartbeat: userEntry.lastHeartbeat || roster[existingRosterIdx].lastHeartbeat || Date.now()
        };
        this.saveGroupRoster(groupCode, roster);
      }

      const cachedStr = localStorage.getItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`);
      let list = [];
      if (cachedStr) {
        try {
          list = JSON.parse(cachedStr);
        } catch (err) {
          list = [];
        }
      }
      if (!Array.isArray(list)) list = [];

      list = list.filter(x => x.userId !== userEntry.userId);
      list.push({ ...userEntry, isCurrentUser: true });
      list.sort((a, b) => {
        if ((b.studyMinutes || 0) !== (a.studyMinutes || 0)) {
          return (b.studyMinutes || 0) - (a.studyMinutes || 0);
        }
        return (b.testCount || 0) - (a.testCount || 0);
      });
      localStorage.setItem(`${LEADERBOARD_STORAGE_KEYS.GROUP_CACHE_PREFIX}${groupCode}`, JSON.stringify(list));
    } catch (e) {
      console.error('Error updating local group cache:', e);
    }
  },

  // ────────────────────────────────────────────────────────────
  // باشگاه سحرخیزان ☀️ (بازه مجاز ۰۵:۰۰ تا ۰۷:۰۰ به وقت ایران)
  // ────────────────────────────────────────────────────────────

  /**
   * Current Iran clock as "HH:MM" (24h)
   */
  getIranNowHHMM() {
    try {
      const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
      return f.format(new Date());
    } catch (e) {
      const d = new Date();
      return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    }
  },

  /**
   * True only between 05:00 and 07:00 Iran time
   */
  isEarlyBirdWindowOpen() {
    const [h, m] = this.getIranNowHHMM().split(':').map(Number);
    const mins = (h * 60) + (m || 0);
    return mins >= EARLY_BIRD_WINDOW.START_MIN && mins <= EARLY_BIRD_WINDOW.END_MIN;
  },

  /**
   * Personal wake-up history: { 'YYYY-MM-DD': 'HH:MM' }
   */
  getEarlyBirdHistory() {
    try {
      const raw = localStorage.getItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_HISTORY);
      const parsed = raw ? JSON.parse(raw) : {};
      return (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) ? parsed : {};
    } catch (e) {
      return {};
    }
  },

  /**
   * Helper to accurately parse any session start time into minutes from midnight (0..1439)
   */
  extractSessionStartMinutes(s) {
    if (!s || typeof s !== 'object') return null;

    const parseToMins = (val) => {
      if (val === null || val === undefined || val === '') return null;
      if (typeof val === 'string') {
        const clean = String(val).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).trim();
        const match = clean.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);
        if (match) {
          const h = Number(match[1]);
          const m = Number(match[2]);
          if (!isNaN(h) && !isNaN(m) && h >= 0 && h < 24 && m >= 0 && m < 60) {
            return (h * 60) + m;
          }
        }
        const num = Number(clean);
        if (!isNaN(num) && num > 100000000000) {
          val = num;
        } else {
          const d = new Date(clean);
          if (!isNaN(d.getTime())) val = d.getTime();
        }
      }

      if (typeof val === 'number' && !isNaN(val)) {
        const d = new Date(val);
        if (!isNaN(d.getTime())) {
          // 1. Check in Iran local timezone (Asia/Tehran)
          try {
            const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
            const parts = f.format(d).split(':').map(Number);
            if (!isNaN(parts[0]) && !isNaN(parts[1])) {
              const iranMins = (parts[0] * 60) + parts[1];
              if (iranMins >= EARLY_BIRD_WINDOW.START_MIN && iranMins <= EARLY_BIRD_WINDOW.END_MIN) return iranMins;
            }
          } catch (_) {}
          // 2. Fallback: local browser time
          const localMins = (d.getHours() * 60) + d.getMinutes();
          if (localMins >= EARLY_BIRD_WINDOW.START_MIN && localMins <= EARLY_BIRD_WINDOW.END_MIN) return localMins;
          // 3. Fallback: UTC hours
          const utcMins = (d.getUTCHours() * 60) + d.getUTCMinutes();
          if (utcMins >= EARLY_BIRD_WINDOW.START_MIN && utcMins <= EARLY_BIRD_WINDOW.END_MIN) return utcMins;
          return localMins;
        }
      }
      return null;
    };

    const candidates = [s.startTimeStr, s.startTime, s.start_time, s.time];
    for (const c of candidates) {
      const mins = parseToMins(c);
      if (mins !== null) return mins;
    }

    const durMins = Math.max(1, Number(s.duration || s.minutes) || 1);
    const endCandidates = [s.endTimeStr, s.endTime, s.end_time, s.timestamp, s.createdAt, s.created_at];
    for (const ec of endCandidates) {
      const endMins = parseToMins(ec);
      if (endMins !== null) {
        const calcStart = endMins - durMins;
        if (calcStart >= 0) return calcStart;
      }
    }

    return null;
  },

  /**
   * Today's locally stored wake time, or auto-detected from logged session (05:00 - 07:00), or null
   */
  getTodayWakeTime() {
    const history = this.getEarlyBirdHistory();
    const todayStr = this.getTodayDateStr();
    if (history[todayStr]) {
      const cleanT = String(history[todayStr]).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).trim();
      const [h, m] = cleanT.split(':').map(Number);
      const mins = (!isNaN(h) && !isNaN(m)) ? (h * 60 + m) : null;
      if (mins !== null && mins >= EARLY_BIRD_WINDOW.START_MIN && mins <= EARLY_BIRD_WINDOW.END_MIN) {
        return cleanT;
      }
    }

    try {
      const ebStatusStr = localStorage.getItem('early_bird_daily_status');
      if (ebStatusStr) {
        const ebStatus = JSON.parse(ebStatusStr);
        if (ebStatus.date === todayStr) {
          return ebStatus.time;
        } else {
          localStorage.removeItem('early_bird_daily_status');
          // Force Server Wipe
          if (typeof window !== 'undefined' && window.personalSyncService && typeof window.personalSyncService.pushToCloud === 'function') {
            window.personalSyncService.pushToCloud();
          }
        }
      }
    } catch(e) {
      localStorage.removeItem('early_bird_daily_status');
    }

    // Original auto-detect was buggy, so we skip it to rely on direct user check-in.
    // If the user hasn't explicitly checked in, we return null to allow them to check in today.

    return null;
  },

  /**
   * Today's early bird info object, or null
   */
  getTodayEarlyBird() {
    const wakeTime = this.getTodayWakeTime();
    if (!wakeTime) return null;
    return { wakeTime, wake_time: wakeTime, date: this.getTodayDateStr() };
  },

  saveEarlyBirdLocal(dateStr, wakeTime) {
    try {
      const history = this.getEarlyBirdHistory();
      history[dateStr] = wakeTime;
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.error('[EarlyBird] ذخیره تاریخچه محلی ناموفق بود:', e);
    }
  },

  /**
   * Records today's wake-up: saves locally, then POSTs to /api/earlybird
   */
  async recordEarlyBird() {
    const profile = this.getUserProfile();
    const dateStr = this.getTodayDateStr();
    const wakeTime = this.getIranNowHHMM();

    if (!this.isEarlyBirdWindowOpen()) {
      return {
        success: false,
        outsideWindow: true,
        wakeTime,
        message: 'ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.'
      };
    }

    // تاریخچه شخصی همیشه محلی ذخیره می‌شود
    this.saveEarlyBirdLocal(dateStr, wakeTime);

    const payload = {
      userId: profile.userId,
      nickname: profile.nickname,
      name: profile.nickname,
      target: profile.target,
      wakeTime,
      date: dateStr
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/earlybird.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify(payload)
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (parseErr) {
        data = null;
      }

      if (!res.ok || !data || data.success === false) {
        const serverMsg = (data && (data.message || data.error)) || (rawText || '').slice(0, 160) || 'پاسخ نامعتبر سرور';
        const errorDetail = `POST /api/earlybird.php → HTTP ${res.status}: ${serverMsg}`;
        console.error('[EarlyBird] ثبت روی سرور ناموفق بود —', errorDetail);
        return {
          success: false,
          serverConfirmed: false,
          wakeTime,
          errorDetail,
          message: (data && data.message) || 'ثبت سحرخیزی روی سرور انجام نشد.'
        };
      }

      if (Array.isArray(data.list)) {
        localStorage.setItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE, JSON.stringify(data.list));
        localStorage.setItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE_DATE, dateStr);
      }
      if (data.entry && data.entry.wakeTime) {
        this.saveEarlyBirdLocal(dateStr, data.entry.wakeTime);
      }

      console.info(`[EarlyBird] ثبت موفق — ساعت ${data.entry?.wakeTime || wakeTime}, رتبه ${data.rank ?? '-'}`);
      return {
        success: true,
        serverConfirmed: true,
        alreadyRecorded: !!data.alreadyRecorded,
        wakeTime: data.entry?.wakeTime || wakeTime,
        rank: data.rank,
        list: data.list || [],
        message: data.message || 'سحرخیزی شما ثبت شد ☀️'
      };
    } catch (err) {
      const errorDetail = `POST /api/earlybird.php → خطای شبکه: ${err.message}`;
      console.error('[EarlyBird] ثبت روی سرور ناموفق بود —', errorDetail);
      return {
        success: false,
        serverConfirmed: false,
        wakeTime,
        errorDetail,
        message: 'ثبت محلی انجام شد اما ارتباط با سرور برقرار نشد.'
      };
    }
  },

  /**
   * Reads today's public early-bird list (server first, local cache as fallback)
   */
  async fetchEarlyBirds(date = null) {
    const targetDate = date || this.getTodayDateStr();
    try {
      const res = await fetch(`${API_BASE_URL}/api/earlybird.php?date=${targetDate}&_t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
      });
      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        data = null;
      }

      if (res.ok && data && data.success && Array.isArray(data.list)) {
        localStorage.setItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE, JSON.stringify(data.list));
        localStorage.setItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE_DATE, targetDate);
        return { success: true, fromCache: false, date: targetDate, list: data.list };
      }
      throw new Error((data && (data.message || data.error)) || `HTTP ${res.status}`);
    } catch (err) {
      console.warn('[EarlyBird] دریافت لیست از سرور ناموفق بود، استفاده از کش محلی:', err.message);
      let list = [];
      if (localStorage.getItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE_DATE) === targetDate) {
        try {
          const cached = JSON.parse(localStorage.getItem(LEADERBOARD_STORAGE_KEYS.EARLY_BIRD_CACHE) || '[]');
          if (Array.isArray(cached)) list = cached;
        } catch (e) {
          list = [];
        }
      }
      return { success: false, offline: true, fromCache: true, date: targetDate, list };
    }
  }
};

if (typeof window !== 'undefined') {
  window.leaderboardService = leaderboardService;
  window.fetchUserGroups = (force = true) => leaderboardService.fetchUserGroups(force);
}


