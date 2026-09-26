// Cloudflare Pages Function: /api/pomodoro/active
// Event-driven lightweight live active Pomodoro sessions tracking

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

// In-memory fallback map if KV is not bound
const memorySessions = new Map();

function getKv(env) {
  return env.PLANEX_KV || env.LEADERBOARD_KV || null;
}

function cleanExpiredMemorySessions() {
  const now = Date.now();
  for (const [uid, exp] of memorySessions.entries()) {
    if (exp <= now) memorySessions.delete(uid);
  }
  return memorySessions.size;
}

async function getActiveSessionsFromKV(kv) {
  const raw = await kv.get('pomodoro_active_sessions');
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed === 'object') ? parsed : {};
  } catch (e) {
    return {};
  }
}

async function pruneAndCountKV(kv, userIdToAdd = null, durationMinutes = 25, userIdToRemove = null) {
  const now = Date.now();
  let sessions = await getActiveSessionsFromKV(kv);
  let hasChanges = false;

  // Prune expired
  const activeSessions = {};
  for (const [uid, exp] of Object.entries(sessions)) {
    if (typeof exp === 'number' && exp > now && uid !== userIdToRemove) {
      activeSessions[uid] = exp;
    } else {
      hasChanges = true;
    }
  }

  // Remove if requested
  if (userIdToRemove && activeSessions[userIdToRemove]) {
    delete activeSessions[userIdToRemove];
    hasChanges = true;
  }

  // Add or update if requested
  if (userIdToAdd) {
    const validMins = Math.min(120, Math.max(1, parseInt(durationMinutes) || 25));
    // Add extra 2 minutes grace period for network drift
    activeSessions[userIdToAdd] = now + (validMins * 60 * 1000) + 120000;
    hasChanges = true;
  }

  if (hasChanges) {
    try {
      // Save in KV with 2 hour TTL
      await kv.put('pomodoro_active_sessions', JSON.stringify(activeSessions), { expirationTtl: 7200 });
    } catch (err) {
      console.warn('[PomodoroKV] Failed to save active sessions:', err);
    }
  }

  return Object.keys(activeSessions).length;
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestGet(context) {
  try {
    const { env } = context;
    const kv = getKv(env);
    
    let count = 0;
    if (kv) {
      count = await pruneAndCountKV(kv);
    } else {
      count = cleanExpiredMemorySessions();
    }

    return new Response(JSON.stringify({
      success: true,
      count: count,
      activeUsersCount: count,
      timestamp: Date.now()
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, count: 0, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = getKv(env);

    let body = {};
    try {
      body = await request.json();
    } catch (e) {
      body = {};
    }

    const action = String(body.action || 'ping').toLowerCase();
    const userId = String(body.userId || body.deviceId || '').trim() || ('anon_' + Date.now());
    const durationMinutes = parseInt(body.durationMinutes || body.presetMins) || 25;

    let count = 0;

    if (action === 'start' || action === 'ping') {
      if (kv) {
        count = await pruneAndCountKV(kv, userId, durationMinutes, null);
      } else {
        cleanExpiredMemorySessions();
        const validMins = Math.min(120, Math.max(1, durationMinutes));
        memorySessions.set(userId, Date.now() + (validMins * 60 * 1000) + 120000);
        count = memorySessions.size;
      }
      if (count < 1) count = 1;
    } else if (action === 'stop' || action === 'reset') {
      if (kv) {
        count = await pruneAndCountKV(kv, null, 25, userId);
      } else {
        memorySessions.delete(userId);
        count = cleanExpiredMemorySessions();
      }
    } else {
      if (kv) {
        count = await pruneAndCountKV(kv);
      } else {
        count = cleanExpiredMemorySessions();
      }
    }

    return new Response(JSON.stringify({
      success: true,
      action,
      userId,
      count,
      activeUsersCount: count,
      timestamp: Date.now()
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, count: 1, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
