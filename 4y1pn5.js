importScripts("9lhvr/wdjlhx.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_m60hkfq.shouldRoute(event)) {
    event.respondWith(_m60hkfq.route(event));
  }
});
