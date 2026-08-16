import type { Question } from "@/content-types";

export const severeSodiumDisordersQuestions: readonly Question[] = [
  {
    "id": "sodium.q.acute-hyponatremia-seizures",
    "topicId": "severe-sodium-disorders",
    "stem": "A marathon runner collapses with acute status epilepticus. Point-of-care serum sodium is 114 mEq/L (acute exercise-associated hyponatremia). What is the most appropriate emergency intervention?",
    "options": [
      {
        "id": "a",
        "text": "3% Hypertonic Saline: 100–150 mL IV bolus over 10 minutes, repeatable if seizures persist",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "0.9% Normal Saline at 500 mL/hour",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fluid restriction to 500 mL/day without hypertonic fluids",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Conivaptan IV receptor antagonist bolus",
        "isCorrect": false
      }
    ],
    "explanation": "For acute symptomatic hyponatremia presenting with seizures, coma, or signs of brain herniation, guidelines mandate rapid administration of 3% hypertonic saline (100–150 mL IV boluses). An immediate 4–6 mEq/L rise in serum sodium rapidly reduces cerebral edema and aborts seizures.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "European Hyponatremia Guidelines 2014; Sterns RH. NEJM 2015."
    ]
  },
  {
    "id": "sodium.q.overcorrection-ods-prevention",
    "topicId": "severe-sodium-disorders",
    "stem": "A patient with chronic alcoholism is admitted with baseline sodium 106 mEq/L. Over the first 16 hours, his sodium rises to 122 mEq/L (16 mEq/L rise) as he produces 800 mL/hour of dilute urine. What is the immediate correct management to prevent Osmotic Demyelination Syndrome?",
    "options": [
      {
        "id": "a",
        "text": "Administer IV DDAVP (1–2 mcg) and infuse D5W to actively re-lower serum sodium to within the safe 8 mEq/L 24-hour limit",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Continue normal saline infusion to reach normal sodium faster",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Give IV loop diuretics to maintain high urine output",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Observe only; rapid correction is never harmful once achieved",
        "isCorrect": false
      }
    ],
    "explanation": "A rise of 16 mEq/L in 16 hours in a high-risk patient carries extreme risk of fatal Osmotic Demyelination Syndrome (central pontine myelinolysis). Guidelines recommend active re-lowering: administering DDAVP to block ongoing aquaresis and infusing hypotonic fluids (D5W) to return the sodium trajectory to ≤ 8 mEq/L above baseline.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Sterns RH et al. Clin J Am Soc Nephrol 2014."
    ]
  }
,
  {
    id: "sodium.q.correction-rate-limit",
    topicId: "severe-sodium-disorders",
    stem: "In severe chronic symptomatic hyponatremia (Na < 115 mEq/L duration > 48 hours), what is the strict guideline-recommended maximum limit for serum sodium correction to prevent Osmotic Demyelination Syndrome (ODS / central pontine myelinolysis)?",
    options: [
      { id: "a", text: "Maximum 6 to 8 mEq/L in the first 24 hours (and <= 4-6 mEq/L/24h in patients with high ODS risk: alcoholism, malnutrition, liver failure).", isCorrect: true },
      { id: "b", text: "Correct sodium immediately to normal (> 135 mEq/L) within 12 hours.", isCorrect: false },
      { id: "c", text: "Maximum 20 mEq/L per 24 hours.", isCorrect: false },
      { id: "d", text: "There is no upper limit if 3% hypertonic saline is used.", isCorrect: false }
    ],
    explanation: "Brain cells adapt to chronic hyponatremia by extruding organic osmolytes. Rapid correction (>8 mEq/L/24h or >18 mEq/L/48h) causes astrocytic dehydration, BBB breakdown, and rapid demyelination of the pons (ODS). For active seizures/herniation: give 3% NaCl 100-150 mL IV boluses to raise Na by 4-6 mEq/L rapidly, then halt further rise.",
    difficulty: "basic",
    category: "Safety",
    references: [
      "Spasovski G, et al. European Hyponatremia Guidelines. Eur J Endocrinol 2014; Verbalis JG, et al. Am J Med 2013."
    ]
  }
];
