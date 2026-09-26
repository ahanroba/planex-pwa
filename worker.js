// PlanEx Worker API - Telegram Bot Webhook & Auth Backend for Cloudflare Workers / Pages
// Compatible with Cloudflare D1, KV, and Durable Objects

export default {
  // Cron Trigger for Leaderboards
  async scheduled(event, env, ctx) {
    if (!env.DB || !env.LEADERBOARD_KV) return;
    
    try {
      // Calculate Overall Leaderboard (Top 50 by total focus minutes)
      const overall = await env.DB.prepare(`
        SELECT id, username, full_name, avatar_url, major, education_level, total_focus_minutes, current_streak
        FROM users 
        WHERE onboarding_completed = 1 AND total_focus_minutes > 0
        ORDER BY total_focus_minutes DESC LIMIT 50
      `).all();

      // We could also do Weekly/Monthly here by joining sessions table, 
      // but for V1 we'll just cache the overall to save D1 reads.
      const leaderboardData = {
        updatedAt: Date.now(),
        overall: overall.results || []
      };

      await env.LEADERBOARD_KV.put('leaderboards_v1', JSON.stringify(leaderboardData));
      console.log('Leaderboard cron executed successfully.');
    } catch (err) {
      console.error('Cron error:', err);
    }
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin, *',
      'Access-Control-Max-Age': '86400',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    // Audio Proxy to bypass GitHub Releases CORS/Redirects and support Range
    if (url.pathname.startsWith('/api/audio-proxy')) {
      const targetUrl = url.searchParams.get('url');
      if (!targetUrl) return new Response('Missing URL', { status: 400 });

      const rangeHeader = request.headers.get('range');
      const fetchHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': '*/*'
      };
      if (rangeHeader) {
        fetchHeaders['Range'] = rangeHeader;
      }

      try {
        const upstreamResponse = await fetch(targetUrl, {
          headers: fetchHeaders,
          redirect: 'follow'
        });

        const responseHeaders = new Headers(upstreamResponse.headers);
        responseHeaders.set('Access-Control-Allow-Origin', '*');
        responseHeaders.set('Access-Control-Allow-Headers', '*');
        responseHeaders.set('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges');
        responseHeaders.set('Accept-Ranges', 'bytes');
        responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');

        return new Response(upstreamResponse.body, {
          status: upstreamResponse.status,
          headers: responseHeaders
        });
      } catch (err) {
        return new Response('Audio fetch error: ' + err.message, { status: 500 });
      }
    }

    // SSR / HTML Rewriter for Public Profiles (Open Graph / Viral Loop)
    if (url.pathname.startsWith('/u/') && request.method === 'GET') {
      const username = url.pathname.split('/')[2];
      
      // Fetch the actual index.html from the deployment
      // If running locally, you can adjust this or rely on Pages serving it.
      // Here we do a passthrough fetch to the base URL and rewrite it.
      const baseUrl = env.FRONTEND_URL || url.origin;
      const response = await fetch(baseUrl + '/index.html', request);
      
      if (!response.ok) return response; // Pass through errors

      let ogTitle = 'پلنکس | مسیر موفقیت شما';
      let ogDesc = 'به جامعه بزرگ پلنکس بپیوندید و با مدیریت زمان به اهداف خود برسید.';
      
      // Attempt to fetch user stats for dynamic OG tags
      if (env.DB && username) {
        try {
          const user = await env.DB.prepare('SELECT full_name, total_focus_minutes FROM users WHERE username = ?').bind(username).first();
          if (user) {
            const toPersianDigits = (n) => String(n).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
            const hrs = toPersianDigits(Math.floor(user.total_focus_minutes / 60));
            ogTitle = `پروفایل مطالعاتی ${user.full_name} در پلنکس`;
            ogDesc = `${user.full_name} تا الان ${hrs} ساعت مطالعه مفید در پلنکس ثبت کرده است! شما هم بپیوندید.`;
          }
        } catch (e) {
          console.error('Error fetching user for OG tags:', e);
        }
      }

      // Use HTMLRewriter to inject the dynamic tags
      return new HTMLRewriter()
        .on('title', { element(e) { e.setInnerContent(ogTitle); } })
        .on('head', {
          element(e) {
            e.append(`<meta property="og:title" content="${ogTitle}" />`, { html: true });
            e.append(`<meta property="og:description" content="${ogDesc}" />`, { html: true });
            e.append(`<meta property="og:image" content="https://planexapp.ir/og-social.png" />`, { html: true });
            e.append(`<meta name="twitter:card" content="summary_large_image" />`, { html: true });
          }
        })
        .transform(response);
    }

    try {
      // -------------------------------------------------------------
      // 1. PUBLIC ENDPOINTS
      // -------------------------------------------------------------

      // Healthcheck
      if (url.pathname === '/api/v1/health') {
        return jsonResponse({ status: 'ok', service: 'PlanEx Social API', version: '2.0.0' }, corsHeaders);
      }

      // Cloudflare Workers AI Assistant Endpoint (GET/POST /api/ai/chat or /api/v1/ai/chat)
      if ((url.pathname === '/api/ai/chat' || url.pathname === '/api/v1/ai/chat') && request.method === 'GET') {
        return jsonResponse({
          status: 'ok',
          service: 'PlanEx AI Assistant (Cloudflare Workers AI)',
          ready: true
        }, corsHeaders, 200);
      }

      if ((url.pathname === '/api/ai/chat' || url.pathname === '/api/v1/ai/chat') && request.method === 'POST') {
        try {
          const body = await request.json().catch(() => ({}));
          const message = body.message || body.prompt || '';
          const history = Array.isArray(body.history) ? body.history : [];
          const userContext = body.context || {};

          if (!message || !message.trim()) {
            return jsonResponse({ success: false, message: 'متن پیام نمی‌تواند خالی باشد.' }, corsHeaders, 400);
          }

          const systemPrompt = `شما یک دستیار هوشمند، مشاور تحصیلی و همه‌منظوره فارسی هستید. به تمام سوالات علمی، درسی، پزشکی، برنامه‌نویسی و عمومی دقیق، ساختاریافته و با لحنی دوستانه پاسخ دهید. اگر از شما خواسته شد متنی را به فلش‌کارت تبدیل کنید یا پیام حاوی واژه فلش‌کارت بود، خروجی را منحصراً با تگ‌های [FLASHCARD] و فرمت Q: و A: بنویسید.`;

          let contextAddition = '';
          if (userContext.name) {
            contextAddition = ` (کاربر: ${userContext.name})`;
          }

          const messages = [
            { role: 'system', content: systemPrompt + contextAddition },
            ...history.slice(-6).map(h => ({
              role: (h.role === 'assistant' || h.role === 'bot') ? 'assistant' : 'user',
              content: String(h.content || '')
            })),
            { role: 'user', content: String(message).trim() }
          ];

          if (!env || !env.AI) {
            return jsonResponse({
              success: true,
              reply: '⚠️ بایندینگ هوش مصنوعی کلودفلر (env.AI) در دسترس نیست.',
              model: 'system-notice'
            }, corsHeaders, 200);
          }

          const aiModels = [
            '@cf/meta/llama-3.1-8b-instruct',
            '@cf/meta/llama-3.1-8b-instruct-fast',
            '@cf/meta/llama-3-8b-instruct'
          ];
          let responseText = '';
          let modelUsed = '';
          let lastError = null;

          for (const modelName of aiModels) {
            try {
              const result = await env.AI.run(modelName, { messages });
              responseText = result?.response || result?.choices?.[0]?.message?.content || result?.result || '';
              if (responseText && responseText.trim()) {
                modelUsed = modelName;
                break;
              }
            } catch (err) {
              console.warn(`Model ${modelName} failed, trying fallback:`, err);
              lastError = err;
            }
          }

          if (responseText && responseText.trim()) {
            return jsonResponse({ success: true, reply: responseText.trim(), model: modelUsed }, corsHeaders, 200);
          }

          return jsonResponse({
            success: true,
            reply: `⚠️ خطای اجرای مدل‌های هوش مصنوعی: ${lastError ? (lastError.message || String(lastError)) : 'پاسخی دریافت نشد'}`,
            model: 'error'
          }, corsHeaders, 200);

        } catch (err) {
          return jsonResponse({ success: true, reply: '⚠️ خطای سرور: ' + err.message, model: 'server-error' }, corsHeaders, 200);
        }
      }

      // Live Active Pomodoro Users Tracking Endpoint (Event-driven)
      if ((url.pathname === '/api/pomodoro/active' || url.pathname === '/api/v1/pomodoro/active' || url.pathname === '/api/pomodoro') && (request.method === 'GET' || request.method === 'POST')) {
        const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
        const now = Date.now();

        if (request.method === 'GET') {
          let count = 0;
          if (kv) {
            let sessions = {};
            const raw = await kv.get('pomodoro_active_sessions');
            if (raw) { try { sessions = JSON.parse(raw) || {}; } catch (e) {} }
            const activeSessions = {};
            for (const [uid, exp] of Object.entries(sessions)) {
              if (typeof exp === 'number' && exp > now) activeSessions[uid] = exp;
            }
            count = Object.keys(activeSessions).length;
          }
          return jsonResponse({ success: true, count, activeUsersCount: count, timestamp: now }, corsHeaders);
        }

        // POST (start, stop, ping)
        let body = {};
        try { body = await request.json(); } catch (e) {}
        const action = String(body.action || 'ping').toLowerCase();
        const userId = String(body.userId || body.deviceId || '').trim() || ('anon_' + now);
        const durationMinutes = parseInt(body.durationMinutes || body.presetMins) || 25;

        let count = 0;
        if (kv) {
          let sessions = {};
          const raw = await kv.get('pomodoro_active_sessions');
          if (raw) { try { sessions = JSON.parse(raw) || {}; } catch (e) {} }
          const activeSessions = {};
          for (const [uid, exp] of Object.entries(sessions)) {
            if (typeof exp === 'number' && exp > now && uid !== userId) {
              activeSessions[uid] = exp;
            }
          }
          if (action === 'start' || action === 'ping') {
            const validMins = Math.min(120, Math.max(1, durationMinutes));
            activeSessions[userId] = now + (validMins * 60 * 1000) + 120000;
          }
          try {
            await kv.put('pomodoro_active_sessions', JSON.stringify(activeSessions), { expirationTtl: 7200 });
          } catch (e) {}
          count = Object.keys(activeSessions).length;
        } else {
          count = (action === 'start' || action === 'ping') ? 1 : 0;
        }
        if ((action === 'start' || action === 'ping') && count < 1) count = 1;

        return jsonResponse({ success: true, action, userId, count, activeUsersCount: count, timestamp: now }, corsHeaders);
      }

      // Telegram Auth & Cross-Device Merge Sync Endpoint (POST /api/auth/sync-merge or /api/v1/auth/sync-merge)
      if ((url.pathname === '/api/auth/sync-merge' || url.pathname === '/api/v1/auth/sync-merge' || url.pathname === '/api/v1/auth/telegram' || url.pathname === '/api/auth/telegram') && request.method === 'POST') {
        try {
          const body = await request.json();
          const { telegramUser, offlineData = {} } = body;
          
          if (!telegramUser || !telegramUser.id) {
            return jsonResponse({ success: false, message: 'اطلاعات کاربر تلگرام ارسال نشده است.' }, corsHeaders, 400);
          }

          const botToken = env.TELEGRAM_BOT_TOKEN || '8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM';
          
          // Verify Telegram Hash Signature with HMAC-SHA-256
          const isValid = await verifyTelegramAuth(telegramUser, botToken);
          if (!isValid && telegramUser.hash) {
            console.warn('[Telegram Auth] Invalid signature hash for user:', telegramUser.id);
          }

          const tgId = String(telegramUser.id);
          const userId = `tg_${tgId}`;
          const fullName = `${telegramUser.first_name || ''} ${telegramUser.last_name || ''}`.trim() || telegramUser.username || 'کاربر تلگرام';
          const avatarUrl = telegramUser.photo_url || '';
          const username = telegramUser.username || null;
          const now = Date.now();

          const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
          let cloudData = {};

          // 1. Fetch previously synced cloud data for this Telegram account from KV
          if (kv) {
            try {
              const rawCloud = await kv.get(`user_cloud_sync_${userId}`);
              if (rawCloud) {
                cloudData = JSON.parse(rawCloud);
              }
            } catch (e) {
              console.error('Error fetching cloud KV data:', e);
            }
          }

          // 2. Non-destructively merge server cloud data with incoming client offline data
          const mergedData = mergeAppData(cloudData, offlineData);
          mergedData.updatedAt = now;
          mergedData.userId = userId;
          mergedData.telegram_id = tgId;

          // 3. Save merged data back to KV with 1-year TTL
          if (kv) {
            try {
              await kv.put(`user_cloud_sync_${userId}`, JSON.stringify(mergedData), { expirationTtl: 31536000 });
            } catch (e) {
              console.error('Error saving merged KV data:', e);
            }
          }

          // 4. Update or Insert User in D1 Database if binding is available
          if (env.DB) {
            try {
              let dbUser = await env.DB.prepare('SELECT * FROM users WHERE telegram_id = ? OR id = ?')
                .bind(tgId, userId).first();
              if (!dbUser) {
                await env.DB.prepare(`
                  INSERT INTO users (id, telegram_id, username, full_name, avatar_url, onboarding_completed, created_at, last_active_at)
                  VALUES (?, ?, ?, ?, ?, 1, ?, ?)
                `).bind(userId, tgId, username, fullName, avatarUrl, now, now).run();
              } else {
                await env.DB.prepare(`
                  UPDATE users SET full_name = ?, avatar_url = ?, username = ?, last_active_at = ? WHERE id = ?
                `).bind(fullName, avatarUrl, username, now, dbUser.id).run();
              }
            } catch (d1Err) {
              console.warn('D1 update error:', d1Err);
            }
          }

          // 5. Generate JWT Auth Token
          const secret = env.JWT_SECRET || 'planex-secret-key-32-chars-minimum';
          const token = await createJWT({ id: userId, telegram_id: tgId, name: fullName, username }, secret);

          return jsonResponse({
            success: true,
            token,
            user: {
              id: userId,
              telegram_id: tgId,
              full_name: fullName,
              username: username,
              avatar_url: avatarUrl,
              auth_provider: 'telegram'
            },
            mergedData: mergedData,
            message: 'همگام‌سازی و ورود با تلگرام با موفقیت انجام شد.'
          }, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, message: 'خطا در احراز هویت تلگرام: ' + err.message }, corsHeaders, 500);
        }
      }

      // ═══════════════════════════════════════════════════════════
      // Telegram Bot Webhook Handler (POST /api/telegram-webhook)
      // ═══════════════════════════════════════════════════════════
      if (url.pathname === '/api/telegram-webhook' && request.method === 'POST') {
        const BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || '8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM';
        try {
          const update = await request.json();
          const message = update.message;
          if (!message || !message.chat || !message.from) {
            return jsonResponse({ ok: true }, corsHeaders);
          }

          const chatId = message.chat.id;
          const fromUser = message.from;
          const text = (message.text || '').trim();
          const firstName = fromUser.first_name || '';
          const lastName = fromUser.last_name || '';
          const fullName = `${firstName} ${lastName}`.trim() || fromUser.username || 'کاربر';
          const username = fromUser.username || null;
          const userId = String(fromUser.id);

          // Handle /start command (with optional deep-link payload)
          if (text.startsWith('/start')) {
            const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
            const now = Date.now();

            // Store a temporary auth session token in KV (valid for 10 minutes)
            if (kv) {
              try {
                const authSession = {
                  telegram_id: userId,
                  first_name: firstName,
                  last_name: lastName,
                  full_name: fullName,
                  username: username,
                  photo_url: '', // Telegram webhook doesn't send photo_url directly
                  auth_date: Math.floor(now / 1000),
                  created_at: now
                };
                await kv.put(`tg_auth_session_${userId}`, JSON.stringify(authSession), { expirationTtl: 600 });
              } catch (e) {
                console.warn('KV auth session save error:', e);
              }
            }

            // Also upsert into D1 if available
            if (env.DB) {
              try {
                const internalId = `tg_${userId}`;
                const existing = await env.DB.prepare('SELECT id FROM users WHERE telegram_id = ? OR id = ?')
                  .bind(userId, internalId).first();
                if (!existing) {
                  await env.DB.prepare(`
                    INSERT INTO users (id, telegram_id, username, full_name, avatar_url, onboarding_completed, created_at, last_active_at)
                    VALUES (?, ?, ?, ?, '', 1, ?, ?)
                  `).bind(internalId, userId, username, fullName, now, now).run();
                } else {
                  await env.DB.prepare('UPDATE users SET full_name = ?, username = ?, last_active_at = ? WHERE id = ?')
                    .bind(fullName, username, now, existing.id).run();
                }
              } catch (d1Err) {
                console.warn('D1 upsert on /start:', d1Err);
              }
            }

            // Send welcome message with inline keyboard button
            const welcomeText = `سلام ${fullName} عزیز! 🌟\n\nورود شما به *پلنکس* با موفقیت تایید شد ✅\n\nاکنون اطلاعات و پارت‌های مطالعاتی شما در تمام دستگاه‌ها همگام‌سازی می‌شود.\n\n🔗 برای بازگشت به اپلیکیشن، دکمه زیر را بزنید:`;

            const returnUrl = `https://planexapp.ir/?auth_uid=${userId}`;

            const sendPayload = {
              chat_id: chatId,
              text: welcomeText,
              parse_mode: 'Markdown',
              reply_markup: {
                inline_keyboard: [
                  [{ text: '🚀 ورود و بازگشت به پلنکس', url: returnUrl }],
                  [{ text: '📊 مشاهده رتبه‌بندی', url: 'https://planexapp.ir/?tab=leaderboard' }]
                ]
              }
            };

            // Fire-and-forget sendMessage via Telegram Bot API
            ctx.waitUntil(
              fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sendPayload)
              }).catch(err => console.error('Telegram sendMessage error:', err))
            );

            return jsonResponse({ ok: true }, corsHeaders);
          }

          // Handle other messages (fallback reply)
          if (text && !text.startsWith('/')) {
            const fallbackPayload = {
              chat_id: chatId,
              text: `${fullName} عزیز، برای ورود و همگام‌سازی حساب خود دکمه زیر را بزنید 👇`,
              parse_mode: 'Markdown',
              reply_markup: {
                inline_keyboard: [
                  [{ text: '🚀 ورود به پلنکس', url: `https://planexapp.ir/?auth_uid=${userId}` }]
                ]
              }
            };
            ctx.waitUntil(
              fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fallbackPayload)
              }).catch(err => console.error('Telegram fallback sendMessage error:', err))
            );
          }

          return jsonResponse({ ok: true }, corsHeaders);
        } catch (err) {
          console.error('Telegram webhook processing error:', err);
          return jsonResponse({ ok: true }, corsHeaders); // Always return 200 to Telegram
        }
      }

      // ═══════════════════════════════════════════════════════════
      // Set Telegram Webhook (GET /api/set-telegram-webhook)
      // One-time trigger to register the webhook URL on Telegram servers
      // ═══════════════════════════════════════════════════════════
      if (url.pathname === '/api/set-telegram-webhook' && request.method === 'GET') {
        const BOT_TOKEN = env.TELEGRAM_BOT_TOKEN || '8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM';
        const webhookUrl = 'https://planexapp.ir/api/telegram-webhook';
        try {
          const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}&allowed_updates=["message","callback_query"]`);
          const tgData = await tgRes.json();
          return jsonResponse({ success: true, telegram_response: tgData, webhook_url: webhookUrl }, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, message: 'خطا در ثبت وبهوک تلگرام: ' + err.message }, corsHeaders, 500);
        }
      }

      // ═══════════════════════════════════════════════════════════
      // Lookup Telegram Auth Session by UID (GET /api/auth/telegram-session?uid=...)
      // Called by frontend when user returns with ?auth_uid= parameter
      // ═══════════════════════════════════════════════════════════
      if (url.pathname === '/api/auth/telegram-session' && request.method === 'GET') {
        const uid = url.searchParams.get('uid');
        if (!uid) {
          return jsonResponse({ success: false, message: 'شناسه کاربری ارسال نشده.' }, corsHeaders, 400);
        }

        const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
        let sessionData = null;

        // Try KV first
        if (kv) {
          try {
            const raw = await kv.get(`tg_auth_session_${uid}`);
            if (raw) sessionData = JSON.parse(raw);
          } catch(e) {}
        }

        // Fallback to D1
        if (!sessionData && env.DB) {
          try {
            const dbUser = await env.DB.prepare('SELECT * FROM users WHERE telegram_id = ? OR id = ?')
              .bind(uid, `tg_${uid}`).first();
            if (dbUser) {
              sessionData = {
                telegram_id: dbUser.telegram_id || uid,
                full_name: dbUser.full_name || 'کاربر پلنکس',
                username: dbUser.username || null,
                avatar_url: dbUser.avatar_url || '',
                auth_date: Math.floor((dbUser.last_active_at || Date.now()) / 1000)
              };
            }
          } catch(e) {}
        }

        if (!sessionData) {
          return jsonResponse({ success: false, message: 'سشن یافت نشد. لطفاً از ربات تلگرام وارد شوید.' }, corsHeaders, 404);
        }

        // Generate a JWT for this user
        const secret = env.JWT_SECRET || 'planex-secret-key-32-chars-minimum';
        const internalId = `tg_${sessionData.telegram_id}`;
        const token = await createJWT({
          id: internalId,
          telegram_id: sessionData.telegram_id,
          name: sessionData.full_name,
          username: sessionData.username
        }, secret);

        return jsonResponse({
          success: true,
          token,
          user: {
            id: internalId,
            telegram_id: sessionData.telegram_id,
            full_name: sessionData.full_name,
            username: sessionData.username,
            avatar_url: sessionData.avatar_url || '',
            auth_provider: 'telegram'
          }
        }, corsHeaders);
      }

      // Get Public Profile by Username Endpoint
      if (url.pathname.startsWith('/api/v1/users/') && !url.pathname.includes('/complete-profile') && !url.pathname.includes('/me') && !url.pathname.includes('/public-profile') && request.method === 'GET') {
        const username = url.pathname.split('/')[4];
        if (!username) {
          return jsonResponse({ success: false, message: 'شناسه کاربری وارد نشده است.' }, corsHeaders, 400);
        }

        if (!env.DB) {
          return jsonResponse({ success: true, user: { username, full_name: 'دانش‌آموز نمونه', total_focus_minutes: 120 } }, corsHeaders);
        }

        const user = await env.DB.prepare('SELECT id, full_name, avatar_url, username, education_level, major, university, age_group, gender, total_focus_minutes, current_streak, created_at FROM users WHERE username = ?')
          .bind(username).first();

        if (!user) {
          return jsonResponse({ success: false, message: 'کاربر مورد نظر یافت نشد.' }, corsHeaders, 404);
        }

        // Fetch user's public routines
        const routines = await env.DB.prepare('SELECT * FROM routines WHERE user_id = ? AND is_public = 1 ORDER BY created_at DESC')
          .bind(user.id).all();

        // Fetch follow counts
        const followersCount = await env.DB.prepare('SELECT COUNT(*) as cnt FROM follows WHERE following_id = ?')
          .bind(user.id).first();
        const followingCount = await env.DB.prepare('SELECT COUNT(*) as cnt FROM follows WHERE follower_id = ?')
          .bind(user.id).first();

        return jsonResponse({
          success: true,
          profile: {
            ...user,
            followers_count: followersCount?.cnt || 0,
            following_count: followingCount?.cnt || 0,
            routines: routines?.results || []
          }
        }, corsHeaders);
      }

      if (url.pathname.match(/^\/api\/v1\/users\/[^/]+\/public-profile$/) && request.method === 'GET') {
        const userId = url.pathname.split('/')[4];
        if (!env.DB) return jsonResponse({ success: false, message: 'DB not connected' }, corsHeaders, 500);

        const user = await env.DB.prepare('SELECT id, full_name, avatar_url, username, total_focus_minutes, created_at, major as field_of_study, social_links FROM users WHERE id = ? OR google_id = ?')
          .bind(userId, userId).first();

        if (!user) {
          // Fallback for users not yet synced to D1
          return jsonResponse({
            success: true,
            profile: {
              id: userId,
              full_name: 'کاربر پلنکس',
              username: null,
              avatar_url: '',
              total_focus_minutes: 0,
              created_at: Date.now(),
              routines: []
            }
          }, corsHeaders);
        }

        const routines = await env.DB.prepare('SELECT id, title, description, category FROM routines WHERE user_id = ? AND is_public = 1 ORDER BY created_at DESC')
          .bind(userId).all();
          
        const routinesData = [];
        if (routines.success && routines.results.length > 0) {
          for (const r of routines.results) {
            const items = await env.DB.prepare('SELECT title, time_of_day, duration_minutes FROM routine_items WHERE routine_id = ? ORDER BY sort_order ASC')
              .bind(r.id).all();
            routinesData.push({
              ...r,
              items: items.results || []
            });
          }
        }

        return jsonResponse({
          success: true,
          profile: {
            ...user,
            routines: routinesData
          }
        }, corsHeaders);
      }

      // Daily Leaderboard Endpoint - POST (Submit study scores with 24h TTL)
      if ((url.pathname === '/api/v1/leaderboard' || url.pathname === '/api/leaderboard') && request.method === 'POST') {
        try {
          const body = await request.json();
          const { userId, nickname, target, studyMinutes, testCount, date, avatarUrl } = body;

          if (!userId || !nickname) {
            return jsonResponse({ success: false, message: 'شناسه کاربر و نام مستعار الزامی است.' }, corsHeaders, 400);
          }

          const getIranDate = () => {
            try {
              const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran', year: 'numeric', month: '2-digit', day: '2-digit' });
              return formatter.format(new Date());
            } catch (e) {
              return new Date().toISOString().split('T')[0];
            }
          };

          const safeMinutes = Math.max(0, parseInt(studyMinutes) || 0);
          const safeTests = Math.max(0, parseInt(testCount) || 0);
          const safeDate = date || getIranDate();
          const safeNickname = String(nickname).trim().substring(0, 30);
          const safeTarget = String(target || '').trim().substring(0, 60);

          const userEntry = {
            userId,
            nickname: safeNickname,
            target: safeTarget,
            studyMinutes: safeMinutes,
            testCount: safeTests,
            date: safeDate,
            avatarUrl: avatarUrl || '',
            updatedAt: Date.now()
          };

          if (env.LEADERBOARD_KV) {
            // Save user daily entry with 24-hour expiration (86400s)
            const userKey = `lb_user_${safeDate}_${userId}`;
            await env.LEADERBOARD_KV.put(userKey, JSON.stringify(userEntry), { expirationTtl: 86400 });

            // Maintain daily sorted leaderboard array with 24-hour TTL
            const dailyKey = `lb_daily_${safeDate}`;
            const existingDataStr = await env.LEADERBOARD_KV.get(dailyKey);
            let list = existingDataStr ? JSON.parse(existingDataStr) : [];
            if (!Array.isArray(list) || list.length === 0) {
              const altStr = await env.LEADERBOARD_KV.get(`leaderboard_${safeDate}`);
              try { list = altStr ? JSON.parse(altStr) : []; } catch (e) { list = []; }
              if (!Array.isArray(list)) list = [];
            }

            list = list.filter(item => item.userId !== userId);
            list.push(userEntry);

            // Sort: highest study minutes first, then highest test count
            list.sort((a, b) => {
              if (b.studyMinutes !== a.studyMinutes) return b.studyMinutes - a.studyMinutes;
              return b.testCount - a.testCount;
            });

            const topList = list.slice(0, 100);
            const dailyStr = JSON.stringify(topList);
            await env.LEADERBOARD_KV.put(dailyKey, dailyStr, { expirationTtl: 86400 });
            // Mirror to the Pages Functions key format so both backends read the same data
            await env.LEADERBOARD_KV.put(`leaderboard_${safeDate}`, dailyStr, { expirationTtl: 86400 });

            const rank = topList.findIndex(x => x.userId === userId) + 1;
            return jsonResponse({
              success: true,
              message: 'همگام‌سازی کارنامه با موفقیت انجام شد.',
              rank: rank > 0 ? rank : null,
              entry: userEntry
            }, corsHeaders);
          }

          return jsonResponse({ success: false, error: 'KV_NOT_BOUND', message: 'اتصال KV روی سرور تنظیم نشده است؛ کارنامه روی سرور ذخیره نشد.', entry: userEntry }, corsHeaders, 500);
        } catch (err) {
          return jsonResponse({ success: false, message: 'خطا در پردازش: ' + err.message }, corsHeaders, 500);
        }
      }

      // Read Daily Leaderboard Endpoint - GET (Retrieve sorted top users)
      if ((url.pathname === '/api/v1/leaderboard' || url.pathname === '/api/leaderboard') && request.method === 'GET') {
        const getIranDate = () => {
          try {
            const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran', year: 'numeric', month: '2-digit', day: '2-digit' });
            return formatter.format(new Date());
          } catch (e) {
            return new Date().toISOString().split('T')[0];
          }
        };
        const todayDate = url.searchParams.get('date') || getIranDate();
        let leaderboard = [];

        if (env.LEADERBOARD_KV) {
          const dailyKey = `lb_daily_${todayDate}`;
          let dataStr = await env.LEADERBOARD_KV.get(dailyKey);
          if (!dataStr) {
            dataStr = await env.LEADERBOARD_KV.get(`leaderboard_${todayDate}`);
          }
          if (dataStr) {
            leaderboard = JSON.parse(dataStr);
          } else {
            const v1 = await env.LEADERBOARD_KV.get('leaderboards_v1');
            if (v1) {
              const parsed = JSON.parse(v1);
              leaderboard = (parsed.overall || []).map(u => ({
                userId: u.id || u.username,
                nickname: u.full_name || u.username,
                target: u.major || 'کنکور سراسری',
                studyMinutes: u.total_focus_minutes || 0,
                testCount: 0,
                date: todayDate
              }));
            }
          }
        }

        return jsonResponse({ success: true, date: todayDate, leaderboard }, corsHeaders);
      }

      // Full State Cloud Sync Endpoints (KV-backed Sync Code)
      if ((url.pathname === '/api/v1/sync-code' || url.pathname === '/api/sync-code') && request.method === 'POST') {
        try {
          const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
          if (!kv) {
            return jsonResponse({ success: false, message: 'KV_NOT_BOUND' }, corsHeaders, 500);
          }
          const body = await request.json();
          const safeCode = String(body.code || body.syncCode || '').trim().toUpperCase();
          if (!safeCode) {
            return jsonResponse({ success: false, message: 'کد همگام‌سازی الزامی است.' }, corsHeaders, 400);
          }
          const backupData = body.backupData || body.appState || {};
          const payload = {
            code: safeCode,
            userId: body.userId || `usr_${safeCode.replace(/[^A-Z0-9]/g, '')}`,
            nickname: String(body.nickname || '').trim(),
            target: String(body.target || '').trim(),
            avatarUrl: body.avatarUrl || body.avatar_url || body.avatar || '',
            avatar_url: body.avatarUrl || body.avatar_url || body.avatar || '',
            avatar: body.avatarUrl || body.avatar_url || body.avatar || '',
            backupData: backupData,
            appState: backupData,
            updatedAt: Date.now()
          };
          await kv.put(`sync_code_${safeCode}`, JSON.stringify(payload), { expirationTtl: 7776000 });
          return jsonResponse({ success: true, message: 'اطلاعات با موفقیت در فضای ابری همگام‌سازی شد.', data: payload }, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, message: 'خطا در پردازش کد: ' + err.message }, corsHeaders, 500);
        }
      }

      if ((url.pathname === '/api/v1/sync-code' || url.pathname === '/api/sync-code') && request.method === 'GET') {
        try {
          const kv = env.PLANEX_KV || env.LEADERBOARD_KV;
          if (!kv) {
            return jsonResponse({ success: false, message: 'KV_NOT_BOUND' }, corsHeaders, 500);
          }
          const rawCode = url.searchParams.get('code') || url.searchParams.get('sync_code') || '';
          const safeCode = String(rawCode).trim().toUpperCase();
          if (!safeCode) {
            return jsonResponse({ success: false, message: 'کد مشخص نشده است.' }, corsHeaders, 400);
          }
          const raw = await kv.get(`sync_code_${safeCode}`);
          if (!raw) {
            return jsonResponse({ success: false, message: 'کد نامعتبر است یا دیتایی برای آن ذخیره نشده است.' }, corsHeaders, 404);
          }
          const data = JSON.parse(raw);
          return jsonResponse({ success: true, data }, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, message: 'خطا در واکشی کد: ' + err.message }, corsHeaders, 500);
        }
      }

      // Complete Profile Wizard Endpoint (Upsert without strict JWT)
      if (url.pathname === '/api/v1/users/complete-profile' && request.method === 'POST') {
        try {
          const body = await request.json();
          const { username, education_level, major, university, age_group, gender, full_name, avatar_url, social_links, device_sync_id } = body;

          // Determine user ID: from JWT if valid, otherwise fallback to device_sync_id
          const tempAuth = request.headers.get('Authorization');
          const tempToken = tempAuth && tempAuth.startsWith('Bearer ') ? tempAuth.substring(7) : null;
          
          let userIdToUse = device_sync_id;
          if (tempToken) {
             const payload = await verifyJWT(tempToken, env.JWT_SECRET || 'planex-secret-key-32-chars-minimum');
             if (payload && payload.id) userIdToUse = payload.id;
          }

          if (!userIdToUse) {
             return jsonResponse({ success: false, message: 'شناسه معتبر ارسال نشد' }, corsHeaders, 400);
          }

          let cleanUsername = null;
          if (username) {
            cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
          }

          if (env.DB) {
            const now = Date.now();
            if (cleanUsername) {
              const existing = await env.DB.prepare('SELECT id FROM users WHERE username = ? AND id != ?')
                .bind(cleanUsername, userIdToUse).first();
              if (existing) {
                cleanUsername = undefined; // Do not update username if taken
              }
            }

            const socialLinksStr = social_links ? JSON.stringify(social_links) : undefined;

            const upsertQuery = `
              INSERT INTO users (id, google_id, email, username, full_name, education_level, major, university, age_group, gender, avatar_url, social_links, onboarding_completed, last_profile_update, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
              ON CONFLICT(id) DO UPDATE SET
                username = COALESCE(excluded.username, users.username),
                full_name = COALESCE(excluded.full_name, users.full_name),
                education_level = COALESCE(excluded.education_level, users.education_level),
                major = COALESCE(excluded.major, users.major),
                university = COALESCE(excluded.university, users.university),
                age_group = COALESCE(excluded.age_group, users.age_group),
                gender = COALESCE(excluded.gender, users.gender),
                avatar_url = COALESCE(excluded.avatar_url, users.avatar_url),
                social_links = COALESCE(excluded.social_links, users.social_links),
                onboarding_completed = 1,
                last_profile_update = excluded.last_profile_update
            `;
            
            await env.DB.prepare(upsertQuery).bind(
              userIdToUse,
              'guest-' + userIdToUse, // google_id
              'guest-' + userIdToUse + '@local.planex', // email
              cleanUsername || null,
              full_name || 'کاربر مهمان', // default full_name if missing
              education_level || null,
              major || null,
              university || null,
              age_group || null,
              gender || null,
              avatar_url || null,
              socialLinksStr || null,
              now,
              now // created_at
            ).run();
          }

          return jsonResponse({
            success: true,
            message: 'پروفایل شما با موفقیت تکمیل شد!',
            user: {
              id: userIdToUse,
              username: cleanUsername,
              full_name,
              major,
              avatar_url,
              social_links,
              onboarding_completed: 1
            }
          }, corsHeaders);
        } catch (err) {
          return jsonResponse({ success: false, error: err.message, stack: err.stack }, corsHeaders, 500);
        }
      }

      // -------------------------------------------------------------
      // 2. PROTECTED ENDPOINTS (JWT Required)
      // -------------------------------------------------------------
      const authHeader = request.headers.get('Authorization');
      const token = (authHeader && authHeader.startsWith('Bearer ')) ? authHeader.substring(7) : (url.searchParams.get('token') || null);

      if (!token) {
        return jsonResponse({ success: false, message: 'توکن امنیتی یافت نشد. لطفاً وارد حساب شوید.' }, corsHeaders, 401);
      }

      const payload = await verifyJWT(token, env.JWT_SECRET || 'planex-secret-key-32-chars-minimum');
      if (!payload) {
        return jsonResponse({ success: false, message: 'توکن امنیتی منقضی یا نامعتبر است.' }, corsHeaders, 401);
      }

      const currentUserId = payload.id;

      // Activity Feed Endpoint
      if (url.pathname === '/api/v1/feed' && request.method === 'GET') {
        if (!env.DB) return jsonResponse({ success: true, feed: [] }, corsHeaders);

        // Fetch recent public routines created or copied by people the user follows
        const feed = await env.DB.prepare(`
          SELECT r.*, u.username, u.full_name, u.avatar_url, f.created_at as follow_date
          FROM routines r
          JOIN follows f ON r.user_id = f.following_id
          JOIN users u ON r.user_id = u.id
          WHERE f.follower_id = ? AND r.is_public = 1
          ORDER BY r.created_at DESC
          LIMIT 30
        `).bind(currentUserId).all();

        return jsonResponse({ success: true, feed: feed.results }, corsHeaders);
      }



      // Get Current User Profile Endpoint
      if (url.pathname === '/api/v1/users/me' && request.method === 'GET') {
        if (!env.DB) {
          return jsonResponse({ success: true, user: { id: currentUserId, email: payload.email, full_name: payload.name } }, corsHeaders);
        }

        const user = await env.DB.prepare('SELECT * FROM users WHERE id = ?')
          .bind(currentUserId).first();

        // Parse social_links if needed (string to object)
        if (user && typeof user.social_links === 'string') {
          try { user.social_links = JSON.parse(user.social_links); } catch(e) {}
        }

        return jsonResponse({ success: true, user }, corsHeaders);
      }

      // Follow / Unfollow User Endpoint
      if (url.pathname.startsWith('/api/v1/users/follow/') && request.method === 'POST') {
        const targetUserId = url.pathname.split('/')[5];
        if (!targetUserId || targetUserId === currentUserId) {
          return jsonResponse({ success: false, message: 'عملیات دنبال‌کردن نامعتبر است.' }, corsHeaders, 400);
        }

        if (env.DB) {
          const existingFollow = await env.DB.prepare('SELECT * FROM follows WHERE follower_id = ? AND following_id = ?')
            .bind(currentUserId, targetUserId).first();

          if (existingFollow) {
            // Unfollow
            await env.DB.prepare('DELETE FROM follows WHERE follower_id = ? AND following_id = ?')
              .bind(currentUserId, targetUserId).run();
            return jsonResponse({ success: true, is_following: false, message: 'از لیست دنبال‌شوندگان حذف شد.' }, corsHeaders);
          } else {
            // Follow
            await env.DB.prepare('INSERT INTO follows (follower_id, following_id, created_at) VALUES (?, ?, ?)')
              .bind(currentUserId, targetUserId, Date.now()).run();
            return jsonResponse({ success: true, is_following: true, message: 'با موفقیت دنبال شد.' }, corsHeaders);
          }
        }

        return jsonResponse({ success: true, is_following: true }, corsHeaders);
      }

      // Universal Batch Sync API (Offline-First Queue Processing)
      if (url.pathname === '/api/v1/sync/batch' && request.method === 'POST') {
        const body = await request.json();
        const actions = body.actions || [];
        const now = Date.now();

        if (env.DB && actions.length > 0) {
          const statements = [];
          
          for (const action of actions) {
            if (action.type === 'CREATE_ROUTINE') {
              const r = action.payload;
              statements.push(
                env.DB.prepare('INSERT INTO routines (id, user_id, title, description, is_public, category, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
                .bind(r.id, currentUserId, r.title, r.description || '', r.is_public ? 1 : 0, r.category || 'custom', r.created_at || now, now)
              );
            } else if (action.type === 'UPDATE_ROUTINE_STATUS') {
              const { id, is_public } = action.payload;
              statements.push(
                env.DB.prepare('UPDATE routines SET is_public = ?, updated_at = ? WHERE id = ? AND user_id = ?')
                .bind(is_public ? 1 : 0, now, id, currentUserId)
              );
            } else if (action.type === 'SYNC_FOCUS_TIME') {
              const { focus_minutes_delta = 0, current_streak = 0 } = action.payload;
              if (focus_minutes_delta > 0) {
                statements.push(
                  env.DB.prepare('UPDATE users SET total_focus_minutes = total_focus_minutes + ?, current_streak = MAX(current_streak, ?), last_active_at = ? WHERE id = ?')
                  .bind(focus_minutes_delta, current_streak, now, currentUserId)
                );
              }
            } else if (action.type === 'FOLLOW_USER') {
              const { targetId } = action.payload;
              statements.push(
                env.DB.prepare('INSERT OR IGNORE INTO follows (follower_id, following_id, created_at) VALUES (?, ?, ?)')
                .bind(currentUserId, targetId, now)
              );
            }
          }

          if (statements.length > 0) {
            await env.DB.batch(statements);
          }
        }
        return jsonResponse({ success: true, processed: actions.length, timestamp: now }, corsHeaders);
      }

      // Routine Sharing: Get Public Routines (Enforces Reciprocity Rule)
      if (url.pathname === '/api/v1/routines/public' && request.method === 'GET') {
        if (!env.DB) return jsonResponse({ success: true, routines: [] }, corsHeaders);

        // Strict Reciprocity Check
        const userRoutinesCount = await env.DB.prepare('SELECT COUNT(*) as count FROM routines WHERE user_id = ? AND is_public = 1').bind(currentUserId).first();
        if (userRoutinesCount.count === 0) {
          return jsonResponse({
            success: false, 
            message: 'برای مشاهده و کپی روتین‌های دیگران، ابتدا باید حداقل یک روتین خود را عمومی کنید تا به جامعه پلنکس کمک کنید!'
          }, corsHeaders, 403);
        }

        const publicRoutines = await env.DB.prepare(`
          SELECT r.*, u.username, u.full_name, u.avatar_url 
          FROM routines r 
          JOIN users u ON r.user_id = u.id 
          WHERE r.is_public = 1 AND r.user_id != ?
          ORDER BY r.copy_count DESC, r.created_at DESC LIMIT 50
        `).bind(currentUserId).all();

        return jsonResponse({ success: true, routines: publicRoutines.results }, corsHeaders);
      }

      // Routine Sharing: Copy a Routine (Enforces Reciprocity Rule)
      if (url.pathname.match(/^\/api\/v1\/routines\/[^/]+\/copy$/) && request.method === 'POST') {
        const sourceRoutineId = url.pathname.split('/')[4];
        if (!env.DB) return jsonResponse({ success: false, message: 'DB not available' }, corsHeaders);

        // Strict Reciprocity Check
        const userRoutinesCount = await env.DB.prepare('SELECT COUNT(*) as count FROM routines WHERE user_id = ? AND is_public = 1').bind(currentUserId).first();
        if (userRoutinesCount.count === 0) {
          return jsonResponse({
            success: false, 
            message: 'برای مشاهده و کپی روتین‌های دیگران، ابتدا باید حداقل یک روتین خود را عمومی کنید تا به جامعه پلنکس کمک کنید!'
          }, corsHeaders, 403);
        }

        const sourceRoutine = await env.DB.prepare('SELECT * FROM routines WHERE id = ? AND is_public = 1').bind(sourceRoutineId).first();
        if (!sourceRoutine) return jsonResponse({ success: false, message: 'روتین مورد نظر یافت نشد.' }, corsHeaders, 404);

        const newRoutineId = crypto.randomUUID();
        const now = Date.now();
        
        await env.DB.batch([
          env.DB.prepare('UPDATE routines SET copy_count = copy_count + 1 WHERE id = ?').bind(sourceRoutineId),
          env.DB.prepare('INSERT INTO routines (id, user_id, title, description, is_public, category, copied_from_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
            .bind(newRoutineId, currentUserId, sourceRoutine.title + ' (کپی)', sourceRoutine.description, 0, sourceRoutine.category, sourceRoutineId, now, now)
        ]);

        return jsonResponse({ success: true, message: 'روتین با موفقیت به حساب شما اضافه شد.', new_routine_id: newRoutineId }, corsHeaders);
      }

      // Study Rooms (D1 Persistence)
      if (url.pathname === '/api/v1/rooms' && request.method === 'GET') {
        const rooms = await env.DB.prepare(`
          SELECT r.id, r.name, r.max_participants, r.category, r.emoji, r.owner_id,
                 (SELECT COUNT(*) FROM room_participants rp WHERE rp.room_id = r.id) as current_members
          FROM study_rooms r
          ORDER BY r.created_at DESC
          LIMIT 50
        `).all();
        
        return jsonResponse({ success: true, rooms: rooms.results }, corsHeaders);
      }

      if (url.pathname === '/api/v1/rooms' && request.method === 'POST') {
        const body = await request.json();
        const { name, max_participants } = body;
        if (!name) return jsonResponse({ success: false, message: 'نام اتاق الزامی است.' }, corsHeaders, 400);
        
        const roomId = 'room-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
        const maxP = max_participants || 50;
        const now = Date.now();

        await env.DB.prepare('INSERT INTO study_rooms (id, name, max_participants, owner_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)')
          .bind(roomId, name, maxP, currentUserId, now, now).run();
        
        // Auto join the creator
        await env.DB.prepare('INSERT INTO room_participants (room_id, user_id, joined_at, role) VALUES (?, ?, ?, ?)')
          .bind(roomId, currentUserId, now, 'owner').run();

        return jsonResponse({ success: true, room_id: roomId }, corsHeaders);
      }

      if (url.pathname === '/api/v1/rooms/my-rooms' && request.method === 'GET') {
        const rooms = await env.DB.prepare(`
          SELECT r.id, r.name, r.max_participants, r.category, r.emoji, r.owner_id,
                 (SELECT COUNT(*) FROM room_participants rp2 WHERE rp2.room_id = r.id) as current_members
          FROM study_rooms r
          JOIN room_participants rp ON r.id = rp.room_id
          WHERE rp.user_id = ?
        `).bind(currentUserId).all();
        
        return jsonResponse({ success: true, rooms: rooms.results }, corsHeaders);
      }

      // DELETE /api/v1/rooms/:id - Delete a room (owner only)
      if (url.pathname.match(/^\/api\/v1\/rooms\/[^/]+$/) && request.method === 'DELETE') {
        const roomId = url.pathname.split('/')[4];
        
        const room = await env.DB.prepare('SELECT owner_id FROM study_rooms WHERE id = ?').bind(roomId).first();
        if (!room) return jsonResponse({ success: false, message: 'اتاق یافت نشد.' }, corsHeaders, 404);
        if (room.owner_id !== currentUserId) return jsonResponse({ success: false, message: 'فقط سازنده می‌تواند اتاق را حذف کند.' }, corsHeaders, 403);
        
        // Delete room (cascades to room_participants via FK)
        await env.DB.prepare('DELETE FROM study_rooms WHERE id = ?').bind(roomId).run();
        
        return jsonResponse({ success: true, message: 'اتاق با موفقیت حذف شد.' }, corsHeaders);
      }

      if (url.pathname.match(/^\/api\/v1\/rooms\/[^/]+\/join$/) && request.method === 'POST') {
        const roomId = url.pathname.split('/')[4];
        
        const room = await env.DB.prepare('SELECT max_participants FROM study_rooms WHERE id = ?').bind(roomId).first();
        if (!room) return jsonResponse({ success: false, message: 'اتاق یافت نشد.' }, corsHeaders, 404);
        
        const membersCount = await env.DB.prepare('SELECT COUNT(*) as count FROM room_participants WHERE room_id = ?').bind(roomId).first();
        
        // Check if already a member
        const isMember = await env.DB.prepare('SELECT 1 FROM room_participants WHERE room_id = ? AND user_id = ?').bind(roomId, currentUserId).first();
        
        if (!isMember) {
          if (membersCount.count >= room.max_participants) {
            return jsonResponse({ success: false, message: 'ظرفیت این اتاق پر شده است.' }, corsHeaders, 400);
          }
          await env.DB.prepare('INSERT INTO room_participants (room_id, user_id, joined_at) VALUES (?, ?, ?)')
            .bind(roomId, currentUserId, Date.now()).run();
        }

        // Return the invite link so frontend can display it immediately
        const inviteLink = `https://planexapp.ir/?room=${roomId}`;
        return jsonResponse({ success: true, message: 'وارد اتاق شدید.', invite_link: inviteLink }, corsHeaders);
      }

      // Live Study Rooms: Stateless Heartbeat/State via Durable Object
      // Forward /heartbeat, /state, and /ws paths
      if (url.pathname.startsWith('/api/v1/rooms/') && 
          (url.pathname.endsWith('/heartbeat') || url.pathname.endsWith('/state') || url.pathname.endsWith('/ws')) &&
          (request.method === 'GET' || request.method === 'POST' || request.headers.get('Upgrade') === 'websocket')) {
        const roomId = url.pathname.split('/')[4];
        if (!roomId || !env.STUDY_ROOM_DO) {
          return jsonResponse({ success: false, message: 'اتاق یافت نشد.' }, corsHeaders, 404);
        }

        // Fetch user info for DO headers
        let userRecord = null;
        if (env.DB) {
          userRecord = await env.DB.prepare('SELECT id, username, full_name, avatar_url FROM users WHERE id = ?').bind(currentUserId).first();
        }

        // Pass the request to the Durable Object
        const doId = env.STUDY_ROOM_DO.idFromName(roomId);
        const stub = env.STUDY_ROOM_DO.get(doId);
        
        // Append user info headers so DO knows who is acting
        const headers = new Headers(request.headers);
        headers.set('X-User-Id', currentUserId);
        headers.set('X-User-Name', (userRecord && (userRecord.username || userRecord.full_name)) || 'کاربر');
        headers.set('X-User-Avatar', (userRecord && userRecord.avatar_url) || '');
        const newRequest = new Request(request, { headers });

        const doResponse = await stub.fetch(newRequest);
        
        

        // Ensure CORS headers are attached to the DO response
        return new Response(doResponse.body, {
          status: doResponse.status,
          headers: {
            ...Object.fromEntries(doResponse.headers),
            ...corsHeaders
          }
        });
      }

      return jsonResponse({ success: false, message: 'مسیر یافت نشد.' }, corsHeaders, 404);

    } catch (err) {
      console.error('Worker API Error:', err);
      return jsonResponse({ success: false, message: 'خطای درون سروری رخ داده است.', error: err.message }, corsHeaders, 500);
    }
  }
};

// Helper: Standard JSON Response
function jsonResponse(obj, corsHeaders, status = 200) {
  let statusCode = status;
  let customHeaders = {};

  if (typeof corsHeaders === 'number') {
    statusCode = corsHeaders;
  } else if (corsHeaders && typeof corsHeaders === 'object') {
    customHeaders = corsHeaders;
  }

  return new Response(JSON.stringify(obj), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin, *',
      ...customHeaders
    }
  });
}

// Helper: UTF-8 Safe Base64URL Encoding & Decoding
function base64UrlEncodeStr(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64UrlDecodeStr(base64urlStr) {
  const base64 = base64urlStr.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

// Web Crypto API Helper for JWT Signature (UTF-8 Safe)
async function createJWT(payload, secret) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const enc = new TextEncoder();

  const encodedHeader = base64UrlEncodeStr(JSON.stringify(header));
  const encodedPayload = base64UrlEncodeStr(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + (86400 * 30) })); // 30 days
  const tokenData = `${encodedHeader}.${encodedPayload}`;

  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(tokenData));
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${tokenData}.${encodedSignature}`;
}

async function verifyJWT(token, secret) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const tokenData = `${header}.${payload}`;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
    );

    const sigArray = Uint8Array.from(atob(signature.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const isValid = await crypto.subtle.verify('HMAC', key, sigArray, enc.encode(tokenData));

    if (!isValid) return null;

    const decodedPayload = JSON.parse(base64UrlDecodeStr(payload));
    if (decodedPayload.exp && decodedPayload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return decodedPayload;
  } catch (e) {
    return null;
  }
}

// Helper: Telegram Login Hash Verification (HMAC-SHA-256)
async function verifyTelegramAuth(telegramUser, botToken) {
  if (!telegramUser || !telegramUser.hash || !telegramUser.id) return false;

  const { hash, ...data } = telegramUser;

  const checkArr = [];
  Object.keys(data).sort().forEach(key => {
    if (data[key] !== undefined && data[key] !== null) {
      checkArr.push(`${key}=${data[key]}`);
    }
  });
  const checkString = checkArr.join('\n');

  const encoder = new TextEncoder();
  const tokenBytes = encoder.encode(botToken);
  const secretKeyBytes = await crypto.subtle.digest('SHA-256', tokenBytes);

  const key = await crypto.subtle.importKey(
    'raw',
    secretKeyBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(checkString)
  );

  const signatureHex = Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return signatureHex.toLowerCase() === String(hash).toLowerCase();
}

// Helper: Merge Cloud & Offline Data Non-destructively
function mergeAppData(cloudData = {}, incomingData = {}) {
  const result = { ...cloudData, ...incomingData };

  // 1. Merge all table / slot entries (e.g., planex_table_*, table_*)
  for (const key of Object.keys(cloudData)) {
    if (key.startsWith('planex_table_') || key.startsWith('table_') || key.startsWith('planex_hourly_')) {
      if (incomingData[key]) {
        try {
          const cTable = typeof cloudData[key] === 'string' ? JSON.parse(cloudData[key]) : cloudData[key];
          const iTable = typeof incomingData[key] === 'string' ? JSON.parse(incomingData[key]) : incomingData[key];
          result[key] = { ...cTable, ...iTable };
        } catch (e) {
          result[key] = incomingData[key] || cloudData[key];
        }
      }
    }
  }

  // 2. Merge array-based entities without duplicate items (by id, timestamp, code, or title)
  const arrayKeys = [
    'planex_study_sessions',
    'planex_study_parts',
    'study_sessions',
    'planex_tasks',
    'planex_habits',
    'planex_flashcards',
    'planex_routines',
    'planex_my_groups'
  ];

  for (const arrKey of arrayKeys) {
    const cArr = Array.isArray(cloudData[arrKey]) ? cloudData[arrKey] : [];
    const iArr = Array.isArray(incomingData[arrKey]) ? incomingData[arrKey] : [];
    if (cArr.length > 0 || iArr.length > 0) {
      const itemMap = new Map();
      cArr.forEach(item => {
        if (!item) return;
        const id = item.id || item.timestamp || item.code || item.title || JSON.stringify(item);
        itemMap.set(String(id), item);
      });
      iArr.forEach(item => {
        if (!item) return;
        const id = item.id || item.timestamp || item.code || item.title || JSON.stringify(item);
        if (itemMap.has(String(id))) {
          itemMap.set(String(id), { ...itemMap.get(String(id)), ...item });
        } else {
          itemMap.set(String(id), item);
        }
      });
      result[arrKey] = Array.from(itemMap.values());
    }
  }

  // 3. Merge Profile
  if (cloudData.planex_profile || incomingData.planex_profile) {
    const cProf = cloudData.planex_profile || {};
    const iProf = incomingData.planex_profile || {};
    result.planex_profile = {
      ...cProf,
      ...iProf,
      name: iProf.name || cProf.name || '',
      avatar_url: iProf.avatar_url || cProf.avatar_url || ''
    };
  }

  return result;
}

// -------------------------------------------------------------


// -------------------------------------------------------------
// Durable Object: Live Study Rooms
// -------------------------------------------------------------
export class StudyRoomDO {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.roomId = null;
    this.users = new Map(); // userId -> userData
    this.sessions = []; // Array of { ws, userId, lastPing }
  }

  async getMergedParticipants() {
    const activeUsers = Array.from(this.users.values());
    let allMembers = [];
    
    if (this.env && this.env.DB && this.roomId) {
      try {
        const membersResult = await this.env.DB.prepare(`
          SELECT u.id, u.username, u.full_name, u.avatar_url, rp.joined_at, rp.role
          FROM room_participants rp
          JOIN users u ON rp.user_id = u.id
          WHERE rp.room_id = ?
        `).bind(this.roomId).all();
        allMembers = membersResult.results || [];
      } catch (e) {
        console.error('DO DB fetch error:', e);
      }
    }

    const activeMap = new Map();
    activeUsers.forEach(u => activeMap.set(String(u.id), u));

    const mergedParticipants = [];
    const processedIds = new Set();

    for (const member of allMembers) {
      const memberIdStr = String(member.id);
      processedIds.add(memberIdStr);
      const activeData = activeMap.get(memberIdStr);

      if (activeData) {
        mergedParticipants.push({
          id: member.id,
          name: member.full_name || member.username || activeData.name || '?????',
          avatar: member.avatar_url || activeData.avatar || '',
          status: activeData.status || 'active',
          is_studying: (activeData.status || 'active') === 'active',
          current_subject: activeData.current_subject || '',
          today_study_time: activeData.today_study_time || 0,
          focus_minutes: activeData.focus_minutes || 0,
          weekly_focus_minutes: activeData.weekly_focus_minutes || 0,
          session_start_timestamp: activeData.session_start_timestamp || Date.now(),
          joinedAt: member.joined_at
        });
      } else {
        mergedParticipants.push({
          id: member.id,
          name: member.full_name || member.username || '?????',
          avatar: member.avatar_url || '',
          status: 'offline',
          is_studying: false,
          current_subject: '',
          today_study_time: 0,
          focus_minutes: 0,
          weekly_focus_minutes: 0,
          joinedAt: member.joined_at
        });
      }
    }

    // Add any active DO users not in D1 yet
    for (const activeData of activeUsers) {
      if (!processedIds.has(String(activeData.id))) {
        mergedParticipants.push(activeData);
      }
    }

    return mergedParticipants;
  }

  async fetch(request) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    // Extract roomId from the URL path: /api/v1/rooms/:id/state or /ws
    const extractedRoomId = pathParts[4];
    if (extractedRoomId) {
      this.roomId = extractedRoomId;
    }

    const userId = request.headers.get('X-User-Id');
    const userName = request.headers.get('X-User-Name') || '?????';
    const userAvatar = request.headers.get('X-User-Avatar') || '';
    
    if (!userId) {
      return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401 });
    }

    // WebSocket Upgrade Endpoint
    if (request.headers.get('Upgrade') === 'websocket') {
      const pair = new WebSocketPair();
      const client = pair[0];
      const server = pair[1];

      await this.handleSession(server, userId, userName, userAvatar);

      return new Response(null, { status: 101, webSocket: client });
    }

    const now = Date.now();
    
    // Cleanup stale users (fallback for non-WS HTTP)
    for (const [id, user] of this.users.entries()) {
      if (now - user.lastSeen > 45 * 1000) {
        this.users.delete(id);
      }
    }

    // Handle Fallback Heartbeat (POST /api/v1/rooms/:id/heartbeat)
    if (request.method === 'POST' && url.pathname.endsWith('/heartbeat')) {
      const body = await request.json().catch(() => ({}));
      this.updateUser(userId, userName, userAvatar, body);
      await this.broadcastState();
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }
    
    // Handle State Fetch (GET /api/v1/rooms/:id/state)
    if (request.method === 'GET' && url.pathname.endsWith('/state')) {
      const participants = await this.getMergedParticipants();
      return new Response(JSON.stringify({
        success: true,
        type: 'ROOM_STATE',
        participants
      }), { headers: { 'Content-Type': 'application/json' } });
    }

    return new Response('Not Found', { status: 404 });
  }

  async handleSession(server, userId, userName, userAvatar) {
    server.accept();
    const session = { ws: server, userId, lastPing: Date.now() };
    this.sessions.push(session);

    server.addEventListener('message', async (event) => {
      session.lastPing = Date.now();
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'ping') {
          server.send(JSON.stringify({ type: 'pong' }));
          return;
        }
        if (msg.type === 'update') {
          this.updateUser(userId, userName, userAvatar, msg.payload);
          await this.broadcastState();
        }
      } catch (e) {
      }
    });

    server.addEventListener('close', async () => {
      await this.handleDisconnect(session);
    });
    
    server.addEventListener('error', async () => {
      await this.handleDisconnect(session);
    });

    const participants = await this.getMergedParticipants();
    server.send(JSON.stringify({
      type: 'ROOM_STATE',
      participants
    }));
  }

  async handleDisconnect(session) {
    this.sessions = this.sessions.filter(s => s !== session);
    const hasOtherSessions = this.sessions.some(s => s.userId === session.userId);
    if (!hasOtherSessions) {
      this.users.delete(session.userId);
      await this.broadcastState();
    }
  }

  updateUser(userId, userName, userAvatar, data) {
    const now = Date.now();
    const existing = this.users.get(userId) || {};
    
    if (data.status === 'offline') {
      this.users.delete(userId);
    } else {
      this.users.set(userId, {
        id: userId,
        name: userName,
        avatar: userAvatar,
        status: data.status || 'active',
        is_studying: (data.status || 'active') === 'active',
        current_subject: data.current_subject || '',
        today_study_time: data.today_study_time || 0,
        focus_minutes: data.focus_minutes || 0,
        weekly_focus_minutes: data.weekly_focus_minutes || 0,
        session_start_timestamp: data.session_start_timestamp || now,
        lastSeen: now,
        joinedAt: existing.joinedAt || now
      });
    }
  }

  async broadcastState() {
    const participants = await this.getMergedParticipants();
    const message = JSON.stringify({
      type: 'ROOM_STATE',
      participants
    });
    
    const now = Date.now();
    this.sessions = this.sessions.filter(session => {
      try {
        if (now - session.lastPing > 45 * 1000) {
          session.ws.close();
          return false;
        }
        session.ws.send(message);
        return true;
      } catch (err) {
        return false;
      }
    });
  }
}


