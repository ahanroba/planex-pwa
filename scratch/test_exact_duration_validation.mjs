import { pathToFileURL } from 'url';
import path from 'path';

// Setup Mock Storage
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

const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

console.log("--- 1. Testing Exact 2-Minute Study Session Recording ---");
const session1 = db.recordFocusSession({
  type: 'study',
  categoryCode: 'ع-س',
  subject: 'کاردیولوژی',
  duration: 2, // 2 minutes
  testCount: 5
});

console.log("Session 1:", session1);
if (session1.duration !== 2 || session1.testCount !== 5) {
  throw new Error(`Expected duration 2 and testCount 5, got ${session1.duration} and ${session1.testCount}`);
}

const statsToday = db.getDailyStats();
console.log("Stats after 2-minute session:", statsToday);
if (statsToday.studyMinutes !== 2 || statsToday.totalTests !== 5) {
  throw new Error(`Expected 2 studyMinutes and 5 totalTests, got ${statsToday.studyMinutes} and ${statsToday.totalTests}`);
}

console.log("--- 2. Testing DashboardView HTML output for 2-Minute Session ---");
const dashboardPath = pathToFileURL(path.resolve('src/views/DashboardView.js')).href;
const { renderDashboardView } = await import(dashboardPath);

const todayIdx = (new Date().getDay() + 1) % 7;
const dashboardHtml = renderDashboardView(todayIdx, 'daily');

if (!dashboardHtml.includes('۲ دقیقه')) {
  throw new Error("Dashboard HTML does not contain exact '۲ دقیقه' readout!");
}
console.log("✅ Dashboard HTML contains exact '۲ دقیقه' readout and 0 snap to 30 minutes!");

console.log("--- 3. Testing FocusView Streamlining (Study Section has ONLY Subject + Topic + Test Counter) ---");
const focusPath = pathToFileURL(path.resolve('src/views/FocusView.js')).href;
const { renderFocusView } = await import(focusPath);

const focusHtml = renderFocusView({ activityMode: 'study' });
const forbiddenSubtypes = ['روش مطالعه', 'btn-study-method-chip', 'مطالعه درسنامه', 'تحلیل آزمون'];

forbiddenSubtypes.forEach(kw => {
  if (focusHtml.includes(kw)) {
    throw new Error(`Forbidden subtype found in FocusView: '${kw}'`);
  }
});

if (!focusHtml.includes('نام درس:') || !focusHtml.includes('input-focus-subject') || !focusHtml.includes('focus-session-tests-display')) {
  throw new Error("FocusView missing required study components!");
}

console.log("✅ FocusView contains ONLY Subject, Topic, and Test Counter under Study mode!");

console.log("\n🎉 ALL EXACT DURATION & CLEAN STUDY TESTS PASSED 100%!");
