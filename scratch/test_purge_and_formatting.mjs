import { pathToFileURL } from 'url';
import path from 'path';

// Setup Mock Storage with legacy categories
const storage = {
  planex_categories: JSON.stringify([
    { code: "ب", title: "تمرکز و بازآفرینی", group: "فکری و روحی" },
    { code: "ع-ک", title: "کلاس و آموزش", group: "علمی" },
    { code: "ع-م", title: "تمرین و کارگاه گروهی", group: "علمی" },
    { code: "ع-س", title: "مطالعه و پژوهش", group: "علمی" }
  ])
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

console.log("--- 1. Testing formatStudyTime helper ---");
const constantsPath = pathToFileURL(path.resolve('src/constants.js')).href;
const { formatStudyTime } = await import(constantsPath);

const cases = [
  { in: 0, out: '۰ دقیقه' },
  { in: 1, out: '۱ دقیقه' },
  { in: 45, out: '۴۵ دقیقه' },
  { in: 60, out: '۱ ساعت' },
  { in: 120, out: '۲ ساعت' },
  { in: 125, out: '۲ ساعت و ۵ دقیقه' },
  { in: 247, out: '۴ ساعت و ۷ دقیقه' }
];

cases.forEach(c => {
  const res = formatStudyTime(c.in);
  console.log(`formatStudyTime(${c.in}) => "${res}" (Expected: "${c.out}")`);
  if (res !== c.out) {
    throw new Error(`Mismatch for ${c.in}: expected "${c.out}", got "${res}"`);
  }
});
console.log("✅ formatStudyTime passed all test cases!");

console.log("\n--- 2. Testing Legacy Category Purge & Real Subject Migration ---");
const dbPath = pathToFileURL(path.resolve('src/db.js')).href;
const { db } = await import(dbPath);

const cats = db.getCategories();
console.log("Active categories after migration:", cats.map(c => c.title));

const legacyTitles = ['تمرکز و بازآفرینی', 'کلاس و آموزش', 'تمرین و کارگاه گروهی', 'مطالعه و پژوهش'];
legacyTitles.forEach(t => {
  if (cats.some(c => c.title === t)) {
    throw new Error(`Legacy category "${t}" was not purged!`);
  }
});

const expectedRealSubjects = ['داخلی', 'جراحی', 'اطفال', 'زنان و زایمان', 'روانپزشکی', 'عفونی', 'نورولوژی'];
expectedRealSubjects.forEach(s => {
  if (!cats.some(c => c.title === s)) {
    throw new Error(`Real subject "${s}" missing from categories!`);
  }
});
console.log("✅ All legacy categories purged and real medical/school subjects initialized!");

console.log("\n--- 3. Testing Category Deletion Feature (✕) ---");
const initialCount = db.getCategories().length;
const catToDelete = db.getCategories()[0];
console.log(`Deleting category "${catToDelete.title}" (code: ${catToDelete.code})...`);
db.deleteCategory(catToDelete.code);

const updatedCats = db.getCategories();
if (updatedCats.some(c => c.code === catToDelete.code)) {
  throw new Error(`Category ${catToDelete.code} was not deleted!`);
}
if (updatedCats.length !== initialCount - 1) {
  throw new Error(`Expected count ${initialCount - 1}, got ${updatedCats.length}`);
}
console.log("✅ db.deleteCategory successfully deleted the subject!");

console.log("\n--- 4. Testing Non-Study Category Deletion ---");
const nonCats = db.getNonStudyCategories();
const nonCatToDelete = nonCats[0];
console.log(`Deleting non-study category "${nonCatToDelete.title}" (code: ${nonCatToDelete.code})...`);
db.deleteNonStudyCategory(nonCatToDelete.code);

const updatedNonCats = db.getNonStudyCategories();
if (updatedNonCats.some(c => c.code === nonCatToDelete.code)) {
  throw new Error(`Non-study category ${nonCatToDelete.code} was not deleted!`);
}
console.log("✅ db.deleteNonStudyCategory successfully deleted non-study item!");

console.log("\n--- 5. Testing Instant 1-Min Save & Dashboard Formatting ---");
const saved1Min = db.recordFocusSession({
  type: 'study',
  categoryCode: 'cat_jarahi',
  subject: 'جراحی عمومی',
  duration: 1, // 1 minute
  testCount: 2
});

console.log("Saved 1-min session:", saved1Min);
const stats = db.getDailyStats();
console.log("Daily Stats:", stats);
if (stats.studyMinutes !== 1 || stats.totalTests !== 2) {
  throw new Error(`Expected 1 min and 2 tests, got ${stats.studyMinutes} and ${stats.totalTests}`);
}

const dashboardPath = pathToFileURL(path.resolve('src/views/DashboardView.js')).href;
const { renderDashboardView } = await import(dashboardPath);

const todayIdx = (new Date().getDay() + 1) % 7;
const dashHtml = renderDashboardView(todayIdx, 'daily');

if (!dashHtml.includes('۱ دقیقه')) {
  throw new Error("Dashboard does not contain formatted '۱ دقیقه'!");
}
console.log("✅ Dashboard immediately renders formatted '۱ دقیقه'!");

console.log("\n--- 6. Testing FocusView UI Delete Buttons ---");
const focusPath = pathToFileURL(path.resolve('src/views/FocusView.js')).href;
const { renderFocusView } = await import(focusPath);

const focusStudyHtml = renderFocusView({ activityMode: 'study' });
const focusNonStudyHtml = renderFocusView({ activityMode: 'non-study' });

if (!focusStudyHtml.includes('btn-delete-study-cat') || !focusNonStudyHtml.includes('btn-delete-nonstudy-cat')) {
  throw new Error("FocusView does not contain category delete buttons!");
}
console.log("✅ FocusView contains delete (✕) buttons on both study and non-study chips!");

console.log("\n🎉 ALL PURGE, DELETE, FORMATTING & 1-MIN REACTIVE TESTS PASSED 100%!");
