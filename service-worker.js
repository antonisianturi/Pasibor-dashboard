const CACHE = 'pasibor-cache-v1';
const ASSETS = [
  './', './Dashboard_PASIBOR.html', './manifest.json', './logo.png',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];
self.addEventListener('install', (ev) => {
  ev.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate', (ev) => {
  ev.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  const url = new URL(req.url);
  if (url.pathname.endsWith('/exec') || url.hostname.includes('googleusercontent') || url.hostname.includes('script.google.com')) {
    ev.respondWith(fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(req)));
    return;
  }
  ev.respondWith(caches.match(req).then((cached) => cached || fetch(req).then((res) => {
    if (req.method === 'GET' && res && res.status === 200) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy)).catch(()=>{});
    }
    return res;
  }).catch(() => cached)));
});