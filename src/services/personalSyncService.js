// Personal Cloud Sync Service for PlanEx Web
// Enables seamless full-data, study logs, and study rooms synchronization based on Phone Number

import { db } from '../db.js';
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

    if (activeAvatar && backupData && typeof backupData === 'object') {
      backupData.planex_user_avatar = activeAvatar;
      if (!backupData.planex_user_profile) backupData.planex_user_profile = profile;
      if (backupData.planex_user_profile && typeof backupData.planex_user_profile === 'object') {
        backupData.planex_user_profile.avatar = activeAvatar;
        backupData.planex_user_profile.avatar_url = activeAvatar;
      }
    }

    const payload = {
      phone: phone,
      password: password,
      study_logs: studyLogs,
      rooms: joinedRooms,
      backupData: backupData,
      appState: backupData,
      name: profile.name || profile.nickname || authUser?.name || 'کاربر پلنکس',
      avatar: activeAvatar,
      avatar_url: activeAvatar,
      photo_url: activeAvatar,
      planex_user_avatar: activeAvatar,
      updatedAt: Date.now()
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/sync.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(payload)
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {}

      if (res.ok && data && data.success) {
        // Restore backupData returned from server first
        if (data.backupData && typeof data.backupData === 'object') {
          this.importLocalState(data.backupData);
        }

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
            if (data.user && data.user.name) {
              p.name = data.user.name;
              p.nickname = data.user.name;
            }
            db.setUserProfile(p);
          } catch(e) {}
        }
        db.markPersonalSyncSuccess();

        // Merge rooms returned from server
        if (Array.isArray(data.rooms) && data.rooms.length > 0) {
          localStorage.setItem('planex_my_groups', JSON.stringify(data.rooms));
          localStorage.setItem('planex_my_rooms', JSON.stringify(data.rooms));
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups(data.rooms);
          }
        }

        // Merge study logs returned from server into both planex_study_logs and planex_recent_activity_sessions
        if (Array.isArray(data.study_logs) && data.study_logs.length > 0) {
          if (db && typeof db.saveStudyLogs === 'function') {
            db.saveStudyLogs(data.study_logs);
          } else {
            localStorage.setItem('planex_study_logs', JSON.stringify(data.study_logs));
            localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(data.study_logs));
          }
        }

        if (db) {
          db._breakdownMemoMap = {};
        }

        // CRITICAL: Force Dashboard and charts to re-render to reflect new synced data
        if (typeof window !== 'undefined') {
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
      const res = await fetch(`${API_BASE_URL}/api/sync.php?phone=${encodeURIComponent(phone)}&_t=${Date.now()}`, {
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

        const pulledAvatar = json.backupData?.planex_user_avatar || (typeof json.backupData?.planex_user_profile === 'object' ? json.backupData.planex_user_profile?.avatar : null) || json.user?.avatar_url || json.user?.avatar || json.user?.photo_url || null;
        const currentAvatar = (typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_user_avatar') || '') : '');
        const targetAvatar = (pulledAvatar && !pulledAvatar.includes('dicebear.com')) ? pulledAvatar : (currentAvatar || pulledAvatar);

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
            if (json.user && json.user.name) {
              p.name = json.user.name;
              p.nickname = json.user.name;
            }
            db.setUserProfile(p);
          } catch(e) {}
        }
        if (Array.isArray(json.rooms) && json.rooms.length > 0) {
          localStorage.setItem('planex_my_groups', JSON.stringify(json.rooms));
          localStorage.setItem('planex_my_rooms', JSON.stringify(json.rooms));
          if (db && typeof db.setUserGroups === 'function') {
            db.setUserGroups(json.rooms);
          }
        }
        if (Array.isArray(json.study_logs) && json.study_logs.length > 0) {
          if (db && typeof db.saveStudyLogs === 'function') {
            db.saveStudyLogs(json.study_logs);
          } else {
            localStorage.setItem('planex_study_logs', JSON.stringify(json.study_logs));
            localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(json.study_logs));
          }
        }
        if (db) {
          db._breakdownMemoMap = {};
        }
        db.markPersonalSyncSuccess();

        // CRITICAL: Force Dashboard and charts to re-render
        if (typeof window !== 'undefined') {
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

if (typeof window !== 'undefined') {
  window.personalSyncService = personalSyncService;
  window.triggerAutoSync = triggerAutoSync;
  window.updateCloudSyncIndicatorUI = updateCloudSyncIndicatorUI;
}
