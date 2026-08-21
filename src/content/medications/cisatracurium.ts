import type { Medication } from "@/content-types/medication";

export const cisatracurium: Medication = {
  "id": "cisatracurium",
  "slug": "cisatracurium",
  "name": "Cisatracurium",
  "genericName": "Cisatracurium Besylate",
  "brandNames": [
    "Nimbex"
  ],
  "class": "Non-Depolarizing Benzylisoquinolinium NMBA",
  "category": "neuromuscular-blockers",
  "subcategory": "Non-Depolarizing NMBAs",
  "summary": "Organ-independent non-depolarizing NMBA cleared by Hofmann elimination — preferred NMBA continuous infusion for severe ARDS and renal/hepatic failure.",
  "mechanism": {
    "title": "Competitive Post-Junctional nAChR Antagonism & Hofmann Degradation",
    "steps": [
      "Competitively inhibits acetylcholine at post-junctional nicotinic receptors.",
      "Undergoes spontaneous non-enzymatic Hofmann elimination at physiologic pH and body temperature.",
      "Produces predictable flaccid paralysis without organ clearance dependence."
    ],
    "visualDiagram": "nAChR Antagonism + Spontaneous Hofmann Degradation → Organ-Independent Paralysis"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "TOF 1–2 twitches for severe ARDS",
    "halfLife": "22 to 29 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "Spontaneous Hofmann elimination (80%) at body temp/pH",
    "elimination": "Renal excretion of inactive laudanosine metabolite",
    "vdNotes": "0.15 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Preferred continuous NMBA infusion for severe ARDS (ACURASYS trial).",
      "Organ-independent Hofmann elimination: NO clearance changes in severe AKI, ESRD, or Hepatic Failure!"
    ],
    "whyIDont": [
      "Slower onset (2–3 min) — NOT ideal for emergency RSI.",
      "Laudanosine metabolite accumulation at high doses (potential CNS excitation)."
    ],
    "bedsidePearl": "Cisatracurium undergoes spontaneous Hofmann degradation at body pH and temperature — making it the safest continuous paralytic infusion in severe organ failure!"
  },
  "dosing": {
    "routine": "Severe ARDS Infusion: Loading dose 0.15–0.2 mg/kg IV ONCE, then continuous infusion 1.0–3.0 mcg/kg/min (titrated to TOF 1–2 twitches).",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Hofmann elimination is organ-independent; safe in ESRD.",
    "hepaticConsiderations": "Safe in liver failure."
  },
  "toxicity": {
    "majorWarnings": [
      "ICU-acquired weakness with prolonged use >48h, laudanosine accumulation."
    ],
    "organToxicities": [
      {
        "organ": "Neuromuscular",
        "description": "Critical illness myopathy."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Corticosteroids",
      "mechanism": "Synergistic muscle toxicity",
      "consequence": "Increased ICU-acquired weakness risk",
      "icuAction": "Limit NMBA duration to <48h."
    }
  ],
  "monitoring": {
    "parameters": [
      "Train-of-Four (TOF)",
      "Ventilator dyssynchrony",
      "CPK for myopathy"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "ards-guideline-ats-idsa"
    ],
    "trialIds": [
      "acurasys-trial-nejm-2010"
    ],
    "claimCitations": [
      {
        "claim": "ACURASYS trial showed 48-hour Cisatracurium infusion improves survival in severe ARDS.",
        "source": "Papazian L et al. N Engl J Med 2010;363:1107-1116.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/20843245/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Severe ARDS with Severe Patient-Ventilator Dyssynchrony",
      "clinicalContext": "P/F ratio 88 mmHg on FiO2 1.0 and PEEP 14 cmH2O with severe breath stacking on CRRT.",
      "decision": "Initiate Cisatracurium 0.2 mg/kg IV load, then 2 mcg/kg/min infusion for 48 hours.",
      "rationale": "Eliminates dyssynchrony, reduces transpulmonary pressure spikes, and requires no adjustment for CRRT."
    }
  ],
  "examTraps": [
    {
      "misconception": "Cisatracurium dose must be decreased in renal failure.",
      "reality": "FALSE. Cisatracurium degrades spontaneously via Hofmann elimination.",
      "explanation": "Organ failure does not alter its primary degradation pathway."
    }
  ],
  "searchAliases": [
    "cisatracurium",
    "nimbex",
    "hofmann elimination",
    "ards paralytic"
  ],
  "relatedTopicIds": [
    "ards",
    "mechanical-ventilation",
    "neuromuscular-critical-illness"
  ]
};
