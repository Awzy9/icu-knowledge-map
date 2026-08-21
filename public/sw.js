/**
 * ICU Knowledge Map — Service Worker (Plain JavaScript - Version 4)
 *
 * Resilient Precache Strategy:
 * - Pre-caches app shell, learning hubs, and all 47 medication guides.
 * - Uses Promise.allSettled per-URL caching so a single failed route never rejects the whole install.
 * - Network-first (with cache fallback) for /medications, so deployed library changes are visible immediately when online.
 * - Stale-while-revalidate for other HTML and app bundles.
 * - Cache-first for static assets (fonts, icons, compiled JS/CSS).
 * - Friendly offline fallback for external literature links (PubMed, DOI, journals).
 *
 * NOTE: PRECACHE_URLS' medication routes are manually synchronized with
 * src/content/medications/index.ts (public/sw.js is plain JS and cannot import
 * the TypeScript registry at build time). When medications are added or removed,
 * update this list to match and bump CACHE_VERSION.
 */

const CACHE_VERSION = "icu-km-v4";
const APP_SHELL_CACHE = "icu-km-core-v4";
const CONTENT_CACHE = "icu-km-content-v4";
const STATIC_CACHE = "icu-km-static-v4";
const CURRENT_CACHES = [CACHE_VERSION, APP_SHELL_CACHE, CONTENT_CACHE, STATIC_CACHE];

/** Core URLs guaranteed for offline ICU education */
const PRECACHE_URLS = [
  "/",
  "/offline",
  "/learn",
  "/learn/clinical-reasoning",
  "/learn/medication-challenges",
  "/learn/daily-challenge",
  "/learn/physiology-compare",
  "/progress",
  "/library",
  "/medications",
  "/topics",
  "/pathways",
  "/problems",
  "/physiology",
  "/calculators",
  "/flashcards",
  "/questions",
  "/sources",
  "/about",
  // All 47 Individual Medications — keep synchronized with src/content/medications/index.ts
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
            // Log in dev without throwing
          });
      });
      return Promise.allSettled(cachePromises);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// Clean up previous cache versions — delete any icu-km- cache that isn't one of the current version's caches
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.startsWith("icu-km-") && CURRENT_CACHES.indexOf(key) === -1;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Listen for explicit skip waiting request from UI update prompt
self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // External reference domains (PubMed, NEJM, DOI) — network only with friendly offline notice
  if (EXTERNAL_DOMAINS.some(function (domain) { return url.hostname.includes(domain); })) {
    event.respondWith(
      fetch(event.request).catch(function () {
        return new Response(
          '<!DOCTYPE html>' +
          '<html lang="en">' +
          '<head>' +
          '  <meta charset="utf-8">' +
          '  <meta name="viewport" content="width=device-width,initial-scale=1">' +
          '  <title>Offline Reference — ICU Knowledge Map</title>' +
          '  <style>' +
          '    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; color: #0f172a; padding: 2rem; text-align: center; }' +
          '    .card { background: white; max-width: 480px; margin: 4rem auto; padding: 2rem; border-radius: 1rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }' +
          '    h2 { margin-top: 0; color: #1e293b; font-size: 1.25rem; }' +
          '    p { font-size: 0.875rem; color: #64748b; line-height: 1.5; }' +
          '    a { display: inline-block; margin-top: 1rem; padding: 0.5rem 1.25rem; background: #2563eb; color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 500; font-size: 0.875rem; }' +
          '  </style>' +
          '</head>' +
          '<body>' +
          '  <div class="card">' +
          '    <h2>Internet Connection Required</h2>' +
          '    <p>This external journal reference (<em>' + url.hostname + '</em>) requires an active internet connection.</p>' +
          '    <p>Core ICU Knowledge Map content and precached medication guides remain available offline. Previously visited content may also be available.</p>' +
          '    <a href="javascript:history.back()">Go Back</a>' +
          '  </div>' +
          '</body>' +
          '</html>',
          { headers: { "Content-Type": "text/html" }, status: 503 }
        );
      })
    );
    return;
  }

  // Skip non-same-origin requests
  if (url.origin !== self.location.origin) return;

  // Static assets (Next.js bundles, SVGs, fonts, icons) — Cache-First
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".ico")
  ) {
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

  // /medications library index — Network-First so a fresh deployment (new/changed
  // medication count) is visible immediately when online; falls back to the
  // cached copy only if the network request fails (offline).
  if (url.pathname === "/medications") {
    event.respondWith(
      fetch(event.request)
        .then(function (response) {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CONTENT_CACHE).then(function (cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(function () {
          return caches.match(event.request).then(function (cached) {
            return cached || caches.match("/offline");
          });
        })
    );
    return;
  }

  // HTML Navigation Requests — Stale-While-Revalidate with precache fallback
  if (
    event.request.mode === "navigate" ||
    (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html")) ||
    url.pathname === "/" ||
    !url.pathname.includes(".")
  ) {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        const networkFetch = fetch(event.request)
          .then(function (response) {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CONTENT_CACHE).then(function (cache) {
                cache.put(event.request, clone);
              });
            }
            return response;
          })
          .catch(function () {
            if (cached) return cached;
            return caches.match("/offline");
          });

        return cached || networkFetch;
      })
    );
    return;
  }

  // Generic app shell assets — Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      const networkFetch = fetch(event.request).then(function (response) {
        if (response.ok) {
          const clone = response.clone();
          caches.open(APP_SHELL_CACHE).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});
