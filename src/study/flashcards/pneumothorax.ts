import type { Flashcard } from "@/content-types";

export const pneumothoraxFlashcards: readonly Flashcard[] = [
  {
    "id": "ptx.fc.tension-signs",
    "topicId": "pneumothorax",
    "question": "What physical exam and hemodynamic signs define a life-threatening Tension Pneumothorax?",
    "answer": "Severe hypotension/shock, absent unilateral breath sounds, tracheal deviation away from the affected side, distended neck veins, and hyperresonance.",
    "explanation": "One-way valve mechanism traps air in the pleural space, compressing the mediastinum and inferior vena cava, obliterating right heart venous return and causing obstructive shock.",
    "difficulty": "basic",
    "category": "Recognition",
    "references": [
      "ATLS 10th Edition; Irwin & Rippe Intensive Care."
    ]
  },
  {
    "id": "ptx.fc.needle-decompression-anatomy",
    "topicId": "pneumothorax",
    "question": "What are the guideline-recommended anatomical sites for emergency needle decompression of tension pneumothorax?",
    "answer": "2nd intercostal space midclavicular line OR 4th/5th intercostal space anterior axillary line (ATLS preferred in adults).",
    "explanation": "The 4th/5th intercostal space anterior axillary line has a thinner chest wall in most adults, reducing the failure rate associated with catheter under-penetration.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Advanced Trauma Life Support (ATLS) 10th Edition."
    ]
  },
  {
    "id": "ptx.fc.ultrasound-lung-sliding",
    "topicId": "pneumothorax",
    "question": "What lung ultrasound findings exclude and confirm pneumothorax at the bedside?",
    "answer": "Presence of lung sliding or B-lines rule OUT pneumothorax (100% NPV); absence of lung sliding with a 'Lung Point' sign confirms pneumothorax (100% specificity).",
    "explanation": "The 'Lung Point' represents the exact anatomical transition zone between the pneumothorax air pocket and the sliding visceral-parietal pleura.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Lichtenstein DA. BLUE-protocol and FALLS-protocol. Chest 2015."
    ]
  },
  {
    "id": "ptx.fc.barotrauma-ventilator-risk",
    "topicId": "pneumothorax",
    "question": "What ventilator parameters are most strongly linked to pulmonary barotrauma and pneumothorax?",
    "answer": "High plateau pressure (>30–35 cmH2O), high driving pressure (>15 cmH2O), and high transpulmonary pressures.",
    "explanation": "Alveolar overdistension (volutrauma/barotrauma) causes alveolar rupture into the bronchovascular sheath (Macklin effect), dissecting into the mediastinum and pleural space.",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "Boussarsar JM et al. Relationship between ventilatory settings and barotrauma in ARDS. Intensive Care Med 2002."
    ]
  },
  {
    "id": "pneumothorax.fc.pocus-lung-sliding",
    "topicId": "pneumothorax",
    "question": "What ultrasound findings confirm or exclude pneumothorax at the bedside?",
    "answer": "Presence of Lung Sliding or B-lines has 100% negative predictive value (EXCLUDES pneumothorax at that rib space). Absence of sliding + presence of a 'Lung Point' has 100% specificity to CONFIRM pneumothorax.",
    "explanation": "Lung Point represents the physical boundary where the collapsed visceral pleura meets the parietal pleura during inspiration.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in pneumothorax"
    ]
  },
  {
    "id": "pneumothorax.fc.box-triad-ventilated",
    "topicId": "pneumothorax",
    "question": "What ventilator waveform and monitor changes suggest a new tension pneumothorax in a mechanically ventilated patient?",
    "answer": "Sudden spike in Peak Inspiratory Pressure (Ppeak) AND Plateau Pressure (Pplat) with decreased tidal volume (in pressure modes), accompanied by severe hypoxemia, tachycardia, and abrupt hypotension.",
    "explanation": "Air trapped in the hemithorax reduces total respiratory system compliance and compresses the vena cava, abolishing preload.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in pneumothorax"
    ]
  }
];
