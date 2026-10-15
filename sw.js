const CACHE_NAME = 'planex-app-v2.3.5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-transparent.png',
  '/fonts/Yekan.css',
  '/fonts/Yekan.woff2',
  '/fonts/Yekan.woff'
];

// Install Event - Pre-caching core shell & skipping waiting immediately (100% non-blocking)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[ServiceWorker] Pre-caching offline PWA shell');
      await Promise.allSettled(
        ASSETS_TO_CACHE.map(async (url) => {
          try {
            const response = await fetch(url, { cache: 'no-cache' });
            if (response && response.ok) {
              await cache.put(url, response);
            }
          } catch (err) {
            console.warn('[ServiceWorker] Non-blocking cache skip for:', url, err);
          }
        })
      );
    })
  );
});

// Skip waiting message listener
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Activate Event - Clearing ALL previous caches & claiming clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
// - HTML/navigation: Cache-First if available (Stale-While-Revalidate), direct network on first load
// - Static assets (JS/CSS/fonts/images): Cache-First if available, direct network on first load
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests & backend API requests
  if (!event.request.url.startsWith(self.location.origin) || event.request.url.includes('/api/')) {
    return;
  }

  const url = new URL(event.request.url);
  const isHtmlRequest = event.request.mode === 'navigate' ||
                        url.pathname === '/' ||
                        url.pathname === '/index.html' ||
                        (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  if (isHtmlRequest) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(event.request) || await caches.match('/index.html') || await caches.match('/');

        // 1. If cached, serve immediately (0ms) and revalidate in background
        if (cachedResponse) {
          (async () => {
            try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 6000);
              const networkResponse = await fetch(event.request, { signal: controller.signal });
              clearTimeout(timeoutId);
              if (networkResponse && networkResponse.status === 200) {
                const cache = await caches.open(CACHE_NAME);
                await cache.put(event.request, networkResponse.clone());
                await cache.put('/index.html', networkResponse.clone());
              }
            } catch (err) {}
          })();
          return cachedResponse;
        }

        // 2. If NOT cached yet (First Load / Incognito): fetch from network without premature abort
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(event.request, networkResponse.clone());
            await cache.put('/index.html', networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          const fallback = await caches.match('/index.html') || await caches.match('/');
          if (fallback) return fallback;
          throw err;
        }
      })()
    );
    return;
  }

  // Cache-First with Stale-While-Revalidate for static assets (JS, CSS, fonts, images)
  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);

      // 1. If cache exists: return immediately and revalidate in background
      if (cachedResponse) {
        (async () => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);
            const networkResponse = await fetch(event.request, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (networkResponse && networkResponse.status === 200 &&
                (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
              const cache = await caches.open(CACHE_NAME);
              await cache.put(event.request, networkResponse.clone());
            }
          } catch (err) {}
        })();
        return cachedResponse;
      }

      // 2. If NOT cached yet (First Load / Incognito): fetch from network directly and populate cache
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.status === 200 &&
            (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (err) {
        if (cachedResponse) return cachedResponse;
        throw err;
      }
    })()
  );
});

// Notification Click Event - focus or open app window
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});