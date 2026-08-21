import type { Medication } from "@/content-types/medication";

export const piperacillinTazobactam: Medication = {
  id: "piperacillin-tazobactam",
  slug: "piperacillin-tazobactam",
  name: "Piperacillin–Tazobactam",
  genericName: "Piperacillin Sodium and Tazobactam Sodium",
  brandNames: ["Zosyn"],
  class: "Antipseudomonal Penicillin & Beta-Lactamase Inhibitor",
  category: "antimicrobials",
  subcategory: "Penicillins",
  summary: "Workhorse ICU antipseudomonal penicillin providing broad Gram-negative, Gram-positive, and anaerobic coverage — best administered as an extended 4-hour infusion, but carries synergy for AKI when combined with Vancomycin.",
  mechanism: {
    title: "PBP Inhibition + Beta-Lactamase Suicide Inactivation",
    steps: [
      "Piperacillin binds essential PBPs (PBPs 1b, 2, and 3), blocking peptidoglycan transpeptidation.",
      "Tazobactam irreversibly binds and inactivates plasmid-mediated beta-lactamases (TEM, SHV, penicillinases).",
      "Protects piperacillin from enzymatic degradation, restoring activity against beta-lactamase-producing pathogens.",
      "Results in cell wall disruption and bactericidal cell lysis."
    ],
    visualDiagram: "Piperacillin + Tazobactam → Beta-Lactamase Inactivation → PBP 1b/2/3 Binding → Cell Wall Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-susceptible Staphylococcus aureus (MSSA)", "Streptococcus pneumoniae", "Streptococcus pyogenes", "Enterococcus faecalis (susceptible)"],
      notCovered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Enterococcus faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["Pseudomonas aeruginosa", "Escherichia coli (wild-type)", "Klebsiella pneumoniae (wild-type)", "Proteus mirabilis", "Enterobacter cloacae", "Haemophilus influenzae"],
      notCovered: ["ESBL-producing Enterobacterales (high inoculum failure / MERINO trial)", "AmpC derepressed hyperproducers", "KPC / NDM Carbapenemase producers", "Stenotrophomonas maltophilia"]
    },
    anaerobes: {
      covered: ["Bacteroides fragilis", "Bacteroides thetaiotaomicron", "Peptostreptococcus spp.", "Fusobacterium spp."],
      notCovered: ["Clostridioides difficile"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["MRSA", "Enterococcus faecium", "ESBL bacteremia", "Stenotrophomonas", "C. difficile"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 50%)",
    halfLife: "0.7 to 1.2 hours in normal renal function (extended to 4–6 hours in severe renal failure)",
    proteinBinding: "30%",
    metabolism: "Minor hepatic metabolism to inactive metabolite",
    elimination: "68% renal excretion via glomerular filtration and active tubular secretion",
    vdNotes: "0.24 L/kg (expands significantly in septic shock; extended infusion overcomes high clearance)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line empiric monotherapy for HAP/VAP, intra-abdominal sepsis, and febrile neutropenia when Pseudomonas is suspected.",
      "Comprehensive single-agent coverage including Pseudomonas aeruginosa AND obligate anaerobes (B. fragilis).",
      "Extended 4-hour infusion (4.5 g q6h over 4 hours) improves target attainment (%fT > MIC) and clinical cure in critically ill patients."
    ],
    whyIDont: [
      "Increased incidence of Acute Kidney Injury (AKI) when combined with Vancomycin (Vancomycin + Zosyn AKI synergy).",
      "Inferior to Meropenem for ESBL bacteremia (MERINO trial).",
      "Unreliable against AmpC hyperproducing Enterobacterales."
    ],
    bedsidePearl: "Administer Pip-Tazo as an EXTENDED INFUSION (4.5 g IV over 4 hours every 6 hours) in the ICU. When combining with Vancomycin, monitor renal function daily — if AKI occurs, consider switching Pip-Tazo to Cefepime or Meropenem."
  },
  dosing: {
    routine: "Standard ICU Regimen: 4.5 g IV every 6 hours as an extended 4-hour infusion (or 3.375 g IV q6h over 4h).",
    syndromeSpecific: [
      {
        syndrome: "Hospital-Acquired / Ventilator-Associated Pneumonia (HAP/VAP)",
        regimen: "4.5 g IV every 6 hours (extended 4-hour infusion).",
        reference: "ATS/IDSA HAP/VAP Guidelines (Kalil AC et al. Clin Infect Dis 2016;63:e61-e111)."
      },
      {
        syndrome: "Complicated Intra-Abdominal Infection (cIAI)",
        regimen: "4.5 g IV every 6 hours (extended 4-hour infusion).",
        reference: "SIS/IDSA Intra-abdominal Infection Guidelines (Solomkin JS et al. Clin Infect Dis 2010)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 50 mL/min", dose: "4.5 g IV every 6 hours (extended infusion over 4h)." },
      { crclRange: "CrCl 20–50 mL/min", dose: "3.375 g IV every 6 hours (extended infusion over 4h)." },
      { crclRange: "CrCl < 20 mL/min", dose: "2.25 g IV every 6 hours (extended infusion over 4h)." }
    ],
    hdDosing: "2.25 g IV every 6 hours (or 3.375 g q12h); give supplemental 0.75 g post-hemodialysis.",
    crrtDosing: "3.375 g IV every 6 hours as an extended 4-hour infusion."
  },
  organFailure: {
    renalConsiderations: "Primary renal elimination. Dose reduction required for CrCl < 50 mL/min. Co-administration with Vancomycin increases AKI risk by 2- to 3-fold.",
    hepaticConsiderations: "No primary hepatic dose adjustment required."
  },
  toxicity: {
    majorWarnings: [
      "Vancomycin + Pip-Tazo AKI Synergy: Substantially higher risk of acute kidney injury compared to Vancomycin + Cefepime.",
      "Hypokalemia & Sodium Load: Each 4.5g dose contains 11.18 mEq (257 mg) of Na+.",
      "Bone Marrow Suppression: Neutropenia and thrombocytopenia with prolonged therapy (>14 days)."
    ],
    organToxicities: [
      { organ: "Renal", description: "Acute interstitial nephritis, acute tubular injury (especially with Vancomycin)." },
      { organ: "Gastrointestinal", description: "Diarrhea, C. difficile colitis, nausea." },
      { organ: "Hematologic", description: "Eosinophilia, leukopenia, neutropenia, prolonged bleeding time." }
    ]
  },
  interactions: [
    {
      drug: "Vancomycin",
      mechanism: "Synergistic renal tubular toxicity and interstitial inflammation",
      consequence: "Markedly increased incidence of AKI in ICU patients",
      icuAction: "Monitor serum creatinine daily. Switch Pip-Tazo to Cefepime if AKI develops or if patient is at high baseline AKI risk."
    },
    {
      drug: "Methotrexate",
      mechanism: "Inhibition of renal tubular secretion of methotrexate",
      consequence: "Increased serum methotrexate levels and severe toxicity",
      icuAction: "Monitor methotrexate levels closely."
    }
  ],
  monitoring: {
    parameters: [
      "Serum Creatinine and BUN daily (monitor for Vanc+Zosyn AKI synergy)",
      "Serum Potassium and Sodium (check for hypokalemia and sodium overload)",
      "CBC with differential weekly during prolonged courses",
      "Infusion duration compliance (ensure 4-hour extended infusion protocol)"
    ]
  },
  stewardship: {
    deEscalationNotes: "Narrow to Cefazolin, Ceftriaxone, or Ampicillin-Sulbactam once cultures rule out Pseudomonas aeruginosa.",
    broadNotBetterPoint: "Routine addition of Metronidazole to Pip-Tazo is completely unnecessary because Pip-Tazo already covers Bacteroides fragilis."
  },
  evidenceTraceability: {
    guidelineIds: ["vap-guideline-ats-idsa-2016"],
    trialIds: ["merino-trial-jama-2018"],
    claimCitations: [
      {
        claim: "ATS/IDSA HAP/VAP Guidelines recommend Pip-Tazo 4.5 g IV q6h extended infusion for empiric antipseudomonal therapy.",
        source: "Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Guidelines. Clin Infect Dis 2016;63(5):e61-e111.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/27418577/"
      },
      {
        claim: "Vancomycin plus Piperacillin-Tazobactam combination increases AKI incidence compared to Vancomycin plus Cefepime.",
        source: "Rutter WC et al. Academic Emergency Medicine 2017;24(12):1448-1456.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/28859268/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Empiric VAP Coverage with Extended Infusion",
      clinicalContext: "An intubated patient develops purulent endotracheal secretions and new infiltrates.",
      decision: "Initiate Piperacillin-Tazobactam 4.5 g IV every 6 hours as a 4-hour extended infusion + Vancomycin.",
      rationale: "Extended infusion optimizes %fT > MIC for Pseudomonas aeruginosa in respiratory tissue."
    },
    {
      title: "Developing AKI on Vancomycin + Pip-Tazo",
      clinicalContext: "On day 3 of Vanc + Pip-Tazo, creatinine increases from 0.8 to 1.8 mg/dL.",
      decision: "Switch Piperacillin-Tazobactam to Cefepime 2g IV q8h (extended infusion).",
      rationale: "Eliminates the synergistic AKI risk of Pip-Tazo + Vancomycin while maintaining antipseudomonal coverage."
    }
  ],
  examTraps: [
    {
      misconception: "Piperacillin-Tazobactam requires additional Metronidazole for intra-abdominal anaerobic infections.",
      reality: "FALSE. Pip-Tazo has potent intrinsic coverage against Bacteroides fragilis and intra-abdominal anaerobes.",
      explanation: "Tazobactam protects piperacillin against B. fragilis beta-lactamases. Adding Metronidazole is redundant, increases neurotoxicity risk, and adds cost."
    }
  ],
  searchAliases: ["piperacillin-tazobactam", "zosyn", "pip-tazo", "antipseudomonal penicillin"],
  relatedTopicIds: ["vap", "hap", "sepsis", "mdr-organisms", "necrotizing-soft-tissue-infections"]
};
