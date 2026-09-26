// src/views/QuestionBankView.js
import { EXAMS_REGISTRY, getExamById } from '../data/examsRegistry.js';

// Global state for Question Bank interactive filtering & recall mode
if (!window.questionBankState) {
  window.questionBankState = {
    selectedExamId: '1405-khordad',
    searchQuery: '',
    selectedCategory: 'همه',
    activeRecallMode: false, // false = Study/Review mode (answers visible), true = Exam/Recall mode
    revealedQuestionIds: new Set(), // Track which questions have been revealed in active recall mode
    userAnswers: {} // Map of questionId -> selected option index
  };
}

export const BASE_CATEGORIES = [
  { id: 'همه', name: 'همه مباحث', icon: '📚' },
  { id: 'داخلی', name: 'داخلی', icon: '🫀', color: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.3)' },
  { id: 'جراحی', name: 'جراحی', icon: '🔪', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.15)', border: 'rgba(244, 63, 94, 0.3)' },
  { id: 'اطفال', name: 'اطفال', icon: '👶', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.3)' },
  { id: 'زنان', name: 'زنان', icon: '🤰', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)' },
  { id: 'نورولوژی', name: 'نورولوژی', icon: '🧠', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.3)' },
  { id: 'عفونی', name: 'عفونی', icon: '🧫', color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.3)' },
  { id: 'روانپزشکی', name: 'روانپزشکی', icon: '🧘', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.3)' },
  { id: 'مینورها', name: 'سایر مینورها', icon: '🔬', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)' }
];

const SPECIALTY_META = {
  'داخلی': { icon: '🫀', color: '#0ea5e9', bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.3)' },
  'جراحی': { icon: '🔪', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.15)', border: 'rgba(244, 63, 94, 0.3)' },
  'اطفال': { icon: '👶', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.3)' },
  'زنان': { icon: '🤰', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)' },
  'نورولوژی': { icon: '🧠', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.3)' },
  'عفونی': { icon: '🧫', color: '#14b8a6', bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.3)' },
  'روانپزشکی': { icon: '🧘', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.3)' },
  'پوست': { icon: '🧴', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)' },
  'ارتوپدی': { icon: '🦴', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)' },
  'ارولوژی': { icon: '🚽', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.3)' },
  'چشم پزشکی': { icon: '👁️', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)' },
  'چشم': { icon: '👁️', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)' },
  'گوش و حلق و بینی': { icon: '👂', color: '#eab308', bg: 'rgba(234, 179, 8, 0.15)', border: 'rgba(234, 179, 8, 0.3)' },
  'پاتولوژی': { icon: '🔬', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)' },
  'رادیولوژی': { icon: '📸', color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)', border: 'rgba(100, 116, 139, 0.3)' },
  'آمار و اپیدمیولوژی': { icon: '📊', color: '#84cc16', bg: 'rgba(132, 204, 22, 0.15)', border: 'rgba(132, 204, 22, 0.3)' },
  'فارماکولوژی': { icon: '💊', color: '#d946ef', bg: 'rgba(217, 70, 239, 0.15)', border: 'rgba(217, 70, 239, 0.3)' },
  'اخلاق پزشکی': { icon: '⚖️', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)', border: 'rgba(249, 115, 22, 0.3)' },
  'ژنتیک پزشکی': { icon: '🧬', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.3)' },
  'فیزیک پزشکی': { icon: '☢️', color: '#6b7280', bg: 'rgba(107, 114, 128, 0.15)', border: 'rgba(107, 114, 128, 0.3)' },
  'ایمنی شناسی': { icon: '🛡️', color: '#059669', bg: 'rgba(5, 150, 105, 0.15)', border: 'rgba(5, 150, 105, 0.3)' },
  'علوم تغذیه': { icon: '🥗', color: '#84cc16', bg: 'rgba(132, 204, 22, 0.15)', border: 'rgba(132, 204, 22, 0.3)' }
};

export function getCategoryMeta(catName) {
  if (SPECIALTY_META[catName]) {
    return { id: catName, name: catName, ...SPECIALTY_META[catName] };
  }
  const cat = BASE_CATEGORIES.find(c => c.id === catName);
  if (cat) return cat;
  return { id: catName, name: catName, icon: '🩺', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.3)' };
}

export function highlightKeywords(text, tags = [], keywords = []) {
  if (!text) return '';
  const baseKeywords = [
    'کاهش وزن', 'دیسپپسی', 'اولسر', 'بیوپسی', 'پاتولوژی', 'کولونوسکوپی',
    'آندوسکوپی', 'دیسفاژی', 'آسپیراسیون', 'رگورژیتاسیون', 'درمان انتخابی',
    'خط اول', 'مهمترین', 'شایعترین', 'علامت کلاسیک', 'پروگنوز',
    'MALT', 'دیسپلازی', 'پولیپ', 'هلیکوباکتر پیلوری', 'Low grade', 'High grade',
    'هلیکوباکتر', 'گاستریت', 'سی‌تی اسکن', 'سونوگرافی', 'الکتروفورز'
  ];

  const tagList = Array.isArray(tags) ? tags : [];
  const kwList = Array.isArray(keywords) ? keywords : [];
  const allKeywords = Array.from(new Set([...tagList, ...kwList, ...baseKeywords]))
    .filter(k => k && typeof k === 'string' && k.trim().length >= 2)
    .sort((a, b) => b.length - a.length);

  let highlighted = text;

  // Auto-highlight quoted phrases «...» or "..." with mnemonic-quote class
  highlighted = highlighted.replace(/(«[^»]+»|"[^"]+")/g, '<span class="mnemonic-quote">$1</span>');

  allKeywords.forEach(kw => {
    const escaped = kw.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!escaped) return;
    const regex = new RegExp(`(${escaped})`, 'gi');
    highlighted = highlighted.replace(regex, '<span class="keyword-highlight">$1</span>');
  });

  return highlighted;
}

export function filterQuestions(questions, query = '', category = 'همه') {
  let list = [...questions];

  if (category && category !== 'همه') {
    if (category === 'مینورها') {
      list = list.filter(q => !['داخلی', 'جراحی', 'اطفال', 'زنان', 'نورولوژی', 'عفونی', 'روانپزشکی'].includes(q.category));
    } else {
      list = list.filter(q => q.category === category || q.category.includes(category));
    }
  }

  if (query && query.trim()) {
    const qLower = query.trim().toLowerCase();
    list = list.filter(q => {
      const matchQuestion = q.question.toLowerCase().includes(qLower);
      const matchKeyNote = (q.key_note || '').toLowerCase().includes(qLower);
      const matchMnemonic = (q.mnemonic || '').toLowerCase().includes(qLower);
      const matchKeywords = Array.isArray(q.keywords) && q.keywords.some(k => k.toLowerCase().includes(qLower));
      const matchOptions = Array.isArray(q.options) && q.options.some(opt => opt.toLowerCase().includes(qLower));
      return matchQuestion || matchKeyNote || matchMnemonic || matchKeywords || matchOptions;
    });
  }

  return list;
}

export function renderQuestionBankView() {
  const state = window.questionBankState;
  const currentExam = getExamById(state.selectedExamId);
  const questionsData = currentExam.questions;
  const filtered = filterQuestions(questionsData, state.searchQuery, state.selectedCategory);
  const totalCount = questionsData.length;
  const filteredCount = filtered.length;

  // Compute category counts for active period
  const minorCats = ['پوست', 'ارتوپدی', 'ارولوژی', 'چشم پزشکی', 'چشم', 'گوش و حلق و بینی', 'پاتولوژی', 'رادیولوژی', 'آمار و اپیدمیولوژی', 'فارماکولوژی', 'اخلاق پزشکی', 'ژنتیک پزشکی', 'فیزیک پزشکی', 'ایمنی شناسی', 'علوم تغذیه'];
  const getCatCount = (catId) => {
    if (catId === 'همه') return totalCount;
    if (catId === 'مینورها') return questionsData.filter(q => minorCats.includes(q.category) || !['داخلی', 'جراحی', 'اطفال', 'زنان', 'نورولوژی', 'عفونی', 'روانپزشکی'].includes(q.category)).length;
    return questionsData.filter(q => q.category === catId).length;
  };

  return `
    <div class="question-bank-container" style="padding: 12px; max-width: 1000px; margin: 0 auto; direction: rtl; font-family: 'Sahel', 'Vazirmatn', system-ui, sans-serif;">
      
      <!-- 🌟 1. HERO HEADER (Ultra-thin Glassmorphic Hero with Multi-Exam Switcher) -->
      <div class="glass-panel qb-header-card" style="position: relative; overflow: hidden; background: rgba(22, 23, 29, 0.75); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 16px 18px; margin-bottom: 14px; backdrop-filter: blur(16px);">
        
        <div style="position: relative; z-index: 2; display: flex; flex-direction: column; gap: 12px;">
          
          <!-- Top Row: Back button & Brand Badges -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <button id="btn-back-to-articles" style="display: inline-flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #a1a1aa; padding: 5px 12px; border-radius: 8px; cursor: pointer; font-size: 0.74rem; font-weight: 700; transition: all 0.2s ease;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>بازگشت به مقالات</span>
            </button>

            <!-- Brand Badges: @medicalaa & planexapp.ir -->
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <a href="https://t.me/medicalaa" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; text-decoration: none; padding: 4px 10px; border-radius: 14px; font-size: 0.7rem; font-weight: 700;">
                <span>📢</span>
                <span>@medicalaa</span>
              </a>

              <a href="https://planexapp.ir" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399; text-decoration: none; padding: 4px 10px; border-radius: 14px; font-size: 0.7rem; font-weight: 700;">
                <span>🌐</span>
                <span>planexapp.ir</span>
              </a>
            </div>
          </div>

          <!-- Main Title & Dynamic Period Badge -->
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
              <span style="background: #7c3aed; color: #fff; font-size: 0.68rem; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
                ⚡ دوره فعال: پرهانترنی ${currentExam.title}
              </span>
              <span style="color: #8e8e9c; font-size: 0.72rem;">|</span>
              <span style="color: #a1a1aa; font-size: 0.72rem; font-weight: 600;">
                Bento Grid & Active Recall Mode
              </span>
            </div>

            <h1 style="font-size: 1.15rem; font-weight: 800; color: #ffffff; line-height: 1.4; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span>🩺 بانک ${totalCount} تست طلایی | پرهانترنی ${currentExam.title}</span>
            </h1>

            <p style="font-size: 0.74rem; color: #8e8e9c; line-height: 1.5; margin: 0;">
              سوالات آزمون جامع پرانترنی و دستیاری با تحلیل تشریحی، دام‌های تستی، نکات کلیدی و کدهای طلایی یادسپاری.
            </p>
          </div>

          <!-- 🗓️ Multi-Exam Period Switcher Tabs -->
          <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; padding: 8px 10px;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px; margin-bottom: 6px;">
              <span style="font-size: 0.72rem; font-weight: 700; color: #c4b5fd; display: flex; align-items: center; gap: 4px;">
                <span>📅</span>
                <span>انتخاب دوره آزمون:</span>
              </span>
            </div>

            <div class="qb-period-switcher-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 6px;">
              ${EXAMS_REGISTRY.map(exam => {
                const isActive = currentExam.id === exam.id;
                return `
                  <button 
                    class="qb-exam-period-btn ${isActive ? 'active' : ''}" 
                    data-exam-id="${exam.id}"
                    style="display: flex; align-items: center; justify-content: space-between; background: ${isActive ? '#7c3aed' : '#16171d'}; border: 1px solid ${isActive ? '#7c3aed' : 'rgba(255,255,255,0.06)'}; color: ${isActive ? '#ffffff' : '#a1a1aa'}; padding: 6px 10px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease;"
                  >
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-size: 0.95rem;">${exam.icon}</span>
                      <div style="text-align: right;">
                        <div style="font-size: 0.76rem; font-weight: 700; color: ${isActive ? '#fff' : '#e4e4e7'};">${exam.title}</div>
                        <div style="font-size: 0.62rem; color: ${isActive ? '#e9d5ff' : '#71717a'};">${exam.month} ${exam.year}</div>
                      </div>
                    </div>
                    
                    <span style="font-size: 0.65rem; font-weight: 700; font-family: 'Outfit'; background: ${isActive ? 'rgba(0,0,0,0.25)' : '#1f2029'}; color: ${isActive ? '#fff' : '#8e8e9c'}; padding: 1px 5px; border-radius: 4px;">
                      ${exam.questions.length}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Quick Stats Row -->
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.06);">
            <div style="display: flex; align-items: center; gap: 4px; background: #1f2029; padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06); font-size: 0.72rem; color: #e2e8f0;">
              <span>📊 در حال نمایش:</span>
              <strong style="color: #7c3aed; font-family: 'Outfit'; font-weight: 800;">${filteredCount}</strong>
              <span style="color: #8e8e9c;">از ${totalCount} سوال</span>
            </div>

            <div style="display: flex; align-items: center; gap: 4px; background: #1f2029; padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06); font-size: 0.72rem; color: #e2e8f0;">
              <span>🧠 وضعیت:</span>
              <strong style="color: ${state.activeRecallMode ? '#fbbf24' : '#34d399'};">
                ${state.activeRecallMode ? '🎯 آزمون (Active Recall)' : '📖 مرور سریع'}
              </strong>
            </div>
          </div>

        </div>
      </div>

      <!-- 🔍 2. CONTROLS BAR: Live Search, Category Filters & Active Recall Toggle -->
      <div class="glass-panel qb-controls-panel" style="background: rgba(22, 23, 29, 0.75); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 10px 12px; margin-bottom: 14px; backdrop-filter: blur(16px);">
        
        <!-- Search Input & Mode Toggle Row -->
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 10px;">
          
          <!-- Live Search Bar -->
          <div style="flex: 1 1 220px; position: relative;">
            <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); font-size: 0.9rem; color: #8e8e9c; pointer-events: none;">
              🔍
            </span>
            <input 
              type="text" 
              id="qb-search-input" 
              value="${state.searchQuery}" 
              placeholder="جستجو در متن سوال، نکات، رمزها (${currentExam.title})..." 
              style="width: 100%; box-sizing: border-box; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); color: #ffffff; padding: 8px 30px 8px 10px; border-radius: 8px; font-size: 0.78rem; outline: none; transition: all 0.2s ease;"
            />
            ${state.searchQuery ? `
              <button id="qb-clear-search" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); background: #1f2029; border: none; color: #cbd5e1; width: 18px; height: 18px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.65rem;">✕</button>
            ` : ''}
          </div>

          <!-- Active Recall Mode Toggle -->
          <button 
            id="qb-toggle-recall-mode" 
            style="display: flex; align-items: center; gap: 6px; background: ${state.activeRecallMode ? '#7c3aed' : '#1f2029'}; border: 1px solid ${state.activeRecallMode ? '#7c3aed' : 'rgba(255,255,255,0.08)'}; color: ${state.activeRecallMode ? '#ffffff' : '#a1a1aa'}; padding: 7px 12px; border-radius: 8px; cursor: pointer; font-size: 0.74rem; font-weight: 700; transition: all 0.15s ease; flex-shrink: 0;"
            title="با فعال‌سازی این حالت، گزینه‌های پاسخ و نکات کلیدی پنهان می‌شوند تا خودتان تست را حل کنید."
          >
            <span style="font-size: 0.95rem;">${state.activeRecallMode ? '🧠' : '📖'}</span>
            <span>حالت آزمون</span>
            <span style="font-size: 0.64rem; padding: 1px 5px; border-radius: 4px; background: ${state.activeRecallMode ? 'rgba(0,0,0,0.25)' : '#16171d'}; color: ${state.activeRecallMode ? '#fff' : '#8e8e9c'}; font-weight: 800;">
              ${state.activeRecallMode ? 'روشن' : 'خاموش'}
            </span>
          </button>

        </div>

        <!-- Category Filter Pills -->
        <div style="display: flex; align-items: center; gap: 6px; overflow-x: auto; padding-bottom: 2px; scrollbar-width: thin;">
          <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 700; white-space: nowrap; margin-left: 2px;">دسته‌بندی:</span>
          ${BASE_CATEGORIES.map(cat => {
            const isSelected = state.selectedCategory === cat.id;
            const count = getCatCount(cat.id);
            
            return `
              <button 
                class="qb-category-pill ${isSelected ? 'active' : ''}" 
                data-category="${cat.id}"
                style="display: inline-flex; align-items: center; gap: 4px; background: ${isSelected ? '#7c3aed' : '#1f2029'}; border: 1px solid ${isSelected ? '#7c3aed' : 'rgba(255,255,255,0.06)'}; color: ${isSelected ? '#ffffff' : '#8e8e9c'}; padding: 4px 10px; border-radius: 8px; cursor: pointer; font-size: 0.72rem; font-weight: 700; white-space: nowrap; transition: all 0.15s ease;"
              >
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
                <span style="font-size: 0.64rem; opacity: ${isSelected ? '1' : '0.7'}; background: ${isSelected ? 'rgba(0,0,0,0.25)' : '#16171d'}; padding: 0.5px 5px; border-radius: 4px; font-family: 'Outfit';">${count}</span>
              </button>
            `;
          }).join('')}
        </div>

      </div>
        
      <!-- 📦 3. BENTO GRID CARDS: Question Bank Interactive Cards -->
      ${filtered.length === 0 ? `
        <!-- Empty State -->
        <div class="glass-panel" style="padding: 40px 16px; text-align: center; border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 14px; background: rgba(22, 23, 29, 0.75);">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
          <h3 style="color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;">هیچ تستی در دوره «${currentExam.title}» یافت نشد</h3>
          <p style="color: #8e8e9c; font-size: 0.74rem; margin-bottom: 12px;">لطفاً عبارت جستجو را تغییر دهید یا دسته‌بندی دیگری را انتخاب کنید.</p>
          <button id="qb-reset-filters" class="btn-primary" style="width: auto; padding: 6px 16px; font-size: 0.74rem; background: #7c3aed; border: none; border-radius: 8px; color: white; cursor: pointer;">
            نمایش همه تست‌های این دوره
          </button>
        </div>
      ` : `
        <div class="qb-bento-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
          ${filtered.map(q => renderBentoQuestionCard(q, state)).join('')}
        </div>
      `}

      <!-- Footer Info Note -->
      <div style="margin-top: 24px; text-align: center; padding: 12px; color: #71717a; font-size: 0.7rem; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.06);">
        💡 پاسخ‌ها و نکات دوره <strong>«${currentExam.fullTitle}»</strong> بر اساس رفرنس‌های رسمی تدوین گردیده است.
      </div>

    </div>
  `;
}

export function renderBentoQuestionCard(q, state) {
  const meta = getCategoryMeta(q.category);
  const isRecall = state.activeRecallMode;
  const isRevealed = state.revealedQuestionIds.has(q.id);
  const selectedAnswer = state.userAnswers[q.id];
  const hasAnswered = selectedAnswer !== undefined;

  // In active recall mode: hide answer and key notes unless revealed or answered
  const showAnswerAndNotes = !isRecall || isRevealed || hasAnswered;

  return `
    <div class="glass-panel qb-bento-card qb-question-card" data-question-id="${q.id}" style="position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; background: rgba(22, 23, 29, 0.75); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 16px; backdrop-filter: blur(16px); transition: all 0.2s ease;">
      
      <div>
        <!-- Card Top Bar: Category Badge, Question ID, Keywords -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 6px;">
          
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="display: inline-flex; align-items: center; gap: 4px; background: ${meta.bg || 'rgba(99, 102, 241, 0.15)'}; color: ${meta.color || '#a5b4fc'}; border: 1px solid ${meta.border || 'rgba(99, 102, 241, 0.3)'}; padding: 3px 9px; border-radius: 8px; font-size: 0.72rem; font-weight: 800;">
              <span>${meta.icon}</span>
              <span>${meta.name}</span>
            </span>

            <span style="background: rgba(255, 255, 255, 0.1); color: #f1f5f9; border: 1px solid rgba(255, 255, 255, 0.15); padding: 3px 8px; border-radius: 8px; font-size: 0.7rem; font-family: 'Outfit', monospace; font-weight: 800;">
              #${q.id}
            </span>
          </div>

          <!-- Sub-topic Keywords pills -->
          ${Array.isArray(q.keywords) && q.keywords.length > 0 ? `
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              ${q.keywords.slice(0, 3).map(kw => `
                <span style="background: rgba(14, 165, 233, 0.15); color: #38bdf8; border: 1px solid rgba(14, 165, 233, 0.3); font-size: 0.66rem; font-weight: 700; padding: 2px 7px; border-radius: 6px;">
                  #${kw}
                </span>
              `).join('')}
            </div>
          ` : ''}

        </div>

        <!-- Question Text (Medical Vignette Stem with Keyword Highlighting) -->
        <div class="question-stem qb-question-text" style="font-size: 0.98rem; font-weight: 700; color: #f8fafc; line-height: 1.85; margin-bottom: 12px;">
          ${highlightKeywords(q.question, q.tags || [], q.keywords || [])}
        </div>

        <!-- Options List -->
        <div class="qb-options-list" style="display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px;">
          ${q.options.map((optionText, optIdx) => {
            const isCorrect = optIdx === q.correct_index;
            const isSelected = selectedAnswer === optIdx;

            let optBg = '#1f2029';
            let optBorder = 'rgba(255, 255, 255, 0.06)';
            let optColor = '#cbd5e1';
            let optBadgeBg = '#16171d';
            let optBadgeColor = '#8e8e9c';
            let statusIcon = '';

            if (showAnswerAndNotes) {
              if (isCorrect) {
                optBg = 'rgba(16, 185, 129, 0.15)';
                optBorder = '#10b981';
                optColor = '#a7f3d0';
                optBadgeBg = '#10b981';
                optBadgeColor = '#022c22';
                statusIcon = '✅';
              } else if (isSelected && !isCorrect) {
                optBg = 'rgba(239, 68, 68, 0.15)';
                optBorder = '#ef4444';
                optColor = '#fca5a5';
                optBadgeBg = '#ef4444';
                optBadgeColor = '#450a0a';
                statusIcon = '❌';
              }
            } else {
              // Active Recall mode before selection
              if (isSelected) {
                optBg = 'rgba(124, 58, 237, 0.2)';
                optBorder = '#7c3aed';
                optColor = '#e9d5ff';
              }
            }

            const optionLabels = ['۱', '۲', '۳', '۴'];

            return `
              <div 
                class="qb-option-item" 
                data-question-id="${q.id}" 
                data-option-index="${optIdx}"
                style="display: flex; align-items: center; justify-content: space-between; background: ${optBg}; border: 1px solid ${optBorder}; color: ${optColor}; padding: 7px 10px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease; font-size: 0.78rem; line-height: 1.4;"
              >
                <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                  <span style="width: 20px; height: 20px; border-radius: 6px; background: ${optBadgeBg}; color: ${optBadgeColor}; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; font-weight: 700; font-family: 'Outfit'; flex-shrink: 0;">
                    ${optionLabels[optIdx] || optIdx + 1}
                  </span>
                  <span>${optionText}</span>
                </div>
                ${statusIcon ? `<span style="font-size: 0.75rem; margin-right: 6px;">${statusIcon}</span>` : ''}
              </div>
            `;
          }).join('')}
        </div>

      </div>

      <!-- Bottom Explanations & Recall Trigger -->
      <div>
        ${!showAnswerAndNotes ? `
          <!-- Active Recall Mode: Hidden Placeholder Button -->
          <div style="margin-top: 6px;">
            <button 
              class="qb-btn-reveal-answer" 
              data-question-id="${q.id}"
              style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: #1f2029; border: 1px dashed rgba(124, 58, 237, 0.4); color: #c4b5fd; padding: 8px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.15s ease;"
            >
              <span>💡</span>
              <span>یک گزینه را انتخاب کنید یا برای نمایش پاسخ کلیک نمایید</span>
            </button>
          </div>
        ` : `
          <!-- Key Note -->
          <div class="qb-key-note-box" style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.25); border-right: 3px solid #10b981; border-radius: 8px; padding: 8px 10px; margin-top: 8px;">
            <div style="display: flex; align-items: center; gap: 4px; color: #34d399; font-size: 0.7rem; font-weight: 700; margin-bottom: 3px;">
              <span>💡</span>
              <span>نکته کلیدی:</span>
            </div>
            <div style="font-size: 0.74rem; color: #e2e8f0; line-height: 1.5;">
              ${highlightKeywords(q.key_note || q.key_point || '', q.tags || [], q.keywords || [])}
            </div>
          </div>

          <!-- Mnemonic Callout -->
          <div class="qb-mnemonic-box" style="background: #1f2029; border: 1px solid rgba(245, 158, 11, 0.25); border-right: 3px solid #f59e0b; border-radius: 8px; padding: 8px 10px; margin-top: 6px;">
            <div style="display: flex; align-items: center; gap: 4px; color: #fbbf24; font-size: 0.7rem; font-weight: 700; margin-bottom: 2px;">
              <span>⚡</span>
              <span>رمز و کدگذاری:</span>
            </div>
            <div style="font-size: 0.74rem; color: #fef08a; line-height: 1.5; font-weight: 600;">
              ${highlightKeywords(q.mnemonic || q.code || '', q.tags || [], q.keywords || [])}
            </div>
          </div>

          ${isRecall ? `
            <div style="margin-top: 6px; text-align: left;">
              <button 
                class="qb-btn-hide-answer" 
                data-question-id="${q.id}"
                style="background: none; border: none; color: #8e8e9c; font-size: 0.65rem; cursor: pointer; text-decoration: underline;"
              >
                مخفی‌سازی پاسخ ✕
              </button>
            </div>
          ` : ''}
        `}
      </div>

    </div>
  `;
}

// Interactive event binder for Question Bank view
export function bindQuestionBankEvents(renderAppCallback) {
  const state = window.questionBankState;
  if (!state) return;

  // 0. Exam Period Switcher Buttons
  document.querySelectorAll('.qb-exam-period-btn').forEach(btn => {
    btn.onclick = () => {
      const examId = btn.dataset.examId;
      if (examId && examId !== state.selectedExamId) {
        state.selectedExamId = examId;
        state.searchQuery = '';
        state.selectedCategory = 'همه';
        state.revealedQuestionIds.clear();
        state.userAnswers = {};

        // Update URL search params gracefully
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('exam', examId);
          window.history.replaceState({}, '', url.toString());
        } catch (e) {}

        if (typeof renderAppCallback === 'function') renderAppCallback();
      }
    };
  });

  // 1. Live Search Input
  const searchInput = document.getElementById('qb-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value;
      if (typeof renderAppCallback === 'function') {
        renderAppCallback();
        // Restore focus to search input
        const updatedInput = document.getElementById('qb-search-input');
        if (updatedInput) {
          updatedInput.focus();
          const valLen = updatedInput.value.length;
          updatedInput.setSelectionRange(valLen, valLen);
        }
      }
    };
  }

  // 2. Clear Search Button
  const btnClearSearch = document.getElementById('qb-clear-search');
  if (btnClearSearch) {
    btnClearSearch.onclick = () => {
      state.searchQuery = '';
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  }

  // 3. Reset all filters
  const btnResetFilters = document.getElementById('qb-reset-filters');
  if (btnResetFilters) {
    btnResetFilters.onclick = () => {
      state.searchQuery = '';
      state.selectedCategory = 'همه';
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  }

  // 4. Category Filter Pills
  document.querySelectorAll('.qb-category-pill').forEach(pill => {
    pill.onclick = () => {
      const cat = pill.dataset.category;
      if (cat) {
        state.selectedCategory = cat;
        if (typeof renderAppCallback === 'function') renderAppCallback();
      }
    };
  });

  // 5. Active Recall Mode Toggle
  const btnToggleRecall = document.getElementById('qb-toggle-recall-mode');
  if (btnToggleRecall) {
    btnToggleRecall.onclick = () => {
      state.activeRecallMode = !state.activeRecallMode;
      if (!state.activeRecallMode) {
        state.revealedQuestionIds.clear();
      }
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  }

  // 6. Option Clicking (Interactive Test taking)
  document.querySelectorAll('.qb-option-item').forEach(opt => {
    opt.onclick = () => {
      const qId = Number(opt.dataset.questionId);
      const optIdx = Number(opt.dataset.optionIndex);
      state.userAnswers[qId] = optIdx;
      state.revealedQuestionIds.add(qId);
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  });

  // 7. Reveal Answer in Recall Mode
  document.querySelectorAll('.qb-btn-reveal-answer').forEach(btn => {
    btn.onclick = () => {
      const qId = Number(btn.dataset.questionId);
      state.revealedQuestionIds.add(qId);
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  });

  // 8. Hide Answer in Recall Mode
  document.querySelectorAll('.qb-btn-hide-answer').forEach(btn => {
    btn.onclick = () => {
      const qId = Number(btn.dataset.questionId);
      state.revealedQuestionIds.delete(qId);
      delete state.userAnswers[qId];
      if (typeof renderAppCallback === 'function') renderAppCallback();
    };
  });
}
