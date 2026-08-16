import type { Flashcard } from "@/content-types";

export const vapFlashcards: readonly Flashcard[] = [
  {
    "id": "vap.fc.diagnostic-criteria",
    "topicId": "vap",
    "question": "What clinical, radiographic, and microbiological criteria define Ventilator-Associated Pneumonia (VAP)?",
    "answer": "New or progressive lung infiltrate on chest imaging occurring > 48 hours after endotracheal intubation, PLUS at least two of: 1. Fever > 38°C or hypothermia < 36°C; 2. Leukocytosis (>12,000) or leukopenia (<4,000); 3. Purulent endotracheal secretions; PLUS positive quantitative microbiological culture.",
    "explanation": "Quantitative thresholds: Endotracheal aspirate ≥ 10^6 CFU/mL, Bronchoalveolar lavage (BAL) ≥ 10^4 CFU/mL, Protected specimen brush (PSB) ≥ 10^3 CFU/mL.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Kalil AC et al. IDSA/ATS VAP Guidelines. Clin Infect Dis 2016."
    ]
  },
  {
    "id": "vap.fc.prevention-bundle-elements",
    "topicId": "vap",
    "question": "What are the core evidence-based elements of the CDC/SHEA VAP Prevention Bundle?",
    "answer": "1. Elevation of head of bed to 30–45 degrees; 2. Daily Spontaneous Awakening & Breathing Trials (SAT/SBT); 3. Endotracheal tubes with subglottic secretion drainage (in anticipated ventilation >48–72h); 4. Avoidance of unplanned extubation; 5. Oral care; 6. Early mobility.",
    "explanation": "Subglottic suctioning prevents microaspiration of colonized oropharyngeal secretions pooled above the endotracheal tube cuff.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Klompas M et al. Strategies to prevent ventilator-associated pneumonia in acute care hospitals. Infect Control Hosp Epidemiol 2022."
    ]
  },
  {
    "id": "vap.fc.duration-7-days",
    "topicId": "vap",
    "question": "What is the guideline-recommended duration of antibiotic therapy for uncomplicated VAP?",
    "answer": "A 7-day course of appropriate antimicrobial therapy.",
    "explanation": "Chastre et al. (JAMA 2003) and 2016 IDSA/ATS guidelines established that 7 days of antibiotics produces equivalent clinical cure, lower recurrence of multi-drug resistant pathogens, and fewer adverse drug effects compared to 14 days.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Kalil AC et al. IDSA/ATS Guidelines. CID 2016; Chastre J et al. JAMA 2003."
    ]
  },
  {
    "id": "vap.fc.prevention-bundle",
    "topicId": "vap",
    "question": "What are the key evidence-based interventions in the ICU Ventilator-Associated Pneumonia (VAP) prevention bundle?",
    "answer": "1. Head of bed elevation 30-45°; 2. Daily sedation interruption and spontaneous breathing trials (SAT+SBT); 3. Endotracheal tube with subglottic secretion drainage; 4. Maintain ETT cuff pressure 20-30 cmH2O; 5. Avoid unnecessary ventilator circuit changes.",
    "explanation": "Subglottic suctioning and daily liberation protocols reduce microaspiration of oropharyngeal secretions and shorten mechanical ventilation duration.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in vap"
    ]
  },
  {
    "id": "vap.fc.bronchoalveolar-lavage-thresholds",
    "topicId": "vap",
    "question": "What quantitative culture thresholds distinguish colonization from true bacterial infection in suspected VAP?",
    "answer": "Bronchoalveolar Lavage (BAL): >= 10^4 CFU/mL; Protected Specimen Brush (PSB): >= 10^3 CFU/mL; Endotracheal Aspirate (ETA): >= 10^5 CFU/mL.",
    "explanation": "Quantitative cultures prevent overtreatment of airway colonization and guide targeted antimicrobial de-escalation.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in vap"
    ]
  },
  {
    "id": "vap.fc.short-course-antibiotics",
    "topicId": "vap",
    "question": "What is the recommended duration of antibiotic therapy for VAP responding to treatment?",
    "answer": "7 days of targeted antimicrobial therapy (IDSA/ATS guidelines), regardless of whether caused by non-fermenting Gram-negative bacilli (Pseudomonas).",
    "explanation": "7-day course is non-inferior to 14 days and dramatically decreases the emergence of multi-drug resistant superinfections (Chastre trial).",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in vap"
    ]
  }
];
