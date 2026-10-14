const CACHE_NAME = 'planex-app-v2.3.3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-transparent.png',
  '/fonts/Yekan.css',
  '/fonts/Yekan.woff2',
  '/fonts/Yekan.woff'
];

// Install Event - Pre-caching core shell & skipping waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline PWA shell');
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) =>
          cache.add(url).catch((err) => console.warn('[ServiceWorker] Cache failed for', url, err))
        )
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
// - HTML/navigation: Cache-First با timeout 3s → fallback به کش (برای شبکه‌های فیلتر‌شده ایران)
// - Static assets (JS/CSS/fonts/images): Cache-First → در پس‌زمینه revalidate می‌کند
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
    // Cache-First برای HTML با network timeout 3 ثانیه
    // اگر کش موجود باشد فوراً سرویس می‌دهد و در پس‌زمینه آپدیت می‌کند (Stale-While-Revalidate)
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const networkFetch = (async () => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            const networkResponse = await fetch(event.request, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (networkResponse && networkResponse.status === 200) {
              const responseForReq = networkResponse.clone();
              const responseForIndex = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseForReq);
                cache.put('/index.html', responseForIndex);
              }).catch((err) => console.warn('[ServiceWorker] Cache put failed:', err));
            }
            return networkResponse;
          } catch (err) {
            return cachedResponse || caches.match('/index.html') || caches.match('/');
          }
        })();

        if (cachedResponse) {
          networkFetch.catch(() => {});
          return cachedResponse;
        }
        return networkFetch;
      })
    );
    return;
  }

  // Cache-First با Stale-While-Revalidate برای فایل‌های استاتیک (JS، CSS، fonts، images)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkUpdate = (async () => {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);
          const networkResponse = await fetch(event.request, { signal: controller.signal });
          clearTimeout(timeoutId);
          if (networkResponse && networkResponse.status === 200 &&
              (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            }).catch((err) => console.warn('[ServiceWorker] Cache put failed:', err));
          }
          return networkResponse;
        } catch (err) {
          return cachedResponse;
        }
      })();

      if (cachedResponse) {
        networkUpdate.catch(() => {});
        return cachedResponse;
      }
      return networkUpdate;
    })
  );
});

// Notification Click Event
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