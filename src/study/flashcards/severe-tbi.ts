import type { Flashcard } from "@/content-types";

export const severeTbiFlashcards: readonly Flashcard[] = [
  {
    "id": "tbi.fc.secondary-brain-injury-killers",
    "topicId": "severe-tbi",
    "question": "What are the two most lethal systemic secondary brain insults in severe TBI?",
    "answer": "Hypotension (SBP < 100–110 mmHg) and Hypoxemia (PaO2 < 60 mmHg or SpO2 < 90%).",
    "explanation": "A single episode of hypotension doubles mortality in severe traumatic brain injury; maintaining MAP, cerebral perfusion pressure, and oxygenation is paramount.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Chesnut RM et al. The role of secondary brain injury in determining outcome from severe head injury. J Trauma 1993; BTF Guidelines."
    ]
  },
  {
    "id": "tbi.fc.crash3-txa-trial",
    "topicId": "severe-tbi",
    "question": "What did the CRASH-3 trial conclude regarding Tranexamic Acid (TXA) in acute traumatic brain injury?",
    "answer": "Early administration of TXA (within 3 hours) reduced head-injury death in mild-to-moderate TBI (GCS 9–15) and had no increased vascular occlusive events.",
    "explanation": "Published in Lancet 2019, TXA prevents early microvascular bleeding expansion when given promptly after trauma.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "CRASH-3 Trial Collaborators. Tranexamic acid in acute traumatic brain injury. Lancet 2019."
    ]
  },
  {
    "id": "tbi.fc.rescueicp-decra-decompressive-craniectomy",
    "topicId": "severe-tbi",
    "question": "What did the RESCUEicp and DECRA trials demonstrate regarding Decompressive Craniectomy in refractory intracranial hypertension?",
    "answer": "Surgical decompression significantly reduced mortality in refractory ICP (>25 mmHg), but increased the proportion of survivors with severe disability / vegetative state.",
    "explanation": "Hutchinson et al. (NEJM 2016) established decompressive craniectomy as a life-saving Tier 3 rescue therapy with shared decision-making regarding long-term functional recovery.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "Hutchinson PJ et al. Trial of decompressive craniectomy for traumatic intracranial hypertension (RESCUEicp). NEJM 2016; Cooper DJ et al. DECRA. NEJM 2011."
    ]
  },
  {
    "id": "tbi.fc.secondary-insults",
    "topicId": "severe-tbi",
    "question": "What are the two most lethal systemic secondary insults that double mortality in severe Traumatic Brain Injury?",
    "answer": "Hypotension (SBP < 100 mmHg in ages 50-69 or < 110 mmHg in ages 15-49/70+) and Hypoxemia (PaO2 < 60 mmHg or SpO2 < 90%).",
    "explanation": "Even a single brief episode of intra-hospital hypotension or hypoxemia drastically increases ischemic neuronal loss.",
    "difficulty": "basic",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-tbi"
    ]
  },
  {
    "id": "tbi.fc.hyperventilation-danger",
    "topicId": "severe-tbi",
    "question": "Why is routine prophylactic hyperventilation (PaCO2 < 30-35 mmHg) contraindicated in severe TBI?",
    "answer": "Hypocapnia causes profound cerebral vasoconstriction, causing severe secondary cerebral ischemia and worsening long-term neurologic outcomes.",
    "explanation": "Target PaCO2 35-40 mmHg. Brief hyperventilation (PaCO2 30-35) is reserved strictly as a temporary temporizing bridge for acute impending herniation.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-tbi"
    ]
  },
  {
    "id": "tbi.fc.seizure-prophylaxis-trial",
    "topicId": "severe-tbi",
    "question": "What is the recommended post-traumatic seizure prophylaxis in severe TBI?",
    "answer": "Levetiracetam (500-1000 mg IV q12h) or Phenytoin for 7 days post-injury to prevent early post-traumatic seizures (BTF guidelines).",
    "explanation": "Routine prophylaxis beyond 7 days is not recommended as it does not prevent late post-traumatic epilepsy.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in severe-tbi"
    ]
  }
];
