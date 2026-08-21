import type { Question } from "@/content-types";

export const acuteAorticSyndromesQuestions: readonly Question[] = [
  {
    "id": "acute-aortic-syndromes.q.1",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.anti-impulse-therapy",
    "stem": "A 54-year-old male presents with severe tearing chest pain and SBP 210/115 mmHg, HR 98 bpm. CTA confirms an acute Stanford Type B aortic dissection. What is the correct sequence of medical therapy in the ICU?",
    "options": [
      {
        "id": "a",
        "text": "Start IV Nicardipine alone and titrate to SBP < 100 mmHg",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Administer IV Esmolol or Labetalol FIRST to achieve heart rate control (~60-80 bpm, where tolerated), then add IV Nicardipine if SBP remains >= 120 mmHg",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Administer high-dose Hydralazine IV push",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Initiate therapeutic Heparin infusion immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Anti-impulse therapy requires beta-blockade FIRST to lower heart rate and contractility and reduce dP/dt. Giving vasodilators first causes reflex tachycardia, which increases aortic shear stress and propagates dissection. Targets are titrated to the patient (heart rate ~60-80 bpm where tolerated, SBP <120 mmHg or the lowest pressure maintaining end-organ perfusion), not fixed for every patient.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "aortic-syndromes-guideline-acc-aha-2022",
        "relevance": "Defines anti-impulse sequencing."
      }
    ]
  },
  {
    "id": "acute-aortic-syndromes.q.2",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.stanford-classification",
    "stem": "A 65-year-old female presents with acute Stanford Type A dissection extending into the ascending aorta. Bedside echo reveals a moderate pericardial effusion with right ventricular diastolic collapse. What is the definitive management?",
    "options": [
      {
        "id": "a",
        "text": "Perform immediate bedside pericardiocentesis with 500 mL aspiration",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Emergency open surgical repair; aggressive pericardiocentesis is avoided as full decompression can relieve counterpressure and accelerate bleeding",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Initiate thrombolysis with tenecteplase",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Conservative medical therapy with oral beta-blockers",
        "isCorrect": false
      }
    ],
    "explanation": "Pericardiocentesis in Type A dissection relieves intrapericardial counterpressure that is temporarily tamponading the aortic tear, risking catastrophic exsanguination. Emergency operative sternotomy and repair is the definitive management.",
    "difficulty": "intermediate",
    "references": [
      "ACC/AHA Aortic Guidelines 2022"
    ]
  },
  {
    "id": "acute-aortic-syndromes.q.3",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.stanford-classification",
    "stem": "A patient with acute Stanford Type B dissection on optimal anti-impulse therapy develops sudden oliguria, creatinine rise from 1.0 to 2.8 mg/dL, and cool pulseless left lower extremity. What is the most appropriate management?",
    "options": [
      {
        "id": "a",
        "text": "Continue medical therapy and increase nicardipine dose",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Emergency Thoracic Endovascular Aortic Repair (TEVAR) to treat dynamic/static malperfusion",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Place a bilateral femoral bypass graft without addressing the aorta",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Initiate intermittent hemodialysis alone",
        "isCorrect": false
      }
    ],
    "explanation": "Development of end-organ malperfusion (renal failure, limb ischemia) defines 'complicated' Type B dissection, which mandates urgent endovascular repair (TEVAR) to expand the true lumen.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "aortic-syndromes-instead-xl-trial",
        "relevance": "TEVAR indications."
      }
    ]
  },
  {
    "id": "acute-aortic-syndromes.q.4",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.overview",
    "stem": "What is the key imaging distinction between Classic Aortic Dissection and Intramural Hematoma (IMH)?",
    "options": [
      {
        "id": "a",
        "text": "IMH has a visible intimal flap separating true and false lumens",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "IMH has crescentic aortic wall thickening without an intimal flap or direct flow",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "IMH is always benign and requires no treatment",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "IMH only occurs in the abdominal aorta",
        "isCorrect": false
      }
    ],
    "explanation": "Intramural Hematoma is characterized by blood within the aortic media without an intimal tear flap. Ascending IMH is treated identically to Type A dissection due to high risk of rupture.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "acute-aortic-syndromes.q.5",
    "topicId": "acute-aortic-syndromes",
    "sectionId": "acute-aortic-syndromes.anti-impulse-therapy",
    "stem": "What are the target hemodynamics within the first 20 minutes of ICU medical management in acute dissection?",
    "options": [
      {
        "id": "a",
        "text": "Heart rate ~60-80 bpm (where tolerated) and SBP < 120 mmHg, or the lowest BP maintaining end-organ perfusion",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Heart rate 80-100 bpm and MAP 90-100 mmHg",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heart rate > 100 bpm to maintain high cardiac output",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "SBP < 80 mmHg regardless of mental status",
        "isCorrect": false
      }
    ],
    "explanation": "Heart rate ~60-80 bpm where tolerated and SBP <120 mmHg (or the lowest pressure maintaining cerebral, coronary, and renal perfusion) reduces shear stress (dP/dt) and wall tension without causing organ hypoperfusion. These are titration targets, not fixed for every patient.",
    "difficulty": "basic",
    "references": [
      "ACC/AHA Guidelines 2022"
    ]
  }
];
