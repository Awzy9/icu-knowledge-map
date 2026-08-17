import type { Pathway } from "@/content-types";

export const neutropenicImmunocompromisedSepsis: Pathway = {
  id: "neutropenic-immunocompromised-sepsis",
  slug: "neutropenic-immunocompromised-sepsis",
  title: "Neutropenic & Immunocompromised Sepsis",
  oneLiner: "Immediate 1-hour empiric antipseudomonal therapy, host-specific diagnostic pathway, and oncologic emergency escalation.",
  startingProblem: "Immunocompromised Patient with Fever, Shock, or Organ Failure",
  relatedTopicIds: [
    "immunocompromised-oncologic-critical-illness",
    "sepsis",
    "hap",
    "ards",
    "aki",
    "crrt",
    "hyperkalemia",
  ],
  flow: {
    id: "trigger-immunocompromised-sepsis",
    label: "Trigger: Fever >= 38.3°C, Shock, or Organ Failure in Neutropenic or Oncology Patient",
    kind: "step",
    role: "assessment",
    detail: "Draw 2 sets of blood cultures (peripheral + CVC lumens) and serum lactate immediately.",
    topicId: "immunocompromised-oncologic-critical-illness",
    children: [
      {
        id: "one-hour-empiric-antimicrobial",
        label: "Administer Empiric Antipseudomonal Beta-Lactam within 60 Minutes",
        kind: "step",
        role: "intervention",
        detail: "Cefepime 2 g IV q8h, Piperacillin-tazobactam 4.5 g IV q6h, or Meropenem 1 g IV q8h (+/- Vancomycin for shock/catheter).",
        children: [
          {
            id: "host-diagnostic-workup",
            label: "Evaluate Specific Organ Failure & Host Complications",
            kind: "branch",
            role: "assessment",
            detail: "Respiratory Failure vs Tumor Lysis Syndrome vs CAR-T Toxicity vs Fungal Infection.",
            children: [
              {
                id: "respiratory-failure-workup",
                label: "Acute Respiratory Failure: HRCT Chest within 24h + Early BAL (PJP / Aspergillus / DAH)",
                kind: "step",
                role: "intervention",
                detail: "Trial HFNC/NIV with low threshold for intubation (HIGH trial); high-dose TMP-SMX + steroids for PJP; Voriconazole for Aspergillus.",
              },
              {
                id: "tumor-lysis-protocol",
                label: "Tumor Lysis Syndrome: Vigorous IV Hydration + Rasburicase 0.2 mg/kg + CRRT",
                kind: "step",
                role: "intervention",
                detail: "Rasburicase contraindicated in G6PD; CRRT for refractory hyperkalemia and hyperphosphatemia.",
              },
              {
                id: "car-t-toxicity-protocol",
                label: "Post-CAR-T Toxicity: Tocilizumab 8 mg/kg for CRS vs Dexamethasone for ICANS",
                kind: "step",
                role: "intervention",
                detail: "Grade with ASTCT criteria; avoid tocilizumab for isolated ICANS neurotoxicity.",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "rasburicase-g6pd-flag", text: "Rasburicase in G6PD deficiency triggers fatal methemoglobinemia and massive intravascular hemolysis." },
    { id: "leukostasis-prbc-danger", text: "Transfusing red blood cells in hyperleukocytosis before cytoreduction increases viscosity and precipitates fatal leukostasis." },
  ],
};
