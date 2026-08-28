importScripts("t057z/m3m876.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

function skipProxy(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    if (host === "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net") || host === "luminsdk.com" || host.endsWith(".luminsdk.com")) {
      return true;
    }
    return /^\/[a-z]{6,12}\/[A-Za-z0-9_-]{16,}(?:\/|$)/.test(parsed.pathname);
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) return;
  if (_ry4m6d1.shouldRoute(event)) {
    event.respondWith(_ry4m6d1.route(event));
  }
});
