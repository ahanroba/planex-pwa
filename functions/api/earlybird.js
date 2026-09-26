// Cloudflare Pages Functions: /api/earlybird
// «باشگاه سحرخیزان» — ثبت و خواندن لیست بیداری ۵ تا ۷ صبح به وقت ایران

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0'
};

const WINDOW_START_MIN = 5 * 60;  // 05:00
const WINDOW_END_MIN = 7 * 60;    // 07:00

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders });
}

function getIranTodayDateStr() {
  try {
    const f = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran', year: 'numeric', month: '2-digit', day: '2-digit' });
    return f.format(new Date());
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

function getIranNowHHMM() {
  try {
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', hour12: false });
    return f.format(new Date());
  } catch (e) {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
}

// "05:14" -> 314 ; returns null for malformed input
function toMinutes(hhmm) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(hhmm || '').trim());
  if (!m) return null;
  const h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

function sortByWake(list) {
  return list.slice().sort((a, b) => {
    const am = toMinutes(a.wakeTime);
    const bm = toMinutes(b.wakeTime);
    if (am !== null && bm !== null && am !== bm) return am - bm;
    return (a.recordedAt || 0) - (b.recordedAt || 0);
  });
}

async function readList(kv, key) {
  const raw = await kv.get(key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function getKv(env) {
  return env.PLANEX_KV || env.LEADERBOARD_KV || null;
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const kv = getKv(env);
    if (!kv) {
      return json({ success: false, error: 'KV_NOT_BOUND', message: 'اتصال KV روی سرور تنظیم نشده است.' }, 500);
    }

    const url = new URL(request.url);
    const dateStr = url.searchParams.get('date') || getIranTodayDateStr();
    const list = sortByWake(await readList(kv, `early_birds_${dateStr}`));

    return new Response(JSON.stringify({
      success: true,
      date: dateStr,
      list,
      earlyBirds: list,
      count: list.length
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Cache-Control': 'public, max-age=120, s-maxage=120' }
    });
  } catch (err) {
    return json({ success: false, error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = getKv(env);
    if (!kv) {
      return json({ success: false, error: 'KV_NOT_BOUND', message: 'اتصال KV روی سرور تنظیم نشده است؛ سحرخیزی ثبت نشد.' }, 500);
    }

    const data = await request.json();
    const userId = String(data.userId || '').trim();
    if (!userId) {
      return json({ success: false, error: 'MISSING_USER_ID', message: 'شناسه کاربر الزامی است.' }, 400);
    }

    const dateStr = data.date || getIranTodayDateStr();
    // ساعت سرور مرجع است تا ساعت دستگاه قابل دستکاری نباشد
    const serverHHMM = getIranNowHHMM();
    const clientMinutes = toMinutes(data.wakeTime);
    const serverMinutes = toMinutes(serverHHMM);
    const wakeTime = serverMinutes !== null ? serverHHMM : (clientMinutes !== null ? data.wakeTime : '00:00');
    const wakeMinutes = toMinutes(wakeTime);

    if (wakeMinutes === null || wakeMinutes < WINDOW_START_MIN || wakeMinutes >= WINDOW_END_MIN) {
      return json({
        success: false,
        error: 'OUTSIDE_WINDOW',
        serverTime: serverHHMM,
        message: 'ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.'
      }, 403);
    }

    const key = `early_birds_${dateStr}`;
    let list = await readList(kv, key);

    // جلوگیری از ثبت تکراری یک کاربر در یک روز
    const existing = list.find(u => u && u.userId === userId);
    if (existing) {
      const sorted = sortByWake(list);
      return json({
        success: true,
        alreadyRecorded: true,
        date: dateStr,
        entry: existing,
        rank: sorted.findIndex(u => u.userId === userId) + 1,
        list: sorted,
        earlyBirds: sorted,
        message: `سحرخیزی شما امروز قبلاً در ساعت ${existing.wakeTime} ثبت شده است.`
      });
    }

    const entry = {
      userId,
      nickname: String(data.nickname || data.name || 'داوطلب').trim().substring(0, 35),
      target: String(data.target || '').trim().substring(0, 60),
      wakeTime,
      date: dateStr,
      avatarUrl: data.avatarUrl || '',
      recordedAt: Date.now()
    };

    list.push(entry);
    list = sortByWake(list);

    // ۴۸ ساعت نگهداری تا لیست دیروز هم قابل مرور باشد
    await kv.put(key, JSON.stringify(list), { expirationTtl: 172800 });

    const rank = list.findIndex(u => u.userId === userId) + 1;
    return json({
      success: true,
      alreadyRecorded: false,
      date: dateStr,
      entry,
      rank: rank > 0 ? rank : null,
      list,
      earlyBirds: list,
      message: 'سحرخیزی شما ثبت شد ☀️'
    });
  } catch (err) {
    return json({ success: false, error: err.message }, 500);
  }
}
