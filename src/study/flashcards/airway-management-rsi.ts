import type { Flashcard } from "@/content-types";

export const airwayManagementRsiFlashcards: readonly Flashcard[] = [
  {
    "id": "airway.fc.physiologic-difficult-airway",
    "topicId": "airway-management-rsi",
    "question": "What is the 'Physiologic Difficult Airway' in critical care?",
    "answer": "An airway where profound systemic derangements (severe hypoxemia, metabolic acidosis, right ventricular failure, or vasodilatory shock) place the patient at extreme risk of peri-intubation cardiac arrest.",
    "explanation": "Unlike an anatomically difficult airway, a physiologically difficult airway requires aggressive pre-resuscitation (push-dose vasopressors, delayed sequence pre-oxygenation) before administering induction agents.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Mosier JM et al. The physiologically difficult airway in critical illness. Lancet Respir Med 2015."
    ]
  },
  {
    "id": "airway.fc.rocuronium-vs-succinylcholine-ed",
    "topicId": "airway-management-rsi",
    "question": "What are the advantages of Rocuronium (1.2 mg/kg) over Succinylcholine (1.5 mg/kg) for RSI in the ICU?",
    "answer": "Rocuronium provides equivalent intubating conditions at 60 seconds without the risks of hyperkalemic cardiac arrest (burns, denervation, crush injury), malignant hyperthermia, or increased intracranial/intraocular pressure.",
    "explanation": "If rapid reversal is needed, Sugammadex (16 mg/kg) reverses high-dose rocuronium within 2–3 minutes (faster than spontaneous recovery from succinylcholine).",
    "difficulty": "basic",
    "category": "Pharmacology",
    "references": [
      "Tran DTT et al. Rocuronium versus succinylcholine for rapid sequence induction intubation. Cochrane Database Syst Rev 2015."
    ]
  },
  {
    "id": "airway.fc.delayed-sequence-intubation-dsi",
    "topicId": "airway-management-rsi",
    "question": "What is Delayed Sequence Intubation (DSI)?",
    "answer": "Using a dissociative sedative (IV Ketamine 1.0–1.5 mg/kg) to calm an agitated, hypoxic patient without blunting spontaneous airway reflexes, enabling effective pre-oxygenation with CPAP/NIV before administering a neuromuscular blocker.",
    "explanation": "Weingart et al. (Ann Emerg Med 2015) showed DSI converts a chaotic pre-oxygenation failure into a controlled, safe intubation with higher nadir SpO2.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Weingart SD et al. Delayed sequence intubation: a prospective observational study. Ann Emerg Med 2015."
    ]
  },
  {
    "id": "airway.fc.bvm-during-rsi-prevent-trial",
    "topicId": "airway-management-rsi",
    "question": "What did the PREVENT trial conclude regarding gentle bag-mask ventilation (BMV) during the apneic period of RSI?",
    "answer": "Gentle BMV (low tidal volume, low pressure with PEEP valve) significantly reduced severe hypoxemia (SpO2 < 80%) without increasing aspiration events.",
    "explanation": "Published in NEJM 2019 (Casey et al.), prophylactic gentle bagging during the 60-second apnea period prevents peri-intubation desaturation in critically ill patients with low functional residual capacity.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Casey JD et al. Bag-Mask Ventilation during Tracheal Intubation of Critically Ill Adults (PREVENT). NEJM 2019."
    ]
  },
  {
    "id": "airway.fc.hemodynamic-collapse",
    "topicId": "airway-management-rsi",
    "question": "Why does post-intubation hemodynamic collapse occur in critically ill patients?",
    "answer": "Loss of sympathetic tone from sedatives + positive pressure ventilation reducing RV venous return + uncorrected hypovolemia/vasoplegia.",
    "explanation": "Prevent by optimizing preload and starting a push-dose or continuous vasopressor (Norepinephrine) prior to induction.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in airway-management-rsi"
    ]
  },
  {
    "id": "airway.fc.ketamine-vs-etomidate",
    "topicId": "airway-management-rsi",
    "question": "How do Ketamine and Etomidate compare for induction in shock states?",
    "answer": "Etomidate is hemodynamically stable but causes transient adrenal suppression. Ketamine preserves sympathetic drive but can cause direct myocardial depression in catecholamine-depleted shock.",
    "explanation": "Both are preferred over propofol/benzodiazepines; ketamine dose should be reduced (0.5-1.0 mg/kg) in profound shock.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in airway-management-rsi"
    ]
  },
  {
    "id": "airway.fc.vl-vs-dl-cochrane",
    "topicId": "airway-management-rsi",
    "question": "What did the Cochrane Review and DEVICE trial conclude regarding Video Laryngoscopy (VL) vs Direct Laryngoscopy (DL) in critically ill patients?",
    "answer": "Video laryngoscopy significantly increases first-pass intubation success (85.1% vs 70.8%) and reduces esophageal intubations across novice and experienced intubators.",
    "explanation": "Prekker et al. (DEVICE trial, NEJM 2023) established video laryngoscopy as first-line for ICU airway management.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in airway-management-rsi"
    ]
  }
];
