importScripts("1yp2l/nkdqej.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_n925etw.shouldRoute(event)) {
    event.respondWith(_n925etw.route(event));
  }
});
