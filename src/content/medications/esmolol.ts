import type { Medication } from "@/content-types/medication";

export const esmolol: Medication = {
  "id": "esmolol",
  "slug": "esmolol",
  "name": "Esmolol",
  "genericName": "Esmolol Hydrochloride",
  "brandNames": [
    "Brevibloc"
  ],
  "class": "Ultra-Short-Acting Cardioselective Beta-1 Blocker",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Beta-Blockers",
  "summary": "Ultra-short-acting selective beta-1 blocker cleared by red blood cell esterases (half-life 9 min) for rapid control of supraventricular tachycardia and aortic dissection shear stress.",
  "mechanism": {
    "title": "Selective Beta-1 Receptor Antagonism & RBC Esterase Hydrolysis",
    "steps": [
      "Selectively blocks cardiac beta-1 adrenergic receptors.",
      "Decreases SA node rate, slows AV node conduction, and decreases contractility.",
      "Rapidly hydrolyzed by red blood cell esterases."
    ],
    "visualDiagram": "Beta-1 Blockade → Decreased HR & AV Conduction → RBC Esterase Hydrolysis (9 min t1/2)"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Control HR < 60 bpm in aortic dissection or slow SVT",
    "halfLife": "9 minutes",
    "proteinBinding": "55%",
    "metabolism": "RBC cytosol esterase hydrolysis",
    "elimination": "Renal excretion of acid metabolite",
    "vdNotes": "3.4 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Ultra-short half-life (9 min) allows instant reversal of beta-blockade if hypotension occurs.",
      "Drug of choice for controlling heart rate and shear stress ($dP/dt$) in Acute Aortic Dissection."
    ],
    "whyIDont": [
      "Hypotension and bradycardia.",
      "Bronchospasm at high doses."
    ],
    "bedsidePearl": "Esmolol is the gold-standard beta-blocker for Acute Aortic Dissection — start Esmolol BEFORE vasodilators to prevent reflex tachycardia and reduce aortic wall shear stress ($dP/dt$)!"
  },
  "dosing": {
    "routine": "Loading Bolus: 500 mcg/kg IV over 1 minute. Continuous Infusion: 50–300 mcg/kg/min IV.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Cleared by RBC esterases; safe in ESRD.",
    "hepaticConsiderations": "Safe in liver failure."
  },
  "toxicity": {
    "majorWarnings": [
      "Hypotension, severe bradycardia, heart block."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Bradycardia, hypotension, heart block."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Digoxin",
      "mechanism": "Additive AV block",
      "consequence": "Severe bradycardia",
      "icuAction": "Monitor HR."
    }
  ],
  "monitoring": {
    "parameters": [
      "Continuous ECG & HR",
      "Arterial BP"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "AHA Aortic Dissection guidelines recommend Esmolol target HR < 60 bpm.",
        "source": "Circulation 2022;146:e358.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/36322642/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Acute Type B Aortic Dissection",
      "clinicalContext": "A 62-year-old with acute aortic dissection, HR 110 bpm, BP 180/100.",
      "decision": "Initiate Esmolol loading bolus 500 mcg/kg over 1 min, then 100 mcg/kg/min infusion targeting HR < 60 bpm.",
      "rationale": "Reduces aortic shear stress ($dP/dt$) before adding vasodilators."
    }
  ],
  "examTraps": [
    {
      "misconception": "Vasodilators should be started before Esmolol in aortic dissection.",
      "reality": "FALSE. Esmolol MUST be started BEFORE vasodilators.",
      "explanation": "Starting vasodilators first causes reflex tachycardia, increasing aortic shear force and propagating the tear."
    }
  ],
  "searchAliases": [
    "esmolol",
    "brevibloc",
    "ultra short acting beta blocker",
    "aortic dissection esmolol"
  ],
  "relatedTopicIds": [
    "acute-aortic-syndromes",
    "arrhythmias",
    "hypertensive-emergencies"
  ]
};
