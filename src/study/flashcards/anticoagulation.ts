import type { Flashcard } from "@/content-types";

export const anticoagulationFlashcards: readonly Flashcard[] = [
  {
    "id": "anticoag.fc.specific-reversal-agents",
    "topicId": "anticoagulation",
    "question": "What are the specific reversal antidotes for Dabigatran, Apixaban/Rivaroxaban, Warfarin, and Heparin?",
    "answer": "Dabigatran: Idarucizumab (Praxbind 5 g IV); Apixaban/Rivaroxaban: Andexanet alfa (or 4F-PCC 50 U/kg); Warfarin: 4-Factor PCC (25–50 U/kg) + IV Vitamin K (10 mg); Unfractionated Heparin: Protamine sulfate (1 mg per 100 U heparin).",
    "explanation": "Administer immediately in life-threatening bleeding or emergency surgery requiring normal hemostasis.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Tomaselli GF et al. 2020 ACC Expert Consensus on Management of Bleeding on Oral Anticoagulants. JACC 2020."
    ]
  },
  {
    "id": "anticoag.fc.4f-pcc-vs-ffp-warfarin",
    "topicId": "anticoagulation",
    "question": "Why is 4-Factor PCC superior to Fresh Frozen Plasma (FFP) for emergency Warfarin reversal?",
    "answer": "4F-PCC contains concentrated Vitamin K-dependent factors (II, VII, IX, X, Protein C/S), achieves complete INR normalization in < 15–30 minutes, requires minimal infusion volume (~100 mL vs 1–2 L FFP), and does not cause volume overload/TACO.",
    "explanation": "Sarode et al. (Circulation 2013) proved 4F-PCC achieves faster hemostatic efficacy and rapid INR correction compared to FFP.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Sarode R et al. Efficacy and safety of a 4-factor prothrombin complex concentrate. Circulation 2013."
    ]
  },
  {
    "id": "anticoag.fc.idarucizumab",
    "topicId": "anticoagulation",
    "question": "What is the specific reversal agent for Dabigatran and what is its dosing?",
    "answer": "Idarucizumab (Praxbind), 5 g IV administered as two consecutive 2.5 g boluses/infusions (RE-VERSE AD landmark study).",
    "explanation": "Humanized monoclonal antibody fragment with 350-fold higher affinity for dabigatran than thrombin, achieving immediate 100% reversal.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in anticoagulation"
    ]
  },
  {
    "id": "anticoag.fc.andexanet-alfa",
    "topicId": "anticoagulation",
    "question": "What is the indication and mechanism of Andexanet alfa in factor Xa inhibitor reversal?",
    "answer": "Indicated for life-threatening bleeding from Apixaban or Rivaroxaban. Decoy recombinant modified human Factor Xa protein that binds and neutralizes Xa inhibitors (ANNEXA-4 trial).",
    "explanation": "Alternatively, 4-Factor Prothrombin Complex Concentrate (4F-PCC 50 IU/kg) is widely used when Andexanet alfa is unavailable.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in anticoagulation"
    ]
  },
  {
    "id": "anticoag.fc.crrt-clearance",
    "topicId": "anticoagulation",
    "question": "Which DOAC is substantially cleared by the kidneys and contraindicated in severe renal failure / CRRT?",
    "answer": "Dabigatran (80% renal clearance); accumulates dramatically in AKI/ESRD. Apixaban has the lowest renal clearance (27%) among DOACs.",
    "explanation": "Unfractionated Heparin (UFH) with aPTT or anti-Xa monitoring remains the safest parenteral anticoagulant in fluctuating ICU renal failure.",
    "difficulty": "intermediate",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in anticoagulation"
    ]
  },
  {
    "id": "anticoag.fc.warfarin-reversal-4fpcc",
    "topicId": "anticoagulation",
    "question": "Why is 4-Factor PCC superior to Fresh Frozen Plasma (FFP) for urgent Warfarin reversal?",
    "answer": "Normalizes INR within 15-30 minutes without massive volume overload (100 mL vs 1000-1500 mL FFP), with significantly lower TACO/TRALI risk.",
    "explanation": "SARPEDON trial demonstrated 4F-PCC + IV Vitamin K 10 mg achieves rapid, sustained hemostatic correction.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in anticoagulation"
    ]
  }
];
