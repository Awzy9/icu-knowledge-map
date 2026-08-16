import type { Flashcard } from "@/content-types";

export const intracranialHypertensionFlashcards: readonly Flashcard[] = [
  {
    "id": "icp.fc.monro-kellie-doctrine",
    "topicId": "intracranial-hypertension",
    "question": "What is the Monro-Kellie Doctrine?",
    "answer": "The rigid skull contains brain tissue (80%), blood (10%), and CSF (10%); an increase in any one component must be offset by an equal decrease in another, or ICP rises exponentially.",
    "explanation": "Once compensatory mechanisms (CSF displacement into the spinal theca, venous blood extrusion) are exhausted, the compliance curve steepens sharply.",
    "difficulty": "basic",
    "category": "Pathophysiology",
    "references": [
      "Monro A 1783; Kellie G 1824; Irwin and Rippe."
    ]
  },
  {
    "id": "icp.fc.cpp-target-threshold",
    "topicId": "intracranial-hypertension",
    "question": "What is the formula for Cerebral Perfusion Pressure (CPP), and what is the Brain Trauma Foundation target range?",
    "answer": "CPP = Mean Arterial Pressure (MAP) - Intracranial Pressure (ICP); target 60 to 70 mmHg.",
    "explanation": "CPP < 60 mmHg causes cerebral ischemia and secondary brain infarction; CPP > 70 mmHg risks hyperperfusion, ARDS, and vasogenic edema from excessive vasopressors.",
    "difficulty": "basic",
    "category": "Monitoring",
    "references": [
      "Brain Trauma Foundation Guidelines, 4th Edition. Neurosurgery 2017."
    ]
  },
  {
    "id": "icp.fc.tiered-management-algorithm",
    "topicId": "intracranial-hypertension",
    "question": "What are the Tier 1, Tier 2, and Tier 3 interventions for managing refractory elevated ICP (> 22 mmHg)?",
    "answer": "Tier 1: HOB 30°, analgesia/sedation, CSF drainage via EVD, osmotherapy (Mannitol/Hypertonic Saline); Tier 2: Neuromuscular blockade, mild hyperventilation (PaCO2 30–35), CPP augmentation; Tier 3: Decompressive craniectomy, high-dose barbiturate coma (pentobarbital), targeted hypothermia.",
    "explanation": "Seattle International Severe Traumatic Brain Injury Consensus Conference (SIBICC) algorithm organizes therapies into escalating tiers to minimize toxicity.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Hawryluk GWJ et al. SIBICC Consensus Guidelines. Intensive Care Med 2019."
    ]
  },
  {
    "id": "icp.fc.hypertonic-saline-vs-mannitol",
    "topicId": "intracranial-hypertension",
    "question": "What are the primary differences between 3% Hypertonic Saline and 20% Mannitol for osmotherapy in intracranial hypertension?",
    "answer": "3% Saline expands intravascular volume and can be used in hypotension; Mannitol causes osmotic diuresis and can precipitate hypovolemia/hypotension. Hypertonic saline is monitored via serum sodium (target < 155–160); Mannitol via serum osmolarity (target < 320 mOsm/kg).",
    "explanation": "Both create an osmotic gradient across the intact blood-brain barrier, drawing water from brain parenchyma into the intravascular space.",
    "difficulty": "intermediate",
    "category": "Pharmacology",
    "references": [
      "Ropper AH. Hyperosmolar therapy for raised intracranial pressure. NEJM 2012."
    ]
  },
  {
    "id": "icp.fc.monro-kellie",
    "topicId": "intracranial-hypertension",
    "question": "What is the Monro-Kellie doctrine and its clinical implication?",
    "answer": "The rigid skull has a fixed total volume of Brain (80%), Blood (10%), and CSF (10%). An increase in any one compartment (e.g. mass, edema) requires reciprocal reduction of another, or ICP rises exponentially.",
    "explanation": "Once compensatory CSF and venous displacement are exhausted, small volume increases cause dramatic ICP spikes and herniation.",
    "difficulty": "basic",
    "category": "Physiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hypertension"
    ]
  },
  {
    "id": "icp.fc.cpp-target",
    "topicId": "intracranial-hypertension",
    "question": "What is the formula and target for Cerebral Perfusion Pressure (CPP) in severe traumatic brain injury and intracranial hypertension?",
    "answer": "CPP = MAP - ICP. Target CPP is 60-70 mmHg (BTF guidelines).",
    "explanation": "CPP < 60 mmHg causes cerebral ischemia; CPP > 70 mmHg increases the risk of ARDS and vasogenic brain edema without improving neuro outcome.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hypertension"
    ]
  },
  {
    "id": "icp.fc.hyperosmolar-therapy",
    "topicId": "intracranial-hypertension",
    "question": "How do 3% Hypertonic Saline and 20% Mannitol compare for acute ICP reduction?",
    "answer": "Both draw water across the intact blood-brain barrier via osmotic gradient. 3% Saline expands intravascular volume without osmotic diuresis (target Serum Na 145-155 mEq/L, Osm <= 320); Mannitol causes profound osmotic diuresis and hypotension.",
    "explanation": "3% Saline is preferred in hemodynamically unstable patients or when mannitol-induced diuresis causes systemic hypotension.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in intracranial-hypertension"
    ]
  }
];
