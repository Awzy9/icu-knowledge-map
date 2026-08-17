import type { Flashcard } from "@/content-types";

export const neuromuscularCriticalIllnessFlashcards: readonly Flashcard[] = [
  {
    id: "nm.fc.20-30-40-rule",
    topicId: "neuromuscular-critical-illness",
    question: "What are the parameters of the classic 20/30/40 rule in acute neuromuscular weakness?",
    answer: "Forced Vital Capacity (FVC) < 20 mL/kg; Negative Inspiratory Force (NIF/MIP) worse than -30 cmH2O; Maximum Expiratory Pressure (MEP) < 40 cmH2O.",
    explanation: "These bedside thresholds indicate impending ventilatory pump exhaustion and inability to clear secretions, prompting elective endotracheal intubation.",
    difficulty: "basic",
    category: "Diagnosis",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "nm.fc.abg-in-neuromuscular-failure",
    topicId: "neuromuscular-critical-illness",
    question: "Why is a normal arterial blood gas (ABG) dangerously falsely reassuring in acute Guillain-Barré or Myasthenia Gravis?",
    answer: "Patients maintain normal PaO2 and PaCO2 through compensatory tachypnea until terminal diaphragmatic exhaustion occurs; hypercapnia is a late, pre-arrest sign.",
    explanation: "Intubation must be driven by vital capacity trajectory, cough strength, and bulbar function, not ABG values.",
    difficulty: "basic",
    category: "Pitfalls",
    references: ["Oh's Intensive Care Manual 8th Ed."]
  },
  {
    id: "nm.fc.succinylcholine-fatal-hyperkalemia",
    topicId: "neuromuscular-critical-illness",
    question: "Why is succinylcholine strictly contraindicated for intubation in subacute GBS, myelopathy, and critical illness polyneuropathy?",
    answer: "Upregulation of extrajunctional nicotinic acetylcholine receptors across denervated muscle causes massive potassium efflux upon depolarization, leading to fatal hyperkalemic cardiac arrest.",
    explanation: "Always use a non-depolarizing neuromuscular blocker (rocuronium) for rapid sequence intubation in neuromuscular disease.",
    difficulty: "basic",
    category: "Safety",
    references: ["van Doorn PA et al. 2021 EAN/PNS GBS Guideline."]
  },
  {
    id: "nm.fc.gbs-ivig-vs-plex-evidence",
    topicId: "neuromuscular-critical-illness",
    question: "What is the evidence comparing IVIG versus Plasma Exchange in Guillain-Barré syndrome?",
    answer: "Large randomized trials (Lancet 1997) and Cochrane meta-analyses (Hughes 2014) demonstrate equivalent efficacy between IVIG (2 g/kg over 2–5 days) and Plasma Exchange (5 exchanges). Combining both confers no added benefit.",
    explanation: "IVIG is frequently preferred for ease of administration in ICU; corticosteroids alone are ineffective.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Hughes RA et al. Cochrane Database Syst Rev 2014."]
  },
  {
    id: "nm.fc.myasthenic-crisis-pyridostigmine",
    topicId: "neuromuscular-critical-illness",
    question: "Why should oral pyridostigmine (Mestinon) be held or reduced during intubated mechanical ventilation in myasthenic crisis?",
    answer: "Continuing pyridostigmine produces copious cholinergic airway secretions, induces bronchospasm, and complicates assessment by mimicking cholinergic crisis.",
    explanation: "Plasma exchange or IVIG provides disease control; oral cholinesterase inhibitors are resumed during ventilator weaning.",
    difficulty: "intermediate",
    category: "Management",
    references: ["Narayanaswami P et al. 2020 MG Consensus Update."]
  },
  {
    id: "nm.fc.cip-vs-cim-differentiation",
    topicId: "neuromuscular-critical-illness",
    question: "How do Critical Illness Polyneuropathy (CIP) and Critical Illness Myopathy (CIM) differ clinically and electrophysiologically?",
    answer: "CIP is a distal axonal sensorimotor polyneuropathy (reduced sensory and motor potentials); CIM is a primary myopathy with loss of thick myosin filaments, normal sensory potentials, and reduced muscle membrane excitability.",
    explanation: "Both present as generalized flaccid weakness (MRC score < 48) in sepsis/MOF, but CIM generally has a better functional recovery timeline.",
    difficulty: "advanced",
    category: "Physiology",
    references: ["SCCM PADIS Guidelines 2018."]
  },
  {
    id: "nm.fc.schweickert-early-mobility-trial",
    topicId: "neuromuscular-critical-illness",
    question: "What did the Schweickert landmark trial (Lancet 2009) demonstrate regarding early mobility in mechanically ventilated ICU patients?",
    answer: "Early physical and occupational therapy during daily sedation interruption significantly increased independent functional status at discharge (59% vs 35%, OR 2.7, P = 0.02) and shortened delirium and ventilation duration.",
    explanation: "Established early active mobilization as the primary evidence-based intervention to prevent and mitigate ICU-acquired weakness.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Schweickert WD et al. Lancet 2009."]
  },
  {
    id: "nm.fc.extubation-peak-cough-flow",
    topicId: "neuromuscular-critical-illness",
    question: "What peak expiratory cough flow (PECF) threshold predicts successful extubation in neuromuscular patients?",
    answer: "Peak Expiratory Cough Flow (PECF) >= 160 L/min.",
    explanation: "A cough flow < 160 L/min indicates inability to clear bronchial secretions, leading to microatelectasis and post-extubation aspiration.",
    difficulty: "intermediate",
    category: "Liberation",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "nm.fc.botulism-clinical-presentation",
    topicId: "neuromuscular-critical-illness",
    question: "What classic clinical features distinguish botulism from Guillain-Barré syndrome?",
    answer: "Botulism presents with acute descending paralysis, prominent early symmetric cranial neuropathies (fixed dilated pupils, ptosis, ophthalmoplegia), dry mouth, and clear sensorium.",
    explanation: "Botulinum toxin blocks presynaptic acetylcholine release; treated with immediate Heptavalent Botulinum Antitoxin (BAT).",
    difficulty: "intermediate",
    category: "Differential",
    references: ["Oh's Intensive Care Manual 8th Ed."]
  },
  {
    id: "nm.fc.mrc-sum-score-threshold",
    topicId: "neuromuscular-critical-illness",
    question: "What Medical Research Council (MRC) sum score defines ICU-Acquired Weakness?",
    answer: "An MRC sum score < 48 out of 60 (or an average score < 4 across 12 bilateral muscle groups).",
    explanation: "Tests 3 upper extremity and 3 lower extremity muscle groups bilaterally, each scored 0 to 5.",
    difficulty: "basic",
    category: "Diagnosis",
    references: ["SCCM PADIS Guidelines 2018."]
  }
];
