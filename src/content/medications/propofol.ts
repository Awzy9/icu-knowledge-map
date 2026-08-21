import type { Medication } from "@/content-types/medication";

export const propofol: Medication = {
  "id": "propofol",
  "slug": "propofol",
  "name": "Propofol",
  "genericName": "Propofol",
  "brandNames": [
    "Diprivan"
  ],
  "class": "Intravenous Sedative-Hypnotic Agent",
  "category": "sedatives-analgesics",
  "subcategory": "Sedatives",
  "summary": "Rapid-onset, short-acting IV sedative-hypnotic for mechanical ventilation sedation and ICP control — lowers cerebral metabolic demand ($CMRO_2$) but risks severe hypotension and Propofol Infusion Syndrome (PRIS).",
  "mechanism": {
    "title": "GABA-A Receptor Positive Allosteric Modulation & NMDA Inhibition",
    "steps": [
      "Binds to GABA-A receptor beta-subunits, enhancing GABA-mediated chloride channel opening.",
      "Causes neuronal membrane hyperpolarization and central nervous system depression.",
      "Decreases Cerebral Metabolic Rate of Oxygen ($CMRO_2$), Cerebral Blood Flow (CBF), and Intracranial Pressure (ICP)."
    ],
    "visualDiagram": "GABA-A Agonism → Chloride Channel Opening → Neuronal Hyperpolarization → Sedation + ICP Decrease"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "RASS score -1 to -2 for mechanical ventilation",
    "halfLife": "Initial distribution 2–4 min; Terminal elimination 3–12 hours",
    "proteinBinding": "97% to 99%",
    "metabolism": "Rapid hepatic glucuronidation and hydroxylation",
    "elimination": "88% renal excretion of metabolites",
    "vdNotes": "High lipid solubility, 2–10 L/kg (requires 10% lipid emulsion formulation = 1.1 kcal/mL)"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line recommended sedative for mechanically ventilated adults (PADIS guidelines).",
      "Rapid onset (30s) and rapid offset (10–15 min), enabling daily spontaneous awakening trials (SAT).",
      "Potent anti-seizure activity and reduction of Intracranial Pressure (ICP)."
    ],
    "whyIDont": [
      "Propofol Infusion Syndrome (PRIS): Lethal metabolic acidosis, rhabdomyolysis, hyperkalemia, Brugada-like ECG, and cardiac collapse with doses >50 mcg/kg/min for >48h.",
      "Profound systemic vasodilation and myocardial depression (severe hypotension in hypovolemia/sepsis).",
      "Provides no intrinsic analgesia (must pair with opioids for pain)."
    ],
    "bedsidePearl": "Propofol is formulated in 10% lipid emulsion — calculate 1.1 kcal/mL into total daily nutritional intake! If propofol dose exceeds 50 mcg/kg/min for >48 hours, monitor triglycerides, CPK, lactate, and arterial blood gas to screen for PRIS."
  },
  "dosing": {
    "routine": "ICU Sedation: Initiate 5 mcg/kg/min IV; titrate by 5–10 mcg/kg/min every 5–10 minutes to target RASS (-1 to -2). Maintenance 5–50 mcg/kg/min (max 50 mcg/kg/min to prevent PRIS).",
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
    "renalConsiderations": "No dose adjustment needed.",
    "hepaticConsiderations": "Extensive hepatic clearance; clearance maintained in mild-moderate cirrhosis."
  },
  "toxicity": {
    "majorWarnings": [
      "Propofol Infusion Syndrome (PRIS): Severe metabolic acidosis, rhabdomyolysis, hyperkalemia, hepatomegaly, cardiac failure.",
      "Hypertriglyceridemia and acute pancreatitis.",
      "Bacterial contamination (lipid formulation lacks preservatives; change tubing every 12 hours)."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular & Metabolic",
        "description": "PRIS, severe hypotension, hypertriglyceridemia, pancreatitis."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Opioids / Benzodiazepines",
      "mechanism": "Synergistic CNS and respiratory depression",
      "consequence": "Profound hypotension and apnea",
      "icuAction": "Reduce propofol dose when combining with opioids."
    }
  ],
  "monitoring": {
    "parameters": [
      "RASS score every 2–4 hours",
      "Arterial blood pressure continuously",
      "Serum Triglycerides after 48 hours",
      "CPK, Lactate, and ABG for PRIS screening"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "padis-guideline-sccm-2018"
    ],
    "claimCitations": [
      {
        "claim": "SCCM PADIS guidelines recommend non-benzodiazepine sedatives (Propofol or Dexmedetomidine) over benzodiazepines.",
        "source": "PADIS Guidelines. Crit Care Med 2018;46:e825.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/30113379/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "ICU Sedation and Daily Awakening Trial",
      "clinicalContext": "Intubated ARDS patient requiring light sedation (RASS -1).",
      "decision": "Infuse Propofol at 20 mcg/kg/min; perform daily SAT every morning by holding infusion.",
      "rationale": "Rapid offset permits rapid SAT assessment and reduces ventilator duration."
    }
  ],
  "examTraps": [
    {
      "misconception": "Propofol provides adequate analgesia for surgical pain.",
      "reality": "FALSE. Propofol is a sedative-hypnotic that lacks intrinsic analgesic properties.",
      "explanation": "Uncontrolled pain under propofol manifests as tachycardia and hypertension; always pair with IV opioids."
    }
  ],
  "searchAliases": [
    "propofol",
    "diprivan",
    "icu sedative",
    "pris"
  ],
  "relatedTopicIds": [
    "icu-sedation-delirium",
    "mechanical-ventilation",
    "intracranial-hypertension"
  ]
};
