import type { Medication } from "@/content-types/medication";

export const hydromorphone: Medication = {
  "id": "hydromorphone",
  "slug": "hydromorphone",
  "name": "Hydromorphone",
  "genericName": "Hydromorphone Hydrochloride",
  "brandNames": [
    "Dilaudid"
  ],
  "class": "Semi-Synthetic Mu-Opioid Receptor Agonist",
  "category": "sedatives-analgesics",
  "subcategory": "Analgesics",
  "summary": "Potent semi-synthetic opioid (5–7x potency of Morphine) for moderate-to-severe ICU pain — safer in renal impairment than Morphine due to non-toxic metabolite profile.",
  "mechanism": {
    "title": "Central Mu-Opioid Receptor Agonism",
    "steps": [
      "Binds mu-opioid receptors in CNS.",
      "Hyperpolarizes interneurons and inhibits nociceptive neurotransmitter release.",
      "Provides potent analgesia and sedation."
    ],
    "visualDiagram": "Mu-Opioid Agonism → Pain Pathway Inhibition → Analgesia"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Pain control (CPOT < 3)",
    "halfLife": "2.5 to 3.0 hours",
    "proteinBinding": "20%",
    "metabolism": "Hepatic glucuronidation to hydromorphone-3-glucuronide (H3G)",
    "elimination": "Renal excretion",
    "vdNotes": "4.0 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Potent alternative to Morphine with lower risk of neurotoxic metabolite accumulation in renal failure.",
      "5 to 7 times more potent than Morphine mg-for-mg."
    ],
    "whyIDont": [
      "Dosing errors due to potency confusion with Morphine.",
      "Respiratory depression and sedation."
    ],
    "bedsidePearl": "Hydromorphone is 5 to 7 times MORE POTENT than Morphine! 1 mg IV Hydromorphone equals ~7 mg IV Morphine — verify doses carefully to avoid fatal overdose."
  },
  "dosing": {
    "routine": "IV Bolus: 0.2–1.0 mg IV every 2 to 3 hours as needed. Continuous Infusion: 0.2–2.0 mg/h IV.",
    "renallyAdjusted": [
      {
        "crclRange": "CrCl < 30 mL/min",
        "dose": "Reduce dose by 50% and extend interval; H3G metabolite can accumulate."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Safer than Morphine (M6G accumulation), but H3G metabolite can accumulate at high doses in ESRD.",
    "hepaticConsiderations": "Glucuronidation clearance reduced in severe cirrhosis."
  },
  "toxicity": {
    "majorWarnings": [
      "Fatal overdose from potency confusion with Morphine, respiratory depression."
    ],
    "organToxicities": [
      {
        "organ": "CNS & Respiratory",
        "description": "Apnea, sedation, CNS excitation at extreme H3G levels."
      }
    ]
  },
  "interactions": [
    {
      "drug": "CNS Depressants",
      "mechanism": "Additive depression",
      "consequence": "Profound coma/apnea",
      "icuAction": "Monitor."
    }
  ],
  "monitoring": {
    "parameters": [
      "CPOT/BPS pain score",
      "Respiratory rate",
      "Sedation level"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Hydromorphone is 5-7 times more potent than Morphine.",
        "source": "DailyMed 2024.",
        "citationUrl": "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Severe Pain in Patient with CKD Stage 4",
      "clinicalContext": "Post-operative ICU pain in patient with CrCl 22 mL/min.",
      "decision": "Administer Hydromorphone 0.5 mg IV q4h prn.",
      "rationale": "Avoids morphine-6-glucuronide neurotoxicity while providing effective pain relief."
    }
  ],
  "examTraps": [
    {
      "misconception": "Hydromorphone and Morphine can be dosed 1:1 mg for mg.",
      "reality": "FALSE. Hydromorphone is 5-7x more potent than Morphine.",
      "explanation": "Giving 10 mg of Hydromorphone believing it is equal to 10 mg of Morphine causes fatal overdose."
    }
  ],
  "searchAliases": [
    "hydromorphone",
    "dilaudid",
    "opioid",
    "dilaudid dosing"
  ],
  "relatedTopicIds": [
    "icu-sedation-delirium"
  ]
};
