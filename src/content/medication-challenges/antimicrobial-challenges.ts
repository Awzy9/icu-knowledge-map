import type { MedicationChallenge } from "@/content-types/medication-challenge";

export const antimicrobialChallenges: MedicationChallenge[] = [
  {
    id: "anti-pseudomonas-coverage",
    challengeType: "no-coverage",
    difficulty: "foundation",
    system: "Infectious Disease",
    stem: "A 60-year-old intubated patient in the ICU develops a ventilator-associated pneumonia. Respiratory cultures return positive for Pseudomonas aeruginosa. The patient is currently receiving an antimicrobial regimen. Which of the following carbapenems lacks activity against Pseudomonas aeruginosa and should NOT be used in this scenario?",
    options: [
      { id: "opt-ertapenem", text: "Ertapenem", isCorrect: true },
      { id: "opt-meropenem", text: "Meropenem", isCorrect: false },
      { id: "opt-imipenem", text: "Imipenem-cilastatin", isCorrect: false },
      { id: "opt-doripenem", text: "Doripenem", isCorrect: false }
    ],
    explanation: "Ertapenem is the only carbapenem that famously lacks coverage against \"APE\" organisms: Acinetobacter, Pseudomonas, and Enterococcus. Therefore, it is inappropriate for empiric or directed therapy when Pseudomonas is suspected or confirmed.",
    whyNotAlternatives: [
      {
        optionId: "opt-meropenem",
        drug: "Meropenem",
        reasoning: "Meropenem has excellent anti-pseudomonal activity and is a standard choice for severe pseudomonal infections."
      },
      {
        optionId: "opt-imipenem",
        drug: "Imipenem",
        reasoning: "Imipenem-cilastatin covers Pseudomonas aeruginosa effectively."
      },
      {
        optionId: "opt-doripenem",
        drug: "Doripenem",
        reasoning: "Doripenem covers Pseudomonas aeruginosa effectively."
      }
    ],
    relatedMedicationSlugs: ["ertapenem", "meropenem"],
    relatedTopicIds: ["pneumonia", "sepsis"],
    tags: ["antimicrobials", "pseudomonas", "coverage-gap"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-daptomycin-pneumonia",
    challengeType: "avoid-drug",
    difficulty: "foundation",
    system: "Infectious Disease",
    stem: "A 75-year-old nursing home resident is admitted to the ICU with severe pneumonia. Sputum gram stain shows gram-positive cocci in clusters, and the team suspects MRSA. Which of the following MRSA-active antibiotics should NEVER be used to treat pneumonia?",
    options: [
      { id: "opt-daptomycin", text: "Daptomycin", isCorrect: true },
      { id: "opt-vancomycin", text: "Vancomycin", isCorrect: false },
      { id: "opt-linezolid", text: "Linezolid", isCorrect: false },
      { id: "opt-ceftaroline", text: "Ceftaroline", isCorrect: false }
    ],
    explanation: "Daptomycin should never be used to treat pneumonia. It binds to pulmonary surfactant, which irreversibly inactivates the drug, rendering it completely ineffective for lung infections regardless of the organism's in vitro susceptibility.",
    whyNotAlternatives: [
      {
        optionId: "opt-vancomycin",
        drug: "Vancomycin",
        reasoning: "Vancomycin is a first-line agent for MRSA pneumonia."
      },
      {
        optionId: "opt-linezolid",
        drug: "Linezolid",
        reasoning: "Linezolid penetrates lung tissue exceptionally well and is a first-line agent for MRSA pneumonia, particularly when toxin production (e.g., PVL) is a concern."
      },
      {
        optionId: "opt-ceftaroline",
        drug: "Ceftaroline",
        reasoning: "Ceftaroline is a 5th-generation cephalosporin with MRSA coverage that is effective and approved for community-acquired pneumonia."
      }
    ],
    relatedMedicationSlugs: ["daptomycin", "vancomycin", "linezolid"],
    relatedTopicIds: ["pneumonia"],
    tags: ["antimicrobials", "mrsa", "pharmacokinetics"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-linezolid-ssri",
    challengeType: "interaction",
    difficulty: "intermediate",
    system: "Infectious Disease",
    stem: "A 55-year-old patient with a history of severe depression treated with citalopram (an SSRI) is admitted with necrotizing fasciitis. The surgical team wants to start Linezolid for its anti-toxin effects against MRSA and Group A Strep. What life-threatening drug interaction must the clinical team monitor for?",
    options: [
      { id: "opt-serotonin", text: "Serotonin syndrome", isCorrect: true },
      { id: "opt-qtc", text: "Torsades de pointes", isCorrect: false },
      { id: "opt-myopathy", text: "Rhabdomyolysis", isCorrect: false },
      { id: "opt-nephrotoxicity", text: "Acute kidney injury", isCorrect: false }
    ],
    explanation: "Linezolid is a reversible, non-selective monoamine oxidase inhibitor (MAOI). When co-administered with serotonergic agents like SSRIs (e.g., citalopram), SNRIs, or MAOIs, it significantly increases the risk of Serotonin Syndrome (characterized by altered mental status, autonomic instability, and neuromuscular hyperactivity such as clonus/hyperreflexia).",
    whyNotAlternatives: [
      {
        optionId: "opt-qtc",
        drug: "Fluoroquinolones/Macrolides",
        reasoning: "While many antibiotics (e.g., macrolides, fluoroquinolones) can prolong the QT interval and interact with psychiatric medications, Linezolid is not classically associated with QTc prolongation."
      },
      {
        optionId: "opt-myopathy",
        drug: "Daptomycin",
        reasoning: "Rhabdomyolysis is a classic toxicity associated with Daptomycin and statin use, not Linezolid."
      },
      {
        optionId: "opt-nephrotoxicity",
        drug: "Vancomycin",
        reasoning: "Vancomycin and Aminoglycosides are famous for nephrotoxicity, especially when combined with other nephrotoxins like Piperacillin-Tazobactam. Linezolid is not intrinsically nephrotoxic."
      }
    ],
    relatedMedicationSlugs: ["linezolid", "daptomycin", "vancomycin"],
    relatedTopicIds: ["toxicology"],
    tags: ["antimicrobials", "drug-interaction", "serotonin-syndrome"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-cefepime-neuro",
    challengeType: "organ-failure",
    difficulty: "intermediate",
    system: "Infectious Disease",
    stem: "A 70-year-old patient with an acute kidney injury (CrCl 15 mL/min) is receiving Cefepime 2 grams IV every 8 hours for hospital-acquired pneumonia. On day 4, the patient develops myoclonus, confusion, and generalized seizures. What is the most likely cause?",
    options: [
      { id: "opt-cefepime", text: "Cefepime neurotoxicity due to failure to renally adjust the dose.", isCorrect: true },
      { id: "opt-meningitis", text: "Undiagnosed bacterial meningitis.", isCorrect: false },
      { id: "opt-uremia", text: "Uremic encephalopathy independent of medication.", isCorrect: false },
      { id: "opt-hypoxia", text: "Hypoxic-ischemic encephalopathy from pneumonia.", isCorrect: false }
    ],
    explanation: "Cefepime requires aggressive renal dose adjustment. In the setting of renal failure (CrCl 15 mL/min), a standard dose of 2g q8h results in massive drug accumulation. High serum concentrations of cefepime cross the blood-brain barrier and cause profound neurotoxicity, classically presenting with encephalopathy, myoclonus, nonconvulsive status epilepticus, and overt seizures.",
    whyNotAlternatives: [
      {
        optionId: "opt-meningitis",
        drug: "Cefepime",
        reasoning: "While meningitis is possible, the timing (day 4), specific symptoms (myoclonus), and the classic error of unadjusted cefepime in renal failure point directly to drug toxicity as the most likely iatrogenic cause."
      },
      {
        optionId: "opt-uremia",
        drug: "Cefepime",
        reasoning: "Uremia can cause encephalopathy, but myoclonus and seizures strongly correlate with beta-lactam toxicity when unadjusted in severe AKI. Cefepime is notorious for this."
      },
      {
        optionId: "opt-hypoxia",
        drug: "Cefepime",
        reasoning: "Hypoxia usually presents acutely during a respiratory decline, rather than on day 4 of therapy in a presumably stabilizing pneumonia patient."
      }
    ],
    relatedMedicationSlugs: ["cefepime"],
    relatedTopicIds: ["acute-kidney-injury", "seizures"],
    tags: ["antimicrobials", "renal-failure", "neurotoxicity"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-deescalation",
    challengeType: "narrow-spectrum",
    difficulty: "foundation",
    system: "Infectious Disease",
    stem: "A patient with complicated intra-abdominal infection was started empirically on Piperacillin-Tazobactam. Blood cultures are now returning positive for Escherichia coli that is pan-susceptible (including to Ceftriaxone, Cefazolin, and Ampicillin). To promote antimicrobial stewardship, which of the following is the best definitive agent?",
    options: [
      { id: "opt-ceftriaxone", text: "Ceftriaxone", isCorrect: true },
      { id: "opt-piptazo", text: "Continue Piperacillin-Tazobactam", isCorrect: false },
      { id: "opt-meropenem", text: "Meropenem", isCorrect: false },
      { id: "opt-cefepime", text: "Cefepime", isCorrect: false }
    ],
    explanation: "De-escalation to the narrowest effective agent is a core principle of antimicrobial stewardship. Ceftriaxone is highly effective for susceptible E. coli and spares the anaerobic and anti-pseudomonal coverage of Piperacillin-Tazobactam, reducing collateral damage to the microbiome.",
    whyNotAlternatives: [
      {
        optionId: "opt-piptazo",
        drug: "Piperacillin-Tazobactam",
        reasoning: "Continuing an extremely broad-spectrum agent with unnecessary anti-pseudomonal and anaerobic coverage violates stewardship principles when a narrower agent is proven effective."
      },
      {
        optionId: "opt-meropenem",
        drug: "Meropenem",
        reasoning: "Meropenem is a carbapenem (ultra-broad spectrum) and should be reserved for multi-drug resistant organisms like ESBL-producers. Using it here would be an inappropriate escalation."
      },
      {
        optionId: "opt-cefepime",
        drug: "Cefepime",
        reasoning: "Cefepime has broad anti-pseudomonal coverage which is not needed for a pan-susceptible E. coli."
      }
    ],
    relatedMedicationSlugs: ["ceftriaxone", "piperacillin-tazobactam", "meropenem", "cefepime"],
    relatedTopicIds: ["sepsis"],
    tags: ["antimicrobials", "stewardship", "de-escalation"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-vanco-trough",
    challengeType: "dose-change",
    difficulty: "intermediate",
    system: "Infectious Disease",
    stem: "A 65-year-old with MRSA bacteremia is receiving Vancomycin. The target AUC/MIC ratio is 400-600. The patient's estimated CrCl is 45 mL/min. Before the 4th dose, the vancomycin trough is drawn and results at 22 mg/L. What is the most appropriate next step regarding the Vancomycin regimen?",
    options: [
      { id: "opt-extend", text: "Decrease the dose or extend the dosing interval.", isCorrect: true },
      { id: "opt-no-change", text: "Maintain current dosing; this is the goal trough.", isCorrect: false },
      { id: "opt-increase", text: "Increase the dose to maximize bacterial killing.", isCorrect: false },
      { id: "opt-switch", text: "Immediately switch to Linezolid due to failure.", isCorrect: false }
    ],
    explanation: "For MRSA bacteremia, modern guidelines recommend AUC-based dosing (goal 400-600). If using trough surrogates, target troughs were historically 15-20 mg/L. A trough of 22 mg/L is supratherapeutic and significantly increases the risk of nephrotoxicity. The dose should be decreased or the interval extended, especially given the patient's baseline moderate renal impairment.",
    whyNotAlternatives: [
      {
        optionId: "opt-no-change",
        drug: "Vancomycin",
        reasoning: "A trough >20 mg/L is universally considered supratherapeutic and highly correlated with increased risk of acute kidney injury."
      },
      {
        optionId: "opt-increase",
        drug: "Vancomycin",
        reasoning: "Increasing the dose will further elevate the trough, virtually guaranteeing nephrotoxicity."
      },
      {
        optionId: "opt-switch",
        drug: "Linezolid",
        reasoning: "A high trough indicates drug accumulation (a pharmacokinetic issue), not clinical or microbiological failure. Adjusting the dose is the standard of care, not immediately switching agents."
      }
    ],
    relatedMedicationSlugs: ["vancomycin", "linezolid"],
    relatedTopicIds: ["acute-kidney-injury"],
    tags: ["antimicrobials", "pharmacokinetics", "therapeutic-drug-monitoring"],
    references: ["Guidelines and Textbooks"]
  },
  {
    id: "anti-ampho-tox",
    challengeType: "toxicity",
    difficulty: "advanced",
    system: "Infectious Disease",
    stem: "A patient with disseminated candidiasis is started on Liposomal Amphotericin B. On day 3, the patient is noted to have new-onset hypokalemia, hypomagnesemia, and a rising serum creatinine. Which mechanism best explains the renal and electrolyte abnormalities?",
    options: [
      { id: "opt-tubular", text: "Direct tubular epithelial damage and altered membrane permeability.", isCorrect: true },
      { id: "opt-crystals", text: "Intratubular crystallization of the drug.", isCorrect: false },
      { id: "opt-ain", text: "Allergic interstitial nephritis.", isCorrect: false },
      { id: "opt-prerenal", text: "Severe afferent arteriolar vasodilation causing prerenal state.", isCorrect: false }
    ],
    explanation: "Amphotericin B classically binds to ergosterol in fungal membranes but also binds to cholesterol in mammalian cell membranes, particularly in the distal renal tubules. This causes direct cellular toxicity, leading to altered membrane permeability, renal tubular acidosis (RTA), and profound urinary wasting of potassium and magnesium, along with a decrease in GFR (nephrotoxicity).",
    whyNotAlternatives: [
      {
        optionId: "opt-crystals",
        drug: "Amphotericin",
        reasoning: "Drugs like acyclovir or high-dose methotrexate cause intratubular crystallization, not amphotericin."
      },
      {
        optionId: "opt-ain",
        drug: "Amphotericin",
        reasoning: "Beta-lactams (e.g., Nafcillin, Piperacillin) are classic culprits for acute interstitial nephritis (AIN), not amphotericin B."
      },
      {
        optionId: "opt-prerenal",
        drug: "Amphotericin",
        reasoning: "Amphotericin B actually causes intense afferent arteriolar *vasoconstriction* (not vasodilation), which contributes to the drop in GFR, in addition to its direct tubular toxicity."
      }
    ],
    relatedMedicationSlugs: ["liposomal-amphotericin-b"],
    relatedTopicIds: ["acute-kidney-injury"],
    tags: ["antifungals", "nephrotoxicity", "electrolytes"],
    references: ["Guidelines and Textbooks"]
  }
];
