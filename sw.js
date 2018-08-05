'use strict';

var cacheName = "bca_cache_26";

var cacheFiles = [
	'/',
	'/styles/general_style.css',
	'/index.html',
    'pages/offline_page.html',
	'/scripts/main.js',
    '/scripts/localforage.min.js',
	'/scripts/offline_renderer.js',
	'/assets/bca-logo.png',
	'/assets/homescreen_icon/icon-128x128.png',
	'/assets/homescreen_icon/icon-144x144.png',
	'/assets/homescreen_icon/icon-152x152.png',
	'/assets/homescreen_icon/icon-192x192.png',
	'/assets/homescreen_icon/icon-256x256.png',
	'/assets/homescreen_icon/icon-512x512.png'
]

/*'/assets/carousel_img1.png',
  '/assets/carousel_img2.png',
  '/assets/carousel_img3.png',
  '/assets/promo_img1.png',
  '/assets/promo_img2.png',
  '/assets/promo_img3.png',*/

/*'pages/promo1_page.html',
  'pages/promo2_page.html',
  'pages/promo3_page.html',*/

console.log('Service Worker Started', self);

self.addEventListener('install', function(e) {
 console.log('[ServiceWorker] Install');
  e.waitUntil(
        Promise.all([caches.open(cacheName) ,self.skipWaiting()]).then(function(storage){
            var static_cache = storage[0];
            return Promise.all([static_cache.addAll(cacheFiles)]);
        })
    );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch reuqest url', e.request.url);
  console.log('[ServiceWorker] Fetch reuqest', e.request);
  e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});