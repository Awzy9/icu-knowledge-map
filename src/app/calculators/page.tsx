import Link from "next/link";
import type { Metadata } from "next";
import { getAllCalculators } from "@/registry";
import type { Calculator, CalculatorCategory } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { calculatorCategoryLabel } from "@/lib/calculator-style";

export const metadata: Metadata = { title: "Calculators" };

const CATEGORY_ORDER: readonly CalculatorCategory[] = ["respiratory", "hemodynamics", "acid-base", "renal", "electrolytes"];

export default function CalculatorsIndexPage() {
  const calculators = getAllCalculators();
  const byCategory = new Map<CalculatorCategory, Calculator[]>();
  for (const calculator of calculators) {
    const group = byCategory.get(calculator.category) ?? [];
    group.push(calculator);
    byCategory.set(calculator.category, group);
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Calculators" }]} />
        <h1 className="text-2xl font-semibold text-ink">Calculators</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Formula-based ICU calculations — every result is computed locally in your browser, with no
          network calls and no patient data ever transmitted anywhere. Open a calculator for its full
          formula, interpretation, limitations, and references.
        </p>
      </div>

      {CATEGORY_ORDER.map((category) => {
        const group = byCategory.get(category);
        if (!group || group.length === 0) return null;
        return (
          <div key={category} className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">{calculatorCategoryLabel[category]}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((calculator) => (
                <Card key={calculator.id}>
                  <Link href={`/calculators/${calculator.id}`} className="text-sm font-semibold text-ink hover:text-accent">
                    {calculator.title}
                  </Link>
                  <p className="mt-1 text-sm text-ink-muted">{calculator.description}</p>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
