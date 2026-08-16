import type { Question } from "@/content-types";

export const endocrineEmergenciesQuestions: readonly Question[] = [
  {
    "id": "endocrine-emergencies.q.1",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "stem": "A 35-year-old female with Graves disease presents with fever of 40.2°C, atrial fibrillation with RVR at 165 bpm, vomiting, jaundice, and severe agitation (Burch-Wartofsky score = 65). In what order should pharmacotherapy be initiated?",
    "options": [
      {
        "id": "a",
        "text": "Administer Lugol iodine solution, then PTU 4 hours later",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Administer Beta-blocker + Thionamide (PTU), followed by Inorganic Iodine at least 1 hour later, plus IV Hydrocortisone",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Immediate radioactive iodine ablation",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-dose Aspirin for antipyresis",
        "isCorrect": false
      }
    ],
    "explanation": "Giving iodine before thionamide provides substrate for new thyroid hormone synthesis (Wolff-Chaikoff escape). Thionamides must be given at least 1 hour prior to iodine. Aspirin is contraindicated as it displaces thyroid hormone from binding proteins.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "endocrine-guideline-ata-thyroid-storm-2016",
        "relevance": "Thyroid storm protocol."
      }
    ]
  },
  {
    "id": "endocrine-emergencies.q.2",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.thyroid-storm-myxedema",
    "stem": "An 82-year-old female is found unconscious in winter with temperature 32.1°C, heart rate 38 bpm, and PaCO2 68 mmHg. Severe hypothyroidism is suspected. What medication must be administered before or simultaneously with IV thyroid hormone?",
    "options": [
      {
        "id": "a",
        "text": "Stress-dose IV Hydrocortisone (100 mg q8h)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose IV Furosemide",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "IV Propranolol",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Subcutaneous insulin infusion",
        "isCorrect": false
      }
    ],
    "explanation": "Thyroid hormone accelerates hepatic clearance of cortisol. If the patient has coexisting adrenal insufficiency (common in autoimmune polyglandular syndrome), giving thyroid hormone without steroids triggers fatal adrenal crisis.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "endocrine-emergencies.q.3",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "stem": "A 40-year-old male with chronic steroid use presents in refractory shock (BP 72/40 mmHg despite 3 vasopressors), glucose 52 mg/dL, and potassium 6.1 mEq/L. What is the immediate treatment of choice?",
    "options": [
      {
        "id": "a",
        "text": "Wait for results of ACTH stimulation test before starting treatment",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Immediate IV Hydrocortisone 100 mg bolus + isotonic saline with 5% dextrose",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Start oral fludrocortisone alone",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Initiate therapeutic hypothermia",
        "isCorrect": false
      }
    ],
    "explanation": "In suspected adrenal crisis, treatment with IV hydrocortisone and volume resuscitation must never be delayed for diagnostic cortisol testing.",
    "difficulty": "basic",
    "references": [
      "Endocrine Society Guidelines 2016"
    ]
  },
  {
    "id": "endocrine-emergencies.q.4",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "stem": "A patient with suspected pheochromocytoma presents with severe headache, diaphoresis, and BP 240/130 mmHg. Why is administering a beta-blocker alone strictly contraindicated?",
    "options": [
      {
        "id": "a",
        "text": "It causes profound hypoglycemia",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Beta-blockade without prior alpha-blockade leaves alpha-1 vasoconstriction unopposed, causing catastrophic hypertensive surge and flash pulmonary edema",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "It accelerates tumor catecholamine synthesis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "It triggers immediate thyroid storm",
        "isCorrect": false
      }
    ],
    "explanation": "Beta-2 receptors cause vasodilation; blocking them with a beta-blocker allows circulating catecholamines to act unopposed on alpha-1 receptors, causing malignant vasoconstriction.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "endocrine-emergencies.q.5",
    "topicId": "endocrine-emergencies",
    "sectionId": "endocrine-emergencies.adrenal-crisis-pheo",
    "stem": "What is the initial therapy of choice for severe hypercalcemic crisis (serum calcium 15.2 mg/dL) with acute encephalopathy?",
    "options": [
      {
        "id": "a",
        "text": "Loop diuretics (Furosemide) prior to any IV fluids",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Aggressive Isotonic Saline volume expansion (200-300 mL/h) followed by IV Bisphosphonates and Calcitonin",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Oral calcium carbonate",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Immediate total parathyroidectomy without medical stabilization",
        "isCorrect": false
      }
    ],
    "explanation": "Patients with severe hypercalcemia are profoundly dehydrated from nephrogenic diabetes insipidus. Saline volume expansion restores GFR and promotes urinary calcium excretion.",
    "difficulty": "basic",
    "references": [
      "Endocrine Society Hypercalcemia Guidelines"
    ]
  }
];
