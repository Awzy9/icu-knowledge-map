import type { Medication } from "@/content-types/medication";

export const fentanyl: Medication = {
  "id": "fentanyl",
  "slug": "fentanyl",
  "name": "Fentanyl",
  "genericName": "Fentanyl Citrate",
  "brandNames": [
    "Sublimaze"
  ],
  "class": "Synthetic Mu-Opioid Receptor Agonist",
  "category": "sedatives-analgesics",
  "subcategory": "Analgesics",
  "summary": "Potent synthetic mu-opioid agonist with rapid onset (1–2 min) and zero histamine release — ideal for hemodynamically unstable ICU analgesia, but causes severe accumulation with continuous infusion.",
  "mechanism": {
    "title": "Mu-Opioid Receptor Agonism",
    "steps": [
      "Binds mu-opioid receptors in brain and spinal cord.",
      "Inhibits adenylate cyclase, reduces presynaptic calcium influx, and opens potassium channels.",
      "Inhibits ascending nociceptive pain pathways and elevates pain threshold."
    ],
    "visualDiagram": "Mu-Opioid Agonism → Inhibited Presynaptic Ca2+ → Blocked Nociception → Analgesia"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Pain control (CPOT < 3 or BPS < 5)",
    "halfLife": "1.5 to 6 hours (context-sensitive half-time increases to 12+ hours after 24h infusion)",
    "proteinBinding": "80% to 85%",
    "metabolism": "Hepatic CYP3A4 to inactive norfentanyl",
    "elimination": "Renal excretion",
    "vdNotes": "4.0 L/kg (highly lipophilic)"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line opioid for analgesia in hemodynamically unstable patients (zero histamine release).",
      "Rapid onset (1–2 min) for procedural pain management."
    ],
    "whyIDont": [
      "Chest Wall Rigidity ('Wooden Chest Syndrome') with rapid IV high-dose boluses.",
      "High lipophilicity causes severe drug accumulation during continuous infusion."
    ],
    "bedsidePearl": "Fentanyl does NOT release histamine (unlike Morphine) — making it the preferred IV opioid in shock and hemodynamic instability!"
  },
  "dosing": {
    "routine": "ICU Intermittent Bolus: 25–100 mcg IV q1–2h. Continuous Infusion: 25–200 mcg/h IV.",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl < 30 mL/min",
        "dose": "Reduce dose by 25–50%; active metabolites absent, but drug clearance slowed."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "No active renal metabolites (safer than Morphine in AKI), but parent drug clearance is reduced.",
    "hepaticConsiderations": "CYP3A4 clearance reduced in severe liver failure."
  },
  "toxicity": {
    "majorWarnings": [
      "Respiratory depression, Chest Wall Rigidity with rapid bolus, opioid-induced constipation."
    ],
    "organToxicities": [
      {
        "organ": "Respiratory & GI",
        "description": "Apnea, chest wall rigidity, ileus."
      }
    ]
  },
  "interactions": [
    {
      "drug": "CYP3A4 Inhibitors",
      "mechanism": "Clearance reduction",
      "consequence": "Opioid toxicity",
      "icuAction": "Monitor sedation."
    }
  ],
  "monitoring": {
    "parameters": [
      "Pain scale (CPOT/BPS)",
      "Respiratory rate and etCO2",
      "RASS score"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "SCCM PADIS guidelines recommend Analgesia-First sedation using IV Opioids.",
        "source": "Crit Care Med 2018;46:e825.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/30113379/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Analgesia in Septic Shock",
      "clinicalContext": "Intubated septic patient experiencing severe pain.",
      "decision": "Administer Fentanyl 50 mcg IV bolus, then 50 mcg/h infusion.",
      "rationale": "Provides potent analgesia without histamine-induced vasodilation or hypotension."
    }
  ],
  "examTraps": [
    {
      "misconception": "Fentanyl causes hypotension via histamine release like Morphine.",
      "reality": "FALSE. Fentanyl does not cause histamine release.",
      "explanation": "It is hemodynamically neutral compared to Morphine."
    }
  ],
  "searchAliases": [
    "fentanyl",
    "sublimaze",
    "icu opioid",
    "analgesia"
  ],
  "relatedTopicIds": [
    "icu-sedation-delirium",
    "mechanical-ventilation"
  ]
};
