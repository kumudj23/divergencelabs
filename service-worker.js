self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installed');

  self.skipWaiting();

  e.waitUntil(
    caches.open(precacheName).then()
  )

  }
)

self.addEventListener('fetch', (e) => {
  
});
