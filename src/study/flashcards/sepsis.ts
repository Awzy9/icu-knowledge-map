import type { Flashcard } from "@/content-types";

export const sepsisFlashcards: readonly Flashcard[] = [
  {
    "id": "sepsis.fc.sepsis3-sofa-score",
    "topicId": "sepsis",
    "question": "What is the Sepsis-3 definition of Sepsis?",
    "answer": "Life-threatening organ dysfunction caused by a dysregulated host response to infection, defined as an acute change in total SOFA score ≥ 2 points.",
    "explanation": "Sepsis-3 (Singer et al., JAMA 2016) retired the SIRS-based definition of sepsis, focusing instead on acute organ failure (Delta SOFA ≥ 2 carries in-hospital mortality >10%).",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Singer M et al. Sepsis-3. JAMA 2016."
    ]
  },
  {
    "id": "sepsis.fc.qsofa-screening-elements",
    "topicId": "sepsis",
    "question": "What 3 bedside clinical criteria comprise the quick SOFA (qSOFA) score?",
    "answer": "1. Respiratory rate ≥ 22 breaths/min; 2. Altered mentation (GCS < 15); 3. Systolic blood pressure ≤ 100 mmHg (score ≥ 2 indicates high risk).",
    "explanation": "qSOFA serves as a rapid bedside screening tool outside the ICU to prompt immediate workup for organ dysfunction.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Seymour CW et al. Assessment of clinical criteria for sepsis. JAMA 2016."
    ]
  },
  {
    "id": "sepsis.fc.crystalloid-choice-smart-trial",
    "topicId": "sepsis",
    "question": "What did the SMART trial prove regarding Balanced Crystalloids vs 0.9% Normal Saline in critically ill septic patients?",
    "answer": "Balanced crystalloids (Lactated Ringer's or Plasma-Lyte) significantly reduced 30-day major adverse kidney events (MAKE30) and mortality compared to Normal Saline.",
    "explanation": "Semler et al. (NEJM 2018) showed that avoiding saline-induced hyperchloremia and renal vasoconstriction preserves renal perfusion in sepsis.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Semler MW et al. Balanced crystalloids versus saline in critically ill adults (SMART). NEJM 2018."
    ]
  },
  {
    "id": "sepsis.fc.source-control-timing",
    "topicId": "sepsis",
    "question": "What is the recommended timeframe for anatomical source control in septic shock?",
    "answer": "As soon as medically and logistically practical, ideally within 6 to 12 hours of diagnosis.",
    "explanation": "Surviving Sepsis Campaign guidelines emphasize that antimicrobials cannot sterilize undrained abscesses, infected necrosis, perforated viscera, or infected devices.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "Surviving Sepsis Campaign Guidelines 2021."
    ]
  },
  {
    "id": "sepsis.fc.procalcitonin-deescalation",
    "topicId": "sepsis",
    "question": "What procalcitonin kinetics guide the safe cessation and de-escalation of antibiotics in resolving sepsis?",
    "answer": "A drop in serum procalcitonin by ≥ 80% from peak or a level < 0.5 mcg/L (or < 0.25 mcg/L).",
    "explanation": "Procalcitonin-guided protocols allow shorter antibiotic durations (5–7 days) without increasing relapse or mortality (PRORATA, SAPS trials).",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "de Jong E et al. Efficacy and safety of procalcitonin guidance (SAPS). Lancet Infect Dis 2016."
    ]
  }
];
