// Login & Phone-based Cloud Sync Modal Component for PlanEx
import { db } from '../db.js';
import { personalSyncService } from '../services/personalSyncService.js';
import { leaderboardService } from '../services/leaderboardService.js';

export function normalizePhone(rawPhone) {
  if (!rawPhone) return '';
  let p = String(rawPhone).trim();
  p = p.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  p = p.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  p = p.replace(/[^0-9]/g, '');

  if (p.startsWith('00989')) {
    p = '0' + p.slice(4);
  } else if (p.startsWith('0989')) {
    p = '0' + p.slice(3);
  } else if (p.startsWith('989')) {
    p = '0' + p.slice(2);
  } else if (p.startsWith('9') && p.length === 10) {
    p = '0' + p;
  }
  return p;
}

export function renderLoginModal(currentUser = null) {
  const authUser = currentUser || (() => {
    try {
      return JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch(e) { return null; }
  })();

  const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
  const storedNickname = localStorage.getItem('planex_user_nickname') || localStorage.getItem('planex_leaderboard_nickname') || '';
  const storedProfile = (() => {
    try { return JSON.parse(localStorage.getItem('planex_user_profile') || 'null'); } catch(e) { return null; }
  })();

  const isLoggedIn = Boolean(authUser && (authUser.phone || authUser.phone_number || authUser.telegram_id || authUser.id));
  const displayName = storedNickname || storedProfile?.name || storedProfile?.nickname || authUser?.full_name || authUser?.name || authUser?.first_name || 'کاربر پلنکس';
  const displayPhone = authUser?.phone || authUser?.phone_number || '';
  const displayAvatar = storedAvatar || storedProfile?.avatar || storedProfile?.avatar_url || authUser?.avatar_url || authUser?.photo_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${displayPhone || authUser?.username || 'planex'}`;

  return `
    <div class="modal-overlay" id="modal-login-auth" style="backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 9990; direction: rtl;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) { window.closeActiveModal(); }">
      <div class="modal-card" style="max-width: 440px; width: 92%; background: #070709; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 26px; padding: 26px 22px; box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(124, 58, 237, 0.12);" dir="rtl" onclick="event.stopPropagation();">
        
        <!-- Modal Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.07); padding-bottom: 14px; margin-bottom: 18px;">
          <div>
            <div style="color: #ffffff; display: flex; align-items: center; gap: 8px; font-size: 1.08rem; font-weight: 800;">
              <span>🔑</span>
              <span>ورود و همگام‌سازی اطلاعات</span>
            </div>
            <span style="font-size: 0.74rem; color: #71717a; margin-top: 3px; display: block;">همگام‌سازی ابری تمام پارت‌ها، برنامه‌ها و اتاق‌ها با شماره موبایل</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #141418; border: 1px solid rgba(255,255,255,0.1); color: #a1a1aa; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">✕</button>
        </div>

        ${isLoggedIn ? `
          <!-- Logged In User State -->
          <div style="background: #0d0d12; border: 1px solid rgba(16, 185, 129, 0.3); padding: 22px 20px; border-radius: 22px; text-align: center; margin-bottom: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
            <div style="position: relative; width: 78px; height: 78px; margin: 0 auto 12px;">
              <img src="${displayAvatar}" 
                   style="width: 100%; height: 100%; border-radius: 50%; border: 2.5px solid #10b981; object-fit: cover;" 
                   onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'" />
              <div style="position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-radius: 50%; background: #10b981; border: 2px solid #0d0d12; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: #fff;">✓</div>
            </div>
            <h3 style="font-size: 1.12rem; color: #f8fafc; margin-bottom: 4px; font-weight: 800;">${displayName}</h3>
            ${displayPhone ? `<div style="font-size: 0.82rem; color: #38bdf8; font-family: 'Outfit', monospace; margin-bottom: 6px;" dir="ltr">📱 ${displayPhone}</div>` : ''}
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.12); color: #34d399; padding: 5px 14px; border-radius: 12px; font-size: 0.74rem; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.25);">
              <span>🟢</span><span>متصل به فضای ابری پلنکس</span>
            </div>

            <!-- ✏️ Edit Profile Button -->
            <button type="button" id="btn-open-edit-profile-modal" class="btn-open-edit-profile-modal" onclick="event.stopPropagation(); window.handleEditProfile();" style="margin-top: 14px; width: 100%; box-sizing: border-box; padding: 10px 14px; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 12px; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25); transition: all 0.2s;">
              <span>✏️</span>
              <span>ویرایش مشخصات / پروفایل</span>
            </button>
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="button" id="btn-manual-account-sync" class="btn-manual-account-sync" onclick="event.stopPropagation(); window.triggerManualCloudSync();" style="flex: 2; padding: 13px; background: linear-gradient(135deg, #7c3aed, #6366f1); color: #fff; font-size: 0.85rem; font-weight: 800; border-radius: 14px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35); transition: all 0.2s;">
              <span>☁️</span><span>همگام‌سازی ابری آنی</span>
            </button>
            <button type="button" id="btn-user-logout" class="btn-user-logout" onclick="event.stopPropagation(); window.handleUserLogout();" style="flex: 1; padding: 13px; background: #141418; border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; cursor: pointer; border-radius: 14px; font-size: 0.82rem; font-weight: 700; transition: all 0.2s;">
              خروج 🚪
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-2 text-center" style="font-size: 10px; opacity: 0.8;">قبل از همگامسازی اطلاعات این دستگاه روی دستگاه دیگرتان این کلید را بزنید تا اطلاعات در اون دستگاه همگام شود</p>
        ` : `
          <!-- Primary 2-Field Login Form (Phone & Password) -->
          <form onsubmit="event.preventDefault(); window.handlePhoneLoginSubmit();" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 18px;">
            
            <!-- Field 1: Phone Number -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">
                📱 شماره موبایل:
              </label>
              <input type="tel" id="input-login-phone" placeholder="09123456789" required
                     style="width: 100%; box-sizing: border-box; padding: 13px 16px; border-radius: 14px; background: #111116; border: 1px solid rgba(255,255,255,0.12); color: #ffffff; font-size: 0.95rem; font-family: 'Outfit', sans-serif; direction: ltr; text-align: left; transition: border-color 0.2s;"
                     onfocus="this.style.borderColor='#8b5cf6'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'" />
            </div>

            <!-- Field 2: Password with Eye Toggle -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">
                🔑 رمز عبور دریافتی از ربات:
              </label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="password" id="input-login-password" placeholder="رمز عبور ۱۲ رقمی..." required
                       style="width: 100%; box-sizing: border-box; padding: 13px 44px 13px 16px; border-radius: 14px; background: #111116; border: 1px solid rgba(255,255,255,0.12); color: #ffffff; font-size: 0.95rem; font-family: 'Outfit', sans-serif; direction: ltr; text-align: left; transition: border-color 0.2s;"
                       onfocus="this.style.borderColor='#8b5cf6'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'" />
                <button type="button" id="btn-toggle-login-pwd" onclick="window.toggleLoginPasswordVisibility()" 
                        style="position: absolute; right: 12px; background: none; border: none; color: #a1a1aa; cursor: pointer; font-size: 1.1rem; padding: 4px; display: flex; align-items: center; justify-content: center;">
                  👁️
                </button>
              </div>
            </div>

            <!-- Error Message Box -->
            <div id="login-modal-error-box" style="display: none; background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 10px 12px; font-size: 0.76rem; color: #fca5a5; line-height: 1.5; text-align: center;"></div>

            <!-- Submit Button -->
            <button type="submit" id="btn-submit-phone-login" class="btn-submit-phone-login" onclick="event.preventDefault(); window.handlePhoneLoginSubmit();" 
                    style="width: 100%; box-sizing: border-box; padding: 14px 20px; background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%); color: #ffffff; border-radius: 14px; border: none; font-size: 0.94rem; font-weight: 800; cursor: pointer; box-shadow: 0 8px 22px rgba(124, 58, 237, 0.4); transition: transform 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 8px;"
                    onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              <span>ورود به حساب و همگام‌سازی 🚀</span>
            </button>
          </form>

          <!-- Telegram Bot Fast Help Button -->
          <div style="margin-top: 6px;">
            <a href="https://t.me/planex_sync_bot?start=login" target="_blank" rel="noopener noreferrer" 
               style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; box-sizing: border-box; padding: 12px 14px; background: rgba(0, 136, 204, 0.12); border: 1px solid rgba(0, 136, 204, 0.3); color: #38bdf8; text-decoration: none; border-radius: 14px; font-size: 0.8rem; font-weight: 700; transition: all 0.2s; text-align: center;">
              <span>🤖</span>
              <span>هنوز رمز نگرفته‌اید؟ دریافت رمز از ربات تلگرام (@planex_sync_bot)</span>
            </a>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.07); padding: 11px 12px; border-radius: 14px; text-align: center; margin-top: 14px;">
            <span style="font-size: 0.72rem; color: #71717a; line-height: 1.6; display: block;">
              🔒 اطلاعات و اتاق‌های مطالعه شما منحصراً با شماره موبایل همگام و محافظت می‌شوند.
            </span>
          </div>
        `}

      </div>
    </div>
  `;
}

// Global Handlers
if (typeof window !== 'undefined') {
  window.toggleLoginPasswordVisibility = () => {
    const input = document.getElementById('input-login-password');
    const btn = document.getElementById('btn-toggle-login-pwd');
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (btn) btn.textContent = '🙈';
    } else {
      input.type = 'password';
      if (btn) btn.textContent = '👁️';
    }
  };

  window.handlePhoneLoginSubmit = async () => {
    const phoneInput = document.getElementById('input-login-phone');
    const pwdInput = document.getElementById('input-login-password');
    const errorBox = document.getElementById('login-modal-error-box');
    const submitBtn = document.getElementById('btn-submit-phone-login');

    if (errorBox) errorBox.style.display = 'none';

    const rawPhone = phoneInput?.value?.trim() || '';
    const phone = normalizePhone(rawPhone);
    const password = pwdInput?.value?.trim() || '';

    if (!phone || !password) {
      if (errorBox) {
        errorBox.textContent = 'لطفاً شماره موبایل و رمز عبور را وارد کنید.';
        errorBox.style.display = 'block';
      }
      if (window.showToast) window.showToast('لطفاً شماره موبایل و رمز عبور را وارد کنید.', 'warning');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>`;
    }

    try {
      let studyLogs = [];
      try {
        studyLogs = JSON.parse(localStorage.getItem('planex_study_logs') || '[]');
      } catch (e) {}

      let myGroups = [];
      try {
        myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
      } catch (e) {}

      const backupData = (typeof window.personalSyncService !== 'undefined' && typeof window.personalSyncService.exportLocalState === 'function')
        ? window.personalSyncService.exportLocalState()
        : {};

      let profile = {};
      try {
        profile = (db && typeof db.getUserProfile === 'function')
          ? db.getUserProfile()
          : JSON.parse(localStorage.getItem('planex_user_profile') || '{}');
      } catch (e) {
        profile = {};
      }
      if (!profile || typeof profile !== 'object') profile = {};

      const storedAvatar = localStorage.getItem('planex_user_avatar') || profile.avatar || profile.avatar_url || profile.photo || '';
      if (storedAvatar && backupData && typeof backupData === 'object') {
        backupData.planex_user_avatar = storedAvatar;
      }

      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          password: password,
          study_logs: studyLogs,
          rooms: myGroups,
          backupData: backupData,
          name: profile.name || profile.nickname || 'کاربر پلنکس',
          avatar: storedAvatar,
          avatar_url: storedAvatar,
          planex_user_avatar: storedAvatar
        })
      });

      const rawText = await res.text();
      let data = {};
      const contentType = res.headers.get('content-type') || '';
      try {
        if (contentType.includes('application/json') || (rawText && rawText.trim().startsWith('{'))) {
          data = JSON.parse(rawText);
        } else {
          data = { success: false, message: 'پاسخ سرور در دسترس نیست.' };
        }
      } catch (e) {
        data = { success: false, message: 'پاسخ دریافتی از سرور معتبر نیست.' };
      }

      if (res.ok && data.success && data.user) {
        if (data.backupData && typeof window.personalSyncService !== 'undefined' && typeof window.personalSyncService.importLocalState === 'function') {
          window.personalSyncService.importLocalState(data.backupData);
        } else if (data.backupData && window.db && typeof window.db.importAllDataJSON === 'function') {
          window.db.importAllDataJSON(data.backupData);
        }

        const user = data.user;
        const userId = user.id || user.telegram_id || user.uid || user.phone || phone;
        const backupAvatar = data.backupData?.planex_user_avatar || (typeof data.backupData?.planex_user_profile === 'object' ? data.backupData.planex_user_profile?.avatar : null);
        const serverAvatar = user.avatar_url || user.avatarUrl || user.photo_url || user.avatar;
        const localAvatar = localStorage.getItem('planex_user_avatar');

        let avatar = '';
        if (backupAvatar && !backupAvatar.includes('dicebear.com')) {
          avatar = backupAvatar;
        } else if (serverAvatar && !serverAvatar.includes('dicebear.com')) {
          avatar = serverAvatar;
        } else if (localAvatar && !localAvatar.includes('dicebear.com')) {
          avatar = localAvatar;
        } else {
          avatar = serverAvatar || localAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${phone}`;
        }

        if (avatar) {
          localStorage.setItem('planex_user_avatar', avatar);
        }

        const name = user.name || user.full_name || 'کاربر پلنکس';

        const authPayload = {
          id: userId,
          telegram_id: user.telegram_id || userId,
          uid: userId,
          user_id: userId,
          phone: user.phone || phone,
          phone_number: user.phone || phone,
          name: name,
          full_name: name,
          avatar_url: avatar,
          avatarUrl: avatar,
          avatar: avatar,
          photo_url: avatar,
          auth_provider: 'phone'
        };

        localStorage.setItem('planex_auth_user', JSON.stringify(authPayload));
        localStorage.setItem('planex_user_account', JSON.stringify(authPayload));

        if (Array.isArray(data.study_logs) && data.study_logs.length > 0) {
          if (window.db && typeof window.db.saveStudyLogs === 'function') {
            window.db.saveStudyLogs(data.study_logs);
          } else {
            localStorage.setItem('planex_study_logs', JSON.stringify(data.study_logs));
            localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(data.study_logs));
          }
        } else if (data.backupData && Array.isArray(data.backupData.planex_recent_activity_sessions) && data.backupData.planex_recent_activity_sessions.length > 0) {
          if (window.db && typeof window.db.saveStudyLogs === 'function') {
            window.db.saveStudyLogs(data.backupData.planex_recent_activity_sessions);
          } else {
            localStorage.setItem('planex_recent_activity_sessions', JSON.stringify(data.backupData.planex_recent_activity_sessions));
          }
        }

        if (Array.isArray(data.rooms) && data.rooms.length > 0) {
          localStorage.setItem('planex_my_groups', JSON.stringify(data.rooms));
          localStorage.setItem('planex_my_rooms', JSON.stringify(data.rooms));
          if (window.db && typeof window.db.setUserGroups === 'function') {
            window.db.setUserGroups(data.rooms);
          }
        }

        // CRITICAL: Await full cloud pull to ensure any newer data from other devices is reliably loaded BEFORE rendering
        try {
          const pSync = window.personalSyncService || personalSyncService;
          if (pSync && typeof pSync.pullFromCloud === 'function') {
            await pSync.pullFromCloud(phone);
          }
        } catch (pullErr) {
          console.warn('[LoginModal] Error pulling from cloud post-login:', pullErr);
        }

        // Explicitly fetch user's joined groups from database/backend immediately after login
        try {
          const lService = window.leaderboardService || leaderboardService;
          if (lService && typeof lService.fetchUserGroups === 'function') {
            await lService.fetchUserGroups(true);
          } else if (typeof window.fetchUserGroups === 'function') {
            await window.fetchUserGroups();
          }
        } catch (gErr) {
          console.warn('[LoginModal] Error fetching user groups post-login:', gErr);
        }

        try {
          const p = (window.db && typeof window.db.getUserProfile === 'function')
            ? window.db.getUserProfile()
            : JSON.parse(localStorage.getItem('planex_user_profile') || '{}');
          p.phone = phone;
          if (name) p.name = name;
          if (avatar) {
            p.avatar = avatar;
            p.avatar_url = avatar;
            p.photo = avatar;
            p.photoUrl = avatar;
          }
          if (window.db && typeof window.db.setUserProfile === 'function') {
            window.db.setUserProfile(p);
          }
          localStorage.setItem('planex_user_profile', JSON.stringify(p));
        } catch (pe) {}

        if (window.db) {
          window.db._breakdownMemoMap = {};
        }

        window.dispatchEvent(new CustomEvent('auth-changed', { detail: authPayload }));
        window.dispatchEvent(new CustomEvent('profileUpdated'));
        window.dispatchEvent(new CustomEvent('study-logs-updated'));
        window.dispatchEvent(new CustomEvent('sessions-updated'));
        window.dispatchEvent(new CustomEvent('activity-saved', { detail: { sync: true } }));

        if (window.closeActiveModal) {
          window.closeActiveModal();
        } else if (window.appState) {
          window.appState.activeModal = null;
        }

        // CRITICAL: Force Dashboard UI to re-render immediately to reflect new study hours, charts & streaks
        if (window.dashboardChartInstances) window.dashboardChartInstances = null;
        if (typeof window.updateCharts === 'function') {
          try { window.updateCharts(); } catch (_) {}
        }
        if (typeof window.renderApp === 'function') {
          window.renderApp();
        }

        if (window.showToast) {
          window.showToast(`خوش آمدید ${user.name || 'کاربر گرامی'}! ورود و همگام‌سازی با موفقیت انجام شد. 🎉`, 'success', 4000);
        }
      } else {
        const errMsg = data.message || 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.';
        if (errorBox) {
          errorBox.textContent = errMsg;
          errorBox.style.display = 'block';
        }
        if (window.showToast) window.showToast(errMsg, 'error');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>ورود به حساب و همگام‌سازی 🚀</span>';
        }
      }
    } catch (err) {
      console.error('[Phone Login Error]:', err);
      const errMsg = 'خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.';
      if (errorBox) {
        errorBox.textContent = errMsg;
        errorBox.style.display = 'block';
      }
      if (window.showToast) window.showToast(errMsg, 'error');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>ورود به حساب و همگام‌سازی 🚀</span>';
      }
    }
  };

  window.handlePasswordLoginSubmit = window.handlePhoneLoginSubmit;

  // ── 1. Edit Profile Handler ───────────────────────────────────────────
  window.handleEditProfile = () => {
    try {
      if (typeof window.openEditProfileModal === 'function') {
        window.openEditProfileModal();
        return;
      }
      if (window.appState) {
        window.appState.activeModal = 'editProfile';
        if (typeof window.renderApp === 'function') {
          window.renderApp();
        }
      }
    } catch (e) {
      console.error('[LoginModal] handleEditProfile error:', e);
      if (window.appState) {
        window.appState.activeModal = 'editProfile';
        if (typeof window.renderApp === 'function') window.renderApp();
      }
    }
  };
  window.openEditProfileModal = window.openEditProfileModal || window.handleEditProfile;

  // ── 2. User Logout Handler ─────────────────────────────────────────────
  window.handleUserLogout = () => {
    try {
      // Clear auth & user storage
      const keysToRemove = [
        'planex_auth_user',
        'planex_user_account',
        'planex_user_profile',
        'planex_user_nickname',
        'planex_user_avatar',
        'planex_leaderboard_nickname',
        'planex_my_groups',
        'planex_my_rooms',
        'planex_user_groups',
        'my_rooms',
        'planex_active_group_code',
        'planex_active_room_code',
        'planex_sync_token',
        'planex_sync_token_secret'
      ];
      keysToRemove.forEach(k => {
        try { localStorage.removeItem(k); } catch (_) {}
      });

      // Clear local db state if available
      const localDb = window.db || db;
      if (localDb) {
        if (typeof localDb.setUserGroups === 'function') {
          localDb.setUserGroups([]);
        }
        if (typeof localDb.setUserProfile === 'function') {
          localDb.setUserProfile({ name: 'کاربر مهمان', avatar: '', phone: '' });
        }
      }

      // Reset app state
      if (window.appState) {
        window.appState.currentUser = null;
        window.appState.user = null;
        window.appState.userGroups = [];
        window.appState.activeModal = null;
      }

      // Close modal
      if (typeof window.closeActiveModal === 'function') {
        window.closeActiveModal();
      }

      // Dispatch global events for UI reset
      window.dispatchEvent(new CustomEvent('auth-changed', { detail: null }));
      window.dispatchEvent(new CustomEvent('profileUpdated'));
      window.dispatchEvent(new CustomEvent('groups-changed'));
      window.dispatchEvent(new CustomEvent('groups-updated'));

      // Re-render UI in logged out state
      if (typeof window.renderApp === 'function') {
        window.renderApp();
      }

      if (typeof window.showToast === 'function') {
        window.showToast('با موفقیت از حساب کاربری خارج شدید.', 'info');
      }
    } catch (e) {
      console.error('[LoginModal] Logout error:', e);
      if (typeof window.closeActiveModal === 'function') window.closeActiveModal();
      if (typeof window.renderApp === 'function') window.renderApp();
    }
  };
  window.handleAccountLogout = window.handleUserLogout;

  // ── 3. Instant Cloud Sync Handler ──────────────────────────────────────
  window.triggerManualCloudSync = async () => {
    const btn = document.getElementById('btn-manual-account-sync');
    const originalHTML = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>`;
    }

    if (typeof window.showToast === 'function') {
      window.showToast('در حال همگام‌سازی با فضای ابری...', 'info', 2000);
    }

    try {
      const pSync = window.personalSyncService || personalSyncService;
      // 1. Push local changes to cloud
      if (pSync && typeof pSync.pushToCloud === 'function') {
        await pSync.pushToCloud();
      } else if (typeof window.triggerAutoSync === 'function') {
        await window.triggerAutoSync(true);
      }

      // 2. Pull cloud changes to current device (bidirectional sync)
      if (pSync && typeof pSync.pullFromCloud === 'function') {
        await pSync.pullFromCloud();
      }

      // Refresh groups from backend
      const lService = window.leaderboardService || leaderboardService;
      try {
        if (lService && typeof lService.fetchUserGroups === 'function') {
          await lService.fetchUserGroups(true);
        } else if (typeof window.fetchUserGroups === 'function') {
          await window.fetchUserGroups();
        }
      } catch (gErr) {
        console.warn('[LoginModal] Groups refresh during sync:', gErr);
      }

      // Sync user score to leaderboard
      try {
        if (lService && typeof lService.syncUserScore === 'function') {
          await lService.syncUserScore(true);
        }
      } catch (sErr) {
        console.warn('[LoginModal] Score sync during sync:', sErr);
      }

      if (typeof window.showToast === 'function') {
        window.showToast('همگامسازی با موفقیت انجام شد 🎉', 'success', 3500);
      }
    } catch (err) {
      console.error('[LoginModal] Manual cloud sync error:', err);
      if (typeof window.showToast === 'function') {
        window.showToast('خطا در همگام‌سازی ابری اطلاعات. لطفاً اینترنت خود را بررسی کنید.', 'error', 3500);
      }
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHTML || `<span>☁️</span><span>همگام‌سازی ابری آنی</span>`;
      }
      if (typeof window.renderApp === 'function') {
        window.renderApp();
      }
    }
  };
  window.handleManualAccountSync = window.triggerManualCloudSync;

  // ── Resilient Event Delegation (Capture Phase) ──────────────────────────
  if (typeof document !== 'undefined' && !window._loginModalDelegationBound) {
    window._loginModalDelegationBound = true;
    document.addEventListener('click', (e) => {
      const submitBtn = e.target && e.target.closest && e.target.closest('#btn-submit-phone-login, .btn-submit-phone-login');
      if (submitBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.handlePhoneLoginSubmit === 'function') window.handlePhoneLoginSubmit();
        return;
      }
      const editBtn = e.target && e.target.closest && e.target.closest('#btn-open-edit-profile-modal, .btn-open-edit-profile-modal');
      if (editBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.handleEditProfile === 'function') window.handleEditProfile();
        return;
      }
      const syncBtn = e.target && e.target.closest && e.target.closest('#btn-manual-account-sync, .btn-manual-account-sync');
      if (syncBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.triggerManualCloudSync === 'function') window.triggerManualCloudSync();
        return;
      }
      const logoutBtn = e.target && e.target.closest && e.target.closest('#btn-user-logout, .btn-user-logout');
      if (logoutBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.handleUserLogout === 'function') window.handleUserLogout();
        return;
      }
    }, true);
  }
}
