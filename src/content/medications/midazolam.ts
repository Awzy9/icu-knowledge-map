import type { Medication } from "@/content-types/medication";

export const midazolam: Medication = {
  "id": "midazolam",
  "slug": "midazolam",
  "name": "Midazolam",
  "genericName": "Midazolam Hydrochloride",
  "brandNames": [
    "Versed"
  ],
  "class": "Short-Acting Benzodiazepine",
  "category": "sedatives-analgesics",
  "subcategory": "Sedatives",
  "summary": "Short-acting water-soluble benzodiazepine for acute sedation, status epilepticus, and procedural sedation — risks severe accumulation and prolonged delirium with continuous infusion.",
  "mechanism": {
    "title": "GABA-A Receptor Allosteric Modulation",
    "steps": [
      "Binds benzodiazepine site on GABA-A receptor.",
      "Increases frequency of chloride channel opening.",
      "Hyperpolarizes neuronal membrane, inducing sedation, amnesia, and anticonvulsant activity."
    ],
    "visualDiagram": "GABA-A Receptor Binding → Increased Cl- Frequency → Neuronal Inhibition"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Sedation & seizure cessation",
    "halfLife": "1.5 to 3.5 hours (extended in renal/hepatic failure)",
    "proteinBinding": "97%",
    "metabolism": "Hepatic CYP3A4 to active 1-hydroxymidazolam glucuronide",
    "elimination": "Renal excretion of glucuronides",
    "vdNotes": "1.0–2.5 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line IV agent for Status Epilepticus.",
      "Rapid onset for procedural sedation."
    ],
    "whyIDont": [
      "High risk of ICU delirium (PADIS guidelines recommend avoiding benzodiazepines).",
      "Active metabolite (1-hydroxymidazolam) accumulates in renal failure, causing prolonged coma."
    ],
    "bedsidePearl": "Avoid continuous Midazolam infusions for routine ICU mechanical ventilation — its lipophilicity and active renal metabolite cause severe drug accumulation and prolonged ventilator dependence."
  },
  "dosing": {
    "routine": "ICU Sedation: 0.02–0.1 mg/kg/h IV (1–7 mg/h). Status Epilepticus: 0.2 mg/kg IV (or 10 mg IM).",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl < 30 mL/min",
        "dose": "Reduce continuous infusion; active metabolite accumulates."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Active 1-hydroxy metabolite accumulates in AKI/ESRD causing prolonged sedation.",
    "hepaticConsiderations": "CYP3A4 clearance impaired in liver disease."
  },
  "toxicity": {
    "majorWarnings": [
      "Respiratory depression, severe delirium, accumulation in renal failure."
    ],
    "organToxicities": [
      {
        "organ": "CNS & Respiratory",
        "description": "Apnea, prolonged coma, delirium."
      }
    ]
  },
  "interactions": [
    {
      "drug": "CYP3A4 Inhibitors (Azoles, Diltiazem)",
      "mechanism": "Inhibition of clearance",
      "consequence": "Profound prolonged sedation",
      "icuAction": "Reduce midazolam dose."
    }
  ],
  "monitoring": {
    "parameters": [
      "RASS score",
      "Respiratory rate & etCO2",
      "CAM-ICU delirium scale"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "SCCM PADIS guidelines recommend avoiding Benzodiazepines for routine ICU sedation.",
        "source": "Crit Care Med 2018;46:e825.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/30113379/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Refractory Status Epilepticus",
      "clinicalContext": "Seizure continuing despite IV Lorazepam.",
      "decision": "Administer Midazolam 0.2 mg/kg IV bolus followed by continuous infusion.",
      "rationale": "Potent GABA-mediated anticonvulsant."
    }
  ],
  "examTraps": [
    {
      "misconception": "Midazolam continuous infusion clears quickly after turning off.",
      "reality": "FALSE. Midazolam accumulates in fat and renal failure, lasting days.",
      "explanation": "Context-sensitive half-time increases dramatically after 24–48 hours of infusion."
    }
  ],
  "searchAliases": [
    "midazolam",
    "versed",
    "benzodiazepine",
    "status epilepticus midazolam"
  ],
  "relatedTopicIds": [
    "status-epilepticus",
    "icu-sedation-delirium"
  ]
};
