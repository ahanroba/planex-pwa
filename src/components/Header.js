import { isPlaceholderName } from '../db.js';

const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

function getLivePresenceCount() {
  const hour = new Date().getHours();
  let base = 350;
  if (hour >= 6 && hour < 12) base = 480;
  else if (hour >= 12 && hour < 18) base = 520;
  else if (hour >= 18 && hour < 23) base = 610;
  else if (hour >= 23 || hour < 2) base = 280;
  else base = 120; // 02:00 - 06:00 AM

  const jitter = Math.floor(Math.sin(Date.now() / 8000) * 18) + (Date.now() % 7);
  return base + jitter;
}

export function getEffectiveHeaderName() {
  const storedNickname = (typeof localStorage !== 'undefined' ? (
    localStorage.getItem('planex_user_nickname') ||
    localStorage.getItem('planex_nickname') ||
    localStorage.getItem('planex_leaderboard_nickname') || ''
  ) : '');
  if (storedNickname && !isPlaceholderName(storedNickname)) return storedNickname.trim();

  let userProfile = null;
  try {
    userProfile = JSON.parse(localStorage.getItem('planex_user_profile') || localStorage.getItem('planex_profile') || 'null');
  } catch(e) {}

  if (userProfile?.nickname && !isPlaceholderName(userProfile.nickname)) return userProfile.nickname.trim();
  if (userProfile?.name && !isPlaceholderName(userProfile.name)) return userProfile.name.trim();

  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
  } catch(e) {}

  if (authUser?.full_name && !isPlaceholderName(authUser.full_name)) return authUser.full_name.trim();
  if (authUser?.name && !isPlaceholderName(authUser.name)) return authUser.name.trim();
  if (authUser?.first_name && !isPlaceholderName(authUser.first_name)) return authUser.first_name.trim();

  return '';
}

// Direct DOM patching for header name & avatar — guarantees instant UI update
// even if renderApp() hasn't re-run yet or reads stale cached data.
function updateHeaderDOM() {
  try {
    let authUser = null;
    try { authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null'); } catch(_){}
    let userProfile = null;
    try { userProfile = JSON.parse(localStorage.getItem('planex_user_profile') || 'null'); } catch(_){}

    const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
    const avatar = storedAvatar || userProfile?.avatar || userProfile?.avatar_url || userProfile?.photo || userProfile?.photoUrl || authUser?.avatar_url || authUser?.photo_url || '';

    const name = getEffectiveHeaderName();

    const hasUser = Boolean(name || avatar || (authUser && (authUser.id || authUser.telegram_id || authUser.phone || authUser.phone_number)));
    const displayName = name || (hasUser ? 'کاربر' : 'ورود');

    // Patch the header button's display name
    const headerBtn = document.getElementById('btn-header-user-account');
    if (headerBtn) {
      const nameSpan = headerBtn.querySelector('span:last-child');
      if (nameSpan && nameSpan.textContent !== displayName) nameSpan.textContent = displayName;

      // Patch avatar image or swap to image if previously showing default icon
      const avatarImg = headerBtn.querySelector('img');
      if (avatar) {
        if (avatarImg) {
          if (avatarImg.src !== avatar) avatarImg.src = avatar;
        } else {
          // Replace the 👤 placeholder span with an actual img element
          const placeholder = headerBtn.querySelector('span:first-child');
          if (placeholder && placeholder.textContent.includes('👤')) {
            const img = document.createElement('img');
            img.src = avatar;
            img.style.cssText = 'width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);';
            img.onerror = function() { this.onerror = null; this.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=planex'; };
            placeholder.replaceWith(img);
          }
        }
      }

      // Update border color based on login state
      headerBtn.style.borderColor = hasUser ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.08)';
      headerBtn.style.color = hasUser ? '#34d399' : '#a1a1aa';
    }
  } catch(e) {
    console.warn('[Header] updateHeaderDOM error:', e);
  }
}

// Expose globally so other modules can call it directly
if (typeof window !== 'undefined') window.updateHeaderDOM = updateHeaderDOM;

// Global profile update listener for instant header & app sync without page refresh
if (typeof window !== 'undefined' && !window._headerProfileListenerAttached) {
  window._headerProfileListenerAttached = true;
  const triggerHeaderUpdate = () => {
    // 1. Immediately patch header DOM with latest localStorage values
    updateHeaderDOM();
    // 2. Then trigger full app re-render for other components
    if (typeof window.renderApp === 'function') {
      window.renderApp();
    }
  };
  window.addEventListener('profileUpdated', triggerHeaderUpdate);
  window.addEventListener('auth-changed', triggerHeaderUpdate);
  window.addEventListener('storage', (e) => {
    if (e.key === 'planex_user_avatar' || e.key === 'planex_user_profile' || e.key === 'planex_auth_user' || e.key === 'planex_user_nickname') {
      triggerHeaderUpdate();
    }
  });
}

// Rendered by main.js as renderHeader() or renderHeader(state)
export function renderHeader(stateProp = null) {
  const state = stateProp || (typeof window !== 'undefined' ? window.appState : null) || {};

  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
  } catch(e) {}

  let userProfile = null;
  try {
    userProfile = JSON.parse(localStorage.getItem('planex_user_profile') || localStorage.getItem('planex_profile') || 'null');
  } catch(e) {}

  const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
  const avatar = storedAvatar || userProfile?.avatar || userProfile?.avatar_url || userProfile?.photo || userProfile?.photoUrl || authUser?.avatar_url || authUser?.photo_url || '';

  const name = getEffectiveHeaderName();

  const hasUser = Boolean(name || avatar || (authUser && (authUser.id || authUser.telegram_id || authUser.email || authUser.phone || authUser.phone_number)));
  const displayName = name || (hasUser ? 'کاربر' : 'ورود');
  const activeCount = getLivePresenceCount();

  return `
    <header class="app-header" style="padding: max(env(safe-area-inset-top), 35px) 12px 6px 12px; min-height: 44px; display: flex; align-items: center; justify-content: space-between; overflow: hidden; width: 100%; box-sizing: border-box; gap: 8px;">
      <div class="header-brand" style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
        <img src="./logo-transparent.png" alt="PlanEx Logo" style="width: 24px; height: 24px; border-radius: 6px; object-fit: contain;" />
        <div class="header-title" style="font-weight: 800; font-size: 0.92rem; letter-spacing: -0.3px; color: #e4e4e7;">PlanEx</div>
      </div>

      <!-- Single Sleek Top Live Presence Badge -->
      <div class="header-presence-badge" onclick="if(window.openFabActivityModal) window.openFabActivityModal();" style="display: flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 800; color: #34d399; cursor: pointer; white-space: nowrap; transition: all 0.2s ease; overflow: hidden; text-overflow: ellipsis; max-width: 260px;" title="شروع مطالعه با همکاران آنلاین">
        <span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; flex-shrink: 0; box-shadow: 0 0 10px #10b981; animation: livePulse 1.8s infinite ease-in-out;"></span>
        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">🟢 ${toPersianDigits(activeCount)} نفر در حال مطالعه با تو هستند</span>
      </div>

      <div class="header-actions-wrapper" style="display: flex; align-items: center; justify-content: flex-end; gap: 6px; flex-shrink: 0;">
        <!-- ☕ Hamibash Support Link -->
        <a href="https://hamibash.com/planexmedicalaa" target="_blank" rel="noopener noreferrer" id="btn-hamibash-link" class="btn-header-action" style="background: rgba(239, 68, 68, 0.14); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; text-decoration: none; font-size: 0.74rem; font-weight: 700; flex-shrink: 0; transition: all 0.2s ease;" title="حمایت از ما در حامی‌باش">
          <span style="font-size: 0.82rem;">☕</span>
          <span>حمایت از ما</span>
        </a>

        <!-- ❤️ Support Modal Trigger Button -->
        <button id="btn-support-modal" class="btn-header-action" onclick="if(window.appState){ window.appState.activeModal = 'support'; window.renderApp(); }" style="background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; cursor: pointer; font-size: 0.74rem; font-weight: 700; flex-shrink: 0;" title="شبکه‌ها و راهنما">
          <span style="font-size: 0.82rem;">❤️</span>
          <span>راهنما</span>
        </button>

        <!-- User Profile / Login Button -->
        <button type="button" onclick="if(window.appState){ window.appState.activeModal = 'login'; window.renderApp(); }" id="btn-header-user-account" class="btn-header-action" style="background: #1f2029; border: 1px solid ${hasUser ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.08)'}; color: ${hasUser ? '#34d399' : '#a1a1aa'}; padding: 3px 8px; border-radius: 10px; display: flex; align-items: center; gap: 6px; cursor: pointer; flex-shrink: 0;" title="👤 حساب کاربری و مشخصات">
          ${avatar ? `
            <img src="${avatar}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex';" />
          ` : `
            <span style="font-size: 0.85rem; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); border-radius: 50%;">👤</span>
          `}
          <span style="font-size: 0.74rem; font-weight: 700; max-width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${displayName}</span>
        </button>
      </div>
    </header>
  `;
}

export function bindHeaderTouchIsolation() {
  // Touch isolation disabled as header is fixed single-row without horizontal scrolling
}

