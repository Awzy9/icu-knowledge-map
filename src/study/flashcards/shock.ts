import type { Flashcard } from "@/content-types";

export const shockFlashcards: readonly Flashcard[] = [
  {
    "id": "shock.fc.classification-four-types",
    "topicId": "shock",
    "question": "What are the four primary pathophysiological categories of shock, and what is the primary hemodynamic defect in each?",
    "answer": "1. Distributive (Vasodilation, low SVR); 2. Cardiogenic (Myocardial pump failure, low CO/CI, high SVR); 3. Hypovolemic (Intravascular volume loss, low CVP/preload, high SVR); 4. Obstructive (Physical impediment to flow, high afterload or impaired RV/LV filling).",
    "explanation": "Understanding the primary hemodynamic deficit guides targeted fluid, inotrope, vasopressor, or mechanical intervention.",
    "difficulty": "basic",
    "category": "Classification",
    "references": [
      "Vincent JL, De Backer D. Circulatory Shock. NEJM 2013."
    ]
  },
  {
    "id": "shock.fc.lactate-clearance-kinetics",
    "topicId": "shock",
    "question": "What historical lactate clearance benchmark was evaluated in early septic shock studies (e.g. Arnold 2009)?",
    "answer": "Historically, a reduction in blood lactate of ≥ 10–20% every 2 hours was associated with survival. In current practice, serial lactate trends are tracked alongside clinical perfusion markers (CRT, MAP, urine output) without enforcing rigid universal clearance percentages.",
    "explanation": "Arnold et al. (Shock 2009) demonstrated that clearing lactate correlates with recovery, but modern guidelines treat serial trends as one component of clinical assessment rather than an automatic mandate to give additional fluids.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Arnold RC et al. Multicenter study of early lactate clearance in septic shock. Shock 2009; Surviving Sepsis Campaign 2026."
    ]
  },
  {
    "id": "shock.fc.soap2-trial-norepi-vs-dopamine",
    "topicId": "shock",
    "question": "What did the SOAP II trial establish regarding Norepinephrine vs Dopamine in undifferentiated shock?",
    "answer": "Norepinephrine significantly reduced arrhythmias (20.7% vs 12.4%) and reduced mortality in the cardiogenic shock subgroup compared to dopamine.",
    "explanation": "De Backer et al. (NEJM 2010) proved dopamine causes excessive tachyarrhythmias and increased death, establishing Norepinephrine as first-line vasopressor.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "De Backer D et al. Comparison of dopamine and norepinephrine in the treatment of shock (SOAP II). NEJM 2010."
    ]
  },
  {
    "id": "shock.fc.capillary-refill-andromeda-shock",
    "topicId": "shock",
    "question": "What did the ANDROMEDA-SHOCK trial conclude regarding Capillary Refill Time (CRT) vs Lactate-guided resuscitation?",
    "answer": "CRT-guided resuscitation (normalizing CRT ≤ 3 seconds) led to faster organ dysfunction resolution and reduced 28-day mortality on adjusted analysis compared to protocolized lactate clearance.",
    "explanation": "Published in JAMA 2019, CRT offers instantaneous, non-invasive assessment of peripheral perfusion without the kinetic delay of biochemical lactate clearance.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Hernández G et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate (ANDROMEDA-SHOCK). JAMA 2019."
    ]
  },
  {
    "id": "shock.fc.passive-leg-raise",
    "topicId": "shock",
    "question": "How does the Passive Leg Raise (PLR) test determine fluid responsiveness, and what constitutes a positive result?",
    "answer": "Transitioning from semi-recumbent to supine with legs elevated 45° autotransfuses ~300 mL of venous blood; a ≥ 10% increase in Stroke Volume or Cardiac Output indicates fluid responsiveness.",
    "explanation": "PLR is a reversible, preload-dependent physiological challenge that is valid during spontaneous breathing, cardiac arrhythmias, and low tidal volume ventilation.",
    "difficulty": "intermediate",
    "category": "Assessment",
    "references": [
      "Monnet X, Teboul JL. Passive leg raising: five rules to follow. Crit Care 2015."
    ]
  }
];
