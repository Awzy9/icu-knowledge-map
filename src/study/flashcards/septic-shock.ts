import type { Flashcard } from "@/content-types";

export const septicShockFlashcards: readonly Flashcard[] = [
  {
    "id": "septicshock.fc.definition-sepsis3",
    "topicId": "septic-shock",
    "question": "What is the Sepsis-3 clinical consensus definition of Septic Shock?",
    "answer": "Sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥ 65 mmHg AND serum lactate > 2 mmol/L despite adequate volume resuscitation.",
    "explanation": "Identifies profound cellular and metabolic abnormalities with hospital mortality exceeding 40%.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016."
    ]
  },
  {
    "id": "septicshock.fc.crystalloid-dosing",
    "topicId": "septic-shock",
    "question": "What is the initial recommended crystalloid volume for sepsis-induced hypoperfusion or septic shock?",
    "answer": "At least 30 mL/kg of IV balanced crystalloid (Lactated Ringer's or Plasma-Lyte) administered within the first 3 hours.",
    "explanation": "Balanced crystalloids reduce hyperchloremic metabolic acidosis and acute kidney injury compared to 0.9% Normal Saline (SMART and SALT-ED trials).",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Surviving Sepsis Campaign Guidelines; Semler MW et al. Balanced Crystalloids versus Saline in Critically Ill Adults. NEJM 2018."
    ]
  },
  {
    "id": "septicshock.fc.target-map",
    "topicId": "septic-shock",
    "question": "What is the initial target Mean Arterial Pressure (MAP) in septic shock resuscitation?",
    "answer": "Target MAP ≥ 65 mmHg; individualize higher targets (70–80 mmHg) only in patients with chronic uncontrolled hypertension who demonstrate improved microvascular perfusion.",
    "explanation": "The SEPSISPAM trial (Asfar et al., NEJM 2014) showed targeting MAP 80–85 mmHg did not reduce 28-day mortality and increased atrial fibrillation, except in chronic hypertensives who had reduced RRT requirements.",
    "difficulty": "intermediate",
    "category": "Hemodynamics",
    "references": [
      "Asfar P et al. High versus Low Blood-Pressure Target in Patients with Septic Shock (SEPSISPAM). NEJM 2014."
    ]
  },
  {
    "id": "septicshock.fc.vasopressor-sequence",
    "topicId": "septic-shock",
    "question": "What is the evidence-based vasopressor sequence in septic shock?",
    "answer": "1. Norepinephrine (first-line); 2. Add Vasopressin (fixed 0.03 U/min) if NE dose reaches 0.25–0.5 mcg/kg/min; 3. Add Epinephrine (0.01–0.1 mcg/kg/min) or Hydrocortisone (200 mg/day) if shock remains refractory.",
    "explanation": "Vasopressin provides non-adrenergic V1a receptor vasoconstriction to restore vascular tone and reduce adrenergic stress.",
    "difficulty": "intermediate",
    "category": "Pharmacology",
    "references": [
      "VASST Trial (Russell JA et al., NEJM 2008); VANISH Trial (Gordon AC et al., JAMA 2016)."
    ]
  },
  {
    "id": "septicshock.fc.norepi-firstline",
    "topicId": "septic-shock",
    "question": "Why is Norepinephrine the recommended first-line vasopressor in septic shock (SOAP II trial)?",
    "answer": "Norepinephrine potent alpha-1 vasoconstriction restores systemic vascular resistance while mild beta-1 inotropy maintains stroke volume, with significantly fewer tachyarrhythmias and lower mortality compared to Dopamine.",
    "explanation": "De Backer et al. (NEJM 2010) proved dopamine increased arrhythmic events and 28-day mortality in cardiogenic and septic shock.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in septic-shock"
    ]
  },
  {
    "id": "septicshock.fc.lactate-clearance-target",
    "topicId": "septic-shock",
    "question": "How should serial lactate be utilized and interpreted in early septic shock resuscitation?",
    "answer": "Track serial lactate trends when initially elevated as one component of resuscitation, interpreted alongside capillary refill time (≤ 2s), blood pressure, urine output, and clinical perfusion. Do NOT give fluid boluses solely to normalize lactate.",
    "explanation": "Current SSC guidelines emphasize following serial lactate trends as an adjunct marker of tissue perfusion recovery rather than enforcing a rigid universal clearance percentage or infusing fluids to force normalization once volume responsiveness is exhausted.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Surviving Sepsis Campaign International Guidelines 2026; ANDROMEDA-SHOCK Trial, JAMA 2019."
    ]
  }
];
