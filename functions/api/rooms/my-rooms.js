// Cloudflare Pages Function: /api/rooms/my-rooms
// Returns list of rooms/groups the requested user is member or creator of

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

function getPhoneVariants(cleanPhone) {
  if (!cleanPhone) return [];
  const variants = new Set();
  variants.add(cleanPhone);
  const last10 = cleanPhone.replace(/^\+/, '').slice(-10);
  if (last10.length === 10) {
    variants.add(`0${last10}`);
    variants.add(`98${last10}`);
    variants.add(`+98${last10}`);
    variants.add(last10);
  }
  return Array.from(variants);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const url = new URL(request.url);
    const rawPhone = url.searchParams.get('phone') || url.searchParams.get('creator_phone') || '';
    const userPhone = normalizePhone(rawPhone);
    const userId = (url.searchParams.get('user_id') || url.searchParams.get('userId') || userPhone || '').trim();

    if (!userPhone && !userId) {
      return new Response(JSON.stringify({
        success: false,
        rooms: [],
        message: 'شناسه کاربر یا شماره همراه ارسال نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const roomsMap = new Map();
    const phoneVariants = getPhoneVariants(userPhone);

    // 1. Fetch from D1 Database
    if (db) {
      try {
        if (phoneVariants.length > 0) {
          const phs = phoneVariants.map(() => '?').join(',');
          const d1Query = `
            SELECT r.*, ur.role AS user_role, ur.status AS user_status
            FROM rooms r
            LEFT JOIN user_rooms ur ON r.room_id = ur.room_id
            WHERE ur.member_phone IN (${phs})
               OR r.creator_phone IN (${phs})
               OR ur.user_id = ?
               OR r.creator_id = ?
               OR r.admin_id = ?
          `;
          const { results } = await db.prepare(d1Query).bind(...phoneVariants, ...phoneVariants, userId, userId, userId).all();
          if (Array.isArray(results)) {
            for (const row of results) {
              const code = row.room_code || row.room_id;
              if (!code) continue;
              const isOwner = Boolean(
                (userPhone && phoneVariants.includes(row.creator_phone)) ||
                (userId && (row.creator_id === userId || row.admin_id === userId)) ||
                (row.user_role === 'owner')
              );
              roomsMap.set(code, {
                code,
                groupCode: code,
                id: code,
                title: row.title || `گروه ${code}`,
                name: row.title || `گروه ${code}`,
                creator_phone: row.creator_phone || '',
                creator_id: row.creator_id || row.admin_id || '',
                is_owner: isOwner,
                role: isOwner ? 'owner' : (row.user_role || 'member'),
                status: row.user_status || 'approved',
                is_private: row.is_private || (row.type === 'private' ? 1 : 0),
                type: row.type || (row.is_private ? 'private' : 'public'),
                emoji: row.emoji || '👥',
                motivational_quote: row.motivational_quote || '',
                created_at: row.created_at || Date.now(),
                member_count: 1
              });
            }
          }

          // Also check room_members table if it exists
          try {
            const rmQuery = `
              SELECT r.*, rm.role AS user_role, rm.status AS user_status
              FROM rooms r
              JOIN room_members rm ON r.room_id = rm.room_id
              WHERE rm.user_id = ? OR rm.member_phone IN (${phs})
            `;
            const rmResults = await db.prepare(rmQuery).bind(userId, ...phoneVariants).all();
            if (rmResults && Array.isArray(rmResults.results)) {
              for (const row of rmResults.results) {
                const code = row.room_code || row.room_id;
                if (!code || roomsMap.has(code)) continue;
                const isOwner = Boolean(
                  (userPhone && phoneVariants.includes(row.creator_phone)) ||
                  (userId && (row.creator_id === userId || row.admin_id === userId)) ||
                  (row.user_role === 'owner')
                );
                roomsMap.set(code, {
                  code,
                  groupCode: code,
                  id: code,
                  title: row.title || `گروه ${code}`,
                  name: row.title || `گروه ${code}`,
                  creator_phone: row.creator_phone || '',
                  creator_id: row.creator_id || row.admin_id || '',
                  is_owner: isOwner,
                  role: isOwner ? 'owner' : (row.user_role || 'member'),
                  status: row.user_status || 'approved',
                  is_private: row.is_private || (row.type === 'private' ? 1 : 0),
                  type: row.type || (row.is_private ? 'private' : 'public'),
                  emoji: row.emoji || '👥',
                  motivational_quote: row.motivational_quote || '',
                  created_at: row.created_at || Date.now(),
                  member_count: 1
                });
              }
            }
          } catch (_) {}
        } else if (userId) {
          const d1Query = `
            SELECT r.*, ur.role AS user_role, ur.status AS user_status
            FROM rooms r
            LEFT JOIN user_rooms ur ON r.room_id = ur.room_id
            WHERE ur.user_id = ?
               OR r.creator_id = ?
               OR r.admin_id = ?
          `;
          const { results } = await db.prepare(d1Query).bind(userId, userId, userId).all();
          if (Array.isArray(results)) {
            for (const row of results) {
              const code = row.room_code || row.room_id;
              if (!code) continue;
              roomsMap.set(code, {
                code,
                groupCode: code,
                id: code,
                title: row.title || `گروه ${code}`,
                name: row.title || `گروه ${code}`,
                creator_phone: row.creator_phone || '',
                creator_id: row.creator_id || row.admin_id || '',
                is_owner: row.creator_id === userId || row.admin_id === userId || row.user_role === 'owner',
                role: row.user_role || 'member',
                status: row.user_status || 'approved',
                is_private: row.is_private || (row.type === 'private' ? 1 : 0),
                type: row.type || (row.is_private ? 'private' : 'public'),
                emoji: row.emoji || '👥',
                motivational_quote: row.motivational_quote || '',
                created_at: row.created_at || Date.now(),
                member_count: 1
              });
            }
          }
        }
      } catch (err) {
        console.warn('[D1 My Rooms Query Error]:', err);
      }
    }

    // 2. Fetch from KV Storage across all phone variants
    if (kv) {
      const keysToCheck = [];
      phoneVariants.forEach(v => {
        keysToCheck.push(`phone_rooms_${v}`);
        keysToCheck.push(`phone_sync_${v}`);
        keysToCheck.push(`phone_room_${v}`);
      });
      if (userId) {
        keysToCheck.push(`user_rooms_${userId}`);
      }

      for (const kvKey of keysToCheck) {
        try {
          const rawVal = await kv.get(kvKey);
          if (!rawVal) continue;
          let parsed = JSON.parse(rawVal);
          
          // If phone_sync_* object: extract .rooms array or backupData groups
          if (parsed && !Array.isArray(parsed)) {
            if (Array.isArray(parsed.rooms) && parsed.rooms.length > 0) {
              parsed = parsed.rooms;
            } else if (parsed.backupData && Array.isArray(parsed.backupData.planex_my_groups) && parsed.backupData.planex_my_groups.length > 0) {
              parsed = parsed.backupData.planex_my_groups;
            } else if (parsed.backupData && Array.isArray(parsed.backupData.planex_user_groups) && parsed.backupData.planex_user_groups.length > 0) {
              parsed = parsed.backupData.planex_user_groups;
            } else if (Array.isArray(parsed.rooms)) {
              parsed = parsed.rooms;
            }
          }
          // If single room object (phone_room_*): wrap in array
          if (parsed && !Array.isArray(parsed) && (parsed.code || parsed.room_code || parsed.id)) {
            parsed = [parsed];
          }

          if (Array.isArray(parsed)) {
            for (const item of parsed) {
              const code = item.code || item.groupCode || item.room_code || item.id;
              if (code && !roomsMap.has(code)) {
                const isOwner = Boolean(
                  (userPhone && phoneVariants.includes(item.creator_phone)) ||
                  (userId && (item.creator_id === userId || item.ownerId === userId || item.admin_id === userId)) ||
                  (item.is_owner === true || item.role === 'owner')
                );
                roomsMap.set(code, {
                  code,
                  groupCode: code,
                  id: code,
                  title: item.name || item.title || `گروه ${code}`,
                  name: item.name || item.title || `گروه ${code}`,
                  creator_phone: item.creator_phone || '',
                  creator_id: item.creator_id || item.ownerId || '',
                  is_owner: isOwner,
                  role: isOwner ? 'owner' : (item.role || 'member'),
                  status: item.status || 'approved',
                  is_private: item.is_private || (item.type === 'private' ? 1 : 0),
                  type: item.type || (item.is_private ? 'private' : 'public'),
                  emoji: item.emoji || '👥',
                  created_at: item.created_at || Date.now(),
                  member_count: 1
                });
              }
            }
          }
        } catch (err) {
          console.warn('[KV My Rooms Query Error]:', err);
        }
      }
    }

    // Fetch member count for each room from KV squad_roster
    const roomsList = Array.from(roomsMap.values());
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

    const isForce = url.searchParams.get('force') === '1' || Boolean(url.searchParams.get('_t'));
    const cacheControlHeader = isForce ? 'no-cache, no-store, must-revalidate' : 'public, max-age=60, s-maxage=60';

    return new Response(JSON.stringify({
      success: true,
      rooms: roomsList,
      count: roomsList.length
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Cache-Control': cacheControlHeader }
    });
  } catch (err) {
    console.error('[My Rooms Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      rooms: [],
      message: 'خطا در دریافت لیست گروه‌ها: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
