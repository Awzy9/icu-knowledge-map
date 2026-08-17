import type { Question } from "@/content-types";

export const immunocompromisedOncologicCriticalIllnessQuestions: readonly Question[] = [
  {
    id: "immuno.q.neutropenic-fever-antibiotic-timing",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "febrile-neutropenia-neutropenic-sepsis",
    stem: "A 52-year-old man undergoing induction chemotherapy for AML develops a temperature of 38.8°C with an Absolute Neutrophil Count (ANC) of 80/uL and BP 84/50 mmHg. What is the mandatory time frame and empiric antibiotic choice?",
    options: [
      { id: "a", text: "Draw blood cultures and administer an empiric antipseudomonal beta-lactam (Cefepime, Pip-Tazo, or Meropenem) PLUS Vancomycin within 60 minutes", isCorrect: true },
      { id: "b", text: "Wait for blood culture results before starting targeted antibiotics", isCorrect: false },
      { id: "c", text: "Administer oral ciprofloxacin and augmentin and observe in step-down", isCorrect: false },
      { id: "d", text: "Administer G-CSF monotherapy and check repeat temperature in 4 hours", isCorrect: false }
    ],
    explanation: "Febrile neutropenia with septic shock requires immediate blood cultures and bactericidal antipseudomonal beta-lactam coverage within 1 hour. Vancomycin is indicated because the patient presents in hemodynamic instability/septic shock (ASCO/IDSA guidelines).",
    difficulty: "basic",
    category: "Management",
    references: ["Taplitz RA et al. 2018 ASCO/IDSA Neutropenic Fever Guideline."]
  },
  {
    id: "immuno.q.rasburicase-g6pd-contraindication",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "tumor-lysis-syndrome",
    stem: "A 19-year-old man with newly diagnosed Burkitt lymphoma develops laboratory Tumor Lysis Syndrome with uric acid 14.5 mg/dL and creatinine 2.4 mg/dL. He has a known history of G6PD deficiency. Why is Rasburicase contraindicated?",
    options: [
      { id: "a", text: "Rasburicase produces hydrogen peroxide during urate breakdown, causing severe methemoglobinemia and fatal intravascular hemolysis in G6PD deficiency", isCorrect: true },
      { id: "b", text: "Rasburicase is cleared exclusively by G6PD enzymes", isCorrect: false },
      { id: "c", text: "Rasburicase causes acute liver failure in G6PD deficiency", isCorrect: false },
      { id: "d", text: "Rasburicase precipitates calcium phosphate stones", isCorrect: false }
    ],
    explanation: "Rasburicase converts uric acid to allantoin and produces hydrogen peroxide. In G6PD-deficient erythrocytes lacking NADPH, hydrogen peroxide cannot be neutralized, precipitating acute severe methemoglobinemia and massive intravascular hemolysis.",
    difficulty: "basic",
    category: "Safety",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "immuno.q.car-t-icans-tocilizumab-mistake",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "car-t-and-immune-effector-cell-toxicity",
    stem: "A 58-year-old woman 6 days post-CAR T-cell therapy is afebrile with normal blood pressure, but develops acute expressive aphasia, handwriting dysgraphia, and an ICE score of 4/10 (Grade 2 ICANS). What is the appropriate first-line pharmacotherapy?",
    options: [
      { id: "a", text: "Intravenous Dexamethasone (10–20 mg IV q6h)", isCorrect: true },
      { id: "b", text: "Tocilizumab monotherapy (8 mg/kg IV)", isCorrect: false },
      { id: "c", text: "High-dose IV pyridostigmine", isCorrect: false },
      { id: "d", text: "Immediate therapeutic plasma exchange", isCorrect: false }
    ],
    explanation: "First-line therapy for ICANS is Corticosteroids (Dexamethasone). Tocilizumab does NOT cross the blood-brain barrier and can increase free circulating IL-6 levels in the CSF, potentially worsening isolated neurotoxicity. Tocilizumab is indicated only if concurrent Cytokine Release Syndrome (CRS) is present.",
    difficulty: "intermediate",
    category: "Pharmacotherapy",
    references: ["Lee DW et al. 2019 ASTCT Consensus Guidelines."]
  },
  {
    id: "immuno.q.high-trial-intubation-threshold",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "acute-respiratory-failure-immunocompromised",
    stem: "What did the HIGH randomized clinical trial (JAMA 2018) conclude regarding the use of High-Flow Nasal Cannula (HFNC) in immunocompromised patients with acute hypoxemic respiratory failure?",
    options: [
      { id: "a", text: "HFNC did not significantly reduce 28-day mortality or intubation rate compared with standard oxygen; close monitoring is essential to avoid delayed intubation", isCorrect: true },
      { id: "b", text: "HFNC reduced 28-day mortality by 50% compared to standard oxygen", isCorrect: false },
      { id: "c", text: "HFNC caused higher pneumothorax rates than mechanical ventilation", isCorrect: false },
      { id: "d", text: "HFNC should be strictly avoided in all cancer patients", isCorrect: false }
    ],
    explanation: "The HIGH trial (Azoulay et al. JAMA 2018) showed equivalent 28-day mortality (35.6% vs 36.1%, P = 0.94) between HFNC and standard oxygen. It established that while HFNC improves comfort, clinicians must maintain a low threshold for invasive intubation because emergency delayed intubation after prolonged noninvasive failure carries extreme mortality.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Azoulay E et al. HIGH Trial. JAMA 2018."]
  },
  {
    id: "immuno.q.leukostasis-prbc-transfusion-danger",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "hyperleukocytosis-leukostasis",
    stem: "A 62-year-old man with newly diagnosed AML presents with WBC 180,000/uL, hemoglobin 6.5 g/dL, platelets 18,000/uL, confusion, and tachypnea. The intern orders 2 units of packed red blood cells. Why should this transfusion be cancelled?",
    options: [
      { id: "a", text: "Transfusing red blood cells drastically increases whole blood viscosity and precipitates acute fatal pulmonary and cerebral leukostasis", isCorrect: true },
      { id: "b", text: "Red blood cells will cause acute tumor lysis syndrome", isCorrect: false },
      { id: "c", text: "The patient will develop immediate transfusion-related acute lung injury (TRALI)", isCorrect: false },
      { id: "d", text: "PRBC transfusion induces severe hypercalcemia", isCorrect: false }
    ],
    explanation: "In hyperleukocytosis/leukostasis, whole blood viscosity is already critically elevated by rigid blast cells. Transfusing PRBCs increases viscosity exponentially, triggering microvascular occlusion, ischemic stroke, and respiratory arrest. Cytoreduction (hydroxyurea/chemo) must precede PRBC transfusion.",
    difficulty: "basic",
    category: "Safety",
    references: ["Mandell's Principles and Practice of Infectious Diseases 9th Ed."]
  },
  {
    id: "immuno.q.full-icu-trial-triage",
    topicId: "immunocompromised-oncologic-critical-illness",
    sectionId: "icu-admission-prognostication",
    stem: "A 68-year-old woman with metastatic breast cancer on second-line targeted therapy presents with septic shock, acute respiratory failure, and acute kidney injury. Based on modern cancer critical care prognostication (Puxty meta-analysis), what is the most appropriate admission strategy?",
    options: [
      { id: "a", text: "Admit to ICU for a 'Full ICU Trial' of unrestricted critical care support with daily multidisciplinary reassessment of organ failure trajectory", isCorrect: true },
      { id: "b", text: "Deny ICU admission based solely on metastatic cancer stage", isCorrect: false },
      { id: "c", text: "Admit only for noninvasive ventilation with a strict do-not-intubate order regardless of patient preference", isCorrect: false },
      { id: "d", text: "Transfer immediately to hospice without initial resuscitation", isCorrect: false }
    ],
    explanation: "Modern critical care data demonstrate that cancer stage is a poor predictor of short-term ICU survival; prognosis is driven by the reversibility of acute organ dysfunction. A 3–5 day Full ICU Trial allows physiological response to declare itself while aligning with patient goals.",
    difficulty: "basic",
    category: "Management",
    references: ["Puxty K et al. Intensive Care Med 2014."]
  }
];
