import Link from "next/link";

interface EmptyStateProps {
  readonly title: string;
  readonly description: string;
  readonly action?: { label: string; href: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-md border border-dashed border-border bg-surface px-5 py-8">
      <p className="text-sm font-medium text-ink">{title}</p>
      <p className="max-w-md text-sm text-ink-muted">{description}</p>
      {action && (
        <Link href={action.href} className="mt-1 text-sm text-accent hover:text-accent-strong">
          {action.label} →
        </Link>
      )}
    </div>
  );
}
