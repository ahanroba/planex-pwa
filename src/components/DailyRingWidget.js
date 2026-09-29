import { db } from '../db.js';
import html2canvas from 'html2canvas';
import { leaderboardService } from '../services/leaderboardService.js';

// Persian digits converter helper
const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

// Daily Energy & Mood Options
export const DAILY_MOODS = [
  { id: 'energetic', icon: '⚡️', text: 'پرانرژی (۱۰/۱۰)', badge: '⚡️ پرانرژی (۱۰/۱۰)' },
  { id: 'fighter', icon: '🦁', text: 'جنگنده', badge: '🦁 جنگنده' },
  { id: 'satisfied', icon: '😌', text: 'راضی', badge: '😌 راضی' },
  { id: 'tough', icon: '☕️', text: 'سخت اما تموم شد', badge: '☕️ سخت اما تموم شد' }
];

// Accuracy Color Coding Helper (> 70% Green, 50-70% Yellow, < 50% Red)
export function getAccuracyColorStyle(pct) {
  const p = Number(pct) || 0;
  if (p > 70) {
    return {
      text: '#34d399',
      bg: 'rgba(16, 185, 129, 0.15)',
      border: 'rgba(52, 211, 153, 0.35)'
    };
  }
  if (p >= 50) {
    return {
      text: '#fbbf24',
      bg: 'rgba(245, 158, 11, 0.15)',
      border: 'rgba(251, 191, 36, 0.35)'
    };
  }
  return {
    text: '#f87171',
    bg: 'rgba(239, 68, 68, 0.15)',
    border: 'rgba(248, 113, 113, 0.35)'
  };
}

// Format minutes into human-readable Persian string (e.g. "۲ ساعت و ۱۵ دقیقه")
export function formatMinutesToPersian(totalMins) {
  const mins = Math.max(0, Math.round(Number(totalMins) || 0));
  if (mins === 0) return '۰ دقیقه';
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  
  if (hours > 0 && remainingMins > 0) {
    return `${toPersianDigits(hours)} ساعت و ${toPersianDigits(remainingMins)} دقیقه`;
  } else if (hours > 0) {
    return `${toPersianDigits(hours)} ساعت`;
  } else {
    return `${toPersianDigits(remainingMins)} دقیقه`;
  }
}

/**
 * Format Session Timestamp Range into proper Persian 24-hour time strings (e.g. "۱۴:۲۰ - ۱۵:۴۰")
 * Handles raw Unix millisecond integers (e.g. 1788737305926), ISO strings, Date objects, and time strings.
 */
export function formatSessionTimestampRange(s) {
  if (!s) return '۰۰:۰۰ - ۰۰:۰۰';
  const dur = Number(s.duration !== undefined ? s.duration : s.minutes) || 0;

  const parseTimeStr = (val) => {
    if (val === undefined || val === null || val === '') return null;

    // Case 1: Raw Unix millisecond integer or digit string (e.g. 1788737305926)
    if (typeof val === 'number' || (typeof val === 'string' && /^\d{10,}$/.test(val.trim()))) {
      const d = new Date(Number(val));
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
    }

    // Case 2: HH:mm time string (e.g. "14:20" or "۱۴:۲۰")
    if (typeof val === 'string' && val.includes(':') && !val.includes('T') && !val.includes('-')) {
      const parts = val.trim().split(':');
      if (parts.length >= 2) {
        const engParts = parts.map(p => p.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
        const h = String(parseInt(engParts[0]) || 0).padStart(2, '0');
        const m = String(parseInt(engParts[1]) || 0).padStart(2, '0');
        return toPersianDigits(`${h}:${m}`);
      }
    }

    // Case 3: ISO Date string or Date object
    if (typeof val === 'string' || val instanceof Date) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
    }

    return null;
  };

  let startStr = parseTimeStr(s.startTime);
  let endStr = parseTimeStr(s.endTime);

  const tsVal = s.timestamp || s.createdAt;
  if ((!startStr || !endStr) && tsVal) {
    let endDate = null;
    if (typeof tsVal === 'number' || (typeof tsVal === 'string' && /^\d{10,}$/.test(String(tsVal).trim()))) {
      endDate = new Date(Number(tsVal));
    } else {
      endDate = new Date(tsVal);
    }

    if (endDate && !isNaN(endDate.getTime())) {
      const startDate = new Date(endDate.getTime() - dur * 60000);
      if (!startStr) {
        startStr = startDate.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
      if (!endStr) {
        endStr = endDate.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      }
    }
  }

  if (!startStr) startStr = '۰۸:۰۰';
  if (!endStr) {
    const engStart = String(startStr).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const parts = engStart.split(':').map(Number);
    if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const startMins = parts[0] * 60 + parts[1];
      const endMins = (startMins + dur) % 1440;
      const eh = String(Math.floor(endMins / 60)).padStart(2, '0');
      const em = String(endMins % 60).padStart(2, '0');
      endStr = toPersianDigits(`${eh}:${em}`);
    } else {
      endStr = '۰۹:۰۰';
    }
  }

  return `${startStr} - ${endStr}`;
}

/**
 * Calculate Daytime Idle Gap Time Leaks (>45m gaps between 08:00 and 23:00)
 */
export function calculateTimeLeakStats(dateStr = null) {
  try {
    const todayJalali = db.getTodayJalaliString();
    const targetDate = db.normalizeJalaliDate(dateStr || todayJalali);
    const isTargetToday = (targetDate === todayJalali);

    const now = new Date();
    const currentMinOfDay = now.getHours() * 60 + now.getMinutes();

    // Daytime window: 08:00 (480m) to 23:00 (1380m)
    const DAY_START = 480;
    const DAY_END = 1380;

    let upperBound = DAY_END;
    if (isTargetToday) {
      upperBound = Math.min(DAY_END, currentMinOfDay);
    }

    const rawSessions = db.getActivitiesByDate(targetDate) || [];
    
    // Filter study sessions
    const studySessions = rawSessions.filter(s => {
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

    const totalUsefulMins = studySessions.reduce((sum, s) => sum + (Number(s.duration || s.minutes) || 0), 0);

    if (upperBound <= DAY_START) {
      return {
        usefulMinutes: totalUsefulMins,
        usefulText: formatMinutesToPersian(totalUsefulMins),
        leakMinutes: 0,
        leakText: 'بدون نشتی (خارج بازه ۰۸-۲۳)',
        leakCount: 0
      };
    }

    // Convert study sessions into minute intervals [startMin, endMin] clamped to [DAY_START, upperBound]
    const intervals = [];
    studySessions.forEach(s => {
      const durationMins = Math.max(1, Number(s.duration || s.minutes) || 1);
      let endMins = 0;
      let startMins = 0;

      if (s.startTime) {
        const dStart = new Date(s.startTime);
        if (!isNaN(dStart.getTime())) {
          startMins = dStart.getHours() * 60 + dStart.getMinutes();
          endMins = startMins + durationMins;
        } else if (typeof s.startTime === 'string' && s.startTime.includes(':')) {
          const parts = s.startTime.split(':').map(Number);
          startMins = (parts[0] || 0) * 60 + (parts[1] || 0);
          endMins = startMins + durationMins;
        }
      } else if (s.endTime || s.timestamp || s.createdAt) {
        const dEnd = new Date(s.endTime || s.timestamp || s.createdAt);
        if (!isNaN(dEnd.getTime())) {
          endMins = dEnd.getHours() * 60 + dEnd.getMinutes();
          startMins = Math.max(0, endMins - durationMins);
        }
      } else {
        endMins = upperBound;
        startMins = Math.max(0, endMins - durationMins);
      }

      const clampedStart = Math.max(DAY_START, Math.min(upperBound, startMins));
      const clampedEnd = Math.max(DAY_START, Math.min(upperBound, endMins));

      if (clampedEnd > clampedStart) {
        intervals.push({ start: clampedStart, end: clampedEnd });
      }
    });

    // Sort intervals by start time
    intervals.sort((a, b) => a.start - b.start);

    // Merge overlapping or contiguous intervals
    const merged = [];
    intervals.forEach(inv => {
      if (merged.length === 0) {
        merged.push({ ...inv });
      } else {
        const last = merged[merged.length - 1];
        if (inv.start <= last.end) {
          last.end = Math.max(last.end, inv.end);
        } else {
          merged.push({ ...inv });
        }
      }
    });

    // Calculate gaps > 45 mins
    let leakMins = 0;
    let leakCount = 0;

    let cursor = DAY_START;
    merged.forEach(inv => {
      const gap = inv.start - cursor;
      if (gap > 45) {
        leakMins += gap;
        leakCount++;
      }
      cursor = Math.max(cursor, inv.end);
    });

    // Check final gap after last session up to upperBound
    const finalGap = upperBound - cursor;
    if (finalGap > 45) {
      leakMins += finalGap;
      leakCount++;
    }

    return {
      usefulMinutes: totalUsefulMins,
      usefulText: formatMinutesToPersian(totalUsefulMins),
      leakMinutes: leakMins,
      leakText: leakMins > 0 ? formatMinutesToPersian(leakMins) : 'بدون نشتی ✨',
      leakCount
    };
  } catch (e) {
    console.error('Error calculating time leak stats:', e);
    return {
      usefulMinutes: 0,
      usefulText: '۰ دقیقه',
      leakMinutes: 0,
      leakText: '۰ دقیقه',
      leakCount: 0
    };
  }
}

/**
 * Generate SVG 24-Hour Circular Radial Dial HTML
 */
export function render24HourRadialSVG(options = {}) {
  const {
    size = 280,
    showCenterInfo = true,
    dateStr = null
  } = options;

  const targetDate = db.normalizeJalaliDate(dateStr || db.getTodayJalaliString());
  const sessions = db.getActivitiesByDate(targetDate) || [];

  const targets = db.getStudyTargets() || {};
  const targetHours = targets.dailyStudyGoalHours || 8.0;
  const targetMins = targetHours * 60;

  const usefulMins = db.getStudyMinutesByDate(targetDate);
  const totalHoursFloat = +(usefulMins / 60).toFixed(1);
  const progressPct = targetMins > 0 ? Math.min(100, Math.round((usefulMins / targetMins) * 100)) : 0;
  const streakDays = typeof db.getStudyStreak === 'function' ? db.getStudyStreak() : 0;

  // SVG Geometry: Center (160, 160), Radius 110, Circumference C ≈ 691.15038
  const R = 110;
  const C = 2 * Math.PI * R;

  let arcsHTML = '';
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();

  // Helper to extract minute of day (0..1439) from timestamp or HH:mm string
  const parseMinOfDay = (val) => {
    if (val === null || val === undefined || val === '') return null;
    if (typeof val === 'string') {
      const cleanVal = String(val).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).trim();
      const match = cleanVal.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);
      if (match) {
        const h = Number(match[1]);
        const m = Number(match[2]);
        if (!isNaN(h) && !isNaN(m) && h >= 0 && h < 24 && m >= 0 && m < 60) {
          return (h * 60) + m;
        }
      }
      const num = Number(cleanVal);
      if (!isNaN(num) && num > 100000000000) {
        val = num;
      } else {
        const d = new Date(cleanVal);
        if (!isNaN(d.getTime())) val = d.getTime();
      }
    }
    if (typeof val === 'number' && !isNaN(val)) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        try {
          const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
          const parts = f.format(d).split(':').map(Number);
          if (!isNaN(parts[0]) && !isNaN(parts[1])) return (parts[0] * 60) + parts[1];
        } catch (_) {}
        return d.getHours() * 60 + d.getMinutes();
      }
    }
    return null;
  };

  sessions.forEach(s => {
    if (!s) return;
    const durMins = Math.max(1, Number(s.duration || s.minutes) || 1);

    let startMins = parseMinOfDay(s.startTime);
    let endMins = parseMinOfDay(s.endTime);

    if (startMins !== null && endMins !== null) {
      if (endMins < startMins) endMins += 24 * 60;
    } else if (startMins !== null) {
      endMins = startMins + durMins;
    } else if (endMins !== null) {
      startMins = Math.max(0, endMins - durMins);
    } else {
      const fallbackTs = parseMinOfDay(s.timestamp || s.createdAt);
      if (fallbackTs !== null) {
        endMins = fallbackTs;
        startMins = Math.max(0, endMins - durMins);
      } else {
        endMins = currentMin;
        startMins = Math.max(0, endMins - durMins);
      }
    }

    startMins = Math.max(0, Math.min(1440, startMins));
    endMins = Math.max(0, Math.min(1440, endMins));
    const arcDuration = Math.max(1, endMins - startMins);

    const isStudy = (s.type === 'study' || s.isStudy !== false);
    const color = s.color || (isStudy ? '#0ea5e9' : '#f59e0b');

    const dash = ((arcDuration / 1440) * C).toFixed(2);
    const gap = (C - Number(dash)).toFixed(2);
    const offset = (- (startMins / 1440) * C).toFixed(2);

    arcsHTML += `
      <circle cx="160" cy="160" r="${R}" fill="none"
        stroke="${color}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${dash} ${gap}"
        stroke-dashoffset="${offset}"
        style="transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; filter: drop-shadow(0 0 5px ${color}aa);"
      />
    `;
  });

  // 24 Hour Ticks (every hour)
  // Inside <svg style="transform: rotate(-90deg);">, local 0 rad points to 12 o'clock visual (00:00)
  let ticksHTML = '';
  for (let h = 0; h < 24; h++) {
    const angleRad = (h * 15 * Math.PI) / 180;
    const isMajor = h % 6 === 0;
    const tickLen = isMajor ? 8 : 4;
    const x1 = 160 + (R + 10) * Math.cos(angleRad);
    const y1 = 160 + (R + 10) * Math.sin(angleRad);
    const x2 = 160 + (R + 10 + tickLen) * Math.cos(angleRad);
    const y2 = 160 + (R + 10 + tickLen) * Math.sin(angleRad);

    ticksHTML += `
      <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"
        stroke="${isMajor ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)'}"
        stroke-width="${isMajor ? 2 : 1}" />
    `;
  }

  return `
    <div style="position: relative; width: ${size}px; height: ${size}px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <svg viewBox="0 0 320 320" style="width: 100%; height: 100%; overflow: visible; transform: rotate(-90deg);">
        <defs>
          <radialGradient id="ringGlowBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(14, 165, 233, 0.08)" />
            <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        <!-- Subtle Background Glow -->
        <circle cx="160" cy="160" r="${R + 15}" fill="url(#ringGlowBg)" />

        <!-- Track Circle (24-Hour Dial Background) -->
        <circle cx="160" cy="160" r="${R}" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="14" />

        <!-- 24 Hourly Ticks -->
        ${ticksHTML}

        <!-- Active Interval Arcs -->
        ${arcsHTML}
      </svg>

      <!-- Cardinal Hour Markers Overlay (Non-rotated) -->
      <div style="position: absolute; inset: 0; pointer-events: none; font-size: 0.62rem; font-weight: 700; color: #8e8e9c; font-family: 'Outfit', sans-serif;">
        <span style="position: absolute; top: 2px; left: 50%; transform: translateX(-50%);">00:00</span>
        <span style="position: absolute; right: 2px; top: 50%; transform: translateY(-50%);">06:00</span>
        <span style="position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);">12:00</span>
        <span style="position: absolute; left: 2px; top: 50%; transform: translateY(-50%);">18:00</span>
      </div>

      <!-- Center Ring Metrics Overlay -->
      ${showCenterInfo ? `
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; direction: rtl; pointer-events: none;">
          <!-- 🔥 Streak Badge -->
          <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; margin-bottom: 2px;">
            <span>🔥</span>
            <span>${toPersianDigits(streakDays)} روز استریک</span>
          </div>

          <!-- Total Study Hours -->
          <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; line-height: 1.1; font-family: 'Outfit', sans-serif; text-shadow: 0 0 12px rgba(14, 165, 233, 0.5);">
            ${toPersianDigits(totalHoursFloat)} <span style="font-size: 0.82rem; font-weight: 700; color: #38bdf8;">ساعت</span>
          </div>

          <!-- Goal Progress Badge -->
          <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700; margin-top: 3px;">
            هدف: <span style="color: #e4e4e7; font-family: 'Outfit';">${toPersianDigits(targetHours)}h</span>
            <span style="color: #10b981; margin-right: 3px;">(${toPersianDigits(progressPct)}٪)</span>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Render Main 24-Hour Radial Ring Widget HTML for Dashboard
 */
export function renderDailyRingWidget() {
  const leakStats = calculateTimeLeakStats();
  const subjectStats = db.getSubjectStudyStats() || {};

  const subjectPills = Object.keys(subjectStats).map(key => {
    const item = subjectStats[key];
    const mins = item.minutes || 0;
    if (mins <= 0) return '';
    return `
      <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${item.isStudy !== false ? '#0ea5e9' : '#f59e0b'}; display: inline-block;"></span>
        <span>${key}:</span>
        <span style="color: #38bdf8; font-family: 'Outfit';">${formatMinutesToPersian(mins)}</span>
      </div>
    `;
  }).filter(Boolean).join('');

  return `
    <div class="glass-panel daily-ring-widget-card" style="padding: 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; direction: rtl; box-shadow: none;">
      
      <!-- Widget Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #38bdf8;">
            ⏱️
          </div>
          <div>
            <strong style="font-size: 0.92rem; font-weight: 800; color: #ffffff; display: block;">حلقه ۲۴ ساعته و جریان روزانه</strong>
            <span style="font-size: 0.7rem; color: #8e8e9c;">نمای بازه‌ای زمان‌های مطالعه امروز</span>
          </div>
        </div>

        <!-- Header Action Buttons -->
        <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          <!-- 📸 Iconic Story Card Button -->
          <button type="button" id="btn-open-daily-story" class="btn-story-trigger btn-open-daily-story btn-quick-story" data-story-id="dailyStoryCard" onclick="if(typeof window.openQuickStoryModal === 'function'){ window.openQuickStoryModal(); } else if(typeof window.openStoryModal === 'function'){ window.openStoryModal('dailyStoryCard'); } else if(typeof window.openDailyStoryCard === 'function'){ window.openDailyStoryCard(); }"
            style="background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); border: 1px solid rgba(167, 139, 250, 0.4); color: #ffffff; padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);" title="ایجاد کارت استوری سریع برای شبکه اجتماعی">
            <span style="font-size: 0.85rem;">📸</span>
            <span>استوری سریع</span>
          </button>

          <!-- 📊 Dedicated Daily Analysis Report Button -->
          <button type="button" id="btn-open-daily-analysis" class="btn-story-trigger btn-open-daily-analysis btn-daily-report" data-story-id="dailyAnalysisReport" onclick="if(typeof window.openDailyReportModal === 'function'){ window.openDailyReportModal(); } else if(typeof window.openStoryModal === 'function'){ window.openStoryModal('dailyAnalysisReport'); } else if(typeof window.openDailyAnalysisReport === 'function'){ window.openDailyAnalysisReport(); }"
            style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); border: 1px solid rgba(56, 189, 248, 0.4); color: #ffffff; padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);" title="مشاهده کارنامه و تحلیل جامع امروز">
            <span style="font-size: 0.85rem;">📊</span>
            <span>کارنامه و تحلیل روز</span>
          </button>
        </div>
      </div>

      <!-- 24h Circular Dial SVG -->
      <div style="padding: 10px 0;">
        ${render24HourRadialSVG({ size: 260, showCenterInfo: true })}
      </div>

      <!-- 🔍 Time-Leak & Useful Time Breakdown -->
      <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <!-- Useful Time Card -->
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">💚</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">ساعت مطالعه مفید</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: #10b981; margin-top: 1px;">
              ${leakStats.usefulText}
            </div>
          </div>
        </div>

        <!-- Idle Gap Leak Card -->
        <div style="background: ${leakStats.leakMinutes > 0 ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255, 255, 255, 0.03)'}; border: 1px solid ${leakStats.leakMinutes > 0 ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255, 255, 255, 0.08)'}; padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">${leakStats.leakMinutes > 0 ? '⚠️' : '✨'}</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">نشتی زمان / آفلاین (>۴۵m)</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: ${leakStats.leakMinutes > 0 ? '#f87171' : '#a1a1aa'}; margin-top: 1px;">
              ${leakStats.leakText}
            </div>
          </div>
        </div>
      </div>

      <!-- Subject Pills Breakdown (if any) -->
      ${subjectPills ? `
        <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
          ${subjectPills}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * 1. RESTORED ORIGINAL ICONIC STORY CARD MODAL (Viral Quick-Share Card)
 * Sleek, minimalist PlanEx Story Card featuring Apple Watch radial study ring,
 * high-contrast dark aesthetic, daily total hours, badges, top subject pills,
 * and day-by-day week selection (شنبه تا جمعه).
 */
export function renderDailyStoryCardModal(dateStr = null) {
  const activeDateStr = dateStr || (window.appState && window.appState.selectedJalaliDetailDate) || db.getTodayJalaliString();
  const normalizedTargetDate = db.normalizeJalaliDate(activeDateStr);
  const todayJalaliStr = (db && typeof db.getTodayJalaliString === 'function') ? db.getTodayJalaliString() : '';
  const isToday = (normalizedTargetDate === (db ? db.normalizeJalaliDate(todayJalaliStr) : todayJalaliStr));

  const parts = normalizedTargetDate.split('/').map(Number);
  const jy = parts[0] || 1404;
  const jm = parts[1] || 1;
  const jd = parts[2] || 1;

  const JALALI_MONTH_NAMES = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];
  const monthName = JALALI_MONTH_NAMES[jm - 1] || '';

  const targetJdn = db.jalaliToJdn(jy, jm, jd);
  const dayOfWeekIdx = (targetJdn + 2) % 7;
  const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
  const dayName = DAY_NAMES[dayOfWeekIdx] || "شنبه";

  const fullJalaliDateStr = `${dayName} ${toPersianDigits(jd)} ${monthName} ${toPersianDigits(jy)}`;

  // Profile data (Unified across Header, Podium, Leaderboard & Daily Report)
  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
  } catch(e) {}
  const profile = (typeof db.getUserProfile === 'function' ? db.getUserProfile() : {}) || {};
  const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
  const storedNickname = localStorage.getItem('planex_user_nickname') || localStorage.getItem('planex_leaderboard_nickname') || '';
  const storedTarget = localStorage.getItem('planex_leaderboard_target') || '';

  const userName = storedNickname || profile.name || profile.displayName || profile.nickname || authUser?.full_name || authUser?.name || 'کاربر';
  const majorStr = storedTarget || profile.target || profile.major || profile.targetField || 'کنکور سراسری ۱۴۰۶';
  const gradeStr = profile.grade || profile.educationGrade || '';
  const targetBadgeText = (gradeStr && majorStr && !majorStr.includes(gradeStr)) ? `${gradeStr} - ${majorStr}` : majorStr;
  const userAvatar = storedAvatar || profile.avatar || profile.photo || profile.avatarUrl || authUser?.avatar_url || null;

  // Week Days Pill Selector Bar
  const currentWeek = (typeof db !== 'undefined' && typeof db.getCurrentWeek === 'function') ? db.getCurrentWeek() : null;
  const weekDays = currentWeek?.days || [];

  // Filter Valid Study Sessions for selected target date
  const rawSessions = (typeof db.getActivitiesByDate === 'function' ? db.getActivitiesByDate(normalizedTargetDate) : []) || [];
  const studySessions = rawSessions.filter(s => {
    if (!s) return false;
    const isNonStudy = (
      s.type === 'non-study' || s.type === 'non_study' || s.type === 'break' ||
      s.activityType === 'non_study' || s.activityType === 'non-study' || s.activityType === 'break' ||
      s.isStudy === false || s.is_study_time === false || s.counts_for_study === false ||
      s.isBreak === true || s.is_break === true || s.timerType === 'break' || s.timerType === 2
    );
    return !isNonStudy;
  });

  // Total Study Minutes & Formatted Text
  const totalStudyMins = studySessions.reduce((sum, s) => {
    const dur = Number(s.duration !== undefined ? s.duration : s.minutes);
    return sum + (isNaN(dur) ? 0 : Math.max(0, Math.ceil(dur)));
  }, 0);

  const totalStudyTimeText = formatMinutesToPersian(totalStudyMins);

  // Target Goal & Progress
  const targets = (typeof db.getStudyTargets === 'function' ? db.getStudyTargets() : {}) || {};
  const targetHours = Number(targets.dailyStudyGoalHours || targets.dailyTargetHours || 8.0);
  const targetMins = targetHours * 60;
  const goalProgressPct = targetMins > 0 ? Math.min(100, Math.round((totalStudyMins / targetMins) * 100)) : 0;

  // Mini Stats
  const sessionsCount = studySessions.length;
  const streakDays = typeof db.getStudyStreak === 'function' ? db.getStudyStreak() : 0;

  // Morning Check-In / First Log Time
  let validCheckInTime = null;
  const lb = typeof leaderboardService !== 'undefined' ? leaderboardService : (typeof window !== 'undefined' ? window.leaderboardService : null);

  const parseCheckInMins = (val) => {
    if (!val) return null;
    const cleanDigits = (str) => {
      if (!str || typeof str !== 'string') return str;
      return str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    };

    if (typeof val === 'string') {
      const cleaned = cleanDigits(val).trim();
      const match = cleaned.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);
      if (match) {
        const h = parseInt(match[1], 10);
        const m = parseInt(match[2], 10);
        if (!isNaN(h) && !isNaN(m) && h >= 0 && h < 24 && m >= 0 && m < 60) {
          return h * 60 + m;
        }
      }
    }

    let ts = null;
    if (typeof val === 'number') {
      ts = val;
    } else if (typeof val === 'object' && val !== null) {
      ts = val.timestamp || val.createdAt || val.start || null;
      if (!ts && (val.startTime || val.start_time || val.startTimeStr)) {
        return parseCheckInMins(val.startTime || val.start_time || val.startTimeStr);
      }
    }

    if (ts) {
      const d = new Date(ts);
      if (!isNaN(d.getTime())) {
        try {
          const tehranStr = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Tehran', hour12: false, hour: '2-digit', minute: '2-digit' });
          const parts = tehranStr.split(':').map(Number);
          if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return parts[0] * 60 + parts[1];
          }
        } catch (e) {
          return d.getHours() * 60 + d.getMinutes();
        }
      }
    }

    return null;
  };

  const isMorningWindow = (mins) => mins !== null && mins >= (5 * 60) && mins <= (7 * 60);

  // 1. Check official Early Bird check-in
  let rawWake = null;
  if (lb) {
    if (isToday && typeof lb.getTodayWakeTime === 'function') {
      rawWake = lb.getTodayWakeTime();
    }
    if (!rawWake && typeof lb.getEarlyBirdHistory === 'function') {
      const hist = lb.getEarlyBirdHistory() || {};
      rawWake = hist[normalizedTargetDate] || (isToday ? hist[lb.getTodayDateStr?.()] : null);
    }
    if (!rawWake && isToday && typeof lb.getTodayEarlyBird === 'function') {
      const eb = lb.getTodayEarlyBird();
      if (eb && (eb.wakeTime || eb.wake_time)) rawWake = eb.wakeTime || eb.wake_time;
    }
  }

  const rawWakeMins = parseCheckInMins(rawWake);
  if (isMorningWindow(rawWakeMins)) {
    const h = String(Math.floor(rawWakeMins / 60)).padStart(2, '0');
    const m = String(rawWakeMins % 60).padStart(2, '0');
    validCheckInTime = `${h}:${m}`;
  }

  // 2. If no official early-bird check-in, check if user logged any session (study or routine) between 05:00 and 07:00
  if (!validCheckInTime) {
    const candidateSessions = (rawSessions && rawSessions.length > 0) ? rawSessions : studySessions;
    if (candidateSessions && candidateSessions.length > 0) {
      let earliestMin = 24 * 60;
      candidateSessions.forEach(s => {
        let startMin = null;
        if (lb && typeof lb.extractSessionStartMinutes === 'function') {
          startMin = lb.extractSessionStartMinutes(s);
        } else {
          startMin = parseCheckInMins(s.startTime || s.start_time || s.startTimeStr || s.time || s.timestamp || s.createdAt || s);
        }
        if (startMin !== null && isMorningWindow(startMin) && startMin < earliestMin) {
          earliestMin = startMin;
          const h = String(Math.floor(earliestMin / 60)).padStart(2, '0');
          const m = String(earliestMin % 60).padStart(2, '0');
          validCheckInTime = `${h}:${m}`;
        }
      });
    }
  }

  const checkInBadgeContent = validCheckInTime ? `☀️ ${toPersianDigits(validCheckInTime)}` : 'بدون حاضری صبح';

  // Test Analytics Data & Accuracy Calculations
  let totalTests = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnanswered = 0;

  studySessions.forEach(s => {
    const count = Number(s.testCount !== undefined ? s.testCount : (s.tests !== undefined ? s.tests : 0));
    const c = Number(s.testCorrect || s.correct || 0);
    const w = Number(s.testWrong || s.wrong || 0);
    const u = Number(s.testUnanswered || s.unanswered || 0);
    totalCorrect += c;
    totalWrong += w;
    totalUnanswered += u;
    const sumCWU = c + w + u;
    totalTests += (count > 0) ? count : sumCWU;
  });

  const hasTestsLogged = totalTests > 0;
  const rawPct = totalTests > 0 ? Math.min(100, Math.max(0, Math.round((totalCorrect / totalTests) * 100))) : 0;
  const konkurPctCalc = totalTests > 0 ? ((totalCorrect * 3 - totalWrong) / (totalTests * 3)) * 100 : 0;
  const konkurPct = Math.round(konkurPctCalc);

  const rawStyle = getAccuracyColorStyle(rawPct);
  const konkurStyle = getAccuracyColorStyle(konkurPct);

  // Daily Energy & Mood Data
  const savedMoodId = localStorage.getItem('planex_daily_mood_' + normalizedTargetDate);
  const currentMood = DAILY_MOODS.find(m => m.id === savedMoodId);

  // Subject Breakdown Summary
  const subjectMap = {};
  const SUBJECT_COLORS = [
    '#38bdf8', '#a78bfa', '#f59e0b', '#10b981', '#ec4899',
    '#6366f1', '#f43f5e', '#14b8a6', '#8b5cf6', '#0ea5e9'
  ];

  studySessions.forEach(s => {
    const name = s.subject || s.categoryName || s.title || s.name || 'درس آزاد';
    const dur = Number(s.duration !== undefined ? s.duration : s.minutes) || 0;
    if (!subjectMap[name]) subjectMap[name] = 0;
    subjectMap[name] += dur;
  });

  const subjectList = Object.keys(subjectMap).map((name, index) => {
    const mins = subjectMap[name];
    const pct = totalStudyMins > 0 ? Math.round((mins / totalStudyMins) * 100) : 0;
    const color = SUBJECT_COLORS[index % SUBJECT_COLORS.length];
    return { name, mins, pct, color };
  }).sort((a, b) => b.mins - a.mins);

  return `
    <div id="modal-daily-story-card" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyStoryCard();">
      <!-- ✖ Prominent Story Close Button -->
      <button type="button" aria-label="بستن" onclick="window.closeDailyStoryCard();" style="position: absolute; top: 15px; right: 15px; z-index: 99999; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; font-size: 20px; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); -webkit-tap-highlight-color: transparent;">✖</button>

      <div style="max-width: 440px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 14px;">
        
        <!-- Action Toolbar Above Card -->
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; color: white;">
          <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1.1rem;">📸</span>
            <span>کارت استوری روزانه PlanEx</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeDailyStoryCard();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: rgba(255,255,255,0.14); border: 1.5px solid rgba(255,255,255,0.28); color: #ffffff; border-radius: 50%; cursor: pointer; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.4); transition: all 0.15s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; z-index: 99999;">✕</button>
        </div>

        <!-- 📱 9:16 SLEEK MINIMALIST ICONIC STORY CARD CANVAS -->
        <div id="planex-story-card-canvas" style="width: 440px; min-height: 740px; background: linear-gradient(165deg, #090d16 0%, #0c1222 40%, #17112c 75%, #080a14 100%); border: 1.5px solid rgba(167, 139, 250, 0.3); border-radius: 28px; padding: 24px 22px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85); direction: rtl; text-align: right; font-family: 'Vazirmatn', -apple-system, sans-serif; color: #ffffff; transform: translateZ(0); will-change: transform, opacity;">
          
          <!-- Background Ambient Glowing Orbs -->
          <div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
          <div style="position: absolute; bottom: -60px; left: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

          <!-- 1. HEADER SECTION -->
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; z-index: 2;">
            <!-- Right: User Avatar + Display Name + Target Badge -->
            <div style="display: flex; align-items: center; gap: 10px;">
              ${userAvatar ? `
                <img src="${userAvatar}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);" />
              ` : `
                <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);">
                  ${userName.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.08rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${userName}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(167, 139, 250, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #c4b5fd; margin-top: 2px;">
                  🎯 ${targetBadgeText}
                </div>
              </div>
            </div>

            <!-- Left: PlanEx Branding -->
            <div style="text-align: left; display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <img src="./logo-transparent.png" style="width: 22px; height: 22px; border-radius: 6px;" onerror="this.style.display='none';" />
                <span style="font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 1rem; background: linear-gradient(135deg, #38bdf8, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PlanEx</span>
              </div>
            </div>
          </div>

          <!-- 2. HORIZONTAL WEEKDAY SELECTOR BAR (شنبه تا جمعه) -->
          <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; align-items: center; z-index: 2; margin: 8px 0 4px 0;">
            <div style="width: 100%; display: flex; gap: 4px; overflow-x: auto; padding: 4px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; scrollbar-width: none; box-sizing: border-box;">
              ${weekDays.map(d => {
                const isSelected = db.normalizeJalaliDate(d.dateStr) === normalizedTargetDate;
                const activeBg = isSelected
                  ? 'background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); color: #ffffff; border-color: #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.5);'
                  : 'background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);';
                const todayDot = d.isToday ? '<span style="width: 4px; height: 4px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 2px;"></span>' : '';

                return `
                  <button type="button"
                    class="weekday-tab-btn ${isSelected ? 'active' : ''}"
                    data-date="${d.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${d.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 5px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${activeBg}">
                    <div style="font-size: 0.65rem; opacity: 0.9;">${d.dayName}</div>
                    <div style="font-size: 0.76rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${todayDot}${toPersianDigits(d.dayOfMonth)}</div>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.72rem; font-weight: 700; color: #c4b5fd; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(167, 139, 250, 0.3); padding: 2px 10px; border-radius: 10px;">
              📅 ${fullJalaliDateStr}
            </div>
          </div>

          <!-- 3. CENTER ICONIC APPLE-WATCH STYLE RADIAL DIAL -->
          <div style="width: 100%; display: flex; justify-content: center; align-items: center; margin: 8px 0; z-index: 2;">
            ${render24HourRadialSVG({ size: 250, showCenterInfo: true, dateStr: normalizedTargetDate })}
          </div>

          <!-- 4. HERO GOAL COMPLETION PROGRESS CARD -->
          <div style="width: 100%; background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 12px 16px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.76rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه</span>
              <span style="font-size: 0.68rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${toPersianDigits(targetHours)} ساعت
              </span>
            </div>
            <div style="font-size: 1.55rem; font-weight: 900; color: #ffffff; margin-bottom: 6px; background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${totalStudyTimeText}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; font-weight: 700; color: #c4b5fd; margin-bottom: 4px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${toPersianDigits(goalProgressPct)}٪</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${goalProgressPct}%; height: 100%; background: linear-gradient(90deg, #0ea5e9 0%, #7c3aed 50%, #ec4899 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);"></div>
            </div>
          </div>

          <!-- 5. HIGH-CONTRAST BADGES GRID -->
          <div style="width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; z-index: 2;">
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #fcd34d; font-weight: 700;">استریک</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #f59e0b; margin-top: 2px;">
                🔥 ${toPersianDigits(streakDays)}
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #6ee7b7; font-weight: 700;">تست امروز</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #34d399; margin-top: 2px;">
                🎯 ${toPersianDigits(totalTests)}
              </div>
            </div>

            <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #7dd3fc; font-weight: 700;">جلسات</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #38bdf8; margin-top: 2px;">
                ⏱️ ${toPersianDigits(sessionsCount)}
              </div>
            </div>

            <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #c4b5fd; font-weight: 700;">حاضری صبح</div>
              <div style="font-size: ${validCheckInTime ? '0.82rem' : '0.68rem'}; font-weight: 900; color: ${validCheckInTime ? '#a78bfa' : '#9ca3af'}; margin-top: 2px; white-space: nowrap;">
                ${checkInBadgeContent}
              </div>
            </div>
          </div>

          <!-- 5.5 TEST ACCURACY SUMMARY BLOCK (درصد با و بدون منفی) -->
          ${hasTestsLogged ? `
            <div style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; z-index: 2;">
              <div style="background: ${rawStyle.bg}; border: 1px solid ${rawStyle.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${rawStyle.text}; font-weight: 700;">درصد بدون منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${rawStyle.text}; margin-top: 1px;">
                  ${toPersianDigits(rawPct)}٪
                </div>
              </div>
              <div style="background: ${konkurStyle.bg}; border: 1px solid ${konkurStyle.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${konkurStyle.text}; font-weight: 700;">درصد با احتساب منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${konkurStyle.text}; margin-top: 1px;">
                  ${toPersianDigits(konkurPct)}٪
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 6. TOP SUBJECT PILLS SUMMARY OR ELEGANT EMPTY STATE -->
          ${studySessions.length > 0 ? `
            <div style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 8px 12px; box-sizing: border-box; z-index: 2;">
              <div style="font-size: 0.68rem; font-weight: 700; color: #9ca3af; margin-bottom: 6px;">📚 دروس مطالعه‌شده این روز:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                ${subjectList.slice(0, 4).map(sub => `
                  <div style="background: rgba(255,255,255,0.04); border: 1px solid ${sub.color}55; padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: ${sub.color};"></span>
                    <span>${sub.name}:</span>
                    <span style="color: ${sub.color}; font-weight: 800;">${formatMinutesToPersian(sub.mins)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <div style="width: 100%; padding: 14px 12px; text-align: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 14px; box-sizing: border-box; z-index: 2;">
              <div style="font-size: 0.78rem; font-weight: 700; color: #a1a1aa;">📭 هیچ مطالعه‌ای برای این روز ثبت نشده است</div>
            </div>
          `}

          <!-- 6.5 DAILY MOOD & ENERGY TRACKER -->
          <div style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 8px 10px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.68rem; font-weight: 800; color: #fbbf24;">⚡️ حس و انرژی امروز:</span>
              ${currentMood ? `<span style="font-size: 0.64rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 1px 6px; border-radius: 6px;">${currentMood.badge}</span>` : ''}
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;">
              ${DAILY_MOODS.map(m => {
                const isSelected = currentMood && currentMood.id === m.id;
                const bStyle = isSelected
                  ? 'background: rgba(245, 158, 11, 0.25); border: 1.5px solid #fbbf24; color: #ffffff; font-weight: 900; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3);'
                  : 'background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-weight: 700;';
                return `
                  <button type="button" onclick="if(window.setDailyMood){ window.setDailyMood('${normalizedTargetDate}', '${m.id}'); }"
                    style="padding: 5px 2px; border-radius: 8px; font-size: 0.6rem; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${bStyle}">
                    ${m.badge}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 7. FOOTER BRANDING WITH VIRAL TELEGRAM TAG -->
          <div style="width: 100%; border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 0.66rem; color: #9ca3af; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: #38bdf8; font-weight: 800;">PlanEx</span>
              <span>•</span>
              <span>همراه هوشمند مطالعه</span>
            </div>
            <div style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%); border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 9px; border-radius: 999px; font-size: 0.62rem; font-weight: 800; color: #7dd3fc; box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);">
              <span>✨ ساخته شده با پلنکس ✦ @PlanExApp</span>
            </div>
          </div>

        </div>

        <!-- Download Button -->
        <button type="button" id="btn-download-story-card" onclick="window.downloadStoryCardPNG();"
          style="width: 100%; background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); border: none; color: #ffffff; padding: 12px 20px; border-radius: 16px; font-weight: 800; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35); transition: transform 0.15s ease;">
          <span style="font-size: 1.1rem;">📸</span>
          <span>دانلود استوری روزانه (تصویر PNG)</span>
        </button>

      </div>
    </div>
  `;
}

/**
 * 2. DEDICATED DAILY ANALYSIS REPORT MODAL ("کارنامه و تحلیل جامع عملکرد امروز")
 * Comprehensive Dersita-style analytical report view containing lessons breakdown,
 * test analytics, activity type pills, chronological session flow with exact Persian 24h timestamps,
 * and day-by-day week selection (شنبه تا جمعه).
 */
export function renderDailyAnalysisModal(dateStr = null) {
  const activeDateStr = dateStr || (window.appState && window.appState.selectedJalaliDetailDate) || db.getTodayJalaliString();
  const normalizedTargetDate = db.normalizeJalaliDate(activeDateStr);
  const todayJalaliStr = (db && typeof db.getTodayJalaliString === 'function') ? db.getTodayJalaliString() : '';
  const isToday = (normalizedTargetDate === (db ? db.normalizeJalaliDate(todayJalaliStr) : todayJalaliStr));

  const parts = normalizedTargetDate.split('/').map(Number);
  const jy = parts[0] || 1404;
  const jm = parts[1] || 1;
  const jd = parts[2] || 1;

  const JALALI_MONTH_NAMES = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
  ];
  const monthName = JALALI_MONTH_NAMES[jm - 1] || '';

  const targetJdn = db.jalaliToJdn(jy, jm, jd);
  const dayOfWeekIdx = (targetJdn + 2) % 7;
  const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
  const dayName = DAY_NAMES[dayOfWeekIdx] || "شنبه";

  const fullJalaliDateStr = `${dayName} ${toPersianDigits(jd)} ${monthName} ${toPersianDigits(jy)}`;

  // Profile data (Unified across Header, Podium, Leaderboard & Daily Report)
  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
  } catch(e) {}
  const profile = (typeof db.getUserProfile === 'function' ? db.getUserProfile() : {}) || {};
  const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
  const storedNickname = localStorage.getItem('planex_user_nickname') || localStorage.getItem('planex_leaderboard_nickname') || '';
  const storedTarget = localStorage.getItem('planex_leaderboard_target') || '';

  const userName = storedNickname || profile.name || profile.displayName || profile.nickname || authUser?.full_name || authUser?.name || 'کاربر';
  const majorStr = storedTarget || profile.target || profile.major || profile.targetField || 'کنکور سراسری ۱۴۰۶';
  const gradeStr = profile.grade || profile.educationGrade || '';
  const targetBadgeText = (gradeStr && majorStr && !majorStr.includes(gradeStr)) ? `${gradeStr} - ${majorStr}` : majorStr;
  const userAvatar = storedAvatar || profile.avatar || profile.photo || profile.avatarUrl || authUser?.avatar_url || null;

  // Week Days Pill Selector Bar
  const currentWeek = (typeof db !== 'undefined' && typeof db.getCurrentWeek === 'function') ? db.getCurrentWeek() : null;
  const weekDays = currentWeek?.days || [];

  // Filter Valid Study Sessions for target date
  const rawSessions = (typeof db.getActivitiesByDate === 'function' ? db.getActivitiesByDate(normalizedTargetDate) : []) || [];
  const studySessions = rawSessions.filter(s => {
    if (!s) return false;
    const isNonStudy = (
      s.type === 'non-study' || s.type === 'non_study' || s.type === 'break' ||
      s.activityType === 'non_study' || s.activityType === 'non-study' || s.activityType === 'break' ||
      s.isStudy === false || s.is_study_time === false || s.counts_for_study === false ||
      s.isBreak === true || s.is_break === true || s.timerType === 'break' || s.timerType === 2
    );
    return !isNonStudy;
  });

  // Total Study Minutes & Formatted Text
  const totalStudyMins = studySessions.reduce((sum, s) => {
    const dur = Number(s.duration !== undefined ? s.duration : s.minutes);
    return sum + (isNaN(dur) ? 0 : Math.max(0, Math.ceil(dur)));
  }, 0);

  const totalStudyTimeText = formatMinutesToPersian(totalStudyMins);

  // Target Goal & Progress
  const targets = (typeof db.getStudyTargets === 'function' ? db.getStudyTargets() : {}) || {};
  const targetHours = Number(targets.dailyStudyGoalHours || targets.dailyTargetHours || 8.0);
  const targetMins = targetHours * 60;
  const goalProgressPct = targetMins > 0 ? Math.min(100, Math.round((totalStudyMins / targetMins) * 100)) : 0;

  // Mini Stats
  const sessionsCount = studySessions.length;
  const streakDays = typeof db.getStudyStreak === 'function' ? db.getStudyStreak() : 0;

  // Morning Check-In / First Log Time
  let validCheckInTime = null;
  const lb = typeof leaderboardService !== 'undefined' ? leaderboardService : (typeof window !== 'undefined' ? window.leaderboardService : null);

  const parseCheckInMins = (val) => {
    if (!val) return null;
    const cleanDigits = (str) => {
      if (!str || typeof str !== 'string') return str;
      return str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
                .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
    };

    if (typeof val === 'string') {
      const cleaned = cleanDigits(val).trim();
      const match = cleaned.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);
      if (match) {
        const h = parseInt(match[1], 10);
        const m = parseInt(match[2], 10);
        if (!isNaN(h) && !isNaN(m) && h >= 0 && h < 24 && m >= 0 && m < 60) {
          return h * 60 + m;
        }
      }
    }

    let ts = null;
    if (typeof val === 'number') {
      ts = val;
    } else if (typeof val === 'object' && val !== null) {
      ts = val.timestamp || val.createdAt || val.start || null;
      if (!ts && (val.startTime || val.start_time || val.startTimeStr)) {
        return parseCheckInMins(val.startTime || val.start_time || val.startTimeStr);
      }
    }

    if (ts) {
      const d = new Date(ts);
      if (!isNaN(d.getTime())) {
        try {
          const tehranStr = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Tehran', hour12: false, hour: '2-digit', minute: '2-digit' });
          const parts = tehranStr.split(':').map(Number);
          if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return parts[0] * 60 + parts[1];
          }
        } catch (e) {
          return d.getHours() * 60 + d.getMinutes();
        }
      }
    }

    return null;
  };

  const isMorningWindow = (mins) => mins !== null && mins >= (5 * 60) && mins <= (7 * 60);

  // 1. Check official Early Bird check-in
  let rawWake = null;
  if (lb) {
    if (isToday && typeof lb.getTodayWakeTime === 'function') {
      rawWake = lb.getTodayWakeTime();
    }
    if (!rawWake && typeof lb.getEarlyBirdHistory === 'function') {
      const hist = lb.getEarlyBirdHistory() || {};
      rawWake = hist[normalizedTargetDate] || (isToday ? hist[lb.getTodayDateStr?.()] : null);
    }
    if (!rawWake && isToday && typeof lb.getTodayEarlyBird === 'function') {
      const eb = lb.getTodayEarlyBird();
      if (eb && (eb.wakeTime || eb.wake_time)) rawWake = eb.wakeTime || eb.wake_time;
    }
  }

  const rawWakeMins = parseCheckInMins(rawWake);
  if (isMorningWindow(rawWakeMins)) {
    const h = String(Math.floor(rawWakeMins / 60)).padStart(2, '0');
    const m = String(rawWakeMins % 60).padStart(2, '0');
    validCheckInTime = `${h}:${m}`;
  }

  // 2. If no official early-bird check-in, check if user logged any session (study or routine) between 05:00 and 07:00
  if (!validCheckInTime) {
    const candidateSessions = (rawSessions && rawSessions.length > 0) ? rawSessions : studySessions;
    if (candidateSessions && candidateSessions.length > 0) {
      let earliestMin = 24 * 60;
      candidateSessions.forEach(s => {
        let startMin = null;
        if (lb && typeof lb.extractSessionStartMinutes === 'function') {
          startMin = lb.extractSessionStartMinutes(s);
        } else {
          startMin = parseCheckInMins(s.startTime || s.start_time || s.startTimeStr || s.time || s.timestamp || s.createdAt || s);
        }
        if (startMin !== null && isMorningWindow(startMin) && startMin < earliestMin) {
          earliestMin = startMin;
          const h = String(Math.floor(earliestMin / 60)).padStart(2, '0');
          const m = String(earliestMin % 60).padStart(2, '0');
          validCheckInTime = `${h}:${m}`;
        }
      });
    }
  }

  const checkInBadgeContent = validCheckInTime ? `☀️ ${toPersianDigits(validCheckInTime)}` : 'بدون حاضری صبح';

  // Test Analytics Bar Data
  let totalTests = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalUnanswered = 0;

  studySessions.forEach(s => {
    const count = Number(s.testCount !== undefined ? s.testCount : (s.tests !== undefined ? s.tests : 0));
    const c = Number(s.testCorrect !== undefined ? s.testCorrect : (s.correct !== undefined ? s.correct : 0));
    const w = Number(s.testWrong !== undefined ? s.testWrong : (s.wrong !== undefined ? s.wrong : 0));
    const u = Number(s.testUnanswered !== undefined ? s.testUnanswered : (s.unanswered !== undefined ? s.unanswered : 0));

    totalCorrect += c;
    totalWrong += w;
    totalUnanswered += u;

    const sumCWU = c + w + u;
    totalTests += (count > 0) ? count : sumCWU;
  });

  const hasTestsLogged = totalTests > 0;
  const rawPct = totalTests > 0 ? Math.min(100, Math.max(0, Math.round((totalCorrect / totalTests) * 100))) : 0;
  const konkurPctCalc = totalTests > 0 ? ((totalCorrect * 3 - totalWrong) / (totalTests * 3)) * 100 : 0;
  const konkurPct = Math.round(konkurPctCalc);

  const rawStyle = getAccuracyColorStyle(rawPct);
  const konkurStyle = getAccuracyColorStyle(konkurPct);

  // Daily Energy & Mood Data
  const savedMoodId = localStorage.getItem('planex_daily_mood_' + normalizedTargetDate);
  const currentMood = DAILY_MOODS.find(m => m.id === savedMoodId);

  // Subject Breakdown
  const subjectMap = {};
  const SUBJECT_COLORS = [
    '#38bdf8', '#a78bfa', '#f59e0b', '#10b981', '#ec4899',
    '#6366f1', '#f43f5e', '#14b8a6', '#8b5cf6', '#0ea5e9'
  ];

  studySessions.forEach(s => {
    const name = s.subject || s.categoryName || s.title || s.name || 'درس آزاد';
    const dur = Number(s.duration !== undefined ? s.duration : s.minutes) || 0;
    if (!subjectMap[name]) subjectMap[name] = 0;
    subjectMap[name] += dur;
  });

  const subjectList = Object.keys(subjectMap).map((name, index) => {
    const mins = subjectMap[name];
    const pct = totalStudyMins > 0 ? Math.round((mins / totalStudyMins) * 100) : 0;
    const color = SUBJECT_COLORS[index % SUBJECT_COLORS.length];
    return { name, mins, pct, color };
  }).sort((a, b) => b.mins - a.mins);

  // Activity Type Pills Breakdown
  const activityTypesMap = {
    'یادگیری': { mins: 0, icon: '🧠', bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(129, 140, 248, 0.35)', color: '#818cf8' },
    'تست‌زنی': { mins: 0, icon: '🎯', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(52, 211, 153, 0.35)', color: '#34d399' },
    'مرور':     { mins: 0, icon: '🔄', bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(251, 191, 36, 0.35)', color: '#fbbf24' },
    'جمع‌بندی': { mins: 0, icon: '📑', bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(56, 189, 248, 0.35)', color: '#38bdf8' }
  };

  studySessions.forEach(s => {
    const dur = Number(s.duration !== undefined ? s.duration : s.minutes) || 0;
    const st = (s.studyType || s.activityType || s.type || '').toString().toLowerCase();

    if (st.includes('تست') || st.includes('test')) {
      activityTypesMap['تست‌زنی'].mins += dur;
    } else if (st.includes('مرور') || st.includes('review')) {
      activityTypesMap['مرور'].mins += dur;
    } else if (st.includes('جمع') || st.includes('summary')) {
      activityTypesMap['جمع‌بندی'].mins += dur;
    } else {
      activityTypesMap['یادگیری'].mins += dur;
    }
  });

  // Timeline Sessions List with Fixed Timestamp Formatting
  const timelineSessions = [...studySessions].map(s => {
    const subject = s.subject || s.categoryName || s.title || s.name || 'درس آزاد';
    const studyType = s.studyType || 'یادگیری';
    const c = Number(s.testCorrect || s.correct || 0);
    const w = Number(s.testWrong || s.wrong || 0);
    const u = Number(s.testUnanswered || s.unanswered || 0);
    const tCount = Number(s.testCount || s.tests || (c + w + u));
    const timeRangeStr = formatSessionTimestampRange(s);

    return {
      subject,
      timeRangeStr,
      studyType,
      tCount,
      c, w, u
    };
  });

  return `
    <div id="modal-daily-analysis-report" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyAnalysisReport();">
      <!-- ✖ Prominent Story Close Button -->
      <button type="button" aria-label="بستن" onclick="window.closeDailyAnalysisReport();" style="position: absolute; top: 15px; right: 15px; z-index: 99999; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; font-size: 20px; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); -webkit-tap-highlight-color: transparent;">✖</button>

      <div style="max-width: 480px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 14px;">
        
        <!-- Action Toolbar Above Card -->
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; color: white;">
          <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1.1rem;">📊</span>
            <span>تحلیل جامع عملکرد روزانه</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeDailyAnalysisReport();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: rgba(255,255,255,0.14); border: 1.5px solid rgba(255,255,255,0.28); color: #ffffff; border-radius: 50%; cursor: pointer; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.4); transition: all 0.15s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; z-index: 99999;">✕</button>
        </div>

        <!-- 📱 DETAILED DERSITA-STYLE ANALYSIS REPORT CANVAS -->
        <div id="planex-analysis-report-canvas" style="width: 460px; min-height: 820px; background: linear-gradient(165deg, #090d16 0%, #0c1222 40%, #17112c 75%, #080a14 100%); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 28px; padding: 22px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85); direction: rtl; text-align: right; font-family: 'Vazirmatn', -apple-system, sans-serif; color: #ffffff; transform: translateZ(0); will-change: transform, opacity;">
          
          <!-- Background Ambient Glowing Orbs -->
          <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
          <div style="position: absolute; bottom: -50px; left: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

          <!-- 1. HEADER SECTION -->
          <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2; padding-bottom: 2px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${userAvatar ? `
                <img src="${userAvatar}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);" />
              ` : `
                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #0284c7 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);">
                  ${userName.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.05rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${userName}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #38bdf8; margin-top: 2px;">
                  🎯 ${targetBadgeText}
                </div>
              </div>
            </div>

            <div style="text-align: left; display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <img src="./logo-transparent.png" style="width: 22px; height: 22px; border-radius: 6px;" onerror="this.style.display='none';" />
                <span style="font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 0.95rem; background: linear-gradient(135deg, #38bdf8, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PlanEx</span>
              </div>
            </div>
          </div>

          <!-- 2. HORIZONTAL WEEKDAY SELECTOR BAR (شنبه تا جمعه) -->
          <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; align-items: center; z-index: 2; margin: 4px 0;">
            <div style="width: 100%; display: flex; gap: 4px; overflow-x: auto; padding: 4px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; scrollbar-width: none; box-sizing: border-box;">
              ${weekDays.map(d => {
                const isSelected = db.normalizeJalaliDate(d.dateStr) === normalizedTargetDate;
                const activeBg = isSelected
                  ? 'background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; border-color: #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);'
                  : 'background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);';
                const todayBadge = d.isToday ? '<span style="width: 5px; height: 5px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 3px;"></span>' : '';

                return `
                  <button type="button"
                    class="weekday-tab-btn ${isSelected ? 'active' : ''}"
                    data-date="${d.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${d.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 6px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${activeBg}">
                    <div style="font-size: 0.66rem; opacity: 0.9;">${d.dayName}</div>
                    <div style="font-size: 0.78rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${todayBadge}${toPersianDigits(d.dayOfMonth)}</div>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); padding: 3px 12px; border-radius: 10px;">
              📅 ${fullJalaliDateStr}
            </div>
          </div>

          <!-- 3. HERO STAT BOX (Total Study Time & Progress Bar) -->
          <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 14px 16px; position: relative; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه این روز</span>
              <span style="font-size: 0.7rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${toPersianDigits(targetHours)} ساعت
              </span>
            </div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; margin: 6px 0 10px 0; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${totalStudyTimeText}
            </div>
            
            <!-- Daily Goal Completion Progress Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 5px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${toPersianDigits(goalProgressPct)}٪</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${goalProgressPct}%; height: 100%; background: linear-gradient(90deg, #0284c7 0%, #10b981 50%, #f59e0b 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);"></div>
            </div>
          </div>

          <!-- 4. TOP MINI STATS GRID (3 Boxes) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; z-index: 2;">
            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">تعداد جلسات</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #38bdf8; margin-top: 3px;">
                ${toPersianDigits(sessionsCount)} <span style="font-size: 0.7rem; font-weight: 600;">جلسه</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">استریک مطالعه</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #f97316; margin-top: 3px;">
                🔥 ${toPersianDigits(streakDays)} <span style="font-size: 0.7rem; font-weight: 600;">روز</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">ساعت حاضری صبح</div>
              <div style="font-size: ${validCheckInTime ? '0.95rem' : '0.78rem'}; font-weight: 900; color: ${validCheckInTime ? '#10b981' : '#9ca3af'}; margin-top: 3px; white-space: nowrap;">
                ${checkInBadgeContent}
              </div>
            </div>
          </div>

          <!-- 5. TEST ANALYTICS BAR -->
          ${hasTestsLogged ? `
            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.22); border-radius: 16px; padding: 10px 12px; z-index: 2;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #34d399;">🎯 تحلیل تست‌های این روز</span>
                <span style="font-size: 0.68rem; font-weight: 700; color: #a78bfa; background: rgba(167, 139, 250, 0.15); padding: 1px 6px; border-radius: 6px;">
                  مجموع: ${toPersianDigits(totalTests)} تست
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; text-align: center;">
                <div style="background: rgba(0,0,0,0.2); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #9ca3af; white-space: nowrap;">کل</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #ffffff;">${toPersianDigits(totalTests)}</div>
                </div>
                <div style="background: rgba(16,185,129,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #6ee7b7; white-space: nowrap;">درست</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #34d399;">${toPersianDigits(totalCorrect)}</div>
                </div>
                <div style="background: rgba(239,68,68,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #fca5a5; white-space: nowrap;">غلط</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #f87171;">${toPersianDigits(totalWrong)}</div>
                </div>
                <div style="background: rgba(161,161,170,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #d4d4d8; white-space: nowrap;">نزده</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">${toPersianDigits(totalUnanswered)}</div>
                </div>
                <div style="background: ${rawStyle.bg}; border: 1px solid ${rawStyle.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${rawStyle.text}; white-space: nowrap; font-weight: 700;">بدون منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${rawStyle.text};">${toPersianDigits(rawPct)}٪</div>
                </div>
                <div style="background: ${konkurStyle.bg}; border: 1px solid ${konkurStyle.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${konkurStyle.text}; white-space: nowrap; font-weight: 700;">با منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${konkurStyle.text};">${toPersianDigits(konkurPct)}٪</div>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- 6. SUBJECT BREAKDOWN (دروس) WITH PERFECT ALIGNMENT & ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
              <span>📚 تفکیک دروس مطالعه‌شده</span>
            </div>
            ${subjectList.length > 0 ? `
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${subjectList.slice(0, 6).map(sub => `
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; margin-bottom: 2px; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden; white-space: nowrap;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${sub.color}; flex-shrink: 0; box-shadow: 0 0 6px ${sub.color};"></span>
                        <span style="font-weight: 700; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sub.name}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                        <span style="color: #9ca3af; font-size: 0.65rem;">${formatMinutesToPersian(sub.mins)}</span>
                        <span style="color: ${sub.color}; font-weight: 800; font-size: 0.68rem; min-width: 30px; text-align: left;">${toPersianDigits(sub.pct)}٪</span>
                      </div>
                    </div>
                    <!-- Sub Progress Line -->
                    <div style="width: 100%; height: 5px; background: rgba(255, 255, 255, 0.06); border-radius: 999px; overflow: hidden;">
                      <div style="width: ${sub.pct}%; height: 100%; background: ${sub.color}; border-radius: 999px;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div style="font-size: 0.74rem; color: #a1a1aa; text-align: center; padding: 12px 0; font-weight: bold;">
                📭 هیچ مطالعه‌ای برای این روز ثبت نشده است
              </div>
            `}
          </div>

          <!-- 7. ACTIVITY TYPE PILLS -->
          <div style="z-index: 2;">
            <div style="font-size: 0.72rem; font-weight: 800; color: #9ca3af; margin-bottom: 6px;">
              🏷️ تفکیک نوع فعالیت
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
              ${Object.keys(activityTypesMap).map(key => {
                const item = activityTypesMap[key];
                return `
                  <div style="background: ${item.bg}; border: 1px solid ${item.border}; padding: 5px 8px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.8rem;">${item.icon}</span>
                      <span style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7;">${key}</span>
                    </div>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${item.color};">
                      ${formatMinutesToPersian(item.mins)}
                    </span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 8. TIMELINE SESSIONS LIST WITH FIXED TIMESTAMP FORMATTING OR ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2; flex-grow: 1; display: flex; flex-direction: column;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span>🕒 جریان زمانی جلسات</span>
              <span style="font-size: 0.65rem; color: #9ca3af;">${toPersianDigits(timelineSessions.length)} پارت</span>
            </div>
            
            ${timelineSessions.length > 0 ? `
              <div style="display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                ${timelineSessions.slice(0, 5).map(ts => `
                  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); padding: 6px 8px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden;">
                      <span style="font-size: 0.72rem; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${ts.subject}</span>
                      <span style="font-size: 0.6rem; color: #c4b5fd; background: rgba(167, 139, 250, 0.15); padding: 1px 5px; border-radius: 6px; font-weight: 700; white-space: nowrap; flex-shrink: 0;">${ts.studyType}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                      ${ts.tCount > 0 ? `
                        <span style="font-size: 0.6rem; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 1px 5px; border-radius: 6px; font-weight: 700;">
                          🎯 ${toPersianDigits(ts.tCount)}
                        </span>
                      ` : ''}
                      <span style="font-size: 0.65rem; color: #38bdf8; font-weight: 700; font-family: 'Outfit', sans-serif;">
                        ${ts.timeRangeStr}
                      </span>
                    </div>
                  </div>
                `).join('')}
                ${timelineSessions.length > 5 ? `
                  <div style="font-size: 0.62rem; color: #8e8e9c; text-align: center; margin-top: 2px;">
                    و ${toPersianDigits(timelineSessions.length - 5)} جلسه دیگر...
                  </div>
                ` : ''}
              </div>
            ` : `
              <div style="font-size: 0.74rem; color: #8e8e9c; text-align: center; margin: auto 0; padding: 16px 0; font-weight: bold;">
                هیچ مطالعه‌ای برای این روز ثبت نشده است
              </div>
            `}
          </div>

          <!-- 8.5 DAILY MOOD & ENERGY TRACKER -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 10px 12px; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.74rem; font-weight: 800; color: #fbbf24; display: flex; align-items: center; gap: 4px;">
                ⚡️ حس و انرژی امروز
              </span>
              ${currentMood ? `
                <span style="font-size: 0.68rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 2px 8px; border-radius: 8px;">
                  ${currentMood.badge}
                </span>
              ` : `
                <span style="font-size: 0.65rem; color: #9ca3af;">(یک گزینه انتخاب کنید)</span>
              `}
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
              ${DAILY_MOODS.map(m => {
                const isSelected = currentMood && currentMood.id === m.id;
                const btnStyle = isSelected
                  ? 'background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%); border: 1.5px solid #fbbf24; color: #ffffff; box-shadow: 0 0 12px rgba(245, 158, 11, 0.35); font-weight: 900;'
                  : 'background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #d4d4d8; font-weight: 700;';
                return `
                  <button type="button"
                    onclick="if(window.setDailyMood){ window.setDailyMood('${normalizedTargetDate}', '${m.id}'); }"
                    style="padding: 7px 8px; border-radius: 12px; font-size: 0.7rem; cursor: pointer; transition: all 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 4px; ${btnStyle}">
                    <span>${m.badge}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 9. FOOTER BRANDING WITH VIRAL TELEGRAM TAG -->
          <div style="border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 8px; display: flex; justify-content: space-between; align-items: center; font-size: 0.68rem; color: #9ca3af; z-index: 2; margin-top: auto;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: #38bdf8; font-weight: 800;">PlanEx</span>
              <span>•</span>
              <span>کارنامه تحلیلی روزانه</span>
            </div>
            <div style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(16, 185, 129, 0.15) 100%); border: 1px solid rgba(167, 139, 250, 0.35); padding: 3px 10px; border-radius: 999px; font-size: 0.64rem; font-weight: 800; color: #c4b5fd; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);">
              <span>✨ ساخته شده با پلنکس ✦ @PlanExApp</span>
            </div>
          </div>

        </div>

        <!-- Download Analysis Report Button -->
        <button type="button" id="btn-download-analysis-report" onclick="window.downloadAnalysisReportPNG();"
          style="width: 100%; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border: none; color: #ffffff; padding: 12px 20px; border-radius: 16px; font-weight: 800; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 6px 20px rgba(14, 165, 233, 0.35); transition: transform 0.15s ease;">
          <span style="font-size: 1.1rem;">📥</span>
          <span>دانلود کارنامه و تحلیل کامل (تصویر PNG)</span>
        </button>

      </div>
    </div>
  `;
}

/**
 * Show a non-blocking toast notification
 */
function showStoryToast(message, isError = false) {
  const existing = document.getElementById('planex-story-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'planex-story-toast';
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '12px 24px',
    borderRadius: '14px',
    fontSize: '0.88rem',
    fontWeight: '700',
    color: '#ffffff',
    background: isError
      ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)'
      : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    zIndex: '999999',
    direction: 'rtl',
    transition: 'opacity 0.3s ease',
    opacity: '0',
  });
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; });
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

/**
 * Sanitize a cloned element tree for html2canvas compatibility
 */
function sanitizeForCapture(el) {
  const walk = (node) => {
    if (node.nodeType !== 1) return;
    const s = node.style;
    if (s.filter) s.filter = 'none';
    if (s.backdropFilter) s.backdropFilter = 'none';
    if (s.webkitBackdropFilter) s.webkitBackdropFilter = 'none';
    ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
      const val = s[prop];
      if (val && val.includes('var(')) {
        const computed = getComputedStyle(node)[prop];
        if (computed) s[prop] = computed;
      }
    });
    for (const child of node.children) walk(child);
  };
  walk(el);
}

/**
 * Trigger file download from a data URL
 * Uses Web Share API (navigator.share with files) first for Android WebView compatibility,
 * then falls back to standard <a> download for desktop/unsupported browsers.
 */
async function triggerDownload(dataUrl, filename) {
  // 1. Try Web Share API with files (works in Android WebView / Telegram WebApp)
  try {
    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare) {
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], filename, { type: blob.type || 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'PlanEx Story',
        });
        return; // Shared successfully via native share sheet
      }
    }
  } catch (shareErr) {
    // User cancelled or share failed — fall through to anchor download
    if (shareErr && shareErr.name !== 'AbortError') {
      console.warn('[triggerDownload] Web Share failed, falling back to anchor:', shareErr);
    }
  }

  // 2. Fallback: standard <a> download
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Fallback Canvas Render
 */
function fallbackCanvasRender(sourceEl, width, height, scale) {
  return new Promise((resolve, reject) => {
    try {
      const svgNS = 'http://www.w3.org/2000/svg';
      const clone = sourceEl.cloneNode(true);
      sanitizeForCapture(clone);

      clone.style.width = width + 'px';
      clone.style.height = height + 'px';

      const serialized = new XMLSerializer().serializeToString(clone);
      const svgMarkup = `
        <svg xmlns="${svgNS}" width="${width}" height="${height}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${serialized}</div>
          </foreignObject>
        </svg>`;

      const img = new Image();
      const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width * scale;
        canvas.height = height * scale;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, width, height);
        URL.revokeObjectURL(url);
        resolve(canvas);
      };
      img.onerror = (e) => {
        URL.revokeObjectURL(url);
        reject(new Error('Fallback SVG-to-Canvas render failed: ' + (e.message || e)));
      };
      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Export Story Card Element into High-Res PNG
 */
export async function downloadStoryCardPNG() {
  const btn = document.getElementById('btn-download-story-card');
  const card = document.getElementById('planex-story-card-canvas');

  if (!card) {
    showStoryToast('عنصر کارت پیدا نشد.', true);
    return;
  }

  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>⏳</span><span>در حال ساخت تصویر...</span>';
  }

  const restoreBtn = () => {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  };

  const dateTag = (typeof db !== 'undefined' && typeof db.getTodayJalaliString === 'function')
    ? db.getTodayJalaliString().replace(/\//g, '-')
    : new Date().toISOString().slice(0, 10);
  const filename = `PlanEx_Daily_Story_${dateTag}.png`;

  let offscreenClone = null;
  try {
    offscreenClone = card.cloneNode(true);
    offscreenClone.id = 'planex-story-card-offscreen';
    Object.assign(offscreenClone.style, {
      position: 'fixed',
      left: '-9999px',
      top: '0',
      zIndex: '-1',
      display: 'flex',
      width: '440px',
      height: '740px',
      minHeight: '740px',
      maxHeight: '740px',
      maxWidth: 'none',
      transform: 'none',
    });
    sanitizeForCapture(offscreenClone);
    document.body.appendChild(offscreenClone);

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  } catch (cloneErr) {
    console.warn('Story card: clone failed, capturing in-place.', cloneErr);
    offscreenClone = null;
  }

  const captureTarget = offscreenClone || card;

  try {
    let canvas;
    try {
      canvas = await html2canvas(captureTarget, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#090d16',
        logging: false,
        removeContainer: false,
      });
    } catch (h2cErr) {
      console.warn('html2canvas failed, attempting fallback:', h2cErr);
      const w = captureTarget.offsetWidth || 440;
      const h = captureTarget.offsetHeight || 740;
      canvas = await fallbackCanvasRender(captureTarget, w, h, 2);
    }

    const dataUrl = canvas.toDataURL('image/png');
    triggerDownload(dataUrl, filename);

    if (btn) {
      btn.innerHTML = '<span>✅</span><span>تصویر با موفقیت دانلود شد!</span>';
      setTimeout(restoreBtn, 2500);
    }
    showStoryToast('تصویر کارت استوری با موفقیت ذخیره شد ✅');
  } catch (err) {
    console.error('Story card export failed:', err);
    showStoryToast('خطا در دانلود تصویر: ' + (err.message || err), true);
    restoreBtn();
  } finally {
    if (offscreenClone && offscreenClone.parentNode) {
      offscreenClone.parentNode.removeChild(offscreenClone);
    }
  }
}

/**
 * Export Detailed Analysis Report into High-Res PNG
 */
export async function downloadAnalysisReportPNG() {
  const btn = document.getElementById('btn-download-analysis-report');
  const card = document.getElementById('planex-analysis-report-canvas');

  if (!card) {
    showStoryToast('عنصر کارنامه تحلیلی پیدا نشد.', true);
    return;
  }

  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>⏳</span><span>در حال ساخت تصویر کارنامه...</span>';
  }

  const restoreBtn = () => {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  };

  const dateTag = (typeof db !== 'undefined' && typeof db.getTodayJalaliString === 'function')
    ? db.getTodayJalaliString().replace(/\//g, '-')
    : new Date().toISOString().slice(0, 10);
  const filename = `PlanEx_Daily_Analysis_${dateTag}.png`;

  let offscreenClone = null;
  try {
    offscreenClone = card.cloneNode(true);
    offscreenClone.id = 'planex-analysis-report-offscreen';
    Object.assign(offscreenClone.style, {
      position: 'fixed',
      left: '-9999px',
      top: '0',
      zIndex: '-1',
      display: 'flex',
      width: '460px',
      maxHeight: 'none',
      transform: 'none',
    });
    sanitizeForCapture(offscreenClone);
    document.body.appendChild(offscreenClone);

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  } catch (cloneErr) {
    console.warn('Analysis report clone failed, capturing in-place.', cloneErr);
    offscreenClone = null;
  }

  const captureTarget = offscreenClone || card;

  try {
    let canvas;
    try {
      canvas = await html2canvas(captureTarget, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#090d16',
        logging: false,
        removeContainer: false,
      });
    } catch (h2cErr) {
      console.warn('html2canvas failed for analysis report, attempting fallback:', h2cErr);
      const w = captureTarget.offsetWidth || 460;
      const h = captureTarget.offsetHeight || 820;
      canvas = await fallbackCanvasRender(captureTarget, w, h, 2);
    }

    const dataUrl = canvas.toDataURL('image/png');
    triggerDownload(dataUrl, filename);

    if (btn) {
      btn.innerHTML = '<span>✅</span><span>تصویر کارنامه با موفقیت دانلود شد!</span>';
      setTimeout(restoreBtn, 2500);
    }
    showStoryToast('کارنامه تحلیلی با موفقیت ذخیره شد ✅');
  } catch (err) {
    console.error('Analysis report export failed:', err);
    showStoryToast('خطا در دانلود تصویر: ' + (err.message || err), true);
    restoreBtn();
  } finally {
    if (offscreenClone && offscreenClone.parentNode) {
      offscreenClone.parentNode.removeChild(offscreenClone);
    }
  }
}

// Global Window Bindings & Listener Auto-Sync
if (typeof window !== 'undefined') {
  window.selectDailyModalDate = (dateStr) => {
    if (!dateStr) return;
    const norm = (db && typeof db.normalizeJalaliDate === 'function') ? db.normalizeJalaliDate(dateStr) : dateStr;
    if (window.appState) {
      window.appState.selectedJalaliDetailDate = norm;
    }
    if (typeof window.renderApp === 'function') {
      window.renderApp();
    }
  };

  window.openStoryModal = (modalId = 'dailyStoryCard', dateStr = null) => {
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    const resolvedModal = (modalId === 'dailyAnalysisReport' || modalId === 'analysis' || modalId === 'report' || modalId === 'jalaliDayDetails') ? 'dailyAnalysisReport' : 'dailyStoryCard';
    const fallbackDate = (db && typeof db.getTodayJalaliString === 'function') ? db.getTodayJalaliString() : null;
    const targetDate = dateStr || targetState?.selectedJalaliDetailDate || fallbackDate;

    if (targetState) {
      if (targetDate) targetState.selectedJalaliDetailDate = targetDate;
      targetState.activeModal = resolvedModal;
    }
    if (window.appState && window.appState !== targetState) {
      if (targetDate) window.appState.selectedJalaliDetailDate = targetDate;
      window.appState.activeModal = resolvedModal;
    }
    try { history.pushState({ modal: resolvedModal }, ''); } catch (e) {}
    if (typeof window.renderApp === 'function') {
      window.renderApp();
    }
  };

  window.closeStoryModal = () => {
    if (typeof state !== 'undefined' && state) state.activeModal = null;
    if (window.appState) window.appState.activeModal = null;
    if (typeof window.renderApp === 'function') window.renderApp();
  };

  window.openDailyStoryCard = (dateStr = null) => {
    window.openStoryModal('dailyStoryCard', dateStr);
  };

  window.closeDailyStoryCard = () => {
    window.closeStoryModal();
  };

  window.openDailyAnalysisReport = (dateStr = null) => {
    window.openStoryModal('dailyAnalysisReport', dateStr);
  };

  window.closeDailyAnalysisReport = () => {
    window.closeStoryModal();
  };

  // Explicit user-facing aliases requested
  window.openDailyReportModal = (dateStr = null) => {
    window.openStoryModal('dailyAnalysisReport', dateStr);
  };

  window.openQuickStoryModal = (dateStr = null) => {
    window.openStoryModal('dailyStoryCard', dateStr);
  };

  window.closeDailyReportModal = () => {
    window.closeStoryModal();
  };

  window.closeQuickStoryModal = () => {
    window.closeStoryModal();
  };

  window.openDailyReport = window.openDailyReportModal;
  window.openQuickStory = window.openQuickStoryModal;
  window.openDailyAnalysisModal = window.openDailyReportModal;

  window.openJalaliDayDetailsModal = (dateStr = null) => {
    window.openStoryModal('dailyAnalysisReport', dateStr);
  };

  window.downloadStoryCardPNG = downloadStoryCardPNG;
  window.generateStoryCardPNG = downloadStoryCardPNG;
  window.downloadAnalysisReportPNG = downloadAnalysisReportPNG;

  window.setDailyMood = (dateStr, moodId) => {
    if (!dateStr || !moodId) return;
    const norm = (db && typeof db.normalizeJalaliDate === 'function') ? db.normalizeJalaliDate(dateStr) : dateStr;
    localStorage.setItem('planex_daily_mood_' + norm, moodId);
    if (typeof window.renderApp === 'function') {
      window.renderApp();
    }
  };

  if (!window.weekdaySelectorDelegationBound) {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.weekday-tab-btn, [data-weekday-date]');
      if (btn) {
        const dateStr = btn.dataset.date || btn.dataset.weekdayDate;
        if (dateStr && typeof window.selectDailyModalDate === 'function') {
          window.selectDailyModalDate(dateStr);
        }
      }
    });
    window.weekdaySelectorDelegationBound = true;
  }

  // Keyboard ESC key & Mobile back-button history binding
  if (!window.dailyModalKeyboardBound) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        if (window.appState && (window.appState.activeModal === 'dailyStoryCard' || window.appState.activeModal === 'dailyAnalysisReport')) {
          e.preventDefault();
          window.appState.activeModal = null;
          if (typeof window.renderApp === 'function') window.renderApp();
        }
      }
    });

    window.addEventListener('popstate', () => {
      if (window.appState && (window.appState.activeModal === 'dailyStoryCard' || window.appState.activeModal === 'dailyAnalysisReport')) {
        window.appState.activeModal = null;
        if (typeof window.renderApp === 'function') window.renderApp();
      }
    });

    window.dailyModalKeyboardBound = true;
  }

  // Auto-sync listener for finished sessions
  if (!window.dailyRingAutoSyncBound) {
    const handleSync = () => {
      const widgetContainer = document.querySelector('.daily-ring-widget-card');
      if (widgetContainer && typeof window.renderApp === 'function') {
        window.renderApp();
      }
    };

    window.addEventListener('activity-saved', handleSync);
    window.addEventListener('storage', (e) => {
      if (e.key === 'planex_recent_activity_sessions' || e.key === 'planex_study_logs' || e.key === 'planex_active_timer_state') {
        handleSync();
      }
    });

    window.dailyRingAutoSyncBound = true;
  }
}
