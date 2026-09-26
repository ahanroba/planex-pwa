// Cloudflare Pages Function: /api/rooms/requests
// Handles listing, approving, and rejecting pending join requests for private study rooms

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

// GET: Fetch pending join requests for a group
export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const url = new URL(request.url);
    const rawCode = url.searchParams.get('room_code') || url.searchParams.get('code') || '';
    const cleanCode = String(rawCode).trim().toUpperCase();

    if (!cleanCode) {
      return new Response(JSON.stringify({
        success: false,
        requests: [],
        message: 'کد یا شناسه گروه وارد نشده است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    let pendingList = [];

    // 1. Check KV Storage
    if (kv) {
      try {
        const rawPending = await kv.get(`squad_pending_${cleanCode}`);
        if (rawPending) {
          const parsed = JSON.parse(rawPending);
          if (Array.isArray(parsed)) pendingList = parsed;
        }
      } catch (err) {
        console.warn('[KV Get Pending Requests Error]:', err);
      }
    }

    // 2. Check D1 Database if KV empty
    if (pendingList.length === 0 && db) {
      try {
        const { results } = await db.prepare(`
          SELECT * FROM user_rooms WHERE UPPER(room_id) = UPPER(?) AND status = 'pending'
        `).bind(cleanCode).all();
        if (Array.isArray(results)) {
          pendingList = results.map(row => ({
            userId: row.user_id || row.member_phone,
            phone: row.member_phone || '',
            nickname: 'متقاضی عضویت',
            joinedAt: row.joined_at || Date.now(),
            status: 'pending'
          }));
        }
      } catch (err) {
        console.warn('[D1 Get Pending Requests Error]:', err);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      groupCode: cleanCode,
      requests: pendingList,
      count: pendingList.length
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Cache-Control': 'public, max-age=30, s-maxage=30' }
    });
  } catch (err) {
    console.error('[Get Pending Requests Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      requests: [],
      message: 'خطا در دریافت درخواست‌های عضویت: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

// POST: Approve or Reject a pending join request
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const db = env.DB || env.d1 || null;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV || env.KV || null;

    const body = await request.json().catch(() => ({}));
    const rawCode = body?.room_code || body?.code || body?.groupCode || '';
    const cleanCode = String(rawCode).trim().toUpperCase();

    const action = String(body?.action || 'approve').trim().toLowerCase(); // 'approve' or 'reject'
    const targetPhone = normalizePhone(body?.target_phone || body?.phone || '');
    const targetUserId = String(body?.target_user_id || body?.userId || body?.targetUserId || targetPhone || '').trim();

    if (!cleanCode || (!targetUserId && !targetPhone)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'کد گروه و مشخصات کاربر متقاضی الزامی است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const now = Date.now();

    // 1. Update D1 Database
    if (db) {
      try {
        if (action === 'approve') {
          if (targetPhone) {
            await db.prepare(`
              UPDATE user_rooms SET status = 'approved' WHERE UPPER(room_id) = UPPER(?) AND member_phone = ?
            `).bind(cleanCode, targetPhone).run();
          }
          if (targetUserId) {
            await db.prepare(`
              UPDATE user_rooms SET status = 'approved' WHERE UPPER(room_id) = UPPER(?) AND user_id = ?
            `).bind(cleanCode, targetUserId).run();
            await db.prepare(`
              UPDATE room_members SET status = 'approved' WHERE UPPER(room_id) = UPPER(?) AND user_id = ?
            `).bind(cleanCode, targetUserId).run();
          }
        } else { // Reject
          if (targetPhone) {
            await db.prepare(`
              DELETE FROM user_rooms WHERE UPPER(room_id) = UPPER(?) AND member_phone = ?
            `).bind(cleanCode, targetPhone).run();
          }
          if (targetUserId) {
            await db.prepare(`
              DELETE FROM user_rooms WHERE UPPER(room_id) = UPPER(?) AND user_id = ?
            `).bind(cleanCode, targetUserId).run();
            await db.prepare(`
              DELETE FROM room_members WHERE UPPER(room_id) = UPPER(?) AND user_id = ?
            `).bind(cleanCode, targetUserId).run();
          }
        }
      } catch (err) {
        console.warn('[D1 Request Approval Error]:', err);
      }
    }

    // 2. Update KV Storage
    if (kv) {
      try {
        const pendingKey = `squad_pending_${cleanCode}`;
        const rawPending = await kv.get(pendingKey);
        let pendingList = rawPending ? JSON.parse(rawPending) : [];
        if (!Array.isArray(pendingList)) pendingList = [];

        // Find request item in pending queue
        const itemIndex = pendingList.findIndex(m => m.userId === targetUserId || (targetPhone && m.phone === targetPhone));
        let requestItem = itemIndex >= 0 ? pendingList[itemIndex] : null;

        // Remove from pending queue
        pendingList = pendingList.filter(m => m.userId !== targetUserId && (!targetPhone || m.phone !== targetPhone));
        await kv.put(pendingKey, JSON.stringify(pendingList), { expirationTtl: 7776000 });

        if (action === 'approve') {
          // Add to active squad roster
          const rosterKey = `squad_roster_${cleanCode}`;
          const rawRoster = await kv.get(rosterKey);
          let roster = rawRoster ? JSON.parse(rawRoster) : [];
          if (!Array.isArray(roster)) roster = [];

          const activeMember = {
            userId: targetUserId || (requestItem ? requestItem.userId : 'usr_' + now),
            phone: targetPhone || (requestItem ? requestItem.phone : ''),
            nickname: requestItem ? requestItem.nickname : 'عضو گروه',
            avatarUrl: requestItem ? requestItem.avatarUrl : '',
            joinedAt: requestItem ? requestItem.joinedAt : now,
            isOwner: false,
            status: 'approved'
          };

          if (!roster.some(m => m.userId === activeMember.userId || (activeMember.phone && m.phone === activeMember.phone))) {
            roster.push(activeMember);
            await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 });
          }
        }
      } catch (err) {
        console.warn('[KV Request Approval Error]:', err);
      }
    }

    const message = action === 'approve'
      ? '✅ درخواست عضویت با موفقیت تایید شد و کاربر وارد لیدربرد گردید.'
      : '❌ درخواست عضویت رد گردید.';

    return new Response(JSON.stringify({
      success: true,
      action: action,
      groupCode: cleanCode,
      targetUserId: targetUserId,
      message: message
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    console.error('[Handle Request Fatal Error]:', err);
    return new Response(JSON.stringify({
      success: false,
      message: 'خطا در پردازش درخواست عضویت: ' + err.message
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
