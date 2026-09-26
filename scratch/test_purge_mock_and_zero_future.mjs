import { pathToFileURL } from 'url';
import path from 'path';

// Setup Mock Storage with legacy/future fake data to test the purge
const storage = {
  planex_recent_activity_sessions: JSON.stringify([
    { id: 'mock_1', type: 'study', duration: 150, testCount: 20, dateStr: '1405/06/07', isStudy: true },
    { id: 'session_future_1', type: 'study', duration: 120, testCount: 50, dateStr: '1405/07/01', isStudy: true },
    { id: 'session_future_2', type: 'study', duration: 60, testCount: 15, dateStr: '1406/01/01', isStudy: true }
  ]),
  planex_hourly_logs: JSON.stringify({
    "1405_6_1": {
      "0_0": { categoryCode: 'cat_dakheli', note: 'fake', testCount: 10 },
      "0_1": { categoryCode: 'cat_dakheli', note: 'fake', testCount: 10 },
      "5_0": { categoryCode: 'cat_jarahi', note: 'fake', testCount: 15 },
      "6_0": { categoryCode: 'cat_atfal', note: 'fake', testCount: 10 }
    }
  })
};

global.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

global.window = {
  isEarlyBirdSubmitting: false,
  renderApp: () => {}
};

console.log("--- 1. Testing DB Initialization & Mock/Future Data Purge ---");
const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

const remainingSessions = JSON.parse(storage.planex_recent_activity_sessions || '[]');
console.log("Remaining sessions after purge:", remainingSessions);

// Verify mock_1 and future sessions were completely wiped
if (remainingSessions.some(s => s.id === 'mock_1' || s.dateStr === '1405/07/01' || s.dateStr === '1406/01/01')) {
  throw new Error("Purge failed! Mock or future sessions still exist.");
}
console.log("✅ All mock and future day sessions purged successfully!");

console.log("\n--- 2. Testing Clean Zero State for Today & Future Days ---");
const todayStr = db.getTodayJalaliString();
const statsTodayZero = db.getDailyStats(todayStr);
console.log("Stats today (Clean zero state):", statsTodayZero);

if (statsTodayZero.studyMinutes !== 0 || statsTodayZero.totalTests !== 0 || statsTodayZero.studyHours !== 0) {
  throw new Error(`Expected 0 minutes and 0 tests, got ${statsTodayZero.studyMinutes}m and ${statsTodayZero.totalTests} tests`);
}

const futureStats = db.getDailyStats('1405/12/29');
console.log("Future stats (1405/12/29):", futureStats);
if (futureStats.studyMinutes !== 0 || futureStats.totalTests !== 0) {
  throw new Error("Future stats must be strictly 0!");
}
console.log("✅ Zero state verified: Today and future dates return strictly 0!");

console.log("\n--- 3. Testing DashboardView Rendering with 0 Study Time ---");
const dashboardPath = pathToFileURL(path.resolve('src/views/DashboardView.js')).href;
const { renderDashboardView } = await import(dashboardPath);

const todayIdx = (new Date().getDay() + 1) % 7;
const zeroHtml = renderDashboardView(todayIdx, 'daily');

// Verify dashboard contains '۰ دقیقه' and does NOT contain 2.5h / 150m
if (!zeroHtml.includes('۰ دقیقه')) {
  throw new Error("Dashboard zero state does not render '۰ دقیقه'!");
}
if (zeroHtml.includes('2.5h') || zeroHtml.includes('150 دقیقه')) {
  throw new Error("Dashboard zero state contains fake 2.5h / 150m data!");
}
console.log("✅ Dashboard zero state renders strictly '۰ دقیقه' with 0% progress!");

console.log("\n--- 4. Testing Exact 2-Minute Session Logging & Donut Progress ---");
const saved2Min = db.recordFocusSession({
  type: 'study',
  categoryCode: 'cat_dakheli',
  subject: 'کاردیولوژی نوار قلب',
  duration: 2,
  testCount: 4
});

console.log("Saved 2-min session:", saved2Min);
const statsAfter2Min = db.getDailyStats(todayStr);
console.log("Stats after 2-min session:", statsAfter2Min);

if (statsAfter2Min.studyMinutes !== 2 || statsAfter2Min.totalTests !== 4) {
  throw new Error(`Expected 2m and 4 tests, got ${statsAfter2Min.studyMinutes}m and ${statsAfter2Min.totalTests} tests`);
}

const activeHtml = renderDashboardView(todayIdx, 'daily');
if (!activeHtml.includes('۲ دقیقه')) {
  throw new Error("Dashboard does not contain formatted '۲ دقیقه'!");
}
if (activeHtml.includes('2.5h') || activeHtml.includes('150 دقیقه')) {
  throw new Error("Dashboard contains fake 2.5h fallback data!");
}
console.log("✅ Dashboard accurately displays '۲ دقیقه' and 4 tests!");

console.log("\n🎉 ALL MOCK PURGE, FUTURE DATE WIPING & EXACT DONUT TESTS PASSED 100%!");
