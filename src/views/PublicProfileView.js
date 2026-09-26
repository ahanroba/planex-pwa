export function renderPublicProfileView(username) {
  // If we haven't fetched this user yet, or the currently stored user is different, fetch it
  if (!window.planexPublicProfile || window.planexPublicProfile.user?.username !== username) {
    if (!window.isFetchingPublicProfile) {
      window.isFetchingPublicProfile = true;
      fetch('' + `/api/v1/users/${username}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            window.planexPublicProfile = data;
          } else {
            window.planexPublicProfile = { error: data.message };
          }
          window.renderApp();
        })
        .finally(() => window.isFetchingPublicProfile = false);
    }
  }

  // Ensure global share function is available
  if (!window.shareProfile) {
    window.shareProfile = (url, name) => {
      const shareData = {
        title: `پروفایل مطالعاتی ${name} در پلنکس`,
        text: `من در حال استفاده از پلنکس برای مدیریت زمان و پیگیری عاداتم هستم. پروفایل من رو ببین!`,
        url: url
      };
      
      if (navigator.share) {
        navigator.share(shareData).then(() => {
          showToast('لینک پروفایل به اشتراک گذاشته شد.');
        }).catch(err => {
          // Fallback if sharing is cancelled or fails
          copyToClipboard(url);
        });
      } else {
        // Fallback for desktop browsers without Web Share API
        copyToClipboard(url);
      }
    };
    
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('لینک پروفایل در کلیپ‌بورد کپی شد!');
      });
    }

    function showToast(msg) {
      // Basic toast implementation
      const toast = document.createElement('div');
      toast.innerText = msg;
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = '#10b981';
      toast.style.color = 'white';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '30px';
      toast.style.zIndex = '9999';
      toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s';
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    }
  }
  
  if (!window.planexPublicProfile) {
    return `
      <div class="main-container" style="display: flex; align-items: center; justify-content: center; height: 100vh;">
        <div style="text-align: center; color: var(--text-secondary);">
          <div style="font-size: 2rem; margin-bottom: 10px;">⏳</div>
          <div>در حال بارگذاری پروفایل...</div>
        </div>
      </div>
    `;
  }

  if (window.planexPublicProfile.error) {
    return `
      <div class="main-container" style="padding: 40px 20px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 20px;">👤❓</div>
        <h2 style="color: #ef4444; margin-bottom: 10px;">خطا در دریافت پروفایل</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">${window.planexPublicProfile.error}</p>
        <button onclick="window.history.pushState({}, '', '/'); window.renderApp();" class="btn-primary" style="padding: 10px 20px;">بازگشت به خانه</button>
      </div>
    `;
  }

  const { user, routines, followers_count, following_count } = window.planexPublicProfile;
  const toPersianDigits = (n) => String(n || 0).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  
  const currentUrl = `${window.location.protocol}//${window.location.host}/u/${user.username}`;

  return `
    <div class="main-container" style="padding-bottom: 100px;">
      
      <!-- Back Button & Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <button onclick="window.history.pushState({}, '', '/'); window.renderApp();" class="btn-icon" style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; border: none; color: var(--text-primary);">
          <span>بازگشت</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 5px;">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <button onclick="window.shareProfile('${currentUrl}', '${user.full_name}')" class="btn-primary" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 8px 16px; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          اشتراک‌گذاری پروفایل
        </button>
      </div>

      <!-- Profile Card -->
      <div class="glass-panel" style="padding: 30px 20px; text-align: center; border-color: rgba(99, 102, 241, 0.4); margin-bottom: 20px;">
        <img src="${user.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + user.id}" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=' + '${user.id}'" style="width: 100px; height: 100px; border-radius: 50%; border: 4px solid #6366f1; margin-bottom: 15px; background: rgba(255,255,255,0.1);" />
        <h2 style="font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 5px;">${user.full_name || 'کاربر پلنکس'}</h2>
        <div style="font-size: 0.9rem; color: #818cf8; margin-bottom: 15px; font-family: 'Outfit';">@${user.username}</div>
        
        <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 25px;">
          <div style="background: rgba(255,255,255,0.05); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; color: var(--text-secondary);">
            🎓 ${user.education_level || 'مشخص نشده'}
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; color: var(--text-secondary);">
            📚 ${user.major || 'مشخص نشده'}
          </div>
        </div>

        <div style="display: flex; justify-content: space-around; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 16px;">
          <div>
            <div style="font-family: 'Outfit'; font-size: 1.3rem; font-weight: bold; color: white;">${toPersianDigits(followers_count)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">دنبال‌کننده</div>
          </div>
          <div>
            <div style="font-family: 'Outfit'; font-size: 1.3rem; font-weight: bold; color: #f59e0b;">${toPersianDigits(Math.floor(user.total_focus_minutes / 60))}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">ساعت مطالعه</div>
          </div>
          <div>
            <div style="font-family: 'Outfit'; font-size: 1.3rem; font-weight: bold; color: white;">${toPersianDigits(following_count)}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">دنبال‌شونده</div>
          </div>
        </div>
        
        <button onclick="window.followUser('${user.id}')" class="btn-primary" style="margin-top: 25px; width: 100%; max-width: 250px; background: rgba(99, 102, 241, 0.2); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.5);">
          دنبال کردن ➕
        </button>
      </div>

      <!-- Public Routines -->
      <h3 style="font-size: 1.2rem; color: #a855f7; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
        ✨ روتین‌های عمومی ${user.full_name}
      </h3>
      
      ${(!routines || routines.length === 0) ? `
        <div class="glass-panel" style="padding: 30px; text-align: center; color: var(--text-secondary);">
          این کاربر هنوز روتین عمومی به اشتراک نگذاشته است.
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;">
          ${routines.map(r => `
            <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <div style="font-weight: 800; color: white;">${r.title}</div>
                <span style="background: rgba(168,85,247,0.2); color: #d8b4fe; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; font-family: 'Outfit';">
                  ${toPersianDigits(r.copy_count)} کپی
                </span>
              </div>
              <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 15px; line-height: 1.5; height: 36px; overflow: hidden; text-overflow: ellipsis;">
                ${r.description || 'بدون توضیحات...'}
              </p>
              <button onclick="window.copyPublicRoutine('${r.id}')" class="btn-primary" style="width: 100%; padding: 8px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); font-size: 0.85rem;">
                📥 کپی به روتین‌های من
              </button>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}
