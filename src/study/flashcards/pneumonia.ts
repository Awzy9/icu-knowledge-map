import type { Flashcard } from "@/content-types";

export const pneumoniaFlashcards: readonly Flashcard[] = [
  {
    "id": "pneumonia.fc.curb65-smartcop",
    "topicId": "pneumonia",
    "question": "What clinical scoring systems determine ICU admission in Community-Acquired Pneumonia (CAP)?",
    "answer": "SMART-COP and the ATS/IDSA Severe CAP Major/Minor Criteria (1 major criterion or ≥3 minor criteria define severe CAP).",
    "explanation": "Major criteria: Septic shock requiring vasopressors or respiratory failure requiring invasive mechanical ventilation. Minor criteria include RR ≥ 30, PaO2/FiO2 ≤ 250, multilobar infiltrates, confusion, BUN ≥ 20, WBC < 4,000, platelets < 100,000, and hypothermia.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Metlay JP et al. ATS/IDSA CAP Guideline. AJRCCM 2019."
    ]
  },
  {
    "id": "pneumonia.fc.empiric-severe-cap-regimen",
    "topicId": "pneumonia",
    "question": "What is the recommended standard empiric antibiotic regimen for severe CAP in the ICU without MRSA/Pseudomonas risk factors?",
    "answer": "A potent beta-lactam (Ceftriaxone, Ampicillin-Sulbactam, or Cefotaxime) PLUS an advanced macrolide (Azithromycin) OR a respiratory fluoroquinolone.",
    "explanation": "Beta-lactam plus macrolide combination therapy demonstrates lower mortality in severe CAP compared to monotherapy, likely due to macrolide immunomodulatory effects.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ATS/IDSA Severe CAP Guidelines 2019; CAPE COD Trial."
    ]
  },
  {
    "id": "pneumonia.fc.steroids-severe-cap-cape-cod",
    "topicId": "pneumonia",
    "question": "What did the CAPE COD trial prove regarding corticosteroids in severe Community-Acquired Pneumonia?",
    "answer": "Early IV Hydrocortisone (200 mg/day continuous infusion) significantly reduced 28-day mortality (6.2% vs 11.9%) in severe CAP patients admitted to the ICU.",
    "explanation": "Published in NEJM 2023, the CAPE COD trial established that early systemic hydrocortisone reduces mortality and intubation rates in severe CAP without increasing secondary hospital infections.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Dequin PF et al. Hydrocortisone in Severe Community-Acquired Pneumonia (CAPE COD). NEJM 2023."
    ]
  },
  {
    "id": "pneumonia.fc.mrsa-pseudomonas-triggers",
    "topicId": "pneumonia",
    "question": "When should empiric MRSA or Pseudomonas coverage be added in severe CAP?",
    "answer": "Prior isolation of MRSA/Pseudomonas in respiratory secretions within 1 year, recent hospitalization with parenteral antibiotics within 90 days, or local validation of high risk.",
    "explanation": "ATS/IDSA guidelines recommend obtaining respiratory cultures and MRSA nasal PCR to rapidly de-escalate or withhold anti-MRSA/anti-pseudomonal coverage if negative.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "ATS/IDSA Community-Acquired Pneumonia Guidelines 2019."
    ]
  },
  {
    "id": "pneumonia.fc.curb65",
    "topicId": "pneumonia",
    "question": "What criteria define the CURB-65 pneumonia severity score?",
    "answer": "Confusion, Urea > 7 mmol/L (BUN > 19 mg/dL), Respiratory rate >= 30/min, Blood pressure (SBP < 90 or DBP <= 60), Age >= 65 (1 point each; score >= 3 indicates severe pneumonia requiring ICU consideration).",
    "explanation": "Helps stratify 30-day mortality risk and guide outpatient vs inpatient vs ICU admission.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in pneumonia"
    ]
  },
  {
    "id": "pneumonia.fc.ats-severe-cap",
    "topicId": "pneumonia",
    "question": "What are the ATS/IDSA criteria for direct ICU admission in Severe Community-Acquired Pneumonia?",
    "answer": "Either 1 Major criterion (Invasive mechanical ventilation required, or Septic shock requiring vasopressors) OR >= 3 Minor criteria (PaO2/FiO2 <= 250, Multilobar infiltrates, Confusion, BUN >= 20, Leukopenia, Thrombocytopenia, Hypothermia, Hypotension requiring aggressive fluid).",
    "explanation": "Validates early ICU level care before overt catastrophic decompensation.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in pneumonia"
    ]
  }
];
