import type { ReactNode } from "react";

interface TooltipProps {
  readonly label: string;
  readonly children: ReactNode;
}

/** CSS-only hover tooltip (no JS) — fine for supplementary labels, not for content essential to comprehension. */
export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-56 -translate-x-1/2 rounded-md bg-ink px-2.5 py-1.5 text-xs text-canvas opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}
