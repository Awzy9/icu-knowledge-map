import type { Medication } from "@/content-types/medication";

export const nitroprusside: Medication = {
  "id": "nitroprusside",
  "slug": "nitroprusside",
  "name": "Nitroprusside",
  "genericName": "Sodium Nitroprusside",
  "brandNames": [
    "Nitropress"
  ],
  "class": "Direct Arterial & Venous Vasodilator",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Vasodilators",
  "summary": "Potent direct arterial and venous vasodilator for severe hypertensive emergencies and acute mitral regurgitation — risks cyanide and thiocyanate toxicity with high doses or renal failure.",
  "mechanism": {
    "title": "Direct Nitric Oxide Release & Smooth Muscle CGMP Activation",
    "steps": [
      "Releases free Nitric Oxide (NO) directly without metabolic conversion.",
      "Activates guanylyl cyclase → Increases cGMP → Smooth muscle relaxation.",
      "Produces balanced potent arterial and venous vasodilation."
    ],
    "visualDiagram": "Direct NO Release → Increased cGMP → Balanced Arterial & Venous Vasodilation"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Rapid SBP reduction",
    "halfLife": "2 minutes (Cyanide metabolite half-life minutes; Thiocyanate half-life 3–7 days)",
    "proteinBinding": "None",
    "metabolism": "RBC hemoglobin interaction releases 5 cyanide ions per molecule; liver rhodanase converts cyanide to thiocyanate",
    "elimination": "Renal excretion of thiocyanate",
    "vdNotes": "0.2 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Most potent and rapid IV vasodilator for extreme hypertensive emergencies and acute severe mitral regurgitation."
    ],
    "whyIDont": [
      "Cyanide toxicity (metabolic acidosis, elevated venous pO2) with infusions >2 mcg/kg/min.",
      "Thiocyanate toxicity in renal failure.",
      "Increases ICP and causes coronary steal."
    ],
    "bedsidePearl": "Sodium nitroprusside releases 5 cyanide ions per molecule! Protect infusion bottles from light, keep dose < 2 mcg/kg/min, and monitor for metabolic acidosis (cyanide toxicity) and thiocyanate accumulation in renal failure."
  },
  "dosing": {
    "routine": "Continuous IV Infusion: Start 0.3 mcg/kg/min; titrate by 0.5 mcg/kg/min every 5 minutes. Typical 0.5–3.0 mcg/kg/min (max 10 mcg/kg/min for <10 min).",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl < 30 mL/min",
        "dose": "Avoid prolonged infusion >48h due to thiocyanate accumulation."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Thiocyanate metabolite accumulates in renal failure, causing neurotoxicity (confusion, hyperreflexia, seizures).",
    "hepaticConsiderations": "Cyanide metabolism (rhodanase enzyme) impaired in liver failure."
  },
  "toxicity": {
    "majorWarnings": [
      "Cyanide Toxicity (unexplained lactic acidosis, almond odor, hypoxia), Thiocyanate Toxicity, ICP elevation."
    ],
    "organToxicities": [
      {
        "organ": "Systemic & CNS",
        "description": "Cyanide poisoning, thiocyanate neurotoxicity, cerebral vasodilation (increased ICP)."
      }
    ]
  },
  "interactions": [
    {
      "drug": "PDE-5 Inhibitors (Sildenafil)",
      "mechanism": "Synergistic cGMP elevation",
      "consequence": "Profound refractory collapse",
      "icuAction": "STRICTLY CONTRAINDICATED."
    }
  ],
  "monitoring": {
    "parameters": [
      "Arterial BP continuous",
      "Serum Lactate and ABG (for cyanide toxicity)",
      "Serum Thiocyanate level if infusion >48h or renal failure"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Nitroprusside releases cyanide and thiocyanate metabolites.",
        "source": "DailyMed 2024.",
        "citationUrl": "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Acute Severe Hypertensive Crisis with Pulmonary Edema",
      "clinicalContext": "BP 240/130 mmHg with acute mitral regurgitation and severe pulmonary edema.",
      "decision": "Infuse Nitroprusside at 0.5 mcg/kg/min + arterial line monitoring.",
      "rationale": "Reduces afterload and preload instantly, improving mitral regurgitation."
    }
  ],
  "examTraps": [
    {
      "misconception": "Nitroprusside is safe in elevated ICP.",
      "reality": "FALSE. Nitroprusside causes cerebral vasodilation and increases ICP.",
      "explanation": "Use Nicardipine or Clevidipine instead in head injury or stroke."
    }
  ],
  "searchAliases": [
    "nitroprusside",
    "nitropress",
    "cyanide toxicity",
    "hypertensive crisis"
  ],
  "relatedTopicIds": [
    "hypertensive-emergencies",
    "cardiogenic-pulmonary-edema"
  ]
};
