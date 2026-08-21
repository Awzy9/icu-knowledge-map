import type { Medication } from "@/content-types/medication";

export const rocuronium: Medication = {
  "id": "rocuronium",
  "slug": "rocuronium",
  "name": "Rocuronium",
  "genericName": "Rocuronium Bromide",
  "brandNames": [
    "Zemuron"
  ],
  "class": "Non-Depolarizing Aminosteroid Neuromuscular Blocking Agent",
  "category": "neuromuscular-blockers",
  "subcategory": "Non-Depolarizing NMBAs",
  "summary": "First-line non-depolarizing NMBA for ICU RSI (1.2 mg/kg) and ARDS paralysis — rapid onset (60s), safe in hyperkalemia and denervation, with immediate reversal via Sugammadex.",
  "mechanism": {
    "title": "Competitive Post-Junctional Nicotinic ACh Receptor Antagonism",
    "steps": [
      "Competitively antagonizes acetylcholine binding at post-junctional nicotinic (nAChR) receptors.",
      "Prevents end-plate depolarization, resulting in flaccid skeletal muscle paralysis.",
      "Reversible by Acetylcholinesterase inhibitors (Neostigmine) or specific chelating agent (Sugammadex)."
    ],
    "visualDiagram": "Rocuronium → Competitive nAChR Antagonism → Blocked Depolarization → Flaccid Paralysis"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Train-of-Four (TOF) 0/4 or 1–2 twitches",
    "halfLife": "1.4 to 2.4 hours",
    "proteinBinding": "30%",
    "metabolism": "Hepatic uptake and biliary excretion (70%); minor renal clearance (30%)",
    "elimination": "Biliary/fecal excretion (70%) and renal excretion (30%)",
    "vdNotes": "0.25 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line NMBA for emergency ICU RSI when Succinylcholine is contraindicated (safe in hyperkalemia, burns, denervation).",
      "High-dose RSI (1.2 mg/kg IV) provides intubating conditions in 60 seconds.",
      "Immediate full reversal available using Sugammadex 16 mg/kg IV."
    ],
    "whyIDont": [
      "Prolonged duration of action (45–90 minutes) compared to Succinylcholine (5–10 min).",
      "Accumulates in renal and hepatic impairment.",
      "Risk of ICU-Acquired Weakness with continuous infusion >48h."
    ],
    "bedsidePearl": "Rocuronium 1.2 mg/kg IV is the NMBA of choice for RSI in patients with hyperkalemia, burns >24h, stroke >72h, or neuromuscular disease. Sugammadex 16 mg/kg instantly reverses rocuronium within 2 minutes."
  },
  "dosing": {
    "routine": "Rapid Sequence Intubation (RSI): 1.2 mg/kg IV based on Ideal Body Weight (onset 60s, duration 45–90 min). Maintenance: 0.1–0.2 mg/kg IV boluses or 0.3–0.6 mg/kg/h continuous infusion.",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl < 30 mL/min",
        "dose": "Reduce continuous infusion rate; duration of action prolonged."
      }
    ],
    "hdDosing": "Use standard RSI bolus; maintenance duration prolonged.",
    "crrtDosing": "Titrate continuous infusion to TOF 1–2 twitches."
  },
  "organFailure": {
    "renalConsiderations": "30% renal clearance; clearance decreased in renal failure causing prolonged paralysis.",
    "hepaticConsiderations": "70% hepatic clearance; duration prolonged in cirrhosis."
  },
  "toxicity": {
    "majorWarnings": [
      "Prolonged paralysis and ICU-acquired weakness (CIP/CIM).",
      "Anaphylaxis (rare)."
    ],
    "organToxicities": [
      {
        "organ": "Neuromuscular",
        "description": "Critical illness myopathy, prolonged paralysis."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Aminoglycosides / Corticosteroids",
      "mechanism": "Potentiation of neuromuscular block and myopathy",
      "consequence": "Severe weakness",
      "icuAction": "Monitor TOF and use lowest effective dose."
    }
  ],
  "monitoring": {
    "parameters": [
      "Train-of-Four (TOF) stimulation continuously",
      "Airway pressure and ventilator compliance"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "airway-rsi-guideline-asa"
    ],
    "trialIds": [
      "acurasys-trial-nejm-2010",
      "rose-trial-nejm-2019"
    ],
    "claimCitations": [
      {
        "claim": "Rocuronium 1.2 mg/kg provides intubation conditions non-inferior to Succinylcholine.",
        "source": "Cochrane Database Syst Rev 2015;10:CD002788.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/26512866/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "RSI in Hyperkalemic Renal Failure",
      "clinicalContext": "Intubation required in ESRD patient with K+ 6.8 mEq/L.",
      "decision": "Administer Rocuronium 1.2 mg/kg IV + Ketamine 1.5 mg/kg IV.",
      "rationale": "Succinylcholine is contraindicated in hyperkalemia due to potassium release; rocuronium does not cause extracellular potassium release."
    }
  ],
  "examTraps": [
    {
      "misconception": "Rocuronium cannot be reversed rapidly if airway is lost.",
      "reality": "FALSE. Sugammadex 16 mg/kg IV completely reverses 1.2 mg/kg rocuronium within 2 minutes.",
      "explanation": "Sugammadex encapsulating rocuronium reverses paralysis faster than spontaneous recovery from succinylcholine."
    }
  ],
  "searchAliases": [
    "rocuronium",
    "zemuron",
    "non-depolarizing paralytic",
    "sugammadex reversal"
  ],
  "relatedTopicIds": [
    "airway-management-rsi",
    "neuromuscular-critical-illness",
    "ards"
  ]
};
