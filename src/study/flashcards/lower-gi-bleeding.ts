import type { Flashcard } from "@/content-types";

export const lowerGiBleedingFlashcards: readonly Flashcard[] = [
  {
    "id": "lower-gi-bleeding.fc.1",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.overview",
    "question": "What is the most common etiology of severe acute lower gastrointestinal bleeding?",
    "answer": "Diverticular bleeding (accounting for 30-40% of cases), resulting from transmural rupture of the vasa recta at the diverticulum neck.",
    "explanation": "Usually presents as painless, massive hematochezia. Spontaneously ceases in 75-80%, with a 25-30% recurrence rate.",
    "difficulty": "basic",
    "references": [
      "2023 ACG LGIB Guideline"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.2",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "question": "What is the recommended RBC transfusion threshold in hemodynamically stable acute lower GI bleeding?",
    "answer": "Restrictive transfusion threshold: transfuse for Hemoglobin < 7.0 g/dL (target 7.0-9.0 g/dL), or Hb < 8.0 g/dL in active cardiovascular disease.",
    "explanation": "Liberal transfusion increases splanchnic venous pressure and worsens rebleeding rates.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "lgib-guideline-acg-2023",
        "relevance": "Recommends restrictive RBC transfusion."
      }
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.3",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "question": "What percentage of massive hematochezia cases originate from an upper GI bleeding source?",
    "answer": "Approximately 10-15% of patients with massive hematochezia and shock have a brisk upper GI bleed (e.g. duodenal ulcer).",
    "explanation": "Rapid transit of large blood volumes prevents melena formation. High BUN/Creatinine ratio (> 30) suggests an upper GI source.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.4",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.cta-interventional-radiology",
    "question": "What is the first-line imaging modality for hemodynamically unstable patients with active hematochezia?",
    "answer": "Multidetector CT Angiography (CTA) of the abdomen and pelvis.",
    "explanation": "Rapidly detects active bleeding rates >= 0.3-0.5 mL/min with sensitivity > 90% and localizes the vessel for catheter embolization.",
    "difficulty": "basic",
    "references": [
      "ACG Guidelines 2023"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.5",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.cta-interventional-radiology",
    "question": "What is the management of choice when CTA demonstrates active contrast extravasation in LGIB?",
    "answer": "Catheter angiography with Superselective Transcatheter Arterial Embolization (TAE) using microcoils or liquid embolic agents.",
    "explanation": "Superselective microcatheter technique achieves >85% clinical success with <5% bowel ischemia risk.",
    "difficulty": "intermediate",
    "references": [
      "Taba Taba Vakili S et al. JVIR 2020"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.6",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "question": "What does an Oakland Score <= 8 indicate in acute lower GI bleeding?",
    "answer": "Predicts low risk of adverse outcomes (safe for outpatient/step-down discharge with 98% negative predictive value).",
    "explanation": "Incorporates age, sex, prior LGIB, rectal exam findings, heart rate, SBP, and hemoglobin.",
    "difficulty": "intermediate",
    "references": [
      "Oakland K et al. Lancet Gastroenterol Hepatol 2020"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.7",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.cta-interventional-radiology",
    "question": "Why should colonoscopy in acute LGIB be performed only after oral purge (polyethylene glycol bowel prep)?",
    "answer": "Unprepared colonoscopy has extremely low diagnostic yield, poor visualization through clot/feces, and high perforation risk.",
    "explanation": "Oral purge (4-6 L PEG over 3-4 hours) is safe and markedly improves mucosal visualization and therapeutic clip placement.",
    "difficulty": "advanced",
    "references": [
      "ACG Guidelines 2023"
    ]
  },
  {
    "id": "lower-gi-bleeding.fc.8",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "question": "How should severe bleeding on direct oral anticoagulants (DOACs) be urgently reversed in the ICU?",
    "answer": "Idarucizumab 5 g IV for Dabigatran; Andexanet alfa or 4-factor Prothrombin Complex Concentrate (4F-PCC 50 U/kg) for Factor Xa inhibitors (Apixaban/Rivaroxaban).",
    "explanation": "Immediate reversal restores hemostasis while endoscopic or angiographic interventions are coordinated.",
    "difficulty": "basic",
    "references": [
      "ASH / ACG Anticoagulation Reversal Guidelines"
    ]
  }
];
