import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StudySessionPlayer } from "@/components/library/StudySessionPlayer";
import { getStudySetCatalog } from "@/lib/study-catalog";

export const metadata: Metadata = { title: "Study Session" };

/**
 * Study sets live in the visitor's browser, so the set id cannot be known at
 * build time. Render a single dynamic shell and resolve the set client-side.
 */
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default async function StudySessionPage({
  params,
}: {
  params: Promise<{ setId: string }>;
}) {
  const { setId } = await params;
  const catalog = getStudySetCatalog();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "My Library", href: "/library" }, { label: "Study session" }]} />
        <h1 className="text-2xl font-semibold text-ink">Study session</h1>
      </div>

      <StudySessionPlayer setId={setId} catalog={catalog} />
    </div>
  );
}
