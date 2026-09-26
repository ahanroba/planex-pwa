// Central Constants & 24-Color High-Contrast Activity Palette for PlanEx

export const ACTIVITY_PALETTE_24 = [
  '#EF4444', // ۱. قرمز تند
  '#F97316', // ۲. نارنجی زنده
  '#F59E0B', // ۳. کهربایی / خردلی
  '#EAB308', // ۴. زرد طلایی
  '#84CC16', // ۵. سبز لیمویی
  '#10B981', // ۶. سبز زمردی
  '#14B8A6', // ۷. سبزآبی (Teal)
  '#06B6D4', // ۸. فیروزه‌ای (Cyan)
  '#0EA5E9', // ۹. آبی آسمانی
  '#3B82F6', // ۱۰. آبی سلطنتی
  '#6366F1', // ۱۱. نیلی (Indigo)
  '#8B5CF6', // ۱۲. بنفش ارغوانی
  '#D946EF', // ۱۳. یاسی تند (Fuchsia)
  '#EC4899', // ۱۴. صورتی تند (Pink)
  '#F43F5E', // ۱۵. سرخابی / رز
  '#831843', // ۱۶. زرشکی / شرابی
  '#BE185D', // ۱۷. تمشکی / بری
  '#6D28D9', // ۱۸. بنفش بادمجانی تیره
  '#1E40AF', // ۱۹. سرمه‌ای تیره (Navy)
  '#047857', // ۲۰. یشمی تیره (Deep Forest)
  '#4D7C0F', // ۲۱. زیتونی تیره
  '#B45309', // ۲۲. قهوه‌ای / زنگاری
  '#C2410C', // ۲۳. آجری / سفالی
  '#475569'  // ۲۴. دودی فولادی (Slate)
];

export const DEFAULT_CATEGORIES = [
  { code: "cat_dakheli", title: "داخلی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#0EA5E9", icon: "🫀" },
  { code: "cat_jarahi", title: "جراحی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#EF4444", icon: "🔪" },
  { code: "cat_atfal", title: "اطفال", group: "علمی", isStudy: true, recommendedTarget: "", color: "#F59E0B", icon: "👶" },
  { code: "cat_zanan", title: "زنان و زایمان", group: "علمی", isStudy: true, recommendedTarget: "", color: "#EC4899", icon: "🌸" },
  { code: "cat_ravan", title: "روانپزشکی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#8B5CF6", icon: "🧠" },
  { code: "cat_ofooni", title: "عفونی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#10B981", icon: "🦠" },
  { code: "cat_neuro", title: "نورولوژی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#06B6D4", icon: "⚡" },
  { code: "cat_minor", title: "مینورها", group: "علمی", isStudy: true, recommendedTarget: "", color: "#6366F1", icon: "🩺" },
  { code: "cat_zist", title: "زیست‌شناسی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#14B8A6", icon: "🧬" },
  { code: "cat_shimi", title: "شیمی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#F97316", icon: "🧪" },
  { code: "cat_fizik", title: "فیزیک", group: "علمی", isStudy: true, recommendedTarget: "", color: "#3B82F6", icon: "⚛️" },
  { code: "cat_riazi", title: "ریاضی", group: "علمی", isStudy: true, recommendedTarget: "", color: "#A855F7", icon: "📐" }
];

export const DEFAULT_NON_STUDY_CATEGORIES = [
  { code: "non_sports", title: "ورزش و تندرستی", icon: "🏃", color: "#f59e0b", group: "غیردرسی", isStudy: false },
  { code: "non_rest", title: "استراحت و تفریح", icon: "☕", color: "#8b5cf6", group: "غیردرسی", isStudy: false },
  { code: "non_sleep", title: "خواب و ریکاوری", icon: "😴", color: "#6366f1", group: "غیردرسی", isStudy: false },
  { code: "non_meal", title: "میان‌وعده و تغذیه", icon: "🍎", color: "#10b981", group: "غیردرسی", isStudy: false },
  { code: "non_personal", title: "کارهای شخصی", icon: "📱", color: "#ec4899", group: "غیردرسی", isStudy: false }
];

export const DEFAULT_SUBJECT_COLORS = {
  "داخلی": "#0EA5E9",
  "جراحی": "#EF4444",
  "اطفال": "#F59E0B",
  "زنان و زایمان": "#EC4899",
  "روانپزشکی": "#8B5CF6",
  "عفونی": "#10B981",
  "نورولوژی": "#06B6D4",
  "مینورها": "#6366F1",
  "زیست‌شناسی": "#14B8A6",
  "شیمی": "#F97316",
  "فیزیک": "#3B82F6",
  "ریاضی": "#A855F7"
};

/**
 * Global time formatter for study and activity durations.
 * Converts totalMinutes into human-friendly Persian string:
 * - 0 min -> "۰ دقیقه"
 * - 1..59 min -> "X دقیقه" (e.g. "۱ دقیقه", "۴۵ دقیقه")
 * - 60, 120 min -> "X ساعت" (e.g. "۱ ساعت", "۲ ساعت")
 * - 61.. -> "X ساعت و Y دقیقه" (e.g. "۱ ساعت و ۵ دقیقه", "۴ ساعت و ۷ دقیقه")
 * @param {number} totalMinutes
 * @returns {string}
 */
export function formatStudyTime(totalMinutes) {
  const mins = Math.max(0, Math.round(Number(totalMinutes) || 0));
  const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  if (mins === 0) return '۰ دقیقه';
  if (mins < 60) return `${toPersianDigits(mins)} دقیقه`;

  const h = Math.floor(mins / 60);
  const remainingM = mins % 60;

  if (remainingM === 0) {
    return `${toPersianDigits(h)} ساعت`;
  }
  return `${toPersianDigits(h)} ساعت و ${toPersianDigits(remainingM)} دقیقه`;
}

/**
 * Returns whether an activity category is classified as study/scientific.
 * @param {Object} cat Category object
 * @returns {boolean}
 */
export function isStudyCategory(cat) {
  if (!cat) return false;
  if (typeof cat.isStudy === 'boolean') {
    return cat.isStudy;
  }
  // Fallback for legacy data
  return cat.group === 'علمی' || ['ع-س', 'ع-ک', 'ع-م', 'ع-غ'].includes(cat.code) || (typeof cat.code === 'string' && (cat.code.startsWith('cat_') || cat.code.startsWith('cust_')) && cat.group !== 'غیرعلمی');
}

/**
 * Returns the next available distinct color from the 24-color palette that is not currently used.
 * If all 24 are in use, cycles through them.
 * @param {Array<{color: string}>} existingCategories
 * @returns {string} Hex color string
 */
export function getNextActivityColor(existingCategories = []) {
  const usedColors = new Set(
    (existingCategories || []).map(c => (c.color || '').toUpperCase())
  );

  for (const color of ACTIVITY_PALETTE_24) {
    if (!usedColors.has(color.toUpperCase())) {
      return color;
    }
  }

  // If all 24 are used, cycle based on count
  const index = (existingCategories ? existingCategories.length : 0) % ACTIVITY_PALETTE_24.length;
  return ACTIVITY_PALETTE_24[index];
}

/**
 * ماتریس آیزنهاور — چهار ربع اولویت‌بندی وظایف
 * ترتیب آرایه = ترتیب نمایش در گرید ۲×۲ (RTL: خانه اول بالا-راست)
 */
export const EISENHOWER_QUADRANTS = [
  {
    id: 'Q1',
    emoji: '🔴',
    title: 'فوری و مهم',
    subtitle: 'ضروری / بحرانی — همین حالا انجام بده',
    color: '#ef4444',
    softBg: 'rgba(239, 68, 68, 0.10)',
    borderColor: 'rgba(239, 68, 68, 0.38)'
  },
  {
    id: 'Q2',
    emoji: '🔵',
    title: 'مهم و غیرفوری',
    subtitle: 'برنامه‌ریزی / رشد — زمان‌بندی کن',
    color: '#3b82f6',
    softBg: 'rgba(59, 130, 246, 0.10)',
    borderColor: 'rgba(59, 130, 246, 0.38)'
  },
  {
    id: 'Q3',
    emoji: '🟡',
    title: 'فوری و غیرمهم',
    subtitle: 'پیگیری سریع — واگذار یا سریع تمام کن',
    color: '#f59e0b',
    softBg: 'rgba(245, 158, 11, 0.10)',
    borderColor: 'rgba(245, 158, 11, 0.38)'
  },
  {
    id: 'Q4',
    emoji: '⚪',
    title: 'غیرفوری و غیرمهم',
    subtitle: 'کم‌اهمیت / تفریحی — حذف یا محدود کن',
    color: '#94a3b8',
    softBg: 'rgba(148, 163, 184, 0.10)',
    borderColor: 'rgba(148, 163, 184, 0.32)'
  }
];

export const DEFAULT_PRIORITY = 'Q2';

export function getQuadrant(priority) {
  return EISENHOWER_QUADRANTS.find(q => q.id === priority) || EISENHOWER_QUADRANTS[1];
}

export function isValidPriority(priority) {
  return EISENHOWER_QUADRANTS.some(q => q.id === priority);
}
