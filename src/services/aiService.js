// PlanEx AI Universal Assistant Service (سرویس ارتباط با هوش مصنوعی پلنکس)
import { API_BASE_URL } from '../config.js';

const STORAGE_KEY = 'planex_ai_chat_history';

class AiService {
  constructor() {
    this.history = this.loadHistory();
    this.isGenerating = false;
  }

  loadHistory() {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load chat history:', e);
    }
    return this.getDefaultHistory();
  }

  getDefaultHistory() {
    return [
      {
        id: 'welcome-msg',
        role: 'assistant',
        timestamp: Date.now(),
        content: `سلام! من **دستیار هوشمند پلنکس | PlanEx AI** هستم 🤖✨

می‌تونی هر سؤالی در زمینه‌های **علمی، درسی، پزشکی، برنامه‌نویسی، عمومی یا مشاوره تحصیلی و مدیریت زمان** داری بپرسی، یا متن درس‌هات رو بفرستی تا برات **فلش‌کارت‌های تستی جعبه لایتنر** بسازم!

یک گزینه رو انتخاب کن یا سؤالت رو مستقیم بنویس 👇`
      }
    ];
  }

  saveHistory() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.history));
      }
    } catch (e) {
      console.warn('Failed to save chat history:', e);
    }
  }

  clearHistory() {
    this.history = this.getDefaultHistory();
    this.saveHistory();
  }

  getHistory() {
    return this.history;
  }

  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    };

    let token = null;
    try {
      if (typeof localStorage !== 'undefined') {
        token = localStorage.getItem('planex_jwt_token') ||
                localStorage.getItem('planex_token') ||
                localStorage.getItem('token');

        if (token === 'null' || token === 'undefined') token = null;

        if (!token) {
          const authUser = JSON.parse(localStorage.getItem('planex_auth_user') || '{}');
          if (authUser && authUser.token) token = authUser.token;
        }

        if (!token) {
          const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
          if (userAcc && userAcc.token) token = userAcc.token;
        }
      }
    } catch (e) {
      console.warn('Failed to retrieve auth token:', e);
    }

    // Telegram WebApp initData
    let tgInitData = null;
    try {
      if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
        tgInitData = window.Telegram.WebApp.initData || null;
      }
    } catch (e) {}

    const effectiveToken = token || tgInitData;
    if (effectiveToken) {
      headers['Authorization'] = `Bearer ${effectiveToken}`;
    }

    if (tgInitData) {
      headers['X-Telegram-Init-Data'] = tgInitData;
    }

    return headers;
  }

  async sendMessage(userMessage, context = {}) {
    if (!userMessage || !userMessage.trim() || this.isGenerating) return null;

    const trimmedMsg = userMessage.trim();
    const userMsgObj = {
      id: 'msg-' + Date.now(),
      role: 'user',
      timestamp: Date.now(),
      content: trimmedMsg
    };

    this.history.push(userMsgObj);
    this.saveHistory();
    this.isGenerating = true;

    const cleanHistory = this.history
      .filter(m => m.id !== 'welcome-msg')
      .slice(-10)
      .map(m => ({ role: m.role, content: m.content }));

    let botReply = '';
    let usedModel = 'planex-ai';

    const authHeaders = this.getAuthHeaders();

    try {
      let res = await fetch(`https://ai-bot.planexapp.ir`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          message: trimmedMsg,
          history: cleanHistory,
          context
        })
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error((data && data.error) ? data.error : `HTTP Status: ${res.status}`);
      }

      if (data && data.reply) {
        botReply = data.reply;
        usedModel = data.model || usedModel;
      } else if (data && data.response) {
        botReply = data.response;
        usedModel = data.model || usedModel;
      } else {
        const errDetail = (data && (data.error || data.message)) || `کد وضعیت HTTP: ${res ? res.status : 'نامشخص'}`;
        botReply = `⚠️ **خطا در دریافت پاسخ از هوش مصنوعی:**\n\n${errDetail}\n\n💡 لطفاً اتصال اینترنت خود را بررسی نمایید.`;
      }
    } catch (netErr) {
      console.error('AI fetch error:', netErr);
      botReply = `⚠️ **خطا در اتصال به سرور هوش مصنوعی:**\n\n${netErr.message || 'عدم دسترسی به سرور یا اینترنت'}\n\n💡 لطفاً اتصال اینترنت خود را بررسی نمایید.`;
    }

    const botMsgObj = {
      id: 'bot-' + Date.now(),
      role: 'assistant',
      timestamp: Date.now(),
      content: botReply,
      model: usedModel
    };

    this.history.push(botMsgObj);
    this.saveHistory();
    this.isGenerating = false;

    return botMsgObj;
  }
}

export const aiService = new AiService();
