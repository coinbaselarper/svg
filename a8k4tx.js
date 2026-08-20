importScripts("fblcd/fw7t1x.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_ihzmuqm.shouldRoute(event)) {
    event.respondWith(_ihzmuqm.route(event));
  }
});
