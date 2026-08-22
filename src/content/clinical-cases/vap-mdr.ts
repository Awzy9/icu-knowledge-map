import type { ClinicalCase } from "@/content-types/clinical-case";

export const vapMdrCase: ClinicalCase = {
  "id": "case-vap-mdr",
  "slug": "vap-mdr",
  "title": "Ventilator-Associated Pneumonia (VAP) — Carbapenem-Resistant Organism",
  "subtitle": "Diagnostic sampling, PK/PD optimized antimicrobial dosing, and synergy strategies for MDR Acinetobacter baumannii",
  "difficulty": "intermediate",
  "system": "infectious",
  "tags": [
    "vap",
    "mdr-organisms",
    "antimicrobials",
    "amikacin",
    "meropenem"
  ],
  "objectives": [
    "Differentiate clinical colonization from true invasive VAP using quantitative BAL thresholds (≥10^4 CFU/mL)",
    "Formulate combination therapeutic regimens for Carbapenem-Resistant Acinetobacter baumannii (CRAB) per IDSA 2024 AMR guidelines",
    "Optimize antimicrobial PK/PD parameters (extended/continuous infusions, high-dose ampicillin-sulbactam, inhaled aminoglycoside adjuncts)"
  ],
  "initialPresentation": {
    "history": "A 62-year-old male on mechanical ventilation for 11 days following traumatic subarachnoid hemorrhage develops high fevers (39.1°C), thick purulent endotracheal secretions, and increasing oxygen requirements (P/F ratio drops from 320 to 180). CXR demonstrates a new dense left lower lobe consolidation.",
    "vitals": {
      "HR": "114/min",
      "BP": "104/62 mmHg",
      "MAP": "76 mmHg",
      "RR": "24/min",
      "SpO2": "91% on FiO2 0.60, PEEP 10",
      "Temp": "39.1°C"
    },
    "keyFindings": [
      "Quantitative bronchoalveolar lavage (BAL) yields >10^5 CFU/mL of extensive drug-resistant (XDR) Acinetobacter baumannii",
      "Antimicrobial susceptibility testing: Resistant to Meropenem (MIC >32), Cefepime, Piperacillin-Tazobactam, and Ciprofloxacin; Intermediate to Amikacin; Susceptible to Polymyxin B and high-dose Ampicillin-Sulbactam",
      "Leukocytosis with WBC 22,400/μL and procalcitonin 4.8 ng/mL"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient has invasive VAP caused by Carbapenem-Resistant Acinetobacter baumannii (CRAB). Renal function is normal (CrCl 95 mL/min).",
      "question": "What is the guideline-preferred antimicrobial regimen for severe CRAB pneumonia per IDSA 2024 AMR Guidance?",
      "options": [
        {
          "id": "1-a",
          "text": "High-dose Ampicillin-Sulbactam (9 g IV q8h as 4-hour extended infusion, supplying 9 g of sulbactam/day) combined with a second agent (IV Polymyxin B or high-dose Minocycline) ± adjunctive inhaled Amikacin",
          "isCorrect": true,
          "explanation": "Per IDSA guidance, high-dose Sulbactam (which has direct penicillin-binding protein 1 and 3 saturation in Acinetobacter) is the core backbone of CRAB therapy, combined with a second active agent to maximize bacterial killing and prevent resistance emergence.",
          "physiologicReasoning": "Sulbactam possesses unique intrinsic bactericidal activity against Acinetobacter baumannii. High-dose extended infusion ensures time above MIC (T > MIC) > 60% in alveolar epithelial lining fluid.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Rapid bactericidal killing in pulmonary parenchyma",
              "Fever lyses over 48 hours; purulent secretions decrease"
            ],
            "clinicalResponse": "Patient exhibits clinical improvement with clearing secretions, P/F ratio improves to 280, and repeat BAL at Day 7 is culture-negative."
          }
        },
        {
          "id": "1-b",
          "text": "Meropenem 1 g IV q8h standard 30-minute infusion as monotherapy",
          "isCorrect": false,
          "explanation": "The isolate has a Meropenem MIC > 32 mcg/mL (carbapenemase-producing). Meropenem monotherapy results in clinical failure and high mortality in CRAB pneumonia.",
          "whyNot": "Meropenem monotherapy is clinically ineffective against carbapenemase-producing Acinetobacter strains.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Treatment failure with progression to septic shock and acute respiratory failure"
            ],
            "clinicalResponse": "Patient deteriorates with septic shock requiring norepinephrine."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "neutral",
        "hr": "down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "amikacin",
    "meropenem",
    "cefepime"
  ],
  "relatedTopicIds": [
    "vap",
    "mdr-organisms",
    "mechanical-ventilation"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "sudden-hypoxemia"
  ],
  "references": [
  "Infectious Diseases Society of America 2024 Guidance on the Treatment of Antimicrobial Resistant Gram-Negative Infections"
]
};
