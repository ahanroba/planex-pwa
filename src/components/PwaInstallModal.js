export function dismissPwaModal(triggerInstallIfAvailable = false) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('pwa_prompt_dismissed', 'true');
    }
  } catch (e) {
    console.error('Error saving pwa_prompt_dismissed to localStorage:', e);
  }

  if (triggerInstallIfAvailable && typeof window !== 'undefined' && (window.deferredPrompt || window.deferredPwaPrompt)) {
    try {
      if (typeof window.triggerPwaInstall === 'function') {
        window.triggerPwaInstall();
      }
    } catch (_) {}
  }

  if (typeof window !== 'undefined') {
    if (window.appState) {
      window.appState.activeModal = null;
    }
    if (typeof window.closeActiveModal === 'function') {
      window.closeActiveModal();
    } else if (typeof window.renderApp === 'function') {
      window.renderApp();
    }
  }
}

if (typeof window !== 'undefined') {
  window.dismissPwaModal = dismissPwaModal;
}

export function renderPwaInstallModal() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('pwa_prompt_dismissed')) {
    if (typeof window !== 'undefined' && window.appState && window.appState.activeModal === 'pwaInstall') {
      window.appState.activeModal = null;
    }
    return '';
  }

  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const hasDeferredPrompt = typeof window !== 'undefined' && !!(window.deferredPrompt || window.deferredPwaPrompt);

  return `
    <div class="modal-overlay" id="modal-pwa-install" style="backdrop-filter: blur(16px); z-index: 10000;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ if(window.dismissPwaModal) window.dismissPwaModal(false); }">
      <div class="modal-card" style="max-width: 440px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 18px; padding: 24px;" onclick="event.stopPropagation();">
        
        <!-- Icon Banner -->
        <div style="margin-bottom: 16px; display: flex; justify-content: center;">
          <img src="./logo-transparent.png" alt="PlanEx Logo" style="width: 86px; height: 86px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); object-fit: contain; background: #1f2029; padding: 4px;" />
        </div>

        <h3 style="font-size: 1.25rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px;">
          📲 نصب مستقیم وب‌اپلیکیشن PlanEx
        </h3>

        <p style="font-size: 0.88rem; color: var(--text-secondary); font-weight: bold; margin-bottom: 12px;">
          نصب سریع روی صفحه اصلی موبایل و دسکتاپ (PWA)
        </p>

        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px; text-align: right; background: #1f2029; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06);">
          ✨ <b>مزایای نصب مستقیم:</b><br>
          • کارکرد آفلاین و بدون قطعی اینترنت<br>
          • بدون نیاز به دانلود از بازار یا گوگل‌پلی<br>
          • دسترسی پرسرعت و تمام صفحه با یک کلیک
        </p>

        ${isIOS && !hasDeferredPrompt ? `
          <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 14px; border-radius: 14px; font-size: 0.84rem; color: #e4e4e7; text-align: right; margin-bottom: 18px; line-height: 1.7;">
            <b>راهنمای نصب در آیفون / آیپد (iOS):</b><br>
            ۱. در مرورگر Safari، دکمه <b>Share (اشتراک‌گذاری ⎋)</b> را در پایین صفحه لمس کنید.<br>
            ۲. گزینه <b>Add to Home Screen (افزودن به صفحه اصلی ➕)</b> را انتخاب نمایید.<br>
            ۳. در گوشه بالا روی دکمه <b>Add</b> بزنید.
          </div>
        ` : ''}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button id="btn-trigger-pwa-install" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(${hasDeferredPrompt ? 'true' : 'false'}); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-primary" style="padding: 14px; font-size: 0.95rem; font-weight: bold; background: #7c3aed; box-shadow: none; cursor: pointer; border: none; border-radius: 14px; color: white;">
            📲 ${hasDeferredPrompt ? 'نصب مستقیم برنامه (یک کلیک)' : (isIOS ? 'متوجه شدم' : 'نصب مستقیم روی دستگاه')}
          </button>
          
          <button id="btn-close-pwa-modal" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(false); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-header-action" style="padding: 10px; font-size: 0.82rem; color: var(--text-muted); background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; cursor: pointer;">
            بعداً یادآوری کن ✕
          </button>
        </div>

      </div>
    </div>
  `;
}

