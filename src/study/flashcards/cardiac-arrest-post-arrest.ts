import type { Flashcard } from "@/content-types";

export const cardiacArrestPostArrestFlashcards: readonly Flashcard[] = [
  {
    "id": "cardiac-arrest-post-arrest.fc.1",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.resuscitation-principles",
    "question": "What are the core components of high-quality CPR metrics in adult cardiac arrest?",
    "answer": "Compression rate 100-120/min, depth 5-6 cm (2-2.4 inches), allowing complete chest recoil, minimizing pauses (chest compression fraction > 80%), and avoiding hyperventilation (10 breaths/min).",
    "explanation": "Inadequate depth or rate directly reduces coronary and cerebral perfusion pressure; hyperventilation raises intrathoracic pressure and decreases venous return.",
    "difficulty": "basic",
    "references": [
      "AHA/ERC Guidelines for CPR 2020/2021"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.2",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.temperature-management",
    "question": "What did the landmark TTM2 trial demonstrate regarding targeted hypothermia vs normothermia?",
    "answer": "Targeted hypothermia at 33°C showed no difference in 6-month mortality or functional neurological outcome compared with targeted normothermia (<= 37.5°C) with active fever prevention, but hypothermia had more arrhythmias.",
    "explanation": "TTM2 shifted practice toward strict fever prevention (maintaining temp <= 37.5°C) using feedback cooling systems.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "cardiac-arrest-ttm2-trial",
        "relevance": "Direct source of this finding."
      }
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.3",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.post-rosc-hemodynamics",
    "question": "What are the post-ROSC arterial oxygenation and ventilation targets?",
    "answer": "Target normoxia (SpO2 92-98% or PaO2 70-100 mmHg) and strict normocapnia (PaCO2 35-45 mmHg). Avoid hyperoxia and hypocapnia.",
    "explanation": "Hyperoxia generates reactive oxygen species accelerating neuronal reperfusion injury; hypocapnia causes cerebral vasoconstriction and ischemia.",
    "difficulty": "basic",
    "references": [
      "AHA/ERC Guidelines for Post-Resuscitation Care 2021"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.4",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.neuroprognostication",
    "question": "When is the earliest recommended time to perform multimodal neuroprognostication after cardiac arrest?",
    "answer": "At or after 72 hours post-ROSC (or >= 72 hours after rewarming if hypothermia was used).",
    "explanation": "Sedatives, paralytics, and hypothermia delay clearance and confound neurologic recovery. Evaluating earlier leads to premature withdrawal of life-sustaining therapy.",
    "difficulty": "basic",
    "references": [
      "AHA/ERC/ILCOR Guidelines 2021"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.5",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.post-rosc-hemodynamics",
    "question": "What did the COACT trial find regarding emergency coronary angiography in post-arrest patients without ST elevation?",
    "answer": "Immediate coronary angiography did not improve 90-day survival compared with delayed angiography in hemodynamically stable OHCA patients without STEMI.",
    "explanation": "Allows clinicians to prioritize ICU stabilization and temperature management before non-urgent catheterization unless cardiogenic shock is present.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "cardiac-arrest-coact-trial",
        "relevance": "Demonstrates safety of delayed cath in non-STEMI post-arrest."
      }
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.6",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.neuroprognostication",
    "question": "Which clinical exam findings at >= 72 hours post-ROSC have a false-positive rate < 5% for poor outcome?",
    "answer": "Bilateral absent pupillary light reflexes and bilateral absent corneal reflexes.",
    "explanation": "Bilateral absence of both brainstem reflexes at >= 72h indicates severe irreversible brainstem injury.",
    "difficulty": "advanced",
    "references": [
      "AAN / ERC Neuroprognostication Consensus Guidelines"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.7",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.overview",
    "question": "What are the 4 key components of Post-Cardiac Arrest Syndrome (PCAS)?",
    "answer": "1. Post-cardiac arrest brain injury, 2. Post-cardiac arrest myocardial dysfunction (stunning), 3. Systemic ischemia/reperfusion response, 4. Persistent precipitating pathology.",
    "explanation": "Myocardial stunning usually resolves within 48-72h with temporary inotropic/vasopressor support.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "cardiac-arrest-post-arrest.fc.8",
    "topicId": "cardiac-arrest-post-arrest",
    "sectionId": "cardiac-arrest-post-arrest.resuscitation-principles",
    "question": "What are the 5 H's and 5 T's of reversible cardiac arrest causes?",
    "answer": "5 H's: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia. 5 T's: Tension pneumothorax, Tamponade (cardiac), Toxins, Thrombosis (pulmonary), Thrombosis (coronary).",
    "explanation": "Systematic ultrasound and blood gas evaluation in PEA/asystole allows rapid identification of treatable causes.",
    "difficulty": "basic",
    "references": [
      "ACLS Guidelines"
    ]
  }
];
