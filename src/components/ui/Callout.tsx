import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CalloutTone = "guideline" | "trial" | "caution" | "controversy";

const toneClass: Record<CalloutTone, string> = {
  guideline: "border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200",
  trial: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200",
  caution: "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200",
  controversy: "border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200",
};

const toneLabel: Record<CalloutTone, string> = {
  guideline: "Guideline note",
  trial: "Trial note",
  caution: "Caution",
  controversy: "Controversy",
};

interface CalloutProps {
  readonly tone: CalloutTone;
  readonly children: ReactNode;
}

export function Callout({ tone, children }: CalloutProps) {
  return (
    <div className={cn("rounded-md border px-4 py-3 text-sm leading-relaxed", toneClass[tone])}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide">{toneLabel[tone]}</p>
      {children}
    </div>
  );
}
