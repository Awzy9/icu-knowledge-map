import type { Flashcard } from "@/content-types";

export const intracranialHemorrhageFlashcards: readonly Flashcard[] = [
  {
    "id": "ich.fc.interact2-atax2-blood-pressure",
    "topicId": "intracranial-hemorrhage",
    "question": "What is the recommended systolic blood pressure target in acute spontaneous intracerebral hemorrhage (ICH)?",
    "answer": "Target SBP 130 to 140 mmHg (smooth titration using IV Nicardipine or Clevidipine, avoiding rapid drops < 130).",
    "explanation": "INTERACT-2 (NEJM 2013) and ATACH-2 (NEJM 2016) showed that targeting SBP 130–140 mmHg safely reduces hematoma expansion without causing cerebral hypoperfusion.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "AHA/ASA Guidelines for the Management of Spontaneous Intracerebral Hemorrhage 2022."
    ]
  },
  {
    "id": "ich.fc.patch-trial-platelet-transfusion",
    "topicId": "intracranial-hemorrhage",
    "question": "What did the PATCH trial find regarding routine platelet transfusion in acute ICH patients on antiplatelet therapy?",
    "answer": "Platelet transfusion significantly INCREASED mortality and dependence (adjusted OR 1.84) and is strictly contraindicated.",
    "explanation": "Baharoglu et al. (Lancet 2016) showed transfused platelets trigger pro-inflammatory and prothrombotic microvascular harm in non-surgical spontaneous ICH.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Baharoglu MI et al. Platelet transfusion versus standard care after acute stroke due to spontaneous cerebral haemorrhage (PATCH). Lancet 2016."
    ]
  },
  {
    "id": "ich.fc.doac-reversal-agents",
    "topicId": "intracranial-hemorrhage",
    "question": "What are the specific reversal agents for Dabigatran and Factor Xa inhibitors (Apixaban/Rivaroxaban) in acute life-threatening ICH?",
    "answer": "Dabigatran: Idarucizumab 5 g IV; Factor Xa inhibitors: Andexanet alfa OR 4-Factor Prothrombin Complex Concentrate (4F-PCC 50 U/kg).",
    "explanation": "Administer immediately to arrest hematoma expansion, which is the primary determinant of mortality in anticoagulant-associated ICH.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Neurocritical Care Society Guideline on Anticoagulation Reversal in ICH 2022."
    ]
  },
  {
    "id": "ich.fc.bp-control-interact",
    "topicId": "intracranial-hemorrhage",
    "question": "What is the target systolic blood pressure in acute spontaneous intracerebral hemorrhage (ICH)?",
    "answer": "Smoothly lower SBP to 130-140 mmHg within 1-2 hours using IV nicardipine, clevidipine, or labetalol (INTERACT2 and ATACH-2 trials).",
    "explanation": "Avoid excessive systolic drops (<130 mmHg) which can cause renal hypoperfusion without neurological benefit.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hemorrhage"
    ]
  },
  {
    "id": "ich.fc.spot-sign",
    "topicId": "intracranial-hemorrhage",
    "question": "What is the 'Spot Sign' on CT angiography in acute ICH and what does it indicate?",
    "answer": "Foci of contrast extravasation within the hematoma on CTA; strongly predicts active ongoing bleeding, hematoma expansion, and early neurologic deterioration.",
    "explanation": "Patients with a positive spot sign are candidates for aggressive hemostatic therapy and intensive neurocritical monitoring.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hemorrhage"
    ]
  },
  {
    "id": "ich.fc.sah-nimodipine",
    "topicId": "intracranial-hemorrhage",
    "question": "What is the standard pharmacologic agent for cerebral vasospasm prophylaxis in aneurysmal Subarachnoid Hemorrhage (aSAH)?",
    "answer": "Oral Nimodipine 60 mg every 4 hours for 21 days (BRANT trial).",
    "explanation": "Nimodipine provides neuroprotection and reduces delayed cerebral ischemia (DCI) and poor functional outcome. If hypotension occurs, dose can be adjusted to 30 mg q2h.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hemorrhage"
    ]
  }
];
