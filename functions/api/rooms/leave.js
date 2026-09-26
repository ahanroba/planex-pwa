// Cloudflare Pages Function: /api/rooms/leave
// Handles leaving a study room/group for regular members

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

function normalizePhone(rawPhone) {
  if (!rawPhone) return '';
  let p = String(rawPhone).trim();
  p = p.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  p = p.replace(/[٠-٩]/g, d => '٠١٢٣۴٥٦٧٨٩'.indexOf(d));
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

    const userPhone = normalizePhone(body?.phone || body?.user_phone || body?.creator_phone || '');
    const userId = String(body?.user_id || body?.userId || userPhone || '').trim();

    if (!cleanCode) {
      return new Response(JSON.stringify({
        success: false,
        message: 'شناسه یا کد گروه مشخص نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // 1. Delete membership from D1 Database
    if (db) {
      try {
        if (userPhone) {
          await db.prepare('DELETE FROM user_rooms WHERE UPPER(room_id) = UPPER(?) AND member_phone = ?').bind(cleanCode, userPhone).run();
        }
        if (userId) {
          await db.prepare('DELETE FROM user_rooms WHERE UPPER(room_id) = UPPER(?) AND user_id = ?').bind(cleanCode, userId).run();
          await db.prepare('DELETE FROM room_members WHERE UPPER(room_id) = UPPER(?) AND user_id = ?').bind(cleanCode, userId).run();
        }
      } catch (err) {
        console.warn('[D1 Leave Room Error]:', err);
      }
    }

    // 2. Delete member from KV Storage
    if (kv) {
      try {
        const rosterKey = `squad_roster_${cleanCode}`;
        const rawRoster = await kv.get(rosterKey);
        if (rawRoster) {
          let roster = JSON.parse(rawRoster);
          if (Array.isArray(roster)) {
            roster = roster.filter(m => m.userId !== userId && m.phone !== userPhone && m.userId !== userPhone);
            await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 });
          }
        }

        const pendingKey = `squad_pending_${cleanCode}`;
        const rawPending = await kv.get(pendingKey);
        if (rawPending) {
          let pendingList = JSON.parse(rawPending);
          if (Array.isArray(pendingList)) {
            pendingList = pendingList.filter(m => m.userId !== userId && m.phone !== userPhone && m.userId !== userPhone);
            await kv.put(pendingKey, JSON.stringify(pendingList), { expirationTtl: 7776000 });
          }
        }

        if (userPhone) {
          const userRoomsRaw = await kv.get(`phone_rooms_${userPhone}`);
          if (userRoomsRaw) {
            let userRooms = JSON.parse(userRoomsRaw);
            if (Array.isArray(userRooms)) {
              userRooms = userRooms.filter(r => (r.code || r.room_code || r.id) !== cleanCode);
              await kv.put(`phone_rooms_${userPhone}`, JSON.stringify(userRooms), { expirationTtl: 7776000 });
            }
          }
        }
      } catch (err) {
        console.warn('[KV Leave Room Error]:', err);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      groupCode: cleanCode,
      message: `با موفقیت از گروه «${cleanCode}» خارج شدید.`
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Leave Room Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در خروج از گروه: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
