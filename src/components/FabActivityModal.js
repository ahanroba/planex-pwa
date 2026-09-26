import { db } from '../db.js';
import { formatStudyTime, isStudyCategory } from '../constants.js';
import { renderAmbientAudioPlayer } from './AmbientAudioPlayer.js';

export const STUDY_TYPE_PILLS = [
  { id: 'یادگیری', label: 'یادگیری', icon: '🧠', desc: 'مطالعه درسنامه و مفهومی' },
  { id: 'تست‌زنی', label: 'تست‌زنی', icon: '🎯', desc: 'حل تست آموزشی و زمان‌دار' },
  { id: 'مرور', label: 'مرور', icon: '🔄', desc: 'مرور خلاصه، فلش‌کارت و یادداشت' },
  { id: 'جمع‌بندی', label: 'جمع‌بندی', icon: '📑', desc: 'جمع‌بندی سرفصل و آزمون جامع' }
];

if (typeof window !== 'undefined') {
  window.closeQuickActivityModal = function() {
    try {
      const modalEl = document.getElementById('modal-fab-activity-registration');
      if (modalEl) {
        modalEl.style.display = 'none';
        modalEl.classList.remove('active');
      }
    } catch (e) {
      console.warn('[closeQuickActivityModal] DOM hide error:', e);
    }
    try {
      if (typeof window.closeFabActivityModal === 'function') {
        window.closeFabActivityModal();
      } else if (window.appState) {
        window.appState.activeModal = null;
        if (typeof window.renderApp === 'function') window.renderApp();
      }
    } catch (e) {
      console.warn('[closeQuickActivityModal] state update error:', e);
    }
  };

  // Bulletproof native inline handlers (spec): direct show/hide by canonical IDs.
  // Null-safe: spec behavior when elements exist, no-throw when missing.
  window.showLiveTimerSection = function() {
    try {
      var _t = document.getElementById('section-live-timer');
      if (_t) _t.style.display = 'block';
      var _m = document.getElementById('section-manual-log');
      if (_m) _m.style.display = 'none';
      try {
        var _t2 = document.getElementById('fab-timer-section');
        if (_t2 && _t2 !== _t) _t2.style.display = 'block';
        var _m2 = document.getElementById('fab-manual-section');
        if (_m2 && _m2 !== _m) _m2.style.display = 'none';
      } catch (_) {}
      var _bt = document.getElementById('btn-mode-timer');
      if (_bt) _bt.classList.add('active');
      var _bm = document.getElementById('btn-mode-manual');
      if (_bm) _bm.classList.remove('active');
    } catch (_) {}
    try {
      window.fabActivityState = window.fabActivityState || {};
      window.fabActivityState.activeTab = 'timer';
    } catch (_) {}
  };
  window.showManualLogSection = function() {
    try {
      var _t3 = document.getElementById('section-live-timer');
      if (_t3) _t3.style.display = 'none';
      var _m3 = document.getElementById('section-manual-log');
      if (_m3) _m3.style.display = 'block';
      try {
        var _t4 = document.getElementById('fab-timer-section');
        if (_t4 && _t4 !== _t3) _t4.style.display = 'none';
        var _m4 = document.getElementById('fab-manual-section');
        if (_m4 && _m4 !== _m3) _m4.style.display = 'block';
      } catch (_) {}
      var _bt2 = document.getElementById('btn-mode-timer');
      if (_bt2) _bt2.classList.remove('active');
      var _bm2 = document.getElementById('btn-mode-manual');
      if (_bm2) _bm2.classList.add('active');
    } catch (_) {}
    try {
      window.fabActivityState = window.fabActivityState || {};
      window.fabActivityState.activeTab = 'manual';
    } catch (_) {}
  };

  window.switchFabActivityTab = function(mode, e) {
    try { if (e && e.preventDefault) e.preventDefault(); } catch (_) {}
    try { if (e && e.stopPropagation) e.stopPropagation(); } catch (_) {}
    try {
      const next = (mode === 'manual') ? 'manual' : 'timer';
      if (next === 'manual') {
        try { window.showManualLogSection(); } catch (_) {}
      } else {
        try { window.showLiveTimerSection(); } catch (_) {}
      }
      // Legacy alias sync (fab-timer-section / fab-manual-section) for older selectors
      try {
        const timerSecLegacy = document.getElementById('fab-timer-section');
        const manualSecLegacy = document.getElementById('fab-manual-section');
        if (timerSecLegacy) timerSecLegacy.style.display = (next === 'timer') ? 'block' : 'none';
        if (manualSecLegacy) manualSecLegacy.style.display = (next === 'manual') ? 'block' : 'none';
      } catch (_) {}
      window.fabActivityState = window.fabActivityState || {};
      window.fabActivityState.activeTab = next;
    } catch (err) {
      console.warn('[switchFabActivityTab] error:', err);
    }
  };

  // Delegation fallback so taps work even if inline onclick is stripped (mobile)
  if (!window._fabTabDelegationAttached) {
    window._fabTabDelegationAttached = true;
    document.addEventListener('click', (ev) => {
      try {
        const btn = ev.target && ev.target.closest ? ev.target.closest('.btn-fab-modal-tab') : null;
        if (!btn) return;
        if (!btn.closest('#modal-fab-activity-registration')) return;
        const tab = btn.getAttribute('data-tab') || btn.getAttribute('data-mode');
        if (tab === 'timer' || tab === 'manual') {
          ev.preventDefault();
          ev.stopPropagation();
          window.switchFabActivityTab(tab, ev);
        }
      } catch (_) {}
    });
  }
}

export function renderFabActivityModal(state = {}) {
  const fabState = window.fabActivityState || {
    activeTab: 'timer', // 'timer' | 'manual'
    timerType: 'pomodoro', // 'pomodoro' | 'stopwatch'
    categoryCode: null,
    subject: '',
    studyType: 'یادگیری',
    startTime: '08:00',
    endTime: '09:30',
    durationMins: 90,
    testCorrect: 0,
    testWrong: 0,
    testUnanswered: 0,
    note: ''
  };

  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const categories = (typeof db !== 'undefined' ? db.getCategories() : []) || [];
  const studyCategories = categories.filter(c => isStudyCategory(c));
  const activeCatCode = fabState.categoryCode || (studyCategories[0]?.code || categories[0]?.code || 'ع-س');

  // Load previously logged topic suggestions for active category
  const topicSuggestions = typeof db !== 'undefined' && typeof db.getUniqueLoggedTopics === 'function'
    ? db.getUniqueLoggedTopics(activeCatCode)
    : [];

  // Compute duration from startTime and endTime if valid
  const calculateDurationFromTimes = (startStr, endStr) => {
    try {
      const [sH, sM] = (startStr || '08:00').split(':').map(Number);
      const [eH, eM] = (endStr || '09:30').split(':').map(Number);
      if (!isNaN(sH) && !isNaN(sM) && !isNaN(eH) && !isNaN(eM)) {
        let startMins = sH * 60 + sM;
        let endMins = eH * 60 + eM;
        if (endMins < startMins) endMins += 24 * 60; // crossed midnight
        const diff = endMins - startMins;
        return diff > 0 ? diff : 60;
      }
    } catch(e) {}
    return 60;
  };

  const computedMins = calculateDurationFromTimes(fabState.startTime, fabState.endTime);
  fabState.durationMins = computedMins;

  const C = Math.max(0, parseInt(fabState.testCorrect) || 0);
  const W = Math.max(0, parseInt(fabState.testWrong) || 0);
  const U = Math.max(0, parseInt(fabState.testUnanswered) || 0);
  const totalTests = C + W + U;

  return `
    <div class="modal-overlay animate-fade-in" id="modal-fab-activity-registration" style="backdrop-filter: blur(18px); z-index: 100000; display: flex; align-items: center; justify-content: center; padding: 14px;">
      
      <!-- Backdrop -->
      <div class="modal-backdrop" data-close-modal="true" style="position: absolute; inset: 0; background: rgba(10, 11, 14, 0.88);" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeQuickActivityModal && window.closeQuickActivityModal());"></div>

      <!-- Main Bottom-Sheet / Modal Card with comfortable max-height and bottom padding -->
      <div class="glass-panel animate-scale-up" style="position: relative; width: 100%; max-width: 540px; max-height: 90vh; overflow-y: auto; background: #16171d; border: 1.5px solid rgba(16, 185, 129, 0.35); border-radius: 24px; padding: 22px 22px 28px 22px; color: #fff; direction: rtl; box-shadow: 0 25px 60px rgba(0,0,0,0.85);">
        
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);">
              ⚡
            </div>
            <div>
              <h2 style="margin: 0; font-size: 1.15rem; font-weight: 900; color: #e4e4e7;">
                ثبت سریع فعالیت و مطالعه
              </h2>
              <p style="margin: 3px 0 0 0; font-size: 0.76rem; color: var(--text-secondary);">
                شروع تایمر زنده یا ثبت مستقیم پارت مطالعه
              </p>
            </div>
          </div>
          
          <button type="button" id="btn-close-fab-modal" class="btn-close-modal" data-close-modal="true" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeQuickActivityModal && window.closeQuickActivityModal());" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); width: 36px; height: 36px; border-radius: 50%; color: #a1a1aa; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: 0.15s;">✕</button>
        </div>

        <!-- 🌟 TAB BAR SWITCHER -->
        <div style="display: flex; gap: 8px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 18px;">
          <button type="button" id="btn-mode-timer" data-mode="timer" onclick="window.showLiveTimerSection()" class="btn-fab-modal-tab mode-switch-btn ${fabState.activeTab === 'timer' ? 'active' : ''}" data-tab="timer" style="flex: 1; padding: 11px 14px; border-radius: 12px; font-size: 0.88rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${fabState.activeTab === 'timer' ? '#10b981' : 'transparent'}; background: ${fabState.activeTab === 'timer' ? '#10b981' : 'transparent'}; color: ${fabState.activeTab === 'timer' ? '#ffffff' : '#a1a1aa'}; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span>تایمر زنده (پومودورو / کرنومتر)</span>
          </button>

          <button type="button" id="btn-mode-manual" data-mode="manual" onclick="window.showManualLogSection()" class="btn-fab-modal-tab mode-switch-btn ${fabState.activeTab === 'manual' ? 'active' : ''}" data-tab="manual" style="flex: 1; padding: 11px 14px; border-radius: 12px; font-size: 0.88rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${fabState.activeTab === 'manual' ? '#7c3aed' : 'transparent'}; background: ${fabState.activeTab === 'manual' ? '#7c3aed' : 'transparent'}; color: ${fabState.activeTab === 'manual' ? '#ffffff' : '#a1a1aa'}; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">📝</span>
            <span>ثبت دستی (از/تا ساعت)</span>
          </button>
        </div>

        <!-- ==================== TAB A: LIVE TIMER QUICK START ==================== -->
        <div id="section-live-timer" data-section="section-live-timer" style="display: ${fabState.activeTab === 'timer' ? 'block' : 'none'};">
          <div class="fab-tab-content animate-fade-in" id="fab-timer-section" data-section="section-live-timer">
            
            <!-- 1. Timer Type Selector (Pomodoro vs Stopwatch) -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۱. حالت تایمر:
              </label>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <button type="button" class="btn-fab-timer-type ${fabState.timerType === 'pomodoro' ? 'active' : ''}" data-timer-type="pomodoro" onclick="window.setFabTimerType && window.setFabTimerType('pomodoro')" style="padding: 12px; border-radius: 14px; border: 1.5px solid ${fabState.timerType === 'pomodoro' ? '#10b981' : 'rgba(255,255,255,0.08)'}; background: ${fabState.timerType === 'pomodoro' ? 'rgba(16,185,129,0.15)' : '#1f2029'}; color: ${fabState.timerType === 'pomodoro' ? '#34d399' : '#a1a1aa'}; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 1.2rem;">⏱️</span>
                  <span>پومودورو (زمان‌بندی‌شده)</span>
                </button>

                <button type="button" class="btn-fab-timer-type ${fabState.timerType === 'stopwatch' ? 'active' : ''}" data-timer-type="stopwatch" onclick="window.setFabTimerType && window.setFabTimerType('stopwatch')" style="padding: 12px; border-radius: 14px; border: 1.5px solid ${fabState.timerType === 'stopwatch' ? '#38bdf8' : 'rgba(255,255,255,0.08)'}; background: ${fabState.timerType === 'stopwatch' ? 'rgba(56,189,248,0.15)' : '#1f2029'}; color: ${fabState.timerType === 'stopwatch' ? '#7dd3fc' : '#a1a1aa'}; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 1.2rem;">⏳</span>
                  <span>کرنومتر (زمان آزاد)</span>
                </button>
              </div>
            </div>

            <!-- 2. Dynamic Subject & Category Selector -->
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">
                  ۲. انتخاب درس و موضوع مطالعه:
                </label>
                <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #34d399; font-size: 0.72rem; font-weight: bold; cursor: pointer; padding: 0;">
                  ➕ مدیریت درس‌ها
                </button>
              </div>

              <!-- Dynamic Category Chips with "+ افزودن درس جدید" -->
              <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 10px;" id="fab-timer-cat-chips">
                ${studyCategories.map(c => `
                  <button type="button" class="btn-fab-cat-chip ${c.code === activeCatCode ? 'active' : ''}" data-code="${c.code}" data-title="${c.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${c.title}', '${c.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${c.code === activeCatCode ? '#10b981' : 'rgba(255,255,255,0.08)'}; background: ${c.code === activeCatCode ? 'rgba(16,185,129,0.2)' : '#1f2029'}; color: ${c.code === activeCatCode ? '#34d399' : '#e4e4e7'}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${c.icon || '📚'}</span>
                    <span>${c.title}</span>
                  </button>
                `).join('')}
                <button type="button" id="btn-fab-add-new-subject-timer" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1.5px dashed #10b981; background: rgba(16,185,129,0.12); color: #34d399; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                  <span>➕</span>
                  <span>افزودن درس جدید</span>
                </button>
              </div>

              <!-- Versatile Topic Input with Auto-Suggestions Datalist -->
              <input type="text" list="fab-topic-suggestions-list" id="input-fab-timer-subject" value="${fabState.subject || ''}" placeholder="مبحث یا فصل (مثال: فصل ۳ ژنتیک، حد و پیوستگی...)" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.85rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
              <datalist id="fab-topic-suggestions-list">
                ${topicSuggestions.map(t => `<option value="${t}"></option>`).join('')}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills (یادگیری، تست‌زنی، مرور، جمع‌بندی) -->
            <div style="margin-bottom: 18px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۳. فاز / نوع مطالعه (الزامی):
              </label>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;" id="fab-timer-phase-container">
                ${STUDY_TYPE_PILLS.map(p => {
                  const isSelected = (fabState.studyType === p.id || fabState.selectedPhase === p.id || (!fabState.studyType && !fabState.selectedPhase && p.id === 'یادگیری'));
                  return `
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${isSelected ? 'active' : ''}" data-phase="${p.id}" data-pill="${p.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${p.id}')" style="padding: 10px 12px; border-radius: 14px; border: 1.5px solid ${isSelected ? '#10b981' : 'rgba(255,255,255,0.08)'}; background: ${isSelected ? 'rgba(16,185,129,0.2)' : '#1f2029'}; color: ${isSelected ? '#ffffff' : '#e4e4e7'}; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; text-align: right; transition: all 0.15s ease;">
                      <span style="font-size: 1.2rem;">${p.icon}</span>
                      <div>
                        <strong style="display: block; font-size: 0.84rem;">${p.label}</strong>
                        <span style="font-size: 0.68rem; color: ${isSelected ? '#a7f3d0' : '#71717a'}; font-weight: normal;">${p.desc}</span>
                      </div>
                    </button>
                  `;
                }).join('')}
              </div>
              <input type="hidden" id="fab-timer-phase" value="${fabState.studyType || fabState.selectedPhase || 'یادگیری'}" />
            </div>

            <!-- 🎵 Ambient Focus Sound Player Widget -->
            ${renderAmbientAudioPlayer()}

            <!-- 🚀 Primary CTA Button: Start Live Timer -->
            <div style="margin-top: 18px;">
              <button type="button" id="btn-fab-start-live-timer" onclick="event.preventDefault(); event.stopPropagation(); window.planexStartFocusTimer && window.planexStartFocusTimer(event);" style="width: 100%; height: 54px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; border: none; border-radius: 16px; font-size: 1.02rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 0 24px rgba(16, 185, 129, 0.45); transition: transform 0.15s ease;">
                <span style="font-size: 1.35rem;">🚀</span>
                <span>شروع پارت تمرکز (تایمر زنده)</span>
              </button>
            </div>

          </div>
        </div>
        <div id="section-manual-log" data-section="section-manual-log" style="display: ${fabState.activeTab === 'manual' ? 'block' : 'none'};">
          <!-- ==================== TAB B: DIRECT MANUAL ENTRY ==================== -->
          <div class="fab-tab-content animate-fade-in" id="fab-manual-section" data-section="section-manual-log">
            
            <!-- 1. Start Time (از ساعت) & End Time (تا ساعت) -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 0.8rem; font-weight: 800; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>⏱️</span> بازه زمانی مطالعه (از ساعت تا ساعت):
                </label>
                <span id="fab-manual-computed-duration-badge" style="font-size: 0.76rem; font-weight: 800; color: #34d399; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); padding: 3px 10px; border-radius: 10px;">
                  ${formatStudyTime(computedMins)}
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <label style="display: block; font-size: 0.74rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">
                    از ساعت (شروع):
                  </label>
                  <input type="time" id="input-fab-start-time" value="${fabState.startTime || '08:00'}" oninput="window.updateFabDurationPreview && window.updateFabDurationPreview()" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; color: #38bdf8; text-align: center;" />
                </div>

                <div>
                  <label style="display: block; font-size: 0.74rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">
                    تا ساعت (پایان):
                  </label>
                  <input type="time" id="input-fab-end-time" value="${fabState.endTime || '09:30'}" oninput="window.updateFabDurationPreview && window.updateFabDurationPreview()" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; color: #38bdf8; text-align: center;" />
                </div>
              </div>

              <!-- Quick Duration Adjust & Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
              <div style="display: flex; gap: 6px; align-items: center; justify-content: center; margin-top: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">−۱۵</button>
                <button type="button" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">+۵</button>
                <button type="button" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">+۱۵</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="15" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(15)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱۵د</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="30" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(30)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۳۰د</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="60" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(60)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱ساعت</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="90" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(90)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱.۵ساعت</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="120" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(120)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۲ساعت</button>
              </div>

              <!-- Hidden duration mirror consumed by saveManualActivityLog -->
              <input type="hidden" id="fab-manual-duration-input" value="${computedMins}" />
            </div>

            <!-- 2. Dynamic Subject & Category Selector -->
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">
                  درس و موضوع مطالعه:
                </label>
                <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a78bfa; font-size: 0.72rem; font-weight: bold; cursor: pointer; padding: 0;">
                  ➕ مدیریت درس‌ها
                </button>
              </div>

              <!-- Dynamic Category Chips with "+ افزودن درس جدید" -->
              <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 10px;">
                ${studyCategories.map(c => `
                  <button type="button" class="btn-fab-cat-chip ${c.code === activeCatCode ? 'active' : ''}" data-code="${c.code}" data-title="${c.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${c.title}', '${c.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${c.code === activeCatCode ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${c.code === activeCatCode ? '#7c3aed' : '#1f2029'}; color: ${c.code === activeCatCode ? '#ffffff' : '#e4e4e7'}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${c.icon || '📚'}</span>
                    <span>${c.title}</span>
                  </button>
                `).join('')}
                <button type="button" id="btn-fab-add-new-subject-manual" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1.5px dashed #7c3aed; background: rgba(124,58,237,0.12); color: #c084fc; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                  <span>➕</span>
                  <span>افزودن درس جدید</span>
                </button>
              </div>

              <!-- Versatile Topic Input with Suggestions -->
              <input type="text" list="fab-topic-suggestions-list-manual" id="input-fab-manual-subject" value="${fabState.subject || ''}" placeholder="مبحث یا موضوع مطالعه (مثال: زیست فصل ۴، حل سوالات کنکور...)" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.85rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
              <datalist id="fab-topic-suggestions-list-manual">
                ${topicSuggestions.map(t => `<option value="${t}"></option>`).join('')}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                فاز / نوع مطالعه:
              </label>

              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="fab-manual-phase-container">
                ${STUDY_TYPE_PILLS.map(p => {
                  const isSelected = (fabState.studyType === p.id || fabState.selectedPhase === p.id || (!fabState.studyType && !fabState.selectedPhase && p.id === 'یادگیری'));
                  return `
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${isSelected ? 'active' : ''}" data-phase="${p.id}" data-pill="${p.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${p.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${isSelected ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; background: ${isSelected ? '#7c3aed' : '#1f2029'}; color: ${isSelected ? '#ffffff' : '#e4e4e7'}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px;">
                      <span style="font-size: 1.1rem;">${p.icon}</span>
                      <span>${p.label}</span>
                    </button>
                  `;
                }).join('')}
              </div>
              <input type="hidden" id="fab-manual-phase" value="${fabState.studyType || fabState.selectedPhase || 'یادگیری'}" />
            </div>

            <!-- 4. Test Count Input Grid -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; margin-bottom: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 0.8rem; font-weight: 800; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>🎯</span> جزئیات تست‌ها:
                </label>
                <span id="fab-manual-tests-total-badge" style="font-size: 0.76rem; font-weight: 800; color: #38bdf8; background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.3); padding: 3px 10px; border-radius: 10px;">
                  مجموع: ${toPersianDigits(totalTests)} تست
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                <!-- Correct -->
                <div style="background: #16171d; border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #34d399; margin-bottom: 4px; text-align: center;">
                    ✅ صحیح
                  </label>
                  <input type="number" id="input-fab-test-correct" min="0" value="${C}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.2); border-radius: 8px; color: #34d399;" />
                </div>

                <!-- Wrong -->
                <div style="background: #16171d; border: 1px solid rgba(239,68,68,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #f87171; margin-bottom: 4px; text-align: center;">
                    ❌ نزده/غلط
                  </label>
                  <input type="number" id="input-fab-test-wrong" min="0" value="${W}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(239,68,68,0.2); border-radius: 8px; color: #f87171;" />
                </div>

                <!-- Unanswered -->
                <div style="background: #16171d; border: 1px solid rgba(161,161,170,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #a1a1aa; margin-bottom: 4px; text-align: center;">
                    ⏭️ نزده
                  </label>
                  <input type="number" id="input-fab-test-unanswered" min="0" value="${U}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.2); border-radius: 8px; color: #a1a1aa;" />
                </div>
              </div>
            </div>

            <!-- 💾 Primary CTA Button: Submit Manual Session -->
            <div style="margin-top: 18px;">
              <button type="button" id="btn-fab-submit-manual-log" onclick="event.preventDefault(); event.stopPropagation(); window.saveManualActivityLog && window.saveManualActivityLog(event);" style="width: 100%; height: 54px; background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: #ffffff; border: none; border-radius: 16px; font-size: 1.02rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 0 24px rgba(124, 58, 237, 0.45); transition: transform 0.15s ease;">
                <span style="font-size: 1.35rem;">💾</span>
                <span>ثبت در کارنامه</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;
}
