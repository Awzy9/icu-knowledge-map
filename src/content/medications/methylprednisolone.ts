import type { Medication } from "@/content-types/medication";

export const methylprednisolone: Medication = {
  id: "methylprednisolone",
  slug: "methylprednisolone",
  name: "Methylprednisolone",
  genericName: "Methylprednisolone Sodium Succinate",
  brandNames: ["Solu-Medrol", "Depo-Medrol", "Medrol"],
  class: "Intermediate-Acting Synthetic Glucocorticoid with Minimal Mineralocorticoid Activity",
  category: "corticosteroids",
  subcategory: "Corticosteroids",
  summary: "Potent parenteral glucocorticoid with ~5× the anti-inflammatory potency of hydrocortisone and minimal mineralocorticoid action — cornerstone therapy for severe asthma and COPD exacerbations, and non-resolving fibroproliferative ARDS.",
  mechanism: {
    title: "Potent Glucocorticoid Receptor Transrepression & Transactivation",
    steps: [
      "Rapidly enters target cells and binds high-affinity cytoplasmic glucocorticoid receptors (GR-α).",
      "GR-steroid complex homodimerizes and translocates to nuclear response elements (GREs).",
      "Directly represses AP-1 and NF-κB transcription factors, turning off gene expression for pro-inflammatory cytokines (IL-1, IL-2, IL-6, IL-8, TNF-α), chemokines, and inducible COX-2.",
      "Stimulates expression of lipocortin-1 (annexin A1), inhibiting phospholipase A2 (PLA2) and blocking leukotriene/prostaglandin cascades in pulmonary airways.",
      "Possesses 5:1 glucocorticoid-to-mineralocorticoid selectivity over hydrocortisone, preventing significant sodium retention and volume overload."
    ],
    visualDiagram: "GR Agonism (5× Potency) → Lipocortin-1 ↑ + NF-κB Suppression ↓ → Bronchial & Alveolar Anti-Inflammation"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Airway resistance reduction, PaO2/FiO2 ratio improvement, inflammatory cytokine suppression",
    halfLife: "Plasma t1/2: 2.5–3 hours (Biological tissue duration: 18–36 hours)",
    proteinBinding: "77% bound to transcortin and albumin; free active fraction higher than hydrocortisone",
    metabolism: "Hepatic CYP3A4-mediated oxidation to inactive metabolites",
    elimination: "Renal excretion of conjugated metabolites (<10% unchanged)",
    vdNotes: "Vd ~0.7–1.5 L/kg; high lung tissue penetration makes it ideal for acute pulmonary inflammation"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Established first-line systemic corticosteroid for acute severe asthma exacerbations and status asthmaticus when oral administration is impaired (~32–40 mg/day IV, equivalent to oral prednisone 40–50 mg/day per GINA 2026).",
      "Effective for acute exacerbations of COPD requiring ICU/NIV support (~32–40 mg IV daily for 5 days per GOLD 2026 recommendations).",
      "Low mineralocorticoid activity prevents intravascular fluid expansion and severe hypokalemia, making it preferable to hydrocortisone in non-cardiogenic pulmonary edema / ARDS where volume retention is undesirable.",
      "Intermediate biological duration (18–36h) provides smooth anti-inflammatory coverage with once- or twice-daily dosing."
    ],
    whyIDont: [
      "Not appropriate as sole monotherapy for acute primary adrenal crisis because it lacks sufficient mineralocorticoid activity to replace aldosterone.",
      "High incidence of acute steroid-induced hyperglycemia; frequent glucose monitoring and sliding scale/infusion insulin required.",
      "In acute ARDS, high-dose unguided pulsed megadoses (>1–2 g/day) increase secondary infection rates and mortality; protocolized physiological dosing is mandatory.",
      "Potential for prolonged muscle weakness and quadriparesis if co-administered with non-depolarizing paralytics for >48 hours."
    ],
    bedsidePearl: "For severe asthma or COPD exacerbation, oral prednisone and IV methylprednisolone have equivalent clinical efficacy if enteral absorption is intact. Reserve IV methylprednisolone for patients who are intubated, vomiting, or in impending respiratory arrest!"
  },
  dosing: {
    routine: "Severe Asthma: ~32–40 mg/day IV (prednisone-equivalent 40–50 mg/day) in 1–2 divided doses for 5–7 days. Severe COPD: ~32–40 mg/day IV for 5 days total per GOLD 2026.",
    syndromeSpecific: [
      {
        syndrome: "Severe Acute Asthma / Status Asthmaticus",
        regimen: "32–40 mg/day IV in 1–2 divided doses (or 1 mg/kg/day IV). Transition to oral prednisone (40–50 mg/day) once enteral intake is feasible, completing a 5–7 day total course.",
        reference: "GINA 2026 Global Strategy for Asthma Management and Prevention",
        note: "Systemic corticosteroids (oral or IV) accelerate airflow recovery; oral administration is preferred when enteral absorption is intact."
      },
      {
        syndrome: "Acute Exacerbation of COPD (ICU / NIV)",
        regimen: "32–40 mg IV daily (or in 2 divided doses) for 5 days total (equivalent to oral prednisone 40 mg/day).",
        reference: "GOLD 2026 Report; REDUCE Trial (JAMA 2013)",
        note: "5 days of systemic corticosteroids is non-inferior to 14 days and prevents cumulative toxicity."
      },
      {
        syndrome: "Persistent ARDS (Study-Specific Protocol: Meduri / Late Phase)",
        regimen: "Study-Specific Regimen: 1–2 mg/kg/day IV (divided or continuous) × 7–14 days, followed by structured taper per specific trial protocol (e.g., Meduri et al. Chest 2007).",
        reference: "2024 SCCM Focused Update on Corticosteroids in ARDS; Meduri Trial Protocol",
        note: "Current 2024 SCCM guidance supports considering corticosteroids in moderate-to-severe ARDS, but does not mandate a single universal molecule or dose. Do not blend methylprednisolone protocols with DEXA-ARDS."
      }
    ],
    renallyAdjusted: [
      {
        crclRange: "Any CrCl / AKI / ESRD",
        dose: "No dosage adjustment required."
      }
    ],
    hdDosing: "No supplemental dose required post-hemodialysis.",
    crrtDosing: "No dosage adjustment required for CRRT."
  },
  organFailure: {
    renalConsiderations: "Minimal mineralocorticoid effect compared to hydrocortisone; safer in patients with hypervolemia and oliguric AKI.",
    hepaticConsiderations: "Extensively metabolized by hepatic CYP3A4; monitor for enhanced glucocorticoid adverse effects (hyperglycemia, agitation) in severe hepatic failure."
  },
  toxicity: {
    majorWarnings: [
      "Severe acute hyperglycemia: can induce hyperosmolar states and increase surgical site or bloodstream infection rates.",
      "Neuropsychiatric disturbances: acute steroid psychosis, severe agitation, sleep disruption, delirium.",
      "Critical Illness Polyneuromyopathy (CIPNM): exacerbated when combined with neuromuscular blockade or aminoglycosides.",
      "Immunosuppression and masking of infection: blunts pyrexia; steroid leukocytosis occurs independently of active bacteremia."
    ],
    organToxicities: [
      {
        organ: "Endocrine & Metabolic",
        description: "Marked hyperglycemia, insulin resistance, suppression of endogenous hypothalamic-pituitary-adrenal (HPA) axis."
      },
      {
        organ: "Neurological & Psychiatric",
        description: "Steroid psychosis, agitation, insomnia, ICU delirium, emotional lability."
      },
      {
        organ: "Musculoskeletal",
        description: "Acute necrotizing myopathy when combined with NMBAs; proximal muscle atrophy with prolonged courses (>7–10 days)."
      },
      {
        organ: "Gastrointestinal",
        description: "Gastric ulceration and bleeding, particularly with concurrent NSAIDs or anticoagulation."
      }
    ]
  },
  interactions: [
    {
      drug: "Non-depolarizing NMBAs (Cisatracurium, Rocuronium)",
      mechanism: "Synergistic catabolic effect on skeletal muscle sarcomeres and motor endplates",
      consequence: "Profound prolonged quadriparesis and ICU-acquired weakness / acute quadriplegic myopathy",
      icuAction: "Limit concurrent NMBA duration to <48h whenever feasible; perform daily train-of-four and spontaneous breathing trials."
    },
    {
      drug: "Strong CYP3A4 Inducers (Phenytoin, Carbamazepine, Rifampin)",
      mechanism: "Induction of hepatic CYP3A4 accelerating methylprednisolone clearance",
      consequence: "Reduced methylprednisolone serum concentrations and diminished clinical anti-inflammatory efficacy",
      icuAction: "Monitor clinical response carefully; dose titration may be required during co-administration."
    },
    {
      drug: "Insulin / Oral Hypoglycemics",
      mechanism: "Glucocorticoid-induced gluconeogenesis and peripheral insulin resistance",
      consequence: "Severe hyperglycemia and increased insulin requirements (often requiring 50–100% insulin dose increases)",
      icuAction: "Initiate proactive ICU insulin infusion protocol or increase sliding scale coverage with regular fingersticks q4h."
    }
  ],
  monitoring: {
    parameters: [
      "Blood glucose every 4–6 hours (anticipate insulin requirement escalation)",
      "Peak inspiratory and plateau pressures, dynamic compliance in ventilated patients",
      "Signs of secondary infection (fever curve, sputum purulence, procalcitonin)",
      "Daily neurological exam and CAM-ICU delirium screening",
      "Peripheral muscle strength and readiness for physical therapy / mobilization"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["asthma-guideline-gina-2026"],
    trialIds: ["pneumonia-cape-cod-trial"],
    claimCitations: [
      {
        claim: "Systemic corticosteroids accelerate recovery of airflow obstruction and reduce hospitalization length in severe acute asthma and COPD exacerbations.",
        source: "Global Initiative for Asthma (GINA 2026 Report); Global Initiative for Chronic Obstructive Lung Disease (GOLD 2026 Report)."
      },
      {
        claim: "Short-course corticosteroid therapy (5 days) is non-inferior to longer courses (14 days) in acute exacerbations of COPD.",
        source: "Leuppi JD, et al. Short-term vs Conventional Glucocorticoid Therapy in Acute Exacerbations of COPD (REDUCE). JAMA 2013;309:2223-2231."
      }
    ]
  },
  patientScenarios: [
    {
      title: "Acute Severe Asthma Exacerbation in the Resuscitation Bay",
      clinicalContext: "A 28-year-old with severe brittle asthma presents with diaphoresis, pulsus paradoxus 22 mmHg, PEFR 30% predicted, speaking in single words despite 3 continuous albuterol/ipratropium nebulizers.",
      decision: "Administer methylprednisolone 60–80 mg IV stat (or 1 mg/kg IV) along with IV magnesium sulfate 2 g over 20 min and continuous inhaled beta-agonists.",
      rationale: "Early systemic corticosteroid administration accelerates the reduction of airway edema and inflammation. Because oral intake is impaired by severe dyspnea, parenteral IV administration is indicated."
    },
    {
      title: "Hospitalized COPD Exacerbation on Non-Invasive Ventilation",
      clinicalContext: "A 66-year-old with severe COPD (GOLD Stage 3) admitted to ICU on BiPAP with PaCO2 68 mmHg and pH 7.28. The junior resident orders methylprednisolone 125 mg IV q6h for 14 days.",
      decision: "Modify order to oral Prednisone 40 mg daily (or IV Methylprednisolone 32–40 mg daily if oral route is unavailable) for 5 days total.",
      rationale: "Per GOLD 2026 and the REDUCE trial, 5 days of systemic corticosteroid therapy (prednisone 40 mg/day or equivalent) is non-inferior to 14 days, achieving identical FEV1 recovery and avoiding cumulative steroid toxicity."
    }
  ],
  examTraps: [
    {
      misconception: "IV methylprednisolone works faster and better than oral prednisone for severe asthma.",
      reality: "Oral and IV systemic corticosteroids have equivalent clinical efficacy and time to onset of anti-inflammatory action (4–6 hours).",
      explanation: "Oral prednisone has near 100% bioavailability. IV route is reserved for patients unable to swallow, vomiting, mechanically ventilated, or in severe respiratory distress."
    },
    {
      misconception: "Methylprednisolone is the drug of choice for acute primary adrenal crisis.",
      reality: "Hydrocortisone is the drug of choice for adrenal crisis because it provides essential mineralocorticoid activity (1:1 ratio) that methylprednisolone lacks.",
      explanation: "Adrenal crisis involves life-threatening aldosterone and cortisol deficiency. Methylprednisolone does not provide adequate mineralocorticoid replacement."
    }
  ],
  searchAliases: [
    "methylprednisolone",
    "solu-medrol",
    "medrol",
    "asthma steroid",
    "copd steroid",
    "ards steroid"
  ],
  relatedTopicIds: [
    "asthma",
    "copd-exacerbation",
    "ards",
    "pneumonia",
    "respiratory-failure-basics"
  ]
};
