import type { MedicationChallenge } from "@/content-types/medication-challenge";

export const organFailureChallenges: MedicationChallenge[] = [
  {
    id: "of-ceftriaxone-renal",
    challengeType: "dose-change",
    difficulty: "foundation",
    system: "Pharmacokinetics",
    stem: "A 55-year-old patient with severe sepsis secondary to pneumonia develops acute kidney injury, with creatinine clearance dropping to 12 mL/min. The patient is receiving Ceftriaxone 1 gram IV daily. What dosage adjustment is required?",
    options: [
      { id: "opt-no-change", text: "No dosage adjustment is required.", isCorrect: true },
      { id: "opt-reduce-frequency", text: "Decrease frequency to every 48 hours.", isCorrect: false },
      { id: "opt-reduce-dose", text: "Decrease dose to 500 mg daily.", isCorrect: false },
      { id: "opt-discontinue", text: "Discontinue drug due to absolute contraindication in severe AKI.", isCorrect: false }
    ],
    explanation: "Ceftriaxone is unique among cephalosporins because it exhibits dual elimination (both renal and biliary/hepatic). Consequently, it does not require dosage adjustment in isolated renal failure, even in patients on dialysis.",
    whyNotAlternatives: [
      {
        optionId: "opt-reduce-frequency",
        drug: "Cefepime",
        reasoning: "Other cephalosporins like Cefepime or Cefazolin strictly require frequency extension or dose reduction in renal failure to prevent neurotoxicity."
      },
      {
        optionId: "opt-reduce-dose",
        drug: "Meropenem",
        reasoning: "Many beta-lactams and carbapenems require dose reductions. Ceftriaxone safely circumvents this via biliary excretion."
      },
      {
        optionId: "opt-discontinue",
        drug: "Ceftriaxone",
        reasoning: "Ceftriaxone is perfectly safe in renal failure and is often preferred precisely because it avoids the need for complex renal dosing."
      }
    ],
    relatedMedicationSlugs: ["ceftriaxone", "cefepime", "meropenem"],
    relatedTopicIds: ["acute-kidney-injury"],
    tags: ["antimicrobials", "renal-failure", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "of-dexmedetomidine-hepatic",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Pharmacokinetics",
    stem: "A 45-year-old patient with decompensated cirrhosis (Child-Pugh Class C) and hepatic encephalopathy is intubated for airway protection. The team decides to start a Dexmedetomidine infusion for sedation. What pharmacokinetic consideration is critical?",
    options: [
      { id: "opt-decrease-dose", text: "The clearance is significantly reduced; lower initial doses must be used.", isCorrect: true },
      { id: "opt-renal-excretion", text: "It requires intact renal function for clearance, so liver failure does not affect it.", isCorrect: false },
      { id: "opt-autoinduction", text: "It induces its own metabolism; higher doses will be needed over time.", isCorrect: false },
      { id: "opt-biliary-sludge", text: "It causes severe biliary sludging and is contraindicated.", isCorrect: false }
    ],
    explanation: "Dexmedetomidine undergoes extensive hepatic metabolism via glucuronidation and CYP2A6 hydroxylation. In patients with severe hepatic impairment, its clearance is markedly reduced, leading to profound and prolonged sedation if standard doses are used. The manufacturer recommends aggressive dose reductions in these patients.",
    whyNotAlternatives: [
      {
        optionId: "opt-renal-excretion",
        drug: "Dexmedetomidine",
        reasoning: "Dexmedetomidine is almost entirely metabolized by the liver. Renal failure does not significantly alter its pharmacokinetics."
      },
      {
        optionId: "opt-autoinduction",
        drug: "Dexmedetomidine",
        reasoning: "Dexmedetomidine does not cause autoinduction. Drugs like phenobarbital or rifampin do."
      },
      {
        optionId: "opt-biliary-sludge",
        drug: "Ceftriaxone",
        reasoning: "Biliary sludging (pseudolithiasis) is a classic adverse effect of high-dose Ceftriaxone, not Dexmedetomidine."
      }
    ],
    relatedMedicationSlugs: ["dexmedetomidine"],
    relatedTopicIds: ["hepatic-failure"],
    tags: ["sedation", "hepatic-failure", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "of-meropenem-seizures",
    challengeType: "organ-failure",
    difficulty: "advanced",
    system: "Pharmacokinetics",
    stem: "A 68-year-old patient with anuria (CrCl 5 mL/min) is receiving unadjusted Meropenem (1 gram IV every 8 hours) for intra-abdominal sepsis. The patient suddenly develops generalized tonic-clonic seizures. What is the mechanism of this toxicity?",
    options: [
      { id: "opt-gaba", text: "Carbapenem accumulation leading to GABA-A receptor antagonism.", isCorrect: true },
      { id: "opt-sodium", text: "Blockade of voltage-gated sodium channels in the cortex.", isCorrect: false },
      { id: "opt-glutamate", text: "Direct NMDA receptor agonism.", isCorrect: false },
      { id: "opt-hypoglycemia", text: "Profound drug-induced hypoglycemia.", isCorrect: false }
    ],
    explanation: "Beta-lactams, and specifically carbapenems (like imipenem and meropenem), can cause neurotoxicity and seizures when they accumulate, typically in unadjusted renal failure. The primary mechanism is competitive inhibition of the inhibitory neurotransmitter GABA at the GABA-A receptor, which lowers the seizure threshold.",
    whyNotAlternatives: [
      {
        optionId: "opt-sodium",
        drug: "Lidocaine",
        reasoning: "Local anesthetics or tricyclic antidepressants cause toxicity via sodium channel blockade (which can lead to seizures and arrhythmias), not carbapenems."
      },
      {
        optionId: "opt-glutamate",
        drug: "Ketamine",
        reasoning: "Ketamine works via NMDA receptor antagonism. Carbapenems do not directly agonize NMDA receptors to cause seizures."
      },
      {
        optionId: "opt-hypoglycemia",
        drug: "Meropenem",
        reasoning: "While fluoroquinolones (like moxifloxacin) or pentamidine can cause severe hypoglycemia leading to seizures, carbapenems do not."
      }
    ],
    relatedMedicationSlugs: ["meropenem", "ertapenem"],
    relatedTopicIds: ["acute-kidney-injury", "seizures"],
    tags: ["antimicrobials", "renal-failure", "neurotoxicity"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "of-linezolid-thrombocytopenia",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Pharmacokinetics",
    stem: "A 55-year-old patient with end-stage renal disease (ESRD) on hemodialysis requires treatment for a VRE (Vancomycin-Resistant Enterococcus) bacteremia. Linezolid is chosen. How should Linezolid be dosed in this patient?",
    options: [
      { id: "opt-no-change", text: "Standard dose (600 mg IV every 12 hours) with no renal adjustment.", isCorrect: true },
      { id: "opt-decrease-dose", text: "Decrease the dose to 600 mg IV every 24 hours.", isCorrect: false },
      { id: "opt-post-hd", text: "Give a single dose only after hemodialysis sessions.", isCorrect: false },
      { id: "opt-contraindicated", text: "Linezolid is contraindicated in ESRD due to extreme marrow toxicity.", isCorrect: false }
    ],
    explanation: "Linezolid does not require renal dosage adjustment. However, it should be given after hemodialysis because approximately 30% of the dose is removed during a 3-hour dialysis session. The interval and total daily dose remain unchanged.",
    whyNotAlternatives: [
      {
        optionId: "opt-decrease-dose",
        drug: "Vancomycin",
        reasoning: "Vancomycin and many other renally cleared antibiotics require drastic interval extension in ESRD (e.g., dosing by levels or post-dialysis only). Linezolid relies on non-renal mechanisms (oxidation) for clearance."
      },
      {
        optionId: "opt-post-hd",
        drug: "Linezolid",
        reasoning: "While the dose is timed after HD, it is still given every 12 hours (Standard Dose). It is not given strictly 'only' after HD (which implies 3 times a week dosing)."
      },
      {
        optionId: "opt-contraindicated",
        drug: "Linezolid",
        reasoning: "Linezolid is not contraindicated in ESRD, though patients in renal failure may have a slightly higher risk of its classic adverse effect: thrombocytopenia. Careful monitoring is required, but it is frequently used."
      }
    ],
    relatedMedicationSlugs: ["linezolid", "vancomycin"],
    relatedTopicIds: ["acute-kidney-injury"],
    tags: ["antimicrobials", "renal-failure", "dosing"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "of-metronidazole-hepatic",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Pharmacokinetics",
    stem: "A patient with severe alcoholic cirrhosis (Child-Pugh Class C) is prescribed Metronidazole for a severe Clostridioides difficile infection. What pharmacokinetic adjustment is required to prevent profound central nervous system toxicity?",
    options: [
      { id: "opt-reduce-dose", text: "Decrease the dose by 50% (e.g., 250 mg every 8 hours or 500 mg every 12 hours).", isCorrect: true },
      { id: "opt-no-change", text: "No dosage adjustment is required in hepatic failure.", isCorrect: false },
      { id: "opt-increase-dose", text: "Increase the dose to overcome increased volume of distribution.", isCorrect: false },
      { id: "opt-renal-adj", text: "Adjust the dose based on creatinine clearance, not hepatic function.", isCorrect: false }
    ],
    explanation: "Metronidazole is extensively metabolized by the liver. In severe hepatic impairment (Child-Pugh C), clearance is significantly delayed. Accumulation of metronidazole and its metabolites can lead to severe neurotoxicity, including peripheral neuropathy, encephalopathy, and cerebellar dysfunction. The dose must be reduced (usually by 50%).",
    whyNotAlternatives: [
      {
        optionId: "opt-no-change",
        drug: "Ceftriaxone",
        reasoning: "While ceftriaxone can be given without adjustment in isolated mild-moderate hepatic failure, metronidazole strictly requires adjustment in severe hepatic failure."
      },
      {
        optionId: "opt-increase-dose",
        drug: "Metronidazole",
        reasoning: "Increasing the dose would rapidly precipitate severe cerebellar toxicity and encephalopathy."
      },
      {
        optionId: "opt-renal-adj",
        drug: "Metronidazole",
        reasoning: "Metronidazole relies almost exclusively on the liver for clearance; renal adjustment is not standardly required for hepatic failure."
      }
    ],
    relatedMedicationSlugs: ["metronidazole"],
    relatedTopicIds: ["hepatic-failure"],
    tags: ["antimicrobials", "hepatic-failure", "neurotoxicity"],
    references: ["Guidelines and Textbooks"]
  }
];
