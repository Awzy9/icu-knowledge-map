import Link from "next/link";
import type { Metadata } from "next";
import { getAllClinicalProblems } from "@/registry";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Clinical Problems" };

const categoryLabels: Record<string, { title: string; desc: string }> = {
  respiratory: {
    title: "Respiratory Problems",
    desc: "Acute hypoxemia, ventilatory failure, high airway pressures, severe dyspnea, and hemoptysis.",
  },
  hemodynamic: {
    title: "Hemodynamic & Cardiovascular Problems",
    desc: "Undifferentiated shock, refractory hypotension, tachyarrhythmias, bradycardia, and hypertensive emergencies.",
  },
  neurologic: {
    title: "Neurologic Problems",
    desc: "Acute altered mental status, new focal deficits, status epilepticus, and coma/brainstem failure.",
  },
  "renal-metabolic": {
    title: "Renal & Metabolic Problems",
    desc: "Acute oliguria, metabolic acidosis, metabolic alkalosis, severe hyponatremia, hypernatremia, and hyperkalemia.",
  },
  infectious: {
    title: "Infectious Disease Problems",
    desc: "New ICU fever, suspected sepsis/septic shock, and persistent fever despite antimicrobial therapy.",
  },
  "hematology-gi": {
    title: "Hematology & GI Problems",
    desc: "Acute blood loss/falling hemoglobin and acute thrombocytopenia/coagulopathy.",
  },
};

const categoryOrder = [
  "respiratory",
  "hemodynamic",
  "neurologic",
  "renal-metabolic",
  "infectious",
  "hematology-gi",
] as const;

export default function ProblemsIndexPage() {
  const problems = getAllClinicalProblems();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Clinical Problems" }]} />
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-semibold text-ink">Bedside Clinical Problems</h1>
          <span className="text-sm font-medium text-ink-muted">{problems.length} Problems</span>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          A presentation-first entry point into the ICU knowledge map — begin from what you observe
          at the bedside (e.g., sudden hypoxemia, acute oliguria) to navigate algorithmic differentials
          and evidence-based stabilization protocols.
        </p>
      </div>

      {categoryOrder.map((catKey) => {
        const catProblems = problems.filter((p) => (p.category ?? "respiratory") === catKey);
        if (catProblems.length === 0) return null;
        const meta = categoryLabels[catKey];

        return (
          <section key={catKey} className="flex flex-col gap-3">
            <div className="border-b border-border/60 pb-2">
              <h2 className="text-lg font-semibold text-ink">{meta.title}</h2>
              <p className="text-xs text-ink-muted">{meta.desc}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {catProblems.map((problem) => (
                <Card key={problem.id} className="flex flex-col justify-between hover:border-accent/40 transition-colors">
                  <div>
                    <Link
                      href={`/problems/${problem.slug}`}
                      className="text-sm font-semibold text-ink hover:text-accent focus:outline-none"
                    >
                      {problem.title}
                    </Link>
                    <p className="mt-1 text-xs text-ink-muted leading-relaxed line-clamp-3">
                      {problem.oneLiner}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40 text-[11px] text-ink-faint">
                    <span>{problem.relatedTopicIds.length} Linked Topics</span>
                    <Link
                      href={`/problems/${problem.slug}`}
                      className="font-medium text-accent hover:text-accent-strong"
                    >
                      View Protocol &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
