import type { Medication } from "@/content-types/medication";

export const norepinephrine: Medication = {
  "id": "norepinephrine",
  "slug": "norepinephrine",
  "name": "Norepinephrine",
  "genericName": "Norepinephrine Bitartrate",
  "brandNames": [
    "Levophed"
  ],
  "class": "Potent Alpha-1 & Beta-1 Inotrope / Vasopressor",
  "category": "vasopressors-inotropes",
  "subcategory": "Vasopressors",
  "summary": "First-line vasopressor of choice for septic shock, vasodilatory shock, and cardiogenic shock with vasoplegia — potent alpha-1 vasoconstriction with modest beta-1 inotropic support.",
  "mechanism": {
    "title": "Alpha-1 Vascular Smooth Muscle & Beta-1 Cardiomyocyte Agonism",
    "steps": [
      "Binds vascular alpha-1 adrenergic receptors, inducing intense arterial and venous vasoconstriction.",
      "Increases Systemic Vascular Resistance (SVR) and Mean Arterial Pressure (MAP).",
      "Stimulates cardiac beta-1 adrenergic receptors, increasing myocardial contractility and stroke volume.",
      "Minimal beta-2 receptor activation, preventing unwanted peripheral vasodilation."
    ],
    "visualDiagram": "Alpha-1 Agonism → SVR & MAP Increase + Beta-1 Agonism → Inotropic Support"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Continuous MAP titration (Target MAP ≥ 65 mmHg)",
    "halfLife": "1 to 2 minutes (steady state achieved within 5–10 minutes)",
    "proteinBinding": "25%",
    "metabolism": "Rapid hepatic and neuronal metabolism via MAO and COMT",
    "elimination": "Renal excretion of inactive metabolites (normetanephrine)",
    "vdNotes": "Confined to intravascular space; rapid clearance allows immediate dose titration"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line recommended vasopressor in Surviving Sepsis Campaign guidelines for Septic Shock.",
      "Increases MAP primarily via SVR elevation while preserving or increasing cardiac output.",
      "Lower arrhythmia risk compared to Dopamine."
    ],
    "whyIDont": [
      "Extravasation causes severe local tissue ischemic necrosis.",
      "Excessive vasoconstriction in hypovolemia causes visceral and digital ischemia.",
      "Increases myocardial oxygen demand."
    ],
    "bedsidePearl": "Norepinephrine is the first-line vasopressor for septic shock. If MAP remains < 65 mmHg despite 0.25–0.5 mcg/kg/min of norepinephrine, add Vasopressin (0.03 units/min) early to reduce norepinephrine requirements!"
  },
  "dosing": {
    "routine": "Continuous IV Infusion: Start 0.02–0.05 mcg/kg/min (or 2–5 mcg/min); titrate by 0.02–0.05 mcg/kg/min every 2–5 minutes to target MAP ≥ 65 mmHg. Typical range 0.05–0.5 mcg/kg/min (max 1.0–3.0 mcg/kg/min in severe shock).",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required; titrate to target MAP."
      }
    ],
    "hdDosing": "No dose adjustment required.",
    "crrtDosing": "No dose adjustment required."
  },
  "organFailure": {
    "renalConsiderations": "Increases renal perfusion pressure and GFR in septic vasoplegia by elevating MAP above renal autoregulatory threshold.",
    "hepaticConsiderations": "Rapidly metabolized; liver dysfunction does not significantly impair clinical response."
  },
  "toxicity": {
    "majorWarnings": [
      "Peripheral extravasation causes severe ischemic tissue necrosis.",
      "Severe organ hypoperfusion if given without adequate volume resuscitation in hypovolemia.",
      "Arrhythmias and myocardial ischemia."
    ],
    "organToxicities": [
      {
        "organ": "Vascular & Tissue",
        "description": "Ischemic necrosis upon extravasation, digital gangrene in refractory shock."
      },
      {
        "organ": "Cardiovascular",
        "description": "Tachycardia, atrial/ventricular arrhythmias, myocardial ischemia."
      }
    ]
  },
  "interactions": [
    {
      "drug": "MAO Inhibitors / Tricyclic Antidepressants",
      "mechanism": "Inhibition of catecholamine breakdown",
      "consequence": "Severe hypertensive crisis",
      "icuAction": "Titrate norepinephrine extremely cautiously at low initial doses."
    }
  ],
  "monitoring": {
    "parameters": [
      "Continuous arterial blood pressure (arterial line preferred)",
      "Heart rate and ECG rhythm",
      "Perfusion markers (lactate, urine output, ScvO2)",
      "IV site for extravasation"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "sepsis-guideline-ssc-2021"
    ],
    "claimCitations": [
      {
        "claim": "Surviving Sepsis Campaign 2021 guidelines recommend Norepinephrine as the first-line vasopressor.",
        "source": "Surviving Sepsis Campaign Guidelines 2021. Crit Care Med 2021;49:e1063.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/34605781/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Vasodilatory Septic Shock",
      "clinicalContext": "A 70-year-old with urosepsis has MAP 52 mmHg after 30 mL/kg fluid resuscitation.",
      "decision": "Initiate Norepinephrine continuous infusion at 0.05 mcg/kg/min and titrate to MAP ≥ 65 mmHg.",
      "rationale": "Restores vascular tone and renal perfusion pressure."
    }
  ],
  "examTraps": [
    {
      "misconception": "Dopamine is safer than Norepinephrine in septic shock.",
      "reality": "FALSE. Dopamine increases mortality and dysrhythmias compared to Norepinephrine.",
      "explanation": "SOAP II trial proved Norepinephrine is superior with significantly fewer cardiac arrhythmias."
    }
  ],
  "searchAliases": [
    "norepinephrine",
    "levophed",
    "vasopressor",
    "septic shock vasopressor"
  ],
  "relatedTopicIds": [
    "septic-shock",
    "shock",
    "cardiogenic-shock"
  ]
};
