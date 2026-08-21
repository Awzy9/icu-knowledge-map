import type { Medication } from "@/content-types/medication";

export const nicardipine: Medication = {
  "id": "nicardipine",
  "slug": "nicardipine",
  "name": "Nicardipine",
  "genericName": "Nicardipine Hydrochloride",
  "brandNames": [
    "Cardene"
  ],
  "class": "Dihydropyridine Calcium Channel Blocker",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Calcium Channel Blockers",
  "summary": "Potent intravenous arterial vasodilator for acute hypertensive emergencies, intracerebral hemorrhage (ICH), and stroke — highly selective arterial vasodilation with minimal venodilation or cardiodepression.",
  "mechanism": {
    "title": "L-Type Calcium Channel Blockade in Vascular Smooth Muscle",
    "steps": [
      "Inhibits calcium ion influx through voltage-gated L-type calcium channels in vascular smooth muscle.",
      "Causes potent, selective coronary and systemic arterial vasodilation.",
      "Decreases Systemic Vascular Resistance (SVR) and Blood Pressure.",
      "Minimal effect on cardiac conduction (AV node) or myocardial contractility."
    ],
    "visualDiagram": "L-Type Ca2+ Channel Block → Arterial Vasodilation → SVR Reduction → Controlled BP Decrease"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Titrate to target SBP (e.g. SBP 130–140 mmHg in acute ICH)",
    "halfLife": "Initial 8 min; Terminal 14 hours",
    "proteinBinding": "95%",
    "metabolism": "Extensive hepatic CYP3A4 metabolism",
    "elimination": "60% renal excretion of metabolites; 35% in feces",
    "vdNotes": "0.6 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line agent for Acute Intracerebral Hemorrhage (ICH) and Hypertensive Encephalopathy.",
      "Predictable, smooth dose-titration without sudden precipitous BP drops.",
      "Minimal venous pooling and no increase in intracranial pressure (ICP)."
    ],
    "whyIDont": [
      "Reflex tachycardia.",
      "Thrombophlebitis at peripheral IV injection sites (change infusion site q12h).",
      "Prolonged half-life with long-term infusions."
    ],
    "bedsidePearl": "Nicardipine is the preferred IV antihypertensive in Acute ICH (target SBP 130–140 mmHg per INTERACT2 / ATTACH-2 trials). Infuse via central line or change peripheral site every 12 hours to avoid severe thrombophlebitis!"
  },
  "dosing": {
    "routine": "Hypertensive Emergency: Initiate 5.0 mg/h IV continuous infusion. Titrate by 2.5 mg/h every 5–15 minutes to target BP (max 15.0 mg/h). Once target BP achieved, decrease to maintenance 3.0 mg/h.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required; titrate carefully."
      }
    ],
    "hdDosing": "No dose adjustment required.",
    "crrtDosing": "No dose adjustment required."
  },
  "organFailure": {
    "renalConsiderations": "No dose reduction needed.",
    "hepaticConsiderations": "Titrate cautiously in severe hepatic impairment due to reduced CYP3A4 clearance."
  },
  "toxicity": {
    "majorWarnings": [
      "Reflex tachycardia, peripheral thrombophlebitis, hypotension."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular & Local",
        "description": "Tachycardia, headache, peripheral phlebitis."
      }
    ]
  },
  "interactions": [
    {
      "drug": "CYP3A4 Inhibitors (Azoles, Macrolides)",
      "mechanism": "Inhibition of nicardipine clearance",
      "consequence": "Enhanced hypotensive effect",
      "icuAction": "Start at lower initial infusion rate."
    }
  ],
  "monitoring": {
    "parameters": [
      "Continuous arterial blood pressure",
      "Heart rate",
      "IV infusion site for phlebitis"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "ich-guideline-aha-asa-2022"
    ],
    "trialIds": [
      "interact2-trial-nejm-2013",
      "antach2-trial-nejm-2016"
    ],
    "claimCitations": [
      {
        "claim": "AHA/ASA 2022 ICH guidelines recommend smooth SBP lowering to 130-140 mmHg using Nicardipine or Clevidipine.",
        "source": "AHA/ASA ICH Guidelines 2022. Stroke 2022;53:e282.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/35587978/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Acute Spontaneous Intracerebral Hemorrhage",
      "clinicalContext": "A 58-year-old with acute ICH and SBP 210 mmHg.",
      "decision": "Initiate Nicardipine IV infusion at 5 mg/h, titrate by 2.5 mg/h q5min to target SBP 130–140 mmHg.",
      "rationale": "Smooth arterial vasodilation prevents hematoma expansion."
    }
  ],
  "examTraps": [
    {
      "misconception": "Nicardipine increases Intracranial Pressure (ICP).",
      "reality": "FALSE. Nicardipine causes arterial vasodilation without cerebral venodilation or ICP spike.",
      "explanation": "Unlike Nitroprusside or Nitroglycerin, Nicardipine is safe in neurocritical care."
    }
  ],
  "searchAliases": [
    "nicardipine",
    "cardene",
    "iv ccb",
    "ich hypertension"
  ],
  "relatedTopicIds": [
    "intracranial-hemorrhage",
    "hypertensive-emergencies",
    "acute-ischemic-stroke"
  ]
};
