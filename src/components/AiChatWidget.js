// Floating AI Chat Widget Component (ویجت چت‌بات هوش مصنوعی پلنکس | PlanEx AI)
import { aiService } from '../services/aiService.js';

export const QUICK_PROMPTS = [
  { id: 'p_flashcard', text: '⚡ تبدیل متن به فلش‌کارت', prompt: 'لطفاً متن زیر را به فلش‌کارت‌های استاندارد (سؤال و پاسخ کوتاه مفهومی) برای جعبه لایتنر تبدیل کن:\\n\\n[متن مورد نظرتان را اینجا جای‌گذاری کنید]' },
  { id: 'p_konkur', text: '📚 استراتژی جمع‌بندی آزمون', prompt: 'بهترین روش جمع‌بندی و افزایش تراز با متد بازیابی فعال (Active Recall) و آزمون‌های شبیه‌ساز چیست؟' },
  { id: 'p_pomodoro', text: '⏱️ تکنیک پومودورو و تمرکز', prompt: 'چطور با تکنیک پومودورو و چرخه‌های تمرکز، بازدهی مطالعه را به حداکثر برسانم؟' },
  { id: 'p_study_hours', text: '📈 افزایش پایدار ساعت مطالعه', prompt: 'چطور ساعت مطالعه روزانه‌ام را بدون افت کیفیت و نوسان، پله‌پله افزایش دهم؟' },
  { id: 'p_science', text: '🧠 پاسخ به سوالات علمی و درسی', prompt: 'می‌خواهم یک سؤال علمی/درسی/پزشکی بپرسم و تحلیل دقیق آن را بدانم.' }
];

export function renderAiChatWidget(isOpen = false, isTyping = false) {
  const history = aiService.getHistory();

  return `
    <!-- Floating Action Button (FAB) -->
    <div id="planex-ai-fab" class="ai-fab-container ${isOpen ? 'active' : ''}" title="هوش مصنوعی پلنکس | PlanEx AI">
      <button id="btn-toggle-ai-chat" class="ai-fab-button btn-ai-modal-trigger" data-action="open-ai-modal" aria-label="گفتگو با هوش مصنوعی پلنکس" onclick="if(typeof window.toggleAiModal === 'function'){ window.toggleAiModal(); } else if(typeof window.openAiModal === 'function'){ window.openAiModal(); }">
        <div class="ai-fab-glow"></div>
        <div class="ai-fab-icon-wrap">
          <span class="ai-fab-emoji">🤖</span>
          <span class="ai-fab-sparkle">✨</span>
        </div>
        <span class="ai-fab-label">هوش مصنوعی</span>
      </button>
    </div>

    <!-- Floating Chat Popup Window -->
    <div id="planex-ai-chat-window" class="ai-chat-window ${isOpen ? 'open' : ''}">
      <!-- Window Header (White-labeled) -->
      <div class="ai-chat-header">
        <div class="ai-chat-header-info">
          <div class="ai-avatar-badge">
            <span>🤖</span>
            <div class="ai-status-dot" title="آنلاین"></div>
          </div>
          <div class="ai-header-titles">
            <div class="ai-header-title">دستیار هوشمند پلنکس | PlanEx AI</div>
            <div class="ai-header-subtitle">
              <span class="ai-status-text">🟢 آنلاین و آماده پاسخگویی</span>
            </div>
          </div>
        </div>
        <div class="ai-chat-header-actions">
          <button id="btn-clear-ai-history" class="btn-ai-header-icon" title="پاکسازی گفتگو" onclick="if(confirm('آیا از پاک کردن تاریخچه گفتگوی هوش مصنوعی اطمینان دارید؟')){ if(typeof window.clearAiChatHistory === 'function'){ window.clearAiChatHistory(); } }">🗑️</button>
          <button id="btn-close-ai-chat" class="btn-ai-header-icon btn-ai-close" title="بستن پنجره" data-action="close-ai-modal" onclick="if(typeof window.closeAiModal === 'function'){ window.closeAiModal(); }">✕</button>
        </div>
      </div>

      <!-- Quick Prompts Pill Bar -->
      <div class="ai-quick-prompts-bar">
        ${QUICK_PROMPTS.map(p => `
          <button class="btn-quick-prompt ${p.id === 'p_flashcard' ? 'highlight' : ''}" data-prompt="${escapeHtml(p.prompt)}" onclick="if(typeof window.sendAiChatMessage === 'function'){ window.sendAiChatMessage(this.dataset.prompt); }">
            ${p.text}
          </button>
        `).join('')}
      </div>

      <!-- Messages Scroll Area -->
      <div id="ai-chat-messages-container" class="ai-chat-messages">
        ${history.map(msg => renderMessageBubble(msg)).join('')}
        
        <!-- Typing Indicator (Three Bouncing Dots) -->
        <div id="ai-typing-indicator" class="ai-message-row bot ${isTyping ? 'visible' : ''}">
          <div class="ai-msg-avatar">🤖</div>
          <div class="ai-msg-bubble typing-bubble">
            <div class="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="typing-text">دستیار در حال پردازش و نگارش پاسخ...</span>
          </div>
        </div>
      </div>

      <!-- Input Bar -->
      <div class="ai-chat-input-bar">
        <div class="ai-input-wrapper">
          <textarea
            id="input-ai-message"
            class="ai-chat-input"
            rows="1"
            placeholder="سؤال خود را بپرسید یا متنی برای تبدیل به فلش‌کارت بفرستید..."
            ${isTyping ? 'disabled' : ''}
          ></textarea>
          <button
            id="btn-trigger-flashcard-mode"
            class="btn-flashcard-trigger"
            title="تبدیل متن به فلش‌کارت"
            onclick="if(typeof window.triggerAiFlashcardMode === 'function'){ window.triggerAiFlashcardMode(); }"
          >
            ⚡ فلش‌کارت
          </button>
          <button
            id="btn-send-ai-message"
            class="btn-send-ai ${isTyping ? 'disabled' : ''}"
            ${isTyping ? 'disabled' : ''}
            title="ارسال پیام (Enter)"
            onclick="if(typeof window.sendAiChatMessage === 'function'){ window.sendAiChatMessage(); }"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
        <div class="ai-input-hint">
          <span>⚡ پاسخ جامع به تمام سوالات علمی، درسی و تولید فلش‌کارت‌های لایتنر</span>
        </div>
      </div>
    </div>
  `;
}

function renderMessageBubble(msg) {
  const isBot = msg.role === 'assistant' || msg.role === 'bot';
  const { renderedContent, extractedCards } = parseFlashcardsAndMarkdown(msg.content, isBot);
  const timeStr = msg.timestamp ? formatMessageTime(msg.timestamp) : '';

  return `
    <div class="ai-message-row ${isBot ? 'bot' : 'user'}" data-msg-id="${msg.id}">
      ${isBot ? '<div class="ai-msg-avatar">🤖</div>' : ''}
      <div class="ai-msg-bubble">
        <div class="ai-msg-content">${renderedContent}</div>
        
        ${isBot && extractedCards.length >= 1 ? `
          <div class="ai-flashcards-bulk-actions">
            <button class="btn-save-all-flashcards" data-cards="${escapeHtml(JSON.stringify(extractedCards))}">
              📥 افزودن مستقیم همه کارت‌ها به جعبه لایتنر (${extractedCards.length} کارت)
            </button>
          </div>
        ` : ''}

        <div class="ai-msg-meta">
          <span class="ai-msg-time">${timeStr}</span>
          ${isBot ? `<button class="btn-copy-ai-msg" data-text="${escapeHtml(msg.content)}" title="کپی متن پاسخ">📋</button>` : ''}
        </div>
      </div>
      ${!isBot ? '<div class="ai-msg-avatar user-avatar">👤</div>' : ''}
    </div>
  `;
}

function parseFlashcardsAndMarkdown(rawText, isBot) {
  if (!rawText) return { renderedContent: '', extractedCards: [] };

  const extractedCards = [];
  let processedText = String(rawText);

  if (isBot) {
    // 1. Check for [FLASHCARD] ... [/FLASHCARD] tags (case-insensitive)
    if (/\[FLASHCARD\]/i.test(processedText)) {
      const cardRegex = /\[FLASHCARD\]([\s\S]*?)(\[\/FLASHCARD\]|$)/gi;

      processedText = processedText.replace(cardRegex, (fullMatch, cardContent) => {
        if (!cardContent || !cardContent.trim()) return '';

        let q = '';
        let a = '';

        const lines = cardContent.split('\n');
        lines.forEach(l => {
          const trimmed = l.trim();
          if (/^(سؤال|سوال|پرسش|Q|Question)(?:\s*\d*)*\s*:/i.test(trimmed)) {
            q = trimmed.replace(/^(سؤال|سوال|پرسش|Q|Question)(?:\s*\d*)*\s*:\s*/i, '').trim();
          } else if (/^(پاسخ|جواب|نکته|A|Answer)(?:\s*\d*)*\s*:/i.test(trimmed)) {
            a = trimmed.replace(/^(پاسخ|جواب|نکته|A|Answer)(?:\s*\d*)*\s*:\s*/i, '').trim();
          }
        });

        if (!q || !a) {
          const parts = cardContent.split(/(?:پاسخ|جواب|نکته|A|Answer)(?:\s*\d*)*\s*:/i);
          if (parts.length >= 2) {
            q = parts[0].replace(/(?:سؤال|سوال|پرسش|Q|Question)(?:\s*\d*)*\s*:/i, '').trim();
            a = parts[1].trim();
          }
        }

        if (q && a) {
          extractedCards.push({ question: q, answer: a });
          return `
            <div class="ai-flashcard-interactive-card">
              <div class="ai-flashcard-top-bar">
                <span class="ai-flashcard-badge">🗂️ فلش‌کارت جعبه لایتنر</span>
                <button class="btn-save-single-flashcard" data-q="${escapeHtml(q)}" data-a="${escapeHtml(a)}">
                  📥 افزودن به لایتنر
                </button>
              </div>
              <div class="ai-flashcard-q">
                <span class="ai-fc-label">❓ سؤال:</span>
                <span class="ai-fc-text">${escapeHtml(q)}</span>
              </div>
              <div class="ai-flashcard-a">
                <span class="ai-fc-label">💡 پاسخ:</span>
                <span class="ai-fc-text">${escapeHtml(a)}</span>
              </div>
            </div>
          `;
        }
        return fullMatch;
      });
      // 2. Fallback: Parse question & answer blocks if user asked for flashcards
      const qaBlockRegex = /(?:(?:فلش‌کارت|کارت|شماره|Card)?\s*\d*[:\.\-]?\s*)?(?:سؤال|سوال|پرسش|Q|Question)\s*[:：]\s*([^\n]+)\n+(?:پاسخ|جواب|نکته|A|Answer)\s*[:：]\s*([^\n]+)/gi;
      let match;
      let hasMatches = false;
      const tempMatches = [];

      while ((match = qaBlockRegex.exec(rawText)) !== null) {
        if (match[1] && match[2]) {
          hasMatches = true;
          tempMatches.push({ full: match[0], q: match[1].trim(), a: match[2].trim() });
        }
      }

      if (hasMatches && tempMatches.length >= 1) {
        tempMatches.forEach(item => {
          extractedCards.push({ question: item.q, answer: item.a });
          const cardHtml = `
            <div class="ai-flashcard-interactive-card">
              <div class="ai-flashcard-top-bar">
                <span class="ai-flashcard-badge">🗂️ فلش‌کارت جعبه لایتنر</span>
                <button class="btn-save-single-flashcard" data-q="${escapeHtml(item.q)}" data-a="${escapeHtml(item.a)}">
                  📥 افزودن به لایتنر
                </button>
              </div>
              <div class="ai-flashcard-q">
                <span class="ai-fc-label">❓ سؤال:</span>
                <span class="ai-fc-text">${escapeHtml(item.q)}</span>
              </div>
              <div class="ai-flashcard-a">
                <span class="ai-fc-label">💡 پاسخ:</span>
                <span class="ai-fc-text">${escapeHtml(item.a)}</span>
              </div>
            </div>
          `;
          processedText = processedText.replace(item.full, cardHtml);
        });
      }
    }
  }

  const renderedContent = formatMarkdownSimple(processedText);
  return { renderedContent, extractedCards };
}

function formatMessageTime(timestamp) {
  try {
    const d = new Date(timestamp);
    return d.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
  } catch (e) {
    return '';
  }
}

function formatMarkdownSimple(text) {
  if (!text) return '';
  let str = String(text);

  str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  str = str.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  const lines = str.split('\n');
  const formattedLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('<div') || trimmed.endsWith('</div>')) {
      return line;
    }
    if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      return `<div class="ai-bullet-item"><span class="ai-bullet-dot">✦</span>${trimmed.substring(2)}</div>`;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      return `<div class="ai-numbered-item">${trimmed}</div>`;
    }
    return line ? `<p>${line}</p>` : '<div class="ai-msg-spacer"></div>';
  });

  return formattedLines.join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
