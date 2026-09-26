// Cloudflare Pages Function: /api/rooms/join
// Handles joining a study room/group via Invite Code OR Creator Phone Number (Public vs Private Queue)

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

  if (p.startsWith('00989')) {
    p = '0' + p.slice(4);
  } else if (p.startsWith('0989')) {
    p = '0' + p.slice(3);
  } else if (p.startsWith('989')) {
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
    const rawInput = body?.room_code || body?.code || body?.groupCode || body?.creator_phone || '';
    const cleanCode = String(rawInput).trim().toUpperCase();
    const cleanPhoneInput = normalizePhone(rawInput);

    const userPhone = normalizePhone(body?.phone || body?.user_phone || body?.user?.phone || '');
    const userId = String(body?.user_id || body?.creator_id || userPhone || 'anonymous').trim();
    const userName = body?.user?.name || body?.user?.full_name || body?.nickname || 'عضو گروه';
    const userAvatar = body?.user?.avatar_url || body?.avatarUrl || '';

    if (!cleanCode && !cleanPhoneInput) {
      return new Response(JSON.stringify({
        success: false,
        message: 'کد دعوت یا شماره سازنده گروه وارد نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    await ensureTables(db);

    let roomData = null;

    // 1. Check D1 Database by Code or Creator Phone
    if (db) {
      try {
        const query = `
          SELECT * FROM rooms
          WHERE UPPER(room_code) = UPPER(?)
             OR UPPER(room_id) = UPPER(?)
             OR creator_phone = ?
          LIMIT 1
        `;
        const row = await db.prepare(query).bind(cleanCode, cleanCode, cleanPhoneInput || cleanCode).first();

        if (row) {
          roomData = {
            room_id: row.room_id || row.room_code,
            room_code: row.room_code || row.room_id,
            id: row.room_code || row.room_id,
            code: row.room_code || row.room_id,
            title: row.title || `گروه ${row.room_code}`,
            name: row.title || `گروه ${row.room_code}`,
            creator_phone: row.creator_phone || '',
            creator_id: row.creator_id || row.admin_id || '',
            admin_id: row.admin_id || '',
            is_private: row.is_private || (row.type === 'private' ? 1 : 0),
            type: row.type || (row.is_private ? 'private' : 'public'),
            motivational_quote: row.motivational_quote || '',
            announcement: row.motivational_quote || '',
            emoji: row.emoji || '👥',
            created_at: row.created_at || Date.now()
          };
        }
      } catch (err) {
        console.warn('[D1 Join Room Lookup Error]:', err);
      }
    }

    // 2. Check KV Storage
    if (!roomData && kv) {
      try {
        let rawInfo = await kv.get(`squad_info_${cleanCode}`);
        if (!rawInfo) rawInfo = await kv.get(`room_${cleanCode}`);
        if (!rawInfo && cleanPhoneInput) rawInfo = await kv.get(`phone_room_${cleanPhoneInput}`);

        if (rawInfo) {
          const parsed = JSON.parse(rawInfo);
          const rCode = parsed.code || parsed.groupCode || parsed.room_code || cleanCode;
          roomData = {
            room_id: parsed.id || parsed.room_id || rCode,
            room_code: rCode,
            id: rCode,
            code: rCode,
            title: parsed.name || parsed.title || `گروه ${rCode}`,
            name: parsed.name || parsed.title || `گروه ${rCode}`,
            creator_phone: parsed.creator_phone || cleanPhoneInput || '',
            creator_id: parsed.creator_id || parsed.ownerId || parsed.admin_id || '',
            admin_id: parsed.admin_id || parsed.owner_id || '',
            is_private: parsed.is_private || (parsed.type === 'private' ? 1 : 0),
            type: parsed.type || (parsed.is_private ? 'private' : 'public'),
            motivational_quote: parsed.announcement || parsed.motivational_quote || '',
            announcement: parsed.announcement || parsed.motivational_quote || '',
            emoji: parsed.emoji || '👥',
            created_at: parsed.createdAt || parsed.created_at || Date.now()
          };
        }
      } catch (err) {
        console.warn('[KV Join Room Lookup Error]:', err);
      }
    }

    // Fallback: If squad roster exists in KV
    if (!roomData && kv) {
      try {
        const rosterRaw = await kv.get(`squad_roster_${cleanCode}`);
        if (rosterRaw) {
          roomData = {
            room_id: cleanCode,
            room_code: cleanCode,
            id: cleanCode,
            code: cleanCode,
            title: `گروه ${cleanCode}`,
            name: `گروه ${cleanCode}`,
            creator_phone: '',
            creator_id: '',
            admin_id: '',
            is_private: 0,
            type: 'public',
            motivational_quote: '',
            announcement: '',
            emoji: '👥',
            created_at: Date.now()
          };
        }
      } catch (err) {}
    }

    if (!roomData) {
      return new Response(JSON.stringify({
        success: false,
        message: 'کد گروه یا شماره سازنده معتبر نیست یا سالنی برای آن ثبت نشده است.'
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const effectiveRoomCode = String(roomData.room_code || roomData.code || roomData.id || cleanCode).trim().toUpperCase();
    const isOwner = Boolean(
      (userPhone && roomData.creator_phone && userPhone === roomData.creator_phone) ||
      (userId && roomData.creator_id && userId === roomData.creator_id) ||
      (userId && roomData.admin_id && userId === roomData.admin_id)
    );

    const isPrivate = Boolean(roomData.is_private || roomData.type === 'private');
    // Creator automatically approved. Public room automatically approved. Private room requires approval.
    const memberStatus = (isOwner || !isPrivate) ? 'approved' : 'pending';
    const isPending = memberStatus === 'pending';

    const formattedRoomData = {
      ...roomData,
      id: effectiveRoomCode,
      code: effectiveRoomCode,
      groupCode: effectiveRoomCode,
      room_code: effectiveRoomCode,
      room_id: effectiveRoomCode,
      name: roomData.title || roomData.name || `گروه ${effectiveRoomCode}`,
      title: roomData.title || roomData.name || `گروه ${effectiveRoomCode}`,
      is_owner: isOwner,
      status: memberStatus,
      is_private: isPrivate ? 1 : 0,
      type: isPrivate ? 'private' : 'public'
    };

    const now = Date.now();

    // 3. Save User Membership in D1
    if (db) {
      try {
        const memberKey = userPhone || userId;
        if (memberKey) {
          await db.prepare(`
            INSERT INTO user_rooms (member_phone, room_id, user_id, role, status, joined_at)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(member_phone, room_id) DO UPDATE SET
              user_id = excluded.user_id,
              status = excluded.status
          `).bind(memberKey, effectiveRoomCode, userId, isOwner ? 'owner' : 'member', memberStatus, now).run();
        }

        if (userId) {
          await db.prepare(`
            INSERT INTO room_members (room_id, user_id, member_phone, role, status, joined_at)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(room_id, user_id) DO UPDATE SET
              member_phone = excluded.member_phone,
              status = excluded.status
          `).bind(effectiveRoomCode, userId, userPhone, isOwner ? 'owner' : 'member', memberStatus, now).run();
        }
      } catch (err) {
        console.warn('[D1 Save User Room Membership Error]:', err);
      }
    }

    // 4. Save in KV Storage
    if (kv) {
      try {
        // Save to user's phone_rooms list if phone present
        if (userPhone) {
          const userRoomsRaw = await kv.get(`phone_rooms_${userPhone}`);
          let userRooms = userRoomsRaw ? JSON.parse(userRoomsRaw) : [];
          if (!Array.isArray(userRooms)) userRooms = [];
          if (!userRooms.some(r => (r.code || r.groupCode || r.room_code || r.id) === effectiveRoomCode)) {
            userRooms.unshift(formattedRoomData);
            await kv.put(`phone_rooms_${userPhone}`, JSON.stringify(userRooms), { expirationTtl: 7776000 });
          }
        }

        if (isPending) {
          // Add to pending queue in KV
          const pendingKey = `squad_pending_${effectiveRoomCode}`;
          const rawPending = await kv.get(pendingKey);
          let pendingList = rawPending ? JSON.parse(rawPending) : [];
          if (!Array.isArray(pendingList)) pendingList = [];
          if (!pendingList.some(m => m.userId === userId || (m.phone && m.phone === userPhone))) {
            pendingList.push({
              userId: userId,
              phone: userPhone,
              nickname: userName,
              avatarUrl: userAvatar,
              joinedAt: now,
              status: 'pending'
            });
            await kv.put(pendingKey, JSON.stringify(pendingList), { expirationTtl: 7776000 });
          }
        } else {
          // Add to active squad_roster in KV
          const rosterKey = `squad_roster_${effectiveRoomCode}`;
          const rawRoster = await kv.get(rosterKey);
          let roster = rawRoster ? JSON.parse(rawRoster) : [];
          if (!Array.isArray(roster)) roster = [];
          const idx = roster.findIndex(m => m.userId === userId || (m.phone && userPhone && m.phone === userPhone));
          const memberObj = {
            userId: userId,
            phone: userPhone,
            nickname: userName,
            avatarUrl: userAvatar,
            joinedAt: now,
            isOwner: isOwner,
            status: 'approved'
          };
          if (idx >= 0) {
            roster[idx] = { ...roster[idx], ...memberObj };
          } else {
            roster.push(memberObj);
          }
          await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 });
        }
      } catch (err) {
        console.warn('[KV Save User Room Membership Error]:', err);
      }
    }

    const resMessage = isPending
      ? 'این گروه خصوصی است. درخواست شما ارسال شد و پس از تایید مدیر وارد گروه خواهید شد.'
      : `✅ با موفقیت به اتاق «${formattedRoomData.title}» ملحق شدید!`;

    return new Response(JSON.stringify({
      success: true,
      pending: isPending,
      status: memberStatus,
      room: formattedRoomData,
      code: effectiveRoomCode,
      groupCode: effectiveRoomCode,
      room_code: effectiveRoomCode,
      id: effectiveRoomCode,
      message: resMessage
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Join Room Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در پیوستن به گروه: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
