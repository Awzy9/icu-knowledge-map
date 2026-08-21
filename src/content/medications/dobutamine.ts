import type { Medication } from "@/content-types/medication";

export const dobutamine: Medication = {
  "id": "dobutamine",
  "slug": "dobutamine",
  "name": "Dobutamine",
  "genericName": "Dobutamine Hydrochloride",
  "brandNames": [
    "Dobutrex"
  ],
  "class": "Synthetic Inotrope / Beta-1 & Beta-2 Agonist",
  "category": "vasopressors-inotropes",
  "subcategory": "Inotropes",
  "summary": "First-line synthetic inotrope for severe cardiogenic shock and low cardiac output states — potent beta-1 myocardial contractility enhancement with mild beta-2 vasodilation.",
  "mechanism": {
    "title": "Beta-1 Cardiomyocyte & Beta-2 Vascular Agonism",
    "steps": [
      "Binds beta-1 receptors in heart → Increases cAMP → Increases intracellular Ca2+ → Enhanced contractility.",
      "Binds beta-2 receptors in vasculature → Mild arterial vasodilation (Inodilator effect)."
    ],
    "visualDiagram": "Beta-1 Agonism → Cardiac Output Increase + Beta-2 Agonism → SVR Reduction"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Target Cardiac Index > 2.2 L/min/m2 and ScvO2 > 70%",
    "halfLife": "2 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "COMT methylation",
    "elimination": "Renal metabolites",
    "vdNotes": "0.2 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "First-line inotrope for Cardiogenic Shock with low CI and elevated PCWP.",
      "Improves ScvO2 and organ perfusion."
    ],
    "whyIDont": [
      "Causes hypotension if used without vasopressors in vasoplegic states.",
      "Triggers tachyarrhythmias."
    ],
    "bedsidePearl": "Dobutamine is an INODILATOR — in septic shock with myocardial dysfunction, always combine Dobutamine with Norepinephrine to prevent severe hypotension!"
  },
  "dosing": {
    "routine": "Continuous IV infusion 2.5–20 mcg/kg/min (titrated to CI and ScvO2).",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "Improves renal perfusion secondary to CO increase.",
    "hepaticConsiderations": "No adjustment."
  },
  "toxicity": {
    "majorWarnings": [
      "Tachycardia, ventricular arrhythmias, hypotension."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Tachyarrhythmias, myocardial ischemia, hypotension."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Beta-Blockers",
      "mechanism": "Competitive antagonism",
      "consequence": "Blunted inotropic response",
      "icuAction": "Consider Milrinone instead."
    }
  ],
  "monitoring": {
    "parameters": [
      "Cardiac Index / ScvO2",
      "Heart rate & rhythm",
      "Arterial BP"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Surviving Sepsis guidelines recommend Dobutamine for septic myocardial dysfunction.",
        "source": "Crit Care Med 2021;49:e1063.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/34605781/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Cardiogenic Shock in Acute MI",
      "clinicalContext": "CI 1.6 L/min/m2, ScvO2 52%, MAP 70 mmHg.",
      "decision": "Initiate Dobutamine infusion at 5 mcg/kg/min.",
      "rationale": "Increases cardiac output and reduces ventricular filling pressures."
    }
  ],
  "examTraps": [
    {
      "misconception": "Dobutamine raises blood pressure reliably.",
      "reality": "FALSE. Dobutamine may decrease BP due to beta-2 vasodilation.",
      "explanation": "It is an inodilator; pair with Norepinephrine if vasoplegia is present."
    }
  ],
  "searchAliases": [
    "dobutamine",
    "dobutrex",
    "inotrope",
    "cardiogenic shock inotrope"
  ],
  "relatedTopicIds": [
    "cardiogenic-shock",
    "acute-heart-failure",
    "shock"
  ]
};
