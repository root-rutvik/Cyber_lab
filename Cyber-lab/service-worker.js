const CACHE_NAME = "cyber-lab-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./tools.html",
  "./labs.html",
  "./profile.html",

  "./assets/css/base.css",
  "./assets/css/layout.css",
  "./assets/css/components.css",
  "./assets/css/dashboard.css",
  "./assets/css/tools.css",
  "./assets/css/responsive.css",

  "./assets/js/state.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
