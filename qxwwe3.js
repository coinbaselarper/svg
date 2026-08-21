importScripts("gaxe4/zj6jno.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_mk1qryp.shouldRoute(event)) {
    event.respondWith(_mk1qryp.route(event));
  }
});
