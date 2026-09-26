// Cloudflare Pages Function: /api/rooms/create
// Handles creating a new study room/group associated with creator_id & creator_phone

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

async function ensureTables(db) {
  if (!db) return;
  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS rooms (
        room_id TEXT PRIMARY KEY,
        room_code TEXT UNIQUE,
        title TEXT NOT NULL,
        creator_phone TEXT,
        creator_id TEXT,
        admin_id TEXT,
        is_private INTEGER DEFAULT 0,
        type TEXT DEFAULT 'public',
        motivational_quote TEXT,
        emoji TEXT DEFAULT '👥',
        created_at INTEGER
      );
      CREATE TABLE IF NOT EXISTS user_rooms (
        member_phone TEXT NOT NULL,
        room_id TEXT NOT NULL,
        user_id TEXT,
        role TEXT DEFAULT 'member',
        status TEXT DEFAULT 'approved',
        joined_at INTEGER,
        PRIMARY KEY (member_phone, room_id)
      );
      CREATE TABLE IF NOT EXISTS room_members (
        room_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        member_phone TEXT,
        role TEXT DEFAULT 'member',
        status TEXT DEFAULT 'approved',
        joined_at INTEGER,
        PRIMARY KEY (room_id, user_id)
      );
    `);
  } catch (err) {
    console.warn('[DB Ensure Tables Error]:', err);
  }
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const body = await request.json().catch(() => ({}));
    const rawCode = body?.room_code || body?.code || body?.id || `PLX-${Math.floor(1000 + Math.random() * 9000)}`;
    const cleanCode = String(rawCode).trim().toUpperCase();
    const title = String(body?.title || body?.name || `گروه ${cleanCode}`).trim();
    const creatorPhone = normalizePhone(body?.phone || body?.creator_phone || body?.user_phone || '');
    const creatorId = String(body?.creator_id || body?.user_id || body?.admin_id || body?.userId || creatorPhone || 'anonymous').trim();
    const adminId = String(body?.admin_id || body?.owner_id || creatorId).trim();
    const motivationalQuote = String(body?.motivational_quote || body?.announcement || '').trim();
    const emoji = body?.emoji || '👥';
    const isPrivate = body?.is_private || body?.type === 'private' || body?.isPrivate ? 1 : 0;
    const type = isPrivate ? 'private' : 'public';
    const now = Date.now();

    await ensureTables(db);

    const roomData = {
      room_id: cleanCode,
      room_code: cleanCode,
      id: cleanCode,
      code: cleanCode,
      title: title,
      name: title,
      creator_phone: creatorPhone,
      creator_id: creatorId,
      admin_id: adminId,
      owner_id: adminId,
      is_private: isPrivate,
      type: type,
      motivational_quote: motivationalQuote,
      announcement: motivationalQuote,
      emoji: emoji,
      created_at: now
    };

    // 1. Save in D1 Database
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO rooms (room_id, room_code, title, creator_phone, creator_id, admin_id, is_private, type, motivational_quote, emoji, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(room_id) DO UPDATE SET
            title = excluded.title,
            creator_phone = excluded.creator_phone,
            creator_id = excluded.creator_id,
            admin_id = excluded.admin_id,
            is_private = excluded.is_private,
            type = excluded.type,
            motivational_quote = excluded.motivational_quote,
            emoji = excluded.emoji
        `).bind(cleanCode, cleanCode, title, creatorPhone, creatorId, adminId, isPrivate, type, motivationalQuote, emoji, now).run();

        const memberKeyPhone = creatorPhone || creatorId;
        if (memberKeyPhone) {
          await db.prepare(`
            INSERT OR REPLACE INTO user_rooms (member_phone, room_id, user_id, role, status, joined_at)
            VALUES (?, ?, ?, 'owner', 'approved', ?)
          `).bind(memberKeyPhone, cleanCode, creatorId, now).run();
        }

        if (creatorId) {
          await db.prepare(`
            INSERT OR REPLACE INTO room_members (room_id, user_id, member_phone, role, status, joined_at)
            VALUES (?, ?, ?, 'owner', 'approved', ?)
          `).bind(cleanCode, creatorId, creatorPhone, now).run();
        }
      } catch (err) {
        console.warn('[D1 Create Room Error]:', err);
      }
    }

    // 2. Save in KV Storage
    if (kv) {
      try {
        await kv.put(`room_${cleanCode}`, JSON.stringify(roomData), { expirationTtl: 7776000 });
        await kv.put(`squad_info_${cleanCode}`, JSON.stringify({
          groupCode: cleanCode,
          name: title,
          announcement: motivationalQuote,
          creator_phone: creatorPhone,
          creator_id: creatorId,
          ownerId: adminId,
          is_private: isPrivate,
          type: type,
          updatedAt: now
        }), { expirationTtl: 7776000 });

        // Add creator to squad_roster in KV
        const rosterKey = `squad_roster_${cleanCode}`;
        const creatorMember = {
          userId: creatorId,
          phone: creatorPhone,
          nickname: body?.user?.name || body?.nickname || 'مدیر گروه',
          avatarUrl: body?.user?.avatar_url || body?.avatarUrl || '',
          joinedAt: now,
          isOwner: true,
          status: 'approved'
        };
        await kv.put(rosterKey, JSON.stringify([creatorMember]), { expirationTtl: 7776000 });

        if (creatorPhone) {
          await kv.put(`phone_room_${creatorPhone}`, JSON.stringify(roomData), { expirationTtl: 7776000 });
          const userRoomsRaw = await kv.get(`phone_rooms_${creatorPhone}`);
          let userRooms = userRoomsRaw ? JSON.parse(userRoomsRaw) : [];
          if (!Array.isArray(userRooms)) userRooms = [];
          if (!userRooms.some(r => r.code === cleanCode || r.id === cleanCode)) {
            userRooms.unshift(roomData);
            await kv.put(`phone_rooms_${creatorPhone}`, JSON.stringify(userRooms), { expirationTtl: 7776000 });
          }
        }
      } catch (err) {
        console.warn('[KV Create Room Error]:', err);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      room: roomData,
      groupCode: cleanCode,
      message: `اتاق «${title}» با کد «${cleanCode}» (${isPrivate ? 'خصوصی با صف تایید' : 'عمومی'}) با موفقیت ایجاد شد.`
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Create Room Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در ایجاد اتاق مطالعه: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
