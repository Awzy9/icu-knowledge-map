import type { Medication } from "@/content-types/medication";

export const labetalol: Medication = {
  "id": "labetalol",
  "slug": "labetalol",
  "name": "Labetalol",
  "genericName": "Labetalol Hydrochloride",
  "brandNames": [
    "Trandate"
  ],
  "class": "Combined Alpha-1 and Non-Selective Beta Blocker",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Beta-Blockers",
  "summary": "Combined alpha-1 and beta-1/beta-2 blocker (1:7 alpha:beta ratio IV) for hypertensive emergencies, stroke, and aortic dissection — lowers BP and HR simultaneously.",
  "mechanism": {
    "title": "Competitive Alpha-1 & Beta-1/Beta-2 Adrenergic Receptor Blockade",
    "steps": [
      "Blocks vascular alpha-1 receptors → Arterial vasodilation.",
      "Blocks cardiac beta-1 receptors → Decreased HR and contractility.",
      "Blocks beta-2 receptors → Minimal bronchial effect at low doses."
    ],
    "visualDiagram": "Alpha-1 Block (Vasodilation) + Beta-1 Block (HR/Contractility Decrease)"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "BP and HR reduction",
    "halfLife": "5.5 hours",
    "proteinBinding": "50%",
    "metabolism": "Extensive hepatic glucuronidation",
    "elimination": "Renal excretion",
    "vdNotes": "3.0–9.0 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Lowers both Blood Pressure and Heart Rate simultaneously.",
      "Ideal for Acute Ischemic Stroke (pre-thrombolysis SBP < 185 mmHg) and Aortic Dissection."
    ],
    "whyIDont": [
      "Contraindicated in severe asthma/COPD, severe bradycardia, or heart failure.",
      "Longer half-life makes rapid titration difficult."
    ],
    "bedsidePearl": "Labetalol lowers both HR and BP — do not use if the patient is already bradycardic (HR < 60 bpm) or in acute heart failure!"
  },
  "dosing": {
    "routine": "IV Bolus: 10–20 mg IV push over 2 minutes; repeat 20–80 mg IV q10min (max cumulative bolus 300 mg). Continuous Infusion: 0.5–2.0 mg/min.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "No adjustment.",
    "hepaticConsiderations": "Bioavailability increases in liver failure; titrate carefully."
  },
  "toxicity": {
    "majorWarnings": [
      "Severe bradycardia, bronchospasm, heart block, acute heart failure exacerbation."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular & Pulmonary",
        "description": "Bradycardia, AV block, bronchospasm."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Diltiazem / Verapamil",
      "mechanism": "Additive AV node suppression",
      "consequence": "Severe bradycardia/block",
      "icuAction": "Avoid."
    }
  ],
  "monitoring": {
    "parameters": [
      "Arterial BP",
      "Heart rate",
      "Bronchospasm signs"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "AHA Stroke guidelines recommend Labetalol for SBP > 185 mmHg prior to alteplase.",
        "source": "Stroke 2019;50:e344.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/31662037/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Acute Ischemic Stroke Hypertensive Management",
      "clinicalContext": "Candidate for IV tPA with BP 198/110 mmHg.",
      "decision": "Administer Labetalol 20 mg IV push over 2 min.",
      "rationale": "Lowers SBP below 185 mmHg to allow safe thrombolysis."
    }
  ],
  "examTraps": [
    {
      "misconception": "Labetalol is a pure beta blocker.",
      "reality": "FALSE. Labetalol has alpha-1 vasodilatory activity (1:7 IV ratio).",
      "explanation": "It causes vasodilation in addition to slowing heart rate."
    }
  ],
  "searchAliases": [
    "labetalol",
    "trandate",
    "alpha beta blocker",
    "stroke hypertension"
  ],
  "relatedTopicIds": [
    "acute-ischemic-stroke",
    "hypertensive-emergencies",
    "acute-aortic-syndromes"
  ]
};
