importScripts("ei5wa/0il34b.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_jwajklj.shouldRoute(event)) {
    event.respondWith(_jwajklj.route(event));
  }
});
