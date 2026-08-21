import type { Medication } from "@/content-types/medication";

export const phenylephrine: Medication = {
  "id": "phenylephrine",
  "slug": "phenylephrine",
  "name": "Phenylephrine",
  "genericName": "Phenylephrine Hydrochloride",
  "brandNames": [
    "Neo-Synephrine"
  ],
  "class": "Pure Selective Alpha-1 Adrenergic Agonist",
  "category": "vasopressors-inotropes",
  "subcategory": "Vasopressors",
  "summary": "Pure alpha-1 vasoconstrictor without beta-1 inotropic effect — increases SVR and MAP with reflex bradycardia, ideal for anesthesia-induced vasodilation or tachydysrhythmias.",
  "mechanism": {
    "title": "Direct Selective Alpha-1 Vascular Agonism",
    "steps": [
      "Binds vascular alpha-1 receptors.",
      "Induces arterial vasoconstriction.",
      "Triggers reflex vagal bradycardia."
    ],
    "visualDiagram": "Alpha-1 Agonism → SVR Increase → Reflex Bradycardia"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Target MAP ≥ 65 mmHg",
    "halfLife": "5 minutes",
    "proteinBinding": "Minimal",
    "metabolism": "Hepatic MAO",
    "elimination": "Renal",
    "vdNotes": "0.4 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Hypotension with severe tachycardia.",
      "Anesthesia-induced vasodilation."
    ],
    "whyIDont": [
      "Decreases stroke volume and cardiac output.",
      "Severe splanchnic vasoconstriction."
    ],
    "bedsidePearl": "Phenylephrine increases MAP at the expense of cardiac output — avoid in septic shock with cardiac dysfunction."
  },
  "dosing": {
    "routine": "Continuous IV 0.5–5.0 mcg/kg/min (or 20–200 mcg/min). IV push 50–200 mcg.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No adjustment."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "May reduce renal blood flow if CO falls.",
    "hepaticConsiderations": "No adjustment."
  },
  "toxicity": {
    "majorWarnings": [
      "Reflex bradycardia, reduced cardiac output, tissue necrosis."
    ],
    "organToxicities": [
      {
        "organ": "Cardiovascular",
        "description": "Bradycardia, decreased CO."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Beta-Blockers",
      "mechanism": "Unopposed alpha constriction",
      "consequence": "Severe SVR spike",
      "icuAction": "Monitor BP."
    }
  ],
  "monitoring": {
    "parameters": [
      "Arterial BP",
      "Heart rate",
      "Cardiac output"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Phenylephrine causes reflex bradycardia and decreased stroke volume.",
        "source": "DailyMed 2024.",
        "citationUrl": "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "Hypotension during Atrial Fibrillation with RVR",
      "clinicalContext": "HR 165 bpm, BP 82/50.",
      "decision": "Infuse Phenylephrine.",
      "rationale": "Elevates BP while reflex bradycardia slows AV conduction."
    }
  ],
  "examTraps": [
    {
      "misconception": "Phenylephrine increases cardiac output.",
      "reality": "FALSE.",
      "explanation": "It increases SVR without beta-1 activity, often decreasing stroke volume."
    }
  ],
  "searchAliases": [
    "phenylephrine",
    "neo-synephrine",
    "pure alpha agonist"
  ],
  "relatedTopicIds": [
    "shock",
    "arrhythmias"
  ]
};
