import { db } from '../db.js';

const GRATITUDE_PROMPTS = [
  "یک اتفاق کوچک که امروز به خاطرش خوشحالی؟",
  "امروز بابت چه چیزی به خودت افتخار می‌کنی؟",
  "امروز چه چیزی کارها رو برات راحت‌تر کرد؟"
];

export function renderEvaluationView() {
  const gratitudes = db.getGratitudeNotes() || [];
  const evalData = db.getEvaluationData ? db.getEvaluationData() : {};
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;

  // Battery level from state or db (default 75%)
  const energyLevel = db.getTodayEnergyLevel ? db.getTodayEnergyLevel() : 75;

  let batteryColor = '#10B981';
  let statusLabel = 'پرانرژی و آمادگی حداکثری 🚀';
  let adviceText = 'انرژی و انگیزه‌ت فوق‌العاده‌ست! الان بهترین زمان برای رفتن سراغ سخت‌ترین و مهم‌ترین تسک روز (قورت دادن قورباغه) هست.';

  if (energyLevel < 35) {
    batteryColor = '#38BDF8';
    statusLabel = 'نیاز به استراحت و بازآفرینی 🪫';
    adviceText = 'اشکالی نداره! با کارهای سبک‌تر (مثل مرتب‌سازی یادداشت‌ها یا مرورهای ۵ دقیقه‌ای) شروع کن و حتماً بین پارت‌ها استراحت‌های کوتاه داشته باش.';
  } else if (energyLevel < 60) {
    batteryColor = '#F59E0B';
    statusLabel = 'خسته اما پیگیر و منظم 🔋';
    adviceText = 'وضعیت متوازن! روال خرد خرد و پارت‌های کوتاه همراه با استراحت‌های منظم رو پیش ببر تا انرژیت حفظ بشه.';
  } else if (energyLevel < 85) {
    batteryColor = '#EA580C';
    statusLabel = 'انرژی متوازن و تمرکز عالی ⚡';
    adviceText = 'سطح انرژی خیلی مناسبی داری! روال منظم و تمرکز روی درس‌های ضریب‌دار و تست‌زنی رو با قدرت ادامه بده.';
  }

  // Active prompt index from state (default 0)
  const currentPromptIdx = (window.evalPromptIndex || 0) % GRATITUDE_PROMPTS.length;
  const currentPrompt = GRATITUDE_PROMPTS[currentPromptIdx];

  return `
    <div class="main-container" style="padding-bottom: 100px;">
      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #f8fafc;">ارزیابی عملکرد و حس خوب روزانه</h2>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">باتری انرژی امروز، کوزه شیشه‌ای شکرگزاری و ارزیابی ۱۰ موردی عملکرد</p>
      </div>

      <!-- 1. Mood & Battery Check-in Card (1:1 Android EnergyMoodCheckInCard) -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px; border-color: ${batteryColor}; background: rgba(15, 23, 42, 0.85);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: ${batteryColor}33; display: flex; align-items: center; justify-content: center; color: ${batteryColor}; font-size: 1.2rem;">
              ⚡
            </div>
            <div>
              <div style="font-weight: bold; font-size: 1rem; color: #f8fafc;">باتری و انرژی امروز</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">ارزیابی ظرفیت برای مدیریت بهتر کارها</div>
            </div>
          </div>

          <div style="background: ${batteryColor}25; border: 1px solid ${batteryColor}66; color: ${batteryColor}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-family: 'Outfit'; font-size: 1rem;">
            ${energyLevel}%
          </div>
        </div>

        <div style="text-align: center; font-weight: bold; font-size: 1.05rem; color: var(--primary-accent); margin: 12px 0;">
          «باتری امروزت روی چنده؟»
        </div>

        <!-- Interactive Range Slider -->
        <div style="margin-bottom: 14px;">
          <input type="range" id="slider-energy-level" min="0" max="100" step="5" value="${energyLevel}" style="width: 100%; accent-color: ${batteryColor}; cursor: pointer;" />
        </div>

        <!-- Preset Quick Buttons -->
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px;">
          <button class="btn-energy-preset btn-header-action" data-val="20" style="padding: 6px 12px; font-size: 0.8rem; ${energyLevel === 20 ? `background:${batteryColor}; color:white; font-weight:bold;` : ''}">🪫 کم (۲۰٪)</button>
          <button class="btn-energy-preset btn-header-action" data-val="45" style="padding: 6px 12px; font-size: 0.8rem; ${energyLevel === 45 ? `background:${batteryColor}; color:white; font-weight:bold;` : ''}">🔋 متوسط (۴۵٪)</button>
          <button class="btn-energy-preset btn-header-action" data-val="75" style="padding: 6px 12px; font-size: 0.8rem; ${energyLevel === 75 ? `background:${batteryColor}; color:white; font-weight:bold;` : ''}">⚡ خوب (۷۵٪)</button>
          <button class="btn-energy-preset btn-header-action" data-val="95" style="padding: 6px 12px; font-size: 0.8rem; ${energyLevel === 95 ? `background:${batteryColor}; color:white; font-weight:bold;` : ''}">🚀 عالی (۹۵٪)</button>
        </div>

        <!-- Status Banner -->
        <div style="background: ${batteryColor}20; padding: 10px; border-radius: 12px; text-align: center; font-weight: bold; color: ${batteryColor}; margin-bottom: 12px;">
          ${statusLabel}
        </div>

        <!-- Smart Empathetic Advice Box -->
        <div style="background: rgba(255,255,255,0.04); padding: 12px; border-radius: 12px; font-size: 0.82rem; line-height: 1.6; color: var(--text-secondary); display: flex; gap: 8px;">
          <span style="color: ${batteryColor}; font-size: 1.1rem;">💡</span>
          <div>${adviceText}</div>
        </div>
      </div>

      <!-- 2. Gratitude Glass Jar Card (1:1 Android GratitudeGlassJarCard) -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px; border-color: rgba(236, 72, 153, 0.4); background: rgba(236, 72, 153, 0.04);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(236, 72, 153, 0.2); display: flex; align-items: center; justify-content: center; color: #ec4899; font-size: 1.2rem;">
              ❤️
            </div>
            <div>
              <div style="font-weight: bold; font-size: 1rem; color: #fce7f3;">شکرگزاری و حس خوب امروز</div>
              <div style="font-size: 0.75rem; color: var(--text-secondary);">ثبت روزنامه‌نویسی خُرد (Micro-journaling)</div>
            </div>
          </div>

          <button id="btn-open-gratitude-jar" class="btn-primary" style="width: auto; padding: 6px 14px; font-size: 0.8rem; background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);">
            🫙 کوزه خاطرات (${gratitudes.length}) ✨
          </button>
        </div>

        <!-- Prompt Rotator Box -->
        <div id="btn-rotate-gratitude-prompt" style="background: rgba(236, 72, 153, 0.12); padding: 12px; border-radius: 12px; margin-bottom: 12px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.2rem; color: #ec4899;">💬</span>
            <span style="font-weight: bold; font-size: 0.9rem; color: #f472b6;">${currentPrompt}</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--primary-accent); font-weight: bold;">تغییر سوال 🔄</span>
        </div>

        <!-- Text Input & Counter -->
        <div style="position: relative; margin-bottom: 10px;">
          <input type="text" id="gratitude-input-text" class="form-input" placeholder="مثلاً: قهوه گرم صبحگاهی، حل یک تست سخت، لبخند دوستم..." maxlength="140" style="padding-left: 60px;" />
          <span id="gratitude-char-counter" style="position: absolute; left: 12px; top: 12px; font-size: 0.75rem; color: var(--text-muted); font-family: 'Outfit';">0/140</span>
        </div>

        <button id="btn-add-gratitude-jar" class="btn-primary" style="background: #ec4899; padding: 12px; font-weight: bold; font-size: 0.92rem;">
          انداختن در کوزه شیشه‌ای خاطرات ✨
        </button>
      </div>

      <!-- 3. 10-Row Weekly Evaluation Card -->
      <div class="glass-panel" style="padding: 20px; margin-bottom: 20px;">
        <div class="card-title" style="color: var(--primary-accent);">
          ⭐ ارزیابی عملکرد (۱۰ مورد نقاط مثبت و منفی)
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
          ${Array.from({ length: 10 }).map((_, i) => {
            const itemIdx = i + 1;
            const existing = evalData[itemIdx] || { text: '', isPositive: true };
            return `
              <div style="display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                <span style="background: rgba(99, 102, 241, 0.2); color: #818cf8; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-family: 'Outfit'; font-size: 0.85rem;">${itemIdx}</span>
                <input type="text" class="form-input eval-row-input" data-idx="${itemIdx}" value="${existing.text}" placeholder="ارزیابی یا نقطه عملکرد ${itemIdx}..." style="flex: 1; background: transparent; border: none;" />
                <button class="btn-toggle-eval-pos eval-pos-btn" data-idx="${itemIdx}" data-pos="${existing.isPositive ? '1' : '0'}" style="background: ${existing.isPositive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${existing.isPositive ? '#10b981' : '#ef4444'}; border: 1px solid ${existing.isPositive ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}; padding: 4px 12px; border-radius: 10px; cursor: pointer; font-size: 0.8rem; font-weight: bold; white-space: nowrap;">
                  ${existing.isPositive ? '➕ مثبت' : '➖ منفی'}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 4. Golden Time Management Tips Card -->
      <div class="glass-panel" style="padding: 20px; background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.3);">
        <div class="card-title" style="color: #f59e0b;">
          💡 ایده‌های نو برای مدیریت زمان (Gold Tips)
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 12px; font-size: 0.85rem; line-height: 1.7;">
          <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            💡 <strong>افزایش تدریجی:</strong> می‌توانید مقداری از ساعات کم‌بازده، تفریح افراطی و خواب اضافی کم کرده و به ساعات مطالعه بیفزایید.
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            💡 <strong>پیش‌مطالعه منظم:</strong> پیش‌مطالعه قبل از کلاس و حل تمرین منظم گروهی، بازدهی ساعات یادگیری شما را تا ۲ برابر افزایش می‌دهد.
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            💡 <strong>ثبت اتلاف وقت:</strong> ثبت دقیق ساعات تلف‌شده در جدول ۲۴ ساعته، اولین قدم در شناسایی و رفع عوامل اتلاف وقت است.
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            💡 <strong>خواب باکیفیت:</strong> داشتن برنامه خواب و استراحت منظم (۶ تا ۸ ساعت)، تمرکز بالای شما را در زمان مطالعه تضمین می‌کند.
          </div>
        </div>
      </div>
    </div>
  `;
}
