// Leaderboard View: 🏆 تالار رقابت و گروه‌های مطالعه دو مرحله‌ای (Two-Stage Group Leaderboard)
// Stage 1: Group Cards Directory (My Groups & Real Public Active Groups + Early Birds)
// Stage 2: Dedicated Group Page (Member Ranking Table, Early Birds Roster, Private Room Pending Gatekeeper, Admin Permanent Approval Queue Box, Group Privacy Toggle)

import { leaderboardService } from '../services/leaderboardService.js';
import { formatStudyTime } from '../constants.js';
import { db } from '../db.js';
import { renderEditProfileModal } from '../components/EditProfileModal.js';
import { API_BASE_URL } from '../config.js';

// Safe Module-Level HTML Escaper and Number Formatter
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const toPersian = (num) => String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

// Global state for leaderboard search/filter & loading
window.leaderboardFilterQuery = window.leaderboardFilterQuery || '';
window.isLeaderboardSyncing = false;
window.isLeaderboardRefreshing = false;
window.lastLeaderboardResult = window.lastLeaderboardResult || null;
window.isFetchingLeaderboardBg = false;
window.lastPublicRoomsList = window.lastPublicRoomsList || null;
window.isFetchingPublicRoomsBg = false;
window.lastEarlyBirdList = window.lastEarlyBirdList || null;
window.isFetchingEarlyBirds = false;

// Global Toast Helper
function showLeaderboardToast(message, isSuccess = true, duration = 3500) {
  const toast = document.createElement('div');
  toast.style.cssText = `position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${isSuccess ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'}; color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; max-width: 92vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.3);`;
  toast.innerHTML = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// Global Handler: Back to Stage 1 (Group List Directory)
window.planexNavigateBackToGroups = function(event) {
  if (event && typeof event.preventDefault === 'function') event.preventDefault();
  if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
  console.log('Back to groups clicked');

  if (window.leaderboardState) {
    window.leaderboardState.currentGroupId = null;
  }
  try {
    localStorage.removeItem('planex_active_group_id');
    localStorage.removeItem('planex_current_group_view');
    localStorage.removeItem('planex_active_group_code');
    localStorage.removeItem('active_room');
    localStorage.removeItem('planex_active_room');
    localStorage.removeItem('planex_user_group_data');
  } catch (e) {
    console.warn('[planexNavigateBackToGroups] Storage purge error:', e);
  }
  window._leaderboardMemoryCache = { key: null, data: null };

  if (window.leaderboardService && typeof window.leaderboardService.setActiveGroupCode === 'function') {
    window.leaderboardService.setActiveGroupCode(null);
  } else if (typeof leaderboardService !== 'undefined' && leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
    leaderboardService.setActiveGroupCode(null);
  }

  if (typeof db !== 'undefined' && db && typeof db.setActiveGroupCode === 'function') {
    db.setActiveGroupCode(null);
  }

  window.lastLeaderboardResult = null;

  if (typeof renderGroupsHub === 'function') {
    renderGroupsHub();
  } else if (typeof initLeaderboardView === 'function') {
    initLeaderboardView();
  } else if (typeof renderLeaderboardDirectory === 'function') {
    renderLeaderboardDirectory();
  }
  if (typeof window.renderApp === 'function') {
    window.renderApp();
  }
};

window.handleBackToGroupsList = window.handleBackToGroupList = window.planexNavigateBackToGroups;

export function renderLeaderboardDirectory() {
  if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
    leaderboardService.setActiveGroupCode(null);
  }
  localStorage.removeItem('planex_current_group_view');
  localStorage.removeItem('planex_active_group_code');
  localStorage.removeItem('active_room');
  localStorage.removeItem('planex_active_room');
  localStorage.removeItem('planex_user_group_data');
  window.lastLeaderboardResult = null;
  return renderLeaderboardView();
}

window.renderGroupsHub = window.initLeaderboardView = renderLeaderboardDirectory;
export const initLeaderboardView = renderLeaderboardDirectory;

// Global Handler: Switch to Stage 2 (Inside Specific Group)
window.handleSwitchGroup = (groupCode) => {
  if (!groupCode || groupCode === 'GLOBAL') {
    window.handleBackToGroupList();
    return;
  }
  if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
    leaderboardService.setActiveGroupCode(groupCode);
  }
  window.lastLeaderboardResult = null;
  showLeaderboardToast(`🔄 ورود به جدول گروه «${groupCode}»`, true, 1800);
  if (window.renderApp) window.renderApp();
};

// Global Handler: Create New Private Study Squad
window.handleCreateGroupSubmit = async () => {
  const nameInput = document.getElementById('create-room-name') || document.getElementById('input-create-group-name');
  const groupName = nameInput ? nameInput.value.trim() : '';

  if (!groupName) {
    alert('لطفاً نام گروه رقابتی خود را وارد کنید (مثلاً: گروه پره‌اینترنی اسفند).');
    if (nameInput) nameInput.focus();
    return;
  }

  const btn = document.getElementById('btn-submit-create-room') || document.getElementById('btn-create-group-submit');
  const origHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ در حال ایجاد گروه...';
  }

  try {
    const isPrivate = document.querySelector('input[name="create-room-type"]:checked')?.value === 'private';
    const category = document.getElementById('create-room-category')?.value || 'general';
    const capacity = parseInt(document.getElementById('create-room-capacity')?.value) || 600;
    const announcement = document.getElementById('create-room-announcement')?.value?.trim() || '';

    const res = await leaderboardService.createGroup(groupName, isPrivate, { category, capacity, announcement });
    
    // Set as active group
    if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
      leaderboardService.setActiveGroupCode(res.groupCode);
    }
    if (typeof db !== 'undefined' && db && typeof db.setActiveGroupCode === 'function') {
      db.setActiveGroupCode(res.groupCode);
    }
    try {
      localStorage.setItem('planex_active_group_code', res.groupCode);
      localStorage.setItem('planex_current_group_view', res.groupCode);
    } catch (e) {
      console.warn('Storage save error in handleCreateGroupSubmit:', e);
    }

    // Close the create group modal cleanly
    if (typeof window.closeActiveModal === 'function') {
      window.closeActiveModal();
    } else if (typeof window.closeCreateGroupModal === 'function') {
      window.closeCreateGroupModal();
    } else if (window.appState) {
      window.appState.activeModal = null;
    }

    // Immediately re-render the leaderboard view for this new group
    window.lastLeaderboardResult = null;
    if (typeof window.renderApp === 'function') {
      window.renderApp();
    }

    // Show a success toast
    showLeaderboardToast(`🎉 گروه «${res.groupName}» با موفقیت ایجاد شد! کد دعوت: ${res.groupCode}`, true, 4000);
  } catch (err) {
    console.error('Create group failed:', err);
    alert('خطا در ایجاد گروه: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = origHtml || '🚀 ایجاد اتاق و دریافت کد دعوت';
    }
  }
};

// Global Handler: Join Room Modal Submission
window.handleModalJoinRoomSubmit = async () => {
  const codeInput = document.getElementById('input-modal-join-code') || document.getElementById('input-join-group-code');
  const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
  if (!code) {
    alert('لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).');
    if (codeInput) codeInput.focus();
    return;
  }
  await window.handleJoinGroupSubmit(code);
};

// Global Handler: Join Existing Private/Public Study Squad
window.handleJoinGroupSubmit = async (customCode = null) => {
  let code = customCode;
  if (!code) {
    const codeInput = document.getElementById('input-join-group-code') || document.getElementById('input-modal-join-code');
    code = codeInput ? codeInput.value.trim().toUpperCase() : '';
  }

  if (!code) {
    alert('لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).');
    return;
  }

  // Check onboarding requirement
  const profile = (db && typeof db.getProfile === 'function') ? db.getProfile() : {};
  if (!profile.name || !profile.target || !profile.major) {
    if (window.appState) {
      window.appState.pendingJoinRoom = { id: code, name: `گروه ${code}` };
      window.appState.activeModal = 'joinRoomOnboarding';
      if (window.renderApp) window.renderApp();
      return;
    }
  }

  try {
    const res = await leaderboardService.joinPrivateGroup(code);
    window.lastLeaderboardResult = null;

    if (res.requiresVerification) {
      showLeaderboardToast('⚠️ برای ورود به گروه، لطفاً ابتدا وارد حساب کاربری خود شوید.', false, 4500);
      if (window.openLoginModal) window.openLoginModal();
      return;
    }

    if (res.success) {
      showLeaderboardToast(res.message || 'با موفقیت به گروه پیوستید! 🎉', true, 4000);
      if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
        leaderboardService.setActiveGroupCode(code);
      }
      if (typeof window.closeActiveModal === 'function') {
        window.closeActiveModal();
      } else if (typeof window.closeCreateGroupModal === 'function') {
        window.closeCreateGroupModal();
      } else if (window.appState) {
        window.appState.activeModal = null;
      }
    } else {
      showLeaderboardToast(res.message || 'خطا در ورود به گروه', false, 3500);
    }
    if (window.renderApp) window.renderApp();
  } catch (err) {
    console.error('Join group failed:', err);
    alert('خطا در ورود به گروه: ' + err.message);
  }
};

// Global Handler: Toggle Group Privacy (Private vs Public)
window.handleToggleGroupPrivacyAction = async (groupCode, newIsPrivate) => {
  try {
    const res = await leaderboardService.toggleGroupPrivacy(groupCode, newIsPrivate);
    if (res && res.success) {
      showLeaderboardToast(res.message || `نوع گروه به «${newIsPrivate ? 'خصوصی' : 'عمومی'}» تغییر یافت.`);
    } else {
      showLeaderboardToast(res.message || 'خطا در تغییر نوع گروه', false);
    }
    window.lastLeaderboardResult = null;
    if (window.renderApp) window.renderApp();
  } catch (err) {
    alert('خطا در تغییر نوع گروه: ' + err.message);
  }
};

// Global Handler: Refresh Pending Requests Manual Button
window.handleRefreshPendingRequests = async (groupCode) => {
  try {
    window.isFetchingPendingRequests = true;
    const list = await leaderboardService.fetchPendingRequests(groupCode);
    window.groupPendingRequests = Array.isArray(list) ? list : [];
    window.isFetchingPendingRequests = false;
    showLeaderboardToast(`🔄 لیست درخواست‌های عضویت به‌روزرسانی شد (${window.groupPendingRequests.length} مورد)`, true, 2000);
    if (window.renderApp) window.renderApp();
  } catch (err) {
    window.isFetchingPendingRequests = false;
    console.error('Refresh pending requests error:', err);
  }
};

// Global Handler: Leave Specific Private Study Squad (Member Exit)
window.handleLeaveGroupAction = async (specificCode = null) => {
  const userGroups = (leaderboardService && typeof leaderboardService.getUserGroups === 'function') ? leaderboardService.getUserGroups() : [];
  const activeCode = String(specificCode || (leaderboardService && typeof leaderboardService.getActiveGroupCode === 'function' ? leaderboardService.getActiveGroupCode() : '')).trim().toUpperCase();
  const targetGroup = userGroups.find(g => (g.code || g.groupCode) === activeCode) || (leaderboardService && typeof leaderboardService.getActiveGroup === 'function' ? leaderboardService.getActiveGroup() : null);
  const groupName = targetGroup ? (targetGroup.name || targetGroup.groupName) : (activeCode || 'این گروه');

  if (!confirm(`آیا از خروج/انصراف از «${groupName}» اطمینان دارید؟`)) {
    return;
  }

  try {
    // 1. Purge from ALL client localStorage keys
    ['planex_user_groups', 'planex_my_rooms', 'my_rooms', 'planex_joined_groups', 'user_rooms'].forEach(key => {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) {
            const updated = list.filter(r => String(r.code || r.room_code || r.groupCode || r.id || '').trim().toUpperCase() !== activeCode);
            localStorage.setItem(key, JSON.stringify(updated));
          }
        }
      } catch (e) {}
    });

    localStorage.removeItem('planex_active_group_code');
    localStorage.removeItem('active_room');
    localStorage.removeItem('planex_active_room');
    localStorage.removeItem('planex_user_group_data');
    localStorage.removeItem(`planex_group_cache_${activeCode}`);
    localStorage.removeItem(`planex_group_roster_${activeCode}`);

    if (leaderboardService && typeof leaderboardService.leaveUserGroup === 'function') {
      await leaderboardService.leaveUserGroup(activeCode);
    }
    
    if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
      leaderboardService.setActiveGroupCode(null);
    }

    window.lastLeaderboardResult = null;
    showLeaderboardToast(`🚪 با موفقیت از گروه «${groupName}» خارج شدید.`);

    // Force re-fetch user's remaining rooms bypassing cache
    if (leaderboardService && typeof leaderboardService.fetchMyRooms === 'function') {
      await leaderboardService.fetchMyRooms(true).catch(() => {});
    }

    window.handleBackToGroupList();
  } catch (err) {
    console.error('Leave group failed:', err);
    alert('خطا در خروج از گروه: ' + err.message);
  }
};

// Global Handler: Delete Whole Group (Creator / Admin Only)
window.handleDeleteGroupAction = async (specificCode = null) => {
  const userGroups = (leaderboardService && typeof leaderboardService.getUserGroups === 'function') ? leaderboardService.getUserGroups() : [];
  const activeCode = String(specificCode || (leaderboardService && typeof leaderboardService.getActiveGroupCode === 'function' ? leaderboardService.getActiveGroupCode() : '')).trim().toUpperCase();
  const targetGroup = userGroups.find(g => (g.code || g.groupCode) === activeCode) || (leaderboardService && typeof leaderboardService.getActiveGroup === 'function' ? leaderboardService.getActiveGroup() : null);
  const groupName = targetGroup ? (targetGroup.name || targetGroup.groupName) : (activeCode || 'این گروه');

  if (!confirm(`🚨 هشدار مدیر:\n\nآیا از حذف کامل گروه «${groupName}» اطمینان دارید؟\n\nبا تایید شما، تمام اطلاعات گروه، اعضا و جدول آن پاک شده و برای همه منحل می‌شود.`)) {
    return;
  }

  const user = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
  const userProfile = (leaderboardService && typeof leaderboardService.getUserProfile === 'function') ? leaderboardService.getUserProfile() : {};
  const userId = user.id || user.telegram_id || userProfile.userId || '';
  const phone = user.phone || user.phone_number || userProfile.phone || '';

  try {
    // 1. Purge from ALL client localStorage keys
    ['planex_user_groups', 'planex_my_rooms', 'my_rooms', 'planex_joined_groups', 'user_rooms'].forEach(key => {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) {
            const updated = list.filter(r => String(r.code || r.room_code || r.groupCode || r.id || '').trim().toUpperCase() !== activeCode);
            localStorage.setItem(key, JSON.stringify(updated));
          }
        }
      } catch (e) {}
    });

    localStorage.removeItem('planex_active_group_code');
    localStorage.removeItem('active_room');
    localStorage.removeItem('planex_active_room');
    localStorage.removeItem('planex_user_group_data');
    localStorage.removeItem(`planex_group_cache_${activeCode}`);
    localStorage.removeItem(`planex_group_roster_${activeCode}`);

    fetch(`${API_BASE_URL}/api/rooms/delete.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        room_code: activeCode || targetGroup?.code || targetGroup?.groupCode,
        user_id: userId,
        phone: phone,
        creator_id: userId
      })
    }).catch(() => {});

    if (leaderboardService && typeof leaderboardService.deleteGroup === 'function') {
      await leaderboardService.deleteGroup(activeCode);
    }

    if (leaderboardService && typeof leaderboardService.setActiveGroupCode === 'function') {
      leaderboardService.setActiveGroupCode(null);
    }

    window.lastLeaderboardResult = null;
    showLeaderboardToast(`🗑️ گروه «${groupName}» با موفقیت به طور کامل حذف شد.`);

    if (leaderboardService && typeof leaderboardService.fetchMyRooms === 'function') {
      await leaderboardService.fetchMyRooms(true).catch(() => {});
    }

    window.handleBackToGroupList();
  } catch (err) {
    console.error('Delete group failed:', err);
    alert('خطا در حذف کامل گروه: ' + err.message);
  }
};

// Global Handler: Approve Pending Join Request
window.handleApproveRequestAction = async (groupCode, targetUserId) => {
  try {
    const res = await leaderboardService.approveMember(groupCode, targetUserId);
    showLeaderboardToast(res.message || '✅ کاربر با موفقیت به گروه اضافه شد', true);
    window.lastLeaderboardResult = null;
    window.isFetchingPendingRequests = false;
    const pendingList = await leaderboardService.fetchPendingRequests(groupCode);
    window.groupPendingRequests = pendingList;
    if (window.renderApp) window.renderApp();
  } catch (err) {
    console.error('Error approving member:', err);
    showLeaderboardToast('خطا در تایید ورود: ' + err.message, false);
  }
};

// Global Handler: Reject Pending Join Request
window.handleRejectRequestAction = async (groupCode, targetUserId) => {
  try {
    const res = await leaderboardService.rejectMember(groupCode, targetUserId);
    showLeaderboardToast(res.message || '❌ درخواست عضویت رد شد', false);
    window.lastLeaderboardResult = null;
    window.isFetchingPendingRequests = false;
    const pendingList = await leaderboardService.fetchPendingRequests(groupCode);
    window.groupPendingRequests = pendingList;
    if (window.renderApp) window.renderApp();
  } catch (err) {
    console.error('Error rejecting member:', err);
    showLeaderboardToast('خطا در رد درخواست: ' + err.message, false);
  }
};

// Global Handler: Copy Group Code
window.handleCopyGroupCode = async (code) => {
  if (!code) return;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(code);
    } else {
      prompt('کد گروه را کپی کنید:', code);
    }
    showLeaderboardToast(`📋 کد گروه (${code}) در حافظه کپی شد!`);
  } catch (e) {
    prompt('کد گروه را کپی کنید:', code);
  }
};

// Global Handler: Share Group Invite
window.handleShareGroupInvite = async (code, groupName) => {
  const name = groupName || 'رقابت مطالعه';
  const inviteUrl = `${window.location.origin}${window.location.pathname}?group=${encodeURIComponent(code)}`;
  const shareText = `🔥 دعوت به گروه رقابت مطالعه «${name}» در PlanEx\n\n🔑 کد ورود به گروه: ${code}\n🔗 لینک ورود مستقیم:\n${inviteUrl}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: `گروه مطالعه «${name}»`, text: shareText, url: inviteUrl });
      return;
    } catch (e) {}
  }

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareText);
      showLeaderboardToast(`🔗 متن و لینک دعوت گروه «${name}» کپی شد!`);
    } else {
      prompt('متن دعوت را کپی کنید:', shareText);
    }
  } catch (e) {
    prompt('متن دعوت را کپی کنید:', shareText);
  }
};

// Global Handler: Live Refresh Button
window.handleLiveLeaderboardRefresh = async () => {
  if (window.isLeaderboardRefreshing) return;
  window.isLeaderboardRefreshing = true;
  if (window.renderApp) window.renderApp();

  try {
    const fetchRes = await leaderboardService.fetchLeaderboard(null, true);
    window.lastLeaderboardResult = fetchRes;
    showLeaderboardToast('🔄 جدول رتبه‌بندی گروه با موفقیت به‌روزرسانی شد.', true, 2000);
  } catch (err) {
    console.error('Live refresh failed:', err);
  } finally {
    window.isLeaderboardRefreshing = false;
    if (window.renderApp) window.renderApp();
  }
};

// Global Handler: Manual Sync Button
window.handleManualLeaderboardSync = async () => {
  if (window.isLeaderboardSyncing) return;
  window.isLeaderboardSyncing = true;
  if (window.renderApp) window.renderApp();

  try {
    const result = await leaderboardService.syncUserScore(true);
    const fetchRes = await leaderboardService.fetchLeaderboard(null, true);
    window.lastLeaderboardResult = fetchRes;

    const ok = result && result.success && result.serverConfirmed;
    if (ok) {
      showLeaderboardToast(`✅ کارنامه شما در گروه ثبت شد${result.rank ? ` — رتبه ${result.rank}` : ''}`, true, 3500);
    } else {
      showLeaderboardToast(`⚠️ اطلاعات به صورت محلی در گروه ذخیره شد.`, false, 4500);
    }
  } catch (err) {
    console.error('Manual sync failed:', err);
    showLeaderboardToast('❌ خطا در برقراری ارتباط با سرور.', false, 3500);
  } finally {
    window.isLeaderboardSyncing = false;
    if (window.renderApp) window.renderApp();
  }
};

// Bind DOM Events
export function bindLeaderboardEvents() {
  try {
    const searchInput = document.getElementById('input-leaderboard-search');
    if (searchInput) {
      searchInput.oninput = (e) => {
        try {
          window.leaderboardFilterQuery = e.target.value;
          const query = (e.target.value || '').toLowerCase().trim();
          const rows = document.querySelectorAll('.leaderboard-row');
          rows.forEach(row => {
            const text = (row.dataset.search || '').toLowerCase();
            if (!query || text.includes(query)) {
              row.style.display = '';
            } else {
              row.style.display = 'none';
            }
          });
        } catch (err) {
          console.error('Error in leaderboard search filter:', err);
        }
      };
    }

    // Event delegation for Group Navigation & Action buttons
    if (!window._leaderboardEventDelegationBound) {
      window._leaderboardEventDelegationBound = true;
      document.addEventListener('click', (e) => {
        const backBtn = e.target.closest('#btn-back-to-groups, .btn-back-groups, [data-action="back-to-groups"]');
        if (backBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (typeof window.planexNavigateBackToGroups === 'function') {
            window.planexNavigateBackToGroups(e);
          }
          return;
        }

        const approveBtn = e.target.closest('.btn-approve-request');
        if (approveBtn) {
          e.preventDefault();
          const groupId = approveBtn.getAttribute('data-group-id') || approveBtn.dataset.groupId;
          const userId = approveBtn.getAttribute('data-user-id') || approveBtn.dataset.userId;
          if (groupId && userId && typeof window.handleApproveRequestAction === 'function') {
            window.handleApproveRequestAction(groupId, userId);
          }
          return;
        }

        const rejectBtn = e.target.closest('.btn-reject-request');
        if (rejectBtn) {
          e.preventDefault();
          const groupId = rejectBtn.getAttribute('data-group-id') || rejectBtn.dataset.groupId;
          const userId = rejectBtn.getAttribute('data-user-id') || rejectBtn.dataset.userId;
          if (groupId && userId && typeof window.handleRejectRequestAction === 'function') {
            window.handleRejectRequestAction(groupId, userId);
          }
          return;
        }
      });
    }
  } catch (err) {
    console.error('Error binding leaderboard events:', err);
  }
}

// Helper to check if current user is admin/creator of group
function checkIsGroupOwner(grpData, userProfile) {
  if (!grpData) return false;
  if (grpData.isOwner || grpData.is_owner || grpData.isCreator || grpData.is_creator) return true;

  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || '{}');
  } catch(e) {}

  const normPh = (p) => {
    if (!p) return '';
    let clean = String(p).replace(/[^0-9]/g, '');
    if (clean.startsWith('98') && clean.length >= 12) clean = '0' + clean.slice(2);
    else if (clean.length === 10 && clean.startsWith('9')) clean = '0' + clean;
    return clean;
  };

  const userPhones = [
    normPh(authUser?.phone),
    normPh(authUser?.phone_number),
    normPh(userProfile?.phone),
    normPh(localStorage.getItem('planex_user_phone'))
  ].filter(Boolean);

  const userIds = [
    String(authUser?.id || ''),
    String(authUser?.telegram_id || ''),
    String(userProfile?.userId || ''),
    String(localStorage.getItem('planex_leaderboard_user_id') || '')
  ].filter(Boolean);

  const creatorPhones = [
    normPh(grpData.creator_phone),
    normPh(grpData.admin_phone),
    normPh(grpData.owner_phone)
  ].filter(Boolean);

  const creatorIds = [
    String(grpData.creator_id || ''),
    String(grpData.admin_id || ''),
    String(grpData.owner_id || ''),
    String(grpData.userId || '')
  ].filter(Boolean);

  if (userPhones.some(p => creatorPhones.includes(p))) return true;
  if (userIds.some(id => creatorIds.includes(id))) return true;

  // Additional check for legacy groups (e.g., PLX-4133):
  // Check if current user matches the rank 1 member (creator) in the roster
  if (window.lastLeaderboardResult && Array.isArray(window.lastLeaderboardResult.roster) && window.lastLeaderboardResult.roster.length > 0) {
    const firstMember = window.lastLeaderboardResult.roster[0];
    if (firstMember) {
      const firstUserId = String(firstMember.userId || firstMember.user_id || '');
      const firstPhone = normPh(firstMember.phone || firstMember.user_phone);
      if ((firstUserId && userIds.includes(firstUserId)) || (firstPhone && userPhones.includes(firstPhone))) {
        return true;
      }
    }
  }

  return false;
}

// Helper: Render Member Avatar or Handsome Letter Circle
function renderMemberAvatarHTML(item, size = 36) {
  const isUserItem = Boolean(item?.isUser || item?.isCurrentUser || item?.is_user);
  const avatarUrl = item?.avatar_url || item?.avatarUrl || item?.avatar || item?.photo_url || (isUserItem ? (localStorage.getItem('planex_user_avatar') || '') : '') || '';
  const nickname = String(item?.nickname || item?.name || 'کاربر').trim();
  const firstChar = (nickname.charAt(0) || '👤').toUpperCase();
  const escChar = String(firstChar).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const gradients = [
    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)'
  ];
  let charCodeSum = 0;
  for (let i = 0; i < nickname.length; i++) charCodeSum += nickname.charCodeAt(i);
  const grad = gradients[charCodeSum % gradients.length];

  if (avatarUrl && (avatarUrl.startsWith('http') || avatarUrl.startsWith('data:image'))) {
    return `
      <div style="position: relative; width: ${size}px; min-width: ${size}px; max-width: ${size}px; height: ${size}px; min-height: ${size}px; max-height: ${size}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; display: inline-flex; align-items: center; justify-content: center; border-radius: 50% !important; overflow: hidden !important;">
        <img src="${avatarUrl}" style="width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; object-fit: cover !important; border: 1.5px solid rgba(255,255,255,0.25); background: #1f2029;" 
          onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div style="display: none; width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${grad}; color: white; font-weight: 800; font-size: ${Math.max(10, Math.round(size * 0.42))}px; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
          ${escChar}
        </div>
      </div>
    `;
  }

  return `
    <div style="width: ${size}px; min-width: ${size}px; max-width: ${size}px; height: ${size}px; min-height: ${size}px; max-height: ${size}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${grad}; color: white; font-weight: 800; font-size: ${Math.max(10, Math.round(size * 0.42))}px; display: inline-flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
      ${escChar}
    </div>
  `;
}

export function renderLeaderboardView(appState = null) {
  try {
    let authUser = null;
    try {
      authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
    } catch(e) {}
    
    let isGuest = true;
    if (authUser && (authUser.phone || authUser.phone_number || authUser.id || authUser.telegram_id)) {
      isGuest = false;
    }
    
    if (isGuest) {
      return `
        <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 90px; direction: rtl;">
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 1.25rem; font-weight: 900; color: #f8fafc; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
              <span>🏆 تالار رقابت</span>
            </h2>
            <p style="font-size: 0.78rem; color: #8e8e9c; margin: 0;">رقابت آنلاین در گروه‌های مطالعه خصوصی</p>
          </div>
          
          <div style="padding: 24px 20px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); background: rgba(234, 179, 8, 0.03); border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; gap: 16px;">
            <div style="width: 70px; height: 70px; border-radius: 20px; background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; box-shadow: 0 0 30px rgba(234, 179, 8, 0.15);">
              🔒
            </div>
            
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #facc15;">
              تالار رقابت و گروه‌های مطالعه اختصاصی اعضا است
            </h3>
            
            <p style="margin: 0; font-size: 0.8rem; color: #a1a1aa; line-height: 1.7; max-width: 400px;">
              برای مشاهده جدول رتبه‌بندی، رقابت با دیگران، و ساخت یا پیوستن به گروه‌های درسی، لطفاً ابتدا وارد حساب کاربری خود شوید.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 300px; margin-top: 10px;">
              <button onclick="if(window.openLoginModal) window.openLoginModal(); else if (window.appState) { window.appState.activeModal = 'login'; window.renderApp(); }" style="background: #7c3aed; color: #fff; padding: 12px 20px; border-radius: 14px; font-size: 0.85rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;">
                🔑 ورود به حساب کاربری
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const userProfile = (leaderboardService && typeof leaderboardService.getUserProfile === 'function')
      ? leaderboardService.getUserProfile()
      : { nickname: 'داوطلب پرتلاش', target: 'کنکور سراسری ۱۴۰۶', userId: 'local_user' };

    const userStats = (leaderboardService && typeof leaderboardService.getTodayStats === 'function')
      ? leaderboardService.getTodayStats()
      : { studyMinutes: 0, studyHours: 0, testCount: 0, subjects: [], gregorianDate: new Date().toISOString().split('T')[0], jalaliDateStr: '' };

    const userGroups = (leaderboardService && typeof leaderboardService.getUserGroups === 'function')
      ? leaderboardService.getUserGroups()
      : [];

    const activeGroupCode = (leaderboardService && typeof leaderboardService.getActiveGroupCode === 'function')
      ? leaderboardService.getActiveGroupCode()
      : null;

    const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const toPersian = (num) => String(num).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

    window.lastPublicRoomsFetchTime = window.lastPublicRoomsFetchTime || 0;
    window.lastEarlyBirdFetchTime = window.lastEarlyBirdFetchTime || 0;
    window.lastLeaderboardFetchTime = window.lastLeaderboardFetchTime || 0;
    window.lastPendingRequestsFetchTime = window.lastPendingRequestsFetchTime || 0;
    window.lastUserGroupsFetchTime = window.lastUserGroupsFetchTime || 0;

    const FIVE_MIN_MS = 5 * 60 * 1000;
    const nowTs = Date.now();

    // Auto-fetch user groups from database/backend if empty or periodic sync
    if ((userGroups.length === 0 || nowTs - window.lastUserGroupsFetchTime >= 2 * 60 * 1000) && !window.isFetchingUserGroupsBg && (userProfile.phone || userProfile.userId) && leaderboardService && typeof leaderboardService.fetchUserGroups === 'function') {
      window.lastUserGroupsFetchTime = nowTs;
      window.isFetchingUserGroupsBg = true;
      leaderboardService.fetchUserGroups(false).then(rooms => {
        window.isFetchingUserGroupsBg = false;
        if (Array.isArray(rooms) && rooms.length > 0 && userGroups.length === 0) {
          if (!window.appState?.activeModal && window.renderApp) window.renderApp();
        }
      }).catch(() => { window.isFetchingUserGroupsBg = false; });
    }

    // Fetch real public rooms in background for Stage 1 (Throttled to once every 5 minutes)
    if (!activeGroupCode && (nowTs - window.lastPublicRoomsFetchTime >= FIVE_MIN_MS || !window.lastPublicRoomsList) && !window.isFetchingPublicRoomsBg && leaderboardService && typeof leaderboardService.fetchPublicRooms === 'function') {
      window.lastPublicRoomsFetchTime = nowTs;
      window.isFetchingPublicRoomsBg = true;
      leaderboardService.fetchPublicRooms().then(rooms => {
        window.lastPublicRoomsList = Array.isArray(rooms) ? rooms : [];
        window.isFetchingPublicRoomsBg = false;
        if (!window.appState?.activeModal && !leaderboardService.getActiveGroupCode()) {
          if (window.renderApp) window.renderApp();
        }
      }).catch(() => { window.isFetchingPublicRoomsBg = false; });
    }

    // Fetch Early Birds in background (Throttled to once every 5 minutes)
    if ((nowTs - window.lastEarlyBirdFetchTime >= FIVE_MIN_MS || !window.lastEarlyBirdList) && !window.isFetchingEarlyBirds && leaderboardService && typeof leaderboardService.fetchEarlyBirds === 'function') {
      window.lastEarlyBirdFetchTime = nowTs;
      window.isFetchingEarlyBirds = true;
      leaderboardService.fetchEarlyBirds().then(res => {
        window.isFetchingEarlyBirds = false;
        if (res && Array.isArray(res.list)) {
          window.lastEarlyBirdList = res.list;
          if (!window.appState?.activeModal && window.renderApp) window.renderApp();
        }
      }).catch(() => { window.isFetchingEarlyBirds = false; });
    }

    const realPublicRooms = (window.lastPublicRoomsList || []).filter(pr => {
      const pCode = pr.code || pr.groupCode;
      return pCode && !userGroups.some(ug => (ug.code || ug.groupCode) === pCode);
    });

    const earlyBirdsList = window.lastEarlyBirdList || [];

    // Helper: Render Early Birds Roster Widget (05:00 to 08:00 AM)
    const renderEarlyBirdsWidget = (groupMembersFilter = null) => {
      let filteredEarlyBirds = earlyBirdsList;
      if (groupMembersFilter && Array.isArray(groupMembersFilter) && groupMembersFilter.length > 0) {
        const memberUserIds = groupMembersFilter.map(m => m.userId || m.user_id);
        filteredEarlyBirds = earlyBirdsList.filter(eb => memberUserIds.includes(eb.userId || eb.user_id));
      }

      return `
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.25rem;">🌅</span>
              <h3 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: #ffffff;">باشگاه سحرخیزان (۰۵:۰۰ تا ۰۸:۰۰ صبح)</h3>
            </div>
            <span style="font-size: 0.72rem; color: #f59e0b; background: rgba(245, 158, 11, 0.12); padding: 2px 8px; border-radius: 8px; font-weight: 700;">
              ☀️ ۰۵:۰۰ تا ۰۸:۰۰
            </span>
          </div>

          ${filteredEarlyBirds.length === 0 ? `
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; text-align: center; color: #8e8e9c; font-size: 0.8rem;">
              ☀️ هنوز سحرخیزی برای امروز ثبت نشده است؛ اولین نفر باشید!
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
              ${filteredEarlyBirds.map(eb => `
                <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                    <span style="font-size: 1rem;">☀️</span>
                    <div style="overflow: hidden;">
                      <strong style="font-size: 0.82rem; color: #e4e4e7; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${esc(eb.nickname || eb.name || 'سحرخیز')}</strong>
                      <span style="font-size: 0.68rem; color: #8e8e9c;">${esc(eb.target || '')}</span>
                    </div>
                  </div>
                  <span style="font-size: 0.76rem; font-weight: 800; color: #f59e0b; font-family: 'Outfit', monospace; background: rgba(245, 158, 11, 0.15); padding: 2px 6px; border-radius: 6px;">
                    ${esc(toPersian(eb.wakeTime || '۰۵:۰۰'))}
                  </span>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    };

    // ────────────────────────────────────────────────────────────
    // STAGE 1: Default Group Directory & Cards List View
    // ────────────────────────────────────────────────────────────
    if (!activeGroupCode) {
      return `
        <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 110px; direction: rtl;">

          <!-- Header Title & Action Buttons -->
          <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 900; color: #f8fafc; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
                <span>🏆</span>
                <span>تالار رقابت و گروه‌های مطالعه</span>
              </h2>
              <p style="font-size: 0.78rem; color: #8e8e9c; margin: 0;">لیست گروه‌های درسی شما و گروه‌های عمومی برای پیوستن</p>
            </div>

            <!-- Top Action Buttons: Edit Profile, Create New Group & Join with Code -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <button type="button" onclick="window.openEditProfileModal()" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: rgba(124, 58, 237, 0.18); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.35); border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <span>✏️</span>
                <span>ویرایش مشخصات</span>
              </button>

              <button type="button" onclick="event.preventDefault(); event.stopPropagation(); if (window.openCreateGroupModal) { window.openCreateGroupModal('create'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('create'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" 
                      class="btn-primary" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);">
                <span>➕</span>
                <span>ساخت گروه جدید</span>
              </button>

              <button type="button" onclick="event.preventDefault(); event.stopPropagation(); if (window.openCreateGroupModal) { window.openCreateGroupModal('join'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('join'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: #1f2029; color: #e4e4e7; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <span>🔍</span>
                <span>پیوستن با کد</span>
              </button>
            </div>
          </div>

          <!-- 🌅 Early Birds Section (باشگاه سحرخیزان عمومی) -->
          ${renderEarlyBirdsWidget(null)}

          <!-- ================= SECTION 1: گروه‌های من ================= -->
          <div style="margin-bottom: 28px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
              <div style="width: 8px; height: 18px; background: #7c3aed; border-radius: 4px;"></div>
              <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">👥 گروه‌های من</h3>
              <span style="font-size: 0.74rem; background: rgba(124, 58, 237, 0.15); color: #c4b5fd; padding: 2px 8px; border-radius: 8px; font-weight: 700;">
                ${toPersian(userGroups.length)} گروه
              </span>
            </div>

            ${userGroups.length === 0 ? `
              <div style="background: #16171d; border: 1px dashed rgba(255,255,255,0.12); border-radius: 18px; padding: 28px 20px; text-align: center;">
                <div style="font-size: 2.2rem; margin-bottom: 10px;">👥</div>
                <h4 style="margin: 0 0 6px 0; font-size: 0.95rem; color: #e4e4e7; font-weight: 800;">شما هنوز در هیچ گروهی عضو نیستید</h4>
                <p style="margin: 0 0 16px 0; font-size: 0.8rem; color: #8e8e9c; line-height: 1.6;">
                  با استفاده از دکمه‌های بالا، یک گروه اختصاصی جدید بسازید یا با کد ۶ رقمی وارد شوید.
                </p>
                <button type="button" onclick="if (window.openCreateGroupModal) { window.openCreateGroupModal('create'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('create'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" class="btn-primary" style="padding: 9px 18px; font-size: 0.8rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                  <span>➕ ساخت اولین گروه</span>
                </button>
              </div>
            ` : `
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${userGroups.map(grp => {
                  const code = grp.code || grp.groupCode;
                  const name = grp.name || grp.groupName || `گروه ${code}`;
                  const isOwner = checkIsGroupOwner(grp, userProfile);
                  const badgeText = isOwner ? '👑 مدیر' : '👤 عضو';
                  const badgeBg = isOwner ? 'rgba(245, 158, 11, 0.18)' : 'rgba(16, 185, 129, 0.15)';
                  const badgeColor = isOwner ? '#f59e0b' : '#10b981';
                  const badgeBorder = isOwner ? 'rgba(245, 158, 11, 0.4)' : 'rgba(16, 185, 129, 0.3)';
                  
                  const roster = (leaderboardService && typeof leaderboardService.getGroupRoster === 'function') ? leaderboardService.getGroupRoster(code) : [];
                  const memberCount = (roster && roster.length > 0) ? roster.length : (grp.membersCount || 1);
                  const isPending = Boolean(!isOwner && (grp.status === 'pending' || grp.isPending === true));

                  return `
                    <div onclick="window.handleSwitchGroup('${code}');" 
                         class="glass-panel" 
                         style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease; gap: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                          🏆
                        </div>
                        <div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <strong style="font-size: 0.95rem; font-weight: 800; color: #f8fafc;">${esc(name)}</strong>
                            <span style="font-size: 0.68rem; background: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeBorder}; padding: 2px 7px; border-radius: 6px; font-weight: 800;">
                              ${badgeText}
                            </span>
                          </div>
                          <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                            <span style="font-family: 'Outfit', monospace; font-weight: 700; color: #cbd5e1;">کد: ${esc(code)}</span>
                            <span>•</span>
                            <span>👥 ${toPersian(memberCount)} عضو</span>
                          </div>
                        </div>
                      </div>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.78rem; font-weight: 800; color: ${isPending ? '#facc15' : '#7c3aed'}; background: ${isPending ? 'rgba(234, 179, 8, 0.1)' : 'rgba(124, 58, 237, 0.1)'}; padding: 6px 12px; border-radius: 10px; border: 1px solid ${isPending ? 'rgba(234, 179, 8, 0.25)' : 'rgba(124, 58, 237, 0.2)'};">
                          ${isPending ? '⏳ وضعیت در انتظار' : 'ورود به تالار ⬅️'}
                        </span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- ================= SECTION 2: سایر گروه‌های عمومی فعال (واقعی) ================= -->
          ${realPublicRooms.length > 0 ? `
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 8px; height: 18px; background: #3b82f6; border-radius: 4px;"></div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">🌐 سایر گروه‌های عمومی فعال</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${realPublicRooms.map(grp => `
                  <div class="glass-panel" style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                        🌐
                      </div>
                      <div>
                        <strong style="font-size: 0.92rem; font-weight: 800; color: #f8fafc; display: block;">${esc(grp.title || grp.name)}</strong>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                          <span>🌐 عمومی</span>
                          <span>•</span>
                          <span>👥 ${toPersian(grp.member_count || 1)} عضو</span>
                          <span>•</span>
                          <span style="font-family: 'Outfit', monospace; color: #a1a1aa;">کد: ${esc(grp.code)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button type="button" onclick="window.handleJoinGroupSubmit('${grp.code}');" style="padding: 7px 14px; font-size: 0.78rem; font-weight: 800; background: #3b82f6; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                        <span>🔑</span>
                        <span>پیوستن به گروه</span>
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
        ${window.appState?.activeModal === 'editProfile' ? renderEditProfileModal() : ''}
      `;
    }

    // ────────────────────────────────────────────────────────────
    // STAGE 2: Inside Specific Dedicated Group View
    // ────────────────────────────────────────────────────────────
    const groupCode = String(activeGroupCode).trim().toUpperCase();
    const userGroup = userGroups.find(g => (g.code || g.groupCode) === groupCode) || (leaderboardService && typeof leaderboardService.getActiveGroup === 'function' ? leaderboardService.getActiveGroup() : null) || { code: groupCode, name: `گروه ${groupCode}` };
    const groupName = userGroup.name || userGroup.groupName || `گروه ${groupCode}`;
    const isGroupOwner = checkIsGroupOwner(userGroup, userProfile);
    const isPendingMember = Boolean(!isGroupOwner && userGroup && userGroup.status === 'pending');
    const isGroupPrivate = Boolean(userGroup && (userGroup.is_private === 1 || userGroup.type === 'private' || userGroup.isPrivate));

    // Fetch leaderboard data for this group
    if (!window.lastLeaderboardResult || window.lastLeaderboardResult.groupCode !== groupCode) {
      if (leaderboardService && typeof leaderboardService.getCachedLeaderboard === 'function') {
        window.lastLeaderboardResult = leaderboardService.getCachedLeaderboard(userStats.gregorianDate, groupCode);
      }
    }

    if ((nowTs - window.lastLeaderboardFetchTime >= FIVE_MIN_MS || !window.lastLeaderboardResult || window.lastLeaderboardResult.groupCode !== groupCode) && !window.isFetchingLeaderboardBg && leaderboardService && typeof leaderboardService.fetchLeaderboard === 'function') {
      window.lastLeaderboardFetchTime = nowTs;
      window.isFetchingLeaderboardBg = true;
      leaderboardService.fetchLeaderboard(userStats.gregorianDate, true, groupCode).then(res => {
        if (res) window.lastLeaderboardResult = res;
        window.isFetchingLeaderboardBg = false;
        if (!window.appState?.activeModal) {
          if (window.renderApp) window.renderApp();
        }
      }).catch(() => { window.isFetchingLeaderboardBg = false; });
    }

    // Auto-fetch pending requests for admin/creator when stage 2 opens (Throttled to once every 5 minutes)
    if (isGroupOwner && (nowTs - window.lastPendingRequestsFetchTime >= FIVE_MIN_MS || !window.groupPendingRequests) && !window.isFetchingPendingRequests && leaderboardService && typeof leaderboardService.fetchPendingRequests === 'function') {
      window.lastPendingRequestsFetchTime = nowTs;
      window.isFetchingPendingRequests = true;
      leaderboardService.fetchPendingRequests(groupCode).then(list => {
        window.isFetchingPendingRequests = false;
        if (Array.isArray(list)) {
          window.groupPendingRequests = list;
          if (!window.appState?.activeModal && window.renderApp) window.renderApp();
        }
      }).catch(() => { window.isFetchingPendingRequests = false; });
    }

    window.leaderboardTimeFilter = 'today';
    const activeTimeFilter = 'today';
    const userWeeklyStats = (leaderboardService && typeof leaderboardService.getWeeklyStats === 'function')
      ? leaderboardService.getWeeklyStats()
      : null;

    // Universal group-wide member aggregation across all sources
    const memberMap = new Map();

    // 1. Group persistent roster
    const roster = (leaderboardService && typeof leaderboardService.getGroupRoster === 'function')
      ? leaderboardService.getGroupRoster(groupCode)
      : [];
    if (Array.isArray(roster)) {
      roster.forEach(m => {
        if (m && (m.userId || m.id)) {
          const id = String(m.userId || m.id);
          memberMap.set(id, { ...m, userId: id });
        }
      });
    }

    // 2. userGroup.members
    if (Array.isArray(userGroup?.members)) {
      userGroup.members.forEach(m => {
        if (m && (m.userId || m.id)) {
          const id = String(m.userId || m.id);
          const existing = memberMap.get(id) || {};
          memberMap.set(id, { ...existing, ...m, userId: id });
        }
      });
    }

    // 3. Cached / Fetched leaderboard result
    const rawLeaderboard = (window.lastLeaderboardResult && (window.lastLeaderboardResult.leaderboard || window.lastLeaderboardResult.list)) || [];
    if (Array.isArray(rawLeaderboard)) {
      rawLeaderboard.forEach(m => {
        if (m && (m.userId || m.id)) {
          const id = String(m.userId || m.id);
          const existing = memberMap.get(id) || {};
          memberMap.set(id, { ...existing, ...m, userId: id });
        }
      });
    }

    // 4. Current user live stats overlay
    if (userProfile && userProfile.userId) {
      const myId = String(userProfile.userId);
      const existing = memberMap.get(myId) || {};
      const activeAvatar = userProfile.avatar_url || userProfile.avatar || userProfile.photo_url || existing.avatarUrl || '';
      const activeName = userProfile.nickname || userProfile.name || existing.nickname || 'شما';
      const activeTarget = userProfile.target || existing.target || 'کنکور سراسری';

      memberMap.set(myId, {
        ...existing,
        userId: myId,
        isUser: true,
        isCurrentUser: true,
        nickname: activeName,
        name: activeName,
        target: activeTarget,
        avatarUrl: activeAvatar,
        avatar_url: activeAvatar,
        avatar: activeAvatar,
        photo_url: activeAvatar,
        studyMinutes: Math.max(Number(existing.studyMinutes || 0), Number(userStats?.studyMinutes || 0)),
        testCount: Math.max(Number(existing.testCount || 0), Number(userStats?.testCount || 0)),
        weeklyStudyMinutes: Math.max(Number(existing.weeklyStudyMinutes || 0), Number(userWeeklyStats?.studyMinutes || 0), Number(userStats?.studyMinutes || 0)),
        weeklyTestCount: Math.max(Number(existing.weeklyTestCount || 0), Number(userWeeklyStats?.testCount || 0), Number(userStats?.testCount || 0)),
        isOwner: Boolean(isGroupOwner || existing.isOwner)
      });
    }

    const candidateMembers = Array.from(memberMap.values());
    if (userGroup) {
      userGroup.members = candidateMembers;
    }

    // Universally calculate stats, score = (minutes * 60) + (tests * 10), and re-assign ranks
    let rawList;
    if (leaderboardService && typeof leaderboardService.aggregateAndRankMembers === 'function') {
      rawList = leaderboardService.aggregateAndRankMembers(candidateMembers, 'today');
    } else {
      rawList = candidateMembers.map((item) => {
        const displayStudyMins = Number(item.studyMinutes || item.study_minutes || 0);
        const displayTestCount = Number(item.testCount || item.test_count || 0);
        const score = (displayStudyMins * 60) + (displayTestCount * 10);
        return {
          ...item,
          displayStudyMins,
          displayTestCount,
          score
        };
      }).sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.displayStudyMins !== a.displayStudyMins) return b.displayStudyMins - a.displayStudyMins;
        return b.displayTestCount - a.displayTestCount;
      }).map((item, idx) => ({
        ...item,
        rank: idx + 1
      }));
    }

    // Overlay current user display profile details
    rawList = rawList.map(item => {
      const isUser = Boolean(item.isUser || item.isCurrentUser || item.userId === userProfile.userId || (userProfile.phone && item.phone === userProfile.phone));
      if (isUser) {
        const activeAvatar = userProfile.avatar_url || userProfile.avatar || userProfile.photo_url || item.avatar_url || item.avatarUrl;
        const activeName = userProfile.nickname || userProfile.name || item.nickname;
        const activeTarget = userProfile.target || item.target;
        return {
          ...item,
          isUser: true,
          isCurrentUser: true,
          nickname: activeName,
          name: activeName,
          target: activeTarget,
          avatar_url: activeAvatar,
          avatarUrl: activeAvatar,
          avatar: activeAvatar,
          photo_url: activeAvatar
        };
      }
      return item;
    });

    const isInitialLoading = (!window.lastLeaderboardResult && window.isFetchingLeaderboardBg);
    const pendingRequests = window.groupPendingRequests || [];

    const top1 = rawList[0] || null;
    const top2 = rawList[1] || null;
    const top3 = rawList[2] || null;

    // 🏆 Helper: League Tier Assigner
    const getLeagueTierInfo = (studyMins = 0, rank = 999, totalCount = 1) => {
      const hours = studyMins / 60;
      if (rank === 1 || hours >= 35) {
        return { name: 'الماس', icon: '💎', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)', border: 'rgba(56, 189, 248, 0.35)' };
      } else if (rank <= 3 || hours >= 22) {
        return { name: 'طلا', icon: '🥇', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.35)' };
      } else if (rank <= Math.max(4, Math.ceil(totalCount * 0.5)) || hours >= 10) {
        return { name: 'نقره', icon: '🥈', color: '#cbd5e1', bg: 'rgba(203, 213, 225, 0.15)', border: 'rgba(203, 213, 225, 0.35)' };
      } else {
        return { name: 'برنز', icon: '🥉', color: '#cd7f32', bg: 'rgba(205, 127, 50, 0.15)', border: 'rgba(205, 127, 50, 0.35)' };
      }
    };

    // ⏱️ Helper: Weekly Countdown Timer (Until Jalali Friday 23:59:59)
    const getWeeklyCountdownText = () => {
      const now = new Date();
      const dayOfWeek = (now.getDay() + 1) % 7; // 0=Sat, 6=Fri
      const daysLeft = 6 - dayOfWeek;
      const hoursLeft = 23 - now.getHours();
      const minsLeft = 59 - now.getMinutes();

      if (daysLeft > 0) {
        return `${toPersian(daysLeft)} روز و ${toPersian(hoursLeft)} ساعت`;
      } else {
        return `${toPersian(hoursLeft)} ساعت و ${toPersian(minsLeft)} دقیقه`;
      }
    };

    // ⚡ 1. Micro-Rivalry Card Renderer
    const renderMicroRivalryCard = () => {
      if (!rawList || rawList.length === 0) return '';

      const userIdx = rawList.findIndex(item => item.isUser || item.isCurrentUser || item.userId === userProfile.userId || (userProfile.phone && item.phone === userProfile.phone));

      if (userIdx < 0) {
        return `
          <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(59, 130, 246, 0.12) 100%); border: 1.5px solid rgba(168, 85, 247, 0.4); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                  ⚡
                </div>
                <div>
                  <strong style="font-size: 0.94rem; color: #ffffff; font-weight: 800;">هنوز کارنامه امروز خود را در جدول ثبت نکرده‌اید! 🔥</strong>
                  <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                    با همگام‌سازی کارنامه یا شروع پارت مطالعه، وارد جدول رقابت شوید.
                  </div>
                </div>
              </div>
              <button onclick="window.handleManualLeaderboardSync()" style="background: #7c3aed; color: white; border: none; padding: 8px 16px; border-radius: 11px; font-weight: 800; font-size: 0.78rem; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>🔄</span>
                <span>ثبت کارنامه من</span>
              </button>
            </div>
          </div>
        `;
      }

      const userRank = userIdx + 1;
      const userItem = rawList[userIdx];

      if (userRank === 1) {
        const chaser = rawList[1] || null;
        const leadMins = chaser ? Math.max(0, Math.round((userItem.displayStudyMins || 0) - (chaser.displayStudyMins || 0))) : 0;
        return `
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(234, 179, 8, 0.12) 100%); border: 1.5px solid rgba(245, 158, 11, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                  👑
                </div>
                <div>
                  <strong style="font-size: 0.96rem; color: #fbbf24; font-weight: 900;">شما در صدر جدول رقابت هستید! 🌟</strong>
                  <div style="font-size: 0.75rem; color: #fde68a; margin-top: 3px;">
                    ${chaser ? `پیشتازی با <strong style="color: #ffffff;">${formatStudyTime(leadMins)}</strong> فاصله نسبت به نفر دوم (${esc(chaser.nickname || 'رقیب')})` : 'جایگاه اول را با تداوم مطالعه حفظ کنید.'}
                  </div>
                </div>
              </div>
              <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; padding: 6px 14px; border-radius: 12px; font-weight: 900; font-size: 0.78rem;">
                🏆 رتبه ۱ گروه
              </span>
            </div>
          </div>
        `;
      }

      const rivalItem = rawList[userIdx - 1];
      const rivalRank = userRank - 1;
      const rivalName = rivalItem.nickname || rivalItem.name || 'رقیب شما';
      const diffMins = Math.max(1, Math.round((rivalItem.displayStudyMins || 0) - (userItem.displayStudyMins || 0)));

      return `
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(236, 72, 153, 0.16) 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                ⚡
              </div>
              <div>
                <strong style="font-size: 0.96rem; color: #ffffff; font-weight: 900;">تنها ${toPersian(diffMins)} دقیقه مطالعه تا گرفتن رتبه «${esc(rivalName)}»! 🔥</strong>
                <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                  فاصله شما با رتبه ${toPersian(rivalRank)} جدول: <strong style="color: #f472b6; font-weight: 800;">${formatStudyTime(diffMins)}</strong> • با ثبت پارت جدید، سبقت بگیرید!
                </div>
              </div>
            </div>

            <button onclick="if(window.openFocusModal) window.openFocusModal(); else if(window.switchTab) window.switchTab(0);"
              style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; border: none; padding: 9px 18px; border-radius: 12px; font-weight: 900; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: transform 0.15s ease;"
              onmouseenter="this.style.transform='scale(1.04)'" onmouseleave="this.style.transform='scale(1)'">
              <span>⏱️ شروع پارت و سبقت</span>
            </button>
          </div>
        </div>
      `;
    };

    // 🟢 2. Live Study Presence Ticker Renderer
    const studyingCount = rawList.filter(item => {
      const isUser = item.isUser || item.isCurrentUser || item.userId === userProfile.userId || (userProfile.phone && item.phone === userProfile.phone);
      if (isUser) {
        return (leaderboardService && typeof leaderboardService.isCurrentStudyingActive === 'function')
          ? leaderboardService.isCurrentStudyingActive()
          : Boolean(window.isUserStudyingNow ? window.isUserStudyingNow() : false);
      }
      return Boolean(leaderboardService ? leaderboardService.isMemberStudying(item) : (item.isStudying && item.lastHeartbeat && (Date.now() - item.lastHeartbeat < 15 * 60 * 1000)));
    }).length;

    const renderLivePresenceTicker = () => {
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 10px 16px; margin-bottom: 16px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block; animation: livePulse 1.5s infinite ease-in-out;"></span>
            <strong style="font-size: 0.85rem; color: #34d399; font-weight: 800;">
              🟢 ${toPersian(studyingCount)} نفر هم‌اکنون در حال مطالعه هستند
            </strong>
          </div>
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 600;">
            بروزرسانی زنده حضور اعضا
          </span>
        </div>
      `;
    };

    // 🏆 3. Weekly Countdown & League Tiers Banner
    const renderWeeklyLeagueHeader = () => {
      return `
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">زمان باقی‌مانده تا پایان لیگ هفتگی:</span>
            <strong style="font-size: 0.85rem; color: #f59e0b; font-weight: 900; font-family: 'Outfit'; background: rgba(245, 158, 11, 0.15); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              ${getWeeklyCountdownText()}
            </strong>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">💎 الماس</span>
            <span style="font-size: 0.68rem; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥇 طلا</span>
            <span style="font-size: 0.68rem; background: rgba(203, 213, 225, 0.15); color: #cbd5e1; border: 1px solid rgba(203, 213, 225, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥈 نقره</span>
            <span style="font-size: 0.68rem; background: rgba(205, 127, 50, 0.15); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥉 برنز</span>
          </div>
        </div>
      `;
    };

    const renderSubjectChips = (subjectsArr) => {
      if (!Array.isArray(subjectsArr) || subjectsArr.length === 0) {
        return `<span style="font-size: 0.72rem; color: #94a3b8; font-style: italic; opacity: 0.8;">در انتظار مطالعه</span>`;
      }
      return subjectsArr.slice(0, 4).map(sub => `
        <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 7px; border-radius: 8px; font-weight: bold; white-space: nowrap;">
          ${esc(sub)}
        </span>
      `).join(' ');
    };

    const promoCutoff = Math.max(1, Math.min(3, Math.ceil(rawList.length * 0.25)));
    const relegCutoff = Math.max(promoCutoff + 1, Math.floor(rawList.length * 0.75));

    return `
      <style>
        .main-container, .leaderboard-container {
          contain: content;
          will-change: contents;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        @keyframes livePulse {
          0% { transform: scale(0.95); opacity: 0.85; }
          50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 14px rgba(16, 185, 129, 0.8); }
          100% { transform: scale(0.95); opacity: 0.85; }
        }
        @keyframes pulseGlow {
          0% { border-color: rgba(168, 85, 247, 0.45); box-shadow: 0 0 15px rgba(124, 58, 237, 0.15); }
          50% { border-color: rgba(236, 72, 153, 0.65); box-shadow: 0 0 25px rgba(168, 85, 247, 0.35); }
          100% { border-color: rgba(168, 85, 247, 0.45); box-shadow: 0 0 15px rgba(124, 58, 237, 0.15); }
        }
      </style>

      <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 110px; direction: rtl;">

        <!-- Stage 2 Top Navigation Header -->
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 16px; margin-bottom: 18px;">
          
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 12px;">
            
            <div style="display: flex; align-items: center; gap: 10px;">
              <!-- ⬅️ Back Button to Return to Group List Directory -->
              <button type="button" id="btn-back-to-groups" class="btn-back-groups" data-action="back-to-groups" onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="padding: 8px 14px; font-size: 0.8rem; font-weight: 800; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px; z-index: 1000; position: relative; touch-action: manipulation;">
                <span>⬅️</span>
                <span>برگشت به لیست گروه‌ها</span>
              </button>

              <div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 900; color: #ffffff; display: flex; align-items: center; gap: 6px;">
                  <span>🏆</span>
                  <span>${esc(groupName)}</span>
                </h3>
                <span style="font-size: 0.72rem; color: #8e8e9c; font-family: 'Outfit', monospace; font-weight: 700;">کد گروه: ${esc(groupCode)}</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button type="button" onclick="window.handleCopyGroupCode('${groupCode}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="کپی کد">
                <span>📋</span>
                <span>کد گروه</span>
              </button>

              <button type="button" onclick="window.handleShareGroupInvite('${groupCode}', '${esc(groupName)}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="دعوت دوستان">
                <span>🔗</span>
                <span>لینک دعوت</span>
              </button>

              <!-- Member Exit & Admin Delete Buttons (Both visible for Admin) -->
              <button type="button" onclick="window.handleLeaveGroupAction('${groupCode}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="خروج از این گروه">
                <span>🚪</span>
                <span>خروج از گروه</span>
              </button>

              ${isGroupOwner ? `
                <button type="button" onclick="window.handleDeleteGroupAction('${groupCode}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="حذف کامل این گروه">
                  <span>🗑️</span>
                  <span>حذف کامل گروه</span>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Group Actions & Refresh -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <button type="button" onclick="window.openEditProfileModal()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                <span>✏️</span>
                <span>ویرایش مشخصات من</span>
              </button>
              <button type="button" onclick="window.handleManualLeaderboardSync()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                <span>🔄</span>
                <span>ثبت و همگام‌سازی کارنامه من</span>
              </button>
              <button type="button" onclick="window.handleLiveLeaderboardRefresh()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; cursor: pointer;">
                🔄 رفرش لیدربرد
              </button>
            </div>

            <div style="font-size: 0.74rem; color: #8e8e9c;">
              <span>تعداد اعضا: <strong style="color: #e4e4e7;">${toPersian(rawList.length)} نفر</strong></span>
            </div>
          </div>
        </div>

        <!-- ⚡ 1. Micro-Rivalry Card -->
        ${renderMicroRivalryCard()}

          <!-- 🟢 2. Live Presence Ticker -->
          ${renderLivePresenceTicker()}

          <!-- 🏆 3. Weekly Countdown & League Tiers -->
          ${renderWeeklyLeagueHeader()}

          <!-- 🌅 Early Birds Section for Group -->
          ${renderEarlyBirdsWidget(rawList)}

          <!-- 🏆 Leaderboard Time Filter: Today Only (Static Title) -->
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 20px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); max-width: 260px; margin-left: auto; margin-right: auto;">
            <div style="flex: 1; padding: 8px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 800; text-align: center; border: 1px solid #7c3aed; background: #7c3aed; color: #ffffff; box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);">جدول رقابت امروز ☀️</div>
          </div>

          <!-- 🏆 3D-Style Podium (Center Gold 👑, Right Silver 🥈, Left Bronze 🥉) -->
          ${(rawList.length >= 1) ? `
            ${(() => {
              const isTop1User = top1 && (top1.isUser || top1.isCurrentUser || top1.userId === userProfile.userId || (userProfile.phone && top1.phone === userProfile.phone));
              const isTop2User = top2 && (top2.isUser || top2.isCurrentUser || top2.userId === userProfile.userId || (userProfile.phone && top2.phone === userProfile.phone));
              const isTop3User = top3 && (top3.isUser || top3.isCurrentUser || top3.userId === userProfile.userId || (userProfile.phone && top3.phone === userProfile.phone));
              return `
              <div class="podium-container" style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; margin: 24px 0 28px 0; padding: 0 10px; position: relative;">
                
                <!-- Rank 2 (Right, Silver Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 2;">
                  <!-- Avatar & Badge -->
                  <div onclick="${isTop2User ? 'window.openEditProfileModal()' : ''}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${isTop2User ? 'cursor: pointer;' : ''}" title="${isTop2User ? 'ویرایش مشخصات شما' : ''}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥈</div>
                    ${renderMemberAvatarHTML(top2, 52)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cbd5e1; color: #0f172a; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۲</span>
                    ${isTop2User ? `<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>` : ''}
                  </div>

                  <strong onclick="${isTop2User ? 'window.openEditProfileModal()' : ''}" style="font-size: 0.82rem; color: ${isTop2User ? '#c4b5fd' : '#e4e4e7'}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${isTop2User ? 'cursor: pointer;' : ''}">${esc(top2?.nickname || top2?.name || '---')}</strong>
                  <span style="font-size: 0.72rem; color: #cbd5e1; font-weight: 900; margin-top: 2px;">${formatStudyTime(top2?.displayStudyMins || 0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${toPersian(top2?.displayTestCount || 0)} تست</span>

                  <!-- 3D Silver Block -->
                  <div style="width: 100%; height: 95px; background: linear-gradient(180deg, rgba(203, 213, 225, 0.25) 0%, rgba(148, 163, 184, 0.1) 100%); border: 1.5px solid rgba(203, 213, 225, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 900; color: rgba(203, 213, 225, 0.3);">2</div>
                </div>

                <!-- Rank 1 (Center, Gold Podium with Crown 👑) -->
                <div style="flex: 1; max-width: 155px; display: flex; flex-direction: column; align-items: center; z-index: 3; transform: translateY(-10px);">
                  <!-- Avatar & Crown -->
                  <div onclick="${isTop1User ? 'window.openEditProfileModal()' : ''}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${isTop1User ? 'cursor: pointer;' : ''}" title="${isTop1User ? 'ویرایش مشخصات شما' : ''}">
                    <div style="font-size: 2rem; filter: drop-shadow(0 0 10px #fbbf24); animation: bounce 2s infinite;">👑</div>
                    ${renderMemberAvatarHTML(top1, 64)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #fbbf24; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 2px 10px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">۱</span>
                    ${isTop1User ? `<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>` : ''}
                  </div>

                  <strong onclick="${isTop1User ? 'window.openEditProfileModal()' : ''}" style="font-size: 0.88rem; color: #fbbf24; text-align: center; font-weight: 900; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${isTop1User ? 'cursor: pointer;' : ''}">${esc(top1?.nickname || top1?.name || '---')}</strong>
                  <span style="font-size: 0.78rem; color: #f59e0b; font-weight: 900; margin-top: 2px;">${formatStudyTime(top1?.displayStudyMins || 0)}</span>
                  <span style="font-size: 0.68rem; color: #fde68a;">${toPersian(top1?.displayTestCount || 0)} تست</span>

                  <!-- 3D Gold Block -->
                  <div style="width: 100%; height: 125px; background: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.12) 100%); border: 2px solid rgba(245, 158, 11, 0.6); border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 10px; box-shadow: inset 0 2px 14px rgba(251, 191, 36, 0.25), 0 14px 30px rgba(245, 158, 11, 0.25); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; font-weight: 900; color: rgba(251, 191, 36, 0.35);">1</div>
                </div>

                <!-- Rank 3 (Left, Bronze Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <!-- Avatar & Badge -->
                  <div onclick="${isTop3User ? 'window.openEditProfileModal()' : ''}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${isTop3User ? 'cursor: pointer;' : ''}" title="${isTop3User ? 'ویرایش مشخصات شما' : ''}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥉</div>
                    ${renderMemberAvatarHTML(top3, 48)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cd7f32; color: #ffffff; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۳</span>
                    ${isTop3User ? `<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>` : ''}
                  </div>

                  <strong onclick="${isTop3User ? 'window.openEditProfileModal()' : ''}" style="font-size: 0.82rem; color: ${isTop3User ? '#c4b5fd' : '#e4e4e7'}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${isTop3User ? 'cursor: pointer;' : ''}">${esc(top3?.nickname || top3?.name || '---')}</strong>
                  <span style="font-size: 0.72rem; color: #cd7f32; font-weight: 900; margin-top: 2px;">${formatStudyTime(top3?.displayStudyMins || 0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${toPersian(top3?.displayTestCount || 0)} تست</span>

                  <!-- 3D Bronze Block -->
                  <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(205, 127, 50, 0.25) 0%, rgba(180, 83, 9, 0.1) 100%); border: 1.5px solid rgba(205, 127, 50, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 900; color: rgba(205, 127, 50, 0.3);">3</div>
                </div>

              </div>
              `;
            })()}
          ` : ''}

          <!-- Leaderboard Members Table -->
          <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; overflow: hidden;">
            
            <div style="padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 0.88rem; color: #e4e4e7;">📋 جدول رتبه‌بندی اعضای گروه</strong>
              <input type="text" id="input-leaderboard-search" placeholder="🔍 جستجوی عضو..." style="padding: 5px 10px; font-size: 0.75rem; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: white; width: 140px;" />
            </div>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.8rem;">
                <thead>
                  <tr style="background: #1f2029; color: #8e8e9c; font-size: 0.72rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <th style="padding: 10px 12px; width: 45px; text-align: center;">رتبه</th>
                    <th style="padding: 10px 12px; text-align: center; width: 75px;">لیگ</th>
                    <th style="padding: 10px 12px;">نام عضو</th>
                    <th style="padding: 10px 12px;">ساعت مطالعه امروز</th>
                    <th style="padding: 10px 12px;">تست</th>
                    <th style="padding: 10px 12px;">مباحث خوانده‌شده</th>
                  </tr>
                </thead>
                <tbody>
                  ${rawList.length === 0 ? `
                    <tr>
                      <td colspan="6" style="text-align: center; padding: 24px; color: #8e8e9c;">
                        ${isInitialLoading ? '⏳ در حال دریافت جدول رتبه‌بندی اعضا...' : 'هنوز رکوردی در این گروه ثبت نشده است.'}
                      </td>
                    </tr>
                  ` : rawList.map((item, idx) => {
                    const rank = idx + 1;
                    const isUser = item.isUser || item.isCurrentUser || item.userId === userProfile.userId || (userProfile.phone && item.phone === userProfile.phone);
                    const isStudying = isUser
                      ? ((leaderboardService && typeof leaderboardService.isCurrentStudyingActive === 'function')
                          ? leaderboardService.isCurrentStudyingActive()
                          : Boolean(window.isUserStudyingNow ? window.isUserStudyingNow() : false))
                      : Boolean(leaderboardService ? leaderboardService.isMemberStudying(item) : (item.isStudying && item.lastHeartbeat && (Date.now() - item.lastHeartbeat < 15 * 60 * 1000)));
                    const activeSubject = isUser
                      ? ((isStudying && typeof window.getCurrentFocusSubjectTitle === 'function') ? window.getCurrentFocusSubjectTitle() : '')
                      : (item.studySubject || item.subject || item.currentSubject || (Array.isArray(item.subjects) && item.subjects.length > 0 ? item.subjects[0] : null));
                    const tier = getLeagueTierInfo(item.displayStudyMins || 0, rank, rawList.length);
                    const medalEmoji = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : `#${toPersian(rank)}`));

                    let promoDivider = '';
                    if (idx === promoCutoff && rawList.length >= 4) {
                      promoDivider = `
                        <tr style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 100%); border-top: 1.5px solid #10b981; border-bottom: 1.5px solid #10b981;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #34d399; letter-spacing: 0.5px;">
                            🟢 ── محدوده صعود به لیگ بالاتر (Promotion Zone) ──
                          </td>
                        </tr>
                      `;
                    }

                    let relegDivider = '';
                    if (idx === relegCutoff && rawList.length >= 6 && relegCutoff > promoCutoff) {
                      relegDivider = `
                        <tr style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 100%); border-top: 1.5px solid #ef4444; border-bottom: 1.5px solid #ef4444;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #f87171; letter-spacing: 0.5px;">
                            🔴 ── محدوده خطر سقوط به لیگ پایین‌تر (Relegation Zone) ──
                          </td>
                        </tr>
                      `;
                    }

                    return `
                      ${promoDivider}
                      ${relegDivider}
                      <tr class="leaderboard-row" data-search="${esc(item.nickname)} ${esc(item.target)}" onclick="${isUser ? 'window.openEditProfileModal()' : ''}" style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${isUser ? 'rgba(124, 58, 237, 0.12)' : 'transparent'}; ${isUser ? 'cursor: pointer;' : ''}">
                        
                        <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: ${rank <= 3 ? '#facc15' : '#a1a1aa'};">
                          ${medalEmoji}
                        </td>

                        <td style="padding: 10px 12px; text-align: center;">
                          <span style="font-size: 0.68rem; background: ${tier.bg}; color: ${tier.color}; border: 1px solid ${tier.border}; padding: 2px 7px; border-radius: 6px; font-weight: 800; white-space: nowrap;">
                            ${tier.icon} ${tier.name}
                          </span>
                        </td>

                        <td style="padding: 10px 12px;">
                          <div style="display: flex; align-items: center; gap: 10px;">
                            ${renderMemberAvatarHTML(item, 34)}
                            <div>
                              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <strong style="color: ${isUser ? '#c4b5fd' : '#e4e4e7'}; font-weight: 800;">${esc(item.nickname || 'کاربر')}</strong>
                                ${isUser ? '<span style="font-size: 0.64rem; background: #7c3aed; color: white; padding: 1px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 2px;" title="کلیک جهت ویرایش مشخصات">شما ✏️</span>' : ''}
                                ${isStudying ? `
                                  <span style="font-size: 0.65rem; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 10px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); animation: livePulse 2s infinite ease-in-out;">
                                    🟢 در حال مطالعه ${activeSubject ? `(${esc(activeSubject)})` : ''}
                                  </span>
                                ` : ''}
                              </div>
                              <span style="font-size: 0.7rem; color: #8e8e9c; display: block; margin-top: 2px;">${esc(item.target || '')}</span>
                            </div>
                          </div>
                        </td>

                        <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8;">
                          ${formatStudyTime(item.displayStudyMins || 0)}
                        </td>

                        <td style="padding: 10px 12px; font-weight: 700; color: #cbd5e1;">
                          ${toPersian(item.displayTestCount || 0)}
                        </td>

                        <td style="padding: 10px 12px;">
                          ${renderSubjectChips(item.subjects)}
                        </td>

                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

          </div>

      </div>
      ${(window.appState?.activeModal === 'editProfile') ? renderEditProfileModal() : ''}
    `;
  } catch (err) {
    console.error('Error rendering LeaderboardView:', err);
    return `
      <div id="tab-leaderboard" class="main-container active" style="display: block; padding: 40px 20px; text-align: center; direction: rtl;">
        <h3 style="color: #ef4444;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem;">${esc(err?.message || 'خطای غیرمنتظره در بارگذاری داده‌ها')}</p>
        <button onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="margin-top: 15px; padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer;">
          ⬅️ برگشت به لیست گروه‌ها
        </button>
      </div>
    `;
  }
}

// Resilient Aliases & Safe Exports
export const renderLeaderboard = renderLeaderboardView;
export const initLeaderboard = initLeaderboardView;

if (typeof window !== 'undefined') {
  window.renderLeaderboardView = renderLeaderboardView;
  window.renderLeaderboard = renderLeaderboardView;
  window.bindLeaderboardEvents = bindLeaderboardEvents;
  window.initLeaderboardView = initLeaderboardView;
  window.initLeaderboard = initLeaderboardView;
}

export default renderLeaderboardView;
