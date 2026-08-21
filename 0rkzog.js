importScripts("c3pr4/iivwd6.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_h1tjnbd.shouldRoute(event)) {
    event.respondWith(_h1tjnbd.route(event));
  }
});
