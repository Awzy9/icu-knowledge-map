import type { ClinicalCase } from "@/content-types/clinical-case";

export const severeHyponatremiaCase: ClinicalCase = {
  "id": "case-severe-hyponatremia",
  "slug": "severe-hyponatremia",
  "title": "Severe Symptomatic Hyponatremia with Status Seizures",
  "subtitle": "Acute hypertonic saline protocol, osmotic demyelination syndrome (ODS) prevention, and correction rate limits",
  "difficulty": "intermediate",
  "system": "renal",
  "tags": [
    "severe-sodium-disorders",
    "hyponatremia",
    "hypertonic-saline",
    "seizures"
  ],
  "objectives": [
    "Recognize acute severe symptomatic hyponatremia as a medical emergency",
    "Administer 3% Hypertonic Saline boluses (100–150 mL) to terminate seizures",
    "Enforce strict 24-hour correction limits (≤8–10 mEq/L/24h) to prevent ODS"
  ],
  "initialPresentation": {
    "history": "A 54-year-old female with thiazide-induced hyponatremia presents actively seizing with serum sodium 108 mEq/L.",
    "vitals": {
      "HR": "118/min",
      "BP": "152/90 mmHg",
      "Serum Na+": "108 mEq/L"
    },
    "keyFindings": [
      "Generalized convulsive seizure activity refractory to Lorazepam",
      "Profound hypotonic hyponatremia (Na+ 108 mEq/L)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is in status epilepticus driven by severe hyponatremic cerebral edema (Na+ 108 mEq/L).",
      "question": "What is the definitive, guideline-recommended emergency treatment?",
      "options": [
        {
          "id": "1-a",
          "text": "Administer 3% Hypertonic Saline 100–150 mL IV bolus over 10–15 minutes; repeat up to two times if seizures persist",
          "isCorrect": true,
          "explanation": "In hyponatremic encephalopathy with seizures, the immediate goal is a rapid 4–6 mEq/L increase in serum sodium using 3% NaCl boluses, which rapidly decreases brain volume and halts seizures.",
          "physiologicReasoning": "Acute water influx into astrocytes causes acute cerebral edema. Raising extracellular osmolarity by 4–6 mEq/L rapidly shrinks astrocyte volume.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Serum sodium rises by 4 mEq/L",
              "Seizure activity terminates completely"
            ],
            "clinicalResponse": "Following the first 150 mL bolus of 3% NaCl, convulsions stop within 8 minutes."
          }
        },
        {
          "id": "1-b",
          "text": "Administer 1 L of 0.9% Normal Saline wide open over 30 minutes",
          "isCorrect": false,
          "explanation": "In severe hyponatremia with SIADH, 0.9% Normal Saline can worsen hyponatremia via desalination.",
          "whyNot": "Normal saline is ineffective for acute hyponatremic neuro-emergencies.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Ongoing severe brain swelling"
            ],
            "clinicalResponse": "Seizures continue and serum sodium remains 108 mEq/L."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "up"
      }
    }
  ],
  "relatedMedicationSlugs": [],
  "relatedTopicIds": [
    "severe-sodium-disorders",
    "altered-consciousness"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "severe-hyponatremia"
  ],
  "references": [
  "Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia"
]
};
