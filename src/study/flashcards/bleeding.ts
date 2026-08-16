import type { Flashcard } from "@/content-types";

export const bleedingFlashcards: readonly Flashcard[] = [
  {
    "id": "bleeding.fc.proppr-trial-ratio",
    "topicId": "bleeding",
    "question": "What did the landmark PROPPR trial conclude regarding transfusion ratios in massive hemorrhage?",
    "answer": "A 1:1:1 ratio (PRBC : FFP : Platelets) achieved earlier hemostasis and significantly reduced death from exsanguination at 24 hours compared to 1:1:2.",
    "explanation": "Holcomb et al. (JAMA 2015) established balanced damage-control resuscitation (1:1:1) as standard of care in massive hemorrhagic shock to prevent dilutional coagulopathy.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Holcomb JB et al. Transfusion of plasma, platelets, and red cells in a 1:1:1 vs a 1:1:2 ratio (PROPPR). JAMA 2015."
    ]
  },
  {
    "id": "bleeding.fc.crash2-txa-timing",
    "topicId": "bleeding",
    "question": "What was the critical timing window for Tranexamic Acid (TXA) efficacy in the CRASH-2 trial?",
    "answer": "TXA must be given within 3 hours of injury; administration > 3 hours post-injury significantly INCREASED mortality.",
    "explanation": "Published in Lancet 2010 (CRASH-2 Collaborators), 1 g IV bolus over 10 min followed by 1 g over 8 hours reduced all-cause and bleeding mortality when given early.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "CRASH-2 Trial Collaborators. Effects of tranexamic acid on death in trauma patients with significant haemorrhage. Lancet 2010."
    ]
  },
  {
    "id": "bleeding.fc.lethal-triad-reversal",
    "topicId": "bleeding",
    "question": "What 3 physiological derangements comprise the 'Lethal Triad' in exsanguinating hemorrhage?",
    "answer": "1. Hypothermia (core temp < 35°C); 2. Acidosis (pH < 7.20); 3. Coagulopathy.",
    "explanation": "Enzymatic coagulation factors lose >50% activity at pH < 7.20 and temperatures < 34°C. Resuscitation must actively warm fluids and correct acid-base balance.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "bleeding.fc.teg-rotem-guided-transfusion",
    "topicId": "bleeding",
    "question": "How do Viscoelastic Hemostatic Assays (TEG / ROTEM) guide targeted blood component transfusion?",
    "answer": "Prolonged R-time / CT → Give Plasma / 4F-PCC; Low Alpha angle / CFT → Give Cryoprecipitate (fibrinogen); Low MA / MCF → Give Platelets; Elevated LY30 / ML → Give TXA.",
    "explanation": "Goal-directed viscoelastic resuscitation reduces unnecessary transfusions and improves survival in traumatic and surgical hemorrhage (iTACTIC trial).",
    "difficulty": "advanced",
    "category": "Monitoring",
    "references": [
      "Baksaas-Aasen K et al. iTACTIC Randomized Trial. JAMA 2021."
    ]
  },
  {
    "id": "bleeding.fc.mtp-ratio",
    "topicId": "bleeding",
    "question": "What component transfusion ratio is recommended in Massive Transfusion Protocols (MTP) for hemorrhagic shock?",
    "answer": "Balanced 1:1:1 ratio of Packed Red Blood Cells (PRBC) : Fresh Frozen Plasma (FFP) : Platelets (PROPPR trial).",
    "explanation": "Holcomb et al. (JAMA 2015) proved 1:1:1 achieved significantly faster hemostasis and reduced 24-hour exsanguination mortality compared to 1:1:2.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in bleeding"
    ]
  },
  {
    "id": "bleeding.fc.txa-crash2",
    "topicId": "bleeding",
    "question": "What did the CRASH-2 trial establish regarding Tranexamic Acid (TXA) timing in traumatic hemorrhage?",
    "answer": "TXA (1 g IV over 10 min followed by 1 g over 8 hours) reduced all-cause mortality when given within 3 hours of injury. When given after 3 hours, TXA increased mortality.",
    "explanation": "Early TXA inhibits hyperfibrinolysis before consumptive coagulopathy sets in; delayed TXA causes microvascular thrombosis.",
    "difficulty": "basic",
    "category": "Evidence",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in bleeding"
    ]
  }
];
