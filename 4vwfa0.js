importScripts("qbjqq/il21ob.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_asvhktc.shouldRoute(event)) {
    event.respondWith(_asvhktc.route(event));
  }
});
