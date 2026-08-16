import type { Question } from "@/content-types";

export const vapQuestions: readonly Question[] = [
  {
    "id": "vap.q.idsa-duration-7-days",
    "topicId": "vap",
    "stem": "A 60-year-old intubated trauma patient develops culture-confirmed Pseudomonas aeruginosa VAP. He receives targeted IV Cefepime and shows excellent clinical improvement with resolved fever, normal leukogram, and decreased secretions by day 7. According to IDSA/ATS guidelines and randomized clinical trials, what is the recommended total antibiotic duration?",
    "options": [
      {
        "id": "a",
        "text": "7 days of antibiotic therapy",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "14 to 21 days because Pseudomonas requires prolonged eradication",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Continue antibiotics until the patient is completely extubated",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "3 days of IV therapy followed by inhaled tobramycin indefinitely",
        "isCorrect": false
      }
    ],
    "explanation": "The 2016 IDSA/ATS Hospital-Acquired and Ventilator-Associated Pneumonia guidelines recommend a 7-day course of antimicrobial therapy for patients with VAP (including non-fermenting Gram-negative bacilli like Pseudomonas) who achieve a good clinical response, as shorter courses reduce emergence of resistant pathogens with equivalent clinical cure.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "Kalil AC et al. IDSA/ATS Guidelines. CID 2016; Chastre J et al. JAMA 2003."
    ]
  }
,
  {
    id: "vap.q.prevention-bundle-elements",
    topicId: "vap",
    stem: "Which evidence-based interventions in the Ventilator-Associated Pneumonia (VAP) prevention bundle significantly reduce VAP incidence without increasing adverse events?",
    options: [
      { id: "a", text: "Routine daily changing of ventilator circuits and routine saline instillation during suctioning.", isCorrect: false },
      { id: "b", text: "Elevation of head of bed 30–45°, daily spontaneous awakening and breathing trials (sedation minimization), endotracheal tubes with subglottic secretion suctioning, and early mobilization.", isCorrect: true },
      { id: "c", text: "Prophylactic IV vancomycin and cefepime for all intubated patients.", isCorrect: false },
      { id: "d", text: "Deep continuous neuromuscular blockade for the duration of intubation.", isCorrect: false }
    ],
    explanation: "SHEA/IDSA VAP prevention compendium recommends: (1) Head of bed elevation 30-45°; (2) Daily sedation interruption and paired spontaneous breathing trials; (3) Subglottic secretion drainage endotracheal tubes (reduces VAP by 45%); (4) Early physical rehabilitation; (5) AVOID routine circuit changes (change only when visibly soiled).",
    difficulty: "basic",
    category: "Management",
    references: [
      "Klompas M, et al. SHEA/IDSA VAP Prevention Compendium. Infect Control Hosp Epidemiol 2022."
    ]
  },
  {
    id: "vap.q.empiric-coverage-mrsa",
    topicId: "vap",
    stem: "According to IDSA/ATS VAP guidelines, when is empiric MRSA coverage (Vancomycin or Linezolid) indicated for suspected VAP?",
    options: [
      { id: "a", text: "If the patient has prior IV antibiotic exposure within 90 days, or is treated in an ICU where >10–20% of S. aureus isolates are MRSA, or if local MRSA prevalence is unknown.", isCorrect: true },
      { id: "b", text: "Only if blood cultures are positive for Gram-positive cocci.", isCorrect: false },
      { id: "c", text: "In all ventilated patients on Day 1 of intubation.", isCorrect: false },
      { id: "d", text: "MRSA coverage is never needed if cefepime is prescribed.", isCorrect: false }
    ],
    explanation: "IDSA/ATS guidelines recommend empiric MRSA coverage (vancomycin titrated to AUC/MIC 400-600 or linezolid 600 mg q12h) when patients have risk factors for multidrug-resistant pathogens (prior IV antibiotics <90 days, septic shock at VAP onset, ARDS preceding VAP, >=5 days hospitalization) or when treated in an ICU where MRSA prevalence exceeds 10-20%.",
    difficulty: "intermediate",
    category: "Pharmacology",
    references: [
      "Kalil AC, et al. IDSA/ATS VAP Guidelines. Clin Infect Dis 2016."
    ]
  }
];
