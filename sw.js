// Service Worker - sw.js
const CACHE_NAME = "portfolio-v2";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/variables.css",
  "/css/base.css",
  "/css/components.css",
  "/css/sections.css",
  "/css/responsive.css",
  "/js/config.js",
  "/js/projects.js",
  "/js/particles.js",
  "/js/cursor.js",
  "/js/navigation.js",
  "/js/skills.js",
  "/js/form.js",
  "/js/main.js",
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Archivo:wght@300;400;600;800&display=swap",
];

// Install event - cache assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Caching files");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting()),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== CACHE_NAME) {
              console.log("Service Worker: Deleting old cache:", cache);
              return caches.delete(cache);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // For navigation requests (page loads), use network-first to enable pull-to-refresh
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the response for future use
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request) || caches.match("/offline.html");
        }),
    );
  } else {
    // For other requests, use cache-first strategy
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return (
          response ||
          fetch(event.request)
            .then((fetchResponse) => {
              // Don't cache non-GET requests or non-http(s) requests
              if (
                event.request.method !== "GET" ||
                !event.request.url.startsWith("http")
              ) {
                return fetchResponse;
              }

              // Clone the response
              const responseToCache = fetchResponse.clone();

              // Add to cache
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });

              return fetchResponse;
            })
            .catch(() => {
              // Return offline page if available
              if (event.request.destination === "document") {
                return caches.match("/offline.html");
              }
            })
        );
      }),
    );
  }
});

// Handle messages from main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
