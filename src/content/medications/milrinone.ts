import type { Medication } from "@/content-types/medication";

export const milrinone: Medication = {
  "id": "milrinone",
  "slug": "milrinone",
  "name": "Milrinone",
  "genericName": "Milrinone Lactate",
  "brandNames": [
    "Primacor"
  ],
  "class": "Phosphodiesterase-3 (PDE-3) Inhibitor Inodilator",
  "category": "vasopressors-inotropes",
  "subcategory": "Inotropes",
  "summary": "Non-adrenergic PDE-3 inhibitor providing potent inotropic support, systemic vasodilation, and pulmonary vascular resistance reduction — ideal for biventricular heart failure and pulmonary hypertension.",
  "mechanism": {
    "title": "Intracellular cAMP Phosphodiesterase-3 Inhibition",
    "steps": [
      "Inhibits PDE-3 enzyme in myocardium and vascular smooth muscle.",
      "Prevents cAMP breakdown → High intracellular cAMP.",
      "Myocardium: Increases calcium influx → Enhanced contractility & lusitropy.",
      "Vascular: Promotes calcium uptake into SR → Systemic & pulmonary vasodilation."
    ],
    "visualDiagram": "PDE-3 Inhibition → Increased cAMP → Inotropy + Pulmonary/Systemic Vasodilation"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Increase Cardiac Index & lower PVR",
    "halfLife": "2.3 hours (prolonged to 4–6 hours in renal failure)",
    "proteinBinding": "70%",
    "metabolism": "12% hepatic",
    "elimination": "83% renal clearance as unchanged drug",
    "vdNotes": "0.4 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Effective in patients on chronic Beta-Blockers (bypasses beta receptors).",
      "Reduces Right Ventricular afterload by decreasing Pulmonary Vascular Resistance (PVR).",
      "Enhances diastolic relaxation (lusitropy)."
    ],
    "whyIDont": [
      "Prolonged half-life (cannot be turned off rapidly like Dobutamine).",
      "Primary renal elimination (accumulates in AKI).",
      "Severe hypotension."
    ],
    "bedsidePearl": "Milrinone is cleared by the kidneys! In AKI or ESRD, reduce the dose significantly or select Dobutamine instead to prevent profound hypotension."
  },
  "dosing": {
    "routine": "Continuous IV 0.25–0.75 mcg/kg/min (omit loading dose in ICU to prevent hypotension).",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl 30–50 mL/min",
        "dose": "0.375 mcg/kg/min."
      },
      {
        "crclRange": "CrCl 10–30 mL/min",
        "dose": "0.25 mcg/kg/min."
      },
      {
        "crclRange": "CrCl < 10 mL/min",
        "dose": "0.125–0.2 mcg/kg/min."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "83% renal clearance; accumulation causes severe hypotension and arrhythmias.",
    "hepaticConsiderations": "Minor metabolism."
  },
  "toxicity": {
    "majorWarnings": [
      "Hypotension, ventricular arrhythmias, prolonged clearance in AKI."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Ventricular ectopy, VT, hypotension."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Vasodilators",
      "mechanism": "Synergistic vasodilation",
      "consequence": "Severe hypotension",
      "icuAction": "Monitor MAP."
    }
  ],
  "monitoring": {
    "parameters": [
      "BP",
      "ECG",
      "Renal function",
      "Cardiac output"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Milrinone clearance is directly proportional to CrCl.",
        "source": "DailyMed 2024.",
        "citationUrl": "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Decompensated Heart Failure on Chronic Metoprolol",
      "clinicalContext": "Cardiogenic shock in patient taking chronic beta-blockers.",
      "decision": "Start Milrinone 0.25 mcg/kg/min without loading dose.",
      "rationale": "Bypasses blocked beta-receptors via direct PDE-3 inhibition."
    }
  ],
  "examTraps": [
    {
      "misconception": "Milrinone has a short 2-minute half-life like Dobutamine.",
      "reality": "FALSE. Milrinone half-life is 2.5–6 hours.",
      "explanation": "Effects persist for hours after stopping the infusion, especially in renal impairment."
    }
  ],
  "searchAliases": [
    "milrinone",
    "primacor",
    "pde-3 inhibitor",
    "inodilator"
  ],
  "relatedTopicIds": [
    "acute-heart-failure",
    "rv-failure",
    "cardiogenic-shock"
  ]
};
