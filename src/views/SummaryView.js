import { db } from '../db.js';
import { DAY_NAMES } from './DashboardView.js';
import { ACTIVITY_PALETTE_24, DEFAULT_SUBJECT_COLORS, isStudyCategory, formatStudyTime } from '../constants.js';

export function renderSummaryView() {
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;
  const hourlyLogs = db.getHourlyLogs(weekId);
  const categories = db.getCategories();
  const categoryMap = {};
  categories.forEach((c, idx) => {
    categoryMap[c.code] = {
      ...c,
      color: c.color || ACTIVITY_PALETTE_24[idx % ACTIVITY_PALETTE_24.length]
    };
  });

  const userProfile = db.getUserProfile() || {};
  const gratitudeNotes = db.getGratitudeNotes() || [];
  const interruptions = db.getInterruptions(weekId) || [];
  const recordedToday = db.getRecordedTimerToday();

  const customSubjects = db.getCustomSubjects();
  const defaultSubjects = ["زیست‌شناسی", "ریاضیات", "فیزیک", "شیمی", "ادبیات", "زبان انگلیسی", "دین و زندگی", "زمین‌شناسی"];
  const allSubjects = Array.from(new Set([...defaultSubjects, ...customSubjects]));

  // Subject Colors Palette from 24-color high-contrast system
  const subjectColors = { ...DEFAULT_SUBJECT_COLORS };
  allSubjects.forEach((s, idx) => {
    if (!subjectColors[s]) {
      subjectColors[s] = ACTIVITY_PALETTE_24[(idx + 8) % ACTIVITY_PALETTE_24.length];
    }
  });

  // Calculate totals and per-subject breakdown (in pure minutes)
  const subjectStats = {};
  allSubjects.forEach(s => {
    subjectStats[s] = { studyMinutes: 0, testCount: 0 };
  });

  let totalLoggedSlots = 0;
  let totalStudySlots = 0;
  let totalWastedSlots = 0;
  let totalWeeklyTests = 0;

  // Weekly Matrix Array by Category (in pure minutes)
  const weeklyCategoryMatrix = {};
  categories.forEach(c => {
    weeklyCategoryMatrix[c.code] = { title: c.title, color: c.color, days: [0,0,0,0,0,0,0], total: 0 };
  });

  for (let d = 0; d < 7; d++) {
    for (let s = 0; s < 48; s++) {
      const slotKey = `${d}_${s}`;
      const log = hourlyLogs[slotKey];
      if (log && log.categoryCode) {
        const cat = categoryMap[log.categoryCode];

        if (weeklyCategoryMatrix[log.categoryCode]) {
          weeklyCategoryMatrix[log.categoryCode].days[d] += 30;
          weeklyCategoryMatrix[log.categoryCode].total += 30;
        }

        totalLoggedSlots++;

        const isStudy = isStudyCategory(cat);
        if (isStudy) {
          totalStudySlots++;

          const testsInSlot = parseInt(log.testCount) || 0;
          totalWeeklyTests += testsInSlot;

          if (log.subject && subjectStats[log.subject]) {
            subjectStats[log.subject].studyMinutes += 30;
            subjectStats[log.subject].testCount += testsInSlot;
          } else if (log.note || log.description) {
            allSubjects.forEach(subj => {
              if ((log.note && log.note.includes(subj)) || (log.description && log.description.includes(subj))) {
                subjectStats[subj].studyMinutes += 30;
                subjectStats[subj].testCount += testsInSlot;
              }
            });
          }
        } else if (cat && (cat.code === 'تـ' || cat.group === 'تلف شده')) {
          totalWastedSlots++;
        }
      }
    }
  }

  const totalWeeklyStudyMinutes = (totalStudySlots * 30) + (Number(recordedToday.minutes) || 0);
  const totalWeeklyWastedMinutes = (totalWastedSlots * 30);

  // Daily Study Minutes Array (Sat-Fri)
  const dailyStudyMinutesArray = DAY_NAMES.map((_, dayIdx) => {
    let daySlots = 0;
    for (let s = 0; s < 48; s++) {
      const slotKey = `${dayIdx}_${s}`;
      const log = hourlyLogs[slotKey];
      if (log && log.categoryCode) {
        const cat = categoryMap[log.categoryCode];
        if (isStudyCategory(cat)) {
          daySlots++;
        }
      }
    }
    return (daySlots * 30);
  });

  const maxDailyMinutes = Math.max(...dailyStudyMinutesArray, 480);

  // Academic Highlight Summary
  const academicCategories = categories.filter(c => isStudyCategory(c));
  const totalAcademicWeeklyMinutes = academicCategories.reduce((acc, c) => acc + (weeklyCategoryMatrix[c.code]?.total || 0), 0);
  const nonFridayDays = [0, 1, 2, 3, 4, 5]; // Sat to Thu
  const nonFridayAcademicMinutes = nonFridayDays.reduce((acc, d) => {
    return acc + academicCategories.reduce((catAcc, c) => catAcc + (weeklyCategoryMatrix[c.code]?.days[d] || 0), 0);
  }, 0);
  const avgAcademicNonFridayMinutes = Math.round(nonFridayAcademicMinutes / 6);

  // Latest Gratitude Note
  const latestGratitudeText = gratitudeNotes.length > 0 ? gratitudeNotes[0].text : 'امروز بابت سلامتی و فرصت یادگیری شکرگزارم.';

  // Subject Stats Active Entries
  const activeSubjectEntries = Object.entries(subjectStats).filter(([_, data]) => data.studyMinutes > 0 || data.testCount > 0);
  const totalActiveSubjectMinutes = activeSubjectEntries.reduce((acc, [_, d]) => acc + d.studyMinutes, 0) || 1;
  const maxSubjectMinutes = Math.max(...activeSubjectEntries.map(([_, d]) => d.studyMinutes), 1);

  // Donut SVG Slices Calculation
  let currentAngle = 0;
  const donutSlicesSvg = activeSubjectEntries.map(([subjName, data]) => {
    const color = subjectColors[subjName] || '#38bdf8';
    const pct = (data.studyMinutes / totalActiveSubjectMinutes);
    const angle = pct * 360;
    
    // Draw SVG arc path
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    const x1 = 50 + 40 * Math.cos((Math.PI * (startAngle - 90)) / 180);
    const y1 = 50 + 40 * Math.sin((Math.PI * (startAngle - 90)) / 180);
    const x2 = 50 + 40 * Math.cos((Math.PI * (endAngle - 90)) / 180);
    const y2 = 50 + 40 * Math.sin((Math.PI * (endAngle - 90)) / 180);

    const largeArc = angle > 180 ? 1 : 0;
    const pathData = `M ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2}`;

    return `<path d="${pathData}" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round" />`;
  }).join('');

  // 1. Bar Chart HTML for Subject Hours
  const subjectBarChartHtml = activeSubjectEntries.map(([subjName, data]) => {
    const color = subjectColors[subjName] || '#38bdf8';
    const pct = Math.round((data.studyMinutes / maxSubjectMinutes) * 100);

    return `
      <div style="margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 4px; font-weight: bold;">
          <span style="color: ${color};">📘 ${subjName}</span>
          <span style="font-family: 'Outfit'; color: white;">${formatStudyTime(data.studyMinutes)} (${data.testCount} تست)</span>
        </div>
        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.08); border-radius: 6px; overflow: hidden;">
          <div style="width: ${Math.max(pct, 5)}%; height: 100%; background: ${color}; border-radius: 6px; transition: width 0.4s ease;"></div>
        </div>
      </div>
    `;
  }).join('') || `<p style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;">هنوز درسی در پارت‌ها انتخاب نشده است.</p>`;

  // 2. Subject Breakdown Table HTML
  const subjectTableHtml = activeSubjectEntries.map(([subjName, data]) => {
    const color = subjectColors[subjName] || '#38bdf8';
    const speedHours = data.studyMinutes / 60;
    const speed = speedHours > 0 ? (data.testCount / speedHours).toFixed(1) : 0;
    const pct = ((data.studyMinutes / totalActiveSubjectMinutes) * 100).toFixed(0);

    return `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">
        <td style="padding: 10px 8px; font-weight: bold; color: ${color};">📘 ${subjName}</td>
        <td style="padding: 10px 8px; text-align: center; font-weight: bold; font-family: 'Outfit'; color: white;">${formatStudyTime(data.studyMinutes)}</td>
        <td style="padding: 10px 8px; text-align: center; font-weight: bold; color: #ec4899; font-family: 'Outfit';">${data.testCount}</td>
        <td style="padding: 10px 8px; text-align: center; color: #a855f7; font-family: 'Outfit'; font-weight: bold;">${speed} تست/ساعت</td>
        <td style="padding: 10px 8px; text-align: center; font-weight: bold; color: #38bdf8; font-family: 'Outfit';">${pct}%</td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="5" style="text-align: center; padding: 16px; color: var(--text-secondary);">داده‌ای برای نمایش وجود ندارد.</td></tr>`;

  // Weekly Matrix Table HTML
  const weeklyMatrixHtml = Object.values(weeklyCategoryMatrix)
    .filter(row => row.total > 0)
    .map(row => {
      const nonFriAvgMins = Math.round(row.days.slice(0, 6).reduce((a, b) => a + b, 0) / 6);
      return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">
          <td style="padding: 10px 8px; font-weight: bold; color: ${row.color}; display: flex; align-items: center; gap: 6px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: ${row.color};"></span>
            <span>${row.title}</span>
          </td>
          ${row.days.map(d => `
            <td style="padding: 10px 8px; text-align: center; color: ${d > 0 ? '#fff' : 'rgba(255,255,255,0.3)'}; font-family: 'Outfit'; font-weight: ${d > 0 ? 'bold' : 'normal'}; font-size: 0.78rem;">
              ${d > 0 ? formatStudyTime(d) : '-'}
            </td>
          `).join('')}
          <td style="padding: 10px 8px; text-align: center; font-weight: bold; color: #38bdf8; font-family: 'Outfit'; font-size: 0.78rem;">${formatStudyTime(nonFriAvgMins)}</td>
          <td style="padding: 10px 8px; text-align: center; font-weight: 900; color: #10b981; font-family: 'Outfit'; font-size: 0.78rem;">${formatStudyTime(row.total)}</td>
        </tr>
      `;
    }).join('');

  return `
    <div class="main-container" style="padding-bottom: 100px;">
      
      <!-- Top Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #f8fafc;">خلاصه عملکرد و آمار پیشرفته کنکور</h2>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">تحلیل ۳گانه دروس، ردیاب حواس‌پرتی، کارنامه هفته و استوری روزانه</p>
        </div>
        <button id="btn-export-story" class="btn-primary" style="width: auto; padding: 10px 20px; font-size: 0.9rem; background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); font-weight: bold;">
          📸 دانلود کارت استوری روزانه
        </button>
      </div>

      <!-- 1. 📸 Aesthetic Daily Story Export Card -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px; background: linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,27,75,0.9) 50%, rgba(49,16,63,0.9) 100%); border-color: rgba(236,72,153,0.4); text-align: center; border-radius: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 14px;">
          <span style="font-size: 0.8rem; color: #cbd5e1; font-family: 'Outfit';">📅 ${currentWeek?.month || 'ماه'} | ${currentWeek?.weekNumber || 'هفته اول'}</span>
          <span style="font-weight: 900; font-size: 1.1rem; color: #f472b6;">PlanEx | کارنامه استوری امروز</span>
          <span style="font-size: 0.8rem; color: #38bdf8;">👤 ${userProfile.name || 'داوطلب کنکور'}</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 14px;">
          <div style="background: rgba(255,255,255,0.06); padding: 12px; border-radius: 16px;">
            <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">⏱️ مدت مطالعه امروز</span>
            <strong style="font-size: 1.35rem; color: #38bdf8; font-family: 'Outfit';">${formatStudyTime(totalWeeklyStudyMinutes)}</strong>
          </div>
          <div style="background: rgba(255,255,255,0.06); padding: 12px; border-radius: 16px;">
            <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">🎯 کل تست‌های امروز</span>
            <strong style="font-size: 1.5rem; color: #ec4899; font-family: 'Outfit';">${totalWeeklyTests} تست</strong>
          </div>
          <div style="background: rgba(255,255,255,0.06); padding: 12px; border-radius: 16px;">
            <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">⚡ باتری انرژی</span>
            <strong style="font-size: 1.5rem; color: #10b981; font-family: 'Outfit';">75%</strong>
          </div>
        </div>

        <div style="background: rgba(236,72,153,0.12); padding: 10px 14px; border-radius: 14px; font-size: 0.85rem; color: #fbcfe8; font-style: italic;">
          «${latestGratitudeText}»
        </div>
      </div>

      <!-- 2. 📚 Subject Three Charts Card (1:1 Android SubjectThreeChartsCard) -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px; border-color: rgba(56, 189, 248, 0.4);">
        <div class="card-title" style="color: #38bdf8; margin-bottom: 16px;">
          📚 تحلیل ۳گانه دروس (نمودار ستونی، دایره‌ای و جدول جامع تست و سرعت)
        </div>

        <!-- Grid with Bar Chart & Donut Chart -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 20px;">
          
          <!-- 📊 Chart 1: Visual Bar Chart per Subject -->
          <div style="background: rgba(255,255,255,0.03); padding: 14px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.06);">
            <div style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; margin-bottom: 12px;">📊 ۱. نمودار ستونی میزان مطالعه دروس:</div>
            ${subjectBarChartHtml}
          </div>

          <!-- 🍩 Chart 2: Visual Donut Chart of Subject Ratios -->
          <div style="background: rgba(255,255,255,0.03); padding: 14px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="font-size: 0.85rem; font-weight: bold; color: #ec4899; margin-bottom: 12px; width: 100%; text-align: right;">🍩 ۲. نمودار دایره‌ای سهم دروس:</div>
            
            <div style="position: relative; width: 140px; height: 140px; margin-bottom: 10px;">
              <svg viewBox="0 0 100 100" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" />
                ${donutSlicesSvg}
              </svg>
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 90%;">
                <span style="font-size: 0.65rem; color: var(--text-secondary); display: block;">مجموع مطالعه</span>
                <strong style="font-size: 0.85rem; font-family: 'Outfit'; color: white;">${formatStudyTime(totalActiveSubjectMinutes)}</strong>
              </div>
            </div>

            <!-- Subject Color Legends -->
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; font-size: 0.75rem;">
              ${activeSubjectEntries.map(([subjName]) => {
                const color = subjectColors[subjName] || '#38bdf8';
                return `<span style="display: flex; align-items: center; gap: 4px; color: white;"><span style="width: 8px; height: 8px; border-radius: 50%; background: ${color};"></span>${subjName}</span>`;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- 📋 Chart 3: Comprehensive Breakdown Table -->
        <div class="horizontal-scroll-isolated" style="overflow-x: auto;">
          <div style="font-size: 0.85rem; font-weight: bold; color: #10b981; margin-bottom: 8px;">📋 ۳. جدول تفکیک سرعت تست‌زنی و سهم درصد دروس:</div>
          <table style="width: 100%; border-collapse: collapse; min-width: 580px;">
            <thead>
              <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: var(--text-secondary); font-size: 0.8rem;">
                <th style="padding: 8px; text-align: right;">نام درس</th>
                <th style="padding: 8px; text-align: center;">مدت مطالعه</th>
                <th style="padding: 8px; text-align: center;">تعداد تست</th>
                <th style="padding: 8px; text-align: center;">سرعت تست‌زنی</th>
                <th style="padding: 8px; text-align: center;">سهم از کل</th>
              </tr>
            </thead>
            <tbody>
              ${subjectTableHtml}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. 7-Day Performance & Study Bar Chart Card -->
      <div class="dashboard-grid" style="margin-bottom: 20px;">
        <div class="glass-panel" style="padding: 20px;">
          <div class="card-title" style="color: #818cf8;">
            📊 نمودار مقایسه‌ای روزهای هفته (هدف روزانه: ۸ ساعت)
          </div>

          <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 160px; gap: 8px; margin-top: 20px; padding-bottom: 24px; border-bottom: 1px solid var(--glass-border);">
            ${dailyStudyMinutesArray.map((mins, idx) => {
              const heightPct = Math.round((mins / maxDailyMinutes) * 100);
              return `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; height: 100%; justify-content: flex-end;">
                  <span style="font-size: 0.7rem; font-weight: 700; color: #818cf8; font-family: 'Outfit'; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">${mins > 0 ? formatStudyTime(mins) : ''}</span>
                  <div style="width: 100%; max-width: 30px; height: ${Math.max(heightPct, 6)}%; background: linear-gradient(180deg, #818cf8 0%, #4f46e5 100%); border-radius: 8px 8px 0 0; transition: height 0.4s ease;"></div>
                  <span style="font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap;">${DAY_NAMES[idx].substring(0, 4)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 4. Academic Highlight Card -->
        <div class="glass-panel" style="padding: 20px; background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.3);">
          <div class="card-title" style="color: #818cf8;">
            🔬 مجموع فعالیت‌های علمی هفته
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin: 16px 0;">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-secondary);">کل مطالعه کنکوری هفته:</span>
              <div style="font-size: 1.8rem; font-weight: 900; color: #818cf8; font-family: 'Outfit';">${formatStudyTime(totalAcademicWeeklyMinutes)}</div>
            </div>
            <div style="background: rgba(99, 102, 241, 0.2); padding: 8px 14px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.4);">
              <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">میانگین علمی (غیر جمعه):</span>
              <strong style="font-size: 1.05rem; color: #c084fc; font-family: 'Outfit';">${formatStudyTime(avgAcademicNonFridayMinutes)} / روز</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Full Weekly Aggregated Time Matrix Table -->
      <div class="glass-panel horizontal-scroll-isolated" style="padding: 20px; margin-bottom: 20px; overflow-x: auto;">
        <div class="card-title" style="color: #10b981; margin-bottom: 14px;">
          📋 دفتر برنامه‌ریزی جامع هفته (جدول جمع‌بندی به ساعت)
        </div>

        <table style="width: 100%; border-collapse: collapse; min-width: 650px;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); color: var(--text-secondary); font-size: 0.8rem;">
              <th style="padding: 10px 8px; text-align: right;">دسته‌بندی فعالیت</th>
              ${DAY_NAMES.map(d => `<th style="padding: 10px 8px; text-align: center;">${d}</th>`).join('')}
              <th style="padding: 10px 8px; text-align: center;">میانگین روزانه</th>
              <th style="padding: 10px 8px; text-align: center;">مجموع هفته</th>
            </tr>
          </thead>
          <tbody>
            ${weeklyMatrixHtml || `<tr><td colspan="10" style="text-align: center; padding: 16px; color: var(--text-secondary);">داده‌ای برای نمایش وجود ندارد.</td></tr>`}
          </tbody>
        </table>
      </div>

      <!-- 6. Interruption Tracker Card -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px; border-color: rgba(239, 68, 68, 0.3);">
        <div class="card-title" style="color: #ef4444; margin-bottom: 12px;">
          🚨 ردیاب عوامل حواس‌پرتی و اتلاف وقت
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
          <input type="text" id="input-interrupt-title" class="form-input" placeholder="دلیل وقفه..." style="flex: 1; min-width: 140px;" />
          <input type="number" id="input-interrupt-duration" class="form-input" placeholder="دقیقه" style="width: 80px; text-align: center; font-family: 'Outfit';" min="1" />
          <select id="select-interrupt-cat" class="form-input" style="width: 110px;">
            <option value="گوشی">گوشی 📱</option>
            <option value="خانواده">خانواده 👨‍👩‍👧</option>
            <option value="افکار">افکار 🧠</option>
            <option value="سایر">سایر 📌</option>
          </select>
          <button id="btn-add-interrupt" class="btn-primary" style="width: auto; padding: 0 16px; background: #ef4444;">ثبت وقفه</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px; max-height: 140px; overflow-y: auto;">
          ${interruptions.length === 0 ? '<p style="font-size: 0.85rem; color: var(--text-secondary);">خوشبختانه هیچ عامل حواس‌پرتی در این هفته ثبت نشده است!</p>' : ''}
          ${interruptions.map(int => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(239, 68, 68, 0.1); padding: 8px 12px; border-radius: 10px; font-size: 0.82rem; border: 1px solid rgba(239, 68, 68, 0.2);">
              <div><span style="font-weight: bold; color: white;">${int.title}</span> <span style="color: var(--text-muted);">(${int.category})</span></div>
              <div style="color: #ef4444; font-weight: bold; font-family: 'Outfit';">${int.durationMins} دقیقه</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
