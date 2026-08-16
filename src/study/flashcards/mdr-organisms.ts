import type { Flashcard } from "@/content-types";

export const mdrOrganismsFlashcards: readonly Flashcard[] = [
  {
    "id": "mdr.fc.carbapenem-resistant-enterobacterales-cre",
    "topicId": "mdr-organisms",
    "question": "What are the first-line novel beta-lactam/beta-lactamase inhibitor combinations for Carbapenem-Resistant Enterobacterales (CRE)?",
    "answer": "Ceftazidime-Avibactam, Meropenem-Vaborbactam, and Imipenem-Cilastatin-Relebactam.",
    "explanation": "IDSA guidance 2023 recommends these novel agents over older colistin/polymyxin regimens due to superior clinical cure and significantly lower nephrotoxicity.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Tamma PD et al. IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections: 2023 Update. Clin Infect Dis 2023."
    ]
  },
  {
    "id": "mdr.fc.metallo-beta-lactamase-cre",
    "topicId": "mdr-organisms",
    "question": "What antimicrobial combination is indicated for Metallo-Beta-Lactamase (NDM/VIM)-producing CRE?",
    "answer": "Ceftazidime-Avibactam PLUS Aztreonam (or Cefiderocol).",
    "explanation": "Metallo-beta-lactamases hydrolyze all beta-lactams except aztreonam; however, co-existing ESBL/AmpC enzymes hydrolyze aztreonam. Avibactam protects aztreonam from ESBL/AmpC hydrolysis, restoring potent activity.",
    "difficulty": "advanced",
    "category": "Pharmacology",
    "references": [
      "IDSA AMR Guidance 2023."
    ]
  },
  {
    "id": "mdr.fc.crab-acinetobacter-regimen",
    "topicId": "mdr-organisms",
    "question": "What is the preferred combination regimen for Carbapenem-Resistant Acinetobacter baumannii (CRAB) in the ICU?",
    "answer": "High-dose Ampicillin-Sulbactam (total 6–9 g/day of the sulbactam component) combined with at least one secondary active agent (e.g. Minocycline, Tigecycline, or Cefiderocol).",
    "explanation": "Sulbactam has unique intrinsic binding to penicillin-binding proteins (PBP1a/1b and PBP3) of A. baumannii, exerting direct bactericidal activity independent of ampicillin.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "IDSA AMR Guidance 2023."
    ]
  },
  {
    "id": "mdr.fc.cre-ceftaz-avi",
    "topicId": "mdr-organisms",
    "question": "What is the first-line antibiotic regimen for KPC-producing Carbapenem-Resistant Enterobacterales (CRE) infections according to IDSA guidance?",
    "answer": "Ceftazidime-avibactam (or Meropenem-vaborbactam).",
    "explanation": "Avibactam and vaborbactam potently inhibit Class A serine beta-lactamases (KPC). IDSA AMR guidance strongly favors novel beta-lactamase inhibitor combinations over polymyxin/colistin regimens.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in mdr-organisms"
    ]
  },
  {
    "id": "mdr.fc.mbl-aztreonam-avi",
    "topicId": "mdr-organisms",
    "question": "How are Metallo-Beta-Lactamase (MBL: NDM, VIM) CRE infections treated?",
    "answer": "Ceftazidime-avibactam PLUS Aztreonam (or Cefiderocol).",
    "explanation": "Aztreonam is stable against metallo-beta-lactamases, while avibactam inhibits co-produced serine beta-lactamases (ESBL, AmpC) that would otherwise degrade aztreonam.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in mdr-organisms"
    ]
  },
  {
    "id": "mdr.fc.cr-acinetobacter",
    "topicId": "mdr-organisms",
    "question": "What combination therapy is recommended for severe Carbapenem-Resistant Acinetobacter baumannii (CRAB) infections?",
    "answer": "High-dose Ampicillin-sulbactam (9 g IV q8h as continuous/prolonged infusion) plus at least one other active agent (Minocycline, Tigecycline, or Cefiderocol).",
    "explanation": "Sulbactam has direct bactericidal activity against Acinetobacter penicillin-binding proteins (PBP1a/1b and PBP3).",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in mdr-organisms"
    ]
  }
];
