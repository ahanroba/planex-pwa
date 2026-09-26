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
  FLASHCARDS: 'planex_flashcards'
};

import { ACTIVITY_PALETTE_24, DEFAULT_CATEGORIES, DEFAULT_NON_STUDY_CATEGORIES, formatStudyTime, getNextActivityColor, isStudyCategory } from './constants.js';


const DEFAULT_SUBJECTS = [
  "زیست‌شناسی", "ریاضیات", "فیزیک", "شیمی", "ادبیات", "زبان انگلیسی", "دین و زندگی", "زمین‌شناسی"
];

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
    return JSON.stringify(backupObj, null, 2);
  }

  importAllDataJSON(jsonInput) {
    try {
      const data = typeof jsonInput === 'string' ? JSON.parse(jsonInput) : jsonInput;
      if (typeof data !== 'object' || data === null) throw new Error("فرمت فایل پشتیبان معتبر نیست.");
      
      Object.keys(data).forEach(key => {
        if (key === '_backup_metadata') return;
        const val = data[key];
        if (val === null || val === undefined) return;
        if (typeof val === 'object') {
          localStorage.setItem(key, JSON.stringify(val));
        } else {
          localStorage.setItem(key, String(val));
        }
      });
      return true;
    } catch(err) {
      console.error('Import failed:', err);
      throw err;
    }
  }

  constructor() {
    this.initDefaults();
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
      localStorage.setItem(STORAGE_KEYS.CUSTOM_SUBJECTS, JSON.stringify(DEFAULT_SUBJECTS));
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
        name: "دانش‌آموز پرتلاش",
        major: "علوم تجربی",
        targetField: "پزشکی دانشگاه تهران"
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

  // Standard Jalali Year / Month / Week Engine (5 weeks per Jalali Month)
  // Ensures week always aligns from Saturday to Friday
  getWeekObject(jy, jm, jw) {
    const jalaliMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const weekNames = ['هفته اول', 'هفته دوم', 'هفته سوم', 'هفته چهارم', 'هفته پنجم', 'هفته ششم'];
    const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

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

    // We can format dateRange using JS Date
    const diffSat = saturdayJdn - todayJdn;
    const diffFri = fridayJdn - todayJdn;
    const dSat = new Date(); dSat.setDate(dSat.getDate() + diffSat);
    const dFri = new Date(); dFri.setDate(dFri.getDate() + diffFri);

    const faFormatterDay = new Intl.DateTimeFormat('fa-IR', { day: 'numeric' });
    const faFormatterMonth = new Intl.DateTimeFormat('fa-IR', { month: 'long' });

    const satDay = faFormatterDay.format(dSat);
    const satMonth = faFormatterMonth.format(dSat);
    const friDay = faFormatterDay.format(dFri);
    const friMonth = faFormatterMonth.format(dFri);

    const dateRangeStr = `${satDay} ${satMonth} تا ${friDay} ${friMonth}`;
    const weekId = `${jy}_${jm}_${jw}`;

    const startYear = jm >= 7 ? jy : jy - 1;
    const endYear = startYear + 1;
    const academicYear = `${toPersianDigits(startYear)}-${toPersianDigits(endYear)}`;

    // Build 7-day days array for this week (Saturday to Friday)
    const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"];
    let savedWeekData = null;
    try {
      const allWeekData = JSON.parse(localStorage.getItem('planex_week_data') || '{}');
      savedWeekData = allWeekData[weekId];
    } catch (e) {}

    const daysList = [];
    for (let d = 0; d < 7; d++) {
      const dayJdn = saturdayJdn + d;
      let dayDateStr = '';
      try {
        const [djy, djm, djd] = this.jdnToJalali(dayJdn);
        dayDateStr = `${djy}/${String(djm).padStart(2, '0')}/${String(djd).padStart(2, '0')}`;
      } catch (e) {}

      const savedDay = (savedWeekData && Array.isArray(savedWeekData.days)) ? savedWeekData.days[d] : null;
      const realStudyMins = dayDateStr ? this.getStudyMinutesByDate(dayDateStr) : 0;
      const realTests = dayDateStr ? this.getDailyTestCount(dayDateStr) : 0;

      const studyMinutes = Math.max(realStudyMins, Number(savedDay?.studyMinutes || savedDay?.totalStudyMinutes) || 0);
      const testsCount = Math.max(realTests, Number(savedDay?.testsCount || savedDay?.testCount) || 0);

      daysList.push({
        dayIndex: d,
        dayName: DAY_NAMES[d],
        dateStr: dayDateStr,
        studyMinutes: studyMinutes,
        totalStudyMinutes: studyMinutes,
        testsCount: testsCount,
        testCount: testsCount
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
      startDate: satDay,
      endDate: friDay,
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

  getCurrentWeek() {
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

    // Default to today's real week
    const [todayY, todayM, todayD] = this.getTodayJalali();
    const todayJw = this.getJalaliWeekNumber(todayY, todayM, todayD);
    return this.getWeekObject(todayY, todayM, todayJw);
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
    const habit = habits.find(h => h.id == habitId);
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
    habits = habits.filter(h => h.id != habitId);
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
    if (allPlans[weekId]) {
      const plan = allPlans[weekId].find(p => p.id == planId);
      if (plan) plan.isDone = !plan.isDone;
      localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
    }
  }

  deleteDailyPlan(weekId, planId) {
    const allPlans = JSON.parse(localStorage.getItem(STORAGE_KEYS.DAILY_PLANS) || '{}');
    if (allPlans[weekId]) {
      allPlans[weekId] = allPlans[weekId].filter(p => p.id != planId);
      localStorage.setItem(STORAGE_KEYS.DAILY_PLANS, JSON.stringify(allPlans));
    }
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
    if (allGoals[weekId]) {
      const g = allGoals[weekId].find(item => item.id == goalId);
      if (g) g.isDone = !g.isDone;
      localStorage.setItem(STORAGE_KEYS.WEEKLY_GOALS, JSON.stringify(allGoals));
    }
  }

  deleteWeeklyGoal(weekId, goalId) {
    const allGoals = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_GOALS) || '{}');
    if (allGoals[weekId]) {
      allGoals[weekId] = allGoals[weekId].filter(g => g.id != goalId);
      localStorage.setItem(STORAGE_KEYS.WEEKLY_GOALS, JSON.stringify(allGoals));
    }
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
    const s = String(dateStr).trim();
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

  // Get all activity sessions matching a Jalali date string
  getActivitiesByDate(dateStr = null) {
    try {
      const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
      let rawSessions = [];
      try {
        rawSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
        if (!Array.isArray(rawSessions) || rawSessions.length === 0) {
          rawSessions = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
        }
        if (!Array.isArray(rawSessions)) rawSessions = [];
      } catch (e) {
        rawSessions = [];
      }
      return rawSessions.filter(s => {
        if (!s || typeof s !== 'object') return false;
        const sDate = this.normalizeJalaliDate(s.dateStr || s.date);
        return sDate === targetDate;
      });
    } catch (e) {
      return [];
    }
  }

  // Get pure study minutes for a specific Jalali date
  getStudyMinutesByDate(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const sessions = this.getActivitiesByDate(targetDate).filter(s => s && (s.type === 'study' || s.isStudy !== false));
    return sessions.reduce((sum, s) => {
      const dur = Number(s.duration !== undefined ? s.duration : s.minutes);
      return sum + (isNaN(dur) ? 1 : Math.max(1, Math.ceil(dur)));
    }, 0);
  }

  // Get exact study hours as float
  getStudyHoursByDate(dateStr = null) {
    return +(this.getStudyMinutesByDate(dateStr) / 60).toFixed(2);
  }

  // Get total tests for a specific Jalali date
  getDailyTestCount(dateStr = null) {
    const targetDate = this.normalizeJalaliDate(dateStr || this.getTodayJalaliString());
    const sessions = this.getActivitiesByDate(targetDate).filter(s => s && (s.type === 'study' || s.isStudy !== false));
    return sessions.reduce((sum, s) => sum + (Number(s.testCount !== undefined ? s.testCount : s.tests) || 0), 0);
  }

  // Recorded Focus Timer Data
  getRecordedTimerToday() {
    const todayKey = new Date().toISOString().slice(0, 10);
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

  _getWeekDayDateStr(dayIndex) {
    const todayJdn = this.getTodayJdn();
    const todayDayIdx = (new Date().getDay() + 1) % 7;
    const saturdayJdn = todayJdn - todayDayIdx;
    const targetJdn = saturdayJdn + dayIndex;
    if (targetJdn > todayJdn) return null; // Future dates

    const [jy, jm, jd] = this.jdnToJalali(targetJdn);
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
        categoryMinutes: {},
        sessionsCount: 0
      };
    }
  }

  recordTimerSession(minutes, tests = 0) {
    const todayKey = new Date().toISOString().slice(0, 10);
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
      type = 'study', // 'study' | 'non-study'
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
      timerType = 'pomodoro', // 'pomodoro' | 'stopwatch' | 'manual'
      startTime = null,
      endTime = Date.now(),
      date = null
    } = options;

    const actualType = (type === 'non-study' || activityType === 'non-study') ? 'non-study' : 'study';
    const isStudy = (actualType === 'study');

    const inputMins = (duration !== null && duration !== undefined) ? duration : ((minutes !== null && minutes !== undefined) ? minutes : 1);
    const safeMins = Math.max(1, Math.ceil(Number(inputMins)) || 1);
    const safeTests = isStudy ? Math.max(0, parseInt(testCount !== null && testCount !== undefined ? testCount : tests) || 0) : 0;
    const safeCategoryName = String(category || categoryTitle || '').trim();
    const safeSubject = String(subject || '').trim() || (isStudy ? 'مطالعه متمرکز' : (safeCategoryName || 'فعالیت غیردرسی'));
    const safeNote = String(note || '').trim();

    // Resolve category details
    const categories = this.getCategories();
    let cat = categories.find(c => c.code === categoryCode);
    if (!cat && safeCategoryName) {
      cat = categories.find(c => c.title === safeCategoryName || c.code === safeCategoryName);
    }

    if (!cat) {
      if (isStudy) {
        cat = categories.find(c => isStudyCategory(c)) || {
          code: 'ع-س',
          title: safeCategoryName || 'مطالعه متمرکز',
          color: '#0ea5e9',
          icon: '📚',
          group: 'علمی',
          isStudy: true
        };
      } else {
        cat = {
          code: 'غ-د',
          title: safeCategoryName || 'فعالیت غیردرسی',
          color: '#f59e0b',
          icon: '☕',
          group: 'غیردرسی',
          isStudy: false
        };
      }
    }

    const [jy, jm, jd] = this.getTodayJalali();
    const dayIndex = (new Date().getDay() + 1) % 7;
    const jalaliDateStr = this.normalizeJalaliDate(date || `${jy}/${String(jm).padStart(2, '0')}/${String(jd).padStart(2, '0')}`);

    // 1. Create full activity session object
    const sessionObj = {
      id: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      type: actualType,
      category: cat.title,
      categoryCode: cat.code,
      categoryTitle: cat.title,
      color: cat.color || (isStudy ? '#0ea5e9' : '#f59e0b'),
      icon: cat.icon || (isStudy ? '📚' : '☕'),
      isStudy,
      subject: safeSubject,
      studyMethod: studyMethod || '',
      duration: safeMins,
      minutes: safeMins,
      testCount: safeTests,
      tests: safeTests,
      note: safeNote,
      timerType: timerType || 'pomodoro',
      date: jalaliDateStr,
      dateStr: jalaliDateStr,
      timestamp: Date.now()
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
    const todayKey = new Date().toISOString().slice(0, 10);
    const subjectStats = JSON.parse(localStorage.getItem('planex_subject_study_stats') || '{}');
    if (!subjectStats[todayKey]) subjectStats[todayKey] = {};
    const statKey = safeSubject || cat.title;
    if (!subjectStats[todayKey][statKey]) {
      subjectStats[todayKey][statKey] = { minutes: 0, tests: 0, category: cat.title, isStudy };
    }
    subjectStats[todayKey][statKey].minutes += safeMins;
    subjectStats[todayKey][statKey].tests += safeTests;
    localStorage.setItem('planex_subject_study_stats', JSON.stringify(subjectStats));

    return sessionObj;
  }

  // Alias for backward compatibility
  recordPomodoroSession(options = {}) {
    return this.recordFocusSession(options);
  }

  getRecentFocusSessions(limit = 10) {
    try {
      const recentSessions = JSON.parse(localStorage.getItem('planex_recent_activity_sessions') || '[]');
      if (!Array.isArray(recentSessions)) return [];
      return recentSessions.filter(s => s && typeof s === 'object').slice(0, limit);
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

  getSubjectStudyStats(dateKey = null) {
    const todayKey = dateKey || new Date().toISOString().slice(0, 10);
    const subjectStats = JSON.parse(localStorage.getItem('planex_subject_study_stats') || '{}');
    return subjectStats[todayKey] || {};
  }

  // User Profile
  getUserProfile() {
    const DEFAULT_PROFILE = {
      name: "دانش‌آموز پرتلاش",
      major: "علوم تجربی",
      targetField: "پزشکی دانشگاه تهران"
    };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE));
      return (parsed && typeof parsed === 'object') ? { ...DEFAULT_PROFILE, ...parsed } : DEFAULT_PROFILE;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  }

  setUserProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
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
      appTheme: 'theme-oceanic', // Oceanic Dark Glassmorphism as default
      themeMode: 'mode-dark', // Dark glass mode as default
      fontScale: 'scale-xlarge',
      fontFamily: 'font-sahel' // Sahel font as default
    };
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_THEME);
    if (!saved) return defaults;
    try {
      const parsed = JSON.parse(saved);
      return { ...defaults, ...parsed };
    } catch (e) {
      return { ...defaults, appTheme: saved };
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
}

export const db = new DatabaseEngine();
