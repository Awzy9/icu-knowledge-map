import type { Medication } from "@/content-types/medication";

export const linezolid: Medication = {
  id: "linezolid",
  slug: "linezolid",
  name: "Linezolid",
  genericName: "Linezolid",
  brandNames: ["Zyvox"],
  class: "Oxazolidinone Antibiotic",
  category: "antimicrobials",
  subcategory: "Oxazolidinones",
  summary: "Synthetic oxazolidinone for MRSA necrotizing pneumonia and VRE — suppresses ribosomal exotoxin production (PVL toxin), features 100% oral bioavailability, and requires zero renal dose adjustment, but risks Serotonin Syndrome and cytopenias.",
  mechanism: {
    title: "50S Ribosomal 23S rRNA Initiation Complex Blockade & Antitoxin Effect",
    steps: [
      "Binds uniquely to the 23S rRNA of the 50S ribosomal subunit near the peptidyl transferase center.",
      "Prevents formation of the functional 70S initiation complex, halting protein synthesis prior to translation initiation.",
      "Suppresses bacterial exotoxin production (Panton-Valentine Leukocidin [PVL], alpha-hemolysin, TSST-1).",
      "Exhibits bacteriostatic activity against Staphylococci and Enterococci, and bactericidal activity against Streptococci."
    ],
    visualDiagram: "Linezolid → 50S 23S rRNA Binding → 70S Initiation Complex Block → Antitoxin Suppression → Bacteriostasis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Vancomycin-resistant Enterococcus faecium (VRE vanA/vanB)", "Vancomycin-resistant Enterococcus faecalis", "Coagulase-negative Staphylococci (CoNS)", "Streptococcus pneumoniae (penicillin-resistant)", "Streptococcus pyogenes", "Listeria monocytogenes"],
      notCovered: ["Gram-negative bacilli (All inherently resistant)"]
    },
    gramNegative: {
      covered: [],
      notCovered: ["All Gram-negative bacteria (E. coli, Pseudomonas, Acinetobacter)"]
    },
    anaerobes: {
      covered: ["Clostridium perfringens", "Peptostreptococcus spp."],
      notCovered: ["Bacteroides fragilis group"]
    },
    atypicalsFungi: {
      covered: ["Nocardia spp.", "Mycobacterium tuberculosis"],
      notCovered: ["Mycoplasma", "Legionella", "Candida", "Aspergillus"]
    },
    notableGaps: ["All Gram-negative bacteria", "Bacteroides fragilis", "Fungi"]
  },
  pkPd: {
    type: "auc-mic",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 85%) or AUC24 / MIC ratio (>80–100)",
    halfLife: "4.5 to 5.5 hours (unaltered by renal failure)",
    proteinBinding: "31%",
    metabolism: "Non-enzymatic oxidation in liver to two inactive carboxylic acid metabolites",
    elimination: "30% renal excretion as unchanged drug; 50% as metabolites in urine; 10% in feces",
    vdNotes: "0.6 to 0.7 L/kg (100% oral bioavailability, high epithelial lining fluid [ELF] penetration in lung)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Preferred anti-MRSA agent for severe MRSA Pneumonia (higher epithelial lining fluid concentrations and PVL antitoxin suppression compared to Vancomycin).",
      "First-line Drug of Choice for Vancomycin-Resistant Enterococcus (VRE) bacteremia and soft tissue infections.",
      "100% oral bioavailability allows seamless IV to PO conversion at 600 mg q12h without dose modification.",
      "No renal dose adjustment required — safe in AKI, ESRD, and CRRT without TDM."
    ],
    whyIDont: [
      "Serotonin Syndrome risk: Weak non-selective MAO inhibitor; dangerous when combined with SSRIs, SNRIs, or vasopressors.",
      "Myelosuppression: Reversible thrombocytopenia and anemia with treatment duration >14 days.",
      "Lactic acidosis and irreversible optic/peripheral neuropathy with prolonged courses (>28 days)."
    ],
    bedsidePearl: "Linezolid is PREFERRED over Vancomycin and Daptomycin for MRSA Necrotizing Pneumonia! It achieves high lung tissue levels and suppresses bacterial PVL exotoxin production. Remember: Daptomycin is INACTIVATED by pulmonary surfactant and can NEVER be used for pneumonia."
  },
  dosing: {
    routine: "Standard ICU Regimen: 600 mg IV (or PO) every 12 hours (infused over 30–120 minutes).",
    syndromeSpecific: [
      {
        syndrome: "MRSA Nosocomial Pneumonia (HAP/VAP)",
        regimen: "600 mg IV every 12 hours for 7–14 days.",
        reference: "ATS/IDSA HAP/VAP Guidelines (Kalil AC et al. Clin Infect Dis 2016;63:e61-e111)."
      },
      {
        syndrome: "Vancomycin-Resistant Enterococcus (VRE) Infections",
        regimen: "600 mg IV (or PO) every 12 hours for 14–28 days.",
        reference: "IDSA 2026 Guidance on AMR Infections (Tamma PD et al. Clin Infect Dis 2026)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl (Normal to ESRD)", dose: "600 mg IV every 12 hours (no renal dose adjustment required)." }
    ],
    hdDosing: "600 mg IV every 12 hours. Give dose post-hemodialysis (HD removes ~30% of dose).",
    crrtDosing: "600 mg IV every 12 hours (no clearance adjustment required)."
  },
  organFailure: {
    renalConsiderations: "No dose reduction required for any degree of renal impairment. Inactive metabolites accumulate in ESRD but do not cause increased toxicity.",
    hepaticConsiderations: "No dose adjustment required for mild-to-moderate hepatic impairment (Child-Pugh A or B). Use with caution in severe cirrhosis."
  },
  toxicity: {
    majorWarnings: [
      "Serotonin Syndrome: Weak, reversible MAO inhibition; risk of hyperthermia, delirium, clonus, and autonomic instability when combined with serotonergic drugs.",
      "Myelosuppression: Reversible time-dependent thrombocytopenia, anemia, and neutropenia (>14 days).",
      "Mitochondrial Toxicity: Lactic acidosis, peripheral neuropathy, and optic neuritis (blindness) with prolonged therapy (>28 days)."
    ],
    organToxicities: [
      { organ: "Hematologic", description: "Thrombocytopenia, anemia, neutropenia, pancytopenia (requires weekly CBC)." },
      { organ: "Neurologic", description: "Serotonin syndrome, optic neuropathy, peripheral sensory neuropathy." },
      { organ: "Metabolic", description: "Lactic acidosis (mitochondrial protein synthesis inhibition)." }
    ]
  },
  interactions: [
    {
      drug: "Serotonergic Agents (SSRIs, SNRIs, Fentanyl, Tramadol, Meperidine)",
      mechanism: "Reversible monoamine oxidase A (MAO-A) inhibition",
      consequence: "Serotonin Syndrome (hyperthermia, agitation, hyperreflexia, autonomic collapse)",
      icuAction: "Avoid co-administration when possible. If essential, monitor closely for serotonergic signs."
    },
    {
      drug: "Adrenergic Agents (Norepinephrine, Epinephrine, Pseudoephedrine)",
      mechanism: "Inhibition of monoamine oxidase metabolism of catecholamines",
      consequence: "Exaggerated vasopressor response and hypertensive crisis",
      icuAction: "Titrate vasopressors cautiously when starting linezolid."
    }
  ],
  monitoring: {
    parameters: [
      "Complete Blood Count (CBC) with differential WEEKLY (daily if baseline thrombocytopenia or treatment >14 days)",
      "Signs of Serotonin Syndrome (clonus, hyperreflexia, tremors, agitation, fever)",
      "Serum Lactate if unexplained metabolic acidosis develops",
      "Visual acuity monitoring for prolonged therapy (>28 days)"
    ]
  },
  stewardship: {
    deEscalationNotes: "Switch IV Linezolid to PO Linezolid (600 mg bid) as soon as oral intake is established (100% bioavailability). De-escalate to Cefazolin/Nafcillin if MSSA is isolated.",
    broadNotBetterPoint: "Reserve Linezolid for documented MRSA pneumonia, VRE, or severe beta-lactam intolerance to prevent oxazolidinone resistance (cfr gene mutations)."
  },
  evidenceTraceability: {
    guidelineIds: ["vap-guideline-ats-idsa-2016", "amr-guideline-idsa-2026"],
    claimCitations: [
      {
        claim: "ATS/IDSA HAP/VAP Guidelines recommend Linezolid 600 mg IV q12h as preferred or equivalent to Vancomycin for MRSA pneumonia.",
        source: "Management of Adults With HAP and VAP: 2016 Clinical Practice Guidelines. Clin Infect Dis 2016;63(5):e61-e111.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/27418577/"
      },
      {
        claim: "Linezolid suppresses staphylococcal Panton-Valentine Leukocidin (PVL) toxin expression.",
        source: "Stevens DL et al. Impact of antibiotics on expression of PVL by MRSA. Antimicrob Agents Chemother 2007;51:3573-3578.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/17664321/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "MRSA Necrotizing Pneumonia with Baseline AKI",
      clinicalContext: "A 55-year-old with acute kidney injury (Cr 3.2 mg/dL) develops cavitary MRSA pneumonia in septic shock.",
      decision: "Initiate Linezolid 600 mg IV every 12 hours.",
      rationale: "Linezolid provides high lung tissue levels, suppresses exotoxin production, and requires no renal dose adjustment (avoiding Vancomycin nephrotoxicity)."
    },
    {
      title: "VRE Faecium Bacteremia in Renal Transplant Patient",
      clinicalContext: "Blood culture grows Vancomycin-Resistant Enterococcus faecium (vanA gene positive).",
      decision: "Start Linezolid 600 mg IV q12h (or Daptomycin 10–12 mg/kg/day).",
      rationale: "Linezolid is a first-line Drug of Choice for VRE bacteremia per IDSA 2026 AMR guidance."
    }
  ],
  examTraps: [
    {
      misconception: "Linezolid dose must be reduced in end-stage renal disease (ESRD).",
      reality: "FALSE. Linezolid requires ZERO dose reduction for any level of renal impairment or dialysis.",
      explanation: "Linezolid undergoes non-enzymatic hepatic oxidation, and its half-life remains ~5 hours in ESRD. Renal failure does not alter active drug clearance."
    }
  ],
  searchAliases: ["linezolid", "zyvox", "oxazolidinone", "vre antibiotic", "mrsa pneumonia"],
  relatedTopicIds: ["mdr-organisms", "vap", "hap", "sepsis", "neuromuscular-critical-illness"]
};
