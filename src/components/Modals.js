import { ACTIVITY_PALETTE_24 } from '../constants.js';

export function renderAddHabitModal() {
  const emojis = ['✨', '💧', '🏃', '😴', '🚶', '🧘', '🥗', '📚', '🛌', '🌙', '☕', '💊', '💻', '🎯', '🔥', '⭐', '📝', '🍎'];
  
  return `
    <div class="modal-overlay" id="modal-add-habit" style="display: none;">
      <div class="modal-card" style="max-width: 440px;">
        <div class="modal-header">
          <div class="modal-title">✨ افزودن عادت جدید</div>
          <button class="btn-close" onclick="document.getElementById('modal-add-habit').style.display='none'">✕</button>
        </div>
        
        <label class="input-label" style="margin-bottom: 8px; display: block;">انتخاب آیکون / ایموجی</label>
        <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 16px;">
          ${emojis.map(e => `
            <button type="button" class="habit-emoji-btn" data-emoji="${e}" style="background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 12px; font-size: 1.4rem; cursor: pointer; padding: 6px; transition: var(--transition-fast); display: flex; align-items: center; justify-content: center;" onclick="if(window.selectHabitEmoji) window.selectHabitEmoji('${e}'); document.querySelectorAll('.habit-emoji-btn').forEach(btn => { btn.style.background='rgba(255,255,255,0.05)'; btn.style.borderColor='var(--glass-border)'; }); this.style.background='rgba(56, 189, 248, 0.25)'; this.style.borderColor='#38bdf8';">${e}</button>
          `).join('')}
        </div>
        
        <div class="input-group">
          <label class="input-label">عنوان عادت</label>
          <input type="text" id="habit-title-modal" class="form-input" placeholder="مثال: نوشیدن ۸ لیوان آب">
        </div>
        
        <button id="btn-save-habit" class="btn-primary" style="margin-top: 15px;" onclick="const titleEl = document.getElementById('habit-title-modal'); const title = titleEl ? titleEl.value.trim() : ''; if(!title) return alert('عنوان را وارد کنید'); const emoji = window.habitModalSelectedEmoji || '✨'; db.addHabit(title, 'روزانه', '08:00', emoji); document.getElementById('modal-add-habit').style.display='none'; renderApp();">ذخیره عادت</button>
      </div>
    </div>
  `;
}

export function renderAddCategoryModal() {
  const colors = ACTIVITY_PALETTE_24;
  
  return `
    <div class="modal-overlay" id="modal-add-category" style="display: none;">
      <div class="modal-card" style="max-width: 480px;">
        <div class="modal-header">
          <div class="modal-title">🎨 افزودن دسته‌بندی جدید</div>
          <button class="btn-close" onclick="document.getElementById('modal-add-category').style.display='none'">✕</button>
        </div>
        
        <div class="input-group">
          <label class="input-label">عنوان دسته‌بندی</label>
          <input type="text" id="cat-title" class="form-input" placeholder="مثال: تست‌زنی اختصاصی">
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div class="input-group">
            <label class="input-label">کد (مخفف)</label>
            <input type="text" id="cat-code" class="form-input" placeholder="مثال: ت-ا">
          </div>
          <div class="input-group">
            <label class="input-label">نوع فعالیت</label>
            <select id="cat-group" class="form-select">
              <option value="علمی">📚 فعالیت علمی (مطالعه، تست و ...)</option>
              <option value="غیرعلمی">☕ فعالیت غیرعلمی (استراحت و ...)</option>
            </select>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 12px; padding: 12px 14px; margin: 12px 0; display: flex; align-items: flex-start; gap: 10px;">
          <span style="font-size: 1.1rem; flex-shrink: 0; line-height: 1.2;">💡</span>
          <div style="font-size: 0.8rem; line-height: 1.65; color: #fde68a; font-weight: 500;">
            <strong>نکته مهم:</strong> تنها فعالیت‌هایی که به عنوان «علمی» تعریف شوند، در محاسبه مجموع ساعت مطالعه، نمودارهای تحلیلی و تالار رقابت لحاظ می‌گردند.
          </div>
        </div>
        
        <label class="input-label" style="margin-top: 10px; display: block; font-weight: bold; color: white;">انتخاب رنگ از پالت ۲۴ تایی تفکیک‌شده:</label>
        <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; margin: 10px 0 20px; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
          ${colors.map((c, idx) => `
            <div class="color-picker-btn" data-color="${c}" style="background: ${c}; width: 100%; aspect-ratio: 1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${idx === 0 ? '#fff' : 'transparent'}; box-shadow: 0 2px 6px rgba(0,0,0,0.3); transition: transform 0.15s ease, border-color 0.15s ease;" onclick="document.querySelectorAll('.color-picker-btn').forEach(btn => { btn.style.borderColor='transparent'; btn.style.transform='scale(1)'; }); this.style.borderColor='#fff'; this.style.transform='scale(1.15)'; document.getElementById('cat-selected-color').value = '${c}';" title="رنگ ${idx + 1}"></div>
          `).join('')}
        </div>
        <input type="hidden" id="cat-selected-color" value="${colors[0]}">
        
        <button id="btn-save-category" class="btn-primary" style="margin-top: 5px;">💾 ذخیره دسته‌بندی</button>
      </div>
    </div>
  `;
}

export function renderAddCountdownModal() {
  return `
    <div class="modal-overlay" id="modal-add-countdown" style="display: none;">
      <div class="modal-card">
        <div class="modal-header">
          <div class="modal-title">افزودن روزشمار رویداد</div>
          <button class="btn-close" onclick="document.getElementById('modal-add-countdown').style.display='none'">✕</button>
        </div>
        
        <div class="input-group">
          <label class="input-label">عنوان رویداد</label>
          <input type="text" id="countdown-title" class="form-input" placeholder="مثال: کنکور سراسری یا آزمون جامع">
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
          <div class="input-group">
            <label class="input-label">روز</label>
            <input type="number" id="countdown-day" class="form-input" placeholder="۱۲" min="1" max="31">
          </div>
          <div class="input-group">
            <label class="input-label">ماه</label>
            <input type="number" id="countdown-month" class="form-input" placeholder="۴" min="1" max="12">
          </div>
          <div class="input-group">
            <label class="input-label">سال</label>
            <input type="number" id="countdown-year" class="form-input" placeholder="۱۴۰۴">
          </div>
        </div>
        
        <button id="btn-save-countdown" class="btn-primary" style="margin-top: 20px;">ذخیره رویداد</button>
      </div>
    </div>
  `;
}

export function renderAllModals() {
  return renderAddHabitModal() + renderAddCategoryModal() + renderAddCountdownModal();
}
