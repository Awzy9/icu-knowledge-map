import type { ClinicalCase } from "@/content-types/clinical-case";

export const mixedAcidBaseCase: ClinicalCase = {
  "id": "case-mixed-acid-base",
  "slug": "mixed-acid-base",
  "title": "Triple Mixed Acid-Base Disorder in Sepsis & Cirrhosis",
  "subtitle": "Systematic 6-step ABG analysis: High Anion Gap Metabolic Acidosis, Metabolic Alkalosis, and Respiratory Alkalosis",
  "difficulty": "advanced",
  "system": "renal",
  "tags": [
    "acid-base-disorders",
    "metabolic-acidosis",
    "anion-gap"
  ],
  "objectives": [
    "Execute systematic 6-step ABG analysis in critically ill ICU patients",
    "Calculate and correct the serum Anion Gap for hypoalbuminemia",
    "Apply the Delta Gap (Delta-Delta) to uncover co-existing metabolic alkalosis"
  ],
  "initialPresentation": {
    "history": "A 58-year-old male with cirrhosis is admitted with severe septic shock from SBP and vomiting. ABG shows pH 7.24, PaCO2 24, HCO3 10. BMP shows Na 132, Cl 82, Albumin 1.8, Lactate 6.8.",
    "vitals": {
      "HR": "122/min",
      "BP": "84/48 mmHg",
      "MAP": "60 mmHg",
      "RR": "32/min"
    },
    "keyFindings": [
      "ABG: pH 7.24, PaCO2 24 mmHg, HCO3 10 mEq/L",
      "BMP: Na 132, Cl 82, Albumin 1.8 g/dL, Lactate 6.8 mmol/L"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient presents with severe sepsis and cirrhosis.",
      "question": "What is the albumin-corrected Anion Gap and the primary metabolic disorder?",
      "options": [
        {
          "id": "1-a",
          "text": "Corrected Anion Gap is 45.5 mEq/L (Severe High Anion Gap Metabolic Acidosis / HAGMA)",
          "isCorrect": true,
          "explanation": "Observed AG = 132 - (82 + 10) = 40. Corrected AG = 40 + 2.5 × (4.0 - 1.8) = 45.5 mEq/L.",
          "physiologicReasoning": "Cirrhotic hypoalbuminemia masks the true magnitude of unmeasured organic anions.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Severe HAGMA accurately identified"
            ],
            "clinicalResponse": "The team accurately identifies a massive anion gap of 45.5."
          }
        },
        {
          "id": "1-b",
          "text": "Anion Gap is normal (12 mEq/L)",
          "isCorrect": false,
          "explanation": "Uncorrected AG is 40 mEq/L, which is profoundly abnormal.",
          "whyNot": "Ignoring the anion gap calculation misses life-threatening metabolic keto/lactic acidosis.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Failure to recognize severe metabolic crisis"
            ],
            "clinicalResponse": "Patient deteriorates due to unrecognized septic acidosis."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "norepinephrine",
    "ceftriaxone"
  ],
  "relatedTopicIds": [
    "acid-base-disorders",
    "metabolic-acidosis",
    "septic-shock"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [],
  "references": [
  "Acid-Base Analysis in the ICU"
]
};
