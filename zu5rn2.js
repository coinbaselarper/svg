importScripts("law85/rimdtn.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_zk5yjsp.shouldRoute(event)) {
    event.respondWith(_zk5yjsp.route(event));
  }
});
