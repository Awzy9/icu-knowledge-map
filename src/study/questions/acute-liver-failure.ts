import type { Question } from "@/content-types";

export const acuteLiverFailureQuestions: readonly Question[] = [
  {
    "id": "alf.q.kings-college-acetaminophen",
    "topicId": "acute-liver-failure",
    "stem": "A 24-year-old woman presents with severe acetaminophen toxicity. Despite full fluid resuscitation and 24 hours of IV N-acetylcysteine, repeat blood gas shows an arterial pH of 7.24 (lactate 6.2 mmol/L), serum creatinine 3.8 mg/dL, and INR 5.8. According to the King's College Criteria, what is the indicated management?",
    "options": [
      {
        "id": "a",
        "text": "Emergency listing for Liver Transplantation (single criterion of arterial pH < 7.30 after resuscitation confirms <15% spontaneous survival)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Continue NAC and transfer to general medical floor",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Transfuse 6 units of fresh frozen plasma to normalize the INR",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Perform immediate subtotal hepatectomy without transplant",
        "isCorrect": false
      }
    ],
    "explanation": "In acetaminophen-induced acute liver failure, an arterial pH < 7.30 after adequate fluid resuscitation is a standalone King's College criterion predicting >85–90% mortality without emergency liver transplantation. The patient must be immediately listed for orthotopic liver transplantation at a transplant center.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "O'Grady JG et al. Gastroenterology 1989; AASLD ALF Guidelines."
    ]
  }
,
  {
    id: "alf.q.ammonia-crrt-target",
    topicId: "acute-liver-failure",
    stem: "In a patient with hyperacute liver failure (acetaminophen toxicity) with worsening grade 3 encephalopathy and arterial ammonia of 210 mcg/dL, what is the role and target of early Continuous Renal Replacement Therapy (CRRT)?",
    options: [
      { id: "a", text: "CRRT is only indicated if severe oliguric renal failure with BUN > 100 mg/dL develops.", isCorrect: false },
      { id: "b", text: "Early high-volume CRRT (effluent flow 35–45 mL/kg/h) is indicated for ammonia clearance to maintain arterial ammonia < 100–150 mcg/dL, preventing cytotoxic brain herniation.", isCorrect: true },
      { id: "c", text: "Intermittent hemodialysis is preferred because it causes rapid shift of water into astrocytes.", isCorrect: false },
      { id: "d", text: "CRRT is contraindicated due to catheter-induced coagulopathy.", isCorrect: false }
    ],
    explanation: "Sustained arterial ammonia > 150-200 mcg/dL produces severe astrocytic glutamine accumulation and cytotoxic brain edema with herniation risk (>70%). Early high-volume CRRT clears ammonia continuously without causing the rapid osmolar fluctuations seen in intermittent hemodialysis.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "AASLD Acute Liver Failure Guidance; Bernal W, et al. Lancet 2010."
    ]
  },
  {
    id: "alf.q.rebalanced-hemostasis",
    topicId: "acute-liver-failure",
    stem: "A patient with Acute Liver Failure has INR 4.2, Platelets 45,000/mcL, but no active bleeding. The ICU team is planning to place a right internal jugular central venous catheter. What is the evidence-based transfusion strategy?",
    options: [
      { id: "a", text: "Transfuse 4 units of Fresh Frozen Plasma (FFP) and 2 pools of platelets before the procedure.", isCorrect: false },
      { id: "b", text: "Do NOT give prophylactic FFP; hemostasis in ALF is rebalanced (loss of Protein C/S matches factor loss). Use ultrasound guidance for vascular access, reserving products only for active hemorrhage or TEG/ROTEM coagulopathy.", isCorrect: true },
      { id: "c", text: "Administer 4-factor Prothrombin Complex Concentrate (PCC) to normalize INR to < 1.5.", isCorrect: false },
      { id: "d", text: "Administer recombinant Factor VIIa.", isCorrect: false }
    ],
    explanation: "ALF creates 'rebalanced hemostasis' — concomitant loss of natural anticoagulants (Protein C, Protein S, Antithrombin III) and elevated Factor VIII/vWF preserve thrombin generation despite elevated INR. Prophylactic FFP fails to prevent procedural bleeding, causes volume overload and TRALI, and obliterates the INR as the primary prognostic marker for liver transplant criteria.",
    difficulty: "advanced",
    category: "Management",
    references: [
      "AASLD ALF Guidance; Stravitz RT. Crit Care 2018."
    ]
  }
];
