import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TagProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/** Plain-text label, lighter weight than Badge — for metadata like dates or status, not evidence tiers. */
export function Tag({ children, className }: TagProps) {
  return (
    <span className={cn("text-xs uppercase tracking-wide text-ink-faint", className)}>
      {children}
    </span>
  );
}
