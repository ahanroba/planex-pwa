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

console.log("--- 1. Testing Unified Save Session ---");
const session = db.recordFocusSession({
  type: 'study',
  categoryCode: 'ع-س',
  subject: 'فارماکولوژی قلب و عروق',
  duration: 45,
  testCount: 30,
  studyMethod: 'test_practice',
  note: 'تست‌های دیژیتال و بتا بلوکرها'
});

console.log("Recorded session:", session);
if (session.duration !== 45 || session.testCount !== 30 || !session.isStudy) {
  throw new Error("Unified session validation failed!");
}

console.log("--- 2. Testing Dynamic Non-Study Addition ---");
const newCat = db.addNonStudyCategory("تمرین مدیتیشن و تنفس", "🧘", "#ec4899");
console.log("Added category:", newCat);

const nonStudySession = db.recordFocusSession({
  type: 'non-study',
  categoryCode: newCat.code,
  subject: 'تنفس عمیق ۱۰ دقیقه‌ای',
  duration: 15,
  testCount: 0
});
console.log("Recorded non-study session:", nonStudySession);
if (nonStudySession.duration !== 15 || nonStudySession.testCount !== 0 || nonStudySession.isStudy) {
  throw new Error("Non-study session validation failed!");
}

console.log("✅ ALL UNIFIED ACTION & NON-STUDY TESTS PASSED 100%!");
