import { db } from '../db.js';
import { DAY_NAMES } from './DashboardView.js';
import { EISENHOWER_QUADRANTS, DEFAULT_PRIORITY, getQuadrant } from '../constants.js';

// ── ماتریس آیزنهاور: استیت نمای تسک‌ها (لیستی / شبکه‌ای) و فیلتر ربع ──
window.plannerTaskViewMode = window.plannerTaskViewMode || 'list'; // 'list' | 'matrix'
window.plannerPriorityFilter = window.plannerPriorityFilter || 'ALL'; // 'ALL' | 'Q1'..'Q4'
window.plannerNewTaskPriority = window.plannerNewTaskPriority || DEFAULT_PRIORITY;

window.setPlannerTaskViewMode = (mode) => {
  window.plannerTaskViewMode = (mode === 'matrix') ? 'matrix' : 'list';
  if (window.renderApp) window.renderApp();
};

window.setPlannerPriorityFilter = (q) => {
  window.plannerPriorityFilter = q || 'ALL';
  if (window.renderApp) window.renderApp();
};

window.setPlannerNewTaskPriority = (q) => {
  window.plannerNewTaskPriority = q || DEFAULT_PRIORITY;
  if (window.renderApp) window.renderApp();
};

/** افزودن تسک مستقیماً داخل یک خانه ماتریس */
window.addPlannerTaskToQuadrant = (quadrantId) => {
  const input = document.getElementById(`input-quadrant-task-${quadrantId}`);
  if (!input || !input.value.trim()) return;
  const currentWeek = db.getCurrentWeek();
  const dayIndex = (window.appState && typeof window.appState.selectedDayIndex === 'number')
    ? window.appState.selectedDayIndex
    : (new Date().getDay() + 1) % 7;
  db.addDailyPlan(currentWeek.id, dayIndex, input.value.trim(), quadrantId);
  input.value = '';
  if (window.renderApp) window.renderApp();
};

/** تیک انجام/عدم انجام کار داخل خانه ماتریس */
window.togglePlannerTask = (planId, event = null) => {
  const currentWeek = db.getCurrentWeek();
  const dailyPlans = db.getDailyPlans(currentWeek.id);
  const plan = dailyPlans.find(p => p.id == planId || String(p.id) === String(planId));
  const willBeDone = plan ? !plan.isDone : true;

  db.toggleDailyPlan(currentWeek.id, planId);

  if (willBeDone && window.triggerCompletionBurst) {
    window.triggerCompletionBurst(event);
  }
  if (window.renderApp) window.renderApp();
};

window.deletePlannerTask = (planId) => {
  const currentWeek = db.getCurrentWeek();
  db.deleteDailyPlan(currentWeek.id, planId);
  if (window.renderApp) window.renderApp();
};

/** جابه‌جایی تسک بین چهار خانه ماتریس */
window.movePlannerTaskPriority = (planId, quadrantId) => {
  const currentWeek = db.getCurrentWeek();
  db.setDailyPlanPriority(currentWeek.id, planId, quadrantId);
  if (window.renderApp) window.renderApp();
};

const escapeTaskText = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** سلکتور کوچک برای جابه‌جایی ربع یک تسک */
function renderPriorityMoveSelect(plan) {
  return `
    <select onchange="window.movePlannerTaskPriority('${plan.id}', this.value)"
      title="انتقال این کار به خانه دیگر ماتریس"
      style="background: rgba(15,23,42,0.85); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.3); border-radius: 9px; font-size: 0.68rem; padding: 3px 5px; cursor: pointer; font-family: inherit;">
      ${EISENHOWER_QUADRANTS.map(q => `
        <option value="${q.id}" ${plan.priority === q.id ? 'selected' : ''}>${q.emoji} ${q.id}</option>
      `).join('')}
    </select>`;
}

export function renderPlannerView(selectedDayIndex = 0, options = {}) {
  const { plannerAccordions = { countdowns: false, targets: false, weeklyGoals: false, dailyMatrix: false } } = options;
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;
  const weeklyGoals = db.getWeeklyGoals(weekId);
  const dailyPlans = db.getDailyPlans(weekId);
  const targets = db.getStudyTargets();
  const countdowns = db.getCountdownEvents() || [];

  // 📅 Professional Jalali Shamsi Calendar Helper Calculation - Auto synced to today with exact weekday offsets
  const [todayY, todayM, todayD] = db.getTodayJalali();
  const todayDayIdx = (new Date().getDay() + 1) % 7;
  const todayDayName = DAY_NAMES[todayDayIdx];
  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const currentJalaliMonthIdx = window.jalaliViewMonth !== undefined ? window.jalaliViewMonth : (todayM - 1);
  const currentJalaliYear = window.jalaliViewYear !== undefined ? window.jalaliViewYear : todayY;
  const monthsJalali = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  const todayMonthName = monthsJalali[todayM - 1];
  const daysInJalaliMonth = currentJalaliMonthIdx < 6 ? 31 : (currentJalaliMonthIdx < 11 ? 30 : 29);

  // Exact weekday offset for Day 1 of selected Jalali month (0=شنبه, 1=یکشنبه, ..., 6=جمعه)
  const firstDayJdn = db.jalaliToJdn(currentJalaliYear, currentJalaliMonthIdx + 1, 1);
  const firstDayOffset = (firstDayJdn + 2) % 7;

  // ── ماتریس آیزنهاور: تسک‌های روز انتخاب‌شده، نمای فعال و فیلتر ربع ──
  const taskViewMode = window.plannerTaskViewMode === 'matrix' ? 'matrix' : 'list';
  const priorityFilter = window.plannerPriorityFilter || 'ALL';
  const newTaskPriority = window.plannerNewTaskPriority || DEFAULT_PRIORITY;
  const dayTasks = dailyPlans.filter(p => p.dayIndex === selectedDayIndex);
  const visibleTasks = priorityFilter === 'ALL'
    ? dayTasks
    : dayTasks.filter(p => p.priority === priorityFilter);

  const totalTasksCount = dayTasks.length;
  const completedTasksCount = dayTasks.filter(t => t.isDone).length;
  const commitmentRatio = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  return `
    <div class="main-container">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 800;">برنامه‌ریزی و محاسبات علمی</h2>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">تنظیم اهداف هفته، برنامه‌های روزانه و محاسبه درصد آزمون‌ها</p>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 📅 Professional Jalali Shamsi Calendar Card -->
        <div class="glass-panel" style="padding: 20px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
            <div>
              <div class="card-title" style="color: #e4e4e7; margin: 0;">
                📅 تقویم حرفه‌ای شمسی (جلالی)
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; margin-top: 4px;">
                📌 امروز: ${todayDayName} ${toPersianDigits(todayD)} ${todayMonthName} ${toPersianDigits(todayY)}
              </div>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center;">
              <button id="btn-jalali-prev-month" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">◀ ماه قبل</button>
              <span style="font-weight: 900; font-size: 0.95rem; color: #e4e4e7;">${monthsJalali[currentJalaliMonthIdx]} ${toPersianDigits(currentJalaliYear)}</span>
              <button id="btn-jalali-next-month" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">ماه بعد ▶</button>
            </div>
          </div>

          <!-- Days of Week Header -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; gap: 4px; font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 10px; background: #1f2029; padding: 8px 0; border-radius: 10px;">
            <span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span>
          </div>

          <!-- 31 Days Grid with Exact Weekday Alignment -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center;">
            ${Array.from({ length: firstDayOffset }).map(() => `
              <div style="padding: 10px 4px; opacity: 0.15; font-size: 0.8rem;">•</div>
            `).join('')}
            ${Array.from({ length: daysInJalaliMonth }).map((_, i) => {
              const dayNum = i + 1;
              const isToday = (dayNum === todayD && currentJalaliMonthIdx === (todayM - 1) && currentJalaliYear === todayY);
              const dayCellIdx = (firstDayOffset + i) % 7;
              const dayCellName = DAY_NAMES[dayCellIdx];

              const monthStr = String(currentJalaliMonthIdx + 1).padStart(2, '0');
              const dayStr = String(dayNum).padStart(2, '0');
              const dateStr = `${currentJalaliYear}/${monthStr}/${dayStr}`;

              const studyMins = db.getStudyMinutesByDate(dateStr) || 0;
              const hours = studyMins / 60;
              const hoursFormatted = hours > 0 ? (hours % 1 === 0 ? hours.toFixed(0) : hours.toFixed(1)) : '0';

              let bgStyle = 'background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: #71717a;';
              let badgeContent = '<div style="width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, 0.15); margin: 3px auto 0;"></div>';

              if (hours >= 1 && hours < 3) {
                // Tier 1: 1 - 3h (Low Tint)
                bgStyle = 'background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7;';
                badgeContent = `<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 800;">${toPersianDigits(hoursFormatted)}h</div>`;
              } else if (hours >= 3 && hours < 6) {
                // Tier 2: 3 - 6h (Medium Emerald)
                bgStyle = 'background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7); color: #a7f3d0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);';
                badgeContent = `<div style="font-size: 0.68rem; margin-top: 2px; color: #a7f3d0; font-weight: 900;">${toPersianDigits(hoursFormatted)}h</div>`;
              } else if (hours >= 6) {
                // Tier 3: 6h+ (Vibrant Emerald)
                bgStyle = 'background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399; color: #ffffff; box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);';
                badgeContent = `<div style="font-size: 0.68rem; margin-top: 2px; color: #ffffff; font-weight: 900; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${toPersianDigits(hoursFormatted)}h</div>`;
              } else if (hours > 0 && hours < 1) {
                // Sub-1 hour tint
                bgStyle = 'background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #6ee7b7;';
                badgeContent = `<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 700;">${toPersianDigits(hoursFormatted)}h</div>`;
              }

              let todayOutline = isToday ? 'outline: 2.5px solid #38bdf8; outline-offset: 1px;' : '';

              return `
                <div class="jalali-day-cell ${isToday ? 'active-today' : ''}"
                  onclick="if(window.openJalaliDayDetailsModal) window.openJalaliDayDetailsModal('${dateStr}');"
                  style="padding: 8px 4px; border-radius: 12px; font-size: 0.85rem; font-family: 'Outfit'; font-weight: bold; cursor: pointer; transition: all 0.15s ease; ${bgStyle} ${todayOutline}"
                  onmouseenter="this.style.transform='scale(1.06)'"
                  onmouseleave="this.style.transform='scale(1)'"
                  title="روز ${toPersianDigits(dayNum)} ${monthsJalali[currentJalaliMonthIdx]} (${dayCellName}) - ${hours > 0 ? toPersianDigits(hoursFormatted) + ' ساعت مطالعه' : 'بدون مطالعه'}">
                  <div>${toPersianDigits(dayNum)} ${isToday ? '📍' : ''}</div>
                  ${badgeContent}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Jalali Heatmap Legend -->
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 10px; font-size: 0.74rem; color: #a1a1aa; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 10px;">
            <span style="font-weight: bold; color: #cbd5e1;">هیت‌مپ مطالعه:</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);"></span>
              <span>۰h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35);"></span>
              <span>۱-۳h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7);"></span>
              <span>۳-۶h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399;"></span>
              <span>۶h+</span>
            </div>
          </div>
        </div>

        <!-- ⏳ ACCORDION: Jalali Day Counter & Exam Countdown -->
        <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
          <button type="button" class="btn-planner-accordion-toggle" data-key="countdowns" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
              <span style="font-size: 1.1rem;">⏳</span>
              <span>روزشمار رویدادها و آزمون‌ها ${countdowns.length > 0 ? `<strong style="color: #f59e0b; font-size: 0.8rem; margin-right: 4px;">(${countdowns.length} رویداد فعال)</strong>` : ''}</span>
            </div>
            <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${plannerAccordions.countdowns ? '180deg' : '0deg'});">▼</span>
          </button>

          ${plannerAccordions.countdowns ? `
            <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
              <!-- Add Event Form -->
              <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
                <input type="text" id="input-event-title" class="form-input" placeholder="عنوان آزمون (مثلاً: کنکور سراسری ۱۴۰۵)" style="flex: 2; min-width: 180px;" />
                <input type="number" id="input-event-day" class="form-input" placeholder="روز" style="flex: 1; min-width: 60px; text-align: center; font-family: 'Outfit';" min="1" max="31" />
                <input type="number" id="input-event-month" class="form-input" placeholder="ماه" style="flex: 1; min-width: 60px; text-align: center; font-family: 'Outfit';" min="1" max="12" />
                <input type="number" id="input-event-year" class="form-input" placeholder="سال" style="flex: 1; min-width: 70px; text-align: center; font-family: 'Outfit';" value="1405" />
                <button id="btn-add-countdown-event" class="btn-primary" style="width: auto; padding: 0 16px; background: #7c3aed;">+ افزودن رویداد</button>
              </div>

              <!-- List of Countdowns -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${countdowns.length === 0 ? '<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ رویدادی در روزشمار ثبت نشده است.</p>' : ''}
                ${countdowns.map(ev => `
                  <div style="display: flex; justify-content: space-between; align-items: center; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                    <div>
                      <strong style="font-size: 0.92rem; color: #e4e4e7;">🎯 ${ev.title}</strong>
                      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">تاریخ: ${ev.jy}/${ev.jm}/${ev.jd}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; font-family: 'Outfit';">
                        ⏳ روزشمار فعال
                      </span>
                      <button class="btn-delete-countdown-item" data-id="${ev.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 🎯 ACCORDION: Target Settings Card -->
        <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
          <button type="button" class="btn-planner-accordion-toggle" data-key="targets" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
              <span style="font-size: 1.1rem;">🎯</span>
              <span>تنظیم اهداف مطالعه و تست روزانه/هفتگی</span>
            </div>
            <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${plannerAccordions.targets ? '180deg' : '0deg'});">▼</span>
          </button>

          ${plannerAccordions.targets ? `
            <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 12px;">
                <div class="input-group">
                  <label class="input-label">هدف ساعت روزانه</label>
                  <input type="number" id="target-daily-hours" class="form-input" value="${targets.dailyStudyGoalHours || 8}" step="0.5" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست روزانه</label>
                  <input type="number" id="target-daily-tests" class="form-input" value="${targets.dailyTestGoalCount || 150}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف ساعت هفتگی</label>
                  <input type="number" id="target-weekly-hours" class="form-input" value="${targets.weeklyStudyGoalHours || 56}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست هفتگی</label>
                  <input type="number" id="target-weekly-tests" class="form-input" value="${targets.weeklyTestGoalCount || 1000}" />
                </div>
              </div>

              <button id="btn-save-targets" class="btn-primary" style="margin-top: 6px; background: #7c3aed;">ذخیره اهداف جدید</button>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- ☑️ ACCORDION: Weekly Goals Section -->
      <div class="glass-panel" style="padding: 0; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="weeklyGoals" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">☑️</span>
            <span>اهداف کلیدی هفته ${weeklyGoals.length > 0 ? `<strong style="color: #c4b5fd; font-size: 0.8rem; margin-right: 4px;">(${weeklyGoals.length} هدف)</strong>` : ''}</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${plannerAccordions.weeklyGoals ? '180deg' : '0deg'});">▼</span>
        </button>

        ${plannerAccordions.weeklyGoals ? `
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
              <div class="card-title" style="margin: 0; color: #e4e4e7;">
                <span>لیست اهداف هفتگی</span>
              </div>

              <div style="display: flex; gap: 8px;">
                <button id="btn-apply-preset-routine" class="btn-header-action" style="font-size: 0.78rem; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08);">
                  ⚡ افزودن روتین و اهداف پیشنهادی
                </button>
              </div>
            </div>

            <!-- Add Weekly Goal Input -->
            <div style="display: flex; gap: 8px; margin-bottom: 14px;">
              <input type="text" id="input-weekly-goal" class="form-input" placeholder="عنوان هدف هفتگی (مثلاً: تمام کردن فصل ۳ زیست دهم)..." />
              <button id="btn-add-weekly-goal" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap; background: #7c3aed;">افزودن</button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${weeklyGoals.length === 0 ? '<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>' : ''}
              ${weeklyGoals.map(g => `
                <div style="display: flex; align-items: center; justify-content: space-between; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
                  <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;">
                    <input type="checkbox" class="chk-toggle-weekly-goal" data-id="${g.id}" ${g.isDone ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #7c3aed;" />
                    <span style="font-size: 0.92rem; ${g.isDone ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${g.text}</span>
                  </label>
                  <button class="btn-delete-weekly-goal" data-id="${g.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">✕</button>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
      
      <!-- ⚡ ACCORDION: Daily Plans + Eisenhower Matrix -->
      <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="dailyMatrix" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">⚡</span>
            <span>برنامه‌ریزی روزانه و ماتریس اولویت (آیزنهاور) ${dayTasks.length > 0 ? `<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${dayTasks.length} کار برای امروز)</strong>` : ''}</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${plannerAccordions.dailyMatrix ? '180deg' : '0deg'});">▼</span>
        </button>

        ${plannerAccordions.dailyMatrix ? `
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
              <div class="card-title" style="margin: 0; color: #e4e4e7;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span>ماتریس آیزنهاور (${DAY_NAMES[selectedDayIndex]})</span>
              </div>

              <!-- سوییچ نمای لیستی / شبکه‌ای -->
              <div style="display: flex; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 4px; gap: 4px;">
                <button onclick="window.setPlannerTaskViewMode('list')"
                  style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${taskViewMode === 'list' ? '#7c3aed' : 'transparent'}; color: ${taskViewMode === 'list' ? 'white' : '#94a3b8'};">
                  ☰ نمای لیستی
                </button>
                <button onclick="window.setPlannerTaskViewMode('matrix')"
                  style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${taskViewMode === 'matrix' ? '#7c3aed' : 'transparent'}; color: ${taskViewMode === 'matrix' ? 'white' : '#94a3b8'};">
                  ⊞ ماتریس ۲×۲
                </button>
              </div>
            </div>

            <!-- 📊 COMMITMENT SCORE & PERFECT DAY CELEBRATION BADGE BANNER -->
            ${totalTasksCount > 0 ? `
              <div style="margin-bottom: 14px; padding: 14px 16px; border-radius: 16px; border: 1.5px solid ${commitmentRatio === 100 ? '#eab308' : (commitmentRatio >= 70 ? '#10b981' : 'rgba(56, 189, 248, 0.35)')}; background: ${commitmentRatio === 100 ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(168, 85, 247, 0.15) 100%)' : 'rgba(31, 32, 41, 0.8)'}; box-shadow: ${commitmentRatio === 100 ? '0 0 20px rgba(234, 179, 8, 0.25)' : 'none'}; direction: rtl; transition: all 0.3s ease;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 34px; height: 34px; border-radius: 12px; background: ${commitmentRatio === 100 ? 'rgba(234, 179, 8, 0.25)' : 'rgba(56, 189, 248, 0.15)'}; border: 1px solid ${commitmentRatio === 100 ? '#eab308' : '#38bdf8'}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                      ${commitmentRatio === 100 ? '🌟' : '📊'}
                    </div>
                    <div>
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">نرخ پایبندی برنامه امروز</strong>
                        ${commitmentRatio === 100 ? `
                          <span style="background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; font-weight: 900; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; box-shadow: 0 0 10px rgba(234, 179, 8, 0.4);">
                            روز کامل و بی‌نقص 🌟
                          </span>
                        ` : ''}
                      </div>
                      <span style="font-size: 0.74rem; color: #a1a1aa; font-weight: 600;">
                        ${toPersianDigits(completedTasksCount)} از ${toPersianDigits(totalTasksCount)} کار برنامه‌ریزی‌شده انجام شده است
                      </span>
                    </div>
                  </div>

                  <div style="background: #16171d; border: 1px solid ${commitmentRatio === 100 ? '#eab308' : (commitmentRatio >= 70 ? '#10b981' : '#38bdf8')}; color: ${commitmentRatio === 100 ? '#fde047' : (commitmentRatio >= 70 ? '#34d399' : '#38bdf8')}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">
                    نرخ پایبندی: ${toPersianDigits(commitmentRatio)}٪
                  </div>
                </div>

                <!-- Progress bar -->
                <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; margin-top: 10px;">
                  <div style="height: 100%; width: ${commitmentRatio}%; background: ${commitmentRatio === 100 ? 'linear-gradient(90deg, #eab308 0%, #a855f7 100%)' : (commitmentRatio >= 70 ? 'linear-gradient(90deg, #10b981 0%, #38bdf8 100%)' : 'linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)')}; border-radius: 6px; transition: width 0.5s ease;"></div>
                </div>
              </div>
            ` : ''}

            <!-- Day Selector Pills -->
            <div class="day-selector" style="margin-bottom: 14px;">
              ${DAY_NAMES.map((name, idx) => `
                <button class="day-pill planner-day-pill ${idx === selectedDayIndex ? 'active' : ''}" data-day="${idx}">
                  ${name}
                </button>
              `).join('')}
            </div>

            <!-- Add Daily Plan Input + Priority Picker -->
            <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
              <input type="text" id="input-daily-plan" class="form-input" placeholder="عنوان کار روز ${DAY_NAMES[selectedDayIndex]}..." style="flex: 2; min-width: 190px;" />
              <select id="select-daily-plan-priority" class="form-input" onchange="window.setPlannerNewTaskPriority(this.value)"
                title="اولویت این کار در ماتریس آیزنهاور" style="flex: 1; min-width: 190px; cursor: pointer;">
                ${EISENHOWER_QUADRANTS.map(q => `
                  <option value="${q.id}" ${newTaskPriority === q.id ? 'selected' : ''}>${q.emoji} ${q.id}: ${q.title}</option>
                `).join('')}
              </select>
              <button id="btn-add-daily-plan" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap;">افزودن به ${DAY_NAMES[selectedDayIndex]}</button>
            </div>

            <!-- فیلتر ربع‌ها -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
              <button onclick="window.setPlannerPriorityFilter('ALL')"
                style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${priorityFilter === 'ALL' ? '#38bdf8' : 'rgba(148,163,184,0.25)'}; background: ${priorityFilter === 'ALL' ? 'rgba(56,189,248,0.2)' : 'rgba(15,23,42,0.5)'}; color: ${priorityFilter === 'ALL' ? '#7dd3fc' : '#94a3b8'};">
                همه (${toPersianDigits(dayTasks.length)})
              </button>
              ${EISENHOWER_QUADRANTS.map(q => {
                const cnt = dayTasks.filter(t => t.priority === q.id).length;
                const on = priorityFilter === q.id;
                return `
                <button onclick="window.setPlannerPriorityFilter('${q.id}')"
                  style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${on ? q.color : 'rgba(148,163,184,0.25)'}; background: ${on ? q.softBg : 'rgba(15,23,42,0.5)'}; color: ${on ? q.color : '#94a3b8'};"
                  title="${q.subtitle}">
                  ${q.emoji} ${q.title} (${toPersianDigits(cnt)})
                </button>`;
              }).join('')}
            </div>

            ${taskViewMode === 'matrix' ? `
            <!-- ⊞ نمای ماتریس ۲×۲ آیزنهاور -->
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;" dir="rtl">
              ${EISENHOWER_QUADRANTS.map(q => {
                const qTasks = dayTasks.filter(t => t.priority === q.id);
                const doneCount = qTasks.filter(t => t.isDone).length;
                return `
                <div style="background: ${q.softBg}; border: 1.5px solid ${q.borderColor}; border-radius: 18px; padding: 14px; display: flex; flex-direction: column; min-height: 190px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                    <div>
                      <strong style="font-size: 0.88rem; color: ${q.color}; display: block;">${q.emoji} ${q.id}: ${q.title}</strong>
                      <span style="font-size: 0.68rem; color: var(--text-secondary);">${q.subtitle}</span>
                    </div>
                    <span style="background: ${q.softBg}; border: 1px solid ${q.borderColor}; color: ${q.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;">
                      ${toPersianDigits(doneCount)}/${toPersianDigits(qTasks.length)}
                    </span>
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; margin-bottom: 10px;">
                    ${qTasks.length === 0
                      ? `<p style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>`
                      : qTasks.map(t => `
                        <div style="display: flex; align-items: center; gap: 7px; background: rgba(15,23,42,0.45); padding: 7px 9px; border-radius: 11px; border: 1px solid rgba(148,163,184,0.14);">
                          <input type="checkbox" onclick="window.togglePlannerTask('${t.id}', event)" ${t.isDone ? 'checked' : ''}
                            style="width: 16px; height: 16px; accent-color: ${q.color}; cursor: pointer; flex-shrink: 0;" />
                          <span style="font-size: 0.79rem; flex: 1; word-break: break-word; ${t.isDone ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${escapeTaskText(t.text)}</span>
                          ${renderPriorityMoveSelect(t)}
                          <button onclick="window.deletePlannerTask('${t.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="حذف">✕</button>
                        </div>
                      `).join('')}
                  </div>

                  <div style="display: flex; gap: 6px;">
                    <input type="text" id="input-quadrant-task-${q.id}" class="form-input"
                      placeholder="کار جدید در «${q.title}»..."
                      onkeydown="if(event.key === 'Enter') window.addPlannerTaskToQuadrant('${q.id}')"
                      style="flex: 1; min-width: 0; font-size: 0.76rem; padding: 7px 10px;" />
                    <button onclick="window.addPlannerTaskToQuadrant('${q.id}')"
                      style="padding: 7px 12px; font-size: 0.76rem; font-weight: 900; color: white; background: ${q.color}; border: none; border-radius: 11px; cursor: pointer; white-space: nowrap;"
                      title="افزودن کار به همین خانه">＋</button>
                  </div>
                </div>`;
              }).join('')}
            </div>
            ` : `
            <!-- ☰ نمای لیستی با برچسب اولویت -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${visibleTasks.length === 0
                ? `<p style="font-size: 0.85rem; color: var(--text-secondary);">${priorityFilter === 'ALL' ? 'برای این روز کاری ثبت نشده است.' : 'در این خانه از ماتریس کاری برای این روز ثبت نشده است.'}</p>`
                : visibleTasks.map(p => {
                  const q = getQuadrant(p.priority);
                  return `
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: ${q.softBg}; padding: 10px 14px; border-radius: 12px; border: 1px solid ${q.borderColor};">
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;">
                      <input type="checkbox" class="chk-toggle-daily-plan" onclick="window.togglePlannerTask('${p.id}', event)" data-id="${p.id}" ${p.isDone ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: ${q.color}; flex-shrink: 0;" />
                      <span style="font-size: 0.92rem; word-break: break-word; ${p.isDone ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${escapeTaskText(p.text)}</span>
                    </label>
                    <span style="background: rgba(15,23,42,0.5); border: 1px solid ${q.borderColor}; color: ${q.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;" title="${q.subtitle}">
                      ${q.emoji} ${q.title}
                    </span>
                    ${renderPriorityMoveSelect(p)}
                    <button class="btn-delete-daily-plan" data-id="${p.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; flex-shrink: 0;">✕</button>
                  </div>`;
                }).join('')}
            </div>
            `}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}
