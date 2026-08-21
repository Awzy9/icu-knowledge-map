import type { Medication } from "@/content-types/medication";

export const vasopressin: Medication = {
  "id": "vasopressin",
  "slug": "vasopressin",
  "name": "Vasopressin",
  "genericName": "Vasopressin / Anti-Diuretic Hormone (ADH)",
  "brandNames": [
    "Vasostrict"
  ],
  "class": "V1a & V2 Receptor Agonist / Non-Adrenergic Vasopressor",
  "category": "vasopressors-inotropes",
  "subcategory": "Vasopressors",
  "summary": "Non-adrenergic V1a receptor agonist used as a fixed-dose adjunct (0.03 units/min) to Norepinephrine in septic shock to restore vascular tone and reduce catecholamine requirements.",
  "mechanism": {
    "title": "V1a Vascular Smooth Muscle & V2 Renal Collecting Duct Agonism",
    "steps": [
      "Binds V1a receptors on vascular smooth muscle, activating phospholipase C and IP3 to cause direct calcium influx and vasoconstriction.",
      "Bypasses adrenergic receptor desensitization in septic vasoplegia.",
      "Binds V2 receptors in renal collecting ducts, increasing aquaporin-2 insertion and water reabsorption."
    ],
    "visualDiagram": "V1a Agonism → IP3 Calcium Release → Non-Adrenergic Vasoconstriction → SVR Increase"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Fixed 0.03 units/min infusion for SVR restoration",
    "halfLife": "10 to 20 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "Rapid liver and kidney cleavage by vasopressinases",
    "elimination": "Renal excretion",
    "vdNotes": "0.2 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line non-adrenergic vasopressor adjunct to Norepinephrine in septic shock (VANISH & VASST trials).",
      "Effective in acidotic and catecholamine-desensitized shock states.",
      "Does not increase heart rate or myocardial oxygen demand."
    ],
    "whyIDont": [
      "Splanchnic, coronary, and digital ischemia at doses >0.03–0.04 units/min.",
      "Should NOT be titrated rapidly like catecholamines (use fixed dose 0.03 units/min)."
    ],
    "bedsidePearl": "Vasopressin should be administered at a FIXED DOSE of 0.03 units/min (do not titrate!) when Norepinephrine dose reaches 0.25–0.5 mcg/kg/min to reduce norepinephrine dosage."
  },
  "dosing": {
    "routine": "Septic Shock: Fixed continuous infusion of 0.03 units/min (range 0.01–0.03 units/min; max 0.04 units/min). Diabetes Insipidus: 0.0005–0.002 units/kg/h.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required."
      }
    ],
    "hdDosing": "No dose adjustment required.",
    "crrtDosing": "No dose adjustment required."
  },
  "organFailure": {
    "renalConsiderations": "May improve renal perfusion by constricting efferent arterioles in septic shock.",
    "hepaticConsiderations": "No dose adjustment needed."
  },
  "toxicity": {
    "majorWarnings": [
      "Myocardial ischemia, mesenteric ischemia, peripheral digital ischemia at higher doses."
    ],
    "organToxicities": [
      {
        "organ": "Vascular / GI",
        "description": "Intestinal ischemia, hyponatremia (V2 effect), skin necrosis."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Norepinephrine",
      "mechanism": "Synergistic vasoconstriction",
      "consequence": "Sparing effect on catecholamine requirement",
      "icuAction": "Wean norepinephrine first before weaning vasopressin."
    }
  ],
  "monitoring": {
    "parameters": [
      "Arterial blood pressure",
      "Signs of peripheral digital ischemia or abdominal pain",
      "Serum sodium"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "sepsis-guideline-ssc-2021"
    ],
    "trialIds": [
      "vasst-trial-nejm-2008"
    ],
    "claimCitations": [
      {
        "claim": "VASST trial showed Vasopressin added to Norepinephrine reduces catecholamine requirements.",
        "source": "Russell JA et al. N Engl J Med 2008;358:877-887.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/18305265/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Refractory Septic Shock",
      "clinicalContext": "A 65-year-old on 0.4 mcg/kg/min Norepinephrine with MAP 58 mmHg.",
      "decision": "Add fixed-dose Vasopressin infusion at 0.03 units/min.",
      "rationale": "Restores V1a vascular tone and lowers norepinephrine requirements."
    }
  ],
  "examTraps": [
    {
      "misconception": "Vasopressin should be titrated up and down like Norepinephrine.",
      "reality": "FALSE. Vasopressin is given as a fixed dose of 0.03 units/min in septic shock.",
      "explanation": "Doses >0.03-0.04 units/min cause severe cardiac and mesenteric ischemia without improving survival."
    }
  ],
  "searchAliases": [
    "vasopressin",
    "vasostrict",
    "adh",
    "septic shock adjunct"
  ],
  "relatedTopicIds": [
    "septic-shock",
    "shock",
    "cardiogenic-shock"
  ]
};
