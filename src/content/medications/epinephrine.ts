import type { Medication } from "@/content-types/medication";

export const epinephrine: Medication = {
  "id": "epinephrine",
  "slug": "epinephrine",
  "name": "Epinephrine",
  "genericName": "Epinephrine",
  "brandNames": [
    "Adrenalin"
  ],
  "class": "Potent Alpha-1, Beta-1, and Beta-2 Adrenergic Agonist",
  "category": "vasopressors-inotropes",
  "subcategory": "Vasopressors",
  "summary": "Potent direct alpha/beta agonist for anaphylactic shock, cardiac arrest, post-cardiac arrest shock, and refractory septic shock — powerful inotrope and bronchodilator with transient hyperlactatemia.",
  "mechanism": {
    "title": "Pan-Adrenergic Receptor Agonism",
    "steps": [
      "Low dose (0.01–0.05 mcg/kg/min): Predominant Beta-1 and Beta-2 agonism → Increased CO, HR, and bronchodilation.",
      "High dose (>0.1 mcg/kg/min): Alpha-1 agonism predominates → Potent systemic vasoconstriction and MAP rise.",
      "Beta-2 hepatic stimulation accelerates glycolysis, causing transient type B hyperlactatemia."
    ],
    "visualDiagram": "Beta-1/Beta-2 Agonism (Low Dose) → Alpha-1 Agonism (High Dose) → Inotropy + Vasoconstriction"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "MAP ≥ 65 mmHg and ROSC in cardiac arrest",
    "halfLife": "1 to 2 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "Hepatic MAO and COMT metabolism",
    "elimination": "Renal urine excretion of metabolites (VMA)",
    "vdNotes": "Intravascular distribution"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line mandatory Drug of Choice for Anaphylactic Shock.",
      "First-line vasopressor/inotrope in Cardiac Arrest (ACLS 1 mg IV q3–5 min).",
      "Second-line add-on to Norepinephrine in refractory septic shock."
    ],
    "whyIDont": [
      "Profound tachyarrhythmias and myocardial ischemia.",
      "Causes non-hypoxic Type B hyperlactatemia (can obscure sepsis clearance).",
      "Splanchnic vasoconstriction."
    ],
    "bedsidePearl": "Epinephrine stimulates hepatic beta-2 receptors causing glycogenolysis and transient hyperlactatemia — do not confuse epinephrine-induced Type B hyperlactatemia with worsening tissue hypoperfusion!"
  },
  "dosing": {
    "routine": "Septic Shock / Inotropic Support: 0.01–0.5 mcg/kg/min IV continuous infusion. Anaphylaxis: 0.3–0.5 mg IM (1:1,000). Cardiac Arrest: 1 mg IV q3–5 min (1:10,000).",
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
    "renalConsiderations": "No dose reduction needed; monitor urine output.",
    "hepaticConsiderations": "Rapidly cleared."
  },
  "toxicity": {
    "majorWarnings": [
      "Tachyarrhythmias, myocardial ischemia, extravasation necrosis, severe hypertension."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Ventricular tachycardia, angina, hypertension, myocardial necrosis."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Non-selective Beta-Blockers",
      "mechanism": "Unopposed alpha-1 stimulation",
      "consequence": "Severe hypertension and bradycardia",
      "icuAction": "Use alternative inotrope."
    }
  ],
  "monitoring": {
    "parameters": [
      "Continuous arterial blood pressure",
      "Heart rate and ECG rhythm",
      "Serum lactate and blood glucose"
    ]
  },
  "evidenceTraceability": {
    "guidelineIds": [
      "sepsis-guideline-ssc-2021",
      "acls-guideline-aha-2020"
    ],
    "claimCitations": [
      {
        "claim": "SSC 2021 guidelines recommend Epinephrine as second-line agent added to Norepinephrine.",
        "source": "Surviving Sepsis Campaign 2021. Crit Care Med 2021;49:e1063.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/34605781/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Anaphylactic Shock with Airway Edema",
      "clinicalContext": "Severe bronchospasm and hypotension after penicillin administration.",
      "decision": "Administer Epinephrine 0.3 mg IM immediately in mid-outer thigh.",
      "rationale": "Reverses bronchospasm via beta-2 and corrects vasodilation via alpha-1."
    }
  ],
  "examTraps": [
    {
      "misconception": "A rise in lactate after starting epinephrine means the patient's septic shock is worsening.",
      "reality": "FALSE. Epinephrine stimulates hepatic beta-2 receptors causing non-hypoxic Type B hyperlactatemia.",
      "explanation": "Correlate lactate with urine output, ScvO2, and MAP."
    }
  ],
  "searchAliases": [
    "epinephrine",
    "adrenalin",
    "cardiac arrest epinephrine",
    "anaphylaxis epinephrine"
  ],
  "relatedTopicIds": [
    "cardiac-arrest-post-arrest",
    "septic-shock",
    "shock"
  ]
};
