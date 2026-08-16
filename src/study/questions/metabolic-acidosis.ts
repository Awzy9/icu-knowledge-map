import type { Question } from "@/content-types";

export const metabolicAcidosisQuestions: readonly Question[] = [
  {
    "id": "acidosis.q.bicar-icu-indication",
    "topicId": "metabolic-acidosis",
    "stem": "An ICU patient with septic shock and Stage 3 AKI has severe metabolic acidemia (pH 7.12, HCO3 9 mEq/L, base deficit -18). Based on the landmark BICAR-ICU randomized trial (Lancet 2018), what is the impact of infusing 4.2% sodium bicarbonate to target a pH ≥ 7.30?",
    "options": [
      {
        "id": "a",
        "text": "Significant reduction in 28-day mortality and reduced requirement for renal replacement therapy in the AKI subgroup",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "No clinical benefit and increased incidence of fatal hypernatremia",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Increased mortality due to paradoxical intracellular acidosis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Mandatory requirement for immediate endotracheal intubation",
        "isCorrect": false
      }
    ],
    "explanation": "The BICAR-ICU trial (Lancet 2018) showed that in ICU patients with severe metabolic acidemia (pH ≤ 7.20) and acute kidney injury (AKIN score 2–3), infusing 4.2% sodium bicarbonate to maintain pH ≥ 7.30 significantly reduced 28-day mortality (46% vs 63%, P = 0.015) and reduced the need for renal replacement therapy.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Jaber S et al. BICAR-ICU Trial. Lancet 2018."
    ]
  },
  {
    "id": "acidosis.q.winters-delta-interpretation",
    "topicId": "metabolic-acidosis",
    "stem": "A patient with DKA has: Na 140, Cl 98, HCO3 12 mEq/L, Albumin 4.0 g/dL. Blood gas shows pH 7.20, PaCO2 36 mmHg. Using Winter's formula (Expected PaCO2 = 1.5 * 12 + 8 = 26 mmHg), what mixed acid-base disorder is present?",
    "options": [
      {
        "id": "a",
        "text": "High Anion Gap Metabolic Acidosis PLUS primary Respiratory Acidosis (ventilatory failure)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pure High Anion Gap Metabolic Acidosis with normal respiratory compensation",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Mixed High Anion Gap and Normal Anion Gap Acidosis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High Anion Gap Metabolic Acidosis PLUS primary Respiratory Alkalosis",
        "isCorrect": false
      }
    ],
    "explanation": "Anion Gap = 140 - (98 + 12) = 30 (elevated, HAGMA). Winter's formula calculates expected PaCO2 = 24–28 mmHg. The measured PaCO2 is 36 mmHg, which is significantly higher than expected, proving a co-existing primary Respiratory Acidosis (inadequate alveolar ventilation / impending muscle fatigue).",
    "difficulty": "advanced",
    "category": "Diagnosis",
    "references": [
      "Albert MS et al. Ann Intern Med 1967; Irwin & Rippe."
    ]
  }
,
  {
    id: "metacid.q.bicar-icu-trial",
    topicId: "metabolic-acidosis",
    stem: "What were the primary findings of the BICAR-ICU landmark trial regarding 4.2% sodium bicarbonate infusion in severe metabolic acidemia (pH <= 7.20)?",
    options: [
      { id: "a", text: "Sodium bicarbonate reduced 28-day mortality in the overall intention-to-treat population.", isCorrect: false },
      { id: "b", text: "While neutral overall, sodium bicarbonate significantly reduced 28-day mortality (46% vs 63%, P=0.02) and reduced the need for renal replacement therapy in the pre-specified subgroup of patients with acute kidney injury (AKIN score 2–3).", isCorrect: true },
      { id: "c", text: "Sodium bicarbonate was uniformly harmful in all ICU patients.", isCorrect: false },
      { id: "d", text: "Sodium bicarbonate eliminated the need for vasopressors in all patients.", isCorrect: false }
    ],
    explanation: "The BICAR-ICU trial (Lancet 2018, n=389) found no difference in the primary composite outcome in the overall population with severe acidemia (pH <= 7.20). However, in the pre-specified subgroup with AKI (AKIN 2-3), sodium bicarbonate significantly reduced 28-day mortality and halved the need for renal replacement therapy.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Jaber S, et al. BICAR-ICU Trial. Lancet 2018."
    ]
  }
];
