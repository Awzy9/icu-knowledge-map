import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-muted sm:px-6">
        <p className="max-w-3xl leading-relaxed">
          ICU Knowledge Map is an educational reference for ICU learners and clinicians. It is not
          a substitute for clinical judgment, institutional protocols, or the primary literature it
          summarizes.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="transition-colors hover:text-accent">
            About &amp; Editorial Policy
          </Link>
          <Link href="/sources" className="transition-colors hover:text-accent">
            Sources
          </Link>
        </div>
      </div>
    </footer>
  );
}
