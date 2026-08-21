import type { Metadata } from "next";
import { getAllMedications } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicationLibraryBrowser } from "@/components/medications/MedicationLibraryBrowser";
import { DrugByPathogenVisual } from "@/components/medications/DrugByPathogenVisual";
import { ComparisonMatrix } from "@/components/medications/ComparisonMatrix";
import { SiteMattersPenetration } from "@/components/medications/SiteMattersPenetration";

export const metadata: Metadata = {
  title: "ICU Medications Library | 47 Core Pharmacotherapy Modules",
  description: "Comprehensive critical care pharmacology reference with 47 detailed medication pages, visual mechanisms, spectrum diagrams, PK/PD parameters, dosing protocols, and evidence traceability.",
};

export default function MedicationsPage() {
  const medications = getAllMedications();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Breadcrumbs items={[{ label: "Medications Library" }]} />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink">ICU Medications Library</h1>
            <p className="mt-1 text-sm text-ink-muted max-w-3xl">
              47 complete critical care pharmacotherapy profiles built to the highest medical depth — incorporating visual target mechanisms, spectrum visualizers, PK/PD dynamics, organ failure dosing, stewardship pearls, and claim-level citations.
            </p>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block">Library Standard</span>
            <span className="text-lg font-black text-ink">47 Complete Pages</span>
          </div>
        </div>
      </div>

      {/* Educational Visual Frameworks */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink flex items-center gap-2">
          <span>🧠</span> ICU Educational & Spectrum Frameworks
        </h2>
        <DrugByPathogenVisual />
        <ComparisonMatrix />
        <SiteMattersPenetration />
      </section>

      {/* Medications Grid */}
      <section className="space-y-6">
        <MedicationLibraryBrowser medications={medications} />
      </section>
    </div>
  );
}
