import type { Flashcard } from "@/content-types";

export const mechanicalVentilationFlashcards: readonly Flashcard[] = [
  {
    "id": "vent.fc.plateau-pressure-meaning",
    "topicId": "mechanical-ventilation",
    "question": "What does Plateau Pressure (Pplat) measure, and how is it obtained on a mechanical ventilator?",
    "answer": "Measures static end-inspiratory alveolar pressure; obtained by performing an inspiratory pause hold (0.5–1.0 sec) at zero airflow.",
    "explanation": "Because airflow is zero during the hold, airway resistance drops out, and the measured pressure reflects alveolar distension and total respiratory system compliance.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "vent.fc.driving-pressure-target",
    "topicId": "mechanical-ventilation",
    "question": "What is Driving Pressure (ΔP), and what clinical threshold is associated with reduced mortality in ARDS?",
    "answer": "ΔP = Plateau Pressure - PEEP (or Vt / Crs); target ≤ 14–15 cmH2O.",
    "explanation": "Amato et al. (NEJM 2015) showed that driving pressure is the ventilator variable most strongly associated with survival in ARDS, reflecting tidal volume normalized to the functional 'baby lung' compliance.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Amato MBP et al. Driving pressure and survival in ARDS. NEJM 2015."
    ]
  },
  {
    "id": "vent.fc.peak-vs-plateau-differential",
    "topicId": "mechanical-ventilation",
    "question": "What does a high Peak Inspiratory Pressure with a normal Plateau Pressure indicate?",
    "answer": "Increased airway resistance (e.g. bronchospasm, secretions, endotracheal tube kinking, mucous plug, biting tube).",
    "explanation": "Peak pressure reflects resistance + compliance (Ppeak = Flow * Raw + Palv). If Pplat is normal, the lung parenchyma is not stiff; the obstruction is in the conducting airways.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Tobin MJ. Principles and Practice of Mechanical Ventilation, 3rd Edition."
    ]
  },
  {
    "id": "vent.fc.peak-and-plateau-high",
    "topicId": "mechanical-ventilation",
    "question": "What does an elevation in BOTH Peak and Plateau pressures indicate?",
    "answer": "Decreased respiratory system compliance (e.g. worsening ARDS, pulmonary edema, tension pneumothorax, atelectasis, abdominal compartment syndrome).",
    "explanation": "When both pressures rise in parallel, static compliance (Cstat = Vt / [Pplat - PEEP]) has decreased, indicating a stiffer lung or chest wall.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Tobin MJ. Principles and Practice of Mechanical Ventilation."
    ]
  },
  {
    "id": "vent.fc.rsbi-weaning-index",
    "topicId": "mechanical-ventilation",
    "question": "What is the Rapid Shallow Breathing Index (RSBI), and what threshold predicts successful extubation?",
    "answer": "RSBI = Respiratory Rate (f) / Tidal Volume in liters (Vt); RSBI < 105 breaths/min/L predicts weaning success.",
    "explanation": "Yang and Tobin (NEJM 1991) established that rapid shallow breathing (high f, low Vt) indicates respiratory muscle fatigue and weaning failure.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Yang KL, Tobin MJ. A prospective study of indexes predicting the outcome of trials of weaning from mechanical ventilation. NEJM 1991."
    ]
  },
  {
    "id": "vent.fc.patient-ventilator-dyssynchrony",
    "topicId": "mechanical-ventilation",
    "question": "What are the common types of patient-ventilator dyssynchrony in the ICU?",
    "answer": "Trigger dyssynchrony (ineffective triggering, auto-triggering), flow asynchrony (flow starvation), cycle asynchrony (premature or delayed cycling), and double triggering.",
    "explanation": "Dyssynchrony increases work of breathing, worsens gas exchange, requires higher sedation doses, and prolongs mechanical ventilation duration.",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "de Wit M et al. Ineffective triggering predicts prolonged mechanical ventilation. Crit Care Med 2009."
    ]
  }
];
