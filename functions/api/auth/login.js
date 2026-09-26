// Cloudflare Pages Function: /api/auth/login
// Password & Phone Authentication Endpoint for PlanEx

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

function normalizePhone(rawPhone) {
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

function getPhoneVariants(cleanPhone) {
  const variants = new Set();
  variants.add(cleanPhone);
  
  // Last 10 digits (e.g. 9123456789)
  const last10 = cleanPhone.replace(/^\+/, '').slice(-10);
  if (last10.length === 10) {
    variants.add(`0${last10}`);
    variants.add(`98${last10}`);
    variants.add(`+98${last10}`);
    variants.add(last10);
  }
  return Array.from(variants);
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json().catch(() => ({}));

    const rawPhone = body?.phone || body?.phone_number || body?.mobile || '';
    const rawPassword = body?.password || body?.pwd || '';

    const cleanPhone = normalizePhone(rawPhone);
    const password = String(rawPassword).trim();

    if (!cleanPhone || !password) {
      return new Response(JSON.stringify({
        success: false,
        message: 'شماره موبایل و رمز عبور الزامی است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const variants = getPhoneVariants(cleanPhone);
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    let matchedUser = null;

    // 1. Try querying D1 Database
    if (db) {
      try {
        const placeholders = variants.map(() => '?').join(',');
        const query = `SELECT * FROM users WHERE phone_number IN (${placeholders}) LIMIT 1`;
        const stmt = db.prepare(query);
        const row = await stmt.bind(...variants).first();

        if (row) {
          if (row.password === password) {
            matchedUser = {
              id: row.telegram_id || `usr_${row.phone_number}`,
              telegram_id: row.telegram_id || null,
              name: row.name || row.full_name || 'کاربر پلنکس',
              full_name: row.name || row.full_name || 'کاربر پلنکس',
              first_name: (row.name || row.full_name || 'کاربر').split(' ')[0],
              username: row.username || '',
              phone: row.phone_number || cleanPhone,
              phone_number: row.phone_number || cleanPhone,
              avatar_url: row.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${row.username || row.telegram_id || 'planex'}`,
              major: row.field || row.major || '',
              target: row.goal || row.target || '',
              auth_provider: 'phone_password'
            };
          } else {
            return new Response(JSON.stringify({
              success: false,
              message: 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.'
            }), {
              status: 401,
              headers: corsHeaders
            });
          }
        }
      } catch (err) {
        console.warn('[D1 Auth Error]:', err);
      }
    }

    // 2. Try querying KV Storage
    if (!matchedUser && kv) {
      try {
        for (const variant of variants) {
          const rawData = await kv.get(`user_phone_${variant}`);
          if (rawData) {
            const userObj = JSON.parse(rawData);
            if (userObj.password === password) {
              matchedUser = {
                id: userObj.uid || userObj.telegram_id || `usr_${variant}`,
                telegram_id: userObj.uid || userObj.telegram_id || null,
                name: userObj.name || userObj.full_name || 'کاربر پلنکس',
                full_name: userObj.name || userObj.full_name || 'کاربر پلنکس',
                first_name: (userObj.name || userObj.full_name || 'کاربر').split(' ')[0],
                username: userObj.username || '',
                phone: userObj.phone || variant,
                phone_number: userObj.phone || variant,
                avatar_url: userObj.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userObj.username || userObj.uid || 'planex'}`,
                major: userObj.field || userObj.major || '',
                target: userObj.goal || userObj.target || '',
                auth_provider: 'phone_password'
              };
              break;
            } else {
              return new Response(JSON.stringify({
                success: false,
                message: 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.'
              }), {
                status: 401,
                headers: corsHeaders
              });
            }
          }
        }
      } catch (err) {
        console.warn('[KV Auth Error]:', err);
      }
    }

    if (!matchedUser) {
      return new Response(JSON.stringify({
        success: false,
        message: 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.'
      }), {
        status: 401,
        headers: corsHeaders
      });
    }

    // Generate lightweight token
    const token = `plx_jwt_${Date.now()}_${matchedUser.id}`;

    return new Response(JSON.stringify({
      success: true,
      token: token,
      user: matchedUser,
      message: `خوش آمدید ${matchedUser.name}!`
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Auth Login Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطای سرور در احراز هویت.'
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
