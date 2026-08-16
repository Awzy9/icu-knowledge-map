import type { Flashcard } from "@/content-types";

export const hapFlashcards: readonly Flashcard[] = [
  {
    "id": "hap.fc.definition-timing",
    "topicId": "hap",
    "question": "What defines Hospital-Acquired Pneumonia (HAP)?",
    "answer": "Pneumonia occurring ≥ 48 hours after hospital admission that was not incubating at the time of admission.",
    "explanation": "Distinguished from VAP (which requires an endotracheal tube in place for >48h) and Community-Acquired Pneumonia (CAP).",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Kalil AC et al. IDSA/ATS Guidelines. CID 2016."
    ]
  },
  {
    "id": "hap.fc.mrsa-pseudomonas-coverage-indications",
    "topicId": "hap",
    "question": "When do IDSA/ATS HAP guidelines recommend dual antipseudomonal coverage and empiric MRSA coverage in HAP?",
    "answer": "High risk of mortality (need for ventilatory support or septic shock), prior IV antibiotic use within 90 days, or local hospital unit resistance rates > 10–20%.",
    "explanation": "Dual Gram-negative coverage (e.g. Cefepime + Ciprofloxacin, or Piperacillin-Tazobactam + Amikacin) ensures that at least one active agent is delivered empirically pending sensitivities.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Kalil AC et al. IDSA/ATS Guidelines. CID 2016."
    ]
  },
  {
    "id": "hap.fc.pseudomonas-double-coverage",
    "topicId": "hap",
    "question": "When is double anti-pseudomonal coverage indicated for empiric treatment of HAP?",
    "answer": "High risk of mortality (need for ventilatory support or septic shock), IV antibiotic use within prior 90 days, or local hospital antipseudomonal resistance > 10-20%.",
    "explanation": "Combine an antipseudomonal beta-lactam (cefepime, piperacillin-tazobactam, meropenem) with an antipseudomonal fluoroquinolone (ciprofloxacin) or aminoglycoside.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hap"
    ]
  },
  {
    "id": "hap.fc.treatment-duration",
    "topicId": "hap",
    "question": "What is the recommended duration of antibiotic therapy for uncomplicated HAP improving clinically?",
    "answer": "7 days (IDSA/ATS guidelines).",
    "explanation": "7 days achieves equivalent clinical cure and mortality with significantly fewer antibiotic-resistant recurrent infections compared to 14-21 days.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hap"
    ]
  },
  {
    "id": "hap.fc.mrsa-nasal-pcr-npv",
    "topicId": "hap",
    "question": "What is the clinical role and negative predictive value of MRSA Nasal PCR screening in suspected HAP/VAP?",
    "answer": "MRSA nasal PCR has a high negative predictive value (95-98%) for MRSA pneumonia; a negative result allows safe, early discontinuation of Vancomycin or Linezolid within 24-48 hours.",
    "explanation": "De-escalating anti-MRSA therapy reduces acute kidney injury from vancomycin and prevents antimicrobial resistance.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hap"
    ]
  },
  {
    "id": "hap.fc.diagnostic-criteria",
    "topicId": "hap",
    "question": "What clinical and radiographic triad establishes the diagnosis of HAP?",
    "answer": "A new or progressive pulmonary infiltrate on chest radiography/CT PLUS at least two of: 1. Fever > 38.0°C; 2. Leukocytosis (>12k) or leukopenia (<4k); 3. Purulent sputum or tracheal secretions.",
    "explanation": "Obtain microbiological respiratory cultures and blood cultures prior to initiating empiric antimicrobial therapy.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hap"
    ]
  }
];
