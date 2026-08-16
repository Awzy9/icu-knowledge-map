import type { Question } from "@/content-types";

export const respiratoryFailureBasicsQuestions: readonly Question[] = [
  {
    "id": "respbasic.q.type-classification",
    "topicId": "respiratory-failure-basics",
    "stem": "A patient with severe acute cardiogenic pulmonary edema has a PaO2 of 48 mmHg on room air and a PaCO2 of 28 mmHg (pH 7.50). Which type of respiratory failure does this represent?",
    "options": [
      {
        "id": "a",
        "text": "Type 1 (Hypoxemic) Respiratory Failure",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Type 2 (Hypercapnic) Respiratory Failure",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Type 4 (Shock-associated) Hypoperfusion only",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Chronic compensated ventilatory insufficiency",
        "isCorrect": false
      }
    ],
    "explanation": "Severe hypoxemia (PaO2 < 60 mmHg) with tachypnea and respiratory alkalosis (low PaCO2) is the textbook definition of Type 1 (Hypoxemic) respiratory failure, driven by alveolar flooding and intrapulmonary shunt.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "West's Respiratory Physiology; Irwin and Rippe."
    ]
  }
,
  {
    id: "rfb.q.type1-vs-type2",
    topicId: "respiratory-failure-basics",
    stem: "How do the underlying physiological mechanisms and blood gas patterns distinguish Type 1 (Hypoxemic) from Type 2 (Hypercapnic) respiratory failure?",
    options: [
      { id: "a", text: "Type 1 is lung/alveolar-capillary failure (V/Q mismatch and intrapulmonary shunt; PaO2 < 60 mmHg with normal or low PaCO2); Type 2 is ventilatory pump failure (alveolar hypoventilation and high dead space; PaCO2 > 45-50 mmHg with respiratory acidosis).", isCorrect: true },
      { id: "b", text: "Type 1 is caused exclusively by chest wall deformities; Type 2 is caused exclusively by pneumonia.", isCorrect: false },
      { id: "c", text: "Type 1 always has an elevated PaCO2; Type 2 always has normal PaO2.", isCorrect: false },
      { id: "d", text: "Both types have identical A-a oxygen gradients and respond identically to supplemental oxygen.", isCorrect: false }
    ],
    explanation: "Type 1 respiratory failure reflects failure of oxygenation at the alveolar-capillary membrane (pneumonia, ARDS, pulmonary edema, PE) characterized by high A-a gradient and hypoxemia. Type 2 reflects pump failure (CNS depression, neuromuscular disease, COPD, chest wall deformity) where inadequate minute ventilation causes CO2 retention and respiratory acidosis.",
    difficulty: "basic",
    category: "Physiology",
    references: [
      "West's Respiratory Physiology; Irwin & Rippe's Intensive Care Medicine."
    ]
  },
  {
    id: "rfb.q.aa-gradient-significance",
    topicId: "respiratory-failure-basics",
    stem: "What does an elevated Alveolar-arterial Oxygen Gradient [P(A-a)O2 = PAO2 - PaO2] distinguish in a patient with acute hypoxemia?",
    options: [
      { id: "a", text: "Distinguishes primary intrinsic pulmonary parenchymal/vascular pathology (V/Q mismatch, shunt, diffusion impairment -> high gradient) from pure alveolar hypoventilation or high altitude (normal gradient).", isCorrect: true },
      { id: "b", text: "Differentiates metabolic acidosis from respiratory alkalosis.", isCorrect: false },
      { id: "c", text: "Confirms cardiac tamponade.", isCorrect: false },
      { id: "d", text: "Measures renal bicarbonate reabsorption.", isCorrect: false }
    ],
    explanation: "The A-a gradient [PAO2 = (Patm - 47)*FiO2 - PaCO2/0.8]. A normal A-a gradient (expected ~ age/4 + 4) in hypoxemia confirms pure hypoventilation (e.g. opioid overdose) or low ambient FiO2. An elevated A-a gradient confirms intrinsic pulmonary pathology (V/Q mismatch, true shunt, or diffusion barrier).",
    difficulty: "intermediate",
    category: "Calculations",
    references: [
      "West's Respiratory Physiology."
    ]
  }
];
