importScripts("o3mkd/c3m9kg.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_amyax8e.shouldRoute(event)) {
    event.respondWith(_amyax8e.route(event));
  }
});
