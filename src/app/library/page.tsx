import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LibraryView } from "@/components/library/LibraryView";
import { StudySetsPanel } from "@/components/library/StudySetsPanel";
import { getStudySetCatalog } from "@/lib/study-catalog";

export const metadata: Metadata = { title: "My Library" };

export default function LibraryPage() {
  const catalog = getStudySetCatalog();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "My Library" }]} />
        <h1 className="text-2xl font-semibold text-ink">My Library</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Everything you&apos;ve bookmarked, saved locally in this browser — nothing is sent to a server or shared
          across devices. No account needed.
        </p>
      </div>
      
      {/* These are client components that never suspend. Wrapping them in a
          Suspense boundary can leave their markup stranded in React's hidden
          streaming container, so they are rendered directly. */}
      <LibraryView />

      <StudySetsPanel catalog={catalog} />
    </div>
  );
}
