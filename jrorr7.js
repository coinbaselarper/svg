importScripts("m3wfo/wra6sn.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_tsbq168.shouldRoute(event)) {
    event.respondWith(_tsbq168.route(event));
  }
});
