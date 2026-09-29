// Storage & Database Engine for PlanEx Web

// ماتریس آیزنهاور: ربع‌های مجاز اولویت تسک‌ها
const VALID_PRIORITIES = ['Q1', 'Q2', 'Q3', 'Q4'];
const FALLBACK_PRIORITY = 'Q2';

const STORAGE_KEYS = {
  WEEKS: 'planex_weeks',
  CURRENT_WEEK_ID: 'planex_current_week_id',
  HOURLY_LOGS: 'planex_hourly_logs',
  CATEGORIES: 'planex_categories',
  HABITS: 'planex_habits',
  DAILY_PLANS: 'planex_daily_plans',
  WEEKLY_GOALS: 'planex_weekly_goals',
  STUDY_TARGETS: 'planex_study_targets',
  EVALUATIONS: 'planex_evaluations',
  INTERRUPTIONS: 'planex_interruptions',
  REMINDERS: 'planex_reminders',
  GAMIFICATION: 'planex_gamification',
  GRATITUDE_NOTES: 'planex_gratitude_notes',
  COUNTDOWN_EVENTS: 'planex_countdown_events',
  USER_PROFILE: 'planex_user_profile',
  CUSTOM_SUBJECTS: 'planex_custom_subjects',
  RECORDED_TIMER: 'planex_recorded_timer',
  ACTIVE_THEME: 'planex_active_theme',
  FLASHCARDS: 'planex_flashcards',
  USER_GROUP_DATA: 'planex_user_group_data',
  USER_GROUPS: 'planex_user_groups',
  ACTIVE_GROUP_CODE: 'planex_active_group_code',
  PERSONAL_SYNC_TOKEN: 'planex_personal_sync_token',
  LAST_PERSONAL_SYNC: 'planex_last_personal_sync'
};

import { ACTIVITY_PALETTE_24, DEFAULT_CATEGORIES, DEFAULT_NON_STUDY_CATEGORIES, formatStudyTime, getNextActivityColor, isStudyCategory } from './constants.js';


export function isPlaceholderName(n) {
  if (!n || typeof n !== 'string') return true;
  const clean = n.trim().replace(/\u200C/g, ' ').replace(/\s+/g, ' ');
  return (
    clean === '' ||
    clean === 'کاربر' ||
    clean.toLowerCase() === 'x'
  );
}

class DatabaseEngine {

  // 100% Local Export & Import Engine
  exportAllDataJSON() {
    const backupObj = {};
    const [jy, jm, jd] = this.getTodayJalali();
    backupObj._backup_metadata = {
      app: 'PlanEx Time Manager',
      version: '1.0.0',
      exportDate: `${jy}/${jm}/${jd}`,
      exportedAt: new Date().toISOString()
    };

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
        } catch(e) {
          backupObj[key] = localStorage.getItem(key);
        }
      }
    }

    // Explicitly guarantee planex_user_avatar is preserved in export
    const storedAvatar = localStorage.getItem('planex_user_avatar');
    if (storedAvatar) {
      backupObj['planex_user_avatar'] = storedAvatar;
    }

    return JSON.stringify(backupObj, null, 2);
  }

  importAllDataJSON(jsonInput) {
    try {
      const data = typeof jsonInput === 'string' ? JSON.parse(jsonInput) : jsonInput;
      if (typeof data !== 'object' || data === null) throw new Error("فرمت فایل پشتیبان معتبر نیست.");
      
      const localCustomName = this.getEffectiveUserName();

      Object.keys(data).forEach(key => {
        if (key === '_backup_metadata') return;
        const val = data[key];
        if (val === null || val === undefined) return;

        // Never overwrite existing valid user groups with an empty array from backup data
        if ((key === STORAGE_KEYS.USER_GROUPS || key === 'planex_user_groups' || key === 'planex_my_groups' || key === 'planex_my_rooms') && Array.isArray(val) && val.length === 0) {
          const currentGroups = this.getUserGroups();
          if (currentGroups && currentGroups.length > 0) {
            return;
          }
        }

        // Never overwrite existing non-empty study logs with an empty array from backup data
        if ((key === 'planex_recent_activity_sessions' || key === 'planex_study_logs') && Array.isArray(val)) {
          if (val.length === 0) {
            try {
              const existingRecent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
              const existingLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
              if ((Array.isArray(existingRecent) && existingRecent.length > 0) || (Array.isArray(existingLogs) && existingLogs.length > 0)) {
                return;
              }
            } catch (_) {}
          } else {
            // Merge incoming non-empty logs with local logs so no sessions are lost
            try {
              const existing = JSON.parse(localStorage.getItem(key) || '[]');
              if (Array.isArray(existing) && existing.length > 0) {
                const map = new Map();
                [...existing, ...val].forEach(s => {
                  if (!s || typeof s !== 'object') return;
                  const k = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
                  map.set(k, s);
                });
                const merged = Array.from(map.values());
                localStorage.setItem(key, JSON.stringify(merged));
                return;
              }
            } catch (_) {}
          }
        }

        // Never overwrite a custom local nickname with a default placeholder from backup data
        if ((key === 'planex_user_nickname' || key === 'planex_nickname' || key === 'planex_leaderboard_nickname') && typeof val === 'string') {
          if (localCustomName && isPlaceholderName(val)) {
            return;
          }
        }

        if (key === STORAGE_KEYS.USER_PROFILE && typeof val === 'object' && val !== null) {
          if (localCustomName && isPlaceholderName(val.name)) {
            val.name = localCustomName;
            val.nickname = localCustomName;
          }
        }

        if (typeof val === 'object') {
          localStorage.setItem(key, JSON.stringify(val));
        } else {
          localStorage.setItem(key, String(val));
        }
      });

      // Ensure avatar is explicitly restored across all profile and auth stores
      try {
        const importedAvatar = data.planex_user_avatar || data.avatar || (typeof data.planex_user_profile === 'object' ? data.planex_user_profile?.avatar || data.planex_user_profile?.avatar_url : null) || (typeof data.planex_auth_user === 'object' ? data.planex_auth_user?.avatar_url : null);
        if (importedAvatar) {
          localStorage.setItem('planex_user_avatar', importedAvatar);
          const prof = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE) || '{}');
          prof.avatar = importedAvatar;
          prof.avatar_url = importedAvatar;
          prof.photo = importedAvatar;
          prof.photoUrl = importedAvatar;
          localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(prof));

          const auth = JSON.parse(localStorage.getItem('planex_auth_user') || '{}');
          if (auth && typeof auth === 'object' && Object.keys(auth).length > 0) {
            auth.avatar_url = importedAvatar;
            auth.photo_url = importedAvatar;
            auth.avatar = importedAvatar;
            localStorage.setItem('planex_auth_user', JSON.stringify(auth));
            localStorage.setItem('planex_user_account', JSON.stringify(auth));
          }
          if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(new CustomEvent('profileUpdated'));
          }
        }
      } catch (_) {}

      this.hydrateAndSyncState();
      return true;
    } catch(err) {
      console.error('Import failed:', err);
      throw err;
    }
  }

  getEffectiveUserName() {
    try {
      const candidates = [
        localStorage.getItem('planex_user_nickname'),
        localStorage.getItem('planex_nickname'),
        localStorage.getItem('planex_leaderboard_nickname')
      ];

      try {
        const p = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE) || '{}');
        if (p) {
          candidates.push(p.nickname);
          candidates.push(p.name);
          candidates.push(p.displayName);
        }
      } catch (_) {}

      try {
        const auth = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
        if (auth) {
          candidates.push(auth.full_name);
          candidates.push(auth.name);
          candidates.push(auth.nickname);
          candidates.push(auth.first_name);
        }
      } catch (_) {}

      for (const cand of candidates) {
        if (cand && typeof cand === 'string' && !isPlaceholderName(cand)) {
          return cand.trim();
        }
      }
    } catch (_) {}

    return '';
  }

  hydrateAndSyncState() {
    try {
      // 1. Sync & preserve effective user nickname across all profile storage locations
      const effectiveName = this.getEffectiveUserName();
      if (effectiveName) {
        localStorage.setItem('planex_user_nickname', effectiveName);
        localStorage.setItem('planex_nickname', effectiveName);
        localStorage.setItem('planex_leaderboard_nickname', effectiveName);

        try {
          const prof = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE) || '{}');
          if (prof.name !== effectiveName || prof.nickname !== effectiveName) {
            prof.name = effectiveName;
            prof.nickname = effectiveName;
            localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(prof));
          }
        } catch (_) {}

        try {
          const auth = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
          if (auth && typeof auth === 'object' && Object.keys(auth).length > 0) {
            auth.name = effectiveName;
            auth.full_name = effectiveName;
            auth.nickname = effectiveName;
            localStorage.setItem('planex_auth_user', JSON.stringify(auth));
            localStorage.setItem('planex_user_account', JSON.stringify(auth));
          }
        } catch (_) {}
      }

      // 2. Synchronize recent_activity_sessions and study_logs so neither is lost
      const recent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      const logs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      if (Array.isArray(recent) && Array.isArray(logs)) {
        if (recent.length > 0 || logs.length > 0) {
          const map = new Map();
          [...recent, ...logs].forEach(s => {
            if (!s || typeof s !== 'object') return;
            const k = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
            map.set(k, s);
          });
          const merged = Array.from(map.values());
          merged.sort((a, b) => {
            const tsA = Number(a.timestamp || a.createdAt || 0);
            const tsB = Number(b.timestamp || b.createdAt || 0);
            return tsB - tsA;
          });
          localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(merged));
          localStorage.setItem('planex_study_logs', JSON.stringify(merged));
        }
      }

      this._breakdownMemoMap = {};
    } catch (e) {
      console.warn('[db] hydrateAndSyncState error:', e);
    }
  }

  constructor() {
    this.initDefaults();
    this.hydrateAndSyncState();
  }

  // 100% Precise Standard Gregorian to Jalali Astronomical Algorithm
  gregorianToJalali(gy, gm, gd) {
    const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let gy2 = (gm > 2) ? (gy + 1) : gy;
    let days = 355666 + (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    let jy = -1595 + (33 * Math.floor(days / 12053));
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
      jy += Math.floor((days - 1) / 365);
      days = (days - 1) % 365;
    }
    let jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
    let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
    return [jy, jm, jd];
  }

  jalaliToJdn(jy, jm, jd) {
    let epbase = jy - (jy >= 0 ? 474 : 473);
    let epyear = 474 + (epbase % 2820);
    return jd + (jm <= 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + 1948320;
  }

  jdnToJalali(jdn) {
    let depoch = jdn - this.jalaliToJdn(475, 1, 1);
    let cycle = Math.floor(depoch / 1029983);
    let cday = depoch % 1029983;
    let ycycle;
    if (cday === 1029982) {
      ycycle = 2820;
    } else {
      let a1 = Math.floor(cday / 366);
      let a2 = cday % 366;
      ycycle = Math.floor(((2134 * a1) + (2816 * a2) + 2815) / 1028522) + a1 + 1;
    }
    let jy = 474 + (2820 * cycle) + ycycle;
    let dy = (jdn - this.jalaliToJdn(jy, 1, 1)) + 1;
    let jm, jd;
    if (dy <= 186) {
      jm = Math.ceil(dy / 31);
      jd = dy - (jm - 1) * 31;
    } else {
      jm = Math.ceil((dy - 186) / 30) + 6;
      jd = dy - 186 - (jm - 7) * 30;
    }
    return [jy, jm, jd];
  }

  jdnToGregorian(jdn) {
    let l = jdn + 68569;
    let n = Math.floor((4 * l) / 146097);
    l = l - Math.floor((146097 * n + 3) / 4);
    let i = Math.floor((4000 * (l + 1)) / 1464001);
    l = l - Math.floor((1461 * i) / 4) + 31;
    let j = Math.floor((80 * l) / 2447);
    let gd = l - Math.floor((2447 * j) / 80);
    l = Math.floor(j / 11);
    let gm = j + 2 - 12 * l;
    let gy = 100 * (n - 49) + i + l;
    return [gy, gm, gd];
  }

  getJalaliDateTimestampRange(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const parts = targetDate.split('/').map(Number);
    const jy = parts[0] || 1405;
    const jm = parts[1] || 1;
    const jd = parts[2] || 1;
    const jdn = this.jalaliToJdn(jy, jm, jd);
    const [gy, gm, gd] = this.jdnToGregorian(jdn);

    const startDate = new Date(gy, gm - 1, gd, 0, 0, 0, 0);
    const endDate = new Date(gy, gm - 1, gd, 23, 59, 59, 999);

    return {
      dateStr: targetDate,
      startDate,
      endDate,
      startTimestamp: startDate.getTime(),
      endTimestamp: endDate.getTime()
    };
  }

  getTodayJalali() {
    const now = new Date();
    return this.gregorianToJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
  }

  getTodayJdn() {
    const [jy, jm, jd] = this.getTodayJalali();
    return this.jalaliToJdn(jy, jm, jd);
  }

  // Days in a Jalali month (29/30/31, leap Esfand handled automatically)
  getJalaliMonthLength(jy, jm) {
    const startJdn = this.jalaliToJdn(jy, jm, 1);
    const nextJdn = (jm === 12) ? this.jalaliToJdn(jy + 1, 1, 1) : this.jalaliToJdn(jy, jm + 1, 1);
    return nextJdn - startJdn;
  }

  // How many Saturday-aligned weeks a Jalali month spans.
  // A month can spill into a 6th partial week (e.g. when the 1st falls late in
  // the week); clamping to 5 used to merge those last days into week 5 and
  // silently overwrite its logs.
  getWeeksInMonth(jy, jm) {
    const firstDayJdn = this.jalaliToJdn(jy, jm, 1);
    const offset = (firstDayJdn + 2) % 7;
    return Math.ceil((offset + this.getJalaliMonthLength(jy, jm)) / 7);
  }


  initDefaults() {
    // Weeks are now fully dynamic and calculated on the fly, no need to store them in localStorage
    if (localStorage.getItem(STORAGE_KEYS.WEEKS)) {
      localStorage.removeItem(STORAGE_KEYS.WEEKS);
    }

    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(DEFAULT_CATEGORIES));
    } else {
      let cats = [];
      try {
        cats = JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || '[]');
        if (!Array.isArray(cats)) cats = [];
      } catch (e) {
        cats = [];
      }
      cats = cats.filter(c => c && typeof c === 'object' && c.code);

      // Automatic migration: Purge legacy generic categories (e.g. تمرکز و بازآفرینی, کلاس و آموزش, تمرین و کارگاه گروهی, مطالعه و پژوهش)
      const LEGACY_CODES = ['ب', 'ع-ک', 'ع-م', 'ع-س', 'ع-غ', 'م', 'خ', 'ت', 'ش', 'تـ'];
      const LEGACY_TITLES = ['تمرکز و بازآفرینی', 'کلاس و آموزش', 'تمرین و کارگاه گروهی', 'مطالعه و پژوهش', 'مطالعه آزاد', 'امور شغلی و کسب‌وکار', 'خواب', 'تفریح و ورزش', 'امور شخصی', 'زمان تلف شده'];
      
      const containsLegacy = cats.some(c => LEGACY_CODES.includes(c.code) || LEGACY_TITLES.includes(c.title));
      if (containsLegacy) {
        // Keep custom non-legacy user categories, and merge with new real study subjects
        const customUserCats = cats.filter(c => !LEGACY_CODES.includes(c.code) && !LEGACY_TITLES.includes(c.title));
        const merged = [...DEFAULT_CATEGORIES];
        customUserCats.forEach(c => {
          if (!merged.some(m => m.code === c.code || m.title === c.title)) {
            merged.push(c);
          }
        });
        cats = merged;
      }

      if (cats.length === 0) cats = [...DEFAULT_CATEGORIES];
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(cats));
    }

    if (!localStorage.getItem(STORAGE_KEYS.CUSTOM_SUBJECTS)) {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify([]));
    }

    if (!localStorage.getItem(STORAGE_KEYS.STUDY_TARGETS)) {
      localStorage.setItem(STORAGE_KEYS.STUDY_TARGETS, JSON.stringify({
        dailyStudyGoalHours: 8.0,
        weeklyStudyGoalHours: 56.0,
        dailyTestGoalCount: 150,
        weeklyTestGoalCount: 1000
      }));
    }

    if (!localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify({
        name: "",
        major: "",
        targetField: ""
      }));
    }

    if (!localStorage.getItem(STORAGE_KEYS.COUNTDOWN_EVENTS)) {
      localStorage.setItem(STORAGE_KEYS.COUNTDOWN_EVENTS, JSON.stringify([
        { id: 1, title: "کنکور سراسری ۱۴۰۵", jy: 1405, jm: 5, jd: 29 }
      ]));
    } else {
      // Migrate old 1404 default event to 1405
      let events = JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNTDOWN_EVENTS));
      let updated = false;
      events = events.map(e => {
        if (e.id === 1 && e.jy === 1404) {
          updated = true;
          return { id: 1, title: "کنکور سراسری ۱۴۰۵", jy: 1405, jm: 5, jd: 29 };
        }
        return e;
      });
      if (updated) localStorage.setItem(STORAGE_KEYS.COUNTDOWN_EVENTS, JSON.stringify(events));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.GAMIFICATION)) {
      localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify({
        xp: 0,
        level: 1,
        streak: 0,
        lastLogin: Date.now()
      }));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.REMINDERS)) {
      localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify([]));
    }

    if (!localStorage.getItem(STORAGE_KEYS.INTERRUPTIONS)) {
      localStorage.setItem(STORAGE_KEYS.INTERRUPTIONS, JSON.stringify([]));
    }

    this.purgeMockAndFutureData();
  }

  // Wipes all fake/mock sessions and future day records
  purgeMockAndFutureData() {
    try {
      const [todayY, todayM, todayD] = this.getTodayJalali();
      const todayJdn = this.jalaliToJdn(todayY, todayM, todayD);

      // 1. Purge future & invalid/mock sessions from planex_recent_activity_sessions
      const rawSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      if (Array.isArray(rawSessions)) {
        const validSessions = rawSessions.filter(s => {
          if (!s || typeof s !== 'object') return false;
          // Filter out future dates
          if (s.dateStr || s.date) {
            const dateStr = s.dateStr || s.date;
            const parts = String(dateStr).split('/').map(Number);
            if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
              const sessionJdn = this.jalaliToJdn(parts[0], parts[1], parts[2]);
              if (sessionJdn > todayJdn) return false;
            }
          }
          // Filter out fake mock session IDs
          if (s.id && typeof s.id === 'string' && (s.id.startsWith('mock_') || s.id.startsWith('dummy_') || s.id.startsWith('seed_'))) return false;
          return true;
        });
        localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(validSessions));
      }

      // 2. Clean out future dates from planex_recorded_timer
      const recordedTimer = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECORDED_TIMER) || '{}');
      if (typeof recordedTimer === 'object' && recordedTimer !== null) {
        const todayIso = new Date().toISOString().slice(0, 10);
        let updated = false;
        Object.keys(recordedTimer).forEach(k => {
          if (k > todayIso) {
            delete recordedTimer[k];
            updated = true;
          }
        });
        if (updated) localStorage.setItem(STORAGE_KEYS.RECORDED_TIMER, JSON.stringify(recordedTimer));
      }
    } catch (e) {
      console.warn('purgeMockAndFutureData error:', e);
    }
  }

  // Dynamic live weekly calendar calculation (Zero static cache, 100% dynamic date navigation)
  getCurrentWeekStartDate(referenceDate = new Date()) {
    const now = new Date(referenceDate);
    const dayOfWeek = (now.getDay() + 1) % 7; // Sat = 0, Sun = 1, ..., Fri = 6
    const sat = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek);
    sat.setHours(0, 0, 0, 0);
    return sat;
  }

  getLiveCurrentWeekObject(referenceDate = new Date()) {
    const jalaliMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const weekNames = ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم', 'هفته پنجم', 'هفته ششم'];
    const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"];

    const satDate = this.getCurrentWeekStartDate(referenceDate);
    const friDate = new Date(satDate.getFullYear(), satDate.getMonth(), satDate.getDate() + 6);

    const [satJy, satJm, satJd] = this.gregorianToJalali(satDate.getFullYear(), satDate.getMonth() + 1, satDate.getDate());
    const [friJy, friJm, friJd] = this.gregorianToJalali(friDate.getFullYear(), friDate.getMonth() + 1, friDate.getDate());

    const jw = this.getJalaliWeekNumber(satJy, satJm, satJd);
    const weekId = `${satJy}_${satJm}_${jw}`;

    const satMonth = jalaliMonths[satJm - 1];
    const friMonth = jalaliMonths[friJm - 1];
    const dateRangeStr = `${satJd} ${satMonth} تا ${friJd} ${friMonth}`;

    const startYear = satJm >= 7 ? satJy : satJy - 1;
    const endYear = startYear + 1;
    const academicYear = `${startYear}-${endYear}`;

    const daysList = [];
    const todayJalaliStr = this.getTodayJalaliString();

    for (let d = 0; d < 7; d++) {
      const dDate = new Date(satDate.getFullYear(), satDate.getMonth(), satDate.getDate() + d);
      const [djy, djm, djd] = this.gregorianToJalali(dDate.getFullYear(), dDate.getMonth() + 1, dDate.getDate());
      const dateStr = `${djy}/${String(djm).padStart(2, '0')}/${String(djd).padStart(2, '0')}`;
      const isToday = (this.normalizeJalaliDate(dateStr) === todayJalaliStr);

      const realStudyMins = this.getStudyMinutesByDate(dateStr);
      const realTests = this.getDailyTestCount(dateStr);

      daysList.push({
        dayIndex: d,
        dayName: DAY_NAMES[d],
        dateStr: dateStr,
        dayOfMonth: djd,
        monthName: jalaliMonths[djm - 1],
        year: djy,
        monthIdx: djm,
        isToday: isToday,
        studyMinutes: realStudyMins,
        totalStudyMinutes: realStudyMins,
        testsCount: realTests,
        testCount: realTests
      });
    }

    return {
      id: weekId,
      year: satJy,
      monthIdx: satJm,
      weekNum: jw,
      month: satMonth,
      weekNumber: weekNames[jw - 1] || `هفته ${jw}`,
      academicYear: academicYear,
      startDate: `${satJd} ${satMonth}`,
      endDate: `${friJd} ${friMonth}`,
      dateRange: dateRangeStr,
      isCurrentWeek: true,
      status: 'current',
      days: daysList
    };
  }

  // Standard Jalali Year / Month / Week Engine (5 weeks per Jalali Month)
  // Ensures week always aligns from Saturday to Friday
  getWeekObject(jy, jm, jw) {
    const jalaliMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const weekNames = ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم', 'هفته پنجم', 'هفته ششم'];
    const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"];

    // Find the Saturday of this month's Week jw
    const firstDayJdn = this.jalaliToJdn(jy, jm, 1);
    const offset = (firstDayJdn + 2) % 7;
    const sat1Jdn = firstDayJdn - offset;
    const saturdayJdn = sat1Jdn + (jw - 1) * 7;
    const fridayJdn = saturdayJdn + 6;

    const todayJdn = this.getTodayJdn();
    const isTodayWeek = (todayJdn >= saturdayJdn && todayJdn <= fridayJdn);

    let status = 'current';
    if (todayJdn > fridayJdn) status = 'past';
    else if (todayJdn < saturdayJdn) status = 'future';

    const [satJy, satJm, satJd] = this.jdnToJalali(saturdayJdn);
    const [friJy, friJm, friJd] = this.jdnToJalali(fridayJdn);

    const satMonth = jalaliMonths[satJm - 1];
    const friMonth = jalaliMonths[friJm - 1];
    const dateRangeStr = `${satJd} ${satMonth} تا ${friJd} ${friMonth}`;
    const weekId = `${jy}_${jm}_${jw}`;

    const startYear = jm >= 7 ? jy : jy - 1;
    const endYear = startYear + 1;
    const academicYear = `${toPersianDigits(startYear)}-${toPersianDigits(endYear)}`;

    const daysList = [];
    const todayJalaliStr = this.getTodayJalaliString();

    for (let d = 0; d < 7; d++) {
      const dayJdn = saturdayJdn + d;
      let dayDateStr = '';
      let djy = jy, djm = jm, djd = 1;
      try {
        [djy, djm, djd] = this.jdnToJalali(dayJdn);
        dayDateStr = `${djy}/${String(djm).padStart(2, '0')}/${String(djd).padStart(2, '0')}`;
      } catch (e) {}

      const realStudyMins = dayDateStr ? this.getStudyMinutesByDate(dayDateStr) : 0;
      const realTests = dayDateStr ? this.getDailyTestCount(dayDateStr) : 0;
      const isToday = dayDateStr ? (this.normalizeJalaliDate(dayDateStr) === todayJalaliStr) : false;

      daysList.push({
        dayIndex: d,
        dayName: DAY_NAMES[d],
        dateStr: dayDateStr,
        dayOfMonth: djd,
        monthName: jalaliMonths[djm - 1],
        year: djy,
        monthIdx: djm,
        isToday: isToday,
        studyMinutes: realStudyMins,
        totalStudyMinutes: realStudyMins,
        testsCount: realTests,
        testCount: realTests
      });
    }

    return {
      id: weekId,
      year: jy,
      monthIdx: jm,
      weekNum: jw,
      month: jalaliMonths[jm - 1],
      weekNumber: weekNames[jw - 1] || `هفته ${jw}`,
      academicYear: academicYear,
      startDate: `${satJd} ${satMonth}`,
      endDate: `${friJd} ${friMonth}`,
      dateRange: dateRangeStr,
      isCurrentWeek: isTodayWeek,
      status: status,
      days: daysList
    };
  }

  saveCurrentWeek(weekObj) {
    if (!weekObj || !weekObj.id) return;
    try {
      const allWeekData = JSON.parse(localStorage.getItem('planex_week_data') || '{}');
      allWeekData[weekObj.id] = weekObj;
      localStorage.setItem('planex_week_data', JSON.stringify(allWeekData));

      const allWeeks = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKS) || '{}');
      allWeeks[weekObj.id] = weekObj;
      localStorage.setItem(STORAGE_KEYS.WEEKS, JSON.stringify(allWeeks));
    } catch (e) {
      console.error('Error in saveCurrentWeek:', e);
    }
  }

  getJalaliWeekNumber(jy, jm, jd) {
    const firstDayJdn = this.jalaliToJdn(jy, jm, 1);
    const offset = (firstDayJdn + 2) % 7;
    const sat1Jdn = firstDayJdn - offset;
    const currentJdn = this.jalaliToJdn(jy, jm, jd);
    const daysSinceSat1 = currentJdn - sat1Jdn;
    const jw = Math.floor(daysSinceSat1 / 7) + 1;
    return Math.min(this.getWeeksInMonth(jy, jm), Math.max(1, jw));
  }

  getTodayWeekKey() {
    const [jy, jm, jd] = this.getTodayJalali();
    const jw = this.getJalaliWeekNumber(jy, jm, jd);
    return `${jy}_${jm}_${jw}`;
  }

  getWeeks() {
    // Generate list of weeks for current selected year & month or default active year
    const activeWeek = this.getCurrentWeek();
    const list = [];
    const totalWeeks = this.getWeeksInMonth(activeWeek.year, activeWeek.monthIdx);
    for (let w = 1; w <= totalWeeks; w++) {
      list.push(this.getWeekObject(activeWeek.year, activeWeek.monthIdx, w));
    }
    return list;
  }

  getCurrentWeek(referenceDate = new Date()) {
    const savedKey = localStorage.getItem('planex_active_week_key');
    if (savedKey) {
      const parts = savedKey.split('_');
      if (parts.length === 3) {
        const jy = parseInt(parts[0]);
        const jm = parseInt(parts[1]);
        const jw = parseInt(parts[2]);
        if (!isNaN(jy) && !isNaN(jm) && !isNaN(jw) && jm >= 1 && jm <= 12 && jw >= 1 && jw <= this.getWeeksInMonth(jy, jm)) {
          return this.getWeekObject(jy, jm, jw);
        }
      }
    }

    // Default to today's real dynamic live week
    return this.getLiveCurrentWeekObject(referenceDate);
  }

  setCurrentWeekKey(weekKey) {
    localStorage.setItem('planex_active_week_key', weekKey);
    localStorage.setItem(STORAGE_KEYS.CURRENT_WEEK_ID, weekKey);
  }

  setCurrentWeek(weekId) {
    this.setCurrentWeekKey(weekId);
  }

  goToPrevWeek() {
    const cur = this.getCurrentWeek();
    let jy = cur.year;
    let jm = cur.monthIdx;
    let jw = cur.weekNum;

    if (jw > 1) {
      jw--;
    } else {
      if (jm > 1) {
        jm--;
      } else {
        jm = 12;
        jy--;
      }
      // Land on the *last* real week of the previous month (5 or 6)
      jw = this.getWeeksInMonth(jy, jm);
    }

    this.setCurrentWeekKey(`${jy}_${jm}_${jw}`);
  }

  goToNextWeek() {
    const cur = this.getCurrentWeek();
    let jy = cur.year;
    let jm = cur.monthIdx;
    let jw = cur.weekNum;

    if (jw < this.getWeeksInMonth(jy, jm)) {
      jw++;
    } else {
      jw = 1;
      if (jm < 12) {
        jm++;
      } else {
        jm = 1;
        jy++;
      }
    }

    this.setCurrentWeekKey(`${jy}_${jm}_${jw}`);
  }

  resetToCurrentWeek() {
    this.setCurrentWeekKey(this.getTodayWeekKey());
  }

  hasDataForWeek(weekId) {
    // Check if any hourly log, daily plan, or goal exists for this weekId
    const hourlyLogs = this.getHourlyLogs(weekId);
    if (Object.keys(hourlyLogs).length > 0) return true;
    
    const dailyPlans = this.getDailyPlans(weekId);
    if (dailyPlans && dailyPlans.length > 0) return true;

    const weeklyGoals = this.getWeeklyGoals(weekId);
    if (weeklyGoals && Object.keys(weeklyGoals).length > 0) return true;

    return false;
  }

  deleteWeek(weekId) {
    let weeks = this.getWeeks();
    weeks = weeks.filter(w => w.id != weekId);
    localStorage.setItem(STORAGE_KEYS.WEEKS, JSON.stringify(weeks));
    if (localStorage.getItem(STORAGE_KEYS.CURRENT_WEEK_ID) == weekId) {
      if (weeks.length > 0) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_WEEK_ID, weeks[0].id.toString());
      }
    }
  }

  // Hourly Logs Management
  getHourlyLogs(weekId) {
    const allLogs = JSON.parse(localStorage.getItem(STORAGE_KEYS.HOURLY_LOGS) || '{}');
    return allLogs[weekId] || {};
  }

  setHourlyLog(weekId, dayIndex, slotIndex, categoryCode, note = null, subject = null, testCount = 0, studyMethod = null, description = null, rating = 0) {
    const allLogs = JSON.parse(localStorage.getItem(STORAGE_KEYS.HOURLY_LOGS) || '{}');
    if (!allLogs[weekId]) allLogs[weekId] = {};
    const slotKey = `${dayIndex}_${slotIndex}`;
    
    if (!categoryCode || categoryCode === '-') {
      delete allLogs[weekId][slotKey];
    } else {
      allLogs[weekId][slotKey] = {
        categoryCode,
        note: note || '',
        subject: subject || '',
        testCount: parseInt(testCount) || 0,
        studyMethod: studyMethod || '',
        description: description || '',
        rating: parseInt(rating) || 0,
        updatedAt: Date.now()
      };
    }
    
    localStorage.setItem(STORAGE_KEYS.HOURLY_LOGS, JSON.stringify(allLogs));
  }

  // Categories
  getCategories() {
    try {
      const cats = JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || '[]');
      if (!Array.isArray(cats) || cats.length === 0) return DEFAULT_CATEGORIES;
      const valid = cats.filter(c => c && typeof c === 'object' && c.code);
      return valid.length > 0 ? valid : DEFAULT_CATEGORIES;
    } catch(e) {
      return DEFAULT_CATEGORIES;
    }
  }

  getNextCategoryColor() {
    return getNextActivityColor(this.getCategories());
  }

  addCategory(code, title, group = 'علمی', color = null, recommendedTarget = "", icon = "📚", isStudy = true) {
    const categories = this.getCategories();
    const finalColor = color || getNextActivityColor(categories);
    const isStudyBool = typeof isStudy === 'boolean' ? isStudy : (group === 'علمی');
    const newCat = {
      code: code || ('cust_' + Date.now()),
      title: (title || '').trim(),
      group: group || (isStudyBool ? 'علمی' : 'غیرعلمی'),
      isStudy: isStudyBool,
      color: finalColor,
      recommendedTarget: recommendedTarget || '',
      icon: icon || (isStudyBool ? '📚' : '☕')
    };
    categories.push(newCat);
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    return newCat;
  }

  saveCategory(catData) {
    let categories = this.getCategories();
    const isStudyBool = catData.isStudy !== undefined 
      ? Boolean(catData.isStudy) 
      : (catData.group === 'علمی');
    
    const code = catData.code || ('cust_' + Date.now());
    const index = categories.findIndex(c => c.code === code);
    
    const catObj = {
      code,
      title: (catData.title || '').trim(),
      group: catData.group || (isStudyBool ? 'علمی' : 'غیرعلمی'),
      isStudy: isStudyBool,
      color: catData.color || getNextActivityColor(categories),
      recommendedTarget: catData.recommendedTarget || '',
      icon: catData.icon || (isStudyBool ? '📚' : '☕')
    };

    if (index >= 0) {
      categories[index] = { ...categories[index], ...catObj };
    } else {
      categories.push(catObj);
    }
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    return catObj;
  }

  isCategoryStudy(catOrCode) {
    if (!catOrCode) return false;
    if (typeof catOrCode === 'object') {
      return isStudyCategory(catOrCode);
    }
    const categories = this.getCategories();
    const cat = categories.find(c => c.code === catOrCode);
    return isStudyCategory(cat);
  }
  
  updateCategoryIcon(code, icon) {
    const categories = this.getCategories();
    const cat = categories.find(c => c.code === code);
    if (cat) {
        cat.icon = icon;
        localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    }
  }

  deleteCategory(code) {
    try {
      let categories = this.getCategories();
      categories = categories.filter(c => c && c.code !== code);
      if (categories.length === 0) categories = [...DEFAULT_CATEGORIES];
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
      return categories;
    } catch (e) {
      return DEFAULT_CATEGORIES;
    }
  }

  // Non-Study Categories Management
  getNonStudyCategories() {
    try {
      const deletedCodes = JSON.parse(localStorage.getItem('planex_deleted_nonstudy_codes') || '[]');
      const custom = JSON.parse(localStorage.getItem('planex_custom_nonstudy_categories') || '[]');
      const validCustom = Array.isArray(custom) ? custom.filter(c => c && typeof c === 'object' && c.code) : [];

      const map = new Map();
      DEFAULT_NON_STUDY_CATEGORIES.forEach(c => map.set(c.code, c));
      validCustom.forEach(c => map.set(c.code, c));

      const filtered = Array.from(map.values()).filter(c => c && !deletedCodes.includes(c.code));
      return filtered.length > 0 ? filtered : DEFAULT_NON_STUDY_CATEGORIES;
    } catch (e) {
      return DEFAULT_NON_STUDY_CATEGORIES;
    }
  }

  addNonStudyCategory(title, icon = '☕', color = '#f59e0b') {
    try {
      const list = JSON.parse(localStorage.getItem('planex_custom_nonstudy_categories') || '[]');
      const code = 'non_cust_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
      const newCat = {
        code,
        title: String(title).trim(),
        icon: icon || '☕',
        color: color || '#f59e0b',
        group: 'غیردرسی',
        isStudy: false
      };
      list.push(newCat);
      localStorage.setItem('planex_custom_nonstudy_categories', JSON.stringify(list));
      return newCat;
    } catch (e) {
      return { code: 'non_' + Date.now(), title, icon: '☕', color: '#f59e0b', isStudy: false };
    }
  }

  deleteNonStudyCategory(code) {
    try {
      let list = JSON.parse(localStorage.getItem('planex_custom_nonstudy_categories') || '[]');
      if (Array.isArray(list)) {
        list = list.filter(c => c && c.code !== code);
        localStorage.setItem('planex_custom_nonstudy_categories', JSON.stringify(list));
      }
      let deletedCodes = JSON.parse(localStorage.getItem('planex_deleted_nonstudy_codes') || '[]');
      if (!deletedCodes.includes(code)) {
        deletedCodes.push(code);
        localStorage.setItem('planex_deleted_nonstudy_codes', JSON.stringify(deletedCodes));
      }
      return this.getNonStudyCategories();
    } catch (e) {
      return DEFAULT_NON_STUDY_CATEGORIES;
    }
  }

  // Custom Subjects
  getCustomSubjects() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOM_SUBJECTS) || '[]');
  }

  addCustomSubject(name) {
    const list = this.getCustomSubjects();
    if (!list.includes(name)) {
      list.push(name);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(list));
    }
  }

  deleteCustomSubject(name) {
    let list = this.getCustomSubjects();
    list = list.filter(s => s !== name);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(list));
  }

  getUniqueLoggedTopics(categoryCode = null) {
    const topicsSet = new Set();
    try {
      const allLogs = JSON.parse(localStorage.getItem(STORAGE_KEYS.HOURLY_LOGS) || '{}');
      Object.values(allLogs).forEach(weekLogs => {
        if (weekLogs && typeof weekLogs === 'object') {
          Object.values(weekLogs).forEach(log => {
            if (log && log.subject && (!categoryCode || log.categoryCode === categoryCode)) {
              const trimmed = String(log.subject).trim();
              if (trimmed) topicsSet.add(trimmed);
            }
          });
        }
      });

      const sessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      if (Array.isArray(sessions)) {
        sessions.forEach(s => {
          if (s && s.subject && (!categoryCode || s.categoryCode === categoryCode)) {
            const trimmed = String(s.subject).trim();
            if (trimmed) topicsSet.add(trimmed);
          }
        });
      }

      const customSubs = this.getCustomSubjects();
      if (Array.isArray(customSubs)) {
        customSubs.forEach(s => {
          const trimmed = String(s).trim();
          if (trimmed) topicsSet.add(trimmed);
        });
      }
    } catch (e) {}

    return Array.from(topicsSet);
  }

  // Habits
  getHabits() {
    let habits = JSON.parse(localStorage.getItem(STORAGE_KEYS.HABITS) || '[]');
    let changed = false;
    const seenIds = new Set();
    habits.forEach((h, index) => {
      if (!h.id || seenIds.has(h.id)) {
        h.id = Date.now().toString() + '_' + index + '_' + Math.random().toString(36).substr(2, 9);
        changed = true;
      }
      seenIds.add(h.id);
    });
    if (changed) {
      localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
    }
    return habits;
  }

  addHabit(title, frequency = 'روزانه', targetTime = '08:00', emoji = null) {
    const habits = this.getHabits();
    let finalEmoji = emoji;
    let cleanTitle = String(title || '').trim();
    
    // If emoji wasn't explicitly passed, extract emoji from start of title if present
    const emojiMatch = cleanTitle.match(/^(\p{Extended_Pictographic}|\p{Emoji_Presentation}|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83E[\uDD00-\uDDFF]|\uD83D[\uDE80-\uDEFF]|[\u2600-\u27BF])\s*/u);
    if (emojiMatch) {
      if (!finalEmoji) {
        finalEmoji = emojiMatch[1];
      }
      cleanTitle = cleanTitle.substring(emojiMatch[0].length).trim();
    }
    if (!finalEmoji) finalEmoji = '✨';

    const newHabit = {
      id: Date.now().toString() + '_' + habits.length + '_' + Math.random().toString(36).substr(2, 9),
      title: cleanTitle || title,
      emoji: finalEmoji,
      frequency,
      targetTime,
      daysCompleted: [false, false, false, false, false, false, false],
      completedDays: {} // monthKey -> {day: status} for 31-day matrix
    };
    habits.push(newHabit);
    localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
    return newHabit;
  }

  updateHabit(habitId, updates = {}) {
    const habits = this.getHabits();
    const habit = habits.find(h => h.id == habitId || String(h.id) === String(habitId));
    if (habit) {
      if (updates.title !== undefined) {
        let cleanTitle = String(updates.title).trim();
        const emojiMatch = cleanTitle.match(/^(\p{Extended_Pictographic}|\p{Emoji_Presentation}|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83E[\uDD00-\uDDFF]|\uD83D[\uDE80-\uDEFF]|[\u2600-\u27BF])\s*/u);
        if (emojiMatch && !updates.emoji) {
          updates.emoji = emojiMatch[1];
          cleanTitle = cleanTitle.substring(emojiMatch[0].length).trim();
        }
        habit.title = cleanTitle || updates.title;
      }
      if (updates.emoji !== undefined) habit.emoji = updates.emoji;
      if (updates.frequency !== undefined) habit.frequency = updates.frequency;
      if (updates.targetTime !== undefined) habit.targetTime = updates.targetTime;
      localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
      return habit;
    }
    return null;
  }

  toggleHabitDay(habitId, dayIndex) {
    const habits = this.getHabits();
    const habit = habits.find(h => h.id == habitId);
    if (habit) {
      if (!habit.daysCompleted) habit.daysCompleted = [false, false, false, false, false, false, false];
      habit.daysCompleted[dayIndex] = !habit.daysCompleted[dayIndex];
      localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
    }
  }

  // Cycle habit day status for 31-day monthly matrix: 0=empty, 1=done, 2=not-done
  cycleHabitDay(habitId, monthKey, day) {
    const habits = this.getHabits();
    const habit = habits.find(h => h.id == habitId || String(h.id) === String(habitId));
    if (habit) {
      if (!habit.completedDays) habit.completedDays = {};
      if (!habit.completedDays[monthKey]) habit.completedDays[monthKey] = {};
      
      let currentStatus = habit.completedDays[monthKey][day] || 0;
      currentStatus = (currentStatus + 1) % 3;
      
      habit.completedDays[monthKey][day] = currentStatus;
      localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
      return currentStatus;
    }
    return 0;
  }

  deleteHabit(habitId) {
    let habits = this.getHabits();
    habits = habits.filter(h => h.id != habitId && String(h.id) !== String(habitId));
    localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
  }

  // Daily & Weekly Plans
  getDailyPlans(weekId) {
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    const list = allPlans[weekId] || [];
    // مهاجرت نرم: تسک‌های قدیمی بدون فیلد اولویت به‌صورت Q2 در نظر گرفته می‌شوند
    return list.map(p => ({
      ...p,
      priority: VALID_PRIORITIES.includes(p.priority) ? p.priority : FALLBACK_PRIORITY
    }));
  }

  addDailyPlan(weekId, dayIndex, text, priority = FALLBACK_PRIORITY) {
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    if (!allPlans[weekId]) allPlans[weekId] = [];
    const safePriority = VALID_PRIORITIES.includes(priority) ? priority : FALLBACK_PRIORITY;
    // شناسه یکتا: Date.now() تنها باعث تکرار id برای تسک‌های ثبت‌شده در یک میلی‌ثانیه می‌شد
    // و حذف یک تسک، تمام همزادهایش را هم پاک می‌کرد.
    const uniqueId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const newPlan = {
      id: uniqueId,
      dayIndex,
      text,
      isDone: false,
      priority: safePriority,
      createdAt: Date.now()
    };
    allPlans[weekId].push(newPlan);
    localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
    return newPlan;
  }

  /**
   * جابه‌جایی یک تسک بین خانه‌های ماتریس آیزنهاور
   */
  setDailyPlanPriority(weekId, planId, priority) {
    if (!VALID_PRIORITIES.includes(priority)) return false;
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    if (!allPlans[weekId]) return false;
    const plan = allPlans[weekId].find(p => p.id == planId);
    if (!plan) return false;
    plan.priority = priority;
    localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
    return true;
  }

  toggleDailyPlan(weekId, planId) {
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    let plan = null;
    if (allPlans[weekId]) {
      plan = allPlans[weekId].find(p => p.id == planId || String(p.id) === String(planId));
    }
    if (!plan) {
      for (const wId of Object.keys(allPlans)) {
        plan = allPlans[wId].find(p => p.id == planId || String(p.id) === String(planId));
        if (plan) break;
      }
    }
    if (plan) {
      plan.isDone = !plan.isDone;
      localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
      return true;
    }
    return false;
  }

  deleteDailyPlan(weekId, planId) {
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    if (allPlans[weekId]) {
      allPlans[weekId] = allPlans[weekId].filter(p => p.id != planId && String(p.id) !== String(planId));
    }
    for (const wId of Object.keys(allPlans)) {
      allPlans[wId] = allPlans[wId].filter(p => p.id != planId && String(p.id) !== String(planId));
    }
    localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
  }

  getWeeklyGoals(weekId) {
    const allGoals = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_GOALS) || '{}');
    return allGoals[weekId] || [];
  }

  addWeeklyGoal(weekId, text) {
    const allGoals = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_GOALS) || '{}');
    if (!allGoals[weekId]) allGoals[weekId] = [];
    allGoals[weekId].push({ id: Date.now(), text, isDone: false });
    localStorage.setItem(STORAGE_KEYS.WEEKLY_GOALS, JSON.stringify(allGoals));
  }

  toggleWeeklyGoal(weekId, goalId) {
    const allGoals = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_GOALS) || '{}');
    let goal = null;
    if (allGoals[weekId]) {
      goal = allGoals[weekId].find(item => item.id == goalId || String(item.id) === String(goalId));
    }
    if (!goal) {
      for (const wId of Object.keys(allGoals)) {
        goal = allGoals[wId].find(item => item.id == goalId || String(item.id) === String(goalId));
        if (goal) break;
      }
    }
    if (goal) {
      goal.isDone = !goal.isDone;
      localStorage.setItem(STORAGE_KEYS.WEEKLY_GOALS, JSON.stringify(allGoals));
      return true;
    }
    return false;
  }

  deleteWeeklyGoal(weekId, goalId) {
    const allGoals = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_GOALS) || '{}');
    if (allGoals[weekId]) {
      allGoals[weekId] = allGoals[weekId].filter(g => g.id != goalId && String(g.id) !== String(goalId));
    }
    for (const wId of Object.keys(allGoals)) {
      allGoals[wId] = allGoals[wId].filter(g => g.id != goalId && String(g.id) !== String(goalId));
    }
    localStorage.setItem(STORAGE_KEYS.WEEKLY_GOALS, JSON.stringify(allGoals));
  }

  // Study & Test Targets
  getStudyTargets() {
    const DEFAULT_TARGETS = {
      dailyStudyGoalHours: 8.0,
      weeklyStudyGoalHours: 56.0,
      dailyTestGoalCount: 150,
      weeklyTestGoalCount: 1000
    };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDY_TARGETS));
      return (parsed && typeof parsed === 'object') ? { ...DEFAULT_TARGETS, ...parsed } : DEFAULT_TARGETS;
    } catch (e) {
      return DEFAULT_TARGETS;
    }
  }

  setStudyTargets(targets) {
    localStorage.setItem(STORAGE_KEYS.STUDY_TARGETS, JSON.stringify(targets));
  }

  saveStudyTargets(targets) {
    this.setStudyTargets(targets);
  }

  // Energy / Gratitude / Countdown
  getTodayEnergyLevel() {
    const todayKey = new Date().toISOString().slice(0, 10);
    const all = JSON.parse(localStorage.getItem('planex_energy_levels') || '{}');
    return all[todayKey] !== undefined ? all[todayKey] : 75;
  }

  setTodayEnergyLevel(level) {
    const todayKey = new Date().toISOString().slice(0, 10);
    const all = JSON.parse(localStorage.getItem('planex_energy_levels') || '{}');
    all[todayKey] = level;
    localStorage.setItem('planex_energy_levels', JSON.stringify(all));
  }

  getGratitudeNotes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.GRATITUDE_NOTES) || '[]');
  }

  addGratitudeNote(prompt, text) {
    const notes = this.getGratitudeNotes();
    notes.unshift({
      id: Date.now().toString(),
      prompt: prompt || 'یک اتفاق کوچک که امروز به خاطرش خوشحالی؟',
      text,
      dateStr: new Date().toLocaleDateString('fa-IR')
    });
    localStorage.setItem(STORAGE_KEYS.GRATITUDE_NOTES, JSON.stringify(notes));
  }

  deleteGratitudeNote(id) {
    let notes = this.getGratitudeNotes();
    notes = notes.filter(n => n.id !== id && n.id != id);
    localStorage.setItem(STORAGE_KEYS.GRATITUDE_NOTES, JSON.stringify(notes));
  }

  getEvaluationData() {
    const currentWeek = this.getCurrentWeek();
    const weekId = currentWeek ? currentWeek.id : 1;
    const all = JSON.parse(localStorage.getItem('planex_evaluations') || '{}');
    return all[weekId] || {};
  }

  saveEvaluationItem(itemIdx, text, isPositive = true) {
    const currentWeek = this.getCurrentWeek();
    const weekId = currentWeek ? currentWeek.id : 1;
    const all = JSON.parse(localStorage.getItem('planex_evaluations') || '{}');
    if (!all[weekId]) all[weekId] = {};
    all[weekId][itemIdx] = { text, isPositive };
    localStorage.setItem('planex_evaluations', JSON.stringify(all));
  }

  getCountdownEvents() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COUNTDOWN_EVENTS) || '[]');
  }

  addCountdownEvent(title, jy, jm, jd) {
    const list = this.getCountdownEvents();
    list.push({ id: Date.now(), title, jy, jm, jd });
    localStorage.setItem(STORAGE_KEYS.COUNTDOWN_EVENTS, JSON.stringify(list));
  }

  deleteCountdownEvent(id) {
    let list = this.getCountdownEvents();
    list = list.filter(e => e.id != id);
    localStorage.setItem(STORAGE_KEYS.COUNTDOWN_EVENTS, JSON.stringify(list));
  }
  
  // Interruptions
  getInterruptions(weekId) {
    let all = JSON.parse(localStorage.getItem(STORAGE_KEYS.INTERRUPTIONS) || '{}');
    if (Array.isArray(all)) all = {}; // Fix for previous array initialization bug
    return all[weekId] || [];
  }
  
  addInterruption(weekId, title, durationMins, category) {
    let all = JSON.parse(localStorage.getItem(STORAGE_KEYS.INTERRUPTIONS) || '{}');
    if (Array.isArray(all)) all = {}; // Fix for previous array initialization bug
    if (!all[weekId]) all[weekId] = [];
    all[weekId].push({ id: Date.now(), title, durationMins, category, date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEYS.INTERRUPTIONS, JSON.stringify(all));
  }

  // Routine Unlimited Checklist & Notes
  getRoutineChecklist() {
    return JSON.parse(localStorage.getItem('planex_routine_checklist') || '[]');
  }

  addRoutineChecklistItem(text) {
    const list = this.getRoutineChecklist();
    list.unshift({ id: Date.now().toString(), text, completed: false });
    localStorage.setItem('planex_routine_checklist', JSON.stringify(list));
  }

  toggleRoutineChecklistItem(id) {
    const list = this.getRoutineChecklist();
    const item = list.find(i => i.id === id || i.id == id);
    if (item) {
      item.completed = !item.completed;
      localStorage.setItem('planex_routine_checklist', JSON.stringify(list));
    }
  }

  deleteRoutineChecklistItem(id) {
    let list = this.getRoutineChecklist();
    list = list.filter(i => i.id !== id && i.id != id);
    localStorage.setItem('planex_routine_checklist', JSON.stringify(list));
  }

  // Earned Gamification Medal Badge based on Level
  getEarnedMedalBadge() {
    const g = this.getGamification() || { level: 1, xp: 0 };
    const lvl = g.level || 1;

    if (lvl >= 15) {
      return { icon: '👑', title: 'استاد کنکور', color: '#eab308', desc: 'سطح ۱۵+ (عالی)' };
    } else if (lvl >= 10) {
      return { icon: '💎', title: 'غول تمرکز', color: '#06b6d4', desc: 'سطح ۱۰+ (الماس)' };
    } else if (lvl >= 5) {
      return { icon: '🥇', title: 'رتبه برتر', color: '#f59e0b', desc: 'سطح ۵+ (طلا)' };
    } else if (lvl >= 3) {
      return { icon: '🥈', title: 'داوطلب منظم', color: '#cbd5e1', desc: 'سطح ۳+ (نقره)' };
    } else {
      return { icon: '🥉', title: 'مبتدی پرانرژی', color: '#b45309', desc: 'سطح ۱+ (برنز)' };
    }
  }

  // Gamification
  getGamification() {
    const DEFAULT_GAMIFICATION = { xp: 0, level: 1, streak: 0, lastLogin: Date.now() };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.GAMIFICATION));
      if (!parsed || typeof parsed !== 'object') return DEFAULT_GAMIFICATION;
      return {
        ...DEFAULT_GAMIFICATION,
        ...parsed,
        xp: Number(parsed.xp) || 0,
        level: Number(parsed.level) || 1
      };
    } catch (e) {
      return DEFAULT_GAMIFICATION;
    }
  }

  addXP(amount) {
    const g = this.getGamification();
    const gain = Number(amount) || 0;
    g.xp += gain;
    let required = g.level * 1000;
    // Loop so a large single gain can raise more than one level
    while (g.xp >= required) {
      g.xp -= required;
      g.level += 1;
      required = g.level * 1000;
    }
    localStorage.setItem(STORAGE_KEYS.GAMIFICATION, JSON.stringify(g));
  }

  normalizeJalaliDate(dateStr) {
    if (!dateStr) return '';
    let s = String(dateStr).trim();
    // Convert Persian digits to English
    s = s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const parts = s.split('/').map(p => parseInt(p, 10));
    if (parts.length === 3 && !parts.some(isNaN)) {
      return `${parts[0]}/${String(parts[1]).padStart(2, '0')}/${String(parts[2]).padStart(2, '0')}`;
    }
    return s;
  }

  getTodayJalaliString() {
    const [jy, jm, jd] = this.getTodayJalali();
    return `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`;
  }

  // Get all activity sessions matching a Jalali date string or falling in its local 00:00:00.000 - 23:59:59.999 timestamp range
  getActivitiesByDate(dateStr = null) {
    try {
      const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
      const range = this.getJalaliDateTimestampRange(targetDate);
      const startMs = range.startTimestamp;
      const endMs = range.endTimestamp;

      let rawSessions = [];
      try {
        const recent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
        const logs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
        const map = new Map();
        [...recent, ...logs].forEach(s => {
          if (!s || typeof s !== 'object') return;
          const key = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
          map.set(key, s);
        });
        rawSessions = Array.from(map.values());
      } catch (e) {
        rawSessions = [];
      }

      return rawSessions.filter(s => {
        if (!s || typeof s !== 'object') return false;
        const sDate = this.normalizeJalaliDate(s.dateStr || s.date);
        if (sDate === targetDate) return true;

        // Fallback: Check timestamp / createdAt / startTime range
        const ts = s.timestamp !== undefined ? s.timestamp : (s.createdAt !== undefined ? s.createdAt : s.startTime);
        if (ts !== undefined && ts !== null) {
          try {
            const numTs = typeof ts === 'number' ? ts : (typeof ts === 'string' && /^\d{10,}$/.test(ts.trim()) ? Number(ts.trim()) : null);
            if (numTs && !isNaN(numTs)) {
              if (numTs >= startMs && numTs <= endMs) return true;

              const d = new Date(numTs);
              if (!isNaN(d.getTime())) {
                const [jy, jm, jd] = this.gregorianToJalali(d.getFullYear(), d.getMonth() + 1, d.getDate());
                const calcDateStr = `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`;
                if (this.normalizeJalaliDate(calcDateStr) === targetDate) return true;
              }
            }
          } catch (e) {}
        }
        return false;
      });
    } catch (e) {
      return [];
    }
  }

  // Get pure study minutes for a specific Jalali date
  getStudyMinutesByDate(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const sessions = this.getActivitiesByDate(targetDate).filter(s => {
      if (!s) return false;
      const isNonStudy = (
        s.type === 'non-study' ||
        s.type === 'non_study' ||
        s.type === 'break' ||
        s.activityType === 'non_study' ||
        s.activityType === 'non-study' ||
        s.activityType === 'break' ||
        s.isStudy === false ||
        s.is_study_time === false ||
        s.counts_for_study === false ||
        s.isBreak === true ||
        s.is_break === true ||
        s.timerType === 'break' ||
        s.timerType === 2
      );
      return !isNonStudy;
    });
    return sessions.reduce((sum, s) => {
      const dur = Number(s.duration !== undefined ? s.duration : s.minutes);
      return sum + (isNaN(dur) ? 0 : Math.max(0, Math.ceil(dur)));
    }, 0);
  }

  // Get exact study hours as float
  getStudyHoursByDate(dateStr = null) {
    return +(this.getStudyMinutesByDate(dateStr) / 60).toFixed(2);
  }

  // Calculate consecutive daily study streak up to today
  getStudyStreak() {
    try {
      const [todayY, todayM, todayD] = this.getTodayJalali();
      let currentJdn = this.jalaliToJdn(todayY, todayM, todayD);
      const todayStr = `${todayY}/${String(todayM).padStart(2, '0')}/${String(todayD).padStart(2, '0')}`;
      
      let streak = 0;
      let checkJdn = currentJdn;
      
      const todayMins = this.getStudyMinutesByDate(todayStr);
      if (todayMins > 0) {
        streak++;
        checkJdn--;
      } else {
        checkJdn--;
      }

      for (let i = 0; i < 365; i++) {
        const [jy, jm, jd] = this.jdnToJalali(checkJdn);
        const dateStr = `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`;
        const mins = this.getStudyMinutesByDate(dateStr);
        if (mins > 0) {
          streak++;
          checkJdn--;
        } else {
          break;
        }
      }
      return streak;
    } catch (e) {
      return 0;
    }
  }

  // Get total tests for a specific Jalali date
  getDailyTestCount(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const sessions = this.getActivitiesByDate(targetDate).filter(s => {
      if (!s) return false;
      const isNonStudy = (
        s.type === 'non-study' ||
        s.type === 'non_study' ||
        s.type === 'break' ||
        s.activityType === 'non_study' ||
        s.activityType === 'non-study' ||
        s.activityType === 'break' ||
        s.isStudy === false ||
        s.is_study_time === false ||
        s.counts_for_study === false ||
        s.isBreak === true ||
        s.is_break === true ||
        s.timerType === 'break' ||
        s.timerType === 2
      );
      return !isNonStudy;
    });
    return sessions.reduce((sum, s) => sum + (Number(s.testCount !== undefined ? s.testCount : s.tests) || 0), 0);
  }

  // Recorded Focus Timer Data
  getRecordedTimerToday() {
    const todayKey = this.getTodayJalaliString();
    const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECORDED_TIMER) || '{}');
    return all[todayKey] || { minutes: 0, tests: 0 };
  }

  // --- NEW: DIRECT, UNIFIED AGGREGATION FROM SESSIONS ARRAY ---
  // The absolute source of truth for the dashboard is planex_recent_activity_sessions

  getTodayTotalMinutes() {
    return this.getStudyMinutesByDate(this.getTodayJalaliString());
  }

  getTodayTotalTests() {
    return this.getDailyTestCount(this.getTodayJalaliString());
  }

  _getWeekDayDateStr(dayIndex, referenceDate = new Date()) {
    const satDate = this.getCurrentWeekStartDate(referenceDate);
    const targetDate = new Date(satDate.getFullYear(), satDate.getMonth(), satDate.getDate() + dayIndex);
    const [jy, jm, jd] = this.gregorianToJalali(targetDate.getFullYear(), targetDate.getMonth() + 1, targetDate.getDate());
    return `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`;
  }

  getWeekDayMinutes(dayIndex) {
    const targetDateStr = this._getWeekDayDateStr(dayIndex);
    if (!targetDateStr) return 0;
    return this.getStudyMinutesByDate(targetDateStr);
  }

  getWeekDayTests(dayIndex) {
    const targetDateStr = this._getWeekDayDateStr(dayIndex);
    if (!targetDateStr) return 0;
    return this.getDailyTestCount(targetDateStr);
  }

  getDayCategoryBreakdown(dayIndex) {
    const targetDateStr = this._getWeekDayDateStr(dayIndex);
    if (!targetDateStr) return [];

    let allSessions = [];
    try {
      allSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      if (!Array.isArray(allSessions) || allSessions.length === 0) {
        allSessions = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      }
      if (!Array.isArray(allSessions)) allSessions = [];
    } catch (e) {
      allSessions = [];
    }

    // Memoize per day: same date + same session count => cached (prevents re-parse + log flood on repeated renders)
    const _memoKey = `${dayIndex}|${targetDateStr}|${allSessions.length}`;
    if (!this._breakdownMemoMap) this._breakdownMemoMap = {};
    if (this._breakdownMemoMap[_memoKey]) {
      return this._breakdownMemoMap[_memoKey];
    }

    const todayJalaliStr = this.getTodayJalaliString();
    const isTargetToday = (targetDateStr === todayJalaliStr);
    const nowMs = Date.now();
    const twentyFourHoursMs = 24 * 60 * 60 * 1000;

    const sessions = allSessions.filter(s => {
      if (!s || typeof s !== 'object') return false;
      const sDate = this.normalizeJalaliDate(s.dateStr || s.date);
      
      // A) Exact Match
      if (sDate === targetDateStr) return true;

      // B) 24h fallback for missing dates if targeting today
      if (isTargetToday && (!sDate || sDate.indexOf('/') === -1)) {
        const sTime = s.timestamp || s.createdAt || 0;
        if (sTime && (nowMs - sTime) <= twentyFourHoursMs) {
          return true;
        }
      }
      return false;
    });

    if (window.DEBUG_BREAKDOWN) {
      console.log(`[DEBUG] getDayCategoryBreakdown (dayIndex: ${dayIndex}): Date=${targetDateStr}, Found=${sessions.length} sessions`, sessions);
    }

    const breakdownMap = {};
    const categories = this.getCategories();

    sessions.forEach(s => {
      const isStudy = (s.type === 'study' || s.isStudy !== false);
      
      let itemTitle = '';
      if (s.categoryTitle && s.categoryTitle.trim()) {
        itemTitle = s.categoryTitle.trim();
      } else if (s.subject && s.subject.trim() && s.subject !== 'مطالعه متمرکز' && s.subject !== 'فعالیت غیردرسی') {
        itemTitle = s.subject.trim();
      } else if (isStudy) {
        itemTitle = 'مطالعه درسی';
      } else {
        itemTitle = 'فعالیت غیردرسی';
      }

      const catCode = s.categoryCode || 'other';

      let color = s.color;
      if (!color) {
        const cat = categories.find(c => c.title === itemTitle || c.code === catCode);
        color = cat ? cat.color : (isStudy ? '#0ea5e9' : '#f59e0b');
      }

      if (!breakdownMap[itemTitle]) {
        breakdownMap[itemTitle] = { title: itemTitle, minutes: 0, color };
      }
      breakdownMap[itemTitle].minutes += Math.max(1, Math.ceil(Number(s.duration || s.minutes) || 1));
    });

    const result = Object.values(breakdownMap).sort((a, b) => b.minutes - a.minutes);
    this._breakdownMemoMap[_memoKey] = result;
    return result;
  }
  // -------------------------------------------------------------

  getDailyStats(dateStr = null) {
    try {
      const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());

      // Check if targetDate is strictly in the future
      const parts = String(targetDate).split('/').map(Number);
      if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
        const targetJdn = this.jalaliToJdn(parts[0], parts[1], parts[2]);
        const todayJdn = this.getTodayJdn();
        if (targetJdn > todayJdn) {
          return {
            date: targetDate,
            studyMinutes: 0,
            studyHours: 0,
            nonStudyMinutes: 0,
            totalTests: 0,
            categoryMinutes: {},
            sessionsCount: 0
          };
        }
      }

      const matchingSessions = this.getActivitiesByDate(targetDate);

      let studyMinutes = 0;
      let nonStudyMinutes = 0;
      let totalTests = 0;
      const categoryMinutes = {};

      matchingSessions.forEach(s => {
        const dur = Number(s.duration !== undefined ? s.duration : s.minutes);
        const mins = isNaN(dur) ? 1 : Math.max(1, Math.ceil(dur));
        const tests = Number(s.testCount !== undefined ? s.testCount : s.tests) || 0;
        const catCode = s.categoryCode || s.category || 'سایر';
        
        categoryMinutes[catCode] = (categoryMinutes[catCode] || 0) + mins;

        if (s.type === 'study' || s.isStudy !== false) {
          studyMinutes += mins;
          totalTests += tests;
        } else {
          nonStudyMinutes += mins;
        }
      });

      return {
        date: targetDate,
        studyMinutes,
        studyHours: +(studyMinutes / 60).toFixed(2),
        nonStudyMinutes,
        totalTests,
        categoryMinutes,
        sessionsCount: matchingSessions.length
      };
    } catch (err) {
      console.warn('Error in getDailyStats:', err);
      return {
        date: dateStr || '',
        studyMinutes: 0,
        studyHours: 0,
        nonStudyMinutes: 0,
        totalTests: 0,
      };
    }
  }

  getStudyStatsByPeriod(period = 'today') {
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

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayTimestamp = todayStart.getTime();

    const now = new Date();
    const dayOfWeek = (now.getDay() + 1) % 7; // 0=Sat, 6=Fri
    const satDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek);
    satDate.setHours(0, 0, 0, 0);
    const satTimestamp = satDate.getTime();

    const todayJalaliStr = typeof this.getTodayJalaliString === 'function' ? this.getTodayJalaliString() : '';

    let totalStudyMinutes = 0;
    let totalTests = 0;
    const subjectsSet = new Set();

    allSessions.forEach(s => {
      if (!s || typeof s !== 'object') return;
      const sTime = Number(s.timestamp || s.createdAt || s.endTime || 0);
      const sDateStr = this.normalizeJalaliDate ? this.normalizeJalaliDate(s.dateStr || s.date) : (s.dateStr || s.date);

      let matchesTime = false;
      if (period === 'today') {
        matchesTime = (sTime >= todayTimestamp) || (sDateStr && sDateStr === todayJalaliStr);
      } else if (period === 'week') {
        matchesTime = (sTime >= satTimestamp);
      } else if (period === 'all') {
        matchesTime = true;
      }

      if (matchesTime) {
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

    return {
      studyMinutes: totalStudyMinutes,
      studyHours: +(totalStudyMinutes / 60).toFixed(2),
      testCount: totalTests,
      subjects: Array.from(subjectsSet)
    };
  }

  recordTimerSession(minutes, tests = 0) {
    const todayKey = this.getTodayJalaliString();
    const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECORDED_TIMER) || '{}');
    if (!all[todayKey]) all[todayKey] = { minutes: 0, tests: 0 };
    all[todayKey].minutes += minutes;
    all[todayKey].tests += tests;
    localStorage.setItem(STORAGE_KEYS.RECORDED_TIMER, JSON.stringify(all));
    this.addXP(minutes * 2 + tests * 3);
    return all[todayKey];
  }

  // Comprehensive Focus Mode & Activity Logger Recording (Study & Non-Study)
  recordFocusSession(options = {}) {
    const {
      type = 'study', // 'study' | 'non-study' | 'break'
      activityType = null,
      minutes = null,
      duration = null,
      tests = 0,
      testCount = null,
      category = null,
      categoryCode = null,
      categoryTitle = null,
      subject = '',
      studyMethod = '',
      note = '',
      rating = 5,
      timerType = 'pomodoro', // 'pomodoro' | 'stopwatch' | 'manual' | 'break'
      startTime = null,
      endTime = Date.now(),
      date = null,
      isBreak = false,
      is_break = false,
      is_study_time = null,
      counts_for_study = null,
      testCorrect = 0,
      testWrong = 0,
      testUnanswered = 0,
      testPercentage = null
    } = options;

    const isBreakMode = Boolean(
      isBreak ||
      is_break ||
      options.isBreak === true ||
      options.is_break === true ||
      timerType === 'break' ||
      timerType === 2
    );

    const isNonStudyType = Boolean(
      type === 'non-study' ||
      type === 'non_study' ||
      activityType === 'non-study' ||
      activityType === 'non_study'
    );

    let isStudy = !isNonStudyType && !isBreakMode;
    if (is_study_time === false || counts_for_study === false || options.is_study_time === false || options.counts_for_study === false) {
      isStudy = false;
    }

    const actualType = isStudy ? 'study' : (isBreakMode ? 'break' : 'non-study');

    const inputMins = (duration !== null && duration !== undefined) ? duration : ((minutes !== null && minutes !== undefined) ? minutes : 1);
    const rawMins = Math.ceil(Number(inputMins)) || 1;

    // Hard sanity check: If session duration is absurdly huge (> 12 hours / 720 mins), reject it completely.
    // An orphaned timer or stale session must never corrupt daily/weekly statistics.
    if (rawMins > 720) {
      console.warn(`[db.recordFocusSession] Rejected orphaned session with duration: ${rawMins} mins (>12h).`);
      return null;
    }

    // Cap realistic single session duration to maximum 4 hours (240 mins)
    const MAX_SESSION_MINS = 240;
    const safeMins = Math.min(MAX_SESSION_MINS, Math.max(1, rawMins));
    const safeTests = isStudy ? Math.max(0, parseInt(testCount !== null && testCount !== undefined ? testCount : tests) || 0) : 0;
    // Resolve category details based on actualType
    let cat = null;
    const safeCategoryName = String(category || categoryTitle || '').trim();

    if (isStudy) {
      const categories = this.getCategories();
      cat = categories.find(c => c.code === categoryCode);
      if (!cat && safeCategoryName) cat = categories.find(c => c.title === safeCategoryName || c.code === safeCategoryName);
      if (!cat) {
        cat = categories.find(c => isStudyCategory(c)) || {
          code: 'ع-س', title: safeCategoryName || 'مطالعه متمرکز', color: '#0ea5e9', icon: '📚', group: 'علمی', isStudy: true
        };
      }
    } else {
      const nonStudyCats = this.getNonStudyCategories();
      cat = nonStudyCats.find(c => c.code === categoryCode);
      if (!cat && safeCategoryName) cat = nonStudyCats.find(c => c.title === safeCategoryName || c.code === safeCategoryName);
      if (!cat) {
        cat = {
          code: categoryCode || (isBreakMode ? 'non_break' : 'غ-د'),
          title: safeCategoryName || (isBreakMode ? 'پارت استراحت ☕' : 'فعالیت غیردرسی'),
          color: isBreakMode ? '#38bdf8' : '#f59e0b',
          icon: isBreakMode ? '☕' : '🧘',
          group: 'غیردرسی',
          isStudy: false
        };
      }
    }

    // Now resolve final subjects using the discovered category
    const finalCategoryTitle = cat.title;
    const safeSubject = String(subject || '').trim() || (isStudy ? 'مطالعه متمرکز' : (isBreakMode ? 'استراحت و ریکاوری' : finalCategoryTitle));
    const safeNote = String(note || '').trim();

    const [jy, jm, jd] = this.getTodayJalali();
    const dayIndex = (new Date().getDay() + 1) % 7;
    const jalaliDateStr = this.normalizeJalaliDate(date || `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`);

    let resolvedEndTime = null;
    let resolvedStartTime = null;

    if (typeof endTime === 'number' && !isNaN(endTime) && endTime > 100000000000) {
      resolvedEndTime = endTime;
    } else if (typeof endTime === 'string') {
      if (endTime.includes(':')) {
        const parts = endTime.split(':').map(Number);
        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
          const d = new Date();
          d.setHours(parts[0], parts[1], 0, 0);
          resolvedEndTime = d.getTime();
        }
      } else {
        const num = Number(endTime);
        if (!isNaN(num) && num > 100000000000) resolvedEndTime = num;
      }
    }

    if (typeof startTime === 'number' && !isNaN(startTime) && startTime > 100000000000) {
      resolvedStartTime = startTime;
    } else if (typeof startTime === 'string') {
      if (startTime.includes(':')) {
        const parts = startTime.split(':').map(Number);
        if (!isNaN(parts[0]) && !isNaN(parts[1])) {
          const d = new Date();
          d.setHours(parts[0], parts[1], 0, 0);
          resolvedStartTime = d.getTime();
        }
      } else {
        const num = Number(startTime);
        if (!isNaN(num) && num > 100000000000) resolvedStartTime = num;
      }
    }

    if (resolvedStartTime && !resolvedEndTime) {
      resolvedEndTime = resolvedStartTime + (safeMins * 60 * 1000);
    } else if (resolvedEndTime && !resolvedStartTime) {
      resolvedStartTime = resolvedEndTime - (safeMins * 60 * 1000);
    } else if (!resolvedStartTime && !resolvedEndTime) {
      resolvedEndTime = Date.now();
      resolvedStartTime = resolvedEndTime - (safeMins * 60 * 1000);
    }

    // 1. Create full activity session object
    const sessionObj = {
      id: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      type: actualType,
      category: cat.title,
      categoryCode: cat.code,
      categoryTitle: cat.title,
      color: cat.color || (isStudy ? '#0ea5e9' : (isBreakMode ? '#38bdf8' : '#f59e0b')),
      icon: cat.icon || (isStudy ? '📚' : (isBreakMode ? '☕' : '🧘')),
      isStudy,
      is_study_time: isStudy,
      counts_for_study: isStudy,
      isBreak: isBreakMode,
      is_break: isBreakMode,
      activityType: isStudy ? 'study' : (isBreakMode ? 'break' : 'non_study'),
      subject: safeSubject,
      studyMethod: studyMethod || '',
      duration: safeMins,
      minutes: safeMins,
      testCount: safeTests,
      tests: safeTests,
      testCorrect: Math.max(0, parseInt(testCorrect) || 0),
      testWrong: Math.max(0, parseInt(testWrong) || 0),
      testUnanswered: Math.max(0, parseInt(testUnanswered) || 0),
      testPercentage: testPercentage !== null ? testPercentage : (safeTests > 0 ? +(((3 * Math.max(0, parseInt(testCorrect) || 0)) - Math.max(0, parseInt(testWrong) || 0)) / (3 * safeTests) * 100).toFixed(1) : null),
      note: safeNote,
      timerType: timerType || (isBreakMode ? 'break' : 'pomodoro'),
      date: jalaliDateStr,
      dateStr: jalaliDateStr,
      startTime: resolvedStartTime,
      endTime: resolvedEndTime,
      timestamp: resolvedEndTime
    };

    // 2. Save in planex_recent_activity_sessions and planex_study_logs
    const recentSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
    recentSessions.unshift(sessionObj);
    if (recentSessions.length > 5000) recentSessions.length = 5000;
    localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(recentSessions));

    const studyLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
    studyLogs.unshift(sessionObj);
    if (studyLogs.length > 5000) studyLogs.length = 5000;
    localStorage.setItem('planex_study_logs', JSON.stringify(studyLogs));

    // 3. Update structured planex_daily_stats
    const dailyStatsStorage = JSON.parse(localStorage.getItem('planex_daily_stats') || '{}');
    if (!dailyStatsStorage[jalaliDateStr]) {
      dailyStatsStorage[jalaliDateStr] = {
        date: jalaliDateStr,
        studyMinutes: 0,
        studyHours: 0,
        nonStudyMinutes: 0,
        totalTests: 0,
        categoryMinutes: {},
        sessionsCount: 0
      };
    }
    const dayObj = dailyStatsStorage[jalaliDateStr];
    dayObj.sessionsCount = (dayObj.sessionsCount || 0) + 1;
    const catCode = cat.code || 'other';
    dayObj.categoryMinutes[catCode] = (dayObj.categoryMinutes[catCode] || 0) + safeMins;
    if (isStudy) {
      dayObj.studyMinutes = (dayObj.studyMinutes || 0) + safeMins;
      dayObj.studyHours = +(dayObj.studyMinutes / 60).toFixed(2);
      dayObj.totalTests = (dayObj.totalTests || 0) + safeTests;
    } else {
      dayObj.nonStudyMinutes = (dayObj.nonStudyMinutes || 0) + safeMins;
    }
    localStorage.setItem('planex_daily_stats', JSON.stringify(dailyStatsStorage));

    // 4. Record in daily timer storage & award XP
    if (isStudy) {
      this.recordTimerSession(safeMins, safeTests);
    } else {
      this.addXP(Math.round(safeMins * 0.5));
    }

    // 5. Record in Subject/Category specific study stats
    const todayKey = jalaliDateStr || this.getTodayJalaliString();
    const subjectStats = JSON.parse(localStorage.getItem('planex_subject_study_stats') || '{}');
    if (!subjectStats[todayKey]) subjectStats[todayKey] = {};
    const statKey = safeSubject || cat.title;
    if (!subjectStats[todayKey][statKey]) {
      subjectStats[todayKey][statKey] = { minutes: 0, tests: 0, category: cat.title, isStudy };
    }
    subjectStats[todayKey][statKey].minutes += safeMins;
    subjectStats[todayKey][statKey].tests += safeTests;
    localStorage.setItem('planex_subject_study_stats', JSON.stringify(subjectStats));

    // Invalidate breakdown memo so next render recomputes with new session
    this._breakdownMemoMap = {};

    return sessionObj;
  }

  saveStudyLogs(incomingLogs) {
    if (!Array.isArray(incomingLogs)) return [];
    try {
      let existingSessions = [];
      try {
        existingSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
        if (!Array.isArray(existingSessions)) existingSessions = [];
      } catch (_) { existingSessions = []; }

      let existingStudyLogs = [];
      try {
        existingStudyLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
        if (!Array.isArray(existingStudyLogs)) existingStudyLogs = [];
      } catch (_) { existingStudyLogs = []; }

      const sessionMap = new Map();

      // Index existing
      [...existingSessions, ...existingStudyLogs].forEach(s => {
        if (!s || typeof s !== 'object') return;
        const key = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
        sessionMap.set(key, s);
      });

      // Merge incoming
      incomingLogs.forEach(s => {
        if (!s || typeof s !== 'object') return;
        const key = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
        if (!s.dateStr && s.date) s.dateStr = s.date;
        if (!s.date && s.dateStr) s.date = s.dateStr;
        sessionMap.set(key, s);
      });

      const merged = Array.from(sessionMap.values());

      // Sort newest first by timestamp or time
      merged.sort((a, b) => {
        const tA = Number(a.timestamp || a.endTime || a.startTime) || 0;
        const tB = Number(b.timestamp || b.endTime || b.startTime) || 0;
        return tB - tA;
      });

      if (merged.length > 5000) merged.length = 5000;

      localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(merged));
      localStorage.setItem('planex_study_logs', JSON.stringify(merged));

      this._breakdownMemoMap = {};
      return merged;
    } catch (e) {
      console.error('[db] saveStudyLogs error:', e);
      return incomingLogs;
    }
  }

  // Alias for backward compatibility
  recordPomodoroSession(options = {}) {
    return this.recordFocusSession(options);
  }

  getRecentFocusSessions(limit = 10) {
    try {
      const recent = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      const logs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      const map = new Map();
      [...recent, ...logs].forEach(s => {
        if (!s || typeof s !== 'object') return;
        const key = s.id || `${s.date || s.dateStr}_${s.startTime || s.timestamp || s.subject}_${s.duration || s.minutes}`;
        map.set(key, s);
      });
      const merged = Array.from(map.values());
      merged.sort((a, b) => {
        const tsA = Number(a.timestamp || a.createdAt || 0);
        const tsB = Number(b.timestamp || b.createdAt || 0);
        return tsB - tsA;
      });
      return merged.slice(0, limit);
    } catch(e) {
      return [];
    }
  }

  deleteFocusSession(sessionId) {
    try {
      let recentSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      if (!Array.isArray(recentSessions)) recentSessions = [];
      recentSessions = recentSessions.filter(s => s && s.id !== sessionId);
      localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(recentSessions));

      let studyLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      if (Array.isArray(studyLogs)) {
        studyLogs = studyLogs.filter(s => s && s.id !== sessionId);
        localStorage.setItem('planex_study_logs', JSON.stringify(studyLogs));
      }
    } catch(e) {}
  }

  // Self-healing cleaner for corrupted orphaned timer logs (> 12 hours) or days with > 24 hours
  sanitizeCorruptedStats() {
    try {
      const dailyStatsStorage = JSON.parse(localStorage.getItem('planex_daily_stats') || '{}');
      let modifiedStats = false;
      Object.keys(dailyStatsStorage).forEach(dateKey => {
        const d = dailyStatsStorage[dateKey];
        if (d && d.studyMinutes > 1440) { // Single day exceeds 24 hours
          d.studyMinutes = Math.min(1440, Math.max(0, d.studyMinutes));
          d.studyHours = +(d.studyMinutes / 60).toFixed(2);
          modifiedStats = true;
        }
      });
      if (modifiedStats) {
        localStorage.setItem('planex_daily_stats', JSON.stringify(dailyStatsStorage));
      }

      ['planex_recent_activity_sessions', 'planex_study_logs'].forEach(key => {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const sessions = JSON.parse(raw);
            if (Array.isArray(sessions)) {
              const cleaned = sessions.filter(s => {
                const m = Number(s?.duration || s?.minutes) || 0;
                return m <= 720; // Purge any orphaned sessions > 12h
              });
              if (cleaned.length !== sessions.length) {
                localStorage.setItem(key, JSON.stringify(cleaned));
              }
            }
          }
        } catch (_) {}
      });
    } catch (_) {}
  }

  // Aggregate subject study stats strictly for the target calendar date (midnight-to-midnight)
  getSubjectStudyStats(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const sessions = this.getActivitiesByDate(targetDate);
    const result = {};

    sessions.forEach(s => {
      if (!s || typeof s !== 'object') return;
      const isNonStudy = (
        s.type === 'non-study' ||
        s.type === 'non_study' ||
        s.type === 'break' ||
        s.activityType === 'non_study' ||
        s.activityType === 'non-study' ||
        s.activityType === 'break' ||
        s.isStudy === false ||
        s.is_study_time === false ||
        s.counts_for_study === false ||
        s.isBreak === true ||
        s.is_break === true ||
        s.timerType === 'break' ||
        s.timerType === 2
      );
      const isStudy = !isNonStudy;

      let itemTitle = '';
      if (s.categoryTitle && s.categoryTitle.trim()) {
        itemTitle = s.categoryTitle.trim();
      } else if (s.subject && s.subject.trim() && s.subject !== 'مطالعه متمرکز' && s.subject !== 'فعالیت غیردرسی') {
        itemTitle = s.subject.trim();
      } else if (isStudy) {
        itemTitle = 'مطالعه متمرکز';
      } else {
        itemTitle = 'فعالیت غیردرسی';
      }

      const durMins = Math.max(0, Number(s.duration !== undefined ? s.duration : s.minutes) || 0);
      const testCount = Math.max(0, Number(s.testCount !== undefined ? s.testCount : s.tests) || 0);

      if (!result[itemTitle]) {
        result[itemTitle] = {
          minutes: 0,
          tests: 0,
          category: itemTitle,
          isStudy
        };
      }
      result[itemTitle].minutes += durMins;
      result[itemTitle].tests += testCount;
    });

    return result;
  }

  // User Profile
  getUserProfile() {
    const DEFAULT_PROFILE = {
      name: "",
      major: "",
      targetField: ""
    };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE));
      const profile = (parsed && typeof parsed === 'object') ? { ...DEFAULT_PROFILE, ...parsed } : DEFAULT_PROFILE;
      const effectiveName = this.getEffectiveUserName();
      if (effectiveName) {
        profile.name = effectiveName;
        profile.nickname = effectiveName;
      }
      return profile;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  }

  setUserProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('[db] setUserProfile localStorage quota error:', e);
    }
  }

  // Export / Import
  exportAllData() {
    const data = {};
    Object.values(STORAGE_KEYS).forEach(key => {
      data[key] = localStorage.getItem(key);
    });
    return JSON.stringify(data, null, 2);
  }

  importAllData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      Object.keys(data).forEach(key => {
        if (data[key] !== undefined && data[key] !== null) {
          localStorage.setItem(key, data[key]);
        }
      });
      return true;
    } catch (e) {
      console.error("Import failed:", e);
      return false;
    }
  }

  // Theme & Font Settings
  getThemeSettings() {
    const defaults = {
      appTheme: 'theme-dark-glass', // Luxury Dark AMOLED Glassmorphism
      themeMode: 'mode-dark', // Dark glass mode as single default
      fontFamily: 'font-sahel' // Sahel font as default
    };
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_THEME);
    if (!saved) return defaults;
    try {
      const parsed = JSON.parse(saved);
      return { ...defaults, ...parsed, appTheme: 'theme-dark-glass', themeMode: 'mode-dark' };
    } catch (e) {
      return defaults;
    }
  }

  setThemeSettings(settings) {
    const current = this.getThemeSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEYS.ACTIVE_THEME, JSON.stringify(updated));
    return updated;
  }

  // Flashcards & Leitner 5-Box System
  getFlashcards() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}

    // Default Seed Flashcards for first run
    const defaultCards = [
      {
        id: 'fc_seed_1',
        question: 'تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟',
        answer: 'تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.',
        deck: 'متدولوژی مطالعه',
        box: 1,
        createdAt: '۱۴۰۵/۰۱/۰۱',
        createdTimestamp: Date.now() - 86400000,
        nextReviewDate: Date.now() - 1000
      },
      {
        id: 'fc_seed_2',
        question: 'در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟',
        answer: 'خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).',
        deck: 'جعبه لایتنر',
        box: 2,
        createdAt: '۱۴۰۵/۰۱/۰۱',
        createdTimestamp: Date.now() - 172800000,
        nextReviewDate: Date.now() - 1000
      },
      {
        id: 'fc_seed_3',
        question: 'بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟',
        answer: 'پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).',
        deck: 'مدیریت زمان',
        box: 1,
        createdAt: '۱۴۰۵/۰۱/۰۱',
        createdTimestamp: Date.now() - 86400000,
        nextReviewDate: Date.now() - 1000
      }
    ];
    try {
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(defaultCards));
    } catch (e) {}
    return defaultCards;
  }

  addFlashcard(question, answer, deck = 'عمومی') {
    const list = this.getFlashcards();
    const [jy, jm, jd] = this.getTodayJalali();
    const qStr = String(question || '').trim();
    const aStr = String(answer || '').trim();
    if (!qStr || !aStr) return null;

    const newCard = {
      id: 'fc_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
      question: qStr,
      answer: aStr,
      deck: String(deck || 'عمومی').trim(),
      box: 1, // Start in Leitner box 1
      streak: 0,
      reviewCount: 0,
      createdAt: `${jy}/${jm}/${jd}`,
      createdTimestamp: Date.now(),
      lastReviewed: null,
      nextReviewDate: Date.now() // Ready for review immediately
    };
    list.unshift(newCard);
    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(list));
    return newCard;
  }

  addFlashcards(cardsArray, deck = 'هوش مصنوعی') {
    if (!Array.isArray(cardsArray) || cardsArray.length === 0) return 0;
    const list = this.getFlashcards();
    const [jy, jm, jd] = this.getTodayJalali();
    let count = 0;
    
    cardsArray.forEach((c, idx) => {
      if (!c) return;
      const q = typeof c === 'object' ? (c.question || c.q || '') : '';
      const a = typeof c === 'object' ? (c.answer || c.a || '') : '';
      const d = (typeof c === 'object' && c.deck) ? c.deck : deck;
      
      const qStr = String(q).trim();
      const aStr = String(a).trim();

      if (qStr && aStr) {
        list.unshift({
          id: 'fc_' + (Date.now() + idx) + '_' + Math.floor(Math.random() * 10000),
          question: qStr,
          answer: aStr,
          deck: String(d || 'هوش مصنوعی').trim(),
          box: 1, // Start in Leitner box 1
          streak: 0,
          reviewCount: 0,
          createdAt: `${jy}/${jm}/${jd}`,
          createdTimestamp: Date.now(),
          lastReviewed: null,
          nextReviewDate: Date.now() // Immediately ready for review
        });
        count++;
      }
    });

    if (count > 0) {
      localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(list));
    }
    return count;
  }

  reviewFlashcard(id, isCorrect) {
    const list = this.getFlashcards();
    const card = list.find(c => c.id === id || c.id == id);
    if (!card) return null;

    const intervals = [1, 2, 4, 8, 16]; // Days in Leitner boxes 1 to 5
    const now = Date.now();

    if (isCorrect) {
      card.box = Math.min(5, (card.box || 1) + 1);
      card.streak = (card.streak || 0) + 1;
    } else {
      card.box = 1; // Return to box 1 upon error
      card.streak = 0;
    }

    card.lastReviewed = now;
    card.reviewCount = (card.reviewCount || 0) + 1;
    const daysToAdd = intervals[(card.box || 1) - 1] || 1;
    card.nextReviewDate = now + (daysToAdd * 24 * 60 * 60 * 1000);

    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(list));
    return card;
  }

  deleteFlashcard(id) {
    let list = this.getFlashcards();
    list = list.filter(c => c.id !== id && c.id != id);
    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(list));
    return list;
  }

  getLeitnerStats() {
    const list = this.getFlashcards();
    const now = Date.now();
    const stats = {
      total: list.length,
      due: 0,
      mastered: 0,
      boxes: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    list.forEach(c => {
      const box = Math.min(5, Math.max(1, c.box || 1));
      stats.boxes[box] = (stats.boxes[box] || 0) + 1;
      if (box === 5) stats.mastered++;
      if (!c.nextReviewDate || c.nextReviewDate <= now) {
        stats.due++;
      }
    });

    return stats;
  }

  // Get list of unique study subjects studied on a specific Jalali date
  getTodayStudiedSubjects(dateStr = null) {
    try {
      const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
      const sessions = this.getActivitiesByDate(targetDate).filter(s => {
        if (!s) return false;
        const isNonStudy = (
          s.type === 'non-study' ||
          s.type === 'non_study' ||
          s.type === 'break' ||
          s.activityType === 'non_study' ||
          s.activityType === 'non-study' ||
          s.activityType === 'break' ||
          s.isStudy === false ||
          s.is_study_time === false ||
          s.counts_for_study === false ||
          s.isBreak === true ||
          s.is_break === true ||
          s.timerType === 'break' ||
          s.timerType === 2
        );
        return !isNonStudy;
      });
      const subjectsSet = new Set();

      sessions.forEach(s => {
        const sub = (s.subject && typeof s.subject === 'string' && s.subject.trim() && s.subject !== 'مطالعه متمرکز' && s.subject !== 'فعالیت غیردرسی')
          ? s.subject.trim()
          : (s.categoryTitle || s.category || '');
        if (sub && sub.trim()) {
          subjectsSet.add(sub.trim());
        }
      });

      // Also check matrix hourly logs for today if targeting today's date
      if (targetDate === this.getTodayJalaliString()) {
        const currentWeek = this.getCurrentWeek();
        if (currentWeek && currentWeek.id) {
          const logs = this.getHourlyLogs(currentWeek.id);
          const dayIndex = (new Date().getDay() + 1) % 7;
          const categories = this.getCategories();
          Object.keys(logs).forEach(key => {
            if (key.startsWith(`${dayIndex}_`)) {
              const log = logs[key];
              if (log && log.categoryCode) {
                const cat = categories.find(c => c.code === log.categoryCode);
                const isStudy = cat ? isStudyCategory(cat) : (log.categoryCode.startsWith('ع') || log.categoryCode === 'ع-س');
                if (isStudy) {
                  const subjectName = (log.subject && log.subject.trim()) ? log.subject.trim() : (cat ? cat.title : '');
                  if (subjectName && subjectName !== 'مطالعه متمرکز') subjectsSet.add(subjectName);
                }
              }
            }
          });
        }
      }

      return Array.from(subjectsSet);
    } catch (e) {
      return [];
    }
  }

  // ── Multi-Group Support & Private Study Squads Management ──
  getUserGroups() {
    try {
      let groups = [];
      const rawGroups = localStorage.getItem(STORAGE_KEYS.USER_GROUPS);
      if (rawGroups) {
        const parsed = JSON.parse(rawGroups);
        if (Array.isArray(parsed)) {
          groups = parsed.filter(g => g && (g.code || g.groupCode));
        }
      }

      // Backward compatibility: check planex_my_groups & planex_my_rooms if groups array is empty
      if (groups.length === 0) {
        for (const fallbackKey of ['planex_my_groups', 'planex_my_rooms', 'my_rooms']) {
          const raw = localStorage.getItem(fallbackKey);
          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              if (Array.isArray(parsed) && parsed.length > 0) {
                const valid = parsed.filter(g => g && (g.code || g.groupCode || g.id || g.room_code));
                if (valid.length > 0) {
                  groups = valid;
                  localStorage.setItem(STORAGE_KEYS.USER_GROUPS, JSON.stringify(groups));
                  break;
                }
              }
            } catch (_) {}
          }
        }
      }

      // Backward compatibility: migrate legacy single-group if groups array is still empty
      if (groups.length === 0) {
        const legacyRaw = localStorage.getItem(STORAGE_KEYS.USER_GROUP_DATA);
        if (legacyRaw) {
          const legacy = JSON.parse(legacyRaw);
          if (legacy && (legacy.groupCode || legacy.code)) {
            const single = {
              code: String(legacy.groupCode || legacy.code).trim().toUpperCase(),
              name: String(legacy.groupName || legacy.name || `گروه ${legacy.groupCode}`).trim(),
              joinedAt: legacy.joinedAt || Date.now(),
              isOwner: !!legacy.isOwner,
              userId: legacy.userId || null
            };
            groups = [single];
            localStorage.setItem(STORAGE_KEYS.USER_GROUPS, JSON.stringify(groups));
            localStorage.setItem(STORAGE_KEYS.ACTIVE_GROUP_CODE, single.code);
          }
        }
      }

      // Normalize format
      return groups.map(g => ({
        code: String(g.code || g.groupCode || g.room_code || g.id || '').trim().toUpperCase(),
        name: String(g.name || g.title || g.groupName || `گروه ${g.code || g.groupCode || g.id}`).trim(),
        joinedAt: g.joinedAt || g.created_at || Date.now(),
        isOwner: Boolean(g.isOwner || g.is_owner || g.role === 'owner'),
        userId: g.userId || g.creator_id || null
      })).filter(g => g.code);
    } catch (e) {
      console.error('Error fetching user groups:', e);
      return [];
    }
  }

  setUserGroups(groupsList) {
    try {
      if (!Array.isArray(groupsList)) groupsList = [];
      const sanitized = groupsList
        .filter(g => g && (g.code || g.groupCode || g.room_code || g.id))
        .map(g => ({
          code: String(g.code || g.groupCode || g.room_code || g.id).trim().toUpperCase(),
          name: String(g.name || g.title || g.groupName || `گروه ${g.code || g.groupCode || g.id}`).trim(),
          joinedAt: g.joinedAt || g.created_at || Date.now(),
          isOwner: Boolean(g.isOwner || g.is_owner || g.role === 'owner'),
          userId: g.userId || g.creator_id || null
        }));
      
      // Deduplicate by code
      const uniqueMap = new Map();
      sanitized.forEach(g => uniqueMap.set(g.code, g));
      const uniqueList = Array.from(uniqueMap.values());

      localStorage.setItem(STORAGE_KEYS.USER_GROUPS, JSON.stringify(uniqueList));
      localStorage.setItem('planex_my_groups', JSON.stringify(uniqueList));
      localStorage.setItem('planex_my_rooms', JSON.stringify(uniqueList));

      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('rooms-updated'));
      }

      // Also sync active code
      const activeCode = this.getActiveGroupCode();
      if (!activeCode || !uniqueMap.has(activeCode)) {
        const nextCode = uniqueList.length > 0 ? uniqueList[0].code : null;
        if (nextCode) {
          localStorage.setItem(STORAGE_KEYS.ACTIVE_GROUP_CODE, nextCode);
        } else {
          localStorage.removeItem(STORAGE_KEYS.ACTIVE_GROUP_CODE);
        }
      }

      // Sync legacy key
      const activeGroup = this.getActiveGroup();
      if (activeGroup) {
        localStorage.setItem(STORAGE_KEYS.USER_GROUP_DATA, JSON.stringify({
          groupCode: activeGroup.code,
          groupName: activeGroup.name,
          joinedAt: activeGroup.joinedAt,
          isOwner: activeGroup.isOwner,
          userId: activeGroup.userId
        }));
      } else {
        localStorage.removeItem(STORAGE_KEYS.USER_GROUP_DATA);
      }

      return uniqueList;
    } catch (e) {
      console.error('Error saving user groups:', e);
      return [];
    }
  }

  removeUserGroup(groupCode) {
    try {
      if (!groupCode) return [];
      const cleanCode = String(groupCode).trim().toUpperCase();
      let groups = this.getUserGroups();
      groups = groups.filter(g => String(g.code || g.groupCode || g.room_code || g.id || '').trim().toUpperCase() !== cleanCode);
      
      localStorage.setItem(STORAGE_KEYS.USER_GROUPS, JSON.stringify(groups));
      localStorage.setItem('planex_my_groups', JSON.stringify(groups));
      localStorage.setItem('planex_my_rooms', JSON.stringify(groups));

      // Remove from legacy keys if matches
      const activeCode = this.getActiveGroupCode();
      if (activeCode === cleanCode) {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_GROUP_CODE);
        localStorage.removeItem(STORAGE_KEYS.USER_GROUP_DATA);
        localStorage.removeItem('planex_active_group_code');
        localStorage.removeItem('active_room');
        localStorage.removeItem('planex_active_room');
        localStorage.removeItem('planex_user_group_data');
      }

      // Update active group code to remaining groups
      if (groups.length > 0) {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_GROUP_CODE, groups[0].code);
      } else {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_GROUP_CODE);
      }

      return groups;
    } catch (e) {
      console.error('Error removing user group:', e);
      return [];
    }
  }

  getActiveGroupCode() {
    try {
      const active = localStorage.getItem(STORAGE_KEYS.ACTIVE_GROUP_CODE);
      if (active && active.trim()) {
        return active.trim().toUpperCase();
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  setActiveGroupCode(code) {
    try {
      if (!code) {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_GROUP_CODE);
        localStorage.removeItem(STORAGE_KEYS.USER_GROUP_DATA);
        return null;
      }
      const clean = String(code).trim().toUpperCase();
      localStorage.setItem(STORAGE_KEYS.ACTIVE_GROUP_CODE, clean);

      // Sync legacy key
      const activeGroup = this.getActiveGroup();
      if (activeGroup) {
        localStorage.setItem(STORAGE_KEYS.USER_GROUP_DATA, JSON.stringify({
          groupCode: activeGroup.code,
          groupName: activeGroup.name,
          joinedAt: activeGroup.joinedAt,
          isOwner: activeGroup.isOwner,
          userId: activeGroup.userId
        }));
      }
      return clean;
    } catch (e) {
      return null;
    }
  }

  getActiveGroup() {
    const groups = this.getUserGroups();
    if (groups.length === 0) return null;
    const activeCode = this.getActiveGroupCode();
    if (!activeCode) return null;
    const found = groups.find(g => g.code === activeCode);
    return found || null;
  }

  addUserGroup(groupData) {
    try {
      if (!groupData) return null;
      const rawCode = groupData.code || groupData.groupCode;
      if (!rawCode) return null;

      const code = String(rawCode).trim().toUpperCase();
      const name = String(groupData.name || groupData.groupName || `گروه ${code}`).trim();
      const groups = this.getUserGroups();

      const existingIdx = groups.findIndex(g => g.code === code);
      const newGroupObj = {
        code,
        name,
        joinedAt: groupData.joinedAt || Date.now(),
        isOwner: existingIdx >= 0 ? (groupData.isOwner ?? groups[existingIdx].isOwner) : !!groupData.isOwner,
        userId: groupData.userId || (existingIdx >= 0 ? groups[existingIdx].userId : null)
      };

      if (existingIdx >= 0) {
        groups[existingIdx] = newGroupObj;
      } else {
        groups.unshift(newGroupObj);
      }

      this.setUserGroups(groups);
      this.setActiveGroupCode(code);
      return newGroupObj;
    } catch (e) {
      console.error('Error adding user group:', e);
      return null;
    }
  }

  removeUserGroup(codeToRemove) {
    try {
      const code = String(codeToRemove || this.getActiveGroupCode() || '').trim().toUpperCase();
      if (!code) return false;

      let groups = this.getUserGroups();
      groups = groups.filter(g => g.code !== code);
      this.setUserGroups(groups);
      return true;
    } catch (e) {
      console.error('Error removing user group:', e);
      return false;
    }
  }

  // Legacy compatibility methods
  getUserGroupData() {
    const active = this.getActiveGroup();
    if (!active) return null;
    return {
      groupCode: active.code,
      groupName: active.name,
      joinedAt: active.joinedAt,
      isOwner: active.isOwner,
      userId: active.userId
    };
  }

  setUserGroupData(groupData) {
    return this.addUserGroup(groupData);
  }

  leaveUserGroup(code = null) {
    return this.removeUserGroup(code);
  }

  // ── Personal Cloud Sync & Multi-Device Token Management ──
  getOrCreatePersonalSyncToken() {
    let token = localStorage.getItem(STORAGE_KEYS.PERSONAL_SYNC_TOKEN);
    if (!token) {
      const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      const randStr = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      token = `SYNC-${randStr}`;
      localStorage.setItem(STORAGE_KEYS.PERSONAL_SYNC_TOKEN, token);
    }
    return token;
  }

  setPersonalSyncToken(token) {
    if (token) {
      const clean = String(token).trim().toUpperCase();
      localStorage.setItem(STORAGE_KEYS.PERSONAL_SYNC_TOKEN, clean);
      return clean;
    }
    return null;
  }

  getPersonalSyncInfo() {
    const token = this.getOrCreatePersonalSyncToken();
    const lastSyncRaw = localStorage.getItem(STORAGE_KEYS.LAST_PERSONAL_SYNC);
    const lastSyncTimestamp = lastSyncRaw ? parseInt(lastSyncRaw, 10) : 0;

    let lastSyncText = 'هنوز در فضای ابری ذخیره نشده';
    if (lastSyncTimestamp > 0) {
      const diffMs = Date.now() - lastSyncTimestamp;
      const minsAgo = Math.floor(diffMs / (60 * 1000));
      const hoursAgo = Math.floor(minsAgo / 60);
      if (minsAgo < 1) lastSyncText = 'لحظاتی پیش';
      else if (minsAgo < 60) lastSyncText = `${minsAgo} دقیقه پیش`;
      else if (hoursAgo < 24) lastSyncText = `${hoursAgo} ساعت پیش`;
      else lastSyncText = `${Math.floor(hoursAgo / 24)} روز پیش`;
    }

    return {
      token,
      lastSyncTimestamp,
      lastSyncText,
      hasSyncedBefore: lastSyncTimestamp > 0
    };
  }

  markPersonalSyncSuccess() {
    localStorage.setItem(STORAGE_KEYS.LAST_PERSONAL_SYNC, String(Date.now()));
  }

  // ── Persistent User Profile Engine ──
  getUserProfile() {
    let profile = {};
    try {
      profile = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE) || '{}');
    } catch(e) {}
    const storedAvatar = localStorage.getItem('planex_user_avatar');
    if (storedAvatar) {
      profile.avatar = storedAvatar;
      profile.avatar_url = storedAvatar;
      profile.photo = storedAvatar;
      profile.photoUrl = storedAvatar;
    }
    return profile;
  }

  setUserProfile(profileObj) {
    if (!profileObj || typeof profileObj !== 'object') return {};
    try {
      const existing = this.getUserProfile() || {};
      const updated = { ...existing, ...profileObj };
      const av = profileObj.avatar || profileObj.avatar_url || profileObj.photo || profileObj.photoUrl || localStorage.getItem('planex_user_avatar');
      if (av) {
        localStorage.setItem('planex_user_avatar', av);
        updated.avatar = av;
        updated.avatar_url = av;
        updated.photo = av;
        updated.photoUrl = av;
      }
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('profileUpdated'));
      }
      return updated;
    } catch(e) {
      console.warn('Error setting user profile:', e);
      return profileObj;
    }
  }

  saveProfile(profileObj) {
    return this.setUserProfile(profileObj);
  }

  getProfile() {
    return this.getUserProfile();
  }
}

export const db = new DatabaseEngine();
