import type { ClinicalCase } from "@/content-types/clinical-case";

export const candidemiaCase: ClinicalCase = {
  "id": "case-candidemia",
  "slug": "candidemia",
  "title": "Invasive Candidemia in the Critically Ill",
  "subtitle": "Echinocandin therapy, central venous catheter management, dilated retinal examination, and source clearance",
  "difficulty": "advanced",
  "system": "infectious",
  "tags": [
    "mdr-organisms",
    "anidulafungin",
    "liposomal-amphotericin-b",
    "candidemia"
  ],
  "objectives": [
    "Identify risk factors for invasive candidiasis in the ICU (broad-spectrum antibiotics, TPN, central lines, abdominal surgery)",
    "Select first-line empirical and targeted echinocandin therapy per IDSA/ESCMID fungal guidelines",
    "Execute guideline-directed source control: evaluate and remove colonized central lines and dilated fundoscopic eye examination for fungal endophthalmitis"
  ],
  "initialPresentation": {
    "history": "A 55-year-old female post-emergency Hartmann's procedure for perforated diverticulitis is in the ICU on broad-spectrum antibiotics (Vancomycin + Cefepime + Metronidazole) and Total Parenteral Nutrition (TPN) via a right subclavian central venous catheter (CVC). On postoperative Day 8, she develops new fever (38.9°C), worsening hypotension, and two blood culture bottles turn positive for yeast at 24 hours.",
    "vitals": {
      "HR": "118/min",
      "BP": "88/50 mmHg",
      "MAP": "62 mmHg",
      "RR": "22/min",
      "SpO2": "96% on 2L NC"
    },
    "keyFindings": [
      "Blood cultures from both peripheral and central line sites reveal Candida albicans (yeast with pseudohyphae on Gram stain)",
      "TPN infusing through right subclavian triple-lumen catheter placed 10 days ago",
      "Oliguric acute kidney injury (serum creatinine increased from 0.8 to 2.1 mg/dL over 48 hours)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "Blood cultures have grown Candida albicans in a septic ICU patient with renal failure. The team is deciding on antifungal selection and line management.",
      "question": "What is the guideline-directed first-line management?",
      "options": [
        {
          "id": "1-a",
          "text": "Start an IV Echinocandin (Anidulafungin 200 mg load then 100 mg/day, or Caspofungin/Micafungin) + evaluate and remove the colonized central venous catheter + consult Ophthalmology for dilated eye exam within 7 days",
          "isCorrect": true,
          "explanation": "Echinocandins are the first-line drug of choice for candidemia in ICU patients due to superior fungicidal activity and zero nephrotoxicity (Anidulafungin undergoes spontaneous chemical degradation without hepatic or renal clearance). Early evaluation and removal of the catheter is recommended when feasible, as retained infected lines perpetuate bloodstream infection.",
          "physiologicReasoning": "Echinocandins inhibit 1,3-beta-D-glucan synthase in the fungal cell wall, lysing dividing yeast cells. Candida biofilms on catheters cannot be eradicated without physical device removal.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Rapid fungicidal clearance from the bloodstream",
              "Catheter biofilm reservoir eliminated",
              "Dilated fundoscopy rules out chorioretinitis"
            ],
            "clinicalResponse": "Following CVC removal and Anidulafungin initiation, repeat blood cultures at 48 hours are sterile. Fever resolves and renal function recovers."
          }
        },
        {
          "id": "1-b",
          "text": "Start Fluconazole 200 mg PO daily and keep the central line in place to preserve access",
          "isCorrect": false,
          "explanation": "Fluconazole is fungistatic, has higher resistance rates in critically ill patients, and keeping the colonized central line in place leads to persistent fungemia, metastatic seeding, and excess mortality.",
          "whyNot": "Fluconazole is inferior to echinocandins for initial candidemia in septic ICU patients, and retained lines perpetuate bloodstream infection.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Persistent candidemia and metastatic seeding to heart valves and eyes"
            ],
            "clinicalResponse": "Patient develops fungal endophthalmitis and septic shock."
          }
        }
      ],
      "physiologyDisplay": {
        "map": "up",
        "hr": "down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "anidulafungin",
    "liposomal-amphotericin-b"
  ],
  "relatedTopicIds": [
    "mdr-organisms",
    "septic-shock"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by the Infectious Diseases Society of America"
]
};
