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

  async sendMessage(userMessage, context = {}) {
    if (!userMessage || !userMessage.trim() || this.isGenerating) return null;

    let githubToken = localStorage.getItem('planex_github_token');
    if (!githubToken) {
      githubToken = window.prompt('لطفاً توکن گیتهاب خود را برای فعالسازی هوش مصنوعی وارد کنید (فقط یکبار):');
      if (githubToken && githubToken.trim()) {
        githubToken = githubToken.trim();
        localStorage.setItem('planex_github_token', githubToken);
      } else {
        return {
          id: 'bot-' + Date.now(),
          role: 'assistant',
          timestamp: Date.now(),
          content: 'برای استفاده از هوش مصنوعی، توکن گیتهاب نیاز است.',
          model: 'error'
        };
      }
    }

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
      .slice(-15)
      .map(m => ({ role: m.role, content: m.content }));

    let botReply = '';
    let usedModel = 'gpt-4o';

    try {
      let res = await fetch(`https://models.inference.ai.azure.com/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${githubToken}`
        },
        body: JSON.stringify({
          messages: [
            { 
              role: 'system', 
              content: 'شما دستیار هوشمند پلنکس (PlanEx AI) هستید. به سوالات کاربران با دقت، دوستانه و کامل پاسخ دهید. از مارک‌داون برای قالب‌بندی استفاده کنید.' 
            },
            ...cleanHistory
          ],
          model: 'gpt-4o'
        })
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error((data && data.error && data.error.message) ? data.error.message : `HTTP Status: ${res.status}`);
      }

      if (data && data.choices && data.choices.length > 0 && data.choices[0].message) {
        botReply = data.choices[0].message.content;
        usedModel = data.model || usedModel;
      } else {
        const errDetail = data ? JSON.stringify(data) : `کد وضعیت HTTP: ${res.status}`;
        botReply = `⚠️ **خطا در دریافت پاسخ از هوش مصنوعی:**\n\n${errDetail}\n\n💡 لطفاً اتصال اینترنت خود را بررسی نمایید.`;
      }
    } catch (netErr) {
      console.error('AI fetch error:', netErr);
      botReply = `⚠️ **خطا در اتصال به سرور هوش مصنوعی:**\n\n${netErr.message || 'عدم دسترسی به سرور یا اینترنت'}\n\n💡 لطفاً اتصال اینترنت خود را بررسی نمایید.`;
      
      if (netErr.message.includes('401')) {
        localStorage.removeItem('planex_github_token');
        botReply += '\n\n(توکن شما نامعتبر بود و حذف شد. لطفاً دوباره پیام بدهید تا توکن صحیح را وارد نمایید.)';
      }
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
