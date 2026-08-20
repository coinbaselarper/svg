importScripts("h84ra/7n5dog.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_1nxdt1f.shouldRoute(event)) {
    event.respondWith(_1nxdt1f.route(event));
  }
});
