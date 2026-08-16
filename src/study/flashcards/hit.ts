import type { Flashcard } from "@/content-types";

export const hitFlashcards: readonly Flashcard[] = [
  {
    "id": "hit.fc.4t-score-elements",
    "topicId": "hit",
    "question": "What are the 4 clinical components of the '4T Score' for Heparin-Induced Thrombocytopenia?",
    "answer": "1. Thrombocytopenia (>50% drop or nadir 20–100k); 2. Timing of platelet drop (days 5–10, or <1 day if heparin within 30 days); 3. Thrombosis (new proven clot/skin necrosis); 4. oTher causes of thrombocytopenia excluded.",
    "explanation": "Low probability score (0–3) has a >99% negative predictive value, safely ruling out HIT without stopping heparin or ordering expensive immunoassays.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Warkentin TE et al. The 4T's score for heparin-induced thrombocytopenia. J Thromb Haemost 2006."
    ]
  },
  {
    "id": "hit.fc.alternative-anticoagulation-argatroban",
    "topicId": "hit",
    "question": "What is the immediate management when HIT is strongly suspected (4T score ≥ 4–6)?",
    "answer": "Stop ALL heparin products immediately (including heparin flushes) and initiate non-heparin anticoagulation (Argatroban, Bivalirudin, or Fondaparinux).",
    "explanation": "HIT is a paradoxically prothrombotic condition; stopping heparin alone without starting an alternative direct thrombin inhibitor leads to catastrophic thrombosis in ~30–50% of patients.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Cuker A et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: HIT. Blood Adv 2018."
    ]
  },
  {
    "id": "hit.fc.warfarin-skin-necrosis-contraindication",
    "topicId": "hit",
    "question": "Why is Warfarin strictly contraindicated in the acute phase of HIT?",
    "answer": "Warfarin rapidly depletes Protein C (short half-life ~6h) before reducing prothrombin, causing microvascular thrombosis and severe venous limb gangrene / skin necrosis.",
    "explanation": "Warfarin must be withheld until the platelet count has completely recovered to ≥ 150,000/mcL and the patient is stably therapeutically anticoagulated with a direct thrombin inhibitor.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Warkentin TE et al. Warfarin-induced skin necrosis and venous limb gangrene in HIT. Blood 2015."
    ]
  },
  {
    "id": "hit.fc.4ts-score-components",
    "topicId": "hit",
    "question": "What are the 4 Ts of the 4T pretest probability score for Heparin-Induced Thrombocytopenia?",
    "answer": "Thrombocytopenia magnitude (drop >50% and nadir >=20k = 2 pts); Timing of platelet drop (days 5-10 = 2 pts); Thrombosis or other sequelae (proven new clot or skin necrosis = 2 pts); oTher causes of thrombocytopenia (none evident = 2 pts).",
    "explanation": "Score 0-3: Low probability (<5% HIT); Score 4-5: Intermediate (10-20%); Score 6-8: High probability (>50% HIT).",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hit"
    ]
  },
  {
    "id": "hit.fc.dti-selection",
    "topicId": "hit",
    "question": "What non-heparin direct thrombin inhibitors (DTIs) are used for acute HIT, and how are they chosen based on organ clearance?",
    "answer": "Argatroban (hepatic clearance - preferred in renal failure; monitor aPTT); Bivalirudin (enzymatic/renal clearance - preferred in hepatic impairment/ECMO/cardiac surgery); Fondaparinux (strictly renal clearance - off-label alternative).",
    "explanation": "Stop all heparin (including flushes/catheters) immediately upon suspecting intermediate/high 4T score and start a non-heparin alternative.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hit"
    ]
  },
  {
    "id": "hit.fc.warfarin-gangrene-warning",
    "topicId": "hit",
    "question": "Why is Warfarin strictly CONTRAINDICATED in acute HIT before platelet count recovery?",
    "answer": "Warfarin rapidly depletes Protein C (short half-life ~6h) before reducing prothrombin, triggering massive microvascular thrombosis and Venous Limb Gangrene / Skin Necrosis.",
    "explanation": "Do NOT start warfarin until platelets have recovered to >= 150k/uL, and always overlap with a non-heparin anticoagulant for at least 5 days.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in hit"
    ]
  }
];
