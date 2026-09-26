import { db } from '../db.js';
import { renderDailyAnalysisModal } from './DailyRingWidget.js';

const toPersianDigits = (n) => String(n == null ? '' : n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

// Global Modal Openers
if (typeof window !== 'undefined') {
  window.openGPACalculator = () => {
    if (window.appState) window.appState.activeModal = 'gpaCalc';
    if (window.renderApp) window.renderApp();
  };
  window.openRankEstimator = () => {
    if (window.appState) window.appState.activeModal = 'rankEstimator';
    if (window.renderApp) window.renderApp();
    try {
      var m = document.getElementById('modal-rank-estimator') || document.getElementById('modal-konkur-estimator');
      if (m) { m.style.display = 'flex'; m.classList.add('active'); }
    } catch (_) {}
  };
  // Bulletproof Konkur estimator opener — guarantees complete form HTML exists in DOM.
  // Fixes EMPTY modal shell: never just toggles display on an empty div; always injects
  // the full form (header/selects/inputs/result cards/close button) then binds live handlers.
  window.openKonkurEstimatorModal = function() {
    try {
      var html = '';
      try {
        if (typeof renderKonkurEstimatorModal === 'function') html = renderKonkurEstimatorModal();
        else if (typeof renderRankEstimatorModal === 'function') html = renderRankEstimatorModal();
      } catch (e) { html = ''; }
      // Mount target: #modals-root (spec) -> #modal-container (app) -> document.body
      var mount = null;
      try {
        mount = document.getElementById('modals-root')
          || document.getElementById('modal-container')
          || document.body;
      } catch (_) { mount = null; }
      var modal = null;
      try {
        modal = document.getElementById('modal-konkur-estimator')
          || document.getElementById('modal-rank-estimator');
      } catch (_) { modal = null; }
      // If modal missing OR empty shell (no form inputs inside), inject full HTML.
      var needsInject = true;
      try {
        if (modal && modal.innerHTML && modal.innerHTML.length > 500
          && modal.querySelector('select, input')) {
          needsInject = false;
        }
      } catch (_) { needsInject = true; }
      if (needsInject && mount && html) {
        try {
          var host = document.getElementById('modal-konkur-estimator');
          if (!host) {
            var wrap = document.createElement('div');
            wrap.innerHTML = html;
            var node = wrap.firstElementChild;
            if (node) mount.appendChild(node);
            else mount.insertAdjacentHTML('beforeend', html);
          } else {
            // Empty shell exists — fill it with the full form HTML.
            var tmp = document.createElement('div');
            tmp.innerHTML = html;
            var full = tmp.firstElementChild;
            if (full) host.innerHTML = full.innerHTML;
            else host.innerHTML = html;
          }
        } catch (_) {
          try { mount.insertAdjacentHTML('beforeend', html); } catch (e2) {}
        }
        try {
          modal = document.getElementById('modal-konkur-estimator')
            || document.getElementById('modal-rank-estimator');
        } catch (_) {}
      }
      // Attach immediate live-calculation handlers so typing updates numbers in real-time
      // (in addition to inline oninput/onchange already in the template).
      try { bindKonkurEstimatorLiveHandlers(); } catch (_) {}
      if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
      }
    } catch (_) {}
    try {
      if (window.appState) window.appState.activeModal = 'rankEstimator';
      if (typeof window.renderApp === 'function') {
        window.renderApp();
        // renderApp re-renders #modal-container — re-assert visibility + handlers after render.
        try {
          var m2 = document.getElementById('modal-konkur-estimator')
            || document.getElementById('modal-rank-estimator');
          if (m2) { m2.style.display = 'flex'; m2.classList.add('active'); }
        } catch (_) {}
        try { bindKonkurEstimatorLiveHandlers(); } catch (_) {}
      }
    } catch (_) {}
  };
  window.closeKonkurEstimatorModal = function() {
    try {
      ['modal-konkur-estimator', 'modal-rank-estimator'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) { el.style.display = 'none'; el.classList.remove('active'); }
      });
    } catch (_) {}
    try {
      if (window.appState) window.appState.activeModal = null;
      if (typeof window.renderApp === 'function') window.renderApp();
    } catch (_) {}
  };
  window.openPercentCalculator = () => {
    if (window.appState) window.appState.activeModal = 'percentCalc';
    if (window.renderApp) window.renderApp();
  };
  window.openExamBox = () => {
    if (window.appState) window.appState.activeModal = 'examBox';
    if (window.renderApp) window.renderApp();
  };
  window.openSleepScheduler = () => {
    if (window.appState) window.appState.activeModal = 'sleepScheduler';
    if (window.renderApp) window.renderApp();
  };
}

/**
 * 1. 📅 Jalali Day Breakdown & Analysis Modal ("کارنامه و تحلیل روز")
 */
export function renderJalaliDayDetailsModal(dateStr) {
  return renderDailyAnalysisModal(dateStr);
}


/**
 * 2. 🎯 Percent Calculator Modal ("محاسبه درصد")
 */
if (typeof window !== 'undefined') {
  window.handlePercentCalcInput = function(key, value) {
    window.percentCalcState = window.percentCalcState || { correct: 20, incorrect: 4, unanswered: 6 };
    window.percentCalcState[key] = value;
    window.updatePercentCalculation();
  };

  window.updatePercentCalculation = function() {
    const st = window.percentCalcState || { correct: 20, incorrect: 4, unanswered: 6 };
    const C = Math.max(0, parseInt(st.correct) || 0);
    const I = Math.max(0, parseInt(st.incorrect) || 0);
    const U = Math.max(0, parseInt(st.unanswered) || 0);
    const total = C + I + U;

    const rawScore = total > 0 ? (((3 * C) - I) / (3 * total)) * 100 : 0;
    const scorePercent = Math.max(-33.3, Math.min(100, rawScore)).toFixed(1);

    let badgeColor = '#10b981';
    let badgeText = 'عالی 🚀 (عملکرد فوق‌العاده)';
    if (rawScore < 50) {
      badgeColor = '#ef4444';
      badgeText = 'نیاز به مرور و تمرکز بیشتر ⚠️';
    } else if (rawScore < 70) {
      badgeColor = '#f59e0b';
      badgeText = 'خوب و قابل ارتقا 👍';
    }

    const lostPercent = total > 0 ? ((I / (3 * total)) * 100).toFixed(1) : '0';

    const cardBox = document.getElementById('percent-calc-card-box');
    if (cardBox) cardBox.style.borderColor = badgeColor;

    const scoreDisplay = document.getElementById('percent-calc-score-display');
    if (scoreDisplay) {
      scoreDisplay.textContent = `${toPersianDigits(scorePercent)}٪`;
      scoreDisplay.style.color = badgeColor;
    }

    const badgeEl = document.getElementById('percent-calc-badge');
    if (badgeEl) {
      badgeEl.textContent = badgeText;
      badgeEl.style.color = badgeColor;
      badgeEl.style.borderColor = badgeColor;
    }

    const totalEl = document.getElementById('percent-calc-total-display');
    if (totalEl) totalEl.textContent = `${toPersianDigits(total)} سوال`;

    const positiveEl = document.getElementById('percent-calc-positive-display');
    if (positiveEl) positiveEl.textContent = `+${toPersianDigits(3 * C)}`;

    const lostEl = document.getElementById('percent-calc-lost-display');
    if (lostEl) lostEl.textContent = `-${toPersianDigits(I)} امتیاز (-${toPersianDigits(lostPercent)}٪)`;
  };
}

export function renderPercentCalculatorModal() {
  window.percentCalcState = window.percentCalcState || { correct: 20, incorrect: 4, unanswered: 6 };
  const { correct, incorrect, unanswered } = window.percentCalcState;

  const C = Math.max(0, parseInt(correct) || 0);
  const I = Math.max(0, parseInt(incorrect) || 0);
  const U = Math.max(0, parseInt(unanswered) || 0);
  const total = C + I + U;

  const rawScore = total > 0 ? (((3 * C) - I) / (3 * total)) * 100 : 0;
  const scorePercent = Math.max(-33.3, Math.min(100, rawScore)).toFixed(1);

  let badgeColor = '#10b981';
  let badgeText = 'عالی 🚀 (عملکرد فوق‌العاده)';
  if (rawScore < 50) {
    badgeColor = '#ef4444';
    badgeText = 'نیاز به مرور و تمرکز بیشتر ⚠️';
  } else if (rawScore < 70) {
    badgeColor = '#f59e0b';
    badgeText = 'خوب و قابل ارتقا 👍';
  }

  const lostPercent = total > 0 ? ((I / (3 * total)) * 100).toFixed(1) : '0';

  return `
    <div class="modal-overlay" id="modal-percent-calc" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 480px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(251, 146, 60, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #fb923c; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🎯 محاسبه درصد دقیق آزمون
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
            <div class="input-group">
              <label class="input-label" style="color: #34d399; font-weight: bold; font-size: 0.78rem;">تست صحیح (C)</label>
              <input type="number" min="0" value="${C}" class="form-input" style="border-color: rgba(52, 211, 153, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('correct', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #f87171; font-weight: bold; font-size: 0.78rem;">تست نادرست (I)</label>
              <input type="number" min="0" value="${I}" class="form-input" style="border-color: rgba(248, 113, 113, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('incorrect', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #94a3b8; font-weight: bold; font-size: 0.78rem;">نزده / بی‌پاسخ (U)</label>
              <input type="number" min="0" value="${U}" class="form-input" style="border-color: rgba(148, 163, 184, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('unanswered', this.value)" />
            </div>
          </div>

          <!-- Calculated Output Card -->
          <div id="percent-calc-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${badgeColor}; border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 14px; box-shadow: 0 0 20px rgba(0,0,0,0.3); transition: border-color 0.2s ease;">
            <div style="font-size: 0.8rem; color: #a1a1aa; font-weight: bold; margin-bottom: 6px;">درصد کل کسب‌شده با احتساب نمره منفی</div>
            <div id="percent-calc-score-display" style="font-size: 2.5rem; font-weight: 900; color: ${badgeColor}; font-family: 'Outfit', sans-serif; letter-spacing: -1px; transition: color 0.2s ease;">
              ${toPersianDigits(scorePercent)}٪
            </div>
            <div id="percent-calc-badge" style="display: inline-block; background: rgba(255,255,255,0.06); border: 1px solid ${badgeColor}; color: ${badgeColor}; padding: 4px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: bold; margin-top: 8px; transition: all 0.2s ease;">
              ${badgeText}
            </div>
          </div>

          <!-- Breakdown Summary Details -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px 14px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تعداد کل سوالات آزمون:</span>
              <strong id="percent-calc-total-display" style="color: #ffffff; font-family: 'Outfit';">${toPersianDigits(total)} سوال</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>امتیاز مثبت کسب‌شده:</span>
              <strong id="percent-calc-positive-display" style="color: #34d399; font-family: 'Outfit';">+${toPersianDigits(3 * C)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تلفات ناشی از پاسخ نادرست (نمره منفی):</span>
              <strong id="percent-calc-lost-display" style="color: #f87171; font-family: 'Outfit';">-${toPersianDigits(I)} امتیاز (-${toPersianDigits(lostPercent)}٪)</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fb923c; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          تایید و بستن
        </button>
      </div>
    </div>
  `;
}

/**
 * 3. 🏆 Rank Estimator Modal ("تخمین رتبه")
 */
export function calculateRankEstimates(stream, region, numKonkur, numFinal) {
  const konkurTazar = numKonkur > 100
    ? Math.round(Math.min(13500, Math.max(2000, numKonkur)))
    : Math.round(3500 + (Math.max(0, Math.min(100, numKonkur)) * 82));

  const finalExamTazar = numFinal > 100
    ? Math.round(Math.min(13500, Math.max(2000, numFinal)))
    : (numFinal <= 20
        ? Math.round(3000 + (Math.pow(Math.max(0, Math.min(20, numFinal)) / 20, 1.85) * 8000))
        : Math.round(3000 + (Math.pow(Math.max(0, Math.min(100, numFinal)) / 100, 1.85) * 8000)));

  const weightedTotalTazar = Math.round((konkurTazar * 0.50) + (finalExamTazar * 0.50));

  let region2RankText = 'بیش از ۲۵,۰۰۰';
  let countryRankText = 'بیش از ۶۰,۰۰۰';
  let targetTier = 'رشته‌های بر اساس سوابق تحصیلی و دانشگاه‌های غیرانتفاعی / آزاد';
  let badgeColor = '#ef4444';

  if (weightedTotalTazar >= 10800) {
    region2RankText = '۱ تا ۱۰۰';
    countryRankText = '۱ تا ۲۵۰';
    targetTier = 'پزشکی و دندان‌پزشکی دانشگاه تهران و علوم پزشکی شهید بهشتی';
    badgeColor = '#10b981';
  } else if (weightedTotalTazar >= 10000) {
    region2RankText = 'کمتر از ۵۰۰ (۱۰۰ تا ۵۰۰)';
    countryRankText = '۲۵۰ تا ۱,۲۵۰';
    targetTier = 'پزشکی / دندانپزشکی روزانه (دانشگاه‌های دولتی تیپ ۱ و ۲)';
    badgeColor = '#10b981';
  } else if (weightedTotalTazar >= 9200) {
    region2RankText = '۵۰۰ تا ۱,۵۰۰';
    countryRankText = '۱,۲۵۰ تا ۳,۵۰۰';
    targetTier = 'پزشکی و دندان‌پزشکی تیپ ۳ / داروسازی برتر مراکز استان';
    badgeColor = '#34d399';
  } else if (weightedTotalTazar >= 8500) {
    region2RankText = '۱,۵۰۰ تا ۳,۵۰۰';
    countryRankText = '۳,۵۰۰ تا ۸,۲۰۰';
    targetTier = 'داروسازی / فیزیوتراپی / پیراپزشکی برتر (دانشگاه‌های تیپ ۱ و ۲)';
    badgeColor = '#38bdf8';
  } else if (weightedTotalTazar >= 8000) {
    region2RankText = '۳,۵۰۰ تا ۵,۰۰۰';
    countryRankText = '۸,۲۰۰ تا ۱۲,۰۰۰';
    targetTier = 'بینایی‌سنجی، کاردرمانی، پرستاری و مامایی تیپ ۱';
    badgeColor = '#fbbf24';
  } else if (weightedTotalTazar >= 7000) {
    region2RankText = '۵,۰۰۰ تا ۱۲,۰۰۰';
    countryRankText = '۱۲,۰۰۰ تا ۲۸,۰۰۰';
    targetTier = 'پیراپزشکی‌ها (پرستاری، مامایی، هوشبری، اتاق عمل دولتی)';
    badgeColor = '#fb923c';
  } else if (weightedTotalTazar >= 6000) {
    region2RankText = '۱۲,۰۰۰ تا ۲۵,۰۰۰';
    countryRankText = '۲۸,۰۰۰ تا ۶۰,۰۰۰';
    targetTier = 'علوم پایه، بهداشت و پیراپزشکی‌های شهریه‌پرداز / پردیس / آزاد';
    badgeColor = '#a1a1aa';
  } else {
    region2RankText = 'بیش از ۲۵,۰۰۰';
    countryRankText = 'بیش از ۶۰,۰۰۰';
    targetTier = 'دوره‌های نوبت دوم، پیام‌نور و پذیرش بر اساس سوابق تحصیلی';
    badgeColor = '#ef4444';
  }

  let quotaRankDisplay = region2RankText;
  if (region === 'منطقه ۱') {
    if (weightedTotalTazar >= 10000) quotaRankDisplay = 'کمتر از ۳۵۰';
    else if (weightedTotalTazar >= 9200) quotaRankDisplay = '۳۵۰ تا ۱,۱۰۰';
    else if (weightedTotalTazar >= 8500) quotaRankDisplay = '۱,۱۰۰ تا ۲,۴۰۰';
    else if (weightedTotalTazar >= 8000) quotaRankDisplay = '۲,۴۰۰ تا ۳,۸۰۰';
    else if (weightedTotalTazar >= 7000) quotaRankDisplay = '۳,۸۰۰ تا ۸,۵۰۰';
    else if (weightedTotalTazar >= 6000) quotaRankDisplay = '۸,۵۰۰ تا ۱۸,۰۰۰';
    else quotaRankDisplay = 'بیش از ۱۸,۰۰۰';
  } else if (region === 'منطقه ۳') {
    if (weightedTotalTazar >= 10000) quotaRankDisplay = 'کمتر از ۴۰۰';
    else if (weightedTotalTazar >= 9200) quotaRankDisplay = '۴۰۰ تا ۱,۳۰۰';
    else if (weightedTotalTazar >= 8500) quotaRankDisplay = '۱,۳۰۰ تا ۳,۰۰۰';
    else if (weightedTotalTazar >= 8000) quotaRankDisplay = '۳,۰۰۰ تا ۴,۵۰۰';
    else if (weightedTotalTazar >= 7000) quotaRankDisplay = '۴,۵۰۰ تا ۱۰,۵۰۰';
    else if (weightedTotalTazar >= 6000) quotaRankDisplay = '۱۰,۵۰۰ تا ۲۲,۰۰۰';
    else quotaRankDisplay = 'بیش از ۲۲,۰۰۰';
  } else if (region === 'ایثارگران') {
    if (weightedTotalTazar >= 10000) quotaRankDisplay = 'کمتر از ۵۰ سهمیه';
    else if (weightedTotalTazar >= 8500) quotaRankDisplay = '۵۰ تا ۳۰۰ سهمیه';
    else if (weightedTotalTazar >= 7000) quotaRankDisplay = '۳۰۰ تا ۱,۲۰۰ سهمیه';
    else quotaRankDisplay = 'بیش از ۱,۲۰۰ سهمیه';
  }

  return {
    konkurTazar,
    finalExamTazar,
    weightedTotalTazar,
    quotaRankDisplay,
    countryRankText,
    targetTier,
    badgeColor
  };
}

if (typeof window !== 'undefined') {
  window.handleRankEstimatorInput = function(key, value) {
    if (!window.rankEstimatorState) {
      window.rankEstimatorState = { stream: 'تجربی', region: 'منطقه ۲', konkurScore: 8800, finalScore: 9000 };
    }
    window.rankEstimatorState[key] = value;
    window.updateRankEstimation();
  };

  window.updateRankEstimation = function() {
    const st = window.rankEstimatorState || {};
    const stream = st.stream || 'تجربی';
    const region = st.region || 'منطقه ۲';
    const rawKonkur = st.konkurScore ?? st.dedicatedPct ?? 8800;
    const rawFinal = st.finalScore ?? st.generalPct ?? 9000;

    const numKonkur = parseFloat(rawKonkur) || 0;
    const numFinal = parseFloat(rawFinal) || 0;

    const res = calculateRankEstimates(stream, region, numKonkur, numFinal);

    const quotaEl = document.getElementById('rank-estimator-quota-display');
    if (quotaEl) {
      quotaEl.textContent = toPersianDigits(res.quotaRankDisplay);
      quotaEl.style.color = res.badgeColor;
    }
    const quotaLabelEl = document.getElementById('rank-estimator-quota-label');
    if (quotaLabelEl) {
      quotaLabelEl.textContent = `🎯 رتبه تخمینی در سهمیه ${region}:`;
    }
    const countryEl = document.getElementById('rank-estimator-country-display');
    if (countryEl) countryEl.textContent = toPersianDigits(res.countryRankText);

    const totalTazarEl = document.getElementById('rank-estimator-total-tazar');
    if (totalTazarEl) totalTazarEl.textContent = toPersianDigits(res.weightedTotalTazar);

    const subTazarEl = document.getElementById('rank-estimator-sub-tazars');
    if (subTazarEl) subTazarEl.textContent = `(کنکور: ${toPersianDigits(res.konkurTazar)} • نهایی: ${toPersianDigits(res.finalExamTazar)})`;

    const targetTierEl = document.getElementById('rank-estimator-target-tier');
    if (targetTierEl) targetTierEl.textContent = res.targetTier;

    const cardBox = document.getElementById('rank-estimator-result-card');
    if (cardBox) cardBox.style.borderColor = res.badgeColor;
  };
}

export function renderRankEstimatorModal() {
  window.rankEstimatorState = window.rankEstimatorState || {
    stream: 'تجربی',
    region: 'منطقه ۲',
    konkurScore: 8800,
    finalScore: 9000
  };
  const { stream, region } = window.rankEstimatorState;
  const rawKonkur = window.rankEstimatorState.konkurScore ?? window.rankEstimatorState.dedicatedPct ?? 8800;
  const rawFinal = window.rankEstimatorState.finalScore ?? window.rankEstimatorState.generalPct ?? 9000;

  const numKonkur = parseFloat(rawKonkur) || 0;
  const numFinal = parseFloat(rawFinal) || 0;

  const res = calculateRankEstimates(stream, region, numKonkur, numFinal);

  return `
    <div class="modal-overlay" id="modal-konkur-estimator" data-modal-alias="modal-rank-estimator" style="backdrop-filter: blur(16px); display: flex;">
      <!-- Legacy alias node kept for backward-compat selectors -->
      <div id="modal-rank-estimator" style="display: contents;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(251, 191, 36, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🏆 تخمین رتبه و تراز سراسری کنکور
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">رشته تحصیلی</label>
              <select class="form-select" style="font-size: 0.85rem;" onchange="window.handleRankEstimatorInput('stream', this.value)">
                ${['تجربی', 'ریاضی', 'انسانی', 'هنر', 'زبان'].map(s => `<option value="${s}" ${s === stream ? 'selected' : ''}>${s}</option>`).join('')}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">سهمیه منطقه</label>
              <select class="form-select" style="font-size: 0.85rem;" onchange="window.handleRankEstimatorInput('region', this.value)">
                ${['منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'ایثارگران'].map(r => `<option value="${r}" ${r === region ? 'selected' : ''}>${r}</option>`).join('')}
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">تراز یا درصد آزمون کنکور (۵۰٪)</label>
              <input type="number" min="0" max="14000" value="${rawKonkur}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                placeholder="مثلاً: 8800 یا 65"
                oninput="window.handleRankEstimatorInput('konkurScore', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">تراز یا معدل سوابق نهایی (۵۰٪)</label>
              <input type="number" min="0" max="14000" step="0.1" value="${rawFinal}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                placeholder="مثلاً: 9000 یا 19.5"
                oninput="window.handleRankEstimatorInput('finalScore', this.value)" />
            </div>
          </div>
          <div style="font-size: 0.7rem; color: #8e8e9c; margin-bottom: 14px; text-align: center;">
            (می‌توانید تراز، درصد یا معدل کتبی از ۲۰ را مستقیماً وارد کنید)
          </div>

          <!-- Estimated Traz & Distinct Rank Result Box -->
          <div id="rank-estimator-result-card" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${res.badgeColor}; border-radius: 20px; padding: 16px; margin-bottom: 14px; transition: border-color 0.2s ease;">
            
            <!-- Distinct Line 1: Zone / Quota Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span id="rank-estimator-quota-label" style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🎯 رتبه تخمینی در سهمیه ${region}:</span>
              <strong id="rank-estimator-quota-display" style="font-size: 1.25rem; font-weight: 900; color: ${res.badgeColor}; font-family: 'Outfit'; transition: color 0.2s ease;">
                ${toPersianDigits(res.quotaRankDisplay)}
              </strong>
            </div>

            <!-- Distinct Line 2: All-Country Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🌍 رتبه تخمینی کشوری:</span>
              <strong id="rank-estimator-country-display" style="font-size: 1.25rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit';">
                ${toPersianDigits(res.countryRankText)}
              </strong>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 0.78rem; font-weight: bold; color: #e4e4e7; margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px;">
              <span>تراز کل کنکور و نهایی:</span>
              <strong id="rank-estimator-total-tazar" style="color: #fbbf24; font-size: 0.95rem; font-family: 'Outfit';">${toPersianDigits(res.weightedTotalTazar)}</strong>
              <span id="rank-estimator-sub-tazars" style="font-size: 0.72rem; color: #8e8e9c;">(کنکور: ${toPersianDigits(res.konkurTazar)} • نهایی: ${toPersianDigits(res.finalExamTazar)})</span>
            </div>

            <div style="font-size: 0.75rem; color: #a1a1aa; margin-top: 10px; background: rgba(255,255,255,0.04); padding: 7px 12px; border-radius: 10px; text-align: center;">
              🎯 پیش‌بینی قبولی: <strong id="rank-estimator-target-tier" style="color: #ffffff;">${res.targetTier}</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fbbf24; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
      </div>
    </div>
  `;
}

export function renderKonkurEstimatorModal() {
  return renderRankEstimatorModal();
}

function bindKonkurEstimatorLiveHandlers() {
  try {
    var root = null;
    try {
      root = document.getElementById('modal-konkur-estimator')
        || document.getElementById('modal-rank-estimator');
    } catch (_) { root = null; }
    if (!root) return;
    try {
      var selects = root.querySelectorAll('select');
      selects.forEach(function(sel, idx) {
        try {
          if (sel.dataset && sel.dataset.boundKonkur) return;
          if (sel.dataset) sel.dataset.boundKonkur = '1';
          sel.addEventListener('change', function() {
            try {
              var key = idx === 0 ? 'stream' : 'region';
              try {
                var opt = sel.options && sel.selectedIndex >= 0 ? sel.options[sel.selectedIndex] : null;
                var txt = opt ? (opt.text || opt.value || '') : '';
                if (txt.indexOf('منطقه') >= 0 || txt.indexOf('ایثار') >= 0) key = 'region';
                else key = 'stream';
                if (idx === 1) key = 'region';
                if (idx === 0) key = 'stream';
              } catch (_) {}
              if (typeof window.handleRankEstimatorInput === 'function') window.handleRankEstimatorInput(key, sel.value);
              else if (typeof window.updateRankEstimation === 'function') window.updateRankEstimation();
            } catch (_) {}
          });
        } catch (_) {}
      });
    } catch (_) {}
    try {
      var inputs = root.querySelectorAll('input[type="number"]');
      inputs.forEach(function(inp, idx) {
        try {
          if (inp.dataset && inp.dataset.boundKonkur) return;
          if (inp.dataset) inp.dataset.boundKonkur = '1';
          inp.addEventListener('input', function() {
            try {
              var key = idx === 0 ? 'konkurScore' : 'finalScore';
              if (typeof window.handleRankEstimatorInput === 'function') window.handleRankEstimatorInput(key, inp.value);
              else if (typeof window.updateRankEstimation === 'function') window.updateRankEstimation();
            } catch (_) {}
          });
        } catch (_) {}
      });
    } catch (_) {}
  } catch (_) {}
}
if (typeof window !== 'undefined') {
  try { window.bindKonkurEstimatorLiveHandlers = bindKonkurEstimatorLiveHandlers; } catch (_) {}
  try { window.renderKonkurEstimatorModal = renderKonkurEstimatorModal; } catch (_) {}
}

/**
 * 4. 🌙 Sleep Scheduler Modal ("تنظیم خواب")
 */
export function renderSleepSchedulerModal() {
  window.sleepSchedulerState = window.sleepSchedulerState || { mode: 'wake', hour: 6, minute: 30 };
  const { mode, hour, minute } = window.sleepSchedulerState;

  const targetMins = (parseInt(hour) * 60) + parseInt(minute);

  // Sleep cycles calculation (90 mins cycle + 15 min falling asleep latency)
  const cycles = [6, 5, 4, 3];
  const results = cycles.map(c => {
    const totalDurationMins = (c * 90) + 15;
    let computedMins = 0;
    if (mode === 'wake') {
      computedMins = (targetMins - totalDurationMins + 1440) % 1440;
    } else {
      computedMins = (targetMins + totalDurationMins) % 1440;
    }
    const h = Math.floor(computedMins / 60);
    const m = computedMins % 60;
    const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    const hoursCount = (c * 1.5).toFixed(1);
    return { cycleCount: c, hoursCount, timeStr, isOptimal: c === 5 || c === 6 };
  });

  return `
    <div class="modal-overlay" id="modal-sleep-scheduler" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 500px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(129, 140, 248, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #818cf8; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🌙 برنامه‌ریزی و تنظیم خواب سالم (REM)
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: flex; gap: 8px; margin-bottom: 14px; background: rgba(255,255,255,0.04); padding: 4px; border-radius: 14px;">
            <button onclick="window.sleepSchedulerState.mode = 'wake'; window.renderApp();"
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${mode === 'wake' ? '#818cf8' : 'transparent'}; color: ${mode === 'wake' ? '#000' : '#a1a1aa'};">
              ⏰ می‌خواهم فلان ساعت بیدار شوم
            </button>
            <button onclick="window.sleepSchedulerState.mode = 'bed'; window.renderApp();"
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${mode === 'bed' ? '#818cf8' : 'transparent'}; color: ${mode === 'bed' ? '#000' : '#a1a1aa'};">
              🛌 در این ساعت می‌خوابم
            </button>
          </div>

          <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 16px;">
            <span style="font-size: 0.82rem; font-weight: bold; color: #e4e4e7;">ساعت هدف:</span>
            <input type="number" min="0" max="23" value="${hour}" class="form-input" style="width: 70px; text-align: center; font-size: 1.1rem; font-weight: bold; font-family: 'Outfit';"
              onchange="window.sleepSchedulerState.hour = this.value; window.renderApp();" />
            <span style="font-weight: bold;">:</span>
            <input type="number" min="0" max="59" value="${minute}" class="form-input" style="width: 70px; text-align: center; font-size: 1.1rem; font-weight: bold; font-family: 'Outfit';"
              onchange="window.sleepSchedulerState.minute = this.value; window.renderApp();" />
          </div>

          <div style="font-size: 0.8rem; font-weight: bold; color: #cbd5e1; margin-bottom: 8px;">
            ${mode === 'wake' ? 'ساعات پیشنهادی برای به خواب رفتن:' : 'ساعات پیشنهادی برای بیدار شدن با نشاط:'}
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 14px;">
            ${results.map(r => `
              <div style="background: ${r.isOptimal ? 'rgba(129, 140, 248, 0.15)' : 'rgba(255,255,255,0.03)'}; border: 1.5px solid ${r.isOptimal ? '#818cf8' : 'rgba(255,255,255,0.08)'}; border-radius: 16px; padding: 12px; text-align: center;">
                <div style="font-size: 1.4rem; font-weight: 900; color: ${r.isOptimal ? '#818cf8' : '#ffffff'}; font-family: 'Outfit';">
                  ${toPersianDigits(r.timeStr)}
                </div>
                <div style="font-size: 0.72rem; color: #a1a1aa; font-weight: bold; margin-top: 2px;">
                  ${toPersianDigits(r.cycleCount)} چرخه (${toPersianDigits(r.hoursCount)} ساعت)
                </div>
                ${r.isOptimal ? `<div style="font-size: 0.65rem; color: #818cf8; font-weight: 900; margin-top: 4px;">🌟 زمان طلایی برای کنکوری‌ها</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #818cf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ثبت و بستن
        </button>
      </div>
    </div>
  `;
}

/**
 * 5. 📊 High School GPA Calculator Modal ("معدل نهایی")
 */
export const GPA_SUBJECTS_CONFIG = {
  '12': [
    { name: 'زیست‌شناسی / حسابان', coefficient: 4 },
    { name: 'فیزیک', coefficient: 3 },
    { name: 'شیمی', coefficient: 3 },
    { name: 'ادبیات فارسی', coefficient: 4 },
    { name: 'دین و زندگی', coefficient: 3 },
    { name: 'زبان انگلیسی', coefficient: 2 },
    { name: 'عربی، زبان قرآن', coefficient: 2 },
    { name: 'سلامت و بهداشت', coefficient: 1 }
  ],
  '11': [
    { name: 'درس اختصاصی ۱', coefficient: 4 },
    { name: 'درس اختصاصی ۲', coefficient: 3 },
    { name: 'درس اختصاصی ۳', coefficient: 3 },
    { name: 'ادبیات فارسی', coefficient: 4 },
    { name: 'دین و زندگی', coefficient: 3 },
    { name: 'زبان انگلیسی', coefficient: 2 },
    { name: 'عربی، زبان قرآن', coefficient: 2 },
    { name: 'تاریخ / زمین‌شناسی', coefficient: 1 }
  ],
  '10': [
    { name: 'درس اختصاصی ۱', coefficient: 4 },
    { name: 'درس اختصاصی ۲', coefficient: 3 },
    { name: 'درس اختصاصی ۳', coefficient: 3 },
    { name: 'ادبیات فارسی', coefficient: 4 },
    { name: 'دین و زندگی', coefficient: 3 },
    { name: 'زبان انگلیسی', coefficient: 2 },
    { name: 'عربی، زبان قرآن', coefficient: 2 },
    { name: 'آمادگی دفاعی', coefficient: 1 }
  ]
};

if (typeof window !== 'undefined') {
  window.handleGPAInputChange = function(subjectName, value) {
    if (!window.gpaCalcState) window.gpaCalcState = { grade: '12', scores: {} };
    if (!window.gpaCalcState.scores) window.gpaCalcState.scores = {};
    window.gpaCalcState.scores[subjectName] = value;
    window.updateGPACalculation();
  };

  window.handleGPAGradeChange = function(newGrade) {
    if (!window.gpaCalcState) window.gpaCalcState = { grade: '12', scores: {} };
    window.gpaCalcState.grade = newGrade;
    if (window.renderApp) window.renderApp();
  };

  window.updateGPACalculation = function() {
    const state = window.gpaCalcState || { grade: '12', scores: {} };
    const grade = state.grade || '12';
    const scores = state.scores || {};
    const rawSubjects = GPA_SUBJECTS_CONFIG[grade] || GPA_SUBJECTS_CONFIG['12'];

    let totalWeightedScore = 0;
    let totalCoefficients = 0;
    rawSubjects.forEach(sub => {
      const rawVal = scores[sub.name];
      const gradeVal = (rawVal !== undefined && rawVal !== null && rawVal !== '') ? parseFloat(rawVal) : 20.0;
      const g = isNaN(gradeVal) ? 0 : Math.max(0, Math.min(20, gradeVal));
      const coeff = parseFloat(sub.coefficient || sub.weight) || 1;
      totalWeightedScore += (g * coeff);
      totalCoefficients += coeff;
    });

    const finalGpa = totalCoefficients > 0 ? (totalWeightedScore / totalCoefficients) : 0;
    const finalGpaFormatted = Number(finalGpa.toFixed(2)).toFixed(2);

    let statusBadge = '#10b981';
    let statusText = 'عالی 🟢';
    if (finalGpa < 14) {
      statusBadge = '#ef4444';
      statusText = 'نیازمند جبران 🔴';
    } else if (finalGpa < 17) {
      statusBadge = '#fbbf24';
      statusText = 'مناسب 🟡';
    } else {
      statusBadge = '#10b981';
      statusText = 'عالی 🟢';
    }

    const resultEl = document.getElementById('gpa-result-display');
    if (resultEl) {
      resultEl.textContent = `${toPersianDigits(finalGpaFormatted)} از ۲۰`;
      resultEl.style.color = statusBadge;
    }
    const badgeEl = document.getElementById('gpa-status-badge');
    if (badgeEl) {
      badgeEl.textContent = `وضعیت: ${statusText}`;
      badgeEl.style.color = statusBadge;
    }
    const cardBox = document.getElementById('gpa-card-box');
    if (cardBox) {
      cardBox.style.borderColor = statusBadge;
    }
  };
}

export function renderGPACalculatorModal() {
  window.gpaCalcState = window.gpaCalcState || {
    grade: '12',
    scores: {}
  };
  const { grade } = window.gpaCalcState;
  const scores = window.gpaCalcState.scores = window.gpaCalcState.scores || {};

  const rawSubjects = GPA_SUBJECTS_CONFIG[grade] || GPA_SUBJECTS_CONFIG['12'];
  const subjects = rawSubjects.map(sub => {
    const rawVal = scores[sub.name];
    const gradeVal = (rawVal !== undefined && rawVal !== null && rawVal !== '') ? parseFloat(rawVal) : 20.0;
    return {
      name: sub.name,
      grade: isNaN(gradeVal) ? 0 : Math.max(0, Math.min(20, gradeVal)),
      coefficient: parseFloat(sub.coefficient || sub.weight) || 1
    };
  });

  // True Dynamic Weighted Average
  let totalWeightedScore = 0;
  let totalCoefficients = 0;
  subjects.forEach(sub => {
    const g = parseFloat(sub.grade) || 0;
    const coeff = parseFloat(sub.coefficient) || 1;
    totalWeightedScore += (g * coeff);
    totalCoefficients += coeff;
  });
  const finalGpa = totalCoefficients > 0 ? (totalWeightedScore / totalCoefficients) : 0;
  const finalGpaFormatted = Number(finalGpa.toFixed(2)).toFixed(2);

  // Status Badge: >= 17: "عالی 🟢", 14-17: "مناسب 🟡", < 14: "نیازمند جبران 🔴"
  let statusBadge = '#10b981';
  let statusText = 'عالی 🟢';
  if (finalGpa < 14) {
    statusBadge = '#ef4444';
    statusText = 'نیازمند جبران 🔴';
  } else if (finalGpa < 17) {
    statusBadge = '#fbbf24';
    statusText = 'مناسب 🟡';
  } else {
    statusBadge = '#10b981';
    statusText = 'عالی 🟢';
  }

  return `
    <div class="modal-overlay" id="modal-gpa-calc" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(52, 211, 153, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #34d399; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            📊 محاسبه دقیق معدل امتحانات نهایی
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: flex; gap: 8px; margin-bottom: 14px; background: rgba(255,255,255,0.04); padding: 4px; border-radius: 14px;">
            ${['12', '11', '10'].map(g => `
              <button onclick="window.handleGPAGradeChange('${g}')"
                style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${grade === g ? '#34d399' : 'transparent'}; color: ${grade === g ? '#000' : '#a1a1aa'};">
                پایه ${g === '12' ? 'دوازدهم' : (g === '11' ? 'یازدهم' : 'دهم')}
              </button>
            `).join('')}
          </div>

          <div style="max-height: 240px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; padding-left: 4px;">
            ${subjects.map(s => {
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 12px;">
                  <div>
                    <strong style="font-size: 0.85rem; color: #e4e4e7;">${s.name}</strong>
                    <span style="font-size: 0.7rem; color: #a1a1aa; margin-right: 6px;">(ضریب ${toPersianDigits(s.coefficient)})</span>
                  </div>
                  <input type="number" min="0" max="20" step="0.25" value="${s.grade}" class="form-input" style="width: 80px; text-align: center; font-weight: bold; font-family: 'Outfit';"
                    oninput="window.handleGPAInputChange('${s.name}', this.value)" />
                </div>
              `;
            }).join('')}
          </div>

          <div id="gpa-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${statusBadge}; border-radius: 20px; padding: 16px; text-align: center; transition: border-color 0.2s ease;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">معدل کل کتبی نهایی (وزنی)</div>
            <div id="gpa-result-display" style="font-size: 2.3rem; font-weight: 900; color: ${statusBadge}; font-family: 'Outfit'; margin: 2px 0; transition: color 0.2s ease;">
              ${toPersianDigits(finalGpaFormatted)} از ۲۰
            </div>
            <div id="gpa-status-badge" style="font-size: 0.8rem; font-weight: bold; color: ${statusBadge}; transition: color 0.2s ease;">
              وضعیت: ${statusText}
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #34d399; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ذخیره و بستن
        </button>
      </div>
    </div>
  `;
}

/**
 * 6. 📝 Exam Toolbox Planner Modal ("جعبه ابزار امتحانات")
 */
if (typeof window !== 'undefined') {
  window.handleExamBoxInput = function(key, value) {
    window.examBoxState = window.examBoxState || { days: 14, chapters: 21, rounds: 2 };
    window.examBoxState[key] = value;
    window.updateExamBoxCalculation();
  };

  window.updateExamBoxCalculation = function() {
    const st = window.examBoxState || { days: 14, chapters: 21, rounds: 2 };
    const d = Math.max(1, parseInt(st.days) || 1);
    const ch = Math.max(1, parseInt(st.chapters) || 1);
    const r = Math.max(1, parseInt(st.rounds) || 1);

    const totalStudyUnits = ch * r;
    const dailyPace = (totalStudyUnits / d).toFixed(1);

    const phase1Days = Math.max(1, Math.floor(d * 0.6));
    const phase2Days = Math.max(1, Math.floor(d * 0.25));
    const phase3Days = Math.max(1, d - phase1Days - phase2Days);

    const paceEl = document.getElementById('exam-box-pace-display');
    if (paceEl) paceEl.textContent = `${toPersianDigits(dailyPace)} فصل در روز`;

    const summaryEl = document.getElementById('exam-box-summary-display');
    if (summaryEl) summaryEl.textContent = `(مجموع ${toPersianDigits(totalStudyUnits)} واحد مطالعه در ${toPersianDigits(d)} روز)`;

    const p1El = document.getElementById('exam-box-phase1-display');
    if (p1El) p1El.textContent = `${toPersianDigits(phase1Days)} روز اول`;

    const p2El = document.getElementById('exam-box-phase2-display');
    if (p2El) p2El.textContent = `${toPersianDigits(phase2Days)} روز بعدی`;

    const p3El = document.getElementById('exam-box-phase3-display');
    if (p3El) p3El.textContent = `${toPersianDigits(phase3Days)} روز پایانی`;
  };
}

export function renderExamBoxModal() {
  window.examBoxState = window.examBoxState || { days: 14, chapters: 21, rounds: 2 };
  const { days, chapters, rounds } = window.examBoxState;

  const d = Math.max(1, parseInt(days) || 1);
  const ch = Math.max(1, parseInt(chapters) || 1);
  const r = Math.max(1, parseInt(rounds) || 1);

  const totalStudyUnits = ch * r;
  const dailyPace = (totalStudyUnits / d).toFixed(1);

  const phase1Days = Math.max(1, Math.floor(d * 0.6));
  const phase2Days = Math.max(1, Math.floor(d * 0.25));
  const phase3Days = Math.max(1, d - phase1Days - phase2Days);

  return `
    <div class="modal-overlay" id="modal-exam-box" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 500px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #38bdf8; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            📝 جعبه ابزار و برنامه‌ریز هوشمند امتحانات
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">روزهای باقی‌مانده</label>
              <input type="number" min="1" value="${d}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('days', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">تعداد فصل‌ها / مباحث</label>
              <input type="number" min="1" value="${ch}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('chapters', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">دفعات مرور (دور)</label>
              <input type="number" min="1" max="5" value="${r}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('rounds', this.value)" />
            </div>
          </div>

          <!-- Pace Output Box -->
          <div style="background: rgba(56, 189, 248, 0.12); border: 1.5px solid #38bdf8; border-radius: 20px; padding: 16px; text-align: center; margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">سرعت مطالعه پیشنهادی برای موفقیت کامل</div>
            <div id="exam-box-pace-display" style="font-size: 2.2rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit'; margin: 4px 0;">
              ${toPersianDigits(dailyPace)} فصل در روز
            </div>
            <div id="exam-box-summary-display" style="font-size: 0.74rem; color: #7dd3fc; font-weight: bold;">
              (مجموع ${toPersianDigits(totalStudyUnits)} واحد مطالعه در ${toPersianDigits(d)} روز)
            </div>
          </div>

          <!-- 3 Phase Timeline -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-weight: bold; color: #ffffff;">📅 فازبندی پیشنهادی زمان‌بندی:</div>
            <div style="display: flex; justify-content: space-between; color: #34d399;">
              <span>فاز ۱ (یادگیری عمیق و خلاصه‌نویسی):</span>
              <strong id="exam-box-phase1-display">${toPersianDigits(phase1Days)} روز اول</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #fbbf24;">
              <span>فاز ۲ (حل نمونه‌سوالات و تست‌زنی):</span>
              <strong id="exam-box-phase2-display">${toPersianDigits(phase2Days)} روز بعدی</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #c084fc;">
              <span>فاز ۳ (جمع‌بندی و تورق سریع شب امتحان):</span>
              <strong id="exam-box-phase3-display">${toPersianDigits(phase3Days)} روز پایانی</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #38bdf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
    </div>
  `;
}
