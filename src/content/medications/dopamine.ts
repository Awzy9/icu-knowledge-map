import type { Medication } from "@/content-types/medication";

export const dopamine: Medication = {
  "id": "dopamine",
  "slug": "dopamine",
  "name": "Dopamine",
  "genericName": "Dopamine Hydrochloride",
  "brandNames": [
    "Intropin"
  ],
  "class": "Dopaminergic & Adrenergic Agonist",
  "category": "vasopressors-inotropes",
  "subcategory": "Inotropes",
  "summary": "Dose-dependent DA1/Beta-1/Alpha-1 agonist for bradycardia and cardiogenic shock — higher risk of tachyarrhythmias and mortality compared to Norepinephrine.",
  "mechanism": {
    "title": "Dose-Dependent DA1, Beta-1, and Alpha-1 Agonism",
    "steps": [
      "Low dose (1–5 mcg/kg/min): DA1 renal/splanchnic vasodilation.",
      "Medium dose (5–10 mcg/kg/min): Beta-1 cardiac stimulation.",
      "High dose (>10 mcg/kg/min): Alpha-1 systemic vasoconstriction."
    ],
    "visualDiagram": "DA1 (Low) → Beta-1 (Mid) → Alpha-1 (High)"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "MAP and HR titration",
    "halfLife": "2 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "Hepatic MAO and COMT",
    "elimination": "Renal excretion",
    "vdNotes": "0.6 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Symptomatic bradycardia when pacing/atropine unavailable."
    ],
    "whyIDont": [
      "Increased mortality in cardiogenic shock (SOAP II trial).",
      "High tachyarrhythmia incidence."
    ],
    "bedsidePearl": "Dopamine is no longer first-line for septic shock due to higher arrhythmia risk."
  },
  "dosing": {
    "routine": "Continuous IV infusion 2–20 mcg/kg/min.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "'Renal dose' dopamine (low dose) does NOT prevent AKI.",
    "hepaticConsiderations": "No adjustment."
  },
  "toxicity": {
    "majorWarnings": [
      "Arrhythmias, myocardial ischemia, extravasation."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Tachycardia, VF/VT."
      }
    ]
  },
  "interactions": [
    {
      "drug": "MAO Inhibitors",
      "mechanism": "Metabolism block",
      "consequence": "Hypertensive crisis",
      "icuAction": "Avoid."
    }
  ],
  "monitoring": {
    "parameters": [
      "Heart rate",
      "ECG",
      "Arterial pressure"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "SOAP II trial proved Dopamine has higher arrhythmia risk than Norepinephrine.",
        "source": "De Backer D et al. N Engl J Med 2010;362:779.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/20220182/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Symptomatic Bradycardia",
      "clinicalContext": "HR 34 bpm with hypotension.",
      "decision": "Infuse Dopamine 5–10 mcg/kg/min.",
      "rationale": "Provides beta-1 chronotropic support."
    }
  ],
  "examTraps": [
    {
      "misconception": "Low-dose dopamine protects kidney function.",
      "reality": "FALSE.",
      "explanation": "Low-dose dopamine does not prevent AKI or hemodialysis."
    }
  ],
  "searchAliases": [
    "dopamine",
    "intropin",
    "inotrope"
  ],
  "relatedTopicIds": [
    "shock",
    "arrhythmias"
  ]
};
