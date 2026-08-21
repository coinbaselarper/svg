importScripts("25c3u/drokmh.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_092vq42.shouldRoute(event)) {
    event.respondWith(_092vq42.route(event));
  }
});
