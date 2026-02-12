self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("troll-cache").then(cache => {
      return cache.addAll(["troll_multi_levels.html"]);
    })
  );
});