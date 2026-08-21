importScripts("esnxh/f66dv5.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_vjbt22a.shouldRoute(event)) {
    event.respondWith(_vjbt22a.route(event));
  }
});
