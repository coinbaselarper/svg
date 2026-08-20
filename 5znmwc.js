importScripts("pig4x/evnbej.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_3q0qou1.shouldRoute(event)) {
    event.respondWith(_3q0qou1.route(event));
  }
});
