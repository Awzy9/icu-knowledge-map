import type { Flashcard } from "@/content-types";

export const diabeticKetoacidosisFlashcards: readonly Flashcard[] = [
  {
    "id": "dka.fc.diagnostic-triad",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the diagnostic triad of Diabetic Ketoacidosis (DKA)?",
    "answer": "1. Hyperglycemia (blood glucose > 200–250 mg/dL or known DM); 2. High anion gap metabolic acidosis (pH < 7.30, HCO3 < 18); 3. Ketosis (positive serum/urine beta-hydroxybutyrate).",
    "explanation": "Absolute or relative insulin deficiency combined with counter-regulatory hormone excess stimulates lipolysis and hepatic ketogenesis.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "ADA Standards of Medical Care in Diabetes 2024."
    ]
  },
  {
    "id": "dka.fc.potassium-insulin-rule",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the critical rule regarding serum potassium prior to starting IV insulin in DKA?",
    "answer": "Do NOT start IV insulin if serum potassium is < 3.3 mEq/L; replace potassium first until K+ ≥ 3.3 mEq/L.",
    "explanation": "Insulin drives potassium intracellularly. Administering insulin in a hypokalemic patient can trigger fatal cardiac arrhythmias, respiratory muscle paralysis, and cardiac arrest.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ADA Consensus Statement on Hyperglycemic Crises 2023."
    ]
  },
  {
    "id": "dka.fc.resolution-criteria",
    "topicId": "diabetic-ketoacidosis",
    "question": "What criteria define resolution of DKA before transitioning from IV insulin to subcutaneous insulin?",
    "answer": "Blood glucose < 200 mg/dL PLUS at least two of: 1. Serum bicarbonate ≥ 18 mEq/L; 2. Venous pH > 7.30; 3. Normal anion gap (≤ 12 mEq/L); and patient able to eat.",
    "explanation": "Administer subcutaneous basal insulin 2 hours BEFORE stopping the IV insulin infusion to prevent rebound ketoacidosis.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "ADA Guidelines 2024; Irwin and Rippe."
    ]
  },
  {
    "id": "dka.fc.euglycemic-dka-sglt2",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is Euglycemic DKA, and what common medication class is a leading cause in the ICU?",
    "answer": "DKA presenting with normal or near-normal blood glucose (< 200–250 mg/dL) with high anion gap acidosis and ketonemia; caused by SGLT2 inhibitors (e.g. Empagliflozin, Dapagliflozin).",
    "explanation": "SGLT2 inhibitors promote persistent urinary glucose excretion, suppressing insulin secretion and stimulating ketogenesis without causing marked hyperglycemia.",
    "difficulty": "intermediate",
    "category": "Recognition",
    "references": [
      "FDA Drug Safety Communication on SGLT2 inhibitors and DKA."
    ]
  },
  {
    "id": "dka.fc.potassium-rule",
    "topicId": "diabetic-ketoacidosis",
    "question": "What is the mandatory potassium rule before initiating an IV insulin infusion in DKA?",
    "answer": "If Serum K+ < 3.3 mEq/L, HOLD insulin and infuse IV KCl (20-40 mEq/h) until K+ >= 3.3 mEq/L. Insulin drives potassium intracellularly and will cause fatal arrhythmia or respiratory arrest.",
    "explanation": "If K+ is 3.3-5.3 mEq/L, add 20-30 mEq KCl per liter of IV fluids alongside insulin. If K+ > 5.3 mEq/L, start insulin without potassium but monitor q2h.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in diabetic-ketoacidosis"
    ]
  }
];
