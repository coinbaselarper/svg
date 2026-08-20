importScripts("qqtuc/zvoeto.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_kwzvn4p.shouldRoute(event)) {
    event.respondWith(_kwzvn4p.route(event));
  }
});
