import type { Question } from "@/content-types";

export const lowerGiBleedingQuestions: readonly Question[] = [
  {
    "id": "lower-gi-bleeding.q.1",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "stem": "A 66-year-old male presents with massive hematochezia, HR 128 bpm, BP 82/48 mmHg, and BUN 58 mg/dL (Creatinine 1.1 mg/dL). What critical clinical pitfall must be considered before assuming a lower tract bleeding source?",
    "options": [
      {
        "id": "a",
        "text": "Massive hematochezia with hemodynamic instability and BUN/Cr ratio > 30 frequently represents a brisk Upper GI bleed",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Lower GI bleeding never causes tachycardia",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "BUN is always low in upper GI bleeding",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Hematochezia can only originate from the sigmoid colon",
        "isCorrect": false
      }
    ],
    "explanation": "Approximately 10-15% of massive hematochezia with shock originates from an upper GI source. Blood absorption in the small intestine raises BUN (BUN/Cr > 30). NG aspirate or urgent EGD is mandatory.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "lower-gi-bleeding.q.2",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.cta-interventional-radiology",
    "stem": "An 80-year-old female with severe ongoing hematochezia is unstable despite 2 units of PRBCs. What is the most appropriate initial diagnostic imaging modality?",
    "options": [
      {
        "id": "a",
        "text": "Barium enema",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Abdominal/Pelvic CT Angiography (CTA)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Unprepared flexible sigmoidoscopy",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Capsule endoscopy",
        "isCorrect": false
      }
    ],
    "explanation": "CTA detects active bleeding >= 0.3-0.5 mL/min with high sensitivity (>90%) and guides targeted catheter angiography and embolization.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "lgib-guideline-acg-2023",
        "relevance": "CTA recommendation."
      }
    ]
  },
  {
    "id": "lower-gi-bleeding.q.3",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.cta-interventional-radiology",
    "stem": "CTA in a patient with severe hematochezia reveals active contrast extravasation in the ascending colon. What is the treatment of choice?",
    "options": [
      {
        "id": "a",
        "text": "Immediate exploratory laparotomy for total colectomy",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Catheter angiography with superselective transcatheter arterial embolization (TAE)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Oral sucralfate administration",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-dose IV octreotide infusion alone",
        "isCorrect": false
      }
    ],
    "explanation": "Superselective TAE using microcoils achieves >85% clinical hemostasis with <5% bowel ischemia risk, avoiding emergency surgical resection.",
    "difficulty": "intermediate",
    "references": [
      "Taba Taba Vakili S et al. JVIR 2020"
    ]
  },
  {
    "id": "lower-gi-bleeding.q.4",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "stem": "What is the recommended transfusion strategy for hemodynamically stable patients with acute lower GI bleeding?",
    "options": [
      {
        "id": "a",
        "text": "Liberal strategy targeting Hemoglobin > 11.0 g/dL",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Restrictive strategy targeting Hemoglobin 7.0-9.0 g/dL (transfusion threshold Hb < 7.0 g/dL)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Transfuse only platelets regardless of hemoglobin",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Withhold all blood products until surgical intervention",
        "isCorrect": false
      }
    ],
    "explanation": "Restrictive RBC transfusion (threshold < 7.0 g/dL) reduces rebleeding and adverse events compared to liberal transfusion (TRICC/Villanueva data).",
    "difficulty": "basic",
    "references": [
      "2023 ACG LGIB Guideline"
    ]
  },
  {
    "id": "lower-gi-bleeding.q.5",
    "topicId": "lower-gi-bleeding",
    "sectionId": "lower-gi-bleeding.resuscitation-triaging",
    "stem": "A patient with acute diverticular bleeding is receiving apixaban for atrial fibrillation. The bleeding is severe and life-threatening. What is the preferred reversal agent?",
    "options": [
      {
        "id": "a",
        "text": "Protamine sulfate",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Andexanet alfa or 4-Factor Prothrombin Complex Concentrate (4F-PCC)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Idarucizumab",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Desmopressin (DDAVP) alone",
        "isCorrect": false
      }
    ],
    "explanation": "Apixaban (Factor Xa inhibitor) is reversed with Andexanet alfa or 4F-PCC (50 U/kg). Idarucizumab is specific for Dabigatran.",
    "difficulty": "basic",
    "references": [
      "ASH Anticoagulation Reversal Guidelines"
    ]
  }
];
