import { db } from '../db.js';
import { API_BASE_URL } from '../config.js';

const [initialY, initialM] = db.getTodayJalali();
let currentYear = initialY;
let currentMonth = initialM;

window.getSelectedRoutinesDate = function() {
  if (!window.selectedRoutinesDate) {
    window.selectedRoutinesDate = db.getTodayJalali();
  }
  return window.selectedRoutinesDate;
};
window.setSelectedRoutinesDate = function(y, m, d) {
  window.selectedRoutinesDate = [y, m, d];
  if (window.renderApp) window.renderApp();
};

const PERSIAN_MONTHS = [
  "فروردین", "اردیبهشت", "خرداد",
  "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر",
  "دی", "بهمن", "اسفند"
];

const EMOJIS = [
  '✨', '💧', '🏃', '😴', '🚶', '🧘', '🥗', '📚', '🛌', '🌙',
  '☕', '💊', '💻', '🎯', '🔥', '⭐', '📝', '🍎', '🧠', '🚴',
  '📖', '💪', '🎨', '🎧', '⏰', '🏊', '🥊', '☀️', '⚡', '🏆'
];

window.habitModalSelectedEmoji = window.habitModalSelectedEmoji || '✨';
window.habitModalEditingId = null;

window.selectHabitEmoji = (emoji) => {
  window.habitModalSelectedEmoji = emoji;
  const preview = document.getElementById('habit-emoji-preview');
  if (preview) {
    preview.textContent = emoji;
    preview.style.transform = 'scale(1.25)';
    setTimeout(() => {
      if (preview) preview.style.transform = 'scale(1)';
    }, 150);
  }
  document.querySelectorAll('.habit-emoji-picker-btn').forEach(btn => {
    if (btn.dataset.emoji === emoji) {
      btn.style.background = 'rgba(56, 189, 248, 0.25)';
      btn.style.borderColor = '#38bdf8';
      btn.style.transform = 'scale(1.15)';
      btn.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.4)';
    } else {
      btn.style.background = 'rgba(255, 255, 255, 0.05)';
      btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    }
  });
};

// Completion Burst / Confetti Micro-Animation Helper
window.triggerCompletionBurst = (event) => {
  try {
    const x = event ? (event.clientX || event.pageX) : (window.innerWidth / 2);
    const y = event ? (event.clientY || event.pageY) : (window.innerHeight / 2);
    const particles = ['✨', '⭐', '🎉', '🔥', '🌟', '💥'];
    const container = document.createElement('div');
    container.style.cssText = `position: fixed; left: ${x}px; top: ${y}px; pointer-events: none; z-index: 99999;`;
    document.body.appendChild(container);

    for (let i = 0; i < 6; i++) {
      const p = document.createElement('span');
      const emoji = particles[Math.floor(Math.random() * particles.length)];
      const angle = (Math.PI * 2 * i) / 6 + (Math.random() * 0.4 - 0.2);
      const dist = 35 + Math.random() * 25;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 15;
      p.textContent = emoji;
      p.style.cssText = `
        position: absolute; left: 0; top: 0; font-size: 1.1rem;
        transform: translate(-50%, -50%) scale(0.5); opacity: 1;
        transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease;
      `;
      container.appendChild(p);

      requestAnimationFrame(() => {
        p.style.transform = `translate(${tx}px, ${ty}px) scale(1.3) rotate(${Math.random() * 60 - 30}deg)`;
        p.style.opacity = '0';
      });
    }

    setTimeout(() => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }, 600);
  } catch (e) {}
};

// Ensure global handlers for routines exist
window.handleHabitDayClick = (habitId, day, event = null) => {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const habits = db.getHabits();
  const monthKey = `${currentYear}_${currentMonth}`;
  const habit = habits.find(h => h.id == habitId || String(h.id) === String(habitId));
  const previousStatus = habit?.completedDays?.[monthKey]?.[day] || 0;

  db.cycleHabitDay(habitId, monthKey, day);

  if (previousStatus === 0 && window.triggerCompletionBurst) {
    window.triggerCompletionBurst(event);
  }
  if (window.renderApp) window.renderApp();
};

window.toggleTodayHabit = (habitId, event = null) => {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const [tY, tM, tD] = window.getSelectedRoutinesDate();
  const todayMonthKey = `${tY}_${tM}`;
  const habits = db.getHabits();
  const habit = habits.find(h => h.id == habitId || String(h.id) === String(habitId));
  const currentStatus = habit?.completedDays?.[todayMonthKey]?.[tD] || 0;

  db.cycleHabitDay(habitId, todayMonthKey, tD);

  if (currentStatus === 0 && window.triggerCompletionBurst) {
    window.triggerCompletionBurst(event);
  }
  if (window.renderApp) window.renderApp();
};

window.toggleRoutineChecklistItem = (id, event = null) => {
  if (event && typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }
  const list = db.getRoutineChecklist() || [];
  const item = list.find(i => i.id == id || String(i.id) === String(id));
  const willBeDone = item ? !item.completed : true;

  db.toggleRoutineChecklistItem(id);

  if (willBeDone && window.triggerCompletionBurst) {
    window.triggerCompletionBurst(event);
  }
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  if (window.renderApp) window.renderApp();
};

window.addRoutineChecklistItem = () => {
  const input = document.getElementById('input-routine-checklist-text');
  if (!input || !input.value.trim()) return;
  db.addRoutineChecklistItem(input.value.trim());
  input.value = '';
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  if (window.renderApp) window.renderApp();
};

window.deleteRoutineChecklistItem = (id) => {
  db.deleteRoutineChecklistItem(id);
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  if (window.renderApp) window.renderApp();
};

window.handleChangeMonth = (m) => {
  currentMonth = parseInt(m);
  if (window.renderApp) window.renderApp();
};

window.handleChangeYear = (y) => {
  currentYear = parseInt(y);
  if (window.renderApp) window.renderApp();
};

window.openAddHabitModal = () => {
  window.habitModalEditingId = null;
  window.habitModalSelectedEmoji = '✨';
  
  const modal = document.getElementById('add-habit-modal');
  const titleEl = document.getElementById('habit-modal-title');
  const inputEl = document.getElementById('habit-title');
  const submitBtn = document.getElementById('btn-save-habit-modal');
  
  if (titleEl) titleEl.textContent = '✨ افزودن روتین و عادت جدید';
  if (inputEl) inputEl.value = '';
  if (submitBtn) submitBtn.textContent = 'ذخیره روتین';
  
  if (modal) modal.style.display = 'flex';
  window.selectHabitEmoji('✨');
  if (inputEl) setTimeout(() => inputEl.focus(), 100);
};

window.openEditHabitModal = (id) => {
  const habits = db.getHabits();
  const habit = habits.find(h => h.id == id || String(h.id) === String(id));
  if (!habit) return;
  
  window.habitModalEditingId = id;
  const initialEmoji = habit.emoji || '✨';
  window.habitModalSelectedEmoji = initialEmoji;
  
  const modal = document.getElementById('add-habit-modal');
  const titleEl = document.getElementById('habit-modal-title');
  const inputEl = document.getElementById('habit-title');
  const submitBtn = document.getElementById('btn-save-habit-modal');
  
  if (titleEl) titleEl.textContent = '✏️ ویرایش روتین و عادت';
  if (inputEl) inputEl.value = habit.title || '';
  if (submitBtn) submitBtn.textContent = 'به‌روزرسانی روتین';
  
  if (modal) modal.style.display = 'flex';
  window.selectHabitEmoji(initialEmoji);
  if (inputEl) setTimeout(() => inputEl.focus(), 100);
};

window.closeAddHabitModal = () => {
  const modal = document.getElementById('add-habit-modal');
  if (modal) modal.style.display = 'none';
  window.habitModalEditingId = null;
};

window.saveNewHabit = () => {
  const inputEl = document.getElementById('habit-title');
  const title = inputEl ? inputEl.value.trim() : '';
  if (!title) {
    alert('لطفاً عنوان روتین یا عادت را وارد کنید.');
    return;
  }
  
  const emoji = window.habitModalSelectedEmoji || '✨';
  
  if (window.habitModalEditingId) {
    db.updateHabit(window.habitModalEditingId, { title, emoji });
  } else {
    db.addHabit(title, 'روزانه', '08:00', emoji);
  }
  
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  window.closeAddHabitModal();
  window.renderApp();
};

window.deleteHabitGlobal = (id) => {
  if (confirm('آیا از حذف این عادت اطمینان دارید؟')) {
    db.deleteHabit(id);
    if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
    window.renderApp();
  }
};

// ---- SOCIAL ROUTINES HANDLERS ----
window.planexPublicRoutines = [];
window.planexHasFetchedRoutines = false;

window.fetchPublicRoutines = async () => {
  try {
    const token = localStorage.getItem('planex_jwt_token');
    if (!token) return;
    const res = await fetch(`${API_BASE_URL}/api/routines/public.php`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      window.planexPublicRoutines = data.routines;
      window.planexHasFetchedRoutines = true;
      window.renderApp();
    } else if (res.status === 403) {
      // Reciprocity Rule Blocked
      window.planexReciprocityError = data.message;
      window.planexHasFetchedRoutines = true;
      window.renderApp();
    }
  } catch (err) {
    console.error('Error fetching routines', err);
  }
};

window.copyPublicRoutine = async (routineId) => {
  try {
    const token = localStorage.getItem('planex_jwt_token');
    if (!token) {
      alert('لطفاً ابتدا وارد حساب کاربری خود شوید.');
      return;
    }
    const res = await fetch(`${API_BASE_URL}/api/routines/copy.php?id=${encodeURIComponent(routineId)}`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      alert('✅ ' + data.message);
      // Simulate adding to local db optimistically (simplified)
      db.addHabit('روتین کپی شده جدید'); 
      window.renderApp();
    } else {
      alert('❌ خطا: ' + data.message);
    }
  } catch (err) {
    alert('خطا در برقراری ارتباط با سرور.');
  }
};

window.toggleMyRoutinePublic = (habitId, currentStatus) => {
  const newStatus = !currentStatus;
  alert(newStatus ? '📢 روتین شما عمومی شد!' : '🔒 روتین شما خصوصی شد.');
  window.renderApp();
};

window.PRE_MADE_ROUTINES = [
  {
    id: 'miracle_morning',
    title: '🌅 معجزه صبحگاهی (Miracle Morning)',
    desc: 'شروع پرانرژی روز با تمرکز، ذهن‌آگاهی و انگیزه بالا',
    category: 'Morning',
    tasks: [
      '🛏️ مرتب کردن تخت خواب (۱ دقیقه)',
      '🧘 تنفس عمیق و مدیتیشن صبحگاهی (۱ دقیقه)',
      '🗣️ بیان اهداف با جملات تأکیدی مثبت (۱ دقیقه)',
      '🖼️ تجسم خودِ آینده و اهداف بزرگ (۱ دقیقه)',
      '🏋️‍♂️ حرکات کششی و ورزش سبک (۱ دقیقه)',
      '📖 مطالعه و یادگیری مطلب جدید (۱ دقیقه)',
      '📕 ژورنال‌نویسی و ثبت افکار و احساسات (۱ دقیقه)'
    ]
  },
  {
    id: 'calm_ready_morning',
    title: '☕ صبح آرام و آماده (Calm & Ready Morning)',
    desc: 'آماده‌سازی روزانه بدون عجله، استرس و سردرگمی',
    category: 'Morning',
    tasks: [
      '💧 نوشیدن یک لیوان آب ولرم (۱ دقیقه)',
      '🚿 دوش گرفتن و شادابی صبح (۱۵ دقیقه)',
      '🧴 روتین مراقبت از پوست (۴ دقیقه)',
      '👕 تعویض لباس و آماده شدن (۵ دقیقه)',
      '💇 استایل مو و ظاهر (۲۰ دقیقه)',
      '📋 بررسی جدول و برنامه روزانه (۵ دقیقه)',
      '👜 جمع‌آوری و آماده کردن وسایل ضروری (۱۰ دقیقه)'
    ]
  },
  {
    id: 'deep_study',
    title: '📚 آماده‌سازی مطالعه عمیق (Study Routine)',
    desc: 'فراهم کردن شرایط محیطی برای حداکثر یادگیری و تمرکز',
    category: 'Study',
    tasks: [
      '🎒 آماده کردن تمام کتب و جزوات مطالعه (۱۰ دقیقه)',
      '💡 تنظیم نور، زاویه چراغ و روشنایی محیط (۱ دقیقه)',
      '📋 مشخص کردن پارت‌ها و بودجه‌بندی روز (۱ دقیقه)',
      '🧹 مرتب و خلوت کردن کامل میز کار (۱ دقیقه)',
      '⏱️ بلاک تمرکز و مطالعه عمیق بدون حواس‌پرتی (۵۰ دقیقه)'
    ]
  },
  {
    id: 'exercise_health',
    title: '🏃‍♀️ ورزش، تحرک و شادابی (Exercise & Body)',
    desc: 'کاهش استرس روزانه، افزایش انعطاف‌پذیری و تقویت حافظه',
    category: 'Exercise',
    tasks: [
      '🏋️ تمرینات ورزشی و بدنسازی (۱۵ دقیقه)',
      '🤸 حرکات کششی و افزایش انعطاف بدن (۱۰ دقیقه)',
      '🏃 دویدن یا پیاده‌روی سریع (۳۰ دقیقه)',
      '🧘 یوگا و تنفس پیوسته ضد اضطراب (۲۰ دقیقه)',
      '🌳 پیاده‌روی در فضای باز و هوای آزاد (۴۰ دقیقه)'
    ]
  },
  {
    id: 'productivity_boost',
    title: '🚀 افزایش بهره‌وری و اقدام سریع (Productivity)',
    desc: 'شکستن تنبلی، اولویت‌بندی تسک‌ها و شروع بدون معطلی',
    category: 'Productivity',
    tasks: [
      '🎯 انتخاب مهم‌ترین و سرنوشت‌سازترین کار امروز',
      '📝 یادداشت ۳ تسک حیاتی و کلیدی روز (۵ دقیقه)',
      '📌 انتخاب ۱ تسک فوری برای ۳۰ دقیقه آینده (۳ دقیقه)',
      '⚡ شمارش معکوس ۵ ثانیه‌ای و پرتاب به سمت عمل (۵ ثانیه)',
      '📍 تعیین دقیق زمان و مکان اجرای تسک (۳ دقیقه)'
    ]
  },
  {
    id: 'relaxation_mind',
    title: '🌸 آرامش، ذهن‌آگاهی و تخلیه روان (Relaxation)',
    desc: 'استراحت اصولی مغز، آرام‌سازی ذهن و بازیابی انرژی',
    category: 'Relaxation',
    tasks: [
      '👥 تماس یا پیام به یک دوست و احوال‌پرسی (۱۰ دقیقه)',
      '📝 یادداشت‌برداری آزاد و تخلیه ذهن در دفترچه (۲۰ دقیقه)',
      '🌤️ خیره شدن به آسمان، بستن چشم‌ها و حس نور خورشید (۲ دقیقه)',
      '🧹 مرتب کردن محیط اطراف برای آرامش بصری (۱۰ دقیقه)',
      '🪷 بازتاب روز، سپاسگزاری و مرور حس و حال (۵ دقیقه)'
    ]
  },
  {
    id: 'step_away_stress',
    title: '🌿 فاصله‌گیری از استرس (Step Away from Stress)',
    desc: 'تکنیک‌های ساده و سریع برای سبک کردن ذهن در فشارهای کاری',
    category: 'Stress Relief',
    tasks: [
      '🧠 توجه و پذیرش احساس فعلی بدون قضاوت (۱ دقیقه)',
      '✏️ نوشتن افکار نگران‌کننده روی کاغذ (۲ دقیقه)',
      '🤝 نگاه به این موقعیت از زاویه دید یک دوست صمیمی (۲ دقیقه)',
      '🎯 خالی کردن ذهن و شروع با یک اقدام فیزیکی بسیار کوچک (۳ دقیقه)',
      '🌸 مشاهده و احساس تغییر درونی ایجاد شده (۱ دقیقه)'
    ]
  },
  {
    id: 'sos_breathing',
    title: '🫁 تنفس نجات‌بخش و گراندینگ (SOS Breathing)',
    desc: 'وقتی تنفس سنگین می‌شود و نیاز به اتصال به لحظه حال داری',
    category: 'SOS',
    tasks: [
      '🧘 الگوی تنفسی ۴ به ۶ عمیق (۱ دقیقه)',
      '❤️ گراندینگ و قرار دادن دست‌ها روی قفسه سینه/کف دست‌ها (۱ دقیقه)',
      '🌳 خیره شدن به یک نقطه ثابت در محیط (۱ دقیقه)',
      '🎧 گوش سپردن فعال به ۳ صدای مختلف محیطی (۱ دقیقه)',
      '🪷 ۳ بار بازدم آرام، عمیق و طولانی (۱ دقیقه)'
    ]
  },
  {
    id: 'sos_anxiety',
    title: '🛡️ مهار آنی اضطراب حاد (When You Feel Anxious)',
    desc: 'تکنیک حواس پنج‌گانه برای بازگشت سریع به زمان حال',
    category: 'SOS',
    tasks: [
      '👓 پیدا کردن ۵ شیء با رنگ‌های مختلف در اتاق (۱ دقیقه)',
      '🎧 شناسایی و تفکیک ۳ صدای پیرامون (۱ دقیقه)',
      '✍️ یادداشت یک حس بدنی فعلی (۱ دقیقه)',
      '🧊 لمس یا شستن دست‌ها با آب خنک (۱ دقیقه)',
      '☕ در دست گرفتن یک فنجان یا نوشیدنی گرم (۱ دقیقه)'
    ]
  },
  {
    id: 'sos_mood_swings',
    title: '⚖️ بازگشت به تعادل احساسی (When Mood Swings)',
    desc: 'کنترل نوسانات خلقی ناگهانی و بازیابی آرامش درونی',
    category: 'SOS',
    tasks: [
      '🪷 احساس دمای محیط و تماس نسیم/سرما (۱ دقیقه)',
      '🎧 پخش و شنیدن یک قطعه صوتی آرامش‌بخش (۱ دقیقه)',
      '❤️ فشردن ملایم کف پاها به زمین و حس تکیه‌گاه (۱ دقیقه)',
      '💡 فشردن انگشتان دست تک‌به‌تک و متمرکز (۱ دقیقه)',
      '✍️ نوشتن جمله آرام‌بخش «من در امانم و حالم خوب است» (۱ دقیقه)'
    ]
  }
];

window.clonePreMadeRoutine = (id) => {
  const routine = window.PRE_MADE_ROUTINES.find(r => r.id === id);
  if (!routine) return;
  
  // Add each task as a separate habit in the tracker
  routine.tasks.forEach(task => {
    db.addHabit(task);
  });
  
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  alert(`✅ تمام تسک‌های روتین "${routine.title}" با موفقیت به لیست عادات شما اضافه شد!`);
  window.renderApp();
};

function renderWeeklyDonuts(dailyProgress, totalHabits) {
  let html = '';
  for (let w = 0; w < 5; w++) {
    const wDays = w === 4 ? 3 : 7;
    let wDone = 0;
    for (let d = w * 7 + 1; d <= Math.min((w + 1) * 7, 31); d++) {
      wDone += dailyProgress[d - 1] || 0;
    }
    const wTotal = wDays * totalHabits;
    const wPct = wTotal > 0 ? Math.round((wDone / wTotal) * 100) : 0;
    const dashoffset = 100.5 - (100.5 * wPct / 100);
    html += '<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">';
    html += '<div style="position: relative; width: 40px; height: 40px;">';
    html += '<svg width="40" height="40" viewBox="0 0 40 40">';
    html += '<circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"></circle>';
    html += '<circle cx="20" cy="20" r="16" fill="none" stroke="var(--primary-accent)" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="' + dashoffset + '" stroke-linecap="round" transform="rotate(-90 20 20)"></circle>';
    html += '</svg>';
    html += '<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-family: Outfit;">' + wPct + '%</div>';
    html += '</div>';
    html += '<span style="font-size: 0.6rem; color: var(--text-secondary);">هفته ' + (w + 1) + '</span>';
    html += '</div>';
  }
  return html;
}

window.setJournalMood = function(mood) {
  const [y, m, d] = window.getSelectedRoutinesDate();
  const key = `${y}_${m}_${d}`;
  const data = db.getJournalEntry ? db.getJournalEntry(key) : { mood: '', rating: 0, note: '' };
  data.mood = mood;
  if (db.saveJournalEntry) db.saveJournalEntry(key, data.mood, data.rating, data.note);
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  if (window.renderApp) window.renderApp();
};

window.setJournalRating = function(rating) {
  const [y, m, d] = window.getSelectedRoutinesDate();
  const key = `${y}_${m}_${d}`;
  const data = db.getJournalEntry ? db.getJournalEntry(key) : { mood: '', rating: 0, note: '' };
  data.rating = rating;
  if (db.saveJournalEntry) db.saveJournalEntry(key, data.mood, data.rating, data.note);
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
  if (window.renderApp) window.renderApp();
};

window.saveJournalNote = function(note) {
  const [y, m, d] = window.getSelectedRoutinesDate();
  const key = `${y}_${m}_${d}`;
  const data = db.getJournalEntry ? db.getJournalEntry(key) : { mood: '', rating: 0, note: '' };
  if (data.note === note) return;
  data.note = note;
  if (db.saveJournalEntry) db.saveJournalEntry(key, data.mood, data.rating, data.note);
  if (window.triggerActionDrivenPush) window.triggerActionDrivenPush();
};

export function renderRoutinesView(options = {}) {
  const { routinesAccordions = { consultation: false, statsChart: false, habitTracker: false } } = options;
  const habits = db.getHabits();
  const monthKey = `${currentYear}_${currentMonth}`;
  const routineChecklist = db.getRoutineChecklist() || [];
  
  // Stats calculation
  let totalHabits = habits.length;
  let maxPossibleCells = totalHabits * 31;
  let doneCells = 0;
  
  const dailyProgress = new Array(31).fill(0);
  
  habits.forEach(habit => {
    const monthData = habit.completedDays?.[monthKey] || {};
    for (let d = 1; d <= 31; d++) {
      if (monthData[d] === 1) {
        doneCells++;
        dailyProgress[d-1]++;
      }
    }
  });

  const overallPct = maxPossibleCells > 0 ? Math.round((doneCells / maxPossibleCells) * 100) : 0;

  // Selected day progress stats
  const [todayY, todayM, todayD] = window.getSelectedRoutinesDate();
  const currentMonthKey = `${todayY}_${todayM}`;
  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  let todayDoneHabitsCount = 0;
  habits.forEach(habit => {
    const mData = habit.completedDays?.[currentMonthKey] || {};
    if (mData[todayD] === 1) todayDoneHabitsCount++;
  });
  const todayHabitsPct = totalHabits > 0 ? Math.round((todayDoneHabitsCount / totalHabits) * 100) : 0;

  // Auto-fetch routines if not done yet
  if (!window.planexHasFetchedRoutines && localStorage.getItem('planex_jwt_token')) {
    window.planexHasFetchedRoutines = true;
    setTimeout(() => window.fetchPublicRoutines(), 500);
  }

  // Generate Week Strip HTML
  const todayDateObj = new Date();
  const dayOfWeek = (todayDateObj.getDay() + 1) % 7;
  let weekStripHTML = `<div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; direction: rtl;">`;
  const dayNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
  for (let i = 0; i < 7; i++) {
    const dDate = new Date(todayDateObj);
    dDate.setDate(todayDateObj.getDate() - dayOfWeek + i);
    const [jy, jm, jd] = db.gregorianToJalali(dDate.getFullYear(), dDate.getMonth() + 1, dDate.getDate());
    
    const mKey = `${jy}_${jm}`;
    let done = 0;
    habits.forEach(h => { if (h.completedDays?.[mKey]?.[jd] === 1) done++; });
    const pct = totalHabits > 0 ? (done / totalHabits) : 0;
    
    const isSelected = (jy === todayY && jm === todayM && jd === todayD);
    
    const bg = isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)';
    const border = isSelected ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.1)';
    const dotColor = pct === 1 && totalHabits > 0 ? '#10b981' : (pct > 0 ? '#f59e0b' : 'transparent');
    
    weekStripHTML += `
      <div onclick="window.setSelectedRoutinesDate(${jy}, ${jm}, ${jd})"
           style="flex: 1; min-width: 60px; padding: 6px 4px; border-radius: 14px; background: ${bg}; border: 1px solid ${border}; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s ease-in-out;">
        <span style="font-size: 0.7rem; color: ${isSelected ? '#38bdf8' : '#9ca3af'}; margin-bottom: 4px;">${dayNames[i]}</span>
        <span style="font-size: 1.2rem; font-weight: 800; color: ${isSelected ? '#fff' : '#d1d5db'}; margin-bottom: 8px;">${toPersianDigits(jd)}</span>
        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${dotColor}; border: 1px solid ${pct > 0 ? dotColor : 'rgba(255,255,255,0.1)'};"></div>
      </div>
    `;
  }
  weekStripHTML += `</div>`;

  const dateKey = `${todayY}_${todayM}_${todayD}`;
  const journalData = db.getJournalEntry ? db.getJournalEntry(dateKey) : { mood: '', rating: 0, note: '' };
  const emojis = ['❤️', '💪', '😴', '😍', '😡', '😫', '😔', '😐', '🙂', '😄'];
  let journalHTML = `
    <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(255,255,255,0.1); padding: 16px; direction: rtl;">
      <h3 style="margin: 0 0 12px 0; font-size: 1rem; color: #f8fafc; font-weight: 800;">حال و احساس امروز</h3>
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${emojis.map(e => `
          <button onclick="window.setJournalMood('${e}')" style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: ${journalData.mood === e ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)'}; background: ${journalData.mood === e ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.05)'}; font-size: 1.2rem; cursor: pointer;">${e}</button>
        `).join('')}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">نمره روز</h4>
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${[1,2,3,4,5,6,7,8,9,10].map(n => `
          <button onclick="window.setJournalRating(${n})" style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: ${journalData.rating === n ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)'}; background: ${journalData.rating === n ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)'}; color: ${journalData.rating === n ? '#10b981' : '#fff'}; font-weight: 800; cursor: pointer;">${toPersianDigits(n)}</button>
        `).join('')}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">ژورنال امروز</h4>
      <textarea id="journal-note-input" rows="3" placeholder="امروز چطور گذشت؟ چی یاد گرفتی؟ چی حس کردی؟..." style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 10px; color: #fff; font-family: inherit; font-size: 0.85rem; margin-bottom: 12px; resize: vertical;" onblur="window.saveJournalNote(this.value)">${journalData.note}</textarea>
    </div>
  `;

  return `
    <div class="main-container" style="padding-bottom: 100px;">
      ${weekStripHTML}
      
      <!-- 🚀 TODAY'S ROUTINES DAILY PROGRESS BANNER -->
      <div class="glass-panel" style="margin-bottom: 16px; padding: 14px 18px; border-radius: 18px; border: 1.5px solid rgba(16, 185, 129, 0.4); background: linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(56, 189, 248, 0.12) 100%); direction: rtl; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 10px; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #10b981;">
              ⚡
            </div>
            <div>
              <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff; display: block;">پیشرفت روتین‌های امروز</strong>
              <span style="font-size: 0.74rem; color: #a7f3d0; font-weight: 700;">
                ${toPersianDigits(todayDoneHabitsCount)} از ${toPersianDigits(totalHabits)} روتین امروز انجام شد (${toPersianDigits(todayHabitsPct)}٪)
              </span>
            </div>
          </div>
          <div style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.85rem; font-family: 'Outfit', sans-serif;">
            ${toPersianDigits(todayHabitsPct)}٪
          </div>
        </div>

        <!-- Progress Fill Bar -->
        <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.35); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="height: 100%; width: ${todayHabitsPct}%; background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%); border-radius: 6px; transition: width 0.6s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
        </div>

        <!-- Today's Habits Quick-Toggle List -->
        ${habits.length > 0 ? `
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #e2e8f0;">⚡ ثبت سریع عادات امروز (${toPersianDigits(todayD)} ${PERSIAN_MONTHS[todayM - 1]}):</span>
              <span style="font-size: 0.72rem; color: #94a3b8;">با یک کلیک علامت بزنید</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${habits.map(habit => {
                const status = habit.completedDays?.[currentMonthKey]?.[todayD] || 0;
                let bg = 'rgba(255, 255, 255, 0.05)';
                let border = 'rgba(255, 255, 255, 0.1)';
                let color = '#cbd5e1';
                let icon = '○';
                let statusText = 'ثبت نشده';

                if (status === 1) {
                  bg = 'rgba(16, 185, 129, 0.22)';
                  border = 'rgba(16, 185, 129, 0.6)';
                  color = '#34d399';
                  icon = '✓';
                  statusText = 'انجام شد';
                } else if (status === 2) {
                  bg = 'rgba(239, 68, 68, 0.22)';
                  border = 'rgba(239, 68, 68, 0.6)';
                  color = '#f87171';
                  icon = '✕';
                  statusText = 'انجام نشد';
                }

                return `
                  <button type="button" onclick="window.toggleTodayHabit('${habit.id}', event)"
                    style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 12px; background: ${bg}; border: 1px solid ${border}; color: ${color}; cursor: pointer; transition: all 0.2s ease; font-family: inherit; font-size: 0.8rem; font-weight: 700;"
                    title="کلیک برای تغییر وضعیت روتین امروز (انجام شد / انجام نشد / ریست)">
                    <span style="font-size: 0.95rem;">${habit.emoji || '✨'}</span>
                    <span>${habit.title}</span>
                    <span style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 1px 6px; font-size: 0.72rem; font-family: 'Outfit'; font-weight: 800;">${icon} ${statusText}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 🎯 ACCORDION 1: Motivational Routine-Building & Consultation Card -->
      <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(168, 85, 247, 0.45); background: linear-gradient(135deg, rgba(168, 85, 247, 0.16) 0%, rgba(236, 72, 153, 0.14) 55%, rgba(245, 158, 11, 0.12) 100%); overflow: hidden; box-shadow: 0 8px 28px rgba(0,0,0,0.3); transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="consultation" style="width: 100%; padding: 14px 18px; background: transparent; border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; font-weight: 800; color: #fff;">
            <span style="font-size: 1.2rem;">🎯</span>
            <span>مشاوره و همراهی تا هدف</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: #e9d5ff;">
            <span>${routinesAccordions.consultation ? 'بستن' : 'مشاهده دکمه‌های مشاوره و کانال'}</span>
            <span style="font-size: 0.75rem; transition: transform 0.2s ease; transform: rotate(${routinesAccordions.consultation ? '180deg' : '0deg'});">▼</span>
          </div>
        </button>

        ${routinesAccordions.consultation ? `
          <div dir="rtl" style="padding: 0 18px 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.08); animation: fadeIn 0.2s ease; margin-top: 4px;">
            <p style="font-size: 0.86rem; line-height: 1.9; color: #f1f5f9; font-weight: 600; margin: 12px 0 14px 0;">
              هنوز به هدفت نرسیدی؟ چون هنوز روتین و عادتش رو نساختی! اول بدون دقیقاً چه روتینی نیاز داری و بعد با تعهد بهش پایبند باش.
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 9px;">
              <a href="https://t.me/medicalaa" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>📢 کانال مشاوره عمومی</span>
              </a>
              <a href="https://t.me/stodybots" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>👥 گروه دورهمی و روتین</span>
              </a>
              <a href="http://t.me/medicalaa?direct" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #10b981 0%, #047857 100%); box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>💬 مشاوره خصوصی و تخصصی</span>
              </a>
            </div>
          </div>
        ` : ''}

      </div>

      <!-- 📅 ACCORDION 2: 31-Day Habit Tracker Card -->
      <div class="glass-panel" style="margin-top: 15px; border-radius: 16px; border: 1.5px solid rgba(16, 185, 129, 0.35); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="habitTracker" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; font-weight: 800; color: #34d399;">
            <span style="font-size: 1.1rem;">📅</span>
            <span>ردیابی عادات (هبیت ترکر ۳۱ روزه) ${habits.length > 0 ? `<strong style="color: #34d399; font-size: 0.8rem; margin-right: 4px;">(${habits.length} عادت فعال)</strong>` : ''}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: #a7f3d0;">
            <span>${routinesAccordions.habitTracker ? 'بستن' : 'مشاهده جدول و ثبت عادات'}</span>
            <span style="font-size: 0.75rem; transition: transform 0.2s ease; transform: rotate(${routinesAccordions.habitTracker ? '180deg' : '0deg'});">▼</span>
          </div>
        </button>

        ${routinesAccordions.habitTracker ? `
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div>
                <h3 style="font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0;">پیگیری عادات (هبیت ترکر ۳۱ روزه)</h3>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">مدیریت پیوسته عادات و چک‌لیست پارت‌های مطالعه در ماه</p>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem; background: linear-gradient(135deg, #10b981 0%, #047857 100%);" onclick="window.openAddHabitModal()">+ عادت جدید</button>
              </div>
            </div>

            <!-- Selectors -->
            <div style="display: flex; gap: 10px; margin-top: 15px; overflow-x: auto; padding-bottom: 5px;">
              <select onchange="window.handleChangeYear(this.value)" class="glass-panel" style="padding: 8px; border: none; outline: none; background: rgba(255,255,255,0.05); color: var(--text-primary); border-radius: 8px;">
                ${Array.from({length: 10}, (_, i) => 1401 + i).map(y => `<option value="${y}" ${y === currentYear ? 'selected' : ''} style="color: #000;">${y}</option>`).join('')}
              </select>
              
              <div style="display: flex; gap: 6px;">
                ${PERSIAN_MONTHS.map((m, i) => `
                  <button onclick="window.handleChangeMonth(${i+1})" class="${currentMonth === i+1 ? 'btn-primary' : 'glass-panel'}" style="padding: 6px 12px; border: none; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; cursor: pointer;">
                    ${m}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Matrix Grid -->
            <div class="glass-panel horizontal-scroll-isolated" style="margin-top: 15px; overflow-x: auto; padding: 15px;">
              <table style="width: 100%; border-collapse: separate; border-spacing: 2px; text-align: center; font-size: 0.8rem; min-width: 900px;">
                <thead>
                  <tr>
                    <th rowspan="2" class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; width: 180px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-bottom: 1px solid rgba(255,255,255,0.1);">عادت</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته اول</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته دوم</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته سوم</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته چهارم</th>
                    <th colspan="3" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته پنجم</th>
                    <th rowspan="2" style="width: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem;">تعداد</th>
                    <th rowspan="2" style="width: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem;">روند🔥</th>
                    <th rowspan="2" style="width: 50px; border-bottom: 1px solid rgba(255,255,255,0.1);">%</th>
                  </tr>
                  <tr>
                    ${Array.from({length: 31}, (_, i) => `
                      <th style="padding: 4px; font-family: 'Outfit', sans-serif; font-weight: normal; color: var(--text-secondary); width: 26px;">${i+1}</th>
                    `).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${habits.length === 0 ? `<tr><td colspan="33" style="padding: 20px; color: var(--text-secondary);">هیچ عادتی ثبت نشده است.</td></tr>` : ''}
                  ${habits.map(habit => {
                    const monthData = habit.completedDays?.[monthKey] || {};
                    let done = 0;
                    let currentStreak = 0;
                    let tempStreak = 0;
                    for(let d=1; d<=31; d++) {
                      if (monthData[d] === 1) { done++; tempStreak++; }
                      else { tempStreak = 0; }
                      if (tempStreak > currentStreak) currentStreak = tempStreak;
                    }
                    const pct = Math.round((done / 31) * 100);
                    
                    return `
                    <tr>
                      <td class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-radius: 0 8px 8px 0; border: 1px solid rgba(255,255,255,0.05); border-left: none;">
                        <div style="display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 4px;">
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.05rem;">${habit.emoji || '✨'}</span>
                            <span>${habit.title}</span>
                            ${currentStreak > 0 ? `<span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 1px 6px; border-radius: 8px; font-size: 0.68rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: inline-flex; align-items: center; gap: 2px;" title="استریک پیوستگی روتین">🔥 ${toPersianDigits(currentStreak)}</span>` : ''}
                          </span>
                          <div style="display: flex; align-items: center; gap: 2px; flex-shrink: 0;">
                            <button onclick="window.openEditHabitModal('${habit.id}')" title="ویرایش روتین" style="background:none; border:none; color: #38bdf8; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✏️</button>
                            <button onclick="window.deleteHabitGlobal('${habit.id}')" title="حذف روتین" style="background:none; border:none; color: #ef4444; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✕</button>
                          </div>
                        </div>
                      </td>
                      ${Array.from({length: 31}, (_, i) => {
                        const status = monthData[i+1] || 0;
                        let bg = 'rgba(255,255,255,0.05)';
                        let color = 'transparent';
                        let char = '○';
                        
                        if (status === 1) { bg = 'rgba(16, 185, 129, 0.2)'; color = '#10b981'; char = '✓'; }
                        if (status === 2) { bg = 'rgba(239, 68, 68, 0.2)'; color = '#ef4444'; char = '✕'; }
                        
                        return `
                          <td onclick="window.handleHabitDayClick('${habit.id}', ${i+1}, event)" style="background: ${bg}; color: ${color}; border-radius: 4px; cursor: pointer; transition: 0.2s; border: 1px solid rgba(255,255,255,0.02); height: 26px;">
                            ${status === 0 ? '' : char}
                          </td>
                        `;
                      }).join('')}
                      <td style="color: var(--text-primary); font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${done}</td>
                      <td style="color: #f59e0b; font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${currentStreak}</td>
                      <td style="color: #10b981; font-weight: bold; font-family: 'Outfit'; border-radius: 8px 0 0 8px; border: 1px solid rgba(255,255,255,0.05); border-right: none;">${pct}%</td>
                    </tr>
                  `}).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 📊 ACCORDION 2: Stats Section (Monthly Overall Progress & Daily Trend) -->
      <div class="glass-panel" style="margin-top: 15px; border-radius: 16px; border: 1.5px solid rgba(56, 189, 248, 0.35); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="statsChart" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; font-weight: 800; color: #38bdf8;">
            <span style="font-size: 1.1rem;">📊</span>
            <span>آمار پیشرفت و نمودار ۳۱ روزه عادات (${overallPct}% تکمیل کل ماه)</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${routinesAccordions.statsChart ? '180deg' : '0deg'});">▼</span>
        </button>

        ${routinesAccordions.statsChart ? `
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <!-- 1. Monthly Overall Progress Card -->
            <div style="margin-bottom: 18px;">
              <h3 style="font-size: 0.95rem; margin-bottom: 15px; text-align: center; color: var(--text-primary);">پیشرفت کلی و هفتگی ماه</h3>
              <div style="display: flex; gap: 24px; align-items: center; justify-content: center; flex-wrap: wrap;">
                <div style="position: relative; width: 110px; height: 110px;">
                  <svg width="110" height="110" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"></circle>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary-accent)" stroke-width="10" 
                      stroke-dasharray="251.2" stroke-dashoffset="${251.2 - (251.2 * overallPct / 100)}" 
                      stroke-linecap="round" transform="rotate(-90 50 50)"></circle>
                  </svg>
                  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: bold; font-family: 'Outfit';">
                    ${overallPct}%
                  </div>
                </div>
                
                <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;">
                  ${renderWeeklyDonuts(dailyProgress, totalHabits)}
                </div>
              </div>
            </div>

            <!-- 2. Daily Trend Bar Chart Card -->
            ${(() => {
              const maxDailyCount = Math.max(...dailyProgress, 1);
              const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
              return `
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 8px;">
                    <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0;">📊 نمودار روند روزانه عادات (۳۱ روز ماه)</h3>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">مقیاس پویا: حداکثر ${toPersianDigits(maxDailyCount)} عادت در روز</span>
                  </div>

                  <div style="overflow-x: auto; padding-bottom: 10px;">
                    <div style="display: flex; align-items: flex-end; height: 140px; gap: 4px; min-width: 650px; padding: 10px 4px 0 4px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      ${dailyProgress.map((count, i) => {
                        const h = count > 0 ? (count / maxDailyCount) * 100 : 0;
                        const isMax = count === maxDailyCount && count > 0;
                        return `
                          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; position: relative;">
                            <span style="font-size: 0.7rem; color: ${isMax ? '#ec4899' : (h > 0 ? '#38bdf8' : 'transparent')}; font-family: 'Outfit'; margin-bottom: 3px; font-weight: bold;">
                              ${count > 0 ? toPersianDigits(count) : ''}
                            </span>
                            <div style="width: 100%; background: ${isMax ? 'linear-gradient(180deg, #ec4899 0%, #a855f7 100%)' : (h > 0 ? 'linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)' : 'rgba(255,255,255,0.05)')}; height: ${count > 0 ? Math.max(h, 8) : 4}%; border-radius: 4px 4px 0 0; transition: all 0.3s; ${h > 0 ? 'box-shadow: 0 2px 8px rgba(56,189,248,0.3);' : ''}" title="روز ${toPersianDigits(i+1)}: ${toPersianDigits(count)} عادت"></div>
                            <span style="font-size: 0.7rem; color: ${isMax ? '#ec4899' : 'var(--text-secondary)'}; font-family: 'Outfit'; margin-top: 6px; font-weight: ${isMax ? 'bold' : 'normal'};">${toPersianDigits(i+1)}</span>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  </div>
                </div>

                <!-- 3. Compact Habit Heatmaps -->
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px; margin-top: 15px;">
                  <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0 0 12px 0;">نقشه فعالیت عادت‌ها (ماه جاری)</h3>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                    ${habits.map(h => {
                      const mData = h.completedDays?.[currentMonthKey] || {};
                      let boxes = '';
                      for (let d = 1; d <= 31; d++) {
                        const done = mData[d] === 1;
                        boxes += `<div style="width: 8px; height: 8px; border-radius: 2px; background: ${done ? '#10b981' : 'rgba(255,255,255,0.05)'}; border: 1px solid ${done ? '#059669' : 'rgba(255,255,255,0.1)'};" title="روز ${d}"></div>`;
                      }
                      return `
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 10px; min-width: 150px; flex: 1;">
                          <div style="font-size: 0.8rem; color: #e2e8f0; font-weight: 700; margin-bottom: 6px; text-align: center;">${h.emoji || '✨'} ${h.title}</div>
                          <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 3px; justify-content: center;">
                            ${boxes}
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            })()}
          </div>
        ` : ''}
      </div>
      <!-- Dynamic Unlimited Checklist & Notes Section -->
      <div class="glass-panel" style="margin-top: 15px; padding: 20px; border-color: rgba(99, 102, 241, 0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3 style="font-size: 1rem; color: #38bdf8; margin: 0;">📝 نکات و چک‌لیست بی‌نهایت روتین و مطالعه</h3>
          <span style="font-size: 0.78rem; color: var(--text-secondary);">امکان افزودن تمام نکات و چک‌لیست‌های دلخواه</span>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <input type="text" id="input-routine-checklist-text" onkeydown="if(event.key === 'Enter') window.addRoutineChecklistItem()" class="form-input" placeholder="عنوان نکته یا چک‌لیست جدید (مثلا: بررسی هفتگی کارنامه آزمون کانون)" style="flex: 1;" />
          <button id="btn-add-routine-checklist" onclick="window.addRoutineChecklistItem()" class="btn-primary" style="width: auto; padding: 0 16px;">+ افزودن نکته</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${routineChecklist.length === 0 ? '<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ نکته یا چک‌لیستی اضافه نشده است.</p>' : ''}
          ${routineChecklist.map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: ${item.completed ? 'var(--text-muted)' : 'white'}; text-decoration: ${item.completed ? 'line-through' : 'none'}; flex: 1;">
                <input type="checkbox" class="chk-routine-item" onclick="window.toggleRoutineChecklistItem('${item.id}', event)" data-id="${item.id}" ${item.completed ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: #10b981; cursor: pointer;" />
                <span style="font-size: 0.9rem; font-weight: 500;">${item.text}</span>
              </label>
              <button class="btn-delete-routine-item" onclick="window.deleteRoutineChecklistItem('${item.id}')" data-id="${item.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

      <!-- Pre-Made Templates Accordion -->
      <details class="glass-panel" style="margin-top: 15px; padding: 20px; border-color: rgba(16, 185, 129, 0.4); cursor: pointer;">
        <summary style="display: flex; justify-content: space-between; align-items: center; list-style: none; outline: none;">
          <h3 style="font-size: 1rem; color: #10b981; margin: 0; display: flex; align-items: center; gap: 8px;">
            💎 روتین‌های پیشنهادی و الگوهای آماده
          </h3>
          <span style="font-size: 0.8rem; color: var(--text-secondary); background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 12px;">مشاهده الگوها 🔽</span>
        </summary>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 15px; cursor: default;">
          ${window.PRE_MADE_ROUTINES.map(r => `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 15px; display: flex; flex-direction: column; transition: 0.2s;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
              <div style="font-weight: bold; color: white; font-size: 1.05rem; margin-bottom: 5px;">${r.title}</div>
              <p style="font-size: 0.75rem; color: #34d399; margin-bottom: 12px;">${r.desc}</p>
              <ul style="padding-right: 18px; margin: 0 0 15px 0; font-size: 0.75rem; color: var(--text-secondary); flex-grow: 1; line-height: 1.6;">
                ${r.tasks.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('')}
              </ul>
              <button onclick="window.clonePreMadeRoutine('${r.id}')" class="btn-primary" style="padding: 8px; font-size: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                ➕ افزودن به روتین‌های من
              </button>
            </div>
          `).join('')}
        </div>
      </details>
      ${journalHTML}
    </div>

    <!-- Add / Edit Habit Modal -->
    <div id="add-habit-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.75); z-index: 1000; align-items: center; justify-content: center; backdrop-filter: blur(8px); padding: 16px;">
      <div class="glass-panel" style="width: 100%; max-width: 440px; padding: 22px; border: 1.5px solid rgba(56, 189, 248, 0.35); background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div id="habit-emoji-preview" style="width: 42px; height: 42px; border-radius: 14px; background: rgba(56, 189, 248, 0.15); border: 1.5px solid #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);">
              ✨
            </div>
            <div>
              <h3 id="habit-modal-title" style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #fff;">
                ✨ افزودن روتین و عادت جدید
              </h3>
              <span style="font-size: 0.72rem; color: var(--text-secondary);">آیکون و نام روتین را انتخاب کنید</span>
            </div>
          </div>
          <button onclick="window.closeAddHabitModal()" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 1.2rem; padding: 4px 8px; border-radius: 8px;">✕</button>
        </div>
        
        <!-- Emoji Picker Palette -->
        <label class="input-label" style="display: block; margin-bottom: 8px; font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
          🎨 انتخاب آیکون / ایموجی:
        </label>
        <div id="habit-emoji-palette" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 18px; max-height: 145px; overflow-y: auto; padding: 6px; border-radius: 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08);">
          ${EMOJIS.map(e => `
            <button type="button"
                    class="habit-emoji-picker-btn"
                    data-emoji="${e}"
                    onclick="window.selectHabitEmoji('${e}')"
                    style="height: 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; font-size: 1.35rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              ${e}
            </button>
          `).join('')}
        </div>
        
        <!-- Title Input -->
        <label class="input-label" style="display: block; margin-bottom: 6px; font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
          ✏️ عنوان روتین یا عادت:
        </label>
        <input id="habit-title"
               type="text"
               class="form-input"
               style="width: 100%; padding: 11px 14px; margin-bottom: 20px; font-size: 0.92rem; border-radius: 12px; background: rgba(0,0,0,0.4); border: 1.5px solid rgba(255,255,255,0.12); color: white;"
               placeholder="مثلاً: بیداری رأس ساعت ۶، ۱۰۰ تست زیست، ورزش"
               onkeydown="if(event.key==='Enter') window.saveNewHabit()" />
        
        <div style="display: flex; gap: 10px;">
          <button id="btn-save-habit-modal" class="btn-primary" style="flex: 2; padding: 11px; font-weight: 800; font-size: 0.9rem; border-radius: 12px; background: linear-gradient(135deg, #0284c7, #0369a1);" onclick="window.saveNewHabit()">
            ذخیره روتین
          </button>
          <button type="button" class="glass-panel" style="flex: 1; padding: 11px; cursor: pointer; border-radius: 12px; font-weight: 700; color: #94a3b8; border-color: rgba(255,255,255,0.1);" onclick="window.closeAddHabitModal()">
            انصراف
          </button>
        </div>
      </div>
    </div>
  `;
}
