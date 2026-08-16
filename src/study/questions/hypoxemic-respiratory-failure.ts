import type { Question } from "@/content-types";

export const hypoxemicRespiratoryFailureQuestions: readonly Question[] = [
  {
    "id": "hypoxemic.q.a-a-gradient-interpretation",
    "topicId": "hypoxemic-respiratory-failure",
    "stem": "A 22-year-old man presents with acute hypoxemia after a sedative ingestion. Arterial blood gas on room air reveals: pH 7.24, PaCO2 64 mmHg, PaO2 55 mmHg. Calculated PAO2 is 70 mmHg. What is the calculated A-a gradient and its clinical interpretation?",
    "options": [
      {
        "id": "a",
        "text": "A-a gradient is 15 mmHg (normal), confirming pure alveolar hypoventilation without intrinsic lung disease.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "A-a gradient is 45 mmHg (elevated), indicating acute ARDS.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "A-a gradient is 5 mmHg (abnormally low), indicating severe intrapulmonary shunting.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "A-a gradient is 30 mmHg (elevated), confirming severe pulmonary embolism.",
        "isCorrect": false
      }
    ],
    "explanation": "A-a gradient = PAO2 (70) - PaO2 (55) = 15 mmHg. For a 22-year-old, a gradient < 15–20 mmHg is normal. This proves that the hypoxemia is entirely explained by central alveolar hypoventilation (elevated PaCO2 displacing alveolar O2) without intrinsic lung injury or V/Q mismatch.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "West's Respiratory Physiology; Irwin & Rippe."
    ]
  },
  {
    "id": "hypoxemic.q.florali-selection",
    "topicId": "hypoxemic-respiratory-failure",
    "stem": "A 55-year-old patient with severe viral pneumonia and acute hypoxemic respiratory failure (PaO2/FiO2 140, respiratory rate 34 bpm, no hypercapnia) is being evaluated for noninvasive respiratory support. Based on the FLORALI trial, which initial modality is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "High-Flow Nasal Cannula (HFNC)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Noninvasive bilevel positive pressure ventilation (BiPAP)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Simple face mask at 6 L/min",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Non-rebreather mask with low-dose sedative infusion",
        "isCorrect": false
      }
    ],
    "explanation": "The FLORALI trial (NEJM 2015) demonstrated that in acute de-novo hypoxemic respiratory failure without hypercapnia, HFNC significantly reduced 90-day mortality compared to both standard oxygen therapy and NIV, while also reducing intubation in patients with PaO2/FiO2 ≤ 200.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Frat JP et al. FLORALI Trial. NEJM 2015."
    ]
  }
,
  {
    id: "hypox.q.florali-trial-hfnc",
    topicId: "hypoxemic-respiratory-failure",
    stem: "In non-hypercapnic acute hypoxemic respiratory failure (PaO2/FiO2 <= 300), what was the primary finding of the FLORALI landmark randomized trial comparing High-Flow Nasal Cannula (HFNC), standard oxygen, and Non-Invasive Ventilation (NIV)?",
    options: [
      { id: "a", text: "NIV significantly reduced 90-day mortality compared with HFNC.", isCorrect: false },
      { id: "b", text: "HFNC significantly reduced 90-day mortality (12% vs 23% standard O2 vs 28% NIV, P=0.02) and reduced intubation rates in severe hypoxemia (PaO2/FiO2 <= 200).", isCorrect: true },
      { id: "c", text: "Standard low-flow nasal cannula had lowest mortality.", isCorrect: false },
      { id: "d", text: "HFNC caused high rates of barotrauma and pneumothorax.", isCorrect: false }
    ],
    explanation: "The FLORALI trial (NEJM 2015, n=310) proved that in de novo acute hypoxemic respiratory failure, HFNC significantly reduced 90-day mortality compared with standard oxygen and NIV. NIV was associated with high tidal volumes (>10 mL/kg) and transpulmonary pressure swings that aggravated patient self-inflicted lung injury (P-SILI).",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Frat JP, et al. FLORALI Trial. NEJM 2015."
    ]
  }
];
