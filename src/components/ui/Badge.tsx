import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}
