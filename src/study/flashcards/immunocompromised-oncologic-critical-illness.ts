import type { Flashcard } from "@/content-types";

export const immunocompromisedOncologicCriticalIllnessFlashcards: readonly Flashcard[] = [
  {
    id: "immuno.fc.one-hour-neutropenic-fever-rule",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What is the time window and first-line antibiotic requirement for febrile neutropenia in the ICU?",
    answer: "Blood cultures x 2 sets and empiric IV antipseudomonal bactericidal monotherapy (Cefepime 2g q8h, Pip-Tazo 4.5g q6h, or Meropenem 1g q8h) within 60 minutes of triage.",
    explanation: "Mortality in neutropenic septic shock increases exponentially for every hour of antibiotic delay.",
    difficulty: "basic",
    category: "Management",
    references: ["Taplitz RA et al. 2018 ASCO/IDSA Neutropenic Fever Guideline."]
  },
  {
    id: "immuno.fc.vancomycin-triggers-neutropenia",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What are the specific clinical indications to add Vancomycin to initial empiric therapy in febrile neutropenia?",
    answer: "1. Hemodynamic instability / septic shock; 2. Suspected catheter-related infection; 3. Radiographic pneumonia; 4. Skin/soft tissue infection; 5. Severe mucositis; 6. Fluoroquinolone prophylaxis prior to fever.",
    explanation: "Vancomycin is not recommended routinely for uncomplicated neutropenic fever without these high-risk features.",
    difficulty: "intermediate",
    category: "Pharmacotherapy",
    references: ["Taplitz RA et al. 2018 ASCO/IDSA Neutropenic Fever Guideline."]
  },
  {
    id: "immuno.fc.cairo-bishop-tls-criteria",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What are the Cairo-Bishop laboratory criteria for Tumor Lysis Syndrome (TLS)?",
    answer: ">= 2 of: Uric acid >= 8.0 mg/dL, Potassium >= 6.0 mEq/L, Phosphorus >= 4.5 mg/dL, Calcium <= 7.0 mg/dL (or ionized Ca < 1.12 mmol/L) within 3–7 days of chemotherapy.",
    explanation: "Clinical TLS is defined as laboratory TLS plus Acute Kidney Injury, cardiac arrhythmia/arrest, or seizures.",
    difficulty: "basic",
    category: "Diagnosis",
    references: ["Cairo MS, Bishop M. Br J Haematol 2004."]
  },
  {
    id: "immuno.fc.rasburicase-g6pd-contraindication",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "Why is Rasburicase strictly contraindicated in patients with G6PD deficiency?",
    answer: "Rasburicase (urate oxidase) produces hydrogen peroxide during uric acid catabolism, triggering severe methemoglobinemia and fatal intravascular hemolysis in G6PD-deficient erythrocytes.",
    explanation: "Always screen high-risk patients; use allopurinol and aggressive hydration if G6PD deficient.",
    difficulty: "basic",
    category: "Contraindication",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "immuno.fc.high-trial-hfnc-immunocompromised",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What did the HIGH trial (JAMA 2018) find regarding High-Flow Nasal Oxygen vs Standard Oxygen in immunocompromised ARF?",
    answer: "No significant difference in 28-day mortality (35.6% vs 36.1%, P = 0.94) or intubation rates between HFNC and standard oxygen.",
    explanation: "Azoulay et al. proved HFNC can be used for patient comfort, but close monitoring is vital because delayed emergency intubation carries extreme mortality.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Azoulay E et al. HIGH Trial. JAMA 2018."]
  },
  {
    id: "immuno.fc.car-t-crs-vs-icans-management",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "How do the targeted treatments differ for CAR-T Cytokine Release Syndrome (CRS) versus isolated ICANS neurotoxicity?",
    answer: "CRS is treated with Tocilizumab (IL-6 receptor antagonist) +/- corticosteroids. Isolated ICANS is treated with Corticosteroids (Dexamethasone); Tocilizumab is NOT indicated for isolated ICANS as it does not cross the blood-brain barrier.",
    explanation: "Tocilizumab may increase circulating CSF IL-6 levels, potentially worsening neurotoxicity in isolated ICANS.",
    difficulty: "advanced",
    category: "Pharmacotherapy",
    references: ["Lee DW et al. 2019 ASTCT Consensus Guidelines."]
  },
  {
    id: "immuno.fc.leukostasis-prbc-transfusion-danger",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "Why must packed red blood cell (PRBC) transfusions be avoided in hyperleukocytosis (WBC > 100k) before cytoreduction?",
    answer: "Transfusing red blood cells drastically increases whole blood viscosity and precipitates acute fatal pulmonary and cerebral leukostasis.",
    explanation: "Lower the blast count with hydroxyurea and chemotherapy first; transfuse platelets to prevent intracranial hemorrhage.",
    difficulty: "intermediate",
    category: "Pitfalls",
    references: ["Principles and Practice of Infectious Diseases 9th Ed."]
  },
  {
    id: "immuno.fc.invasive-aspergillosis-treatment",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What is first-line antifungal therapy for Invasive Pulmonary Aspergillosis (IPA) in immunocompromised patients?",
    answer: "Voriconazole (6 mg/kg IV q12h x 2, then 4 mg/kg q12h) or Isavuconazole (200 mg IV q8h x 6, then 200 mg daily).",
    explanation: "IDSA guidelines give a strong recommendation for voriconazole or isavuconazole; monitor serum galactomannan and drug levels.",
    difficulty: "basic",
    category: "Pharmacotherapy",
    references: ["Patterson TF et al. 2016 IDSA Aspergillosis Guideline."]
  },
  {
    id: "immuno.fc.pjp-adjunctive-corticosteroids",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "When are adjunctive corticosteroids indicated in Pneumocystis jirovecii pneumonia (PJP)?",
    answer: "When PaO2 is < 70 mmHg on room air or the alveolar-arterial oxygen gradient (A-a gradient) is >= 35 mmHg.",
    explanation: "Prednisone (40 mg BID x 5d, 40 mg daily x 5d, 20 mg daily x 11d) combined with TMP-SMX significantly reduces respiratory failure and mortality.",
    difficulty: "basic",
    category: "Pharmacotherapy",
    references: ["Mandell's Principles and Practice of Infectious Diseases 9th Ed."]
  },
  {
    id: "immuno.fc.full-icu-trial-strategy",
    topicId: "immunocompromised-oncologic-critical-illness",
    question: "What is the 'Full ICU Trial' strategy in critically ill cancer patients?",
    answer: "Admitting patients with acute organ failure for an unrestricted trial of full critical care support for 3–5 days with daily multidisciplinary reassessment of SOFA score trajectory.",
    explanation: "Puxty meta-analysis and modern studies demonstrate that acute organ failure trajectory over 48–72h accurately predicts outcome, avoiding premature triage denial.",
    difficulty: "intermediate",
    category: "Management",
    references: ["Puxty K et al. Intensive Care Med 2014."]
  }
];
