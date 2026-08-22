/**
 * ICU Knowledge Map — Service Worker (Plain JavaScript - Version 6)
 *
 * Resilient Precache Strategy:
 * - Pre-caches app shell, learning hubs, all 48 medication guides, and the search index.
 * - Uses Promise.allSettled per-URL caching so a single failed route never rejects the whole install.
 * - Network-first for /medications and /search-index.json so a new deployment is
 *   visible immediately when online, with cache fallback when offline.
 * - Stale-while-revalidate for other HTML and app bundles.
 * - Cache-first for static assets (fonts, icons, compiled JS/CSS).
 * - Friendly offline fallback for external literature links (PubMed, DOI, journals).
 */

const CACHE_VERSION = "icu-km-v6";
const APP_SHELL_CACHE = "icu-km-core-v6";
const CONTENT_CACHE = "icu-km-content-v6";
const STATIC_CACHE = "icu-km-static-v6";

/** Core URLs guaranteed for offline ICU education */
const PRECACHE_URLS = [
  "/",
  "/offline",
  "/learn",
  "/learn/clinical-reasoning",
  "/learn/rapid-decisions",
  "/learn/find-the-error",
  "/learn/case-of-the-day",
  "/learn/medication-challenges",
  "/learn/daily-challenge",
  "/learn/physiology-compare",
  "/learn/physiology-playground",
  "/compare",
  "/progress",
  "/library",
  // Search index — precached so global search keeps working offline.
  "/search-index.json",
  "/medications",
  "/medications/steroids-in-icu",
  "/topics",
  "/pathways",
  "/problems",
  "/physiology",
  "/calculators",
  "/flashcards",
  "/questions",
  "/sources",
  "/about",
  // All 48 Individual Medications
  "/medications/acetazolamide",
  "/medications/adenosine",
  "/medications/amikacin",
  "/medications/amiodarone",
  "/medications/anidulafungin",
  "/medications/calcium-gluconate",
  "/medications/cefepime",
  "/medications/ceftriaxone",
  "/medications/cisatracurium",
  "/medications/clevidipine",
  "/medications/daptomycin",
  "/medications/dexamethasone",
  "/medications/dexmedetomidine",
  "/medications/dobutamine",
  "/medications/dopamine",
  "/medications/enoxaparin",
  "/medications/epinephrine",
  "/medications/ertapenem",
  "/medications/esmolol",
  "/medications/fentanyl",
  "/medications/furosemide",
  "/medications/hydrocortisone",
  "/medications/hydromorphone",
  "/medications/ketamine",
  "/medications/labetalol",
  "/medications/linezolid",
  "/medications/liposomal-amphotericin-b",
  "/medications/magnesium-sulfate",
  "/medications/meropenem",
  "/medications/methylprednisolone",
  "/medications/metronidazole",
  "/medications/midazolam",
  "/medications/milrinone",
  "/medications/nicardipine",
  "/medications/nitroglycerin",
  "/medications/nitroprusside",
  "/medications/norepinephrine",
  "/medications/phenylephrine",
  "/medications/piperacillin-tazobactam",
  "/medications/propofol",
  "/medications/regular-insulin-iv",
  "/medications/rocuronium",
  "/medications/sodium-bicarbonate",
  "/medications/succinylcholine",
  "/medications/tmp-smx",
  "/medications/unfractionated-heparin",
  "/medications/vancomycin",
  "/medications/vasopressin",
];

/** External literature and reference domains */
const EXTERNAL_DOMAINS = [
  "pubmed.ncbi.nlm.nih.gov",
  "doi.org",
  "dx.doi.org",
  "scholar.google.com",
  "www.nejm.org",
  "jamanetwork.com",
  "journals.lww.com",
  "www.thelancet.com",
  "ccforum.biomedcentral.com",
];

// Resilient install: cache each URL individually so 1 failure doesn't abort the rest
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then(function (cache) {
      const cachePromises = PRECACHE_URLS.map(function (url) {
        return fetch(url, { cache: "no-cache" })
          .then(function (response) {
            if (response.ok) {
              return cache.put(url, response);
            }
          })
          .catch(function () {
            // Ignore individual fetch errors during install so offline worker installs cleanly
          });
      });
      return Promise.allSettled(cachePromises);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// Clean up stale caches on activate
self.addEventListener("activate", function (event) {
  const currentCaches = [APP_SHELL_CACHE, CONTENT_CACHE, STATIC_CACHE];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName.startsWith("icu-km-") && !currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Fetch handler with stale-while-revalidate for HTML, cache-first for static
self.addEventListener("fetch", function (event) {
  const url = new URL(event.request.url);

  // Ignore non-GET requests
  if (event.request.method !== "GET") return;

  // Handle external literature domains
  if (EXTERNAL_DOMAINS.some(function (domain) { return url.hostname.includes(domain); })) {
    event.respondWith(
      fetch(event.request).catch(function () {
        return new Response(
          "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Offline Reference</title><style>body{font-family:sans-serif;padding:2rem;text-align:center;color:#333}h1{font-size:1.5rem}p{color:#666}</style></head><body><h1>External Reference Offline</h1><p>You are viewing this ICU knowledge base offline. This journal/guideline article requires an active internet connection.</p><p><a href='javascript:history.back()'>&larr; Return to ICU Map</a></p></body></html>",
          { headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      })
    );
    return;
  }

  // Next.js static chunks / assets -> Cache-first
  if (url.pathname.startsWith("/_next/static/") || url.pathname.match(/\.(js|css|woff2?|png|jpg|svg|ico)$/)) {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        return fetch(event.request).then(function (response) {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then(function (cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Rapidly-changing resources -> Network-first with cache fallback.
  // These are the things that go stale visibly after a deploy: the medication
  // library index (its count/contents change) and the search index itself.
  // Online users always get the newest deployed copy; offline users still get
  // the cached one.
  if (url.pathname === "/medications" || url.pathname === "/search-index.json") {
    event.respondWith(
      fetch(event.request)
        .then(function (networkResponse) {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CONTENT_CACHE).then(function (cache) {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        })
        .catch(function () {
          return caches.match(event.request).then(function (cached) {
            if (cached) return cached;
            if (event.request.mode === "navigate") return caches.match("/offline");
            return undefined;
          });
        })
    );
    return;
  }

  // App routes & pages -> Stale-while-revalidate with offline fallback
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      const fetchPromise = fetch(event.request)
        .then(function (networkResponse) {
          if (networkResponse && networkResponse.ok) {
            const clone = networkResponse.clone();
            caches.open(CONTENT_CACHE).then(function (cache) {
              cache.put(event.request, clone);
            });
          }
          return networkResponse;
        })
        .catch(function () {
          if (cached) return cached;
          if (event.request.mode === "navigate") {
            return caches.match("/offline");
          }
        });

      return cached || fetchPromise;
    })
  );
});
