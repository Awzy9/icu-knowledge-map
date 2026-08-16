import type { Question } from "@/content-types";

export const pneumothoraxQuestions: readonly Question[] = [
  {
    "id": "ptx.q.tension-clinical-action",
    "topicId": "pneumothorax",
    "stem": "A mechanically ventilated trauma patient suddenly develops profound hypotension (BP 60/30 mmHg), heart rate 140 bpm, high airway pressure alarms, and absent breath sounds over the entire left hemithorax. What is the immediate correct management?",
    "options": [
      {
        "id": "a",
        "text": "Order an urgent portable chest radiograph.",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Perform immediate needle decompression / finger thoracostomy of the left chest.",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Administer 1 L of normal saline and start Norepinephrine.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Increase PEEP from 5 to 15 cmH2O.",
        "isCorrect": false
      }
    ],
    "explanation": "Tension pneumothorax is a clinical diagnosis requiring immediate emergency decompression before obtaining imaging. Waiting for a chest X-ray in an unstable, hypotensive patient can lead to cardiac arrest within minutes.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ATLS 10th Edition; Irwin and Rippe."
    ]
  },
  {
    "id": "ptx.q.ultrasound-lung-point",
    "topicId": "pneumothorax",
    "stem": "During bedside lung ultrasound of a dyspneic ICU patient, you observe an absence of lung sliding in the anterior chest. On moving the probe laterally to the midaxillary line, you observe a specific boundary where normal lung sliding appears and disappears with each respiratory cycle. What is this sign called, and what is its diagnostic significance?",
    "options": [
      {
        "id": "a",
        "text": "Barcode sign; diagnostic of severe pneumonia",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Lung point sign; pathognomonic (100% specific) for pneumothorax",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Seashore sign; confirms complete pleural symphysis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Sinusoid sign; diagnostic of pleural effusion",
        "isCorrect": false
      }
    ],
    "explanation": "The 'Lung Point' represents the physical junction between the collapsed lung (no sliding) and expanded lung contacting the chest wall (normal sliding). It is 100% specific for pneumothorax.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Lichtenstein DA. BLUE-protocol. Chest 2015."
    ]
  }
,
  {
    id: "ptx.q.pocus-lung-point",
    topicId: "pneumothorax",
    stem: "On bedside Point-of-Care Ultrasound (POCUS) of the chest, which specific sonographic finding has 100% specificity for confirming a pneumothorax?",
    options: [
      { id: "a", text: "Presence of B-lines (lung rockets).", isCorrect: false },
      { id: "b", text: "The 'Lung Point' (the boundary where normal lung sliding alternates with absent sliding and the barcode/stratosphere sign during respiration).", isCorrect: true },
      { id: "c", text: "Seashore sign on M-mode.", isCorrect: false },
      { id: "d", text: "Pleural effusion fluid collection.", isCorrect: false }
    ],
    explanation: "The 'Lung Point' represents the physical transition zone where the collapsed lung contacts the parietal pleura during inspiration. It is pathognomonic (100% specificity) for pneumothorax on lung ultrasound. Conversely, the presence of lung sliding or B-lines rules out pneumothorax at that intercostal space with nearly 100% negative predictive value.",
    difficulty: "basic",
    category: "Diagnosis",
    references: [
      "Volpicelli G, et al. International Evidence-Based Recommendations for Point-of-Care Lung Ultrasound. Intensive Care Med 2012."
    ]
  }
];
