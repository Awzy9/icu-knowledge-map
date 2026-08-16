import type { Flashcard } from "@/content-types";

export const hypertensiveEmergenciesFlashcards: readonly Flashcard[] = [
  {
    "id": "hypertensive-emergencies.fc.1",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.overview",
    "question": "What distinguishes a Hypertensive Emergency from a Hypertensive Urgency?",
    "answer": "Hypertensive Emergency requires acute, progressive target-organ damage (requiring immediate ICU admission and IV titration); Urgency has severe BP elevation WITHOUT acute end-organ injury.",
    "explanation": "Urgency should NOT be rapidly lowered with IV agents; rapid drops in urgencies cause cerebral or myocardial watershed infarction.",
    "difficulty": "basic",
    "references": [
      "2017 ACC/AHA Hypertension Guideline"
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.2",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "question": "What is the general rate of blood pressure reduction in most hypertensive emergencies (e.g. encephalopathy)?",
    "answer": "Reduce Mean Arterial Pressure (MAP) by at most 20-25% in the first hour, then gradually toward 160/100 mmHg over the subsequent 2-6 hours.",
    "explanation": "Prevents ischemic stroke and renal failure caused by falling below the shifted cerebral autoregulation curve.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "hypertension-guideline-aha-acc-2017",
        "relevance": "Defines the 20-25% MAP reduction rule."
      }
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.3",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "question": "What are the two major exceptions to the gradual 20-25% BP reduction rule?",
    "answer": "1. Acute Aortic Dissection (rapid reduction to SBP < 120 mmHg in 20 min), and 2. Acute Ischemic Stroke (permissive hypertension up to 220/120 mmHg unless thrombolysis is planned).",
    "explanation": "Dissection requires immediate wall stress reduction; ischemic stroke requires preserving penumbral perfusion.",
    "difficulty": "intermediate",
    "references": [
      "ACC/AHA Guidelines"
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.4",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.pharmacology",
    "question": "Why is Clevidipine particularly advantageous in the ICU management of hypertensive emergencies?",
    "answer": "Ultra-short half-life (~1 min) due to rapid blood and tissue esterase metabolism, allowing precise titratability without accumulation in renal or hepatic failure.",
    "explanation": "Allows tight BP maintenance with minimal overshoot compared to older IV agents.",
    "difficulty": "intermediate",
    "references": [
      "Peacock WF et al. CLOVER Trial."
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.5",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "question": "What is the blood pressure threshold before administering IV thrombolysis (tPA/TNK) in acute ischemic stroke?",
    "answer": "Blood pressure must be lowered to < 185/110 mmHg prior to thrombolytic infusion, and maintained < 180/105 mmHg for at least 24 hours.",
    "explanation": "Reduces the risk of fatal symptomatic intracerebral hemorrhage transformation.",
    "difficulty": "basic",
    "references": [
      "AHA/ASA Stroke Guidelines"
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.6",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.pharmacology",
    "question": "What is the primary hemodynamic mechanism of high-dose Nitroglycerin in SCAPE?",
    "answer": "High-dose nitroglycerin (> 100-400 mcg/min or boluses) causes potent arterial afterload reduction and systemic venodilation, rapidly relieving acute LV failure.",
    "explanation": "SCAPE is driven by sympathetic vasoconstriction; unloading afterload rapidly breaks the pulmonary edema spiral.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.7",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.pharmacology",
    "question": "What toxicities are associated with prolonged Sodium Nitroprusside infusions in the ICU?",
    "answer": "Cyanide toxicity (metabolic lactic acidosis, AMS, tachycardia) and Thiocyanate toxicity (neurotoxicity, delirium, seizures, especially in renal failure).",
    "explanation": "Nitroprusside contains 5 cyanide groups per molecule; rate should be kept < 2 mcg/kg/min and limited to < 24-48 hours.",
    "difficulty": "advanced",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "hypertensive-emergencies.fc.8",
    "topicId": "hypertensive-emergencies",
    "sectionId": "hypertensive-emergencies.organ-specific-targets",
    "question": "What is the target blood pressure in acute Intracerebral Hemorrhage (ICH)?",
    "answer": "Target SBP 130-140 mmHg within 1-2 hours using titratable IV infusions (Nicardipine/Clevidipine/Labetalol); avoid SBP < 130 mmHg.",
    "explanation": "INTERACT-2 and ATACH-2 data support smooth SBP reduction to 130-140 mmHg to limit hematoma expansion while avoiding renal hypoperfusion.",
    "difficulty": "intermediate",
    "references": [
      "AHA/ASA ICH Guidelines"
    ]
  }
];
