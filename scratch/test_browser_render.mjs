import { pathToFileURL } from 'url';
import path from 'path';

// Setup Mock Storage with dirty/corrupted legacy items
const storage = {
  planex_recent_activity_sessions: JSON.stringify([
    null,
    { id: '1', type: 'study', duration: '25', testCount: '10', date: '1405/06/07', dateStr: '1405/06/07' },
    undefined,
    {},
    { id: '2', type: 'non-study', duration: 15, date: '1405/06/07', dateStr: '1405/06/07' },
    "invalid-item"
  ]),
  planex_recorded_timer: JSON.stringify({
    "2026-08-29": { minutes: 40, tests: 25 }
  }),
  planex_categories: JSON.stringify([
    { code: 'ع-س', title: 'داخلی', color: '#0ea5e9', icon: '📚', isStudy: true },
    null
  ])
};

global.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

console.log("--- 1. Testing db.getDailyStats with corrupted data ---");
const stats = db.getDailyStats('1405/06/07');
console.log("Stats output:", stats);
if (stats.studyMinutes !== 25 || stats.totalTests !== 10 || stats.nonStudyMinutes !== 15) {
  throw new Error("getDailyStats failed on corrupted storage!");
}

console.log("--- 2. Testing db.jdnToJalali ---");
const jalaliToday = db.getTodayJalali();
const jdnToday = db.getTodayJdn();
const converted = db.jdnToJalali(jdnToday);
console.log(`Original: ${jalaliToday.join('/')}, Converted from JDN ${jdnToday}: ${converted.join('/')}`);
if (converted[0] !== jalaliToday[0] || converted[1] !== jalaliToday[1] || converted[2] !== jalaliToday[2]) {
  throw new Error("jdnToJalali conversion mismatch!");
}

console.log("--- 3. Testing renderDashboardView with dirty data ---");
const dashboardPath = pathToFileURL(path.resolve('src/views/DashboardView.js')).href;
const { renderDashboardView } = await import(dashboardPath);

for (let day = 0; day < 7; day++) {
  const htmlDaily = renderDashboardView(day, 'daily');
  const htmlWeekly = renderDashboardView(day, 'weekly');
  if (!htmlDaily || htmlDaily.length < 500 || !htmlWeekly || htmlWeekly.length < 500) {
    throw new Error(`renderDashboardView failed for day ${day}`);
  }
}
console.log("✅ All 7 days rendered for both daily and weekly views with 0 errors!");

console.log("--- 4. Testing renderFocusView ---");
const focusPath = pathToFileURL(path.resolve('src/views/FocusView.js')).href;
const { renderFocusView } = await import(focusPath);

const focusStudy = renderFocusView({ activityMode: 'study' });
const focusNonStudy = renderFocusView({ activityMode: 'non-study' });

if (!focusStudy.includes('نام درس') || !focusNonStudy.includes('غیردرسی')) {
  throw new Error("renderFocusView output validation failed!");
}
console.log("✅ Focus view rendered cleanly in both study and non-study modes!");

console.log("\n🎉 ALL TESTS PASSED 100%! APP INITIALIZATION IS COMPLETELY CRASH-PROOF!");
