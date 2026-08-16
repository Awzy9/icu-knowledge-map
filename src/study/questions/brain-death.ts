import type { Question } from "@/content-types";

export const brainDeathQuestions: readonly Question[] = [
  {
    "id": "bd.q.apnea-test-interpretation",
    "topicId": "brain-death",
    "stem": "An apnea test is performed on a patient being evaluated for death by neurologic criteria. Baseline PaCO2 is 40 mmHg. After 10 minutes off mechanical ventilation with continuous oxygen insufflation, no respiratory efforts are observed. The repeat ABG shows: pH 7.22, PaCO2 68 mmHg, PaO2 180 mmHg. How is this test interpreted?",
    "options": [
      {
        "id": "a",
        "text": "Positive apnea test, supporting the determination of brain death (PaCO2 rose ≥ 20 mmHg above baseline to ≥ 60 mmHg with pH ≤ 7.28 and no respiratory effort).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Negative apnea test; PaCO2 must reach at least 80 mmHg.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Inconclusive test because the patient did not develop hypoxemia.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Invalid test due to severe acidemia.",
        "isCorrect": false
      }
    ],
    "explanation": "A positive apnea test requires: 1) Absence of spontaneous breathing efforts; 2) PaCO2 ≥ 60 mmHg; and 3) PaCO2 rise ≥ 20 mmHg above baseline, typically with an accompanying respiratory acidosis (pH ≤ 7.28). This test meets all criteria.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Greer DM et al. AAN Guidelines. Neurology 2023."
    ]
  }
,
  {
    id: "bd.q.apnea-test-prereq",
    topicId: "brain-death",
    stem: "Before disconnecting a patient from the ventilator to perform the Apnea Test for Death by Neurologic Criteria (BD/DNC), which physiological prerequisites must be met?",
    options: [
      { id: "a", text: "Core temperature >= 36.0°C, SBP >= 100 mmHg (or MAP >= 60-65 mmHg), baseline normocapnia (PaCO2 35-45 mmHg), and pre-oxygenation with 100% FiO2 for >= 10 minutes to PaO2 > 200 mmHg.", isCorrect: true },
      { id: "b", text: "Patient must be hypothermic (< 35°C) to protect against anoxia during apnea.", isCorrect: false },
      { id: "c", text: "Baseline PaCO2 must be < 25 mmHg to allow room for CO2 to rise.", isCorrect: false },
      { id: "d", text: "Continuous infusion of neuromuscular blockers must be maintained during the test.", isCorrect: false }
    ],
    explanation: "According to the AAN / World Federation Guidelines for BD/DNC, apnea testing requires core normothermia (>=36.0°C), hemodynamic stability (SBP >=100 mmHg), baseline normocapnia (PaCO2 35-45 mmHg), and pre-oxygenation to PaO2 > 200 mmHg with an insufflation catheter delivering 100% O2 to avoid desaturation while PaCO2 rises >= 20 mmHg above baseline (to >= 60 mmHg) without respiratory effort.",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Greer DM, et al. AAN Practice Guideline: Determining Brain Death. Neurology 2023."
    ]
  },
  {
    id: "bd.q.confounders",
    topicId: "brain-death",
    stem: "A comatose patient with a massive intracerebral hemorrhage has absent brainstem reflexes. However, the patient received a continuous infusion of fentanyl and propofol 18 hours ago and has anuria on CRRT. What must be done before declaring Death by Neurologic Criteria?",
    options: [
      { id: "a", text: "Proceed immediately with clinical examination since CNS injury is visible on CT.", isCorrect: false },
      { id: "b", text: "Wait for 5 half-lives of all CNS-depressing drugs (prolonged in renal failure) or perform a validated ancillary blood-flow study (cerebral angiography, radionuclide SPECT, or transcranial Doppler).", isCorrect: true },
      { id: "c", text: "Administer high-dose naloxone and flumazenil and proceed with apnea testing within 1 hour.", isCorrect: false },
      { id: "d", text: "Use Bispectral Index (BIS) monitoring to confirm brain death.", isCorrect: false }
    ],
    explanation: "Confounding drug intoxication or persistent drug metabolites must be completely cleared (at least 5 elimination half-lives, accounting for organ dysfunction) before clinical evaluation. When confounding cannot be eliminated or apnea testing is unsafe, a validated ancillary test demonstrating absent cerebral blood flow is mandatory.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: [
      "AAN / SCCM / AAP 2023 Guidelines for Determination of Brain Death. Neurology 2023."
    ]
  }
];
