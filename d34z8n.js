importScripts("f7757/8g3hhv.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_xvfall1.shouldRoute(event)) {
    event.respondWith(_xvfall1.route(event));
  }
});
