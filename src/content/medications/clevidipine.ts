import type { Medication } from "@/content-types/medication";

export const clevidipine: Medication = {
  "id": "clevidipine",
  "slug": "clevidipine",
  "name": "Clevidipine",
  "genericName": "Clevidipine",
  "brandNames": [
    "Cleviprex"
  ],
  "class": "Ultra-Short-Acting Dihydropyridine Calcium Channel Blocker",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Calcium Channel Blockers",
  "summary": "Ultra-short-acting IV arterial vasodilator cleared by blood esterases (half-life 1 min) for precise titratable blood pressure control in acute hypertensive emergencies.",
  "mechanism": {
    "title": "L-Type Calcium Channel Inhibition & Blood Esterase Metabolism",
    "steps": [
      "Inhibits L-type calcium channels in arterial smooth muscle.",
      "Causes rapid, selective arterial vasodilation.",
      "Rapidly hydrolyzed by vascular and blood esterases."
    ],
    "visualDiagram": "L-Type Ca2+ Block → Arterial Vasodilation → Blood Esterase Hydrolysis (1 min t1/2)"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Precise SBP titration",
    "halfLife": "1.0 minute",
    "proteinBinding": "99.5%",
    "metabolism": "Extensive blood and tissue esterase hydrolysis",
    "elimination": "Renal and fecal excretion of inactive metabolites",
    "vdNotes": "0.17 L/kg (lipid emulsion formulation = 2 kcal/mL)"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Ultra-fast onset (1–2 min) and ultra-fast offset (half-life 1 min) — unrivaled precision.",
      "Organ-independent clearance by blood esterases (safe in renal/hepatic failure)."
    ],
    "whyIDont": [
      "Formulated in lipid emulsion (soy/egg allergy risk, lipid calorie load).",
      "Reflex tachycardia."
    ],
    "bedsidePearl": "Clevidipine has a 1-minute half-life because it is cleared by blood esterases — if BP drops too low, turning off the infusion restores BP within 5 minutes!"
  },
  "dosing": {
    "routine": "Hypertensive Emergency: Initiate 1–2 mg/h IV continuous infusion. Double dose every 90 seconds until near target, then titrate by smaller increments q5–10min. Range 4–6 mg/h (max 32 mg/h).",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Blood esterase clearance; safe in ESRD.",
    "hepaticConsiderations": "Safe in liver failure."
  },
  "toxicity": {
    "majorWarnings": [
      "Lipid calorie load (max 1000 mL / 24h), reflex tachycardia, egg/soy allergy."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Reflex tachycardia, hypotension."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Beta-Blockers",
      "mechanism": "Blunts reflex tachycardia",
      "consequence": "Enhanced BP drop",
      "icuAction": "Monitor."
    }
  ],
  "monitoring": {
    "parameters": [
      "Continuous arterial BP",
      "Heart rate",
      "Lipid intake (max 1000 mL/day)"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "VELOCITY trial demonstrated rapid, safe BP control with Clevidipine.",
        "source": "Pollack CV et al. Ann Emerg Med 2014;63:62-72.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/24054784/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Aortic Dissection Hypertensive Emergency",
      "clinicalContext": "Type A aortic dissection with SBP 195 mmHg.",
      "decision": "Start Clevidipine 2 mg/h IV + Esmolol to control SBP to 100–120 mmHg.",
      "rationale": "Ultra-fast titration prevents propagation of dissection tear."
    }
  ],
  "examTraps": [
    {
      "misconception": "Clevidipine accumulates in renal failure.",
      "reality": "FALSE. Clevidipine is cleared in the bloodstream by esterases.",
      "explanation": "It does not rely on kidneys or liver for clearance."
    }
  ],
  "searchAliases": [
    "clevidipine",
    "cleviprex",
    "ultra short acting ccb"
  ],
  "relatedTopicIds": [
    "hypertensive-emergencies",
    "acute-aortic-syndromes",
    "intracranial-hemorrhage"
  ]
};
