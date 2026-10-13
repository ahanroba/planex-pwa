// Inside Android WebView (appassets.androidplatform.net or file://): completely bypass Service Worker
if (self.location.hostname === 'appassets.androidplatform.net' || self.location.protocol === 'file:') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.registration.unregister());
  });
} else {
  const CACHE_NAME = 'planex-v-force-12345-' + Date.now();
  const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/logo-transparent.png'
  ];

  // Install Event - Pre-caching core shell
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return Promise.allSettled(
          ASSETS_TO_CACHE.map((url) => cache.add(url).catch(() => {}))
        );
      }).then(() => self.skipWaiting())
    );
  });

  // Skip waiting message listener
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  // Activate Event - Clearing old caches
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== CACHE_NAME) return caches.delete(key);
          })
        );
      }).then(() => self.clients.claim())
    );
  });

  // Helper: fetch with strict timeout
  function fetchWithTimeout(request, timeoutMs = 2000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Network timeout')), timeoutMs);
      fetch(request).then(
        (response) => { clearTimeout(timer); resolve(response); },
        (err) => { clearTimeout(timer); reject(err); }
      );
    });
  }

  // Fetch Event - Fast Cache-First with background revalidation, or fast network with 2s timeout
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
      // Fast race: try network with 1500ms timeout, fallback to cache immediately
      event.respondWith(
        fetchWithTimeout(event.request, 1500)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', clone)).catch(() => {});
            }
            return networkResponse;
          })
          .catch(() => {
            return caches.match('/index.html').then((cached) => cached || fetch(event.request));
          })
      );
      return;
    }

    // Static assets (hashed js, css, images): Cache-First for instant loading
    if (url.pathname.startsWith('/assets/') || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.css') || url.pathname.endsWith('.js')) {
      event.respondWith(
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)).catch(() => {});
            }
            return networkResponse;
          });
        })
      );
      return;
    }

    // Default fallback
    event.respondWith(
      fetchWithTimeout(event.request, 2000)
        .catch(() => caches.match(event.request))
    );
  });
}
