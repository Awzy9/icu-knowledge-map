import Link from "next/link";
import type { Metadata } from "next";
import { getAllPhysiologyConcepts } from "@/registry";
import type { PhysiologyConcept, PhysiologySystem } from "@/content-types";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { physiologySystemLabel } from "@/lib/physiology-style";

export const metadata: Metadata = { title: "Physiology" };

const SYSTEM_ORDER: readonly PhysiologySystem[] = ["respiratory", "cardiovascular", "renal", "acid-base"];

export default function PhysiologyIndexPage() {
  const concepts = getAllPhysiologyConcepts();
  const bySystem = new Map<PhysiologySystem, PhysiologyConcept[]>();
  for (const concept of concepts) {
    const group = bySystem.get(concept.system) ?? [];
    group.push(concept);
    bySystem.set(concept.system, group);
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Physiology" }]} />
        <h1 className="text-2xl font-semibold text-ink">ICU Physiology Library</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Cross-cutting physiology concepts that multiple topics depend on, kept in one place and
          cross-linked to each other instead of being re-explained inside every topic that touches
          them. Several include a lightweight, deterministic interactive visualization.
        </p>
      </div>

      {SYSTEM_ORDER.map((system) => {
        const group = bySystem.get(system);
        if (!group || group.length === 0) return null;
        return (
          <div key={system} className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">{physiologySystemLabel[system]}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.map((concept) => (
                <Card key={concept.id}>
                  <Link href={`/physiology/${concept.slug}`} className="text-sm font-semibold text-ink hover:text-accent">
                    {concept.title}
                  </Link>
                  <p className="mt-1 text-sm text-ink-muted">{concept.summary}</p>
                  {concept.visual && <p className="mt-2 text-xs text-accent">Interactive visual</p>}
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
