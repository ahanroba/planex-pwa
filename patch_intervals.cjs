const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

// Patch planexStartFocusTimer
code = code.replace(
  /targetState\.stopwatchInterval = setInterval\(stopwatchTick, 1000\);[\s\S]*?spawnPersistentTimerNotification\(subject, phase, null, true\);\s*\}/,
  `// Use global indestructible timer
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
    }`
);

code = code.replace(
  /targetState\.pomodoroInterval = setInterval\(pomodoroTick, 1000\);[\s\S]*?spawnPersistentTimerNotification\(subject, phase, targetState\.timerTargetEndTime, false\);\s*\}/,
  `// Use global indestructible timer
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
    }`
);

// Patch resumeTimerFromState for Stopwatch
code = code.replace(
  /state\.stopwatchInterval = setInterval\(\(\) => \{[\s\S]*?\}, 1000\);/,
  `// Use global indestructible timer
        window.planexActiveTimer = {
          isRunning: true,
          timerType: 0,
          startTime: state.timerStartTime,
          accumulatedTime: state.timerPreviouslyElapsed,
          targetEndTime: null,
          presetMins: 25,
          intervalId: setInterval(window.planexGlobalTimerTick, 1000)
        };
        window.planexGlobalTimerTick();`
);

// Patch resumeTimerFromState for Pomodoro
code = code.replace(
  /state\.pomodoroInterval = setInterval\(\(\) => \{[\s\S]*?window\.finishPomodoroSession\(\);\s*\}\s*\}, 1000\);/,
  `// Use global indestructible timer
          window.planexActiveTimer = {
            isRunning: true,
            timerType: 1, // assumption or get from state
            startTime: Date.now(), // dummy for pomodoro
            accumulatedTime: 0,
            targetEndTime: state.timerTargetEndTime,
            presetMins: state.focusPresetMins,
            intervalId: setInterval(window.planexGlobalTimerTick, 1000)
          };
          window.planexGlobalTimerTick();`
);

// Patch clearAllTimerIntervals to also clear window.planexActiveTimer
code = code.replace(
  /window\.clearAllTimerIntervals = function\(\) \{/,
  `window.clearAllTimerIntervals = function() {
  if (window.planexActiveTimer && window.planexActiveTimer.intervalId) {
    clearInterval(window.planexActiveTimer.intervalId);
  }
  if (window.planexActiveTimer) {
    window.planexActiveTimer.isRunning = false;
    window.planexActiveTimer.intervalId = null;
  }`
);

fs.writeFileSync('src/main.js', code);
console.log('Patched intervals in src/main.js');
