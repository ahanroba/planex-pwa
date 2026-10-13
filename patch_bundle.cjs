const fs = require('fs');
const path = require('path');

const snippet = `
// ═══════════════════════════════════════════════════════════════
// PlanEx Flashcards (Leitner) & Routines Persistence Engine
// ═══════════════════════════════════════════════════════════════
window.flipLeitnerCard = function() {
  if (!window.leitnerState) {
    window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  }
  window.leitnerState.isFlipped = !window.leitnerState.isFlipped;
  var card = document.getElementById('leitner-active-card');
  if (card) {
    if (window.leitnerState.isFlipped) card.classList.add('flipped');
    else card.classList.remove('flipped');
  }
  var ans = document.getElementById('leitner-answer-container');
  if (ans) {
    ans.style.display = window.leitnerState.isFlipped ? 'block' : 'none';
  }
  var flipBtn = document.getElementById('btn-flip-active-card');
  if (flipBtn) {
    flipBtn.innerText = window.leitnerState.isFlipped ? '🙈 پنهان' : '👁️ مشاهده پاسخ';
  }
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.saveRoutines = function() {
  try {
    if (typeof window.triggerActionDrivenPush === 'function') {
      window.triggerActionDrivenPush();
    } else if (window.personalSyncService && typeof window.personalSyncService.pushToCloud === 'function') {
      window.personalSyncService.pushToCloud();
    }
  } catch (e) {
    console.warn('[Routines] Save error:', e);
  }
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.answerLeitnerCard = function(id, isCorrect) {
  try {
    var raw = localStorage.getItem('planex_flashcards');
    var list = raw ? JSON.parse(raw) : [];
    var card = list.find(function(c) { return String(c.id) === String(id); });
    if (card) {
      var intervals = [1, 2, 4, 8, 16];
      if (isCorrect) {
        card.box = Math.min(5, (card.box || 1) + 1);
        card.streak = (card.streak || 0) + 1;
      } else {
        card.box = 1;
        card.streak = 0;
      }
      card.lastReviewed = Date.now();
      card.reviewCount = (card.reviewCount || 0) + 1;
      var days = intervals[(card.box || 1) - 1] || 1;
      card.nextReviewDate = Date.now() + (days * 24 * 60 * 60 * 1000);
      localStorage.setItem('planex_flashcards', JSON.stringify(list));
    }
    if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
    window.leitnerState.isFlipped = false;
    window.leitnerState.activeIndex = 0;
    window.saveRoutines();
    if (typeof window.renderApp === 'function') window.renderApp();
  } catch (e) {
    console.error('[Leitner] Answer error:', e);
  }
};

window.toggleAddFlashcardForm = function() {
  if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  window.leitnerState.showAddForm = !window.leitnerState.showAddForm;
  var form = document.getElementById('form-add-flashcard-container');
  if (form) form.style.display = window.leitnerState.showAddForm ? 'block' : 'none';
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.saveManualFlashcard = function() {
  var qEl = document.getElementById('input-new-fc-question');
  var aEl = document.getElementById('input-new-fc-answer');
  var dEl = document.getElementById('input-new-fc-deck');
  if (!qEl || !aEl) return;
  var q = qEl.value.trim();
  var a = aEl.value.trim();
  var d = (dEl && dEl.value.trim()) || 'عمومی';
  if (!q || !a) {
    alert('لطفاً صورت سؤال و پاسخ را وارد کنید.');
    return;
  }
  var raw = localStorage.getItem('planex_flashcards');
  var list = raw ? JSON.parse(raw) : [];
  list.unshift({
    id: 'fc_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
    question: q,
    answer: a,
    deck: d,
    box: 1,
    streak: 0,
    reviewCount: 0,
    createdAt: '۱۴۰۵/۰۱/۰۱',
    createdTimestamp: Date.now(),
    lastReviewed: null,
    nextReviewDate: Date.now()
  });
  localStorage.setItem('planex_flashcards', JSON.stringify(list));
  if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  window.leitnerState.showAddForm = false;
  window.saveRoutines();
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.deleteFlashcardItem = function(id) {
  var raw = localStorage.getItem('planex_flashcards');
  var list = raw ? JSON.parse(raw) : [];
  list = list.filter(function(c) { return String(c.id) !== String(id); });
  localStorage.setItem('planex_flashcards', JSON.stringify(list));
  window.saveRoutines();
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.seedDefaultFlashcards = function() {
  var defaultCards = [
    {
      id: 'fc_seed_1',
      question: 'تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟',
      answer: 'تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.',
      deck: 'متدولوژی مطالعه',
      box: 1,
      createdAt: '۱۴۰۵/۰۱/۰۱',
      createdTimestamp: Date.now() - 86400000,
      nextReviewDate: Date.now() - 1000
    },
    {
      id: 'fc_seed_2',
      question: 'در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟',
      answer: 'خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).',
      deck: 'جعبه لایتنر',
      box: 2,
      createdAt: '۱۴۰۵/۰۱/۰۱',
      createdTimestamp: Date.now() - 172800000,
      nextReviewDate: Date.now() - 1000
    },
    {
      id: 'fc_seed_3',
      question: 'بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟',
      answer: 'پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).',
      deck: 'مدیریت زمان',
      box: 1,
      createdAt: '۱۴۰۵/۰۱/۰۱',
      createdTimestamp: Date.now() - 86400000,
      nextReviewDate: Date.now() - 1000
    }
  ];
  localStorage.setItem('planex_flashcards', JSON.stringify(defaultCards));
  window.saveRoutines();
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.prevLeitnerCard = function() {
  if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  window.leitnerState.activeIndex = Math.max(0, (window.leitnerState.activeIndex || 0) - 1);
  window.leitnerState.isFlipped = false;
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.nextLeitnerCard = function() {
  if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  window.leitnerState.activeIndex = (window.leitnerState.activeIndex || 0) + 1;
  window.leitnerState.isFlipped = false;
  if (typeof window.renderApp === 'function') window.renderApp();
};

window.filterLeitnerBox = function(box) {
  if (!window.leitnerState) window.leitnerState = { activeIndex: 0, isFlipped: false, filterBox: 'all', showAddForm: false };
  window.leitnerState.filterBox = box;
  window.leitnerState.activeIndex = 0;
  window.leitnerState.isFlipped = false;
  if (typeof window.renderApp === 'function') window.renderApp();
};

// Global Delegation for all Leitner & Flashcard Click Actions
if (typeof document !== 'undefined') {
  document.addEventListener('click', function(e) {
    var flipBtn = e.target.closest('#btn-flip-active-card');
    if (flipBtn) {
      e.preventDefault();
      window.flipLeitnerCard();
      return;
    }
    var reviewBtn = e.target.closest('.btn-leitner-review-action');
    if (reviewBtn) {
      e.preventDefault();
      var id = reviewBtn.getAttribute('data-id');
      var isCorrect = reviewBtn.getAttribute('data-correct') === 'true';
      window.answerLeitnerCard(id, isCorrect);
      return;
    }
    var seedBtn = e.target.closest('#btn-seed-default-flashcards');
    if (seedBtn) {
      e.preventDefault();
      window.seedDefaultFlashcards();
      return;
    }
    var addFormBtn = e.target.closest('#btn-toggle-add-flashcard-form');
    if (addFormBtn) {
      e.preventDefault();
      window.toggleAddFlashcardForm();
      return;
    }
    var cancelBtn = e.target.closest('#btn-cancel-add-flashcard');
    if (cancelBtn) {
      e.preventDefault();
      window.toggleAddFlashcardForm();
      return;
    }
    var saveBtn = e.target.closest('#btn-save-manual-flashcard');
    if (saveBtn) {
      e.preventDefault();
      window.saveManualFlashcard();
      return;
    }
    var prevBtn = e.target.closest('#btn-prev-leitner-card');
    if (prevBtn) {
      e.preventDefault();
      window.prevLeitnerCard();
      return;
    }
    var nextBtn = e.target.closest('#btn-next-leitner-card');
    if (nextBtn) {
      e.preventDefault();
      window.nextLeitnerCard();
      return;
    }
    var delBtn = e.target.closest('.btn-delete-flashcard');
    if (delBtn) {
      e.preventDefault();
      var delId = delBtn.getAttribute('data-id');
      window.deleteFlashcardItem(delId);
      return;
    }
    var boxBtn = e.target.closest('.btn-filter-leitner-box');
    if (boxBtn) {
      e.preventDefault();
      var b = boxBtn.getAttribute('data-box');
      window.filterLeitnerBox(b);
      return;
    }
    var tabBtn = e.target.closest('.btn-filter-leitner-tab');
    if (tabBtn) {
      e.preventDefault();
      var f = tabBtn.getAttribute('data-filter');
      window.filterLeitnerBox(f);
      return;
    }
  });
}
`;

// Patch index-*.js files
const targetJsFiles = [
  'app/src/main/assets/assets/index-C_QRCUTL.js',
  'public/assets/index-C_QRCUTL.js'
];

targetJsFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('flipLeitnerCard')) {
      content += '\n' + snippet;
      fs.writeFileSync(file, content, 'utf8');
      console.log('Patched JS file:', file);
    } else {
      console.log('Already patched:', file);
    }
  }
});

// Patch index.html files
const targetHtmlFiles = [
  'app/src/main/assets/index.html',
  'public/index.html',
  'index.html'
];

const scriptTag = `
  <script>
  ${snippet}
  </script>
`;

targetHtmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('flipLeitnerCard')) {
      content = content.replace('</body>', scriptTag + '\n</body>');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Patched HTML file:', file);
    } else {
      console.log('Already patched HTML:', file);
    }
  }
});

// Patch app-ui-BJNoxM5R.js to add explicit onclick attributes to the Leitner buttons
const appUiFiles = [
  'app/src/main/assets/assets/app-ui-BJNoxM5R.js',
  'public/assets/app-ui-BJNoxM5R.js'
];

appUiFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(
      '<button id="btn-flip-active-card"',
      '<button id="btn-flip-active-card" onclick="window.flipLeitnerCard()"'
    );
    content = content.replace(
      '<button id="btn-seed-default-flashcards"',
      '<button id="btn-seed-default-flashcards" onclick="window.seedDefaultFlashcards()"'
    );
    content = content.replace(
      '<button id="btn-toggle-add-flashcard-form"',
      '<button id="btn-toggle-add-flashcard-form" onclick="window.toggleAddFlashcardForm()"'
    );
    content = content.replace(
      '<button id="btn-cancel-add-flashcard"',
      '<button id="btn-cancel-add-flashcard" onclick="window.toggleAddFlashcardForm()"'
    );
    content = content.replace(
      '<button id="btn-save-manual-flashcard"',
      '<button id="btn-save-manual-flashcard" onclick="window.saveManualFlashcard()"'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Patched app-ui buttons:', file);
  }
});

console.log('All patches complete!');
