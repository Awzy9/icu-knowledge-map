import type { Question } from "@/content-types";

export const burnsCriticalCareQuestions: readonly Question[] = [
  {
    "id": "burns-critical-care.q.1",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.overview",
    "stem": "A 70 kg male sustained 2nd and 3rd degree burns covering the entire anterior torso (18%) and both entire legs (36%). What is his total calculated TBSA?",
    "options": [
      {
        "id": "a",
        "text": "18%",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "36%",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "54%",
        "isCorrect": true
      },
      {
        "id": "d",
        "text": "72%",
        "isCorrect": false
      }
    ],
    "explanation": "Per the Rule of Nines: Anterior torso = 18%, Each leg = 18% (two legs = 36%). Total TBSA = 18 + 36 = 54%.",
    "difficulty": "basic",
    "references": [
      "ABA Practice Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.q.2",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.fluid-resuscitation-creep",
    "stem": "For the 70 kg patient with 54% TBSA burn, what is the calculated 24-hour Lactated Ringer volume using the Parkland formula (4 mL/kg/%TBSA) and how is it timed?",
    "options": [
      {
        "id": "a",
        "text": "15,120 mL total; 7,560 mL over the first 8 hours from time of injury, and 7,560 mL over the next 16 hours",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "7,560 mL total given evenly over 24 hours",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "20,000 mL given as rapid boluses in the emergency department",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "5,000 mL of 0.9% Normal Saline",
        "isCorrect": false
      }
    ],
    "explanation": "4 mL x 70 kg x 54 = 15,120 mL in 24 hours. Half (7,560 mL) is given in the first 8 hours from the time of injury, and half over the remaining 16 hours.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "burns-guideline-aba-isbi-2023",
        "relevance": "Parkland formula timing."
      }
    ]
  },
  {
    "id": "burns-critical-care.q.3",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.fluid-resuscitation-creep",
    "stem": "What is the primary hourly physiologic target used to titrate crystalloid infusion rates during burn shock resuscitation?",
    "options": [
      {
        "id": "a",
        "text": "Central venous pressure of 18 mmHg",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Urine output of 0.5 to 1.0 mL/kg/hour in adults (30-50 mL/h)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Serum sodium of 150 mEq/L",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Heart rate < 60 bpm",
        "isCorrect": false
      }
    ],
    "explanation": "Titrating fluid rates hourly strictly to adult urine output (0.5-1.0 mL/kg/h) prevents under-resuscitation while avoiding 'fluid creep' and compartment syndromes.",
    "difficulty": "basic",
    "references": [
      "ABA Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.q.4",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "stem": "A patient with circumferential full-thickness burns of the chest is mechanically ventilated and develops rising peak airway pressures (55 cmH2O), falling tidal volumes, and respiratory acidosis. What is the immediate treatment?",
    "options": [
      {
        "id": "a",
        "text": "Increase PEEP to 25 cmH2O",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Emergency bedside Thoracic Escharotomy (incisions along anterior axillary lines connected subcostally)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Administer high-dose inhaled steroids",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Extubate to room air immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Inelastic circumferential thoracic eschar acts as a constricting band, restricting chest wall expansion. Emergency escharotomy releases chest wall restriction and restores ventilation.",
    "difficulty": "basic",
    "references": [
      "ABA Guidelines 2023"
    ]
  },
  {
    "id": "burns-critical-care.q.5",
    "topicId": "burns-critical-care",
    "sectionId": "burns-critical-care.airway-inhalation-escharotomy",
    "stem": "A victim of an enclosed residential fire presents with soot in the oropharynx, carboxyhemoglobin (COHb) level of 24%, and confusion. What is the immediate initial management?",
    "options": [
      {
        "id": "a",
        "text": "High-flow 100% oxygen and evaluate for early endotracheal intubation",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Room air observation only",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Methylene blue infusion",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Oral activated charcoal",
        "isCorrect": false
      }
    ],
    "explanation": "100% O2 reduces COHb half-life from 300 minutes to 45-60 minutes. Early intubation is required if upper airway edema or inhalational injury threatens airway patency.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  }
];
