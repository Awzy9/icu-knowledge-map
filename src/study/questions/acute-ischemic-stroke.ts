import type { Question } from "@/content-types";

export const acuteIschemicStrokeQuestions: readonly Question[] = [
  {
    "id": "ais.q.extended-evt-window",
    "topicId": "acute-ischemic-stroke",
    "stem": "A 66-year-old woman is found with right hemiplegia and severe global aphasia (NIHSS 18) 12 hours after she was last seen normal. Non-contrast CT shows no hemorrhage and an ASPECTS score of 8. CT angiogram reveals an acute left internal carotid artery terminus occlusion. CT perfusion demonstrates an ischemic core of 18 mL and a penumbral tissue volume of 95 mL. Based on the DAWN and DEFUSE-3 trials, what is the best management?",
    "options": [
      {
        "id": "a",
        "text": "Proceed directly to emergency Endovascular Thrombectomy (EVT)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Administer full-dose IV Alteplase",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aspirin 325 mg PO alone and transfer to a general medical floor",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Therapeutic anticoagulation with IV unfractionated heparin",
        "isCorrect": false
      }
    ],
    "explanation": "The DAWN (NEJM 2018) and DEFUSE-3 (NEJM 2018) trials proved that endovascular thrombectomy up to 16–24 hours from last known normal provides massive disability reduction in patients with large vessel occlusion and perfusion-mismatch (small core, large salvageable penumbra). IV thrombolytic therapy is contraindicated beyond 4.5 hours.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Nogueira RG et al. DAWN Trial. NEJM 2018; Albers GW et al. DEFUSE 3. NEJM 2018."
    ]
  }
,
  {
    id: "ais.q.thrombectomy-window",
    topicId: "acute-ischemic-stroke",
    stem: "A 68-year-old patient with an acute M1 middle cerebral artery occlusion presents 14 hours after last known well. MRI shows a small DWI infarct core (15 mL) with a large perfusion mismatch on CT perfusion. Based on the DAWN and DEFUSE 3 trials, what is the indicated management?",
    options: [
      { id: "a", text: "Endovascular thrombectomy (EVT) is indicated due to favorable clinical-imaging mismatch in the 6–24 hour extended window.", isCorrect: true },
      { id: "b", text: "Mechanical thrombectomy is strictly contraindicated beyond the 6-hour window.", isCorrect: false },
      { id: "c", text: "Administer IV alteplase or tenecteplase immediately.", isCorrect: false },
      { id: "d", text: "Lower MAP aggressively to < 65 mmHg to reduce cerebral edema.", isCorrect: false }
    ],
    explanation: "The DAWN (6-24h) and DEFUSE 3 (6-16h) landmark trials demonstrated dramatic reductions in 90-day functional disability (NNT ~2-3) for endovascular mechanical thrombectomy in large vessel occlusion (LVO) when advanced perfusion/mismatch imaging confirms salvable ischemic penumbra with a small ischemic core.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Nogueira RG, et al. DAWN Trial. NEJM 2018; Albers GW, et al. DEFUSE 3 Trial. NEJM 2018."
    ]
  },
  {
    id: "ais.q.bp-targets",
    topicId: "acute-ischemic-stroke",
    stem: "What are the strict blood pressure thresholds for an acute ischemic stroke patient undergoing intravenous thrombolysis (IV alteplase/tenecteplase)?",
    options: [
      { id: "a", text: "Maintain BP < 140/90 mmHg at all times.", isCorrect: false },
      { id: "b", text: "BP must be < 185/110 mmHg prior to thrombolysis, and maintained < 180/105 mmHg for the first 24 hours post-thrombolysis.", isCorrect: true },
      { id: "c", text: "Permissive hypertension up to 220/120 mmHg is permitted during and after thrombolysis.", isCorrect: false },
      { id: "d", text: "Maintain MAP > 100 mmHg with vasopressors.", isCorrect: false }
    ],
    explanation: "AHA/ASA guidelines mandate that blood pressure be lowered to < 185/110 mmHg BEFORE initiating IV thrombolysis (using IV labetalol, nicardipine, or clevidipine), and maintained strictly < 180/105 mmHg for at least 24 hours post-thrombolysis to prevent fatal symptomatic intracranial hemorrhage.",
    difficulty: "basic",
    category: "Management",
    references: [
      "AHA/ASA Acute Ischemic Stroke Guidelines."
    ]
  }
];
