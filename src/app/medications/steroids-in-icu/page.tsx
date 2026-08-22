import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SteroidComparisonVisual } from "@/components/medications/SteroidComparisonVisual";
import { SteroidMechanismVisual } from "@/components/medications/SteroidMechanismVisual";
import { SteroidBySyndrome } from "@/components/medications/SteroidBySyndrome";
import { SteroidAdverseEffectMap } from "@/components/medications/SteroidAdverseEffectMap";

export const metadata: Metadata = {
  title: "Steroids in the ICU | Educational Pharmacology & Syndrome Guide",
  description:
    "Definitive critical care guide to corticosteroids: Hydrocortisone vs Methylprednisolone vs Dexamethasone. Potency comparisons, receptor mechanisms, 10 ICU syndromes, adverse effect mapping, leukocytosis vs infection, and evidence-based tapering rules.",
};

export default function SteroidsInIcuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-border pb-6">
        <Breadcrumbs
          items={[
            { label: "Medications", href: "/medications" },
            { label: "Steroids in the ICU" },
          ]}
        />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                ICU Pharmacotherapy Masterclass
              </span>
              <span className="text-xs text-ink-muted">Evidence & Physiology</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Corticosteroids in the ICU
            </h1>
            <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
              <strong>Which steroid? When? Why? What evidence? What tradeoff?</strong> A structured, evidence-based masterclass differentiating <strong>Hydrocortisone</strong>, <strong>Methylprednisolone</strong>, and <strong>Dexamethasone</strong> across critical illness syndromes.
            </p>
          </div>
        </div>

        {/* Quick Links Nav */}
        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href="#potency-comparison"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            📊 Relative Potency
          </a>
          <a
            href="#mechanism-cascade"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            🧬 Genomic Mechanism
          </a>
          <a
            href="#syndromes-module"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            🏥 10 ICU Syndromes
          </a>
          <a
            href="#adverse-effects"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            ⚠️ Adverse Effects Map
          </a>
          <a
            href="#leukocytosis"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            🩸 Leukocytosis Visual
          </a>
          <a
            href="#tapering-guide"
            className="rounded-lg bg-surface border border-border px-3 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:border-primary transition-colors"
          >
            📉 Tapering Decision
          </a>
        </div>
      </div>

      {/* Section 1: Pharmacology Potency Visual */}
      <section id="potency-comparison" className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span>⚖️</span> Relative Potency & Receptor Selectivity
          </h2>
          <p className="text-sm text-ink-muted mt-1">
            Standard relative potency values compared to endogenous Cortisol / Hydrocortisone (Reference = 1.0).
          </p>
        </div>
        <SteroidComparisonVisual />
      </section>

      {/* Section 2: Mechanism Visual */}
      <section id="mechanism-cascade" className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span>🧬</span> Genomic Mechanism of Action & Drug Switching
          </h2>
          <p className="text-sm text-ink-muted mt-1">
            Toggle between agents to see differences in receptor binding, duration, and target clinical roles.
          </p>
        </div>
        <SteroidMechanismVisual />
      </section>

      {/* Section 3: Which Steroid for Which ICU Problem? */}
      <section id="syndromes-module" className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span>🏥</span> Which Steroid for Which ICU Problem?
          </h2>
          <p className="text-sm text-ink-muted mt-1">
            Deep-dive clinical guidance across 10 critical care indications — covering rationale, exact regimens, outcomes, and guideline nuances.
          </p>
        </div>
        <SteroidBySyndrome />
      </section>

      {/* Section 4: Adverse Effect Systems Map */}
      <section id="adverse-effects" className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-ink flex items-center gap-2">
            <span>⚠️</span> Steroid Adverse-Effect Systems Map
          </h2>
          <p className="text-sm text-ink-muted mt-1">
            Click on any organ system to view the pathophysiology, clinical consequence, and bedside monitoring strategy.
          </p>
        </div>
        <SteroidAdverseEffectMap />
      </section>

      {/* Section 5: Steroid-Induced Leukocytosis */}
      <section id="leukocytosis" className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-6">
        <div className="border-b border-border/80 pb-3">
          <h2 className="text-lg font-bold text-ink flex items-center gap-2">
            <span>🩸</span> Steroid-Induced Leukocytosis vs. Active Infection
          </h2>
          <p className="text-xs text-ink-muted mt-1">
            Understanding how corticosteroid exposure causes variable circulating leukocytosis without necessarily signaling treatment failure or new sepsis.
          </p>
        </div>

        {/* Mechanism Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-xs">
          <div className="rounded-lg bg-surface border border-border p-3 text-center">
            <span className="font-bold text-ink block mb-1">Corticosteroid Dose</span>
            <span className="text-ink-muted text-[11px]">IV or Oral Administration</span>
          </div>
          <div className="text-center text-ink-muted font-bold text-base hidden md:block">→</div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-300 dark:border-amber-900 p-3 text-center">
            <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">Neutrophil Demargination</span>
            <span className="text-amber-900/80 dark:text-amber-200/80 text-[11px]">Endothelial detachment + delayed apoptosis</span>
          </div>
          <div className="text-center text-ink-muted font-bold text-base hidden md:block">→</div>
          <div className="rounded-lg bg-rose-500/10 border border-rose-300 dark:border-rose-900 p-3 text-center">
            <span className="font-bold text-rose-800 dark:text-rose-300 block mb-1">Elevated Circulating WBC</span>
            <span className="text-rose-900/80 dark:text-rose-200/80 text-[11px]">Neutrophil demargination & survival</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="rounded-lg bg-emerald-500/10 border border-emerald-300 dark:border-emerald-900 p-4 space-y-2">
            <h3 className="font-bold text-emerald-900 dark:text-emerald-300">
              ✓ Typical Steroid Leukocytosis Pattern
            </h3>
            <ul className="space-y-1 text-ink-muted list-disc list-inside">
              <li>Occurs within 4–24 hours of steroid initiation.</li>
              <li>Mature neutrophils predominate (no significant immature bandemia).</li>
              <li>Patient remains hemodynamically stable and afebrile.</li>
              <li>Absence of new focal infection signs, hemodynamic stability, and downward biomarker trajectory.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-rose-500/10 border border-rose-300 dark:border-rose-900 p-4 space-y-2">
            <h3 className="font-bold text-rose-900 dark:text-rose-300">
              🚨 Suspect True Secondary Infection If:
            </h3>
            <ul className="space-y-1 text-ink-muted list-disc list-inside">
              <li>Pronounced left shift with significant circulating immature granulocytes / band forms.</li>
              <li>New fever, hypothermia, or worsening vasopressor requirement.</li>
              <li>Clinical deterioration, temperature instability, worsening organ dysfunction, or rising biomarker trajectory.</li>
              <li>New focal clinical source (purulent sputum, cloudy urine, erythema).</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-amber-500/10 border border-amber-300 dark:border-amber-900 p-3 text-xs text-amber-950 dark:text-amber-200">
          ⭐ <strong>Key Bedside Takeaway:</strong> Never change broad-spectrum antibiotics purely because WBC count rises following corticosteroid administration. Conversely, do not overlook true sepsis progression by attributing all leukocytosis to steroid effect. Synthesize steroid exposure timing, differential / band presence, fever curve, hemodynamics, organ dysfunction, physical examination, microbiological cultures, and biomarker trends — normal procalcitonin or CRP cannot independently rule out active infection!
        </div>
      </section>

      {/* Section 6: Do I Need to Taper? */}
      <section id="tapering-guide" className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-6">
        <div className="border-b border-border/80 pb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              2024 ESE / Endocrine Society Clinical Practice Guideline
            </span>
          </div>
          <h2 className="text-lg font-bold text-ink flex items-center gap-2">
            <span>📉</span> Glucocorticoid Tapering Strategy: The Two Clinical Dimensions
          </h2>
          <p className="text-xs text-ink-muted mt-1">
            Differentiating <strong>HPA-Axis Recovery (Endocrine)</strong> from <strong>Underlying Disease Control / Trial Protocols (Inflammatory)</strong>.
          </p>
        </div>

        {/* The Two Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-900 dark:text-blue-300 text-sm">
                Dimension A: Endocrine / HPA-Axis Protection
              </span>
            </div>
            <p className="text-ink-muted leading-relaxed">
              <strong>Short-term systemic exposure (&lt; 3–4 weeks):</strong> According to current international endocrine guidance, short-term exposure carries low concern for clinically significant hypothalamic-pituitary-adrenal (HPA) axis suppression. Routine endocrine tapering is generally <em>not required solely to prevent adrenal crisis</em>.
            </p>
            <p className="text-ink-muted leading-relaxed">
              <strong>Longer exposure (&gt; 3–4 weeks or prior chronic use):</strong> Requires structured stepped weaning once underlying disease is controlled, gradually titrating down toward physiologic replacement (~15–20 mg/day hydrocortisone or ~4–5 mg/day prednisone equivalent) before attempting full withdrawal.
            </p>
          </div>

          <div className="rounded-lg border border-purple-200 dark:border-purple-900 bg-purple-50/40 dark:bg-purple-950/20 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-purple-900 dark:text-purple-300 text-sm">
                Dimension B: Disease Control &amp; Trial Protocols
              </span>
            </div>
            <p className="text-ink-muted leading-relaxed">
              <strong>Preventing Inflammatory Rebound:</strong> Even when HPA-axis suppression is not a concern, short-course steroids may be tapered or stepped down based on <em>disease response</em> (e.g., preventing bronchospasm recurrence in severe asthma, or persistent hypoxemia in non-resolving ARDS).
            </p>
            <p className="text-ink-muted leading-relaxed">
              <strong>Trial Protocols:</strong> Step-down regimens embedded in clinical trials (such as the CAPE COD severe CAP 8-to-14 day hydrocortisone protocol) represent <em>specific trial treatment designs</em>, not proof that all short-term ICU steroid courses require endocrine tapering.
            </p>
          </div>
        </div>

        {/* Structured Weaning Steps for Extended Courses */}
        <div className="rounded-lg border border-border/80 bg-surface/50 p-4 space-y-3 text-xs">
          <h3 className="font-bold text-ink text-sm">Structured Clinical Evaluation for Glucocorticoid Withdrawal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-ink-muted">
            <div className="p-2.5 rounded border border-border bg-card">
              <span className="font-bold text-ink block mb-1">1. Disease Activity</span>
              Is the acute underlying inflammatory process fully resolved or controlled?
            </div>
            <div className="p-2.5 rounded border border-border bg-card">
              <span className="font-bold text-ink block mb-1">2. Prior Exposure</span>
              Has the patient received repeated steroid pulses or pre-admission baseline therapy?
            </div>
            <div className="p-2.5 rounded border border-border bg-card">
              <span className="font-bold text-ink block mb-1">3. Dose De-escalation</span>
              Wean supraphysiologic doses toward physiologic baseline (4–5 mg prednisone-equivalent).
            </div>
            <div className="p-2.5 rounded border border-border bg-card">
              <span className="font-bold text-ink block mb-1">4. Clinical Vigilance</span>
              Monitor for weakness, postural hypotension, abdominal pain, and hypoglycemia during wean.
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Key References */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-ink flex items-center gap-2">
          <span>📚</span> Landmark Trials & Societal Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-ink-muted">
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">Surviving Sepsis Campaign (SSC 2026 / 2021)</p>
            <p>International Guidelines for Management of Sepsis and Septic Shock. Recommends IV hydrocortisone 200 mg/day for refractory septic shock.</p>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">ADRENAL Trial (N Engl J Med 2018; 378:797-808)</p>
            <p>3,800-patient RCT: Hydrocortisone 200 mg/day continuous infusion shortened shock duration and ICU stay in septic shock.</p>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">APROCCHSS Trial (N Engl J Med 2018; 378:809-818)</p>
            <p>1,241-patient RCT: Hydrocortisone + Fludrocortisone significantly reduced 90-day all-cause mortality in refractory septic shock.</p>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">CAPE COD Trial (N Engl J Med 2023; 388:1931-1941)</p>
            <p>Early IV hydrocortisone (200 mg/day continuous infusion) significantly reduced 28-day mortality in severe community-acquired pneumonia admitted to the ICU.</p>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">DEXA-ARDS Trial (Lancet Respir Med 2020; 8:267-276)</p>
            <p>Dexamethasone (20 mg × 5d then 10 mg × 5d) increased ventilator-free days and reduced 60-day mortality in early severe ARDS.</p>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-border/60 space-y-1">
            <p className="font-bold text-ink">CRASH Trial (Lancet 2004; 364:1321-1328)</p>
            <p>10,008-patient RCT: Corticosteroids significantly INCREASED mortality in acute Traumatic Brain Injury. Corticosteroids should not be used to treat acute TBI.</p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between border-t border-border pt-6 flex-wrap gap-4">
        <Link
          href="/medications"
          className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
        >
          ← Back to All ICU Medications
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/medications/hydrocortisone"
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:border-primary transition-colors"
          >
            Hydrocortisone Profile →
          </Link>
          <Link
            href="/medications/methylprednisolone"
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:border-primary transition-colors"
          >
            Methylprednisolone Profile →
          </Link>
          <Link
            href="/medications/dexamethasone"
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink hover:border-primary transition-colors"
          >
            Dexamethasone Profile →
          </Link>
        </div>
      </div>
    </div>
  );
}
