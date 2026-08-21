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
  },
  {
    id: "organ-furosemide-resistance-reasoning",
    challengeType: "dose-change",
    difficulty: "advanced",
    system: "Renal",
    stem: "A patient with acute decompensated heart failure has received furosemide 80 mg IV twice with minimal urine output response. A spot urine sodium checked 2 hours after the most recent dose is 15 mEq/L. What is the most appropriate next step?",
    options: [
      { id: "opt-escalate", text: "Escalate the furosemide dose given the inadequate natriuretic response, and consider adding a second agent (e.g., acetazolamide or a thiazide) if resistance persists", isCorrect: true },
      { id: "opt-oral-switch", text: "Switch to an equivalent oral furosemide dose", isCorrect: false },
      { id: "opt-stop-diuretics", text: "Assume the diagnosis is wrong and stop diuretics", isCorrect: false },
      { id: "opt-fluid-bolus", text: "Give a large IV fluid bolus to improve renal perfusion", isCorrect: false }
    ],
    explanation: "A low spot urine sodium (roughly under 50-70 mEq/L, institution-dependent) 2 hours after a loop diuretic dose indicates an inadequate natriuretic response, supporting dose escalation rather than simply repeating the same dose. If escalation still doesn't produce an adequate response, sequential nephron blockade — adding an agent acting at a different nephron site — is a reasonable next step; the response should be reasoned through, not blindly increased indefinitely.",
    whyNotAlternatives: [
      { optionId: "opt-oral-switch", drug: "Furosemide (oral)", reasoning: "Switching to oral therapy in a patient already showing an inadequate IV response is very unlikely to improve delivery to the site of action, especially with gut edema common in decompensated heart failure." },
      { optionId: "opt-stop-diuretics", drug: "Furosemide (withheld)", reasoning: "An inadequate initial response doesn't mean the diagnosis (volume overload) is wrong — it means the current regimen needs adjustment." },
      { optionId: "opt-fluid-bolus", drug: "IV fluids", reasoning: "A fluid bolus would worsen volume overload — the issue is inadequate natriuresis, not inadequate perfusion from hypovolemia." }
    ],
    relatedMedicationSlugs: ["furosemide", "acetazolamide"],
    relatedTopicIds: ["acute-heart-failure"],
    tags: ["diuretics", "diuretic-resistance", "clinical-reasoning"],
    references: ["Felker GM, et al. Diuretic Strategies in Patients with Acute Decompensated Heart Failure. N Engl J Med. 2011;364(9):797-805."]
  },
  {
    id: "organ-acetazolamide-advor-scope",
    challengeType: "best-drug",
    difficulty: "intermediate",
    system: "Renal",
    stem: "A patient with ADHF and volume overload remains congested despite an appropriately escalated loop diuretic infusion. Based on the ADVOR trial, what is the most appropriate use of acetazolamide in this scenario?",
    options: [
      { id: "opt-add-on", text: "Add acetazolamide 500 mg IV daily to the existing loop diuretic, since ADVOR studied it specifically as an add-on in this population", isCorrect: true },
      { id: "opt-monotherapy", text: "Stop the loop diuretic and start acetazolamide alone", isCorrect: false },
      { id: "opt-first-line", text: "Use acetazolamide as first-line therapy for the next episode of volume overload instead of a loop diuretic", isCorrect: false },
      { id: "opt-no-evidence", text: "Avoid acetazolamide since it has no evidence in heart failure", isCorrect: false }
    ],
    explanation: "The ADVOR trial specifically studied acetazolamide added to an existing loop diuretic in patients with acutely decompensated heart failure and volume overload, and found it significantly increased successful decongestion. It was not studied as monotherapy or as a first-line replacement for loop diuretics.",
    whyNotAlternatives: [
      { optionId: "opt-monotherapy", drug: "Acetazolamide (monotherapy)", reasoning: "This is the opposite of what the trial evidence supports — acetazolamide was tested as an add-on, not a loop-diuretic substitute." },
      { optionId: "opt-first-line", drug: "Acetazolamide (first-line)", reasoning: "Loop diuretics remain first-line for decongestion; acetazolamide's evidence base is specifically for diuretic-resistant, add-on use." },
      { optionId: "opt-no-evidence", drug: "Acetazolamide (avoided)", reasoning: "This ignores the ADVOR trial, a real, positive randomized trial supporting this specific combination use." }
    ],
    relatedMedicationSlugs: ["acetazolamide", "furosemide"],
    relatedTopicIds: ["acute-heart-failure"],
    tags: ["diuretics", "advor-trial", "evidence-based"],
    references: ["Mullens W, et al. Acetazolamide in Acute Decompensated Heart Failure with Volume Overload. N Engl J Med. 2022;387(13):1185-1195."]
  },
  {
    id: "organ-insulin-hyperkalemia-monitoring",
    challengeType: "organ-failure",
    difficulty: "foundation",
    system: "Renal/Endocrine",
    stem: "A dialysis-dependent patient with potassium 7.1 mEq/L receives IV calcium gluconate followed by 10 units IV regular insulin with dextrose. Two hours later, the patient appears diaphoretic and confused. What should be checked immediately, and why?",
    options: [
      { id: "opt-glucose", text: "Blood glucose — delayed hypoglycemia is a known risk, especially in renal failure where insulin clearance is prolonged", isCorrect: true },
      { id: "opt-repeat-k-only", text: "Repeat potassium only, since insulin's job is already done", isCorrect: false },
      { id: "opt-calcium-only", text: "Ionized calcium only", isCorrect: false },
      { id: "opt-no-action", text: "No action needed — this is an expected, self-limited reaction", isCorrect: false }
    ],
    explanation: "In renal failure, insulin's effective duration of action is prolonged because clearance is reduced, increasing the risk of delayed hypoglycemia — sometimes hours after the dose. New diaphoresis and confusion in this setting should immediately prompt a glucose check, since insulin is a common cause of preventable iatrogenic harm in exactly this scenario.",
    whyNotAlternatives: [
      { optionId: "opt-repeat-k-only", drug: "Regular Insulin (IV)", reasoning: "Potassium should also be trended given the shift effect will wear off, but the acute new symptoms are much more specific for hypoglycemia and need immediate evaluation." },
      { optionId: "opt-calcium-only", drug: "Calcium Gluconate", reasoning: "Calcium was already given for membrane stabilization and isn't the most likely explanation for new diaphoresis/confusion at this time point." },
      { optionId: "opt-no-action", drug: "Regular Insulin (IV)", reasoning: "Diaphoresis and confusion are not expected, benign findings after insulin dosing — they are classic hypoglycemia symptoms requiring immediate glucose assessment." }
    ],
    relatedMedicationSlugs: ["regular-insulin-iv", "calcium-gluconate"],
    relatedTopicIds: ["hyperkalemia"],
    tags: ["endocrine-metabolic", "hypoglycemia", "renal-failure"],
    references: ["Umpierrez GE, Davis GM, et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care. 2024;47(8):1257-1275."]
  },
  {
    id: "organ-hydrocortisone-evidence-nuance",
    challengeType: "best-drug",
    difficulty: "advanced",
    system: "Endocrine",
    stem: "A resident states that hydrocortisone is 'proven to reduce mortality' in septic shock and should be started in every patient on any dose of norepinephrine. What is the most accurate correction?",
    options: [
      { id: "opt-mixed-evidence", text: "The evidence is mixed — ADRENAL showed no mortality benefit while APROCCHSS did, and current use is conditional, reserved for shock inadequately responsive to fluids and vasopressors", isCorrect: true },
      { id: "opt-start-everyone", text: "The resident is correct and hydrocortisone should be started in every septic shock patient regardless of vasopressor dose", isCorrect: false },
      { id: "opt-no-role", text: "Hydrocortisone has no role in septic shock at all", isCorrect: false },
      { id: "opt-cortisol-gated", text: "Hydrocortisone is only appropriate once a random cortisol level confirms adrenal insufficiency", isCorrect: false }
    ],
    explanation: "The two largest modern trials of hydrocortisone in septic shock disagree at the mortality-outcome level (ADRENAL neutral, APROCCHSS positive), so it is not accurate to call it a proven mortality-reducing therapy. Current guidance frames it as a conditional adjunct for vasopressor-refractory shock, not a routine therapy for any vasopressor requirement, and it does not require a specific cortisol level to justify use, since CIRCI has no single validated diagnostic test.",
    whyNotAlternatives: [
      { optionId: "opt-start-everyone", drug: "Hydrocortisone", reasoning: "This overstates the evidence and ignores the guideline-conditional framing reserved for inadequately responsive shock." },
      { optionId: "opt-no-role", drug: "Hydrocortisone", reasoning: "This understates the evidence — APROCCHSS did show a significant mortality benefit, and both trials showed faster shock resolution." },
      { optionId: "opt-cortisol-gated", drug: "Hydrocortisone", reasoning: "The random cortisol/ACTH-stimulation-test approach to diagnosing CIRCI has fallen out of favor; the decision to treat is largely clinical rather than lab-gated." }
    ],
    relatedMedicationSlugs: ["hydrocortisone"],
    relatedTopicIds: ["septic-shock"],
    tags: ["corticosteroids", "septic-shock", "evidence-nuance"],
    references: ["Venkatesh ES, et al. Adjunctive Glucocorticoid Therapy in Patients with Septic Shock. N Engl J Med. 2018;378(9):797-808.", "Annane D, et al. Hydrocortisone plus Fludrocortisone for Adults with Septic Shock. N Engl J Med. 2018;378(9):809-818."]
  },
  {
    id: "organ-methylprednisolone-vs-hydrocortisone",
    challengeType: "best-drug",
    difficulty: "intermediate",
    system: "Endocrine",
    stem: "A patient with known primary adrenal insufficiency presents in adrenal crisis with hypotension, hyponatremia, and hyperkalemia. The team gives methylprednisolone at a potency-equivalent dose instead of hydrocortisone. What is the most important gap in this substitution?",
    options: [
      { id: "opt-mineralocorticoid-gap", text: "Methylprednisolone has negligible mineralocorticoid activity, so it does not address the sodium/potassium/volume component of adrenal crisis the way hydrocortisone does", isCorrect: true },
      { id: "opt-fully-interchangeable", text: "There is no meaningful difference — potency-equivalent dosing is fully interchangeable", isCorrect: false },
      { id: "opt-dose-too-low", text: "Methylprednisolone is less potent than hydrocortisone, so the dose given was too low", isCorrect: false },
      { id: "opt-no-iv-form", text: "Methylprednisolone cannot be given IV", isCorrect: false }
    ],
    explanation: "Hydrocortisone retains clinically significant mineralocorticoid receptor activity (promoting sodium/water retention and potassium excretion), which is exactly what's needed in adrenal crisis. Methylprednisolone has much higher glucocorticoid potency but negligible mineralocorticoid activity, so a glucocorticoid-potency-equivalent dose does not replace the mineralocorticoid component of the crisis.",
    whyNotAlternatives: [
      { optionId: "opt-fully-interchangeable", drug: "Methylprednisolone", reasoning: "Potency equivalence tables only account for glucocorticoid receptor activity, not mineralocorticoid receptor activity, which differs substantially between the two drugs." },
      { optionId: "opt-dose-too-low", drug: "Methylprednisolone", reasoning: "The issue isn't the size of the glucocorticoid-equivalent dose — it's the missing mineralocorticoid activity entirely; no methylprednisolone dose fixes that gap." },
      { optionId: "opt-no-iv-form", drug: "Methylprednisolone", reasoning: "Methylprednisolone sodium succinate is a standard IV formulation; route is not the issue here." }
    ],
    relatedMedicationSlugs: ["methylprednisolone", "hydrocortisone"],
    relatedTopicIds: ["endocrine-emergencies"],
    tags: ["corticosteroids", "adrenal-crisis", "mineralocorticoid"],
    references: ["Annane D, et al. Guidelines for the Diagnosis and Management of Critical Illness-Related Corticosteroid Insufficiency (CIRCI). Crit Care Med. 2017;45(12):2078-2088."]
  }
];
