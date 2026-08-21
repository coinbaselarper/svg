importScripts("flr0a/vt3qv0.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_65ndu1u.shouldRoute(event)) {
    event.respondWith(_65ndu1u.route(event));
  }
});
