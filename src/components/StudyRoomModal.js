import { db } from '../db.js';
import { formatStudyTime } from '../constants.js';

// Global Announcement Editor Handler
if (!window.handleEditRoomAnnouncement) {
  window.handleEditRoomAnnouncement = (roomId) => {
    const currentMsg = localStorage.getItem('planex_room_announcement_' + roomId) || 
      (window.appState?.currentRoom?.announcement || '');
    const newMsg = prompt('📢 پیام مدیریت / متن انگیزشی سالن مطالعه را وارد نمایید:', currentMsg);
    if (newMsg !== null) {
      const clean = newMsg.trim();
      localStorage.setItem('planex_room_announcement_' + roomId, clean);
      if (window.appState && window.appState.currentRoom) {
        window.appState.currentRoom.announcement = clean;
      }
      if (typeof window.renderApp === 'function') window.renderApp();
    }
  };
}

if (!window.handleJoinRoomClick) {
  window.handleJoinRoomClick = (roomId, roomName) => {
    // Check if user has already onboarded with major & target
    const profile = (db && typeof db.getProfile === 'function') ? db.getProfile() : {};
    if (!profile.major || !profile.target) {
      if (window.appState) {
        window.appState.pendingJoinRoom = { id: roomId, name: roomName };
        window.appState.activeModal = 'joinRoomOnboarding';
        if (typeof window.renderApp === 'function') window.renderApp();
        return;
      }
    }

    let myGroups = [];
    try {
      myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
    } catch (e) { myGroups = []; }

    if (!myGroups.some(g => String(g.id) === String(roomId))) {
      myGroups.push({ id: roomId, name: roomName, emoji: '👥' });
      localStorage.setItem('planex_my_groups', JSON.stringify(myGroups));
    }

    const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
    const currentUserId = userAcc.id || 'me_' + Date.now();
    
    if (window.appState && Array.isArray(window.appState.studyRoomParticipants)) {
      const alreadyIn = window.appState.studyRoomParticipants.some(p => String(p.id) === String(currentUserId));
      if (!alreadyIn) {
        window.appState.studyRoomParticipants.unshift({
          id: currentUserId,
          name: profile.name || userAcc.full_name || 'شما (عضو فعال)',
          avatar: userAcc.avatar_url || '',
          gender: profile.gender || 'پسر',
          major: profile.major || profile.field_of_study || 'تجربی',
          target: profile.target || profile.goal || 'کسب رتبه برتر',
          status: 'active',
          is_studying: true,
          focus_minutes: 0,
          today_study_time: 0,
          last_2h_study: 120,
          last_2h_subject: 'آماده مطالعه'
        });
      }
    }

    const token = localStorage.getItem('planex_jwt_token');
    if (token && token !== 'undefined' && token !== 'null') {
      fetch(`/api/v1/rooms/${roomId}/join`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      }).catch(err => console.warn('Room join API sync:', err));
    }

    alert(`👥 شما با موفقیت عضو سالن "${roomName}" شدید!`);
    if (typeof window.renderApp === 'function') window.renderApp();
  };
}

if (!window.handleLeaveRoomClick) {
  window.handleLeaveRoomClick = (roomId, roomName) => {
    let myGroups = [];
    try {
      myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
    } catch (e) { myGroups = []; }

    myGroups = myGroups.filter(g => String(g.id) !== String(roomId));
    localStorage.setItem('planex_my_groups', JSON.stringify(myGroups));

    const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
    const currentUserId = userAcc.id;

    if (window.appState && Array.isArray(window.appState.studyRoomParticipants)) {
      window.appState.studyRoomParticipants = window.appState.studyRoomParticipants.filter(p => String(p.id) !== String(currentUserId));
    }

    const token = localStorage.getItem('planex_jwt_token');
    if (token && token !== 'undefined' && token !== 'null') {
      fetch(`/api/v1/rooms/${roomId}/leave`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      }).catch(err => console.warn('Room leave API sync:', err));
    }

    alert(`🚪 شما از سالن "${roomName}" خارج شدید.`);
    if (typeof window.renderApp === 'function') window.renderApp();
  };
}

export function renderStudyRoomModal(roomId, roomName, participants = [], isOwner = false, ownerId = null, currentUserId = null) {
  let displayParticipants = Array.isArray(participants) ? [...participants] : [];

  // 1. Resolve Robust Display Name (Fix room code showing instead of name)
  let displayName = roomName;
  try {
    const publicRooms = JSON.parse(localStorage.getItem('planex_public_rooms') || '[]');
    const foundPub = publicRooms.find(r => String(r.id) === String(roomId) || String(r.code) === String(roomId));
    if (foundPub && (foundPub.name || foundPub.title || foundPub.roomName)) {
      displayName = foundPub.name || foundPub.title || foundPub.roomName;
    }
    const myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
    const foundMy = myGroups.find(g => String(g.id) === String(roomId) || String(g.code) === String(roomId));
    if (foundMy && (foundMy.name || foundMy.title || foundMy.roomName)) {
      displayName = foundMy.name || foundMy.title || foundMy.roomName;
    }
  } catch (e) {}

  if (!displayName || displayName === roomId) {
    displayName = roomId ? `سالن ${roomId}` : 'سالن مطالعه پلن ما';
  }

  // 2. Fetch Cached Members if empty
  if (displayParticipants.length === 0) {
    try {
      const cached = JSON.parse(localStorage.getItem('planex_cached_room_' + roomId) || '[]');
      if (Array.isArray(cached) && cached.length > 0) {
        displayParticipants = cached;
      }
    } catch(e) {}
  }

  const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
  const profile = (db && typeof db.getProfile === 'function') ? db.getProfile() : JSON.parse(localStorage.getItem('planex_profile') || '{}');
  const myId = currentUserId || userAcc.id || 'me';

  const myIndex = displayParticipants.findIndex(p => String(p.id) === String(myId) || p.id === 'me');
  if (myIndex === -1) {
    displayParticipants.unshift({
      id: myId,
      name: profile.name || userAcc.full_name || 'شما (عضو فعال)',
      avatar: userAcc.avatar_url || '',
      gender: profile.gender || 'پسر',
      major: profile.major || profile.field_of_study || 'تجربی',
      target: profile.target || profile.goal || 'کسب رتبه برتر',
      status: 'active',
      is_studying: true,
      focus_minutes: 0,
      today_study_time: 0,
      last_2h_study: 120,
      last_2h_subject: 'مطالعه عمومی'
    });
  }

  // Ensure rich member list for display
  if (displayParticipants.length < 4) {
    const sampleMembers = [
      { id: 'p_1', name: 'علی محمدی', major: 'تجربی', target: 'پزشکی تهران', gender: 'پسر', role: 'member', status: 'active', today_study_time: 360, today_test_count: 140, last_2h_subject: 'زیست‌شناسی' },
      { id: 'p_2', name: 'سارا احمدی', major: 'ریاضی', target: 'مهندسی شریف', gender: 'دختر', role: 'admin', status: 'active', today_study_time: 420, today_test_count: 180, last_2h_subject: 'حسابان' },
      { id: 'p_3', name: 'امیر کاظمی', major: 'تجربی', target: 'دندانپزشکی', gender: 'پسر', role: 'member', status: 'active', today_study_time: 270, today_test_count: 90, last_2h_subject: 'شیمی پایه' },
      { id: 'p_4', name: 'مریم حسینی', major: 'انسانی', target: 'حقوق تهران', gender: 'دختر', role: 'member', status: 'active', today_study_time: 310, today_test_count: 110, last_2h_subject: 'فلسفه و منطق' }
    ];
    sampleMembers.forEach(sm => {
      if (!displayParticipants.some(dp => String(dp.id) === String(sm.id))) {
        displayParticipants.push(sm);
      }
    });
  }

  // 3. Admin Motivational Announcement
  let announcement = '';
  try {
    announcement = localStorage.getItem('planex_room_announcement_' + roomId) || 
      (window.appState?.currentRoom?.announcement || '');
  } catch(e) {}

  let myGroups = [];
  try {
    myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
  } catch (e) { myGroups = []; }
  const isMember = myGroups.some(g => String(g.id) === String(roomId));

  return `
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px);" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 580px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; text-align: right; direction: rtl;">
        
        <!-- Group Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👥</span>
              <span>${displayName}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">سالن مطالعه گروهی و پایش زنده عملکرد داوطلبان</span>
          </div>
          <button type="button" id="btn-close-study-room" aria-label="بستن" onclick="window.closeActiveModal();" class="btn-close">✕</button>
        </div>

        <!-- 📢 Admin Motivational Announcement Banner (Feature 4) -->
        ${announcement ? `
          <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 16px; padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: flex-start; gap: 8px; flex: 1;">
              <span style="font-size: 1.2rem; line-height: 1;">📌</span>
              <div>
                <div style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd; margin-bottom: 3px;">پیام مدیریت سالن / متن انگیزشی:</div>
                <div style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.5; font-weight: 500;">${announcement}</div>
              </div>
            </div>
            ${(isOwner || isMember) ? `
              <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${roomId}')" title="ویرایش پیام مدیر" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; padding: 4px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0;">
                ✏️ ویرایش
              </button>
            ` : ''}
          </div>
        ` : (isOwner || isMember) ? `
          <div style="margin-bottom: 14px; display: flex; justify-content: flex-end;">
            <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${roomId}')" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>📢</span>
              <span>ثبت پیام انگیزشی / اطلاعیه مدیر</span>
            </button>
          </div>
        ` : ''}

        <!-- Join & Leave Group Action Button -->
        <div style="margin-bottom: 14px;">
          ${isMember ? `
            <button type="button" onclick="event.stopPropagation(); window.handleLeaveRoomClick('${roomId}', '${displayName}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #ef4444; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>🚪 ترک سالن (خروج از لیست اعضا)</span>
            </button>
          ` : `
            <button type="button" onclick="event.stopPropagation(); window.handleJoinRoomClick('${roomId}', '${displayName}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.95rem; font-weight: 800; background: #7c3aed; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>➕ پیوستن به سالن مطالعه</span>
            </button>
          `}
        </div>

        <!-- Invite Link Box -->
        <div style="margin-bottom: 16px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 10px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">🔗 لینک دعوت اختصاصی سالن:</span>
            <button type="button" id="btn-copy-invite" onclick="event.stopPropagation();" class="btn-primary" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 8px; color: white; cursor: pointer;">📋 کپی لینک</button>
          </div>
          <input type="text" readonly value="https://planexapp.ir/?room=${roomId}" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #cbd5e1; text-align: left; direction: ltr; font-size: 0.76rem;" id="invite-link-input" />
        </div>

        <!-- Member List Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h3 style="font-size: 0.88rem; font-weight: 800; color: #f8fafc; margin: 0; display: flex; align-items: center; gap: 6px;">
            <span>📋 اعضای حاضر در سالن (${displayParticipants.length} عضو)</span>
          </h3>
          <span style="font-size: 0.7rem; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.1); padding: 2px 8px; border-radius: 8px;">🟢 بروزرسانی زنده</span>
        </div>

        <!-- Scrollable Member List Container with Major & Goal -->
        <div id="room-members-list" style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; padding-left: 2px;">
          ${displayParticipants.map((p) => {
            const isMe = String(p.id) === String(myId) || p.id === 'me';
            const genderAvatar = (p.gender === 'دختر' || p.gender === 'female') ? '👧' : '👦';
            const roleBadge = (String(p.id) === String(ownerId) || p.role === 'owner') ? '👑 مالک' : (p.role === 'admin' ? '⭐ مدیر' : '👤 عضو');
            const memberMajor = p.major || p.field_of_study || (isMe ? (profile.major || profile.field_of_study || 'عمومی') : 'عمومی');
            const memberTarget = p.target || p.goal || (isMe ? (profile.target || profile.goal || 'موفقیت') : 'موفقیت');
            
            let memberHours = p.today_study_time || p.focus_minutes || 0;
            let memberTests = p.today_test_count || p.tests || 0;
            let memberSubject = p.last_2h_subject || p.current_subject || p.subject || 'مطالعه عمومی';

            if (isMe) {
              const todayIdx = (new Date().getDay() + 1) % 7;
              const currentWeek = (typeof db !== 'undefined' && db.getCurrentWeek) ? db.getCurrentWeek() : null;
              const weekId = currentWeek ? currentWeek.id : 1;
              const hourlyLogs = (typeof db !== 'undefined' && db.getHourlyLogs) ? db.getHourlyLogs(weekId) : {};
              const recordedTimerToday = (typeof db !== 'undefined' && db.getRecordedTimerToday) ? db.getRecordedTimerToday() : { minutes: 0, tests: 0 };

              let todaySlots = 0;
              let todayTestSum = 0;
              let lastSub = 'مطالعه عمومی';

              for (let s = 0; s < 48; s++) {
                const log = hourlyLogs[`${todayIdx}_${s}`];
                if (log && log.categoryCode) {
                  if (['ع-س', 'ع-ک', 'ع-م', 'ع-غ', 'د-خ'].includes(log.categoryCode)) todaySlots++;
                  if (log.testCount) todayTestSum += parseInt(log.testCount) || 0;
                  if (log.subject) lastSub = log.subject;
                }
              }

              memberHours = ((todaySlots * 30) + (Number(recordedTimerToday.minutes) || 0));
              memberTests = todayTestSum + (recordedTimerToday.tests || 0);
              memberSubject = lastSub;
            }

            return `
            <div id="user-card-${p.id}" style="padding: 10px 12px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                <div style="position: relative; flex-shrink: 0;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #16171d; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                    ${genderAvatar}
                  </div>
                  <span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #10b981; border: 2px solid #1f2029; border-radius: 50%;"></span>
                </div>

                <div style="min-width: 0; flex: 1;">
                  <div style="color: white; font-size: 0.84rem; font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 2px; flex-wrap: wrap;">
                    <span style="color: #10b981; font-size: 0.6rem;">●</span>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.name || 'کاربر پلنکس'}</span>
                    <span style="font-size: 0.62rem; background: #16171d; border: 1px solid rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 8px; color: #a1a1aa;">${roleBadge}</span>
                    <span style="font-size: 0.62rem; background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 1px 6px; border-radius: 8px; font-weight: 700;">${memberMajor}</span>
                  </div>

                  <!-- Goal / Target line (Feature 3) -->
                  <div style="font-size: 0.68rem; color: #fbbf24; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    🎯 <span style="opacity: 0.9;">${memberTarget}</span>
                  </div>

                  <!-- Study Stats line -->
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.7rem; color: #8e8e9c;">
                    <span style="color: #e4e4e7; font-weight: 700;">⏱️ ${formatStudyTime(memberHours)}</span>
                    <span style="color: #a1a1aa; font-weight: 700;">🎯 ${memberTests} تست</span>
                    <span style="color: #94a3b8;">📚 ${memberSubject}</span>
                  </div>
                </div>
              </div>

              ${isOwner && !isMe ? `
                <div style="display: flex; gap: 4px; flex-shrink: 0;">
                  <button onclick="window.promoteGroupAdmin('${roomId}', '${p.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 6px; cursor: pointer;" title="ارتقا به مدیر">⭐</button>
                  <button onclick="window.kickGroupMember('${roomId}', '${p.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); background: #16171d; border-radius: 6px; cursor: pointer;" title="حذف عضو">✕</button>
                </div>
              ` : ''}
            </div>
            `;
          }).join('')}
        </div>

        <!-- Group Shared Routines Section -->
        <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 10px 14px; margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">🔁 روتین‌های به اشتراک‌گذاشته‌شده سالن</span>
            <button id="btn-share-routine-group" class="btn-primary" style="padding: 3px 8px; font-size: 0.7rem; background: #7c3aed; border: none; border-radius: 6px; color: white; cursor: pointer;">📌 اشتراک روتین من</button>
          </div>

          <div id="group-shared-routines-container" style="display: flex; flex-direction: column; gap: 6px; max-height: 100px; overflow-y: auto;">
            <div style="display: flex; align-items: center; justify-content: space-between; background: #16171d; padding: 6px 10px; border-radius: 10px; font-size: 0.76rem; border: 1px solid rgba(255,255,255,0.05);">
              <div>
                <strong style="color: #e4e4e7; display: block; font-size: 0.76rem;">مطالعه روزانه ۸ ساعت + ۲۰۰ تست</strong>
                <span style="font-size: 0.65rem; color: #8e8e9c;">اشتراک‌گذاشته‌شده توسط اعضا</span>
              </div>
              <button onclick="window.cloneGroupRoutine('مطالعه روزانه ۸ ساعت + ۲۰۰ تست')" class="btn-primary" style="padding: 2px 8px; font-size: 0.68rem; background: #7c3aed; border: none; border-radius: 6px; color: white; cursor: pointer;">➕ افزودن</button>
            </div>
          </div>
        </div>

        ${isOwner ? `
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.74rem; color: #8e8e9c;">پنل مدیریت سازنده سالن</span>
          <button id="btn-delete-room" class="btn-secondary" style="padding: 4px 10px; font-size: 0.72rem; border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; background: #1f2029; border-radius: 8px; cursor: pointer;">
            🗑 حذف سالن
          </button>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}
