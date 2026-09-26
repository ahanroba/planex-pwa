// Full Page View for Mentorship & Private Consultation Plans
import { MENTORS_DATA, PRICING_PLANS, getTelegramConsultationUrl, renderLeadMagnetBanner, renderMentorAvatar } from '../components/ConsultationModal.js';

export function renderConsultationView() {
  return `
    <div class="main-container" style="padding-bottom: 110px;">
      
      <!-- Page Header -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div>
            <h2 style="font-size: 1.35rem; font-weight: 900; color: #fff; display: flex; align-items: center; gap: 8px;">
              <span>💎</span>
              <span style="background: linear-gradient(135deg, #fbbf24 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">پلن‌های مشاوره اختصاصی و انتخاب مشاور</span>
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
              مشاوره تخصصی و همراهی رتبه‌های برتر آزمون‌های سراسری در کنار متدولوژی هوشمند PlanEx
            </p>
          </div>
          <a href="http://t.me/medicalaa?direct" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: auto; padding: 10px 22px; font-size: 0.85rem; font-weight: 800; background: linear-gradient(135deg, #0284c7, #0ea5e9); text-decoration: none; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.4);">
            <span>💬 پیام به پشتیبانی تلگرام</span>
          </a>
        </div>
      </div>

      <!-- 🎁 Lead Magnet Banner: Free Analysis Gift -->
      ${renderLeadMagnetBanner()}

      <!-- 1. Exclusive Mentors List (Mentor Selection Cards) -->
      <div style="margin-bottom: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
            <span>👩‍⚕️</span>
            <span>مشاوران تخصصی و رتبه‌های برتر (رزرو مستقیم مشاور)</span>
          </h3>
          <span style="font-size: 0.78rem; color: var(--text-secondary); background: rgba(56, 189, 248, 0.1); padding: 4px 10px; border-radius: 10px; border: 1px solid rgba(56, 189, 248, 0.2); font-weight: 700;">
            ظرفیت محدود جهت حفظ کیفیت نظارت
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 18px;">
          ${MENTORS_DATA.map((m, idx) => {
            const borderClr = m.borderClr || (idx === 0 ? 'rgba(236, 72, 153, 0.55)' : (idx === 1 ? 'rgba(56, 189, 248, 0.45)' : (idx === 2 ? 'rgba(245, 158, 11, 0.55)' : 'rgba(16, 185, 129, 0.55)')));
            const shadowClr = m.shadowClr || (idx === 0 ? 'rgba(236, 72, 153, 0.3)' : (idx === 1 ? 'rgba(56, 189, 248, 0.3)' : (idx === 2 ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)')));
            const tagBg = m.tagBg || (idx === 0 ? 'linear-gradient(135deg, #ec4899, #8b5cf6)' : (idx === 1 ? 'linear-gradient(135deg, #0284c7, #06b6d4)' : (idx === 2 ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'linear-gradient(135deg, #10b981, #06b6d4)')));
            const tagTitle = m.tagTitle || (idx === 0 ? '⭐ مشاور ارشد پزشکی' : (idx === 1 ? '🔬 مشاور داروسازی و مدرس شیمی' : (idx === 2 ? '👑 مشاور ارشد و طراح رتبه‌برتر' : '📐 مشاور پزشکی و مدرس تخصصی ریاضی')));
            const avatarBg = m.avatarBg || (idx === 0 ? 'rgba(236, 72, 153, 0.15)' : (idx === 1 ? 'rgba(56, 189, 248, 0.15)' : (idx === 2 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)')));
            const avatarBorder = m.avatarBorder || (idx === 0 ? 'rgba(236, 72, 153, 0.4)' : (idx === 1 ? 'rgba(56, 189, 248, 0.4)' : (idx === 2 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.4)')));
            const badgeClr = m.badgeClr || (idx === 0 ? '#f472b6' : (idx === 1 ? '#38bdf8' : (idx === 2 ? '#fbbf24' : '#34d399')));
            const btnBg = m.btnBg || (idx === 0 ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' : (idx === 1 ? 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)' : (idx === 2 ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'linear-gradient(135deg, #059669 0%, #0d9488 100%)')));
            const btnBorder = m.btnBorder || (idx === 0 ? 'rgba(236, 72, 153, 0.4)' : (idx === 1 ? 'rgba(56, 189, 248, 0.4)' : (idx === 2 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.4)')));

            return `
              <div class="glass-panel glass-panel-interactive" style="position: relative; background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)); border: 1.5px solid ${borderClr}; border-radius: 22px; padding: 22px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 12px 34px -8px ${shadowClr};">
                
                <div style="position: absolute; top: -11px; right: 18px; background: ${tagBg}; color: #fff; font-size: 0.7rem; font-weight: 900; padding: 3px 12px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
                  ${tagTitle}
                </div>

                <div>
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; margin-top: 4px;">
                    ${renderMentorAvatar(m, 56)}
                    <div style="min-width: 0; flex: 1;">
                      <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
                        <h4 style="margin: 0; font-size: 1.08rem; font-weight: 900; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.name}</h4>
                        <span style="font-size: 0.78rem; color: #fbbf24; font-weight: 800; display: flex; align-items: center; gap: 2px;">
                          <span>⭐</span><span>${m.rating}</span>
                        </span>
                      </div>
                      <span style="font-size: 0.72rem; color: ${badgeClr}; font-weight: 800;">${m.badge}</span>
                    </div>
                  </div>

                  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 12px; margin-bottom: 12px;">
                    <p style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.5; margin: 0 0 4px 0; font-weight: 700;">
                      🎓 ${m.title}
                    </p>
                    <p style="font-size: 0.75rem; color: #fbbf24; margin: 0; font-weight: 800;">
                      🎖️ ${m.rank}
                    </p>
                  </div>

                  <div style="margin-bottom: 14px;">
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px;">
                      ${(m.keyFeatures || []).map(kf => `
                        <li style="display: flex; align-items: flex-start; gap: 7px; font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;">
                          <span style="color: ${badgeClr}; font-weight: 900; flex-shrink: 0;">✦</span>
                          <span>${kf.replace(/^✦\s*/, '')}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; font-weight: 800; margin-bottom: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06);">
                    <span style="color: #4ade80;">${m.capacityText}</span>
                    <span style="color: var(--text-muted);">${m.studentsCount} دانش‌آموز فعال</span>
                  </div>

                  <a href="${getTelegramConsultationUrl(m.telegramQuery)}" target="_blank" rel="noopener noreferrer"
                     style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 11px 14px; font-size: 0.86rem; font-weight: 800; text-decoration: none; border-radius: 12px; color: #fff; background: ${btnBg}; border: 1px solid ${btnBorder}; box-shadow: 0 4px 14px ${shadowClr};">
                    <span>${m.btnText}</span>
                  </a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 2. Subscription & Mentorship Pricing Plans (3 Cards) -->
      <div style="margin-bottom: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #fbbf24; display: flex; align-items: center; gap: 8px;">
            <span>🏷️</span>
            <span>پلن‌های پولی و پکیج‌های اشتراک مشاوره</span>
          </h3>
          <span style="font-size: 0.78rem; color: #fde68a; background: rgba(245, 158, 11, 0.15); padding: 4px 10px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.3); font-weight: 800;">
            پایش روزانه ماتریس + تماس هفتگی
          </span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; align-items: stretch;">
          ${PRICING_PLANS.map(p => `
            <div class="glass-panel glass-panel-interactive" style="position: relative; background: rgba(15, 23, 42, 0.85); border: ${p.isFeatured ? '2px' : '1.5px'} solid ${p.borderColor}; border-radius: 22px; padding: 22px 18px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 34px ${p.glowColor}; ${p.isFeatured ? 'transform: scale(1.02); z-index: 2;' : ''}">
              
              ${p.isFeatured ? `
                <div style="position: absolute; top: -12px; right: 20px; background: linear-gradient(135deg, #f59e0b, #e11d48); color: #fff; font-size: 0.72rem; font-weight: 900; padding: 3px 12px; border-radius: 12px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.5);">
                  👑 پیشنهاد ویژه و محبوب‌ترین
                </div>
              ` : ''}

              <div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                  <span style="font-size: 2rem;">${p.icon}</span>
                  <div>
                    <h4 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #fff;">${p.name}</h4>
                    <span style="font-size: 0.72rem; color: ${p.badgeColor}; background: ${p.badgeBg}; padding: 2px 8px; border-radius: 8px; font-weight: 800;">${p.badge}</span>
                  </div>
                </div>

                <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 16px 0; line-height: 1.6;">
                  ${p.subtitle}
                </p>

                <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px; margin-bottom: 18px;">
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                    ${p.features.map(f => `
                      <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: #e2e8f0; line-height: 1.6;">
                        <span style="color: #38bdf8; font-weight: 900; flex-shrink: 0; font-size: 0.95rem;">✓</span>
                        <span>${f}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <div>
                <a href="${getTelegramConsultationUrl(p.telegramQuery)}" target="_blank" rel="noopener noreferrer"
                   style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; font-size: 0.88rem; font-weight: 900; text-decoration: none; border-radius: 14px; color: #fff; background: ${p.btnBg}; border: none; box-shadow: 0 4px 16px ${p.glowColor}; transition: transform 0.2s ease;">
                  <span>${p.btnText}</span>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. Guarantee & Direct Support Banner -->
      <div class="glass-panel" style="padding: 20px; background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 22px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 52px; height: 52px; border-radius: 18px; background: linear-gradient(135deg, #38bdf8, #6366f1); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: 0 4px 16px rgba(56, 189, 248, 0.4); flex-shrink: 0;">
              🛡️
            </div>
            <div>
              <h4 style="margin: 0; font-size: 1.05rem; font-weight: 900; color: #fff;">ضمانت کیفیت و پشتیبانی مستقیم</h4>
              <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: #cbd5e1; line-height: 1.6;">
                تمامی برنامه‌ها متناسب با ماتریس ۲۴ ساعته PlanEx و اهداف درسی شما تنظیم و روزانه نظارت می‌شوند.
              </p>
            </div>
          </div>
          <a href="http://t.me/medicalaa?direct" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: auto; padding: 11px 24px; font-size: 0.86rem; font-weight: 900; background: linear-gradient(135deg, #0284c7, #0ea5e9); text-decoration: none; border-radius: 14px; white-space: nowrap;">
            ارتباط مستقیم در تلگرام 💬
          </a>
        </div>
      </div>

    </div>
  `;
}
