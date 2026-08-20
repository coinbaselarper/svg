importScripts("gqvxu/zfeie7.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_yjodm1o.shouldRoute(event)) {
    event.respondWith(_yjodm1o.route(event));
  }
});
