import type { Question } from "@/content-types";

export const acidBaseDisordersQuestions: readonly Question[] = [
  {
    "id": "acidbase.q.stewart-saline-acidosis",
    "topicId": "acid-base-disorders",
    "stem": "A trauma patient receives 6 liters of 0.9% Normal Saline over 4 hours. Follow-up labs show Na 142, Cl 118, HCO3 16 mEq/L, pH 7.25, and Anion Gap 8. How does the Stewart physicochemical model explain this acidosis?",
    "options": [
      {
        "id": "a",
        "text": "The infusion of a solution with a Strong Ion Difference (SID) of 0 narrowed the plasma SID, causing hyperchloremic acidosis.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Excessive sodium load directly stimulated renal bicarbonate excretion.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Saline infusion caused acute lactic acidosis from tissue hypoperfusion.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Saline increased the concentration of unmeasured weak acid anions (ATOT).",
        "isCorrect": false
      }
    ],
    "explanation": "Normal plasma Strong Ion Difference (SID) is ~38–42 mEq/L. Normal Saline contains equal concentrations of Na+ (154) and Cl- (154), giving it an SID of 0. Infusing large volumes reduces plasma SID, which forces water to dissociate into H+ ions to maintain electrical neutrality, producing hyperchloremic metabolic acidosis.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Stewart PA. 1983; Story DA. Crit Care 2004."
    ]
  }
,
  {
    id: "acidbase.q.triple-disorder",
    topicId: "acid-base-disorders",
    stem: "A patient with septic shock and persistent vomiting has the following ABG: pH 7.40, PaCO2 40 mmHg, HCO3 24 mEq/L, Na 140 mEq/L, Cl 86 mEq/L, and Lactate 8 mmol/L. What is the correct acid-base interpretation?",
    options: [
      { id: "a", text: "Normal acid-base status given completely normal pH, PaCO2, and HCO3.", isCorrect: false },
      { id: "b", text: "Triple acid-base disorder: High Anion Gap Metabolic Acidosis (HAGMA), Metabolic Alkalosis, and Respiratory Acidosis.", isCorrect: false },
      { id: "c", text: "Dual disorder: High Anion Gap Metabolic Acidosis (HAGMA) and concurrent Metabolic Alkalosis with normal respiratory compensation.", isCorrect: true },
      { id: "d", text: "Pure Non-Anion Gap Metabolic Acidosis (NAGMA).", isCorrect: false }
    ],
    explanation: "Anion Gap = Na - (Cl + HCO3) = 140 - (86 + 24) = 30 mEq/L (severely elevated HAGMA from lactic acidosis). The Delta Gap (Delta AG / Delta HCO3) = (30 - 12) / (24 - 24) -> the expected HCO3 without vomiting would be ~6 mEq/L. The 'normal' measured HCO3 of 24 reveals a coexisting severe metabolic alkalosis (from gastric HCl loss).",
    difficulty: "advanced",
    category: "Interpretation",
    references: [
      "Kraut JA, Madias NE. NEJM 2010."
    ]
  },
  {
    id: "acidbase.q.winter-formula",
    topicId: "acid-base-disorders",
    stem: "A patient with severe DKA has HCO3 8 mEq/L. According to Winter's formula [Expected PaCO2 = 1.5 × (HCO3) + 8 ± 2], if the patient's measured PaCO2 is 32 mmHg, what concurrent disorder is present?",
    options: [
      { id: "a", text: "Appropriate respiratory compensation for severe metabolic acidosis.", isCorrect: false },
      { id: "b", text: "Superimposed primary Respiratory Acidosis (impending respiratory muscle fatigue).", isCorrect: true },
      { id: "c", text: "Superimposed primary Respiratory Alkalosis.", isCorrect: false },
      { id: "d", text: "Laboratory error in blood gas measurement.", isCorrect: false }
    ],
    explanation: "Winter's formula predicts expected PaCO2 = 1.5(8) + 8 = 20 ± 2 mmHg (18-22 mmHg). A measured PaCO2 of 32 mmHg is significantly higher than expected compensation, indicating severe superimposed primary respiratory acidosis due to respiratory exhaustion or central hypoventilation.",
    difficulty: "intermediate",
    category: "Calculations",
    references: [
      "Winter's Formula; Oh's Intensive Care Manual."
    ]
  }
];
