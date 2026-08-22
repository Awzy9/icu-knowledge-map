"use client";

import React, { useState } from "react";

interface Syndrome {
  id: string;
  title: string;
  icon: string;
  indication: string;
  steroid: string;
  why: string;
  regimen: string;
  outcomeGoal: string;
  monitoring: string;
  guideline: string;
  nuance: string;
  tags: string[];
}

const syndromes: Syndrome[] = [
  {
    id: "septic-shock",
    title: "Septic Shock",
    icon: "🩸",
    tags: ["Vasopressors", "Shock"],
    indication:
      "Vasopressor-dependent septic shock not responding to adequate fluids and norepinephrine (typically ≥0.25 mcg/kg/min × ≥4h)",
    steroid: "Hydrocortisone 200 mg/day IV continuous (or 50 mg q6h)",
    why: "Stress-dose hydrocortisone restores vasopressor sensitivity, shortens duration of shock, provides clinically relevant mineralocorticoid activity. ADRENAL and APROCCHSS trials both used hydrocortisone.",
    regimen: "200 mg/day IV × 7 days or until vasopressor weaning, per SSC 2026",
    outcomeGoal:
      "Vasopressor dose reduction, hemodynamic stabilization, shock reversal — NOT necessarily mortality reduction",
    monitoring:
      "Blood glucose q4–6h, potassium, infection surveillance, vasopressor requirements",
    guideline:
      "Surviving Sepsis Campaign 2026 — conditional recommendation for vasopressor-dependent shock",
    nuance:
      "NOT for every septic patient. High-dose steroids (e.g., 1 g methylprednisolone) are NOT recommended and may cause harm.",
  },
  {
    id: "adrenal-crisis",
    title: "Adrenal Crisis",
    icon: "⚡",
    tags: ["Endocrine", "Emergency"],
    indication:
      "Confirmed or suspected primary/secondary adrenal insufficiency presenting with hemodynamic instability",
    steroid:
      "Hydrocortisone 100 mg IV stat → 200 mg/24h continuous (or 50 mg q6h)",
    why: "Hydrocortisone uniquely provides BOTH glucocorticoid replacement AND sufficient mineralocorticoid activity at stress doses to address aldosterone deficiency without requiring separate fludrocortisone. Dexamethasone and methylprednisolone lack adequate mineralocorticoid activity.",
    regimen:
      "100 mg IV bolus stat, then continuous 200 mg/day until crisis resolves; taper to physiologic replacement over days",
    outcomeGoal:
      "Hemodynamic restoration, correction of electrolyte imbalance (hyponatremia, hyperkalemia), glucose stabilization",
    monitoring:
      "Na, K, glucose, BP, mental status; transition to oral maintenance once stable",
    guideline:
      "Endocrine Society Clinical Practice Guidelines for Adrenal Insufficiency",
    nuance:
      "If dexamethasone was given as empirical option (to allow ACTH stimulation test) — it does not suppress the ACTH stimulation test but lacks mineralocorticoid effect. Switch to hydrocortisone once diagnosis confirmed.",
  },
  {
    id: "ards",
    title: "ARDS — Corticosteroid Strategy",
    icon: "🫁",
    tags: ["Respiratory", "MV"],
    indication:
      "Persistent ARDS with ongoing inflammatory process where corticosteroids may be considered per current guidance",
    steroid:
      "No single universally mandated agent. DEXA-ARDS used dexamethasone; other protocols use methylprednisolone. Agent/dose/duration must follow the protocol being implemented.",
    why: "Early ARDS may respond to corticosteroids by limiting persistent inflammatory lung injury and the fibroproliferative phase",
    regimen:
      "TRIAL-SPECIFIC — do not blend regimens. DEXA-ARDS: dexamethasone 20 mg/day × 5d then 10 mg/day × 5d. Institutional protocols may use methylprednisolone tapering.",
    outcomeGoal:
      "Improved oxygenation (P/F ratio), reduced duration of mechanical ventilation, possible mortality benefit (trial-specific)",
    monitoring:
      "BG q4h (aggressive insulin protocol), oxygenation, ventilator parameters, secondary infections",
    guideline:
      "SCCM 2024 Focused Update on Corticosteroids in Sepsis, ARDS, and CAP; ESICM 2023 Corticosteroid Guidance",
    nuance:
      "Evidence supports CONSIDERING corticosteroids in appropriate ARDS patients. Do NOT blend DEXA-ARDS dexamethasone regimen with methylprednisolone — these are different protocols with different evidence bases.",
  },
  {
    id: "severe-cap",
    title: "Severe Bacterial CAP (ICU)",
    icon: "🦠",
    tags: ["Respiratory", "Infectious"],
    indication:
      "Severe CAP meeting ICU criteria with significant hypoxemia (PaO₂/FiO₂ <300 or requiring NIV/MV per CAPE COD criteria)",
    steroid: "Hydrocortisone 200 mg/day IV continuous infusion (CAPE COD regimen) or protocolized corticosteroid therapy",
    why: "2024 SCCM Focused Update recommends corticosteroids for severe bacterial CAP requiring ICU care. CAPE COD trial (NEJM 2023) demonstrated significant 28-day all-cause mortality reduction (6.2% vs 11.9%) with early IV hydrocortisone.",
    regimen:
      "Per CAPE COD: 200 mg/day continuous IV infusion initiated within 24h of severe CAP criteria for 8 days (with adaptive 8-to-14 day taper based on clinical improvement)",
    outcomeGoal:
      "Reduced need for mechanical ventilation, shorter ICU stay, and reduced 28-day mortality",
    monitoring:
      "Blood glucose q4–6h, secondary infection surveillance (viral/fungal), ventilator weaning progression",
    guideline:
      "2024 SCCM Focused Update on Corticosteroids in Sepsis, ARDS, and CAP; CAPE COD Trial (Dequin PF et al. N Engl J Med 2023;388:1931-1941)",
    nuance:
      "Corticosteroids are recommended for SEVERE bacterial CAP requiring ICU admission. Do NOT extrapolate to mild/moderate outpatient or general ward CAP. CAPE COD studied IV HYDROCORTISONE (not methylprednisolone).",
  },
  {
    id: "status-asthmaticus",
    title: "Severe Acute Asthma / Status Asthmaticus",
    icon: "💨",
    tags: ["Respiratory", "Bronchospasm"],
    indication:
      "Acute severe asthma exacerbation, particularly when non-responsive to initial bronchodilator therapy or requiring ICU/NIV/MV support",
    steroid:
      "Systemic corticosteroid: Oral Prednisone/Prednisolone 40–50 mg/day (or equivalent IV therapy e.g. Methylprednisolone ~32–40 mg/day) for 5–7 days",
    why: "GINA 2026 recommends systemic corticosteroids for acute severe exacerbations to speed resolution of airflow obstruction and reduce relapse. Oral route is preferred when swallowing and GI absorption are intact; parenteral IV therapy is reserved for patients who are intubated, vomiting, or in severe respiratory distress.",
    regimen:
      "Oral Prednisone 40–50 mg/day (single morning dose) for 5–7 days. If oral administration is not possible: IV Methylprednisolone 32–40 mg/day (or equivalent). Routine tapering is generally not required for courses ≤ 7–14 days unless indicated by symptom recurrence.",
    outcomeGoal:
      "Rapid improvement in FEV₁ / PEFR, reduced work of breathing, resolution of hypoxemia, and prevention of relapse",
    monitoring:
      "PEFR/FEV₁, oxygenation, work of breathing, blood glucose, potassium (monitor for hypokalemia from beta-agonist + steroid co-administration)",
    guideline:
      "GINA 2026 — Global Strategy for Asthma Management and Prevention (Adult Acute Exacerbation Recommendations)",
    nuance:
      "Oral and IV systemic corticosteroids demonstrate equivalent clinical efficacy when gastrointestinal absorption is intact. High-dose pulsed megadoses (e.g. >125 mg/day) do not offer additional benefit in typical exacerbations and increase adverse metabolic effects.",
  },
  {
    id: "aecopd",
    title: "Acute Exacerbation of COPD (Hospitalized / ICU)",
    icon: "🌬️",
    tags: ["Respiratory", "COPD"],
    indication:
      "Moderate-to-severe acute COPD exacerbation requiring hospitalization, NIV, or ICU care with significant dyspnea and airflow limitation",
    steroid:
      "Oral Prednisone 40 mg/day (or equivalent IV Methylprednisolone ~32–40 mg/day) for 5 days total",
    why: "Systemic corticosteroids in acute COPD exacerbations shorten recovery time, improve lung function (FEV₁) and oxygenation, and reduce the risk of early treatment failure and hospitalization length. Duration of 5 days is non-inferior to longer courses.",
    regimen:
      "Prednisone 40 mg orally once daily for 5 days. If parenteral route is necessary (intubated, severe vomiting): IV Methylprednisolone ~32–40 mg once daily (or in 2 divided doses) for 5 days total per GOLD 2026 / REDUCE trial.",
    outcomeGoal:
      "Faster improvement in FEV₁, reduction in treatment failure, shortening of hospital stay, and prevention of re-exacerbation",
    monitoring:
      "Blood glucose (hyperglycemia common), electrolytes, respiratory mechanics and work of breathing; avoid extending duration > 5 days without specific clinical justification",
    guideline:
      "GOLD 2026 Report — Global Strategy for Prevention, Diagnosis and Management of COPD; REDUCE Trial (JAMA 2013)",
    nuance:
      "The REDUCE trial proved 5 days of systemic corticosteroid therapy is non-inferior to 14 days and substantially reduces cumulative steroid exposure. Oral route is preferred when enteral absorption is intact.",
  },
  {
    id: "vasogenic-edema",
    title: "Vasogenic Cerebral Edema (Brain Tumor)",
    icon: "🧠",
    tags: ["Neuro", "Brain Tumor"],
    indication:
      "Symptomatic peritumoral vasogenic edema causing neurological deficits (headache, focal deficit, altered consciousness)",
    steroid: "Dexamethasone 4–10 mg IV q6h (individualized; lower doses may suffice for less severe edema)",
    why: "Dexamethasone's high lipophilicity → excellent CNS penetration. Restores blood-brain barrier function in vasogenic edema. Negligible MC activity. Long duration allows once/twice daily dosing in stable patients.",
    regimen:
      "4–10 mg IV q6h initially; wean to lowest effective dose once symptomatic improvement achieved. Avoid prolonged high doses.",
    outcomeGoal:
      "Symptomatic relief of neurological deficits; reduce herniation risk while awaiting definitive treatment",
    monitoring:
      "Neurological status (GCS, focal deficits), BG (marked hyperglycemia common), BMP, signs of GI bleed (consider concurrent PPI), infection",
    guideline:
      "Neuro-oncology institutional guidelines; general principles per AANS/CNS guidance",
    nuance:
      "Vasogenic edema from brain tumors ≠ ALL cerebral edema. Do NOT use corticosteroids for acute traumatic brain injury; large randomized trial evidence (CRASH trial: Lancet 2004) proved increased mortality. Not for ischemic stroke. Not for cytotoxic edema.",
  },
  {
    id: "post-extubation-stridor",
    title: "Post-Extubation Stridor Prevention",
    icon: "🔊",
    tags: ["Airway", "Extubation"],
    indication:
      "High-risk patients for post-extubation laryngeal edema (prolonged intubation, traumatic intubation, known airway edema on prior extubation)",
    steroid:
      "Dexamethasone 20 mg IV at 12h and 4h before planned extubation (per Francois et al. protocol). Some protocols: methylprednisolone 20 mg q4h × 3–4 doses before extubation.",
    why: "Reduces laryngeal/subglottic edema and post-extubation stridor. High potency and CNS penetration of dexamethasone. Long half-life covers extubation window with 1–2 doses.",
    regimen:
      "Dexamethasone 20 mg IV at 12h and 4h before planned extubation (per Francois et al. Lancet 2007 protocol). Alternatively: methylprednisolone 20 mg q4h × 4 doses.",
    outcomeGoal:
      "Reduced post-extubation stridor, reduced re-intubation rate in high-risk patients",
    monitoring: "Post-extubation stridor (assess within 1h), upper airway exam, BG",
    guideline:
      "Francois B et al. Lancet 2007;369:1083–1089. Prevention of stridor in high-risk ICU patients.",
    nuance:
      "Benefit demonstrated only in patients AT HIGH RISK (cuff leak test negative or other risk factors). Not standard prophylaxis for all extubations.",
  },
  {
    id: "bacterial-meningitis",
    title: "Acute Bacterial Meningitis (Adult)",
    icon: "🦠",
    tags: ["Neuro", "Infectious"],
    indication:
      "Confirmed or suspected community-acquired acute bacterial meningitis in adults",
    steroid: "Dexamethasone 0.15 mg/kg IV q6h (or 10 mg IV q6h) for 4 days",
    why: "Dexamethasone blunts the subarachnoid inflammatory burst triggered by bactericidal antibiotic lysis, reducing hearing loss and neurological sequelae. Highest benefit established in Streptococcus pneumoniae meningitis.",
    regimen:
      "0.15 mg/kg IV q6h (10 mg q6h for adult) for 4 days. Should be administered before or with the first dose of antimicrobial therapy. If CSF microbiological examination confirms an organism other than S. pneumoniae (or non-bacterial etiology), continuation should be re-evaluated per IDSA/ESCMID guidance.",
    outcomeGoal:
      "Reduction in severe neurological complications (sensorineural hearing loss, focal deficits) and mortality",
    monitoring:
      "Neurological status, ICP signs, glycemic control, CSF microbiological confirmation",
    guideline:
      "IDSA Bacterial Meningitis Guidelines; ESCMID Guidelines on Acute Bacterial Meningitis",
    nuance:
      "Dexamethasone should be administered before or with initial antibiotics when indicated. If initial antibiotics have already been administered, clinical judgement guides whether adjunctive steroids should still be initiated.",
  },
  {
    id: "circi",
    title: "Refractory Septic Shock / CIRCI",
    icon: "⚠️",
    tags: ["Shock", "Endocrine"],
    indication:
      "Vasopressor-refractory septic shock with suspected Critical illness-Related Corticosteroid Insufficiency (CIRCI) — inadequate adrenal response relative to illness severity",
    steroid:
      "Hydrocortisone 200 mg/day IV continuous ± fludrocortisone 50 mcg oral/NG once daily (APROCCHSS protocol). Hydrocortisone alone per ADRENAL protocol.",
    why: "CIRCI represents relative cortisol deficiency in critical illness. Hydrocortisone restores vasopressor sensitivity. APROCCHSS added fludrocortisone → reduced 90-day mortality. Whether fludrocortisone adds benefit beyond hydrocortisone is debated.",
    regimen:
      "Hydrocortisone 200 mg/day continuous IV ± fludrocortisone 50 mcg oral/NG daily × 7 days (APROCCHSS) OR hydrocortisone alone × 7 days or until vasopressor cessation (ADRENAL)",
    outcomeGoal:
      "Vasopressor weaning, hemodynamic stabilization; in APROCCHSS: reduced 90-day mortality",
    monitoring:
      "BG q4–6h, electrolytes, vasopressor requirements, daily clinical reassessment",
    guideline:
      "SSC 2026 corticosteroid section; SCCM CIRCI Guidelines 2017 (Pastores et al. Crit Care Med 2017)",
    nuance:
      "APROCCHSS vs ADRENAL distinction: APROCCHSS showed 90-day mortality benefit with HC+FC; ADRENAL showed shock reversal but no mortality benefit with HC alone. These are DIFFERENT trials with DIFFERENT designs — do NOT present them as equivalent or identical.",
  },
];

export function SteroidBySyndrome() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      {/* Header */}
      <div className="border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
          Steroids by ICU Syndrome — When, Which &amp; Why
        </h3>
        <p className="text-xs text-ink-muted mt-0.5">
          Click any syndrome card for evidence-based guidance on indication, steroid choice, regimen, and nuance.
        </p>
      </div>

      {/* Syndrome accordion cards */}
      <div className="space-y-2">
        {syndromes.map((syn) => {
          const isOpen = openId === syn.id;
          return (
            <div
              key={syn.id}
              className={`rounded-lg border transition-colors ${
                isOpen
                  ? "border-accent bg-accent-soft/30"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              {/* Accordion header / trigger */}
              <button
                onClick={() => toggle(syn.id)}
                aria-expanded={isOpen}
                aria-controls={`syndrome-body-${syn.id}`}
                className="w-full flex items-center gap-3 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                <span className="text-xl shrink-0">{syn.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-sm text-ink">{syn.title}</span>
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {syn.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded px-1.5 py-0.5 text-[10px] font-medium bg-surface-sunken border border-border text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

              {/* Accordion body */}
              {isOpen && (
                <div
                  id={`syndrome-body-${syn.id}`}
                  className="px-4 pb-4 space-y-3 border-t border-border/40 pt-3"
                >
                  {/* Grid of key fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg border border-border bg-canvas p-3 space-y-1">
                      <p className="font-bold text-ink uppercase tracking-wider text-[10px]">Indication</p>
                      <p className="text-ink-muted leading-relaxed">{syn.indication}</p>
                    </div>
                    <div className="rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20 p-3 space-y-1">
                      <p className="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider text-[10px]">
                        Steroid of Choice
                      </p>
                      <p className="text-blue-800 dark:text-blue-200 leading-relaxed font-medium">
                        {syn.steroid}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-canvas p-3 space-y-1">
                      <p className="font-bold text-ink uppercase tracking-wider text-[10px]">Why This Steroid</p>
                      <p className="text-ink-muted leading-relaxed">{syn.why}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-canvas p-3 space-y-1">
                      <p className="font-bold text-ink uppercase tracking-wider text-[10px]">Regimen / Strategy</p>
                      <p className="text-ink-muted leading-relaxed">{syn.regimen}</p>
                    </div>
                    <div className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 space-y-1">
                      <p className="font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider text-[10px]">
                        Outcome Goal
                      </p>
                      <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed">{syn.outcomeGoal}</p>
                    </div>
                    <div className="rounded-lg border border-border bg-canvas p-3 space-y-1">
                      <p className="font-bold text-ink uppercase tracking-wider text-[10px]">Monitoring</p>
                      <p className="text-ink-muted leading-relaxed">{syn.monitoring}</p>
                    </div>
                  </div>

                  {/* Guideline */}
                  <div className="rounded-lg border border-indigo-200 dark:border-indigo-900 bg-indigo-50/40 dark:bg-indigo-950/20 px-3 py-2 text-xs">
                    <span className="font-bold text-indigo-900 dark:text-indigo-300">📚 Guideline: </span>
                    <span className="text-indigo-800 dark:text-indigo-200">{syn.guideline}</span>
                  </div>

                  {/* Nuance warning */}
                  <div className="rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30 px-3 py-2 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                    <span className="font-bold">⚠️ Clinical Nuance: </span>
                    {syn.nuance}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
