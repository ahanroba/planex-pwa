// EditProfileModal.js — Tap-to-Edit User Profile Modal with Ready Cartoon Avatars, File Upload, and Telegram Auto-Sync
import { leaderboardService, LEADERBOARD_STORAGE_KEYS } from '../services/leaderboardService.js';
import { db } from '../db.js';

export function renderEditProfileModal() {
  const profile = (leaderboardService && typeof leaderboardService.getUserProfile === 'function')
    ? leaderboardService.getUserProfile()
    : { nickname: '', target: '', avatar_url: '' };

  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
  } catch(e) {}

  const currentName = profile.nickname || profile.name || authUser?.full_name || authUser?.name || '';
  const currentTarget = profile.target || profile.targetField || profile.major || '';
  const storedAvatar = localStorage.getItem('planex_user_avatar') || '';
  const currentAvatar = storedAvatar || profile.avatar_url || profile.avatarUrl || profile.avatar || profile.photo_url || authUser?.avatar_url || '';

  // Popular goal chips presets
  const popularGoals = [
    '🩺 آزمون پره‌اینترنی',
    '👨‍⚕️ آزمون دستیاری',
    '🧬 کنکور تجربی',
    '📐 کنکور ریاضی',
    '📚 کنکور انسانی',
    '⚖️ آزمون وکالت',
    '🎓 ارشد علوم پزشکی',
    '🌐 آزمون آیلتس / زبان'
  ];

  // Avatar presets (Dicebear SVG avatars & modern cartoons)
  const avatarPresets = [
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${i+1}`),
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/bottts/svg?seed=Bot${i+1}`),
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/micah/svg?seed=Micah${i+1}`),
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${i+1}`),
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/notionists/svg?seed=Notion${i+1}`)
  ];

  const presetsHTML = avatarPresets.map((url, idx) => {
    const isSelected = currentAvatar === url;
    return `
      <div class="avatar-preset-item" onclick="window.selectEditProfileAvatar('${url}')" style="width: 52px; height: 52px; aspect-ratio: 1/1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${isSelected ? '#7c3aed' : 'rgba(255,255,255,0.1)'}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0;">
        <img src="${url}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=fallback${idx}'" />
      </div>
    `;
  }).join('');

  return `
    <div id="modal-edit-profile" class="modal-overlay" style="display: flex; backdrop-filter: blur(20px); background: rgba(0, 0, 0, 0.82); z-index: 99999; direction: rtl;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-content modal-card" onclick="event.stopPropagation();" style="width: 94%; max-width: 480px; padding: 24px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 22px; text-align: right; box-shadow: 0 24px 60px rgba(0,0,0,0.7); max-height: 90vh; overflow-y: auto;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 40px; height: 40px; border-radius: 12px; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(124, 58, 237, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
              ✏️
            </div>
            <div>
              <h3 style="margin: 0; color: #f8fafc; font-size: 1.1rem; font-weight: 900;">ویرایش مشخصات من</h3>
              <span style="font-size: 0.74rem; color: #8e8e9c;">نام، رشته/هدف و عکس پروفایل خود را تنظیم کنید</span>
            </div>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #1f2029; border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.15s ease;">✕</button>
        </div>

        <!-- Avatar Instant Live Preview & Selector -->
        <div style="text-align: center; margin-bottom: 22px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 16px;">
          <div style="position: relative; width: 84px; height: 84px; margin: 0 auto 12px auto; display: inline-block;">
            <div id="edit-profile-avatar-preview-box" style="width: 84px; height: 84px; min-width: 84px; max-width: 84px; min-height: 84px; max-height: 84px; aspect-ratio: 1/1 !important; border-radius: 50% !important; overflow: hidden !important; border: 3px solid #7c3aed; background: #16171d; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(124, 58, 237, 0.35); transition: all 0.2s ease;">
              ${currentAvatar && (currentAvatar.startsWith('http') || currentAvatar.startsWith('data:image')) ? `
                <img id="edit-profile-avatar-img" src="${currentAvatar}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
              ` : `
                <span id="edit-profile-avatar-fallback" style="font-size: 2.2rem;">👤</span>
              `}
            </div>
            <label for="edit-profile-file-input" style="position: absolute; bottom: 0; left: -4px; background: #7c3aed; color: white; border-radius: 50%; min-width: 32px; min-height: 32px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; border: 2px solid #16171d; box-shadow: 0 2px 8px rgba(0,0,0,0.4);" title="آپلود عکس از گالری">
              📷
            </label>
            <input type="file" id="edit-profile-file-input" accept="image/*" style="display: none;" onchange="window.handleEditProfileImageUpload(event)" />
          </div>

          <input type="hidden" id="input-edit-profile-avatar-url" value="${currentAvatar}" />

          <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 12px;">
            <button type="button" onclick="document.getElementById('edit-profile-file-input').click()" style="padding: 7px 14px; font-size: 0.76rem; font-weight: 800; background: rgba(124, 58, 237, 0.15); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
              <span>📷</span>
              <span>انتخاب از گالری</span>
            </button>
            <button type="button" onclick="window.promptEditProfileAvatarUrl()" style="padding: 7px 14px; font-size: 0.76rem; font-weight: 700; background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
              <span>🔗</span>
              <span>لینک عکس</span>
            </button>
          </div>

          <!-- Cartoon Avatar Presets -->
          <div style="text-align: right; font-size: 0.75rem; color: #8e8e9c; font-weight: 700; margin-bottom: 8px;">یا انتخاب فوری از بین آواتارهای آماده:</div>
          <div style="display: flex; gap: 10px; overflow-x: auto; padding: 6px 2px; scrollbar-width: thin;">
            ${presetsHTML}
          </div>
        </div>

        <!-- Form Inputs -->
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 22px;">
          
          <!-- Name Input -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              نام و نام خانوادگی <span style="color: #ef4444;">*</span>
            </label>
            <input type="text" id="input-edit-profile-name" value="${currentName}" placeholder="مثال: علی محمدی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.88rem; font-weight: 700;" />
          </div>

          <!-- Target / Major Input & Popular Chips -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              رشته تحصیلی یا هدف آزمون
            </label>
            <input type="text" id="input-edit-profile-target" value="${currentTarget}" placeholder="مثال: آزمون پره‌اینترنی / کنکور تجربی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.85rem;" />
            
            <!-- Popular Goal Chips -->
            <div style="margin-top: 10px;">
              <div style="font-size: 0.72rem; color: #8e8e9c; font-weight: 700; margin-bottom: 6px;">💡 انتخاب سریع اهداف محبوب:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${popularGoals.map(p => `
                  <button type="button" onclick="document.getElementById('input-edit-profile-target').value='${p}';" style="padding: 5px 10px; font-size: 0.72rem; font-weight: 700; background: rgba(124, 58, 237, 0.12); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.borderColor='#a855f7'" onmouseout="this.style.borderColor='rgba(124, 58, 237, 0.25)'">${p}</button>
                `).join('')}
              </div>
            </div>
          </div>

        </div>

        <!-- Submit Buttons -->
        <div style="display: flex; gap: 10px;">
          <button type="button" id="btn-save-edit-profile" onclick="window.handleSaveProfileSubmit()" class="btn-primary" style="flex: 1; height: 46px; font-size: 0.9rem; font-weight: 900; background: #7c3aed; color: white; border: none; border-radius: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4); transition: all 0.2s ease;">
            <span>💾</span>
            <span>ذخیره تغییرات مشخصات</span>
          </button>

          <button type="button" onclick="window.closeActiveModal()" style="padding: 0 18px; height: 46px; font-size: 0.82rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; cursor: pointer;">
            انصراف
          </button>
        </div>

      </div>
    </div>
  `;
}

// Global Handlers
window.openEditProfileModal = function() {
  if (window.appState) {
    window.appState.activeModal = 'editProfile';
    if (window.renderApp) window.renderApp();
  }
};

window.closeEditProfileModal = function() {
  if (window.closeActiveModal) {
    window.closeActiveModal();
  } else if (window.appState) {
    window.appState.activeModal = null;
    if (window.renderApp) window.renderApp();
  }
};

// Instant Live Avatar Preview handler (without saving to storage immediately)
window.selectEditProfileAvatar = function(url) {
  const hiddenInput = document.getElementById('input-edit-profile-avatar-url');
  if (hiddenInput) hiddenInput.value = url;

  const box = document.getElementById('edit-profile-avatar-preview-box');
  if (box) {
    box.innerHTML = `<img id="edit-profile-avatar-img" src="${url}" style="width: 100%; height: 100%; object-fit: cover;" />`;
  }
};

window.promptEditProfileAvatarUrl = function() {
  const url = prompt('لطفاً لینک آدرس مستقیم تصویر پروفایل را وارد نمایید (http/https):');
  if (url && url.trim().startsWith('http')) {
    window.selectEditProfileAvatar(url.trim());
  }
};

window.handleEditProfileImageUpload = function(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (file.size > 10 * 1024 * 1024) {
    if (window.showToast) {
      window.showToast('حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.', 'warning');
    } else {
      alert('حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.');
    }
    return;
  }

  const box = document.getElementById('edit-profile-avatar-preview-box');
  if (box) {
    box.innerHTML = `<span class="spin-sync" style="font-size: 1.8rem;">⏳</span>`;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const rawDataUrl = e.target.result;
    if (!rawDataUrl) return;

    // Canvas image compression to max 128x128 WebP/JPEG
    const img = new Image();
    img.onload = function() {
      const maxDim = 128;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        }
      } else {
        if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      let compressedDataUrl;
      try {
        compressedDataUrl = canvas.toDataURL('image/webp', 0.7);
        if (!compressedDataUrl || !compressedDataUrl.startsWith('data:image/webp')) {
          compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        }
      } catch(err) {
        compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      }

      // Update instant live preview ONLY (persists on submit)
      window.selectEditProfileAvatar(compressedDataUrl);
    };

    img.onerror = function() {
      if (window.showToast) {
        window.showToast('خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.', 'error');
      } else {
        alert('خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.');
      }
      if (box) box.innerHTML = `<span style="font-size: 2.2rem;">👤</span>`;
    };
    img.src = rawDataUrl;
  };
  reader.readAsDataURL(file);
};

window.handleSaveProfileSubmit = async function() {
  const nameInput = document.getElementById('input-edit-profile-name');
  const targetInput = document.getElementById('input-edit-profile-target');
  const avatarInput = document.getElementById('input-edit-profile-avatar-url');

  const newName = nameInput ? nameInput.value.trim() : '';
  const newTarget = targetInput ? targetInput.value.trim() : '';
  const newAvatar = avatarInput ? avatarInput.value.trim() : '';

  if (!newName) {
    if (window.showToast) {
      window.showToast('لطفاً نام و نام خانوادگی خود را وارد کنید.', 'warning');
    } else {
      alert('لطفاً نام و نام خانوادگی خود را وارد کنید.');
    }
    if (nameInput) nameInput.focus();
    return;
  }

  const btn = document.getElementById('btn-save-edit-profile');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره‌سازی...</span>`;
  }

  try {
    // 1. Save in LEADERBOARD_STORAGE_KEYS safely
    try {
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.NICKNAME, newName);
      localStorage.setItem(LEADERBOARD_STORAGE_KEYS.TARGET, newTarget);
      localStorage.setItem('planex_user_nickname', newName);
      if (newAvatar) {
        localStorage.setItem('planex_user_avatar', newAvatar);
      }
    } catch (e) {
      console.warn('LEADERBOARD_STORAGE_KEYS quota error:', e);
    }

    // 2. Update local db user profile
    if (db && typeof db.setUserProfile === 'function') {
      const cur = db.getUserProfile() || {};
      db.setUserProfile({
        ...cur,
        name: newName,
        targetField: newTarget,
        major: newTarget,
        avatar: newAvatar,
        avatar_url: newAvatar,
        photo: newAvatar,
        photoUrl: newAvatar
      });
    }

    // 3. Update auth user account if present safely
    try {
      const authRaw = localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account');
      let authUser = authRaw ? JSON.parse(authRaw) : {};
      authUser.full_name = newName;
      authUser.name = newName;
      authUser.avatar_url = newAvatar;
      authUser.photo_url = newAvatar;
      localStorage.setItem('planex_auth_user', JSON.stringify(authUser));
      localStorage.setItem('planex_user_account', JSON.stringify(authUser));
    } catch(e) {
      console.warn('auth user account quota error:', e);
    }

    // 4. Call leaderboardService.saveUserProfile
    if (leaderboardService && typeof leaderboardService.saveUserProfile === 'function') {
      leaderboardService.saveUserProfile(newName, newTarget, newAvatar);
    }

    // 5. Trigger Cloud Sync
    if (leaderboardService && typeof leaderboardService.syncUserScore === 'function') {
      leaderboardService.syncUserScore(true).catch(() => {});
    }

    // 6. Close Modal
    if (window.closeActiveModal) {
      window.closeActiveModal();
    } else if (window.appState) {
      window.appState.activeModal = null;
    }

    // Toast feedback
    if (window.showToast) {
      window.showToast(`مشخصات و آواتار شما با موفقیت به «${newName}» تغییر یافت! ✅`, 'success', 3500);
    }

    // Dispatch profileUpdated event for instant reactive UI sync across Header & app
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent('profileUpdated'));
    }

    // Re-render instantly
    if (window.renderApp) {
      window.renderApp();
    }
  } catch (err) {
    console.error('Save profile failed:', err);
    if (window.showToast) {
      window.showToast('خطا در ذخیره مشخصات: ' + err.message, 'error');
    } else {
      alert('خطا در ذخیره مشخصات: ' + err.message);
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '💾 ذخیره تغییرات مشخصات';
    }
  }
};
