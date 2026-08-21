importScripts("1nwfc/1erg7z.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_hskwau8.shouldRoute(event)) {
    event.respondWith(_hskwau8.route(event));
  }
});
