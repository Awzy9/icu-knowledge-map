import type { Medication } from "@/content-types/medication";

export const ertapenem: Medication = {
  id: "ertapenem",
  slug: "ertapenem",
  name: "Ertapenem",
  genericName: "Ertapenem Sodium",
  brandNames: ["Invanz"],
  class: "Group 1 Carbapenem Antibiotic",
  category: "antimicrobials",
  subcategory: "Carbapenems",
  summary: "Once-daily Group 1 carbapenem for ESBL Enterobacterales, cIAI, and cUTI in stable patients — NOT an antipseudomonal agent, and requires caution in severe septic shock / hypoalbuminemia due to altered protein binding.",
  mechanism: {
    title: "Penicillin-Binding Protein (PBP) Inhibition",
    steps: [
      "Binds essential Penicillin-Binding Proteins (PBPs 2 and 3) in susceptible Gram-negative and Gram-positive cell walls.",
      "Inhibits cross-linking of peptidoglycan chains, disrupting bacterial structural integrity.",
      "Resistant to hydrolysis by most AmpC beta-lactamases and Extended-Spectrum Beta-Lactamases (ESBLs).",
      "Triggers rapid osmotic cell lysis and bactericidal death."
    ],
    visualDiagram: "Ertapenem → PBP 2/3 Binding → Blocked Peptidoglycan Cross-linking → Cell Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-susceptible Staphylococcus aureus (MSSA)", "Streptococcus pneumoniae (penicillin-susceptible)", "Streptococcus pyogenes", "Streptococcus agalactiae"],
      notCovered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Enterococcus faecalis", "Enterococcus faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["ESBL-producing Escherichia coli", "ESBL-producing Klebsiella pneumoniae", "Proteus mirabilis", "Enterobacter cloacae", "Citrobacter freundii", "Serratia marcescens", "Haemophilus influenzae"],
      notCovered: ["Pseudomonas aeruginosa", "Acinetobacter baumannii", "Stenotrophomonas maltophilia", "Burkholderia cepacia", "Carbapenemase-producing Enterobacterales (KPC, NDM, OXA-48)"]
    },
    anaerobes: {
      covered: ["Bacteroides fragilis", "Bacteroides thetaiotaomicron", "Peptostreptococcus spp.", "Fusobacterium spp.", "Clostridium perfringens"],
      notCovered: ["Clostridioides difficile"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["Mycoplasma pneumoniae", "Legionella pneumophila", "Chlamydia spp.", "Candida spp."]
    },
    notableGaps: ["Pseudomonas aeruginosa", "Acinetobacter baumannii", "Enterococcus faecalis / faecium", "MRSA", "Carbapenemase producers (KPC, NDM)"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 40%)",
    halfLife: "4.0 hours (prolonged compared to Meropenem's 1-hour half-life due to high protein binding)",
    proteinBinding: "92% to 95% (concentration-dependent albumin binding; free fraction increases in hypoalbuminemia)",
    metabolism: "Hydrolysis of beta-lactam ring by open-ring metabolite formation",
    elimination: "Renal excretion (80% total: 45% unchanged drug in urine, 35% metabolite); 10% in feces",
    vdNotes: "0.12 L/kg (extracellular distribution; expanded in severe sepsis and hypoalbuminemia)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Targeted once-daily therapy (1.0 g IV q24h) for confirmed ESBL Enterobacterales infections (UTI, cIAI, bacteremia) in stable patients or outpatient step-down.",
      "Excellent outpatient parenteral antimicrobial therapy (OPAT) option for de-escalating ESBL infections.",
      "Provides single-agent broad aerobic Gram-negative + anaerobic coverage for complicated intra-abdominal infections without requiring metronidazole."
    ],
    whyIDont: [
      "CRITICAL EXAM & CLINICAL TRAP: Has no clinically reliable activity against Pseudomonas aeruginosa or Acinetobacter baumannii — inappropriate for empiric ICU shock coverage when Pseudomonas coverage is mandatory.",
      "PK limitation in severe septic shock / hypoalbuminemia: High protein binding (~92–95%) means low serum albumin (<2.0 g/dL) increases free drug fraction and accelerates renal clearance, risking subtherapeutic levels near end-of-dose; Meropenem is preferred in severe septic shock.",
      "Requires renal dose adjustment when CrCl ≤ 30 mL/min."
    ],
    bedsidePearl: "Carbapenem ≠ automatically antipseudomonal! Never select Ertapenem as empiric therapy for VAP or septic shock where Pseudomonas coverage is mandatory. Furthermore, in severe septic shock with hypoalbuminemia, Meropenem by extended infusion is preferred over Ertapenem due to unpredictable ertapenem protein-binding kinetics."
  },
  dosing: {
    routine: "Standard Adult Regimen: 1.0 g IV every 24 hours (infused over 30 minutes).",
    syndromeSpecific: [
      {
        syndrome: "ESBL Enterobacterales Pyelonephritis / cUTI (Stable Patient)",
        regimen: "1.0 g IV every 24 hours for 7–10 days.",
        reference: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections (Tamma PD et al. Clin Infect Dis 2026).",
        note: "Preferred for stable patients or OPAT step-down. Meropenem is preferred for severe septic shock or neuro-ICU patients."
      },
      {
        syndrome: "Complicated Intra-Abdominal Infection (cIAI)",
        regimen: "1.0 g IV every 24 hours for 4–7 days post-source control.",
        reference: "SIS/IDSA Intra-abdominal Infection Guidelines (Solomkin JS et al. Clin Infect Dis 2010)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 30 mL/min", dose: "1.0 g IV every 24 hours." },
      { crclRange: "CrCl ≤ 30 mL/min", dose: "500 mg IV every 24 hours." },
      { crclRange: "ESRD (CrCl < 10 mL/min)", dose: "500 mg IV every 24 hours." }
    ],
    hdDosing: "500 mg IV every 24 hours. Give supplemental 150 mg IV post-dialysis if 500 mg dose is administered within 6 hours before HD.",
    crrtDosing: "CRRT clearance depends on effluent flow rate, filter type, and serum albumin. Example regimen: 500 mg to 1.0 g IV every 24 hours guided by TDM where available."
  },
  organFailure: {
    renalConsiderations: "Primary renal elimination; dose must be reduced by 50% (500 mg q24h) when CrCl ≤ 30 mL/min to prevent neurotoxicity and seizures.",
    hepaticConsiderations: "Minimal hepatic metabolism; no dose adjustment required in isolated hepatic impairment."
  },
  toxicity: {
    majorWarnings: [
      "Seizures & CNS Toxicity: Reported in patients with renal failure receiving unadjusted 1.0 g doses or baseline CNS lesions.",
      "Valproic Acid Interaction: Severe, rapid reduction in serum valproic acid levels leading to loss of seizure control."
    ],
    organToxicities: [
      { organ: "Central Nervous System", description: "Seizures, encephalopathy, confusion, myoclonus (especially in renal impairment)." },
      { organ: "Gastrointestinal", description: "Diarrhea, nausea, vomiting, Clostridioides difficile colitis." },
      { organ: "Hepatic", description: "Transient elevation of serum transaminases and alkaline phosphatase." }
    ]
  },
  interactions: [
    {
      drug: "Valproic Acid / Divalproex Sodium",
      mechanism: "Inhibition of valproate acyl-glucuronide hydrolysis and increased tissue uptake",
      consequence: "Rapid 60–90% drop in serum valproate concentration within 24 hours, triggering breakthrough seizures",
      icuAction: "Avoid co-administration; use alternative antiepileptic or non-carbapenem antibiotic."
    },
    {
      drug: "Probenecid",
      mechanism: "Competes for active renal tubular secretion",
      consequence: "Increases ertapenem plasma levels and half-life",
      icuAction: "Co-administration is not recommended."
    }
  ],
  monitoring: {
    parameters: [
      "Renal function (CrCl calculation) for dose adjustment",
      "Serum Albumin levels in critical illness (hypoalbuminemia increases free drug clearance)",
      "Neurologic status and seizure activity (especially in AKI/CKD)",
      "Serum Valproic acid levels if co-administered (or switch agents)"
    ]
  },
  stewardship: {
    deEscalationNotes: "Ideal carbapenem de-escalation option when stepping down from Meropenem for confirmed ESBL infections in stable patients once Pseudomonas has been ruled out.",
    broadNotBetterPoint: "Reserving Meropenem for antipseudomonal needs while utilizing Ertapenem for non-pseudomonal ESBL infections in stable patients preserves antipseudomonal carbapenem susceptibility in the ICU."
  },
  evidenceTraceability: {
    guidelineIds: ["amr-guideline-idsa-2026"],
    claimCitations: [
      {
        claim: "IDSA 2026 AMR Guidance recommends Ertapenem 1g daily for ESBL-E pyelonephritis and cUTI in stable non-critically ill patients.",
        source: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections. Clin Infect Dis 2026.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov"
      },
      {
        claim: "Ertapenem lacks clinically useful in vitro activity against Pseudomonas aeruginosa, Acinetobacter spp., and Enterococcus spp.",
        source: "FDA / DailyMed Invanz (Ertapenem) Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Step-Down Therapy for ESBL E. coli Bacteremia",
      clinicalContext: "A 68-year-old female with ESBL E. coli bacteremia secondary to pyelonephritis is hemodynamically stable on day 3 of Meropenem. Pseudomonas is ruled out.",
      decision: "De-escalate Meropenem to Ertapenem 1.0 g IV q24h.",
      rationale: "Allows once-daily dosing and facilitates outpatient discharge while providing definitive high-efficacy ESBL coverage."
    },
    {
      title: "Empiric VAP in Septic Shock",
      clinicalContext: "A 55-year-old intubated trauma patient develops new purulent sputum, fever, and shock.",
      decision: "DO NOT USE Ertapenem. Initiate Cefepime 2g q8h or Meropenem 1g q8h + Vancomycin.",
      rationale: "Ertapenem lacks antipseudomonal activity and is completely inappropriate for empiric VAP coverage."
    }
  ],
  examTraps: [
    {
      misconception: "Ertapenem can be used interchangeably with Meropenem for all ICU infections.",
      reality: "FALSE. Ertapenem is NOT an antipseudomonal carbapenem and has altered kinetics in hypoalbuminemia.",
      explanation: "Ertapenem lacks activity against Pseudomonas aeruginosa, Acinetobacter, and Enterococcus. Furthermore, in severe septic shock with hypoalbuminemia, Meropenem is preferred due to ertapenem's unpredictable protein binding."
    }
  ],
  searchAliases: ["ertapenem", "invanz", "group 1 carbapenem", "non-pseudomonal carbapenem"],
  relatedTopicIds: ["mdr-organisms", "sepsis", "vap", "hap"]
};
