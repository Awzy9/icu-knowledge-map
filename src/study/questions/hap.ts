import type { Question } from "@/content-types";

export const hapQuestions: readonly Question[] = [
  {
    "id": "hap.q.empiric-selection-shock",
    "topicId": "hap",
    "stem": "A patient admitted to the medical ward for 5 days develops new dense lobar consolidation, fever 39.2°C, and septic shock requiring transfer to the ICU and norepinephrine infusion. He received IV Ceftriaxone 2 weeks ago. According to IDSA/ATS guidelines, which empiric antibiotic combination is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "Two antipseudomonal agents from different classes (e.g. Cefepime + Tobramycin) PLUS an anti-MRSA agent (Vancomycin or Linezolid)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ceftriaxone plus Azithromycin",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ampicillin-Sulbactam monotherapy",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Vancomycin monotherapy",
        "isCorrect": false
      }
    ],
    "explanation": "In HAP with septic shock or prior IV antibiotics within 90 days, IDSA/ATS guidelines recommend empiric coverage with two antipseudomonal agents from different antimicrobial classes (e.g. antipseudomonal beta-lactam + aminoglycoside or fluoroquinolone) plus an agent active against MRSA (Vancomycin or Linezolid).",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Kalil AC et al. IDSA/ATS HAP Guidelines. CID 2016."
    ]
  }
,
  {
    id: "hap.q.empiric-pseudomonas-coverage",
    topicId: "hap",
    stem: "According to IDSA/ATS guidelines, which patient factors warrant dual antipseudomonal coverage (two different classes of antipseudomonal antibiotics) for Hospital-Acquired Pneumonia (HAP)?",
    options: [
      { id: "a", text: "High risk of mortality (need for ventilatory support or septic shock) or IV antibiotic use within the preceding 90 days.", isCorrect: true },
      { id: "b", text: "Any patient older than 50 years.", isCorrect: false },
      { id: "c", text: "All patients with HAP regardless of severity or local resistance.", isCorrect: false },
      { id: "d", text: "Only patients with confirmed positive fungal sputum cultures.", isCorrect: false }
    ],
    explanation: "IDSA/ATS guidelines recommend two antipseudomonal agents from different classes (e.g. beta-lactam + fluoroquinolone or aminoglycoside) for empiric HAP therapy if the patient has high mortality risk (ventilatory support, septic shock) or received IV antibiotics in the prior 90 days, or if local ICU Gram-negative resistance exceeds 20%.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Kalil AC, et al. IDSA/ATS HAP/VAP Guidelines. Clin Infect Dis 2016."
    ]
  },
  {
    id: "hap.q.treatment-duration",
    topicId: "hap",
    stem: "What is the recommended duration of antibiotic therapy for uncomplicated Hospital-Acquired Pneumonia with good clinical response?",
    options: [
      { id: "a", text: "7 days of targeted antimicrobial therapy.", isCorrect: true },
      { id: "b", text: "Strict 14 to 21 days for all hospital-acquired infections.", isCorrect: false },
      { id: "c", text: "Continue antibiotics until procalcitonin is 0.00 mcg/L.", isCorrect: false },
      { id: "d", text: "3 days of IV therapy followed by discharge.", isCorrect: false }
    ],
    explanation: "IDSA/ATS guidelines strongly recommend a 7-day course of antimicrobial therapy for patients with HAP/VAP demonstrating clinical improvement. Shorter courses achieve equal clinical cure rates, reduce hospital stay, and decrease the emergence of multidrug-resistant pathogens compared with longer courses.",
    difficulty: "basic",
    category: "Management",
    references: [
      "Kalil AC, et al. Clin Infect Dis 2016; Chastre J, et al. JAMA 2003."
    ]
  }
];
