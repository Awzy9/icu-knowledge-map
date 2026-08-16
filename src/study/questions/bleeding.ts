import type { Question } from "@/content-types";

export const bleedingQuestions: readonly Question[] = [
  {
    "id": "bleeding.q.proppr-transfusion-ratio",
    "topicId": "bleeding",
    "stem": "A 28-year-old trauma patient with multiple gunshot wounds to the abdomen presents in profound hemorrhagic shock. Based on the landmark PROPPR randomized clinical trial (JAMA 2015), what initial balanced blood component transfusion ratio provides superior early hemostasis and reduces 24-hour exsanguination death?",
    "options": [
      {
        "id": "a",
        "text": "1:1:1 ratio (1 unit of Plasma to 1 unit of Platelets to 1 unit of Red Blood Cells)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "1:1:2 ratio (1 Plasma : 1 Platelets : 2 PRBCs)",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "PRBC transfusion alone until hemoglobin exceeds 10 g/dL before giving plasma",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Cryoprecipitate and Normal Saline without red blood cells",
        "isCorrect": false
      }
    ],
    "explanation": "The PROPPR trial (JAMA 2015, n=680) demonstrated that early balanced transfusion of plasma, platelets, and PRBCs in a 1:1:1 ratio resulted in significantly faster anatomical hemostasis (86% vs 78%, P=0.006) and a marked reduction in 24-hour exsanguination deaths (9.2% vs 14.6%, P=0.03) compared to 1:1:2.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Holcomb JB et al. PROPPR Trial. JAMA 2015."
    ]
  },
  {
    "id": "bleeding.q.crash2-timing-cutoff",
    "topicId": "bleeding",
    "stem": "According to the landmark CRASH-2 trial (Lancet 2010) and follow-up subgroup analyses, why is Tranexamic Acid (TXA) contraindicated when administered more than 3 hours after initial trauma?",
    "options": [
      {
        "id": "a",
        "text": "Administration of TXA > 3 hours after injury was associated with a significant increase in mortality due to fatal bleeding and thrombosis.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "TXA causes direct acute tubular necrosis if delayed.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "TXA loses all oral bioavailability after 3 hours.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "TXA completely degrades in stored blood after 3 hours.",
        "isCorrect": false
      }
    ],
    "explanation": "The CRASH-2 trial showed that while TXA within 1–3 hours reduced death from bleeding, giving TXA after 3 hours was associated with an increased risk of death (relative risk 1.44, P=0.004). Early administration within the first 3 hours is a critical quality metric.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "CRASH-2 Trial Collaborators. Lancet 2010; Lancet 2011."
    ]
  }
,
  {
    id: "bleeding.q.teg-rotem-guided",
    topicId: "bleeding",
    stem: "In massive bleeding and trauma-induced coagulopathy, what are the primary clinical advantages of Viscoelastic Hemostatic Assays (TEG / ROTEM) over conventional coagulation tests (PT/INR, PTT, Fibrinogen)?",
    options: [
      { id: "a", text: "TEG/ROTEM provides results in 10-15 minutes, evaluates whole-blood clot initiation, kinetics, strength, and hyperfibrinolysis, and enables targeted goal-directed therapy rather than blind empiric transfusions.", isCorrect: true },
      { id: "b", text: "TEG/ROTEM measures only the intrinsic pathway of coagulation.", isCorrect: false },
      { id: "c", text: "TEG/ROTEM eliminates the need for red blood cell transfusions in all trauma patients.", isCorrect: false },
      { id: "d", text: "TEG/ROTEM is only accurate if the patient's core temperature is exactly 37.0°C.", isCorrect: false }
    ],
    explanation: "Viscoelastic assays (TEG/ROTEM) assess whole-blood dynamic clot formation at the bedside: R-time/CT (clotting factors -> FFP/PCC), K-time/alpha-angle (fibrinogen kinetics -> cryoprecipitate), Maximum Amplitude/MCF (platelet-fibrin clot strength -> platelets), and LY30/ML (hyperfibrinolysis -> TXA). Goal-directed viscoelastic transfusion reduces mortality and blood product waste (ITACTIC trial).",
    difficulty: "intermediate",
    category: "Management",
    references: [
      "Baksaas-Aasen K, et al. ITACTIC Trial. JAMA 2021; European Trauma Guidelines."
    ]
  }
];
