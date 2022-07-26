const cacheName = 'Alura SPA';

const versao = 5;

self.addEventListener('install', function(event){
  event.waitUntil(
      caches.open(cacheName).then(function (cache) {
        cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',
        'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css',
        './assets/styles/style.css',

        './assets/js/menu.js',

        './assets/img/favicon.png',
        './assets/img/banner.webp',
        './assets/img/banner-mobile.webp',
        './assets/img/bem-estar.webp',
        './assets/img/descanso.webp',
        './assets/img/interior-1.webp',
        './assets/img/interior-2.webp',
        './assets/img/interior-3.webp',
        './assets/img/pedra-e-flor.webp',

        './assets/img/pwa/app_icon.png',
        './assets/img/pwa/maskable_icon.png',
        './assets/img/pwa/alura_spa_icone_512.png',

        'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&display=swap',
      ])
    })
  )
return self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
          return cachedResponse || fetch(event.request);
    }
  )
 )
});