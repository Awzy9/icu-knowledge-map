import type { Question } from "@/content-types";

export const hitQuestions: readonly Question[] = [
  {
    "id": "hit.q.argatroban-initiation",
    "topicId": "hit",
    "stem": "A post-cardiac surgery patient on unfractionated heparin has a platelet drop from 240,000 to 72,000/mcL on postoperative day 7 (a 70% decrease). A new right femoral deep vein thrombosis is diagnosed. The 4T score is 7 (High probability). What is the mandatory immediate management?",
    "options": [
      {
        "id": "a",
        "text": "Discontinue all heparin and immediately initiate a non-heparin anticoagulant (such as Argatroban or Bivalirudin)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Discontinue heparin and observe platelets without starting any anticoagulant to avoid bleeding",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Switch from unfractionated heparin to low molecular weight heparin (Enoxaparin)",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Administer 1 adult dose of platelets and start Warfarin 10 mg",
        "isCorrect": false
      }
    ],
    "explanation": "HIT is driven by platelet-activating antibodies against PF4-heparin complexes, generating extreme thrombin generation. Withholding anticoagulation leaves the patient at extreme risk of catastrophic arterial and venous thrombosis (30–50% risk within 30 days). ASH guidelines mandate immediately initiating a non-heparin direct thrombin inhibitor (Argatroban/Bivalirudin). LMWH cross-reacts >90% with HIT antibodies and is strictly contraindicated.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Cuker A et al. ASH HIT Guidelines. Blood Adv 2018."
    ]
  }
,
  {
    id: "hit.q.4ts-score-action",
    topicId: "hit",
    stem: "A postoperative cardiac surgery patient on unfractionated heparin has a 4T's score of 6 (High Probability). What is the immediate required clinical action?",
    options: [
      { id: "a", text: "Wait for the heparin-PF4 ELISA and serotonin release assay (SRA) results before changing therapy.", isCorrect: false },
      { id: "b", text: "Immediately discontinue all heparin products (including flushes/catheter locks) and initiate a non-heparin therapeutic anticoagulant (Argatroban, Bivalirudin, or Fondaparinux).", isCorrect: true },
      { id: "c", text: "Switch from unfractionated heparin to low-molecular-weight heparin (Enoxaparin).", isCorrect: false },
      { id: "d", text: "Administer 1 pool of platelets and continue heparin at half the dose.", isCorrect: false }
    ],
    explanation: "A high or intermediate 4T's score mandates immediate cessation of all heparin sources (including line flushes) and prompt initiation of alternative therapeutic anticoagulation (Argatroban, Bivalirudin, or Fondaparinux) without waiting for laboratory confirmation, because the risk of life-threatening arterial/venous thrombosis is 30-50% in untreated HIT (ASH 2018 Guidelines).",
    difficulty: "basic",
    category: "Management",
    references: [
      "Cuker A, et al. ASH 2018 HIT Guidelines. Blood Adv 2018."
    ]
  },
  {
    id: "hit.q.warfarin-hazard",
    topicId: "hit",
    stem: "Why is Warfarin (Coumadin) strictly contraindicated during the acute thrombocytopenic phase of Heparin-Induced Thrombocytopenia?",
    options: [
      { id: "a", text: "Warfarin directly reacts with heparin-PF4 antibodies to worsen thrombocytopenia.", isCorrect: false },
      { id: "b", text: "Warfarin rapidly depletes short half-life Protein C before clearing procoagulant factors, creating extreme hypercoagulability that triggers microvascular limb gangrene and skin necrosis.", isCorrect: true },
      { id: "c", text: "Warfarin cannot be cleared in patients who have received heparin.", isCorrect: false },
      { id: "d", text: "Warfarin triggers immediate anaphylactoid reactions in HIT.", isCorrect: false }
    ],
    explanation: "Administering warfarin in acute HIT causes rapid depletion of the natural anticoagulant Protein C (half-life 6 hours) while prothrombin (Factor II, half-life 60-72h) remains elevated. In the prothrombotic milieu of HIT, this creates catastrophic microvascular thrombosis, leading to venous limb gangrene and skin necrosis. Warfarin must only be started after platelet recovery (>=150,000/mcL) with therapeutic non-heparin anticoagulation overlap for >=5 days.",
    difficulty: "advanced",
    category: "Safety",
    references: [
      "Warkentin TE. Chest 2004; ASH 2018 HIT Guidelines."
    ]
  }
];
