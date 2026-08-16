import type { Flashcard } from "@/content-types";

export const icuSedationDeliriumFlashcards: readonly Flashcard[] = [
  {
    "id": "icu-sedation-delirium.fc.1",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.overview",
    "question": "What is the core principle of the 'Analgesia-First' (Analgosedation) approach in the ICU?",
    "answer": "Pain must be systematically assessed and treated with opioids and multimodal non-opioids BEFORE sedatives are administered.",
    "explanation": "Treating pain effectively reduces or eliminates the need for deep hypnotic sedatives in many patients.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "sedation-guideline-padis-sccm-2018",
        "relevance": "SCCM PADIS analgesia-first recommendation."
      }
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.2",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.sedation-depth-agents",
    "question": "What target Richmond Agitation-Sedation Scale (RASS) score defines light sedation?",
    "answer": "RASS score of -1 (drowsy, awakens to voice with eye contact > 10s) to 0 (alert and calm).",
    "explanation": "Light sedation reduces mechanical ventilation duration, ICU length of stay, and 1-year mortality compared with deep sedation.",
    "difficulty": "basic",
    "references": [
      "SCCM PADIS Guidelines 2018"
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.3",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.sedation-depth-agents",
    "question": "Why do PADIS guidelines strongly recommend non-benzodiazepine sedatives (Propofol / Dexmedetomidine) over Benzodiazepines?",
    "answer": "Benzodiazepine infusions independently increase duration of mechanical ventilation, ICU length of stay, delirium incidence, and ICU-acquired weakness.",
    "explanation": "Benzodiazepines are reserved only for alcohol/sedative withdrawal, status epilepticus, or deep neuromuscular blockade.",
    "difficulty": "intermediate",
    "references": [
      "Devlin JW et al. PADIS Guidelines 2018"
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.4",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.delirium-abcdef-bundle",
    "question": "What are the 6 components of the ICU ABCDEF liberation bundle?",
    "answer": "A: Assess, prevent, and manage pain; B: Both SAT and SBT; C: Choice of analgesia and sedation; D: Delirium monitoring and management; E: Early mobility; F: Family engagement.",
    "explanation": "Comprehensive bundle compliance is associated with significant reductions in hospital mortality and ICU delirium.",
    "difficulty": "basic",
    "references": [
      "SCCM ABCDEF Bundle Framework"
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.5",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.overview",
    "question": "What did the landmark Awakening and Breathing Controlled (ABC) trial demonstrate?",
    "answer": "Paired daily Spontaneous Awakening Trials (SAT) plus Spontaneous Breathing Trials (SBT) led to 3 more ventilator-free days and a 14% absolute reduction in 1-year mortality.",
    "explanation": "Established paired daily interruption of sedatives with breathing trials as standard of care.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "sedation-abc-girard-trial",
        "relevance": "ABC trial landmark finding."
      }
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.6",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.sedation-depth-agents",
    "question": "What clinical features characterize Propofol Infusion Syndrome (PRIS)?",
    "answer": "Refractory metabolic acidosis, rhabdomyolysis, hyperkalemia, hepatomegaly/fatty liver, acute renal failure, and refractory bradycardia/cardiogenic shock.",
    "explanation": "Risk rises with propofol doses > 67-83 mcg/kg/min (> 4-5 mg/kg/h) administered for > 48 hours.",
    "difficulty": "advanced",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.7",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.delirium-abcdef-bundle",
    "question": "Do antipsychotics (Haloperidol, Quetiapine) shorten the duration of ICU delirium or reduce mortality?",
    "answer": "No. The randomized MIND-USA trial confirmed that antipsychotics do not reduce delirium duration, ventilator time, or mortality; they are reserved only for acute distressing agitation threatening safety.",
    "explanation": "Nonpharmacologic bundle interventions (sleep hygiene, reorientation, early mobilization) are the only proven delirium strategies.",
    "difficulty": "intermediate",
    "references": [
      "Girard TD et al. MIND-USA Trial. NEJM 2018"
    ]
  },
  {
    "id": "icu-sedation-delirium.fc.8",
    "topicId": "icu-sedation-delirium",
    "sectionId": "icu-sedation-delirium.overview",
    "question": "What did the SPICE III trial show regarding early Dexmedetomidine sedation?",
    "answer": "Early dexmedetomidine as primary sedative provided similar 90-day mortality compared to usual care, but increased target light sedation and coma-free days.",
    "explanation": "Reaffirmed dexmedetomidine as a safe primary sedative option in critical illness.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "sedation-mids-spice3-trial",
        "relevance": "SPICE III trial results."
      }
    ]
  }
];
