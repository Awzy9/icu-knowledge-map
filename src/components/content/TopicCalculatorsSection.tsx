import Link from "next/link";
import type { Calculator } from "@/content-types";

interface TopicCalculatorsSectionProps {
  readonly calculators: readonly Calculator[];
}

export function TopicCalculatorsSection({ calculators }: TopicCalculatorsSectionProps) {
  if (calculators.length === 0) return null;

  return (
    <section id="calculators" className="my-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 scroll-mt-20">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Bedside Decision Support
          </span>
        </div>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          Clinical Calculators ({calculators.length})
        </h2>
        <p className="text-sm text-ink-muted">
          Formula-based ICU calculators to guide severity stratification and therapeutic titration.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc) => (
          <Link
            key={calc.id}
            href={`/calculators/${calc.id}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-emerald-500 hover:shadow-md"
          >
            <div>
              <span className="inline-block rounded bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {calc.category}
              </span>
              <h3 className="mt-2.5 text-base font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {calc.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed line-clamp-2">
                {calc.description}
              </p>
              {calc.formula && (
                <div className="mt-3 rounded bg-surface-muted/60 px-2.5 py-1 text-[11px] font-mono text-ink-muted">
                  {calc.formula}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
              <span>Open Calculator</span>
              <span aria-hidden>&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
