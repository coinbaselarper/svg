importScripts("x8b15/9gjnnr.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_82kdzdl.shouldRoute(event)) {
    event.respondWith(_82kdzdl.route(event));
  }
});
