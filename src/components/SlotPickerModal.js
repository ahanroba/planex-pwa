import { db } from '../db.js';
import { formatSlotRange } from '../views/DashboardView.js';
import { isStudyCategory } from '../constants.js';

export function renderSlotPickerModal(selectedDayIndex, slotIndex) {
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;
  const hourlyLogs = db.getHourlyLogs(weekId);
  const slotKey = `${selectedDayIndex}_${slotIndex}`;
  const currentLog = hourlyLogs[slotKey] || {};

  const categories = db.getCategories();
  const categoryMap = {};
  categories.forEach(c => { categoryMap[c.code] = c; });

  const customSubjects = db.getCustomSubjects();
  const defaultSubjects = [
    "زیست‌شناسی", "ریاضیات", "فیزیک", "شیمی", "ادبیات", "زبان انگلیسی", "دین و زندگی", "زمین‌شناسی"
  ];

  const allSubjects = Array.from(new Set([...defaultSubjects, ...customSubjects]));
  const daysFa = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

  const selectedCatObj = categoryMap[currentLog.categoryCode];
  const isAcademicSelected = selectedCatObj ? isStudyCategory(selectedCatObj) : true;

  return `
    <div class="modal-overlay" id="modal-slot-picker" style="backdrop-filter: blur(16px);">
      <div class="modal-card" style="max-width: 580px; max-height: 90vh; overflow-y: auto; background: rgba(15, 23, 42, 0.95); border-color: rgba(99, 102, 241, 0.4);">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
          <div>
            <div class="modal-title" style="color: var(--primary-accent); display: flex; align-items: center; gap: 8px;">
              ⏱️ تخصیص فعالیت: پارت ${slotIndex + 1} (${formatSlotRange(slotIndex)})
            </div>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${daysFa[selectedDayIndex]} - انتخاب فعالیت نیم ساعته</span>
          </div>
          <button class="btn-close" id="btn-close-slot-modal">✕</button>
        </div>

        <!-- 1. Category Picker Grid -->
        <label class="input-label" style="margin-top: 12px; margin-bottom: 8px; display: block; font-weight: bold; color: white;">
          ۱. انتخاب دسته‌بندی فعالیت:
        </label>
        <div class="category-picker-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px;">
          ${categories.map(c => `
            <button class="cat-pick-btn ${currentLog.categoryCode === c.code ? 'selected' : ''}" data-code="${c.code}" data-group="${c.group}" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1.5px solid ${currentLog.categoryCode === c.code ? c.color : 'rgba(255,255,255,0.1)'}; border-right: 4px solid ${c.color}; cursor: pointer; text-align: right; color: white;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: ${c.color}; box-shadow: 0 0 6px ${c.color}80; flex-shrink: 0;"></span>
              <span style="font-size: 1.2rem;">${c.icon || '📌'}</span>
              <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <div style="font-size: 0.85rem; font-weight: bold; color: ${c.color};">${c.title}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary);">${c.group} (${c.code})</div>
              </div>
            </button>
          `).join('')}
          <button class="cat-pick-btn ${currentLog.categoryCode === '-' ? 'selected' : ''}" data-code="-" data-group="خالی" style="grid-column: span 2; padding: 10px; border-radius: 12px; background: rgba(239,68,68,0.1); border: 1.5px solid rgba(239,68,68,0.3); color: #fca5a5; cursor: pointer; text-align: center; font-size: 0.85rem;">
            🚫 پاک کردن پارت (خالی)
          </button>
        </div>

        <!-- 2. Academic Study Specific Fields (Visible ONLY when Study/Academic Category selected) -->
        <div id="academic-fields-wrapper" style="display: ${isAcademicSelected ? 'block' : 'none'}; background: rgba(255,255,255,0.03); border: 1px solid rgba(56, 189, 248, 0.3); padding: 14px; border-radius: 16px; margin-bottom: 14px;">
          <div style="font-weight: bold; font-size: 0.9rem; color: #38bdf8; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
            📚 جزئیات درس، تست و روش مطالعه (مخصوص فعالیت علمی):
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">نام درس (Subject):</label>
              <select id="slot-subject-select" class="form-input" style="width: 100%;">
                <option value="">-- انتخاب درس --</option>
                ${allSubjects.map(s => `
                  <option value="${s}" ${currentLog.subject === s ? 'selected' : ''}>${s}</option>
                `).join('')}
              </select>
            </div>

            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">تعداد تست حل‌شده:</label>
              <input type="number" id="slot-test-count-input" class="form-input" style="width: 100%; text-align: center; font-family: 'Outfit';" value="${currentLog.testCount || ''}" placeholder="مثلا ۲۰" min="0" />
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">روش مطالعه / نوع کار:</label>
            <div style="display: flex; gap: 8px;">
              ${['تستی 📝', 'تشریحی 📖', 'ترکیبی 🔄', 'مرور 🔁'].map(m => `
                <button class="btn-slot-method ${currentLog.studyMethod === m ? 'active btn-primary' : 'glass-panel'}" data-method="${m}" style="flex: 1; padding: 6px 4px; font-size: 0.75rem; border: none; cursor: pointer;">
                  ${m}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 3. Short Note & Description -->
        <div class="input-group" style="margin-bottom: 10px;">
          <label class="input-label" style="color: white; font-weight: bold;">توضیحات و مبحث این پارت (Description):</label>
          <input type="text" id="slot-desc-input" class="form-input" value="${currentLog.description || currentLog.note || ''}" placeholder="مثلا: فصل ۲ گفتار ۳ - مبحث گوارش و جذب مواد" />
        </div>

        <!-- 4. Performance Rating (1 to 5 Stars) -->
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; margin-bottom: 16px;">
          <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold;">کیفیت و بازدهی پارت:</span>
          <div id="slot-rating-wrapper" data-rating="${currentLog.rating || 3}" style="display: flex; gap: 6px; font-size: 1.3rem;">
            ${[1, 2, 3, 4, 5].map(star => `
              <span class="star-rating-btn" data-star="${star}" style="cursor: pointer; opacity: ${(currentLog.rating || 3) >= star ? '1' : '0.3'};">⭐</span>
            `).join('')}
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; gap: 10px;">
          <button id="btn-save-slot" class="btn-primary" style="flex: 2; padding: 12px; font-size: 1rem; font-weight: bold; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
            💾 ذخیره قطعی فعالیت پارت
          </button>
          <button id="btn-clear-slot" class="glass-panel" style="flex: 1; padding: 12px; color: #ef4444; border-color: rgba(239,68,68,0.3); cursor: pointer;">
            🗑️ پاک کردن
          </button>
        </div>
      </div>
    </div>
  `;
}
