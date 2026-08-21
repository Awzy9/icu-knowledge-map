import type { Medication } from "@/content-types/medication";

export const vancomycin: Medication = {
  id: "vancomycin",
  slug: "vancomycin",
  name: "Vancomycin",
  genericName: "Vancomycin Hydrochloride",
  brandNames: ["Vancocin"],
  class: "Glycopeptide Antibiotic",
  category: "antimicrobials",
  subcategory: "Glycopeptides",
  summary: "Workhorse parenteral glycopeptide for serious MRSA infections, CoNS, and Enterococcus faecalis — requires weight-based loading (25–30 mg/kg), AUC24/MIC monitoring (400–600 mg·h/L), and renal vigilance.",
  mechanism: {
    title: "Cell Wall Peptidoglycan D-Ala-D-Ala Binding",
    steps: [
      "Binds with high affinity to the D-alanyl-D-alanine terminus of cell wall peptidoglycan precursors.",
      "Sterically inhibits transglycosylation and transpeptidation, halting peptidoglycan polymer elongation.",
      "Alters bacterial cell membrane permeability and impairs RNA synthesis.",
      "Produces slow bactericidal cell death against Gram-positive bacteria."
    ],
    visualDiagram: "Vancomycin → D-Ala-D-Ala Binding → Steric Transglycosylation Blockade → Cell Wall Synthesis Stop"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Methicillin-susceptible Staphylococcus aureus (MSSA)", "Coagulase-negative Staphylococci (CoNS)", "Streptococcus pneumoniae (penicillin-resistant)", "Enterococcus faecalis (vancomycin-susceptible)", "Clostridioides difficile (ORAL route only)"],
      notCovered: ["Vancomycin-resistant Enterococcus (VRE faecium vanA/vanB)", "VRSA", "VISA (relative resistance)"]
    },
    gramNegative: {
      covered: [],
      notCovered: ["All Gram-negative bacteria (Large molecular weight prevents penetration through outer membrane porins)"]
    },
    anaerobes: {
      covered: ["Clostridium perfringens", "Peptostreptococcus spp.", "Clostridioides difficile (ORAL route only)"],
      notCovered: ["Bacteroides fragilis", "Gram-negative anaerobes"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["All Atypicals & Fungi"]
    },
    notableGaps: ["All Gram-negative Bacilli (E. coli, Pseudomonas)", "VRE (vanA/vanB)", "Oral Vancomycin is NOT absorbed systemically"]
  },
  pkPd: {
    type: "auc-mic",
    targetParameter: "AUC24 / MIC ratio (Target AUC24/MIC = 400–600 mg·h/L for MRSA assuming MIC ≤ 1 mg/L)",
    halfLife: "4.0 to 6.0 hours in normal renal function (extended to 60–120 hours in ESRD)",
    proteinBinding: "30% to 55%",
    metabolism: "Minimal hepatic metabolism",
    elimination: "75% to 90% renal excretion via glomerular filtration",
    vdNotes: "0.4 to 1.0 L/kg (actual body weight used for loading dose calculations)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Gold-standard empiric anti-MRSA coverage for HAP/VAP, severe sepsis, purulent NSTI, and intravascular catheter infections.",
      "First-line oral therapy for Clostridioides difficile colitis (oral vancomycin 125–500 mg PO q6h is NOT absorbed systemically).",
      "Well-established therapeutic drug monitoring (TDM) protocols based on Bayesian AUC estimation."
    ],
    whyIDont: [
      "Nephrotoxicity risk (increases with AUC > 600, trough > 20 mcg/mL, prolonged duration, and co-administration with Pip-Tazo).",
      "Infusion-related Vancomycin Flushing Syndrome ('Red Man Syndrome') if infused too rapidly (<1 hour per 1000 mg).",
      "Slow bactericidal activity compared to beta-lactams for MSSA (MSSA bacteremia mortality is higher with Vancomycin than Cefazolin/Nafcillin)."
    ],
    bedsidePearl: "ALWAYS give an initial weight-based Loading Dose of 25–30 mg/kg IV (based on actual body weight, max 3000 mg) for critically ill septic patients! Transition from traditional trough monitoring (15–20 mcg/mL) to Bayesian AUC24/MIC monitoring (target 400–600 mg·h/L) to cut AKI risk in half."
  },
  dosing: {
    routine: "Loading Dose: 25–30 mg/kg IV (actual body weight; max 3000 mg). Maintenance: 15–20 mg/kg IV q8–12h.",
    syndromeSpecific: [
      {
        syndrome: "Severe MRSA Infection / HAP / VAP / Septic Shock",
        regimen: "Loading dose 25–30 mg/kg IV ONCE. Maintenance 15–20 mg/kg IV q8–12h targeting AUC24/MIC 400–600 mg·h/L.",
        reference: "2020 ASHP/IDSA/SIDP Therapeutic Monitoring Guidelines for Vancomycin (Rybak MJ et al. Am J Health-Syst Pharm 2020;77:835-864)."
      },
      {
        syndrome: "Clostridioides difficile Colitis (Oral Route ONLY)",
        regimen: "125 mg PO every 6 hours for 10 days (or 500 mg PO q6h for severe complicated CDI).",
        reference: "IDSA/SHEA 2021 C. difficile Guidelines (Johnson S et al. Clin Infect Dis 2021;73:e1029)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 50 mL/min", dose: "15–20 mg/kg IV every 8 to 12 hours." },
      { crclRange: "CrCl 30–50 mL/min", dose: "15–20 mg/kg IV every 12 to 24 hours." },
      { crclRange: "CrCl 15–29 mL/min", dose: "15–20 mg/kg IV every 24 to 48 hours." },
      { crclRange: "CrCl < 15 mL/min", dose: "Loading dose 25 mg/kg IV once, then redose when serum level falls below 15–20 mcg/mL." }
    ],
    hdDosing: "Loading dose 25 mg/kg IV once. Maintenance 10–15 mg/kg IV post-dialysis; redose guided by pre-HD serum concentrations (target 15–20 mcg/mL).",
    crrtDosing: "Loading dose 20–25 mg/kg IV. Maintenance 10–15 mg/kg IV every 12 hours, guided by AUC or trough levels (target 15–20 mcg/mL)."
  },
  organFailure: {
    renalConsiderations: "Primary renal elimination. Glomerular filtration dysfunction causes rapid accumulation. High AUC24 (>600 mg·h/L) directly induces renal tubular cell injury and apoptosis.",
    hepaticConsiderations: "No dose reduction required for isolated liver dysfunction."
  },
  toxicity: {
    majorWarnings: [
      "Nephrotoxicity: Directly linked to AUC24 > 600 mg·h/L, trough > 20 mcg/mL, and co-administration with Pip-Tazo.",
      "Vancomycin Flushing Syndrome (Red Man Syndrome): Non-immunologic histamine release triggered by rapid IV infusion rates.",
      "Ototoxicity: Auditory nerve damage (rare, typically associated with extreme overdose or concurrent aminoglycosides)."
    ],
    organToxicities: [
      { organ: "Renal", description: "Acute Tubular Injury, interstitial nephritis, serum creatinine elevation." },
      { organ: "Dermatologic / Systemic", description: "Flushing of neck/upper torso, pruritus, hypotension (Red Man Syndrome)." },
      { organ: "Hematologic", description: "Reversible neutropenia, thrombocytopenia, drug fever." }
    ]
  },
  interactions: [
    {
      drug: "Piperacillin-Tazobactam (Zosyn)",
      mechanism: "Synergistic renal tubular epithelial injury",
      consequence: "Markedly increased incidence of AKI compared to Vancomycin + Cefepime",
      icuAction: "Monitor renal function daily. Switch Pip-Tazo to Cefepime if AKI risk is high."
    },
    {
      drug: "Aminoglycosides / Loop Diuretics",
      mechanism: "Additive nephrotoxic and ototoxic damage",
      consequence: "Increased risk of renal failure and hearing loss",
      icuAction: "Perform daily AUC TDM and renal monitoring."
    }
  ],
  monitoring: {
    parameters: [
      "Therapeutic Drug Monitoring (TDM): Target AUC24/MIC 400–600 mg·h/L using Bayesian software or 2-point peak/trough levels",
      "Traditional TDM (if AUC unavailable): Trough 15–20 mcg/mL for serious MRSA infections",
      "Serum Creatinine and BUN daily",
      "IV Infusion Rate: Ensure maximum rate of 1000 mg over 60 minutes (1500 mg over 90 min, 2000 mg over 120 min)"
    ],
    tdmProtocol: {
      targetAUC: "400–600 mg·h/L (assuming MRSA MIC ≤ 1 mg/L)",
      targetTrough: "15–20 mcg/mL (for severe MRSA bacteremia, pneumonia, endocarditis)",
      timing: "Draw trough within 30 minutes prior to 4th or 5th maintenance dose at steady state."
    }
  },
  stewardship: {
    deEscalationNotes: "Discontinue Vancomycin immediately if nasal MRSA PCR is negative in HAP/VAP, or if cultures grow MSSA (switch to Cefazolin or Nafcillin).",
    broadNotBetterPoint: "Vancomycin is INFERIOR to Cefazolin and Nafcillin/Oxacillin for MSSA bacteremia (higher mortality and treatment failure). Never use Vancomycin for MSSA when beta-lactams are tolerated."
  },
  evidenceTraceability: {
    guidelineIds: ["vancomycin-tdm-guideline-2020", "vap-guideline-ats-idsa-2016"],
    claimCitations: [
      {
        claim: "2020 ASHP/IDSA/SIDP Consensus Guidelines recommend AUC24/MIC 400–600 mg·h/L over trough-only monitoring to reduce AKI.",
        source: "Therapeutic monitoring of vancomycin in adult patients: A consensus guideline by ASHP, IDSA, PIDS, SIDP. Am J Health-Syst Pharm 2020;77(11):835-864.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/32191793/"
      },
      {
        claim: "Empiric Vancomycin loading dose in severe sepsis is 25–30 mg/kg based on actual body weight.",
        source: "FDA / DailyMed Vancocin (Vancomycin) Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Empiric Loading Dose in Septic Shock",
      clinicalContext: "A 90 kg male presents in septic shock from severe MRSA pneumonia.",
      decision: "Administer Vancomycin 2500 mg IV (27.7 mg/kg) ONCE over 150 minutes, then 1500 mg IV q12h.",
      rationale: "Septic shock expands Vd. A weight-based loading dose (25–30 mg/kg) achieves therapeutic drug levels within hours."
    },
    {
      title: "De-Escalation in Confirmed MSSA Bacteremia",
      clinicalContext: "Blood cultures grow Staphylococcus aureus identified as MSSA (oxacillin susceptible).",
      decision: "Discontinue Vancomycin and start Cefazolin 2.0 g IV every 8 hours.",
      rationale: "Beta-lactams (Cefazolin/Nafcillin) demonstrate lower mortality and faster bacterial clearance than Vancomycin for MSSA."
    }
  ],
  examTraps: [
    {
      misconception: "IV Vancomycin treats Clostridioides difficile colitis.",
      reality: "FALSE. IV Vancomycin is NOT excreted into the intestinal lumen and has zero efficacy for C. difficile.",
      explanation: "Oral Vancomycin is non-absorbable and stays in the gut lumen to treat C. difficile. IV Vancomycin penetrates tissues and is excreted by kidneys, providing zero luminal gut drug levels."
    }
  ],
  searchAliases: ["vancomycin", "vancocin", "glycopeptide", "mrsa antibiotic", "auc mic vancomycin"],
  relatedTopicIds: ["mdr-organisms", "vap", "hap", "sepsis", "necrotizing-soft-tissue-infections"]
};
