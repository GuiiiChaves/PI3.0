
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('cache-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/js/main.js',
          '/logosuaptour.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  