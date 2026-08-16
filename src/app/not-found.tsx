import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or hasn&apos;t been written yet.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm text-accent hover:text-accent-strong">
        Back to Home
      </Link>
    </div>
  );
}
