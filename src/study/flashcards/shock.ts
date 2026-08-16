import type { Flashcard } from "@/content-types";

export const shockFlashcards: readonly Flashcard[] = [
  {
    "id": "shock.fc.definition-four-classes",
    "topicId": "shock",
    "question": "What are the 4 fundamental physiological classifications of shock?",
    "answer": "1. Distributive (vasodilatory); 2. Cardiogenic (pump failure); 3. Hypovolemic (volume loss); 4. Obstructive (mechanical vascular obstruction).",
    "explanation": "Weil and Shubin's classification groups shock based on the primary hemodynamic abnormality driving global tissue hypoperfusion.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Weil MH, Shubin H. Proposed classification of shock states. Circulation 1972."
    ]
  },
  {
    "id": "shock.fc.lactate-clearance-kinetics",
    "topicId": "shock",
    "question": "What lactate clearance target during early resuscitation is associated with improved ICU survival?",
    "answer": "A reduction in blood lactate of ≥ 10–20% every 2 hours during the first 6–8 hours of resuscitation.",
    "explanation": "Serial lactate clearance reflects restoration of cellular microcirculatory perfusion and aerobic metabolism; failure to clear lactate indicates unresolved shock.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Arnold RC et al. Multicenter study of early lactate clearance in septic shock. Shock 2009."
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
    "answer": "CRT-guided resuscitation (normalizing CRT ≤ 3 seconds) led to faster organ dysfunction resolution and reduced 28-day mortality on adjusted analysis.",
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
    "answer": "Transferring ~300 mL of venous blood from legs to the heart; an increase in stroke volume or cardiac output ≥ 10% within 60–90 seconds confirms fluid responsiveness.",
    "explanation": "PLR acts as a reversible 'autotransfusion' independent of respiratory variation, cardiac arrhythmias, or spontaneous breathing efforts.",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "Monnet X, Teboul JL. Passive leg raising for predicting fluid responsiveness. Intensive Care Med 2015."
    ]
  },
  {
    "id": "shock.fc.scvo2-normal-threshold",
    "topicId": "shock",
    "question": "What does a central venous oxygen saturation (ScvO2) < 70% indicate in a shock state?",
    "answer": "Systemic oxygen extraction exceeds supply, signifying inadequate cardiac output, severe anemia, or profound hypoxemia.",
    "explanation": "ScvO2 = SaO2 - (VO2 / [CO * 1.34 * Hb]). When cardiac output drops, tissues extract a higher fraction of oxygen, lowering returning venous saturation.",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "Rivers E et al. NEJM 2001; Irwin & Rippe."
    ]
  }
];
