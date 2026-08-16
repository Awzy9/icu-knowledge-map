import type { Flashcard } from "@/content-types";

export const hypoxemicRespiratoryFailureFlashcards: readonly Flashcard[] = [
  {
    "id": "hypoxemic.fc.five-mechanisms",
    "topicId": "hypoxemic-respiratory-failure",
    "question": "What are the 5 classic physiological mechanisms of arterial hypoxemia?",
    "answer": "1. V/Q mismatch; 2. Intrapulmonary shunt; 3. Alveolar hypoventilation; 4. Diffusion impairment; 5. Decreased inspired oxygen (low PiO2).",
    "explanation": "Only hypoventilation and low PiO2 present with a normal Alveolar-arterial (A-a) oxygen gradient. V/Q mismatch, shunt, and diffusion impairment all cause an elevated A-a gradient.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology, 10th Edition."
    ]
  },
  {
    "id": "hypoxemic.fc.shunt-vs-vq-100-percent-o2",
    "topicId": "hypoxemic-respiratory-failure",
    "question": "How does the response to 100% FiO2 distinguish true intrapulmonary shunt from V/Q mismatch?",
    "answer": "Hypoxemia from V/Q mismatch corrects with 100% FiO2 (PaO2 rises significantly), whereas true shunt fails to correct (PaO2 remains low).",
    "explanation": "In true shunt (alveoli fluid-filled or collapsed), blood passes through the pulmonary circulation without contacting ventilated alveolar gas, so supplemental oxygen cannot reach the hemoglobin in those capillaries.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "West's Respiratory Physiology; Irwin and Rippe."
    ]
  },
  {
    "id": "hypoxemic.fc.a-a-gradient-formula",
    "topicId": "hypoxemic-respiratory-failure",
    "question": "What is the Alveolar Gas Equation used to calculate alveolar oxygen tension (PAO2)?",
    "answer": "PAO2 = FiO2 * (Patm - PH2O) - (PaCO2 / R) ≈ FiO2 * (713) - (PaCO2 / 0.8) on sea level room air.",
    "explanation": "The A-a gradient = PAO2 - PaO2. Normal gradient is roughly (Age / 4) + 4. An elevated gradient indicates intrinsic pulmonary parenchymal or vascular pathology.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology."
    ]
  },
  {
    "id": "hypoxemic.fc.hfnc-physiologic-benefits",
    "topicId": "hypoxemic-respiratory-failure",
    "question": "What are the key physiological mechanisms through which High-Flow Nasal Cannula (HFNC) treats hypoxemic failure?",
    "answer": "Precise FiO2 delivery, dead space washout in the nasopharynx, modest flow-dependent PEEP (3–5 cmH2O), and heated humidification reducing metabolic work.",
    "explanation": "By clearing CO2 from the upper airway and matching high inspiratory flow demands, HFNC reduces patient work of breathing and respiratory rate.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Frat JP et al. FLORALI Trial. NEJM 2015."
    ]
  },
  {
    "id": "hypoxemic.fc.florali-trial-finding",
    "topicId": "hypoxemic-respiratory-failure",
    "question": "What did the landmark FLORALI trial demonstrate regarding HFNC in de-novo acute hypoxemic respiratory failure?",
    "answer": "HFNC reduced 90-day mortality and intubation rates in severe hypoxemic patients (PaO2/FiO2 ≤ 200) compared to standard oxygen and NIV.",
    "explanation": "In non-hypercapnic acute hypoxemic failure, NIV can cause large tidal volumes and patient self-inflicted lung injury (P-SILI), whereas HFNC provided superior survival.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Frat JP et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure (FLORALI). NEJM 2015."
    ]
  }
];
