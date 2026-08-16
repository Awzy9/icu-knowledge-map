import type { Question } from "@/content-types";

export const acutePancreatitisQuestions: readonly Question[] = [
  {
    "id": "pancreatitis.q.waterfall-fluid-strategy",
    "topicId": "acute-pancreatitis",
    "stem": "A 45-year-old woman is admitted with acute gallstone pancreatitis. Based on the multicenter WATERFALL randomized trial (NEJM 2022), which fluid resuscitation strategy is recommended?",
    "options": [
      {
        "id": "a",
        "text": "Moderate fluid resuscitation with Lactated Ringer's (1.5 mL/kg/h after a modest bolus if hypovolemic), avoiding aggressive large-volume loading",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Aggressive fluid resuscitation with 20 mL/kg bolus followed by 3 mL/kg/h continuous infusion for 48 hours",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "0.9% Normal Saline at 500 mL/hour with routine fresh frozen plasma",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Strict fluid restriction to < 500 mL/day to rest the pancreas",
        "isCorrect": false
      }
    ],
    "explanation": "The WATERFALL randomized trial (NEJM 2022, n=249) was stopped early for safety because aggressive fluid resuscitation resulted in a more than 3-fold higher incidence of fluid overload (20.5% vs 6.3%, P=0.004) without providing any improvement in clinical cure or reduction in necrotizing pancreatitis.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "de-Madaria E et al. WATERFALL Trial. NEJM 2022."
    ]
  },
  {
    "id": "pancreatitis.q.panter-step-up-evidence",
    "topicId": "acute-pancreatitis",
    "stem": "A patient with severe acute necrotizing pancreatitis develops persistent fever and retroperitoneal gas bubbles on CT (confirming infected necrotizing pancreatitis) on hospital day 21. Based on the landmark PANTER trial (NEJM 2010), what is the optimal surgical/interventional management strategy?",
    "options": [
      {
        "id": "a",
        "text": "A minimally invasive Step-Up approach beginning with percutaneous catheter drainage, reserving minimally invasive retroperitoneal debridement for non-responders",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immediate open transabdominal necrosectomy with open packing",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Total pancreatectomy with splenectomy",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Observation with antibiotic therapy alone without drainage",
        "isCorrect": false
      }
    ],
    "explanation": "The PANTER trial (NEJM 2010) demonstrated that a minimally invasive 'Step-Up Approach' (percutaneous catheter drainage followed, if unresolved, by minimally invasive retroperitoneal necrosectomy) reduced major complications (40% vs 69%, P=0.006), new-onset multi-organ failure, and long-term endocrine insufficiency compared to primary open necrosectomy.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "van Santvoort HC et al. PANTER Trial. NEJM 2010."
    ]
  }
,
  {
    id: "pancreatitis.q.panter-step-up",
    topicId: "acute-pancreatitis",
    stem: "In infected necrotizing pancreatitis, what did the PANTER landmark trial establish regarding the minimally invasive 'step-up approach' compared with primary open necrosectomy?",
    options: [
      { id: "a", text: "Primary open necrosectomy reduces hospital length of stay.", isCorrect: false },
      { id: "b", text: "The step-up approach (percutaneous catheter drainage followed by minimally invasive retroperitoneal necrosectomy if needed) significantly reduced major complications, new-onset organ failure, and long-term diabetes/hernias compared with open surgery.", isCorrect: true },
      { id: "c", text: "Immediate surgical debridement within 48 hours is mandatory for all infected necrosis.", isCorrect: false },
      { id: "d", text: "Catheter drainage alone is universally ineffective and should not be attempted.", isCorrect: false }
    ],
    explanation: "The PANTER trial (NEJM 2010) demonstrated that the minimally invasive step-up approach (starting with percutaneous or endoscopic drainage, with ~35% of patients avoiding surgery entirely) reduced major morbidity, organ failure, and long-term disability compared with upfront open necrosectomy.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "van Santvoort HC, et al. PANTER Trial. NEJM 2010; IAP/APA Pancreatitis Guidelines."
    ]
  }
];
