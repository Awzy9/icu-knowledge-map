"use client";

import React, { useState } from "react";

interface AdverseEffect {
  id: string;
  title: string;
  system: string;
  systemColor: string;
  mechanism: string;
  consequence: string;
  monitoring: string;
}

const adverseEffects: AdverseEffect[] = [
  {
    id: "hyperglycemia",
    title: "Hyperglycemia",
    system: "Metabolic",
    systemColor:
      "bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800",
    mechanism:
      "GC → hepatic gluconeogenesis ↑ + peripheral insulin resistance + pancreatic beta-cell suppression",
    consequence:
      "Glucose 200–400+ mg/dL; may require insulin infusion in ICU setting",
    monitoring: "BG q4–6h; implement insulin protocol; adjust insulin gtt per target (140–180 mg/dL in ICU)",
  },
  {
    id: "fluid-retention",
    title: "Fluid Retention / Sodium Effects",
    system: "Renal / CV",
    systemColor:
      "bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    mechanism:
      "Mineralocorticoid activity (hydrocortisone > others) → renal Na reabsorption ↑ via aldosterone-like effect. Dexamethasone and methylprednisolone have minimal MC activity.",
    consequence: "Edema, hypertension, hypokalemia — most pronounced with hydrocortisone",
    monitoring:
      "Na, K, daily weight, BP; note that dexamethasone/methylprednisolone have negligible MC effects",
  },
  {
    id: "hypokalemia",
    title: "Hypokalemia",
    system: "Electrolytes",
    systemColor:
      "bg-orange-100 dark:bg-orange-950/40 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800",
    mechanism:
      "Mineralocorticoid effect → renal K excretion; also compounded by concurrent beta-agonist administration (↓ intracellular K shift)",
    consequence:
      "Arrhythmia risk, muscle weakness, impaired respiratory muscle function in ventilated patients",
    monitoring:
      "Serum K q12h in high-risk patients; supplement aggressively to K ≥4.0 mEq/L; monitor ECG if severe",
  },
  {
    id: "delirium",
    title: "Delirium / Psychiatric Effects",
    system: "Neuropsychiatric",
    systemColor:
      "bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800",
    mechanism:
      "GC receptors in limbic system + hippocampus → altered neurotransmission; dose-dependent effect",
    consequence:
      "Euphoria, agitation, psychosis, depression, cognitive changes; more common with dexamethasone (highest potency, longest duration)",
    monitoring:
      "RASS/CAM-ICU daily; dose reduction if possible; avoid benzodiazepines unless necessary; review anticholinergic burden",
  },
  {
    id: "icu-weakness",
    title: "ICU-Acquired Weakness / Myopathy",
    system: "Musculoskeletal",
    systemColor:
      "bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800",
    mechanism:
      "Glucocorticoid-induced catabolism → proximal muscle wasting; exacerbated by concurrent NMB use; dose- and duration-dependent (particularly >7 days at high doses)",
    consequence:
      "Delayed ventilator weaning, prolonged ICU stay, functional disability post-ICU; 'critical illness myopathy'",
    monitoring:
      "MRC muscle strength assessment, early mobilization protocol, minimize dose/duration; avoid concurrent high-dose NMB when possible",
  },
  {
    id: "infection-risk",
    title: "Increased Infection Risk",
    system: "Immunologic",
    systemColor:
      "bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
    mechanism:
      "Immune suppression: ↓ neutrophil migration to sites of infection, ↓ T-cell activation, impaired macrophage function",
    consequence:
      "Increased susceptibility to bacterial, fungal (Candida, Aspergillus), and viral infections; may mask fever",
    monitoring:
      "Note: steroid-induced leukocytosis ≠ infection. Synthesize clinical trajectory, fever, organ function, cultures, and biomarker trends; consider antifungal prophylaxis for prolonged high-dose courses",
  },
  {
    id: "gi-effects",
    title: "GI Effects",
    system: "Gastrointestinal",
    systemColor:
      "bg-teal-100 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800",
    mechanism:
      "↓ prostaglandin synthesis → mucosal protection ↓; concurrent NSAIDs compound risk significantly",
    consequence:
      "Gastric ulceration, GI hemorrhage; risk higher with concurrent NSAIDs, anticoagulation, or prior GI history",
    monitoring:
      "Assess for melena/hematemesis; stool guaiac; consider PPI prophylaxis in high-risk patients (concurrent NSAIDs, anticoagulation, prior GI bleeding, ≥5 days of steroids)",
  },
  {
    id: "hpa-suppression",
    title: "HPA Axis Suppression",
    system: "Endocrine",
    systemColor:
      "bg-violet-100 dark:bg-violet-950/40 text-violet-800 dark:text-violet-200 border-violet-200 dark:border-violet-800",
    mechanism:
      "Exogenous GC → negative feedback → ↓ ACTH secretion → adrenal cortex atrophy (dose- and duration-dependent)",
    consequence:
      "Relative adrenal insufficiency on steroid withdrawal; adrenal crisis risk with abrupt discontinuation after prolonged use",
    monitoring:
      "Assess duration, prior chronic exposure, and disease activity per 2024 ESE/Endocrine Society guidelines; courses >3–4 weeks or with prior chronic use require structured weaning toward physiologic replacement",
  },
  {
    id: "leukocytosis",
    title: "Leukocytosis (Steroid-Induced)",
    system: "Hematologic",
    systemColor:
      "bg-slate-100 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700",
    mechanism:
      "Neutrophil demargination (release from vascular endothelium) + ↓ neutrophil apoptosis → occurs within hours of steroid dose",
    consequence:
      "Elevated circulating WBC count due to demargination and delayed apoptosis — does NOT independently signify new infection or treatment failure",
    monitoring:
      "Synthesize complete clinical context (steroid timing, fever curve, hemodynamics, physical exam, organ function, cultures, and biomarker trajectory) rather than relying on WBC count alone; biomarkers cannot independently rule out infection",
  },
];

export function SteroidAdverseEffectMap() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      {/* Header */}
      <div className="border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
          Corticosteroid Adverse Effect Map
        </h3>
        <p className="text-xs text-ink-muted mt-0.5">
          Click each category to expand mechanism, consequence, and monitoring guidance
        </p>
      </div>

      {/* Adverse effect cards */}
      <div className="space-y-2">
        {adverseEffects.map((ae) => {
          const isOpen = openId === ae.id;
          return (
            <div
              key={ae.id}
              className={`rounded-lg border transition-colors ${
                isOpen
                  ? "border-accent bg-accent-soft/20"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              {/* Card header / trigger */}
              <button
                onClick={() => toggle(ae.id)}
                aria-expanded={isOpen}
                aria-controls={`ae-body-${ae.id}`}
                className="w-full flex items-center gap-3 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                <div className="flex-1 flex items-center gap-2 min-w-0">
                  <span className="font-semibold text-sm text-ink">{ae.title}</span>
                  <span
                    className={`rounded border px-1.5 py-0.5 text-[10px] font-medium ${ae.systemColor}`}
                  >
                    {ae.system}
                  </span>
                </div>
                <span
                  className={`shrink-0 text-ink-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>

              {/* Card body */}
              {isOpen && (
                <div
                  id={`ae-body-${ae.id}`}
                  className="px-4 pb-4 space-y-2 border-t border-border/40 pt-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg border border-border bg-canvas p-3 space-y-1">
                      <p className="font-bold text-ink uppercase tracking-wider text-[10px]">
                        Mechanism
                      </p>
                      <p className="text-ink-muted leading-relaxed">{ae.mechanism}</p>
                    </div>
                    <div className="rounded-lg border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 p-3 space-y-1">
                      <p className="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider text-[10px]">
                        Clinical Consequence
                      </p>
                      <p className="text-rose-800 dark:text-rose-200 leading-relaxed">{ae.consequence}</p>
                    </div>
                    <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20 p-3 space-y-1">
                      <p className="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider text-[10px]">
                        Monitoring
                      </p>
                      <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">{ae.monitoring}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-ink-faint border-t border-border/60 pt-3 leading-relaxed">
        Adverse effect severity varies by steroid (potency, MC activity), dose, duration, and patient-specific risk factors. Always balance therapeutic benefit against harm.
      </p>
    </div>
  );
}
