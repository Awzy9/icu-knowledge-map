import type { Question } from "@/content-types";

export const toxicologicEmergenciesQuestions: readonly Question[] = [
  {
    "id": "toxicologic-emergencies.q.1",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.overview",
    "stem": "A 22-year-old female presents with hyperthermia (39.5°C), heart rate 140 bpm, dilated pupils, dry flushed skin, urinary retention, and delirium with visual hallucinations. What toxidrome is present?",
    "options": [
      {
        "id": "a",
        "text": "Cholinergic toxidrome",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Anticholinergic toxidrome",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Opioid toxidrome",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Sedative-hypnotic toxidrome",
        "isCorrect": false
      }
    ],
    "explanation": "The combination of mydriasis, hyperthermia, tachycardia, dry skin/mucous membranes, urinary retention, and delirium is classic for anticholinergic toxicity ('blind as a bat, hot as a hare, dry as a bone, red as a beet, mad as a hatter').",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "toxicologic-emergencies.q.2",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "stem": "A 48-year-old male with massive intentional Verapamil overdose presents with HR 38 bpm, BP 68/40 mmHg, and blood glucose 280 mg/dL. In addition to calcium chloride and vasopressors, what evidence-based metabolic therapy is indicated?",
    "options": [
      {
        "id": "a",
        "text": "High-Dose Insulin Euglycemic Therapy (HIET) with regular insulin bolus (1 unit/kg) + infusion (1-10 units/kg/h) and dextrose titration",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immediate subcutaneous glucagon 0.1 mg",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "High-dose potassium chloride infusion",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Oral activated charcoal via NG tube without airway protection",
        "isCorrect": false
      }
    ],
    "explanation": "HIET provides potent positive inotropy by overcoming myocardial insulin resistance and shifting the poisoned heart from fatty acid to carbohydrate metabolism, improving survival in severe CCB/BB toxicity.",
    "difficulty": "intermediate",
    "references": [
      "ACMT Antidote Consensus Guidelines"
    ]
  },
  {
    "id": "toxicologic-emergencies.q.3",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "stem": "A 30-year-old female presents after ingesting an unknown quantity of Amitriptyline (TCA). Her ECG reveals sinus tachycardia with QRS duration of 145 ms. What is the immediate treatment of choice?",
    "options": [
      {
        "id": "a",
        "text": "IV Amiodarone 300 mg bolus",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "IV Sodium Bicarbonate (1-2 mEq/kg push boluses) targeting arterial pH 7.50-7.55",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "IV Physostigmine 2 mg",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Procainamide infusion",
        "isCorrect": false
      }
    ],
    "explanation": "Sodium Bicarbonate increases extracellular sodium and alkalinizes serum, dislodging TCA from fast cardiac sodium channels and narrowing the QRS. Physostigmine and Class Ia/Ic antiarrhythmics are strictly contraindicated.",
    "difficulty": "basic",
    "references": [
      "Oh's Intensive Care Manual 9th Edition"
    ]
  },
  {
    "id": "toxicologic-emergencies.q.4",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.extracorporeal-clearance",
    "stem": "Per EXTRIP guidelines, which of the following is an absolute indication for emergent Hemodialysis in toxic alcohol ingestion?",
    "options": [
      {
        "id": "a",
        "text": "Isolated mild euphoria with normal acid-base status",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Methanol or Ethylene glycol ingestion with severe metabolic acidosis (pH < 7.25), visual deficits, or serum level > 50 mg/dL",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Serum ethanol level of 100 mg/dL",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Normal anion gap metabolic acidosis",
        "isCorrect": false
      }
    ],
    "explanation": "Hemodialysis rapidly clears methanol/ethylene glycol and their toxic organic acid metabolites (formic acid, glycolic acid) before permanent visual loss (methanol) or renal failure (ethylene glycol) occurs.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "guideline",
        "id": "toxicology-guideline-extrip-2015",
        "relevance": "EXTRIP criteria."
      }
    ]
  },
  {
    "id": "toxicologic-emergencies.q.5",
    "topicId": "toxicologic-emergencies",
    "sectionId": "toxicologic-emergencies.antidote-matrix",
    "stem": "Why is Flumazenil contraindicated in the routine evaluation of comatose patients with suspected chronic benzodiazepine use or co-ingestion?",
    "options": [
      {
        "id": "a",
        "text": "It causes profound hypoglycemia",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "It precipitates acute withdrawal and refractory status epilepticus in tolerant individuals, and triggers fatal arrhythmias in TCA co-ingestion",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "It induces acute renal failure",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "It irreversibly blocks opioid receptors",
        "isCorrect": false
      }
    ],
    "explanation": "Flumazenil in chronic benzodiazepine users precipitates severe withdrawal seizures that are refractory to standard anticonvulsants, carrying significant mortality.",
    "difficulty": "intermediate",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  }
];
