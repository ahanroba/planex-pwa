import { pathToFileURL } from 'url';
import path from 'path';

// Mock localStorage
const storage = {};
global.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

console.log("--- 1. Testing Exact 1-Minute Study Session Recording ---");
const session1 = db.recordFocusSession({
  type: 'study',
  categoryCode: 'ع-س',
  subject: 'کاردیولوژی',
  duration: 1, // EXACT 1 MINUTE
  testCount: 5,
  note: 'تست‌های اولیه'
});

console.log("Session 1 logged:", session1);
if (session1.duration !== 1 || session1.testCount !== 5 || !session1.isStudy) {
  throw new Error(`Expected duration 1 and tests 5, got duration=${session1.duration}, tests=${session1.testCount}`);
}

const statsAfter1 = db.getDailyStats();
console.log("Daily stats after 1-min session:", statsAfter1);
if (statsAfter1.studyMinutes !== 1 || statsAfter1.totalTests !== 5) {
  throw new Error(`Daily stats mismatch: expected 1 min and 5 tests, got ${statsAfter1.studyMinutes} min and ${statsAfter1.totalTests} tests`);
}

console.log("--- 2. Testing Exact 2-Minute Study Session Recording ---");
const session2 = db.recordFocusSession({
  type: 'study',
  categoryCode: 'ع-س',
  subject: 'جراحی تروما',
  duration: 2, // EXACT 2 MINUTES
  testCount: 10,
  note: 'تست‌های تروما'
});

console.log("Session 2 logged:", session2);
if (session2.duration !== 2 || session2.testCount !== 10) {
  throw new Error("Session 2 validation failed!");
}

const statsAfter2 = db.getDailyStats();
console.log("Daily stats after 2-min session:", statsAfter2);
if (statsAfter2.studyMinutes !== 3 || statsAfter2.totalTests !== 15) {
  throw new Error(`Cumulative daily stats mismatch: expected 3 min and 15 tests, got ${statsAfter2.studyMinutes} min and ${statsAfter2.totalTests} tests`);
}

console.log("--- 3. Testing Non-Study Session Recording (No Study Time/Tests Added) ---");
const session3 = db.recordFocusSession({
  type: 'non-study',
  categoryCode: 'non_sports',
  subject: 'ورزش و پیاده‌روی',
  duration: 30,
  testCount: 0
});

const statsAfter3 = db.getDailyStats();
console.log("Daily stats after non-study session:", statsAfter3);
if (statsAfter3.studyMinutes !== 3 || statsAfter3.totalTests !== 15 || statsAfter3.nonStudyMinutes !== 30) {
  throw new Error("Non-study isolation failed!");
}

console.log("✅ ALL EXACT DURATION & CLEAN STUDY TESTS PASSED 100%!");
