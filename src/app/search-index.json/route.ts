import { getSearchIndex } from "@/registry";

/**
 * Static search index endpoint.
 *
 * Previously the full index was embedded in SiteHeader, which serialized the
 * entire knowledge base into the payload of EVERY page. Serving it from a
 * single static JSON file instead means:
 *  - pages ship without the index,
 *  - the browser fetches it once, on first search, and caches it,
 *  - the service worker can precache it so search keeps working offline.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(getSearchIndex()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
