importScripts("gk615/gczxn9.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_pepq8tu.shouldRoute(event)) {
    event.respondWith(_pepq8tu.route(event));
  }
});
