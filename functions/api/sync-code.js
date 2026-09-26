// Cloudflare Pages Function: /api/sync-code
// Handles storing and resolving Personal Cloud Sync tokens in PLANEX_KV

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

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({ success: false, error: 'KV_NOT_BOUND' }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const data = await request.json();
    const rawToken = data.token || data.syncToken || data.code || data.syncCode || '';
    const safeToken = String(rawToken).trim().toUpperCase();
    
    if (!safeToken) {
      return new Response(JSON.stringify({ success: false, message: 'کد همگام‌سازی الزامی است.' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const backupData = data.backupData || data.appState || {};

    const payload = {
      token: safeToken,
      code: safeToken,
      userId: data.userId || `usr_${safeToken.replace(/[^A-Z0-9]/g, '')}`,
      nickname: String(data.nickname || '').trim(),
      target: String(data.target || '').trim(),
      avatarUrl: data.avatarUrl || '',
      backupData: backupData,
      appState: backupData,
      totalKeys: Object.keys(backupData).length,
      updatedAt: Date.now()
    };

    const payloadStr = JSON.stringify(payload);
    // Store in KV with 90-day TTL (7776000 seconds)
    await kv.put(`personal_sync_${safeToken}`, payloadStr, { expirationTtl: 7776000 });
    await kv.put(`sync_code_${safeToken}`, payloadStr, { expirationTtl: 7776000 });

    return new Response(JSON.stringify({
      success: true,
      token: safeToken,
      message: 'اطلاعات کامل برنامه با موفقیت در فضای ابری همگام‌سازی شد.',
      updatedAt: payload.updatedAt,
      data: payload
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({ success: false, error: 'KV_NOT_BOUND' }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const url = new URL(request.url);
    const rawCode = url.searchParams.get('token') || url.searchParams.get('code') || url.searchParams.get('sync_code') || url.searchParams.get('sync_token') || '';
    const safeCode = String(rawCode).trim().toUpperCase();

    if (!safeCode) {
      return new Response(JSON.stringify({ success: false, message: 'کد همگام‌سازی مشخص نشده است.' }), {
        status: 400,
        headers: corsHeaders
      });
    }

    let raw = await kv.get(`personal_sync_${safeCode}`);
    if (!raw) {
      raw = await kv.get(`sync_code_${safeCode}`);
    }

    if (!raw) {
      return new Response(JSON.stringify({ success: false, message: 'کد نامعتبر است یا دیتایی برای آن ذخیره نشده است.' }), {
        status: 404,
        headers: corsHeaders
      });
    }

    const data = JSON.parse(raw);
    return new Response(JSON.stringify({
      success: true,
      token: safeCode,
      data,
      backupData: data.backupData || data.appState || null,
      updatedAt: data.updatedAt || Date.now()
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
