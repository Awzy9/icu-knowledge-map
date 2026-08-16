import type { Flashcard } from "@/content-types";

export const toxicologicEmergenciesFlashcards: readonly Flashcard[] = [
  {
    "id": "toxicologic-emergencies.fc.1",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.overview",
    "question": "What physical signs distinguish the Anticholinergic toxidrome from the Sympathomimetic toxidrome?",
    "answer": "Skin moisture: Anticholinergic toxidrome features DRY skin and absent bowel sounds; Sympathomimetic features DIAPHORETIC (wet) skin and active bowel sounds.",
    "explanation": "Both present with mydriasis, hyperthermia, tachycardia, and agitation, but sweat glands are muscarinic (blocked in anticholinergic poisoning).",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.2",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "question": "What is the mechanism and protocol for High-Dose Insulin Euglycemic Therapy (HIET) in severe CCB/beta-blocker overdose?",
    "answer": "Regular insulin 1 unit/kg IV bolus + 1-10 units/kg/h infusion with D10W/D50W titration and K+ repletion; acts as a potent inotrope by shifting stressed myocardium from fatty acid to glucose metabolism.",
    "explanation": "Provides superior hemodynamic stability and lower mortality compared to pure vasopressor escalation.",
    "difficulty": "advanced",
    "references": [
      "ACMT Consensus Guidelines"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.3",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "question": "What is the indication and mechanism of Sodium Bicarbonate in Tricyclic Antidepressant (TCA) toxicity?",
    "answer": "Indicated for QRS prolongation > 100 ms or ventricular arrhythmias. Provides sodium load and alkalinizes serum (pH 7.50-7.55), outcompeting TCA binding to myocardial fast sodium channels.",
    "explanation": "Dose: 1-2 mEq/kg IV push boluses repeated until QRS narrows.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.4",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.extracorporeal-clearance",
    "question": "What are the primary indications for emergent Hemodialysis in toxic alcohol poisoning per EXTRIP guidelines?",
    "answer": "Methanol or Ethylene glycol poisoning with severe metabolic acidosis (pH < 7.25), visual deficit (methanol), acute renal failure (ethylene glycol), or serum level > 50 mg/dL.",
    "explanation": "Hemodialysis rapidly clears the parent alcohol and toxic organic acid metabolites (formic acid, glycolic/oxalic acid).",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "toxicology-guideline-extrip-2015",
        "relevance": "EXTRIP toxic alcohol recommendations."
      }
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.5",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "question": "What is the mechanism of 20% Intravenous Lipid Emulsion (ILE) in local anesthetic and cardiotoxic drug toxicity?",
    "answer": "Acts as a 'lipid sink' extracting lipophilic drugs (Bupivacaine, Verapamil, Propranolol) from target tissues into intravascular emulsion, and provides myocardial metabolic substrate.",
    "explanation": "Dose: 1.5 mL/kg IV bolus over 1 min, followed by 0.25 mL/kg/min infusion.",
    "difficulty": "intermediate",
    "references": [
      "Hoegberg LCG et al. Clin Toxicol 2016"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.6",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "question": "What is the antidote of choice for smoke-inhalation cyanide toxicity and its mechanism?",
    "answer": "Hydroxocobalamin (5 g IV infusion); binds cyanide ions to form non-toxic Cyanocobalamin (Vitamin B12), which is excreted in urine.",
    "explanation": "Does not induce methemoglobinemia, making it safe in concomitant carbon monoxide exposure.",
    "difficulty": "basic",
    "references": [
      "ACMT Guidelines"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.7",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.extracorporeal-clearance",
    "question": "At what serum salicylate level is emergent Hemodialysis indicated in acute aspirin toxicity?",
    "answer": "Acute serum salicylate level > 100 mg/dL (7.2 mmol/L), or level > 80 mg/dL with severe acidemia (pH < 7.20), altered mental status, or non-cardiogenic pulmonary edema.",
    "explanation": "Salicylates uncouple oxidative phosphorylation, causing life-threatening hyperthermia and cerebral neuroglycopenia.",
    "difficulty": "intermediate",
    "references": [
      "Juurlink DN et al. EXTRIP Salicylate Guidelines"
    ]
  },
  {
    "id": "toxicologic-emergencies.fc.8",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "question": "What is the role of N-Acetylcysteine (NAC) in Acetaminophen poisoning?",
    "answer": "Replenishes hepatic glutathione stores and acts as a direct glutathione substitute, binding and detoxifying the hepatotoxic metabolite NAPQI.",
    "explanation": "Virtually 100% hepatoprotective if administered within 8 hours of acute ingestion.",
    "difficulty": "basic",
    "references": [
      "Rumack-Matthew Nomogram / ACMT Guidelines"
    ]
  }
];
