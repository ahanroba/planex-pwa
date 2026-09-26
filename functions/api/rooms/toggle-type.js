// Cloudflare Pages Function: /api/rooms/toggle-type
// Toggles a study room between private (is_private = 1, type = 'private') and public (is_private = 0, type = 'public')

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
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const body = await request.json().catch(() => ({}));
    const rawCode = body?.room_code || body?.code || body?.groupCode || '';
    const cleanCode = String(rawCode).trim().toUpperCase();
    const isPrivateRequested = body?.is_private !== undefined
      ? (body.is_private ? 1 : 0)
      : (body?.type === 'private' ? 1 : 0);

    if (!cleanCode) {
      return new Response(JSON.stringify({
        success: false,
        message: 'کد گروه الزامی است.'
      }), { status: 400, headers: corsHeaders });
    }

    const type = isPrivateRequested ? 'private' : 'public';
    const isPrivate = isPrivateRequested ? 1 : 0;

    // 1. Update D1 Database
    if (db) {
      try {
        await db.prepare(`
          UPDATE rooms SET is_private = ?, type = ? WHERE UPPER(room_id) = UPPER(?) OR UPPER(room_code) = UPPER(?)
        `).bind(isPrivate, type, cleanCode, cleanCode).run();
      } catch (err) {
        console.warn('[D1 Toggle Room Type Error]:', err);
      }
    }

    // 2. Update KV Storage
    if (kv) {
      try {
        const rawRoom = await kv.get(`room_${cleanCode}`);
        if (rawRoom) {
          const parsed = JSON.parse(rawRoom);
          parsed.is_private = isPrivate;
          parsed.type = type;
          await kv.put(`room_${cleanCode}`, JSON.stringify(parsed), { expirationTtl: 7776000 });
        }

        const rawSquad = await kv.get(`squad_info_${cleanCode}`);
        if (rawSquad) {
          const parsedSquad = JSON.parse(rawSquad);
          parsedSquad.is_private = isPrivate;
          parsedSquad.type = type;
          await kv.put(`squad_info_${cleanCode}`, JSON.stringify(parsedSquad), { expirationTtl: 7776000 });
        }
      } catch (err) {
        console.warn('[KV Toggle Room Type Error]:', err);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      roomCode: cleanCode,
      is_private: isPrivate,
      type: type,
      message: `نوع گروه با موفقیت به «${isPrivate ? 'خصوصی (با صف تایید)' : 'عمومی'}» تغییر یافت.`
    }), { status: 200, headers: corsHeaders });

  } catch (err) {
    console.error('[Toggle Room Type Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در تغییر نوع گروه: ' + err.message
    }), { status: 500, headers: corsHeaders });
  }
}
