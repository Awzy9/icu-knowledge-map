import type { ClinicalCase } from "@/content-types/clinical-case";

export const autoPeepShockCase: ClinicalCase = {
  "id": "case-auto-peep-shock",
  "slug": "auto-peep-shock",
  "title": "Auto-PEEP & Dynamic Hyperinflation Shock",
  "subtitle": "Sudden pulseless electrical activity and cardiovascular collapse in a mechanically ventilated severe asthmatic",
  "difficulty": "advanced",
  "system": "respiratory",
  "tags": [
    "asthma",
    "auto-peep",
    "mechanical-ventilation",
    "hemodynamics"
  ],
  "objectives": [
    "Identify severe dynamic hyperinflation and intrinsic PEEP as a cause of obstructive shock in obstructive lung disease",
    "Execute the immediate diagnostic and therapeutic 'ventilator disconnect' maneuver",
    "Configure mechanical ventilation for dynamic air trapping"
  ],
  "initialPresentation": {
    "history": "A 24-year-old male with severe status asthmaticus is intubated in the ICU. Five minutes later, high peak pressure alarms trigger (Ppeak 68 cmH2O), blood pressure drops to 54/30 mmHg, and telemetry shows sinus tachycardia at 145/min.",
    "vitals": {
      "HR": "145/min",
      "BP": "54/30 mmHg",
      "MAP": "38 mmHg",
      "SpO2": "78%",
      "Ppeak": "68 cmH2O",
      "Pplat": "44 cmH2O"
    },
    "keyFindings": [
      "Severely distended thorax with minimal chest wall excursion during expiration",
      "Expiratory flow waveform does not return to baseline before next breath begins",
      "Severe obstructive shock with near-PEA state"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is in acute obstructive shock (MAP 38 mmHg) with skyrocketing airway pressures (Ppeak 68, Pplat 44) and persistent expiratory flow.",
      "question": "What is your immediate, life-saving bedside action?",
      "options": [
        {
          "id": "1-a",
          "text": "Immediately disconnect the endotracheal tube from the ventilator circuit and allow passive complete exhalation",
          "isCorrect": true,
          "explanation": "Disconnecting the ventilator relieves severe gas trapping (auto-PEEP) instantly. Trapped air escapes, intrathoracic pressure falls to atmospheric, immediately restoring systemic venous return.",
          "physiologicReasoning": "Massive positive intrathoracic pressure compresses the vena cavae, eliminating the pressure gradient for venous return and causing obstructive cardiac arrest.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Audible rush of trapped gas escapes",
              "Intrathoracic pressure drops",
              "Venous return restored"
            ],
            "clinicalResponse": "Upon disconnecting the circuit, air rushes out for 12 seconds. Blood pressure rebounds to 110/68 mmHg within 30 seconds."
          }
        },
        {
          "id": "1-b",
          "text": "Increase PEEP to 15 cmH2O to stent open the airways",
          "isCorrect": false,
          "explanation": "In a passively ventilated patient with severe asthma, adding extrinsic PEEP adds directly to intrinsic PEEP, worsening hyperinflation and accelerating cardiovascular collapse.",
          "whyNot": "Extrinsic PEEP stacks on top of auto-PEEP in passive ventilation.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Alveolar pressure spikes",
              "Venous return extinguished"
            ],
            "clinicalResponse": "Patient arrests in PEA."
          }
        }
      ],
      "physiologyDisplay": {
        "preload": "down-down",
        "co": "down-down",
        "map": "down-down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "epinephrine",
    "ketamine",
    "propofol"
  ],
  "relatedTopicIds": [
    "asthma",
    "mechanical-ventilation",
    "respiratory-failure-basics"
  ],
  "relatedPathwaySlugs": [
    "mechanical-ventilation-initiation"
  ],
  "relatedProblemSlugs": [
    "acute-hypercapnia"
  ],
  "references": [
  "Mechanical Ventilation of the Patient with Severe Asthma"
]
};
