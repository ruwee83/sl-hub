const CACHE = 'slhub-site-v2';
const FILES = ['./', './index.html', './style.css', './app.js', './logo.svg', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // වෙනත් site වල requests (radio streams, weather, fonts) cache නොකරයි
  if (url.origin !== self.location.origin) return;
  if (req.destination === 'audio' || req.destination === 'video') return;
  if (req.headers.has('range')) return;

  // ගොනු සහ news data: network-first (අලුත්ම version), offline නම් cache
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
