// Personal Cloud Sync Service for PlanEx Web
// Enables seamless full-data, study logs, and study rooms synchronization based on Phone Number

import { db, applyVerifiedUserIdentity, isPlaceholderProfileName } from '../db.js';
import { API_BASE_URL } from '../config.js';

export function normalizePhone(rawPhone) {
  if (!rawPhone) return '';
  let p = String(rawPhone).trim();
  p = p.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  p = p.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  p = p.replace(/[^0-9]/g, '');

  if (p.startsWith('00989')) {
    p = '0' + p.slice(4);
  } else if (p.startsWith('0989')) {
    p = '0' + p.slice(3);
  } else if (p.startsWith('989')) {
    p = '0' + p.slice(2);
  } else if (p.startsWith('9') && p.length === 10) {
    p = '0' + p;
  }
  return p;
}

export const personalSyncService = {
  /**
   * Retrieves or creates a personal sync token
   */
  getOrCreateSyncToken() {
    return db.getOrCreatePersonalSyncToken();
  },

  /**
   * Concurrency bookkeeping: the last server-assigned document version we have
   * hydrated locally. Sent with every push so sync.php can reject stale writes
   * from a device that missed an intermediate merge.
   */
  _getBaseVersion() {
    try {
      return parseInt(localStorage.getItem('planex_sync_base_version') || '0', 10) || 0;
    } catch (e) {
      return 0;
    }
  },

  _setBaseVersion(v) {
    try {
      if (v !== null && v !== undefined && !isNaN(parseInt(v, 10))) {
        localStorage.setItem('planex_sync_base_version', String(parseInt(v, 10)));
      }
    } catch (e) {}
  },

  /**
   * Client-side union-merge for arrays of records (study logs / rooms).
   * Mirrors the server's dedupe-by-identity strategy so a post-push pull can
   * fold server reality into localStorage without ever dropping local records.
   */
  _mergeRecordArrays(existingArr, incomingArr) {
    const toArr = (a) => (Array.isArray(a) ? a : []);
    const identity = (rec) => {
      if (!rec || typeof rec !== 'object') return 's:' + String(rec);
      for (const k of ['id', 'uuid', '_id', 'sessionId', 'session_id', 'logId', 'roomCode', 'code']) {
        if (rec[k] !== undefined && rec[k] !== null && String(rec[k]) !== '') {
          return 'k:' + k + ':' + String(rec[k]).toLowerCase();
        }
      }
      let sig = '';
      for (const f of ['date', 'dateStr', 'startTime', 'start', 'timestamp', 'subject', 'duration', 'minutes']) {
        if (rec[f] !== undefined && rec[f] !== null) sig += f + '=' + String(rec[f]) + ';';
      }
      return sig ? 'c:' + sig : 'h:' + JSON.stringify(rec);
    };
    const tsOf = (rec) => {
      if (!rec || typeof rec !== 'object') return 0;
      const t = rec.updatedAt ?? rec.updated_at ?? rec.timestamp ?? rec.savedAt;
      const n = Number(t);
      if (!isNaN(n) && n > 0) return n < 1e11 ? n * 1000 : n;
      return 0;
    };
    const map = new Map();
    toArr(existingArr).forEach(r => map.set(identity(r), r));
    toArr(incomingArr).forEach(r => {
      const key = identity(r);
      const prev = map.get(key);
      if (!prev || tsOf(r) >= tsOf(prev)) map.set(key, r);
    });
    return Array.from(map.values());
  },

  /**
   * Sets custom sync token
   */
  setSyncToken(token) {
    return db.setPersonalSyncToken(token);
  },

  /**
   * Returns current sync status
   */
  getSyncStatus() {
    return db.getPersonalSyncInfo();
  },

  /**
   * Exports full local app state as structured JSON
   */
  exportLocalState() {
    try {
      const jsonStr = db.exportAllDataJSON();
      return JSON.parse(jsonStr);
    } catch (e) {
      console.warn('[PersonalSync] db.exportAllDataJSON failed, using fallback:', e);
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
   * Imports and restores full app state into localStorage
   */
  importLocalState(appState) {
    if (!appState) return false;
    try {
      return db.importAllDataJSON(appState);
    } catch (e) {
      console.error('[PersonalSync] Import failed:', e);
      return false;
    }
  },

  /**
   * Pushes complete personal data to Cloudflare backend under the user's Mobile Phone
   */
  async pushToCloud(customPhone = null) {
    let authUser = null;
    try {
      authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch(e) {}

    const profile = (db && typeof db.getUserProfile === 'function') ? db.getUserProfile() : {};
    const phone = normalizePhone(customPhone || authUser?.phone || authUser?.phone_number || profile.phone || '');
    const password = authUser?.password || '';
    const backupData = this.exportLocalState();

    if (!phone) {
      return { success: false, message: 'شماره تلفن کاربر یافت نشد.' };
    }

    let joinedRooms = [];
    try {
      joinedRooms = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
    } catch (e) {
      joinedRooms = [];
    }

    let studyLogs = [];
    try {
      const recent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      const logs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      const map = new Map();
      [...recent, ...logs].forEach(s => {
        if (!s || typeof s !== 'object') return;
        const key = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
        map.set(key, s);
      });
      studyLogs = Array.from(map.values());
    } catch (e) {
      studyLogs = [];
    }

    const storedAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_avatar') || '') : '');
    const activeAvatar = storedAvatar || profile.avatar || profile.avatar_url || profile.photo || authUser?.avatar_url || authUser?.avatar || authUser?.photo_url || '';

    // ── IDENTITY GUARD: force the outgoing top-level name/avatar to the freshest
    // verified identity. Priority: planex_identity_verified_* (set by the profile
    // editor / login / pull) > fresh db.getUserProfile() fields > auth record,
    // and NEVER a placeholder like "دانش‌آموز پرتلاش" or "کاربر پلنکس".
    let payloadName = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_name') || '') : '');
    if (!payloadName || isPlaceholderProfileName(payloadName)) {
      payloadName = profile.name || profile.nickname || authUser?.name || authUser?.full_name || '';
    }
    if (isPlaceholderProfileName(payloadName)) payloadName = '';

    let payloadAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_avatar') || '') : '');
    if (!payloadAvatar) payloadAvatar = activeAvatar;

    if (backupData && typeof backupData === 'object') {
      if (payloadName) {
        backupData.planex_user_nickname = payloadName;
        backupData.planex_leaderboard_nickname = payloadName;
        if (!backupData.planex_user_profile || typeof backupData.planex_user_profile !== 'object') {
          backupData.planex_user_profile = { ...(profile || {}) };
        }
        backupData.planex_user_profile.name = payloadName;
        backupData.planex_user_profile.nickname = payloadName;
        if (authUser && typeof authUser === 'object') {
          backupData.planex_auth_user = { ...authUser, name: payloadName, full_name: payloadName };
        }
      }
      if (payloadAvatar) {
        backupData.planex_user_avatar = payloadAvatar;
        if (!backupData.planex_user_profile || typeof backupData.planex_user_profile !== 'object') {
          backupData.planex_user_profile = { ...(profile || {}) };
        }
        backupData.planex_user_profile.avatar = payloadAvatar;
        backupData.planex_user_profile.avatar_url = payloadAvatar;
      }
    }

    const payload = {
      phone: phone,
      password: password,
      study_logs: studyLogs,
      rooms: joinedRooms,
      backupData: backupData,
      appState: backupData,
      name: payloadName || 'کاربر پلنکس',
      avatar: payloadAvatar,
      avatar_url: payloadAvatar,
      photo_url: payloadAvatar,
      planex_user_avatar: payloadAvatar,
      updatedAt: Date.now(),
      // Concurrency: the document version this local state was derived from.
      // sync.php uses it (plus updatedAt) to reject stale overwrites.
      _version: this._getBaseVersion()
    };

    try {
      // Re-read the verified identity at send time (it may have been updated by
      // EditProfileModal / login while this function was being prepared) so the
      // wire payload strictly contains the user's actual input.
      const liveVerifiedName = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_name') || '') : '');
      if (liveVerifiedName && !isPlaceholderProfileName(liveVerifiedName)) {
        payload.name = liveVerifiedName;
        if (payload.backupData && typeof payload.backupData === 'object') {
          payload.backupData.planex_user_nickname = liveVerifiedName;
        }
      }
      const liveVerifiedAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_avatar') || '') : '');
      if (liveVerifiedAvatar) {
        payload.avatar = liveVerifiedAvatar;
        payload.avatar_url = liveVerifiedAvatar;
        payload.photo_url = liveVerifiedAvatar;
        payload.planex_user_avatar = liveVerifiedAvatar;
      }

      const res = await fetch(`${API_BASE_URL}/api/sync.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({ action: 'save', ...payload })
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {}

      if (res.ok && data && data.success) {
        // Server echo of the identity we just pushed — re-commit it as the
        // verified identity AFTER restoring backupData so a stale server blob
        // can never downgrade the freshly saved name/avatar.
        const echoedName = payloadName || (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_name') || '') : '');
        const echoedAvatar = payloadAvatar;

        // Restore backupData returned from server first
        if (data.backupData && typeof data.backupData === 'object') {
          this.importLocalState(data.backupData);
        }

        applyVerifiedUserIdentity({
          name: (echoedName && !isPlaceholderProfileName(echoedName)) ? echoedName : undefined,
          avatar: echoedAvatar || undefined
        });

        const returnedAvatar = data.backupData?.planex_user_avatar || (typeof data.backupData?.planex_user_profile === 'object' ? data.backupData.planex_user_profile?.avatar : null) || data.user?.avatar_url || data.user?.avatar;
        const currentAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_avatar') || '') : '');
        const targetAvatar = (returnedAvatar && !returnedAvatar.includes('dicebear.com')) ? returnedAvatar : (currentAvatar || returnedAvatar);

        if (targetAvatar) {
          try {
            localStorage.setItem('planex_user_avatar', targetAvatar);
            let userAccount = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
            userAccount.avatar_url = targetAvatar;
            userAccount.photo_url = targetAvatar;
            userAccount.avatar = targetAvatar;
            localStorage.setItem('planex_auth_user', JSON.stringify(userAccount));
            localStorage.setItem('planex_user_account', JSON.stringify(userAccount));

            let p = db.getUserProfile() || {};
            p.avatar = targetAvatar;
            p.avatar_url = targetAvatar;
            p.photo = targetAvatar;
            p.photoUrl = targetAvatar;
            // Prefer the freshest verified identity over any (possibly stale) server echo
            const latestVerifiedName = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_name') || '') : '');
            const serverName = (data.user && data.user.name && !isPlaceholderProfileName(data.user.name)) ? data.user.name : '';
            const finalPushName = (echoedName && !isPlaceholderProfileName(echoedName)) ? echoedName : (latestVerifiedName || serverName);
            if (finalPushName) {
              p.name = finalPushName;
              p.nickname = finalPushName;
            }
            db.setUserProfile(p);
          } catch(e) {}
        }
        db.markPersonalSyncSuccess();

        // Merge rooms returned from server (union — never lose locally-created rooms)
        if (Array.isArray(data.rooms)) {
          let localRooms = [];
          try { localRooms = JSON.parse(localStorage.getItem('planex_my_groups') || '[]'); } catch (e) { localRooms = []; }
          const mergedRooms = this._mergeRecordArrays(localRooms, data.rooms);
          if (mergedRooms.length > 0) {
            localStorage.setItem('planex_my_groups', JSON.stringify(mergedRooms));
            localStorage.setItem('planex_my_rooms', JSON.stringify(mergedRooms));
            if (db && typeof db.setUserGroups === 'function') {
              db.setUserGroups(mergedRooms);
            }
          }
        }

        // Merge study logs returned from server into both planex_study_logs and
        // planex_recent_activity_sessions (union-merge so Device A's new logs
        // that the server folded in via deep merge are never dropped locally).
        if (Array.isArray(data.study_logs)) {
          let localLogs = [];
          let localRecent = [];
          try { localLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]'); } catch (e) { localLogs = []; }
          try { localRecent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]'); } catch (e) { localRecent = []; }
          const mergedLogs = this._mergeRecordArrays(this._mergeRecordArrays(localLogs, localRecent), data.study_logs);
          if (mergedLogs.length > 0) {
            if (db && typeof db.saveStudyLogs === 'function') {
              db.saveStudyLogs(mergedLogs);
            } else {
              localStorage.setItem('planex_study_logs', JSON.stringify(mergedLogs));
              localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(mergedLogs));
            }
          }
        }

        if (db) {
          db._breakdownMemoMap = {};
        }

        // ── READ-MY-WRITES: immediately pull the newly MERGED server reality ──
        // The server deep-merged our push with every other device's data. Pulling
        // right now folds that merged truth back into localStorage so this device
        // is instantly consistent with the cloud (Device A's study logs appear on
        // Device B and vice versa). Identity Guard + verified-name logic inside
        // pullFromCloud ensure our just-pushed name/avatar survive the restore.
        try {
          await this.pullFromCloud(phone);
        } catch (pullErr) {
          console.warn('[PersonalSync] Post-push reconciliation pull deferred:', pullErr);
        }

        // Re-assert the identity we pushed, AFTER the reconciliation pull, so no
        // stale server echo can downgrade the freshest local edit.
        applyVerifiedUserIdentity({
          name: (echoedName && !isPlaceholderProfileName(echoedName)) ? echoedName : undefined,
          avatar: echoedAvatar || undefined
        });

        // CRITICAL: Force Dashboard and charts to re-render to reflect new synced data
        if (typeof window !== 'undefined') {
          if (typeof window.updateHeaderDOM === 'function') window.updateHeaderDOM();
          window.dispatchEvent(new CustomEvent('profileUpdated'));
          window.dispatchEvent(new CustomEvent('study-logs-updated'));
          window.dispatchEvent(new CustomEvent('sessions-updated'));
          window.dispatchEvent(new CustomEvent('activity-saved', { detail: { sync: true } }));
          if (window.dashboardChartInstances) window.dashboardChartInstances = null;
          if (typeof window.updateCharts === 'function') window.updateCharts();
          if (typeof window.renderApp === 'function') {
            window.renderApp();
          }
        }

        return {
          success: true,
          phone: phone,
          updatedAt: Date.now(),
          message: '☁️ اطلاعات و اتاق‌های مطالعه شما با موفقیت با شماره موبایل همگام‌سازی شد.'
        };
      } else {
        return {
          success: false,
          message: data?.message || `خطا در همگام‌سازی ابری (HTTP ${res.status})`
        };
      }
    } catch (err) {
      return {
        success: false,
        message: 'خطا در ارتباط با سرور: ' + err.message
      };
    }
  },

  /**
   * Pulls and recovers full personal data, study logs and study rooms from Cloudflare backend using Phone Number
   */
  async pullFromCloud(inputPhone = null) {
    let authUser = null;
    try {
      authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch(e) {}

    const profile = (db && typeof db.getUserProfile === 'function') ? db.getUserProfile() : {};
    const phone = normalizePhone(inputPhone || authUser?.phone || authUser?.phone_number || profile.phone || '');

    if (!phone) {
      return { success: false, message: 'شماره موبایل مشخص نیست.' };
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/sync.php?action=get&phone=${encodeURIComponent(phone)}&_t=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });

      const rawText = await res.text();
      let json = null;
      try {
        json = rawText ? JSON.parse(rawText) : null;
      } catch (e) {}

      if (res.ok && json && json.success) {
        if (json.backupData && typeof json.backupData === 'object') {
          this.importLocalState(json.backupData);
        }

        // 1. Extract and update user NAME across all storage keys & DB
        const pulledName = json.user?.name 
          || json.name 
          || json.backupData?.planex_user_nickname 
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.name : null)
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.nickname : null)
          || null;

        if (pulledName && !isPlaceholderProfileName(pulledName)) {
          try {
            localStorage.setItem('planex_user_nickname', pulledName);
            localStorage.setItem('planex_leaderboard_nickname', pulledName);
            
            let userAuth = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
            userAuth.name = pulledName;
            userAuth.full_name = pulledName;
            localStorage.setItem('planex_auth_user', JSON.stringify(userAuth));
            localStorage.setItem('planex_user_account', JSON.stringify(userAuth));

            let p = (db && typeof db.getUserProfile === 'function') ? (db.getUserProfile() || {}) : {};
            p.name = pulledName;
            p.nickname = pulledName;
            if (db && typeof db.setUserProfile === 'function') {
              db.setUserProfile(p);
            }
          } catch(e) {
            console.warn('[PersonalSync] Error updating pulled name:', e);
          }
        }

        // 2. Extract and update user AVATAR across all storage keys & DB
        const pulledAvatar = json.user?.avatar_url 
          || json.user?.avatar 
          || json.user?.photo_url 
          || json.avatar_url 
          || json.avatar 
          || json.backupData?.planex_user_avatar 
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.avatar : null) 
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.avatar_url : null) 
          || null;

        const currentAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_avatar') || '') : '');
        const verifiedAvatarLocal = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_identity_verified_avatar') || '') : '');
        const targetAvatar = (pulledAvatar && !pulledAvatar.includes('dicebear.com'))
          ? pulledAvatar
          : (verifiedAvatarLocal || currentAvatar || pulledAvatar);

        if (targetAvatar) {
          try {
            localStorage.setItem('planex_user_avatar', targetAvatar);
            let userAccount = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
            userAccount.avatar_url = targetAvatar;
            userAccount.photo_url = targetAvatar;
            userAccount.avatar = targetAvatar;
            localStorage.setItem('planex_auth_user', JSON.stringify(userAccount));
            localStorage.setItem('planex_user_account', JSON.stringify(userAccount));

            let p = (db && typeof db.getUserProfile === 'function') ? (db.getUserProfile() || {}) : {};
            p.avatar = targetAvatar;
            p.avatar_url = targetAvatar;
            p.photo = targetAvatar;
            p.photoUrl = targetAvatar;
            if (db && typeof db.setUserProfile === 'function') {
              db.setUserProfile(p);
            }
          } catch(e) {
            console.warn('[PersonalSync] Error updating pulled avatar:', e);
          }
        }

        // ── IDENTITY GUARD: commit the pulled identity as verified so subsequent
        // backup restores / re-renders can never fall back to the placeholder.
        applyVerifiedUserIdentity({
          name: (pulledName && !isPlaceholderProfileName(pulledName)) ? pulledName : null,
          avatar: targetAvatar || null
        });
        if (Array.isArray(json.rooms) && json.rooms.length > 0) {
          localStorage.setItem('planex_my_groups', JSON.stringify(json.rooms));
          localStorage.setItem('planex_my_rooms', JSON.stringify(json.rooms));
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups(json.rooms);
          }
        }
        if (Array.isArray(json.study_logs) && json.study_logs.length > 0) {
          let localLogs = [];
          try { localLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]'); } catch (e) { localLogs = []; }
          const mergedPulledLogs = this._mergeRecordArrays(localLogs, json.study_logs);
          if (db && typeof db.saveStudyLogs === 'function') {
            db.saveStudyLogs(mergedPulledLogs);
          } else {
            localStorage.setItem('planex_study_logs', JSON.stringify(mergedPulledLogs));
            localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(mergedPulledLogs));
          }
        }
        if (db) {
          db._breakdownMemoMap = {};
        }
        db.markPersonalSyncSuccess();

        // Track the server document version we just hydrated for concurrency checks.
        this._setBaseVersion(json._version);

        // CRITICAL: Force Dashboard and charts to re-render
        if (typeof window !== 'undefined') {
          // Immediately patch header DOM with the latest name/avatar before full re-render
          if (typeof window.updateHeaderDOM === 'function') window.updateHeaderDOM();
          window.dispatchEvent(new CustomEvent('profileUpdated'));
          window.dispatchEvent(new CustomEvent('auth-changed'));
          window.dispatchEvent(new CustomEvent('study-logs-updated'));
          window.dispatchEvent(new CustomEvent('sessions-updated'));
          window.dispatchEvent(new CustomEvent('activity-saved', { detail: { sync: true } }));
          if (window.dashboardChartInstances) window.dashboardChartInstances = null;
          if (typeof window.updateCharts === 'function') window.updateCharts();
          if (typeof window.renderApp === 'function') {
            window.renderApp();
          }
        }

        return {
          success: true,
          phone: phone,
          data: json,
          message: '🎉 تمام اطلاعات، سوابق و اتاق‌های مطالعه با موفقیت بازیابی شدند!'
        };
      } else {
        return {
          success: false,
          message: json?.message || 'اطلاعاتی برای این شماره در سرور یافت نشد.'
        };
      }
    } catch (err) {
      return {
        success: false,
        message: 'خطا در بازیابی اطلاعات: ' + err.message
      };
    }
  }
};

let _autoSyncDebounceTimeout = null;
let _isAutoSyncing = false;

export function updateCloudSyncIndicatorUI() {
  if (typeof document === 'undefined') return;
  const el = document.getElementById('cloud-sync-status-indicator');
  if (!el) return;

  const syncState = (typeof window !== 'undefined' ? window.cloudSyncState : null) || 'idle';
  let inner = '';
  let title = 'همگام‌سازی خودکار ابری';

  if (syncState === 'syncing') {
    inner = `
      <svg class="spin-sync" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    `;
    title = 'در حال همگام‌سازی خودکار با فضای ابری...';
  } else if (syncState === 'synced') {
    inner = `
      <span style="font-size: 0.82rem; position: relative; display: inline-flex; align-items: center; justify-content: center;">
        ☁️<span style="position: absolute; bottom: -1px; right: -2px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></span>
      </span>
    `;
    title = 'همگام‌سازی خودکار: اطلاعات در فضای ابری ذخیره شدند ✅';
  } else if (syncState === 'offline') {
    inner = `
      <span style="font-size: 0.82rem; opacity: 0.5;">☁️</span>
    `;
    title = 'آفلاین — ذخیره در دستگاه انجام شد؛ همگام‌سازی پس از اتصال اینترنت فعال می‌شود';
  } else {
    inner = `<span style="font-size: 0.82rem;">☁️</span>`;
    title = 'همگام‌سازی ابری — کلیک برای همگام‌سازی آنی';
  }

  el.innerHTML = inner;
  el.title = title;
}

export async function triggerAutoSync(forceImmediate = false) {
  if (typeof window === 'undefined') return;

  // Auto-sync is disabled to prevent Cloudflare KV rate limit exhaustion.
  // Only explicit user trigger or forceImmediate=true is allowed.
  if (!forceImmediate) {
    return;
  }

  window.cloudSyncState = 'syncing';
  updateCloudSyncIndicatorUI();

  const doSync = async () => {
    if (_isAutoSyncing) return;
    _isAutoSyncing = true;
    try {
      if (window.navigator && !window.navigator.onLine) {
        window.cloudSyncState = 'offline';
        updateCloudSyncIndicatorUI();
        return;
      }

      // Personal Cloud Full State Backup
      if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pushToCloud === 'function') {
        await personalSyncService.pushToCloud();
      }

      // Leaderboard Score Sync
      const lb = window.leaderboardService;
      if (lb && typeof lb.syncUserScore === 'function') {
        await lb.syncUserScore(true).catch(err => console.warn('[AutoSync] Squad score sync deferred:', err));
      }

      window.cloudSyncState = 'synced';
      updateCloudSyncIndicatorUI();

      window.dispatchEvent(new CustomEvent('cloud-sync-complete', { detail: { timestamp: Date.now() } }));

      setTimeout(() => {
        if (window.cloudSyncState === 'synced') {
          window.cloudSyncState = 'idle';
          updateCloudSyncIndicatorUI();
        }
      }, 3500);
    } catch (err) {
      console.warn('[AutoSync] Background sync deferred:', err);
      window.cloudSyncState = 'error';
      updateCloudSyncIndicatorUI();
    } finally {
      _isAutoSyncing = false;
    }
  };

  if (forceImmediate) {
    if (_autoSyncDebounceTimeout) clearTimeout(_autoSyncDebounceTimeout);
    doSync().catch(e => console.warn('[AutoSync] Error:', e));
  } else {
    if (_autoSyncDebounceTimeout) clearTimeout(_autoSyncDebounceTimeout);
    _autoSyncDebounceTimeout = setTimeout(() => {
      doSync().catch(e => console.warn('[AutoSync] Debounced error:', e));
    }, 500);
  }
}

// ══════════════════════════════════════════════
// ─── Smart Sync Engine ───
// ══════════════════════════════════════════════

let _lastFocusPullTime = 0;
let _smartSyncInterval = null;
let _actionPushDebounceTimeout = null;

/**
 * 1. Focus-driven Sync:
 * Runs pullFromCloud() silently when tab becomes visible or receives focus.
 * Debounced to at most once per 10 seconds to avoid spamming server on rapid tab switching.
 */
export function handleFocusDrivenSync() {
  if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;
  const now = Date.now();
  if (now - _lastFocusPullTime < 10000) return;
  _lastFocusPullTime = now;

  if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pullFromCloud === 'function') {
    personalSyncService.pullFromCloud().catch(err => {
      console.warn('[SmartSync] Focus-driven pull deferred:', err);
    });
  }
}

/**
 * 2. Interval-driven Sync (60s):
 * Periodically pulls data from server every 60 seconds in the background.
 */
export function startSmartSyncInterval() {
  if (typeof window === 'undefined') return;
  if (_smartSyncInterval) clearInterval(_smartSyncInterval);

  _smartSyncInterval = setInterval(() => {
    if (window.navigator && !window.navigator.onLine) return;
    if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pullFromCloud === 'function') {
      personalSyncService.pullFromCloud().catch(err => {
        console.warn('[SmartSync] Interval-driven pull deferred:', err);
      });
    }
  }, 60000);
}

/**
 * 3. Action-driven Sync:
 * Immediately triggers pushToCloud() (debounced by 300ms) when user completes an action
 * (e.g. task added/toggled, pomodoro finished, profile saved).
 */
export function triggerActionDrivenPush(delayMs = 300) {
  if (typeof window === 'undefined') return;
  if (_actionPushDebounceTimeout) clearTimeout(_actionPushDebounceTimeout);

  _actionPushDebounceTimeout = setTimeout(() => {
    if (window.navigator && !window.navigator.onLine) return;
    if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pushToCloud === 'function') {
      personalSyncService.pushToCloud().catch(err => {
        console.warn('[SmartSync] Action-driven push deferred:', err);
      });
    }
  }, delayMs);
}

if (typeof window !== 'undefined') {
  // 1. Focus-driven Event Listeners
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') handleFocusDrivenSync();
  });
  window.addEventListener('focus', handleFocusDrivenSync);

  // 2. Start 60-Second Interval Sync
  startSmartSyncInterval();

  // 3. Listen for activity saving (pomodoro finish / manual log)
  window.addEventListener('activity-saved', () => {
    triggerActionDrivenPush(300);
  });

  window.personalSyncService = personalSyncService;
  window.triggerAutoSync = triggerAutoSync;
  window.updateCloudSyncIndicatorUI = updateCloudSyncIndicatorUI;
  window.handleFocusDrivenSync = handleFocusDrivenSync;
  window.startSmartSyncInterval = startSmartSyncInterval;
  window.triggerActionDrivenPush = triggerActionDrivenPush;
}
