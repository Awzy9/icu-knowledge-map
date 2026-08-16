import type { Question } from "@/content-types";

export const intracranialHemorrhageQuestions: readonly Question[] = [
  {
    "id": "ich.q.patch-trial-decision",
    "topicId": "intracranial-hemorrhage",
    "stem": "A 70-year-old man taking Aspirin 81 mg daily presents with an acute spontaneous basal ganglia hemorrhage (volume 18 mL). Platelet count is normal at 210,000/mcL. Based on the landmark PATCH randomized trial (Lancet 2016), what is the recommendation regarding platelet transfusion?",
    "options": [
      {
        "id": "a",
        "text": "Platelet transfusion should NOT be administered because it increases mortality and disability.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Transfuse 2 adult doses of platelets immediately to restore platelet function.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Give Desmopressin (DDAVP) followed by 1 unit of apheresis platelets.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Platelet transfusion is indicated only if hematoma volume exceeds 30 mL.",
        "isCorrect": false
      }
    ],
    "explanation": "The PATCH randomized trial (Lancet 2016) showed that platelet transfusion in patients with acute spontaneous ICH who were taking antiplatelet therapy significantly increased the odds of death or severe disability at 3 months (OR 1.84, P = 0.02). Guidelines strongly recommend AGAINST platelet transfusion in this population.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Baharoglu MI et al. PATCH Trial. Lancet 2016; AHA/ASA ICH Guidelines 2022."
    ]
  }
,
  {
    id: "ich.q.bp-lowering-trials",
    topicId: "intracranial-hemorrhage",
    stem: "In an acute spontaneous intracerebral hemorrhage patient presenting within 6 hours of onset with SBP 200 mmHg, what is the guideline-recommended target systolic blood pressure based on the INTERACT-2 and ATACH-2 landmark trials?",
    options: [
      { id: "a", text: "Aggressively drop SBP to < 120 mmHg within 1 hour.", isCorrect: false },
      { id: "b", text: "Smoothly lower SBP to 130–150 mmHg (target 140 mmHg) using IV continuous nicardipine/labetalol, avoiding precipitous drops < 130 mmHg.", isCorrect: true },
      { id: "c", text: "Permissive hypertension up to SBP 220 mmHg to maintain cerebral perfusion.", isCorrect: false },
      { id: "d", text: "Target MAP strictly < 65 mmHg.", isCorrect: false }
    ],
    explanation: "INTERACT-2 showed that targeting SBP < 140 mmHg was safe and associated with improved functional recovery. However, ATACH-2 showed that intensive lowering to < 120 mmHg did not improve functional outcome and caused significantly higher rates of acute renal adverse events. Current AHA/ASA guidelines recommend targeting SBP 130-150 mmHg safely and steadily.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Anderson CS, et al. INTERACT2. NEJM 2013; Qureshi AI, et al. ATACH-2. NEJM 2016; AHA/ASA ICH Guidelines 2022."
    ]
  },
  {
    id: "ich.q.warfarin-reversal-pcc",
    topicId: "intracranial-hemorrhage",
    stem: "A patient on warfarin presents with acute ICH and INR 3.6. What is the fastest, most effective reversal regimen recommended by the INCH trial?",
    options: [
      { id: "a", text: "Fresh Frozen Plasma (FFP) 15 mL/kg + oral Vitamin K.", isCorrect: false },
      { id: "b", text: "4-Factor Prothrombin Complex Concentrate (4F-PCC, 25-50 units/kg) + IV Vitamin K 10 mg slow infusion.", isCorrect: true },
      { id: "c", text: "Recombinant Factor VIIa alone.", isCorrect: false },
      { id: "d", text: "Platelet transfusion and cryoprecipitate.", isCorrect: false }
    ],
    explanation: "The INCH trial (Lancet Neurol 2016) demonstrated that 4F-PCC achieved rapid INR normalization (<=1.2 within 3 hours) in 67% vs only 9% with FFP, significantly reducing hematoma expansion. IV Vitamin K 10 mg is co-administered to sustain factor synthesis after PCC factors decay.",
    difficulty: "basic",
    category: "Management",
    references: [
      "Steiner T, et al. INCH Trial. Lancet Neurol 2016; Neurocritical Care Society Guidelines."
    ]
  }
];
