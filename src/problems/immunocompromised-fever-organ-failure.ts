import type { ClinicalProblem } from "@/content-types";

export const immunocompromisedFeverOrganFailure: ClinicalProblem = {
  id: "immunocompromised-fever-organ-failure",
  slug: "immunocompromised-fever-organ-failure",
  title: "Immunocompromised Patient with Fever + Organ Failure",
  category: "infectious",
  oneLiner: "Bedside diagnostic framing and emergency management of acute fever, sepsis, respiratory failure, or oncologic emergency in an immunocompromised host.",
  relatedTopicIds: [
    "immunocompromised-oncologic-critical-illness",
    "sepsis",
    "septic-shock",
    "hap",
    "ards",
    "aki",
    "crrt",
    "hyperkalemia",
    "intracranial-hemorrhage",
  ],
  body: [
    {
      type: "paragraph",
      text: "The immunocompromised or oncology patient presenting with acute fever, shock, or organ failure requires a rapid dual-track evaluation: (1) immediate host-defect-targeted antimicrobial resuscitation within 1 hour, and (2) early recognition of life-threatening oncologic and immunotherapy emergencies (Tumor Lysis Syndrome, Leukostasis, CAR-T CRS/ICANS).",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Critical Medication Warning: Never administer Rasburicase in G6PD deficiency (triggers fatal methemoglobinemia and hemolysis). Never transfuse PRBCs in severe leukostasis before cytoreduction has lowered the blast count (triggers lethal vascular sludging).",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. ONE-HOUR ANTIMICROBIAL PROTOCOL",
          value: "• Blood Cultures x 2 sets (peripheral and every CVC lumen) + serum lactate.\n• Immediate Empiric Antipseudomonal Beta-Lactam: Cefepime (2 g IV q8h), Piperacillin-tazobactam (4.5 g IV q6h), or Meropenem (1 g IV q8h) within 60 minutes.\n• Add Vancomycin: If septic shock, catheter infection, pneumonia, severe mucositis, or Gram-positive bacteremia is suspected.\n• Add Antifungal Coverage: If persistent neutropenic fever >= 4–7 days or pulmonary nodules/infiltrates present (Echinocandin or Voriconazole).",
        },
        {
          label: "2. ACUTE RESPIRATORY FAILURE WORKUP",
          value: "• High-Resolution Chest CT (HRCT) within 24 hours: Halo sign (Aspergillus), perihilar ground glass (PJP), diffuse infiltrates (bacterial, viral, DAH).\n• Early Bronchoscopy / BAL within 24–48 hours: Send for fungal biomarkers (Galactomannan, BDG), PJP PCR, viral multiplex, and cytology.\n• Avoid Delayed Intubation: While HFNC can be trialed, do not delay invasive mechanical ventilation if work of breathing worsens (HIGH landmark trial).",
        },
        {
          label: "3. ONCOLOGIC & IMMUNOTHERAPY EMERGENCIES",
          value: "• Tumor Lysis Syndrome (TLS): Check uric acid, K+, phosphate, calcium. Vigorous IV hydration + Rasburicase 0.2 mg/kg + CRRT for refractory hyperkalemia/phosphate. Avoid IV calcium unless symptomatic tetany/seizure.\n• Hyperleukocytosis / Leukostasis: WBC > 100,000/uL with hypoxia/altered mental status -> Hydroxyurea + urgent chemotherapy + avoid PRBC transfusions.\n• CAR-T CRS vs ICANS: Cytokine Release Syndrome (fever + shock) -> Tocilizumab 8 mg/kg; Neurotoxicity (ICANS: word-finding difficulty, ICE score drop) -> Dexamethasone 10–20 mg IV (avoid tocilizumab for isolated ICANS).",
        },
        {
          label: "4. MODERN PROGNOSTICATION & FULL ICU TRIAL",
          value: "• Objective Physiological Evaluation: Base decisions on acute organ failure reversibility (SOFA score trajectory over 48–72 hours) rather than cancer diagnosis or stage alone. Offer a 3–5 day Full ICU Trial with daily multidisciplinary reassessment.",
        },
      ],
    },
  ],
};
