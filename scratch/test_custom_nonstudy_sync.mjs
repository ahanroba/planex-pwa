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

console.log("--- 1. Testing Default Non-Study Categories ---");
const defaultCats = db.getNonStudyCategories();
console.log(`Found ${defaultCats.length} default non-study categories.`);
if (defaultCats.length < 7) {
  throw new Error("Missing default non-study categories!");
}

console.log("--- 2. Testing Adding Custom Non-Study Category ---");
const customCat = db.addNonStudyCategory("طراحی رابط کاربری و برنامه نویسی", "💻", "#06b6d4");
console.log("Added custom category:", customCat);

const updatedCats = db.getNonStudyCategories();
console.log(`Found ${updatedCats.length} categories after addition.`);
const found = updatedCats.find(c => c.code === customCat.code);
if (!found || found.title !== "طراحی رابط کاربری و برنامه نویسی") {
  throw new Error("Custom non-study category was not persisted properly!");
}

console.log("--- 3. Testing Non-Study Session Recording with Custom Category ---");
const session = db.recordFocusSession({
  type: 'non-study',
  categoryCode: customCat.code,
  subject: 'طراحی ویو فوکوس مود',
  duration: 40,
  testCount: 0,
  note: 'توسعه رابط کاربری بدون خطا'
});
console.log("Recorded session:", session);
if (session.type !== 'non-study' || session.categoryTitle !== "طراحی رابط کاربری و برنامه نویسی" || session.testCount !== 0) {
  throw new Error("Session with custom category failed to record properly!");
}

console.log("✅ ALL CUSTOM NON-STUDY & REFINEMENT TESTS PASSED 100%!");
