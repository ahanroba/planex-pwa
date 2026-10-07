// Progressive Onboarding Wizard Component for PlanEx Web
// Step 1: Education Level | Step 2: Major & University | Step 3: Age, Gender & Username

export function renderOnboardingModal(step = 1, currentData = {}) {
  const educationOptions = [
    { value: 'کنکوری ۱۴۰۵', label: '🎯 کنکوری ۱۴۰۵', desc: 'آماده‌سازی برای کنکور سراسری' },
    { value: 'کنکوری ۱۴۰۶', label: '🎯 کنکوری ۱۴۰۶', desc: 'آماده‌سازی برای کنکور سراسری' },
    { value: 'کنکوری ۱۴۰۷', label: '🎯 کنکوری ۱۴۰۷', desc: 'آماده‌سازی برای کنکور سراسری' },
    { value: 'دوازدهم', label: '📚 پایه دوازدهم', desc: 'مدرسه و نهایی' },
    { value: 'یازدهم', label: '📖 پایه یازدهم', desc: 'مدرسه و کنکوری' },
    { value: 'دهم', label: '📗 پایه دهم', desc: 'مدرسه و تقویت پایه' },
    { value: 'دانشجو', label: '🎓 دانشجوی دانشگاه', desc: 'دانشگاهی و آزمون‌های ارشد/دکترا' },
    { value: 'سایر', label: '🌟 سایر / مطالعه آزاد', desc: 'یادگیری مهارت و برنامه‌ریزی شخصی' }
  ];

  const majorOptions = [
    { value: 'علوم تجربی', label: '🧬 علوم تجربی' },
    { value: 'ریاضی فیزیک', label: '📐 ریاضی و فیزیک' },
    { value: 'علوم انسانی', label: '⚖️ علوم انسانی' },
    { value: 'پزشکی و علوم پزشکی', label: '🩺 پزشکی / پیراپزشکی' },
    { value: 'مهندسی و کامپیوتر', label: '💻 مهندسی و کامپیوتر' },
    { value: 'هنر و معماری', label: '🎨 هنر و معماری' },
    { value: 'زبان‌های خارجی', label: '🌐 زبان‌های خارجی' },
    { value: 'سایر', label: '✨ سایر رشته‌ها' }
  ];

  return `
    <div class="modal-overlay" id="modal-onboarding-wizard" style="backdrop-filter: blur(20px); z-index: 9999;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.98); border: 1px solid rgba(129, 140, 248, 0.4); border-radius: 28px; padding: 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);" dir="rtl">
        
        <!-- Header & Progress Indicator -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-flex; items-center; justify-content: center; width: 56px; height: 56px; background: linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%); border: 1px solid rgba(168,85,247,0.4); border-radius: 20px; font-size: 1.8rem; margin-bottom: 12px;">
            ${step === 1 ? '🚀' : step === 2 ? '🎓' : '👤'}
          </div>
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">
            ${step === 1 ? 'خوش آمدید! مقطع تحصیلی خود را انتخاب کنید' : step === 2 ? 'رشته و هدف شما چیست؟' : 'تکمیل ساخت پروفایل عمومی'}
          </h2>
          <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;">
            گام ${step} از ۳ • این اطلاعات برای پیشنهاد اتاق‌های مطالعه همرشته‌ای‌ها استفاده می‌شود
          </p>
          <div style="font-size: 0.78rem; color: #fde68a; background: rgba(234, 179, 8, 0.12); border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 12px; padding: 8px 12px; margin-bottom: 16px; line-height: 1.7;">
            💡 نکته برای همگام‌سازی پایدار: برای تبادل سریع‌تر داده‌ها با سرور ابری، لطفاً فیلترشکن (VPN) خود را خاموش کنید.
          </div>

          <!-- Step Progress Bar -->
          <div style="display: flex; gap: 8px; justify-content: center;">
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${step >= 1 ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.1)'}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${step >= 2 ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.1)'}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${step >= 3 ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.1)'}; transition: all 0.3s;"></div>
          </div>
        </div>

        <!-- Wizard Step Content -->
        ${step === 1 ? `
          <!-- STEP 1: Education Level -->
          <div style="display: grid; gap: 10px; margin-bottom: 24px;">
            ${educationOptions.map(opt => `
              <div class="onboarding-opt-card ${currentData.education_level === opt.value ? 'selected' : ''}" 
                   data-value="${opt.value}"
                   style="padding: 14px 18px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${currentData.education_level === opt.value ? '#a855f7' : 'rgba(255,255,255,0.08)'}; border-radius: 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-weight: 700; font-size: 0.98rem; color: #f1f5f9;">${opt.label}</div>
                  <div style="font-size: 0.78rem; color: #64748b;">${opt.desc}</div>
                </div>
                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid ${currentData.education_level === opt.value ? '#a855f7' : '#475569'}; background: ${currentData.education_level === opt.value ? '#a855f7' : 'transparent'};"></div>
              </div>
            `).join('')}
          </div>
        ` : step === 2 ? `
          <!-- STEP 2: Major & University -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 8px;">انتخاب رشته تحصیلی:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
              ${majorOptions.map(opt => `
                <div class="onboarding-major-card ${currentData.major === opt.value ? 'selected' : ''}" 
                     data-value="${opt.value}"
                     style="padding: 12px 14px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${currentData.major === opt.value ? '#a855f7' : 'rgba(255,255,255,0.08)'}; border-radius: 14px; cursor: pointer; text-align: center; font-size: 0.9rem; font-weight: 600; color: #f1f5f9; transition: all 0.2s;">
                  ${opt.label}
                </div>
              `).join('')}
            </div>

            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 6px;">نام مدرسه یا دانشگاه (اختیاری):</label>
            <input type="text" id="onboarding-input-uni" class="form-input" placeholder="مثلاً: دانشگاه تهران یا دبیرستان فرزانگان" value="${currentData.university || ''}" style="width: 100%; padding: 12px 16px; border-radius: 14px; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.15); color: white; font-size: 0.9rem;" />
          </div>
        ` : `
          <!-- STEP 3: Age, Gender & Username -->
          <div style="margin-bottom: 24px;">
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 6px;">شناسه عمومی در پلنکس (آدرس پروفایل):</label>
              <div style="position: relative;">
                <span style="position: absolute; left: 14px; top: 12px; font-family: 'Outfit'; color: #818cf8; font-size: 0.88rem; dir: ltr;">planexapp.ir/u/</span>
                <input type="text" id="onboarding-input-username" class="form-input" placeholder="my_username" value="${currentData.username || ''}" style="width: 100%; padding: 12px 16px 12px 140px; border-radius: 14px; background: rgba(15,23,42,0.8); border: 1px solid rgba(129, 140, 248, 0.5); color: white; font-size: 0.95rem; font-family: 'Outfit';" dir="ltr" maxLength="20" />
              </div>
              <span style="font-size: 0.78rem; color: #94a3b8; display: block; margin-top: 4px;">شامل حروف انگلیسی، اعداد و خط زیر (_)</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 6px;">رده سنی:</label>
                <select id="onboarding-select-age" class="form-input" style="width: 100%; padding: 12px; border-radius: 14px; background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.15); color: white;">
                  <option value="زیر ۱۵ سال" ${currentData.age_group === 'زیر ۱۵ سال' ? 'selected' : ''}>زیر ۱۵ سال</option>
                  <option value="۱۵ تا ۱۸ سال" ${currentData.age_group === '۱۵ تا ۱۸ سال' || !currentData.age_group ? 'selected' : ''}>۱۵ تا ۱۸ سال (مدرسه/کنکور)</option>
                  <option value="۱۹ تا ۲۴ سال" ${currentData.age_group === '۱۹ تا ۲۴ سال' ? 'selected' : ''}>۱۹ تا ۲۴ سال (دانشجو)</option>
                  <option value="۲۵ سال به بالا" ${currentData.age_group === '۲۵ سال به بالا' ? 'selected' : ''}>۲۵ سال به بالا</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-weight: 700; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 6px;">جنسیت:</label>
                <select id="onboarding-select-gender" class="form-input" style="width: 100%; padding: 12px; border-radius: 14px; background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.15); color: white;">
                  <option value="پسر" ${currentData.gender === 'پسر' ? 'selected' : ''}>پسر</option>
                  <option value="دختر" ${currentData.gender === 'دختر' ? 'selected' : ''}>دختر</option>
                  <option value="ترجیح می‌دهم بگویم" ${currentData.gender === 'ترجیح می‌دهم بگویم' ? 'selected' : ''}>سایر</option>
                </select>
              </div>
            </div>
          </div>
        `}

        <!-- Footer Actions -->
        <div style="display: flex; gap: 12px; align-items: center;">
          ${step > 1 ? `
            <button id="btn-onboarding-prev" class="glass-panel" style="padding: 12px 20px; border-radius: 14px; color: #cbd5e1; font-weight: 600; cursor: pointer;">
              ← بازگشت
            </button>
          ` : ''}
          <button id="btn-onboarding-next" class="btn-primary" style="flex: 1; padding: 14px; border-radius: 14px; font-weight: 800; font-size: 1rem; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); border: none; cursor: pointer; box-shadow: 0 10px 20px -5px rgba(168,85,247,0.4);">
            ${step === 3 ? '🎉 ورود به برنامه‌ریزی و استفاده از اپلیکیشن' : 'مرحله بعدی →'}
          </button>
        </div>

        <div style="margin-top: 16px; text-align: center; font-size: 0.78rem; color: #64748b;">
          🛡️ اطلاعات شما به صورت کاملاً امن نگهداری می‌شود و صرفاً جهت شبکه مسئولیت‌پذیری استفاده می‌شود.
        </div>

      </div>
    </div>
  `;
}
