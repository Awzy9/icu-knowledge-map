import type { Question } from "@/content-types";

export const anticoagulationQuestions: readonly Question[] = [
  {
    "id": "anticoag.q.idarucizumab-selection",
    "topicId": "anticoagulation",
    "stem": "A 74-year-old woman taking Dabigatran 150 mg twice daily presents with an acute subdural hematoma and midline shift requiring emergency craniotomy. What is the specific FDA-approved reversal agent indicated prior to surgery?",
    "options": [
      {
        "id": "a",
        "text": "Idarucizumab (5 g IV given as two 2.5 g boluses)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Andexanet alfa high-dose infusion",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Protamine sulfate 50 mg IV",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Intravenous Vitamin K 10 mg alone",
        "isCorrect": false
      }
    ],
    "explanation": "Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment that binds specifically to dabigatran with 350-fold higher affinity than thrombin, achieving instantaneous and complete reversal within minutes (RE-VERSE AD Trial, NEJM 2017).",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Pollack CV et al. Idarucizumab for Dabigatran Reversal (RE-VERSE AD). NEJM 2017."
    ]
  }
,
  {
    id: "anticoag.q.andexanet-alfa",
    topicId: "anticoagulation",
    stem: "A patient on apixaban 5 mg BID for atrial fibrillation sustains a traumatic subdural hematoma requiring emergency craniotomy. Last dose of apixaban was 3 hours ago. What is the specific reversal agent indicated by the ANNEXA-4 trial?",
    options: [
      { id: "a", text: "Idarucizumab 5g IV infusion.", isCorrect: false },
      { id: "b", text: "Andexanet alfa (modified recombinant inactive Factor Xa decoy).", isCorrect: true },
      { id: "c", text: "Protamine sulfate 50 mg IV.", isCorrect: false },
      { id: "d", text: "Vitamin K 10 mg IV push.", isCorrect: false }
    ],
    explanation: "Andexanet alfa is a recombinant modified human factor Xa decoy protein approved for the emergency reversal of factor Xa inhibitors (apixaban, rivaroxaban) in life-threatening or uncontrolled bleeding (ANNEXA-4 trial). If unavailable, 4-factor PCC (25-50 units/kg) is the recommended alternative.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Connolly SJ, et al. ANNEXA-4 Trial. NEJM 2019; CHEST 2022 Anticoagulation Reversal Guidelines."
    ]
  },
  {
    id: "anticoag.q.dabigatran-idarucizumab",
    topicId: "anticoagulation",
    stem: "Which reversal agent binds specifically to the direct thrombin inhibitor dabigatran with 350-fold higher affinity than thrombin, achieving immediate complete reversal without prothrombotic risk?",
    options: [
      { id: "a", text: "Idarucizumab (humanized Fab antibody fragment, 5 g IV in two 2.5 g vials).", isCorrect: true },
      { id: "b", text: "4-Factor Prothrombin Complex Concentrate (4F-PCC).", isCorrect: false },
      { id: "c", text: "Recombinant Activated Factor VII (rFVIIa).", isCorrect: false },
      { id: "d", text: "Tranexamic acid 1 g IV.", isCorrect: false }
    ],
    explanation: "Idarucizumab is a monoclonal antibody Fab fragment that binds dabigatran with 350x higher affinity than thrombin, neutralizing its anticoagulant effect within minutes (RE-VERSE AD trial, NEJM 2017). Standard dose is 5 g IV (administered as two 2.5 g boluses).",
    difficulty: "basic",
    category: "Pharmacology",
    references: [
      "Pollack CV, et al. RE-VERSE AD. NEJM 2017."
    ]
  }
];
