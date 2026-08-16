import type { Question } from "@/content-types";

export const pneumoniaQuestions: readonly Question[] = [
  {
    "id": "pneumonia.q.cape-cod-hydrocortisone",
    "topicId": "pneumonia",
    "stem": "A 64-year-old previously healthy man is admitted to the ICU with severe pneumococcal pneumonia requiring high-flow nasal cannula (FiO2 0.7, flow 50 L/min) and meeting ATS/IDSA criteria for severe CAP. Based on the 2023 CAPE COD trial, which adjunctive medical therapy is indicated to reduce 28-day mortality?",
    "options": [
      {
        "id": "a",
        "text": "Intravenous Hydrocortisone (200 mg/day)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Inhaled iloprost prostacyclin",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "High-dose intravenous Vitamin C and thiamine",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Continuous therapeutic anticoagulation with unfractionated heparin",
        "isCorrect": false
      }
    ],
    "explanation": "The CAPE COD randomized trial (NEJM 2023) demonstrated that early administration of IV hydrocortisone (200 mg daily) significantly reduced 28-day mortality in patients with severe CAP admitted to the ICU.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Dequin PF et al. CAPE COD Trial. NEJM 2023."
    ]
  },
  {
    "id": "pneumonia.q.mrsa-pcr-deescalation",
    "topicId": "pneumonia",
    "stem": "A patient with severe CAP is started on Ceftriaxone, Azithromycin, and Vancomycin. On day 2, a rapid MRSA nasal swab PCR test returns negative. Sputum Gram stain shows Gram-positive diplococci. What is the most appropriate antimicrobial modification?",
    "options": [
      {
        "id": "a",
        "text": "Discontinue Vancomycin immediately.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Continue Vancomycin for a full 14-day course.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Switch Vancomycin to Linezolid.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Add Piperacillin-Tazobactam for broader synergy.",
        "isCorrect": false
      }
    ],
    "explanation": "MRSA nasal PCR has an exceptionally high negative predictive value (>96–99%) for MRSA pneumonia. ATS/IDSA guidelines strongly recommend discontinuing empiric anti-MRSA therapy when the nasal PCR screen is negative.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "ATS/IDSA CAP Guidelines 2019."
    ]
  }
,
  {
    id: "pna.q.cape-cod-steroids",
    topicId: "pneumonia",
    stem: "What was the definitive finding of the CAPE COD landmark trial (NEJM 2023) regarding early hydrocortisone in severe community-acquired pneumonia (CAP)?",
    options: [
      { id: "a", text: "Hydrocortisone significantly increased secondary bacterial infections without clinical benefit.", isCorrect: false },
      { id: "b", text: "Early continuous IV hydrocortisone (200 mg/day for 4–8 days) significantly reduced 28-day mortality (6.2% vs 11.9%, P=0.006) in ICU patients with severe CAP.", isCorrect: true },
      { id: "c", text: "Hydrocortisone is only effective if the patient has confirmed pneumococcal bacteremia.", isCorrect: false },
      { id: "d", text: "Hydrocortisone had no impact on mechanical ventilation or vasopressor requirements.", isCorrect: false }
    ],
    explanation: "The CAPE COD trial (NEJM 2023, n=800) demonstrated that early initiation of low-dose IV hydrocortisone in ICU patients with severe CAP (on mechanical ventilation, NIV, or high-flow oxygen) significantly reduced 28-day all-cause mortality (NNT = 18) and reduced endotracheal intubation.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Dequin PF, et al. CAPE COD Trial. NEJM 2023."
    ]
  }
];
