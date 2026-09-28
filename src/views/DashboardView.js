import { db } from '../db.js';
import { ACTIVITY_PALETTE_24, isStudyCategory, formatStudyTime } from '../constants.js';
import { leaderboardService } from '../services/leaderboardService.js';
import { pomodoroService } from '../services/pomodoroService.js';
import { renderDailyRingWidget } from '../components/DailyRingWidget.js';

// ── باشگاه سحرخیزان ☀️ — هندلر دکمه «من بیدارم!» (فقط با کلیک کاربر) ──
if (typeof window !== 'undefined') {
  window.isEarlyBirdSubmitting = false;
}

function showEarlyBirdToast(message, ok = true, subText = '') {
  if (typeof document === 'undefined') return;
  const toast = document.createElement('div');
  const bg = ok ? '#10b981' : '#ef4444';
  toast.style.cssText = `position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${bg}; color: white; padding: 12px 22px; border-radius: 14px; font-weight: 900; font-size: 0.9rem; line-height: 1.7; z-index: 9999; box-shadow: 0 6px 20px rgba(0,0,0,0.4); max-width: 92vw; text-align: center; direction: rtl;`;
  toast.innerHTML = `${message}${subText ? `<br><span style="font-size: 0.72rem; opacity: 0.9; font-weight: normal;">${String(subText).replace(/</g, '&lt;')}</span>` : ''}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), ok ? 3500 : 8000);
}

if (typeof window !== 'undefined') {
  // Check and reset Early Birds Club status if it's a new day
  try {
    const ebStatusStr = localStorage.getItem('early_bird_daily_status');
    if (ebStatusStr) {
      const ebStatus = JSON.parse(ebStatusStr);
      const todayStr = window.leaderboardService ? window.leaderboardService.getTodayDateStr() : new Date().toLocaleDateString('fa-IR');
      if (ebStatus.date !== todayStr) {
        localStorage.removeItem('early_bird_daily_status');
      }
    }
  } catch (e) {}
}

if (typeof window !== 'undefined') {
  window.handleEarlyBirdCheckIn = async () => {
    if (window.isEarlyBirdSubmitting) return;

  if (!leaderboardService.isEarlyBirdWindowOpen()) {
    showEarlyBirdToast('⏰ ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.', false);
    return;
  }

  window.isEarlyBirdSubmitting = true;
  if (window.renderApp) window.renderApp();

  try {
    const result = await leaderboardService.recordEarlyBird();
    if (result.success && result.serverConfirmed) {
      const rankTxt = result.rank ? ` — رتبه بیداری #${result.rank}` : '';
      showEarlyBirdToast(`☀️ ${result.message}${rankTxt}`, true);
      if (Array.isArray(result.list)) window.lastEarlyBirdList = result.list;
      
      try {
        const todayStr = leaderboardService.getTodayDateStr();
        const wakeTime = leaderboardService.getIranNowHHMM();
        localStorage.setItem('early_bird_daily_status', JSON.stringify({ date: todayStr, time: wakeTime }));
      } catch (e) {}
    } else {
      showEarlyBirdToast(`❌ ${result.message}`, false, result.errorDetail || '');
    }
  } catch (err) {
    console.error('[EarlyBird] خطای غیرمنتظره:', err);
    showEarlyBirdToast('❌ خطای غیرمنتظره در ثبت سحرخیزی.', false, err.message);
  } finally {
    window.isEarlyBirdSubmitting = false;
    if (window.renderApp) window.renderApp();
  }
  };
}

if (typeof window !== 'undefined' && !window.toggleTopBannersAccordion) {
  window.toggleTopBannersAccordion = () => {
    const isCurrentlyOpen = localStorage.getItem('planex_top_accordion_open') === 'true';
    localStorage.setItem('planex_top_accordion_open', String(!isCurrentlyOpen));
    if (window.renderApp) window.renderApp();
  };
}

if (typeof window !== 'undefined' && !window.toggleRecentSessionsAccordion) {
  window.toggleRecentSessionsAccordion = () => {
    const isCurrentlyOpen = localStorage.getItem('planex_recent_sessions_open') === 'true';
    localStorage.setItem('planex_recent_sessions_open', String(!isCurrentlyOpen));
    if (window.renderApp) window.renderApp();
  };
}

if (typeof window !== 'undefined' && !window.toggleChartsAccordion) {
  window.toggleChartsAccordion = () => {
    const isCurrentlyOpen = localStorage.getItem('planex_charts_accordion_open') !== 'false';
    localStorage.setItem('planex_charts_accordion_open', String(!isCurrentlyOpen));
    if (window.renderApp) window.renderApp();
  };
}

if (typeof window !== 'undefined' && !window.toggleWeeklyBreakdownAccordion) {
  window.toggleWeeklyBreakdownAccordion = () => {
    const isCurrentlyOpen = localStorage.getItem('planex_weekly_breakdown_accordion_open') === 'true';
    localStorage.setItem('planex_weekly_breakdown_accordion_open', String(!isCurrentlyOpen));
    if (window.renderApp) window.renderApp();
  };
}

export const DAY_NAMES = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"];

export function formatSlotRange(slotIndex) {
  const startHour = Math.floor(slotIndex / 2);
  const startMin = slotIndex % 2 === 0 ? "00" : "30";
  const endHour = Math.floor((slotIndex + 1) / 2);
  const endMin = (slotIndex + 1) % 2 === 0 ? "00" : "30";

  const startStr = `${startHour.toString().padStart(2, '0')}:${startMin}`;
  const endStr = `${endHour.toString().padStart(2, '0')}:${endMin}`;
  return `${startStr} - ${endStr}`;
}

export function renderDashboardView(selectedDayIndex = 0, viewMode = 'daily') {
  try {
    const currentWeek = db.getCurrentWeek();
    const weekId = currentWeek ? currentWeek.id : 1;
    const hourlyLogs = db.getHourlyLogs(weekId) || {};
    const categories = db.getCategories() || [];
    const categoryMap = {};
    categories.forEach((c, idx) => {
      if (c && c.code) {
        categoryMap[c.code] = {
          ...c,
          color: c.color || ACTIVITY_PALETTE_24[idx % ACTIVITY_PALETTE_24.length]
        };
      }
    });

    const targets = db.getStudyTargets() || {};
    const countdowns = db.getCountdownEvents() || [];
    const upcomingEvent = countdowns && countdowns.length > 0 ? countdowns[0] : null;
    const medal = db.getEarnedMedalBadge();
    const recentSessions = (typeof db.getRecentFocusSessions === 'function' ? db.getRecentFocusSessions(8) : []).filter(Boolean);

    const [jy, jm, jd] = db.getTodayJalali();
    const todayDayIdx = (new Date().getDay() + 1) % 7;
    const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

    const weekParts = (currentWeek?.id || '').split('_');
    let saturdayJdn = null;
    if (weekParts.length === 3) {
      const pjy = parseInt(weekParts[0]);
      const pjm = parseInt(weekParts[1]);
      const pjw = parseInt(weekParts[2]);
      if (!isNaN(pjy) && !isNaN(pjm) && !isNaN(pjw)) {
        const firstDayJdn = db.jalaliToJdn(pjy, pjm, 1);
        const offset = (firstDayJdn + 2) % 7;
        const sat1Jdn = firstDayJdn - offset;
        saturdayJdn = sat1Jdn + (pjw - 1) * 7;
      }
    }
    if (saturdayJdn === null) {
      const todayJdn = db.getTodayJdn();
      saturdayJdn = todayJdn - todayDayIdx;
    }

    // Calculate legacy study slots and wasted time for selected day
    let totalStudySlots = 0;
    let totalWastedSlots = 0;
    let legacyTestCount = 0;
    const dailyCatSlots = {};

    for (let s = 0; s < 48; s++) {
      const slotKeyOld = `${selectedDayIndex}_${s}`;
      const logOld = hourlyLogs[slotKeyOld];
      const slotKeyMulti = `${selectedDayIndex}_${s}_multi`;
      const multi = hourlyLogs[slotKeyMulti] || [];

      const codesInSlot = new Set();
      if (logOld && logOld.categoryCode) codesInSlot.add(logOld.categoryCode);
      multi.forEach(c => codesInSlot.add(c));

      codesInSlot.forEach(code => {
        const cat = categoryMap[code];
        if (cat) {
          dailyCatSlots[cat.code] = (dailyCatSlots[cat.code] || 0) + 1;

          if (isStudyCategory(cat)) {
            totalStudySlots++;
          } else if (cat.code === 'تـ' || cat.group === 'تلف شده') {
            totalWastedSlots++;
          }
        }
      });

      if (logOld && logOld.testCount) {
        legacyTestCount += parseInt(logOld.testCount) || 0;
      }
    }

    // Determine Jalali date string for the selected day
    const selectedDayJalaliStr = currentWeek?.days?.[selectedDayIndex]?.dateStr || db._getWeekDayDateStr(selectedDayIndex);

  const selectedDayStats = db.getDailyStats(selectedDayJalaliStr) || { studyHours: 0, studyMinutes: 0, totalTests: 0, sessionsCount: 0 };

  // Exact study minutes and tests for selected day
  let loggedStudyMinutes = db.getWeekDayMinutes(selectedDayIndex);
  let loggedStudyHours = +(loggedStudyMinutes / 60).toFixed(2);
  let totalTestCount = db.getWeekDayTests(selectedDayIndex);

  const targetStudyHours = targets.dailyStudyGoalHours || 8.0;
  const targetStudyMinutes = targetStudyHours * 60;
  const targetTestCount = targets.dailyTestGoalCount || 150;

  const studyProgress = targetStudyMinutes > 0 ? Math.min(100, Math.round((loggedStudyMinutes / targetStudyMinutes) * 100)) : 0;
  const testProgress = targetTestCount > 0 ? Math.min(100, Math.round((totalTestCount / targetTestCount) * 100)) : 0;

  const remainingStudyMinutes = Math.max(0, targetStudyMinutes - loggedStudyMinutes);
  const remainingStudyHours = +(remainingStudyMinutes / 60).toFixed(1);
  const remainingTests = Math.max(0, targetTestCount - totalTestCount);

  let countdownMsg = '';
  if (upcomingEvent) {
    const todayJdn = db.getTodayJdn();
    const targetJdn = db.jalaliToJdn(parseInt(upcomingEvent.jy), parseInt(upcomingEvent.jm), parseInt(upcomingEvent.jd));
    const diffDaysInt = targetJdn - todayJdn;
    
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + diffDaysInt);
    targetDate.setHours(8, 0, 0, 0);

    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();
    
    if (diffMs > 0) {
      const d = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const h = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const toPersian = (n) => String(n).replace(/[0-9]/g, x => '۰۱۲۳۴۵۶۷۸۹'[x]);
      countdownMsg = `🎯 ${toPersian(d)} روز و ${toPersian(h)} ساعت تا ${upcomingEvent.title}`;
    } else if (diffMs > -86400000) {
      countdownMsg = `🎉 امروز روز برگزاری ${upcomingEvent.title} است!`;
    } else {
      const passedD = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60 * 24));
      const toPersian = (n) => String(n).replace(/[0-9]/g, x => '۰۱۲۳۴۵۶۷۸۹'[x]);
      countdownMsg = `📌 ${toPersian(passedD)} روز از ${upcomingEvent.title} گذشته است.`;
    }
  }

  // Weekly Bar Charts Data Calculations
  const weeklyStudyMinutesArray = [];
  const weeklyTestsArray = [];
  let weeklyStudyMinutesTotal = 0;
  let weeklyTestsTotal = 0;

  for (let d = 0; d < 7; d++) {
    const dayMinutes = db.getWeekDayMinutes(d);
    const dayTests = db.getWeekDayTests(d);

    weeklyStudyMinutesArray.push(dayMinutes);
    weeklyTestsArray.push(dayTests);
    weeklyStudyMinutesTotal += dayMinutes;
    weeklyTestsTotal += dayTests;
  }

  const weeklyStudyAverageMinutes = Math.round(weeklyStudyMinutesTotal / 7);
  const weeklyTestsAverage = Math.round(weeklyTestsTotal / 7);
  const passedDaysCount = Math.max(1, todayDayIdx + 1);
  const weeklyPassedDailyAverageMinutes = Math.round(weeklyStudyMinutesTotal / passedDaysCount);

  // Per-day category distribution for 7 Weekly Donut Charts
  const weeklyDayDonutData = [];

  for (let d = 0; d < 7; d++) {
    const dayObj = currentWeek?.days?.[d];
    const dayDateStr = dayObj?.dateStr || db._getWeekDayDateStr(d);
    const dayDateFull = (dayObj && dayObj.dayOfMonth && dayObj.monthName)
      ? `${DAY_NAMES[d]} ${toPersianDigits(dayObj.dayOfMonth)} ${dayObj.monthName}`
      : DAY_NAMES[d];

    const breakdown = db.getDayCategoryBreakdown(d);
    const totalMins = breakdown.reduce((sum, item) => sum + item.minutes, 0);

    let arcs = '';
    let cumPct = 0;
    const legendItems = [];
    let hasData = totalMins > 0;

    if (hasData) {
      breakdown.forEach(item => {
        const pct = item.minutes / totalMins;
        const dash = pct * 163.36;
        const offset = -cumPct * 163.36;
        cumPct += pct;

        arcs += `
          <circle cx="30" cy="30" r="26" fill="none" stroke="${item.color}" stroke-width="8"
            stroke-dasharray="${dash.toFixed(2)} 163.36"
            stroke-dashoffset="${offset.toFixed(2)}"
            transform="rotate(-90 30 30)" />
        `;

        legendItems.push({
          title: item.title,
          color: item.color,
          minutes: item.minutes
        });
      });
    }

    weeklyDayDonutData.push({
      dayName: DAY_NAMES[d],
      dayDateFull,
      isToday: (dayObj ? !!dayObj.isToday : (d === todayDayIdx)),
      studyMinutes: totalMins, // the exact sum of categorized minutes
      arcs,
      legendItems,
      hasData
    });
  }

  const isTopBannersOpen = typeof localStorage !== 'undefined' && localStorage.getItem('planex_top_accordion_open') === 'true';
  const isRecentSessionsOpen = typeof localStorage !== 'undefined' && localStorage.getItem('planex_recent_sessions_open') === 'true';
  const isChartsOpen = typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_charts_accordion_open') !== 'false') : true;
  const isWeeklyBreakdownOpen = typeof localStorage !== 'undefined' ? (localStorage.getItem('planex_weekly_breakdown_accordion_open') === 'true') : false;

  const pomodoroActiveUsersCount = (typeof window !== 'undefined' && window.pomodoroService)
    ? window.pomodoroService.getDisplayActiveUsers()
    : Math.max(1, parseInt(window.appState?.pomodoroActiveUsers) || 1);

  const isTimerRunning = Boolean(window.appState?.isPomodoroRunning || window.appState?.isStopwatchRunning);
  const isBreakRunning = isTimerRunning && window.appState?.focusTimerType === 2;
  const isNonStudyRunning = isTimerRunning && window.appState?.focusActivityMode === 'non-study' && !isBreakRunning;

  let liveBadgeBg = 'rgba(16, 185, 129, 0.1)';
  let liveBadgeBorder = 'rgba(16, 185, 129, 0.25)';
  let liveBadgeColor = '#10b981';
  let liveBadgeDotColor = '#10b981';
  let liveBadgeText = `🟢 ${toPersianDigits(pomodoroActiveUsersCount)} نفر هم‌اکنون در حال مطالعه در پومودورو هستند`;

  if (isBreakRunning) {
    liveBadgeBg = 'rgba(56, 189, 248, 0.1)';
    liveBadgeBorder = 'rgba(56, 189, 248, 0.25)';
    liveBadgeColor = '#38bdf8';
    liveBadgeDotColor = '#38bdf8';
    liveBadgeText = `☕ شما در حال استراحت ☕ | 🟢 ${toPersianDigits(pomodoroActiveUsersCount)} نفر در حال مطالعه`;
  } else if (isNonStudyRunning) {
    liveBadgeBg = 'rgba(245, 158, 11, 0.1)';
    liveBadgeBorder = 'rgba(245, 158, 11, 0.25)';
    liveBadgeColor = '#f59e0b';
    liveBadgeDotColor = '#f59e0b';
    liveBadgeText = `🧘 شما در حال فعالیت غیردرسی 🧘 | 🟢 ${toPersianDigits(pomodoroActiveUsersCount)} نفر در حال مطالعه`;
  }

  return `
    <div class="dashboard-view animate-fade-in" style="direction: rtl;">
      
      <!-- ⚡ Collapsible Top Events & Leaderboard Accordion -->
      <div style="margin-bottom: 10px;">
        <button onclick="if(window.toggleTopBannersAccordion) window.toggleTopBannersAccordion();" 
                class="glass-panel" 
                style="width: 100%; padding: 7px 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--text-secondary); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.85rem;">⚡</span>
            <span>رویدادها، سحرخیزان و تالار رقابت</span>
            ${upcomingEvent ? `<span style="font-size: 0.68rem; background: #1f2029; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 6px;">${countdownMsg}</span>` : ''}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: #8e8e9c;">
            <span>${isTopBannersOpen ? 'بستن' : 'مشاهده'}</span>
            <span style="font-size: 0.68rem; transform: ${isTopBannersOpen ? 'rotate(180deg)' : 'rotate(0deg)'}; transition: transform 0.2s ease;">▼</span>
          </div>
        </button>

        ${isTopBannersOpen ? `
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px; animation: fadeIn 0.2s ease;">
            <!-- Top Countdown Banner -->
            ${upcomingEvent ? `
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                    ⏳
                  </div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7;">${countdownMsg}</strong>
                    <div style="font-size: 0.7rem; color: #8e8e9c; margin-top: 1px;">تاریخ برگزاری: ${upcomingEvent.jy}/${upcomingEvent.jm}/${upcomingEvent.jd}</div>
                  </div>
                </div>
                <div style="background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-weight: 600; font-size: 0.72rem; font-family: 'Outfit';">
                  روزشمار کنکوری 🎯
                </div>
              </div>
            ` : ''}

            <!-- ☀️ باشگاه سحرخیزان -->
            ${(() => {
              const ebOpen = leaderboardService.isEarlyBirdWindowOpen();
              const ebNow = leaderboardService.getIranNowHHMM();
              const ebToday = leaderboardService.getTodayWakeTime();
              const ebBusy = typeof window !== 'undefined' && !!window.isEarlyBirdSubmitting;
              const faTime = (t) => toPersianDigits(String(t || ''));

              let actionHtml = '';
              const cleanEbToday = ebToday ? String(ebToday).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).trim() : '';
              const [h, m] = cleanEbToday ? cleanEbToday.split(':').map(Number) : [NaN, NaN];
              const ebTodayMins = (!isNaN(h) && !isNaN(m)) ? (h * 60 + m) : null;
              const isEbTodayValid = ebTodayMins !== null && ebTodayMins >= (5 * 60) && ebTodayMins <= (7 * 60);

              if (ebToday && isEbTodayValid) {
                actionHtml = `
                  <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #10b981; padding: 5px 10px; border-radius: 8px; font-weight: 700; font-size: 0.74rem;">
                    <span>✅</span><span>ثبت شد (${faTime(ebToday)})</span>
                  </div>`;
              } else if (ebOpen) {
                actionHtml = `
                  <button onclick="if(typeof window.handleEarlyBirdCheckIn === 'function') window.handleEarlyBirdCheckIn();" ${ebBusy ? 'disabled' : ''}
                    style="padding: 5px 12px; font-size: 0.76rem; font-weight: 700; color: #ffffff; background: #7c3aed; border: none; border-radius: 8px; cursor: ${ebBusy ? 'wait' : 'pointer'}; opacity: ${ebBusy ? '0.65' : '1'};">
                    ${ebBusy ? '⏳ ثبت...' : 'من بیدارم! 🌅'}
                  </button>`;
              } else {
                actionHtml = `
                  <div style="display: flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #8e8e9c; padding: 5px 10px; border-radius: 8px; font-weight: 600; font-size: 0.72rem;">
                    <span>🔒</span><span>بدون حاضری صبح</span>
                  </div>`;
              }

              return `
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">☀️</div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7; display: block;">باشگاه سحرخیزان</strong>
                    <span style="font-size: 0.7rem; color: #8e8e9c;">
                      ساعت الان: <strong style="color: #e4e4e7; font-family: 'Outfit';">${faTime(ebNow)}</strong>
                      ${ebOpen ? ' • <span style="color:#10b981;">بازه باز است</span>' : ''}
                    </span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  ${actionHtml}
                  <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }"
                    style="display: flex; align-items: center; gap: 3px; color: #a1a1aa; font-weight: 600; font-size: 0.72rem; background: #1f2029; padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer;">
                    <span>🏅 لیست</span><span>◄</span>
                  </div>
                </div>
              </div>`;
            })()}

            <!-- Leaderboard Quick Access Banner -->
            <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); display: flex; justify-content: space-between; align-items: center; border-radius: 12px; flex-wrap: wrap; gap: 8px;">
              <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1; min-width: 180px;">
                <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                  🏆
                </div>
                <div>
                  <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7; display: block;">تالار رقابت و لیدربرد</strong>
                  <span style="font-size: 0.7rem; color: #8e8e9c;">مشاهده رتبه و ساعات مطالعه داوطلبان</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }" style="display: flex; align-items: center; gap: 3px; color: #a1a1aa; font-weight: 600; font-size: 0.72rem; background: #1f2029; padding: 4px 8px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer;">
                  <span>ورود</span>
                  <span>◄</span>
                </div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- ⏱️ 24-HOUR RADIAL STUDY RING & DAILY FLOW WIDGET -->
      ${renderDailyRingWidget()}

      <!-- 🎯 HERO FOCUS ACTION & ACTIVITY LAUNCHER CARD -->
      <div class="glass-panel" style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <span style="width: 6px; height: 6px; background: #7c3aed; border-radius: 50%; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 0.76rem; color: #e4e4e7;">مرکز ثبت فعالیت و تمرکز هوشمند</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.72rem; color: #8e8e9c; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 2px 8px; border-radius: 8px; font-family: 'Outfit';">
              امروز: ${formatStudyTime(loggedStudyMinutes)} | ${toPersianDigits(totalTestCount)} تست
            </span>
          </div>
        </div>

        <div style="margin-bottom: 10px;">
          <h2 style="margin: 0 0 3px 0; font-size: 0.98rem; color: #ffffff; font-weight: 700; line-height: 1.4;">
            شروع پارت تمرکز، تست‌زنی و ثبت سریع فعالیت 🎯
          </h2>
          <p style="margin: 0; font-size: 0.74rem; color: #8e8e9c; line-height: 1.5;">
            تایمر پومودورو را روشن کنید یا فعالیت‌ها و تست‌های گذشته خود را مستقیم در کارنامه ثبت کنید.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 8px; align-items: center;">
          <button onclick="window.appState.activeModal = 'focus'; window.renderApp();" id="btn-hero-focus-start" class="btn-primary" style="padding: 10px 14px; font-size: 0.86rem; font-weight: 700; background: #7c3aed; color: white; border: none; border-radius: 10px; box-shadow: none; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer;">
            <span style="font-size: 1rem;">⏱️</span>
            <span>شروع پارت تمرکز (تایمر)</span>
          </button>

          <button onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" id="btn-hero-manual-log" style="padding: 10px 14px; font-size: 0.86rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; box-shadow: none; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; transition: all 0.2s ease;">
            <span style="font-size: 1rem;">➕</span>
            <span>ثبت دستی فعالیت</span>
          </button>
        </div>
      </div>

      <!-- Day Selector Pills (for Daily Analytics) -->
      <div class="day-selector" style="${viewMode === 'weekly' ? 'opacity: 0.4; pointer-events: none;' : ''}; margin-top: 10px; margin-bottom: 10px; overflow-x: auto; display: flex; gap: 6px; padding-bottom: 2px;">
        ${DAY_NAMES.map((name, idx) => `
          <button class="day-pill ${idx === selectedDayIndex ? 'active' : ''}" data-day="${idx}" style="flex: 1; min-width: 65px; padding: 5px 8px; font-size: 0.74rem; font-weight: 600; text-align: center; border-radius: 8px;">
            ${name}
          </button>
        `).join('')}
      </div>

      <!-- 🌟 QUICK KPI STATS WIDGETS (ساعت امروز، میانگین هفتگی، تست و درصد هدف) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; margin-bottom: 12px;">
        <!-- Card 1: Today Study Time -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">ساعت مطالعه امروز</span>
            <span style="font-size: 0.95rem;">⏱️</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${formatStudyTime(loggedStudyMinutes)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${targetStudyHours} ساعت (${studyProgress}%)
          </div>
        </div>

        <!-- Card 2: Weekly Average Study -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">میانگین روزانه هفته</span>
            <span style="font-size: 0.95rem;">📊</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${formatStudyTime(weeklyPassedDailyAverageMinutes)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            مجموع: ${formatStudyTime(weeklyStudyMinutesTotal)}
          </div>
        </div>

        <!-- Card 3: Today Tests -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تست‌های امروز</span>
            <span style="font-size: 0.95rem;">🎯</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${toPersianDigits(totalTestCount)} تست
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${targetTestCount} (${testProgress}%)
          </div>
        </div>

        <!-- Card 4: Goal Progress -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تحقق هدف روزانه</span>
            <span style="font-size: 0.95rem;">🔥</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${studyProgress}%
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            ${remainingStudyMinutes <= 0 ? '🎉 تکمیل شد' : `${formatStudyTime(remainingStudyMinutes)} تا هدف`}
          </div>
        </div>
      </div>
      </div>

      <!-- 3. TOP TWO DONUT PROGRESS CARDS (Study Hours & Test Count) -->
      <div class="dashboard-grid" style="margin-bottom: 12px; gap: 10px;">
        <!-- Donut 1: Study Hours Progress -->
        <div class="glass-panel" style="padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">⏱️</div>
              <div>
                <div style="font-weight: 700; font-size: 0.86rem; color: #e4e4e7;">ساعت مطالعه امروز</div>
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${targetStudyHours} ساعت</div>
              </div>
            </div>
            <button class="btn-open-target-dialog btn-header-action" style="padding: 3px 8px; font-size: 0.7rem;">✏️ اهداف</button>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7 - (282.7 * studyProgress) / 100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 2px;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${studyProgress}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${formatStudyTime(loggedStudyMinutes)}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${formatStudyTime(loggedStudyMinutes)}</strong>
              </div>
              <div style="background: ${remainingStudyMinutes <= 0 ? 'rgba(16, 185, 129, 0.12)' : '#1f2029'}; color: ${remainingStudyMinutes <= 0 ? '#10b981' : '#8e8e9c'}; border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 600; text-align: center;">
                ${remainingStudyMinutes <= 0 ? '🎉 هدف روزانه تکمیل شد!' : `⏳ ${formatStudyTime(remainingStudyMinutes)} باقیمانده`}
              </div>
            </div>
          </div>
        </div>

        <!-- Donut 2: Test Count Progress -->
        <div class="glass-panel" style="padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">🎯</div>
              <div>
                <div style="font-weight: 700; font-size: 0.86rem; color: #e4e4e7;">تعداد تست‌های امروز</div>
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${targetTestCount} تست</div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7 - (282.7 * testProgress) / 100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${testProgress}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${totalTestCount} / ${targetTestCount}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${formatStudyTime(loggedStudyMinutes)}</strong>
              </div>
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">تست‌ها:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${totalTestCount}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 📜 4. RECENT FOCUS SESSIONS & TEST LOGS (Collapsible Accordion) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(255, 255, 255, 0.07); background: rgba(22, 23, 29, 0.75); border-radius: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div onclick="if(window.toggleRecentSessionsAccordion) window.toggleRecentSessionsAccordion();" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1; user-select: none;">
            <span style="font-size: 1rem;">📜</span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <h3 style="margin: 0; font-size: 0.88rem; font-weight: 700; color: #e4e4e7;">
                آخرین پارت‌های مطالعه و تست‌ها
              </h3>
              <span style="font-size: 0.65rem; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 1px 6px; border-radius: 6px; font-family: 'Outfit'; font-weight: 700;">
                ${recentSessions.length} پارت
              </span>
            </div>
            <span style="font-size: 0.75rem; color: #7c3aed; margin-right: 4px;">
              ${isRecentSessionsOpen ? '▲' : '▼'}
            </span>
          </div>

          <div style="display: flex; gap: 6px;">
            <button onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" class="btn-secondary" style="padding: 4px 8px; font-size: 0.7rem; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 3px;">
              <span>➕</span> ثبت دستی
            </button>
            <button onclick="window.appState.activeModal = 'focus'; window.renderApp();" class="btn-primary" style="padding: 4px 10px; font-size: 0.7rem; font-weight: 600; background: #7c3aed; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 3px; border: none; color: white;">
              <span>🎯</span> شروع
            </button>
          </div>
        </div>

        ${isRecentSessionsOpen ? `
          <div style="margin-top: 10px; animation: fadeIn 0.2s ease;">
            ${recentSessions.length === 0 ? `
              <div style="text-align: center; padding: 18px 12px; background: #1f2029; border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 10px;">
                <div style="font-size: 1.5rem; margin-bottom: 4px;">⏱️</div>
                <div style="color: #fff; font-size: 0.84rem; font-weight: 700; margin-bottom: 2px;">هنوز پارت مطالعه‌ای ثبت نشده است</div>
                <p style="color: #8e8e9c; font-size: 0.7rem; margin: 0 auto; line-height: 1.4;">
                  از دکمه شروع پارت یا ثبت دستی برای ثبت زمان و تست‌های خود استفاده کنید.
                </p>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${recentSessions.map(session => {
                  const isNonStudy = (session.type === 'non-study' || !session.isStudy);
                  return `
                  <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 8px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                      <span style="font-size: 0.95rem; flex-shrink: 0;">${session.icon || (isNonStudy ? '☕' : '📚')}</span>
                      <div style="overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 5px;">
                          <strong style="font-size: 0.8rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${session.subject || (isNonStudy ? 'فعالیت روزمره' : 'پارت مطالعه')}
                          </strong>
                          <span style="font-size: 0.62rem; padding: 0.5px 4px; border-radius: 4px; background: #16171d; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.06); white-space: nowrap;">
                            ${session.categoryTitle || session.category || (isNonStudy ? 'غیردرسی' : 'درسی')}
                          </span>
                        </div>
                        ${session.note ? `
                          <span style="font-size: 0.66rem; color: #a1a1aa; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
                            📝 ${session.note}
                          </span>
                        ` : ''}
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                      <span style="font-size: 0.72rem; font-weight: 700; color: #e4e4e7; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                        ⏱️ ${formatStudyTime(session.duration || session.minutes || 1)}
                      </span>
                      ${(!isNonStudy && (session.testCount > 0 || session.tests > 0)) ? `
                        <span style="font-size: 0.72rem; font-weight: 700; color: #a1a1aa; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                          🎯 ${session.testCount || session.tests} تست${session.testPercentage != null ? ` | 📊 ${session.testPercentage}%` : ''}
                        </span>
                      ` : ''}
                      <span style="font-size: 0.65rem; color: #71717a; font-family: 'Outfit';">${session.dateStr || session.date || ''}</span>
                      <button onclick="if(window.deleteFocusSession){ window.deleteFocusSession('${session.id}'); }" style="background: none; border: none; color: #ef4444; opacity: 0.6; cursor: pointer; padding: 2px 4px; font-size: 0.72rem;" title="حذف">
                        ✕
                      </button>
                    </div>
                  </div>
                `;}).join('')}
              </div>
            `}
          </div>
        ` : ''}
      </div>

      <!-- 📊 1 & 2. Collapsible Weekly Performance Charts (Study Time & Test Count) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(255, 255, 255, 0.07); background: #16171d; border-radius: 14px;">
        <div onclick="if(window.toggleChartsAccordion) window.toggleChartsAccordion();" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">📊</span>
            <div>
              <h3 style="margin: 0; font-size: 0.9rem; font-weight: 700; color: #e4e4e7;">نمودارهای عملکرد هفتگی</h3>
              <span style="font-size: 0.7rem; color: #8e8e9c;">مقایسه زمان مطالعه (${formatStudyTime(weeklyStudyMinutesTotal)}) و تست‌ها (${weeklyTestsTotal} تست)</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #7c3aed; font-weight: 700;">
            <span>${isChartsOpen ? 'بستن 🔼' : 'مشاهده نمودارها 🔽'}</span>
          </div>
        </div>

        ${isChartsOpen ? `
          <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">
            <!-- Weekly Study Minutes Bar Chart -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 0.95rem;">⏱️</span>
                  <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">میزان مطالعه روزانه هفته</span>
                </div>
                <span style="font-size: 0.68rem; font-weight: 600; color: #a1a1aa; background: #1f2029; padding: 2px 6px; border-radius: 6px;">
                  مجموع: ${formatStudyTime(weeklyStudyMinutesTotal)}
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${DAY_NAMES.map((dName, dIdx) => {
                  const dayMinutes = weeklyStudyMinutesArray[dIdx] || 0;
                  const isToday = (dIdx === todayDayIdx);
                  const maxScale = Math.max(480, Math.ceil(Math.max(...weeklyStudyMinutesArray, 60)));
                  const heightPct = dayMinutes > 0 ? Math.min(100, Math.max(6, Math.round((dayMinutes / maxScale) * 100))) : 0;
                  return `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${isToday ? '#7c3aed' : '#8e8e9c'}; margin-bottom: 2px;">
                        ${dayMinutes > 0 ? formatStudyTime(dayMinutes) : '۰'}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${heightPct}%; background: ${isToday ? '#7c3aed' : '#1f2029'}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${isToday ? '#e4e4e7' : '#8e8e9c'}; margin-top: 4px;">
                        ${dName.substring(0, 3)}
                      </span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Weekly Test Count Bar Chart -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 0.95rem;">📈</span>
                  <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">تعداد تست‌های روزانه هفته</span>
                </div>
                <span style="font-size: 0.68rem; font-weight: 600; color: #a1a1aa; background: #1f2029; padding: 2px 6px; border-radius: 6px;">
                  مجموع: ${weeklyTestsTotal} تست
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${DAY_NAMES.map((dName, dIdx) => {
                  const dayTotalTests = weeklyTestsArray[dIdx] || 0;
                  const isToday = (dIdx === todayDayIdx);
                  const maxScale = Math.max(100, Math.ceil(Math.max(...weeklyTestsArray)));
                  const heightPct = dayTotalTests > 0 ? Math.min(100, Math.max(6, Math.round((dayTotalTests / maxScale) * 100))) : 0;
                  return `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${isToday ? '#7c3aed' : '#8e8e9c'}; margin-bottom: 2px;">
                        ${dayTotalTests}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${heightPct}%; background: ${isToday ? '#7c3aed' : '#1f2029'}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${isToday ? '#e4e4e7' : '#8e8e9c'}; margin-top: 4px;">
                        ${dName.substring(0, 3)}
                      </span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 🍩 3. Collapsible Weekly Days Category Breakdown Section (Default CLOSED) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 14px; border: 1px solid rgba(255, 255, 255, 0.07); background: #16171d; border-radius: 14px;">
        <div onclick="if(window.toggleWeeklyBreakdownAccordion) window.toggleWeeklyBreakdownAccordion();" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">📅</span>
            <div>
              <h3 style="margin: 0; font-size: 0.9rem; font-weight: 700; color: #e4e4e7;">تحلیل و تفکیک دروس روزهای هفته</h3>
              <span style="font-size: 0.7rem; color: #8e8e9c;">نمودار دایره‌ای و تفکیک ساعات دروس برای شنبه تا جمعه</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #7c3aed; font-weight: 700;">
            <span>${isWeeklyBreakdownOpen ? 'بستن 🔼' : 'مشاهده و تحلیل 🔽'}</span>
          </div>
        </div>

        ${isWeeklyBreakdownOpen ? `
          <div style="margin-top: 12px; animation: fadeIn 0.2s ease;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
              ${weeklyDayDonutData.map(donut => `
                <div style="background: #1f2029; border: 1px solid ${donut.isToday ? 'rgba(124, 58, 237, 0.4)' : 'rgba(255, 255, 255, 0.06)'}; border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; align-items: center; transition: transform 0.2s ease;">
                  
                  <!-- Card Header: Day Name & Date + Active Badge -->
                  <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.04); padding-bottom: 6px;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: ${donut.isToday ? '#e4e4e7' : '#a1a1aa'};">
                      ${donut.dayDateFull}
                    </span>
                    ${donut.isToday ? '<span style="font-size: 0.65rem; background: #7c3aed; color: #ffffff; padding: 1px 6px; border-radius: 6px; font-weight: 700;">امروز</span>' : ''}
                  </div>
                  
                  <!-- Donut Chart & Center Stats -->
                  <div style="position: relative; width: 68px; height: 68px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                    <svg width="68" height="68" viewBox="0 0 60 60" style="position: absolute; overflow: visible;">
                      <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="7" />
                      ${donut.hasData ? donut.arcs : ''}
                    </svg>
                    <div style="z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2px;">
                      <span style="font-size: 0.72rem; font-weight: 800; font-family: 'Outfit'; color: ${donut.hasData ? '#e4e4e7' : 'var(--text-muted)'}; line-height: 1.2;">${donut.studyMinutes > 0 ? formatStudyTime(donut.studyMinutes) : '۰ دقیقه'}</span>
                    </div>
                  </div>

                  <!-- Activity Legend (راهنمای فعالیت‌ها) -->
                  <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.04); padding-top: 6px; margin-top: 2px; display: flex; flex-direction: column; gap: 4px;">
                    ${donut.legendItems.length > 0 ? donut.legendItems.map(item => `
                      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.7rem; gap: 4px;">
                        <div style="display: flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          <span style="width: 6px; height: 6px; border-radius: 50%; background: ${item.color}; flex-shrink: 0;"></span>
                          <span style="color: #e4e4e7; font-weight: 600; overflow: hidden; text-overflow: ellipsis;">${item.title}</span>
                        </div>
                        <span style="color: #8e8e9c; font-weight: 600; flex-shrink: 0; font-family: 'Outfit';">${formatStudyTime(item.minutes)}</span>
                      </div>
                    `).join('') : `
                      <div style="text-align: center; font-size: 0.68rem; color: #71717a; padding: 2px 0;">
                        بدون فعالیت
                      </div>
                    `}
                  </div>

                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

    </div>
  `;
  } catch (err) {
    console.error('Fatal error in renderDashboardView:', err);
    return `
      <div class="main-container" style="direction: rtl; padding: 40px 20px; text-align: center; color: white;">
        <div class="glass-panel" style="max-width: 500px; margin: 0 auto; padding: 30px; border-radius: 20px; border: 1.5px solid #ef4444; background: rgba(30, 41, 59, 0.95);">
          <div style="font-size: 3rem; margin-bottom: 12px;">⚠️</div>
          <h2 style="margin: 0 0 10px 0; color: #f87171; font-weight: 900;">خطا در بارگذاری داشبورد</h2>
          <p style="font-size: 0.86rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">
            یک خطای موقت در بازیابی داده‌ها رخ داده است. لطفاً صفحه را بارگذاری مجدد فرمایید.
          </p>
          <button onclick="window.location.reload()" class="btn-primary" style="padding: 10px 24px; border-radius: 12px; font-weight: bold; cursor: pointer;">
            🔄 بارگذاری مجدد صفحه
          </button>
        </div>
      </div>
    `;
  }
}

export function updateDashboardCharts() {
  if (typeof window !== 'undefined' && typeof window.renderApp === 'function') {
    window.renderApp();
  }
}

if (typeof window !== 'undefined') {
  window.updateCharts = updateDashboardCharts;
  window.updateDashboard = updateDashboardCharts;
  window.renderDashboard = renderDashboardView;
}
