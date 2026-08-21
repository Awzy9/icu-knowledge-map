import type { Flashcard } from "@/content-types";

export const diabeticKetoacidosisFlashcards: readonly Flashcard[] = [
  {
    "id": "dka.fc.diagnostic-triad",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the diagnostic framework of Diabetic Ketoacidosis (DKA) according to the 2024 international consensus?",
    "answer": "1. Diabetes/Hyperglycemia (blood glucose ≥ 200 mg/dL or known diabetes/euDKA); 2. Metabolic acidosis (venous pH ≤ 7.30 or serum HCO3- ≤ 18 mmol/L); 3. Ketosis (plasma beta-hydroxybutyrate ≥ 3.0 mmol/L or ketonuria ≥ 2+).",
    "explanation": "The 2024 ADA/EASD/JBDS/AACE/DTS consensus establishes plasma beta-hydroxybutyrate ≥ 3.0 mmol/L as the preferred diagnostic criterion for ketosis over urine dipsticks.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "ADA/EASD/JBDS/AACE/DTS Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 2024."
    ]
  },
  {
    "id": "dka.fc.potassium-insulin-rule",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the critical rule regarding serum potassium prior to starting IV insulin in DKA?",
    "answer": "DELAY/HOLD IV insulin if serum potassium is ≤ 3.5 mmol/L; infuse IV potassium first until K+ rises > 3.5 mmol/L before starting insulin.",
    "explanation": "Insulin drives potassium intracellularly by stimulating Na+/K+-ATPase. Administering insulin in a hypokalemic patient precipitates severe life-threatening cardiac arrhythmias, respiratory muscle paralysis, and cardiac arrest.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ADA/EASD/JBDS/AACE/DTS Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 2024."
    ]
  },
  {
    "id": "dka.fc.resolution-criteria",
    "topicId": "diabetic-ketoacidosis",
    "question": "What criteria define resolution of DKA according to the 2024 international consensus?",
    "answer": "Plasma beta-hydroxybutyrate < 0.6 mmol/L AND venous pH ≥ 7.30 OR serum bicarbonate ≥ 18 mmol/L, with blood glucose ideally < 200 mg/dL; and patient alert and able to eat.",
    "explanation": "The 2024 consensus prioritizes ketone clearance (beta-hydroxybutyrate < 0.6 mmol/L) with acid-base recovery over the anion gap because hyperchloremic non-gap acidosis from fluid resuscitation frequently keeps bicarbonate low despite complete clearance of ketoacids. Subcutaneous basal insulin must overlap the IV insulin infusion by 2–4 hours before discontinuation.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "ADA/EASD/JBDS/AACE/DTS Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 2024."
    ]
  },
  {
    "id": "dka.fc.euglycemic-dka-sglt2",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is Euglycemic DKA, and what common medication class is a leading cause in the ICU?",
    "answer": "DKA presenting with normal or near-normal blood glucose (< 200–250 mg/dL) with metabolic acidosis (pH ≤ 7.30, HCO3 ≤ 18) and severe ketonemia (beta-hydroxybutyrate ≥ 3.0 mmol/L); caused by SGLT2 inhibitors (e.g. Empagliflozin, Dapagliflozin).",
    "explanation": "SGLT2 inhibitors promote persistent urinary glucose excretion, suppressing insulin secretion and stimulating ketogenesis without causing marked hyperglycemia.",
    "difficulty": "intermediate",
    "category": "Recognition",
    "references": [
      "FDA Drug Safety Communication on SGLT2 inhibitors and DKA; ADA Standards of Care 2024."
    ]
  },
  {
    "id": "dka.fc.potassium-rule",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the stepped potassium management protocol in DKA based on baseline serum K+?",
    "answer": "1. K+ ≤ 3.5 mmol/L: DELAY insulin, infuse IV KCl (20–40 mmol/h) until K+ > 3.5 mmol/L.\n2. K+ > 3.5–5.3 mmol/L: Start insulin AND add 20–30 mmol KCl per liter of IV fluids once urine output is established to maintain K+ between 4.0–5.0 mmol/L.\n3. K+ > 5.3 mmol/L: Start insulin without potassium; monitor K+ every 1–2 hours.",
    "explanation": "Insulin drives potassium intracellularly and will cause fatal arrhythmia or respiratory arrest if administered in hypokalemia.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ADA/EASD/JBDS/AACE/DTS Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 2024."
    ]
  }
];
