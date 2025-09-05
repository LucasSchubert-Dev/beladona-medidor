self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("beladona").then(cache => {
      return cache.addAll(["/", "/index.html", "/style.css", "/assets/logo.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
