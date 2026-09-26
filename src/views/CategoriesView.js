import { db } from '../db.js';
import { isStudyCategory } from '../constants.js';

export function renderCategoriesView(isEmbedded = false) {
  const categories = db.getCategories();
  const toPersian = (num) => String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  return `
    <div style="${isEmbedded ? '' : 'padding-bottom: 100px;'}">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
        <div>
          <span style="font-size: 0.74rem; color: #a1a1aa;">تفکیک فعالیت‌های علمی (محاسبه در مطالعه) و غیرعلمی با رنگ‌بندی</span>
        </div>
        <button onclick="window.openActivityModal()" class="btn-primary" style="padding: 8px 16px; font-size: 0.8rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);">
          <span>➕</span>
          <span>فعالیت جدید</span>
        </button>
      </div>

      <!-- Categories Single-Column / Responsive List -->
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${categories.map(c => {
          const isStudy = isStudyCategory(c);
          return `
            <div class="glass-panel" style="padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; border-right: 4px solid ${c.color}; border-radius: 14px; background: #16171d; border: 1px solid rgba(255,255,255,0.06); gap: 10px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 12px; background: ${c.color}20; border: 1px solid ${c.color}40; display: flex; align-items: center; justify-content: center; font-weight: 800; color: ${c.color}; font-size: 1.1rem;">
                  ${c.icon || (isStudy ? '📚' : '☕')}
                </div>
                <div>
                  <strong style="font-size: 0.9rem; display: block; color: white; font-weight: 800;">${c.title}</strong>
                  <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
                    <span style="font-size: 0.68rem; padding: 2px 7px; border-radius: 6px; background: ${isStudy ? 'rgba(56,189,248,0.15)' : 'rgba(245,158,11,0.15)'}; color: ${isStudy ? '#7dd3fc' : '#fde68a'}; font-weight: bold; border: 1px solid ${isStudy ? 'rgba(56,189,248,0.3)' : 'rgba(245,158,11,0.3)'};">
                      ${isStudy ? '📚 علمی (محاسبه در مطالعه)' : '☕ غیرعلمی'}
                    </span>
                    ${c.recommendedTarget ? `<span style="font-size: 0.68rem; color: #8e8e9c;">• ${c.recommendedTarget}</span>` : ''}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 6px;">
                <button onclick="window.openActivityModal('${c.code}')" style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); color: #38bdf8; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 0.75rem; font-weight: 700;" title="ویرایش فعالیت">
                  ✏️ ویرایش
                </button>
                <button class="btn-delete-cat" data-code="${c.code}" style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #ef4444; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 0.75rem; font-weight: 700;" title="حذف فعالیت">
                  🗑️
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}
