import type { Medication } from "@/content-types/medication";

export const nitroglycerin: Medication = {
  "id": "nitroglycerin",
  "slug": "nitroglycerin",
  "name": "Nitroglycerin",
  "genericName": "Nitroglycerin / Glyceryl Trinitrate",
  "brandNames": [
    "Nitro-Bid",
    "Tridil"
  ],
  "class": "Venous Vasodilator & Organic Nitrate",
  "category": "antihypertensives-vasodilators",
  "subcategory": "Vasodilators",
  "summary": "Predominant venodilator for Acute Coronary Syndrome (ACS) and Acute Cardiogenic Pulmonary Edema — reduces cardiac preload and myocardial oxygen demand, but causes nitrate tolerance.",
  "mechanism": {
    "title": "Sulfhydryl-Mediated Nitric Oxide Conversion & Venodilation",
    "steps": [
      "Converted to Nitric Oxide via mitochondrial aldehyde dehydrogenase (ALDH2) and sulfhydryl groups.",
      "Stimulates guanylyl cyclase → Increases cGMP → Smooth muscle relaxation.",
      "Predominant VENODILATION at low-to-moderate doses → Reduces LVEDP and cardiac preload.",
      "Coronary arterial vasodilation improves collateral myocardial blood flow."
    ],
    "visualDiagram": "Nitrate → NO Conversion → Increased cGMP → Predominant Venodilation → Preload Reduction"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Relief of ischemic chest pain or dyspnea in cardiogenic edema",
    "halfLife": "1 to 3 minutes",
    "proteinBinding": "60%",
    "metabolism": "Rapid hepatic and intravascular red blood cell dinitrate reduction",
    "elimination": "Renal excretion of metabolites",
    "vdNotes": "3.3 L/kg (requires non-PVC glass or special tubing due to drug absorption into PVC)"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line vasodilator for Acute Coronary Syndrome (ACS) and Ischemic Chest Pain.",
      "First-line preload reducer for Acute Cardiogenic Pulmonary Edema (SCAPE).",
      "Rapid onset (1–2 min) and rapid offset (3–5 min)."
    ],
    "whyIDont": [
      "Nitrate Tolerance (tachyphylaxis) develops after 24–48 hours of continuous infusion.",
      "STRICTLY CONTRAINDICATED with PDE-5 inhibitors (Sildenafil/Tadalafil) — causes fatal hypotension.",
      "Reflex tachycardia and severe headache."
    ],
    "bedsidePearl": "Nitroglycerin is predominantly a VENODILATOR at standard doses (<100 mcg/min) — it reduces preload (LVEDP) to relieve pulmonary congestion. Infuse via glass bottles and non-PVC tubing to prevent drug adsorption!"
  },
  "dosing": {
    "routine": "ACS / Pulmonary Edema: Initiate 10–20 mcg/min IV continuous infusion; titrate by 10–20 mcg/min every 3–5 minutes to pain relief or BP target (range 10–200 mcg/min; up to 400 mcg/min in SCAPE).",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "No adjustment.",
    "hepaticConsiderations": "Rapidly metabolized; no adjustment."
  },
  "toxicity": {
    "majorWarnings": [
      "STRICT CONTRAINDICATION with PDE-5 inhibitors within 24–48h.",
      "Hypotension in Right Ventricular Infarction.",
      "Severe headache, reflex tachycardia, methemoglobinemia."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Hypotension, reflex tachycardia, syncope."
      }
    ]
  },
  "interactions": [
    {
      "drug": "PDE-5 Inhibitors (Sildenafil, Tadalafil)",
      "mechanism": "Synergistic cGMP accumulation",
      "consequence": "Refractory, fatal hypotensive collapse",
      "icuAction": "STRICTLY CONTRAINDICATED within 24h of Sildenafil or 48h of Tadalafil."
    }
  ],
  "monitoring": {
    "parameters": [
      "Arterial BP",
      "Heart rate",
      "Ischemic chest pain symptoms",
      "Non-PVC infusion tubing check"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "AHA/ACC ACS guidelines recommend IV Nitroglycerin for persistent ischemia or pulmonary edema.",
        "source": "J Am Coll Cardiol 2014;64:e139.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/25260792/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Acute Cardiogenic Pulmonary Edema (SCAPE)",
      "clinicalContext": "Severe dyspnea, SBP 190 mmHg, rales to lung apexes.",
      "decision": "Initiate high-dose Nitroglycerin IV infusion starting at 100 mcg/min + BiPAP.",
      "rationale": "Rapid venodilation reduces preload and clears pulmonary congestion."
    }
  ],
  "examTraps": [
    {
      "misconception": "Nitroglycerin is safe in Right Ventricular Infarction.",
      "reality": "FALSE. Nitroglycerin is CONTRAINDICATED in RV Infarction.",
      "explanation": "RV infarction is preload-dependent; venodilation causes severe irreversible hypotension."
    }
  ],
  "searchAliases": [
    "nitroglycerin",
    "tridil",
    "nitrate",
    "acs nitroglycerin"
  ],
  "relatedTopicIds": [
    "acute-coronary-syndrome",
    "cardiogenic-pulmonary-edema",
    "acute-heart-failure"
  ]
};
