import type { Flashcard } from "@/content-types";

export const necrotizingSoftTissueInfectionsFlashcards: readonly Flashcard[] = [
  {
    "id": "nsti.fc.type1-vs-type2",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "What is the microbiological difference between Type 1 and Type 2 Necrotizing Soft Tissue Infections (NSTI)?",
    "answer": "Type 1 is Polymicrobial (aerobic + anaerobic Gram-positives and Gram-negatives, common in diabetics/post-op); Type 2 is Monomicrobial (Group A Streptococcus or community-acquired MRSA).",
    "explanation": "Type 2 necrotizing fasciitis can occur in young, healthy individuals following minor trauma or surgery, mediated by streptococcal pyrogenic exotoxins.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Stevens DL et al. IDSA Practice Guidelines for Skin and Soft Tissue Infections. Clin Infect Dis 2014."
    ]
  },
  {
    "id": "nsti.fc.lrinec-score-interpretation",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "What is the LRINEC score, and why must a low score never delay surgical exploration?",
    "answer": "Laboratory Risk Indicator for Necrotizing Fasciitis (uses CRP, WBC, Hb, Na, Creatinine, Glucose; score ≥ 6 suggests NSTI); however, sensitivity is only ~40–60%, so a low score CANNOT rule out necrotizing infection.",
    "explanation": "Clinical suspicion and 'pain out of proportion to exam' mandate immediate surgical consultation and operative exploration regardless of lab scores.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Wong CH et al. The LRINEC score. Crit Care Med 2004; Fernando SM et al. Ann Surg 2019."
    ]
  },
  {
    "id": "nsti.fc.clindamycin-eagle-effect",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "Why is Clindamycin added to beta-lactams in Group A Streptococcal and Staphylococcal necrotizing fasciitis?",
    "answer": "Clindamycin is a ribosomal protein synthesis inhibitor (50S subunit) that halts bacterial exotoxin production and is not subject to the inoculum (Eagle) effect.",
    "explanation": "In high-density bacterial stationary phase, beta-lactams lose bactericidal activity due to decreased penicillin-binding protein expression (Eagle effect); clindamycin continues to suppress toxin synthesis.",
    "difficulty": "advanced",
    "category": "Pharmacology",
    "references": [
      "Stevens DL et al. The Eagle effect in streptococcal myonecrosis. J Infect Dis 1988."
    ]
  },
  {
    "id": "nsti.fc.surgical-debridement-primacy",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "What is the single most important determinant of survival in necrotizing fasciitis?",
    "answer": "Immediate, aggressive surgical exploration and complete debridement of all non-viable necrotic tissue.",
    "explanation": "Delaying surgical exploration > 12–24 hours increases mortality up to 9-fold. Surgical re-exploration ('second-look') within 24 hours is standard.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Gelbard RB et al. Surgical debridement in necrotizing soft tissue infections. Am Surg 2015."
    ]
  },
  {
    "id": "nsti.fc.golden-rule-surgery",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "What is the definitive life-saving intervention for Necrotizing Soft Tissue Infections (NSTI)?",
    "answer": "Emergent, radical surgical debridement of all non-viable necrotic fascia and subcutaneous tissue. Mortality increases by ~10% for every 2-hour delay to surgical source control.",
    "explanation": "Antibiotics cannot penetrate clotted microvasculature; surgery must not be delayed for CT scans or lab scores if clinical suspicion is high.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in necrotizing-soft-tissue-infections"
    ]
  },
  {
    "id": "nsti.fc.clindamycin-toxin",
    "topicId": "necrotizing-soft-tissue-infections",
    "question": "Why is IV Clindamycin specifically added to beta-lactams in Group A Streptococcal or Clostridial necrotizing fasciitis?",
    "answer": "Clindamycin is a protein synthesis inhibitor (50S ribosome) that turns off bacterial exotoxin production (Eagle effect) and inhibits superantigen synthesis, which beta-lactams cannot do in high-density bacterial stationary phase.",
    "explanation": "Rapidly mitigates toxin-mediated cytokine storm and refractory distributive shock.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in necrotizing-soft-tissue-infections"
    ]
  }
];
