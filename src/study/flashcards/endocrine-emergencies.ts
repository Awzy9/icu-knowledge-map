import type { Flashcard } from "@/content-types";

export const endocrineEmergenciesFlashcards: readonly Flashcard[] = [
  {
    "id": "endocrine-emergencies.fc.1",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "question": "What is the required order of multi-targeted pharmacotherapy in Thyroid Storm?",
    "answer": "1. Beta-blocker (Propranolol/Esmolol) -> 2. Thionamide (PTU/Methimazole) -> 3. Inorganic Iodine (SSKI/Lugol) AT LEAST 1 HOUR AFTER THIONAMIDE -> 4. Hydrocortisone -> 5. Cholestyramine.",
    "explanation": "Giving iodine before thionamide provides substrate for new thyroid hormone synthesis (Wolff-Chaikoff escape), exacerbating the storm.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "endocrine-guideline-ata-thyroid-storm-2016",
        "relevance": "Defines thyroid storm sequencing."
      }
    ]
  },
  {
    "id": "endocrine-emergencies.fc.2",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "question": "Why is Propranolol specifically preferred over other beta-blockers in Thyroid Storm?",
    "answer": "Propranolol non-selectively blocks beta-1 and beta-2 receptors AND uniquely inhibits peripheral 5'-monodeiodinase, reducing the conversion of T4 to active T3.",
    "explanation": "High doses (60-80 mg PO q4h or 1-2 mg IV) block the peripheral hyperadrenergic and metabolic effects.",
    "difficulty": "intermediate",
    "references": [
      "ATA Guidelines 2016"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.3",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "question": "Why MUST stress-dose glucocorticoids be given BEFORE or WITH thyroid hormone in Myxedema Coma?",
    "answer": "Administering thyroid hormone increases metabolic rate and accelerates hepatic cortisol clearance, precipitating fatal circulatory collapse from coexisting adrenal insufficiency.",
    "explanation": "Give Hydrocortisone 100 mg IV q8h empiric coverage until adrenal reserve is documented.",
    "difficulty": "advanced",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.4",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "question": "What is the initial management of suspected Acute Adrenal Crisis in the ICU?",
    "answer": "Immediate IV Hydrocortisone (100 mg bolus, then 200 mg/24h continuous or 50 mg q6h) + aggressive isotonic saline resuscitation with 5% dextrose. NEVER delay treatment for diagnostic testing.",
    "explanation": "Hydrocortisone provides both glucocorticoid and mineralocorticoid activity to restore vascular tone.",
    "difficulty": "basic",
    "references": [
      "Endocrine Society Adrenal Guidelines 2016"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.5",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "question": "What is the cardinal rule of medical blockade in Pheochromocytoma Crisis?",
    "answer": "Alpha-blockade FIRST (Phenoxybenzamine, Phentolamine, or Doxazosin), NEVER beta-blockade first.",
    "explanation": "Beta-blockade without prior alpha-blockade leaves alpha-1 receptors unopposed, causing catastrophic malignant vasoconstriction, hypertensive crisis, and pulmonary edema.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.6",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "question": "What is the first-line medical therapy for Severe Hypercalcemic Crisis (Ca > 14 mg/dL)?",
    "answer": "Aggressive Isotonic Saline volume expansion (200-300 mL/h targeting urine output 100-150 mL/h), followed by IV Bisphosphonates (Zoledronic acid 4 mg) and Calcitonin.",
    "explanation": "Volume expansion promotes calciuresis; calcitonin acts rapidly (2-4h) while bisphosphonates take 48-72h for maximal effect.",
    "difficulty": "basic",
    "references": [
      "Endocrine Society Hypercalcemia Guidelines"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.7",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "question": "What score on the Burch-Wartofsky Point Scale (BWPS) is highly suggestive of Thyroid Storm?",
    "answer": "A score >= 45 is highly suggestive of thyroid storm (25-44 supports impending storm; < 25 storm unlikely).",
    "explanation": "Scores thermoregulatory dysfunction, CNS effects, GI/hepatic dysfunction, cardiovascular dysfunction, and precipitating events.",
    "difficulty": "intermediate",
    "references": [
      "Burch HB, Wartofsky L. Endocrinol Metab Clin North Am 1993"
    ]
  },
  {
    "id": "endocrine-emergencies.fc.8",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "question": "Why should active aggressive warming be avoided in Myxedema Coma hypothermia?",
    "answer": "Aggressive active external rewarming causes peripheral vasodilation and shunting of blood to skin, precipitating cardiovascular collapse. Use passive rewarming.",
    "explanation": "Gradual passive rewarming with blankets allows vascular tone to equilibrate as thyroid hormone takes effect.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  }
];
