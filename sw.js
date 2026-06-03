// Minimaler Service Worker fuer PWA-Installierbarkeit
// Kein Caching - Updates kommen sofort an, iOS-freundlich
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Pass-through: kein respondWith() -> Browser holt direkt aus dem Netz
self.addEventListener('fetch', (e) => {
  // bewusst leer
});
