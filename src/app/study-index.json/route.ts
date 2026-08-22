import { getStudyNextData } from "@/lib/study-next-data";

/**
 * Static lookup tables for the Study Next panel (question→topic, case→system,
 * topic→system, …).
 *
 * Served as its own JSON file rather than passed as a prop so the /progress
 * RSC payload stays small — same rationale as /search-index.json.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(getStudyNextData()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
