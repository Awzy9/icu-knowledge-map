import type { Metadata } from "next";
import { MyLibrary } from "@/components/bookmarks/MyLibrary";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "My Library" };

export default function LibraryPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "My Library" }]} />
        <h1 className="text-2xl font-semibold text-ink">My Library</h1>
        <p className="mt-1 text-sm text-ink-muted">
          Everything you&apos;ve bookmarked, saved locally in this browser — nothing is sent to a server or shared
          across devices. No account needed.
        </p>
      </div>
      <MyLibrary />
    </div>
  );
}
