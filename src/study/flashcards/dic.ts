import type { Flashcard } from "@/content-types";

export const dicFlashcards: readonly Flashcard[] = [
  {
    "id": "dic.fc.isth-scoring-criteria",
    "topicId": "dic",
    "question": "What laboratory parameters make up the ISTH Diagnostic Score for Overt Disseminated Intravascular Coagulation (DIC)?",
    "answer": "1. Platelet count (>100k = 0, 50–100k = 1, <50k = 2); 2. Elevated fibrin-related markers (D-dimer/FDP); 3. Prolonged Prothrombin Time / INR; 4. Fibrinogen level (>1.0 g/L = 0, <1.0 g/L = 1). Score ≥ 5 indicates overt DIC.",
    "explanation": "International Society on Thrombosis and Haemostasis (ISTH) score standardizes the diagnosis of systemic microvascular thrombosis and consumption coagulopathy.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Taylor FB et al. Towards definition, clinical and laboratory criteria of DIC (ISTH). Thromb Haemost 2001."
    ]
  },
  {
    "id": "dic.fc.underlying-cause-treatment",
    "topicId": "dic",
    "question": "What is the cornerstone of definitive management in Disseminated Intravascular Coagulation?",
    "answer": "Aggressive treatment of the underlying precipitating disorder (e.g. source control/antibiotics in sepsis, delivery in placental abruption, antineoplastic therapy in APL).",
    "explanation": "DIC is always secondary to an underlying systemic procoagulant trigger. Blood product transfusions are supportive and cannot halt the process until the trigger is controlled.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Levi M, Ten Cate H. Disseminated intravascular coagulation. NEJM 1999."
    ]
  },
  {
    "id": "dic.fc.isth-score",
    "topicId": "dic",
    "question": "What laboratory parameters make up the ISTH scoring system for Overt DIC?",
    "answer": "Platelet count (>100k=0, 50-100k=1, <50k=2), Fibrin-related marker/D-dimer (no increase=0, moderate=2, strong=3), Prolonged PT/INR (<3s=0, 3-6s=1, >6s=2), Fibrinogen (>1.0 g/L=0, <1.0 g/L=1). Score >= 5 is compatible with overt DIC.",
    "explanation": "Serial daily scoring tracks progression from non-overt to decompensated consumptive coagulopathy.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in dic"
    ]
  },
  {
    "id": "dic.fc.cryoprecipitate-target",
    "topicId": "dic",
    "question": "What is the fibrinogen target and replacement strategy in bleeding DIC?",
    "answer": "Target Fibrinogen >= 1.5 g/L (150 mg/dL). Replace with Cryoprecipitate (10 units raises fibrinogen by ~50-70 mg/dL) or Fibrinogen concentrate.",
    "explanation": "Hypofibrinogenemia is a critical determinant of microvascular bleeding in consumptive coagulopathy.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in dic"
    ]
  },
  {
    "id": "dic.fc.underlying-cause-rule",
    "topicId": "dic",
    "question": "What is the single most important rule in DIC management?",
    "answer": "Definitive identification and urgent treatment of the underlying trigger (source control for sepsis, emergent delivery for placental abruption, chemotherapy for APL, surgical debridement for trauma/NSTI).",
    "explanation": "Transfusions and clotting factors only buy time; DIC will not resolve until the systemic procoagulant trigger is eliminated.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in dic"
    ]
  },
  {
    "id": "dic.fc.anticoagulation-in-dic",
    "topicId": "dic",
    "question": "When is therapeutic anticoagulation indicated in DIC?",
    "answer": "In thrombotic-predominant DIC phenotypes (e.g. acral cyanosis/gangrene, purpura fulminans, large vessel thrombosis) in the absence of severe active bleeding or platelet count < 30-50k.",
    "explanation": "Use low-dose unfractionated heparin infusion without bolus, titrating to anti-Xa or low-normal aPTT.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in dic"
    ]
  }
];
