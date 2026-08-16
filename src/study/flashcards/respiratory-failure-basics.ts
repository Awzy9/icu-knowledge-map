import type { Flashcard } from "@/content-types";

export const respiratoryFailureBasicsFlashcards: readonly Flashcard[] = [
  {
    "id": "respbasic.fc.type1-vs-type2",
    "topicId": "respiratory-failure-basics",
    "question": "What is the physiological difference between Type 1 and Type 2 respiratory failure?",
    "answer": "Type 1 is Hypoxemic (PaO2 < 60 mmHg with normal/low PaCO2); Type 2 is Hypercapnic (PaCO2 > 45–50 mmHg with acidemia).",
    "explanation": "Type 1 failure represents lung parenchymal/vascular disease causing V/Q mismatch or shunt. Type 2 failure represents alveolar 'pump' failure (ventilatory pump, chest wall, central drive).",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "West's Respiratory Physiology; Irwin and Rippe."
    ]
  },
  {
    "id": "respbasic.fc.hypoxic-pulmonary-vasoconstriction",
    "topicId": "respiratory-failure-basics",
    "question": "What is Hypoxic Pulmonary Vasoconstriction (HPV), and what is its physiological purpose?",
    "answer": "A homeostatic response where alveolar hypoxia constricts local pulmonary arterioles, diverting blood flow to better-ventilated lung regions.",
    "explanation": "HPV optimizes ventilation-perfusion matching. Generalized alveolar hypoxia (e.g. high altitude, severe hypoventilation) causes global vasoconstriction and acute pulmonary hypertension.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology, 10th Edition."
    ]
  },
  {
    "id": "respbasic.fc.compliance-definition",
    "topicId": "respiratory-failure-basics",
    "question": "What is respiratory system compliance, and what is the formula for Static Compliance?",
    "answer": "Compliance is the change in volume per unit change in pressure (C = ΔV / ΔP). Static Compliance = Tidal Volume / (Plateau Pressure - PEEP).",
    "explanation": "Normal static compliance in a ventilated healthy adult is 50–80 mL/cmH2O. In severe ARDS, it commonly falls below 20–30 mL/cmH2O.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Tobin MJ. Principles and Practice of Mechanical Ventilation."
    ]
  },
  {
    "id": "rfb.fc.type1-vs-type2",
    "topicId": "respiratory-failure-basics",
    "question": "What is the fundamental difference between Type 1 and Type 2 Respiratory Failure?",
    "answer": "Type 1 is Hypoxemic respiratory failure (PaO2 < 60 mmHg with normal or low PaCO2; failure of gas exchange/oxygenation). Type 2 is Hypercapnic respiratory failure (PaCO2 > 45-50 mmHg with acidemia; failure of ventilation/bellows pump).",
    "explanation": "Type 1 is treated by improving V/Q mismatch/shunt (oxygen, PEEP, CPAP, proning); Type 2 is treated by supporting alveolar minute ventilation (BiPAP, mechanical ventilation).",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in respiratory-failure-basics"
    ]
  },
  {
    "id": "rfb.fc.a-a-gradient",
    "topicId": "respiratory-failure-basics",
    "question": "How does the Alveolar-Arterial (A-a) Oxygen Gradient differentiate the causes of hypoxemia?",
    "answer": "Normal A-a gradient hypoxemia is caused ONLY by Hypoventilation or Low inspired FiO2 (high altitude). Elevated A-a gradient hypoxemia is caused by V/Q Mismatch, Shunt, or Diffusion Impairment.",
    "explanation": "A-a gradient = PAO2 - PaO2. Normal is approximately (Age/4) + 4 on room air.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in respiratory-failure-basics"
    ]
  },
  {
    "id": "rfb.fc.shunt-definition",
    "topicId": "respiratory-failure-basics",
    "question": "What is true intrapulmonary shunt and why is it refractory to supplemental oxygen?",
    "answer": "Perfusion of unventilated alveoli (V/Q = 0, e.g. ARDS, alveolar consolidation, atelectasis). Deoxygenated blood passes directly into pulmonary veins without contacting alveolar gas, creating hypoxemia that cannot be overcome by 100% FiO2 alone.",
    "explanation": "Therapy requires positive end-expiratory pressure (PEEP) or recruitment maneuvers to reopen collapsed alveoli.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in respiratory-failure-basics"
    ]
  }
];
