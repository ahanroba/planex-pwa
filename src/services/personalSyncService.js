// Personal Cloud Sync Service for PlanEx Web
// Enables seamless full-data, study logs, and study rooms synchronization based on Phone Number

import { db, isPlaceholderName } from '../db.js';
import { API_BASE_URL } from '../config.js';

if (typeof window !== 'undefined') {
  window.isUserActivelyTyping = false;
  if (typeof document !== 'undefined') {
    document.addEventListener('focusin', (e) => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || (t.hasAttribute && t.hasAttribute('contenteditable')) || t.isContentEditable)) {
        window.isUserActivelyTyping = true;
      }
    });
    document.addEventListener('focusout', (e) => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || (t.hasAttribute && t.hasAttribute('contenteditable')) || t.isContentEditable)) {
        window.isUserActivelyTyping = false;
      }
    });
  }
}

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
   * LOCAL-FIRST: Push is fire-and-forget. Local data is never overwritten by server response.
   */
  _isPushingNow: false,
  async pushToCloud(customPhone = null, overrideName = null, overrideAvatar = null) {
    // Re-entrancy guard: skip if a push is already in flight
    if (this._isPushingNow) return { success: false, message: 'Push already in progress' };
    this._isPushingNow = true;
    try {
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

    if (overrideName) {
      try {
        localStorage.setItem('planex_user_nickname', overrideName);
        localStorage.setItem('planex_leaderboard_nickname', overrideName);
      } catch(e){}
    }
    if (overrideAvatar) {
      try {
        localStorage.setItem('planex_user_avatar', overrideAvatar);
      } catch(e){}
    }

    // 1. Force Payload: Explicitly grab absolute latest name & avatar from localStorage right before sending
    const rawNickname = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_nickname') || localStorage.getItem('planex_leaderboard_nickname') || '') : '');
    const activeName = overrideName || rawNickname || profile.name || profile.nickname || authUser?.full_name || authUser?.name || 'کاربر پلنکس';

    const storedAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_avatar') || '') : '');
    const activeAvatar = overrideAvatar || storedAvatar || profile.avatar || profile.avatar_url || profile.photo || authUser?.avatar_url || authUser?.avatar || authUser?.photo_url || '';

    if (backupData && typeof backupData === 'object') {
      // OVERWRITE root level keys
      backupData.planex_user_nickname = activeName;
      backupData.planex_nickname = activeName;
      backupData.planex_leaderboard_nickname = activeName;
      backupData.planex_user_avatar = activeAvatar;
      
      // Delete any conflicting legacy keys that might resurrect
      delete backupData['planex_user_profile.name'];
      delete backupData['planex_user_profile.nickname'];
      delete backupData['planex_user_profile.avatar'];

      if (!backupData.planex_user_profile) backupData.planex_user_profile = profile;
      if (backupData.planex_user_profile && typeof backupData.planex_user_profile === 'object') {
        backupData.planex_user_profile.name = activeName;
        backupData.planex_user_profile.nickname = activeName;
        backupData.planex_user_profile.avatar = activeAvatar;
        backupData.planex_user_profile.avatar_url = activeAvatar;
      }

      // Purge ghost data in serialized auth objects if they exist in backupData
      if (backupData.planex_auth_user) {
        try {
          let authData = typeof backupData.planex_auth_user === 'string' ? JSON.parse(backupData.planex_auth_user) : backupData.planex_auth_user;
          authData.name = activeName;
          authData.full_name = activeName;
          authData.nickname = activeName;
          authData.avatar_url = activeAvatar;
          authData.avatar = activeAvatar;
          backupData.planex_auth_user = typeof backupData.planex_auth_user === 'string' ? JSON.stringify(authData) : authData;
        } catch(e){}
      }
      if (backupData.planex_user_account) {
        try {
          let accData = typeof backupData.planex_user_account === 'string' ? JSON.parse(backupData.planex_user_account) : backupData.planex_user_account;
          accData.name = activeName;
          accData.full_name = activeName;
          accData.nickname = activeName;
          accData.avatar_url = activeAvatar;
          accData.avatar = activeAvatar;
          backupData.planex_user_account = typeof backupData.planex_user_account === 'string' ? JSON.stringify(accData) : accData;
        } catch(e){}
      }
    }

    const payload = {
      phone: phone,
      password: password,
      study_logs: studyLogs,
      rooms: joinedRooms,
      backupData: backupData,
      appState: backupData,
      name: activeName,
      nickname: activeName,
      planex_user_nickname: activeName,
      avatar: activeAvatar,
      avatar_url: activeAvatar,
      photo_url: activeAvatar,
      planex_user_avatar: activeAvatar,
      updatedAt: Date.now()
    };

    try {
      // 4. Kill API Cache: Append _t timestamp parameter & set no-store
      const res = await fetch(`${API_BASE_URL}/api/sync.php?_t=${Date.now()}`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        },
        body: JSON.stringify({ action: 'save', ...payload })
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {}

      if (res.ok && data && data.success) {
        // LOCAL-FIRST: Do NOT import server backupData back into local storage.
        // The local database is the absolute source of truth.
        // Push is a one-way upload — we never let the server overwrite local state after a push.

        db.markPersonalSyncSuccess();

        if (db) {
          db._breakdownMemoMap = {};
        }

        // Surgical DOM update for header only (no renderApp, no event dispatches)
        if (typeof window !== 'undefined') {
          if (typeof window.updateHeaderDOM === 'function') window.updateHeaderDOM();
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
      // LOCAL-FIRST: Fail silently — never revert or delete local data on network failure
      console.warn('[Sync Push] Background push deferred:', err.message);
      return {
        success: false,
        message: 'خطا در ارتباط با سرور: ' + err.message
      };
    }
    } finally {
      this._isPushingNow = false;
    }
  },

  /**
   * Pulls and recovers full personal data, study logs and study rooms from Cloudflare backend using Phone Number
   * LOCAL-FIRST: Pull only merges genuinely new external data. Never overwrites newer local data.
   */
  _isPullingNow: false,
  async pullFromCloud(inputPhone = null) {
    // Re-entrancy guard: skip if a pull is already in flight
    if (this._isPullingNow) return { success: false, message: 'Pull already in progress' };
    this._isPullingNow = true;
    try {
    if (typeof document !== 'undefined') {
      const active = document.activeElement;
      const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
      if (isTyping) {
        console.log('Sync aborted: User is typing');
        return { success: false, message: 'همگام‌سازی موقتاً متوقف شد زیرا در حال تایپ هستید.' };
      }
    }

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
      // 4. Kill API Cache: Append _t timestamp parameter & set no-store
      const res = await fetch(`${API_BASE_URL}/api/sync.php?action=get&phone=${encodeURIComponent(phone)}&_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });

      const rawText = await res.text();
      let json = null;
      try {
        json = rawText ? JSON.parse(rawText) : null;
      } catch (e) {}

      if (res.ok && json && json.success) {
        // Extract pulled name & avatar from server response
        const pulledName = json.user?.name 
          || json.name 
          || json.backupData?.planex_user_nickname 
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.name : null)
          || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.nickname : null)
          || null;

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
        const targetAvatar = (pulledAvatar && !pulledAvatar.includes('dicebear.com')) ? pulledAvatar : (pulledAvatar || currentAvatar);

        let isDataChanged = false;

        // Pre-patch backupData so importLocalState does not pollute localStorage with stale values
        if (json.backupData && typeof json.backupData === 'object') {
          // INTERCEPT: WIPE STALE EARLY BIRD DATA FROM PAYLOAD
          const cleanEbStale = (payloadObj) => {
            if (payloadObj && payloadObj.early_bird_daily_status) {
              try {
                const ebData = typeof payloadObj.early_bird_daily_status === 'string'
                  ? JSON.parse(payloadObj.early_bird_daily_status)
                  : payloadObj.early_bird_daily_status;
                const todayStr = (window.leaderboardService && window.leaderboardService.getTodayDateStr) ? window.leaderboardService.getTodayDateStr() : new Date().toLocaleDateString('fa-IR');
                if (ebData.date !== todayStr) {
                  delete payloadObj.early_bird_daily_status;
                  if (typeof window !== 'undefined') window._forceEbWipe = true;
                }
              } catch (e) {
                delete payloadObj.early_bird_daily_status;
                if (typeof window !== 'undefined') window._forceEbWipe = true;
              }
            }
          };
          
          cleanEbStale(json.backupData);
          if (json.appState && typeof json.appState === 'object') {
            cleanEbStale(json.appState);
          }

          if (pulledName && !isPlaceholderName(pulledName)) {
            json.backupData.planex_user_nickname = pulledName;
            if (!json.backupData.planex_user_profile) json.backupData.planex_user_profile = {};
            json.backupData.planex_user_profile.name = pulledName;
            json.backupData.planex_user_profile.nickname = pulledName;
          }
          if (targetAvatar) {
            json.backupData.planex_user_avatar = targetAvatar;
            if (!json.backupData.planex_user_profile) json.backupData.planex_user_profile = {};
            json.backupData.planex_user_profile.avatar = targetAvatar;
            json.backupData.planex_user_profile.avatar_url = targetAvatar;
          }
          const cleanTimestamps = (obj) => {
            if (!obj || typeof obj !== 'object') return obj;
            const cloned = JSON.parse(JSON.stringify(obj));
            const volatileKeys = ['updatedAt', 'updated_at', 'last_sync', 'lastSync', 'timestamp', 'early_bird_daily_status'];
            
            const deepClean = (target) => {
              if (Array.isArray(target)) {
                target.forEach(item => deepClean(item));
              } else if (target && typeof target === 'object') {
                for (const key of volatileKeys) {
                  if (key in target) delete target[key];
                }
                for (const key in target) {
                  if (Object.prototype.hasOwnProperty.call(target, key)) {
                    if (typeof target[key] === 'string' && (target[key].startsWith('{') || target[key].startsWith('['))) {
                      try {
                        const parsed = JSON.parse(target[key]);
                        deepClean(parsed);
                        target[key] = JSON.stringify(parsed);
                      } catch (e) {}
                    } else {
                      deepClean(target[key]);
                    }
                  }
                }
              }
            };
            
            deepClean(cloned);
            return cloned;
          };
          const oldBackupStr = JSON.stringify(cleanTimestamps(this.exportLocalState() || {}));
          const newBackupStr = JSON.stringify(cleanTimestamps(json.backupData));
          if (oldBackupStr !== newBackupStr) {
            isDataChanged = true;
            this.importLocalState(json.backupData);
          }
        }

        // 3. Force UI Update: Overwrite all name & avatar localStorage keys immediately with server's response
        if (pulledName && !isPlaceholderName(pulledName)) {
          try {
            const oldName = localStorage.getItem('planex_user_nickname');
            if (oldName !== pulledName) isDataChanged = true;
            
            localStorage.setItem('planex_user_nickname', pulledName);
            localStorage.setItem('planex_leaderboard_nickname', pulledName);
            localStorage.setItem('planex_nickname', pulledName);
            
            let userAuth = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
            userAuth.name = pulledName;
            userAuth.full_name = pulledName;
            userAuth.nickname = pulledName;
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

        if (targetAvatar) {
          try {
            const oldAvatar = localStorage.getItem('planex_user_avatar');
            if (oldAvatar !== targetAvatar) isDataChanged = true;
            
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

        if (Array.isArray(json.rooms) && json.rooms.length > 0) {
          const oldRoomsStr = localStorage.getItem('planex_my_groups') || '[]';
          const newRoomsStr = JSON.stringify(json.rooms);
          if (oldRoomsStr !== newRoomsStr) {
            isDataChanged = true;
            localStorage.setItem('planex_my_groups', newRoomsStr);
            localStorage.setItem('planex_my_rooms', newRoomsStr);
            if (db && typeof db.setUserGroups === 'function') {
              db.setUserGroups(json.rooms);
            }
          }
        }
        if (Array.isArray(json.study_logs) && json.study_logs.length > 0) {
          const oldLogsStr = localStorage.getItem('planex_study_logs') || '[]';
          const newLogsStr = JSON.stringify(json.study_logs);
          if (oldLogsStr !== newLogsStr) {
            isDataChanged = true;
            if (db && typeof db.saveStudyLogs === 'function') {
              db.saveStudyLogs(json.study_logs);
            } else {
              localStorage.setItem('planex_study_logs', newLogsStr);
              localStorage.setItem('planex_recent_activity_sessions', newLogsStr);
            }
          }
        }
        if (db && isDataChanged) {
          db._breakdownMemoMap = {};
        }
        db.markPersonalSyncSuccess();

        // 3. Force UI Update: updateHeaderDOM + direct DOM element selection
        if (typeof window !== 'undefined') {
          if (typeof window.updateHeaderDOM === 'function') window.updateHeaderDOM();

          const effectiveName = pulledName || localStorage.getItem('planex_user_nickname') || '';
          const effectiveAvatar = targetAvatar || localStorage.getItem('planex_user_avatar') || '';

          if (effectiveName) {
            document.querySelectorAll('#btn-header-user-account span:last-child, .user-nickname-display, #profile-display-name-val, .profile-name-text').forEach(el => {
              if (el.tagName === 'INPUT') {
                if (document.activeElement !== el && el.value !== effectiveName) el.value = effectiveName;
              } else {
                if (document.activeElement !== el && el.innerText !== effectiveName) el.innerText = effectiveName;
              }
            });
            const profileInput = document.getElementById('profile-display-name');
            if (profileInput && document.activeElement !== profileInput && profileInput.value !== effectiveName) {
              profileInput.value = effectiveName;
            }
          }

          if (effectiveAvatar) {
            const cacheBuster = effectiveAvatar.includes('?') ? `&t=${Date.now()}` : `?t=${Date.now()}`;
            const finalAvatarUrl = effectiveAvatar.startsWith('http') ? `${effectiveAvatar}${cacheBuster}` : effectiveAvatar;
            document.querySelectorAll('#btn-header-user-account img, #main-header-avatar, #main-avatar-preview, .user-avatar-img').forEach(imgEl => {
              if (imgEl && imgEl.tagName === 'IMG' && imgEl.src !== finalAvatarUrl) imgEl.src = finalAvatarUrl;
            });
          }

          if (isDataChanged) {
            // LOCAL-FIRST: No renderApp() call — only surgical DOM + chart updates
            // Do NOT dispatch events that would re-trigger pushToCloud (infinite loop)
            if (window.dashboardChartInstances) window.dashboardChartInstances = null;
            if (typeof window.updateCharts === 'function') window.updateCharts();
          }

          if (typeof window !== 'undefined' && window._forceEbWipe) {
            window._forceEbWipe = false;
            // Force server wipe now that the local state is cleaned
            setTimeout(() => {
              if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pushToCloud === 'function') {
                personalSyncService.pushToCloud();
              }
            }, 500);
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
      // LOCAL-FIRST: Fail silently — never revert or delete local data on network failure
      console.warn('[Sync Pull] Background pull deferred:', err.message);
      return {
        success: false,
        message: 'خطا در بازیابی اطلاعات: ' + err.message
      };
    }
    } finally {
      this._isPullingNow = false;
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
 * 1. Focus-driven & Load-driven Sync:
 * Runs pullFromCloud() when app opens, reloads, receives focus, tab becomes visible, or reconnects online.
 * Throttled to at most once per 2 seconds (unless forced) to prevent rapid redundant calls.
 */
export function handleFocusDrivenSync(force = false) {
  if (typeof document !== 'undefined') {
    const active = document.activeElement;
    const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    if (isTyping) {
      console.log('Sync aborted: User is typing');
      return;
    }
  }

  if (typeof document !== 'undefined') {
    if (document.visibilityState !== 'visible') return;

    if (typeof window !== 'undefined' && window.appState && window.appState.activeModal === 'editProfile') {
      return;
    }
  }

  const now = Date.now();
  if (!force && now - _lastFocusPullTime < 2000) return;
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
    if (typeof document !== 'undefined') {
      const active = document.activeElement;
      const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
      if (isTyping) {
        console.log('Sync aborted: User is typing');
        return;
      }
    }
    if (window.navigator && !window.navigator.onLine) return;
    
    if (typeof window !== 'undefined' && window.appState && window.appState.activeModal === 'editProfile') return;

    if (typeof personalSyncService !== 'undefined' && typeof personalSyncService.pullFromCloud === 'function') {
      personalSyncService.pullFromCloud().catch(err => {
        console.warn('[SmartSync] Interval-driven pull deferred:', err);
      });
    }
  }, 60000);
}

/**
 * 3. Action-driven Sync:
 * Automatically triggers pushToCloud() (debounced by default 150ms) when user completes an action
 * (e.g. room created/joined, profile saved, study session completed).
 */
export function triggerActionDrivenPush(delayMs = 150) {
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
  // 1. Initial Load & Focus/Visibility Event Listeners for Instant Auto-Pull
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => handleFocusDrivenSync(true), 100);
  } else {
    window.addEventListener('DOMContentLoaded', () => handleFocusDrivenSync(true));
    window.addEventListener('load', () => handleFocusDrivenSync(true));
  }

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') handleFocusDrivenSync(true);
  });
  window.addEventListener('focus', () => handleFocusDrivenSync(true));
  window.addEventListener('online', () => handleFocusDrivenSync(true));

  // 2. Start 60-Second Interval Sync
  startSmartSyncInterval();

  // 3. Comprehensive Auto-Push Event Listeners for State Changes:
  // - Profile saves
  // - Study timer completion & log creation
  // - Room / Group creation, joining, modification
  const autoPushEvents = [
    'activity-saved',
    'study-logs-updated',
    'sessions-updated',
    'pomodoro-completed',
    'profileUpdated',
    'auth-changed',
    'rooms-updated',
    'groups-updated',
    'room-created',
    'room-joined',
    'room-modified'
  ];

  autoPushEvents.forEach(evtName => {
    window.addEventListener(evtName, () => {
      triggerActionDrivenPush(150);
    });
  });

  // Listen for storage changes across tabs/windows
  window.addEventListener('storage', (e) => {
    if (!e.key) return;
    if (
      e.key === 'planex_user_nickname' ||
      e.key === 'planex_user_avatar' ||
      e.key === 'planex_my_groups' ||
      e.key === 'planex_my_rooms' ||
      e.key === 'planex_study_logs' ||
      e.key === 'planex_recent_activity_sessions'
    ) {
      triggerActionDrivenPush(200);
    }
  });

  window.personalSyncService = personalSyncService;
  window.triggerAutoSync = triggerAutoSync;
  window.updateCloudSyncIndicatorUI = updateCloudSyncIndicatorUI;
  window.handleFocusDrivenSync = handleFocusDrivenSync;
  window.startSmartSyncInterval = startSmartSyncInterval;
  window.triggerActionDrivenPush = triggerActionDrivenPush;
}
