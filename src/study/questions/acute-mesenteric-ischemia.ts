import type { Question } from "@/content-types";

export const acuteMesentericIschemiaQuestions: readonly Question[] = [
  {
    "id": "acute-mesenteric-ischemia.q.1",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.recognition-diagnosis",
    "stem": "A 74-year-old female with atrial fibrillation presents with sudden onset of excruciating abdominal pain. On examination, the abdomen is soft and non-tender without peritoneal signs. Serum lactate is 1.4 mmol/L (normal). What is the next best step?",
    "options": [
      {
        "id": "a",
        "text": "Discharge home with antacids since exam and lactate are normal",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Order an immediate biphasic contrast-enhanced CT Angiography (CTA) of the abdomen and pelvis",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Wait 12 hours and recheck serum lactate",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Perform a barium small bowel follow-through",
        "isCorrect": false
      }
    ],
    "explanation": "Severe pain out of proportion to physical exam is the hallmark of acute mesenteric ischemia. Normal lactate DOES NOT rule out early ischemia; waiting for lactate elevation results in transmural necrosis and high mortality.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "mesenteric-ischemia-guideline-wses-2022",
        "relevance": "WSES diagnosis recommendations."
      }
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.q.2",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "stem": "What is the initial medical therapy that should be initiated immediately upon suspicion of acute mesenteric ischemia?",
    "options": [
      {
        "id": "a",
        "text": "Therapeutic systemic Unfractionated Heparin infusion",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "High-dose Vasopressin infusion",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Oral loperamide",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Immediate oral colon prep",
        "isCorrect": false
      }
    ],
    "explanation": "Therapeutic heparin bolus and infusion prevents thrombus propagation and microvascular thrombosis while diagnostic and surgical teams are mobilized.",
    "difficulty": "basic",
    "references": [
      "WSES Guidelines 2022"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.q.3",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "stem": "A patient in cardiogenic shock on escalating norepinephrine and vasopressin develops abdominal distension and rising lactate. CTA shows patent mesenteric vessels but diffuse bowel wall thinning. What is the diagnosis and appropriate management?",
    "options": [
      {
        "id": "a",
        "text": "SMA embolism requiring surgical embolectomy",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Non-Occlusive Mesenteric Ischemia (NOMI); optimize cardiac output, wean splanchnic vasoconstrictors, and consider intra-arterial vasodilator infusion",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Acute pancreatitis; start octreotide",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Appendicitis; schedule routine appendectomy",
        "isCorrect": false
      }
    ],
    "explanation": "NOMI is caused by splanchnic hypoperfusion and vasospasm in shock states. Treatment focuses on restoring cardiac output, reducing vasoconstrictor doses, and catheter-directed intra-arterial vasodilators (papaverine).",
    "difficulty": "intermediate",
    "references": [
      "Corcos O et al. Br J Surg 2013"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.q.4",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.icu-management-revascularization",
    "stem": "What is the primary clinical rationale for a planned second-look laparotomy at 24-48 hours in selected patients following mesenteric revascularization?",
    "options": [
      {
        "id": "a",
        "text": "To administer intraperitoneal chemotherapy",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "To reassess borderline bowel viability after revascularization, preventing unnecessary massive short-bowel resection and identifying delayed necrosis",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "To remove the peritoneal membrane",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "To verify complete gastric emptying",
        "isCorrect": false
      }
    ],
    "explanation": "Revascularization reperfuses ischemic tissue that may recover over 24-48 hours. A selective second-look allows definitive resection of genuinely non-viable segments while sparing salvageable bowel.",
    "difficulty": "intermediate",
    "references": [
      "WSES Guidelines 2022"
    ]
  },
  {
    "id": "acute-mesenteric-ischemia.q.5",
    "topicId": "acute-mesenteric-ischemia",
    "sectionId": "acute-mesenteric-ischemia.overview",
    "stem": "Which anatomical feature explains why acute SMA embolism typically spares the proximal jejunum and transverse colon?",
    "options": [
      {
        "id": "a",
        "text": "The jejunum has no arterial supply",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Emboli typically lodge 3-10 cm distal to the SMA origin, past the takeoff of the inferior pancreaticoduodenal and middle colic arteries",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "The stomach provides retrograde collateral blood to the entire ileum",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Emboli only lodge in the internal iliac artery",
        "isCorrect": false
      }
    ],
    "explanation": "SMA emboli typically lodge where the vessel tapers distal to the first proximal branches (inferior pancreaticoduodenal and middle colic arteries), preserving proximal jejunal perfusion.",
    "difficulty": "advanced",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  }
];
