import type { Flashcard } from "@/content-types";

export const hypercapnicRespiratoryFailureFlashcards: readonly Flashcard[] = [
  {
    "id": "hypercapnic.fc.definition",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "What defining blood gas criteria establish acute hypercapnic respiratory failure?",
    "answer": "PaCO2 > 45–50 mmHg with an accompanying acute acidemia (pH < 7.35).",
    "explanation": "Elevated PaCO2 with a normal pH represents chronic compensated respiratory acidosis (e.g. baseline severe COPD), whereas acute acidemia denotes acute failure of alveolar ventilation.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "West's Respiratory Physiology; Irwin & Rippe Intensive Care."
    ]
  },
  {
    "id": "hypercapnic.fc.alveolar-ventilation-equation",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "According to the Alveolar Ventilation Equation, what two primary factors determine PaCO2?",
    "answer": "Carbon dioxide production (VCO2) and Alveolar ventilation (VA = [Vt - Vd] * RR).",
    "explanation": "PaCO2 is directly proportional to VCO2 and inversely proportional to VA. Hypoventilation occurs when total minute ventilation drops, physiological dead space increases, or CO2 production surges.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology, 10th Edition."
    ]
  },
  {
    "id": "hypercapnic.fc.dead-space-causes",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "What critical care conditions cause hypercapnia via elevated physiological dead space (high Vd/Vt)?",
    "answer": "Severe COPD/emphysema, Acute Respiratory Distress Syndrome (microvascular thrombosis), massive pulmonary embolism, and excessive PEEP.",
    "explanation": "In high dead-space states, areas of lung are ventilated but unperfused (wasted ventilation), causing PaCO2 retention despite high total minute ventilation.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Nuckton TJ et al. Pulmonary dead-space fraction as a risk factor for death in the acute respiratory distress syndrome. NEJM 2002."
    ]
  },
  {
    "id": "hypercapnic.fc.neuromuscular-causes",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "What bedside bedside neuromuscular tests identify impending hypercapnic failure in Guillain-Barré and Myasthenia Gravis?",
    "answer": "Forced Vital Capacity (FVC < 15–20 mL/kg), Negative Inspiratory Force (NIF / MIP worse than -20 to -30 cmH2O), and Maximum Expiratory Pressure (MEP < 40 cmH2O).",
    "explanation": "The '20/30/40 rule' indicates critical diaphragmatic and respiratory muscle weakness requiring prophylactic ICU admission and mechanical airway support.",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "Neurocritical Care Society Guidelines for Guillain-Barré and Myasthenic Crisis."
    ]
  },
  {
    "id": "hypercapnic.fc.cuff-leak-hypercapnia",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "Why does acute upper airway obstruction generate hypercapnic rather than pure hypoxemic failure?",
    "answer": "High extrathoracic airway resistance impairs minute ventilation and markedly elevates the mechanical work of breathing, leading rapidly to diaphragmatic exhaustion.",
    "explanation": "Inspiratory flow limitation prevents adequate tidal volume generation, driving acute alveolar hypoventilation.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "hypercapnic.fc.narkotic-overdose",
    "topicId": "hypercapnic-respiratory-failure",
    "question": "How does central nervous system depression (e.g. opioid overdose) produce hypercapnic respiratory failure?",
    "answer": "Blunting the central pontomedullary chemoreceptor response to CO2 and decreasing respiratory drive/rate.",
    "explanation": "Alveolar ventilation drops due to bradypnea and shallow tidal volume. The alveolar-arterial (A-a) gradient remains normal unless secondary atelectasis or aspiration occurs.",
    "difficulty": "basic",
    "category": "Differential",
    "references": [
      "Goldfrank's Toxicologic Emergencies."
    ]
  }
];
