// Cloudflare Pages Function: /api/ai/chat
// اتصال ایمن به مدل‌های رسمی و تأییدشده Cloudflare Workers AI (Llama 3.1 & Llama 3)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin, *',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
};

const SYSTEM_PROMPT = `شما یک دستیار هوشمند، مشاور تحصیلی و همه‌منظوره فارسی هستید. به تمام سوالات علمی، درسی، پزشکی، برنامه‌نویسی و عمومی دقیق، ساختاریافته و با لحنی دوستانه پاسخ دهید. اگر از شما خواسته شد متنی را به فلش‌کارت تبدیل کنید یا پیام حاوی واژه فلش‌کارت بود، خروجی را منحصراً با تگ‌های [FLASHCARD] و فرمت Q: و A: بنویسید.`;

// Official Cloudflare Workers AI Model Hierarchy
const AI_MODELS = [
  '@cf/meta/llama-3.1-8b-instruct',
  '@cf/meta/llama-3.1-8b-instruct-fast',
  '@cf/meta/llama-3-8b-instruct'
];

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json().catch(() => ({}));
    const message = String(body.message || body.prompt || '').trim();
    const history = Array.isArray(body.history) ? body.history : [];
    const userContext = body.context || {};

    if (!message) {
      return jsonResponse({
        success: true,
        reply: 'لطفاً سؤال یا متن مورد نظر خود را بنویسید.'
      }, 200);
    }

    let extraContext = '';
    if (userContext.name) {
      extraContext = ` (کاربر: ${userContext.name})`;
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT + extraContext },
      ...history.slice(-6).map(h => ({
        role: (h.role === 'assistant' || h.role === 'bot') ? 'assistant' : 'user',
        content: String(h.content || '')
      })),
      { role: 'user', content: message }
    ];

    if (!env || !env.AI) {
      return jsonResponse({
        success: true,
        reply: '⚠️ بایندینگ هوش مصنوعی کلودفلر (env.AI) در دسترس نیست. لطفاً مطمئن شوید [ai] در wrangler.toml تعریف و دیپلوی شده باشد.',
        model: 'system-notice'
      }, 200);
    }

    let responseText = '';
    let modelUsed = '';
    let lastError = null;

    // Multi-tier Fallback Execution across official models
    for (const modelName of AI_MODELS) {
      try {
        const result = await env.AI.run(modelName, { messages });
        responseText = result?.response || result?.choices?.[0]?.message?.content || result?.result || '';
        if (responseText && responseText.trim()) {
          modelUsed = modelName;
          break;
        }
      } catch (err) {
        console.warn(`Model ${modelName} failed, trying next fallback:`, err);
        lastError = err;
      }
    }

    if (responseText && responseText.trim()) {
      return jsonResponse({
        success: true,
        reply: responseText.trim(),
        model: modelUsed
      }, 200);
    }

    return jsonResponse({
      success: true,
      reply: `⚠️ خطای اجرای مدل‌های هوش مصنوعی: ${lastError ? (lastError.message || String(lastError)) : 'پاسخی دریافت نشد'}`,
      model: 'error'
    }, 200);

  } catch (err) {
    console.error('AI chat endpoint error:', err);
    return jsonResponse({
      success: true,
      reply: `⚠️ خطای ارتباطی سرور: ${err.message || String(err)}`,
      model: 'server-error'
    }, 200);
  }
}

export async function onRequestGet() {
  return jsonResponse({
    status: 'ok',
    service: 'PlanEx AI Assistant (Meta Llama Series)',
    ready: true
  });
}
