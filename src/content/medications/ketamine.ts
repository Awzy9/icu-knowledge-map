import type { Medication } from "@/content-types/medication";

export const ketamine: Medication = {
  "id": "ketamine",
  "slug": "ketamine",
  "name": "Ketamine",
  "genericName": "Ketamine Hydrochloride",
  "brandNames": [
    "Ketalar"
  ],
  "class": "Dissociative NMDA Receptor Antagonist",
  "category": "sedatives-analgesics",
  "subcategory": "Analgesics & Sedatives",
  "summary": "Dissociative NMDA antagonist providing potent analgesia, sedation, and bronchodilation while maintaining sympathetic tone and airway reflexes — drug of choice for RSI in shock or severe asthma.",
  "mechanism": {
    "title": "Non-Competitive NMDA Receptor Antagonism & Sympathomimetic Stimulation",
    "steps": [
      "Blocks NMDA receptor channel complex, disrupting thalamocortical-limbic pathways.",
      "Induces 'dissociative anesthesia' with profound analgesia and amnesia.",
      "Inhibits neuronal catecholamine reuptake, maintaining HR and MAP.",
      "Relaxes bronchial smooth muscle via direct beta-2 and vagolytic mechanisms."
    ],
    "visualDiagram": "NMDA Blockade → Dissociative Analgesia + Catecholamine Reuptake Block → Sympathetic Tone Preservation"
  },
  "pkPd": {
    "type": "receptor-occupancy",
    "targetParameter": "Dissociative anesthesia or sub-dissociative analgesia",
    "halfLife": "2 to 3 hours",
    "proteinBinding": "20% to 50%",
    "metabolism": "Hepatic CYP2B6/CYP3A4 to active norketamine",
    "elimination": "Renal excretion",
    "vdNotes": "3.0 L/kg"
  },
  "icuReasoning": {
    "whyIChooseIt": [
      "Induction agent of choice for RSI in Septic Shock and Hemodynamic Instability.",
      "Potent bronchodilator for severe refractory Asthma exacerbation.",
      "Preserves spontaneous respiratory drive and pharyngeal airway reflexes."
    ],
    "whyIDont": [
      "Emergence delirium and vivid hallucinations.",
      "Increased myocardial oxygen consumption (caution in severe CAD).",
      "Depletion of catecholamine stores in profound end-stage shock can reveal direct myocardial depression."
    ],
    "bedsidePearl": "Ketamine is the ideal RSI induction agent for patients in shock (1.5–2.0 mg/kg IV) and severe asthma due to its sympathomimetic and bronchodilatory properties!"
  },
  "dosing": {
    "routine": "RSI Induction: 1.5–2.0 mg/kg IV (actual weight). Sub-dissociative Analgesia: 0.1–0.3 mg/kg IV. ICU Infusion: 0.15–0.5 mg/kg/h.",
    "renallyAdjusted": [
      {
        "crclRange": "Any CrCl",
        "dose": "No renal adjustment required."
      }
    ]
  },
  "organFailure": {
    "renalConsiderations": "No dose reduction needed.",
    "hepaticConsiderations": "Cleared by liver; clearance prolonged in severe cirrhosis."
  },
  "toxicity": {
    "majorWarnings": [
      "Emergence reactions, hypertension, tachycardia, laryngospasm (rare)."
    ],
    "organToxicities": [
      {
        "organ": "Psychiatric / Neuro",
        "description": "Hallucinations, delirium, elevated ICP (minimal clinical significance)."
      }
    ]
  },
  "interactions": [
    {
      "drug": "Theophylline",
      "mechanism": "Lowered seizure threshold",
      "consequence": "Seizures",
      "icuAction": "Use caution when combined."
    }
  ],
  "monitoring": {
    "parameters": [
      "BP and HR",
      "Depth of sedation",
      "Emergence phenomena"
    ]
  },
  "evidenceTraceability": {
    "claimCitations": [
      {
        "claim": "Ketamine RSI induction preserves MAP compared to Propofol in critically ill patients.",
        "source": "Jabre P et al. Lancet 2009;374:293-300.",
        "citationUrl": "https://pubmed.ncbi.nlm.nih.gov/19589581/"
      }
    ]
  },
  "patientScenarios": [
    {
      "title": "RSI in Severe Asthmatic with Hypotension",
      "clinicalContext": "Intubation required in near-fatal asthma exacerbation with BP 85/50.",
      "decision": "Administer Ketamine 2.0 mg/kg IV + Rocuronium 1.2 mg/kg IV.",
      "rationale": "Provides bronchodilation and maintains MAP during induction."
    }
  ],
  "examTraps": [
    {
      "misconception": "Ketamine is strictly contraindicated in head trauma due to severe ICP spikes.",
      "reality": "FALSE.",
      "explanation": "Modern evidence demonstrates Ketamine does not increase ICP when ventilation is controlled."
    }
  ],
  "searchAliases": [
    "ketamine",
    "ketalar",
    "dissociative anesthetic",
    "rsi induction ketamine"
  ],
  "relatedTopicIds": [
    "airway-management-rsi",
    "asthma",
    "septic-shock"
  ]
};
