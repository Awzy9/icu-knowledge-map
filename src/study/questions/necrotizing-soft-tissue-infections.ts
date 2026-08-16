import type { Question } from "@/content-types";

export const necrotizingSoftTissueInfectionsQuestions: readonly Question[] = [
  {
    "id": "nsti.q.surgical-urgency-decision",
    "topicId": "necrotizing-soft-tissue-infections",
    "stem": "A 45-year-old man presents with severe excruciating left leg pain, swelling, and bullae with dusky skin discoloration. Pain is markedly out of proportion to exam findings, and he is febrile and hypotensive (BP 82/50 mmHg). What is the definitive diagnostic and therapeutic management step?",
    "options": [
      {
        "id": "a",
        "text": "Emergent surgical consultation for immediate operative exploration and debridement",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Perform a contrast MRI of the leg to confirm deep fascial fluid before calling surgery",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Calculate LRINEC score and admit to the floor if score is < 6",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Administer IV antibiotics alone and re-examine in 24 hours",
        "isCorrect": false
      }
    ],
    "explanation": "Necrotizing soft tissue infection is an emergent surgical crisis. Operative exploration with direct visualization of fascial necrosis ('dishwater fluid', loss of tissue resistance) is both the gold standard for diagnosis and the only definitive life-saving therapy. Diagnostic imaging must never delay surgical intervention in unstable patients.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "IDSA Skin and Soft Tissue Guidelines 2014; ATLS 10th Edition."
    ]
  },
  {
    "id": "nsti.q.clindamycin-antitoxin-rationale",
    "topicId": "necrotizing-soft-tissue-infections",
    "stem": "Why do IDSA guidelines mandate adding IV Clindamycin (900 mg IV q8h) to Penicillin/Vancomycin in suspected severe Group A Streptococcal necrotizing fasciitis or toxic shock syndrome?",
    "options": [
      {
        "id": "a",
        "text": "Clindamycin inhibits bacterial protein synthesis, directly halting the transcription and production of toxic shock syndrome toxins and streptolysin.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Clindamycin provides mandatory empiric coverage for Pseudomonas aeruginosa.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Clindamycin reduces renal tubular excretion of beta-lactams.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Clindamycin acts as an osmotic diuretic in the fascial space.",
        "isCorrect": false
      }
    ],
    "explanation": "Clindamycin acts on the 50S ribosomal subunit to shut down bacterial protein synthesis, suppressing the release of streptococcal pyrogenic exotoxins (SPE-A, SPE-B, SPE-C) that cause capillary leak, cytokine storm, and multi-organ failure. It also overcomes the inoculum (Eagle) effect seen with cell-wall active beta-lactams.",
    "difficulty": "intermediate",
    "category": "Pharmacology",
    "references": [
      "Stevens DL et al. IDSA Guidelines. CID 2014."
    ]
  }
,
  {
    id: "nsti.q.surgical-timing",
    topicId: "necrotizing-soft-tissue-infections",
    stem: "What is the single most critical determinant of survival in Necrotizing Soft Tissue Infections (NSTI / necrotizing fasciitis)?",
    options: [
      { id: "a", text: "Hyperbaric oxygen therapy within 24 hours.", isCorrect: false },
      { id: "b", text: "Immediate surgical exploration and radical operative debridement of all non-viable tissue within hours of presentation.", isCorrect: true },
      { id: "c", text: "IV Immunoglobulin infusion alone.", isCorrect: false },
      { id: "d", text: "Waiting for MRI confirmation of fascial fluid collections before calling surgical consultation.", isCorrect: false }
    ],
    explanation: "Immediate, radical surgical debridement is the cornerstone of NSTI management. Delays in surgical debridement beyond 12-24 hours increase mortality by up to 9-fold. Operative exploration with the 'finger sweep test' and direct visualization of the fascia remains the gold standard diagnostic and therapeutic intervention.",
    difficulty: "basic",
    category: "Management",
    references: [
      "Stevens DL, et al. IDSA SSTI Guidelines. Clin Infect Dis 2014; Gelbard RB, et al. J Trauma Acute Care Surg 2018."
    ]
  }
];
