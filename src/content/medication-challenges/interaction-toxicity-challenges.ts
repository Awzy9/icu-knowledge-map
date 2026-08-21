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
  },
  {
    id: "interaction-ufh-hit-recognition",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Hematologic",
    stem: "A patient on a therapeutic UFH infusion for 6 days has a platelet count that has fallen from 240,000 to 100,000/uL, with no other obvious explanation. What is the most appropriate immediate action?",
    options: [
      { id: "opt-4ts-switch", text: "Calculate a 4Ts score; if intermediate/high probability, stop ALL heparin exposure immediately (including line flushes) and start a non-heparin anticoagulant while confirmatory testing is pending", isCorrect: true },
      { id: "opt-continue-monitor", text: "Continue the heparin infusion and simply monitor the platelet count", isCorrect: false },
      { id: "opt-platelet-transfusion", text: "Stop the heparin infusion and give a platelet transfusion", isCorrect: false },
      { id: "opt-hold-all-anticoag", text: "Stop the heparin infusion and hold all anticoagulation until HIT testing results return", isCorrect: false }
    ],
    explanation: "The timing (day 5-10) and magnitude of this platelet fall are classic for heparin-induced thrombocytopenia. HIT is a prothrombotic syndrome, so simply stopping heparin without starting an alternative anticoagulant leaves the patient at ongoing thrombosis risk — a non-heparin anticoagulant should be started empirically while confirmatory testing (e.g., a PF4 antibody assay) is pending, based on pretest probability.",
    whyNotAlternatives: [
      { optionId: "opt-continue-monitor", drug: "Unfractionated Heparin", reasoning: "Continuing heparin exposure in a patient with a HIT-consistent presentation risks worsening the immune-mediated prothrombotic process." },
      { optionId: "opt-platelet-transfusion", drug: "Platelet transfusion", reasoning: "HIT is a prothrombotic, not primarily a bleeding, disorder — platelet transfusion is not indicated and can theoretically worsen thrombotic risk." },
      { optionId: "opt-hold-all-anticoag", drug: "No anticoagulation", reasoning: "Since HIT is prothrombotic, leaving the patient with no anticoagulation at all — rather than switching to a non-heparin agent — leaves them at significant ongoing thrombosis risk." }
    ],
    relatedMedicationSlugs: ["unfractionated-heparin"],
    relatedTopicIds: ["hit", "anticoagulation"],
    tags: ["anticoagulants", "hit", "toxicity-recognition"],
    references: ["Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392."]
  },
  {
    id: "interaction-enoxaparin-renal-reversal",
    challengeType: "dose-change",
    difficulty: "intermediate",
    system: "Hematologic/Renal",
    stem: "A patient on therapeutic enoxaparin for acute PE develops a CrCl of 24 mL/min on hospital day 3 and now has active, significant GI bleeding. The team plans to give protamine and expects complete reversal, similar to UFH. What is the key correction to this plan?",
    options: [
      { id: "opt-partial-reversal", text: "Protamine only PARTIALLY reverses enoxaparin (up to roughly 60% of anti-Xa activity), unlike its near-complete reversal of UFH, and going forward, UFH is generally preferred over enoxaparin at this level of renal impairment", isCorrect: true },
      { id: "opt-no-reversal", text: "Protamine does not reverse enoxaparin at all, so it should not be given", isCorrect: false },
      { id: "opt-full-reversal", text: "Protamine fully reverses enoxaparin exactly as it does UFH, so the plan is correct", isCorrect: false },
      { id: "opt-no-adjustment", text: "No dose adjustment or reversal consideration is needed regardless of renal function", isCorrect: false }
    ],
    explanation: "Protamine binds and neutralizes the longer heparin chains more effectively than enoxaparin's shorter chains, so reversal is partial, not complete. This patient's significant renal impairment (CrCl 24) is also a reason enoxaparin accumulated in the first place — UFH's non-renal clearance and full reversibility make it generally preferable in this setting.",
    whyNotAlternatives: [
      { optionId: "opt-no-reversal", drug: "Protamine", reasoning: "Protamine does have a real, partial reversal effect on enoxaparin's anti-Xa activity — it should still be given in significant bleeding, just with realistic expectations." },
      { optionId: "opt-full-reversal", drug: "Protamine", reasoning: "This overstates protamine's effect on LMWH and could lead to false reassurance about ongoing bleeding risk." },
      { optionId: "opt-no-adjustment", drug: "Enoxaparin", reasoning: "Significant renal impairment (CrCl 24) is exactly the situation where enoxaparin accumulation and bleeding risk are highest, and where UFH would generally be preferred going forward." }
    ],
    relatedMedicationSlugs: ["enoxaparin", "unfractionated-heparin"],
    relatedTopicIds: ["pulmonary-embolism", "bleeding"],
    tags: ["anticoagulants", "renal-impairment", "reversal"],
    references: ["Stevens SM, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608."]
  },
  {
    id: "interaction-calcium-gluconate-potassium-misconception",
    challengeType: "fits-physiology",
    difficulty: "foundation",
    system: "Renal/Cardiovascular",
    stem: "After giving calcium gluconate 2 g IV for hyperkalemic ECG changes, a nurse asks when the potassium level will be rechecked to confirm the calcium 'worked.' What is the most accurate response?",
    options: [
      { id: "opt-no-k-effect", text: "Calcium does not lower serum potassium at all — it only stabilizes the cardiac membrane; a repeat potassium level won't show improvement from the calcium itself, and actual potassium-lowering therapy must still be given", isCorrect: true },
      { id: "opt-drops-10min", text: "The potassium should drop significantly within 10 minutes of the calcium dose", isCorrect: false },
      { id: "opt-same-mechanism", text: "Calcium and insulin work through the same potassium-lowering mechanism", isCorrect: false },
      { id: "opt-no-further-tx", text: "No further potassium-lowering therapy is needed once calcium is given", isCorrect: false }
    ],
    explanation: "Calcium's role in hyperkalemia is purely to stabilize the cardiac membrane by restoring the threshold potential — it has zero effect on the serum potassium concentration. The ECG, not the potassium level, is the correct marker to reassess after calcium; a separate shifting agent (e.g., insulin/dextrose, albuterol) and/or elimination therapy is still required to actually lower the potassium.",
    whyNotAlternatives: [
      { optionId: "opt-drops-10min", drug: "Calcium Gluconate", reasoning: "This directly contradicts calcium's actual mechanism, which does not alter the serum potassium concentration at all." },
      { optionId: "opt-same-mechanism", drug: "Calcium Gluconate", reasoning: "Insulin lowers potassium via the Na+/K+-ATPase pump (a true shifting mechanism); calcium works via a completely different mechanism (membrane threshold stabilization) that doesn't move any potassium." },
      { optionId: "opt-no-further-tx", drug: "Calcium Gluconate", reasoning: "This leaves the underlying hyperkalemia untreated — calcium buys time, it does not treat the potassium level." }
    ],
    relatedMedicationSlugs: ["calcium-gluconate", "regular-insulin-iv"],
    relatedTopicIds: ["hyperkalemia"],
    tags: ["electrolytes", "hyperkalemia", "mechanism-misconception"],
    references: ["UK Kidney Association. Treatment of Acute Hyperkalaemia in Adults. December 2023."]
  },
  {
    id: "interaction-bicarbonate-lactic-acidosis-misuse",
    challengeType: "avoid-drug",
    difficulty: "intermediate",
    system: "Renal/Metabolic",
    stem: "A patient in septic shock has a lactate of 8 mmol/L and a pH of 7.28 from lactic acidosis, with preserved renal function and adequate ventilation. A team member suggests starting a sodium bicarbonate infusion to 'correct the pH.' What is the most appropriate response?",
    options: [
      { id: "opt-avoid-routine", text: "Avoid routine bicarbonate for lactic acidosis — it does not address the underlying cause (tissue hypoperfusion) and lacks demonstrated outcome benefit in this context; focus on source control and resuscitation instead", isCorrect: true },
      { id: "opt-start-immediately", text: "Start bicarbonate immediately, since correcting the pH is the priority", isCorrect: false },
      { id: "opt-ph-threshold-alone", text: "Bicarbonate is indicated here because the pH is below 7.30", isCorrect: false },
      { id: "opt-bicar-icu-misapplied", text: "Bicarbonate should be given because BICAR-ICU proved benefit in this exact scenario", isCorrect: false }
    ],
    explanation: "Routine bicarbonate for lactic acidosis is not recommended — it treats a number, not the underlying process, and can worsen intracellular acidosis while causing sodium/volume overload. This patient does not have the specific population (severe acidemia with concurrent significant AKI) where BICAR-ICU showed benefit. The correct treatment is addressing the cause of the lactic acidosis through source control and resuscitation.",
    whyNotAlternatives: [
      { optionId: "opt-start-immediately", drug: "Sodium Bicarbonate", reasoning: "This treats the lab value rather than the underlying pathophysiology and ignores the lack of demonstrated benefit for isolated lactic acidosis." },
      { optionId: "opt-ph-threshold-alone", drug: "Sodium Bicarbonate", reasoning: "The BICAR-ICU population specifically required concurrent significant AKI (AKIN 2-3), not just a pH threshold — this patient has preserved renal function." },
      { optionId: "opt-bicar-icu-misapplied", drug: "Sodium Bicarbonate", reasoning: "This misapplies the trial's subgroup finding (severe acidemia PLUS concurrent AKI) to a population — preserved renal function, pure lactic acidosis — the trial did not show benefit in." }
    ],
    relatedMedicationSlugs: ["sodium-bicarbonate"],
    relatedTopicIds: ["metabolic-acidosis"],
    tags: ["electrolytes", "lactic-acidosis", "evidence-misapplication"],
    references: ["Jaber S, et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the intensive care unit (BICAR-ICU). Lancet. 2018;392(10141):31-40."]
  },
  {
    id: "interaction-magnesium-renal-accumulation",
    challengeType: "toxicity",
    difficulty: "intermediate",
    system: "Renal/Neuromuscular",
    stem: "A patient with a CrCl of 15 mL/min is receiving a magnesium sulfate infusion for eclampsia at the standard protocol rate. On routine hourly assessment, the patellar deep tendon reflexes are now absent, though respirations remain normal. What is the most appropriate next step?",
    options: [
      { id: "opt-stop-check-level", text: "Stop or reduce the magnesium infusion immediately and check a magnesium level — loss of reflexes is an early toxicity warning sign that precedes respiratory depression, and it must be taken seriously in significant renal impairment", isCorrect: true },
      { id: "opt-continue-same-rate", text: "Continue the infusion at the same rate since respirations are still normal", isCorrect: false },
      { id: "opt-increase-rate", text: "Increase the infusion rate since the seizure threshold needs to be higher", isCorrect: false },
      { id: "opt-wait-for-resp-depression", text: "Do nothing until respiratory depression actually develops", isCorrect: false }
    ],
    explanation: "Magnesium is eliminated almost entirely by the kidneys, so significant renal impairment sharply increases accumulation and toxicity risk. Loss of deep tendon reflexes is the expected EARLIEST sign in the toxicity progression, appearing before respiratory depression — it should prompt stopping or reducing the infusion and checking a level immediately, not waiting for a more dangerous sign to develop.",
    whyNotAlternatives: [
      { optionId: "opt-continue-same-rate", drug: "Magnesium Sulfate", reasoning: "Waiting for respiratory depression before acting ignores the entire point of checking reflexes as an early warning sign." },
      { optionId: "opt-increase-rate", drug: "Magnesium Sulfate", reasoning: "This would worsen an already-developing toxicity in a patient with impaired clearance — the opposite of the correct action." },
      { optionId: "opt-wait-for-resp-depression", drug: "Magnesium Sulfate", reasoning: "This misses the actionable early warning sign and risks a preventable, more dangerous toxicity progression." }
    ],
    relatedMedicationSlugs: ["magnesium-sulfate"],
    relatedTopicIds: ["obstetric-critical-care"],
    tags: ["electrolytes", "renal-impairment", "toxicity-monitoring"],
    references: ["Per obstetric/ACOG-aligned magnesium sulfate protocols for eclampsia and severe preeclampsia."]
  }
];
