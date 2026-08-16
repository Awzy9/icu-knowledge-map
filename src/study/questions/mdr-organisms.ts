import type { Question } from "@/content-types";

export const mdrOrganismsQuestions: readonly Question[] = [
  {
    "id": "mdr.q.cre-first-line-selection",
    "topicId": "mdr-organisms",
    "stem": "A patient in the ICU develops bacteremia from a Klebsiella pneumoniae carbapenemase (KPC)-producing Enterobacterales strain (resistant to meropenem, piperacillin-tazobactam, and ciprofloxacin). According to the IDSA 2023 Guidance on Antimicrobial-Resistant Infections, which agent is preferred as first-line therapy over Polymyxin/Colistin-based regimens?",
    "options": [
      {
        "id": "a",
        "text": "Ceftazidime-Avibactam or Meropenem-Vaborbactam monotherapy",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Colistin plus high-dose Tigecycline",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ampicillin-Sulbactam high-dose infusion",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Ceftriaxone plus Gentamicin",
        "isCorrect": false
      }
    ],
    "explanation": "The IDSA 2023 AMR Guidance recommends modern beta-lactam/beta-lactamase inhibitors (Ceftazidime-Avibactam, Meropenem-Vaborbactam, or Imipenem-Relebactam) as preferred first-line agents for KPC-CRE infections. Observational and randomized trial data demonstrate significantly higher clinical cure rates and lower acute nephrotoxicity compared to colistin-based regimens.",
    "difficulty": "intermediate",
    "category": "Guidelines",
    "references": [
      "Tamma PD et al. IDSA AMR Guidance 2023."
    ]
  }
,
  {
    id: "mdr.q.cre-antibiotic",
    topicId: "mdr-organisms",
    stem: "A critically ill patient in septic shock has blood cultures growing Klebsiella pneumoniae producing a KPC carbapenemase (CRE). According to IDSA Guidance on MDR Gram-Negative Infections, what is the preferred first-line antibiotic?",
    options: [
      { id: "a", text: "Ceftriaxone plus Vancomycin.", isCorrect: false },
      { id: "b", text: "Ceftazidime-avibactam, Meropenem-vaborbactam, or Imipenem-cilastatin-relebactam.", isCorrect: true },
      { id: "c", text: "Colistin monotherapy.", isCorrect: false },
      { id: "d", text: "Piperacillin-tazobactam continuous infusion.", isCorrect: false }
    ],
    explanation: "IDSA 2023 Guidance recommends novel beta-lactamase inhibitor combinations (Ceftazidime-avibactam or Meropenem-vaborbactam) as preferred first-line therapy for KPC-producing CRE over older polymyxin-based (colistin) regimens, due to significantly higher clinical cure rates and lower nephrotoxicity.",
    difficulty: "intermediate",
    category: "Pharmacology",
    references: [
      "Tamma PD, et al. IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections: 2023."
    ]
  },
  {
    id: "mdr.q.craba-regimen",
    topicId: "mdr-organisms",
    stem: "For severe infections caused by Carbapenem-Resistant Acinetobacter baumannii (CRAB), what is the recommended treatment approach in modern IDSA guidelines?",
    options: [
      { id: "a", text: "High-dose ampicillin-sulbactam (total 9g daily of the sulbactam component) in combination with at least one other active agent (e.g. minocycline, tigecycline, or cefiderocol).", isCorrect: true },
      { id: "b", text: "Meropenem monotherapy standard dose.", isCorrect: false },
      { id: "c", text: "Ceftriaxone 2g daily.", isCorrect: false },
      { id: "d", text: "Vancomycin monotherapy.", isCorrect: false }
    ],
    explanation: "Sulbactam has unique intrinsic binding affinity to penicillin-binding proteins (PBP1a/1b and PBP3) of Acinetobacter baumannii. IDSA guidelines recommend high-dose ampicillin-sulbactam (dosed to deliver 6-9g of sulbactam component/day) in combination with a second agent (minocycline, tigecycline, or cefiderocol) for severe CRAB infections.",
    difficulty: "advanced",
    category: "Pharmacology",
    references: [
      "IDSA 2023 AMR Guidance."
    ]
  }
];
