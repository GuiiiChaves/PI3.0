self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v1').then(function(cache) {
      return cache.addAll([
        '/', // Certifique-se de que sua página inicial está aqui se for "/index.html".
        '/index.html',
        '/css/style.css',
        '/js/main.js',
        '/logosuaptour.png'
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

  
