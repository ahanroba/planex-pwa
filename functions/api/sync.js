// Cloudflare Pages Function: /api/sync
// Unified Phone-based Cloud Sync and Storage for PlanEx

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

export function normalizePhone(rawPhone) {
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
  const last10 = cleanPhone.slice(-10);
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

async function ensureTables(db) {
  if (!db) return;
  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        telegram_id INTEGER,
        phone_number TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name TEXT,
        avatar_url TEXT,
        created_at INTEGER
      );
      CREATE TABLE IF NOT EXISTS rooms (
        room_id TEXT PRIMARY KEY,
        room_code TEXT UNIQUE,
        title TEXT NOT NULL,
        creator_phone TEXT,
        admin_id TEXT,
        motivational_quote TEXT,
        emoji TEXT DEFAULT '👥',
        created_at INTEGER
      );
      CREATE TABLE IF NOT EXISTS user_rooms (
        member_phone TEXT NOT NULL,
        room_id TEXT NOT NULL,
        user_id TEXT,
        joined_at INTEGER,
        PRIMARY KEY (member_phone, room_id)
      );
      CREATE TABLE IF NOT EXISTS user_data (
        phone_number TEXT PRIMARY KEY,
        user_id TEXT,
        data_json TEXT NOT NULL,
        study_logs TEXT,
        updated_at INTEGER
      );
    `);
  } catch (err) {
    console.warn('[DB Ensure Tables Warning]:', err);
  }
}

async function fetchUserRoomsByPhone(db, kv, phone) {
  const roomsMap = new Map();
  const variants = getPhoneVariants(phone);

  // 1. Fetch from D1
  if (db && phone) {
    try {
      const placeholders = variants.map(() => '?').join(',');
      const query = `
        SELECT r.* FROM rooms r
        JOIN user_rooms ur ON r.room_id = ur.room_id
        WHERE ur.member_phone IN (${placeholders})
        UNION
        SELECT * FROM rooms WHERE creator_phone IN (${placeholders})
      `;
      const { results } = await db.prepare(query).bind(...variants, ...variants).all();
      if (Array.isArray(results)) {
        for (const row of results) {
          const code = row.room_code || row.room_id;
          roomsMap.set(code, {
            id: code,
            code: code,
            groupCode: code,
            room_id: row.room_id,
            name: row.title || `گروه ${code}`,
            title: row.title || `گروه ${code}`,
            creator_phone: row.creator_phone || phone,
            admin_id: row.admin_id || '',
            motivational_quote: row.motivational_quote || '',
            announcement: row.motivational_quote || '',
            emoji: row.emoji || '👥',
            created_at: row.created_at || Date.now()
          });
        }
      }
    } catch (err) {
      console.warn('[D1 Fetch User Rooms By Phone Error]:', err);
    }
  }

  // 2. Fetch from KV
  if (kv && phone) {
    try {
      const raw = await kv.get(`phone_rooms_${phone}`);
      if (raw) {
        const kvRooms = JSON.parse(raw);
        if (Array.isArray(kvRooms)) {
          for (const r of kvRooms) {
            const code = r.code || r.id || r.room_code || r.room_id;
            if (code && !roomsMap.has(code)) {
              roomsMap.set(code, {
                id: code,
                code: code,
                groupCode: code,
                room_id: r.room_id || code,
                name: r.name || r.title || `گروه ${code}`,
                title: r.title || r.name || `گروه ${code}`,
                creator_phone: r.creator_phone || phone,
                admin_id: r.admin_id || '',
                motivational_quote: r.motivational_quote || r.announcement || '',
                announcement: r.announcement || r.motivational_quote || '',
                emoji: r.emoji || '👥',
                created_at: r.created_at || Date.now()
              });
            }
          }
        }
      }
    } catch (err) {
      console.warn('[KV Fetch User Rooms By Phone Error]:', err);
    }
  }

  return Array.from(roomsMap.values());
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
    const db = env.DB || env.d1 || null;

    const data = await request.json().catch(() => ({}));
    const rawPhone = data.phone || data.phone_number || data.mobile || '';
    const phone = normalizePhone(rawPhone);
    const password = String(data.password || data.pwd || '').trim();
    const newLogs = Array.isArray(data.study_logs) ? data.study_logs : (Array.isArray(data.studyLogs) ? data.studyLogs : []);
    const incomingRooms = Array.isArray(data.rooms) ? data.rooms : (Array.isArray(data.joined_rooms) ? data.joined_rooms : (Array.isArray(data.myGroups) ? data.myGroups : []));
    const backupData = data.backupData || data.appState || {};
    const now = Date.now();

    if (!phone) {
      return new Response(JSON.stringify({
        success: false,
        message: 'شماره موبایل الزامی است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    await ensureTables(db);

    let authenticatedUser = null;
    const variants = getPhoneVariants(phone);

    const incomingAvatar = data.avatar_url || data.avatar || data.photo_url || data.planex_user_avatar || (data.backupData && data.backupData.planex_user_avatar) || (data.backupData && typeof data.backupData.planex_user_profile === 'object' && data.backupData.planex_user_profile?.avatar) || null;
    const incomingName = data.name || data.nickname || data.full_name || null;

    // 1. Verify credentials in D1
    if (db) {
      try {
        const placeholders = variants.map(() => '?').join(',');
        const userRow = await db.prepare(
          `SELECT * FROM users WHERE phone_number IN (${placeholders}) LIMIT 1`
        ).bind(...variants).first();

        if (userRow) {
          if (password && userRow.password && userRow.password !== password) {
            return new Response(JSON.stringify({
              success: false,
              message: 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.'
            }), {
              status: 401,
              headers: corsHeaders
            });
          }
          authenticatedUser = userRow;
          if (incomingAvatar && (!incomingAvatar.includes('dicebear.com') || !userRow.avatar_url)) {
            authenticatedUser.avatar_url = incomingAvatar;
            if (incomingName) authenticatedUser.name = incomingName;
            try {
              await db.prepare(`UPDATE users SET avatar_url = ?, name = COALESCE(?, name) WHERE phone_number IN (${placeholders})`).bind(incomingAvatar, incomingName, ...variants).run();
            } catch (_) {}
          }
        }
      } catch (e) {
        console.warn('[D1 User Lookup Error]:', e);
      }
    }

    // 2. Verify in KV if not found in D1
    if (!authenticatedUser && kv) {
      try {
        for (const v of variants) {
          const raw = await kv.get(`user_phone_${v}`);
          if (raw) {
            const u = JSON.parse(raw);
            if (password && u.password && u.password !== password) {
              return new Response(JSON.stringify({
                success: false,
                message: 'شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.'
              }), {
                status: 401,
                headers: corsHeaders
              });
            }
            authenticatedUser = u;
            if (incomingAvatar && (!incomingAvatar.includes('dicebear.com') || !u.avatar_url)) {
              authenticatedUser.avatar_url = incomingAvatar;
              if (incomingName) authenticatedUser.name = incomingName;
              try {
                await kv.put(`user_phone_${phone}`, JSON.stringify(authenticatedUser));
              } catch (_) {}
            }
            break;
          }
        }
      } catch (e) {
        console.warn('[KV User Lookup Error]:', e);
      }
    }

    // If password provided and user not yet recorded, register this phone
    if (!authenticatedUser && password) {
      authenticatedUser = {
        phone_number: phone,
        phone: phone,
        password: password,
        name: incomingName || 'کاربر پلنکس',
        avatar_url: incomingAvatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${phone}`,
        created_at: now
      };

      if (db) {
        try {
          await db.prepare(`
            INSERT INTO users (phone_number, password, name, avatar_url, created_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(phone_number) DO UPDATE SET
              password = excluded.password,
              name = COALESCE(excluded.name, users.name),
              avatar_url = COALESCE(excluded.avatar_url, users.avatar_url)
          `).bind(phone, password, authenticatedUser.name, authenticatedUser.avatar_url, now).run();
        } catch (e) {}
      }

      if (kv) {
        try {
          await kv.put(`user_phone_${phone}`, JSON.stringify(authenticatedUser));
        } catch (e) {}
      }
    }

    // 3. Merge Study Logs (deduplicating by log id or timestamp/date)
    let previousLogs = [];
    let previousBackup = null;
    if (db) {
      try {
        const dataRow = await db.prepare(
          'SELECT data_json, study_logs FROM user_data WHERE phone_number = ? LIMIT 1'
        ).bind(phone).first();
        if (dataRow) {
          if (dataRow.study_logs) {
            try { previousLogs = JSON.parse(dataRow.study_logs); } catch (_) {}
          }
          if (dataRow.data_json) {
            try {
              previousBackup = JSON.parse(dataRow.data_json);
              if ((!previousLogs || previousLogs.length === 0) && previousBackup && Array.isArray(previousBackup.planex_recent_activity_sessions)) {
                previousLogs = previousBackup.planex_recent_activity_sessions;
              }
            } catch (_) {}
          }
        }
      } catch (e) {}
    }
    if ((previousLogs.length === 0 || !previousBackup) && kv) {
      try {
        if (previousLogs.length === 0) {
          const rawLogs = await kv.get(`phone_logs_${phone}`);
          if (rawLogs) {
            try { previousLogs = JSON.parse(rawLogs); } catch (_) {}
          }
        }
        const rawSync = await kv.get(`phone_sync_${phone}`);
        if (rawSync) {
          try {
            const parsed = JSON.parse(rawSync);
            if (!previousBackup && parsed.backupData) previousBackup = parsed.backupData;
            if (previousLogs.length === 0 && parsed.study_logs) previousLogs = parsed.study_logs;
            if (previousLogs.length === 0 && previousBackup && Array.isArray(previousBackup.planex_recent_activity_sessions)) {
              previousLogs = previousBackup.planex_recent_activity_sessions;
            }
          } catch (_) {}
        }
      } catch (e) {}
    }

    const logMap = new Map();
    if (Array.isArray(previousLogs)) {
      previousLogs.forEach(l => {
        if (!l || typeof l !== 'object') return;
        const key = l.id || `${l.date || l.dateStr}_${l.timestamp || l.startTime || l.subject}_${l.duration || l.minutes}`;
        logMap.set(key, l);
      });
    }
    if (Array.isArray(newLogs)) {
      newLogs.forEach(l => {
        if (!l || typeof l !== 'object') return;
        const key = l.id || `${l.date || l.dateStr}_${l.timestamp || l.startTime || l.subject}_${l.duration || l.minutes}`;
        logMap.set(key, l);
      });
    }
    const mergedLogs = Array.from(logMap.values());

    // Merge backupData smartly so an empty/partial client payload does not wipe existing server data
    const finalBackupData = {
      ...(previousBackup && typeof previousBackup === 'object' ? previousBackup : {}),
      ...(backupData && typeof backupData === 'object' ? backupData : {})
    };
    if (mergedLogs.length > 0) {
      finalBackupData.planex_recent_activity_sessions = mergedLogs;
      finalBackupData.planex_study_logs = mergedLogs;
    }

    const activeAvatar = (incomingAvatar && !incomingAvatar.includes('dicebear.com')) ? incomingAvatar : (authenticatedUser?.avatar_url || finalBackupData.planex_user_avatar || null);
    if (activeAvatar) {
      finalBackupData.planex_user_avatar = activeAvatar;
      if (!finalBackupData.planex_user_profile) finalBackupData.planex_user_profile = {};
      if (typeof finalBackupData.planex_user_profile === 'object') {
        finalBackupData.planex_user_profile.avatar = activeAvatar;
        finalBackupData.planex_user_profile.avatar_url = activeAvatar;
      }
    }

    // 4. Save and Merge Rooms
    const existingRooms = await fetchUserRoomsByPhone(db, kv, phone);
    const roomsMap = new Map();
    if (Array.isArray(existingRooms)) {
      existingRooms.forEach(r => {
        const c = String(r.code || r.groupCode || r.id || r.room_code || '').trim().toUpperCase();
        if (c) roomsMap.set(c, r);
      });
    }
    if (Array.isArray(incomingRooms)) {
      incomingRooms.forEach(r => {
        const c = String(r.code || r.groupCode || r.id || r.room_code || '').trim().toUpperCase();
        if (c) {
          const prev = roomsMap.get(c) || {};
          roomsMap.set(c, { ...prev, ...r });
        }
      });
    }
    const finalRooms = Array.from(roomsMap.values());

    if (incomingRooms.length > 0) {
      for (const r of incomingRooms) {
        const roomCode = String(r.code || r.id || r.room_code || r.room_id || '').trim().toUpperCase();
        if (!roomCode) continue;

        const title = r.title || r.name || `گروه ${roomCode}`;
        const quote = r.motivational_quote || r.announcement || '';
        const emoji = r.emoji || '👥';
        const creatorPhone = r.creator_phone || phone;

        if (db) {
          try {
            await db.prepare(`
              INSERT INTO rooms (room_id, room_code, title, creator_phone, motivational_quote, emoji, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(room_id) DO UPDATE SET
                title = excluded.title,
                motivational_quote = excluded.motivational_quote,
                emoji = excluded.emoji
            `).bind(roomCode, roomCode, title, creatorPhone, quote, emoji, now).run();

            await db.prepare(`
              INSERT OR IGNORE INTO user_rooms (member_phone, room_id, joined_at)
              VALUES (?, ?, ?)
            `).bind(phone, roomCode, now).run();
          } catch (e) {
            console.warn('[D1 Room Save Error]:', e);
          }
        }
      }
    }

    if (finalRooms.length > 0) {
      if (!finalBackupData.planex_my_groups || !Array.isArray(finalBackupData.planex_my_groups) || finalBackupData.planex_my_groups.length === 0) {
        finalBackupData.planex_my_groups = finalRooms;
      }
      if (!finalBackupData.planex_user_groups || !Array.isArray(finalBackupData.planex_user_groups) || finalBackupData.planex_user_groups.length === 0) {
        finalBackupData.planex_user_groups = finalRooms;
      }
    }

    // 5. Persist merged data to DB and KV
    if (db) {
      try {
        await db.prepare(`
          INSERT INTO user_data (phone_number, data_json, study_logs, updated_at)
          VALUES (?, ?, ?, ?)
          ON CONFLICT(phone_number) DO UPDATE SET
            data_json = excluded.data_json,
            study_logs = excluded.study_logs,
            updated_at = excluded.updated_at
        `).bind(phone, JSON.stringify(finalBackupData), JSON.stringify(mergedLogs), now).run();
      } catch (e) {
        console.warn('[D1 Persist User Data Error]:', e);
      }
    }

    if (kv) {
      try {
        const logsStr = JSON.stringify(mergedLogs);
        const prevLogsStr = await kv.get(`phone_logs_${phone}`);
        if (logsStr !== prevLogsStr) {
          await kv.put(`phone_logs_${phone}`, logsStr, { expirationTtl: 7776000 });
        }

        const roomsStr = JSON.stringify(finalRooms);
        const prevRoomsStr = await kv.get(`phone_rooms_${phone}`);
        if (roomsStr !== prevRoomsStr) {
          await kv.put(`phone_rooms_${phone}`, roomsStr, { expirationTtl: 7776000 });
        }

        await kv.put(`phone_sync_${phone}`, JSON.stringify({
          phone,
          study_logs: mergedLogs,
          rooms: finalRooms,
          backupData: finalBackupData,
          updatedAt: now
        }), { expirationTtl: 7776000 });
      } catch (e) {
        console.warn('[KV Persist Phone Sync Error]:', e);
      }
    }

    const userName = authenticatedUser?.name || authenticatedUser?.full_name || data.name || 'کاربر پلنکس';
    const userAvatar = activeAvatar || authenticatedUser?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${phone}`;

    return new Response(JSON.stringify({
      success: true,
      user: {
        phone: phone,
        phone_number: phone,
        name: userName,
        full_name: userName,
        avatar_url: userAvatar,
        avatar: userAvatar
      },
      study_logs: mergedLogs,
      rooms: finalRooms,
      backupData: finalBackupData,
      updatedAt: now,
      message: 'اطلاعات با موفقیت با شماره موبایل همگام‌سازی شد.'
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Phone Sync Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در همگام‌سازی: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;
    const db = env.DB || env.d1 || null;

    const url = new URL(request.url);
    const rawPhone = url.searchParams.get('phone') || url.searchParams.get('phone_number') || url.searchParams.get('mobile') || '';
    const phone = normalizePhone(rawPhone);

    if (!phone) {
      return new Response(JSON.stringify({
        success: false,
        message: 'شماره موبایل مشخص نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    let studyLogs = [];
    let backupData = null;

    if (db) {
      try {
        const row = await db.prepare(
          'SELECT data_json, study_logs FROM user_data WHERE phone_number = ? LIMIT 1'
        ).bind(phone).first();
        if (row) {
          if (row.study_logs) studyLogs = JSON.parse(row.study_logs);
          if (row.data_json) backupData = JSON.parse(row.data_json);
        }
      } catch (e) {}
    }

    if (studyLogs.length === 0 && kv) {
      const rawLogs = await kv.get(`phone_logs_${phone}`);
      if (rawLogs) {
        try { studyLogs = JSON.parse(rawLogs); } catch(e){}
      }
      const rawSync = await kv.get(`phone_sync_${phone}`);
      if (rawSync) {
        try {
          const parsed = JSON.parse(rawSync);
          if (!backupData) backupData = parsed.backupData;
          if (studyLogs.length === 0 && parsed.study_logs) studyLogs = parsed.study_logs;
        } catch(e){}
      }
    }

    if (studyLogs.length === 0 && backupData && Array.isArray(backupData.planex_recent_activity_sessions)) {
      studyLogs = backupData.planex_recent_activity_sessions;
    }

    if (studyLogs.length > 0 && backupData && typeof backupData === 'object') {
      backupData.planex_recent_activity_sessions = studyLogs;
      backupData.planex_study_logs = studyLogs;
    }

    const userRooms = await fetchUserRoomsByPhone(db, kv, phone);

    let userRow = null;
    const variants = getPhoneVariants(phone);
    if (db) {
      try {
        const placeholders = variants.map(() => '?').join(',');
        userRow = await db.prepare(
          `SELECT phone_number, name, avatar_url FROM users WHERE phone_number IN (${placeholders}) LIMIT 1`
        ).bind(...variants).first();
      } catch (e) {}
    }
    if (!userRow && kv) {
      try {
        for (const v of variants) {
          const raw = await kv.get(`user_phone_${v}`);
          if (raw) {
            userRow = JSON.parse(raw);
            break;
          }
        }
      } catch (e) {}
    }

    const finalAvatar = userRow?.avatar_url || backupData?.planex_user_avatar || (typeof backupData?.planex_user_profile === 'object' ? backupData.planex_user_profile?.avatar : null) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${phone}`;

    return new Response(JSON.stringify({
      success: true,
      phone: phone,
      user: {
        phone: phone,
        phone_number: phone,
        name: userRow?.name || 'کاربر پلنکس',
        full_name: userRow?.name || 'کاربر پلنکس',
        avatar_url: finalAvatar,
        avatar: finalAvatar
      },
      rooms: userRooms,
      study_logs: studyLogs,
      backupData: backupData,
      updatedAt: Date.now()
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      message: err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
