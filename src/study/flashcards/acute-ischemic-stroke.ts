import type { Flashcard } from "@/content-types";

export const acuteIschemicStrokeFlashcards: readonly Flashcard[] = [
  {
    "id": "ais.fc.thrombolysis-window",
    "topicId": "acute-ischemic-stroke",
    "question": "What is the guideline-established time window for IV thrombolysis (Alteplase / Tenecteplase) in acute ischemic stroke?",
    "answer": "Within 4.5 hours of symptom onset (or last known normal).",
    "explanation": "The NINDS (NEJM 1995) and ECASS-III (NEJM 2008) trials proved significant functional recovery at 90 days with early thrombolysis.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke 2019."
    ]
  },
  {
    "id": "ais.fc.endovascular-thrombectomy-trials",
    "topicId": "acute-ischemic-stroke",
    "question": "What is the extended time window for Endovascular Thrombectomy (EVT) for large vessel occlusion (LVO) established by the DAWN and DEFUSE-3 trials?",
    "answer": "Up to 24 hours from last known normal, guided by CT/MR perfusion showing clinical-core mismatch.",
    "explanation": "DAWN (NEJM 2018) and DEFUSE-3 (NEJM 2018) showed dramatic reductions in disability with mechanical thrombectomy in patients with salvageable penumbra.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Nogueira RG et al. DAWN Trial. NEJM 2018; Albers GW et al. DEFUSE-3 Trial. NEJM 2018."
    ]
  },
  {
    "id": "ais.fc.blood-pressure-thresholds-stroke",
    "topicId": "acute-ischemic-stroke",
    "question": "What are the blood pressure targets before and after IV thrombolysis in acute ischemic stroke?",
    "answer": "Before thrombolysis: BP must be < 185/110 mmHg; After thrombolysis: Maintain BP < 180/105 mmHg for at least 24 hours.",
    "explanation": "Tight BP control with IV labetalol or nicardipine reduces the risk of symptomatic intracranial hemorrhage.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "AHA/ASA Stroke Guidelines 2019."
    ]
  },
  {
    "id": "ais.fc.bp-targets",
    "topicId": "acute-ischemic-stroke",
    "question": "What are the blood pressure targets for acute ischemic stroke before and after IV thrombolysis?",
    "answer": "Before IV rtPA/TNK: SBP < 185 mmHg and DBP < 110 mmHg. After thrombolysis: maintain SBP < 180 mmHg and DBP < 105 mmHg for at least 24 hours using IV labetalol or nicardipine.",
    "explanation": "Strict blood pressure control post-thrombolysis minimizes the risk of fatal symptomatic intracranial hemorrhagic transformation.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-ischemic-stroke"
    ]
  },
  {
    "id": "ais.fc.permissive-hypertension",
    "topicId": "acute-ischemic-stroke",
    "question": "What is the permissive hypertension threshold in acute ischemic stroke patients who do NOT receive thrombolysis or EVT?",
    "answer": "Do NOT lower blood pressure unless SBP > 220 mmHg or DBP > 120 mmHg (or other acute end-organ emergency exists). If >220/120, lower MAP by no more than 15% in the first 24 hours.",
    "explanation": "Permissive hypertension maintains collateral cerebral blood flow through the ischemic penumbra where autoregulation is lost.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-ischemic-stroke"
    ]
  },
  {
    "id": "ais.fc.malignant-mca-infarction",
    "topicId": "acute-ischemic-stroke",
    "question": "What is the definitive life-saving surgical intervention for malignant middle cerebral artery (MCA) infarction, and what is the optimal timing?",
    "answer": "Decompressive Hemicraniectomy performed within 48 hours of stroke onset in patients <= 60 years (DECIMAL, DESTINY, HAMLET pooled analysis showed 50% absolute mortality reduction).",
    "explanation": "Relieves fatal uncal herniation and brainstem compression caused by massive cytotoxic cerebral edema.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-ischemic-stroke"
    ]
  }
];
