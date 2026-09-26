export function renderPublicProfileModal(profileData) {
  if (!profileData) return '';

  const { full_name, avatar_url, created_at, total_focus_minutes, routines, username, field_of_study } = profileData;
  const joinDate = new Date(created_at).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long' });
  const focusHours = Math.floor((total_focus_minutes || 0) / 60);
  const displayName = full_name || username || 'کاربر پلنکس';
  const handle = username ? `@${username}` : '';
  const fieldBadge = field_of_study ? `<div style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.15); padding: 3px 10px; border-radius: 12px; display: inline-block; margin-top: 6px; font-weight: 500;">🎓 ${field_of_study}</div>` : '';

  let socialLinks = null;
  if (profileData.social_links) {
    try {
      socialLinks = typeof profileData.social_links === 'string' ? JSON.parse(profileData.social_links) : profileData.social_links;
    } catch(e) {}
  }

  const socialHtml = socialLinks ? `
    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 12px;">
      ${socialLinks.telegram ? `<a href="https://t.me/${socialLinks.telegram.replace('@', '')}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="تلگرام">✈️</a>` : ''}
      ${socialLinks.instagram ? `<a href="https://instagram.com/${socialLinks.instagram.replace('@', '')}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="اینستاگرام">📸</a>` : ''}
      ${socialLinks.linkedin ? `<a href="${socialLinks.linkedin.startsWith('http') ? socialLinks.linkedin : 'https://'+socialLinks.linkedin}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="لینکدین / گیت‌هاب">💼</a>` : ''}
      ${socialLinks.website ? `<a href="${socialLinks.website.startsWith('http') ? socialLinks.website : 'https://'+socialLinks.website}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="وب‌سایت">🌐</a>` : ''}
    </div>
  ` : '';

  return `
    <div class="modal-overlay" style="display: flex;">
      <div class="modal-content" style="max-width: 500px; padding: 0; overflow: hidden; background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1);">
        
        <!-- Header / Banner -->
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2)); padding: 30px 20px 20px; position: relative; text-align: center;">
          <button id="btn-close-public-profile" class="btn-icon" style="position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.3); border-radius: 50%;">✖</button>
          
          <img src="${avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + full_name}" 
               style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #10b981; object-fit: cover; margin-bottom: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" />
          
          <h2 style="margin: 0 0 5px 0; color: white; font-size: 1.4rem;">${displayName}</h2>
          ${handle ? `<div style="font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 5px;">${handle}</div>` : ''}
          ${fieldBadge}
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 6px;">عضویت از: ${joinDate}</div>
          ${socialHtml}
        </div>

        <!-- Stats -->
        <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #10b981; font-weight: bold; margin-bottom: 4px;">${focusHours}h</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">کل ساعت تمرکز</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #3b82f6; font-weight: bold; margin-bottom: 4px;">${routines ? routines.length : 0}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">روتین عمومی</div>
          </div>
        </div>

        <!-- Routines List -->
        <div style="padding: 20px; max-height: 400px; overflow-y: auto;">
          <h3 style="font-size: 1rem; color: white; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
            📋 روتین‌های به اشتراک‌گذاشته‌شده
          </h3>
          
          ${(!routines || routines.length === 0) ? 
            '<div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 0.9rem;">این کاربر هنوز روتین عمومی نساخته است.</div>' : 
            routines.map(r => `
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; margin-bottom: 12px; transition: 0.2s;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                  <div>
                    <div style="font-size: 1rem; color: #60a5fa; font-weight: bold; margin-bottom: 4px;">${r.title}</div>
                    ${r.description ? `<div style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">${r.description}</div>` : ''}
                  </div>
                  <button onclick="window.copyPublicRoutine('${r.id}')" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; white-space: nowrap; border-radius: 8px;">➕ کپی روتین</button>
                </div>
                
                <div style="margin-top: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                  <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 6px;">آیتم‌های روتین:</div>
                  ${r.items && r.items.length > 0 ? 
                    `<ul style="margin: 0; padding-right: 20px; font-size: 0.8rem; color: #d1d5db; display: flex; flex-direction: column; gap: 4px;">
                      ${r.items.map(item => `
                        <li>${item.title} <span style="color: #10b981;">(${item.duration_minutes || 0} دقیقه)</span></li>
                      `).join('')}
                    </ul>` 
                    : '<div style="font-size: 0.75rem; color: rgba(255,255,255,0.3);">بدون آیتم</div>'
                  }
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
    </div>
  `;
}
