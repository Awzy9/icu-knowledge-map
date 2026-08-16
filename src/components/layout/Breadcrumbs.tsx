import Link from "next/link";

export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

interface BreadcrumbsProps {
  readonly items: readonly BreadcrumbItem[];
}

/** Explicit trail per page rather than pathname-parsed — simpler and correct for a small set of well-known page shapes. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-faint">
      <Link href="/" className="transition-colors hover:text-ink">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span aria-hidden>/</span>
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="truncate text-ink-muted" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
