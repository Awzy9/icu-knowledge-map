import type { ClinicalCase } from "@/content-types/clinical-case";

export const tensionPneumoVentilatedCase: ClinicalCase = {
  "id": "case-tension-pneumo-ventilated",
  "slug": "tension-pneumo-ventilated",
  "title": "Tension Pneumothorax on Mechanical Ventilation",
  "subtitle": "Acute barotrauma, high-pressure alarm, asymmetric breath sounds, and emergent needle decompression vs finger thoracostomy",
  "difficulty": "intermediate",
  "system": "respiratory",
  "tags": [
    "pneumothorax",
    "mechanical-ventilation",
    "barotrauma",
    "shock",
    "chest-tube"
  ],
  "objectives": [
    "Differentiate tension pneumothorax from simple pneumothorax and auto-PEEP during positive pressure ventilation",
    "Identify physical exam and ventilator waveform hallmarks of tension physiology (sudden Ppeak/Pplat spike, unilateral absent breath sounds, tracheal deviation, hemodynamic collapse)",
    "Perform immediate emergency pleural decompression (needle decompression / finger thoracostomy) without delaying for chest radiography"
  ],
  "initialPresentation": {
    "history": "A 36-year-old male with severe necrotizing ARDS on mechanical ventilation (Volume Control, VT 380 mL, PEEP 14 cmH2O) suddenly triggers the ventilator high-pressure alarm (Ppeak spikes from 32 to 64 cmH2O). His blood pressure crashes from 125/75 to 58/32 mmHg (MAP 40 mmHg), heart rate spikes to 148 bpm, and SpO2 plummets from 94% to 68%.",
    "vitals": {
      "HR": "148/min sinus tachycardia",
      "BP": "58/32 mmHg",
      "MAP": "40 mmHg",
      "SpO2": "68%",
      "Ppeak": "64 cmH2O",
      "Pplat": "58 cmH2O"
    },
    "keyFindings": [
      "Acutely distended, hyperresonant right hemithorax with completely absent breath sounds on the right",
      "Trachea deviated toward the left side; distended neck veins",
      "Severe obstructive shock with imminent cardiac arrest"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has acute clinical tension pneumothorax during mechanical ventilation with MAP 40 mmHg and SpO2 68%. A junior resident suggests ordering a portable stat chest X-ray.",
      "question": "What is your immediate action?",
      "options": [
        {
          "id": "1-a",
          "text": "Perform immediate needle decompression at the right 2nd intercostal space midclavicular line (or 4th/5th ICS anterior axillary line) followed immediately by formal tube thoracostomy; do NOT wait for CXR",
          "isCorrect": true,
          "explanation": "Tension pneumothorax is a pure clinical emergency diagnosis. In a mechanically ventilated patient, waiting even 5 minutes for a portable X-ray will lead to fatal PEA cardiac arrest.",
          "physiologicReasoning": "One-way valve alveolar rupture traps air under high positive pressure in the pleural space, collapsing the lung, shifting the mediastinum, kinking the inferior vena cava, and obliterating right atrial filling.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Immediate loud rush of pressurized gas upon needle entry",
              "Pleural pressure drops from positive to atmospheric",
              "Mediastinum shifts back to midline; IVC unkinks; venous return restored"
            ],
            "clinicalResponse": "A 14-gauge catheter in the 2nd ICS produces a dramatic hiss of escaping air. Within 20 seconds, MAP surges to 118/74 mmHg and SpO2 recovers to 96%. A 28 Fr chest tube is placed."
          }
        },
        {
          "id": "1-b",
          "text": "Order a portable stat CXR and await imaging confirmation before performing invasive procedures",
          "isCorrect": false,
          "explanation": "Waiting for radiography in clinically obvious tension pneumothorax with shock is medical malpractice; the patient will suffer hypoxic-ischemic cardiac arrest before the X-ray machine arrives.",
          "whyNot": "Radiographic delay in tension pneumothorax directly causes preventable death.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Complete loss of venous return; patient enters pulseless electrical activity (PEA) arrest"
            ],
            "clinicalResponse": "Patient arrests in PEA while awaiting the radiology technician."
          }
        }
      ],
      "physiologyDisplay": {
        "preload": "down-down",
        "co": "down-down",
        "map": "down-down",
        "pvr": "up-up"
      }
    }
  ],
  "relatedMedicationSlugs": [],
  "relatedTopicIds": [
    "pneumothorax",
    "mechanical-ventilation",
    "ards"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "sudden-hypoxemia",
    "acute-hypotension",
    "sudden-ventilator-deterioration"
  ],
  "references": [
  "British Thoracic Society Guideline for Pleural Disease"
]
};
