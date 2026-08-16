import type { ReactNode } from "react";

interface TopicLayoutShellProps {
  /** Intra-topic outline + relationship graph — becomes a real sidebar only at the lg breakpoint. */
  readonly left: ReactNode;
  /** Main content. */
  readonly center: ReactNode;
  /** Section-aware evidence rail — reflows to a full-width block below center on narrower screens. */
  readonly right: ReactNode;
  /** Mobile/tablet-only substitute for `left` (e.g. jump nav + relationship accordion), hidden at lg. */
  readonly mobileNav?: ReactNode;
}

/**
 * The one place the three-zone contract lives. Below `lg` this collapses to
 * a single stacked column (mobileNav, then center, then right) rather than
 * squeezing the desktop layout down — per the "don't crop the graph onto a
 * phone" requirement.
 */
export function TopicLayoutShell({ left, center, right, mobileNav }: TopicLayoutShellProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-start">
      {mobileNav && <div className="lg:hidden">{mobileNav}</div>}
      <aside className="hidden shrink-0 lg:sticky lg:top-6 lg:block lg:max-h-[calc(100vh-3rem)] lg:w-64 lg:overflow-y-auto">
        {left}
      </aside>
      <main className="min-w-0 flex-1">{center}</main>
      <aside className="shrink-0 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:w-80 lg:overflow-y-auto">
        {right}
      </aside>
    </div>
  );
}
