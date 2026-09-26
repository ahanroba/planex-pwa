import { db } from '../db.js';
import { audioEngine, STUDY_SOUNDS } from '../audio.js';
import { isStudyCategory, formatStudyTime } from '../constants.js';
import { renderAmbientAudioPlayer } from '../components/AmbientAudioPlayer.js';


export function renderFocusView(options = {}) {
  const {
    stopwatchTime = 0,
    isStopwatchRunning = false,
    pomodoroTime = 1500, // 25 min default
    isPomodoroRunning = false,
    timerType = 1, // 0 = Stopwatch, 1 = Pomodoro, 2 = Break
    presetMins = 25,
    sessionTests = 0,
    pomodoroActiveUsers = 0,
    activityMode = 'study', // 'study' | 'non-study'
    selectedCategoryCode = null,
    selectedNonStudyCode = 'non_sports',
    selectedSubject = '',
    selectedStudyMethod = 'یادگیری',
    sessionNote = '',
    isModalMode = false,
    focusAccordions = { activity: false, timing: false, testNote: false, audio: false }
  } = options;

  const currentStudyPhase = selectedStudyMethod || window.appState?.selectedStudyMethod || window.fabActivityState?.selectedPhase || 'یادگیری';

  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const isBreak = (timerType === 2);
  const isNonStudy = (activityMode === 'non-study' && !isBreak);
  const isStudy = !isBreak && !isNonStudy;

  let themeColor = '#10b981'; // Default study emerald
  let startBtnBg = '#10b981';
  let saveBtnBg = 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)';
  let saveBtnText = '💾 ثبت پارت مطالعه';
  let liveStatusText = '⚡ در حال تمرکز';
  let idleStatusText = '▶ لمس جهت شروع';

  if (isBreak) {
    themeColor = '#38bdf8'; // Soft Blue / Turquoise
    startBtnBg = '#0284c7';
    saveBtnBg = 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)';
    saveBtnText = '☕ ثبت استراحت (بدون احتساب در ساعت مطالعه)';
    liveStatusText = '☕ در حال استراحت پومودورو';
    idleStatusText = '▶ لمس جهت شروع استراحت';
  } else if (isNonStudy) {
    themeColor = '#f59e0b'; // Warm Amber
    startBtnBg = '#d97706';
    saveBtnBg = 'linear-gradient(135deg, #d97706 0%, #b45309 100%)';
    saveBtnText = '🧘 ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)';
    liveStatusText = '🧘 در حال فعالیت غیردرسی';
    idleStatusText = '▶ لمس جهت شروع فعالیت';
  }

  const accentColor = isStudy ? '#38bdf8' : (isBreak ? '#38bdf8' : '#f59e0b');
  const recordedMins = typeof db !== 'undefined' && typeof db.getStudyMinutesByDate === 'function' 
    ? db.getStudyMinutesByDate() 
    : 0;
  const recordedTests = typeof db !== 'undefined' && typeof db.getDailyTestCount === 'function' 
    ? db.getDailyTestCount() 
    : 0;

  const categories = typeof db !== 'undefined' ? db.getCategories() : [];
  const nonStudyCategories = typeof db !== 'undefined' && typeof db.getNonStudyCategories === 'function'
    ? db.getNonStudyCategories()
    : [
        { code: 'non_sports', title: 'ورزش و تندرستی', icon: '🏃', color: '#f59e0b' },
        { code: 'non_sleep', title: 'خواب و استراحت', icon: '😴', color: '#8b5cf6' },
        { code: 'non_meal', title: 'میان‌وعده و تغذیه', icon: '☕', color: '#10b981' },
        { code: 'non_walk', title: 'پیاده‌روی و هوای آزاد', icon: '🚶', color: '#06b6d4' },
        { code: 'non_zen', title: 'مدیتیشن و ذهن‌آگاهی', icon: '🧘', color: '#ec4899' },
        { code: 'non_personal', title: 'کارهای شخصی و تفریح', icon: '📱', color: '#f43f5e' },
        { code: 'non_house', title: 'امور منزل و خرید', icon: '🧹', color: '#64748b' }
      ];
  
  const activeStudyCatCode = selectedCategoryCode || (categories.find(c => isStudyCategory(c))?.code || categories[0]?.code || 'ع-س');
  const activeStudyCatObj = categories.find(c => c.code === activeStudyCatCode) || categories[0] || { title: 'داخلی', color: '#0ea5e9', icon: '📚' };
  
  const activeNonStudyObj = nonStudyCategories.find(c => c.code === selectedNonStudyCode) || nonStudyCategories[0];
  const currentActiveObj = isBreak ? { title: 'استراحت پومودورو', color: '#38bdf8', icon: '☕' } : (isStudy ? activeStudyCatObj : activeNonStudyObj);

  const displaySeconds = timerType === 0 ? stopwatchTime : pomodoroTime;
  const isRunning = timerType === 0 ? isStopwatchRunning : isPomodoroRunning;

  const safeSeconds = Math.max(0, displaySeconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  const pad = (n) => n.toString().padStart(2, '0');
  const formattedTimeEn = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;

  return `
    <div class="focus-view-container ${isModalMode ? 'focus-modal-layout' : 'main-container'}" style="direction: rtl; padding-bottom: 70px; color: #fff;">
      
      <!-- Top Title Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            ${isBreak ? '☕' : (isStudy ? '🎯' : '🧘')}
          </div>
          <div>
            <h1 style="margin: 0; font-size: 0.98rem; font-weight: 700; color: #e4e4e7;">
              حالت تمرکز و ثبت فعالیت
            </h1>
            <p style="margin: 1px 0 0 0; font-size: 0.7rem; color: var(--text-secondary);">
              مدیریت زمان، ثبت هوشمند و همگام‌سازی خودکار ابری
            </p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 6px;">
          <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
            <span>➕</span>
            <span>ثبت دستی</span>
          </button>
          ${isModalMode ? `
            <button id="btn-close-focus-modal" class="btn-icon btn-close-modal" data-close-modal="true" onclick="event.preventDefault(); event.stopPropagation(); window.closeActiveModal ? window.closeActiveModal() : window.closeFocusModal();" style="background: #1f2029; border-radius: 50%; width: 28px; height: 28px; border: 1px solid rgba(255, 255, 255, 0.08); color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">✕</button>
          ` : `
            <span style="font-size: 0.72rem; font-weight: 600; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-family: 'Outfit';">
              مطالعه امروز: ${formatStudyTime(recordedMins)} | ${toPersianDigits(recordedTests)} تست
            </span>
          `}
        </div>
      </div>

      <!-- Live Study Status Bar when running -->
      ${isRunning ? `
        <div style="background: #16171d; border: 1px solid ${themeColor}; border-radius: 12px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="neon-pulse-dot animate-pulse" style="background: ${themeColor};"></span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${themeColor};">
              وضعیت زنده:
              <strong style="color: #ffffff;">«${isBreak ? 'استراحت و ریکاوری پومودورو' : (isStudy ? (selectedSubject ? `${activeStudyCatObj.title} (${selectedSubject})` : activeStudyCatObj.title) : (selectedSubject ? `${activeNonStudyObj.title} (${selectedSubject})` : activeNonStudyObj.title))}»</strong>
            </span>
          </div>
          <span style="font-size: 0.65rem; background: rgba(255,255,255,0.08); color: ${themeColor}; padding: 2px 6px; border-radius: 6px; font-weight: 600; white-space: nowrap;">
            ${isBreak ? '☕ استراحت' : (isNonStudy ? '🧘 غیردرسی' : '🟢 در حال مطالعه')}
          </span>
        </div>
      ` : ''}

      <!-- 📚 1. ACCORDION: ACTIVITY TYPE & SUBJECT SELECTION -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-activity" data-accordion-key="activity" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('activity', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 88%;">
            <span style="font-size: 0.95rem;">${isBreak ? '☕' : (isStudy ? '📚' : '🧘')}</span>
            <span>انتخاب درس و فعالیت: <strong style="color: ${themeColor}; font-weight: 800;">«${currentActiveObj.title}${selectedSubject ? ` - ${selectedSubject}` : ''}»</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${focusAccordions.activity ? '180deg' : '0deg'});">▼</span>
        </button>
        
        <div id="accordion-drawer-activity" class="accordion-drawer" style="display: ${focusAccordions.activity ? 'block' : 'none'}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.76rem; font-weight: 700; color: #e4e4e7;">
              نوع فعالیت:
            </span>
            <span style="font-size: 0.7rem; color: #8e8e9c;">
              ${isBreak ? '☕ استراحت' : (isStudy ? '📚 درسی' : '🧘 غیردرسی')}
            </span>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 10px;">
            <button type="button" class="btn-activity-mode-switch ${isStudy ? 'active' : ''}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${isStudy ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${isStudy ? '#7c3aed' : '#1f2029'}; color: ${isStudy ? '#ffffff' : '#a1a1aa'}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">📚</span>
              <span>فعالیت درسی</span>
            </button>
            
            <button type="button" class="btn-activity-mode-switch ${!isStudy ? 'active' : ''}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('non-study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${!isStudy ? '#f59e0b' : 'rgba(255,255,255,0.08)'}; background: ${!isStudy ? '#d97706' : '#1f2029'}; color: ${!isStudy ? '#ffffff' : '#a1a1aa'}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">☕</span>
              <span>فعالیت غیردرسی</span>
            </button>
          </div>

          <div id="focus-activity-study-container" style="display: ${isStudy ? 'block' : 'none'};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                نام درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن درس
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;" id="focus-study-category-chips">
              ${categories.map(c => `
                <button type="button" class="btn-focus-cat-chip ${c.code === activeStudyCatCode ? 'active' : ''}" data-code="${c.code}" data-title="${c.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${c.title}', '${c.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${c.code === activeStudyCatCode ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${c.code === activeStudyCatCode ? '#7c3aed' : '#1f2029'}; color: ${c.code === activeStudyCatCode ? '#ffffff' : '#e4e4e7'}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${c.icon || '📚'}</span>
                  <span>${c.title}</span>
                  <span class="btn-delete-study-cat" data-code="${c.code}" data-title="${c.title}" title="حذف «${c.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join('')}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                مبحث یا موضوع درس:
              </label>
              <input type="text" id="input-focus-subject" data-alias="fab-timer-subject-input" value="${selectedSubject || ''}" placeholder="مثلاً: گوارش، قلب، تست جامع..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-top: 10px;">
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
                فاز / روش مطالعه:
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;" id="focus-phase-chips-container">
                ${[
                  { id: 'یادگیری', label: 'یادگیری', icon: '🧠' },
                  { id: 'تست‌زنی', label: 'تست‌زنی', icon: '🎯' },
                  { id: 'مرور', label: 'مرور', icon: '🔄' },
                  { id: 'جمع‌بندی', label: 'جمع‌بندی', icon: '📑' }
                ].map(p => {
                  const isSelected = (currentStudyPhase === p.id);
                  return `
                    <button type="button" class="btn-phase-chip btn-manual-study-pill btn-fab-study-pill ${isSelected ? 'active' : ''}" data-phase="${p.id}" data-pill="${p.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${p.id}')" style="padding: 6px 2px; border-radius: 8px; border: 1px solid ${isSelected ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${isSelected ? '#7c3aed' : '#1f2029'}; color: ${isSelected ? '#ffffff' : '#a1a1aa'}; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 0.95rem;">${p.icon}</span>
                      <span>${p.label}</span>
                    </button>
                  `;
                }).join('')}
              </div>
              <input type="hidden" id="focus-phase-input" value="${currentStudyPhase}" />
            </div>
          </div>

          <div id="focus-activity-nonstudy-container" style="display: ${!isStudy ? 'block' : 'none'};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-add-custom-nonstudy-quick" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;">
              ${nonStudyCategories.map(c => `
                <button type="button" class="btn-nonstudy-cat-chip ${c.code === selectedNonStudyCode ? 'active' : ''}" data-code="${c.code}" data-title="${c.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${c.title}', '${c.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${c.code === selectedNonStudyCode ? '#d97706' : 'rgba(255,255,255,0.08)'}; background: ${c.code === selectedNonStudyCode ? '#d97706' : '#1f2029'}; color: ${c.code === selectedNonStudyCode ? '#ffffff' : '#e4e4e7'}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${c.icon || '☕'}</span>
                  <span>${c.title}</span>
                  <span class="btn-delete-nonstudy-cat" data-code="${c.code}" data-title="${c.title}" title="حذف «${c.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join('')}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                عنوان فعالیت:
              </label>
              <input type="text" id="input-focus-nonstudy-subject" data-alias="fab-timer-subject-input" value="${selectedSubject || ''}" placeholder="مثلاً: ورزش صبحگاهی، استراحت، خرید..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>
          </div>
        </div>
      </div>

      <!-- ⏱️ 2. ACCORDION: POMODORO DURATION & BREAK TIMING -->
      <div class="glass-panel" style="margin-bottom: 12px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-timing" data-accordion-key="timing" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('timing', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">⏱️</span>
            <span>زمان‌بندی: <strong style="color: ${themeColor}; font-weight: 800;">${timerType === 0 ? 'کرونومتر' : (timerType === 2 ? '۵ دقیقه استراحت' : `${presetMins} دقیقه پومودورو`)}</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${focusAccordions.timing ? '180deg' : '0deg'});">▼</span>
        </button>

        <div id="accordion-drawer-timing" class="accordion-drawer" style="display: ${focusAccordions.timing ? 'block' : 'none'}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <!-- Timer Type Tabs -->
          <div style="display: flex; gap: 4px; background: #1f2029; padding: 3px; border-radius: 10px; margin-bottom: 10px;">
            <button type="button" class="btn-focus-tab ${timerType === 1 ? 'active btn-primary' : 'glass-panel'}" data-type="1" onclick="window.setFocusTimerType && window.setFocusTimerType(1)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              🍅 پومودورو (${presetMins}دقیقه)
            </button>
            <button type="button" class="btn-focus-tab ${timerType === 0 ? 'active btn-primary' : 'glass-panel'}" data-type="0" onclick="window.setFocusTimerType && window.setFocusTimerType(0)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              ⏱️ کرونومتر
            </button>
            <button type="button" class="btn-focus-tab ${timerType === 2 ? 'active' : 'glass-panel'}" data-type="2" onclick="window.setFocusTimerType && window.setFocusTimerType(2)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer; background: ${timerType === 2 ? '#0284c7' : 'transparent'}; color: ${timerType === 2 ? '#fff' : '#a1a1aa'};">
              ☕ استراحت (۵ دقیقه)
            </button>
          </div>

          <!-- Presets in Pomodoro mode -->
          <div id="focus-pomodoro-presets-container" style="display: ${timerType === 1 ? 'flex' : 'none'}; justify-content: center; gap: 4px; flex-wrap: wrap;">
            ${[15, 25, 30, 45, 50, 60].map(m => `
              <button type="button" class="btn-focus-preset ${presetMins === m ? 'active' : ''}" data-mins="${m}" onclick="window.setFocusPresetMins && window.setFocusPresetMins(${m})" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 600; border-radius: 12px; border: 1px solid ${presetMins === m ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${presetMins === m ? '#7c3aed' : '#1f2029'}; color: ${presetMins === m ? '#ffffff' : '#a1a1aa'}; cursor: pointer;">
                ${m} دقیقه
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- 🌟 CENTRAL FEATURE: PROMINENT LARGE POMODORO TIMER CIRCLE -->
      <div class="glass-panel timer-circle-panel" style="padding: 20px 16px; margin-bottom: 14px; border-radius: 18px; border: 1px solid ${themeColor}; background: linear-gradient(180deg, rgba(22, 23, 29, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        
        <!-- Radial Timer Display -->
        <div id="immersion-clock-clickable" class="timer-circle countdown-timer" onclick="event.preventDefault(); event.stopPropagation(); if(${isRunning}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" style="position: relative; width: 230px; height: 230px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="230" height="230" viewBox="0 0 220 220" style="transform: rotate(-90deg); width: 100%; height: 100%; filter: drop-shadow(0 0 12px ${themeColor});">
            <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"></circle>
            <circle cx="110" cy="110" r="95" fill="none" stroke="${themeColor}" stroke-width="12" 
              stroke-dasharray="596.9" 
              stroke-dashoffset="${596.9 - (596.9 * (timerType === 0 ? (stopwatchTime % 3600) / 3600 : (timerType === 2 ? pomodoroTime / 300 : pomodoroTime / (presetMins * 60))))}" 
              stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease;"></circle>
          </svg>
          
          <div style="position: absolute; text-align: center; width: 100%;">
            <div id="focus-timer-display" data-alias="timer-clock-display" style="font-size: 2.8rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: 1.5px; text-shadow: 0 0 24px ${themeColor}; line-height: 1;">
              ${formattedTimeEn}
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: ${isRunning ? themeColor : '#a1a1aa'}; margin-top: 6px;">
              ${isRunning ? liveStatusText : idleStatusText}
            </div>
          </div>
        </div>

        <!-- Timer Action Buttons: WIDE ATTACHED START BUTTON -->
        <div style="display: flex; gap: 8px;">
          <button type="button" id="btn-toggle-timer-main" onclick="event.preventDefault(); event.stopPropagation(); if(${isRunning}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" class="btn-primary" style="flex: 1; height: 46px; font-size: 1rem; font-weight: 800; background: ${isRunning ? '#ef4444' : startBtnBg}; border-radius: 12px; border: none; cursor: pointer; color: white; box-shadow: 0 4px 16px ${isRunning ? 'rgba(239,68,68,0.35)' : 'rgba(16,185,129,0.35)'}; transition: all 0.2s ease;">
            ${isRunning ? '⏸ توقف و ثبت پارت' : (isBreak ? '☕ شروع استراحت' : (isNonStudy ? '🧘 شروع فعالیت غیردرسی' : '▶ شروع تایمر'))}
          </button>
          <button type="button" id="btn-reset-timer-main" onclick="event.preventDefault(); event.stopPropagation(); window.resetTimer && window.resetTimer(event);" class="glass-panel" style="width: 70px; height: 46px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-size: 0.82rem; font-weight: 700; border-radius: 12px; color: #a1a1aa; display: flex; align-items: center; justify-content: center; gap: 4px;" title="ریست تایمر (لغو بدون ثبت)">
            🔄
          </button>
        </div>

      </div>

      <!-- 💾 4. DEDICATED ACTION BUTTONS: AUTO-SYNC LOCAL & CLOUD SAVE -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        <!-- Button 1: Primary Save with Auto-Sync -->
        <button type="button" id="btn-save-activity-local" onclick="window.finishPomodoroSession && window.finishPomodoroSession()" style="width: 100%; height: 46px; background: ${saveBtnBg}; color: white; border: none; border-radius: 12px; font-size: 0.92rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35); transition: all 0.2s ease;">
          <span>${saveBtnText}</span>
        </button>

        <!-- Button 2: Switch to Manual Log Modal -->
        <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="width: 100%; height: 38px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
          <span style="font-size: 0.95rem;">➕</span>
          <span>ثبت دستی (بدون تایمر)</span>
        </button>
      </div>

      <!-- 🎵 Ambient Focus Sound Player Widget -->
      ${renderAmbientAudioPlayer()}


      <!-- 🎯 5. ACCORDION: TEST COUNTER & NOTES (Optional) -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-testNote" data-accordion-key="testNote" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('testNote', event);" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">📝</span>
            <span>ثبت تست و یادداشت (اختیاری) ${sessionTests > 0 ? `<strong style="color: #38bdf8; font-weight: 800;">(${sessionTests} تست)</strong>` : ''}</span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${focusAccordions.testNote ? '180deg' : '0deg'});">▼</span>
        </button>

        <div id="accordion-drawer-testNote" class="accordion-drawer" style="display: ${focusAccordions.testNote ? 'block' : 'none'}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          ${isStudy ? `
            <!-- Dedicated Test Counter -->
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">تست‌شمار پارت مطالعه:</span>
                <span style="font-size: 0.68rem; color: #8e8e9c;">امروز: <strong style="color:#e4e4e7;">${recordedTests + sessionTests}</strong> تست</span>
              </div>

              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                <button type="button" id="btn-test-counter-minus" onclick="window.adjustFocusTests && window.adjustFocusTests(-1)" style="width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 1rem; font-weight: bold; cursor: pointer;" title="کاهش یک تست">−</button>
                
                <div id="focus-session-tests-display" style="flex: 1; text-align: center; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 2px 8px;">
                  <div style="font-size: 1.4rem; font-weight: 800; font-family: 'Outfit', sans-serif; color: #e4e4e7; line-height: 1.1;">${sessionTests}</div>
                  <div style="font-size: 0.6rem; color: #8e8e9c;">تست حل‌شده</div>
                </div>
                
                <button type="button" id="btn-test-counter-plus" onclick="window.adjustFocusTests && window.adjustFocusTests(1)" style="padding: 0 12px; height: 34px; border-radius: 8px; border: none; background: #7c3aed; color: white; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: none;">
                  +۱ تست
                </button>
                <button type="button" id="btn-test-counter-reset" onclick="window.resetFocusTests && window.resetFocusTests()" style="width: 32px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.75rem; cursor: pointer;" title="صفر کردن تست‌های این پارت">
                  ↺
                </button>
              </div>

              <!-- Quick Test Increment Buttons -->
              <div style="display: flex; gap: 4px; justify-content: center; margin-bottom: 10px;">
                <button type="button" class="btn-quick-test-add" data-add-test="5" onclick="window.adjustFocusTests && window.adjustFocusTests(5)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۵</button>
                <button type="button" class="btn-quick-test-add" data-add-test="10" onclick="window.adjustFocusTests && window.adjustFocusTests(10)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۱۰</button>
                <button type="button" class="btn-quick-test-add" data-add-test="20" onclick="window.adjustFocusTests && window.adjustFocusTests(20)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۲۰</button>
                <button type="button" class="btn-quick-test-add" data-add-test="50" onclick="window.adjustFocusTests && window.adjustFocusTests(50)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۵۰</button>
              </div>
            </div>
          ` : ''}

          <!-- Note Input -->
          <div>
            <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
              یادداشت پارت (اختیاری):
            </label>
            <input type="text" id="input-focus-session-note" value="${sessionNote || ''}" placeholder="نکات مهم یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.76rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
          </div>
        </div>
      </div>

    </div>
  `;
}

