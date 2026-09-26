import { db } from '../db.js';

export function renderProfileView() {
  const profile = db.getUserProfile() || {};
  
  // Get cloud account info from localStorage (Telegram)
  const savedUser = localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account');
  let cloudUser = null;
  try { if (savedUser) cloudUser = JSON.parse(savedUser); } catch(e) {}

// Array of cool modern avatars
  const avatarList = [
    // Adventurers (modern, colorful)
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${i+1}`),
    // Bottts (robots/gaming)
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/bottts/svg?seed=Bot${i+1}`),
    // Micah (minimal, very stylish)
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/micah/svg?seed=Micah${i+1}`),
    // Fun Emoji
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${i+1}`),
    // Notionists (study/notion style)
    ...Array.from({length: 8}, (_, i) => `https://api.dicebear.com/7.x/notionists/svg?seed=Notion${i+1}`)
  ];

  const currentAvatarUrl = cloudUser?.avatar_url || profile.avatar_url || '';
  const now = Date.now();

  const avatarsHTML = avatarList.map(url => {
    const isSelected = currentAvatarUrl === url;
    return `
      <div class="avatar-option" onclick="window.selectAvatar(this, '${url}')" style="width: 60px; height: 60px; border-radius: 50%; cursor: pointer; border: 3px solid ${isSelected ? '#10b981' : 'transparent'}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative;">
        <img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="avatar-check" style="display: ${isSelected ? 'flex' : 'none'}; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(16, 185, 129, 0.5); justify-content: center; align-items: center; color: white; font-size: 1.5rem; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">✓</div>
      </div>
    `;
  }).join('');

  return `
    <div class="main-container">
      <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 10px;">پروفایل کاربری</h2>

      ${cloudUser ? `
      <!-- Cloud Account Info -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 16px; border: 1px solid rgba(16, 185, 129, 0.3);">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img id="main-header-avatar" src="${cloudUser.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=planex'}" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'"
               style="width: 56px; height: 56px; border-radius: 50%; border: 2.5px solid #10b981; object-fit: cover;" />
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 1.05rem; font-weight: 800; color: #10b981; margin-bottom: 2px;">${profile.name || cloudUser.full_name || 'کاربر پلنکس'}</div>
            <div style="font-size: 0.75rem; color: #94a3b8; font-family: 'Outfit'; direction: ltr; text-align: right;">${cloudUser.email || ''}</div>
            ${cloudUser.username ? `<span style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.12); padding: 2px 10px; border-radius: 10px; display: inline-block; margin-top: 4px; font-family: 'Outfit';" dir="ltr">@${cloudUser.username}</span>` : ''}
          </div>
          <div style="font-size: 0.7rem; color: #10b981; background: rgba(16,185,129,0.1); padding: 4px 10px; border-radius: 12px;">✅ متصل</div>
        </div>
      </div>
      ` : `
      <!-- Not Logged In -->
      <div class="glass-panel" style="padding: 16px 20px; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d;">
        <div>
          <div style="font-size: 0.88rem; font-weight: 700; color: #f8fafc;">✈️ اتصال به حساب تلگرام و همگام‌سازی</div>
          <div style="font-size: 0.76rem; color: #94a3b8; margin-top: 2px;">برای همگام‌سازی لحظه‌ای بین دستگاه‌ها، وارد حساب تلگرام شوید.</div>
        </div>
        <button type="button" onclick="if(window.appState){ window.appState.activeModal = 'login'; window.renderApp(); }" class="btn-primary" style="padding: 7px 14px; font-size: 0.78rem; font-weight: 700; background: #7c3aed; color: white; border: none; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 5px;">
          <span>✈️</span>
          <span>ورود به حساب</span>
        </button>
      </div>
      `}

      <div class="glass-panel" style="padding: 30px 20px; margin-bottom: 20px;">
        <div style="text-align: center; margin-bottom: 25px;">
          <div style="width: 110px; height: 110px; background: var(--primary-gradient); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; color: white; box-shadow: 0 8px 25px rgba(99,102,241,0.45); border: 4px solid rgba(255,255,255,0.1);">
            ${cloudUser && cloudUser.avatar_url ? `<img id="main-avatar-preview" src="${cloudUser.avatar_url}" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">` : '<span id="main-avatar-preview-emoji">👤</span>'}
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 600px; margin: 0 auto;">
          <div class="input-group">
            <label class="input-label">نام نمایشی عمومی</label>
            <input type="text" id="profile-display-name" class="form-input" value="${cloudUser?.full_name || profile.name || ''}" placeholder="نام نمایشی در اتاقها و پروفایل...">
          </div>
          
          <div class="input-group">
            <label class="input-label">آیدی کاربری (@username)</label>
            <input type="text" id="profile-username" class="form-input" value="${cloudUser?.username || ''}" placeholder="آیدی منحصر به فرد (مثال: pagekari)" style="direction: ltr; text-align: left;">
            <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 4px;">این آیدی در پروفایل عمومی شما به صورت @username نمایش داده می‌شود.</div>
          </div>
          
          <div class="input-group">
            <label class="input-label">انتخاب آواتار (گالری)</label>
            <div class="avatar-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 12px; max-height: 280px; overflow-y: auto; padding: 15px; background: rgba(0,0,0,0.15); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 12px;">
              ${avatarsHTML}
            </div>
            <input type="hidden" id="profile-avatar-url" value="${currentAvatarUrl}">
          </div>

          <div class="input-group">
            <label class="input-label">رشته تحصیلی / شغلی (Field of Study)</label>
            <input type="text" id="profile-major" class="form-input" value="${cloudUser?.major || profile.major || ''}" placeholder="مثال: علوم کامپیوتر، طراحی، یا دانش‌آموز">
          </div>
          <div class="input-group">
            <label class="input-label">هدف نهایی (دانشگاه / رشته)</label>
            <input type="text" id="profile-target" class="form-input" value="${profile.targetField || ''}" placeholder="مثال: پزشکی دانشگاه تهران">
          </div>
          
          <div class="input-group" style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <label class="input-label" style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px; font-weight: bold; color: #38bdf8;">
              <span>🔗</span> شبکه‌های اجتماعی
            </label>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; display: block;">تلگرام (آیدی بدون @)</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 1rem;">✈️</span>
                  <input type="text" id="social-telegram" class="form-input" value="${cloudUser?.social_links?.telegram || profile.social_links?.telegram || ''}" placeholder="username" style="direction: ltr; text-align: left; padding-left: 35px;">
                </div>
              </div>
              
              <div>
                <label style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; display: block;">اینستاگرام (آیدی بدون @)</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 1rem;">📸</span>
                  <input type="text" id="social-instagram" class="form-input" value="${cloudUser?.social_links?.instagram || profile.social_links?.instagram || ''}" placeholder="username" style="direction: ltr; text-align: left; padding-left: 35px;">
                </div>
              </div>

              <div>
                <label style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; display: block;">لینکدین یا گیت‌هاب (لینک کامل)</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 1rem;">💼</span>
                  <input type="text" id="social-linkedin" class="form-input" value="${cloudUser?.social_links?.linkedin || profile.social_links?.linkedin || ''}" placeholder="https://..." style="direction: ltr; text-align: left; padding-left: 35px; font-size: 0.75rem;">
                </div>
              </div>
              
              <div>
                <label style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 4px; display: block;">وب‌سایت شخصی (لینک کامل)</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 1rem;">🌐</span>
                  <input type="text" id="social-website" class="form-input" value="${cloudUser?.social_links?.website || profile.social_links?.website || ''}" placeholder="https://..." style="direction: ltr; text-align: left; padding-left: 35px; font-size: 0.75rem;">
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          
          <button id="btn-save-profile" class="btn-primary" style="margin-top: 10px;">ذخیره تنظیمات پروفایل</button>
          
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px;">اگر در دریافت آخرین نسخه سایت مشکل دارید:</p>
            <button onclick="if(window.forceUpdateApp) window.forceUpdateApp()" class="btn-secondary" style="border-color: rgba(59, 130, 246, 0.5); color: #3b82f6; width: 100%;">
              🔄 بروزرسانی سایت (دریافت آخرین نسخه)
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
