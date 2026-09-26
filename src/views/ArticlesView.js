// src/views/ArticlesView.js
// Unified View Component for Articles, Guides, and Question Bank

import { renderArticlesListView } from './ArticlesListView.js';
import { renderQuestionBankView, bindQuestionBankEvents } from './QuestionBankView.js';
import { renderSingleArticleView } from './SingleArticleView.js';

/**
 * Renders the active sub-view for articles:
 * - If selectedArticleId is 'questions-1404', renders the full interactive Question Bank.
 * - If selectedArticleId is any other article id, renders the Single Article reader.
 * - Otherwise, renders the Articles and Guides grid / hub.
 *
 * @param {Object} options Configuration options and accordions state.
 * @returns {string} HTML string representing the view.
 */
export function renderArticlesView(options = {}) {
  const selectedArticleId = options.selectedArticleId !== undefined
    ? options.selectedArticleId
    : (window.appState ? window.appState.selectedArticleId : null);

  if (selectedArticleId === 'questions-1404') {
    return renderQuestionBankView();
  } else if (selectedArticleId) {
    return renderSingleArticleView(selectedArticleId);
  } else {
    return renderArticlesListView(options);
  }
}

/**
 * Mount / initialization helper for the Articles view.
 */
export function initArticlesView() {
  if (typeof window.renderApp === 'function') {
    window.renderApp();
  }
}

// Re-export underlying view helpers for direct consumers
export {
  renderArticlesListView,
  renderQuestionBankView,
  bindQuestionBankEvents,
  renderSingleArticleView
};

// Global attachments for inline handlers and legacy callers
if (typeof window !== 'undefined') {
  window.renderArticlesView = renderArticlesView;
  window.initArticlesView = initArticlesView;
}
