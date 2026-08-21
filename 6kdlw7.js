importScripts("j7o88/c9jtw5.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_l1nvekt.shouldRoute(event)) {
    event.respondWith(_l1nvekt.route(event));
  }
});
