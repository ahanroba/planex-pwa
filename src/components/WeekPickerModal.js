import { db } from '../db.js';

export function renderWeekPickerModal() {
  const activeWeek = db.getCurrentWeek();
  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const years = [1404, 1405, 1406, 1407];
  const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

  const selectedYear = window.pickerViewYear || activeWeek.year;
  const selectedMonthIdx = window.pickerViewMonthIdx || activeWeek.monthIdx;

  return `
    <div class="modal-overlay" id="modal-week-picker" style="backdrop-filter: blur(16px); z-index: 10000;">
      <div class="modal-card" style="max-width: 520px; border-color: rgba(99, 102, 241, 0.5); background: rgba(15, 23, 42, 0.98); border-radius: 24px; padding: 24px;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 16px;">
          <div class="modal-title" style="color: #38bdf8; display: flex; align-items: center; gap: 8px; font-weight: 800;">
            📅 انتخاب و پیمایش سال، ماه و هفته
          </div>
          <button class="btn-close" id="btn-close-week-modal">✕</button>
        </div>

        <!-- 1. Year Selector -->
        <div style="margin-bottom: 16px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); display: block; margin-bottom: 8px;">
            ۱. انتخاب سال شمسی:
          </label>
          <div style="display: flex; gap: 8px;">
            ${years.map(y => `
              <button class="btn-picker-year btn-header-action ${selectedYear === y ? 'btn-primary' : ''}" data-year="${y}" style="flex: 1; padding: 8px; font-size: 0.9rem; font-weight: bold; border-radius: 12px;">
                ${toPersianDigits(y)}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 2. Month Selector -->
        <div style="margin-bottom: 18px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); display: block; margin-bottom: 8px;">
            ۲. انتخاب ماه:
          </label>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
            ${months.map((m, idx) => {
              const mIdx = idx + 1;
              const isSelected = selectedMonthIdx === mIdx;
              return `
                <button class="btn-picker-month btn-header-action ${isSelected ? 'btn-primary' : ''}" data-month="${mIdx}" style="padding: 8px 4px; font-size: 0.82rem; font-weight: bold; border-radius: 10px; text-align: center;">
                  ${m}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 3. Week Selector for Selected Month -->
        <div style="margin-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; display: block; margin-bottom: 10px;">
            ۳. انتخاب هفته در ${months[selectedMonthIdx - 1]} ${toPersianDigits(selectedYear)}:
          </label>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${Array.from({ length: db.getWeeksInMonth(selectedYear, selectedMonthIdx) }, (_, i) => i + 1).map(wNum => {
              const weekKey = `${selectedYear}_${selectedMonthIdx}_${wNum}`;
              const weekObj = db.getWeekObject(selectedYear, selectedMonthIdx, wNum);
              const isActive = activeWeek.id === weekKey;
              const hasData = db.hasDataForWeek(weekKey);

              return `
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${isActive ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.04)'}; border: 1.5px solid ${isActive ? '#6366f1' : 'rgba(255,255,255,0.08)'}; border-radius: 14px; padding: 10px 14px;">
                  <div>
                    <strong style="font-size: 0.92rem; display: block; color: ${isActive ? '#38bdf8' : 'white'};">
                      ${weekObj.weekNumber} (${weekObj.dateRange})
                    </strong>
                    <span style="font-size: 0.78rem; color: var(--text-secondary);">
                      ${weekObj.status === 'future' ? '⏳ هنوز شروع نشده است' : (hasData ? '✅ دارای فعالیت ثبت‌شده' : '📌 بدون فعالیت ثبت‌شده')}
                    </span>
                  </div>

                  <button class="btn-select-week-key btn-primary" data-key="${weekKey}" style="font-size: 0.82rem; padding: 6px 14px; background: ${isActive ? '#10b981' : 'var(--primary-accent)'};">
                    ${isActive ? '✓ هفته فعال' : 'انتخاب'}
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Reset Button -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px;">
          <button id="btn-reset-to-today-week" class="btn-header-action" style="padding: 8px 16px; font-weight: bold; border-color: #10b981; color: #10b981;">
            🔄 بازگشت به هفته جاری (امروز)
          </button>
          
          <button class="btn-close" id="btn-close-week-modal-bottom" style="padding: 8px 16px; font-size: 0.82rem; background: none; border: none; color: var(--text-muted); cursor: pointer;">
            بستن ✕
          </button>
        </div>

      </div>
    </div>
  `;
}
