/* Stories service worker: app shell offline, hashed assets cache-first, story media on request. */
const VERSION = 'v1';
const SHELL_CACHE = `stories-shell-${VERSION}`;
const ASSET_CACHE = `stories-assets-${VERSION}`;
const MEDIA_CACHE = `stories-media-${VERSION}`;
const MEDIA_HOSTS = ['firebasestorage.googleapis.com', 'storage.googleapis.com'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(cache => cache.addAll(['/', '/index.html', '/manifest.webmanifest'])).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('stories-') && ![SHELL_CACHE, ASSET_CACHE, MEDIA_CACHE].includes(key)).map(key => caches.delete(key)),
    )).then(() => self.clients.claim()),
  );
});

const isMediaRequest = url => MEDIA_HOSTS.includes(url.hostname);

// Navigations: the network first, so a deploy shows up; the cached shell when offline.
const handleNavigation = async request => {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(SHELL_CACHE);
      cache.put('/index.html', response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(SHELL_CACHE);
    return (await cache.match('/index.html')) || (await cache.match('/')) || Response.error();
  }
};

// Hashed Vite assets never change under the same name: cache first.
const handleAsset = async request => {
  const cache = await caches.open(ASSET_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
};

// Story images and audio: serve what "Save this book offline" stored, or what was seen before;
// otherwise the network, remembering complete responses for next time.
const handleMedia = async request => {
  const cache = await caches.open(MEDIA_CACHE);
  const cached = await cache.match(request.url, { ignoreVary: true });
  if (cached) return cached;
  const response = await fetch(request);
  const complete = response.status === 200 || response.type === 'opaque';
  if (complete && !request.headers.has('range')) cache.put(request.url, response.clone());
  return response;
};

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }
  if (url.origin === self.location.origin) {
    if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/icons/') || /\.(ttf|woff2?|webp|png|svg|css|js)$/.test(url.pathname)) {
      event.respondWith(handleAsset(request));
    }
    return;
  }
  if (isMediaRequest(url)) {
    event.respondWith(handleMedia(request));
  }
});

// "Save this book offline": fetch every media URL of the book that is not stored yet.
self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type !== 'cache-book' || !Array.isArray(data.urls)) return;
  const reply = payload => event.source && event.source.postMessage({ type: 'cache-book-result', id: data.id, ...payload });
  event.waitUntil((async () => {
    const cache = await caches.open(MEDIA_CACHE);
    let stored = 0;
    let failed = 0;
    for (const url of data.urls) {
      try {
        if (await cache.match(url, { ignoreVary: true })) { stored += 1; continue; }
        // A CORS response can be checked for success; when the bucket does not allow CORS, an
        // opaque response is stored as is (media elements can still play it).
        let response = await fetch(url, { mode: 'cors' }).catch(() => null);
        if (response && !response.ok) { failed += 1; continue; }
        if (!response) response = await fetch(url, { mode: 'no-cors' });
        if (response.status === 200 || response.type === 'opaque') {
          await cache.put(url, response);
          stored += 1;
        } else {
          failed += 1;
        }
      } catch {
        failed += 1;
      }
    }
    reply({ stored, failed, total: data.urls.length });
  })());
});
