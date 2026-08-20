importScripts("p8wat/d9kebo.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_h3rl80e.shouldRoute(event)) {
    event.respondWith(_h3rl80e.route(event));
  }
});
