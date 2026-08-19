importScripts("p9pz5/x18aj8.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_3yw6pdq.shouldRoute(event)) {
    event.respondWith(_3yw6pdq.route(event));
  }
});
