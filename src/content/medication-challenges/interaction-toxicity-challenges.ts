import type { MedicationChallenge } from "@/content-types/medication-challenge";

export const interactionToxicityChallenges: MedicationChallenge[] = [
  {
    id: "tox-daptomycin-statin",
    challengeType: "interaction",
    difficulty: "foundation",
    system: "Toxicology",
    stem: "A 60-year-old patient with hyperlipidemia (on high-dose atorvastatin) is admitted with an MRSA bloodstream infection. The team decides to start Daptomycin. What important medication management step must be taken to prevent a severe drug-drug interaction?",
    options: [
      { id: "opt-hold-statin", text: "Temporarily hold the atorvastatin during Daptomycin therapy.", isCorrect: true },
      { id: "opt-increase-statin", text: "Increase the statin dose to prevent inflammation.", isCorrect: false },
      { id: "opt-renal-adj", text: "Administer the drugs 12 hours apart to avoid absorption issues.", isCorrect: false },
      { id: "opt-no-change", text: "No change is necessary; there is no interaction.", isCorrect: false }
    ],
    explanation: "Both Daptomycin and HMG-CoA reductase inhibitors (statins) carry a significant risk of causing skeletal muscle toxicity (myopathy and rhabdomyolysis). Co-administration significantly increases this risk. The standard of care is to temporarily hold the statin while the patient completes the Daptomycin course, and to monitor creatine kinase (CK) levels weekly.",
    whyNotAlternatives: [
      {
        optionId: "opt-increase-statin",
        drug: "Daptomycin",
        reasoning: "Increasing the statin dose would virtually guarantee severe rhabdomyolysis and subsequent acute kidney injury."
      },
      {
        optionId: "opt-renal-adj",
        drug: "Daptomycin",
        reasoning: "The interaction is a pharmacodynamic synergism for toxicity (muscle breakdown), not an enteral absorption issue (like fluoroquinolones and calcium/iron)."
      },
      {
        optionId: "opt-no-change",
        drug: "Daptomycin",
        reasoning: "Failing to hold the statin has led to well-documented cases of fulminant rhabdomyolysis."
      }
    ],
    relatedMedicationSlugs: ["daptomycin"],
    relatedTopicIds: ["toxicology", "acute-kidney-injury"],
    tags: ["antimicrobials", "drug-interaction", "rhabdomyolysis"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "tox-tmpsmx-hyperkalemia",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Toxicology",
    stem: "A 45-year-old patient with an absolute CD4 count of 45 cells/mm³ is admitted with severe Pneumocystis jirovecii pneumonia (PJP) and started on high-dose IV Trimethoprim-Sulfamethoxazole (TMP-SMX). On day 4, the patient develops profound hyperkalemia (K+ 6.8 mEq/L). By what mechanism does TMP-SMX cause this?",
    options: [
      { id: "opt-trimethoprim", text: "Trimethoprim blocks the epithelial sodium channel (ENaC) in the distal tubule.", isCorrect: true },
      { id: "opt-sulfamethoxazole", text: "Sulfamethoxazole causes acute interstitial nephritis leading to renal failure.", isCorrect: false },
      { id: "opt-aldosterone", text: "It directly inhibits aldosterone synthase in the adrenal gland.", isCorrect: false },
      { id: "opt-potassium-shift", text: "It causes an intracellular to extracellular shift of potassium via acidosis.", isCorrect: false }
    ],
    explanation: "Trimethoprim acts structurally and functionally like the potassium-sparing diuretic amiloride. It reversibly blocks the epithelial sodium channel (ENaC) in the distal convoluted tubule and collecting duct, impairing sodium reabsorption and thereby preventing the coupled secretion of potassium. This leads to dose-dependent hyperkalemia, particularly at the high doses used for PJP.",
    whyNotAlternatives: [
      {
        optionId: "opt-sulfamethoxazole",
        drug: "TMP-SMX",
        reasoning: "While sulfonamides can cause AIN, the hyperkalemia of TMP-SMX is a direct, predictable pharmacologic effect of the trimethoprim component independent of renal failure."
      },
      {
        optionId: "opt-aldosterone",
        drug: "Etomidate",
        reasoning: "Drugs like ketoconazole or etomidate inhibit adrenal enzymes. Trimethoprim works at the kidney tubule."
      },
      {
        optionId: "opt-potassium-shift",
        drug: "Succinylcholine",
        reasoning: "Succinylcholine causes K+ shifts. Trimethoprim causes failure of K+ excretion."
      }
    ],
    relatedMedicationSlugs: ["tmp-smx"],
    relatedTopicIds: ["toxicology", "pneumonia"],
    tags: ["antimicrobials", "hyperkalemia", "pharmacodynamics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "tox-midazolam-cyp",
    challengeType: "interaction",
    difficulty: "advanced",
    system: "Toxicology",
    stem: "A 55-year-old intubated patient is receiving a Midazolam infusion for sedation. The patient develops a new atrial fibrillation with rapid ventricular response, and a Diltiazem infusion is initiated. Over the next 24 hours, the patient becomes profoundly comatose and fails to wake up during a sedation vacation. What interaction explains this?",
    options: [
      { id: "opt-cyp3a4", text: "Diltiazem inhibits CYP3A4, severely prolonging midazolam clearance.", isCorrect: true },
      { id: "opt-pgp", text: "Diltiazem induces P-glycoprotein, increasing midazolam brain penetration.", isCorrect: false },
      { id: "opt-cyp2d6", text: "Midazolam inhibits CYP2D6, leading to diltiazem toxicity.", isCorrect: false },
      { id: "opt-gaba", text: "Diltiazem directly synergizes at the GABA-A receptor.", isCorrect: false }
    ],
    explanation: "Midazolam is almost exclusively metabolized by the hepatic cytochrome P450 3A4 (CYP3A4) enzyme. Diltiazem (a non-dihydropyridine calcium channel blocker) is a well-known, potent inhibitor of CYP3A4. Co-administration drastically reduces midazolam clearance, causing massive drug accumulation and prolonged, profound coma.",
    whyNotAlternatives: [
      {
        optionId: "opt-pgp",
        drug: "Midazolam",
        reasoning: "The interaction is metabolic via CYP3A4, not via P-glycoprotein efflux pumps at the blood-brain barrier."
      },
      {
        optionId: "opt-cyp2d6",
        drug: "Midazolam",
        reasoning: "Midazolam does not meaningfully inhibit CYP2D6. Furthermore, it is the midazolam that is accumulating, not the diltiazem."
      },
      {
        optionId: "opt-gaba",
        drug: "Diltiazem",
        reasoning: "Diltiazem has no intrinsic sedative or GABA-A receptor activity."
      }
    ],
    relatedMedicationSlugs: ["midazolam"],
    relatedTopicIds: ["toxicology", "atrial-fibrillation"],
    tags: ["sedation", "drug-interaction", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "tox-clevidipine-allergy",
    challengeType: "toxicity",
    difficulty: "foundation",
    system: "Toxicology",
    stem: "A 40-year-old patient presents with a hypertensive emergency (BP 230/130 mmHg). The team decides to start a Clevidipine continuous infusion. Which of the following patient allergies represents an absolute contraindication to this medication?",
    options: [
      { id: "opt-soy-egg", text: "Soy or egg allergy", isCorrect: true },
      { id: "opt-sulfa", text: "Sulfonamide allergy", isCorrect: false },
      { id: "opt-penicillin", text: "Penicillin allergy", isCorrect: false },
      { id: "opt-iodine", text: "Iodine allergy", isCorrect: false }
    ],
    explanation: "Clevidipine is formulated in a 20% lipid emulsion that contains soybean oil and egg yolk phospholipids (identical to the formulation of propofol). Therefore, it is strictly contraindicated in patients with known allergies to soybeans, soy products, eggs, or egg products due to the risk of anaphylaxis.",
    whyNotAlternatives: [
      {
        optionId: "opt-sulfa",
        drug: "Clevidipine",
        reasoning: "Clevidipine is a dihydropyridine calcium channel blocker. It does not contain a sulfonamide moiety."
      },
      {
        optionId: "opt-penicillin",
        drug: "Clevidipine",
        reasoning: "Clevidipine is an antihypertensive, not a beta-lactam antibiotic."
      },
      {
        optionId: "opt-iodine",
        drug: "Amiodarone",
        reasoning: "Iodine allergy is a historical concern for IV contrast media and iodine-containing drugs like amiodarone, but not clevidipine."
      }
    ],
    relatedMedicationSlugs: ["clevidipine", "propofol"],
    relatedTopicIds: ["hypertensive-emergency"],
    tags: ["antihypertensives", "allergy", "contraindication"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "tox-ketamine-emergence",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Toxicology",
    stem: "A 35-year-old trauma patient receives Ketamine for procedural sedation during chest tube insertion. As the procedure concludes and the ketamine begins to wear off, the patient becomes severely agitated, hallucinates, and thrashes in bed. What is this phenomenon called, and how could it have been prevented?",
    options: [
      { id: "opt-emergence", text: "Emergence phenomenon; prevented by co-administration of a benzodiazepine or propofol.", isCorrect: true },
      { id: "opt-pris", text: "Propofol Infusion Syndrome; prevented by lipid monitoring.", isCorrect: false },
      { id: "opt-malignant-hyperthermia", text: "Malignant hyperthermia; prevented by avoiding succinylcholine.", isCorrect: false },
      { id: "opt-serotonin", text: "Serotonin syndrome; prevented by avoiding SSRIs.", isCorrect: false }
    ],
    explanation: "Ketamine can cause 'emergence reactions' or 'emergence delirium' as the patient awakens, characterized by vivid dreams, hallucinations, dysphoria, and severe agitation. It occurs in up to 30% of adults. The risk is significantly reduced by co-administering a small dose of a benzodiazepine (like midazolam) or a low dose of propofol.",
    whyNotAlternatives: [
      {
        optionId: "opt-pris",
        drug: "Ketamine",
        reasoning: "PRIS is caused by high-dose, long-term propofol use and causes metabolic derangements, not isolated delirium upon waking."
      },
      {
        optionId: "opt-malignant-hyperthermia",
        drug: "Ketamine",
        reasoning: "Malignant hyperthermia is characterized by hyperthermia, rigidity, and metabolic acidosis, and is triggered by volatile anesthetics or succinylcholine, not ketamine."
      },
      {
        optionId: "opt-serotonin",
        drug: "Ketamine",
        reasoning: "Ketamine is not a primary driver of serotonin syndrome. Serotonin syndrome features clonus, hyperreflexia, and autonomic instability."
      }
    ],
    relatedMedicationSlugs: ["ketamine", "midazolam", "propofol"],
    relatedTopicIds: ["delirium", "toxicology"],
    tags: ["sedation", "adverse-effects", "ketamine"],
    references: ["Guidelines and Textbooks"]
  }
];
