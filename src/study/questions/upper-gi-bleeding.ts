import type { Question } from "@/content-types";

export const upperGiBleedingQuestions: readonly Question[] = [
  {
    "id": "ugib.q.villanueva-transfusion-evidence",
    "topicId": "upper-gi-bleeding",
    "stem": "A 56-year-old man with alcoholic cirrhosis presents with hematemesis from bleeding esophageal varices. After initial fluid resuscitation, his blood pressure is 105/65 mmHg and hemoglobin is 7.8 g/dL. Based on the landmark Villanueva trial (NEJM 2013), what is the optimal transfusion management?",
    "options": [
      {
        "id": "a",
        "text": "Withhold PRBC transfusion, targeting a restrictive hemoglobin threshold of 7.0 to 9.0 g/dL",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Transfuse 2 units of PRBCs immediately to achieve a target hemoglobin of > 10.0 g/dL",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Transfuse platelets and FFP to normalize all coagulation values before starting octreotide",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Infuse 3 liters of Normal Saline to raise central venous pressure",
        "isCorrect": false
      }
    ],
    "explanation": "The Villanueva trial (NEJM 2013, n=921) demonstrated that in acute upper GI bleeding (and especially in cirrhotic patients with varices), a restrictive transfusion strategy (transfusing when Hb < 7 g/dL) significantly reduced 45-day all-cause mortality (5% vs 9%, P=0.02) and rebleeding rates compared to liberal transfusion (transfusing when Hb < 9 g/dL).",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Villanueva C et al. NEJM 2013; AASLD 2017."
    ]
  }
,
  {
    id: "ugib.q.variceal-octreotide-abx",
    topicId: "upper-gi-bleeding",
    stem: "In a cirrhotic patient presenting with acute upper gastrointestinal bleeding and suspected esophageal variceal hemorrhage, which two pharmacologic interventions should be initiated IMMEDIATELY alongside resuscitation prior to endoscopy?",
    options: [
      { id: "a", text: "Oral propranolol and IV pantoprazole bolus.", isCorrect: false },
      { id: "b", text: "Vasoactive drug (IV Octreotide 50 mcg bolus + 50 mcg/h or Terlipressin) AND prophylactic short-term antibiotics (IV Ceftriaxone 1 g daily for up to 7 days).", isCorrect: true },
      { id: "c", text: "Tranexamic acid (TXA) and 4-factor PCC.", isCorrect: false },
      { id: "d", text: "IV Furosemide and oral lactulose.", isCorrect: false }
    ],
    explanation: "Baveno VII and AASLD guidelines mandate starting a splanchnic vasoactive agent (octreotide/terlipressin) immediately to reduce portal venous inflow and variceal pressure, AND prophylactic IV ceftriaxone (1 g/day for up to 7 days). Prophylactic antibiotics significantly reduce bacterial infections, early rebleeding, and all-cause hospital mortality (Cochrane meta-analysis).",
    difficulty: "basic",
    category: "Management",
    references: [
      "Baveno VII Consensus Workshop. J Hepatol 2022; Chavez-Tapia NC, et al. Cochrane Database Syst Rev 2010."
    ]
  },
  {
    id: "ugib.q.endoscopy-timing",
    topicId: "upper-gi-bleeding",
    stem: "According to the landmark trial by Lau et al. (NEJM 2020), what is the optimal timing for upper endoscopy in acute non-variceal upper GI bleeding after initial resuscitation?",
    options: [
      { id: "a", text: "Urgent endoscopy within < 6 hours is mandatory for all patients.", isCorrect: false },
      { id: "b", text: "Early endoscopy within 24 hours (after hemodynamic resuscitation and stabilization) achieves identical 30-day mortality and rebleeding rates compared with urgent endoscopy (<6 hours).", isCorrect: true },
      { id: "c", text: "Endoscopy should be deferred for at least 72 hours to allow clot stabilization.", isCorrect: false },
      { id: "d", text: "Only patients with a Glasgow-Blatchford Score of 0 require endoscopy.", isCorrect: false }
    ],
    explanation: "Lau et al. (NEJM 2020, n=516) showed that urgent endoscopy performed within 6 hours did not reduce 30-day mortality (8.9% vs 6.6%) or further bleeding compared with early endoscopy performed within 6 to 24 hours after initial hemodynamic resuscitation. Resuscitation must precede endoscopy.",
    difficulty: "intermediate",
    category: "Evidence",
    references: [
      "Lau JYW, et al. NEJM 2020; ACG Upper GI Bleeding Guidelines."
    ]
  }
];
