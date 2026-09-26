// Cloudflare Pages Function: /api/rooms/public
// Returns list of real public active rooms from D1 database / KV storage (No mock data)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestGet(context) {
  try {
    const { env } = context;
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const roomsMap = new Map();

    // 1. Fetch from D1 Database
    if (db) {
      try {
        const query = `
          SELECT * FROM rooms
          WHERE is_private = 0 OR type = 'public'
          ORDER BY created_at DESC
          LIMIT 50
        `;
        const { results } = await db.prepare(query).all();
        if (Array.isArray(results)) {
          for (const row of results) {
            const code = row.room_code || row.room_id;
            roomsMap.set(code, {
              code,
              groupCode: code,
              id: code,
              title: row.title || `گروه ${code}`,
              name: row.title || `گروه ${code}`,
              creator_phone: row.creator_phone || '',
              creator_id: row.creator_id || row.admin_id || '',
              is_private: 0,
              type: 'public',
              emoji: row.emoji || '👥',
              created_at: row.created_at || Date.now(),
              member_count: 1
            });
          }
        }
      } catch (err) {
        console.warn('[D1 Public Rooms Query Error]:', err);
      }
    }

    const roomsList = Array.from(roomsMap.values());

    // Fetch member counts from KV
    if (kv) {
      for (const room of roomsList) {
        try {
          const rawRoster = await kv.get(`squad_roster_${room.code}`);
          if (rawRoster) {
            const roster = JSON.parse(rawRoster);
            if (Array.isArray(roster)) {
              room.member_count = roster.length;
            }
          }
        } catch (e) {}
      }
    }

    return new Response(JSON.stringify({
      success: true,
      rooms: roomsList,
      count: roomsList.length
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Cache-Control': 'public, max-age=60, s-maxage=60' }
    });
  } catch (err) {
    console.error('[Public Rooms Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      rooms: [],
      message: 'خطا در دریافت لیست گروه‌های عمومی: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
