// ============================================================================
// Emergency Nuke Cache Mechanism (iOS Safari & Stale Service Worker Buster)
// ============================================================================
(function nukeCache() {
  try {
    const CACHE_FLAG = 'app_cache_busted_v1';
    if (typeof localStorage !== 'undefined' && !localStorage.getItem(CACHE_FLAG)) {
      localStorage.setItem(CACHE_FLAG, 'true');

      const unregisterSW = (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && typeof navigator.serviceWorker.getRegistrations === 'function')
        ? navigator.serviceWorker.getRegistrations().then(registrations => {
            return Promise.all(registrations.map(reg => reg.unregister()));
          }).catch(err => console.warn('[NukeCache] SW unregister failed:', err))
        : Promise.resolve();

      const clearCaches = (typeof window !== 'undefined' && 'caches' in window && typeof caches.keys === 'function')
        ? caches.keys().then(keys => {
            return Promise.all(keys.map(key => caches.delete(key)));
          }).catch(err => console.warn('[NukeCache] Caches delete failed:', err))
        : Promise.resolve();

      Promise.all([unregisterSW, clearCaches]).finally(() => {
        console.log('[NukeCache] All Service Workers unregistered & caches deleted. Reloading...');
        window.location.reload(true);
      });
    }
  } catch (err) {
    console.error('[NukeCache] Error during cache nuke:', err);
  }
})();

import { renderDailyStoryCardModal, renderDailyAnalysisModal } from './components/DailyRingWidget.js';
import {
  renderJalaliDayDetailsModal,
  renderPercentCalculatorModal,
  renderRankEstimatorModal,
  renderSleepSchedulerModal,
  renderGPACalculatorModal,
  renderExamBoxModal
} from './components/ToolModals.js';
import { renderFabActivityModal } from './components/FabActivityModal.js';


// Update Dashboard Test Count
window.updateDashboardTestCount = (dayIdx, slotIdx, value) => {
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;
  const data = JSON.parse(localStorage.getItem('planex_hourly_logs') || '{}');
  if (!data[weekId]) data[weekId] = {};
  
  const keyOld = `${dayIdx}_${slotIdx}`;
  if (!data[weekId][keyOld]) data[weekId][keyOld] = {};
  
  const parsedValue = parseInt(value);
  if (!isNaN(parsedValue) && parsedValue > 0) {
    data[weekId][keyOld].testCount = parsedValue;
  } else {
    data[weekId][keyOld].testCount = 0; // Clear it if 0 or empty
  }
  
  // Clean up if completely empty
  if (!data[weekId][keyOld].categoryCode && !data[weekId][keyOld].testCount && !data[weekId][keyOld].note) {
    delete data[weekId][keyOld];
  }
  
  localStorage.setItem('planex_hourly_logs', JSON.stringify(data));
  renderApp(); // This instantly recalculates and re-renders Donut and Bar charts!
};

// Screen WakeLock Management (Top-level Safe Helpers)
let wakeLockSentinel = null;
export async function requestWakeLock() {
  try {
    if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
    }
  } catch (err) {
    console.warn('[WakeLock] Request failed:', err);
  }
}

export async function releaseWakeLock() {
  try {
    if (wakeLockSentinel !== null) {
      await wakeLockSentinel.release();
      wakeLockSentinel = null;
    }
  } catch (err) {
    console.warn('[WakeLock] Release error:', err);
    wakeLockSentinel = null;
  }
}

window.requestWakeLock = requestWakeLock;
window.releaseWakeLock = releaseWakeLock;

// ==========================================================================
// 🍞 Global Toast Notification Engine & Modal Control System (Jakob Nielsen Heuristics 1 & 3)
// ==========================================================================
window.showToast = function(message, type = 'info', duration = 3500) {
  if (!message) return;
  const str = String(message).trim();
  const icon = type === 'success' ? '✅' : (type === 'error' ? '❌' : (type === 'warning' ? '⚠️' : 'ℹ️'));

  let container = document.getElementById('planex-global-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'planex-global-toast-container';
    container.style.cssText = `
      position: fixed;
      bottom: 84px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 999999;
      pointer-events: none;
      width: 92%;
      max-width: 440px;
      direction: rtl;
      font-family: 'Vazirmatn', -apple-system, sans-serif;
    `;
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  let bg = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
  let border = 'rgba(255, 255, 255, 0.2)';
  let textColor = '#ffffff';

  if (type === 'success') {
    bg = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
    border = 'rgba(255, 255, 255, 0.35)';
  } else if (type === 'error') {
    bg = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    border = 'rgba(255, 255, 255, 0.35)';
  } else if (type === 'warning') {
    bg = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    border = 'rgba(255, 255, 255, 0.35)';
  } else if (type === 'info') {
    bg = 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)';
    border = 'rgba(255, 255, 255, 0.35)';
  }

  toast.style.cssText = `
    pointer-events: auto;
    background: ${bg};
    color: ${textColor};
    border: 1.5px solid ${border};
    padding: 12px 20px;
    border-radius: 16px;
    font-weight: 800;
    font-size: 0.88rem;
    line-height: 1.6;
    box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.2);
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  toast.innerHTML = `<span style="font-size: 1.1rem; flex-shrink: 0;">${icon}</span><span style="direction: rtl;">${str}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0) scale(1)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 320);
  }, duration);
};

// Override native alert to safely display human-readable Persian Toast notifications
if (typeof window !== 'undefined') {
  window.alert = function(msg) {
    if (!msg) return;
    const str = String(msg);
    let type = 'info';
    if (str.includes('خطا') || str.includes('❌') || str.includes('نامعتبر') || str.includes('اشتباه')) {
      type = 'error';
    } else if (str.includes('موفقیت') || str.includes('✅') || str.includes('🎉') || str.includes('ذخیره شد')) {
      type = 'success';
    } else if (str.includes('⚠️') || str.includes('لطفاً') || str.includes('هشدار')) {
      type = 'warning';
    }
    window.showToast(str, type, 4000);
  };
}

// Unified Central Modal Dismissal Handler
window.closeActiveModal = function() {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.activeModal = null;
  }
  if (window.appState) {
    window.appState.activeModal = null;
  }
  try {
    document.querySelectorAll('.modal-overlay, .modal-backdrop, .modal-container, [id^="modal-"]').forEach(m => {
      if (m.id !== 'modal-container') {
        m.style.display = 'none';
        m.classList.remove('active');
      }
    });
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) modalContainer.innerHTML = '';
  } catch (_) {}
  if (typeof renderApp === 'function') renderApp();
};

// Global Keyboard ESC & Mobile Hardware Back Button Listeners
if (typeof window !== 'undefined' && !window._globalModalListenersAttached) {
  window._globalModalListenersAttached = true;
  
  // Hardware ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = (typeof state !== 'undefined' && state ? state.activeModal : null) || (window.appState ? window.appState.activeModal : null);
      if (activeModal) {
        e.preventDefault();
        window.closeActiveModal();
      }
    }
  });

  // Mobile Hardware Back button (popstate)
  window.addEventListener('popstate', (e) => {
    const activeModal = (typeof state !== 'undefined' && state ? state.activeModal : null) || (window.appState ? window.appState.activeModal : null);
    if (activeModal) {
      e.preventDefault();
      window.closeActiveModal();
    }
  });
}

// Focus Modal & Activity Logger Global Helpers
window.openFocusModal = (options = {}) => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.activeModal = 'focus';
    targetState.isCompletionDialogOpen = false;
    if (options.subject) targetState.focusSubject = options.subject;
    if (options.categoryCode) targetState.focusCategoryCode = options.categoryCode;
    if (options.presetMins) {
      targetState.focusPresetMins = parseInt(options.presetMins) || 25;
      if (!targetState.isPomodoroRunning) targetState.pomodoroTime = targetState.focusPresetMins * 60;
    }
    if (options.timerType !== undefined) targetState.focusTimerType = parseInt(options.timerType);
    if (options.studyMethod) targetState.selectedStudyMethod = options.studyMethod;
  }
  if (typeof renderApp === 'function') renderApp();
};

window.closeFocusModal = () => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.activeModal = null;
    targetState.isCompletionDialogOpen = false;
  }
  if (typeof renderApp === 'function') renderApp();
};

window.isTimerRunningCheck = () => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  return Boolean(targetState && (targetState.isPomodoroRunning || targetState.isStopwatchRunning));
};

window.isUserStudyingNow = () => {
  try {
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (!targetState) return false;
    const isRunning = Boolean(targetState.isPomodoroRunning || targetState.isStopwatchRunning);
    if (!isRunning) return false;
    const isBreak = (targetState.focusTimerType === 2);
    const isNonStudy = (targetState.focusActivityMode === 'non-study' && !isBreak);
    return !isBreak && !isNonStudy;
  } catch (_) {
    return false;
  }
};

window.openFabActivityModal = () => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) targetState.activeModal = 'fabActivity';
  if (typeof renderApp === 'function') renderApp();
};

window.closeFabActivityModal = () => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) targetState.activeModal = null;
  if (typeof renderApp === 'function') renderApp();
};

window.openManualActivityLogModal = (initialMode = 'study') => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.activeModal = 'manualLog';
    if (!targetState.manualLogState) targetState.manualLogState = {};
    targetState.manualLogState.activityMode = (initialMode === 'non-study') ? 'non-study' : 'study';
  }
  if (typeof state !== 'undefined' && state && state !== targetState) {
    state.activeModal = 'manualLog';
    if (!state.manualLogState) state.manualLogState = {};
    state.manualLogState.activityMode = (initialMode === 'non-study') ? 'non-study' : 'study';
  }
  if (typeof renderApp === 'function') renderApp();
};
window.openManualLogModal = window.openManualActivityLogModal;

window.closeManualActivityLogModal = () => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) targetState.activeModal = null;
  if (typeof renderApp === 'function') renderApp();
};

// ── Create & Join Group / Room Modals ──
window.openCreateGroupModal = (defaultTab = 'create') => {
  window.createRoomModalActiveTab = defaultTab;
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.activeModal = 'createRoom';
  }
  if (typeof renderApp === 'function') renderApp();
  const modal = document.getElementById('modal-create-group') || document.getElementById('modal-create-room');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
  }
};
window.openCreateRoomModal = window.openCreateGroupModal;

window.joinStudyRoom = (roomId, roomName = null) => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;
  const finalName = roomName || (roomId ? `سالن مطالعه ${roomId}` : 'سالن مطالعه');
  targetState.currentRoom = {
    id: roomId,
    code: roomId,
    name: finalName,
    title: finalName
  };
  targetState.activeModal = 'studyRoom';
  if (typeof renderApp === 'function') {
    renderApp();
  } else if (typeof window.renderApp === 'function') {
    window.renderApp();
  }
};

window.switchCreateRoomModalTab = (tab = 'create') => {
  window.createRoomModalActiveTab = tab;
  const tabCreate = document.getElementById('modal-tab-create-room');
  const tabJoin = document.getElementById('modal-tab-join-room');
  const btnCreate = document.getElementById('btn-modal-tab-create');
  const btnJoin = document.getElementById('btn-modal-tab-join');
  if (tabCreate && tabJoin) {
    tabCreate.style.display = tab === 'create' ? 'block' : 'none';
    tabJoin.style.display = tab === 'join' ? 'block' : 'none';
  }
  if (btnCreate && btnJoin) {
    btnCreate.classList.toggle('active', tab === 'create');
    btnJoin.classList.toggle('active', tab === 'join');
  }
};

// ── Persistent Timer Notification & Dynamic Tab Title ──
window._originalDocumentTitle = typeof document !== 'undefined' ? (document.title || 'پلنکس | برنامه ریزی درسی هوشمند') : '';
window._planexTimerNotification = null;
window._lastNotifUpdateTime = 0;
window._notifRateLimitBackoffUntil = 0;

function updateDocumentTitleTimer(seconds, isCountdown = false) {
  try {
    if (!window._originalDocumentTitle || window._originalDocumentTitle.startsWith('(')) {
      window._originalDocumentTitle = 'پلنکس | برنامه ریزی درسی هوشمند';
    }
    const s = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.title = `(${timeStr}) - PlanEx`;
  } catch (_) {}
}
window.updateDocumentTitleTimer = updateDocumentTitleTimer;

function restoreDocumentTitle() {
  try {
    if (window._originalDocumentTitle && !window._originalDocumentTitle.startsWith('(')) {
      document.title = window._originalDocumentTitle;
    } else {
      document.title = 'پلنکس | برنامه ریزی درسی هوشمند';
    }
  } catch (_) {}
}
window.restoreDocumentTitle = restoreDocumentTitle;

function clearPersistentTimerNotification() {
  try {
    if (window._planexTimerNotification) {
      window._planexTimerNotification.close();
      window._planexTimerNotification = null;
    }
  } catch (_) {}
  try {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(reg => {
        if (reg && typeof reg.getNotifications === 'function') {
          reg.getNotifications({ tag: 'planex-timer' }).then(notifs => {
            if (notifs && notifs.length) {
              notifs.forEach(n => { try { n.close(); } catch (_) {} });
            }
          }).catch(() => {});
          reg.getNotifications({ tag: 'planex-active-timer' }).then(notifs => {
            if (notifs && notifs.length) {
              notifs.forEach(n => { try { n.close(); } catch (_) {} });
            }
          }).catch(() => {});
        }
      }).catch(() => {});
    }
  } catch (_) {}
}
window.clearPersistentTimerNotification = clearPersistentTimerNotification;

function updateTimerNotification(seconds, isCountdown = false) {
  try {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    if (Notification.permission !== 'granted') return;

    const now = Date.now();
    if (now < window._notifRateLimitBackoffUntil) {
      if (now - window._lastNotifUpdateTime < 10000) return;
    } else {
      if (now - window._lastNotifUpdateTime < 950) return;
    }
    window._lastNotifUpdateTime = now;

    const s = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    const subject = targetState?.focusSubject || 'مطالعه';
    const phase = targetState?.selectedStudyMethod || targetState?.focusPhase || 'تمرکز';
    const isBreak = (targetState?.focusTimerType === 2);
    const isNonStudy = (targetState?.focusActivityMode === 'non-study' && !isBreak);
    const statusLabel = isBreak ? 'در حال استراحت' : (isNonStudy ? 'فعالیت غیردرسی' : 'در حال مطالعه');

    const notifTitle = `⏱️ (${timeStr}) - ${statusLabel}`;

    let bodyText = '';
    if (!isCountdown || !targetState?.timerTargetEndTime) {
      bodyText = `${subject ? `مبحث: ${subject} | ` : ''}مرحله: ${phase} | زمان: ${timeStr}`;
    } else {
      const endD = new Date(targetState.timerTargetEndTime);
      const endHours = String(endD.getHours()).padStart(2, '0');
      const endMins = String(endD.getMinutes()).padStart(2, '0');
      bodyText = `${subject ? `مبحث: ${subject} | ` : ''}مرحله: ${phase} | اتمام در ساعت ${endHours}:${endMins}`;
    }

    const notifOptions = {
      body: bodyText,
      icon: '/logo-transparent.png',
      badge: '/logo-transparent.png',
      tag: 'planex-timer',
      requireInteraction: true,
      silent: true,
      renotify: false
    };

    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(reg => {
        if (reg && typeof reg.showNotification === 'function') {
          reg.showNotification(notifTitle, notifOptions).catch(swErr => {
            if (swErr && (swErr.name === 'QuotaExceededError' || String(swErr).includes('quota') || String(swErr).includes('limit'))) {
              window._notifRateLimitBackoffUntil = Date.now() + 30000;
            }
          });
        }
      }).catch(() => {});
    } else {
      try {
        const notif = new Notification(notifTitle, notifOptions);
        window._planexTimerNotification = notif;
        notif.onclick = () => {
          try {
            window.focus();
            notif.close();
          } catch (_) {}
        };
      } catch (ctorErr) {
        if (ctorErr && (ctorErr.name === 'QuotaExceededError' || String(ctorErr).includes('quota') || String(ctorErr).includes('limit'))) {
          window._notifRateLimitBackoffUntil = Date.now() + 30000;
        }
      }
    }
  } catch (err) {
    if (err && (err.name === 'QuotaExceededError' || String(err).includes('quota') || String(err).includes('limit'))) {
      window._notifRateLimitBackoffUntil = Date.now() + 30000;
    }
  }
}
window.updateTimerNotification = updateTimerNotification;

function spawnPersistentTimerNotification(subject, phase, targetEndTime, isStopwatch = false) {
  try {
    if (typeof window === 'undefined' || !('Notification' in window)) return;

    const doSpawn = () => {
      try {
        const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
        const isBreak = (targetState?.focusTimerType === 2);
        const isNonStudy = (targetState?.focusActivityMode === 'non-study' && !isBreak);
        const statusLabel = isBreak ? 'در حال استراحت' : (isNonStudy ? 'فعالیت غیردرسی' : 'در حال مطالعه');

        let bodyText = '';
        let initialTimeStr = '00:00';
        if (isStopwatch || !targetEndTime) {
          const s = Math.max(0, Math.floor(targetState?.stopwatchTime || 0));
          const mins = Math.floor(s / 60);
          const secs = s % 60;
          initialTimeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
          bodyText = `${subject ? `مبحث: ${subject} | ` : ''}مرحله: ${phase || 'تمرکز'} | پارت مطالعه آزاد آغاز شد`;
        } else {
          const remSecs = Math.max(0, Math.ceil((targetEndTime - Date.now()) / 1000));
          const mins = Math.floor(remSecs / 60);
          const secs = remSecs % 60;
          initialTimeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
          const endD = new Date(targetEndTime);
          let endHours = String(endD.getHours()).padStart(2, '0');
          let endMins = String(endD.getMinutes()).padStart(2, '0');
          bodyText = `${subject ? `مبحث: ${subject} | ` : ''}مرحله: ${phase || 'تمرکز'} | پایان در ساعت ${endHours}:${endMins}`;
        }

        const notifTitle = `⏱️ (${initialTimeStr}) - ${statusLabel}`;
        const notifOptions = {
          body: bodyText,
          icon: '/logo-transparent.png',
          badge: '/logo-transparent.png',
          tag: 'planex-timer',
          requireInteraction: true,
          silent: true,
          renotify: false
        };

        if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.ready) {
          navigator.serviceWorker.ready.then(reg => {
            if (reg && typeof reg.showNotification === 'function') {
              reg.showNotification(notifTitle, notifOptions).catch(() => {});
            }
          }).catch(() => {});
        } else {
          try {
            const notif = new Notification(notifTitle, notifOptions);
            window._planexTimerNotification = notif;
            notif.onclick = () => {
              try {
                window.focus();
                notif.close();
              } catch (_) {}
            };
          } catch (ctorErr) {}
        }
      } catch (e) {
        console.warn('[spawnPersistentTimerNotification] spawn error:', e);
      }
    };

    if (Notification.permission === 'granted') {
      doSpawn();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          doSpawn();
        }
      }).catch(() => {});
    }
  } catch (err) {
    console.warn('[spawnPersistentTimerNotification] error:', err);
  }
}
window.spawnPersistentTimerNotification = spawnPersistentTimerNotification;

// ── Live Focus Timer Start & Toggle Engine ──
window.planexStartFocusTimer = function(event, options = {}) {
  try {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }

    const now = Date.now();
    if (window._lastFocusTimerCall && (now - window._lastFocusTimerCall < 350)) {
      return;
    }
    window._lastFocusTimerCall = now;

    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (!targetState) {
      console.warn('[planexStartFocusTimer] Target state not available');
      return;
    }

    const isRunning = Boolean(targetState.isPomodoroRunning || targetState.isStopwatchRunning);
    if (isRunning) {
      // Already running: transition to focus view without recording or saving any data
      targetState.activeModal = 'focus';
      if (typeof state !== 'undefined' && state) state.activeModal = 'focus';
      if (typeof renderApp === 'function') renderApp();
      if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
      return;
    }

    // 1. Unconditionally clear any existing intervals before starting fresh
    if (targetState.stopwatchInterval) {
      clearInterval(targetState.stopwatchInterval);
      targetState.stopwatchInterval = null;
    }
    if (targetState.pomodoroInterval) {
      clearInterval(targetState.pomodoroInterval);
      targetState.pomodoroInterval = null;
    }
    if (window._planexTimerInterval) {
      clearInterval(window._planexTimerInterval);
      window._planexTimerInterval = null;
    }
    if (typeof window.clearAllTimerIntervals === 'function') {
      window.clearAllTimerIntervals();
    }

    // 2. Resolve subject, study phase, preset minutes, and category
    const fabState = window.fabActivityState || {};
    let subject = (options.subject || '').trim();
    if (!subject) {
      const activeChip = document.querySelector('.btn-fab-cat-chip.active, .btn-manual-cat-chip.active, .btn-focus-cat-chip.active, .study-cat-card.active, .cat-chip.active, [data-subject].active');
      if (activeChip) {
        subject = activeChip.getAttribute('data-title') || activeChip.getAttribute('data-subject') || activeChip.textContent.trim();
      }
    }
    if (!subject) {
      const subjInput = document.getElementById('input-focus-subject') || document.getElementById('fab-timer-subject-input') || document.getElementById('input-focus-subject-search') || document.getElementById('input-fab-timer-subject');
      if (subjInput && subjInput.value && subjInput.value.trim()) subject = subjInput.value.trim();
    }
    if (!subject && targetState.focusSubject) subject = String(targetState.focusSubject).trim();
    if (!subject && fabState.selectedSubject) subject = String(fabState.selectedSubject).trim();

    let phase = options.phase || targetState.selectedStudyMethod || targetState.focusPhase || fabState.selectedPhase || fabState.studyType || 'یادگیری';
    if (!options.phase) {
      const activePhaseChip = document.querySelector('#fab-timer-phase-container .active, #focus-phase-chips-container .active, .btn-phase-chip.active');
      if (activePhaseChip) {
        phase = activePhaseChip.getAttribute('data-phase') || activePhaseChip.getAttribute('data-pill') || activePhaseChip.dataset?.phase || activePhaseChip.textContent.trim();
      } else {
        const hid = document.getElementById('fab-timer-phase') || document.getElementById('focus-phase-input');
        if (hid && hid.value) phase = hid.value.trim();
      }
    }
    let categoryCode = options.categoryCode || targetState.focusCategoryCode || fabState.selectedCategoryCode;

    // Fallback to first study category if none selected
    if (!categoryCode && typeof db !== 'undefined' && typeof db.getCategories === 'function') {
      const allCats = db.getCategories() || [];
      const firstStudyCat = allCats.find(c => isStudyCategory(c));
      if (firstStudyCat) {
        categoryCode = firstStudyCat.code;
        if (!subject) subject = firstStudyCat.title;
      }
    }

    if (!subject && categoryCode && typeof db !== 'undefined' && typeof db.getCategories === 'function') {
      const allCats = db.getCategories() || [];
      const cat = allCats.find(c => c.code === categoryCode);
      if (cat) subject = cat.title;
    }
    if (!subject) subject = 'مطالعه متمرکز';

    let presetMins = parseInt(options.presetMins || targetState.focusPresetMins || fabState.timerPresetMins || 25);
    if (isNaN(presetMins) || presetMins <= 0) presetMins = 25;

    const normalizeTimerType = (v) => (v === 'stopwatch' || parseInt(v) === 0) ? 0 : (parseInt(v) === 2 ? 2 : 1);
    let timerType = options.timerType !== undefined
      ? normalizeTimerType(options.timerType)
      : (targetState.focusTimerType !== undefined
          ? normalizeTimerType(targetState.focusTimerType)
          : (fabState.timerType !== undefined ? normalizeTimerType(fabState.timerType) : 1));
    if (timerType !== 0 && timerType !== 1 && timerType !== 2) timerType = 1;

    // 3. Update state properties
    targetState.focusSubject = subject;
    targetState.focusCategoryCode = categoryCode;
    targetState.selectedStudyMethod = phase;
    targetState.focusPresetMins = presetMins;
    targetState.focusTimerType = timerType;
    if (timerType === 2) {
      targetState.focusActivityMode = 'break';
    }

    if (typeof state !== 'undefined' && state && state !== targetState) {
      state.focusSubject = subject;
      state.focusCategoryCode = categoryCode;
      state.selectedStudyMethod = phase;
      state.focusPresetMins = presetMins;
      state.focusTimerType = timerType;
      if (timerType === 2) state.focusActivityMode = 'break';
    }

    try {
      localStorage.setItem('planex_last_focus_subject', subject);
      if (categoryCode) localStorage.setItem('planex_last_focus_category', categoryCode);
    } catch (_) {}

    // 4. Start timer engine
    if (timerType === 0) {
      // Stopwatch
      targetState.timerStartTime = Date.now();
      targetState.timerPreviouslyElapsed = 0;
      targetState.stopwatchTime = 0;
      targetState.isStopwatchRunning = true;
      targetState.isPomodoroRunning = false;
      if (typeof state !== 'undefined' && state) {
        state.timerStartTime = targetState.timerStartTime;
        state.timerPreviouslyElapsed = 0;
        state.stopwatchTime = 0;
        state.isStopwatchRunning = true;
        state.isPomodoroRunning = false;
      }

      try {
        localStorage.setItem('planex_active_timer_state', JSON.stringify({
          type: 0,
          startTime: targetState.timerStartTime,
          previouslyElapsed: 0
        }));
      } catch (_) {}

      const stopwatchTick = () => {
        try {
          targetState.stopwatchTime = Math.floor((Date.now() - targetState.timerStartTime) / 1000) + targetState.timerPreviouslyElapsed;
          if (typeof state !== 'undefined' && state) state.stopwatchTime = targetState.stopwatchTime;
          if (typeof updateDocumentTitleTimer === 'function') {
            updateDocumentTitleTimer(targetState.stopwatchTime, false);
          }
          if (typeof updateTimerNotification === 'function') {
            updateTimerNotification(targetState.stopwatchTime, false);
          }
          if (typeof updateTimerDisplayDOM === 'function') {
            updateTimerDisplayDOM();
          }
        } catch (swErr) {
          console.warn('[StopwatchTick] error:', swErr);
        }
      };

      // Use global indestructible timer
      window.planexActiveTimer = {
        isRunning: true,
        timerType: 0,
        startTime: Date.now(),
        accumulatedTime: 0,
        targetEndTime: null,
        presetMins: presetMins,
        intervalId: setInterval(window.planexGlobalTimerTick, 1000)
      };
      if (typeof updateDocumentTitleTimer === 'function') updateDocumentTitleTimer(0, false);
      if (typeof spawnPersistentTimerNotification === 'function') spawnPersistentTimerNotification(subject, phase, null, true);
    } else {
      // Pomodoro (1) or Break (2)
      const durationSeconds = presetMins * 60;
      targetState.pomodoroTime = durationSeconds;
      targetState.timerTargetEndTime = Date.now() + (durationSeconds * 1000);
      targetState.isPomodoroRunning = true;
      targetState.isStopwatchRunning = false;
      if (typeof state !== 'undefined' && state) {
        state.pomodoroTime = durationSeconds;
        state.timerTargetEndTime = targetState.timerTargetEndTime;
        state.isPomodoroRunning = true;
        state.isStopwatchRunning = false;
      }

      try {
        localStorage.setItem('planex_active_timer_state', JSON.stringify({
          type: timerType,
          targetEndTime: targetState.timerTargetEndTime,
          presetMins: presetMins
        }));
      } catch (_) {}

      const pomodoroTick = () => {
        try {
          const remSecs = Math.max(0, Math.ceil((targetState.timerTargetEndTime - Date.now()) / 1000));
          targetState.pomodoroTime = remSecs;
          if (typeof state !== 'undefined' && state) state.pomodoroTime = remSecs;
          if (typeof updateDocumentTitleTimer === 'function') {
            updateDocumentTitleTimer(remSecs, true);
          }
          if (typeof updateTimerNotification === 'function') {
            updateTimerNotification(remSecs, true);
          }

          if (remSecs > 0) {
            if (typeof updateTimerDisplayDOM === 'function') {
              updateTimerDisplayDOM();
            }
          } else {
            if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
            targetState.isPomodoroRunning = false;
            if (typeof state !== 'undefined' && state) state.isPomodoroRunning = false;
            try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
            if (typeof window.finishPomodoroSession === 'function') {
              window.finishPomodoroSession();
            }
          }
        } catch (pErr) {
          console.warn('[PomodoroTick] error:', pErr);
        }
      };

      // Use global indestructible timer
      window.planexActiveTimer = {
        isRunning: true,
        timerType: timerType,
        startTime: Date.now(),
        accumulatedTime: 0,
        targetEndTime: targetState.timerTargetEndTime,
        presetMins: presetMins,
        intervalId: setInterval(window.planexGlobalTimerTick, 1000)
      };
      if (typeof updateDocumentTitleTimer === 'function') updateDocumentTitleTimer(durationSeconds, true);
      if (typeof spawnPersistentTimerNotification === 'function') spawnPersistentTimerNotification(subject, phase, targetState.timerTargetEndTime, false);
    }

    // 5. Keep screen awake and start heartbeat
    try {
      if (typeof requestWakeLock === 'function') requestWakeLock();
    } catch (_) {}

    const isRealStudy = (timerType !== 2 && targetState.focusActivityMode !== 'non-study');
    targetState.isStudying = isRealStudy;
    if (typeof state !== 'undefined' && state) state.isStudying = isRealStudy;

    try {
      if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.startStudyHeartbeat === 'function') {
        const activeSubj = (typeof window.getCurrentFocusSubjectTitle === 'function') ? window.getCurrentFocusSubjectTitle() : subject;
        const statusType = (timerType === 2) ? 'break' : (targetState.focusActivityMode === 'non-study' ? 'non-study' : 'study');
        leaderboardService.startStudyHeartbeat(activeSubj, statusType);
      }
    } catch (_) {}

    // 6. Transition to Focus Modal View & update DOM
    targetState.activeModal = 'focus';
    if (typeof state !== 'undefined' && state) state.activeModal = 'focus';
    if (typeof renderApp === 'function') renderApp();
    if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();


  } catch (err) {
    console.error('[planexStartFocusTimer] Fatal error starting timer:', err);
  }
};

window.resetTimer = function(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
    e.stopPropagation();
  }
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;

  targetState.isPomodoroRunning = false;
  targetState.isStopwatchRunning = false;
  targetState.isStudying = false;
  targetState.isImmersionMode = false;
  targetState.stopwatchTime = 0;
  targetState.pomodoroTime = (Number(targetState.focusPresetMins) || 25) * 60;
  targetState.timerStartTime = null;
  targetState.timerPreviouslyElapsed = 0;
  targetState.timerTargetEndTime = null;
  targetState.focusSessionTests = 0;

  if (typeof state !== 'undefined' && state) {
    state.isPomodoroRunning = false;
    state.isStopwatchRunning = false;
    state.isStudying = false;
    state.isImmersionMode = false;
    state.stopwatchTime = 0;
    state.pomodoroTime = (Number(state.focusPresetMins) || 25) * 60;
    state.timerStartTime = null;
    state.timerPreviouslyElapsed = 0;
    state.timerTargetEndTime = null;
    state.focusSessionTests = 0;
  }
  if (window.appState) {
    window.appState.isPomodoroRunning = false;
    window.appState.isStopwatchRunning = false;
    window.appState.isStudying = false;
    window.appState.isImmersionMode = false;
    window.appState.stopwatchTime = 0;
    window.appState.pomodoroTime = (Number(window.appState.focusPresetMins) || 25) * 60;
    window.appState.timerStartTime = null;
    window.appState.timerPreviouslyElapsed = 0;
    window.appState.timerTargetEndTime = null;
    window.appState.focusSessionTests = 0;
  }

  if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
  try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
  try { releaseWakeLock(); } catch (_) {}

  if (typeof restoreDocumentTitle === 'function') restoreDocumentTitle();
  if (typeof clearPersistentTimerNotification === 'function') clearPersistentTimerNotification();

  try {
    if (typeof pomodoroService !== 'undefined' && typeof pomodoroService.stopSession === 'function') {
      pomodoroService.stopSession().catch(() => {});
    }
  } catch (_) {}

  try {
    if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
      leaderboardService.stopStudyHeartbeat();
    }
  } catch (_) {}

  if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
  if (typeof renderApp === 'function') renderApp();
  if (typeof window.showToast === 'function') {
    window.showToast('تایمر متوقف و لغو شد (بدون ثبت) 🔄', 'info', 2500);
  }
};

window.setFocusTimerType = function(type) {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;
  const numType = parseInt(type);
  targetState.focusTimerType = numType;
  if (numType === 0) {
    targetState.stopwatchTime = 0;
  } else if (numType === 1) {
    targetState.focusPresetMins = 25;
    targetState.pomodoroTime = 25 * 60;
  } else if (numType === 2) {
    targetState.focusPresetMins = 5;
    targetState.pomodoroTime = 5 * 60;
  }
  if (typeof renderApp === 'function') renderApp();
};

window.setFocusPresetMins = function(mins) {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;
  const m = parseInt(mins) || 25;
  targetState.focusPresetMins = m;
  targetState.pomodoroTime = m * 60;
  if (typeof renderApp === 'function') renderApp();
};

window.adjustFocusTests = function(diff) {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;
  targetState.focusSessionTests = Math.max(0, (parseInt(targetState.focusSessionTests) || 0) + (parseInt(diff) || 0));
  const el = document.getElementById('focus-session-tests-display');
  if (el) {
    const numEl = el.querySelector('div:first-child');
    if (numEl) numEl.textContent = targetState.focusSessionTests;
  }
};

window.resetFocusTests = function() {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;
  targetState.focusSessionTests = 0;
  const el = document.getElementById('focus-session-tests-display');
  if (el) {
    const numEl = el.querySelector('div:first-child');
    if (numEl) numEl.textContent = '0';
  }
};

window.setFocusActivityMode = function(mode, event) {
  try {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    const isStudy = (mode !== 'non-study');
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (targetState) {
      targetState.focusActivityMode = isStudy ? 'study' : 'non-study';
    }
    if (typeof state !== 'undefined' && state && state !== targetState) {
      state.focusActivityMode = isStudy ? 'study' : 'non-study';
    }

    const studyContainer = document.getElementById('focus-activity-study-container');
    const nonStudyContainer = document.getElementById('focus-activity-nonstudy-container');
    const btnStudy = document.querySelector('.btn-activity-mode-switch[data-mode="study"]');
    const btnNonStudy = document.querySelector('.btn-activity-mode-switch[data-mode="non-study"]');

    if (studyContainer && nonStudyContainer) {
      studyContainer.style.display = isStudy ? 'block' : 'none';
      nonStudyContainer.style.display = isStudy ? 'none' : 'block';
      if (btnStudy) {
        btnStudy.classList.toggle('active', isStudy);
        btnStudy.style.border = isStudy ? '1px solid #7c3aed' : 'rgba(255,255,255,0.08)';
        btnStudy.style.background = isStudy ? '#7c3aed' : '#1f2029';
        btnStudy.style.color = isStudy ? '#ffffff' : '#a1a1aa';
      }
      if (btnNonStudy) {
        btnNonStudy.classList.toggle('active', !isStudy);
        btnNonStudy.style.border = !isStudy ? '1px solid #f59e0b' : 'rgba(255,255,255,0.08)';
        btnNonStudy.style.background = !isStudy ? '#d97706' : '#1f2029';
        btnNonStudy.style.color = !isStudy ? '#ffffff' : '#a1a1aa';
      }
      if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
    } else {
      if (typeof renderApp === 'function') renderApp();
    }
  } catch (e) { console.warn('[setFocusActivityMode]', e); }
};

window.handleSelectFocusSubject = function(el, subjectName, catCode) {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  const isNonStudy = Boolean(catCode && String(catCode).startsWith('non_'));
  if (targetState) {
    if (isNonStudy) {
      targetState.selectedNonStudyCode = catCode;
      targetState.focusActivityMode = 'non-study';
    } else {
      targetState.focusCategoryCode = catCode;
      targetState.focusActivityMode = 'study';
    }
    targetState.focusSubject = subjectName;
  }
  if (typeof state !== 'undefined' && state && state !== targetState) {
    if (isNonStudy) {
      state.selectedNonStudyCode = catCode;
      state.focusActivityMode = 'non-study';
    } else {
      state.focusCategoryCode = catCode;
      state.focusActivityMode = 'study';
    }
    state.focusSubject = subjectName;
  }

  document.querySelectorAll('.btn-focus-cat-chip, .btn-nonstudy-cat-chip').forEach(c => {
    const match = (c === el) || (c.dataset.code && c.dataset.code === catCode);
    c.classList.toggle('active', Boolean(match));
    if (match) {
      c.style.background = isNonStudy ? '#d97706' : '#7c3aed';
      c.style.borderColor = isNonStudy ? '#d97706' : '#7c3aed';
      c.style.color = '#ffffff';
    } else {
      c.style.background = '#1f2029';
      c.style.borderColor = 'rgba(255,255,255,0.08)';
      c.style.color = '#e4e4e7';
    }
  });

  const subjInput = isNonStudy ? document.getElementById('input-focus-nonstudy-subject') : document.getElementById('input-focus-subject');
  if (subjInput) subjInput.value = subjectName;
  if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
};

// ── FAB Activity Modal State & Helpers ──
window.fabActivityState = window.fabActivityState || {
  activeTab: 'timer',
  selectedSubject: '',
  selectedCategoryCode: null,
  selectedPhase: 'یادگیری',
  timerPresetMins: 25,
  timerType: 'pomodoro',
  durationMins: 60
};

window.setFabTimerType = function(type) {
  const t = (type === 'stopwatch' || parseInt(type) === 0) ? 0 : (parseInt(type) === 2 ? 2 : 1);
  window.fabActivityState = window.fabActivityState || {};
  window.fabActivityState.timerType = (t === 0) ? 'stopwatch' : (t === 2 ? 'break' : 'pomodoro');
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.focusTimerType = t;
    if (t === 0) targetState.stopwatchTime = 0;
  }
  document.querySelectorAll('.btn-fab-timer-type, .fab-timer-type-btn').forEach(btn => {
    const raw = btn.dataset.timerType || btn.dataset.type;
    const btnT = (raw === 'stopwatch' || parseInt(raw) === 0) ? 0 : (parseInt(raw) === 2 ? 2 : 1);
    const isActive = (btnT === t);
    btn.classList.toggle('active', isActive);
    // Inline visual sync (styles are baked inline in the modal markup)
    try {
      if (btnT === 0) {
        btn.style.border = isActive ? '1.5px solid #38bdf8' : '1.5px solid rgba(255,255,255,0.08)';
        btn.style.background = isActive ? 'rgba(56,189,248,0.15)' : '#1f2029';
        btn.style.color = isActive ? '#7dd3fc' : '#a1a1aa';
      } else if (btnT === 2) {
        btn.style.border = isActive ? '1px solid #0284c7' : '1px solid rgba(255,255,255,0.08)';
        btn.style.background = isActive ? '#0284c7' : 'transparent';
        btn.style.color = isActive ? '#ffffff' : '#a1a1aa';
      } else {
        btn.style.border = isActive ? '1.5px solid #10b981' : '1.5px solid rgba(255,255,255,0.08)';
        btn.style.background = isActive ? 'rgba(16,185,129,0.15)' : '#1f2029';
        btn.style.color = isActive ? '#34d399' : '#a1a1aa';
      }
    } catch (_) {}
  });
};

window.switchFabActivityTab = function(tab, event) {
  if (event) {
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
  }
  window.fabActivityState = window.fabActivityState || {};
  window.fabActivityState.activeTab = tab;
  
  const timerSec = document.getElementById('section-live-timer') || document.getElementById('fab-timer-section');
  const manualSec = document.getElementById('section-manual-log') || document.getElementById('fab-manual-section');
  if (timerSec) timerSec.style.display = (tab === 'timer') ? 'block' : 'none';
  if (manualSec) manualSec.style.display = (tab === 'manual') ? 'block' : 'none';
  
  document.querySelectorAll('.mode-switch-btn').forEach(btn => {
    const bTab = btn.dataset.tab || (btn.id === 'btn-mode-manual' ? 'manual' : 'timer');
    btn.classList.toggle('active', bTab === tab);
  });
};

window.updateFabDurationPreview = function() {
  try {
    // FAB manual tab: recompute duration from start/end time inputs and mirror it
    // into the hidden #fab-manual-duration-input consumed by saveManualActivityLog
    const startEl = document.getElementById('input-fab-start-time');
    const endEl = document.getElementById('input-fab-end-time');
    if (startEl && endEl) {
      const [sH, sM] = (startEl.value || '08:00').split(':').map(Number);
      const [eH, eM] = (endEl.value || '09:30').split(':').map(Number);
      let diff = 60;
      if (!isNaN(sH) && !isNaN(sM) && !isNaN(eH) && !isNaN(eM)) {
        const startMins = sH * 60 + sM;
        let endMins = eH * 60 + eM;
        if (endMins < startMins) endMins += 24 * 60; // crossed midnight
        if (endMins - startMins > 0) diff = endMins - startMins;
      }
      const hidden = document.getElementById('fab-manual-duration-input');
      if (hidden) hidden.value = diff;
      if (window.fabActivityState) window.fabActivityState.durationMins = diff;
      const badge = document.getElementById('fab-manual-computed-duration-badge');
      if (badge) {
        const bh = Math.floor(diff / 60), bm = diff % 60;
        badge.textContent = (bh > 0 && bm > 0) ? `${bh} ساعت و ${bm} دقیقه` : (bh > 0 ? `${bh} ساعت` : `${bm} دقیقه`);
      }
    }
  } catch (_) {}
  const input = document.getElementById('fab-manual-duration-input') || document.getElementById('manual-duration-input');
  const val = parseInt(input?.value || 60);
  const preview = document.getElementById('fab-manual-duration-preview');
  if (preview) {
    const h = Math.floor(val / 60);
    const m = val % 60;
    let text = '';
    if (h > 0 && m > 0) text = `${h} ساعت و ${m} دقیقه`;
    else if (h > 0) text = `${h} ساعت`;
    else text = `${m} دقیقه`;
    preview.textContent = `مجموع نهایی ثبت‌شده: ${text} (${val} دقیقه)`;
  }
};

window.updateFabTestScorePreview = function() {
  const correct = parseInt(document.getElementById('fab-test-correct')?.value || document.getElementById('input-fab-test-correct')?.value) || 0;
  const wrong = parseInt(document.getElementById('fab-test-wrong')?.value || document.getElementById('input-fab-test-wrong')?.value) || 0;
  const unanswered = parseInt(document.getElementById('fab-test-unanswered')?.value || document.getElementById('input-fab-test-unanswered')?.value) || 0;
  const total = correct + wrong + unanswered;
  // Live total badge inside the FAB modal
  const totalBadge = document.getElementById('fab-manual-tests-total-badge');
  if (totalBadge) totalBadge.textContent = `مجموع: ${total} تست`;
  const preview = document.getElementById('fab-test-score-preview');
  if (preview) {
    if (total > 0) {
      const pct = (((correct * 3 - wrong) / (total * 3)) * 100).toFixed(1);
      preview.textContent = `درصد تراز: %${pct} (${total} تست کل)`;
    } else {
      preview.textContent = `درصد تراز: %۰`;
    }
  }
};

// ── Manual Log Modal Helpers ──
window.syncManualTimeInputs = function(source) {
  const startEl = document.getElementById('input-manual-start-time');
  const endEl = document.getElementById('input-manual-end-time');
  const durInput = document.getElementById('manual-duration-input');
  if (!startEl || !endEl || !durInput) return;

  if (source === 'from_times') {
    const [sH, sM] = (startEl.value || '08:00').split(':').map(Number);
    const [eH, eM] = (endEl.value || '09:00').split(':').map(Number);
    if (!isNaN(sH) && !isNaN(sM) && !isNaN(eH) && !isNaN(eM)) {
      const startMins = sH * 60 + sM;
      let endMins = eH * 60 + eM;
      if (endMins < startMins) endMins += 24 * 60;
      const diff = Math.max(1, endMins - startMins);
      durInput.value = diff;
      window.updateManualDurationPreview(diff);
    }
  } else {
    // source === 'from_duration'
    const durVal = parseInt(durInput.value) || 60;
    const [sH, sM] = (startEl.value || '08:00').split(':').map(Number);
    if (!isNaN(sH) && !isNaN(sM)) {
      const startMins = sH * 60 + sM;
      const endMins = (startMins + durVal) % 1440;
      const eH = String(Math.floor(endMins / 60)).padStart(2, '0');
      const eM = String(endMins % 60).padStart(2, '0');
      endEl.value = `${eH}:${eM}`;
    }
  }
};

window.adjustManualDuration = function(delta) {
  const input = document.getElementById('manual-duration-input') || document.querySelector('[data-alias="input-manual-duration"]') || document.getElementById('fab-manual-duration-input');
  if (!input) return;
  let val = parseInt(input.value) || 60;
  val = Math.max(5, val + parseInt(delta));
  input.value = val;
  if (window.fabActivityState) window.fabActivityState.durationMins = val;
  window.updateManualDurationPreview(val);
  window.updateFabDurationPreview();
};

window.setManualDurationPreset = function(mins) {
  const input = document.getElementById('manual-duration-input') || document.querySelector('[data-alias="input-manual-duration"]') || document.getElementById('fab-manual-duration-input');
  if (!input) return;
  const val = parseInt(mins) || 60;
  input.value = val;
  if (window.fabActivityState) window.fabActivityState.durationMins = val;
  window.updateManualDurationPreview(val);
  window.updateFabDurationPreview();
};

window.setManualDurationMode = function(mode) {
  window.manualDurationMode = mode;
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState && targetState.manualLogState) {
    targetState.manualLogState.durationMode = mode;
  }
  const btnAdd = document.getElementById('btn-dur-mode-add');
  const btnRep = document.getElementById('btn-dur-mode-replace');
  if (btnAdd) btnAdd.classList.toggle('active', mode === 'add');
  if (btnRep) btnRep.classList.toggle('active', mode === 'replace');
  window.updateManualDurationPreview();
};

window.updateManualDurationPreview = function(customVal) {
  const input = document.getElementById('manual-duration-input') || document.querySelector('[data-alias="input-manual-duration"]') || document.getElementById('fab-manual-duration-input');
  const val = customVal !== undefined ? parseInt(customVal) : (parseInt(input?.value) || 60);
  const h = Math.floor(val / 60);
  const m = val % 60;
  let text = '';
  if (h > 0 && m > 0) text = `${h} ساعت و ${m} دقیقه`;
  else if (h > 0) text = `${h} ساعت`;
  else text = `${m} دقیقه`;
  const preview = document.getElementById('manual-duration-preview-text');
  if (preview) {
    preview.textContent = `مجموع نهایی ثبت‌شده: ${text} (${val} دقیقه)`;
  }
  // Human-readable duration badge in Manual Log Modal
  const badge = document.getElementById('manual-duration-human-badge');
  if (badge) badge.textContent = text;

  // Sync end time input with updated duration if start time exists
  const manStart = document.getElementById('input-manual-start-time');
  const manEnd = document.getElementById('input-manual-end-time');
  if (manStart && manEnd) {
    const [sH, sM] = (manStart.value || '08:00').split(':').map(Number);
    if (!isNaN(sH) && !isNaN(sM)) {
      const startMins = sH * 60 + sM;
      const endMins = (startMins + val) % 1440;
      const eH = String(Math.floor(endMins / 60)).padStart(2, '0');
      const eM = String(endMins % 60).padStart(2, '0');
      manEnd.value = `${eH}:${eM}`;
    }
  }

  // Live "final total" summary (add = today + new, replace = new only)
  try {
    const replaceMode = (window.manualDurationMode === 'replace');
    const todayMins = (typeof db !== 'undefined' && typeof db.getStudyMinutesByDate === 'function') ? (parseInt(db.getStudyMinutesByDate()) || 0) : 0;
    const finalMins = replaceMode ? val : (todayMins + val);
    const fh = Math.floor(finalMins / 60), fm = finalMins % 60;
    const finalText = (fh > 0 && fm > 0) ? `${fh} ساعت و ${fm} دقیقه` : (fh > 0 ? `${fh} ساعت` : `${fm} دقیقه`);
    const finalEl = document.getElementById('manual-final-total-text');
    if (finalEl) finalEl.textContent = finalText;
  } catch (_) {}
  // Preset button active state sync
  document.querySelectorAll('.btn-quick-dur-preset').forEach(b => {
    const mins = parseInt(b.dataset.mins);
    const on = (!isNaN(mins) && mins === val);
    b.classList.toggle('active', on);
    try {
      b.style.border = on ? '1px solid #7c3aed' : '1px solid rgba(255,255,255,0.08)';
      b.style.background = on ? '#7c3aed' : '#1f2029';
      b.style.color = on ? '#ffffff' : '#a1a1aa';
    } catch (_) {}
  });
};

window.handleSelectManualSubject = function(el, subjectName, catCode) {
  window.fabActivityState = window.fabActivityState || {};
  window.fabActivityState.selectedSubject = subjectName;
  window.fabActivityState.selectedCategoryCode = catCode;

  const isNonStudy = Boolean(catCode && String(catCode).startsWith('non_'));
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (targetState) {
    targetState.focusSubject = subjectName;
    if (isNonStudy) {
      targetState.selectedNonStudyCode = catCode;
    } else {
      targetState.focusCategoryCode = catCode;
    }
    if (targetState.manualLogState) {
      targetState.manualLogState.subject = subjectName;
      if (isNonStudy) {
        targetState.manualLogState.selectedNonStudyCode = catCode;
      } else {
        targetState.manualLogState.selectedCategoryCode = catCode;
      }
    }
  }
  if (typeof state !== 'undefined' && state && state !== targetState) {
    state.focusSubject = subjectName;
    if (isNonStudy) {
      state.selectedNonStudyCode = catCode;
    } else {
      state.focusCategoryCode = catCode;
    }
    if (state.manualLogState) {
      state.manualLogState.subject = subjectName;
      if (isNonStudy) {
        state.manualLogState.selectedNonStudyCode = catCode;
      } else {
        state.manualLogState.selectedCategoryCode = catCode;
      }
    }
  }

  document.querySelectorAll('.btn-manual-cat-chip, .btn-fab-cat-chip, .btn-manual-nonstudy-chip').forEach(c => {
    const match = (c === el) || (c.dataset.catCode && c.dataset.catCode === catCode) || (c.dataset.code && c.dataset.code === catCode) || (c.textContent.trim() === subjectName.trim());
    c.classList.toggle('active', Boolean(match));
  });

  ['input-manual-custom-subject', 'fab-manual-custom-subject', 'fab-timer-subject-input', 'input-manual-subject', 'input-fab-manual-subject', 'input-fab-timer-subject', 'input-manual-nonstudy-subject'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = subjectName;
  });
};

window.selectStudyPhase = function(el, phaseName) {
  try {
    if (!phaseName && el) {
      phaseName = el.getAttribute('data-phase') || el.getAttribute('data-pill') || el.dataset?.phase || el.dataset?.pill || el.textContent.trim();
    }
    if (!phaseName) phaseName = 'یادگیری';

    // 1. Sync across all namespaces and state objects
    window.fabActivityState = window.fabActivityState || {};
    window.fabActivityState.selectedPhase = phaseName;
    window.fabActivityState.studyType = phaseName;

    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (targetState) {
      targetState.selectedStudyMethod = phaseName;
      targetState.focusPhase = phaseName;
      if (!targetState.manualLogState) targetState.manualLogState = {};
      targetState.manualLogState.studyPhase = phaseName;
      targetState.manualLogState.studyType = phaseName;
    }
    if (typeof window.appState !== 'undefined' && window.appState && window.appState !== targetState) {
      window.appState.selectedStudyMethod = phaseName;
      window.appState.focusPhase = phaseName;
      if (!window.appState.manualLogState) window.appState.manualLogState = {};
      window.appState.manualLogState.studyPhase = phaseName;
      window.appState.manualLogState.studyType = phaseName;
    }
    if (typeof state !== 'undefined' && state && state !== targetState) {
      state.selectedStudyMethod = phaseName;
      state.focusPhase = phaseName;
      if (!state.manualLogState) state.manualLogState = {};
      state.manualLogState.studyPhase = phaseName;
      state.manualLogState.studyType = phaseName;
    }

    // 2. Sync hidden input fields
    ['fab-timer-phase', 'input-manual-phase', 'fab-manual-phase', 'focus-phase-input'].forEach(id => {
      let inp = document.getElementById(id);
      if (!inp) {
        inp = document.createElement('input');
        inp.type = 'hidden';
        inp.id = id;
        document.body.appendChild(inp);
      }
      inp.value = phaseName;
    });

    // 3. Update DOM UI highlighting for the clicked button and its container siblings
    const allPhasePills = document.querySelectorAll('.btn-phase-chip, .btn-manual-study-pill, .btn-fab-study-pill, .study-phase-btn, .phase-chip, [data-phase], [data-pill]');
    allPhasePills.forEach(p => {
      const pPhase = p.getAttribute('data-phase') || p.getAttribute('data-pill') || p.dataset?.phase || p.dataset?.pill || p.textContent.trim();
      const isMatch = (p === el) || (pPhase === phaseName) || (p.textContent.trim().includes(phaseName));
      
      p.classList.toggle('active', isMatch);

      const isLiveTimerTheme = p.closest('#fab-timer-phase-container, [data-section="section-live-timer"]') !== null;
      if (isMatch) {
        if (isLiveTimerTheme) {
          p.style.border = '1.5px solid #10b981';
          p.style.background = 'rgba(16, 185, 129, 0.2)';
          p.style.color = '#ffffff';
          const desc = p.querySelector('span[style*="color"]');
          if (desc) desc.style.color = '#a7f3d0';
        } else {
          p.style.border = '1px solid #7c3aed';
          p.style.background = '#7c3aed';
          p.style.color = '#ffffff';
        }
      } else {
        p.style.border = '1px solid rgba(255, 255, 255, 0.08)';
        p.style.background = '#1f2029';
        p.style.color = '#e4e4e7';
        if (isLiveTimerTheme) {
          const desc = p.querySelector('span[style*="color"]');
          if (desc) desc.style.color = '#71717a';
        }
      }
    });
  } catch (e) {
    console.warn('[selectStudyPhase] Error:', e);
  }
};
window.handleSelectManualPhase = window.selectStudyPhase;


window.updateManualTestScorePreview = function() {
  const correct = parseInt(document.getElementById('input-manual-test-correct')?.value) || 0;
  const wrong = parseInt(document.getElementById('input-manual-test-wrong')?.value) || 0;
  const unanswered = parseInt(document.getElementById('input-manual-test-unanswered')?.value) || 0;
  const total = correct + wrong + unanswered;

  const scoreEl = document.getElementById('manual-test-score-preview') || document.getElementById('manual-score-percentage-text');
  if (scoreEl) {
    if (total > 0) {
      const pct = (((correct * 3 - wrong) / (total * 3)) * 100).toFixed(1);
      scoreEl.textContent = `%${pct}`;
    } else {
      scoreEl.textContent = `%۰`;
    }
  }

  const totalEl = document.getElementById('manual-total-tests-count') || document.getElementById('manual-tests-total-badge');
  if (totalEl) totalEl.textContent = total > 0 ? `${total} تست` : '۰';
};

// ── Manual Log Modal: activity mode tabs & Focus accordion inline fallback ──
window.setManualLogMode = function(mode, event) {
  try {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    const isStudy = (mode !== 'non-study');
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (targetState) {
      if (!targetState.manualLogState) targetState.manualLogState = {};
      targetState.manualLogState.activityMode = isStudy ? 'study' : 'non-study';
    }
    if (typeof state !== 'undefined' && state && state !== targetState) {
      if (!state.manualLogState) state.manualLogState = {};
      state.manualLogState.activityMode = isStudy ? 'study' : 'non-study';
    }
    if (window.fabActivityState) {
      window.fabActivityState.activityMode = isStudy ? 'study' : 'non-study';
    }

    const studyCats = document.getElementById('manual-study-cats-section');
    const nonStudyCats = document.getElementById('manual-nonstudy-cats-section');
    const testsSection = document.getElementById('manual-tests-section');
    const durModeSection = document.getElementById('manual-duration-mode-section');
    const btnStudy = document.getElementById('btn-manual-mode-study');
    const btnNonStudy = document.getElementById('btn-manual-mode-nonstudy');
    const submitBtn = document.getElementById('btn-submit-manual-log') || document.getElementById('btn-save-manual-activity-log') || document.querySelector('[data-alias="btn-save-manual-activity-log"]');

    if (studyCats && nonStudyCats) {
      studyCats.style.display = isStudy ? 'block' : 'none';
      nonStudyCats.style.display = isStudy ? 'none' : 'block';
      if (testsSection) testsSection.style.display = isStudy ? 'block' : 'none';
      if (durModeSection) durModeSection.style.display = isStudy ? 'block' : 'none';

      if (btnStudy) {
        btnStudy.classList.toggle('active', isStudy);
        btnStudy.style.border = isStudy ? '1px solid #7c3aed' : 'transparent';
        btnStudy.style.background = isStudy ? '#7c3aed' : 'transparent';
        btnStudy.style.color = isStudy ? '#ffffff' : '#a1a1aa';
      }
      if (btnNonStudy) {
        btnNonStudy.classList.toggle('active', !isStudy);
        btnNonStudy.style.border = !isStudy ? '1px solid #7c3aed' : 'transparent';
        btnNonStudy.style.background = !isStudy ? '#7c3aed' : 'transparent';
        btnNonStudy.style.color = !isStudy ? '#ffffff' : '#a1a1aa';
      }
      if (submitBtn) {
        if (isStudy) {
          submitBtn.style.background = '#7c3aed';
          submitBtn.innerHTML = '<span id="btn-submit-manual-log-icon" style="font-size: 1.2rem;">💾</span><span id="btn-submit-manual-log-text">ثبت در کارنامه و نمودارها</span>';
        } else {
          submitBtn.style.background = 'linear-gradient(135deg, #d97706 0%, #b45309 100%)';
          submitBtn.innerHTML = '<span id="btn-submit-manual-log-icon" style="font-size: 1.2rem;">☕</span><span id="btn-submit-manual-log-text">ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)</span>';
        }
      }
    } else {
      if (typeof renderApp === 'function') renderApp();
    }
  } catch (e) { console.warn('[setManualLogMode]', e); }
};

window.toggleFocusAccordion = function(key, event) {
  try {
    if (event) {
      if (typeof event.preventDefault === 'function') event.preventDefault();
      if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (targetState) {
      if (!targetState.focusAccordions) targetState.focusAccordions = { activity: false, timing: false, testNote: false, audio: false };
      if (key && (key in targetState.focusAccordions)) {
        targetState.focusAccordions[key] = !targetState.focusAccordions[key];
      }
    }
    const drawer = document.getElementById(`accordion-drawer-${key}`);
    const btn = document.getElementById(`btn-accordion-${key}`) || (event && (event.currentTarget || event.target.closest('button')));
    const chevron = btn ? btn.querySelector('.accordion-chevron') : null;

    if (drawer) {
      const isCurrentlyOpen = (drawer.style.display !== 'none');
      const willOpen = !isCurrentlyOpen;
      drawer.style.display = willOpen ? 'block' : 'none';
      if (chevron) {
        chevron.style.transform = willOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    } else if (typeof renderApp === 'function') {
      renderApp();
    }
  } catch (e) { console.warn('[toggleFocusAccordion]', e); }
};

// ── Save Manual Activity Log Engine ──
window.saveManualActivityLog = function(event) {
  if (event) {
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
  }

  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  const fabState = window.fabActivityState || {};

  // 1. Read duration and time interval
  const startEl = document.getElementById('input-manual-start-time') || document.getElementById('input-fab-start-time');
  const endEl = document.getElementById('input-manual-end-time') || document.getElementById('input-fab-end-time');

  let rawStartTime = (startEl && startEl.value) ? startEl.value.trim() : null;
  let rawEndTime = (endEl && endEl.value) ? endEl.value.trim() : null;

  const durInput = document.getElementById('manual-duration-input') || document.querySelector('[data-alias="input-manual-duration"]') || document.getElementById('fab-manual-duration-input');
  let duration = parseInt(durInput?.value) || 0;
  if ((!duration || isNaN(duration) || duration <= 0) && rawStartTime && rawEndTime) {
    try {
      const [sH, sM] = rawStartTime.split(':').map(Number);
      const [eH, eM] = rawEndTime.split(':').map(Number);
      if (!isNaN(sH) && !isNaN(sM) && !isNaN(eH) && !isNaN(eM)) {
        const startMins = sH * 60 + sM;
        let endMins = eH * 60 + eM;
        if (endMins < startMins) endMins += 24 * 60;
        if (endMins - startMins > 0) duration = endMins - startMins;
      }
    } catch (_) {}
  }
  if (!duration) duration = parseInt(fabState.durationMins) || (targetState?.manualLogState?.durationMins) || 0;

  if (isNaN(duration) || duration <= 0) {
    if (typeof window.showToast === 'function') {
      window.showToast('لطفاً مدت زمان معتبری (بیشتر از ۰ دقیقه) وارد نمایید ⚠️', 'warning', 3500);
    } else {
      alert('لطفاً مدت زمان معتبری وارد نمایید.');
    }
    return;
  }

  // Calculate today-anchored ms timestamps for start and end time
  const now = new Date();
  let startTimeMs = null;
  let endTimeMs = null;

  if (rawStartTime && rawStartTime.includes(':')) {
    const [sH, sM] = rawStartTime.split(':').map(Number);
    if (!isNaN(sH) && !isNaN(sM)) {
      const dStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), sH, sM, 0, 0);
      startTimeMs = dStart.getTime();
    }
  }

  if (rawEndTime && rawEndTime.includes(':')) {
    const [eH, eM] = rawEndTime.split(':').map(Number);
    if (!isNaN(eH) && !isNaN(eM)) {
      const dEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), eH, eM, 0, 0);
      if (startTimeMs && dEnd.getTime() < startTimeMs) {
        dEnd.setDate(dEnd.getDate() + 1);
      }
      endTimeMs = dEnd.getTime();
    }
  }

  if (startTimeMs && !endTimeMs && duration > 0) {
    endTimeMs = startTimeMs + duration * 60 * 1000;
  } else if (!startTimeMs && endTimeMs && duration > 0) {
    startTimeMs = endTimeMs - duration * 60 * 1000;
  }

  // 2. Read Subject & Category
  const isStudyMode = (targetState?.manualLogState?.activityMode !== 'non-study');
  const isNonStudySave = !isStudyMode;

  const customSubj = (isStudyMode ? document.getElementById('input-manual-subject')?.value : document.getElementById('input-manual-nonstudy-subject')?.value) 
    || document.getElementById('input-manual-custom-subject')?.value 
    || document.getElementById('fab-manual-custom-subject')?.value 
    || document.getElementById('input-fab-manual-subject')?.value;
  let subject = (customSubj && customSubj.trim()) || fabState.selectedSubject || targetState?.manualLogState?.subject || '';
  if (!subject) {
    const activeChipSelector = isStudyMode 
      ? '.btn-manual-cat-chip.active, .btn-fab-cat-chip.active, .study-cat-card.active, .cat-chip.active' 
      : '.btn-manual-nonstudy-chip.active';
    const activeChip = document.querySelector(activeChipSelector);
    if (activeChip) {
      subject = activeChip.getAttribute('data-title') || activeChip.getAttribute('data-subject') || activeChip.textContent.trim();
    }
  }

  let categoryCode = isStudyMode 
    ? (targetState?.manualLogState?.selectedCategoryCode || fabState.selectedCategoryCode) 
    : (targetState?.manualLogState?.selectedNonStudyCode || 'non_sports');

  if (isStudyMode) {
    if (categoryCode && String(categoryCode).startsWith('non_')) {
      categoryCode = null;
    }
    if (typeof db !== 'undefined' && typeof db.getCategories === 'function') {
      const allCats = db.getCategories() || [];
      if (!categoryCode && subject) {
        const found = allCats.find(c => isStudyCategory(c) && c.title.trim() === subject.trim());
        if (found) categoryCode = found.code;
      }
      if (!categoryCode) {
        const firstStudyCat = allCats.find(c => isStudyCategory(c));
        if (firstStudyCat) {
          categoryCode = firstStudyCat.code;
          if (!subject) subject = firstStudyCat.title;
        }
      }
      if (!subject && categoryCode) {
        const found = allCats.find(c => c.code === categoryCode);
        if (found) subject = found.title;
      }
    }
    if (!subject) subject = 'عمومی';
  } else {
    if (!categoryCode || !String(categoryCode).startsWith('non_')) {
      categoryCode = targetState?.manualLogState?.selectedNonStudyCode || 'non_sports';
    }
    if (!subject) {
      const foundNonStudy = (typeof db !== 'undefined' && typeof db.getNonStudyCategories === 'function' ? db.getNonStudyCategories() : []).find(c => c.code === categoryCode);
      subject = foundNonStudy?.title || 'فعالیت غیردرسی';
    }
  }

  // 3. Read Phase & Tests
  const activePhaseEl = document.querySelector('#manual-phase-chips-list .active, #fab-manual-phase-container .active, .btn-manual-study-pill.active, .btn-phase-chip.active');
  const domPhase = activePhaseEl ? (activePhaseEl.getAttribute('data-phase') || activePhaseEl.getAttribute('data-pill') || activePhaseEl.dataset?.phase || activePhaseEl.textContent.trim()) : null;
  const hidPhase = document.getElementById('input-manual-phase')?.value || document.getElementById('fab-manual-phase')?.value;
  const phase = domPhase || hidPhase || fabState.selectedPhase || fabState.studyType || targetState?.manualLogState?.studyPhase || targetState?.selectedStudyMethod || 'یادگیری';
  const correct = parseInt(document.getElementById('input-manual-test-correct')?.value || document.getElementById('fab-test-correct')?.value || document.getElementById('input-fab-test-correct')?.value) || 0;
  const wrong = parseInt(document.getElementById('input-manual-test-wrong')?.value || document.getElementById('fab-test-wrong')?.value || document.getElementById('input-fab-test-wrong')?.value) || 0;
  const unanswered = parseInt(document.getElementById('input-manual-test-unanswered')?.value || document.getElementById('fab-test-unanswered')?.value || document.getElementById('input-fab-test-unanswered')?.value) || 0;
  let totalTests = correct + wrong + unanswered;
  if (totalTests === 0) {
    totalTests = parseInt(document.getElementById('input-manual-tests')?.value || document.getElementById('fab-manual-tests-input')?.value) || 0;
  }

  // 4. Read Note & Duration Mode
  const note = (document.getElementById('input-manual-note')?.value || document.getElementById('fab-manual-note')?.value || '').trim();
  const durationMode = window.manualDurationMode || targetState?.manualLogState?.durationMode || 'add';

  // 5. Save via db.recordFocusSession
  let saved = null;
  try {
    if (typeof db !== 'undefined' && typeof db.recordFocusSession === 'function') {
      saved = db.recordFocusSession({
        type: isNonStudySave ? 'non-study' : 'study',
        activityType: isNonStudySave ? 'non_study' : 'study',
        is_study_time: !isNonStudySave,
        counts_for_study: !isNonStudySave,
        isBreak: false,
        duration: duration,
        minutes: duration,
        startTime: startTimeMs || rawStartTime || undefined,
        endTime: endTimeMs || rawEndTime || undefined,
        startTimeStr: rawStartTime || undefined,
        endTimeStr: rawEndTime || undefined,
        tests: totalTests,
        testCount: totalTests,
        categoryCode: categoryCode,
        categoryTitle: subject,
        subject: subject,
        studyMethod: phase,
        note: note,
        timerType: 'manual',
        durationMode: durationMode,
        testDetails: {
          correct,
          wrong,
          unanswered
        }
      });
    }
  } catch (err) {
    console.error('Error saving manual focus session:', err);
  }

  // 6. Invalidate caches and trigger reactivity
  try {
    if (window.dashboardChartInstances) window.dashboardChartInstances = null;
    window.dispatchEvent(new CustomEvent('activity-saved', { detail: { saved, duration, tests: totalTests } }));
    if (typeof window.updateCharts === 'function') window.updateCharts();
    if (typeof window.renderDashboard === 'function') window.renderDashboard();
  } catch (e) {}

  // 7. Auto-cloud sync disabled to protect KV free tier limits (Sync is explicit user trigger only)

  // 8. Close Modal
  if (targetState) targetState.activeModal = null;
  window.closeActiveModal();

  // 9. Show Success Toast
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;
  const durStr = hours > 0 ? (mins > 0 ? `${hours} ساعت و ${mins} دقیقه` : `${hours} ساعت`) : `${mins} دقیقه`;
  if (typeof window.showToast === 'function') {
    window.showToast(`فعالیت با موفقیت ثبت شد ✅ (${durStr} «${subject}»)`, 'success', 4500);
  } else {
    alert(`فعالیت با موفقیت ثبت شد ✅ (${durStr} «${subject}»)`);
  }

  // 10. Re-render UI
  if (typeof renderApp === 'function') renderApp();
};

window.openPercentCalculator = () => { state.activeModal = 'percentCalc'; renderApp(); };
window.openRankEstimator = () => { state.activeModal = 'rankEstimator'; renderApp(); };
window.openSleepScheduler = () => { state.activeModal = 'sleepScheduler'; renderApp(); };
window.openGPACalculator = () => { state.activeModal = 'gpaCalc'; renderApp(); };
window.openExamBox = () => { state.activeModal = 'examBox'; renderApp(); };
window.openJalaliDayDetailsModal = (dateStr) => { state.selectedJalaliDetailDate = dateStr; state.activeModal = 'jalaliDayDetails'; renderApp(); };

window.deleteFocusSession = (sessionId) => {
  if (confirm('آیا از حذف این پارت مطالعه اطمینان دارید؟')) {
    db.deleteFocusSession(sessionId);
    if (window.dashboardChartInstances) window.dashboardChartInstances = null;
    window.dispatchEvent(new CustomEvent('activity-saved', { detail: { type: 'delete', sessionId } }));
    renderApp();
  }
};

// Add New Dashboard Activity Handler
window.addNewDashboardActivity = () => {
  if (typeof window.openActivityModal === 'function') {
    window.openActivityModal();
  }
};

// Delete Dashboard Activity Handler
window.deleteDashboardActivity = (catCode) => {
  if (!confirm('آیا از حذف این فعالیت اطمینان دارید؟ (تاریخچه تیک‌های این فعالیت نیز برای همیشه پاک خواهد شد)')) return;

  // 1. Remove from categories
  let categories = db.getCategories();
  categories = categories.filter(c => c.code !== catCode);
  localStorage.setItem('planex_categories', JSON.stringify(categories));

  // 2. Remove from hourlyLogs
  const data = JSON.parse(localStorage.getItem('planex_hourly_logs') || '{}');
  Object.keys(data).forEach(weekId => {
    Object.keys(data[weekId]).forEach(key => {
      if (key.endsWith('_multi')) {
        data[weekId][key] = data[weekId][key].filter(c => c !== catCode);
      } else {
        if (data[weekId][key] && data[weekId][key].categoryCode === catCode) {
          if (data[weekId][key].testCount > 0) {
            data[weekId][key].categoryCode = null;
          } else {
            delete data[weekId][key];
          }
        }
      }
    });
  });
  localStorage.setItem('planex_hourly_logs', JSON.stringify(data));

  renderApp();
};

// 100% Instant Local Time-Blocker Slot Ticking Engine
window.tickTimeBlockerSlot = (dayIdx, slotIdx) => {
  const currentWeek = db.getCurrentWeek();
  const weekId = currentWeek ? currentWeek.id : 1;
  const categories = db.getCategories();
  const activeCode = window.activePaletteCode || 'ع-س';
  const cat = categories.find(c => c.code === activeCode);
  const title = cat ? cat.title : 'مطالعه';

  const hourlyLogs = db.getHourlyLogs(weekId);
  const currentLog = hourlyLogs[`${dayIdx}_${slotIdx}`];

  if (currentLog && currentLog.categoryCode === activeCode) {
    // Untick if clicked again with same category
    db.setHourlyLog(weekId, dayIdx, slotIdx, null);
  } else {
    // Paint & Tick with active category
    // Signature: (weekId, dayIndex, slotIndex, categoryCode, note, subject, testCount, studyMethod, description, rating)
    db.setHourlyLog(weekId, dayIdx, slotIdx, activeCode, 'ثبت آنی پالت', null, 0, null, title, 0);
  }
  renderApp();
};


export function normalizeTab(tabId) {
  if (tabId === undefined || tabId === null) return 0;
  const str = String(tabId).trim().toLowerCase();
  if (str === '0' || str === 'dashboard' || str === 'داشبورد' || str === 'home') return 0;
  if (str === '1' || str === 'planning' || str === 'برنامه‌ریزی' || str === 'برنامه ریزی' || str === 'plan' || str === 'planner') return 1;
  if (str === '2' || str === 'routines' || str === 'روتین‌ها' || str === 'روتین ها' || str === 'routine') return 2;
  if (str === '3' || str === 'tools' || str === 'ابزارها' || str === 'tool') return 3;
  if (str === '4' || str === 'articles' || str === 'مقالات' || str === 'article' || str === 'questions' || str === 'questionbank' || str === 'آزمونها' || str === 'آزمون‌ها' || str === 'بانک سوالات' || str === 'exam') return 4;
  if (str === '5' || str === 'leaderboard' || str === 'competition' || str === 'رقابت' || str === 'لیدربرد' || str === 'compete' || str === 'ranking') return 'leaderboard';
  return tabId;
}
window.normalizeTab = normalizeTab;

window.switchTab = function(tabId, options = {}) {
  const currentAppState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!currentAppState) return;

  const normTab = normalizeTab(tabId);
  const isLeaderboard = (normTab === 'leaderboard' || normTab === 5 || normTab === '5');
  const isArticles = (normTab === 4 || normTab === '4' || normTab === 'articles');

  currentAppState.activeTab = normTab;

  if (isArticles) {
    if (options && options.article) {
      currentAppState.selectedArticleId = options.article;
    }
    if (options && options.exam) {
      currentAppState.selectedArticleId = 'questions-1404';
      if (!window.questionBankState) {
        window.questionBankState = {
          selectedExamId: options.exam,
          searchQuery: '',
          selectedCategory: 'همه',
          activeRecallMode: false,
          revealedQuestionIds: new Set(),
          userAnswers: {}
        };
      } else {
        window.questionBankState.selectedExamId = options.exam;
      }
    }
  } else {
    currentAppState.selectedArticleId = null;
  }

  // Ensure URL search parameters are synchronized without page reload
  try {
    const url = new URL(window.location.href);
    const tabNameMap = {
      0: 'dashboard',
      1: 'planning',
      2: 'routines',
      3: 'tools',
      4: 'articles',
      'leaderboard': 'leaderboard'
    };
    const tabName = tabNameMap[normTab] || String(normTab);
    url.searchParams.set('tab', tabName);

    if (isArticles) {
      if (currentAppState.selectedArticleId) {
        url.searchParams.set('article', currentAppState.selectedArticleId);
      } else {
        url.searchParams.delete('article');
      }
      if (currentAppState.selectedArticleId === 'questions-1404' && window.questionBankState?.selectedExamId) {
        url.searchParams.set('exam', window.questionBankState.selectedExamId);
      } else {
        url.searchParams.delete('exam');
      }
    } else {
      url.searchParams.delete('article');
      url.searchParams.delete('exam');
    }
    window.history.replaceState({}, '', url.toString());
  } catch (e) {
    console.warn('[Router] URL replaceState warning:', e);
  }

  // Ensure the active class on the tab button updates immediately
  try {
    document.querySelectorAll('.bottom-nav .nav-item, .nav-item').forEach(item => {
      const itemTab = item.dataset.tab;
      const isCurrent = (itemTab === String(normTab)) ||
                        (isLeaderboard && (itemTab === 'leaderboard' || itemTab === '5' || itemTab === 5)) ||
                        (normTab === 0 && (itemTab === '0' || itemTab === 'dashboard')) ||
                        (normTab === 1 && (itemTab === '1' || itemTab === 'planning')) ||
                        (normTab === 2 && (itemTab === '2' || itemTab === 'routines')) ||
                        (normTab === 3 && (itemTab === '3' || itemTab === 'tools')) ||
                        (isArticles && (itemTab === '4' || itemTab === 'articles'));
      if (isCurrent) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  } catch (e) {
    console.warn('TabSwitch DOM class update error:', e);
  }

  // Toggle DOM containers directly if present in DOM
  try {
    const containers = {
      0: document.getElementById('tab-dashboard'),
      1: document.getElementById('tab-planning'),
      2: document.getElementById('tab-routines'),
      3: document.getElementById('tab-tools'),
      'leaderboard': document.getElementById('tab-leaderboard'),
      4: document.getElementById('tab-articles')
    };
    Object.entries(containers).forEach(([key, el]) => {
      if (!el) return;
      if (String(key) === String(normTab) || (normTab === 'leaderboard' && key === 'leaderboard')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  } catch (e) {
    console.warn('TabSwitch container display toggle error:', e);
  }

  if (isLeaderboard) {
    console.time('TabSwitch:Leaderboard');
    if (typeof window.leaderboardService?.fetchUserGroups === 'function') {
      window.leaderboardService.fetchUserGroups(false).catch(e => console.warn('fetchUserGroups on tab switch error:', e));
    }
    if (typeof window.initLeaderboardView === 'function') {
      try { window.initLeaderboardView(); } catch (e) {}
    }
    setTimeout(() => {
      try {
        renderApp();
        if (typeof window.refreshLeaderboardData === 'function') {
          window.refreshLeaderboardData(true);
        }
      } catch (err) {
        console.error('Error rendering Leaderboard view:', err);
        if (typeof window.showToast === 'function') {
          window.showToast('خطا در بارگذاری تالار رقابت', 'error');
        }
      } finally {
        console.timeEnd('TabSwitch:Leaderboard');
      }
    }, 10);
  } else if (isArticles) {
    try {
      if (typeof window.initArticlesView === 'function') {
        try { window.initArticlesView(); } catch (e) {}
      } else {
        renderApp();
      }
    } catch (err) {
      console.error('Error rendering Articles view:', err);
      if (typeof window.showToast === 'function') {
        window.showToast('خطا در بارگذاری مقالات و بانک سوالات', 'error');
      }
    }
  } else {
    renderApp();
  }

  window.scrollTo(0, 0);
};
window.switchAppTab = window.switchTab;

window.openQuestionBank = function(examId = '1405-khordad') {
  const currentAppState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (currentAppState) {
    currentAppState.activeTab = 4;
    currentAppState.selectedArticleId = 'questions-1404';
    if (!window.questionBankState) {
      window.questionBankState = {
        selectedExamId: examId || '1405-khordad',
        searchQuery: '',
        selectedCategory: 'همه',
        activeRecallMode: false,
        revealedQuestionIds: new Set(),
        userAnswers: {}
      };
    } else if (examId) {
      window.questionBankState.selectedExamId = examId;
      window.questionBankState.searchQuery = '';
      window.questionBankState.selectedCategory = 'همه';
    }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', 'articles');
      url.searchParams.set('article', 'questions-1404');
      if (examId) url.searchParams.set('exam', examId);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}
    renderApp();
    window.scrollTo(0, 0);
  }
};


// Global Manual Sleep Trigger Function

// Global Manual Sleep Trigger Function with Overnight Split Logic


// Global Event Delegation for Sleep Button & Matrix 7x48 Click Fix
let touchStartX = 0;
let touchStartY = 0;
let isTouchDragging = false;

document.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches.length > 0) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isTouchDragging = false;
  }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (e.touches && e.touches.length > 0) {
    const diffX = Math.abs(e.touches[0].clientX - touchStartX);
    const diffY = Math.abs(e.touches[0].clientY - touchStartY);
    if (diffX > 6 || diffY > 6) {
      isTouchDragging = true;
    }
  }
}, { passive: true });

if (!window.globalDelegationBound) {
  document.addEventListener('click', (e) => {
    if (isTouchDragging) {
      isTouchDragging = false;
      return;
    }

    // ── A. Centralized modal dismissal (document-level: survives innerHTML rewrites) ──
    try {
      const isDirectBackdrop = Boolean(
        e.target && (
          e.target.classList.contains('modal-backdrop') ||
          e.target.classList.contains('modal-overlay') ||
          (e.target.getAttribute && e.target.getAttribute('data-close-modal') === 'true' && !e.target.closest('.modal-content, .modal-card, .modal-dialog, .focus-glass-card'))
        )
      );
      const closeBtn = (e.target && e.target.closest) ? e.target.closest('.btn-close-modal, [data-close-modal], #btn-close-fab-modal, .btn-close') : null;

      if (isDirectBackdrop || closeBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.closeActiveModal === 'function') {
          window.closeActiveModal();
        } else {
          try {
            document.querySelectorAll('.modal-overlay, .modal-backdrop, .modal-container, [id^="modal-"]').forEach(m => {
              if (m.id !== 'modal-container') {
                m.style.display = 'none';
                m.classList.remove('active');
              }
            });
            const mc = document.getElementById('modal-container');
            if (mc) mc.innerHTML = '';
          } catch (_) {}
          try { if (typeof state !== 'undefined' && state) state.activeModal = null; } catch (_) {}
          try { if (window.appState) window.appState.activeModal = null; } catch (_) {}
        }
        return;
      }
    } catch (_) {}

    // ── B. Quick Activity mode toggle (تایمر زنده / ثبت دستی) ──
    try {
      const modeBtn = (e.target && e.target.closest) ? e.target.closest('#btn-mode-timer, #btn-mode-manual, [data-mode="timer"], [data-mode="manual"]') : null;
      if (modeBtn && modeBtn.closest('#modal-fab-activity-registration')) {
        e.preventDefault();
        const rawMode = modeBtn.getAttribute('data-mode') || modeBtn.getAttribute('data-tab') || (modeBtn.id === 'btn-mode-manual' ? 'manual' : 'timer');
        const nextMode = (rawMode === 'manual') ? 'manual' : 'timer';
        try {
          if (window.fabActivityState && window.fabActivityState.activeTab === nextMode) return;
        } catch (_) {}
        try { document.querySelectorAll('.mode-switch-btn').forEach(b => b.classList.remove('active')); } catch (_) {}
        try { modeBtn.classList.add('active'); } catch (_) {}
        if (typeof window.switchFabActivityTab === 'function') {
          window.switchFabActivityTab(nextMode, e);
        } else {
          const timerSec = document.getElementById('section-live-timer') || document.getElementById('fab-timer-section');
          const manualSec = document.getElementById('section-manual-log') || document.getElementById('fab-manual-section');
          if (timerSec) timerSec.style.display = (nextMode === 'timer') ? 'block' : 'none';
          if (manualSec) manualSec.style.display = (nextMode === 'manual') ? 'block' : 'none';
          try {
            window.fabActivityState = window.fabActivityState || {};
            window.fabActivityState.activeTab = nextMode;
          } catch (_) {}
        }
        return;
      }
    } catch (_) {}

    // ── C. Konkur estimator trigger (تخمین رتبه) ──
    try {
      const konkurCard = (e.target && e.target.closest) ? e.target.closest('#card-konkur-estimator, [data-action="open-konkur-estimator"]') : null;
      if (konkurCard) {
        e.preventDefault();
        try {
          const alreadyOpen = (window.appState && window.appState.activeModal === 'rankEstimator') || document.getElementById('modal-konkur-estimator');
          if (alreadyOpen) {
            const m = document.getElementById('modal-konkur-estimator') || document.getElementById('modal-rank-estimator');
            if (m) { m.style.display = 'flex'; m.classList.add('active'); }
            return;
          }
        } catch (_) {}
        if (typeof window.openKonkurEstimatorModal === 'function') {
          window.openKonkurEstimatorModal();
        } else {
          const modal = document.getElementById('modal-konkur-estimator') || document.getElementById('modal-rank-estimator');
          if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('active');
          }
        }
        return;
      }
    } catch (_) {}

    // ── D. Leitner close (بستن لایتنر) ──
    try {
      const leitnerCloseBtn = (e.target && e.target.closest) ? e.target.closest('#btn-close-leitner, [data-action="toggle-leitner"]') : null;
      if (leitnerCloseBtn) {
        e.preventDefault();
        try {
          if (window.isLeitnerAccordionOpen === false) return;
        } catch (_) {}
        if (typeof window.closeLeitnerAccordion === 'function') {
          window.closeLeitnerAccordion();
        } else {
          const container = document.getElementById('leitner-cards-container');
          if (container) {
            container.style.display = (container.style.display === 'none') ? 'block' : 'none';
          }
        }
        return;
      }
    } catch (_) {}

    // ── E. Create Group Modal Open Trigger ──
    try {
      const openCreateGroupBtn = (e.target && e.target.closest) ? e.target.closest('#btn-open-create-group, #btn-create-group-directory, [data-action="create-group"]') : null;
      if (openCreateGroupBtn) {
        e.preventDefault();
        if (typeof window.openCreateGroupModal === 'function') {
          window.openCreateGroupModal();
        } else if (typeof window.openCreateRoomModal === 'function') {
          window.openCreateRoomModal();
        }
        return;
      }
    } catch (_) {}

    // ── E2. Story & Daily Analysis Modal Open Delegation (survives dynamic innerHTML updates) ──
    try {
      const storyBtn = (e.target && e.target.closest) ? e.target.closest('#btn-open-daily-story, #btn-open-daily-analysis, .btn-story-trigger, .btn-open-daily-story, .btn-open-daily-analysis, .btn-quick-story, .btn-daily-report, [data-story-id], [data-action="open-story"]') : null;
      if (storyBtn) {
        e.preventDefault();
        e.stopPropagation();
        const storyId = storyBtn.getAttribute('data-story-id') || (storyBtn.id === 'btn-open-daily-analysis' || storyBtn.classList.contains('btn-open-daily-analysis') || storyBtn.classList.contains('btn-daily-report') ? 'dailyAnalysisReport' : 'dailyStoryCard');
        if (storyId === 'dailyAnalysisReport' || storyId === 'analysis' || storyId === 'report' || storyId === 'jalaliDayDetails') {
          if (typeof window.openDailyReportModal === 'function') {
            window.openDailyReportModal();
          } else if (typeof window.openStoryModal === 'function') {
            window.openStoryModal('dailyAnalysisReport');
          } else if (typeof window.openDailyAnalysisReport === 'function') {
            window.openDailyAnalysisReport();
          }
        } else {
          if (typeof window.openQuickStoryModal === 'function') {
            window.openQuickStoryModal();
          } else if (typeof window.openStoryModal === 'function') {
            window.openStoryModal('dailyStoryCard');
          } else if (typeof window.openDailyStoryCard === 'function') {
            window.openDailyStoryCard();
          }
        }
        return;
      }
    } catch (_) {}

    

    // ── F. Live Focus Timer Start, Reset & Toggle Trigger ──
    try {
      const resetBtn = (e.target && e.target.closest) ? e.target.closest('#btn-reset-timer-main') : null;
      if (resetBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof window.resetTimer === 'function') {
          window.resetTimer(e);
        }
        return;
      }

      const timerStartBtn = (e.target && e.target.closest) ? e.target.closest('#btn-toggle-timer-main, #btn-fab-start-live-timer, #immersion-clock-clickable') : null;
      if (timerStartBtn) {
        e.preventDefault();
        const curState = (typeof state !== 'undefined' && state) ? state : window.appState;
        const isRunning = Boolean(curState?.isPomodoroRunning || curState?.isStopwatchRunning);
        if (timerStartBtn.id === 'btn-toggle-timer-main' || timerStartBtn.id === 'immersion-clock-clickable') {
          if (isRunning) {
            if (typeof window.finishPomodoroSession === 'function') {
              window.finishPomodoroSession();
            }
          } else {
            if (typeof window.planexStartFocusTimer === 'function') {
              window.planexStartFocusTimer(e);
            }
          }
        } else {
          if (typeof window.planexStartFocusTimer === 'function') {
            window.planexStartFocusTimer(e);
          }
        }
        return;
      }
    } catch (_) {}

    // ── G. Manual Activity Log Submit Trigger ──
    try {
      const manualSubmitBtn = (e.target && e.target.closest) ? e.target.closest('#btn-submit-manual-log, #btn-fab-submit-manual-log') : null;
      if (manualSubmitBtn) {
        e.preventDefault();
        if (typeof window.saveManualActivityLog === 'function') {
          window.saveManualActivityLog(e);
        }
        return;
      }
    } catch (_) {}

    // ── H. Subject & Category Chip Selection in Modals ──
    try {
      const catChip = (e.target && e.target.closest) ? e.target.closest('.btn-manual-cat-chip, .btn-fab-cat-chip') : null;
      if (catChip) {
        e.preventDefault();
        const sub = catChip.dataset.subject || catChip.dataset.title || catChip.textContent.trim();
        const code = catChip.dataset.catCode || catChip.dataset.code;
        if (typeof window.handleSelectManualSubject === 'function') {
          window.handleSelectManualSubject(catChip, sub, code);
        }
        return;
      }
    } catch (_) {}

    // ── I. Study Phase / Method Pills in Modals ──
    try {
      const phasePill = (e.target && e.target.closest) ? e.target.closest('.btn-phase-chip, .btn-manual-study-pill, .btn-fab-study-pill, .study-phase-btn, .phase-chip, [data-phase], [data-pill]') : null;
      if (phasePill) {
        e.preventDefault();
        e.stopPropagation();
        const phase = phasePill.getAttribute('data-phase') || phasePill.getAttribute('data-pill') || phasePill.dataset?.phase || phasePill.dataset?.pill || phasePill.textContent.trim();
        if (typeof window.selectStudyPhase === 'function') {
          window.selectStudyPhase(phasePill, phase);
        } else if (typeof window.handleSelectManualPhase === 'function') {
          window.handleSelectManualPhase(phasePill, phase);
        }
        return;
      }
    } catch (_) {}

    // ── J. Quick Duration Adjust Buttons (+-15, +-5, etc.) ──
    try {
      const durAdjustBtn = (e.target && e.target.closest) ? e.target.closest('.btn-dur-adjust, [data-adjust-dur]') : null;
      if (durAdjustBtn) {
        e.preventDefault();
        const delta = parseInt(durAdjustBtn.dataset.adjustDur || durAdjustBtn.dataset.delta || durAdjustBtn.dataset.change);
        if (!isNaN(delta) && typeof window.adjustManualDuration === 'function') {
          window.adjustManualDuration(delta);
        }
        return;
      }
    } catch (_) {}

    // ── K. Quick Duration Preset Buttons (15, 30, 45, 60, 90, 120) ──
    try {
      const durPresetBtn = (e.target && e.target.closest) ? e.target.closest('.btn-quick-dur-preset, [data-preset-mins]') : null;
      if (durPresetBtn) {
        e.preventDefault();
        const mins = parseInt(durPresetBtn.dataset.presetMins);
        if (!isNaN(mins) && typeof window.setManualDurationPreset === 'function') {
          window.setManualDurationPreset(mins);
        }
        return;
      }
    } catch (_) {}

    // 2. Matrix 7x48 Slot Click Trigger
    const slotBtn = e.target.closest('.matrix-slot-btn, .matrix-cell, .slot-row, [data-matrix-slot]');
    if (slotBtn) {
      const slot = slotBtn.dataset.slot || slotBtn.dataset.matrixSlot;
      const day = slotBtn.dataset.day;
      if (slot !== undefined && slot !== null) {
        if (day !== undefined && day !== null) {
          state.selectedDayIndex = parseInt(day);
        }
        state.slotModalIndex = parseInt(slot);
        state.activeModal = 'slot';
        renderApp();
      }
    }
  });
  window.globalDelegationBound = true;
}

import { db } from './db.js';
import { audioEngine, playPomodoroAlarm, sendPomodoroNotification, requestPomodoroNotificationPermission } from './audio.js';
import { renderHeader, bindHeaderTouchIsolation } from './components/Header.js';
import { renderNavigation } from './components/Navigation.js';
import { renderDashboardView } from './views/DashboardView.js';
import { renderPlannerView } from './views/PlannerView.js';
import { renderEvaluationView } from './views/EvaluationView.js';
import { renderToolsView } from './views/ToolsView.js';
import { renderArticlesView, initArticlesView, renderArticlesListView, renderSingleArticleView, renderQuestionBankView, bindQuestionBankEvents } from './views/ArticlesView.js';
import { articlesData } from './data/articlesData.js';
import { renderRoutinesView } from './views/RoutinesView.js';
import { renderLeaderboardView, renderLeaderboard, renderLeaderboardDirectory, initLeaderboardView, initLeaderboard, bindLeaderboardEvents } from './views/LeaderboardView.js';
window.renderArticlesView = renderArticlesView;
window.initArticlesView = initArticlesView;
window.renderLeaderboardView = renderLeaderboardView;
window.renderLeaderboard = renderLeaderboard;
window.initLeaderboardView = initLeaderboardView;
window.initLeaderboard = initLeaderboard;
window.bindLeaderboardEvents = bindLeaderboardEvents;
window.renderQuestionBankView = renderQuestionBankView;
import { leaderboardService } from './services/leaderboardService.js';
window.leaderboardService = leaderboardService;
import { personalSyncService, triggerAutoSync, updateCloudSyncIndicatorUI } from './services/personalSyncService.js';
window.personalSyncService = personalSyncService;
window.triggerAutoSync = triggerAutoSync;
window.updateCloudSyncIndicatorUI = updateCloudSyncIndicatorUI;
import { pomodoroService } from './services/pomodoroService.js';
window.pomodoroService = pomodoroService;
window.openDailyReportModal = (dateStr = null) => {
  if (typeof window.openStoryModal === 'function') window.openStoryModal('dailyAnalysisReport', dateStr);
};
window.openQuickStoryModal = (dateStr = null) => {
  if (typeof window.openStoryModal === 'function') window.openStoryModal('dailyStoryCard', dateStr);
};
window.openDailyStoryCard = window.openQuickStoryModal;
window.openDailyAnalysisReport = window.openDailyReportModal;
window.openDailyReport = window.openDailyReportModal;
window.openQuickStory = window.openQuickStoryModal;

// ── Global Personal Cloud Sync Handlers (100% Independent from Leaderboard) ──
window.handleCopyPersonalSyncToken = async (token) => {
  const code = token || personalSyncService.getOrCreateSyncToken();
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(code);
    } else {
      prompt('کد همگام‌سازی را کپی کنید:', code);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); color: white; padding: 12px 24px; border-radius: 14px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 8px 24px rgba(0,0,0,0.4); animation: fadeIn 0.3s; text-align: center; direction: rtl;';
    toast.innerHTML = `📋 کد همگام‌سازی (${code}) در حافظه کپی شد!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  } catch (e) {
    prompt('کد همگام‌سازی را کپی کنید:', code);
  }
};

window.handlePersonalCloudPush = async () => {
  const btn = document.getElementById('btn-quick-push-cloud');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ در حال ذخیره ابری...';
  }

  try {
    const res = await personalSyncService.pushToCloud();
    if (res && res.success) {
      const toast = document.createElement('div');
      toast.style.cssText = 'position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; text-align: center; direction: rtl;';
      toast.innerHTML = `☁️ تمام اطلاعات شما با موفقیت با کد «${res.token}» در فضای ابری ذخیره شد!`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
      renderApp();
    } else {
      alert(res?.message || 'خطا در ذخیره ابری اطلاعات.');
    }
  } catch (err) {
    console.error('Personal sync push failed:', err);
    alert('خطا در ارتباط با سرور ابری: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText || '<span>📤</span><span>ذخیره و پشتیبان‌گیری در ابری</span>';
    }
  }
};

window.handlePersonalCloudPull = async (customToken = null) => {
  let token = customToken;
  if (!token) {
    const input = document.getElementById('input-personal-sync-token');
    token = input ? input.value.trim().toUpperCase() : '';
  }

  if (!token) {
    alert('لطفاً کد همگام‌سازی شخصی خود را وارد نمایید (مثال: SYNC-93821).');
    const input = document.getElementById('input-personal-sync-token');
    if (input) input.focus();
    return;
  }

  const btn = document.getElementById('btn-personal-sync-pull');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ در حال بازیابی و اعمال...';
  }

  try {
    const res = await personalSyncService.pullFromCloud(token);
    if (res && res.success) {
      const toast = document.createElement('div');
      toast.style.cssText = 'position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; text-align: center; direction: rtl;';
      toast.innerHTML = `🎉 تمام اطلاعات از کد «${token}» بازیابی و اعمال شد!`;
      document.body.appendChild(toast);

      setTimeout(() => {
        renderApp();
        setTimeout(() => window.location.reload(), 400);
      }, 500);
    } else {
      alert(res?.message || `کد «${token}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`);
    }
  } catch (err) {
    console.error('Personal sync pull failed:', err);
    alert('خطا در ارتباط با سرور هنگام بازیابی: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalText || '📥 بازیابی و اعمال';
    }
  }
};
import { renderSupportModal } from './components/SupportModal.js';
import { renderFocusModal } from './components/FocusModal.js';
import { renderManualLogModal } from './components/ManualLogModal.js';
import { renderLoginModal } from './components/LoginModal.js';
import { renderEditProfileModal } from './components/EditProfileModal.js';
import { renderPwaInstallModal } from './components/PwaInstallModal.js';
import { renderOnboardingModal } from './components/OnboardingModal.js';
import { renderPublicProfileModal } from './components/PublicProfileModal.js';
import { renderSlotPickerModal } from './components/SlotPickerModal.js';
import { renderWeekPickerModal } from './components/WeekPickerModal.js';
import { renderStudyRoomModal } from './components/StudyRoomModal.js';
import { renderCreateRoomModal } from './components/CreateRoomModal.js';
import { renderJoinRoomOnboardingModal } from './components/JoinRoomOnboardingModal.js';
import { renderUserGuideModal } from './components/UserGuideModal.js';
import { renderActivityModal } from './components/ActivityModal.js';
import { renderConsultationModal } from './components/ConsultationModal.js';
import { renderConsultationView } from './views/ConsultationView.js';
import { initTokenClient, backupDataToDrive, restoreDataFromDrive } from './services/googleDriveService.js';



const API_BASE_URL = '';

// --- Handler: Avatar Selection from Gallery ---
window.selectAvatar = (el, url) => {
  try {
    const urlInput = document.getElementById('profile-avatar-url');
    if (urlInput) {
      urlInput.value = url;
      urlInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    document.querySelectorAll('.avatar-option').forEach(opt => {
      opt.style.borderColor = 'transparent';
      const check = opt.querySelector('.avatar-check');
      if (check) check.style.display = 'none';
    });
    
    if (el) {
      el.style.borderColor = '#10b981';
      const check = el.querySelector('.avatar-check');
      if (check) check.style.display = 'flex';
    }
    
    const mainAvatar = document.getElementById('main-header-avatar');
    if (mainAvatar) mainAvatar.src = url;
    
    const mainPreview = document.getElementById('main-avatar-preview');
    if (mainPreview) mainPreview.src = url;
    else {
      const emojiPreview = document.getElementById('main-avatar-preview-emoji');
      if (emojiPreview) emojiPreview.outerHTML = `<img id="main-avatar-preview" src="${url}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
    }
  } catch (err) {
    console.error('Error in selectAvatar:', err);
  }
};

// Capture PWA Installation Event
window.deferredPrompt = null;
window.deferredPwaPrompt = null;
window.hasPwaUpdate = false;
window.swRegistration = null;

window.isPwaInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  window.deferredPwaPrompt = e;
  console.log('[PWA] beforeinstallprompt captured');
  if (typeof renderApp === 'function') renderApp();
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
  window.deferredPwaPrompt = null;
  console.log('[PWA] App installed successfully');
  if (typeof renderApp === 'function') renderApp();
});

// Centralized Native / Direct PWA Install Handler
window.triggerPwaInstall = async () => {
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (window.deferredPrompt || window.deferredPwaPrompt) {
    const promptEvent = window.deferredPrompt || window.deferredPwaPrompt;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    console.log('[PWA] User choice:', outcome);
    window.deferredPrompt = null;
    window.deferredPwaPrompt = null;
    sessionStorage.setItem('planex_pwa_dismissed', 'true');
    if (state.activeModal === 'pwaInstall') {
      state.activeModal = null;
      renderApp();
    }
    return outcome;
  }

  // فقط و فقط در صورتی که window.deferredPrompt نال بود و دستگاه iOS (آیفون/آیپد) بود، راهنمای تصویری دستی (Share > Add to Home Screen) نمایش داده شود
  if (isIOS) {
    state.activeModal = 'pwaInstall';
    renderApp();
    return;
  }

  if (window.isPwaInstalled()) {
    alert('اپلیکیشن PlanEx در حال حاضر بر روی دستگاه شما نصب شده است.');
  } else {
    alert('برای نصب برنامه، لطفاً از منوی سه‌نقطه بالای مرورگر گزینه «نصب برنامه» یا «Install App / Add to Home screen» را انتخاب نمایید.');
  }
};

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      window.swRegistration = registration;
      
      // Check for updates on every page load
      registration.update().catch(() => {});
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              window.hasPwaUpdate = true;
              if (typeof renderApp === 'function') renderApp();
            }
          });
        }
      });
    }).catch(err => console.error('SW registration failed: ', err));
  });
  
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

// Application Global State
let state = {
  activeTab: 0,
  selectedDayIndex: (new Date().getDay() + 1) % 7,
  dashboardViewMode: 'weekly',
  selectedArticleId: null,
  activeModal: (!sessionStorage.getItem('planex_pwa_dismissed') && !window.isPwaInstalled() && typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)) ? 'pwaInstall' : null,
  slotModalIndex: null,
  stopwatchTime: 0,
  isStopwatchRunning: false,
  stopwatchInterval: null,
  pomodoroTime: 1500,
  isPomodoroRunning: false,
  pomodoroInterval: null,
  pomodoroActiveUsers: 0,

  // Advanced Focus Modal & Activity Logger State
  focusAccordions: {
    activity: false,
    timing: false,
    testNote: false,
    audio: false
  },
  routinesAccordions: {
    consultation: false,
    statsChart: false,
    habitTracker: false
  },
  plannerAccordions: {
    countdowns: false,
    targets: false,
    weeklyGoals: false,
    dailyMatrix: false
  },
  articlesAccordions: {
    questionBankHub: false
  },
  focusTimerType: 1, // 0 = Stopwatch, 1 = Pomodoro, 2 = Break
  focusPresetMins: 25,
  focusSessionTests: 0,
  focusActivityMode: 'study', // 'study' | 'non-study'
  focusCategoryCode: (typeof localStorage !== 'undefined' && localStorage.getItem('planex_last_focus_category')) || null,
  selectedNonStudyCode: 'non_sports',
  focusSubject: (typeof localStorage !== 'undefined' && localStorage.getItem('planex_last_focus_subject')) || '',
  selectedStudyMethod: 'test_practice',
  sessionNote: '',
  manualDurationMins: null,
  isCompletionDialogOpen: false,
  completionElapsedMinutes: 25,
  focusActivityType: 'deep_study',
  isImmersionMode: false,
  immersionStyle: 0, // 0 = Starry Mountain, 1 = Flip Clock, 2 = Minimal OLED, 3 = Color Theme
  focusThemeIndex: 0,
  customTrackName: null,
  isCustomTrackPlaying: false,
  focusActivityGroup: 'academic',

  // Manual Activity Log Modal State (Offline / Without Timer)
  manualLogState: {
    activityMode: 'study', // 'study' | 'non-study'
    selectedCategoryCode: null,
    selectedNonStudyCode: 'non_sports',
    subject: '',
    durationMins: 60,
    testCount: 0,
    note: '',
    durationMode: 'add',
    testCorrect: 0,
    testWrong: 0,
    testUnanswered: 0
  },

  // Onboarding Wizard State
  onboardingStep: 1,
  onboardingData: {
    education_level: 'کنکوری ۱۴۰۴',
    major: 'علوم تجربی',
    university: '',
    username: '',
    age_group: '۱۵ تا ۱۸ سال',
    gender: 'پسر'
  },

  // Live Study Room State
  currentRoom: null,
  studyRoomParticipants: [],
  studyRoomHeartbeatInterval: null,
  publicProfileData: null,
  selectedSlot: null,
  publicRooms: [],
  myRooms: [],
  leaderboardTab: 'all',
  isAiChatOpen: false,
  isAiTyping: false
};

window.appState = state;

// Global Helpers for Comprehensive User Guide Modal
window.userGuideActiveTab = 0;
window.openUserGuideModal = (tabIndex = 0) => {
  window.userGuideActiveTab = typeof tabIndex === 'number' ? tabIndex : 0;
  state.activeModal = 'userGuide';
  renderApp();
};
window.closeUserGuideModal = () => {
  state.activeModal = null;
  renderApp();
};
window.switchUserGuideTab = (tabIndex) => {
  window.userGuideActiveTab = tabIndex;
  renderApp();
};

// Global Helpers for Daily Story & Analysis Report Modals
window.openStoryModal = (modalId = 'dailyStoryCard', dateStr = null) => {
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  const resolvedModal = (modalId === 'dailyAnalysisReport' || modalId === 'analysis' || modalId === 'report' || modalId === 'jalaliDayDetails') ? 'dailyAnalysisReport' : 'dailyStoryCard';
  const fallbackDate = (db && typeof db.getTodayJalaliString === 'function') ? db.getTodayJalaliString() : null;
  const targetDate = dateStr || targetState?.selectedJalaliDetailDate || fallbackDate;

  if (targetState) {
    if (targetDate) targetState.selectedJalaliDetailDate = targetDate;
    targetState.activeModal = resolvedModal;
  }
  if (window.appState && window.appState !== targetState) {
    if (targetDate) window.appState.selectedJalaliDetailDate = targetDate;
    window.appState.activeModal = resolvedModal;
  }
  try { history.pushState({ modal: resolvedModal }, ''); } catch (e) {}
  if (typeof renderApp === 'function') {
    renderApp();
  } else if (typeof window.renderApp === 'function') {
    window.renderApp();
  }
};

window.closeStoryModal = () => {
  if (typeof state !== 'undefined' && state) state.activeModal = null;
  if (window.appState) window.appState.activeModal = null;
  if (typeof renderApp === 'function') renderApp();
  else if (typeof window.renderApp === 'function') window.renderApp();
};

window.openDailyReportModal = (dateStr = null) => {
  window.openStoryModal('dailyAnalysisReport', dateStr);
};

window.openQuickStoryModal = (dateStr = null) => {
  window.openStoryModal('dailyStoryCard', dateStr);
};

window.closeDailyReportModal = () => {
  window.closeStoryModal();
};

window.closeQuickStoryModal = () => {
  window.closeStoryModal();
};

window.openDailyStoryCard = window.openQuickStoryModal;
window.closeDailyStoryCard = window.closeQuickStoryModal;
window.openDailyAnalysisReport = window.openDailyReportModal;
window.closeDailyAnalysisReport = window.closeDailyReportModal;

window.openDailyReport = window.openDailyReportModal;
window.openQuickStory = window.openQuickStoryModal;
window.openDailyAnalysisModal = window.openDailyReportModal;

// Global Helpers for Private Consultation & Mentorship Modal
window.openConsultationModal = () => {
  state.activeModal = 'consultation';
  renderApp();
};
window.closeConsultationModal = () => {
  state.activeModal = null;
  renderApp();
};



// Quick-Action handlers for the interactive 4-step study-cycle card on the dashboard.
// No modal is opened or closed here — each action switches the view directly.
window.handleUserGuideAction = (action) => {
  if (!action) return;

  if (action === 'goto-pomodoro' || action === 'start-cycle') {
    // Prepare a fresh 25-minute pomodoro and open the focus timer
    if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
    state.isPomodoroRunning = false;
    state.isStopwatchRunning = false;
    state.focusTimerType = 1;          // 1 = Pomodoro
    state.focusPresetMins = 25;
    state.pomodoroTime = 25 * 60;
    state.activeModal = 'focus';
    renderApp();
    return;
  }

  if (action === 'goto-matrix') {
    // Stay on the dashboard and scroll straight to the 24-hour matrix table
    if (state.activeTab !== 0) {
      state.activeTab = 0;
      state.selectedArticleId = null;
      renderApp();
    }
    setTimeout(() => {
      const el = document.querySelector('.matrix-24h-container, .matrix-24h-table');
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
    return;
  }

  if (action === 'sync-now') {
    // Manual sync straight from the dashboard cycle card (no view switching).
    // handleManualLeaderboardSync already shows the success/error toast.
    if (typeof window.handleManualLeaderboardSync === 'function') {
      window.handleManualLeaderboardSync();
    } else {
      leaderboardService.syncUserScore()
        .then(res => {
          const ok = res && res.success && res.serverConfirmed;
          alert(ok
            ? `✅ کارنامه شما روی سرور ثبت شد${res.rank ? ` — رتبه ${res.rank}` : ''}`
            : `❌ ثبت روی سرور انجام نشد: ${(res && (res.errorDetail || res.message)) || 'خطای ناشناخته'}`);
        })
        .catch(err => alert(`❌ خطا در همگام‌سازی: ${err && err.message ? err.message : err}`));
    }
    return;
  }

  if (action === 'goto-leaderboard') {
    state.activeTab = 'leaderboard';
    state.selectedArticleId = null;
    renderApp();
    return;
  }

  if (action === 'goto-analytics') {
    state.activeTab = 0;
    state.selectedArticleId = null;
    state.dashboardViewMode = 'weekly';
    renderApp();
    setTimeout(() => {
      const chartHeadings = Array.from(document.querySelectorAll('h3'));
      const targetHeading = chartHeadings.find(h => h.textContent.includes('میزان مطالعه هفتگی') || h.textContent.includes('تعداد تست هفتگی') || h.textContent.includes('تحلیل ۲۴ ساعته'));
      const target = targetHeading ? targetHeading.closest('.glass-panel') : null;
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
    return;
  }
};
window.handleStudyCycleAction = window.handleUserGuideAction;

// Bound exactly once at document level so it survives every re-render
if (!window.userGuideActionsBound) {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cycle-action]');
    if (!btn) return;
    e.preventDefault();
    window.handleUserGuideAction(btn.dataset.cycleAction);
  });
  window.userGuideActionsBound = true;
}

// Global Theme & Font Application Engine
export function applyGlobalThemeSettings() {
  try {
    const settings = db.getThemeSettings();
    const themeClasses = [
      'theme-oceanic', 'theme-aurora', 'theme-sunrise', 'theme-cyber', 'theme-pearl',
      'theme-deep-focus', 'theme-pomodoro', 'theme-zen', 'theme-cosmic',
      'theme-pacific', 'theme-golden', 'theme-autumn', 'theme-emerald',
      'theme-indigo', 'theme-pastel', 'theme-solar', 'theme-default', 'theme-purple', 'theme-sunset', 'mode-light'
    ];
    document.body.classList.remove(...themeClasses);
    document.body.classList.add('theme-dark-glass', 'mode-dark');
    document.documentElement.setAttribute('data-theme', 'dark-glass');
    document.body.setAttribute('data-theme', 'dark-glass');
    document.documentElement.setAttribute('data-theme-mode', 'dark');
    document.body.setAttribute('data-theme-mode', 'dark');

    // Update browser meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#0a0b0e');
    }

    // Font family
    const fontClasses = ['font-vazir', 'font-shabnam', 'font-sahel', 'font-samim',
      'font-aref', 'font-nastaliq', 'font-irannastaliq', 'font-lalezar', 'font-monospace'];
    document.body.classList.remove(...fontClasses);
    const activeFont = settings.fontFamily || 'font-sahel';
    document.body.classList.add(activeFont);
  } catch (err) {
    console.error('Error applying theme settings:', err);
  }
}

// Safe View Render Wrappers with Jakob Nielsen Heuristic #1 & Heuristic #9 (Clear Feedback & Graceful Error Recovery)
function renderDashboardViewSafe() {
  try {
    return renderDashboardView(state.selectedDayIndex, state.dashboardViewMode);
  } catch (err) {
    console.error('[DashboardView] Render error:', err);
    return `<div class="main-container" style="padding: 30px; text-align: center;"><p style="color: #ef4444;">خطا در بارگذاری داشبورد: ${err?.message || ''}</p></div>`;
  }
}

function renderPlannerViewSafe() {
  try {
    return renderPlannerView(state.selectedDayIndex, { plannerAccordions: state.plannerAccordions });
  } catch (err) {
    console.error('[PlannerView] Render error:', err);
    return `<div class="main-container" style="padding: 30px; text-align: center;"><p style="color: #ef4444;">خطا در بارگذاری برنامه‌ریزی: ${err?.message || ''}</p></div>`;
  }
}

function renderRoutinesViewSafe() {
  try {
    return renderRoutinesView({ routinesAccordions: state.routinesAccordions });
  } catch (err) {
    console.error('[RoutinesView] Render error:', err);
    return `<div class="main-container" style="padding: 30px; text-align: center;"><p style="color: #ef4444;">خطا در بارگذاری روتین‌ها: ${err?.message || ''}</p></div>`;
  }
}

function renderToolsViewSafe() {
  try {
    return renderToolsView();
  } catch (err) {
    console.error('[ToolsView] Render error:', err);
    return `<div class="main-container" style="padding: 30px; text-align: center;"><p style="color: #ef4444;">خطا در بارگذاری ابزارها: ${err?.message || ''}</p></div>`;
  }
}

function renderLeaderboardViewSafe() {
  try {
    return renderLeaderboardView(state);
  } catch (err) {
    console.error('[LeaderboardView] Render error:', err);
    if (typeof window.showToast === 'function') {
      window.showToast('خطا در بارگذاری تالار رقابت: ' + (err?.message || 'نامشخص'), 'error', 4500);
    }
    return `
      <div class="main-container" style="padding: 40px 20px; text-align: center; direction: rtl;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🏆</div>
        <h3 style="color: #ef4444; font-weight: 800; margin-bottom: 8px;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem; margin-bottom: 20px;">${(err?.message || 'مشکلی در بارگذاری داده‌های رقابت رخ داده است.')}</p>
        <button onclick="if(window.switchTab) window.switchTab(0);" class="btn-primary" style="width: auto; padding: 10px 22px; display: inline-flex; align-items: center; gap: 6px; margin: 0 auto;">
          <span>🏠</span>
          <span>بازگشت به داشبورد</span>
        </button>
      </div>
    `;
  }
}

function renderArticlesViewSafe() {
  try {
    return renderArticlesView({
      selectedArticleId: state.selectedArticleId,
      articlesAccordions: state.articlesAccordions
    });
  } catch (err) {
    console.error('[ArticlesView] Render error:', err);
    if (typeof window.showToast === 'function') {
      window.showToast('خطا در بارگذاری مقالات و بانک سوالات: ' + (err?.message || 'نامشخص'), 'error', 4500);
    }
    return `
      <div class="main-container" style="padding: 40px 20px; text-align: center; direction: rtl;">
        <div style="font-size: 3rem; margin-bottom: 12px;">📚</div>
        <h3 style="color: #ef4444; font-weight: 800; margin-bottom: 8px;">خطا در بارگذاری بخش مقالات و آزمون‌ها</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem; margin-bottom: 20px;">${(err?.message || 'مشکلی در نمایش این بخش رخ داده است.')}</p>
        <button onclick="if(window.switchTab) window.switchTab(0);" class="btn-primary" style="width: auto; padding: 10px 22px; display: inline-flex; align-items: center; gap: 6px; margin: 0 auto;">
          <span>🏠</span>
          <span>بازگشت به داشبورد</span>
        </button>
      </div>
    `;
  }
}

// Global Main UI Render Pipeline

window.planexActiveTimer = {
  isRunning: false,
  timerType: 1, // 0: stopwatch, 1: pomodoro, 2: break
  startTime: null,
  accumulatedTime: 0,
  targetEndTime: null,
  presetMins: 25,
  intervalId: null
};

window.planexGlobalTimerTick = function() {
  if (!window.planexActiveTimer || !window.planexActiveTimer.isRunning) return;
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;

  const timer = window.planexActiveTimer;
  if (timer.timerType === 0) { // Stopwatch
    targetState.stopwatchTime = Math.floor((Date.now() - timer.startTime) / 1000) + timer.accumulatedTime;
    if (typeof updateDocumentTitleTimer === 'function') updateDocumentTitleTimer(targetState.stopwatchTime, false);
    if (typeof updateTimerNotification === 'function') updateTimerNotification(targetState.stopwatchTime, false);
  } else { // Pomodoro / Break
    const remSecs = Math.ceil((timer.targetEndTime - Date.now()) / 1000);
    targetState.pomodoroTime = Math.max(0, remSecs);
    if (typeof updateDocumentTitleTimer === 'function') updateDocumentTitleTimer(remSecs, true);
    if (typeof updateTimerNotification === 'function') updateTimerNotification(remSecs, true);

    if (remSecs <= 0) {
      // Finished
      window.planexActiveTimer.isRunning = false;
      if (timer.intervalId) clearInterval(timer.intervalId);
      timer.intervalId = null;
      if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
      targetState.isPomodoroRunning = false;
      targetState.isStudying = false;
      if (window.appState) window.appState.isStudying = false;
      localStorage.removeItem('planex_active_timer_state');
      if (typeof window.finishPomodoroSession === 'function') window.finishPomodoroSession();
      return;
    }
  }

  if (typeof updateTimerDisplayDOM === 'function' && document.visibilityState === 'visible') {
    updateTimerDisplayDOM();
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && window.planexActiveTimer && window.planexActiveTimer.isRunning) {
    window.planexGlobalTimerTick();
  }
});

export function renderApp() {
  // Decouple: let the timer's own setInterval handle ticks — do NOT call it here,
  // because it used to force DOM work on every renderApp() even for unrelated tabs.

  try {
    if (typeof document !== 'undefined') {
      const active = document.activeElement;
      const isTyping = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
      if (isTyping) {
        console.log('renderApp aborted: User is typing');
        return;
      }

      // Also bail out when the add-habit-modal is visibly open — the user is
      // interacting with modal inputs that live inside the Routines view HTML.
      const habitModal = document.getElementById('add-habit-modal');
      if (habitModal && habitModal.style.display === 'flex') {
        console.log('renderApp aborted: Habit modal is open');
        return;
      }
    }

    const appEl = document.getElementById('app');
    if (!appEl) return;

    const normTab = normalizeTab(state.activeTab);
    const isDashboard = (normTab === 0);
    const isPlanning = (normTab === 1);
    const isRoutines = (normTab === 2);
    const isTools = (normTab === 3);
    const isArticles = (normTab === 4);
    const isLeaderboard = (normTab === 'leaderboard');
    const isConsultation = (normTab === 'consultation');

    let viewHTML = '';
    if (isConsultation) {
      viewHTML = renderConsultationView();
    } else {
      viewHTML = `
        <div id="tab-dashboard" class="tab-view-container" style="display: ${isDashboard ? 'block' : 'none'};">
          ${isDashboard ? renderDashboardViewSafe() : ''}
        </div>
        <div id="tab-planning" class="tab-view-container" style="display: ${isPlanning ? 'block' : 'none'};">
          ${isPlanning ? renderPlannerViewSafe() : ''}
        </div>
        <div id="tab-routines" class="tab-view-container" style="display: ${isRoutines ? 'block' : 'none'};">
          ${isRoutines ? renderRoutinesViewSafe() : ''}
        </div>
        <div id="tab-tools" class="tab-view-container" style="display: ${isTools ? 'block' : 'none'};">
          ${isTools ? renderToolsViewSafe() : ''}
        </div>
        <div id="tab-leaderboard" class="tab-view-container" style="display: ${isLeaderboard ? 'block' : 'none'};">
          <div id="leaderboard-view">
            ${isLeaderboard ? renderLeaderboardViewSafe() : ''}
          </div>
        </div>
        <div id="tab-articles" class="tab-view-container" style="display: ${isArticles ? 'block' : 'none'};">
          <div id="articles-view">
            ${isArticles ? renderArticlesViewSafe() : ''}
          </div>
        </div>
      `;
    }

    let modalHTML = '';
    if (state.activeModal === 'dailyStoryCard' || state.activeModal === 'quickStory' || state.activeModal === 'dailyStory') {
      modalHTML = renderDailyStoryCardModal(state.selectedJalaliDetailDate);
    } else if (state.activeModal === 'dailyAnalysisReport' || state.activeModal === 'dailyReport' || state.activeModal === 'jalaliDayDetails' || state.activeModal === 'analysis' || state.activeModal === 'report') {
      modalHTML = renderDailyAnalysisModal(state.selectedJalaliDetailDate);
    } else if (state.activeModal === 'support') {
      modalHTML = renderSupportModal();
    } else if (state.activeModal === 'slot' && state.slotModalIndex !== null) {
      modalHTML = renderSlotPickerModal(state.selectedDayIndex, state.slotModalIndex);
    } else if (state.activeModal === 'week') {
      modalHTML = renderWeekPickerModal();
    } else if (state.activeModal === 'pwaInstall') {
      modalHTML = renderPwaInstallModal();
    } else if (state.activeModal === 'focus') {
      modalHTML = renderFocusModal({
        stopwatchTime: state.stopwatchTime,
        isStopwatchRunning: state.isStopwatchRunning,
        pomodoroTime: state.pomodoroTime,
        isPomodoroRunning: state.isPomodoroRunning,
        timerType: state.focusTimerType,
        presetMins: state.focusPresetMins,
        sessionTests: state.focusSessionTests,
        pomodoroActiveUsers: state.pomodoroActiveUsers || 0,
        activityMode: state.focusActivityMode || 'study',
        selectedCategoryCode: state.focusCategoryCode,
        selectedNonStudyCode: state.selectedNonStudyCode || 'non_sports',
        selectedSubject: state.focusSubject,
        selectedStudyMethod: state.selectedStudyMethod || 'یادگیری',
        sessionNote: state.sessionNote,
        focusAccordions: state.focusAccordions || { activity: false, timing: false, testNote: false, audio: false }
      });
    } else if (state.activeModal === 'gratitudeJar') {
      const notes = db.getGratitudeNotes() || [];
      modalHTML = `
        <div class="modal-overlay" id="modal-gratitude-jar" style="backdrop-filter: blur(16px);">
          <div class="modal-card" style="max-width: 540px; background: rgba(15, 23, 42, 0.96); border-color: rgba(236, 72, 153, 0.5);">
            <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
              <div class="modal-title" style="color: #ec4899; display: flex; align-items: center; gap: 8px;">
                🫙 کوزه شیشه‌ای خاطرات و شکرگزاری ✨
              </div>
              <button class="btn-close" id="btn-close-gratitude-modal">✕</button>
            </div>

            <div style="max-height: 400px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; margin: 14px 0;">
              ${notes.length === 0 ? `
                <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
                  <div style="font-size: 3rem; margin-bottom: 10px;">🌸</div>
                  <div style="font-weight: bold; color: white;">هنوز خاطره‌ای در کوزه شیشه‌ای انداخته نشده!</div>
                  <div style="font-size: 0.8rem; margin-top: 4px;">با ثبت یک اتفاق کوچک، حس خوب امروزت رو ذخیره کن.</div>
                </div>
              ` : notes.map(item => `
                <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(236, 72, 153, 0.3); padding: 12px 14px; border-radius: 14px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span style="background: rgba(236, 72, 153, 0.2); color: #f472b6; padding: 2px 8px; border-radius: 8px; font-size: 0.75rem; font-weight: bold;">${item.dateStr || 'امروز'}</span>
                    <button class="btn-delete-gratitude-item" data-id="${item.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem;">🗑️ حذف</button>
                  </div>
                  <div style="font-size: 0.78rem; color: #38bdf8; font-weight: bold; margin-bottom: 4px;">❓ ${item.prompt || 'شکرگزاری'}</div>
                  <div style="font-size: 0.9rem; color: white; line-height: 1.6;">✨ ${item.text}</div>
                </div>
              `).join('')}
            </div>

            <div style="background: rgba(236, 72, 153, 0.12); padding: 10px; border-radius: 12px; font-size: 0.78rem; color: #fbcfe8; text-align: center; margin-top: 10px;">
              💡 در روزهایی که احساس خستگی می‌کنی، مرور این کوزه بهترین منبع انرژی و انگیزه‌ست!
            </div>
          </div>
        </div>
      `;
    } else if (state.activeModal === 'login') {
      const savedUser = JSON.parse(localStorage.getItem('planex_auth_user') || localStorage.getItem('planex_user_account') || 'null');
      modalHTML = renderLoginModal(savedUser);
    } else if (state.activeModal === 'editProfile') {
      modalHTML = renderEditProfileModal();
    } else if (state.activeModal === 'onboarding') {
      modalHTML = renderOnboardingModal(state.onboardingStep, state.onboardingData);
    } else if (state.activeModal === 'studyRoom' && state.currentRoom) {
      const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
      const currentUserIdStr = String(userAcc.id || '');
      const ownerIdStr = String(state.currentRoom.owner_id || '');
      const isOwner = (currentUserIdStr !== '') && (currentUserIdStr === ownerIdStr);
      const rId = state.currentRoom.id || state.currentRoom.code;
      const rName = state.currentRoom.name || state.currentRoom.title || state.currentRoom.roomName || state.currentRoom.groupName || 'سالن مطالعه';
      modalHTML = renderStudyRoomModal(rId, rName, state.studyRoomParticipants, isOwner, ownerIdStr, currentUserIdStr);
    } else if (state.activeModal === 'createRoom' || state.activeModal === 'createGroup') {
      modalHTML = renderCreateRoomModal(window.createRoomModalActiveTab || 'create');
    } else if (state.activeModal === 'joinRoomOnboarding') {
      modalHTML = renderJoinRoomOnboardingModal(state.pendingJoinRoom);
    } else if (state.activeModal === 'publicProfile') {
      modalHTML = renderPublicProfileModal(state.publicProfileData);
    } else if (state.activeModal === 'userGuide') {
      modalHTML = renderUserGuideModal(window.userGuideActiveTab || 0);
    } else if (state.activeModal === 'consultation') {
      modalHTML = renderConsultationModal();
    } else if (state.activeModal === 'fabActivity') {
      modalHTML = renderFabActivityModal(state);
    } else if (state.activeModal === 'manualLog') {
      modalHTML = renderManualLogModal(state.manualLogState || {});
    } else if (state.activeModal === 'activity') {
      modalHTML = renderActivityModal();
    } else if (state.activeModal === 'jalaliDayDetails') {
      modalHTML = renderJalaliDayDetailsModal(state.selectedJalaliDetailDate);
    } else if (state.activeModal === 'percentCalc') {
      modalHTML = renderPercentCalculatorModal();
    } else if (state.activeModal === 'rankEstimator') {
      modalHTML = renderRankEstimatorModal();
    } else if (state.activeModal === 'sleepScheduler') {
      modalHTML = renderSleepSchedulerModal();
    } else if (state.activeModal === 'gpaCalc') {
      modalHTML = renderGPACalculatorModal();
    } else if (state.activeModal === 'examBox') {
      modalHTML = renderExamBoxModal();
    } else if (state.activeModal === 'syncGuide') {
      modalHTML = `
        <div class="modal-overlay" style="display: flex;">
          <div class="modal-content" style="max-width: 450px; background: #1a1a2e; border: 1px solid rgba(168, 85, 247, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h2 style="margin: 0; color: #c084fc; font-size: 1.3rem; display: flex; align-items: center; gap: 8px;">
                ℹ️ قوانین برنامه‌ریزی و دیتابیس لوکال
              </h2>
              <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-icon">✖</button>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 15px;">
              <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-weight: bold; color: #60a5fa; margin-bottom: 5px;">🔄 همگام‌سازی خودکار</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                  اطلاعات شما به صورت خودکار بین دستگاه‌های مختلف با باز کردن برنامه همگام می‌شود.
                </div>
              </div>
              
              <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="font-weight: bold; color: #f472b6; margin-bottom: 5px;">⏳ محدودیت ویرایش پروفایل</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
                  برای حفظ ثبات هویتی و جلوگیری از سوءاستفاده، ویرایش مشخصات پروفایل تنها هر ۴ ساعت یک‌بار امکان‌پذیر است.
                </div>
              </div>
            </div>
            
            <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="margin-top: 20px; width: 100%;">متوجه شدم</button>
          </div>
        </div>
      `;
    }

    // Preserve header scroll position
    const headerWrapper = document.querySelector('.header-actions-wrapper');
    const scrollPos = headerWrapper ? headerWrapper.scrollLeft : 0;

    // Snapshot input values from Routines tab so they survive innerHTML replacement
    const routineInputEl = document.getElementById('input-routine-checklist-text');
    const savedRoutineInputVal = routineInputEl ? routineInputEl.value : '';

    appEl.innerHTML = `
      ${renderHeader(state)}
      <main style="flex: 1;">
        ${viewHTML}
      </main>
      ${renderNavigation(state.activeTab)}

      <div id="modal-container">${modalHTML}</div>
    `;

    const newWrapper = document.querySelector('.header-actions-wrapper');
    if (newWrapper) {
      newWrapper.scrollLeft = scrollPos;
    }

    // Restore saved routine checklist input value
    if (savedRoutineInputVal) {
      const restoredInput = document.getElementById('input-routine-checklist-text');
      if (restoredInput) restoredInput.value = savedRoutineInputVal;
    }

    // NOTE: the ?room= invite parameter is handled once in initApp() (it strips the
    // query string and calls joinStudyRoom). It must NOT be handled here, otherwise
    // every re-render would force activeModal back to 'studyRoom' and the modal
    // could never be closed.

  // Backup Export JSON Handler
  const btnExportJson = document.getElementById('btn-export-backup-json');
  if (btnExportJson) {
    btnExportJson.onclick = () => {
      try {
        const jsonStr = db.exportAllDataJSON();
        const [jy, jm, jd] = db.getTodayJalali();
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `PlanEx-Backup-${jy}-${jm}-${jd}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('📥 فایل پشتیبان JSON با موفقیت دانلود شد!');
      } catch (err) {
        alert('خطا در پشتیبان‌گیری: ' + err.message);
      }
    };
  }

  // Backup Import JSON Handler
  const btnTriggerRestore = document.getElementById('btn-trigger-restore-json');
  const inputRestoreFile = document.getElementById('input-restore-backup-file');

  if (btnTriggerRestore && inputRestoreFile) {
    btnTriggerRestore.onclick = () => inputRestoreFile.click();

    inputRestoreFile.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          db.importAllDataJSON(evt.target.result);
          alert('📤 اطلاعات با موفقیت بازیابی شدند!');
          renderApp();
        } catch (err) {
          alert('خطا در بازیابی اطلاعات: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
  }

    bindEvents();
  } catch (err) {
    console.error('Fatal renderApp error:', err);
  }
}

window.renderApp = renderApp;

// Reactive invalidation and re-rendering upon saving activity (Local only, no auto cloud write)
window.addEventListener('activity-saved', () => {
  if (window.dashboardChartInstances) window.dashboardChartInstances = null;
  if (typeof renderApp === 'function') {
    renderApp();
  }
});

// Helper function to safely check study category
const isStudyCategoryHelper = (cat) => Boolean(cat && (cat.isStudy !== false && cat.type !== 'rest'));
window.isStudyCategory = isStudyCategoryHelper;

window.clearAllTimerIntervals = function() {
  if (window.planexActiveTimer && window.planexActiveTimer.intervalId) {
    clearInterval(window.planexActiveTimer.intervalId);
  }
  if (window.planexActiveTimer) {
    window.planexActiveTimer.isRunning = false;
    window.planexActiveTimer.intervalId = null;
  }
  if (typeof restoreDocumentTitle === 'function') {
    restoreDocumentTitle();
  }
  if (typeof clearPersistentTimerNotification === 'function') {
    clearPersistentTimerNotification();
  }
  if (typeof state !== 'undefined' && state) {
    state.isStudying = false;
    if (state.stopwatchInterval) {
      clearInterval(state.stopwatchInterval);
      state.stopwatchInterval = null;
    }
    if (state.pomodoroInterval) {
      clearInterval(state.pomodoroInterval);
      state.pomodoroInterval = null;
    }
  }
  if (window.appState) {
    window.appState.isStudying = false;
    if (window.appState.stopwatchInterval) {
      clearInterval(window.appState.stopwatchInterval);
      window.appState.stopwatchInterval = null;
    }
    if (window.appState.pomodoroInterval) {
      clearInterval(window.appState.pomodoroInterval);
      window.appState.pomodoroInterval = null;
    }
  }
  if (window._planexTimerInterval) {
    clearInterval(window._planexTimerInterval);
    window._planexTimerInterval = null;
  }
  try {
    if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
      leaderboardService.stopStudyHeartbeat();
    }
  } catch (_) {}
};

// Safe Modular Global Event Handlers
window.finishPomodoroSession = function() {
  try {
    const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
    if (!targetState) return;

    const wasRunning = Boolean(targetState.isPomodoroRunning || targetState.isStopwatchRunning);
    const isStopwatch = (targetState.focusTimerType === 0);
    const isBreakMode = (targetState.focusTimerType === 2);
    const isNonStudy = (targetState.focusActivityMode === 'non-study' && !isBreakMode);
    const isStudy = !isBreakMode && !isNonStudy;

    // 1. Calculate the EXACT actual elapsed time in minutes
    let elapsedSeconds = 0;
    let elapsedMinutes = 0;

    if (isStopwatch) {
      // Stopwatch (Countup): elapsedMinutes = Math.round(currentElapsedSeconds / 60)
      let currentElapsedSeconds = Number(targetState.stopwatchTime) || 0;
      if (targetState.timerStartTime) {
        const liveElapsed = Math.floor((Date.now() - targetState.timerStartTime) / 1000) + (Number(targetState.timerPreviouslyElapsed) || 0);
        currentElapsedSeconds = Math.max(currentElapsedSeconds, liveElapsed);
      }
      elapsedSeconds = Math.max(0, currentElapsedSeconds);
      elapsedMinutes = Math.round(elapsedSeconds / 60);
    } else {
      // Pomodoro (Countdown): elapsedMinutes = Math.round((presetDurationInSeconds - currentRemainingSeconds) / 60)
      const presetMins = isBreakMode ? (Number(targetState.focusPresetMins) || 5) : (Number(targetState.focusPresetMins) || 25);
      const presetDurationInSeconds = presetMins * 60;
      let currentRemainingSeconds = (typeof targetState.pomodoroTime === 'number') ? targetState.pomodoroTime : presetDurationInSeconds;
      if (targetState.timerTargetEndTime && wasRunning) {
        const liveRemaining = Math.max(0, Math.ceil((targetState.timerTargetEndTime - Date.now()) / 1000));
        currentRemainingSeconds = Math.min(currentRemainingSeconds, liveRemaining);
      }
      if (currentRemainingSeconds <= 0) {
        currentRemainingSeconds = 0;
      }
      elapsedSeconds = Math.max(0, presetDurationInSeconds - currentRemainingSeconds);
      elapsedMinutes = Math.round(elapsedSeconds / 60);
    }

    // Sanity check: If session elapsed duration is absurdly large (> 12 hours / 720 mins), it's a stale/orphaned timer session.
    // Discard it immediately and DO NOT save to database, preventing daily stats corruption.
    if (elapsedMinutes > 720 || elapsedSeconds > 12 * 3600) {
      console.warn(`[finishPomodoroSession] Stale session discarded (${elapsedMinutes} mins > 12h). Discarding without saving.`);
      targetState.isPomodoroRunning = false;
      targetState.isStopwatchRunning = false;
      targetState.isStudying = false;
      if (typeof state !== 'undefined' && state) {
        state.isPomodoroRunning = false;
        state.isStopwatchRunning = false;
        state.isStudying = false;
      }
      if (window.appState) {
        window.appState.isStudying = false;
        window.appState.isPomodoroRunning = false;
        window.appState.isStopwatchRunning = false;
      }
      if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
      try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
      try { releaseWakeLock(); } catch (_) {}
      targetState.isImmersionMode = false;
      if (typeof state !== 'undefined' && state) state.isImmersionMode = false;

      targetState.focusSessionTests = 0;
      targetState.pomodoroTime = (Number(targetState.focusPresetMins) || 25) * 60;
      targetState.stopwatchTime = 0;
      targetState.timerStartTime = null;
      targetState.timerPreviouslyElapsed = 0;
      targetState.timerTargetEndTime = null;
      if (typeof state !== 'undefined' && state) {
        state.focusSessionTests = 0;
        state.pomodoroTime = (Number(state.focusPresetMins) || 25) * 60;
        state.stopwatchTime = 0;
        state.timerStartTime = null;
        state.timerPreviouslyElapsed = 0;
        state.timerTargetEndTime = null;
      }

      if (typeof restoreDocumentTitle === 'function') restoreDocumentTitle();
      if (typeof clearPersistentTimerNotification === 'function') clearPersistentTimerNotification();

      try {
        if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
          leaderboardService.stopStudyHeartbeat();
        }
      } catch (_) {}

      if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
      if (typeof renderApp === 'function') renderApp();

      try {
        const toast = document.createElement('div');
        toast.style.cssText = `position: fixed; top: 30px; left: 50%; transform: translateX(-50%); background: #1f2937; color: white; padding: 14px 22px; border-radius: 14px; font-weight: 800; font-size: 0.9rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 90vw; text-align: center; direction: rtl; border: 1px solid rgba(255,255,255,0.15);`;
        toast.innerHTML = '⚠️ مدت زمان تایمر منقضی شده بود (> ۱۲ ساعت) و در کارنامه ثبت نشد.';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
      } catch (_) {}

      return;
    }

    // Discard session if elapsed time is 0 or less than 30 seconds
    if (elapsedSeconds < 30 || elapsedMinutes < 1) {
      targetState.isPomodoroRunning = false;
      targetState.isStopwatchRunning = false;
      targetState.isStudying = false;
      if (typeof state !== 'undefined' && state) {
        state.isPomodoroRunning = false;
        state.isStopwatchRunning = false;
        state.isStudying = false;
      }
      if (window.appState) {
        window.appState.isStudying = false;
      }
      if (typeof window.clearAllTimerIntervals === 'function') {
        window.clearAllTimerIntervals();
      }
      try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
      try { releaseWakeLock(); } catch (_) {}
      targetState.isImmersionMode = false;
      if (typeof state !== 'undefined' && state) state.isImmersionMode = false;

      if (targetState.focusTimerType === 1) {
        try {
          if (typeof pomodoroService !== 'undefined' && typeof pomodoroService.stopSession === 'function') {
            pomodoroService.stopSession().catch(() => {});
          }
        } catch (_) {}
        targetState.pomodoroActiveUsers = 0;
        if (typeof state !== 'undefined' && state) state.pomodoroActiveUsers = 0;
      }

      try {
        if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
          leaderboardService.stopStudyHeartbeat();
        }
      } catch (_) {}

      // Reset timer display state back to preset
      targetState.focusSessionTests = 0;
      targetState.pomodoroTime = (Number(targetState.focusPresetMins) || 25) * 60;
      targetState.stopwatchTime = 0;
      targetState.timerStartTime = null;
      targetState.timerPreviouslyElapsed = 0;
      targetState.timerTargetEndTime = null;
      if (typeof state !== 'undefined' && state) {
        state.focusSessionTests = 0;
        state.pomodoroTime = (Number(state.focusPresetMins) || 25) * 60;
        state.stopwatchTime = 0;
        state.timerStartTime = null;
        state.timerPreviouslyElapsed = 0;
        state.timerTargetEndTime = null;
      }

      if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
      if (typeof renderApp === 'function') renderApp();

      try {
        const toast = document.createElement('div');
        toast.style.cssText = `position: fixed; top: 30px; left: 50%; transform: translateX(-50%); background: #1f2937; color: white; padding: 14px 22px; border-radius: 14px; font-weight: 800; font-size: 0.9rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 90vw; text-align: center; direction: rtl; border: 1px solid rgba(255,255,255,0.15);`;
        if (!wasRunning && elapsedSeconds === 0) {
          toast.innerHTML = '⚠️ تایمر در حال اجرا نیست! برای ثبت مطالعه بدون تایمر، از دکمه <strong>«ثبت دستی»</strong> استفاده کنید.';
        } else {
          toast.innerHTML = '⏱️ زمان مطالعه بسیار کوتاه بود (کمتر از ۱ دقیقه) و در کارنامه ثبت نشد.';
        }
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
      } catch (_) {}

      return;
    }

    // 2. Immediately & unconditionally stop all running timer intervals and state flags
    targetState.isPomodoroRunning = false;
    targetState.isStopwatchRunning = false;
    targetState.isStudying = false;
    if (typeof state !== 'undefined' && state) {
      state.isPomodoroRunning = false;
      state.isStopwatchRunning = false;
      state.isStudying = false;
    }
    if (window.appState) {
      window.appState.isStudying = false;
    }
    window.clearAllTimerIntervals();
    try {
      localStorage.removeItem('planex_active_timer_state');
    } catch (e) {}

    try {
      releaseWakeLock();
    } catch (e) {}

    // Exit full-screen immersion mode if active
    targetState.isImmersionMode = false;
    if (typeof state !== 'undefined' && state) state.isImmersionMode = false;

    // 3. Stop remote Pomodoro concurrent user count tracking
    if (targetState.focusTimerType === 1) {
      try {
        if (typeof pomodoroService !== 'undefined' && typeof pomodoroService.stopSession === 'function') {
          pomodoroService.stopSession().catch(() => {});
        }
      } catch (e) {}
      targetState.pomodoroActiveUsers = 0;
      if (typeof state !== 'undefined' && state) state.pomodoroActiveUsers = 0;
    }

    // 4. Stop live study status and heartbeat immediately
    try {
      if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
        leaderboardService.stopStudyHeartbeat();
      }
    } catch (e) {
      console.warn('Error in stopStudyHeartbeat:', e);
    }

    // 5. Play soothing Web Audio chime and trigger notification/vibration safely
    try {
      if (typeof playPomodoroAlarm === 'function') playPomodoroAlarm();
      else if (typeof window.playPomodoroAlarm === 'function') window.playPomodoroAlarm();
      else if (typeof audioEngine !== 'undefined' && typeof audioEngine.playPomodoroAlarm === 'function') audioEngine.playPomodoroAlarm();
    } catch (e) {
      console.warn('Error playing alarm chime:', e);
    }

    try {
      if (typeof sendPomodoroNotification === 'function') sendPomodoroNotification(targetState.focusTimerType);
      else if (typeof window.sendPomodoroNotification === 'function') window.sendPomodoroNotification(targetState.focusTimerType);
    } catch (e) {
      console.warn('Error sending notification:', e);
    }

    // 6. Auto-record completed session safely with ACTUAL elapsed minutes (capped to max 4 hours / 240 mins)
    const MAX_SESSION_MINUTES = 240;
    const duration = Math.min(MAX_SESSION_MINUTES, Math.max(1, elapsedMinutes));
    const tests = isStudy ? (Math.max(0, parseInt(targetState.focusSessionTests)) || 0) : 0;
    const subject = targetState.focusSubject || '';
    const note = targetState.sessionNote || '';
    const categoryCode = isStudy ? targetState.focusCategoryCode : targetState.selectedNonStudyCode;

    let saved = null;
    try {
      if (typeof db !== 'undefined' && typeof db.recordFocusSession === 'function') {
        saved = db.recordFocusSession({
          type: isStudy ? 'study' : (isBreakMode ? 'break' : 'non-study'),
          activityType: isStudy ? 'study' : (isBreakMode ? 'break' : 'non_study'),
          is_study_time: isStudy,
          counts_for_study: isStudy,
          isBreak: isBreakMode,
          categoryCode,
          subject,
          studyMethod: isStudy ? (targetState.selectedStudyMethod || targetState.focusPhase || window.fabActivityState?.selectedPhase || window.fabActivityState?.studyType || 'یادگیری') : '',
          duration,
          minutes: duration,
          testCount: tests,
          note,
          timerType: isStopwatch ? 'stopwatch' : (isBreakMode ? 'break' : 'pomodoro')
        });
      }
    } catch (dbErr) {
      console.error('Error in recordFocusSession:', dbErr);
    }

    const categoryTitle = (saved && (saved.categoryTitle || saved.category))
      ? (saved.categoryTitle || saved.category)
      : (isBreakMode ? 'پارت استراحت ☕' : (isStudy ? 'مطالعه متمرکز' : 'فعالیت غیردرسی'));

    // 7. Success Toast with actual duration
    try {
      const toast = document.createElement('div');
      const toastBg = isBreakMode ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : (isStudy ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #d97706 0%, #b45309 100%)');
      toast.style.cssText = `position: fixed; top: 30px; left: 50%; transform: translateX(-50%); background: ${toastBg}; color: white; padding: 16px 26px; border-radius: 18px; font-weight: 900; font-size: 0.95rem; line-height: 1.8; z-index: 99999; box-shadow: 0 12px 36px rgba(0,0,0,0.5); max-width: 90vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.35);`;
      let toastContent = `🎉 پارت «${categoryTitle}» (${duration} دقیقه) پایان یافت و در کارنامه ثبت شد! ✅${tests > 0 ? `<br><span style="font-size: 0.84rem; opacity: 0.95;">🎯 ثبت ${tests} تست حل‌شده در آمار امروز</span>` : ''}`;
      if (isBreakMode) {
        toastContent = `☕ پارت استراحت (${duration} دقیقه) پایان یافت (بدون احتساب در ساعت مطالعه) ☕`;
      } else if (isNonStudy) {
        toastContent = `🧘 فعالیت غیردرسی «${categoryTitle}» (${duration} دقیقه) ثبت شد (بدون احتساب در ساعت مطالعه) 🧘`;
      }
      toast.innerHTML = toastContent;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 6000);
    } catch (e) {}

    // 8. Reset session temporary test counter & prepare next timer
    targetState.focusSessionTests = 0;
    targetState.pomodoroTime = (Number(targetState.focusPresetMins) || 25) * 60;
    targetState.stopwatchTime = 0;
    targetState.timerStartTime = null;
    targetState.timerPreviouslyElapsed = 0;
    targetState.timerTargetEndTime = null;
    if (typeof state !== 'undefined' && state) {
      state.focusSessionTests = 0;
      state.pomodoroTime = (Number(state.focusPresetMins) || 25) * 60;
      state.stopwatchTime = 0;
      state.timerStartTime = null;
      state.timerPreviouslyElapsed = 0;
      state.timerTargetEndTime = null;
    }

    // 9. Invalidate charts and trigger live dashboard updates
    try {
      if (window.dashboardChartInstances) window.dashboardChartInstances = null;
      window.dispatchEvent(new CustomEvent('activity-saved', { detail: { saved, duration, tests } }));
      if (typeof window.updateCharts === 'function') window.updateCharts();
      if (typeof window.renderDashboard === 'function') window.renderDashboard();
    } catch (e) {}

    // 10. Timer UI and app refresh (Auto-cloud sync disabled to protect KV free tier limits)
    if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
    if (typeof renderApp === 'function') renderApp();
  } catch (err) {
    console.error('Fatal recovery in finishPomodoroSession:', err);
    state.isPomodoroRunning = false;
    state.isStopwatchRunning = false;
    state.pomodoroTime = (Number(state.focusPresetMins) || 25) * 60;
    if (typeof renderApp === 'function') renderApp();
  }
};

// Global Timer Aliases for complete lifecycle safety
window.finishTimer = window.finishPomodoroSession;
window.onTimerComplete = window.finishPomodoroSession;
window.saveSession = window.finishPomodoroSession;
window.stopFocus = window.finishPomodoroSession;

window.getCurrentFocusSubjectTitle = function() {
  try {
    const isStudy = (state.focusActivityMode !== 'non-study');
    if (!isStudy) {
      const nonCategories = (typeof db !== 'undefined' && typeof db.getNonStudyCategories === 'function')
        ? db.getNonStudyCategories()
        : [];
      const nonCat = (nonCategories && nonCategories.find) ? nonCategories.find(c => c.code === state.selectedNonStudyCode) : null;
      return nonCat ? nonCat.title : 'فعالیت غیردرسی';
    }
    const categories = (typeof db !== 'undefined' && typeof db.getCategories === 'function')
      ? db.getCategories()
      : [];
    const checkStudy = (typeof isStudyCategory === 'function') ? isStudyCategory : isStudyCategoryHelper;
    const activeCode = state.focusCategoryCode || ((categories && categories.find) ? categories.find(c => checkStudy(c))?.code : null) || (categories && categories[0]?.code);
    const cat = (categories && categories.find) ? (categories.find(c => c.code === activeCode) || categories[0]) : null;
    const catTitle = cat ? (cat.title || 'مطالعه') : 'مطالعه متمرکز';
    if (state.focusSubject && state.focusSubject.trim()) {
      return `${catTitle} (${state.focusSubject.trim()})`;
    }
    return catTitle || 'مطالعه متمرکز';
  } catch (e) {
    console.warn('Fallback in getCurrentFocusSubjectTitle:', e);
    return 'مطالعه آزاد';
  }
};

window.resumeTimerFromState = function() {
  const savedState = localStorage.getItem('planex_active_timer_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      const isVisible = document.visibilityState === 'visible';
      
      if (parsed.type === 0) { // Stopwatch
        const now = Date.now();
        const startTime = parsed.startTime || 0;
        const previouslyElapsed = parsed.previouslyElapsed || 0;
        const elapsedSeconds = Math.floor((now - startTime) / 1000) + previouslyElapsed;

        // Strict Sanity Check: If elapsed time is > 12 hours (43200s), negative, or missing startTime:
        // Consider it a stale/orphaned session from yesterday or earlier. Discard state and DO NOT resume!
        if (elapsedSeconds > 12 * 3600 || elapsedSeconds < 0 || !startTime) {
          console.warn(`[resumeTimerFromState] Stale stopwatch session detected (${elapsedSeconds}s > 12h). Discarding state without resuming.`);
          try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
          if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
          state.focusTimerType = 0;
          state.stopwatchTime = 0;
          state.timerStartTime = null;
          state.timerPreviouslyElapsed = 0;
          state.timerTargetEndTime = null;
          state.isStopwatchRunning = false;
          state.isPomodoroRunning = false;
          state.isStudying = false;
          if (window.appState) {
            window.appState.focusTimerType = 0;
            window.appState.stopwatchTime = 0;
            window.appState.timerStartTime = null;
            window.appState.timerPreviouslyElapsed = 0;
            window.appState.timerTargetEndTime = null;
            window.appState.isStopwatchRunning = false;
            window.appState.isPomodoroRunning = false;
            window.appState.isStudying = false;
          }
          if (typeof restoreDocumentTitle === 'function') restoreDocumentTitle();
          if (typeof clearPersistentTimerNotification === 'function') clearPersistentTimerNotification();
          if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
            leaderboardService.stopStudyHeartbeat();
          }
          if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
          return;
        }

        state.focusTimerType = 0;
        state.timerStartTime = startTime;
        state.timerPreviouslyElapsed = previouslyElapsed;
        state.stopwatchTime = elapsedSeconds;
        state.isStopwatchRunning = true;
        state.isPomodoroRunning = false;

        window.clearAllTimerIntervals();
        if (typeof updateDocumentTitleTimer === 'function') {
          updateDocumentTitleTimer(state.stopwatchTime, false);
        }
        if (typeof spawnPersistentTimerNotification === 'function') {
          spawnPersistentTimerNotification(state.focusSubject, state.selectedStudyMethod, null, true);
        }
        // Use global indestructible timer
        window.planexActiveTimer = {
          isRunning: true,
          timerType: 0,
          startTime: state.timerStartTime,
          accumulatedTime: state.timerPreviouslyElapsed,
          targetEndTime: null,
          presetMins: 25,
          intervalId: setInterval(window.planexGlobalTimerTick, 1000)
        };
        window.planexGlobalTimerTick();

        if (isVisible && typeof updateTimerDisplayDOM === 'function') {
          updateTimerDisplayDOM();
        }

        if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.startStudyHeartbeat === 'function') {
          state.isStudying = true;
          if (window.appState) window.appState.isStudying = true;
          leaderboardService.startStudyHeartbeat(window.getCurrentFocusSubjectTitle(), 'study');
        }
      } else if (parsed.type === 1 || parsed.type === 2) { // Pomodoro / Break
        state.focusTimerType = parsed.type;
        state.timerTargetEndTime = parsed.targetEndTime;
        state.focusPresetMins = parsed.presetMins || 25;
        const now = Date.now();
        const targetEndTime = Number(parsed.targetEndTime) || 0;
        const remaining = Math.ceil((targetEndTime - now) / 1000);
        const elapsedSinceEnd = now - targetEndTime;

        // Strict Sanity Check: If targetEndTime is expired, more than 12 hours old, or invalid:
        // Discard without auto-saving or auto-running
        if (remaining <= 0 || elapsedSinceEnd > 12 * 3600 * 1000 || remaining > 12 * 3600) {
          console.warn('[resumeTimerFromState] Stale/expired pomodoro session detected. Discarding without resuming.');
          try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
          if (typeof window.clearAllTimerIntervals === 'function') window.clearAllTimerIntervals();
          state.isPomodoroRunning = false;
          state.isStopwatchRunning = false;
          state.isStudying = false;
          state.timerTargetEndTime = null;
          state.pomodoroTime = (Number(parsed.presetMins) || Number(state.focusPresetMins) || 25) * 60;
          if (window.appState) {
            window.appState.isPomodoroRunning = false;
            window.appState.isStopwatchRunning = false;
            window.appState.isStudying = false;
            window.appState.timerTargetEndTime = null;
            window.appState.pomodoroTime = (Number(parsed.presetMins) || Number(window.appState.focusPresetMins) || 25) * 60;
          }
          if (typeof restoreDocumentTitle === 'function') restoreDocumentTitle();
          if (typeof clearPersistentTimerNotification === 'function') clearPersistentTimerNotification();
          if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
            leaderboardService.stopStudyHeartbeat();
          }
          if (typeof updateTimerDisplayDOM === 'function') updateTimerDisplayDOM();
          return;
        }

        state.pomodoroTime = Math.max(0, remaining);

        window.clearAllTimerIntervals();

        if (remaining > 0) {
          state.isPomodoroRunning = true;
          state.isStopwatchRunning = false;
          const isRealStudy = (parsed.type !== 2);
          state.isStudying = isRealStudy;
          if (window.appState) window.appState.isStudying = isRealStudy;
          if (typeof updateDocumentTitleTimer === 'function') {
            updateDocumentTitleTimer(remaining, true);
          }
          if (typeof spawnPersistentTimerNotification === 'function') {
            spawnPersistentTimerNotification(state.focusSubject, state.selectedStudyMethod, state.timerTargetEndTime, false);
          }
          // Use global indestructible timer
          window.planexActiveTimer = {
            isRunning: true,
            timerType: 1, // assumption or get from state
            startTime: Date.now(), // dummy for pomodoro
            accumulatedTime: 0,
            targetEndTime: state.timerTargetEndTime,
            presetMins: state.focusPresetMins,
            intervalId: setInterval(window.planexGlobalTimerTick, 1000)
          };
          window.planexGlobalTimerTick();

          if (isVisible && typeof updateTimerDisplayDOM === 'function') {
            updateTimerDisplayDOM();
          }

          if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.startStudyHeartbeat === 'function') {
            leaderboardService.startStudyHeartbeat(window.getCurrentFocusSubjectTitle(), parsed.type === 2 ? 'break' : 'study');
          }
        } else {
          state.isPomodoroRunning = false;
          state.isStopwatchRunning = false;
          state.isStudying = false;
          if (window.appState) window.appState.isStudying = false;
          try { localStorage.removeItem('planex_active_timer_state'); } catch (_) {}
          if (typeof leaderboardService !== 'undefined' && typeof leaderboardService.stopStudyHeartbeat === 'function') {
            leaderboardService.stopStudyHeartbeat();
          }
        }
      }
    } catch (e) {
      console.warn('[resumeTimerFromState] Exception:', e);
    }
  }
};

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    window.resumeTimerFromState();
  }
});
window.addEventListener('focus', () => {
  if (document.visibilityState === 'visible') {
    window.resumeTimerFromState();
  }
});


// Fast DOM Timer Update without full app re-render (Flicker Fix)
function updateTimerDisplayDOM() {
  if (typeof document !== 'undefined' && document.hidden) return;
  const targetState = (typeof state !== 'undefined' && state) ? state : window.appState;
  if (!targetState) return;

  const displaySeconds = targetState.focusTimerType === 0 ? targetState.stopwatchTime : targetState.pomodoroTime;
  const safeSeconds = Math.max(0, displaySeconds || 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  const pad = (n) => n.toString().padStart(2, '0');
  const formattedTime = hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;

  const timerEls = document.querySelectorAll('#focus-timer-display, #timer-clock-display, [data-alias="timer-clock-display"]');
  timerEls.forEach(el => { el.textContent = formattedTime; });

  const immersionEl = document.getElementById('immersion-clock-time');
  if (immersionEl) immersionEl.textContent = formattedTime;

  const circleEls = document.querySelectorAll('#immersion-clock-clickable circle:nth-child(2), .timer-circle circle:nth-child(2), .countdown-timer circle:nth-child(2)');
  if (circleEls.length > 0) {
    const totalSecs = targetState.focusTimerType === 0 ? 3600 : ((targetState.focusPresetMins || 25) * 60);
    const progressSecs = targetState.focusTimerType === 0 ? (targetState.stopwatchTime % 3600) : safeSeconds;
    const ratio = totalSecs > 0 ? Math.min(1, Math.max(0, progressSecs / totalSecs)) : 0;
    const dashoffset = 596.9 - (596.9 * ratio);
    const safeOffset = isNaN(dashoffset) ? '0' : String(dashoffset);
    circleEls.forEach(c => c.setAttribute('stroke-dashoffset', safeOffset));
  }

  const toggleBtn = document.getElementById('btn-toggle-timer-main');
  if (toggleBtn) {
    const isRunning = Boolean(targetState.isPomodoroRunning || targetState.isStopwatchRunning);
    if (isRunning) {
      toggleBtn.textContent = '⏸ توقف و ثبت پارت';
      toggleBtn.style.background = '#ef4444';
      toggleBtn.style.boxShadow = '0 4px 16px rgba(239,68,68,0.35)';
    } else {
      const isBreak = (targetState.focusTimerType === 2);
      const isNonStudy = (targetState.focusActivityMode === 'non-study' && !isBreak);
      toggleBtn.textContent = isBreak ? '☕ شروع استراحت' : (isNonStudy ? '🧘 شروع فعالیت غیردرسی' : '▶ شروع تایمر');
      toggleBtn.style.background = isBreak ? '#0284c7' : (isNonStudy ? '#d97706' : '#10b981');
      toggleBtn.style.boxShadow = '0 4px 16px rgba(16,185,129,0.35)';
    }
  }
}
window.updateTimerDisplayDOM = updateTimerDisplayDOM;

function bindEvents() {
  const normTab = normalizeTab(state.activeTab);
  const isLeaderboard = (normTab === 'leaderboard');
  const isArticles = (normTab === 4);

  // --- 1. Core Navigation ---
  try {
    if (!window.onPopStateBound) {
      window.addEventListener('popstate', () => {
        parseUrlSearchParameters();
        renderApp();
      });
      window.onPopStateBound = true;
    }

    document.querySelectorAll('.bottom-nav .nav-item, .nav-item').forEach(el => {
      el.onclick = () => {
        const tabVal = el.dataset.tab;
        if (typeof window.switchTab === 'function') {
          window.switchTab(tabVal);
        } else {
          state.activeTab = normalizeTab(tabVal);
          state.selectedArticleId = null;
          renderApp();
        }
      };
    });
  } catch (e) {
    console.error('Error in Navigation setup:', e);
  }

  // --- 2. Header Actions & Modals Openers ---
  try {
    const btnLeaderboardHeader = document.getElementById('btn-leaderboard-header');
    if (btnLeaderboardHeader) {
      btnLeaderboardHeader.onclick = () => {
        if (typeof window.switchTab === 'function') window.switchTab('leaderboard');
        else {
          state.activeTab = 'leaderboard';
          state.selectedArticleId = null;
          renderApp();
        }
      };
    }

    const btnLeaderboardBanner = document.getElementById('btn-leaderboard-banner');
    if (btnLeaderboardBanner) {
      btnLeaderboardBanner.onclick = () => {
        if (typeof window.switchTab === 'function') window.switchTab('leaderboard');
        else {
          state.activeTab = 'leaderboard';
          state.selectedArticleId = null;
          renderApp();
        }
      };
    }

    const btnUserGuideHeader = document.getElementById('btn-user-guide-modal');
    if (btnUserGuideHeader) btnUserGuideHeader.onclick = () => window.openUserGuideModal(0);

    const btnSupport = document.getElementById('btn-support-modal');
    if (btnSupport) btnSupport.onclick = () => { state.activeModal = 'support'; renderApp(); };

    const btnSettingsHeader = document.getElementById('btn-settings-header');
    if (btnSettingsHeader) {
      btnSettingsHeader.onclick = () => {
        if (typeof window.switchTab === 'function') window.switchTab('tools');
        else { state.activeTab = 3; renderApp(); }
      };
    }

    const btnFocusHeader = document.getElementById('btn-focus-header');
    if (btnFocusHeader) {
      btnFocusHeader.onclick = () => {
        state.activeModal = 'focus';
        if (state.isPomodoroRunning && state.focusTimerType === 1) {
          pomodoroService.fetchActiveCount().then(r => {
            if (r && r.count) { state.pomodoroActiveUsers = r.count; renderApp(); }
          });
        }
        renderApp();
      };
    }

    const btnHeaderFocusModal = document.getElementById('btn-header-focus-modal');
    if (btnHeaderFocusModal) btnHeaderFocusModal.onclick = () => { state.activeModal = 'focus'; renderApp(); };

    const btnHeaderActivePomodoro = document.getElementById('btn-header-active-pomodoro');
    if (btnHeaderActivePomodoro) btnHeaderActivePomodoro.onclick = () => { state.activeModal = 'focus'; renderApp(); };

    const cloudSyncStatusIndicator = document.getElementById('cloud-sync-status-indicator');
    if (cloudSyncStatusIndicator) {
      cloudSyncStatusIndicator.onclick = () => {
        if (typeof window.triggerManualCloudSync === 'function') {
          window.triggerManualCloudSync();
        } else if (typeof window.handlePersonalCloudPush === 'function') {
          window.handlePersonalCloudPush(true);
        }
      };
    }

    const btnCloseLoginModal = document.getElementById('btn-close-login-modal');
    if (btnCloseLoginModal) btnCloseLoginModal.onclick = () => { state.activeModal = null; renderApp(); };

    const btnWeekHeader = document.getElementById('btn-week-header');
    if (btnWeekHeader) btnWeekHeader.onclick = () => { window.pickerViewYear = null; window.pickerViewMonthIdx = null; state.activeModal = 'week'; renderApp(); };

    const btnPrevWeek = document.getElementById('btn-prev-week');
    if (btnPrevWeek) btnPrevWeek.onclick = () => { db.goToPrevWeek(); renderApp(); };

    const btnNextWeek = document.getElementById('btn-next-week');
    if (btnNextWeek) btnNextWeek.onclick = () => { db.goToNextWeek(); renderApp(); };

    const btnResetCurrentWeek = document.getElementById('btn-reset-current-week');
    if (btnResetCurrentWeek) btnResetCurrentWeek.onclick = () => { db.resetToCurrentWeek(); renderApp(); };
  } catch (o) { console.error('Error in Header handlers:', o); }

  // --- 3. Accordions Handling (Focus, Routines, Planner, Articles) ---
  try {
    document.querySelectorAll('.btn-accordion-toggle').forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const k = b.dataset.accordionKey;
        if (k) {
          if (!state.focusAccordions) state.focusAccordions = { activity: false, timing: false, testNote: false, audio: false };
          state.focusAccordions[k] = !state.focusAccordions[k];
          renderApp();
        }
      };
    });

    document.querySelectorAll('.btn-routines-accordion-toggle').forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const k = b.dataset.key;
        if (k) {
          if (!state.routinesAccordions) state.routinesAccordions = { consultation: false, statsChart: false, habitTracker: false };
          state.routinesAccordions[k] = !state.routinesAccordions[k];
          renderApp();
        }
      };
    });

    document.querySelectorAll('.btn-planner-accordion-toggle').forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const k = b.dataset.key;
        if (k) {
          if (!state.plannerAccordions) state.plannerAccordions = { countdowns: false, targets: false, weeklyGoals: false, dailyMatrix: false };
          state.plannerAccordions[k] = !state.plannerAccordions[k];
          renderApp();
        }
      };
    });

    document.querySelectorAll('.btn-articles-accordion-toggle').forEach(b => {
      b.onclick = (e) => {
        e.stopPropagation();
        const k = b.dataset.key || 'questionBankHub';
        if (!state.articlesAccordions) state.articlesAccordions = { questionBankHub: false };
        state.articlesAccordions[k] = !state.articlesAccordions[k];
        renderApp();
      };
    });
  } catch (o) { console.error('Error in Accordion handlers:', o); }

  // --- 4. Articles & Question Bank Actions ---
  try {
    document.querySelectorAll('.btn-exam-quick-chip').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const examId = btn.dataset.examId || '1405-khordad';
        window.openQuestionBank(examId);
      };
    });

    document.querySelectorAll('.article-card').forEach(r => {
      r.onclick = () => {
        const articleId = r.dataset.articleId;
        if (articleId === 'questions-1404') {
          window.openQuestionBank('1405-khordad');
        } else {
          state.selectedArticleId = articleId;
          state.activeTab = 4;
          try {
            const url = new URL(window.location.href);
            url.searchParams.set('tab', 'articles');
            if (articleId) url.searchParams.set('article', articleId);
            url.searchParams.delete('exam');
            window.history.replaceState({}, '', url.toString());
          } catch (e) {}
          renderApp();
          window.scrollTo(0, 0);
        }
      };
    });

    const btnBackToArticles = document.getElementById('btn-back-to-articles');
    if (btnBackToArticles) {
      btnBackToArticles.onclick = () => {
        state.selectedArticleId = null;
        state.activeTab = 4;
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('tab', 'articles');
          url.searchParams.delete('article');
          url.searchParams.delete('exam');
          window.history.replaceState({}, '', url.toString());
        } catch (e) {}
        renderApp();
        window.scrollTo(0, 0);
      };
    }

    const btnBackToArticlesBottom = document.getElementById('btn-back-to-articles-bottom');
    if (btnBackToArticlesBottom) {
      btnBackToArticlesBottom.onclick = () => {
        state.selectedArticleId = null;
        state.activeTab = 4;
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('tab', 'articles');
          url.searchParams.delete('article');
          url.searchParams.delete('exam');
          window.history.replaceState({}, '', url.toString());
        } catch (e) {}
        renderApp();
        window.scrollTo(0, 0);
      };
    }

    const btnShareArticle = document.getElementById('btn-share-article');
    if (btnShareArticle) {
      btnShareArticle.onclick = () => {
        const url = window.location.origin + window.location.pathname + '?tab=articles&article=' + encodeURIComponent(btnShareArticle.dataset.articleId);
        if (navigator.share) navigator.share({ title: document.title, url }).catch(() => {});
        else navigator.clipboard.writeText(url).then(() => alert('✅ لینک کپی شد!')).catch(() => prompt('لینک را کپی کنید:', url));
      };
    }

    // Dedicated Download Attachment Handler for Articles
    const downloadBtns = document.querySelectorAll('.btn-article-download');
    downloadBtns.forEach(btn => {
      btn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const fileUrl = btn.dataset.url;
        const fileName = btn.dataset.filename || 'download';
        const format = btn.dataset.format || 'فایل';

        const originalHtml = btn.innerHTML;
        btn.disabled = true;
        btn.style.opacity = '0.7';
        btn.innerHTML = `<span>⏳ در حال آماده‌سازی دانلود...</span>`;

        try {
          const response = await fetch(fileUrl);
          if (!response.ok) throw new Error('Fetch failed: ' + response.status);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);

          if (typeof window.showToast === 'function') {
            window.showToast(`✅ فایل «${fileName}» با موفقیت دانلود شد!`, 'success', 3500);
          }
        } catch (fetchErr) {
          console.warn('Direct fetch failed, falling back to anchor trigger:', fetchErr);
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = fileName;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          if (typeof window.showToast === 'function') {
            window.showToast(`📥 فایل «${fileName}» در حال بارگیری است.`, 'info', 3000);
          }
        } finally {
          setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.innerHTML = originalHtml;
          }, 1500);
        }
      };
    });

    if (typeof window.bindSingleArticleEvents === 'function') {
      window.bindSingleArticleEvents(state.selectedArticleId);
    }
  } catch (o) { console.error('Error in Articles handlers:', o); }

  // --- 5. Leaderboard View Specific Event Binding ---
  if (isLeaderboard) {
    try {
      if (typeof bindLeaderboardEvents === 'function') {
        bindLeaderboardEvents();
      }
    } catch (err) {
      console.error('Error binding leaderboard view events:', err);
    }
  }

  // --- 6. Question Bank Specific Event Binding ---
  if (isArticles && state.selectedArticleId === 'questions-1404') {
    try {
      if (typeof bindQuestionBankEvents === 'function') {
        bindQuestionBankEvents(renderApp);
      }
    } catch (err) {
      console.error('Error binding question bank events:', err);
    }
  }

  
}

// ==========================================================================
// 🚀 Application Boot & Deep-Link Router Engine
// ==========================================================================
export function parseUrlSearchParameters() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const articleParam = urlParams.get('article');
    const examParam = urlParams.get('exam');
    const groupParam = urlParams.get('group');
    const roomParam = urlParams.get('room');

    // 1. Check for Question Bank / Exam deep link
    if (examParam) {
      state.activeTab = 4;
      state.selectedArticleId = 'questions-1404';
      if (!window.questionBankState) {
        window.questionBankState = {
          selectedExamId: examParam,
          searchQuery: '',
          selectedCategory: 'همه',
          activeRecallMode: false,
          revealedQuestionIds: new Set(),
          userAnswers: {}
        };
      } else {
        window.questionBankState.selectedExamId = examParam;
      }
    } else if (articleParam) {
      state.activeTab = 4;
      state.selectedArticleId = articleParam;
      if (articleParam === 'questions-1404') {
        if (!window.questionBankState) {
          window.questionBankState = {
            selectedExamId: '1405-khordad',
            searchQuery: '',
            selectedCategory: 'همه',
            activeRecallMode: false,
            revealedQuestionIds: new Set(),
            userAnswers: {}
          };
        }
      }
    } else if (tabParam) {
      state.activeTab = normalizeTab(tabParam);
    }

    // 2. Check for Leaderboard Group invite (?group=PLX-XXXX)
    if (groupParam) {
      state.activeTab = 'leaderboard';
      setTimeout(() => {
        if (typeof window.handleSwitchGroup === 'function') {
          window.handleSwitchGroup(groupParam);
        }
      }, 150);
    }

    // 3. Check for Study Room invite (?room=ROOM_CODE)
    if (roomParam) {
      // Strip ?room query string to avoid re-opening modal on each re-render
      urlParams.delete('room');
      const cleanSearch = urlParams.toString() ? `?${urlParams.toString()}` : '';
      window.history.replaceState({}, '', `${window.location.pathname}${cleanSearch}`);
      setTimeout(() => {
        if (typeof window.joinStudyRoom === 'function') {
          window.joinStudyRoom(roomParam);
        }
      }, 200);
    }
  } catch (err) {
    console.error('[Router] Error parsing initial URL parameters:', err);
  }
}

export function initApp() {
  try {
    // 1. Apply global dark glass theme and saved Persian font family
    applyGlobalThemeSettings();

    // 2. Parse URL parameters for direct deep-linking
    parseUrlSearchParameters();

    // 2.5. Self-healing check for any previously corrupted stats/sessions (>12h)
    try {
      if (typeof db !== 'undefined' && typeof db.sanitizeCorruptedStats === 'function') {
        db.sanitizeCorruptedStats();
      }
    } catch (_) {}

    // 3. Resume any active stopwatch or pomodoro session from localStorage
    if (typeof window.resumeTimerFromState === 'function') {
      window.resumeTimerFromState();
    }

    // 4. Initial Render
    renderApp();

    // 5. Initial fetch of user groups if authenticated
    try {
      const userProf = db?.getUserProfile?.() || (typeof window.getUserProfile === 'function' ? window.getUserProfile() : null);
      if (userProf && (userProf.id || userProf.phone)) {
        if (typeof window.leaderboardService?.fetchUserGroups === 'function') {
          window.leaderboardService.fetchUserGroups(false).catch(() => {});
        }
      }
    } catch (e) {}

    // 6. If initial tab is Leaderboard, trigger data refresh
    const normTab = normalizeTab(state.activeTab);
    if (normTab === 'leaderboard') {
      if (typeof window.leaderboardService?.fetchUserGroups === 'function') {
        window.leaderboardService.fetchUserGroups(false).catch(() => {});
      }
      if (typeof window.initLeaderboardView === 'function') {
        try { window.initLeaderboardView(); } catch (e) {}
      }
      if (typeof window.refreshLeaderboardData === 'function') {
        setTimeout(() => window.refreshLeaderboardData(true), 100);
      }
    }

    console.log('[PlanEx] App initialized successfully with tab:', state.activeTab);
  } catch (err) {
    console.error('[PlanEx] Fatal error during initApp:', err);
  }
}

window.initApp = initApp;

// Auto-run when DOM is loaded
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
