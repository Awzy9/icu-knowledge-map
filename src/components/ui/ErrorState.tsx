"use client";

import Link from "next/link";

interface ErrorStateProps {
  readonly title?: string;
  readonly description?: string;
  readonly reset?: () => void;
}

/** Backs app/error.tsx boundaries — Next.js requires those to be Client Components. */
export function ErrorState({
  title = "Something went wrong",
  description = "An unexpected error occurred while loading this page.",
  reset,
}: ErrorStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-start gap-3 px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Error</p>
      <h1 className="text-xl font-semibold text-ink">{title}</h1>
      <p className="text-sm text-ink-muted">{description}</p>
      <div className="mt-2 flex gap-3">
        {reset && (
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-accent bg-accent-soft px-3 py-1.5 text-sm text-accent-strong"
          >
            Try again
          </button>
        )}
        <Link href="/" className="rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted hover:text-ink">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
