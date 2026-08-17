import type { Pathway } from "@/content-types";

export const neuromuscularRespiratoryFailure: Pathway = {
  id: "neuromuscular-respiratory-failure",
  slug: "neuromuscular-respiratory-failure",
  title: "Neuromuscular Respiratory Failure",
  oneLiner: "Bedside monitoring sequence, 20/30/40 intubation triggers, and disease-modifying immunotherapy in acute neuromuscular crisis.",
  startingProblem: "Rapidly Progressive Weakness & Dyspnea",
  relatedTopicIds: [
    "neuromuscular-critical-illness",
    "mechanical-ventilation",
    "hypercapnic-respiratory-failure",
    "icu-sedation-delirium",
  ],
  flow: {
    id: "trigger-neuromuscular-weakness",
    label: "Trigger: Rapidly progressive ascending weakness, fatiguability, or bulbar symptoms",
    kind: "step",
    role: "assessment",
    detail: "Admit to ICU/step-down; avoid all respiratory depressant sedatives; place on continuous telemetry and capnography.",
    topicId: "neuromuscular-critical-illness",
    children: [
      {
        id: "serial-pump-mechanics",
        label: "Perform Serial Pulmonary Mechanics (FVC, NIF/MIP, MEP, Single-Breath Count)",
        kind: "branch",
        role: "assessment",
        detail: "Assess mechanics every 4–6 hours: FVC < 20 mL/kg, NIF > -30 cmH2O, MEP < 40 cmH2O, or Single-Breath Count < 20.",
        children: [
          {
            id: "airway-intubation-decision",
            label: "Critical Pump or Bulbar Failure Present: Proceed to Elective Endotracheal Intubation",
            kind: "step",
            role: "intervention",
            detail: "Use ROCURONIUM for paralysis. Succinylcholine is strictly contraindicated (lethal hyperkalemia).",
            children: [
              {
                id: "syndromic-immunotherapy",
                label: "Initiate Disease-Specific Immunotherapy",
                kind: "branch",
                role: "decision",
                detail: "Differentiate Guillain-Barré Syndrome vs Myasthenic Crisis vs Other.",
                children: [
                  {
                    id: "gbs-immunotherapy",
                    label: "Guillain-Barré Syndrome: IVIG (2 g/kg over 2–5 days) or Plasma Exchange (5 sessions)",
                    kind: "step",
                    role: "intervention",
                    detail: "Both modalities equal in efficacy (Lancet trial). Corticosteroids are ineffective.",
                  },
                  {
                    id: "mg-immunotherapy",
                    label: "Myasthenic Crisis: Plasma Exchange or IVIG + Hold Pyridostigmine + Steroids",
                    kind: "step",
                    role: "intervention",
                    detail: "Hold oral cholinesterase inhibitors during mechanical ventilation; titrate steroids under PLEX/IVIG cover.",
                  },
                ],
              },
            ],
          },
          {
            id: "stable-mechanics-close-monitoring",
            label: "Mechanics Stable (FVC > 30 mL/kg, NIF < -40 cmH2O, Bulbar Intact)",
            kind: "step",
            role: "reassessment",
            detail: "Continue serial bedside manometry q4h, monitor autonomic telemetry, and initiate early immunotherapy.",
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "succinylcholine-hyperkalemia-flag", text: "Succinylcholine administration in denervated muscle causes massive potassium release and fatal cardiac arrest — always use rocuronium." },
    { id: "normal-abg-trap", text: "Normal ABG does NOT rule out impending neuromuscular collapse — intubate based on FVC trajectory and bulbar failure, not PaO2/PaCO2." },
  ],
};
