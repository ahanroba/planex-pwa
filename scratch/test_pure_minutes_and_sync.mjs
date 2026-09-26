import { pathToFileURL } from 'url';
import path from 'path';

// Setup Clean Mock Storage
const storage = {};
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

console.log("--- 1. Testing Database Pure Minutes Helpers ---");
const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

const todayStr = db.getTodayJalaliString();
console.log("Today Jalali Date:", todayStr);

// Initial state: 0 minutes
if (db.getStudyMinutesByDate(todayStr) !== 0 || db.getStudyHoursByDate(todayStr) !== 0 || db.getDailyTestCount(todayStr) !== 0) {
  throw new Error("Initial state is not 0!");
}
console.log("✅ Initial study minutes = 0, hours = 0, tests = 0");

// Record a 1-minute study session
const savedSession = db.recordFocusSession({
  type: 'study',
  categoryCode: 'cat_dakheli',
  subject: 'قلب و عروق',
  duration: 1, // 1 minute
  testCount: 3
});

console.log("Saved 1-min session:", savedSession);
const minsAfter = db.getStudyMinutesByDate(todayStr);
const hoursAfter = db.getStudyHoursByDate(todayStr);
const testsAfter = db.getDailyTestCount(todayStr);

console.log(`Recorded values: ${minsAfter} mins, ${hoursAfter} hours, ${testsAfter} tests`);

if (minsAfter !== 1) throw new Error(`Expected 1 minute, got ${minsAfter}`);
if (hoursAfter !== 0.02) throw new Error(`Expected 0.02 hours, got ${hoursAfter}`);
if (testsAfter !== 3) throw new Error(`Expected 3 tests, got ${testsAfter}`);

console.log("✅ db.getStudyMinutesByDate and db.getStudyHoursByDate are 100% accurate (0 snapping to 30 min)!");

console.log("\n--- 2. Testing Leaderboard Sync Payload ---");
const lbPath = pathToFileURL(path.resolve('src/services/leaderboardService.js')).href;
const { leaderboardService } = await import(lbPath);

const syncStats = leaderboardService.getTodayStats();
console.log("Leaderboard sync stats:", syncStats);

if (syncStats.studyMinutes !== 1 || syncStats.studyHours !== 0.02 || syncStats.testCount !== 3) {
  throw new Error(`Sync stats mismatch! Expected { studyMinutes: 1, studyHours: 0.02, testCount: 3 }, got ${JSON.stringify(syncStats)}`);
}
console.log("✅ Leaderboard service syncs pure minutes and exact float hours!");

console.log("\n--- 3. Testing DashboardView Circular Goal Donut Charts ---");
const dashPath = pathToFileURL(path.resolve('src/views/DashboardView.js')).href;
const { renderDashboardView } = await import(dashPath);

const todayIdx = (new Date().getDay() + 1) % 7;
const dashHtml = renderDashboardView(todayIdx, 'daily');

if (!dashHtml.includes('۱ دقیقه')) {
  throw new Error("Dashboard does not render formatted '۱ دقیقه'!");
}
if (dashHtml.includes('2.5h') || dashHtml.includes('30 دقیقه') || dashHtml.includes('0.5h')) {
  throw new Error("Dashboard contains legacy 30-min slot snap or fake data!");
}
console.log("✅ Dashboard circular progress ring successfully renders exact '۱ دقیقه' and accurate progress!");

console.log("\n--- 4. Testing 45-Minute Session Logging ---");
db.recordFocusSession({
  type: 'study',
  categoryCode: 'cat_jarahi',
  subject: 'تروما',
  duration: 44, // 44 mins + 1 min = 45 mins total
  testCount: 20
});

const mins45 = db.getStudyMinutesByDate(todayStr);
const hours45 = db.getStudyHoursByDate(todayStr);
const tests45 = db.getDailyTestCount(todayStr);

console.log(`Values after 45m: ${mins45} mins, ${hours45} hours, ${tests45} tests`);
if (mins45 !== 45 || hours45 !== 0.75 || tests45 !== 23) {
  throw new Error(`Expected 45 mins, 0.75 hours, 23 tests; got ${mins45}m, ${hours45}h, ${tests45}t`);
}

const syncStats45 = leaderboardService.getTodayStats();
if (syncStats45.studyMinutes !== 45 || syncStats45.studyHours !== 0.75 || syncStats45.testCount !== 23) {
  throw new Error("Leaderboard sync failed on 45-min session!");
}
console.log("✅ 45-minute study session verified: exactly 45 mins and 0.75h sent to leaderboard!");

console.log("\n🎉 ALL ARCHITECTURAL REFACTORING TESTS PASSED 100% WITH ZERO 30-MIN SLOTS!");
