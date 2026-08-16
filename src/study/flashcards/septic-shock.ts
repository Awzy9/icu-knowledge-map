import type { Flashcard } from "@/content-types";

export const septicShockFlashcards: readonly Flashcard[] = [
  {
    "id": "septicshock.fc.sepsis3-definition",
    "topicId": "septic-shock",
    "question": "What are the Sepsis-3 clinical criteria for Septic Shock?",
    "answer": "Sepsis with persistent hypotension requiring vasopressors to maintain MAP ≥ 65 mmHg AND serum lactate > 2.0 mmol/L despite adequate fluid resuscitation.",
    "explanation": "Under Sepsis-3 (Singer et al., JAMA 2016), the combination of vasopressor requirement and cellular hyperlactatemia defines a subset with hospital mortality exceeding 40%.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016."
    ]
  },
  {
    "id": "septicshock.fc.surviving-sepsis-1hour-bundle",
    "topicId": "septic-shock",
    "question": "What are the 5 elements of the Surviving Sepsis Campaign 1-Hour Bundle?",
    "answer": "1. Measure lactate; 2. Obtain blood cultures prior to antibiotics; 3. Administer broad-spectrum antibiotics; 4. Rapid 30 mL/kg crystalloid for hypotension/lactate ≥4; 5. Apply vasopressors for MAP ≥ 65.",
    "explanation": "All 5 interventions should be initiated immediately and completed within the first hour of recognition.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Surviving Sepsis Campaign Guidelines 2021."
    ]
  },
  {
    "id": "septicshock.fc.vasopressin-vasst-trial",
    "topicId": "septic-shock",
    "question": "What did the VASST trial demonstrate regarding Vasopressin addition to Norepinephrine in septic shock?",
    "answer": "No overall mortality difference, but a significant mortality benefit in less severe septic shock (Norepi < 15 mcg/min baseline) and substantial norepinephrine dose-sparing.",
    "explanation": "Russell et al. (NEJM 2008) established fixed-dose Vasopressin (0.03 U/min) as the preferred second-line vasopressor to restore vascular tone without escalating adrenergic toxicity.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Russell JA et al. VASST Trial. NEJM 2008."
    ]
  },
  {
    "id": "septicshock.fc.hydrocortisone-adrenal-approaches",
    "topicId": "septic-shock",
    "question": "When is IV Hydrocortisone recommended in septic shock, and what did the APROCCHSS trial prove?",
    "answer": "Recommended when vasopressor requirements persist despite fluid resuscitation (Norepi ≥ 0.25 mcg/kg/min). APROCCHSS proved Hydrocortisone + Fludrocortisone reduced 90-day mortality (43% vs 49%).",
    "explanation": "Annane et al. (NEJM 2018) showed that combination low-dose steroids (Hydrocortisone 200 mg/day + Fludrocortisone 50 mcg) accelerated shock reversal and reduced all-cause mortality.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Annane D et al. APROCCHSS Trial. NEJM 2018; ADRENAL Trial. NEJM 2018."
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
    "question": "What is the recommended resuscitation target for serum lactate in early septic shock?",
    "answer": "Normalize lactate or achieve at least 10-20% lactate clearance every 2 hours over the first 6-8 hours of resuscitation (ANDROMEDA-SHOCK and Surviving Sepsis Campaign).",
    "explanation": "Lactate clearance reflects cellular recovery and restoration of tissue microperfusion.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in septic-shock"
    ]
  }
];
