import { db } from '../db.js';
import { ACTIVITY_PALETTE_24, getNextActivityColor, isStudyCategory } from '../constants.js';

export const ACTIVITY_EMOJIS = ['📚', '📖', '📝', '🔬', '🧪', '📐', '💻', '👨‍🏫', '👥', '☕', '😴', '🏃', '🧘', '🚿', '💼', '🎮', '🍎', '🧹', '🎨', '🎵'];

/**
 * Global state for the Activity Modal (adding/editing)
 */
window.activityModalState = {
  isEditing: false,
  code: null,
  title: '',
  group: 'علمی',
  isStudy: true,
  color: ACTIVITY_PALETTE_24[0],
  icon: '📚'
};

/**
 * Open the Activity Modal for adding a new activity or editing an existing one
 * @param {string|null} codeToEdit
 */
window.openActivityModal = (codeToEdit = null) => {
  const categories = db.getCategories();
  
  if (codeToEdit) {
    const cat = categories.find(c => c.code === codeToEdit);
    if (cat) {
      const isStudy = isStudyCategory(cat);
      window.activityModalState = {
        isEditing: true,
        code: cat.code,
        title: cat.title || '',
        group: cat.group || (isStudy ? 'علمی' : 'غیرعلمی'),
        isStudy: isStudy,
        color: cat.color || ACTIVITY_PALETTE_24[0],
        icon: cat.icon || (isStudy ? '📚' : '☕')
      };
    }
  } else {
    const nextColor = getNextActivityColor(categories);
    window.activityModalState = {
      isEditing: false,
      code: null,
      title: '',
      group: 'علمی',
      isStudy: true,
      color: nextColor,
      icon: '📚'
    };
  }

  if (window.appState) {
    window.appState.activeModal = 'activity';
    if (typeof window.renderApp === 'function') window.renderApp();
  } else {
    const modalEl = document.getElementById('modal-activity-editor');
    if (modalEl) modalEl.style.display = 'flex';
  }
};

window.openNonStudyActivityModal = () => {
  const categories = db.getCategories();
  const nextColor = getNextActivityColor(categories);
  window.activityModalState = {
    isEditing: false,
    code: null,
    title: '',
    group: 'غیرعلمی',
    isStudy: false,
    color: nextColor,
    icon: '☕'
  };

  if (window.appState) {
    window.appState.activeModal = 'activity';
    if (typeof window.renderApp === 'function') window.renderApp();
  } else {
    const modalEl = document.getElementById('modal-activity-editor');
    if (modalEl) modalEl.style.display = 'flex';
  }
};

/**
 * Close the Activity Modal
 */
window.closeActivityModal = () => {
  if (window.appState && window.appState.activeModal === 'activity') {
    window.appState.activeModal = null;
    if (typeof window.renderApp === 'function') window.renderApp();
  } else {
    const modalEl = document.getElementById('modal-activity-editor');
    if (modalEl) modalEl.style.display = 'none';
  }
};

/**
 * Toggle Activity Type in modal
 * @param {boolean} isStudy
 */
window.setActivityModalType = (isStudy) => {
  window.activityModalState.isStudy = Boolean(isStudy);
  window.activityModalState.group = isStudy ? 'علمی' : 'غیرعلمی';
  if (!window.activityModalState.isEditing) {
    window.activityModalState.icon = isStudy ? '📚' : '☕';
  }
  
  const studyBtn = document.getElementById('act-type-study-btn');
  const nonStudyBtn = document.getElementById('act-type-nonstudy-btn');
  
  if (studyBtn && nonStudyBtn) {
    if (isStudy) {
      studyBtn.classList.add('active-type-selected');
      studyBtn.style.borderColor = '#38bdf8';
      studyBtn.style.background = 'rgba(56, 189, 248, 0.15)';
      studyBtn.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.3)';

      nonStudyBtn.classList.remove('active-type-selected');
      nonStudyBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      nonStudyBtn.style.background = 'rgba(255, 255, 255, 0.03)';
      nonStudyBtn.style.boxShadow = 'none';
    } else {
      nonStudyBtn.classList.add('active-type-selected');
      nonStudyBtn.style.borderColor = '#f59e0b';
      nonStudyBtn.style.background = 'rgba(245, 158, 11, 0.15)';
      nonStudyBtn.style.boxShadow = '0 0 14px rgba(245, 158, 11, 0.3)';

      studyBtn.classList.remove('active-type-selected');
      studyBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      studyBtn.style.background = 'rgba(255, 255, 255, 0.03)';
      studyBtn.style.boxShadow = 'none';
    }
  }
};

/**
 * Set Activity Modal Selected Color
 * @param {string} color
 */
window.setActivityModalColor = (color) => {
  window.activityModalState.color = color;
  document.querySelectorAll('#modal-activity-editor .act-color-btn').forEach(btn => {
    if (btn.dataset.color === color) {
      btn.style.borderColor = '#ffffff';
      btn.style.transform = 'scale(1.18)';
      btn.style.boxShadow = '0 0 10px rgba(255,255,255,0.6)';
    } else {
      btn.style.borderColor = 'transparent';
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    }
  });
};

/**
 * Set Activity Modal Selected Icon
 * @param {string} icon
 */
window.setActivityModalIcon = (icon) => {
  window.activityModalState.icon = icon;
  document.querySelectorAll('#modal-activity-editor .act-icon-btn').forEach(btn => {
    if (btn.dataset.icon === icon) {
      btn.style.borderColor = 'var(--primary-accent, #38bdf8)';
      btn.style.background = 'rgba(56, 189, 248, 0.2)';
    } else {
      btn.style.borderColor = 'rgba(255,255,255,0.08)';
      btn.style.background = 'rgba(255,255,255,0.03)';
    }
  });
};

/**
 * Save Activity From Modal
 */
window.saveActivityModal = () => {
  const titleInput = document.getElementById('activity-modal-title');
  const title = titleInput ? titleInput.value.trim() : window.activityModalState.title;
  
  if (!title) {
    alert('لطفاً عنوان فعالیت را وارد نمایید.');
    if (titleInput) titleInput.focus();
    return;
  }

  const { isEditing, code, isStudy, color, icon, group } = window.activityModalState;

  db.saveCategory({
    code: isEditing ? code : ('cust_' + Date.now()),
    title: title,
    group: isStudy ? 'علمی' : (group || 'غیرعلمی'),
    isStudy: Boolean(isStudy),
    color: color || ACTIVITY_PALETTE_24[0],
    icon: icon || (isStudy ? '📚' : '☕')
  });

  window.closeActivityModal();
  if (typeof window.renderApp === 'function') window.renderApp();
};

/**
 * Render the Activity Modal HTML
 */
export function renderActivityModal() {
  const s = window.activityModalState || {
    isEditing: false,
    code: null,
    title: '',
    group: 'علمی',
    isStudy: true,
    color: ACTIVITY_PALETTE_24[0],
    icon: '📚'
  };

  const isStudy = s.isStudy !== undefined ? s.isStudy === true : true;
  const modalTitle = s.isEditing ? '✏️ ویرایش فعالیت / درس' : '✨ تعریف و افزودن فعالیت جدید';

  return `
    <div class="modal-overlay" id="modal-activity-editor" style="display: flex; backdrop-filter: blur(16px); z-index: 1050;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-card" style="max-width: 520px; max-height: 92vh; overflow-y: auto; background: rgba(15, 23, 42, 0.97); border: 1.5px solid rgba(56, 189, 248, 0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.6); border-radius: 20px; padding: 22px;" onclick="event.stopPropagation();">
        
        <!-- Header -->
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 14px; margin-bottom: 18px; display: flex; align-items: center; justify-content: space-between;">
          <div class="modal-title" style="color: #38bdf8; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
            ${modalTitle}
          </div>
          <button type="button" class="btn-close" aria-label="بستن" onclick="window.closeActiveModal();">✕</button>
        </div>

        <!-- 1. Title Input -->
        <div class="input-group" style="margin-bottom: 18px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🏷️ عنوان فعالیت یا درس:
          </label>
          <input type="text" id="activity-modal-title" class="form-input" 
                 value="${s.title || ''}" 
                 placeholder="مثال: زیست‌شناسی، فیزیک، مطالعه آزاد، استراحت، ورزش، خواب..." 
                 style="width: 100%; font-size: 0.95rem; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 12px; color: white; outline: none; transition: 0.2s;"
                 onkeydown="if(event.key==='Enter') window.saveActivityModal();"
                 autofocus />
        </div>

        <!-- 2. Activity Type Selector (علمی / غیرعلمی) -->
        <div class="input-group" style="margin-bottom: 12px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🎯 نوع فعالیت (دسته‌بندی):
          </label>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <!-- Scientific / Study Option -->
            <div id="act-type-study-btn" 
                 class="act-type-card ${isStudy ? 'active-type-selected' : ''}" 
                 onclick="window.setActivityModalType(true)"
                 style="cursor: pointer; padding: 14px 12px; border-radius: 14px; border: 2px solid ${isStudy ? '#38bdf8' : 'rgba(255,255,255,0.1)'}; background: ${isStudy ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.03)'}; ${isStudy ? 'box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);' : ''} transition: all 0.2s ease; text-align: right;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 1.4rem;">📚</span>
                <span style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid ${isStudy ? '#38bdf8' : 'rgba(255,255,255,0.2)'}; display: flex; align-items: center; justify-content: center; background: ${isStudy ? '#38bdf8' : 'transparent'};">
                  ${isStudy ? '<span style="color: #0f172a; font-size: 0.75rem; font-weight: 900;">✓</span>' : ''}
                </span>
              </div>
              <strong style="display: block; font-size: 0.95rem; color: ${isStudy ? '#e0f2fe' : 'white'}; margin-bottom: 4px;">فعالیت علمی</strong>
              <span style="font-size: 0.75rem; color: ${isStudy ? '#7dd3fc' : 'var(--text-secondary)'}; line-height: 1.4; display: block;">
                مطالعه، تست، مرور، کلاس و آزمون
              </span>
            </div>

            <!-- Non-Scientific Option -->
            <div id="act-type-nonstudy-btn" 
                 class="act-type-card ${!isStudy ? 'active-type-selected' : ''}" 
                 onclick="window.setActivityModalType(false)"
                 style="cursor: pointer; padding: 14px 12px; border-radius: 14px; border: 2px solid ${!isStudy ? '#f59e0b' : 'rgba(255,255,255,0.1)'}; background: ${!isStudy ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.03)'}; ${!isStudy ? 'box-shadow: 0 0 14px rgba(245, 158, 11, 0.3);' : ''} transition: all 0.2s ease; text-align: right;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 1.4rem;">☕</span>
                <span style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid ${!isStudy ? '#f59e0b' : 'rgba(255,255,255,0.2)'}; display: flex; align-items: center; justify-content: center; background: ${!isStudy ? '#f59e0b' : 'transparent'};">
                  ${!isStudy ? '<span style="color: #0f172a; font-size: 0.75rem; font-weight: 900;">✓</span>' : ''}
                </span>
              </div>
              <strong style="display: block; font-size: 0.95rem; color: ${!isStudy ? '#fef3c7' : 'white'}; margin-bottom: 4px;">فعالیت غیرعلمی</strong>
              <span style="font-size: 0.75rem; color: ${!isStudy ? '#fde68a' : 'var(--text-secondary)'}; line-height: 1.4; display: block;">
                استراحت، خواب، ورزش و روزمره
              </span>
            </div>
          </div>

          <!-- Prominent Helper Guidance Box -->
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 12px; padding: 12px 14px; margin-top: 12px; display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-size: 1.1rem; flex-shrink: 0; line-height: 1.2;">💡</span>
            <div style="font-size: 0.8rem; line-height: 1.65; color: #fde68a; font-weight: 500;">
              <strong>نکته مهم:</strong> تنها فعالیت‌هایی که به عنوان «علمی» تعریف شوند، در محاسبه مجموع ساعت مطالعه، نمودارهای تحلیلی و تالار رقابت لحاظ می‌گردند.
            </div>
          </div>
        </div>

        <!-- 3. High-Contrast 24-Color Palette Selection -->
        <div class="input-group" style="margin-bottom: 18px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🎨 رنگ اختصاصی فعالیت (پالت ۲۴ تایی):
          </label>
          <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
            ${ACTIVITY_PALETTE_24.map((colorHex, idx) => {
              const isSelected = (s.color || '').toUpperCase() === colorHex.toUpperCase() || (!s.color && idx === 0);
              return `
                <button type="button" 
                        class="act-color-btn" 
                        data-color="${colorHex}"
                        onclick="window.setActivityModalColor('${colorHex}')"
                        title="رنگ ${idx + 1}"
                        style="width: 100%; aspect-ratio: 1; border-radius: 50%; background: ${colorHex}; border: 2.5px solid ${isSelected ? '#ffffff' : 'transparent'}; transform: ${isSelected ? 'scale(1.18)' : 'scale(1)'}; ${isSelected ? 'box-shadow: 0 0 10px rgba(255,255,255,0.6);' : ''} cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; outline: none; padding: 0;">
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 4. Quick Emoji / Icon Selector -->
        <div class="input-group" style="margin-bottom: 22px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            😀 نماد / آیکون (اختیاری):
          </label>
          <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px;">
            ${ACTIVITY_EMOJIS.map(e => {
              const isSelected = s.icon === e;
              return `
                <button type="button" 
                        class="act-icon-btn" 
                        data-icon="${e}"
                        onclick="window.setActivityModalIcon('${e}')"
                        style="min-width: 38px; height: 38px; border-radius: 10px; background: ${isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.03)'}; border: 1.5px solid ${isSelected ? 'var(--primary-accent, #38bdf8)' : 'rgba(255,255,255,0.08)'}; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.15s;">
                  ${e}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 10px;">
          <button type="button" 
                  id="btn-save-activity-modal" 
                  class="btn-primary" 
                  onclick="window.saveActivityModal()"
                  style="flex: 2; padding: 13px; font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            💾 ذخیره فعالیت
          </button>
          <button type="button" 
                  onclick="window.closeActivityModal()" 
                  class="glass-panel" 
                  style="flex: 1; padding: 13px; font-size: 0.9rem; color: var(--text-secondary); border-radius: 12px; cursor: pointer; text-align: center;">
            انصراف
          </button>
        </div>

      </div>
    </div>
  `;
}
