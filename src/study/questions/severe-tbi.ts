import type { Question } from "@/content-types";

export const severeTbiQuestions: readonly Question[] = [
  {
    "id": "tbi.q.crash3-txa-timing",
    "topicId": "severe-tbi",
    "stem": "A 32-year-old man presents 90 minutes after a motor vehicle collision with an isolated traumatic brain injury and GCS 10. CT head reveals a small cerebral contusion and traumatic subarachnoid hemorrhage. Based on the CRASH-3 trial (Lancet 2019), what is the indicated antifibrinolytic therapy?",
    "options": [
      {
        "id": "a",
        "text": "Tranexamic acid (1 g IV bolus over 10 min, followed by 1 g IV infusion over 8 hours)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose Aminocaproic acid infusion for 72 hours",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "TXA is strictly contraindicated in all head injuries due to ischemic stroke risk",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Recombinant activated factor VIIa bolus",
        "isCorrect": false
      }
    ],
    "explanation": "The CRASH-3 trial (Lancet 2019, n=12,737) demonstrated that early TXA administration (within 3 hours of injury) reduced head injury-related mortality in patients with mild-to-moderate TBI, with no increase in adverse thromboembolic events.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "CRASH-3 Trial Collaborators. Lancet 2019."
    ]
  }
,
  {
    id: "tbi.q.crash-steroid-trial",
    topicId: "severe-tbi",
    stem: "What was the definitive finding of the CRASH trial regarding high-dose corticosteroid (methylprednisolone) administration in acute traumatic brain injury?",
    options: [
      { id: "a", text: "Steroids reduced ICP and significantly reduced 14-day mortality.", isCorrect: false },
      { id: "b", text: "High-dose corticosteroids significantly increased 14-day and 6-month mortality; steroids are strictly contraindicated in acute TBI.", isCorrect: true },
      { id: "c", text: "Steroids improved functional recovery in moderate TBI but not severe TBI.", isCorrect: false },
      { id: "d", text: "Steroids had no effect on any clinical endpoint.", isCorrect: false }
    ],
    explanation: "The CRASH trial (Lancet 2004, n=10,008) showed that high-dose methylprednisolone caused a statistically significant increase in 14-day mortality (21.1% vs 17.9%, RR 1.18, P=0.0001) and 6-month disability. Corticosteroids are strongly contraindicated in acute traumatic brain injury (Level I recommendation, BTF Guidelines).",
    difficulty: "basic",
    category: "Evidence",
    references: [
      "CRASH Trial Collaborators. Lancet 2004; BTF 4th Edition Guidelines."
    ]
  },
  {
    id: "tbi.q.resuscitation-targets",
    topicId: "severe-tbi",
    stem: "What are the evidence-based resuscitation targets for Systolic Blood Pressure and PaO2 in severe TBI to prevent secondary brain injury?",
    options: [
      { id: "a", text: "SBP >= 100 mmHg (ages 50-69) or >= 110 mmHg (ages 15-49 or >= 70), and PaO2 >= 60 mmHg (SpO2 >= 90%).", isCorrect: true },
      { id: "b", text: "SBP < 90 mmHg and PaO2 > 300 mmHg.", isCorrect: false },
      { id: "c", text: "MAP < 60 mmHg to prevent cerebral hemorrhage expansion.", isCorrect: false },
      { id: "d", text: "Permissive hypotension with SBP 80-90 mmHg.", isCorrect: false }
    ],
    explanation: "Even a single episode of hypotension (SBP < 90 mmHg) doubles mortality in severe TBI. Brain Trauma Foundation 4th edition recommends SBP >= 100 mmHg for patients 50-69 years and >= 110 mmHg for patients 15-49 or >= 70 years, while avoiding hypoxia (PaO2 < 60 mmHg).",
    difficulty: "basic",
    category: "Management",
    references: [
      "Brain Trauma Foundation 4th Edition Guidelines; Chesnut RM. J Trauma 1993."
    ]
  }
];
