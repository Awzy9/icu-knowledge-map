import type { ClinicalCase } from "@/content-types/clinical-case";

export const refractorySepticShockCase: ClinicalCase = {
  "id": "case-refractory-septic-shock",
  "slug": "refractory-septic-shock",
  "title": "Refractory Septic Shock: Multi-Vasoactive Strategy",
  "subtitle": "Escalating vasopressor requirements and selection of second-line vasoactive and corticosteroid agents",
  "difficulty": "advanced",
  "system": "cardiovascular",
  "tags": [
    "sepsis",
    "shock",
    "vasopressin",
    "hydrocortisone",
    "norepinephrine"
  ],
  "objectives": [
    "Identify thresholds for initiating second-line vasopressin in septic vasoplegia",
    "Integrate stress-dose corticosteroids according to Surviving Sepsis Campaign guidelines"
  ],
  "initialPresentation": {
    "history": "A 66-year-old male with biliary sepsis remains hypotensive (MAP 56 mmHg) despite 3.5 L crystalloids and Norepinephrine at 0.35 mcg/kg/min. Lactate is 5.4 mmol/L.",
    "vitals": {
      "HR": "112/min",
      "BP": "78/45 mmHg",
      "MAP": "56 mmHg",
      "Lactate": "5.4 mmol/L"
    },
    "keyFindings": [
      "Refractory distributive vasoplegia on high-dose norepinephrine",
      "Oliguria (<15 mL/hr)",
      "Echocardiogram shows hyperdynamic RV and mild global LV depression"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient remains hypotensive on Norepinephrine 0.35 mcg/kg/min after adequate volume loading.",
      "question": "What is the best next pharmacologic addition per Surviving Sepsis Campaign guidelines?",
      "options": [
        {
          "id": "1-a",
          "text": "Add Vasopressin at a fixed dose of 0.03 units/min + Hydrocortisone 200 mg/day IV continuous infusion",
          "isCorrect": true,
          "explanation": "SSC guidelines recommend adding Vasopressin (0.03 units/min) when norepinephrine reaches 0.25–0.5 mcg/kg/min and adding hydrocortisone 200 mg/day for ongoing vasopressor requirement.",
          "physiologicReasoning": "Exogenous vasopressin stimulates V1 vascular smooth muscle receptors independent of adrenergic pathways. Hydrocortisone restores vascular adrenergic receptor density.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "V1 stimulation increases arterial tone",
              "Norepinephrine requirements decrease by 40%"
            ],
            "clinicalResponse": "Adding vasopressin and hydrocortisone raises MAP to 68 mmHg within 20 minutes."
          }
        },
        {
          "id": "1-b",
          "text": "Escalate Norepinephrine alone to 1.5 mcg/kg/min as monotherapy",
          "isCorrect": false,
          "explanation": "High-dose catecholamine monotherapy causes severe splanchnic and digital vasoconstriction and tachyarrhythmias.",
          "whyNot": "Multimodal vasoactive management is superior to excessive catecholamine monotherapy.",
          "outcome": {
            "classification": "suboptimal",
            "immediateEffects": [
              "Digital ischemia and rising lactate"
            ],
            "clinicalResponse": "Extremities become cold and ischemic."
          }
        }
      ],
      "physiologyDisplay": {
        "svr": "down-down",
        "map": "down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "norepinephrine",
    "vasopressin",
    "hydrocortisone",
    "dobutamine"
  ],
  "relatedTopicIds": [
    "septic-shock",
    "shock"
  ],
  "relatedPathwaySlugs": [
    "sepsis-bundle-workflow"
  ],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "Surviving Sepsis Campaign Guidelines 2021"
]
};
