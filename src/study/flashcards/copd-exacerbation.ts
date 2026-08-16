import type { Flashcard } from "@/content-types";

export const copdExacerbationFlashcards: readonly Flashcard[] = [
  {
    "id": "copd.fc.anthonisen-criteria",
    "topicId": "copd-exacerbation",
    "question": "What are the three Anthonisen criteria used to define type 1 severe COPD exacerbations?",
    "answer": "1. Increased dyspnea; 2. Increased sputum volume; 3. Increased sputum purulence.",
    "explanation": "Patients with all 3 cardinal symptoms (Type 1) or 2 symptoms including increased sputum purulence (Type 2) derive clear clinical benefit from antibiotic therapy.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Anthonisen NR et al. Antibiotic therapy in acute exacerbations of COPD. Ann Intern Med 1987."
    ]
  },
  {
    "id": "copd.fc.niv-first-line-indication",
    "topicId": "copd-exacerbation",
    "question": "What is the primary indication for Noninvasive Positive Pressure Ventilation (NIV) in acute COPD exacerbation?",
    "answer": "Acute or acute-on-chronic respiratory acidosis (pH < 7.35 and PaCO2 > 45 mmHg) despite optimal medical therapy.",
    "explanation": "NIV (BiPAP) reduces the work of breathing, improves alveolar ventilation, reduces intubation rates by ~65%, and significantly lowers hospital mortality.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "GOLD Guidelines 2024; Cochrane Database Syst Rev on NIV in COPD."
    ]
  },
  {
    "id": "copd.fc.oxygen-target-copd",
    "topicId": "copd-exacerbation",
    "question": "What is the target SpO2 range during oxygen therapy in acute COPD exacerbations, and why?",
    "answer": "88% to 92% (to prevent worsening hypercapnia from Haldane effect and V/Q mismatch worsening).",
    "explanation": "Excessive oxygen (hyperoxia) induces pulmonary vasodilation in poorly ventilated areas (worsening V/Q mismatch) and shifts the CO2 dissociation curve (Haldane effect), sharply increasing PaCO2.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Austin MA et al. Effect of high flow oxygen on mortality in COPD. BMJ 2010."
    ]
  },
  {
    "id": "copd.fc.steroid-dosing-duration",
    "topicId": "copd-exacerbation",
    "question": "What is the guideline-recommended dose and duration of systemic corticosteroid therapy in severe AECOPD?",
    "answer": "Prednisone 40 mg PO daily (or IV equivalent) for 5 days.",
    "explanation": "The REDUCE trial proved that 5 days of corticosteroid therapy is non-inferior to 14 days regarding re-exacerbation rates and mortality, with significantly fewer adverse steroid events.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Leuppi JD et al. Short-term vs conventional glucocorticoid therapy in COPD (REDUCE Trial). JAMA 2013."
    ]
  },
  {
    "id": "copd.fc.niv-contraindications",
    "topicId": "copd-exacerbation",
    "question": "What are absolute contraindications to NIV in acute COPD exacerbation?",
    "answer": "Respiratory arrest, hemodynamic instability/shock, severe encephalopathy with inability to protect airway, active vomiting/massive hematemesis, and facial trauma.",
    "explanation": "Patients with these conditions require prompt, controlled endotracheal intubation rather than prolonged trials of noninvasive mask ventilation.",
    "difficulty": "intermediate",
    "category": "Decision",
    "references": [
      "ERS/ATS Clinical Practice Guideline on NIV for Acute Respiratory Failure."
    ]
  },
  {
    "id": "copd.fc.epap-auto-peep-counterbalance",
    "topicId": "copd-exacerbation",
    "question": "How does setting extrinsic PEEP (EPAP) on NIV help spontaneous breathing in COPD patients with Auto-PEEP?",
    "answer": "Extrinsic PEEP offsets intrinsic threshold work, reducing the inspiratory effort required to trigger a ventilator breath.",
    "explanation": "In the presence of dynamic hyperinflation, the patient must generate negative pressure equal to Auto-PEEP before inspiratory flow begins. Applying EPAP (~80% of auto-PEEP) matches mouth pressure to alveolar pressure.",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "West's Respiratory Physiology; Irwin & Rippe Critical Care."
    ]
  },
  {
    "id": "copd.fc.pseudomonas-risk-factors",
    "topicId": "copd-exacerbation",
    "question": "What clinical features identify high risk for Pseudomonas aeruginosa in severe COPD exacerbation?",
    "answer": "Frequent hospitalizations (≥2 in past year), severe airflow obstruction (FEV1 < 30%), chronic systemic steroids, and prior Pseudomonas isolation.",
    "explanation": "When these risk factors are present, empiric antimicrobial coverage should include an antipseudomonal beta-lactam (e.g., Cefepime, Piperacillin-Tazobactam).",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "GOLD 2024 Report; IDSA/ATS Guidelines."
    ]
  },
  {
    "id": "copd.fc.failure-of-niv-triggers",
    "topicId": "copd-exacerbation",
    "question": "What clinical signs indicate failure of NIV requiring prompt invasive mechanical ventilation?",
    "answer": "Worsening acidemia (pH < 7.25), refractory hypoxemia, worsening lethargy/GCS, hemodynamic deterioration, and copious unmanageable secretions.",
    "explanation": "Delays in intubating patients failing NIV are associated with increased hospital mortality. Reassess ABG within 1–2 hours of NIV initiation.",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "Plant PK et al. Early use of non-invasive ventilation for acute exacerbations of COPD. Lancet 2000."
    ]
  }
];
