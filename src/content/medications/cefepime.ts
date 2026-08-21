import type { Medication } from "@/content-types/medication";

export const cefepime: Medication = {
  id: "cefepime",
  slug: "cefepime",
  name: "Cefepime",
  genericName: "Cefepime Hydrochloride",
  brandNames: ["Maxipime"],
  class: "4th-Generation Cephalosporin Antibiotic",
  category: "antimicrobials",
  subcategory: "Cephalosporins",
  summary: "Zwitterionic 4th-generation antipseudomonal cephalosporin with low affinity for AmpC beta-lactamases, ideal for VAP, febrile neutropenia, and AmpC producers, but carries risk of Cefepime-Induced Neurotoxicity (CIN) in unadjusted renal failure.",
  mechanism: {
    title: "Zwitterionic Cell Wall Penetration & PBP Inactivation",
    steps: [
      "Possesses a zwitterionic chemical structure (positive quaternary nitrogen + negative carboxyl group) allowing rapid penetration through Gram-negative porin channels.",
      "Resistant to hydrolysis by chromosomal AmpC beta-lactamases due to low enzymatic binding affinity.",
      "Binds with high affinity to essential Penicillin-Binding Proteins (PBPs 2 and 3).",
      "Inhibits peptidoglycan synthesis, resulting in rapid bacterial cell lysis."
    ],
    visualDiagram: "Zwitterionic Structure → Rapid Porin Entry → AmpC Stability → PBP 2/3 Inhibition → Rapid Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-susceptible Staphylococcus aureus (MSSA)", "Streptococcus pneumoniae (penicillin-susceptible & intermediate)", "Streptococcus pyogenes", "Streptococcus agalactiae"],
      notCovered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Enterococcus faecalis", "Enterococcus faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["Pseudomonas aeruginosa", "Enterobacter cloacae (AmpC producer)", "Citrobacter freundii (AmpC producer)", "Serratia marcescens", "Escherichia coli (wild-type)", "Klebsiella pneumoniae (wild-type)", "Haemophilus influenzae"],
      notCovered: ["ESBL-producing Enterobacterales (inactivated by ESBLs)", "KPC / NDM Carbapenemase producers", "Stenotrophomonas maltophilia", "Bacteroides fragilis (Lacks anaerobic activity)"]
    },
    anaerobes: {
      covered: [],
      notCovered: ["Bacteroides fragilis group (No activity — requires Metronidazole if anaerobes suspected)"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["MRSA", "Enterococcus", "Anaerobes (Bacteroides fragilis)", "ESBL Enterobacterales", "Listeria"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 50–70%)",
    halfLife: "2.0 hours in normal renal function (prolonged to 13–15 hours in severe renal impairment)",
    proteinBinding: "20%",
    metabolism: "15% metabolized to N-methylpyrrolidine (NMP) which can accumulate in renal failure",
    elimination: "85% renal excretion as unchanged drug via glomerular filtration",
    vdNotes: "0.26 L/kg (distributes rapidly into bronchial secretions, skin, and peritoneal fluid)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Drug of Choice for AmpC-producing Enterobacterales (Enterobacter, Citrobacter, Serratia) — resists AmpC hydrolysis.",
      "First-line empiric antipseudomonal beta-lactam for HAP/VAP and Febrile Neutropenia.",
      "Lower risk of AKI when paired with Vancomycin compared to Piperacillin-Tazobactam."
    ],
    whyIDont: [
      "Cefepime-Induced Neurotoxicity (CIN): Encephalopathy, nonconvulsive status epilepticus (NCSE), and myoclonus in unadjusted renal failure.",
      "No anaerobic activity — MUST add Metronidazole for intra-abdominal infections.",
      "Inactivated by ESBLs (do not use for confirmed ESBL infections)."
    ],
    bedsidePearl: "If an ICU patient on Cefepime develops unexplained altered mental status, myoclonus, or a slowed EEG with triphasic waves, suspect Cefepime-Induced Neurotoxicity (CIN)! Immediately adjust dose for CrCl or hold Cefepime and order a cEEG."
  },
  dosing: {
    routine: "Standard ICU / VAP / Febrile Neutropenia: 2.0 g IV every 8 hours (extended 3- to 4-hour infusion preferred).",
    syndromeSpecific: [
      {
        syndrome: "Hospital-Acquired / Ventilator-Associated Pneumonia (HAP/VAP)",
        regimen: "2.0 g IV every 8 hours (extended 3–4 hour infusion).",
        reference: "ATS/IDSA HAP/VAP Guidelines (Kalil AC et al. Clin Infect Dis 2016;63:e61-e111)."
      },
      {
        syndrome: "AmpC Enterobacterales Infection (Enterobacter / Citrobacter)",
        regimen: "2.0 g IV every 8 hours (extended infusion).",
        reference: "IDSA 2026 Guidance on AMR Infections (Tamma PD et al. Clin Infect Dis 2026)."
      },
      {
        syndrome: "Febrile Neutropenia Monotherapy",
        regimen: "2.0 g IV every 8 hours.",
        reference: "IDSA/ASCO Febrile Neutropenia Guidelines (Taplitz RA et al. J Clin Oncol 2018)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 50 mL/min", dose: "2.0 g IV every 8 hours (extended 3–4h infusion)." },
      { crclRange: "CrCl 30–50 mL/min", dose: "2.0 g IV every 12 hours (or 1.0 g q8h)." },
      { crclRange: "CrCl 11–29 mL/min", dose: "1.0 g IV every 12 hours (or 2.0 g q24h)." },
      { crclRange: "CrCl ≤ 10 mL/min", dose: "1.0 g IV every 24 hours (or 500 mg q12h)." }
    ],
    hdDosing: "1.0 g IV every 24 hours (or 2.0 g q24h for high-MIC Pseudomonas); give supplemental dose post-hemodialysis.",
    crrtDosing: "2.0 g IV every 12 hours (or 2.0 g q8h in high effluent rate CRRT)."
  },
  organFailure: {
    renalConsiderations: "Cleared 85% by kidneys. Unadjusted dosing in AKI/CKD causes accumulation of Cefepime and NMP metabolite, crossing the blood-brain barrier and binding GABA-A receptors, triggering CIN and status epilepticus.",
    hepaticConsiderations: "No dose adjustment required for isolated liver failure."
  },
  toxicity: {
    majorWarnings: [
      "Cefepime-Induced Neurotoxicity (CIN): Encephalopathy, altered consciousness, myoclonus, seizures, and nonconvulsive status epilepticus (NCSE).",
      "Immune-mediated Coombs-positive hemolytic anemia.",
      "Clostridioides difficile colitis."
    ],
    organToxicities: [
      { organ: "Central Nervous System", description: "Encephalopathy, myoclonus, confusion, nonconvulsive status epilepticus, coma." },
      { organ: "Gastrointestinal", description: "Diarrhea, C. difficile colitis, nausea." },
      { organ: "Hematologic", description: "Neutropenia, positive direct Coombs test, agranulocytosis." }
    ]
  },
  interactions: [
    {
      drug: "GABA-A Antagonists / Proconvulsant Drugs",
      mechanism: "Competitive inhibition of GABA-A receptor neurotransmission by accumulated cefepime",
      consequence: "Synergistic lowering of seizure threshold and encephalopathy",
      icuAction: "Monitor EEG closely in renal failure; adjust cefepime dose immediately."
    },
    {
      drug: "Aminoglycosides (Amikacin, Gentamicin)",
      mechanism: "Additive nephrotoxicity potential",
      consequence: "Increased risk of renal function decline",
      icuAction: "Monitor TDM and renal function parameters daily."
    }
  ],
  monitoring: {
    parameters: [
      "Renal Function (CrCl) daily to prevent Cefepime-Induced Neurotoxicity (CIN)",
      "Neurologic Status (GCS, myoclonus, twitching, unexplained somnolence)",
      "Continuous EEG if CIN or nonconvulsive status epilepticus is suspected",
      "CBC with differential weekly"
    ]
  },
  stewardship: {
    deEscalationNotes: "De-escalate to Ceftriaxone, Cefazolin, or Ampicillin once cultures demonstrate susceptibility and rule out Pseudomonas aeruginosa.",
    broadNotBetterPoint: "Cefepime lacks anaerobic activity. If using Cefepime for intra-abdominal infections or aspiration pneumonia, add Metronidazole."
  },
  evidenceTraceability: {
    guidelineIds: ["amr-guideline-idsa-2026", "vap-guideline-ats-idsa-2016"],
    claimCitations: [
      {
        claim: "IDSA 2026 AMR Guidance recommends Cefepime 2g q8h as first-line therapy for AmpC-producing Enterobacterales.",
        source: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections. Clin Infect Dis 2026.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/37463136/"
      },
      {
        claim: "Cefepime neurotoxicity occurs predominantly in renal impairment with unadjusted high-dose regimens.",
        source: "Appa AA et al. Characterizing Cefepime Neurotoxicity: A Systematic Review. Open Forum Infect Dis 2017;4(4):ofx170.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/29082337/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "AmpC Enterobacter cloacae Bacteremia",
      clinicalContext: "Blood culture grows Enterobacter cloacae resistant to Ceftriaxone but sensitive to Cefepime.",
      decision: "Initiate Cefepime 2.0 g IV every 8 hours (extended 3-hour infusion).",
      rationale: "Cefepime resists AmpC beta-lactamase induction, preventing treatment failure seen with 3rd gen cephalosporins."
    },
    {
      title: "Cefepime-Induced Neurotoxicity in AKI",
      clinicalContext: "An elderly patient with acute-on-chronic renal failure (CrCl 18 mL/min) on Cefepime 2g q8h develops sudden confusion, myoclonic jerks, and stupor.",
      decision: "HOLD Cefepime, order emergent cEEG, and switch to Meropenem (renally adjusted).",
      rationale: "Classic presentation of Cefepime-Induced Neurotoxicity (CIN) caused by unadjusted dosing in renal failure."
    }
  ],
  examTraps: [
    {
      misconception: "Cefepime provides empirical anaerobic coverage for intra-abdominal infections.",
      reality: "FALSE. Cefepime has no activity against Bacteroides fragilis or obligate anaerobes.",
      explanation: "Unlike Pip-Tazo or Meropenem, Cefepime lacks anaerobic activity. It MUST be co-administered with Metronidazole for intra-abdominal or pelvic infections."
    }
  ],
  searchAliases: ["cefepime", "maxipime", "4th gen cephalosporin", "ampc antibiotic", "cin"],
  relatedTopicIds: ["vap", "hap", "sepsis", "mdr-organisms"]
};
