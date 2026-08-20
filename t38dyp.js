importScripts("0dfp4/s47sln.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_6a3bw3a.shouldRoute(event)) {
    event.respondWith(_6a3bw3a.route(event));
  }
});
