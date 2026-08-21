import type { Medication } from "@/content-types/medication";

export const dexmedetomidine: Medication = {
  "id": "dexmedetomidine",
  "slug": "dexmedetomidine",
  "name": "Dexmedetomidine",
  "genericName": "Dexmedetomidine Hydrochloride",
  "brandNames": [
    "Precedex"
  ],
  "class": "Selective Alpha-2 Adrenergic Agonist",
  "category": "sedatives-analgesics",
  "subcategory": "Sedatives",
  "summary": "Highly selective alpha-2 agonist providing 'cooperative' rousable sedation without respiratory depression — reduces delirium duration and facilitates mechanical ventilation liberation.",
  "mechanism": {
    "title": "Locus Coeruleus Alpha-2A Adrenergic Agonism",
    "steps": [
      "Binds presynaptic alpha-2A receptors in the locus coeruleus, inhibiting norepinephrine release.",
      "Induces endogenous sleep-like (NREM stage 2) sedation while leaving patient easily rousable to verbal stimuli.",
      "Stimulates spinal cord alpha-2 receptors, providing mild analgesic-sparing effects.",
      "Zero depression of phrenic nerve drive or respiratory center."
    ],
    "visualDiagram": "Locus Coeruleus Alpha-2A Agonism → Inhibited Norepinephrine Release → Rousable Sedation (Zero Apnea)"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Target RASS 0 to -2 with easy rousability",
    "halfLife": "2.0 hours",
    "proteinBinding": "94%",
    "metabolism": "Extensive hepatic glucuronidation and CYP2A6 metabolism",
    "elimination": "95% renal excretion of metabolites",
    "vdNotes": "1.3 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Does NOT cause respiratory depression — ideal for extubation, NIV, and spontaneous breathing trials.",
      "Reduces ICU delirium incidence and duration compared to Benzodiazepines.",
      "Provides 'cooperative sedation' where patients remain communicative and easily awakened."
    ],
    "whyIDont": [
      "Causes sinus bradycardia and hypotension (central sympathetic withdrawal).",
      "Slow onset of action; inadequate for deep sedation or rapid control of severe agitation.",
      "High drug cost."
    ],
    "bedsidePearl": "Avoid giving an initial loading bolus of Dexmedetomidine — it triggers transient severe hypertension via peripheral alpha-2B vasoconstriction followed by prolonged bradycardia!"
  },
  "dosing": {
    "routine": "ICU Sedation: Initiate continuous IV infusion at 0.2–0.7 mcg/kg/h without a loading dose. Titrate by 0.1–0.2 mcg/kg/h to target RASS (0 to -2). Range 0.2–1.5 mcg/kg/h.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal dose adjustment required."
      }
    ],
    "hdDosing": "No dose adjustment required.",
    "crrtDosing": "No dose adjustment required."
  },
  "organFailure": {
    "renalConsiderations": "No dose adjustment required.",
    "hepaticConsiderations": "Dose reduction recommended in severe hepatic impairment due to reduced metabolic clearance."
  },
  "toxicity": {
    "majorWarnings": [
      "Sinus bradycardia, heart block, hypotension, rebound hypertension upon abrupt withdrawal."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Bradycardia, sinus arrest, hypotension, transient hypertension with bolus."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Beta-Blockers / Diltiazem",
      "mechanism": "Additive AV nodal suppression",
      "consequence": "Severe bradycardia and heart block",
      "icuAction": "Monitor heart rate closely."
    }
  ],
  "monitoring": {
    "parameters": [
      "Heart rate and rhythm continuously",
      "Arterial blood pressure",
      "RASS score and delirium screening (CAM-ICU)"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "padis-guideline-sccm-2018"
    ],
    "trialIds": [
      "sedcom-trial-jama-2009",
      "prodex-midex-trials-jama-2012"
    ],
    "claimCitations": [
      {
        "claim": "SEDCOM trial proved Dexmedetomidine reduces delirium duration compared to Midazolam.",
        "source": "Riker RR et al. JAMA 2009;301:489-499.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/19188332/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Ventilator Weaning in Delirious Patient",
      "clinicalContext": "Intubated patient failing extubation due to severe agitation on propofol.",
      "decision": "Transition Propofol to Dexmedetomidine 0.5 mcg/kg/h without loading dose.",
      "rationale": "Provides rousable sedation without respiratory depression, facilitating successful extubation."
    }
  ],
  "examTraps": [
    {
      "misconception": "Dexmedetomidine depresses respiratory drive like opioids and propofol.",
      "reality": "FALSE. Dexmedetomidine causes ZERO significant respiratory depression.",
      "explanation": "It acts on the locus coeruleus mimicking natural sleep, preserving hypercapnic and hypoxic respiratory drives."
    }
  ],
  "searchAliases": [
    "dexmedetomidine",
    "precedex",
    "alpha-2 agonist",
    "delirium sedative"
  ],
  "relatedTopicIds": [
    "icu-sedation-delirium",
    "mechanical-ventilation"
  ]
};
