import type { MedicationChallenge } from "@/content-types/medication-challenge";

export const sedationAnalgesiaChallenges: MedicationChallenge[] = [
  {
    id: "sed-dex-vs-prop",
    challengeType: "best-drug",
    difficulty: "foundation",
    system: "Neurology",
    stem: "A 68-year-old intubated patient is recovering from pneumonia. They are hemodynamically stable but are experiencing hyperactive delirium, continuously pulling at their lines and tubes. The team wishes to use a sedative agent that facilitates extubation while treating the agitation. Which agent is most appropriate?",
    options: [
      { id: "opt-dexmedetomidine", text: "Dexmedetomidine", isCorrect: true },
      { id: "opt-propofol", text: "Propofol", isCorrect: false },
      { id: "opt-midazolam", text: "Midazolam", isCorrect: false },
      { id: "opt-ketamine", text: "Ketamine", isCorrect: false }
    ],
    explanation: "Dexmedetomidine is a highly selective alpha-2 agonist that provides 'cooperative sedation' and anxiolysis without respiratory depression. It has been shown in trials (like PRODEX and MIDEX) to reduce the duration of mechanical ventilation and lower the prevalence of delirium compared to benzodiazepines.",
    whyNotAlternatives: [
      {
        optionId: "opt-propofol",
        drug: "Propofol",
        reasoning: "While propofol is excellent for deep sedation, it causes respiratory depression and must be discontinued for extubation. Dexmedetomidine can be safely continued during and after extubation."
      },
      {
        optionId: "opt-midazolam",
        drug: "Midazolam",
        reasoning: "Benzodiazepines are highly deliriogenic, particularly in older ICU patients. They prolong mechanical ventilation and worsen delirium."
      },
      {
        optionId: "opt-ketamine",
        drug: "Ketamine",
        reasoning: "While ketamine is an excellent analgesic/anesthetic, it can cause emergence reactions (hallucinations/dysphoria) and is not the first-line choice solely for managing hyperactive ICU delirium in a recovering patient."
      }
    ],
    relatedMedicationSlugs: ["dexmedetomidine", "propofol", "midazolam", "ketamine"],
    relatedTopicIds: ["delirium"],
    tags: ["sedation", "delirium", "extubation"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "sed-propofol-pris",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Neurology",
    stem: "A 32-year-old trauma patient has been receiving a high-dose propofol infusion (75 mcg/kg/min) for 72 hours for severe traumatic brain injury. The patient develops sudden bradycardia, a new metabolic acidosis (lactate 6.0), hyperkalemia, and rhabdomyolysis. What is the most likely diagnosis?",
    options: [
      { id: "opt-pris", text: "Propofol Infusion Syndrome (PRIS)", isCorrect: true },
      { id: "opt-sepsis", text: "New-onset Septic Shock", isCorrect: false },
      { id: "opt-malignant-hyperthermia", text: "Malignant Hyperthermia", isCorrect: false },
      { id: "opt-adrenal", text: "Adrenal Insufficiency", isCorrect: false }
    ],
    explanation: "Propofol Infusion Syndrome (PRIS) is a rare but lethal complication associated with prolonged (>48 hours) and high-dose (>50 mcg/kg/min) propofol infusions. It is characterized by mitochondrial dysfunction leading to refractory bradycardia, severe metabolic acidosis, rhabdomyolysis, hyperlipidemia, and enlarged liver.",
    whyNotAlternatives: [
      {
        optionId: "opt-sepsis",
        drug: "Propofol",
        reasoning: "While sepsis causes lactic acidosis, it typically presents with tachycardia and fever, not the classic profound bradycardia and rhabdomyolysis seen in PRIS."
      },
      {
        optionId: "opt-malignant-hyperthermia",
        drug: "Succinylcholine",
        reasoning: "Malignant hyperthermia is triggered by volatile anesthetics and succinylcholine, not propofol. It presents with hypercarbia, rigidity, and hyperthermia."
      },
      {
        optionId: "opt-adrenal",
        drug: "Propofol",
        reasoning: "Etomidate (not propofol) is classically known to cause adrenal suppression. Adrenal insufficiency causes hypotension but does not explain severe rhabdomyolysis and lactic acidosis in this pattern."
      }
    ],
    relatedMedicationSlugs: ["propofol"],
    relatedTopicIds: ["toxicology", "shock"],
    tags: ["sedation", "toxicity", "PRIS"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "sed-succ-hyperkalemia",
    challengeType: "avoid-drug",
    difficulty: "foundation",
    system: "Neurology",
    stem: "A 45-year-old patient with a severe crush injury and rhabdomyolysis from a motor vehicle accident requires urgent intubation. Current potassium is 6.2 mEq/L. Which neuromuscular blocking agent is absolutely contraindicated in this scenario?",
    options: [
      { id: "opt-succ", text: "Succinylcholine", isCorrect: true },
      { id: "opt-roc", text: "Rocuronium", isCorrect: false },
      { id: "opt-cis", text: "Cisatracurium", isCorrect: false },
      { id: "opt-vec", text: "Vecuronium", isCorrect: false }
    ],
    explanation: "Succinylcholine is a depolarizing neuromuscular blocker that causes an efflux of potassium from skeletal muscle, predictably raising serum potassium by about 0.5 mEq/L. In patients with crush injuries, burns, denervation syndromes, or pre-existing hyperkalemia, this can cause a massive potassium release leading to lethal cardiac arrest.",
    whyNotAlternatives: [
      {
        optionId: "opt-roc",
        drug: "Rocuronium",
        reasoning: "Rocuronium is a non-depolarizing agent that does not cause potassium efflux and is the paralytic of choice for rapid sequence intubation (RSI) when succinylcholine is contraindicated."
      },
      {
        optionId: "opt-cis",
        drug: "Cisatracurium",
        reasoning: "Cisatracurium is a non-depolarizing agent and does not raise serum potassium. (It is rarely used for RSI due to its slower onset, but is safe from a potassium perspective)."
      },
      {
        optionId: "opt-vec",
        drug: "Vecuronium",
        reasoning: "Vecuronium is a non-depolarizing agent and is safe regarding potassium levels."
      }
    ],
    relatedMedicationSlugs: ["succinylcholine", "rocuronium", "cisatracurium"],
    relatedTopicIds: ["toxicology"],
    tags: ["paralytics", "hyperkalemia", "airway"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "sed-cisatracurium-renal",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Neurology",
    stem: "A 60-year-old with severe ARDS requires continuous neuromuscular blockade for ventilator synchrony. The patient has concurrent acute liver failure and acute kidney injury requiring continuous renal replacement therapy (CRRT). Which paralytic is most appropriate to run as a continuous infusion?",
    options: [
      { id: "opt-cisatracurium", text: "Cisatracurium", isCorrect: true },
      { id: "opt-rocuronium", text: "Rocuronium", isCorrect: false },
      { id: "opt-vecuronium", text: "Vecuronium", isCorrect: false },
      { id: "opt-succinylcholine", text: "Succinylcholine", isCorrect: false }
    ],
    explanation: "Cisatracurium undergoes Hofmann elimination (spontaneous degradation in plasma dependent on normal pH and temperature) and ester hydrolysis. It does not rely on hepatic or renal function for clearance. Therefore, it will not accumulate in multi-organ failure, unlike aminosteroid non-depolarizing agents.",
    whyNotAlternatives: [
      {
        optionId: "opt-rocuronium",
        drug: "Rocuronium",
        reasoning: "Rocuronium undergoes significant hepatic metabolism and some renal excretion. A continuous infusion in liver/kidney failure would cause massive accumulation and prolonged, profound paralysis after discontinuation."
      },
      {
        optionId: "opt-vecuronium",
        drug: "Vecuronium",
        reasoning: "Vecuronium is cleared by both the liver and kidneys. It produces active metabolites that accumulate in renal failure, leading to prolonged paralysis."
      },
      {
        optionId: "opt-succinylcholine",
        drug: "Succinylcholine",
        reasoning: "Succinylcholine is a depolarizing agent with a duration of 5-10 minutes. It cannot be used as a continuous infusion due to the risk of phase II block and hyperkalemia."
      }
    ],
    relatedMedicationSlugs: ["cisatracurium", "rocuronium", "succinylcholine"],
    relatedTopicIds: ["acute-respiratory-distress-syndrome", "acute-kidney-injury"],
    tags: ["paralytics", "ards", "organ-failure"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "sed-hydromorphone-renal",
    challengeType: "best-drug",
    difficulty: "advanced",
    system: "Neurology",
    stem: "A 70-year-old patient with anuric end-stage renal disease (ESRD) requires continuous intravenous analgesia for severe rib fractures and flail chest. The resident suggests using a morphine infusion. You suggest an alternative. Which opioid is preferred in severe renal failure?",
    options: [
      { id: "opt-hydromorphone", text: "Hydromorphone", isCorrect: true },
      { id: "opt-morphine", text: "Morphine", isCorrect: false },
      { id: "opt-meperidine", text: "Meperidine", isCorrect: false },
      { id: "opt-codeine", text: "Codeine", isCorrect: false }
    ],
    explanation: "Hydromorphone (and fentanyl) are preferred in severe renal failure. Morphine metabolizes into morphine-3-glucuronide (which lowers seizure threshold) and morphine-6-glucuronide (a potent respiratory depressant), both of which accumulate heavily in renal failure. Hydromorphone's metabolites lack significant clinical toxicity even if they accumulate.",
    whyNotAlternatives: [
      {
        optionId: "opt-morphine",
        drug: "Morphine",
        reasoning: "Morphine's active metabolites (M3G, M6G) accumulate in renal failure causing profound, prolonged sedation, respiratory depression, and potentially seizures."
      },
      {
        optionId: "opt-meperidine",
        drug: "Meperidine",
        reasoning: "Meperidine metabolizes to normeperidine, which heavily accumulates in renal failure and is notoriously neurotoxic (seizures). It is generally avoided in the ICU."
      },
      {
        optionId: "opt-codeine",
        drug: "Codeine",
        reasoning: "Codeine relies on CYP2D6 to metabolize into active morphine, making its effect unpredictable, and its metabolites also accumulate in renal failure."
      }
    ],
    relatedMedicationSlugs: ["hydromorphone", "fentanyl"],
    relatedTopicIds: ["acute-kidney-injury"],
    tags: ["analgesia", "renal-failure", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  }
];
