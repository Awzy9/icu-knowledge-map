import type { ClinicalCase } from "@/content-types/clinical-case";

export const adrenalCrisisIcuCase: ClinicalCase = {
  "id": "case-adrenal-crisis-icu",
  "slug": "adrenal-crisis-icu",
  "title": "Acute Adrenal Crisis & Glucocorticoid Deficiency",
  "subtitle": "Refractory vasoplegic shock, hyperkalemic hyponatremia, and physiological steroid replacement in critical illness",
  "difficulty": "intermediate",
  "system": "endocrine",
  "tags": [
    "endocrine-emergencies",
    "hydrocortisone",
    "shock",
    "endocrine-emergencies"
  ],
  "objectives": [
    "Recognize the clinical pentad of acute adrenal crisis: refractory shock, hypoglycemia, hyponatremia, hyperkalemia, and abdominal pain",
    "Identify why hydrocortisone is the definitive steroid of choice over dexamethasone or methylprednisolone in adrenal crisis",
    "Administer stress-dose hydrocortisone protocol (100 mg IV stat followed by 200 mg/day continuous infusion) with isotonic saline"
  ],
  "initialPresentation": {
    "history": "A 44-year-old female with known autoimmune primary adrenal insufficiency (Addison's disease) on chronic hydrocortisone (20 mg/day) and fludrocortisone (100 mcg/day) presents to the ICU with severe viral gastroenteritis and inability to tolerate oral medications for 48 hours. She is obtunded, profoundly hypotensive (MAP 48 mmHg), and cold.",
    "vitals": {
      "HR": "128/min weak",
      "BP": "68/38 mmHg",
      "MAP": "48 mmHg",
      "RR": "24/min",
      "Temp": "35.8°C (hypothermia)",
      "Serum Na+": "122 mEq/L",
      "Serum K+": "6.2 mEq/L",
      "Blood Glucose": "52 mg/dL"
    },
    "keyFindings": [
      "Refractory hypotension with minimal response to 2 L of 0.9% Normal Saline and Norepinephrine at 0.25 mcg/kg/min",
      "Severe hypoglycemia (52 mg/dL) and classic electrolyte pattern: Hyponatremia + Hyperkalemia",
      "Hyperpigmentation of palmar creases and mucosal surfaces (primary adrenal failure)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is in acute adrenal crisis with refractory shock, severe hypoglycemia, and hyperkalemia. The resident is about to order Dexamethasone 4 mg IV.",
      "question": "What is the best immediate pharmacologic intervention?",
      "options": [
        {
          "id": "1-a",
          "text": "Administer Hydrocortisone 100 mg IV stat bolus + start 200 mg/24h continuous IV infusion + IV Dextrose 50W (50 mL) + isotonic crystalloid volume resuscitation",
          "isCorrect": true,
          "explanation": "Hydrocortisone is the exact physiological steroid of choice in adrenal crisis because it delivers both glucocorticoid replacement and strong mineralocorticoid activity (1:1 ratio). At doses ≥100 mg/day, it provides maximal mineralocorticoid receptor saturation, correcting both hypotension and hyperkalemia.",
          "physiologicReasoning": "Cortisol deficiency causes vascular smooth muscle unresponsiveness to catecholamines (downregulated adrenoceptors). Aldosterone deficiency impairs distal renal sodium reabsorption and potassium excretion. Hydrocortisone restores both deficits immediately.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Immediate restoration of vascular adrenergic receptor responsiveness",
              "Blood pressure rises rapidly to 110/65 mmHg; norepinephrine weaned off within 2 hours",
              "Serum glucose normalizes to 140 mg/dL; potassium drops from 6.2 to 4.8 mEq/L over 6 hours"
            ],
            "clinicalResponse": "Within 60 minutes of hydrocortisone bolus and dextrose, the patient awakens completely, MAP rises to 78 mmHg, and norepinephrine is completely discontinued."
          }
        },
        {
          "id": "1-b",
          "text": "Administer Dexamethasone 4 mg IV as sole steroid and withhold mineralocorticoid coverage",
          "isCorrect": false,
          "explanation": "While Dexamethasone provides potent glucocorticoid activity, it has negligible mineralocorticoid activity, failing to replace the aldosterone deficiency that drives the severe sodium wasting and hyperkalemia in primary adrenal crisis.",
          "whyNot": "Dexamethasone lacks mineralocorticoid receptor agonism needed to reverse Addisonian electrolyte collapse.",
          "outcome": {
            "classification": "suboptimal",
            "immediateEffects": [
              "Glucocorticoid deficit improved but mineralocorticoid-dependent sodium wasting and hyperkalemia persist"
            ],
            "clinicalResponse": "Blood pressure improves modestly, but potassium remains elevated at 6.0 mEq/L."
          }
        }
      ],
      "physiologyDisplay": {
        "svr": "up-up",
        "co": "up",
        "map": "up-up",
        "contractility": "up"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "hydrocortisone",
    "norepinephrine"
  ],
  "relatedTopicIds": [
    "endocrine-emergencies",
    "shock"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline"
]
};
