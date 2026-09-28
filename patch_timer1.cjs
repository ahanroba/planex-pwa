const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const newLogic = `
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
`;

// Insert the new logic right before renderApp
code = code.replace(/export function renderApp\(\)\s*\{/, newLogic + '\nexport function renderApp() {\n  if (window.planexActiveTimer && window.planexActiveTimer.isRunning) window.planexGlobalTimerTick();\n');

fs.writeFileSync('src/main.js', code);
console.log('Injected global timer state and renderApp patch.');
