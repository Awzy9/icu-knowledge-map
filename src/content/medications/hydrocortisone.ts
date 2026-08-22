import type { Medication } from "@/content-types/medication";

export const hydrocortisone: Medication = {
  id: "hydrocortisone",
  slug: "hydrocortisone",
  name: "Hydrocortisone",
  genericName: "Hydrocortisone Sodium Succinate",
  brandNames: ["Solu-Cortef", "A-Hydrocort"],
  class: "Short-Acting Glucocorticoid with Clinically Relevant Mineralocorticoid Activity",
  category: "corticosteroids",
  subcategory: "Corticosteroids",
  summary: "First-line stress-dose corticosteroid for vasopressor-refractory septic shock and acute adrenal crisis — provides balanced glucocorticoid anti-inflammatory action and physiological mineralocorticoid activity.",
  mechanism: {
    title: "Glucocorticoid & Mineralocorticoid Receptor Activation",
    steps: [
      "Lipophilic molecule diffuses across plasma membrane and binds cytoplasmic glucocorticoid receptors (GR) and mineralocorticoid receptors (MR).",
      "Receptor-ligand complex homodimerizes and translocates into the nucleus.",
      "Transrepression: Inhibits NF-κB and AP-1 transcription factors, suppressing pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) and inducible nitric oxide synthase (iNOS).",
      "Transactivation: Upregulates anti-inflammatory proteins (lipocortin-1/annexin A1, IκB-α, IL-10) and increases adrenergic receptor density/sensitivity on vascular smooth muscle.",
      "MR Activation: Promotes renal distal tubular Na⁺/water reabsorption and K⁺ excretion, supporting intravascular volume in adrenal crisis."
    ],
    visualDiagram: "GR Activation → NF-κB Inhibition (Cytokines ↓) + Vascular Adrenoceptor Expression ↑ + MR Activation (Na⁺ Retention)"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Continuous MAP maintenance; rapid shock reversal; cortisol replacement",
    halfLife: "Plasma t1/2: 1.5–2 hours (Biological tissue effect: 8–12 hours)",
    proteinBinding: "90% (primarily bound to corticosteroid-binding globulin / transcortin; free fraction increases in critical illness hypoalbuminemia)",
    metabolism: "Extensive hepatic conversion by 11β-HSD and hepatic conjugation to glucuronides",
    elimination: "Renal excretion of inactive conjugated metabolites (>90%)",
    vdNotes: "Vd ~0.3–0.5 L/kg; distributes widely into inflamed tissues and crosses placenta/BBB modestly"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Supported by 2024 SCCM Focused Update for both septic shock and severe community-acquired pneumonia requiring ICU care (CAPE COD trial: 200 mg/day continuous IV reduced 28-day mortality).",
      "Surviving Sepsis Campaign (SSC 2026 / 2021) and SCCM 2024 recommended first-line steroid for vasopressor-refractory septic shock (norepinephrine/epinephrine ≥0.25 mcg/kg/min for ≥4 hours).",
      "Essential drug of choice for acute adrenal crisis — provides both glucocorticoid support and sufficient mineralocorticoid activity (1:1 ratio) at stress doses (≥100–200 mg/day) without requiring separate fludrocortisone.",
      "Shorter biological half-life (8–12h) facilitates quick dose titration and rapid recovery of HPA axis compared to long-acting dexamethasone.",
      "Continuous IV infusion (200 mg/24h) minimizes blood glucose volatility and glycemic peaks compared to bolus regimens."
    ],
    whyIDont: [
      "Not indicated for sepsis without shock or easily responsive shock (e.g., low-dose vasopressors alone).",
      "Mineralocorticoid action induces fluid retention and hypernatremia, which can worsen pulmonary edema in volume-overloaded ARDS.",
      "Dose-dependent secondary hyperglycemia requiring insulin titration in up to 30–50% of ICU patients.",
      "Prolonged courses (>7–10 days without taper) risk severe ICU-acquired weakness, immunosuppression, and secondary infections."
    ],
    bedsidePearl: "In septic shock, continuous IV infusion of hydrocortisone (200 mg/day) results in significantly tighter glycemic control and fewer nursing interventions than 50 mg IV q6h boluses. Always wean steroids once vasopressors are successfully discontinued!"
  },
  dosing: {
    routine: "Septic Shock: 200 mg/day IV as continuous infusion (preferred) OR 50 mg IV q6h. Acute Adrenal Crisis: 100 mg IV bolus stat, followed by 200 mg/24h continuous IV infusion (or 50 mg IV q6h).",
    syndromeSpecific: [
      {
        syndrome: "Severe Community-Acquired Pneumonia (CAPE COD criteria)",
        regimen: "200 mg/day IV continuous infusion initiated early (within 24h of ICU admission). 8-day course with adaptive 8-to-14 day taper per protocol.",
        reference: "Dequin PF et al. CAPE COD Trial. N Engl J Med 2023;388:1931-1941; 2024 SCCM Focused Update on Corticosteroids",
        note: "Reduced 28-day mortality (6.2% vs 11.9%, p=0.006) in severe CAP requiring ICU admission (PSI class V, mechanically ventilated, or PaO2/FiO2 < 300)."
      },
      {
        syndrome: "Refractory Septic Shock (SSC 2026)",
        regimen: "200 mg/day IV continuous infusion (or 50 mg IV q6h) until shock reversal, typically for 5–7 days, then taper as vasopressors wean.",
        reference: "Surviving Sepsis Campaign Guidelines 2021/2026; ADRENAL / APROCCHSS Trials",
        note: "Start when norepinephrine or epinephrine dose is ≥0.25 mcg/kg/min for at least 4 hours."
      },
      {
        syndrome: "Acute Adrenal Crisis",
        regimen: "100 mg IV stat bolus, then 200 mg/24h continuous IV infusion (or 50 mg IV q6h). Taper over 3–5 days to oral replacement once stable.",
        reference: "Endocrine Society Clinical Practice Guidelines",
        note: "At doses ≥100 mg/day, hydrocortisone provides maximal mineralocorticoid receptor saturation; fludrocortisone is unnecessary during acute high-dose IV phase."
      },
      {
        syndrome: "CIRCI (Critical Illness-Related Corticosteroid Insufficiency)",
        regimen: "200 mg/day IV continuous infusion for 7 days, then taper over 3–5 days.",
        reference: "SCCM/ESICM CIRCI Guidelines",
        note: "ACTH stimulation testing is no longer routinely recommended to guide steroid initiation in septic shock."
      }
    ],
    renallyAdjusted: [
      {
        crclRange: "Any CrCl / AKI / ESRD",
        dose: "No renal dosage adjustment required. Monitor for sodium/fluid retention and hypokalemia."
      }
    ],
    hdDosing: "No supplemental dose required post-hemodialysis.",
    crrtDosing: "No dosage adjustment needed for CRRT (CVVH, CVVHD, CVVHDF)."
  },
  organFailure: {
    renalConsiderations: "Mineralocorticoid activity can cause sodium retention, edema, and hypokalemia. In severe oligoanuric AKI, observe for fluid accumulation.",
    hepaticConsiderations: "Hepatic clearance is impaired in cirrhosis or acute liver failure, leading to prolonged circulating half-life and enhanced glucocorticoid exposure; monitor glucose closely."
  },
  toxicity: {
    majorWarnings: [
      "Marked hyperglycemia: increases risk of secondary bacterial and fungal infections; blood glucose protocol required.",
      "ICU-Acquired Weakness / Critical Illness Myopathy: synergistic myopathy risk when combined with neuromuscular blocking agents (NMBAs).",
      "Steroid-induced leukocytosis: demargination of polymorphonuclear neutrophils can cause WBC elevation without signifying new infection.",
      "HPA axis suppression: abrupt cessation after >7–14 days of stress dosing can precipitate secondary adrenal crisis."
    ],
    organToxicities: [
      {
        organ: "Endocrine & Metabolic",
        description: "Hyperglycemia, hypokalemia, hypernatremia, secondary adrenal insufficiency upon rapid withdrawal."
      },
      {
        organ: "Neurological & Psychiatric",
        description: "ICU delirium, steroid psychosis, insomnia, mood lability."
      },
      {
        organ: "Gastrointestinal",
        description: "Gastric mucosal ulceration, upper GI bleeding (especially with concurrent coagulopathy or mechanical ventilation)."
      },
      {
        organ: "Musculoskeletal",
        description: "Acute quadriplegic myopathy, severe muscle catabolism."
      }
    ]
  },
  interactions: [
    {
      drug: "Neuromuscular Blockers (e.g., Cisatracurium, Rocuronium)",
      mechanism: "Synergistic inhibition of muscle protein synthesis and receptor down-regulation",
      consequence: "Prolonged critical illness myopathy and delayed ventilator weaning",
      icuAction: "Minimize duration of concurrent NMBAs and steroids; monitor train-of-four and perform daily wake-up trials."
    },
    {
      drug: "CYP3A4 Inducers (e.g., Rifampin, Phenytoin, Carbamazepine)",
      mechanism: "Accelerated hepatic 11β-HSD and CYP3A4 metabolism of hydrocortisone",
      consequence: "Subtherapeutic corticosteroid levels and treatment failure in adrenal crisis",
      icuAction: "Increase hydrocortisone dose by 50–100% when co-administered with strong CYP3A4 inducers."
    },
    {
      drug: "Insulin / Oral Antidiabetics",
      mechanism: "Opposing physiological effect on hepatic gluconeogenesis and peripheral insulin sensitivity",
      consequence: "Severe hyperglycemia",
      icuAction: "Initiate proactive intravenous insulin infusion with frequent glucose monitoring (q1–2h initially, then q4h)."
    }
  ],
  monitoring: {
    parameters: [
      "Blood glucose every 2–4 hours during continuous infusion (target 140–180 mg/dL)",
      "Serum potassium, sodium, and chloride daily (or q12h in unstable shock)",
      "Vasopressor requirements (wean hydrocortisone after vasopressors are stopped)",
      "Surveillance for secondary superinfections (fungemia, VAP, bacteremia)",
      "ICU delirium screening via CAM-ICU twice daily"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["septic-shock-ssc2026-corticosteroids"],
    claimCitations: [
      {
        claim: "CAPE COD randomized controlled trial demonstrated early IV hydrocortisone 200 mg/day continuous infusion significantly reduced 28-day mortality in severe CAP admitted to the ICU.",
        source: "Dequin PF, Meziani F, Quenot JP, et al. Hydrocortisone in Severe Community-Acquired Pneumonia. N Engl J Med. 2023;388(21):1931-1941. PMID: 37272571."
      },
      {
        claim: "Surviving Sepsis Campaign suggests IV hydrocortisone 200 mg/day for septic shock refractory to vasopressors.",
        source: "Surviving Sepsis Campaign 2021/2026 Guidelines. Crit Care Med 2021;49:e1063-e1143."
      },
      {
        claim: "ADRENAL trial showed hydrocortisone 200 mg/day continuous infusion significantly accelerated shock reversal and reduced ICU stay, without 90-day mortality difference.",
        source: "Venkatesh B, et al. Adjunctive Glucocorticoid Therapy in Patients with Septic Shock. N Engl J Med 2018;378:797-808."
      },
      {
        claim: "APROCCHSS trial showed hydrocortisone plus fludrocortisone significantly reduced 90-day all-cause mortality in refractory septic shock.",
        source: "Annane D, et al. Hydrocortisone plus Fludrocortisone for Adults with Septic Shock. N Engl J Med 2018;378:809-818."
      }
    ]
  },
  patientScenarios: [
    {
      title: "Vasopressor-Refractory Septic Shock",
      clinicalContext: "A 64-year-old patient with severe fecal peritonitis remains hypotensive (MAP 58 mmHg) despite 3.5 L balanced crystalloids, norepinephrine at 0.35 mcg/kg/min, and vasopressin at 0.03 units/min for 5 hours.",
      decision: "Initiate hydrocortisone 200 mg/24h continuous IV infusion.",
      rationale: "Patient meets international consensus criteria for refractory septic shock; stress-dose hydrocortisone restores vascular tone, shortens duration of vasopressor support, and accelerates shock resolution."
    },
    {
      title: "Acute Adrenal Crisis in Known Addisonian",
      clinicalContext: "A 32-year-old with primary adrenal insufficiency presents with severe gastroenteritis, vomiting, MAP 50 mmHg, Na⁺ 124 mEq/L, K⁺ 6.1 mEq/L, and blood glucose 52 mg/dL.",
      decision: "Administer hydrocortisone 100 mg IV bolus stat, followed by 200 mg/24h continuous infusion, isotonic fluid resuscitation, and D50W.",
      rationale: "Hydrocortisone provides both life-saving glucocorticoid receptor activation and mineralocorticoid activity (at doses >100 mg/day), correcting hypotension and electrolyte disturbances without needing fludrocortisone acutely."
    }
  ],
  examTraps: [
    {
      misconception: "Every patient with sepsis or mild septic shock should automatically receive stress-dose steroids on admission.",
      reality: "Steroids are only indicated when adequate fluid resuscitation and vasopressor therapy (≥0.25 mcg/kg/min) fail to restore hemodynamic stability.",
      explanation: "Indiscriminate steroid use in mild sepsis does not improve survival and increases the burden of hyperglycemia, secondary infections, and ICU weakness."
    },
    {
      misconception: "Hydrocortisone must always be co-administered with oral fludrocortisone in acute adrenal crisis.",
      reality: "Stress-dose hydrocortisone (≥100–200 mg/day) saturates mineralocorticoid receptors; fludrocortisone is only required when hydrocortisone is tapered down to maintenance doses (<50 mg/day).",
      explanation: "Hydrocortisone has an inherent mineralocorticoid:glucocorticoid ratio of 1:1. 200 mg of hydrocortisone delivers the mineralocorticoid equivalence of ~100–200 mcg fludrocortisone."
    }
  ],
  searchAliases: [
    "hydrocortisone",
    "solu-cortef",
    "stress dose steroids",
    "adrenal crisis steroid",
    "septic shock hydrocortisone",
    "cortisol"
  ],
  relatedTopicIds: [
    "septic-shock",
    "shock",
    "endocrine-emergencies"
  ]
};
