import { db } from '../db.js';

const toFa = (n) => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Placeholder marketplace decks (locked; purchase flow not implemented yet)
const STORE_DECKS = [
  { id: 'store_konkur_bio', title: 'زیست‌شناسی کنکور', count: 320, price: 'به‌زودی' },
  { id: 'store_eng_vocab', title: 'لغات زبان انگلیسی کنکور', count: 504, price: 'به‌زودی' },
  { id: 'store_chem_formula', title: 'فرمول‌های شیمی', count: 150, price: 'به‌زودی' }
];

const fcState = window.flashcardsViewState || (window.flashcardsViewState = {
  studyDeck: null, // null = deck manager; string = deck name; '__all__' = all due
  queue: [],
  index: 0,
  flipped: false,
  reviewed: 0
});

function getDecks() {
  const cards = db.getFlashcards() || [];
  const now = Date.now();
  const map = new Map();
  cards.forEach(c => {
    const name = c.deck || 'عمومی';
    if (!map.has(name)) map.set(name, { name, total: 0, due: 0, boxes: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } });
    const d = map.get(name);
    const box = Math.min(5, Math.max(1, c.box || 1));
    d.total++;
    d.boxes[box]++;
    if (!c.nextReviewDate || c.nextReviewDate <= now) d.due++;
  });
  return Array.from(map.values());
}

function buildQueue(deck) {
  const now = Date.now();
  const cards = (db.getFlashcards() || []).filter(c => deck === '__all__' || (c.deck || 'عمومی') === deck);
  const due = cards.filter(c => !c.nextReviewDate || c.nextReviewDate <= now);
  return (due.length ? due : cards).map(c => c.id);
}

function boxBar(boxes, total) {
  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#6366f1'];
  return `
    <div style="display:flex; gap:6px; margin-top:10px;">
      ${[1, 2, 3, 4, 5].map(b => `
        <div style="flex:1; text-align:center;">
          <div style="height:34px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; align-items:flex-end; overflow:hidden;">
            <div style="width:100%; height:${total ? Math.round((boxes[b] / total) * 100) : 0}%; background:${colors[b - 1]}; opacity:0.8;"></div>
          </div>
          <div style="font-size:0.62rem; color:#8e8e9c; margin-top:3px;">خانه ${toFa(b)}: ${toFa(boxes[b])}</div>
        </div>`).join('')}
    </div>`;
}

function renderDeckManager() {
  const decks = getDecks();
  const stats = db.getLeitnerStats();
  return `
    <div style="max-width:720px; margin:0 auto; padding:16px;">
      <h2 style="color:#f8fafc; font-size:1.2rem; font-weight:800; margin:0 0 4px;">🧠 فلش‌کارت و جعبه لایتنر</h2>
      <p style="color:#8e8e9c; font-size:0.78rem; margin:0 0 16px;">${toFa(stats.total)} کارت • ${toFa(stats.due)} آماده مرور • ${toFa(stats.mastered)} تثبیت‌شده</p>

      <button onclick="window.fcStartStudy('__all__')" ${stats.total ? '' : 'disabled'}
        style="width:100%; padding:14px; border:none; border-radius:16px; background:linear-gradient(135deg,#6366f1,#a855f7); color:white; font-weight:800; font-size:0.95rem; cursor:pointer; margin-bottom:20px;">
        مرور کارت‌ها (همه دسته‌ها)
      </button>

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:0 0 10px;">دسته‌های من</h3>
      ${decks.length === 0 ? `<div style="color:#8e8e9c; font-size:0.8rem; padding:20px; text-align:center;">هنوز کارتی ندارید. از بخش ابزارها کارت اضافه کنید.</div>` : decks.map(d => {
        const mastery = d.total ? Math.round((d.boxes[5] / d.total) * 100) : 0;
        return `
        <div style="background:#16171d; border:1px solid rgba(255,255,255,0.06); border-radius:18px; padding:14px 16px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <div>
              <div style="color:#f8fafc; font-weight:800; font-size:0.9rem;">${esc(d.name)}</div>
              <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${toFa(d.total)} کارت • ${toFa(d.due)} آماده مرور</div>
            </div>
            <button onclick="window.fcStartStudy(this.dataset.deck)" data-deck="${esc(d.name)}"
              style="padding:8px 14px; border-radius:12px; border:1px solid rgba(167,139,250,0.4); background:rgba(167,139,250,0.15); color:#c4b5fd; font-weight:700; font-size:0.78rem; cursor:pointer;">مرور کارت‌ها</button>
          </div>
          <div style="margin-top:10px; height:6px; border-radius:4px; background:rgba(255,255,255,0.06); overflow:hidden;">
            <div style="width:${mastery}%; height:100%; background:linear-gradient(90deg,#22c55e,#6366f1);"></div>
          </div>
          <div style="font-size:0.65rem; color:#8e8e9c; margin-top:4px;">تسلط: ${toFa(mastery)}٪</div>
          ${boxBar(d.boxes, d.total)}
        </div>`;
      }).join('')}

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:20px 0 10px;">فروشگاه دسته‌ها</h3>
      ${STORE_DECKS.map(s => `
        <div style="background:#16171d; border:1px dashed rgba(255,255,255,0.1); border-radius:18px; padding:14px 16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; opacity:0.85;">
          <div>
            <div style="color:#f8fafc; font-weight:700; font-size:0.88rem;">🔒 ${esc(s.title)}</div>
            <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${toFa(s.count)} کارت</div>
          </div>
          <button disabled style="padding:8px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#8e8e9c; font-size:0.75rem;">${esc(s.price)}</button>
        </div>`).join('')}
    </div>`;
}

function renderStudyMode() {
  const cards = db.getFlashcards() || [];
  const id = fcState.queue[fcState.index];
  const card = cards.find(c => c.id == id);
  const header = `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:16px;">
      <button onclick="window.fcExitStudy()" style="background:none; border:none; color:#cbd5e1; font-size:1.3rem; cursor:pointer;">✕</button>
      <div style="color:#8e8e9c; font-size:0.8rem;">${card ? `${toFa(fcState.index + 1)} / ${toFa(fcState.queue.length)}` : ''}</div>
    </div>`;

  if (!card) {
    return `
      <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
        ${header}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#f8fafc; text-align:center; padding:20px;">
          <div style="font-size:3rem;">🎉</div>
          <div style="font-weight:800; margin-top:10px;">مرور تمام شد!</div>
          <div style="color:#8e8e9c; font-size:0.8rem; margin-top:4px;">${toFa(fcState.reviewed)} کارت مرور شد.</div>
          <button onclick="window.fcExitStudy()" style="margin-top:20px; padding:12px 24px; border:none; border-radius:14px; background:#6366f1; color:white; font-weight:700; cursor:pointer;">بازگشت به دسته‌ها</button>
        </div>
      </div>`;
  }

  const face = 'position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:28px; text-align:center; line-height:1.9; overflow:auto;';
  return `
    <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
      ${header}
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:16px; perspective:1200px;">
        <div onclick="window.fcFlip()" style="position:relative; width:100%; max-width:520px; height:min(60vh,420px); cursor:pointer; transform-style:preserve-3d; transition:transform 0.6s; transform:rotateY(${fcState.flipped ? 180 : 0}deg);">
          <div style="${face} background:#16171d; border:1px solid rgba(167,139,250,0.3);">
            <div style="font-size:0.7rem; color:#a78bfa; margin-bottom:12px;">${esc(card.deck || 'عمومی')} • خانه ${toFa(card.box || 1)}</div>
            <div style="color:#f8fafc; font-size:1.1rem; font-weight:700;">${esc(card.question)}</div>
            <div style="font-size:0.7rem; color:#8e8e9c; margin-top:18px;">برای دیدن پاسخ ضربه بزنید</div>
          </div>
          <div style="${face} background:#1a1530; border:1px solid rgba(34,197,94,0.35); transform:rotateY(180deg);">
            <div style="font-size:0.7rem; color:#22c55e; margin-bottom:12px;">پاسخ</div>
            <div style="color:#f8fafc; font-size:1rem;">${esc(card.answer)}</div>
          </div>
        </div>
      </div>
      <div style="display:flex; gap:12px; padding:16px 16px 28px; max-width:552px; width:100%; margin:0 auto; box-sizing:border-box;">
        <button onclick="window.fcAnswer(false)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(239,68,68,0.4); background:rgba(239,68,68,0.15); color:#fca5a5; font-weight:800; font-size:0.95rem; cursor:pointer;">فراموش کردم</button>
        <button onclick="window.fcAnswer(true)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(34,197,94,0.4); background:rgba(34,197,94,0.15); color:#86efac; font-weight:800; font-size:0.95rem; cursor:pointer;">بلد بودم</button>
      </div>
    </div>`;
}

export function renderFlashcardsView() {
  return `<div id="flashcards-view">${fcState.studyDeck ? renderStudyMode() : renderDeckManager()}</div>`;
}

function rerender() {
  const el = document.getElementById('flashcards-view');
  if (el) el.outerHTML = renderFlashcardsView();
  else if (typeof window.renderApp === 'function') window.renderApp();
}

window.fcStartStudy = function(deck) {
  fcState.studyDeck = deck;
  fcState.queue = buildQueue(deck);
  fcState.index = 0;
  fcState.flipped = false;
  fcState.reviewed = 0;
  rerender();
};

window.fcExitStudy = function() {
  fcState.studyDeck = null;
  rerender();
};

window.fcFlip = function() {
  fcState.flipped = !fcState.flipped;
  rerender();
};

window.fcAnswer = function(isCorrect) {
  const id = fcState.queue[fcState.index];
  if (id !== undefined) {
    // Same persistence path as the Tools view Leitner box (db.reviewFlashcard)
    db.reviewFlashcard(id, isCorrect);
    fcState.reviewed++;
    fcState.index++;
    fcState.flipped = false;
    try {
      if (typeof window.triggerActionDrivenPush === 'function') window.triggerActionDrivenPush();
    } catch (_) {}
  }
  rerender();
};

// Lets cloud pulls refresh this view via the existing dispatcher name
window.updateLeitnerUI = window.updateLeitnerUI || function() {
  if (document.getElementById('flashcards-view') && !fcState.studyDeck) rerender();
};
