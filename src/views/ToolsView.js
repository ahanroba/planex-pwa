import { db } from '../db.js';
import { renderCategoriesView } from './CategoriesView.js';
import { personalSyncService } from '../services/personalSyncService.js';

// Global Tool Handlers & Accordion toggle handlers
if (typeof window !== 'undefined') {
// Robust opener — idempotent, survives import order vs ToolModals.js / main.js. Never just aliases openRankEstimator.
  // NOTE: ToolModals.js defines the full version (with append-fallback + close). Do NOT overwrite it — only define a fallback if missing.
  if (typeof window.openKonkurEstimatorModal !== 'function' || window.openKonkurEstimatorModal._isFallback) {
    var _fallbackKonkurOpener = function() {
      try {
        var modal = document.getElementById('modal-konkur-estimator') || document.getElementById('modal-rank-estimator');
        if (modal) { modal.style.display = 'flex'; modal.classList.add('active'); }
      } catch (_) {}
      try {
        if (window.appState) window.appState.activeModal = 'rankEstimator';
        else if (typeof window.openRankEstimator === 'function') window.openRankEstimator();
        if (typeof window.renderApp === 'function') window.renderApp();
      } catch (_) {}
      try {
        var m2 = document.getElementById('modal-rank-estimator') || document.getElementById('modal-konkur-estimator');
        if (m2) { m2.style.display = 'flex'; m2.classList.add('active'); }
      } catch (_) {}
    };
    _fallbackKonkurOpener._isFallback = true;
    // Only install fallback when no robust version exists yet; ToolModals.js will overwrite this with the full version.
    if (typeof window.openKonkurEstimatorModal !== 'function') window.openKonkurEstimatorModal = _fallbackKonkurOpener;
  }

  window.toggleCategoriesAccordion = function() {
    window.isCategoriesAccordionOpen = !window.isCategoriesAccordionOpen;
    if (window.renderApp) window.renderApp();
  };

  window.toggleLeitnerAccordion = function() {
    window.isLeitnerAccordionOpen = !window.isLeitnerAccordionOpen;
    const container = document.getElementById('leitner-cards-container');
    if (container) {
      container.style.display = window.isLeitnerAccordionOpen ? 'block' : 'none';
    }
    if (window.renderApp) window.renderApp();
  };

  window.closeLeitnerAccordion = function() {
    window.isLeitnerAccordionOpen = false;
    const container = document.getElementById('leitner-cards-container');
    if (container) {
      container.style.display = 'none';
    }
    if (window.renderApp) window.renderApp();
  };

  window.openLeitnerAccordion = function() {
    window.isLeitnerAccordionOpen = true;
    const container = document.getElementById('leitner-cards-container');
    if (container) {
      container.style.display = 'block';
    }
    if (window.renderApp) window.renderApp();
    setTimeout(() => {
      document.getElementById('section-leitner-box')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  window.toggleAddFlashcardForm = function(forceState) {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.showAddForm = (typeof forceState === 'boolean') ? forceState : !window.leitnerState.showAddForm;
    if (window.renderApp) window.renderApp();
  };

  window.saveManualFlashcard = function() {
    const deckInput = document.getElementById('input-new-fc-deck');
    const qInput = document.getElementById('input-new-fc-question');
    const aInput = document.getElementById('input-new-fc-answer');
    
    const deck = deckInput ? deckInput.value.trim() : '';
    const q = qInput ? qInput.value.trim() : '';
    const a = aInput ? aInput.value.trim() : '';

    if (!q || !a) {
      if (window.showToast) window.showToast('لطفاً سؤال و پاسخ را وارد کنید', 'error');
      else alert('لطفاً سؤال و پاسخ را وارد کنید');
      return;
    }

    db.addFlashcard(q, a, deck || 'عمومی');
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.showAddForm = false;
    if (window.showToast) window.showToast('فلش‌کارت جدید اضافه شد ✨', 'success');
    if (window.renderApp) window.renderApp();
  };

  window.flipLeitnerCard = function() {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.isFlipped = !window.leitnerState.isFlipped;
    if (window.renderApp) window.renderApp();
  };

  window.prevLeitnerCard = function() {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.activeIndex = Math.max(0, window.leitnerState.activeIndex - 1);
    window.leitnerState.isFlipped = false;
    if (window.renderApp) window.renderApp();
  };

  window.nextLeitnerCard = function() {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    const cards = db.getFlashcards() || [];
    let filteredCards = [...cards];
    if (window.leitnerState.filterBox === 'due') {
      const now = Date.now();
      filteredCards = filteredCards.filter(c => !c.nextReviewDate || c.nextReviewDate <= now);
    } else if (['1','2','3','4','5'].includes(String(window.leitnerState.filterBox))) {
      filteredCards = filteredCards.filter(c => String(c.box || 1) === String(window.leitnerState.filterBox));
    }
    const total = filteredCards.length;
    if (total > 0) {
      window.leitnerState.activeIndex = (window.leitnerState.activeIndex + 1) % total;
    }
    window.leitnerState.isFlipped = false;
    if (window.renderApp) window.renderApp();
  };

  window.reviewLeitnerCard = function(id, isCorrect) {
    db.reviewFlashcard(id, isCorrect);
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.isFlipped = false;
    const cards = db.getFlashcards() || [];
    let reviewQueue = cards;
    if (window.leitnerState.filterBox === 'due') {
      const now = Date.now();
      reviewQueue = reviewQueue.filter(c => !c.nextReviewDate || c.nextReviewDate <= now);
    } else if (['1','2','3','4','5'].includes(String(window.leitnerState.filterBox))) {
      reviewQueue = reviewQueue.filter(c => String(c.box || 1) === String(window.leitnerState.filterBox));
    }
    if (window.leitnerState.activeIndex >= reviewQueue.length) {
      window.leitnerState.activeIndex = Math.max(0, reviewQueue.length - 1);
    }
    if (window.showToast) {
      window.showToast(isCorrect ? 'آفرین! کارت به خانه بعدی منتقل شد ⬆️' : 'کارت به خانه اول برگشت 🔄', isCorrect ? 'success' : 'info');
    }
    if (window.renderApp) window.renderApp();
  };

  window.filterLeitnerBox = function(box) {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.filterBox = (window.leitnerState.filterBox === String(box)) ? 'all' : String(box);
    window.leitnerState.activeIndex = 0;
    window.leitnerState.isFlipped = false;
    if (window.renderApp) window.renderApp();
  };

  window.filterLeitnerTab = function(filter) {
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.filterBox = filter;
    window.leitnerState.activeIndex = 0;
    window.leitnerState.isFlipped = false;
    if (window.renderApp) window.renderApp();
  };

  window.deleteLeitnerCard = function(id) {
    if (confirm && !confirm('آیا از حذف این فلش‌کارت مطمئن هستید؟')) return;
    db.deleteFlashcard(id);
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    const cards = db.getFlashcards() || [];
    if (window.leitnerState.activeIndex >= cards.length) {
      window.leitnerState.activeIndex = Math.max(0, cards.length - 1);
    }
    if (window.showToast) window.showToast('فلش‌کارت حذف شد 🗑️', 'info');
    if (window.renderApp) window.renderApp();
  };

  window.seedDefaultFlashcards = function() {
    localStorage.removeItem('planex_flashcards');
    db.getFlashcards();
    if (!window.leitnerState) { window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' }; }
    window.leitnerState.activeIndex = 0;
    window.leitnerState.isFlipped = false;
    if (window.showToast) window.showToast('فلش‌کارت‌های نمونه بارگذاری شدند 📥', 'success');
    if (window.renderApp) window.renderApp();
  };
}

export function renderToolsView() {
  const settings = db.getThemeSettings() || {};
  const categories = db.getCategories() || [];
  const isAccordionOpen = Boolean(window.isCategoriesAccordionOpen);

  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const toPersian = (num) => String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const tools = [
    { icon: '🧠', title: 'فلش‌کارت و لایتنر', desc: 'تکرار فاصله‌دار هوشمند با ۵ خانه لایتنر', action: "window.openLeitnerAccordion()", color: '#a78bfa' },
    { icon: '📝', title: 'جعبه ابزار امتحانات', desc: 'برنامه‌ریزی، تخمین فصول و مرور امتحانات', action: "if(window.openExamBox) window.openExamBox(); else { window.appState.activeModal = 'examBox'; window.renderApp(); }", color: '#38bdf8' },
    { icon: '⏱️', title: 'تایمر مطالعه', desc: 'کرنومتر، پومودورو و ثبت خودکار زمان', action: "if(window.switchTab) window.switchTab(0)", color: '#f97316' },
    { icon: '📊', title: 'معدل نهایی', desc: 'محاسبه دقیق معدل کتبی، ترم و کل', action: "if(window.openGPACalculator) window.openGPACalculator(); else { window.appState.activeModal = 'gpaCalc'; window.renderApp(); }", color: '#34d399' },
    { icon: '🌙', title: 'تنظیم خواب', desc: 'برنامه‌ریزی ساعات خواب و بیداری سالم', action: "if(window.openSleepScheduler) window.openSleepScheduler(); else { window.appState.activeModal = 'sleepScheduler'; window.renderApp(); }", color: '#818cf8' },
    { icon: '🎯', title: 'محاسبه درصد', desc: 'محاسبه دقیق درصد از تست‌های صحیح و غلط', action: "if(window.openPercentCalculator) window.openPercentCalculator(); else { window.appState.activeModal = 'percentCalc'; window.renderApp(); }", color: '#fb923c' },
    { icon: '🏆', title: 'تخمین رتبه', desc: 'تخمین رتبه کنکور و تراز بر اساس درصدها', action: "window.openKonkurEstimatorModal && window.openKonkurEstimatorModal()", color: '#fbbf24' },
    { icon: '📅', title: 'تقویم مطالعاتی', desc: 'ماتریس ۲۴ ساعته مدیریت زمان و پارت‌ها', action: "if(window.switchTab) window.switchTab(1)", color: '#2dd4bf' }
  ];

  return `
    <div class="main-container" style="padding-bottom: 90px; direction: rtl;">
      <div style="margin-bottom: 14px;">
        <h2 style="font-size: 1.05rem; font-weight: 800; color: #f8fafc; margin: 0 0 2px 0;">ابزارک‌ها</h2>
        <p style="font-size: 0.72rem; color: #8e8e9c; margin: 0;">دسترسی سریع به تمام ابزارهای کاربردی مطالعه</p>
      </div>

      <!-- 🛠️ Tools Grid (2 columns) -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
        ${tools.map(t => {
          const isKonkurCard = t.title && t.title.includes('تخمین رتبه');
          const extraAttrs = isKonkurCard ? ' id="card-konkur-estimator" data-action="open-konkur-estimator"' : '';
          return `
          <div${extraAttrs} onclick="${t.action}" style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 16px 14px; cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; display: flex; flex-direction: column; justify-content: space-between; min-height: 140px; box-sizing: border-box;" onmouseenter="this.style.transform='translateY(-2px)'; this.style.borderColor='rgba(255,255,255,0.12)'" onmouseleave="this.style.transform=''; this.style.borderColor='rgba(255,255,255,0.05)'">
            <div>
              <div style="width: 40px; height: 40px; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 10px;">
                ${t.icon}
              </div>
              <div style="font-size: 13px; font-weight: 700; color: #ffffff; margin-bottom: 4px;">${t.title}</div>
              <div style="font-size: 11px; color: #8e8e9c; line-height: 1.45;">${t.desc}</div>
            </div>
            <div style="font-size: 11px; font-weight: 600; color: ${t.color}; display: flex; align-items: center; gap: 3px; margin-top: 10px;">
              <span>استفاده از ابزارک</span>
              <span style="font-size: 12px; font-weight: 700;">‹</span>
            </div>
          </div>
        `}).join('')}
      </div>

      <!-- 🧠 Collapsible Accordion Panel for Leitner Box -->
      ${renderLeitnerBoxSection()}

      <!-- 🔄 Cloud Sync Box (Kept intact) -->
      ${(function() {
        let authUser = null;
        try {
          authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
        } catch(e) {}
        
        const profile = db.getUserProfile() || {};
        let userPhone = authUser?.phone || authUser?.phone_number || profile.phone || '';
        
        if (userPhone && userPhone.startsWith('98')) {
          userPhone = '0' + userPhone.slice(2);
        } else if (userPhone && userPhone.startsWith('+98')) {
          userPhone = '0' + userPhone.slice(3);
        } else if (userPhone && userPhone.length === 10 && userPhone.startsWith('9')) {
          userPhone = '0' + userPhone;
        }

        if (typeof window !== 'undefined' && !window.handleForceCloudSync) {
          window.handleForceCloudSync = async function() {
            const btn = document.getElementById('btn-force-cloud-sync');
            if (btn) btn.innerHTML = 'در حال همگام‌سازی...';
            try {
              if (window.personalSyncService && typeof window.personalSyncService.pushToCloud === 'function') {
                await window.personalSyncService.pushToCloud();
              }
              if (window.showToast) {
                window.showToast('تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅', 'success');
              } else {
                alert('تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅');
              }
            } catch (err) {
              console.error(err);
              if (window.showToast) window.showToast('خطا در همگام‌سازی', 'error');
            } finally {
              if (btn) btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> همگام‌سازی فوری (Force Sync)';
            }
          };
        }

        if (userPhone) {
          return `
            <div style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.03); border-radius: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🔄</div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.85rem; font-weight: 800; color: #10b981; display: flex; align-items: center; gap: 6px;">
                      همگام‌سازی ابری و چنددستگاهی
                      <span style="font-size: 0.58rem; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(16, 185, 129, 0.3);">متصل و همگام با سرور ابری</span>
                    </h3>
                    <p style="margin: 3px 0 0 0; font-size: 0.72rem; color: #8e8e9c;">شماره متصل: <strong style="color: #e4e4e7; font-family: 'Outfit', monospace; letter-spacing: 1px;">${userPhone}</strong></p>
                  </div>
                </div>
                <button id="btn-force-cloud-sync" onclick="window.handleForceCloudSync()" style="background: #10b981; color: #000; padding: 7px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: transform 0.15s ease;" onmouseenter="this.style.transform='scale(1.03)'" onmouseleave="this.style.transform='scale(1)'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                  همگام‌سازی فوری (Force Sync)
                </button>
              </div>
            </div>
          `;
        } else {
          return `
            <div style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(234, 179, 8, 0.2); background: rgba(234, 179, 8, 0.03); border-radius: 20px;">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">🔄</div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.85rem; font-weight: 800; color: #facc15; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                      همگام‌سازی ابری و چنددستگاهی
                      <span style="font-size: 0.58rem; background: rgba(234, 179, 8, 0.15); color: #facc15; padding: 2px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(234, 179, 8, 0.3);">حالت آفلاین / محلی</span>
                    </h3>
                    <p style="margin: 4px 0 0 0; font-size: 0.72rem; color: #a1a1aa; line-height: 1.6;">برای انتقال و ذخیره دائمی پارت‌های مطالعاتی و گروه‌ها در سایر دستگاه‌ها، حساب خود را از طریق ربات تلگرام متصل کنید.</p>
                  </div>
                </div>
                <button onclick="window.open('https://t.me/planex_sync_bot?start=login', '_blank')" style="background: #3b82f6; color: #fff; padding: 10px 16px; border-radius: 12px; font-size: 0.8rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; transition: background 0.15s ease;" onmouseenter="this.style.background='#2563eb'" onmouseleave="this.style.background='#3b82f6'">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  اتصال به ربات تلگرام (@planex_sync_bot)
                </button>
              </div>
            </div>
          `;
        }
      })()}

      <!-- 📚 Collapsible Accordion Panel for "مدیریت فعالیت‌ها و دروس" (Default CLOSED) -->
      <div style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px;">
        <div onclick="window.toggleCategoriesAccordion()" 
             style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(124, 58, 237, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #c4b5fd;">
              📚
            </div>
            <div>
              <h3 style="margin: 0; font-size: 0.88rem; font-weight: 800; color: #f8fafc; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span>مدیریت فعالیت‌ها و دروس</span>
                <span style="font-size: 0.65rem; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; padding: 2px 8px; border-radius: 8px; font-weight: bold; border: 1px solid rgba(124, 58, 237, 0.35);">
                  ${toPersian(categories.length)} درس / فعالیت
                </span>
              </h3>
              <p style="margin: 3px 0 0 0; font-size: 0.7rem; color: #8e8e9c;">افزودن، ویرایش و تفکیک فعالیت‌های علمی و غیرعلمی</p>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 6px 12px; border-radius: 10px;">
            <span style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd;">
              ${isAccordionOpen ? 'بستن 🔼' : 'مشاهده و مدیریت 🔽'}
            </span>
          </div>
        </div>

        ${isAccordionOpen ? `
          <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.06); animation: fadeIn 0.25s ease;">
            ${renderCategoriesView(true)}
          </div>
        ` : ''}
      </div>

      <div style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">💎</div>
          <div>
            <h3 style="margin: 0; font-size: 0.82rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 6px;">
              <span>پلن‌های مشاوره اختصاصی</span>
              <span style="font-size: 0.58rem; background: rgba(253,224,71,0.1); color: #fde047; padding: 1px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(253,224,71,0.2);">VIP</span>
            </h3>
            <p style="margin: 2px 0 0 0; font-size: 0.68rem; color: #8e8e9c;">مشاوره خصوصی با رتبه‌های برتر</p>
          </div>
        </div>
        <button onclick="if(window.openConsultationModal) window.openConsultationModal(); else if(window.appState){ window.appState.activeModal = 'consultation'; window.renderApp(); }" style="padding: 7px 14px; font-size: 0.72rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 10px; cursor: pointer; color: white;">مشاهده ✨</button>
      </div>

      <div style="padding: 14px 16px; background: #16171d; border: 1px solid rgba(255,255,255,0.05); text-align: center; border-radius: 20px;">
        <h3 style="font-size: 0.82rem; font-weight: 700; color: #38bdf8; margin: 0 0 4px 0;">📢 کانال پشتیبانی (@medicalaa)</h3>
        <p style="font-size: 0.68rem; color: #8e8e9c; margin-bottom: 10px;">دریافت آخرین آپدیت‌ها و آزمون‌ها</p>
        <a href="https://t.me/medicalaa" target="_blank" style="display: inline-block; padding: 6px 18px; font-size: 0.72rem; text-decoration: none; background: rgba(255,255,255,0.04); border: 1px solid rgba(56,189,248,0.3); color: #38bdf8; border-radius: 10px; font-weight: 700;">عضویت در تلگرام</a>
      </div>
    </div>
  `;
}

// Leitner Box Section Renderer
function renderLeitnerBoxSection() {
  const cards = db.getFlashcards() || [];
  const stats = db.getLeitnerStats() || { total: 0, due: 0, mastered: 0, boxes: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } };
  const isAccordionOpen = Boolean(window.isLeitnerAccordionOpen);
  const toPersian = (num) => String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  let lState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false, showManagerList: false, searchQuery: '' };
  if (typeof window !== 'undefined') { if (!window.leitnerState) { window.leitnerState = lState; } lState = window.leitnerState; }
  let filteredCards = [...cards];
  if (lState.filterBox === 'due') { const now = Date.now(); filteredCards = filteredCards.filter(c => !c.nextReviewDate || c.nextReviewDate <= now); }
  else if (['1','2','3','4','5'].includes(String(lState.filterBox))) { filteredCards = filteredCards.filter(c => String(c.box || 1) === String(lState.filterBox)); }
  if (lState.searchQuery) { const q = lState.searchQuery.toLowerCase(); filteredCards = filteredCards.filter(c => (c.question && c.question.toLowerCase().includes(q)) || (c.answer && c.answer.toLowerCase().includes(q)) || (c.deck && c.deck.toLowerCase().includes(q))); }
  const reviewQueue = (lState.filterBox === 'due' ? filteredCards : cards);
  if (lState.activeIndex >= reviewQueue.length && reviewQueue.length > 0) { lState.activeIndex = 0; }
  const activeCard = reviewQueue.length > 0 ? reviewQueue[lState.activeIndex] : null;
  const boxColors = { 1: '#f87171', 2: '#fbbf24', 3: '#38bdf8', 4: '#a78bfa', 5: '#34d399' };
  const boxIntervalLabels = { 1: '۱ روز', 2: '۲ روز', 3: '۴ روز', 4: '۸ روز', 5: '۱۶ روز' };

  return `
    <div id="section-leitner-box" style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.06); background: #16171d; border-radius: 20px;">
      
      <!-- Accordion Header Bar -->
      <div onclick="window.toggleLeitnerAccordion()" 
           style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(167, 139, 250, 0.15); border: 1px solid rgba(167, 139, 250, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #a78bfa;">
            🧠
          </div>
          <div>
            <h3 style="margin: 0; font-size: 0.88rem; font-weight: 800; color: #f8fafc; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span>جعبه لایتنر هوشمند</span>
              <span style="font-size: 0.65rem; background: rgba(167, 139, 250, 0.2); color: #a78bfa; padding: 2px 8px; border-radius: 8px; font-weight: bold; border: 1px solid rgba(167, 139, 250, 0.35);">
                ${toPersian(stats.total)} کارت (${toPersian(stats.due)} آماده مرور 🔥)
              </span>
            </h3>
            <p style="margin: 3px 0 0 0; font-size: 0.7rem; color: #8e8e9c;">مرور فاصله‌دار ابینگهاوس در ۵ خانه هوشمند</p>
            <a href="#flashcards" onclick="event.stopPropagation()" style="display: inline-block; margin-top: 4px; font-size: 0.68rem; color: #a78bfa; text-decoration: none;">صفحه کامل فلش‌کارت‌ها ↗</a>
          </div>
        </div>

        <button id="btn-toggle-leitner-accordion" type="button" onclick="event.stopPropagation(); window.toggleLeitnerAccordion();" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 6px 12px; border-radius: 10px; cursor: pointer; color: #a78bfa;">
          <span style="font-size: 0.74rem; font-weight: 800; color: #a78bfa;">
            ${isAccordionOpen ? 'بستن ⏏' : 'مشاهده و مرور 🔽'}
          </span>
        </button>
      </div>

      <!-- Collapsible Body (Flashcards Container) -->
      <div id="leitner-cards-container" style="display: ${isAccordionOpen ? 'block' : 'none'}; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.06); animation: fadeIn 0.25s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <div style="font-size: 0.75rem; color: #a1a1aa; font-weight: 700;">مدیریت فلش‌کارت‌ها و مرور روزانه:</div>
            <div style="display: flex; gap: 6px;">
              <button id="btn-toggle-add-flashcard-form" onclick="window.toggleAddFlashcardForm()" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #e4e4e7; padding: 5px 10px; border-radius: 10px; font-size: 0.7rem; font-weight: 600; cursor: pointer;">➕ افزودن</button>

            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 12px;">
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #8e8e9c;">🗂️ کل</div><div style="font-size: 0.95rem; font-weight: 800; color: #fff; font-family: 'Outfit';">${stats.total}</div></div>
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #fbbf24;">🔥 آماده</div><div style="font-size: 0.95rem; font-weight: 800; color: #fbbf24; font-family: 'Outfit';">${stats.due}</div></div>
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #34d399;">🏆 تثبیت</div><div style="font-size: 0.95rem; font-weight: 800; color: #34d399; font-family: 'Outfit';">${stats.mastered}</div></div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border-radius: 14px; padding: 8px 10px; margin-bottom: 14px;">
            <div style="font-size: 0.66rem; font-weight: 600; color: #a1a1aa; margin-bottom: 6px;">📦 خانه‌های لایتنر:</div>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px;">
              ${[1,2,3,4,5].map(b => `<div class="btn-filter-leitner-box ${String(lState.filterBox) === String(b) ? 'active' : ''}" data-box="${b}" onclick="window.filterLeitnerBox('${b}')" style="background: ${String(lState.filterBox) === String(b) ? 'rgba(124,58,237,0.15)' : 'transparent'}; border: 1px solid ${String(lState.filterBox) === String(b) ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.04)'}; border-radius: 10px; padding: 6px 4px; text-align: center; cursor: pointer;"><div style="font-size: 0.6rem; font-weight: 700; color: ${boxColors[b]};">خانه ${b}</div><div style="font-size: 0.88rem; font-weight: 800; color: white; font-family: 'Outfit';">${stats.boxes[b] || 0}</div><div style="font-size: 0.55rem; color: #71717a;">${boxIntervalLabels[b]}</div></div>`).join('')}
            </div>
          </div>
          <div id="form-add-flashcard-container" style="display: ${lState.showAddForm ? 'block' : 'none'}; background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); border-radius: 16px; padding: 12px; margin-bottom: 14px;">
            <div style="font-weight: 700; font-size: 0.78rem; color: #c4b5fd; margin-bottom: 8px;">➕ افزودن فلش‌کارت جدید</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">موضوع:</label><input type="text" id="input-new-fc-deck" placeholder="مثال: زیست‌شناسی..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem;" /></div>
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">❓ سؤال:</label><textarea id="input-new-fc-question" rows="2" placeholder="صورت سؤال..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem; resize: vertical;"></textarea></div>
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">💡 پاسخ:</label><textarea id="input-new-fc-answer" rows="2" placeholder="پاسخ..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem; resize: vertical;"></textarea></div>
              <div style="display: flex; gap: 6px; justify-content: flex-end;"><button id="btn-cancel-add-flashcard" onclick="window.toggleAddFlashcardForm(false)" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #a1a1aa; padding: 5px 12px; border-radius: 8px; font-size: 0.7rem; cursor: pointer;">انصراف</button><button id="btn-save-manual-flashcard" onclick="window.saveManualFlashcard()" style="background: #7c3aed; border: none; color: white; padding: 5px 14px; border-radius: 8px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">ذخیره ✨</button></div>
            </div>
          </div>
          <div style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-weight: 700; font-size: 0.8rem; color: #f1f5f9; display: flex; align-items: center; gap: 6px;"><span>🎯 مرور:</span>${reviewQueue.length > 0 ? `<span style="font-size: 0.64rem; color: #c4b5fd; background: rgba(255,255,255,0.04); padding: 1px 6px; border-radius: 6px; font-family: 'Outfit'; font-weight: 700;">${lState.activeIndex + 1} / ${reviewQueue.length}</span>` : ''}</div>
              ${reviewQueue.length > 1 ? `<div style="display: flex; gap: 4px;"><button id="btn-prev-leitner-card" onclick="window.prevLeitnerCard()" style="padding: 3px 8px; font-size: 0.68rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; color: #a1a1aa; cursor: pointer;">‹</button><button id="btn-next-leitner-card" onclick="window.nextLeitnerCard()" style="padding: 3px 8px; font-size: 0.68rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; color: #a1a1aa; cursor: pointer;">›</button></div>` : ''}
            </div>
            ${activeCard ? `<div id="leitner-active-card" class="leitner-card-flip ${lState.isFlipped ? 'flipped' : ''}" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 20px 16px; min-height: 170px; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;"><span style="font-size: 0.64rem; color: #c4b5fd; background: rgba(255,255,255,0.04); padding: 2px 8px; border-radius: 8px; font-weight: 700;">📚 ${activeCard.deck || 'عمومی'}</span><span style="font-size: 0.64rem; color: ${boxColors[activeCard.box || 1]}; background: rgba(255,255,255,0.04); padding: 2px 8px; border-radius: 8px; font-weight: 700;">📦 خانه ${activeCard.box || 1}</span></div>
              <div style="margin-bottom: 12px; text-align: center; padding: 8px 4px;"><div style="font-size: 0.64rem; color: #8e8e9c; margin-bottom: 4px;">❓</div><div style="font-size: 0.92rem; font-weight: 700; color: #f8fafc; line-height: 1.6;">${activeCard.question}</div></div>
              <div id="leitner-answer-container" style="display: ${lState.isFlipped ? 'block' : 'none'}; background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px 12px; margin-bottom: 12px; text-align: center;"><div style="font-size: 0.64rem; color: #34d399; font-weight: 700; margin-bottom: 3px;">💡</div><div style="font-size: 0.84rem; color: #e2e8f0; line-height: 1.5;">${activeCard.answer}</div></div>
              <div style="display: flex; gap: 6px; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <button id="btn-flip-active-card" onclick="window.flipLeitnerCard()" style="flex: 1; min-width: 120px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #e4e4e7; padding: 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">${lState.isFlipped ? '🙈 پنهان' : '👁️ مشاهده پاسخ'}</button>
                ${lState.isFlipped ? `<div style="display: flex; gap: 6px; flex: 2; min-width: 200px;"><button class="btn-leitner-review-action" data-id="${activeCard.id}" data-correct="false" onclick="window.reviewLeitnerCard('${activeCard.id}', false)" style="flex: 1; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.3); color: #f87171; padding: 8px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">❌ مرور</button><button class="btn-leitner-review-action" data-id="${activeCard.id}" data-correct="true" onclick="window.reviewLeitnerCard('${activeCard.id}', true)" style="flex: 1; background: #7c3aed; border: none; color: white; padding: 8px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">✅ بلد ⬆️</button></div>` : ''}
              </div>
            </div>` : `<div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.06); border-radius: 16px; padding: 22px 16px; text-align: center;"><div style="font-size: 1.5rem; margin-bottom: 4px;">🎉</div><div style="font-size: 0.82rem; font-weight: 700; color: #fff; margin-bottom: 2px;">هیچ کارتی وجود ندارد</div><p style="font-size: 0.68rem; color: #8e8e9c; margin-bottom: 10px;">کارت جدید بسازید یا نمونه‌ها را بارگذاری کنید.</p><button id="btn-seed-default-flashcards" onclick="window.seedDefaultFlashcards()" style="background: #7c3aed; border: none; color: white; padding: 6px 14px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">📥 بارگذاری</button></div>`}
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.04); padding-top: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 700; font-size: 0.78rem; color: #cbd5e1;">📚 کارت‌ها (${filteredCards.length}):</div>
              <div style="display: flex; gap: 4px;">
                <button class="btn-filter-leitner-tab ${lState.filterBox === 'all' ? 'active' : ''}" data-filter="all" onclick="window.filterLeitnerTab('all')" style="padding: 3px 8px; font-size: 0.64rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: ${lState.filterBox === 'all' ? '#7c3aed' : 'rgba(255,255,255,0.04)'}; color: ${lState.filterBox === 'all' ? '#fff' : '#8e8e9c'}; font-weight: 600; cursor: pointer;">همه (${cards.length})</button>
                <button class="btn-filter-leitner-tab ${lState.filterBox === 'due' ? 'active' : ''}" data-filter="due" onclick="window.filterLeitnerTab('due')" style="padding: 3px 8px; font-size: 0.64rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: ${lState.filterBox === 'due' ? '#7c3aed' : 'rgba(255,255,255,0.04)'}; color: ${lState.filterBox === 'due' ? '#fff' : '#fbbf24'}; font-weight: 600; cursor: pointer;">🔥 (${stats.due})</button>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; max-height: 280px; overflow-y: auto;">
              ${filteredCards.map((c) => `<div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 8px 10px; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;"><div style="flex: 1; overflow: hidden;"><div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;"><span style="font-size: 0.58rem; color: ${boxColors[c.box || 1]}; background: rgba(255,255,255,0.04); padding: 1px 5px; border-radius: 4px; font-weight: 700;">خانه ${c.box || 1}</span><span style="font-size: 0.62rem; color: #8e8e9c;">${c.deck || 'عمومی'}</span></div><div style="font-size: 0.74rem; font-weight: 700; color: #fff; margin-bottom: 2px; line-height: 1.3;">${c.question}</div><div style="font-size: 0.68rem; color: #a1a1aa; line-height: 1.4; background: rgba(255,255,255,0.02); padding: 4px 8px; border-radius: 8px; margin-top: 2px;">💡 ${c.answer}</div></div><button class="btn-delete-flashcard" data-id="${c.id}" onclick="window.deleteLeitnerCard('${c.id}')" title="حذف" style="background: none; border: none; color: #ef4444; font-size: 0.8rem; cursor: pointer; padding: 2px; opacity: 0.7;">🗑️</button></div>`).join('')}
            </div>
          </div>
          <div style="margin-top: 14px; text-align: center;">
            <button type="button" id="btn-close-leitner" data-action="toggle-leitner" onclick="event.stopPropagation(); if(window.closeLeitnerAccordion) window.closeLeitnerAccordion(); else window.toggleLeitnerAccordion();" style="background: rgba(167, 139, 250, 0.1); border: 1px solid rgba(167, 139, 250, 0.25); color: #c4b5fd; padding: 6px 18px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">
              بستن ⏏
            </button>
          </div>
        </div>

    </div>
  `;
}
