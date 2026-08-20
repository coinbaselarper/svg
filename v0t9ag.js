importScripts("v0ztx/x93e05.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_2o06ry2.shouldRoute(event)) {
    event.respondWith(_2o06ry2.route(event));
  }
});
