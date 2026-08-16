import type { Flashcard } from "@/content-types";

export const brainDeathFlashcards: readonly Flashcard[] = [
  {
    "id": "bd.fc.aan-three-essential-findings",
    "topicId": "brain-death",
    "question": "What are the 3 essential clinical findings required to determine Brain Death / Death by Neurologic Criteria (BD/DNC)?",
    "answer": "1. Coma with an established irreversible proximate cause; 2. Complete absence of all brainstem reflexes; 3. Apnea (lack of spontaneous respiratory effort during apnea testing).",
    "explanation": "All confounders (hypothermia, shock, severe electrolyte derangements, sedative/neuromuscular blocking drugs) must be rigorously excluded prior to testing.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Greer DM et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Practice Guideline (AAN/AAP/CNS/SCCM). Neurology 2023."
    ]
  },
  {
    "id": "bd.fc.prerequisites-temperature-pressure",
    "topicId": "brain-death",
    "question": "What are the core temperature and hemodynamic prerequisites before performing brain death evaluation?",
    "answer": "Core temperature > 36°C (96.8°F) and Systolic Blood Pressure ≥ 100 mmHg (or MAP ≥ 65 mmHg) with or without vasopressor support.",
    "explanation": "Hypothermia and severe hypotension depress brainstem reflexes and invalidate the clinical neurological examination.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "AAN Consensus Guidelines 2023."
    ]
  },
  {
    "id": "bd.fc.apnea-test-protocol-targets",
    "topicId": "brain-death",
    "question": "What specific arterial blood gas endpoints confirm a positive (supportive) Apnea Test for brain death?",
    "answer": "No spontaneous respiratory effort observed, with final PaCO2 ≥ 60 mmHg (and ≥ 20 mmHg above pre-test baseline) and arterial pH ≤ 7.28.",
    "explanation": "Pre-oxygenate with 100% FiO2 for 10–15 min; deliver 100% O2 via tracheal insufflation (6 L/min) during the 8–10 minute observation period.",
    "difficulty": "intermediate",
    "category": "Monitoring",
    "references": [
      "AAN Brain Death Guidelines 2023; Irwin & Rippe."
    ]
  },
  {
    "id": "bd.fc.ancillary-testing-indications",
    "topicId": "brain-death",
    "question": "When is ancillary testing (e.g. 4-vessel cerebral angiography, radionuclide brain scan) required in brain death evaluation?",
    "answer": "When components of the clinical exam cannot be completed (e.g. severe facial trauma, pupillary unresponsiveness to exam), apnea testing is medically precluded (severe hypoxemia), or confounding sedatives cannot be cleared.",
    "explanation": "Ancillary tests demonstrate complete absence of intracranial blood flow, confirming whole-brain cessation.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Greer DM et al. Neurology 2023."
    ]
  },
  {
    "id": "braindeath.fc.apnea-test-pa02",
    "topicId": "brain-death",
    "question": "What are the required pre-requisites and target PaCO2 during the Apnea Test for brain death determination?",
    "answer": "Pre-requisites: Normothermia (>=36°C), SBP >= 100 mmHg, baseline PaCO2 35-45 mmHg, pre-oxygenation to PaO2 >= 200 mmHg. Target: PaCO2 >= 60 mmHg (or >= 20 mmHg increase above baseline) with NO spontaneous respiratory effort.",
    "explanation": "AAN guidelines mandate strict hemodynamic stability during the test; deliver 100% oxygen via tracheal cannula during apnea.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in brain-death"
    ]
  },
  {
    "id": "braindeath.fc.confirmatory-tests",
    "topicId": "brain-death",
    "question": "When are ancillary/confirmatory tests mandatory in brain death determination, and what are the standard modalities?",
    "answer": "Mandatory when clinical brainstem reflexes or apnea testing cannot be completed safely (e.g. severe facial trauma, severe hypoxemia/COPD). Modalities: 4-vessel Cerebral Angiography, Radionuclide Brain Perfusion Scan (absence of intracranial flow).",
    "explanation": "EEG and CTA are also used per institutional protocols, but conventional angiogram and nuclear SPECT provide the most conclusive vascular flow absence.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in brain-death"
    ]
  }
];
