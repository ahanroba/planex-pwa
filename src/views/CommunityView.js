import { db } from '../db.js';

export function renderCommunityView() {
  let authUser = null;
  try {
    authUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
  } catch(e) {}
  
  let isGuest = true;
  if (authUser && (authUser.phone || authUser.phone_number)) {
    isGuest = false;
  }
  
  if (isGuest) {
    return `
      <div class="main-container" style="padding-bottom: 90px; direction: rtl;">
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 1.25rem; font-weight: 900; color: #f8fafc; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
            <span>📚 سالن مطالعه</span>
          </h2>
          <p style="font-size: 0.78rem; color: #8e8e9c; margin: 0;">گروه‌های مطالعه و اتاق‌های کار تیمی</p>
        </div>
        
        <div style="padding: 24px 20px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); background: rgba(234, 179, 8, 0.03); border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; gap: 16px;">
          <div style="width: 70px; height: 70px; border-radius: 20px; background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; box-shadow: 0 0 30px rgba(234, 179, 8, 0.15);">
            🔒
          </div>
          
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #facc15;">
            گروه‌های مطالعه اختصاصی اعضا است
          </h3>
          
          <p style="margin: 0; font-size: 0.8rem; color: #a1a1aa; line-height: 1.7; max-width: 400px;">
            برای پیوستن به گروه‌های درسی، ساخت اتاق‌های مطالعه و ارتباط با سایر دانش‌آموزان، لطفاً ابتدا حساب خود را در ربات تلگرام پلنکس فعال کنید.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 300px; margin-top: 10px;">
            <button onclick="window.open('https://t.me/planex_sync_bot?start=login', '_blank')" style="background: #3b82f6; color: #fff; padding: 12px 20px; border-radius: 14px; font-size: 0.85rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; transition: transform 0.15s ease;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              📱 ثبت‌نام و فعال‌سازی در ربات تلگرام
            </button>
            
            <button onclick="if(window.openLoginModal) window.openLoginModal(); else if (window.appState) { window.appState.activeModal = 'login'; window.renderApp(); }" style="background: transparent; color: #a1a1aa; padding: 10px 16px; border-radius: 12px; font-size: 0.8rem; font-weight: 700; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; transition: background 0.15s ease;" onmouseenter="this.style.background='rgba(255, 255, 255, 0.05)'" onmouseleave="this.style.background='transparent'">
              🔑 ورود با رمز عبور
            </button>
          </div>
        </div>
      </div>
    `;
  }

  const token = localStorage.getItem('planex_jwt_token');

  // Trigger data fetches if we have a token but haven't fetched yet or if cache expired (15 mins)
  if (token && token !== 'undefined' && token !== 'null') {
    const now = Date.now();
    const CACHE_TIME = 15 * 60 * 1000; // 15 minutes

    if (!window.isFetchingLeaderboard && (!window.planexLeaderboardData || !window.lastLeaderboardFetchTime || now - window.lastLeaderboardFetchTime > CACHE_TIME)) {
      window.isFetchingLeaderboard = true;
      fetch('/api/v1/leaderboard', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (data.success) {
            window.planexLeaderboardData = data.leaderboard;
            window.lastLeaderboardFetchTime = Date.now();
            window.renderApp();
          } else {
            console.error('Leaderboard API returned false success:', data);
          }
        })
        .catch(err => {
          console.error('Failed to fetch leaderboard:', err);
        })
        .finally(() => window.isFetchingLeaderboard = false);
    }

    if (!window.isFetchingFeed && (!window.planexActivityFeed || !window.lastFeedFetchTime || now - window.lastFeedFetchTime > CACHE_TIME)) {
      window.isFetchingFeed = true;
      fetch('/api/v1/feed', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (data.success) {
            window.planexActivityFeed = data.feed;
            window.lastFeedFetchTime = Date.now();
            window.renderApp();
          } else {
            console.error('Feed API returned false success:', data);
          }
        })
        .catch(err => {
          console.error('Failed to fetch feed:', err);
        })
        .finally(() => window.isFetchingFeed = false);
    }
  }
  // Define Rooms
  const rooms = [
    { id: 'general', name: 'اتاق مطالعه عمومی', emoji: '☕', members: Math.floor(Math.random() * 20) + 5 },
    { id: 'tajrobi', name: 'کنکوری‌های تجربی', emoji: '🧬', members: Math.floor(Math.random() * 15) + 3 },
    { id: 'riazi', name: 'کنکوری‌های ریاضی', emoji: '📐', members: Math.floor(Math.random() * 10) + 2 },
    { id: 'ensani', name: 'کنکوری‌های انسانی', emoji: '📚', members: Math.floor(Math.random() * 10) + 1 },
    { id: 'daneshjou', name: 'دانشجویان', emoji: '🎓', members: Math.floor(Math.random() * 12) + 4 }
  ];

  // My saved groups
  let myGroups = [];
  try {
    myGroups = JSON.parse(localStorage.getItem('planex_my_groups') || '[]');
  } catch (e) { myGroups = []; }

  // Active tab state
  if (!window.communityTabState) window.communityTabState = 'all';
  const activeTab = window.communityTabState;

  // Search state
  const searchQuery = (window.communitySearchQuery || '').toLowerCase().trim();

  // Filter rooms
  const allRooms = (window.appState?.publicRooms || rooms);
  const displayRooms = activeTab === 'mine'
    ? myGroups
    : allRooms;

  const filteredRooms = searchQuery
    ? displayRooms.filter(r => (r.name || '').toLowerCase().includes(searchQuery))
    : displayRooms;

  // Top 3 members for podium (from cached leaderboard or dummy)
  const podiumList = (window.lastLeaderboardResult && Array.isArray(window.lastLeaderboardResult.leaderboard))
    ? window.lastLeaderboardResult.leaderboard.slice(0, 3)
    : [];
  const top1 = podiumList[0] || null;
  const top2 = podiumList[1] || null;
  const top3 = podiumList[2] || null;

  return `
    <div class="main-container" style="padding-bottom: 100px; direction: rtl;">
      
      <!-- Header -->
      <div style="margin-bottom: 14px;">
        <h2 style="font-size: 1.05rem; font-weight: 800; color: #f8fafc; margin: 0 0 2px 0;">سالن مطالعه</h2>
        <p style="font-size: 0.72rem; color: #8e8e9c; margin: 0;">گروه‌های مطالعاتی، رقابت و اشتراک روتین‌ها</p>
      </div>

      ${!token ? `
        <div style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); padding: 30px; text-align: center; border-radius: 20px; margin-bottom: 16px;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔒</div>
          <h4 style="color: white; margin-bottom: 6px; font-size: 0.88rem;">نیاز به ورود به حساب کاربری</h4>
          <p style="color: #8e8e9c; font-size: 0.74rem; margin-bottom: 12px;">برای مشاهده و ورود به گروه‌ها، وارد حساب خود شوید.</p>
          <button onclick="document.getElementById('btn-login-modal').click()" style="padding: 8px 18px; background: #7c3aed; border: none; border-radius: 10px; color: white; font-weight: 700; font-size: 0.78rem; cursor: pointer;">👤 ورود</button>
        </div>
      ` : `

      <!-- 🔍 Capsule Search Bar -->
      <div style="margin-bottom: 14px;">
        <input type="text"
               id="input-community-search"
               placeholder="جستجوی اتاق، سازنده..."
               value="${searchQuery}"
               style="width: 100%; box-sizing: border-box; padding: 12px 18px; font-size: 0.8rem; font-family: inherit; background: #16171d; border: 1px solid rgba(255,255,255,0.06); border-radius: 9999px; color: #fff; outline: none;" />
      </div>

      <!-- 🔀 Segmented Control Tabs (Full Capsule) -->
      <div style="display: flex; background: #16171d; border-radius: 9999px; padding: 4px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.05); gap: 4px;">
        <button class="community-tab-btn" data-tab="all" style="flex: 1; padding: 10px; font-size: 0.78rem; font-weight: 700; border: none; border-radius: 9999px; cursor: pointer; transition: all 0.2s ease; ${activeTab === 'all' ? 'background: #ff6b4a; color: white; box-shadow: 0 4px 12px rgba(255, 107, 74, 0.3);' : 'background: #24242c; color: #8e8e9c;'}">
          همه اتاق‌ها
        </button>
        <button class="community-tab-btn" data-tab="mine" style="flex: 1; padding: 10px; font-size: 0.78rem; font-weight: 700; border: none; border-radius: 9999px; cursor: pointer; transition: all 0.2s ease; ${activeTab === 'mine' ? 'background: #ff6b4a; color: white; box-shadow: 0 4px 12px rgba(255, 107, 74, 0.3);' : 'background: #24242c; color: #8e8e9c;'}">
          اتاق‌های خودم ${myGroups.length > 0 ? `(${myGroups.length})` : ''}
        </button>
      </div>

      <!-- 🏆 Podium Banner (Top 3 Cylinders) -->
      ${podiumList.length >= 3 ? `
        <div style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 18px 14px; margin-bottom: 16px;">
          <div style="font-size: 0.76rem; font-weight: 800; color: #e4e4e7; text-align: center; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span>🏆</span>
            <span>سکوی برترین‌های مطالعه امروز</span>
          </div>
          <div style="display: flex; justify-content: center; align-items: flex-end; gap: 12px;">
            
            <!-- 2nd Place Cylinder -->
            <div style="text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.62rem; color: #a1a1aa; font-family: 'Outfit', monospace; margin-bottom: 3px;">@${(top2.userId || 'user2').slice(0, 8)}</div>
              <div style="width: 46px; height: 46px; border-radius: 50%; background: #24242c; border: 2px solid #94a3b8; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
                🥈
              </div>
              <div style="font-size: 0.7rem; font-weight: 700; color: #e4e4e7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 85px;">${top2.nickname || 'نفر دوم'}</div>
              <div style="width: 100%; max-width: 70px; height: 55px; background: linear-gradient(180deg, rgba(148,163,184,0.2) 0%, rgba(148,163,184,0.05) 100%); border: 1px solid rgba(148,163,184,0.3); border-radius: 14px 14px 0 0; margin-top: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.85rem; font-weight: 900; color: #cbd5e1; font-family: 'Outfit';">2</span>
                <span style="font-size: 0.58rem; color: #94a3b8;">رتبه ۲</span>
              </div>
            </div>

            <!-- 1st Place Cylinder -->
            <div style="text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.95rem; margin-bottom: 1px;">👑</div>
              <div style="font-size: 0.62rem; color: #fbbf24; font-family: 'Outfit', monospace; margin-bottom: 3px;">@${(top1.userId || 'user1').slice(0, 8)}</div>
              <div style="width: 54px; height: 54px; border-radius: 50%; background: #24242c; border: 2.5px solid #fbbf24; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; box-shadow: 0 6px 16px rgba(251, 191, 36, 0.25);">
                🥇
              </div>
              <div style="font-size: 0.74rem; font-weight: 800; color: #fbbf24; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 90px;">${top1.nickname || 'نفر اول'}</div>
              <div style="width: 100%; max-width: 76px; height: 80px; background: linear-gradient(180deg, rgba(251,191,36,0.25) 0%, rgba(251,191,36,0.05) 100%); border: 1px solid rgba(251,191,36,0.4); border-radius: 16px 16px 0 0; margin-top: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 1rem; font-weight: 900; color: #fbbf24; font-family: 'Outfit';">1</span>
                <span style="font-size: 0.6rem; color: #fde047; font-weight: 700;">رتبه ۱</span>
              </div>
            </div>

            <!-- 3rd Place Cylinder -->
            <div style="text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 0.62rem; color: #cd7f32; font-family: 'Outfit', monospace; margin-bottom: 3px;">@${(top3.userId || 'user3').slice(0, 8)}</div>
              <div style="width: 42px; height: 42px; border-radius: 50%; background: #24242c; border: 2px solid #cd7f32; margin: 0 auto 4px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
                🥉
              </div>
              <div style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80px;">${top3.nickname || 'نفر سوم'}</div>
              <div style="width: 100%; max-width: 66px; height: 42px; background: linear-gradient(180deg, rgba(205,127,50,0.2) 0%, rgba(205,127,50,0.05) 100%); border: 1px solid rgba(205,127,50,0.3); border-radius: 12px 12px 0 0; margin-top: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 0.8rem; font-weight: 900; color: #e2e8f0; font-family: 'Outfit';">3</span>
                <span style="font-size: 0.55rem; color: #cd7f32;">رتبه ۳</span>
              </div>
            </div>

          </div>
        </div>
      ` : ''}

      <!-- ➕ Create Custom Room Card -->
      <div onclick="event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); if(window.openCreateRoomModal) { window.openCreateRoomModal('create'); } else { window.appState.activeModal = 'createRoom'; window.renderApp(); }" style="background: #16171d; border: 1px dashed rgba(16,185,129,0.3); border-radius: 24px; padding: 14px 16px; text-align: center; cursor: pointer; margin-bottom: 14px; transition: all 0.15s ease;" onmouseenter="this.style.borderColor='#10b981'" onmouseleave="this.style.borderColor='rgba(16,185,129,0.3)'">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span style="font-size: 1.2rem;">➕</span>
          <span style="font-weight: 700; font-size: 0.84rem; color: #10b981;">ساخت گروه جدید</span>
          <span style="font-size: 0.68rem; color: #8e8e9c;">(با لینک اختصاصی)</span>
        </div>
      </div>

      <!-- 🏠 Room Cards List (Rounded-3xl with status badges & capacity chip) -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
        ${filteredRooms.length === 0 ? `
          <div style="text-align: center; padding: 28px; color: #8e8e9c; font-size: 0.8rem; background: #16171d; border-radius: 24px; border: 1px solid rgba(255,255,255,0.05);">
            ${activeTab === 'mine' ? '⭐ هنوز عضو هیچ سالن مطالعه‌ای نشده‌اید.' : '🔍 سالنی با این مشخصات یافت نشد.'}
          </div>
        ` : filteredRooms.map(room => {
          const isPrivate = Boolean(room.isPrivate || room.password);
          const activeMembers = room.members || Math.floor(Math.random() * 15) + 5;
          const maxCapacity = room.capacity || 600;

          return `
            <div onclick="window.joinStudyRoom('${room.id}', '${room.name}')" style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; padding: 16px 18px; cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; display: flex; flex-direction: column; gap: 10px;" onmouseenter="this.style.transform='translateY(-2px)'; this.style.borderColor='rgba(255,255,255,0.12)'" onmouseleave="this.style.transform=''; this.style.borderColor='rgba(255,255,255,0.05)'">
              
              <!-- Top Row: Room Title & Lock / Open Status -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">
                    ${room.emoji || '👥'}
                  </div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.88rem; font-weight: 700; color: #ffffff; display: flex; align-items: center; gap: 6px;">
                      <span>${room.name}</span>
                      <span style="font-size: 0.72rem;" title="${isPrivate ? 'اتاق قفل‌دار' : 'اتاق عمومی'}">
                        ${isPrivate ? '🔒' : '🔓'}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              <!-- Bottom Row: Live Studying Status Badge (Right) + Capacity Chip (Left) -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                <!-- Right: Live Active Studying Capsule -->
                <span style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.7rem; color: #10b981; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); padding: 4px 10px; border-radius: 9999px; font-weight: 700;">
                  <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block; box-shadow: 0 0 6px #10b981;"></span>
                  <span>${activeMembers} نفر در حال مطالعه</span>
                </span>

                <!-- Left: Capacity Chip -->
                <span style="font-size: 0.68rem; color: #cbd5e1; background: #24242c; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 9999px; font-family: 'Outfit', sans-serif; font-weight: 700;">
                  ${activeMembers} | ${maxCapacity}
                </span>
              </div>

            </div>
          `;
        }).join('')}
      </div>

      `} <!-- End of authenticated view -->

      <!-- Activity Feed -->
      <div style="padding: 14px 16px; background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; margin-bottom: 14px;">
        <h3 style="font-size: 0.82rem; font-weight: 700; color: #818cf8; margin: 0 0 10px 0; display: flex; align-items: center; gap: 6px;">
          📡 فید فعالیت
        </h3>
        ${!window.planexActivityFeed ? `
          <div style="text-align: center; padding: 20px; color: #8e8e9c; font-size: 0.74rem;">⏳ در حال دریافت...</div>
        ` : window.planexActivityFeed.length === 0 ? `
          <div style="text-align: center; padding: 20px; color: #8e8e9c; font-size: 0.74rem;">هنوز فعالیتی ثبت نشده.</div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${window.planexActivityFeed.map(activity => `
              <div style="padding: 10px; background: rgba(255,255,255,0.02); border-radius: 14px; border: 1px solid rgba(255,255,255,0.04);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <img src="${activity.avatar_url || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + activity.user_id}" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=' + '${activity.user_id}'" style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.05);" />
                  <div>
                    <span style="color: white; font-weight: 700; font-size: 0.76rem;">${activity.full_name || activity.username}</span>
                    <span style="color: #8e8e9c; font-size: 0.68rem;"> روتین جدید اشتراک گذاشت</span>
                  </div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 8px; border-radius: 10px; border-right: 2px solid #818cf8;">
                  <div style="font-weight: 700; color: #c7d2fe; font-size: 0.76rem; margin-bottom: 2px;">${activity.title}</div>
                  <div style="font-size: 0.68rem; color: #8e8e9c;">${activity.description || ''}</div>
                  <button onclick="window.copyPublicRoutine('${activity.id}')" style="margin-top: 6px; padding: 3px 10px; font-size: 0.68rem; background: rgba(99,102,241,0.1); color: #818cf8; border: 1px solid rgba(99,102,241,0.25); border-radius: 8px; cursor: pointer; font-weight: 600;">📥 کپی</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

    </div>
  `;
}

// Global Room Join Handler

// Global Room Open Handler (Opens Study Room Modal in Fullscreen)
// Fallback room-open handler. main.js installs the real (server-aware) version,
// so this only applies if it hasn't been defined yet. It must go through
// window.appState / window.renderApp — `state` and `renderApp` are module-locals
// of main.js and are not in scope here.
if (!window.joinStudyRoom) {
  window.joinStudyRoom = (roomId, roomName) => {
    if (!window.appState) return;
    window.appState.currentRoom = { id: roomId, name: roomName };
    window.appState.activeModal = 'studyRoom';
    if (typeof window.renderApp === 'function') window.renderApp();
  };
}

