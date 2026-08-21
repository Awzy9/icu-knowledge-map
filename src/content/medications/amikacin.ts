import type { Medication } from "@/content-types/medication";

export const amikacin: Medication = {
  id: "amikacin",
  slug: "amikacin",
  name: "Amikacin",
  genericName: "Amikacin Sulfate",
  brandNames: ["Amikin"],
  class: "Aminoglycoside Antibiotic",
  category: "antimicrobials",
  subcategory: "Aminoglycosides",
  summary: "Potent concentration-dependent aminoglycoside for severe MDR Gram-negative bacilli and Pseudomonas aeruginosa — requires distinguishing Product-Label Conventional Dosing from Critical Care Extended-Interval PK Strategies, therapeutic drug monitoring (TDM), and ototoxicity/nephrotoxicity vigilance.",
  mechanism: {
    title: "30S Ribosomal Subunit Binding & Protein Synthesis Disruption",
    steps: [
      "Binds irreversibly to the 16S rRNA of the 30S bacterial ribosomal subunit.",
      "Interferes with the initiation complex, causes mRNA misreading, and incorporates incorrect amino acids into growing polypeptide chains.",
      "Disrupts cell membrane integrity via accumulation of mistranslated non-functional proteins.",
      "Results in rapid, concentration-dependent bactericidal bacterial death."
    ],
    visualDiagram: "Amikacin → 30S Subunit Binding → mRNA Misreading → Defective Membrane Proteins → Rapid Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Mycobacterium tuberculosis", "Mycobacterium avium complex (MAC)", "Mycobacterium abscessus"],
      notCovered: ["Staphylococcus aureus (monotherapy)", "Streptococcus pneumoniae", "Enterococcus faecalis / faecium (monotherapy)"]
    },
    gramNegative: {
      covered: ["Pseudomonas aeruginosa", "Acinetobacter baumannii", "Klebsiella pneumoniae (including gentamicin/tobramycin resistant strains)", "Escherichia coli", "Enterobacter cloacae", "Serratia marcescens", "Proteus mirabilis"],
      notCovered: ["Stenotrophomonas maltophilia (variable)", "Burkholderia cepacia"]
    },
    anaerobes: {
      covered: [],
      notCovered: ["Bacteroides fragilis", "Clostridium spp.", "Peptostreptococcus spp. (Lacks activity against obligate anaerobes — aminoglycoside uptake requires oxidative phosphorylation)"]
    },
    atypicalsFungi: {
      covered: ["Nontuberculous Mycobacteria (NTM)"],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["Obligate Anaerobes (Lacks activity)", "Gram-positive monotherapy", "Atypicals", "Fungi"]
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "Peak / MIC ratio (Target Peak/MIC ≥ 8–10) + Post-Antibiotic Effect (PAE)",
    halfLife: "2.0 to 3.0 hours in normal renal function (extended to 30–60 hours in ESRD)",
    proteinBinding: "<11% (very low protein binding)",
    metabolism: "None (excreted completely unchanged)",
    elimination: "94% to 98% renal excretion via glomerular filtration",
    vdNotes: "0.25 to 0.35 L/kg in healthy adults; expands to 0.40–0.60 L/kg in critically ill septic shock due to capillary leak and fluid resuscitation"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Extremely potent bactericidal agent against resistant Gram-negative bacilli, maintaining susceptibility when organisms are resistant to Gentamicin and Tobramycin.",
      "Ideal empiric combination component for septic shock patients at high risk for MDR Pseudomonas aeruginosa or CRE.",
      "High Peak/MIC ratio drives rapid bacterial clearance and exhibits a prolonged Post-Antibiotic Effect (PAE)."
    ],
    whyIDont: [
      "High risk of acute tubular necrosis (nephrotoxicity) with prolonged exposure or high trough levels.",
      "Irreversible ototoxicity (cochlear hair cell damage and vestibular toxicity).",
      "Potentiates non-depolarizing neuromuscular blockade (can worsen weakness or delay liberation)."
    ],
    bedsidePearl: "Differentiate FDA Product-Label Conventional Dosing (15 mg/kg/day divided q8–12h per DailyMed) from Critical Care Extended-Interval Dosing (15–20 mg/kg q24h) and Critical-Care PK Loading Strategies (25–30 mg/kg based on expanded Vd). Renal failure dictates the maintenance dosing INTERVAL, whereas loading dose depends on body weight and Vd."
  },
  dosing: {
    routine: "PRODUCT-LABEL CONVENTIONAL: 15 mg/kg/day divided in 2–3 equal doses (7.5 mg/kg IV q12h or 5 mg/kg q8h; max 1.5 g/day). CRITICAL CARE EXTENDED-INTERVAL: 15–20 mg/kg IV every 24 hours (infused over 60 min).",
    syndromeSpecific: [
      {
        syndrome: "Septic Shock / Expanded Vd Critical-Care PK Loading Strategy",
        regimen: "25–30 mg/kg IV ONCE as a loading dose (calculated on Ideal Body Weight or Adjusted Body Weight if obese).",
        reference: "Critical Care Pharmacokinetic Literature / SFAR Sepsis Dosing Guidelines (Taccone FS et al. Intensive Care Med 2010).",
        note: "CRITICAL-CARE PK STRATEGY (NOT AN FDA STANDARD LABEL DOSE): Capillary leak in septic shock expands Vd. Higher initial weight-based loading achieves target Peak/MIC ≥ 8–10; subsequent maintenance interval is guided by renal clearance and TDM. Renal failure does NOT automatically mandate a small loading dose, but loading selection remains individualized."
      },
      {
        syndrome: "Product-Label Conventional Multiple-Daily Dosing",
        regimen: "7.5 mg/kg IV every 12 hours or 5.0 mg/kg IV every 8 hours (Total 15 mg/kg/day; max 1.5 g/day).",
        reference: "FDA / DailyMed Amikacin Sulfate Prescribing Information (2024).",
        note: "FDA Prescribing Information labeled dose. Target Peak: 25–35 mcg/mL (drawn 30 min post-infusion); Target Trough: <5 mcg/mL (drawn pre-dose)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 60 mL/min", dose: "15–20 mg/kg IV every 24 hours (Extended-interval) or 7.5 mg/kg q12h (Conventional)." },
      { crclRange: "CrCl 40–60 mL/min", dose: "15–20 mg/kg IV every 36 hours (or dose by TDM nomogram)." },
      { crclRange: "CrCl 20–40 mL/min", dose: "15–20 mg/kg IV every 48 hours (guided by TDM trough levels)." },
      { crclRange: "CrCl < 20 mL/min", dose: "Give weight-based loading dose once, then redose based on TDM serum concentration monitoring." }
    ],
    hdDosing: "Weight-based loading dose post-HD. Re-dose post-dialysis guided by random pre-HD serum concentrations and TDM.",
    crrtDosing: "Amikacin clearance during CRRT is highly variable because of CRRT modality, effluent rate, residual renal function, volume of distribution, body size, critical illness severity, organism MIC, and timing of previous doses. CRRT → INDIVIDUALIZED DOSING + THERAPEUTIC DRUG MONITORING. Use measured concentrations and the local/validated aminoglycoside TDM protocol to guide subsequent dosing and redosing. LOADING DOSE ≠ MAINTENANCE DOSE: Renal dysfunction primarily alters clearance and subsequent dosing; it does not automatically determine the appropriate initial loading exposure."
  },
  organFailure: {
    renalConsiderations: "Cleared entirely by glomerular filtration. Proximal tubular cells take up amikacin via megalin receptors, inducing acute tubular necrosis. Extended-interval dosing lowers nephrotoxicity by allowing low trough levels. Renal impairment prolongs half-life (requiring longer dosing intervals), but initial loading dose depends on Vd and body size.",
    hepaticConsiderations: "No hepatic metabolism or elimination; no dose adjustment required for liver dysfunction alone."
  },
  toxicity: {
    majorWarnings: [
      "Nephrotoxicity: Direct proximal renal tubular cell necrosis; risk increases with duration >7 days, high trough levels, and concurrent nephrotoxins.",
      "Ototoxicity: Irreversible destruction of auditory hair cells (hearing loss/tinnitus) and vestibular apparatus (dizziness/vertigo).",
      "Neuromuscular Blockade: Can aggravate muscle weakness or respiratory depression by inhibiting presynaptic acetylcholine release."
    ],
    organToxicities: [
      { organ: "Renal", description: "Non-oliguric Acute Tubular Necrosis, elevated serum creatinine, protein/cast excretion." },
      { organ: "Auditory / Vestibular", description: "High-frequency sensorineural hearing loss, tinnitus, vertigo, equilibrium loss." },
      { organ: "Neuromuscular", description: "Aggravation of muscle weakness, prolonged neuromuscular blockade." }
    ]
  },
  interactions: [
    {
      drug: "Neuromuscular Blocking Agents (Rocuronium, Cisatracurium)",
      mechanism: "Inhibition of presynaptic acetylcholine release and postsynaptic receptor sensitivity",
      consequence: "Potentiates and prolongs neuromuscular blockade, risking delayed recovery and respiratory depression",
      icuAction: "Monitor Train-of-Four closely when combining amikacin with paralytics. (See Neuromuscular Blockade module)."
    },
    {
      drug: "Nephrotoxic Agents (Vancomycin, Loop Diuretics, Contrast, Amphotericin B)",
      mechanism: "Additive tubular toxicity and renal hypoperfusion",
      consequence: "Synergistic, severe Acute Kidney Injury",
      icuAction: "Avoid co-administration when possible; perform daily TDM and renal monitoring."
    }
  ],
  monitoring: {
    parameters: [
      "Therapeutic Drug Monitoring (TDM) — specific to dosing strategy",
      "Extended-Interval TDM: Calculated Target Peak 35–60 mcg/mL (30 min post-infusion); Target Trough < 1.0–2.5 mcg/mL (at 18–24h prior to redosing)",
      "Conventional Multiple-Daily TDM: Target Peak 25–35 mcg/mL (30 min post-infusion); Target Trough < 5–10 mcg/mL (pre-dose)",
      "Daily Serum Creatinine and Blood Urea Nitrogen (BUN)",
      "Audiometric testing / bedside hearing and vestibular assessment for prolonged therapy (>7–10 days)"
    ],
    tdmProtocol: {
      targetPeak: "Conventional Multiple-Daily Dosing: 25–35 mcg/mL; Extended-Interval Calculated: 35–60 mcg/mL",
      targetTrough: "Conventional Multiple-Daily Dosing: < 5–10 mcg/mL; Extended-Interval: < 1.0–2.5 mcg/mL",
      timing: "Extended-interval: draw trough 18–24 hours after dose. Conventional multiple-daily: draw peak 30 min post-infusion and trough 30 min pre-dose."
    }
  },
  stewardship: {
    deEscalationNotes: "Discontinue empiric Amikacin after 48–72 hours once culture susceptibilities confirm targeted beta-lactam efficacy.",
    broadNotBetterPoint: "Aminoglycoside monotherapy is INADEQUATE for definitive treatment of pneumonia or Gram-negative bacteremia due to poor pulmonary penetration and high toxicity. Always pair with an active beta-lactam."
  },
  evidenceTraceability: {
    guidelineIds: ["vap-guideline-ats-idsa-2016"],
    claimCitations: [
      {
        claim: "FDA Product Label specifies conventional dosing of 15 mg/kg/day divided q8–12h (max 1.5 g/day).",
        source: "FDA / DailyMed Amikacin Sulfate Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      },
      {
        claim: "Critical-care PK loading dose strategy (25–30 mg/kg IV once) aims to achieve target Peak/MIC ≥ 8–10 in expanded Vd.",
        source: "Taccone FS et al. Extended-spectrum antibiotic loading doses in septic shock. Intensive Care Med 2010;36(10):1771-1779.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/20563588/"
      },
      {
        claim: "ATS/IDSA VAP guidelines recommend Amikacin extended-interval dosing as an empiric second antipseudomonal agent for high-risk patients.",
        source: "Management of Adults With HAP and VAP: 2016 Clinical Practice Guidelines. Clin Infect Dis 2016;63(5):e61-e111.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/27418577/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Empiric Combination Therapy for Septic Shock in VAP",
      clinicalContext: "A 60-year-old intubated patient in septic shock from VAP in a unit with >20% MDR Pseudomonas prevalence.",
      decision: "Administer Cefepime 2g IV q8h (extended infusion) PLUS Amikacin 25 mg/kg IV loading dose ONCE (Critical Care PK strategy).",
      rationale: "Provides rapid dual antipseudomonal bactericidal killing. Loading dose overcomes expanded Vd in septic shock."
    },
    {
      title: "Amikacin TDM in Acute Kidney Injury",
      clinicalContext: "On day 2 of Amikacin, serum creatinine increases from 1.0 to 2.1 mg/dL. Trough level returns at 8.2 mcg/mL.",
      decision: "HOLD Amikacin dose. Recheck level in 24 hours. Do not redose until trough falls below target threshold per TDM protocol.",
      rationale: "High trough levels drive nephrotoxicity. Redosing when trough is elevated causes irreversible tubular damage."
    }
  ],
  examTraps: [
    {
      misconception: "Amikacin 25 mg/kg IV is the FDA-labeled standard daily dose for all patients.",
      reality: "FALSE. The FDA prescribing information specifies 15 mg/kg/day divided q8–12h (max 1.5 g/day).",
      explanation: "25–30 mg/kg IV is an ICU PK loading dose strategy designed to overcome expanded Volume of Distribution (Vd) in severe septic shock. It is a critical-care PK strategy, not the FDA product label dose."
    }
  ],
  searchAliases: ["amikacin", "amikin", "aminoglycoside", "extended interval amikacin"],
  relatedTopicIds: ["vap", "hap", "sepsis", "mdr-organisms", "neuromuscular-critical-illness"]
};
