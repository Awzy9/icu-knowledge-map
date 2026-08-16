import type { Question } from "@/content-types";

export const diabeticKetoacidosisQuestions: readonly Question[] = [
  {
    "id": "dka.q.potassium-safety-check",
    "topicId": "diabetic-ketoacidosis",
    "stem": "A 24-year-old with newly diagnosed Type 1 diabetes presents with severe DKA (glucose 480 mg/dL, pH 7.15, HCO3 8 mEq/L). Initial basic metabolic panel reveals a serum potassium of 3.0 mEq/L. What is the mandatory first step in pharmacological management?",
    "options": [
      {
        "id": "a",
        "text": "Hold insulin and infuse IV potassium chloride (20–40 mEq/h) until serum potassium is ≥ 3.3 mEq/L.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Start high-dose regular insulin infusion immediately at 0.14 U/kg/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Administer 100 mEq of Sodium Bicarbonate IV push.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Administer subcutaneous Glargine and start hemodialysis.",
        "isCorrect": false
      }
    ],
    "explanation": "Starting insulin when potassium is < 3.3 mEq/L will drive potassium into cells and cause catastrophic hypokalemic cardiac arrest or diaphragmatic paralysis. ADA guidelines mandate withholding insulin and administering IV potassium until K+ is safely ≥ 3.3 mEq/L.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ADA Standards of Care 2024."
    ]
  },
  {
    "id": "dka.q.transition-subcutaneous",
    "topicId": "diabetic-ketoacidosis",
    "stem": "A patient with DKA has achieved resolution criteria (glucose 160 mg/dL, HCO3 19 mEq/L, Anion Gap 10, pH 7.34) and is ready for breakfast. Subcutaneous glargine and lispro are ordered. When should the IV regular insulin infusion be turned off?",
    "options": [
      {
        "id": "a",
        "text": "2 hours AFTER the subcutaneous basal insulin injection",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immediately upon injecting the subcutaneous insulin",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "2 hours before the subcutaneous insulin injection",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "IV insulin should be weaned by 50% every hour over 12 hours",
        "isCorrect": false
      }
    ],
    "explanation": "IV regular insulin has an elimination half-life of only ~5–9 minutes. If the infusion is stopped immediately, the patient enters an insulin-free window before subcutaneous basal insulin is absorbed, causing rapid rebound ketoacidosis. An overlap of 1–2 hours is mandatory.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "ADA Guidelines 2024; Irwin and Rippe."
    ]
  }
,
  {
    id: "dka.q.potassium-insulin-rule",
    topicId: "diabetic-ketoacidosis",
    stem: "In a patient presenting with severe DKA (blood glucose 650 mg/dL, pH 7.05, anion gap 28), the initial serum potassium returns at 3.1 mEq/L. What is the immediate priority before initiating IV regular insulin?",
    options: [
      { id: "a", text: "Start an immediate IV insulin bolus of 0.14 units/kg to lower blood glucose.", isCorrect: false },
      { id: "b", text: "Hold insulin and administer IV potassium repletion (20–40 mEq/h) until serum K+ is > 3.3 mEq/L, because insulin drives potassium into cells and will precipitate fatal arrhythmias or cardiac arrest.", isCorrect: true },
      { id: "c", text: "Administer 100 mL of 8.4% sodium bicarbonate immediately.", isCorrect: false },
      { id: "d", text: "Initiate subcutaneous long-acting glargine immediately.", isCorrect: false }
    ],
    explanation: "Insulin strongly stimulates the Na+/K+-ATPase pump, shifting extracellular potassium intracellularly. If baseline serum K+ is < 3.3 mEq/L, administering insulin triggers precipitous life-threatening hypokalemia, respiratory muscle paralysis, and fatal ventricular arrhythmias. Insulin MUST be withheld until K+ is restored > 3.3 mEq/L with IV KCl (ADA DKA Guidelines).",
    difficulty: "basic",
    category: "Safety",
    references: [
      "ADA Standards of Medical Care in Diabetes; Kitabchi AE, et al. Diabetes Care 2009."
    ]
  }
];
