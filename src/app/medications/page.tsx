import type { Metadata } from "next";
import Link from "next/link";
import { getAllMedications } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicationLibraryBrowser } from "@/components/medications/MedicationLibraryBrowser";
import { DrugByPathogenVisual } from "@/components/medications/DrugByPathogenVisual";
import { ComparisonMatrix } from "@/components/medications/ComparisonMatrix";
import { SiteMattersPenetration } from "@/components/medications/SiteMattersPenetration";

export const metadata: Metadata = {
  title: "ICU Medications Library | 48 Core Pharmacotherapy Modules",
  description: "Comprehensive critical care pharmacology reference with 48 detailed medication pages, visual mechanisms, spectrum diagrams, PK/PD parameters, dosing protocols, and evidence traceability.",
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
              {medications.length} complete critical care pharmacotherapy profiles built to the highest medical depth — incorporating visual target mechanisms, spectrum visualizers, PK/PD dynamics, organ failure dosing, stewardship pearls, and claim-level citations.
            </p>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-2 text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block">Library Standard</span>
            <span className="text-lg font-black text-ink">{medications.length} Complete Pages</span>
          </div>
        </div>
      </div>

      {/* Featured Educational Deep-Dive Banner */}
      <Link
        href="/medications/steroids-in-icu"
        className="flex items-center justify-between gap-4 rounded-xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/5 p-5 hover:border-amber-500/60 transition-all group"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">💊</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                Special Masterclass
              </span>
              <span className="text-xs text-ink-muted">10 Syndromes &bull; Potency &bull; Tapering</span>
            </div>
            <h2 className="text-lg font-bold text-ink mt-1 group-hover:text-primary transition-colors">
              Steroids in the ICU: Which? When? Why?
            </h2>
            <p className="text-xs text-ink-muted mt-0.5 max-w-2xl">
              Comprehensive interactive comparison of Hydrocortisone vs. Methylprednisolone vs. Dexamethasone with relative potency curves, genomic cascade visualizer, and adverse effect maps.
            </p>
          </div>
        </div>
        <div className="shrink-0 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
          Explore Masterclass &rarr;
        </div>
      </Link>

      {/* Educational Visual Frameworks */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink flex items-center gap-2">
          <span>🧠</span> ICU Educational &amp; Spectrum Frameworks
        </h2>
        <DrugByPathogenVisual />
        <ComparisonMatrix />
        <SiteMattersPenetration />
      </section>

      {/* Dynamic Medications Grid & Filter Browser */}
      <section className="space-y-6">
        <MedicationLibraryBrowser medications={medications} />
      </section>
    </div>
  );
}
