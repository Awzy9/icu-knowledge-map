import type { Medication } from "@/content-types/medication";

export const metronidazole: Medication = {
  id: "metronidazole",
  slug: "metronidazole",
  name: "Metronidazole",
  genericName: "Metronidazole",
  brandNames: ["Flagyl"],
  class: "Synthetic Nitroimidazole Antimicrobial",
  category: "antimicrobials",
  subcategory: "Nitroimidazoles",
  summary: "Potent obligate anaerobic bactericidal agent for intra-abdominal infections, CNS abscesses, and trichomoniasis — requires avoiding redundant double anaerobic coverage when paired with Pip-Tazo or Meropenem.",
  mechanism: {
    title: "Intracellular Nitro Reduction & DNA Radical Cleavage",
    steps: [
      "Passively diffuses across cell membranes of susceptible obligate anaerobic microorganisms.",
      "The nitro group is reduced to short-lived cytotoxic free-radical intermediates by electron transport proteins (pyruvate:ferredoxin oxidoreductase).",
      "Free-radical intermediates interact with host cell DNA, causing helical structure loss and strand breakage.",
      "Inhibits nucleic acid synthesis, resulting in rapid bactericidal cell death."
    ],
    visualDiagram: "Passive Diffusion → Ferredoxin Nitro-Reduction → Reactive Intermediates → DNA Strand Cleavage → Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Clostridium perfringens", "Clostridioides difficile", "Peptostreptococcus spp."],
      notCovered: ["Staphylococcus aureus (MSSA/MRSA)", "Streptococcus spp.", "Enterococcus faecalis / faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["Bacteroides fragilis group", "Prevotella spp.", "Fusobacterium spp.", "Porphyromonas spp."],
      notCovered: ["Escherichia coli", "Klebsiella pneumoniae", "Pseudomonas aeruginosa", "Acinetobacter baumannii", "Proteus mirabilis"]
    },
    anaerobes: {
      covered: ["Bacteroides fragilis (highly susceptible)", "Bacteroides thetaiotaomicron", "Fusobacterium necrophorum", "Peptostreptococcus spp."],
      notCovered: ["Propionibacterium acnes (Actinomyces - aerobic/microaerophilic)"]
    },
    atypicalsFungi: {
      covered: ["Entamoeba histolytica", "Giardia lamblia", "Trichomonas vaginalis"],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["Aerobic Gram-negative bacilli (E. coli, Klebsiella, Pseudomonas)", "Gram-positive aerobes (Staph, Strep, Enterococcus)", "Atypicals & Fungi"]
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "AUC24 / MIC ratio or Peak / MIC ratio",
    halfLife: "8 hours (prolonged in severe hepatic impairment to 18–24 hours)",
    proteinBinding: "<20% (low protein binding, widely distributed)",
    metabolism: "Major hepatic metabolism via side-chain oxidation and glucuronide conjugation (80% liver clearance)",
    elimination: "Renal excretion (60–80% as metabolites and 20% unchanged drug); 6–15% in feces",
    vdNotes: "0.6 to 1.1 L/kg (excellent tissue distribution into CSF, brain abscess, intra-abdominal fluid, and bone)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Potent bactericidal activity against Bacteroides fragilis and obligate intra-abdominal anaerobes.",
      "High CNS penetration across blood-brain barrier for brain abscesses and anaerobic empyema.",
      "High oral bioavailability (~100%), allowing seamless IV to PO conversion at 500 mg q8h."
    ],
    whyIDont: [
      "No clinically useful activity against aerobic Gram-negative bacilli (E. coli, Klebsiella, Pseudomonas) or Gram-positive aerobes.",
      "Usually provides unnecessary duplicate anaerobic coverage when adequate anaerobic coverage is already provided by the primary agent (such as Pip-Tazo or Meropenem), unless a specific indication exists.",
      "Peripheral neuropathy and central encephalopathy/cerebellar toxicity with cumulative prolonged therapy."
    ],
    bedsidePearl: "AVOID UNNECESSARY DUPLICATE ANAEROBIC COVERAGE! Adding Metronidazole to Piperacillin-Tazobactam or Meropenem usually provides unnecessary duplicate anaerobic coverage without additional therapeutic benefit while increasing toxicity risk and cost."
  },
  dosing: {
    routine: "Standard ICU Regimen: 500 mg IV (or PO) every 8 hours (or 7.5 mg/kg q6h; max 4.0 g/day).",
    syndromeSpecific: [
      {
        syndrome: "Complicated Intra-Abdominal Infection (cIAI)",
        regimen: "500 mg IV/PO every 8 hours in combination with Cefepime 2g q8h or Ceftriaxone 2g q24h.",
        reference: "IDSA Intra-abdominal Infection Guidelines (Solomkin JS et al. Clin Infect Dis 2010)."
      },
      {
        syndrome: "Brain Abscess (Anaerobic Coverage)",
        regimen: "500 mg IV every 6 to 8 hours PLUS Ceftriaxone 2g q12h (+/- Vancomycin).",
        reference: "EFNS Guidelines on Diagnosis and Management of Brain Abscess (Arlotti M et al. Clin Microbiol Infect 2010)."
      },
      {
        syndrome: "Clostridioides difficile Colitis (Non-severe, restricted role)",
        regimen: "500 mg PO every 8 hours for 10–14 days ONLY if oral Vancomycin or Fidaxomicin are unavailable.",
        reference: "IDSA/SHEA 2021 Focused Update on C. difficile Management (Johnson S et al. Clin Infect Dis 2021)."
      }
    ],
    renallyAdjusted: [
      {
        crclRange: "Severe renal impairment / ESRD",
        dose: "Renal failure does not by itself mandate one universal metronidazole dose reduction. Parent-drug pharmacokinetics may not change sufficiently to require automatic adjustment. However, active metabolites may accumulate in ESRD; monitor for adverse effects, particularly during prolonged therapy."
      }
    ],
    hdDosing: "Metronidazole and active metabolites can be removed by intermittent hemodialysis (~45–50% cleared in a 3–4 hour HD session); timing relative to HD therefore matters. A supplemental/post-HD dose or timing adjustment may be appropriate depending on indication, regimen, timing of dialysis, and selected authoritative dosing protocol.",
    crrtDosing: "CRRT DOSING IS CONTEXT-DEPENDENT. Dose selection depends on CRRT modality, effluent rate, residual renal function, indication, treatment intensity, and available institutional/authoritative dosing guidance."
  },
  organFailure: {
    renalConsiderations: "Renal failure does not by itself mandate one universal metronidazole dose reduction. Parent-drug pharmacokinetics may not change sufficiently to require automatic adjustment because ~80% undergoes hepatic metabolism. However, active metabolites may accumulate in ESRD; monitor for adverse effects, particularly during prolonged therapy. Metronidazole and metabolites can be removed by intermittent hemodialysis; timing relative to HD matters.",
    hepaticConsiderations: "Severe hepatic impairment (Child-Pugh C) decreases clearance by 50%; reduce dose to 250–500 mg q12–24h to prevent neurotoxicity."
  },
  toxicity: {
    majorWarnings: [
      "Central Nervous System Toxicity: Encephalopathy, cerebellar ataxia, seizures, and MRI dentate nucleus hyperintensities with prolonged use.",
      "Peripheral Neuropathy: Sensory neuropathy with long-term cumulative exposure (>4–6 weeks).",
      "Disulfiram-Like Reaction Warning: Prescribing information advises avoiding alcohol during therapy, though clinical trial evidence for classic aldehyde dehydrogenase inhibition is debated."
    ],
    organToxicities: [
      { organ: "Central Nervous System", description: "Encephalopathy, cerebellar ataxia, confusion, seizures, dysarthria." },
      { organ: "Peripheral Nervous System", description: "Peripheral sensory neuropathy (paresthesias, numbness)." },
      { organ: "Gastrointestinal", description: "Nausea, metallic taste, epigastric distress, furry tongue." }
    ]
  },
  interactions: [
    {
      drug: "Warfarin",
      mechanism: "Inhibition of hepatic CYP2C9 warfarin metabolism",
      consequence: "Profound increase in hypoprothrombinemic effect, elevating INR and bleeding risk",
      icuAction: "Monitor INR closely and reduce warfarin dose when starting metronidazole."
    },
    {
      drug: "Alcohol / Ethanol",
      mechanism: "Inhibition of aldehyde dehydrogenase (regulatory prescribing warning)",
      consequence: "Abdominal cramps, nausea, vomiting, flushing, headache (disulfiram-like reaction warning)",
      icuAction: "Advise patient to avoid alcohol during and for 48 hours post-therapy. Note: Regulatory labeling mandates avoidance, though clinical trial evidence demonstrates variable severity compared to classic disulfiram."
    }
  ],
  monitoring: {
    parameters: [
      "Clinical signs of intra-abdominal infection resolution",
      "Neurologic evaluation (gait, cerebellar testing, sensory exam) during prolonged courses",
      "Hepatic function tests (LFTs) in severe liver dysfunction",
      "Prothrombin time / INR if co-administered with Warfarin"
    ]
  },
  stewardship: {
    deEscalationNotes: "Discontinue Metronidazole immediately if primary therapy is escalated to Piperacillin-Tazobactam, Meropenem, or Ertapenem.",
    broadNotBetterPoint: "Routine addition of Metronidazole to Pip-Tazo or Carbapenems usually provides unnecessary duplicate anaerobic coverage when adequate anaerobic coverage is already provided by the primary agent, unless a specific indication exists."
  },
  evidenceTraceability: {
    guidelineIds: ["c-diff-guideline-idsa-2021"],
    claimCitations: [
      {
        claim: "Parent metronidazole clearance is primarily hepatic (~80%); hemodialysis removes ~45-50% of drug and active metabolites.",
        source: "FDA / DailyMed Flagyl (Metronidazole) Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      },
      {
        claim: "IDSA/SHEA guidelines relegate Metronidazole to non-severe C. difficile only when Fidaxomicin or oral Vancomycin are unavailable.",
        source: "IDSA/SHEA Focused Update on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis 2021;73(5):e1029-e1044.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/34165482/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Redundant Double Anaerobic Coverage in Sepsis",
      clinicalContext: "A 62-year-old with perforated diverticulitis is started on Meropenem 1g q8h AND Metronidazole 500mg IV q8h.",
      decision: "Discontinue Metronidazole.",
      rationale: "Meropenem provides reliable anaerobic activity, including activity against Bacteroides fragilis in usual clinical contexts; adding metronidazole usually provides unnecessary duplicate anaerobic coverage without additional therapeutic benefit while increasing toxicity risk."
    },
    {
      title: "Brain Abscess Empiric Regimen",
      clinicalContext: "A 40-year-old with a ring-enhancing temporal lobe brain lesion and fever.",
      decision: "Initiate Ceftriaxone 2g IV q12h + Metronidazole 500mg IV q6h + Vancomycin 15-20mg/kg q8h.",
      rationale: "Metronidazole crosses the blood-brain barrier effectively to cover oral anaerobes (Fusobacterium, Bacteroides, Peptostreptococcus)."
    }
  ],
  examTraps: [
    {
      misconception: "Metronidazole parent drug clearance drops dramatically in ESRD, requiring routine 50% dose reduction for all patients.",
      reality: "FALSE. Parent metronidazole is ~80% cleared by the liver, so parent drug PK does not by itself mandate one universal metronidazole dose reduction.",
      explanation: "While active hydroxy-metabolites accumulate during prolonged ESRD therapy, hemodialysis efficiently clears ~50% of drug and metabolites. Dose timing coordination relative to HD is recommended rather than a universal upfront dose reduction."
    }
  ],
  searchAliases: ["metronidazole", "flagyl", "anaerobic antibiotic", "nitroimidazole"],
  relatedTopicIds: ["necrotizing-soft-tissue-infections", "sepsis", "meningitis-encephalitis"]
};
