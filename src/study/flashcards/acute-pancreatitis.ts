import type { Flashcard } from "@/content-types";

export const acutePancreatitisFlashcards: readonly Flashcard[] = [
  {
    "id": "pancreatitis.fc.revised-atlanta-classification",
    "topicId": "acute-pancreatitis",
    "question": "What defines 'Severe Acute Pancreatitis' under the Revised Atlanta Classification?",
    "answer": "Persistent organ failure (> 48 hours) involving the respiratory (PaO2/FiO2 ≤ 300), cardiovascular (shock requiring vasopressors), or renal (SCr ≥ 1.9 mg/dL) systems.",
    "explanation": "Transient organ failure (< 48 hours) defines Moderately Severe Pancreatitis. Persistent organ failure carries an ICU mortality of ~30–50%.",
    "difficulty": "basic",
    "category": "Definition",
    "references": [
      "Banks PA et al. Classification of acute pancreatitis 2012: revision of the Atlanta classification. Gut 2013."
    ]
  },
  {
    "id": "pancreatitis.fc.waterfall-trial-aggressive-fluids",
    "topicId": "acute-pancreatitis",
    "question": "What did the landmark WATERFALL trial prove regarding aggressive vs moderate fluid resuscitation in acute pancreatitis?",
    "answer": "Aggressive fluid resuscitation significantly INCREASED fluid overload (20.5% vs 6.3%) without improving clinical outcomes or preventing necrotizing pancreatitis.",
    "explanation": "Published in NEJM 2022 (de-Madaria et al.), moderate goal-directed Lactated Ringer's resuscitation (10 mL/kg bolus if hypovolemic, followed by 1.5 mL/kg/h) is the new standard of care.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "de-Madaria E et al. Aggressive versus Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL). NEJM 2022."
    ]
  },
  {
    "id": "pancreatitis.fc.step-up-approach-panther",
    "topicId": "acute-pancreatitis",
    "question": "What did the Dutch PANTER trial prove regarding the 'Step-Up Approach' vs open necrosectomy in infected necrotizing pancreatitis?",
    "answer": "A minimally invasive Step-Up approach (percutaneous catheter drainage followed if needed by minimally invasive retroperitoneal necrosectomy) significantly reduced major complications, new-onset organ failure, and long-term incisional hernias/diabetes.",
    "explanation": "van Santvoort et al. (NEJM 2010) replaced routine open surgical necrosectomy with catheter drainage as the first-line intervention for infected necrosis.",
    "difficulty": "advanced",
    "category": "Evidence",
    "references": [
      "van Santvoort HC et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER). NEJM 2010."
    ]
  },
  {
    "id": "pancreatitis.fc.prophylactic-antibiotics-no-benefit",
    "topicId": "acute-pancreatitis",
    "question": "Do guidelines recommend routine prophylactic intravenous antibiotics in sterile acute necrotizing pancreatitis?",
    "answer": "No; randomized trials and meta-analyses prove prophylactic antibiotics do NOT reduce mortality or infected necrosis, and increase fungal superinfections.",
    "explanation": "Antibiotics are indicated only when infected necrosis is documented by CT gas, positive FNA culture, or secondary clinical deterioration.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "AGA Clinical Practice Guideline on Acute Pancreatitis 2018; IAP/APA Guidelines."
    ]
  },
  {
    "id": "pancreatitis.fc.early-feeding-pyro",
    "topicId": "acute-pancreatitis",
    "question": "What is the modern evidence regarding route and timing of nutrition in severe acute pancreatitis?",
    "answer": "Early enteral nutrition (EN via oral, NG, or NJ tube) started within 24-72 hours is superior to total parenteral nutrition (TPN), significantly reducing infected pancreatic necrosis, multi-organ failure, and mortality.",
    "explanation": "Enteral feeding preserves gut mucosal barrier integrity, prevents bacterial translocation to necrotic retroperitoneal tissue, and avoids central line infections.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-pancreatitis"
    ]
  },
  {
    "id": "pancreatitis.fc.prophylactic-antibiotics",
    "topicId": "acute-pancreatitis",
    "question": "Do guidelines recommend routine prophylactic IV antibiotics in sterile necrotizing pancreatitis?",
    "answer": "NO. Routine prophylactic antibiotics do NOT reduce infected necrosis or mortality and increase multi-drug resistant and fungal superinfections. Antibiotics are indicated only for proven/suspected infected necrosis.",
    "explanation": "Diagnosis of infected necrosis is confirmed by gas in peripancreatic collections on CT, positive CT-guided FNA culture, or clinical sepsis deterioration after 7-14 days.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-pancreatitis"
    ]
  },
  {
    "id": "pancreatitis.fc.step-up-approach",
    "topicId": "acute-pancreatitis",
    "question": "What did the PANTER trial establish regarding the 'step-up approach' for infected necrotizing pancreatitis?",
    "answer": "The step-up approach (percutaneous or endoscopic drainage first, followed by minimally invasive retroperitoneal necrosectomy only if no improvement) halved major complications and long-term morbidity compared with primary open necrosectomy.",
    "explanation": "van Santvoort et al. (NEJM 2010) established minimally invasive drainage as first-line, avoiding the high morbidity and mortality of upfront open laparotomy.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-pancreatitis"
    ]
  }
];
