// Cloudflare Pages Functions: /api/leaderboard
// 100% Unlisted & Private Study Squads (اتاق‌های رقابت گروهی خصوصی با اعضای ماندگار و کد اختصاصی)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8'
};

const getCacheHeaders = {
  ...corsHeaders,
  'Cache-Control': 'public, max-age=60, s-maxage=60'
};

function getIranTodayDateStr() {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran', year: 'numeric', month: '2-digit', day: '2-digit' });
    return formatter.format(new Date());
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

async function readKVJson(kv, key, defaultValue = null) {
  try {
    const raw = await kv.get(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    return defaultValue;
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({
        success: false,
        error: 'KV_NOT_BOUND',
        message: 'اتصال KV روی سرور تنظیم نشده است. دیتا فقط در دستگاه ذخیره شد.'
      }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const data = await request.json();
    const action = data.action || 'sync';
    const rawGroupCode = data.groupCode || data.squadCode || '';
    const safeGroupCode = String(rawGroupCode).trim().toUpperCase();

    // If user has no group code (Private architecture requires groupCode)
    if (!safeGroupCode) {
      return new Response(JSON.stringify({
        success: false,
        noGroup: true,
        message: 'برای ثبت و مشاهده تالار رقابت، عضویت در یک گروه خصوصی با کد ۶ رقمی الزامی است.'
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const dateStr = data.date || getIranTodayDateStr();
    const rosterKey = `squad_roster_${safeGroupCode}`;
    const dailyKey = `squad_daily_${safeGroupCode}_${dateStr}`;
    const infoKey = `squad_info_${safeGroupCode}`;

    // Read current roster & daily records
    let roster = (await readKVJson(kv, rosterKey, [])) || [];
    if (!Array.isArray(roster)) roster = [];

    let dailyList = (await readKVJson(kv, dailyKey, [])) || [];
    if (!Array.isArray(dailyList)) dailyList = [];

    let squadInfo = (await readKVJson(kv, infoKey, {})) || {};
    if (data.groupName && typeof data.groupName === 'string') {
      squadInfo.name = data.groupName.trim();
      squadInfo.groupCode = safeGroupCode;
      squadInfo.updatedAt = Date.now();
    }

    const userId = data.userId || ('usr_' + Date.now());
    const nickname = String(data.nickname || data.name || 'داوطلب').trim().substring(0, 40);
    const target = String(data.target || '').trim().substring(0, 70);
    const studyMinutes = Math.max(0, parseInt(data.studyMinutes) || 0);
    const testCount = Math.max(0, parseInt(data.testCount) || 0);
    const weeklyStudyMinutes = Math.max(0, parseInt(data.weeklyStudyMinutes || data.weekly_study_minutes) || studyMinutes);
    const weeklyTestCount = Math.max(0, parseInt(data.weeklyTestCount || data.weekly_test_count) || testCount);
    const allTimeStudyMinutes = Math.max(0, parseInt(data.allTimeStudyMinutes || data.alltime_study_minutes) || weeklyStudyMinutes);
    const allTimeTestCount = Math.max(0, parseInt(data.allTimeTestCount || data.alltime_test_count) || weeklyTestCount);
    const subjects = Array.isArray(data.subjects) ? data.subjects.filter(s => s && typeof s === 'string').slice(0, 10) : [];
    const avatarUrl = data.avatar_url || data.avatarUrl || data.avatar || data.photo_url || '';

    // 1. Handle Leave Action
    if (action === 'leave_group') {
      roster = roster.filter(m => m.userId !== userId);
      dailyList = dailyList.filter(d => d.userId !== userId);
      await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 });
      await kv.put(dailyKey, JSON.stringify(dailyList), { expirationTtl: 2592000 });
      return new Response(JSON.stringify({
        success: true,
        message: 'با موفقیت از گروه خارج شدید.',
        groupCode: safeGroupCode
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

    // 2. Handle Live Study Status (Heartbeat & Start/Stop Timer Indicator)
    if (action === 'set_status') {
      const isStudying = Boolean(data.isStudying);
      const studySubject = String(data.subject || data.studySubject || '').trim().substring(0, 60);
      const lastHeartbeat = Number(data.lastHeartbeat) || Date.now();

      const rosterIdx = roster.findIndex(m => m.userId === userId);
      if (rosterIdx >= 0) {
        roster[rosterIdx].isStudying = isStudying;
        roster[rosterIdx].studySubject = studySubject;
        roster[rosterIdx].subject = studySubject;
        roster[rosterIdx].lastHeartbeat = lastHeartbeat;
        roster[rosterIdx].lastActive = Date.now();
        if (nickname && nickname !== 'داوطلب') roster[rosterIdx].nickname = nickname;
        if (target) roster[rosterIdx].target = target;
        if (avatarUrl) {
          roster[rosterIdx].avatar_url = avatarUrl;
          roster[rosterIdx].avatarUrl = avatarUrl;
          roster[rosterIdx].avatar = avatarUrl;
          roster[rosterIdx].photo_url = avatarUrl;
        }
      } else {
        roster.push({
          userId,
          nickname,
          target,
          avatar_url: avatarUrl,
          avatarUrl: avatarUrl,
          avatar: avatarUrl,
          photo_url: avatarUrl,
          isOwner: !!data.isOwner,
          joinedAt: Date.now(),
          lastActive: Date.now(),
          isStudying,
          studySubject,
          subject: studySubject,
          lastHeartbeat
        });
      }

      await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 });

      return new Response(JSON.stringify({
        success: true,
        action: 'set_status',
        isStudying,
        subject: studySubject,
        studySubject,
        lastHeartbeat,
        groupCode: safeGroupCode
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

    // 3. Persistent Roster Maintenance: Add or update user in squad roster
    const rosterIdx = roster.findIndex(m => m.userId === userId);
    const existingMember = rosterIdx >= 0 ? roster[rosterIdx] : {};
    const memberAvatar = avatarUrl || existingMember.avatar_url || existingMember.avatarUrl || existingMember.avatar || existingMember.photo_url || '';
    const memberRosterData = {
      userId,
      nickname,
      target,
      avatar_url: memberAvatar,
      avatarUrl: memberAvatar,
      avatar: memberAvatar,
      photo_url: memberAvatar,
      weeklyStudyMinutes: Math.max(weeklyStudyMinutes, Number(existingMember.weeklyStudyMinutes) || 0),
      weeklyTestCount: Math.max(weeklyTestCount, Number(existingMember.weeklyTestCount) || 0),
      allTimeStudyMinutes: Math.max(allTimeStudyMinutes, Number(existingMember.allTimeStudyMinutes) || 0),
      allTimeTestCount: Math.max(allTimeTestCount, Number(existingMember.allTimeTestCount) || 0),
      isOwner: !!(data.isOwner || (rosterIdx === 0 && roster[0]?.isOwner) || existingMember.isOwner),
      joinedAt: rosterIdx >= 0 ? (roster[rosterIdx].joinedAt || Date.now()) : Date.now(),
      lastActive: Date.now(),
      isStudying: data.isStudying !== undefined ? Boolean(data.isStudying) : Boolean(existingMember.isStudying),
      studySubject: (data.subject !== undefined || data.studySubject !== undefined) ? (data.subject || data.studySubject || '') : (existingMember.studySubject || existingMember.subject || ''),
      subject: (data.subject !== undefined || data.studySubject !== undefined) ? (data.subject || data.studySubject || '') : (existingMember.studySubject || existingMember.subject || ''),
      lastHeartbeat: data.lastHeartbeat !== undefined ? (Number(data.lastHeartbeat) || Date.now()) : (existingMember.lastHeartbeat || 0)
    };

    if (rosterIdx >= 0) {
      roster[rosterIdx] = { ...roster[rosterIdx], ...memberRosterData };
    } else {
      roster.push(memberRosterData);
    }

    // 4. Daily Study Score Maintenance
    const dailyEntry = {
      userId,
      nickname,
      target,
      studyMinutes,
      testCount,
      weeklyStudyMinutes,
      weeklyTestCount,
      allTimeStudyMinutes,
      allTimeTestCount,
      subjects,
      avatar_url: memberAvatar,
      avatarUrl: memberAvatar,
      avatar: memberAvatar,
      photo_url: memberAvatar,
      date: dateStr,
      updatedAt: Date.now()
    };

    const dailyIdx = dailyList.findIndex(d => d.userId === userId);
    if (dailyIdx >= 0) {
      dailyList[dailyIdx] = { ...dailyList[dailyIdx], ...dailyEntry };
    } else {
      dailyList.push(dailyEntry);
    }

    // 5. Merge Persistent Roster with Daily Records (ensures 0-study members are NEVER hidden)
    const combinedMap = new Map();
    const STUDY_TIMEOUT_MS = 60 * 60 * 1000; // 60 minutes (3,600,000 ms grace period)
    const nowTs = Date.now();

    // First initialize every enrolled member with 0 mins/tests + live status (60 min grace period)
    roster.forEach(member => {
      const isMemberActive = Boolean(member.isStudying) && ((nowTs - (Number(member.lastHeartbeat) || 0)) < STUDY_TIMEOUT_MS);
      const mAvatar = member.avatar_url || member.avatarUrl || member.avatar || member.photo_url || '';
      combinedMap.set(member.userId, {
        userId: member.userId,
        nickname: member.nickname || 'داوطلب',
        target: member.target || '',
        avatar_url: mAvatar,
        avatarUrl: mAvatar,
        avatar: mAvatar,
        photo_url: mAvatar,
        studyMinutes: 0,
        testCount: 0,
        weeklyStudyMinutes: member.weeklyStudyMinutes || 0,
        weeklyTestCount: member.weeklyTestCount || 0,
        allTimeStudyMinutes: member.allTimeStudyMinutes || 0,
        allTimeTestCount: member.allTimeTestCount || 0,
        subjects: [],
        isOwner: !!member.isOwner,
        joinedAt: member.joinedAt || Date.now(),
        date: dateStr,
        updatedAt: member.lastActive || Date.now(),
        isStudying: isMemberActive,
        studySubject: isMemberActive ? (member.studySubject || member.subject || '') : '',
        subject: isMemberActive ? (member.studySubject || member.subject || '') : '',
        lastHeartbeat: member.lastHeartbeat || 0
      });
    });

    // Then overlay today's active study stats
    dailyList.forEach(daily => {
      const dAvatar = daily.avatar_url || daily.avatarUrl || daily.avatar || daily.photo_url || '';
      if (combinedMap.has(daily.userId)) {
        const existing = combinedMap.get(daily.userId);
        const finalAvatar = dAvatar || existing.avatar_url || existing.avatarUrl || '';
        combinedMap.set(daily.userId, {
          ...existing,
          ...daily,
          nickname: daily.nickname || existing.nickname,
          target: daily.target || existing.target,
          avatar_url: finalAvatar,
          avatarUrl: finalAvatar,
          avatar: finalAvatar,
          photo_url: finalAvatar,
          weeklyStudyMinutes: Math.max(Number(daily.weeklyStudyMinutes || 0), Number(existing.weeklyStudyMinutes || 0)),
          weeklyTestCount: Math.max(Number(daily.weeklyTestCount || 0), Number(existing.weeklyTestCount || 0)),
          allTimeStudyMinutes: Math.max(Number(daily.allTimeStudyMinutes || 0), Number(existing.allTimeStudyMinutes || 0)),
          allTimeTestCount: Math.max(Number(daily.allTimeTestCount || 0), Number(existing.allTimeTestCount || 0)),
          isStudying: existing.isStudying,
          studySubject: existing.studySubject,
          subject: existing.subject,
          lastHeartbeat: existing.lastHeartbeat
        });
      } else {
        combinedMap.set(daily.userId, {
          ...daily,
          avatar_url: dAvatar,
          avatarUrl: dAvatar,
          avatar: dAvatar,
          photo_url: dAvatar
        });
      }
    });

    const finalLeaderboard = Array.from(combinedMap.values());
    finalLeaderboard.sort((a, b) => {
      if ((b.studyMinutes || 0) !== (a.studyMinutes || 0)) {
        return (b.studyMinutes || 0) - (a.studyMinutes || 0);
      }
      return (b.testCount || 0) - (a.testCount || 0);
    });

    // Save to Cloudflare KV
    await kv.put(rosterKey, JSON.stringify(roster), { expirationTtl: 7776000 }); // 90 days
    await kv.put(dailyKey, JSON.stringify(dailyList), { expirationTtl: 2592000 }); // 30 days
    if (squadInfo.name) {
      await kv.put(infoKey, JSON.stringify(squadInfo), { expirationTtl: 7776000 });
    }

    const rank = finalLeaderboard.findIndex(u => u.userId === userId) + 1;

    return new Response(JSON.stringify({
      success: true,
      groupCode: safeGroupCode,
      groupName: squadInfo.name || `گروه ${safeGroupCode}`,
      rank: rank > 0 ? rank : null,
      roster: roster,
      list: finalLeaderboard,
      leaderboard: finalLeaderboard,
      count: finalLeaderboard.length,
      message: 'کارنامه با موفقیت در گروه اختصاصی ثبت شد.'
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
    
    if (!kv) {
      return new Response(JSON.stringify({ success: false, error: 'KV_NOT_BOUND' }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const url = new URL(request.url);

    // Backward compatibility for full state sync lookup with sync_code
    const querySyncCode = url.searchParams.get('sync_code') || url.searchParams.get('code');
    if (querySyncCode) {
      const safeCode = String(querySyncCode).trim().toUpperCase();
      const codeRaw = await kv.get(`sync_code_${safeCode}`);
      if (codeRaw) {
        return new Response(JSON.stringify({ success: true, data: JSON.parse(codeRaw) }), {
          status: 200,
          headers: corsHeaders
        });
      }
    }

    const rawGroupCode = url.searchParams.get('groupCode') || url.searchParams.get('group') || url.searchParams.get('squad') || '';
    const safeGroupCode = String(rawGroupCode).trim().toUpperCase();

    // 100% Isolated Architecture: If no groupCode is provided, return empty list (No public index)
    if (!safeGroupCode) {
      return new Response(JSON.stringify({
        success: true,
        noGroup: true,
        list: [],
        leaderboard: [],
        count: 0,
        message: 'هیچ کد گروهی ارسال نشده است (سیستم کاملاً اختصاصی و Unlisted است).'
      }), {
        status: 200,
        headers: corsHeaders
      });
    }

    const dateStr = url.searchParams.get('date') || getIranTodayDateStr();
    const rosterKey = `squad_roster_${safeGroupCode}`;
    const dailyKey = `squad_daily_${safeGroupCode}_${dateStr}`;
    const infoKey = `squad_info_${safeGroupCode}`;

    const roster = (await readKVJson(kv, rosterKey, [])) || [];
    const dailyList = (await readKVJson(kv, dailyKey, [])) || [];
    const squadInfo = (await readKVJson(kv, infoKey, {})) || {};

    // Combine roster with daily records (60 min grace period)
    const combinedMap = new Map();
    const STUDY_TIMEOUT_MS = 60 * 60 * 1000; // 60 minutes (3,600,000 ms)
    const nowTs = Date.now();

    roster.forEach(member => {
      const isMemberActive = Boolean(member.isStudying) && ((nowTs - (Number(member.lastHeartbeat) || 0)) < STUDY_TIMEOUT_MS);
      const mAvatar = member.avatar_url || member.avatarUrl || member.avatar || member.photo_url || '';
      combinedMap.set(member.userId, {
        userId: member.userId,
        nickname: member.nickname || 'داوطلب',
        target: member.target || '',
        avatar_url: mAvatar,
        avatarUrl: mAvatar,
        avatar: mAvatar,
        photo_url: mAvatar,
        studyMinutes: 0,
        testCount: 0,
        weeklyStudyMinutes: member.weeklyStudyMinutes || 0,
        weeklyTestCount: member.weeklyTestCount || 0,
        allTimeStudyMinutes: member.allTimeStudyMinutes || 0,
        allTimeTestCount: member.allTimeTestCount || 0,
        subjects: [],
        isOwner: !!member.isOwner,
        joinedAt: member.joinedAt || Date.now(),
        date: dateStr,
        updatedAt: member.lastActive || Date.now(),
        isStudying: isMemberActive,
        studySubject: isMemberActive ? (member.studySubject || member.subject || '') : '',
        subject: isMemberActive ? (member.studySubject || member.subject || '') : '',
        lastHeartbeat: member.lastHeartbeat || 0
      });
    });

    dailyList.forEach(daily => {
      const dAvatar = daily.avatar_url || daily.avatarUrl || daily.avatar || daily.photo_url || '';
      if (combinedMap.has(daily.userId)) {
        const existing = combinedMap.get(daily.userId);
        const finalAvatar = dAvatar || existing.avatar_url || existing.avatarUrl || '';
        combinedMap.set(daily.userId, {
          ...existing,
          ...daily,
          nickname: daily.nickname || existing.nickname,
          target: daily.target || existing.target,
          avatar_url: finalAvatar,
          avatarUrl: finalAvatar,
          avatar: finalAvatar,
          photo_url: finalAvatar,
          weeklyStudyMinutes: Math.max(Number(daily.weeklyStudyMinutes || 0), Number(existing.weeklyStudyMinutes || 0)),
          weeklyTestCount: Math.max(Number(daily.weeklyTestCount || 0), Number(existing.weeklyTestCount || 0)),
          allTimeStudyMinutes: Math.max(Number(daily.allTimeStudyMinutes || 0), Number(existing.allTimeStudyMinutes || 0)),
          allTimeTestCount: Math.max(Number(daily.allTimeTestCount || 0), Number(existing.allTimeTestCount || 0)),
          isStudying: existing.isStudying,
          studySubject: existing.studySubject,
          subject: existing.subject,
          lastHeartbeat: existing.lastHeartbeat
        });
      } else {
        combinedMap.set(daily.userId, {
          ...daily,
          avatar_url: dAvatar,
          avatarUrl: dAvatar,
          avatar: dAvatar,
          photo_url: dAvatar
        });
      }
    });

    const finalLeaderboard = Array.from(combinedMap.values()).map(item => {
      const av = item.avatar_url || item.avatarUrl || item.avatar || item.photo_url || '';
      return {
        ...item,
        avatar_url: av,
        avatarUrl: av,
        avatar: av,
        photo_url: av
      };
    });

    finalLeaderboard.sort((a, b) => {
      if ((b.studyMinutes || 0) !== (a.studyMinutes || 0)) {
        return (b.studyMinutes || 0) - (a.studyMinutes || 0);
      }
      return (b.testCount || 0) - (a.testCount || 0);
    });

    return new Response(JSON.stringify({
      success: true,
      groupCode: safeGroupCode,
      groupName: squadInfo.name || `گروه ${safeGroupCode}`,
      list: finalLeaderboard,
      leaderboard: finalLeaderboard,
      roster: roster,
      date: dateStr,
      count: finalLeaderboard.length
    }), {
      status: 200,
      headers: getCacheHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
