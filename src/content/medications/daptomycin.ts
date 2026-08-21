import type { Medication } from "@/content-types/medication";

export const daptomycin: Medication = {
  id: "daptomycin",
  slug: "daptomycin",
  name: "Daptomycin",
  genericName: "Daptomycin",
  brandNames: ["Cubicin"],
  class: "Cyclic Lipopeptide Antibiotic",
  category: "antimicrobials",
  subcategory: "Lipopeptides",
  summary: "Rapidly bactericidal cyclic lipopeptide for MRSA bacteremia, right-sided endocarditis, and VRE — requires weekly CPK monitoring and IS STRICTLY INEFFECTIVE IN PNEUMONIA due to surfactant inactivation.",
  mechanism: {
    title: "Calcium-Dependent Membrane Depolarization & Ion Efflux",
    steps: [
      "Binds to bacterial cell membranes in a calcium-dependent manner.",
      "Inserts its lipophilic decanoyl side chain into the Gram-positive cytoplasmic membrane.",
      "Aggregates and oligomerizes, forming transmembrane channels that disrupt membrane potential.",
      "Causes rapid efflux of intracellular potassium ($K^+$) and monovalent ions, resulting in membrane depolarization.",
      "Halts DNA, RNA, and protein synthesis, resulting in rapid bactericidal cell death WITHOUT bacterial cell lysis."
    ],
    visualDiagram: "Daptomycin + Ca2+ → Lipophilic Insertion → Membrane Oligomerization → Rapid K+ Efflux → Depolarization"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Methicillin-susceptible Staphylococcus aureus (MSSA)", "Vancomycin-resistant Enterococcus faecium (VRE)", "Vancomycin-resistant Enterococcus faecalis", "Coagulase-negative Staphylococci (CoNS)", "Streptococcus agalactiae / pyogenes"],
      notCovered: ["Gram-negative bacteria (All inherently resistant)"]
    },
    gramNegative: {
      covered: [],
      notCovered: ["All Gram-negative bacteria (Outer membrane lipopolysaccharide blocks daptomycin insertion)"]
    },
    anaerobes: {
      covered: ["Peptostreptococcus spp."],
      notCovered: ["Bacteroides fragilis group", "Clostridium spp."]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["All Atypicals & Fungi"]
    },
    notableGaps: ["ALL PNEUMONIA (Inactivated by Surfactant)", "All Gram-negative bacteria", "Gram-negative Anaerobes"]
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "AUC24 / MIC ratio and Cmax / MIC ratio (Target Cmax/MIC ≥ 100)",
    halfLife: "8.0 to 9.0 hours in normal renal function (extended to 28–30 hours in ESRD)",
    proteinBinding: "90% to 93% (reversible binding to human serum albumin)",
    metabolism: "Minimal hepatic metabolism; no specific CYP interactions",
    elimination: "78% renal excretion (52% unchanged drug in urine); 5% in feces",
    vdNotes: "0.1 L/kg (primarily confined to vascular and extracellular space; dosed on Actual or Total Body Weight)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Rapidly bactericidal drug of choice for MRSA Bacteremia and Right-Sided Infective Endocarditis.",
      "High-dose Daptomycin (10–12 mg/kg/day) is a preferred first-line bactericidal option for Vancomycin-Resistant Enterococcus (VRE) bacteremia.",
      "Low risk of nephrotoxicity compared to Vancomycin; excellent option in severe AKI."
    ],
    whyIDont: [
      "CRITICAL EXAM & CLINICAL TRAP: ABSOLUTELY CONTRAINDICATED IN PNEUMONIA! Pulmonary surfactant binds daptomycin and completely neutralizes its antimicrobial activity.",
      "Skeletal muscle toxicity / Rhabdomyolysis risk (requires weekly serum CPK monitoring).",
      "Eosinophilic pneumonia development after 2–4 weeks of therapy."
    ],
    bedsidePearl: "NEVER USE DAPTOMYCIN FOR PNEUMONIA! Pulmonary surfactant binds and neutralizes daptomycin in alveoli, leading to rapid clinical failure and mortality. Reserve Daptomycin for bacteremia, endocarditis, and skin/soft tissue infections."
  },
  dosing: {
    routine: "MRSA Bacteremia / Endocarditis: 8–10 mg/kg IV once daily (actual body weight). VRE: 10–12 mg/kg IV q24h.",
    syndromeSpecific: [
      {
        syndrome: "MRSA Bloodstream Infection / Right-Sided Endocarditis",
        regimen: "8–10 mg/kg IV once daily (infused over 30 minutes or 2-minute IV injection).",
        reference: "IDSA MRSA Guidelines (Liu C et al. Clin Infect Dis 2011;52:e18-e55).",
        note: "Higher doses (8–10 mg/kg) reduce resistance emergence and improve bacteremia clearance."
      },
      {
        syndrome: "VRE Bacteremia / Severe Enterococcal Infection",
        regimen: "10–12 mg/kg IV once daily.",
        reference: "IDSA 2026 Guidance on AMR Infections (Tamma PD et al. Clin Infect Dis 2026)."
      },
      {
        syndrome: "Complicated Skin & Soft Tissue Infection (cSSTI)",
        regimen: "4–6 mg/kg IV once daily for 7–14 days.",
        reference: "FDA Prescribing Information."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl ≥ 30 mL/min", dose: "8–10 mg/kg IV once every 24 hours." },
      { crclRange: "CrCl < 30 mL/min / ESRD", dose: "8–10 mg/kg IV once every 48 hours." }
    ],
    hdDosing: "8–10 mg/kg IV once every 48 hours; administer post-hemodialysis on HD days.",
    crrtDosing: "8–10 mg/kg IV once every 24 hours (CVVH/CVVHD clears daptomycin, requiring daily dosing)."
  },
  organFailure: {
    renalConsiderations: "Cleared primarily by kidneys. Clearance is reduced when CrCl < 30 mL/min, requiring extension of dosing interval to every 48 hours to prevent CPK elevation.",
    hepaticConsiderations: "Minimal hepatic metabolism; no dose adjustment required for mild-to-moderate liver impairment."
  },
  toxicity: {
    majorWarnings: [
      "STRICT CONTRAINDICATION IN PNEUMONIA: Surfactant inactivation causes total loss of therapeutic activity in lung parenchyma.",
      "Rhabdomyolysis & Myopathy: Muscle toxicity, elevated CPK, muscle pain/weakness; risk increases with STATIN co-administration.",
      "Eosinophilic Pneumonia: Non-infectious hypersensitivity lung injury marked by fever, dyspnea, hypoxic infiltrates, and >25% eosinophils on BAL."
    ],
    organToxicities: [
      { organ: "Musculoskeletal", description: "Myopathy, rhabdomyolysis, elevated serum Creatine Phosphokinase (CPK)." },
      { organ: "Respiratory", description: "Drug-induced Eosinophilic Pneumonia (requires holding drug and IV steroids)." },
      { organ: "Peripheral Nervous System", description: "Peripheral neuropathy, paresthesias." }
    ]
  },
  interactions: [
    {
      drug: "HMG-CoA Reductase Inhibitors (Statins: Atorvastatin, Simvastatin)",
      mechanism: "Additive skeletal muscle toxicity",
      consequence: "Markedly increased risk of rhabdomyolysis and severe CPK elevation",
      icuAction: "Temporarily HOLD statins while patient is receiving Daptomycin."
    }
  ],
  monitoring: {
    parameters: [
      "Serum Creatine Phosphokinase (CPK) WEEKLY (or 2-3x weekly in renal failure or prior statin use)",
      "Daily muscle symptom evaluation (myalgias, weakness, dark urine)",
      "Daily Blood Cultures until clear for bacteremia",
      "Renal Function (CrCl) to adjust interval to q48h when CrCl < 30"
    ]
  },
  stewardship: {
    deEscalationNotes: "De-escalate to Cefazolin or Nafcillin if MSSA is confirmed. Switch to Vancomycin if patient develops severe CPK elevation (>1000 U/L or 5x ULN).",
    broadNotBetterPoint: "Reserving high-dose Daptomycin (10–12 mg/kg) for documented VRE or refractory MRSA bacteremia prevents selection of daptomycin-resistant (GdpD/MprF mutation) strains."
  },
  evidenceTraceability: {
    guidelineIds: ["amr-guideline-idsa-2026"],
    claimCitations: [
      {
        claim: "IDSA 2026 AMR Guidance recommends high-dose Daptomycin (10–12 mg/kg/day) for VRE bacteremia.",
        source: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections. Clin Infect Dis 2026.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/37463136/"
      },
      {
        claim: "Daptomycin is inactivated by pulmonary surfactant and must NOT be used to treat pneumonia.",
        source: "Silverman JA et al. Resistance studies with daptomycin and surfactant inactivation mechanism. J Infect Dis 2005;191(12):2149-2152.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/15897999/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Refractory MRSA Bacteremia with AKI on Vancomycin",
      clinicalContext: "A 50-year-old with persistent MRSA bacteremia on day 5 of Vancomycin; serum creatinine rises from 1.0 to 2.4 mg/dL.",
      decision: "Switch Vancomycin to Daptomycin 8–10 mg/kg IV once daily (hold statins).",
      rationale: "Daptomycin provides rapid bactericidal clearance of MRSA bacteremia while sparing the kidneys."
    },
    {
      title: "MRSA Pneumonia Incorrectly Prescribed Daptomycin",
      clinicalContext: "Patient admitted with MRSA cavitary pneumonia is started on Daptomycin 6 mg/kg daily by admitting team.",
      decision: "IMMEDIATELY CANCEL Daptomycin and switch to Linezolid 600 mg IV q12h (or Vancomycin).",
      rationale: "Daptomycin is bound and neutralized by alveolar surfactant, leading to treatment failure and death in pneumonia."
    }
  ],
  examTraps: [
    {
      misconception: "Daptomycin is a good second-line option for MRSA pneumonia if Vancomycin causes AKI.",
      reality: "FALSE. Daptomycin is STRICTLY CONTRAINDICATED in pneumonia.",
      explanation: "Pulmonary surfactant neutralizes daptomycin in the alveoli. Use Linezolid 600 mg IV q12h for MRSA pneumonia when vancomycin cannot be used."
    }
  ],
  searchAliases: ["daptomycin", "cubicin", "lipopeptide", "mrsa bacteremia", "vre daptomycin"],
  relatedTopicIds: ["mdr-organisms", "sepsis", "necrotizing-soft-tissue-infections"]
};
