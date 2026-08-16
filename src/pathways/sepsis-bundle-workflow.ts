import type { Pathway } from "@/content-types";

export const sepsisBundleWorkflow: Pathway = {
  id: "sepsis-bundle-workflow",
  slug: "sepsis-bundle-workflow",
  title: "Sepsis Recognition, Source Control & De-escalation",
  oneLiner: "From 1-hour bundle execution and rapid anatomical source control to 48–72 hour antimicrobial de-escalation.",
  startingProblem: "Suspected Sepsis / Infection with Acute Organ Dysfunction",
  relatedTopicIds: [
      "sepsis",
      "septic-shock",
      "mdr-organisms",
      "hap",
      "vap",
      "necrotizing-soft-tissue-infections",
      "shock",
      "mechanical-ventilation"
    ],
  flow: {
    id: "screen-sofa-organ-dysfunction",
    label: "Screen for acute organ dysfunction: Delta SOFA >= 2",
    kind: "step",
    role: "assessment",
    detail: "Evaluate PaO2/FiO2 ratio, platelets, bilirubin, MAP / vasopressor need, GCS score, and creatinine/urine output. Identify infected vs non-infectious systemic inflammation.",
    topicId: "sepsis",
    children: [
      {
        id: "execute-1-hour-bundle",
        label: "Execute Surviving Sepsis Campaign 1-Hour Bundle",
        kind: "step",
        role: "intervention",
        detail: "1. Measure blood lactate; 2. Obtain blood cultures x2 prior to antibiotics; 3. Administer broad-spectrum IV antimicrobials; 4. Rapid 30 mL/kg crystalloid for hypotension/lactate >=4; 5. Start vasopressors if MAP < 65.",
        children: [
          {
            id: "identify-anatomical-source",
            label: "Identify anatomical infection source & pursue emergent source control (<6–12h)",
            kind: "branch",
            role: "decision",
            detail: "Antibiotics alone will not sterilize closed-space infection. Urgent surgical/percutaneous source control is time-critical.",
            children: [
              {
                id: "surgical-percutaneous-control",
                label: "Drainable Collection / Perforated Viscus: Emergent surgical/IR drainage",
                kind: "step",
                role: "intervention",
                detail: "Laparotomy, percutaneous abscess drainage, nephrostomy for pyonephrosis, or infected line removal.",
              },
              {
                id: "medical-pulmonary-soft-tissue",
                label: "Non-Drainable (Pneumonia / Cellulitis): Medical therapy & organ support",
                kind: "step",
                role: "intervention",
                detail: "Optimize drug dosing (loading doses, continuous beta-lactam infusions), supportive ventilation, and hemodynamic targets.",
              },
            ],
          },
          {
            id: "reassess-response-3-6-hours",
            label: "Reassess lactate clearance and perfusion indices at 3–6 hours",
            kind: "step",
            role: "reassessment",
            detail: "Target >= 20% lactate clearance per 2h. Normalize capillary refill time and restore urine output.",
            children: [
              {
                id: "microbiology-de-escalation-48-72h",
                label: "At 48–72 hours: Review microbiology & de-escalate antimicrobials",
                kind: "step",
                role: "reassessment",
                detail: "Narrow broad-spectrum agents (vancomycin, anti-pseudomonals) based on definitive culture sensitivities; set total duration (typically 5–7 days for responsive uncomplicated infection).",
                topicId: "sepsis",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "sepsis-delayed-source-control-mortality", text: "Every hour of delay in necessary surgical source control in septic shock significantly increases ICU mortality — involve surgical/interventional services immediately." },
    { id: "sepsis-inappropriate-broad-spectrum", text: "Continuing unguided broad-spectrum combination therapy beyond 72h without documented microbiological justification drives fungal superinfections and multi-drug resistance." },
  ],
};
