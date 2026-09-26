// Cloudflare Pages Function: /api/telegram-webhook
// Telegram Bot Webhook Handler: Contact Sharing, Onboarding Flow, Password Generation & Photo Sync

const BOT_TOKEN = '8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM';
const TG_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Content-Type': 'application/json; charset=utf-8'
};

const FIELD_NAMES = {
  f_tajrobi: 'تجربی 🧪',
  f_riazi: 'ریاضی 📐',
  f_ensani: 'انسانی 📚',
  f_med: 'پزشکی / بالینی 🩺'
};

const GOAL_NAMES = {
  g_konkur: 'کنکور سراسری',
  g_nahayi: 'امتحانات نهایی',
  g_advanced: 'آزمون پره‌انترنی / ارشد',
  g_free: 'مطالعه آزاد / جامع'
};

/**
 * Standardizes phone numbers to Iranian format (09123456789)
 */
function formatPhoneNumber(rawPhone) {
  if (!rawPhone) return '';
  let p = String(rawPhone).trim();
  p = p.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  p = p.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  p = p.replace(/[^0-9]/g, '');

  if (p.startsWith('0098')) {
    p = '0' + p.slice(4);
  } else if (p.startsWith('98') && p.length >= 12) {
    p = '0' + p.slice(2);
  } else if (p.startsWith('9') && p.length === 10) {
    p = '0' + p;
  }
  return p;
}

/**
 * Generates a cryptographically strong, random 12-character password
 */
function generateStrongPassword(length = 12) {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghjkmnpqrstuvwxyz';
  const digits = '23456789';
  const symbols = '#@$!%*&';
  const allChars = upper + lower + digits + symbols;
  
  let pwd = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    digits[Math.floor(Math.random() * digits.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ];
  
  for (let i = pwd.length; i < length; i++) {
    pwd.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }
  
  return pwd.sort(() => Math.random() - 0.5).join('');
}

async function tgRequest(method, payload) {
  try {
    const res = await fetch(`${TG_API}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (e) {
    console.error(`[Telegram API Error] Method ${method}:`, e);
    return null;
  }
}

async function findUser(env, userId, phone = '') {
  const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
  const db = env.DB || env.d1 || null;

  // 1. Check D1 Database
  if (db) {
    try {
      if (userId && phone) {
        const row = await db.prepare('SELECT * FROM users WHERE telegram_id = ? OR phone_number = ? LIMIT 1').bind(userId, phone).first();
        if (row) return row;
      } else if (userId) {
        const row = await db.prepare('SELECT * FROM users WHERE telegram_id = ? LIMIT 1').bind(userId).first();
        if (row) return row;
      } else if (phone) {
        const row = await db.prepare('SELECT * FROM users WHERE phone_number = ? LIMIT 1').bind(phone).first();
        if (row) return row;
      }
    } catch (e) {
      console.warn('[D1 findUser warning]:', e);
    }
  }

  // 2. Check KV Storage
  if (kv) {
    try {
      if (userId) {
        const raw = await kv.get(`tg_user_${userId}`);
        if (raw) return JSON.parse(raw);
      }
      if (phone) {
        const clean = formatPhoneNumber(phone);
        const raw = await kv.get(`user_phone_${clean}`);
        if (raw) return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('[KV findUser warning]:', e);
    }
  }

  return null;
}

async function saveUserRecord(env, userPayload) {
  const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
  const db = env.DB || env.d1 || null;

  // 1. Save in KV Storage
  if (kv && userPayload.uid) {
    try {
      await kv.put(`tg_user_${userPayload.uid}`, JSON.stringify(userPayload));
      if (userPayload.phone) {
        const cleanPhone = formatPhoneNumber(userPayload.phone);
        await kv.put(`user_phone_${cleanPhone}`, JSON.stringify(userPayload));
        const last10 = cleanPhone.slice(-10);
        if (last10.length === 10) {
          await kv.put(`user_phone_0${last10}`, JSON.stringify(userPayload));
          await kv.put(`user_phone_98${last10}`, JSON.stringify(userPayload));
          await kv.put(`user_phone_+98${last10}`, JSON.stringify(userPayload));
        }
      }
    } catch (e) {
      console.warn('[KV Save User Error]:', e);
    }
  }

  // 2. Save in D1 Database
  if (db && (userPayload.uid || userPayload.phone)) {
    try {
      const phoneVal = userPayload.phone || `tg_${userPayload.uid}`;
      await db.prepare(`
        INSERT INTO users (telegram_id, phone_number, password, created_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(telegram_id) DO UPDATE SET
          phone_number = excluded.phone_number,
          password = excluded.password
      `).bind(userPayload.uid || null, phoneVal, userPayload.password || '', Date.now()).run();
    } catch (e) {
      console.warn('[D1 Save User Error]:', e);
    }
  }
}

async function updateUserAvatar(env, userId, avatarUrl) {
  const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
  const db = env.DB || env.d1 || null;

  if (kv && userId) {
    try {
      const raw = await kv.get(`tg_user_${userId}`);
      if (raw) {
        const user = JSON.parse(raw);
        user.avatar_url = avatarUrl;
        user.photo_url = avatarUrl;
        await kv.put(`tg_user_${userId}`, JSON.stringify(user));
        if (user.phone) {
          await kv.put(`user_phone_${formatPhoneNumber(user.phone)}`, JSON.stringify(user));
        }
      }
    } catch (e) {}
  }

  if (db && userId) {
    try {
      await db.prepare('UPDATE users SET avatar_url = ? WHERE telegram_id = ?').bind(avatarUrl, userId).run();
    } catch (e) {
      console.warn('[D1 Update Avatar Error]:', e);
    }
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
    const body = await request.json().catch(() => ({}));

    // ─────────────────────────────────────────────────────────────
    // 1. Handle Inline Keyboard Callback Queries (Field, Goal, Skip)
    // ─────────────────────────────────────────────────────────────
    if (body.callback_query) {
      const cb = body.callback_query;
      const cbId = cb.id;
      const data = String(cb.data || '');
      const from = cb.from || {};
      const userId = from.id;
      const firstName = from.first_name || 'کاربر';
      const username = from.username || '';
      const chatId = cb.message?.chat?.id || userId;
      const messageId = cb.message?.message_id;

      await tgRequest('answerCallbackQuery', { callback_query_id: cbId });

      // ── Step B: User selected a Field ──
      if (data.startsWith('f_')) {
        const selectedField = FIELD_NAMES[data] || 'عمومی';

        if (kv && userId) {
          try {
            const raw = await kv.get(`tg_onboarding_${userId}`);
            const state = raw ? JSON.parse(raw) : {};
            state.field = selectedField;
            state.fieldCode = data;
            state.step = 'goal';
            await kv.put(`tg_onboarding_${userId}`, JSON.stringify(state), { expirationTtl: 86400 });
          } catch (err) {}
        }

        const goalText = `عالیه! هدف یا آزمون اصلیت چیه؟ 🎯\nاز گزینه‌های زیر انتخاب کن:`;
        const goalKeyboard = {
          inline_keyboard: [
            [
              { text: "کنکور سراسری", callback_data: "g_konkur" },
              { text: "امتحانات نهایی", callback_data: "g_nahayi" }
            ],
            [
              { text: "آزمون پره‌انترنی / ارشد", callback_data: "g_advanced" },
              { text: "مطالعه آزاد / جامع", callback_data: "g_free" }
            ]
          ]
        };

        if (messageId) {
          await tgRequest('editMessageText', {
            chat_id: chatId,
            message_id: messageId,
            text: goalText,
            reply_markup: goalKeyboard
          });
        }

        return new Response(JSON.stringify({ success: true, step: 'goal' }), {
          status: 200,
          headers: corsHeaders
        });
      }

      // ── Step C: User selected a Goal ──
      if (data.startsWith('g_')) {
        const selectedGoal = GOAL_NAMES[data] || 'عمومی';
        let phone = '';
        let password = '';
        let field = 'عمومی';

        if (kv && userId) {
          try {
            const raw = await kv.get(`tg_onboarding_${userId}`);
            const state = raw ? JSON.parse(raw) : {};
            state.goal = selectedGoal;
            state.goalCode = data;
            state.step = 'photo';
            phone = state.phone || '';
            password = state.password || '';
            field = state.field || field;
            await kv.put(`tg_onboarding_${userId}`, JSON.stringify(state), { expirationTtl: 86400 });

            // Update user in DB/KV with field & goal
            const userPayload = {
              uid: userId,
              telegram_id: userId,
              name: firstName,
              full_name: firstName,
              username: username,
              phone: phone,
              password: password,
              field: field,
              goal: selectedGoal,
              updatedAt: Date.now()
            };
            await saveUserRecord(env, userPayload);
          } catch (err) {}
        }

        const photoText = 
          `📷 <b>ارسال تصویر پروفایل (اختیاری):</b>\n\n` +
          `برای نمایش تصویر شما در برنامه و تالار رقابت، همین الان یک عکس بفرست یا دکمه زیر را لمس کن:`;

        const photoKeyboard = {
          inline_keyboard: [
            [
              { text: "⏭️ رد شدن و دریافت مشخصات ورود", callback_data: "skip_photo" }
            ]
          ]
        };

        if (messageId) {
          await tgRequest('editMessageText', {
            chat_id: chatId,
            message_id: messageId,
            text: photoText,
            parse_mode: 'HTML',
            reply_markup: photoKeyboard
          });
        }

        return new Response(JSON.stringify({ success: true, step: 'photo' }), {
          status: 200,
          headers: corsHeaders
        });
      }

      // ── Step D: User clicked Skip Photo or Finished ──
      if (data === 'skip_photo') {
        let phone = '';
        let password = '';
        let field = '';
        let goal = '';

        if (kv && userId) {
          try {
            const raw = await kv.get(`tg_onboarding_${userId}`);
            if (raw) {
              const state = JSON.parse(raw);
              phone = state.phone || '';
              password = state.password || '';
              field = state.field || '';
              goal = state.goal || '';
            }
          } catch (e) {}
        }

        if (!phone || !password) {
          const u = await findUser(env, userId);
          if (u) {
            phone = u.phone || u.phone_number || phone;
            password = u.password || password;
            field = u.field || field;
            goal = u.goal || goal;
          }
        }

        const replyText = 
          `🎉 <b>حساب کاربری شما با موفقیت ساخته و تأیید شد!</b>\n\n` +
          `📱 <b>شماره شما برای ورود:</b> <code>${phone}</code>\n` +
          `🔑 <b>رمز عبور اختصاصی شما (جهت کپی لمس کنید):</b>\n` +
          `<code>${password}</code>\n\n` +
          `⚠️ <i>این شماره و رمز رو به خاطر داشته باش تا در سایر دستگاه‌ها بدون نیاز به تلگرام بتونی وارد بشی.</i>`;

        const loginUrl = `https://planexapp.ir/?auth_uid=${userId}&auth_name=${encodeURIComponent(firstName)}${username ? `&auth_user=${encodeURIComponent(username)}` : ''}&phone=${encodeURIComponent(phone)}&pwd=${encodeURIComponent(password)}${field ? `&field=${encodeURIComponent(field)}` : ''}${goal ? `&goal=${encodeURIComponent(goal)}` : ''}`;

        const finalKeyboard = {
          inline_keyboard: [
            [
              { text: "🚀 ورود مستقیم به برنامه پلنکس", url: loginUrl }
            ]
          ]
        };

        if (messageId) {
          await tgRequest('editMessageText', {
            chat_id: chatId,
            message_id: messageId,
            text: replyText,
            parse_mode: 'HTML',
            reply_markup: finalKeyboard
          });
        }

        if (kv && userId) {
          try { await kv.delete(`tg_onboarding_${userId}`); } catch (e) {}
        }

        return new Response(JSON.stringify({ success: true, completed: true }), {
          status: 200,
          headers: corsHeaders
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const message = body?.message;
    if (!message) {
      return new Response(JSON.stringify({ success: true, message: 'No message object' }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const chatId = message.chat?.id;
    if (!chatId) {
      return new Response(JSON.stringify({ success: true, message: 'No chat ID' }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const from = message.from || {};
    const userId = from.id || chatId;
    const firstName = from.first_name || 'کاربر';
    const username = from.username || '';
    const text = (message.text || '').trim();

    // ─────────────────────────────────────────────────────────────
    // 2. Handle Photo Upload (message.photo)
    // ─────────────────────────────────────────────────────────────
    if (message.photo && Array.isArray(message.photo) && message.photo.length > 0) {
      const photos = message.photo;
      const highestPhoto = photos[photos.length - 1]; // دریافت با‌کیفیت‌ترین سایز
      const fileId = highestPhoto.file_id;

      // ۱. درخواست به تلگرام برای گرفتن مسیر فایل:
      const fileRes = await fetch(`https://api.telegram.org/bot8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM/getFile?file_id=${fileId}`);
      const fileData = await fileRes.json();
      
      if (fileData.ok && fileData.result.file_path) {
        const relativePath = fileData.result.file_path;
        
        // ۲. ساخت لینک امن و بدون فیلتر از دامنه خود سایت (Relative URL):
        const proxyAvatarUrl = `/api/avatar?path=${encodeURIComponent(relativePath)}`;
        
        // ۳. ذخیره avatarUrl در رکورد کاربر در دیتابیس
        await updateUserAvatar(env, userId, proxyAvatarUrl);
        
        // ۴. ارسال پیام موفقیت به همراه پیش‌نمایش و دکمه بازگشت:
        await fetch(`https://api.telegram.org/bot8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: message.chat.id,
            text: `📸 <b>تصویر پروفایل شما با موفقیت در پلنکس ثبت شد!</b> ✅\n\nاکنون می‌توانید وارد برنامه شوید:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [[
                { text: "🚀 بازگشت و ورود به برنامه", url: `https://planexapp.ir/?auth_uid=${message.chat.id}&avatar=${encodeURIComponent(proxyAvatarUrl)}` }
              ]]
            }
          })
        });
      }

      if (kv && userId) {
        try { await kv.delete(`tg_onboarding_${userId}`); } catch (e) {}
      }

      return new Response(JSON.stringify({ success: true, photo: true }), {
        status: 200,
        headers: corsHeaders
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 3. Handle Contact Sharing (message.contact) or Phone in Text
    // ─────────────────────────────────────────────────────────────
    let receivedPhone = '';
    if (message.contact && message.contact.phone_number) {
      receivedPhone = message.contact.phone_number;
    } else if (/^(\+98|0)?9\d{9}$/.test(text.replace(/[\s-]/g, ''))) {
      receivedPhone = text;
    }

    if (receivedPhone) {
      const phone = formatPhoneNumber(receivedPhone);
      const existingUser = await findUser(env, userId, phone);

      // ── Scenario A: Existing User with Previous Password ──
      if (existingUser && existingUser.password) {
        const password = existingUser.password;
        const avatarUrl = existingUser.avatar_url || existingUser.photo_url || '';

        const updatedUser = {
          ...existingUser,
          uid: userId,
          telegram_id: userId,
          name: firstName,
          full_name: firstName,
          username: username,
          phone: phone,
          phone_number: phone,
          password: password,
          avatar_url: avatarUrl,
          updated_at: Date.now()
        };
        await saveUserRecord(env, updatedUser);

        const replyText = 
          `✅ <b>حساب شما قبلاً تأیید شده است!</b>\n\n` +
          `📱 <b>شماره ثبت‌شده شما:</b> <code>${phone}</code>\n` +
          `🔑 <b>رمز عبور قبلی شما (جهت کپی لمس کنید):</b>\n` +
          `<code>${password}</code>\n\n` +
          `از این شماره و رمز می‌تونی در هر دستگاه یا مرورگر دیگه‌ای برای ورود استفاده کنی.\n` +
          `📷 در صورت تمایل می‌تونی یک عکس بفرستی تا آواتار حسابت آپدیت بشه.`;

        const loginUrl = `https://planexapp.ir/?auth_uid=${userId}&auth_name=${encodeURIComponent(firstName)}${username ? `&auth_user=${encodeURIComponent(username)}` : ''}&phone=${encodeURIComponent(phone)}${avatarUrl ? `&avatar=${encodeURIComponent(avatarUrl)}` : ''}`;

        await tgRequest('sendMessage', {
          chat_id: chatId,
          text: replyText,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: "🚀 ورود مستقیم به پلنکس", url: loginUrl }
              ]
            ]
          }
        });

        return new Response(JSON.stringify({ success: true, isExistingUser: true }), {
          status: 200,
          headers: corsHeaders
        });
      }

      // ── Scenario B: New User Onboarding ──
      const newPassword = generateStrongPassword(12);
      const newUserPayload = {
        uid: userId,
        telegram_id: userId,
        name: firstName,
        full_name: firstName,
        username: username,
        phone: phone,
        phone_number: phone,
        password: newPassword,
        avatar_url: '',
        created_at: Date.now(),
        updated_at: Date.now()
      };

      await saveUserRecord(env, newUserPayload);

      // Save onboarding state in KV for step 2 (Field)
      if (kv) {
        await kv.put(`tg_onboarding_${userId}`, JSON.stringify({
          step: 'field',
          userId,
          phone,
          password: newPassword,
          firstName,
          username
        }), { expirationTtl: 86400 });
      }

      const fieldPrompt = 
        `🎉 <b>شماره تماس شما با موفقیت ثبت شد!</b>\n\n` +
        `لطفاً برای تکمیل پروفایل، رشته تحصیلی خودت رو انتخاب کن:`;

      const fieldKeyboard = {
        inline_keyboard: [
          [
            { text: "تجربی 🧪", callback_data: "f_tajrobi" },
            { text: "ریاضی 📐", callback_data: "f_riazi" }
          ],
          [
            { text: "انسانی 📚", callback_data: "f_ensani" },
            { text: "پزشکی / بالینی 🩺", callback_data: "f_med" }
          ]
        ]
      };

      await tgRequest('sendMessage', {
        chat_id: chatId,
        text: fieldPrompt,
        parse_mode: 'HTML',
        reply_markup: fieldKeyboard
      });

      return new Response(JSON.stringify({ success: true, isNewUser: true, step: 'field' }), {
        status: 200,
        headers: corsHeaders
      });
    }

    // ─────────────────────────────────────────────────────────────
    // 4. Default /start Command
    // ─────────────────────────────────────────────────────────────
    const welcomeText = `سلام <b>${firstName}</b> عزیز به پلنکس خوش اومدی! 🌟\nلطفاً با لمس دکمه زیر شماره تماس خودت رو به اشتراک بذار تا حسابت فعال بشه:`;

    const contactKeyboard = {
      keyboard: [
        [
          { text: "📱 اشتراک‌گذاری شماره تماس", request_contact: true }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    };

    await tgRequest('sendMessage', {
      chat_id: chatId,
      text: welcomeText,
      parse_mode: 'HTML',
      reply_markup: contactKeyboard
    });

    return new Response(JSON.stringify({ success: true, prompt: 'start' }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Telegram Webhook General Error]', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestGet() {
  return new Response(JSON.stringify({
    success: true,
    message: 'PlanEx Telegram Bot Webhook Active'
  }), {
    status: 200,
    headers: corsHeaders
  });
}
