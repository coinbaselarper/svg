importScripts("gg2px/to09g8.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

function skipProxy(url) {
  try {
    const host = new URL(url).hostname;
    return host === "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net") || host === "luminsdk.com" || host.endsWith(".luminsdk.com");
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) return;
  if (_w4v5ahr.shouldRoute(event)) {
    event.respondWith(_w4v5ahr.route(event));
  }
});
