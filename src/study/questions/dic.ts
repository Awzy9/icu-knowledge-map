import type { Question } from "@/content-types";

export const dicQuestions: readonly Question[] = [
  {
    "id": "dic.q.isth-overt-diagnosis",
    "topicId": "dic",
    "stem": "A patient with septic shock develops petechiae, oozing from IV puncture sites, and rising lactate. Labs reveal: Platelets 38,000/mcL (2 pts), D-dimer > 20 mcg/mL (severe increase, 3 pts), INR 2.2 (prolonged >6 sec, 2 pts), and Fibrinogen 0.8 g/L (1 pt). Total ISTH score is 8. What does this score indicate?",
    "options": [
      {
        "id": "a",
        "text": "Overt Disseminated Intravascular Coagulation (DIC)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immune Thrombocytopenic Purpura (ITP)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Isolated Vitamin K deficiency",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Non-overt low-grade coagulopathy",
        "isCorrect": false
      }
    ],
    "explanation": "An ISTH score ≥ 5 is diagnostic of Overt DIC (microvascular thrombosis combined with consumption of platelets and clotting factors). Management consists of aggressive source control, treatment of sepsis, and targeted blood product replacement if bleeding occurs.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Taylor FB et al. ISTH Guidelines. Thromb Haemost 2001."
    ]
  }
,
  {
    id: "dic.q.score-elements",
    topicId: "dic",
    stem: "Which four laboratory parameters comprise the International Society on Thrombosis and Haemostasis (ISTH) scoring system for Overt Disseminated Intravascular Coagulation (DIC)?",
    options: [
      { id: "a", text: "Platelet count, Elevated fibrin-related markers (D-dimer/FDPs), Prolonged Prothrombin Time (PT), and Fibrinogen level.", isCorrect: true },
      { id: "b", text: "PTT, Bleeding Time, Factor VIII, and Protein C.", isCorrect: false },
      { id: "c", text: "Thrombin Time, Antithrombin III, Platelets, and Hemoglobin.", isCorrect: false },
      { id: "d", text: "INR, Ferritin, Lactate Dehydrogenase, and Haptoglobin.", isCorrect: false }
    ],
    explanation: "The ISTH diagnostic algorithm for overt DIC scores: (1) Platelet count (>100k=0, 50-100k=1, <50k=2); (2) Fibrin marker D-dimer (no increase=0, moderate=2, strong=3); (3) PT prolongation (<3s=0, 3-6s=1, >6s=2); (4) Fibrinogen (>1.0 g/L=0, <1.0 g/L=1). A score >= 5 is diagnostic of overt DIC.",
    difficulty: "basic",
    category: "Diagnosis",
    references: [
      "Taylor FB, et al. ISTH DIC Definition. Thromb Haemost 2001."
    ]
  },
  {
    id: "dic.q.anticoagulation-indication",
    topicId: "dic",
    stem: "In which clinical presentation of DIC is therapeutic unfractionated heparin (UFH) or low-molecular-weight heparin (LMWH) indicated rather than blood product replacement alone?",
    options: [
      { id: "a", text: "Fulminant septic shock with purpura fulminans or predominant large-vessel thrombosis / digital gangrene without active bleeding.", isCorrect: true },
      { id: "b", text: "Massive gastrointestinal hemorrhage with fibrinogen < 0.5 g/L.", isCorrect: false },
      { id: "c", text: "Acute promyelocytic leukemia with diffuse mucosal bleeding.", isCorrect: false },
      { id: "d", text: "Severe traumatic brain injury with coagulopathy.", isCorrect: false }
    ],
    explanation: "In DIC where thrombosis predominates (e.g. arterial/venous thromboembolism, peripheral microvascular thrombosis/purpura fulminans, or solid tumor mucin-producing adenocarcinoma) and active bleeding is absent, therapeutic anticoagulation (UFH or LMWH) is indicated to halt consumption coagulopathy and tissue infarction (ISTH / BCSH guidelines).",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Wada H, et al. J Thromb Haemost 2013; Levi M. Crit Care 2018."
    ]
  }
];
