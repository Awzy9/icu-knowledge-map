import Link from "next/link";
import type { Metadata } from "next";
import { getAllPathways } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Clinical Pathways & Workflows" };

export default function PathwaysIndexPage() {
  const pathways = getAllPathways();

  const categories: ReadonlyArray<{
    readonly title: string;
    readonly description: string;
    readonly ids: readonly string[];
  }> = [
    {
      title: "Respiratory & Mechanical Ventilation Workflows",
      description: "Ventilation initiation, lung-protective escalation, prone positioning, and liberation protocols.",
      ids: [
        "mechanical-ventilation-initiation",
        "mechanical-ventilation-liberation",
        "prone-positioning-protocol",
        "respiratory-support-escalation",
        "ards-first-6-hours",
        "difficult-weaning-tracheostomy-workflow",
        "acute-hypoxemia",
      ],
    },
    {
      title: "Hemodynamic & Shock Resuscitation Workflows",
      description: "Initial shock bundling, fluid responsiveness testing, vasopressor/inotrope titration, and refractory escalation.",
      ids: [
        "hemodynamic-resuscitation-workflow",
        "vasopressor-titration-workflow",
        "refractory-shock-escalation",
        "hypotension",
        "shock",
      ],
    },
    {
      title: "Renal, Electrolyte & Acid-Base Workflows",
      description: "Urgent RRT/CRRT indications, prescription, hyperkalemia membrane stabilization, and metabolic acidosis workup.",
      ids: [
        "rrt-crrt-initiation-workflow",
        "hyperkalemia-management-workflow",
        "metabolic-acidosis-evaluation-workflow",
        "aki",
        "metabolic-acidosis",
        "hyperkalemia",
      ],
    },
    {
      title: "Sepsis & Infectious Disease Workflows",
      description: "Surviving Sepsis 1-hour bundle execution, rapid source control, and 48–72h antimicrobial de-escalation.",
      ids: ["sepsis-bundle-workflow", "fever-sepsis"],
    },
    {
      title: "Hemostasis, Transfusion & Coagulopathy Workflows",
      description: "Massive transfusion protocol (MTP), lethal triad reversal, targeted factor antidotes, and bleeding source control.",
      ids: ["massive-hemorrhage-protocol", "bleeding"],
    },
    {
      title: "Sedation, Delirium & Daily ICU Liberation",
      description: "Analgesia-first multimodal pain control, light sedation targeting, paired SAT/SBT, and ABCDEF delirium bundles.",
      ids: ["sedation-analgesia-liberation-workflow"],
    },
    {
      title: "Neurologic Emergency & Neurocritical Workflows",
      description: "Acute herniation osmotherapy, emergent non-contrast CT, status epilepticus cEEG titration, and brain death determination.",
      ids: ["neurologic-deterioration-workflow", "status-epilepticus-workflow", "altered-consciousness"],
    },
    {
      title: "Nutrition Support & Enteral Feeding Workflows",
      description: "Nutritional risk stratification, early enteral feeding advancement, feeding intolerance management, and TPN escalation.",
      ids: ["icu-nutrition-workflow"],
    },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Clinical Pathways" }]} />
        <div className="flex items-center gap-2">
          <span className="inline-block rounded bg-accent-soft px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-accent-strong">
            Clinical Workflows Layer
          </span>
          <span className="text-xs text-ink-faint">· {pathways.length} Structured Processes</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink">Clinical Pathways</h1>
        <p className="max-w-3xl text-sm text-ink-muted leading-relaxed">
          Structured, step-by-step ICU decision workflows — from clinical presentation and initial stabilization
          through diagnostic branching, targeted interventions, and reassessment loops.
          Designed as actionable bedside processes distinct from reference Knowledge Topics and Bedside Presentations.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((cat) => {
          const catPathways = pathways.filter((p) => cat.ids.includes(p.id));
          if (catPathways.length === 0) return null;

          return (
            <section key={cat.title} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 border-b border-border pb-2">
                <h2 className="text-lg font-semibold text-ink">{cat.title}</h2>
                <p className="text-xs text-ink-muted">{cat.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {catPathways.map((pathway) => (
                  <Link
                    key={pathway.id}
                    href={`/pathways/${pathway.slug}`}
                    className="group flex flex-col justify-between rounded-xl border border-border/80 bg-surface p-4 transition-all duration-150 hover:border-accent hover:bg-surface-elevated hover:shadow-xs"
                  >
                    <div>
                      <span className="inline-block rounded bg-surface-sunken px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                        {pathway.startingProblem}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                        {pathway.title}
                      </h3>
                      <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                        {pathway.oneLiner}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-accent">
                      Launch Pathway &rarr;
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
