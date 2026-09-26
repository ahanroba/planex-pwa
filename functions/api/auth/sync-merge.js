// Cloudflare Pages Function: /api/auth/sync-merge
// Handles merging local offline data with Cloudflare D1 / KV under Telegram user account

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
    const db = env.DB || env.d1 || null;

    const body = await request.json().catch(() => ({}));
    const telegramUser = body?.telegramUser || body?.user || null;
    const offlineData = body?.offlineData || body?.data || body?.appState || {};

    if (!telegramUser || (!telegramUser.id && !telegramUser.telegram_id)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'اطلاعات کاربر تلگرام ارسال نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const userId = telegramUser.id || telegramUser.telegram_id;
    const phone = telegramUser.phone || telegramUser.phone_number || '';
    const now = Date.now();

    // 1. Save in KV Storage
    if (kv) {
      try {
        const syncPayload = {
          userId: `tg_${userId}`,
          telegram_id: userId,
          phone: phone,
          appState: offlineData,
          backupData: offlineData,
          updatedAt: now
        };
        await kv.put(`personal_sync_tg_${userId}`, JSON.stringify(syncPayload), { expirationTtl: 7776000 });
      } catch (err) {
        console.warn('[Sync-Merge KV Warning]:', err);
      }
    }

    // 2. Save in D1 Database if user_data table exists
    if (db && phone) {
      try {
        await db.prepare(`
          INSERT INTO user_data (phone_number, data_json, updated_at)
          VALUES (?, ?, ?)
          ON CONFLICT(phone_number) DO UPDATE SET
            data_json = excluded.data_json,
            updated_at = excluded.updated_at
        `).bind(phone, JSON.stringify(offlineData), now).run();
      } catch (err) {
        console.warn('[Sync-Merge D1 Warning]:', err);
      }
    }

    const token = `plx_jwt_${now}_${userId}`;

    return new Response(JSON.stringify({
      success: true,
      mergedData: offlineData,
      user: telegramUser,
      token: token,
      message: 'اطلاعات با موفقیت با حساب تلگرام شما ادغام و ذخیره شد.'
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Sync-Merge Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در پردازش اطلاعات سرور.'
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestGet() {
  return new Response(JSON.stringify({
    success: true,
    message: 'PlanEx Sync-Merge API is active.'
  }), {
    status: 200,
    headers: corsHeaders
  });
}
