// Central Cloud Sync Service for PlanEx
import { API_BASE_URL } from '../config.js';
import { db } from '../db.js';

class PersonalSyncService {
  constructor() {
    this.isSyncing = false;
    this.syncInterval = null;
    this.lastPushTimestamp = 0;
  }

  getAuthUser() {
    try {
      return JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch (e) {
      return null;
    }
  }

  exportLocalState() {
    const keysToExport = [
      'planex_hourly_logs',
      'planex_study_logs',
      'planex_recent_activity_sessions',
      'planex_user_profile',
      'planex_user_nickname',
      'planex_user_avatar',
      'planex_habits',
      'planex_routine_checklist',
      'planex_categories',
      'planex_daily_plans',
      'planex_weekly_goals',
      'planex_countdowns',
      'planex_study_targets',
      'planex_flashcards',
      'planex_deleted_habit_ids',
      'planex_deleted_habit_titles'
    ];
    const data = {};
    keysToExport.forEach(k => {
      try {
        const item = localStorage.getItem(k);
        if (item !== null && item !== undefined) {
          try {
            data[k] = JSON.parse(item);
          } catch (_) {
            data[k] = item;
          }
        }
      } catch (_) {}
    });
    return data;
  }

  importLocalState(backupData) {
    if (!backupData || typeof backupData !== 'object') return false;
    if (db && typeof db.importAllDataJSON === 'function') {
      db.importAllDataJSON(backupData);
    }
    return true;
  }

  async pushToCloud(force = false) {
    const auth = this.getAuthUser();
    if (!auth || (!auth.phone && !auth.phone_number)) {
      return { success: false, reason: 'unauthenticated' };
    }
    const phone = auth.phone || auth.phone_number;
    if (this.isSyncing && !force) return { success: false, reason: 'sync_in_progress' };
    this.isSyncing = true;

    try {
      const backupData = this.exportLocalState();
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 3000) : null;
      const res = await fetch(`${API_BASE_URL}/api/sync.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        signal: controller ? controller.signal : undefined,
        body: JSON.stringify({
          action: 'push',
          phone: phone,
          backupData: backupData,
          timestamp: Date.now()
        })
      });
      if (timeoutId) clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));
      this.lastPushTimestamp = Date.now();
      return { success: res.ok && data.success !== false, data };
    } catch (e) {
      console.warn('[PersonalSyncService] Push failed:', e);
      return { success: false, error: e.message };
    } finally {
      this.isSyncing = false;
    }
  }

  async pullFromCloud(customPhone = null) {
    const auth = this.getAuthUser();
    const phone = customPhone || auth?.phone || auth?.phone_number;
    if (!phone) return { success: false, reason: 'no_phone' };

    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 3000) : null;
      const res = await fetch(`${API_BASE_URL}/api/sync.php?action=pull&phone=${encodeURIComponent(phone)}&_t=${Date.now()}`, {
        headers: {
          'Accept': 'application/json'
        },
        signal: controller ? controller.signal : undefined
      });
      if (timeoutId) clearTimeout(timeoutId);
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success && data.backupData) {
        this.importLocalState(data.backupData);
        if (typeof window !== 'undefined' && typeof window.renderApp === 'function') {
          window.renderApp();
        }
        return { success: true, data };
      }
      return { success: false, data };
    } catch (e) {
      console.warn('[PersonalSyncService] Pull failed:', e);
      return { success: false, error: e.message };
    }
  }

  startAutoSync(intervalMs = 30000) {
    if (this.syncInterval) clearInterval(this.syncInterval);
    this.syncInterval = setInterval(() => {
      this.pushToCloud(false).catch(() => {});
    }, intervalMs);
  }

  stopAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }
}

export const personalSyncService = new PersonalSyncService();

if (typeof window !== 'undefined') {
  window.personalSyncService = personalSyncService;
  window.triggerActionDrivenPush = (force = false) => personalSyncService.pushToCloud(force);
}
