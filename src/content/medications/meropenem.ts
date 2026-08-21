import type { Medication } from "@/content-types/medication";

export const meropenem: Medication = {
  id: "meropenem",
  slug: "meropenem",
  name: "Meropenem",
  genericName: "Meropenem Sodium",
  brandNames: ["Merrem"],
  class: "Group 2 Antipseudomonal Carbapenem Antibiotic",
  category: "antimicrobials",
  subcategory: "Carbapenems",
  summary: "Ultra-broad-spectrum antipseudomonal Group 2 carbapenem for severe ESBL Enterobacterales, MDR Pseudomonas aeruginosa, intra-abdominal sepsis, and post-neurosurgical meningitis.",
  mechanism: {
    title: "Penicillin-Binding Protein (PBP) Inactivation",
    steps: [
      "Penetrates Gram-negative outer membrane via OprD porin channels.",
      "Binds with high affinity to essential PBPs (PBPs 2, 3, and 4) in cell wall synthesis.",
      "Inhibits peptidoglycan cross-linking transpeptidation.",
      "Resistant to most beta-lactamases (TEM, SHV, CTX-M ESBLs, and AmpC enzymes).",
      "Induces rapid cell wall destruction and bactericidal lysis."
    ],
    visualDiagram: "OprD Porin Penetration → High Affinity PBP 2/3/4 Binding → Blocked Peptidoglycan Transpeptidation → Cell Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-susceptible Staphylococcus aureus (MSSA)", "Streptococcus pneumoniae", "Streptococcus pyogenes", "Enterococcus faecalis (variable/intermediate)"],
      notCovered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Enterococcus faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["Pseudomonas aeruginosa", "ESBL-producing Escherichia coli", "ESBL-producing Klebsiella pneumoniae", "AmpC Enterobacter cloacae", "Citrobacter freundii", "Acinetobacter baumannii (susceptible)", "Haemophilus influenzae"],
      notCovered: ["Stenotrophomonas maltophilia", "Burkholderia cepacia", "Carbapenemase producers (KPC, NDM, OXA-48)"]
    },
    anaerobes: {
      covered: ["Bacteroides fragilis", "Bacteroides thetaiotaomicron", "Peptostreptococcus spp.", "Fusobacterium spp."],
      notCovered: ["Clostridioides difficile"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["MRSA", "Enterococcus faecium", "Stenotrophomonas maltophilia", "KPC / NDM Carbapenemase producers"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 40–50%; up to 100% in severe sepsis)",
    halfLife: "1.0 hour in normal renal function (extended to 6–10 hours in ESRD)",
    proteinBinding: "2%",
    metabolism: "Hepatic and renal dehydropeptidase-1 cleavage to inactive metabolite ICI-198,615",
    elimination: "Renal excretion (70% unchanged drug in urine)",
    vdNotes: "0.25 L/kg (expands to 0.35–0.45 L/kg in septic shock; requires high initial loading dose)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line Drug of Choice for severe ESBL Enterobacterales bacteremia and septic shock (proven superior to Pip-Tazo in MERINO trial).",
      "Empiric antipseudomonal carbapenem of choice in septic shock, severe intra-abdominal infection, and febrile neutropenia.",
      "High CSF penetration at 2.0 g IV every 8 hours for post-neurosurgical meningitis."
    ],
    whyIDont: [
      "Inactivated by carbapenemases (KPC, NDM, VIM, OXA-48).",
      "Drives carbapenem resistance (OprD porin loss in Pseudomonas aeruginosa).",
      "Reduces serum valproic acid levels by 60–90%, triggering breakthrough seizures."
    ],
    bedsidePearl: "Administer Meropenem as an EXTENDED INFUSION (1.0 g IV over 3 hours every 8 hours) in severe septic shock or MDR Pseudomonas — this maximizes %fT > MIC and improves clinical cure."
  },
  dosing: {
    routine: "Severe Infections / Septic Shock: 1.0 g IV every 8 hours (extended 3-hour infusion preferred).",
    syndromeSpecific: [
      {
        syndrome: "ESBL Enterobacterales Bloodstream Infection",
        regimen: "1.0 g IV every 8 hours (extended 3-hour infusion).",
        reference: "IDSA 2026 Guidance on AMR Infections (Tamma PD et al. Clin Infect Dis 2026) & MERINO Trial (Harris PN et al. JAMA 2018).",
        note: "Meropenem significantly reduced 30-day mortality compared to Pip-Tazo for ESBL bacteremia."
      },
      {
        syndrome: "Post-Neurosurgical / Nosocomial Meningitis",
        regimen: "2.0 g IV every 8 hours (infused over 3 hours).",
        reference: "IDSA Healthcare-Associated Ventriculitis and Meningitis Guidelines (Tunkel AR et al. Clin Infect Dis 2017)."
      },
      {
        syndrome: "Ventilator-Associated Pneumonia (VAP) / MDR Pseudomonas",
        regimen: "2.0 g IV every 8 hours (extended 3-hour infusion).",
        reference: "ATS/IDSA VAP Guidelines (Kalil AC et al. Clin Infect Dis 2016)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 50 mL/min", dose: "1.0 g IV every 8 hours." },
      { crclRange: "CrCl 26–50 mL/min", dose: "1.0 g IV every 12 hours." },
      { crclRange: "CrCl 10–25 mL/min", dose: "500 mg IV every 12 hours." },
      { crclRange: "CrCl < 10 mL/min", dose: "500 mg IV every 24 hours." }
    ],
    hdDosing: "500 mg IV every 24 hours; give supplemental 500 mg dose post-hemodialysis.",
    crrtDosing: "1.0 g IV every 8 to 12 hours (CVVH/CVVHD clears meropenem rapidly)."
  },
  organFailure: {
    renalConsiderations: "Cleared primarily by glomerular filtration. Mandatory dose reduction in renal impairment to avoid neurotoxicity/seizures.",
    hepaticConsiderations: "Minimal hepatic metabolism; no dose reduction required in isolated liver failure."
  },
  toxicity: {
    majorWarnings: [
      "Seizures & Neurotoxicity: Seizure risk (0.5% in general, higher in renal failure or pre-existing CNS disease).",
      "Valproic Acid Interaction: Severe drop in valproate levels within 24 hours.",
      "Clostridioides difficile Colitis risk."
    ],
    organToxicities: [
      { organ: "Central Nervous System", description: "Seizures, encephalopathy, confusion, myoclonus." },
      { organ: "Gastrointestinal", description: "Diarrhea, nausea, vomiting, C. difficile colitis." },
      { organ: "Hepatic", description: "Transient elevation of ALT, AST, alkaline phosphatase." }
    ]
  },
  interactions: [
    {
      drug: "Valproic Acid / Divalproex Sodium",
      mechanism: "Inhibition of acyl-glucuronide valproate hydrolysis and clearance acceleration",
      consequence: "Rapid 60-90% reduction in valproate levels leading to status epilepticus",
      icuAction: "Avoid co-administration; use alternative antiepileptic."
    },
    {
      drug: "Probenecid",
      mechanism: "Inhibition of tubular secretion",
      consequence: "Increases meropenem half-life and exposure",
      icuAction: "Co-administration not recommended."
    }
  ],
  monitoring: {
    parameters: [
      "Calculated CrCl and serum creatinine daily for dose adjustment",
      "Neurologic assessment for seizure activity or encephalopathy",
      "Valproic acid level if co-administered",
      "Clinical response and body temperature"
    ]
  },
  stewardship: {
    deEscalationNotes: "De-escalate from Meropenem to narrow-spectrum agents (e.g. Cefazolin, Ampicillin-Sulbactam, or Ertapenem) as soon as culture susceptibilities permit.",
    broadNotBetterPoint: "Reserving Meropenem for documented ESBL or MDR Pseudomonas infections limits selection pressure for KPC carbapenemases and Metallo-beta-lactamases."
  },
  evidenceTraceability: {
    guidelineIds: ["amr-guideline-idsa-2026", "vap-guideline-ats-idsa-2016"],
    trialIds: ["merino-trial-jama-2018"],
    claimCitations: [
      {
        claim: "MERINO Trial proved Meropenem is superior to Pip-Tazo for 30-day mortality in ESBL E. coli / K. pneumoniae bacteremia.",
        source: "Harris PN et al. Effect of Piperacillin-Tazobactam vs Meropenem on 30-Day Mortality in ESBL Bacteremia: MERINO RCT. JAMA 2018;320(10):984-994.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/30208454/"
      },
      {
        claim: "IDSA 2026 AMR Guidance recommends Meropenem as first-line therapy for ESBL-producing Enterobacterales bloodstream infections.",
        source: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections. Clin Infect Dis 2026.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/37463136/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "ESBL E. coli Septic Shock from Pyelonephritis",
      clinicalContext: "A 65-year-old in septic shock; blood cultures grow ESBL E. coli (ceftriaxone resistant).",
      decision: "Administer Meropenem 1.0 g IV every 8 hours as a 3-hour extended infusion.",
      rationale: "Meropenem is the definitive gold-standard therapy for ESBL bacteremia per MERINO trial and IDSA guidance."
    },
    {
      title: "Empiric Coverage in Septic Shock with History of ESBL",
      clinicalContext: "Patient with known ESBL colonization presents with intra-abdominal septic shock.",
      decision: "Initiate Meropenem 1g q8h extended infusion + Vancomycin.",
      rationale: "Covers potential ESBL pathogens and Pseudomonas while providing full anaerobic coverage."
    }
  ],
  examTraps: [
    {
      misconception: "Piperacillin-Tazobactam is equivalent to Meropenem for ESBL bacteremia if in vitro susceptible.",
      reality: "FALSE. The MERINO trial demonstrated significantly higher 30-day mortality with Pip-Tazo compared to Meropenem.",
      explanation: "Even if automated susceptibilities report Pip-Tazo susceptible, high inoculum effects lead to clinical failure. Meropenem remains the preferred choice."
    }
  ],
  searchAliases: ["meropenem", "merrem", "carbapenem", "antipseudomonal carbapenem", "esbl treatment"],
  relatedTopicIds: ["mdr-organisms", "sepsis", "vap", "hap", "necrotizing-soft-tissue-infections"]
};
