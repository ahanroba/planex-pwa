// Activity & Palette Service for PlanEx Web
import { ACTIVITY_PALETTE_24, DEFAULT_CATEGORIES, DEFAULT_SUBJECT_COLORS, getNextActivityColor } from '../constants.js';

export const activityService = {
  getPalette() {
    return ACTIVITY_PALETTE_24;
  },

  getDefaultCategories() {
    return DEFAULT_CATEGORIES;
  },

  getDefaultSubjectColors() {
    return DEFAULT_SUBJECT_COLORS;
  },

  getNextColor(existingCategories = []) {
    return getNextActivityColor(existingCategories);
  },

  resolveCategoryColor(category, fallbackIndex = 0) {
    if (category && category.color) {
      return category.color;
    }
    return ACTIVITY_PALETTE_24[fallbackIndex % ACTIVITY_PALETTE_24.length];
  },

  getCategoryMap(categories = []) {
    const map = {};
    categories.forEach((c, idx) => {
      map[c.code] = {
        ...c,
        color: this.resolveCategoryColor(c, idx)
      };
    });
    return map;
  }
};
