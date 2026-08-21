import type { Medication } from "@/content-types/medication";

export const tmpSmx: Medication = {
  id: "tmp-smx",
  slug: "tmp-smx",
  name: "Trimethoprim–Sulfamethoxazole (TMP-SMX)",
  genericName: "Trimethoprim and Sulfamethoxazole",
  brandNames: ["Bactrim", "Septra", "Cotrimoxazole"],
  class: "Sulfonamide & Folate Antagonist Combination",
  category: "antimicrobials",
  subcategory: "Folate Synthesis Inhibitors",
  summary: "Sequential folate pathway blocker used as an important Stenotrophomonas-active agent, first-line Pneumocystis jirovecii pneumonia (PJP) therapy, and Nocardiosis agent — always dosed by the TMP component, with significant risks of hyperkalemia, pseudo-creatinine elevation, and true acute interstitial nephritis.",
  mechanism: {
    title: "Sequential Synergistic Folate Pathway Blockade",
    steps: [
      "Sulfamethoxazole competitively inhibits dihydropteroate synthase, preventing PABA conversion to dihydropteroic acid.",
      "Trimethoprim reversibly inhibits dihydrofolate reductase (DHFR), blocking dihydrofolate conversion to active tetrahydrofolate.",
      "Sequential blockade starves bacterial/fungal cells of purines, thymidine, and methionine.",
      "Produces potent bactericidal synergy compared to bacteriostatic action of either agent alone."
    ],
    visualDiagram: "PABA → [Sulfamethoxazole ✕ Dihydropteroate Synthase] → Dihydrofolate → [Trimethoprim ✕ DHFR] → Tetrahydrofolate (DNA Failure)"
  },
  spectrum: {
    gramPositive: {
      covered: ["Community-acquired MRSA", "Methicillin-susceptible Staphylococcus aureus (MSSA)", "Staphylococcus epidermidis", "Listeria monocytogenes", "Nocardia asteroides"],
      notCovered: ["Enterococcus faecalis", "Enterococcus faecium", "Streptococcus pyogenes (variable/unreliable)"]
    },
    gramNegative: {
      covered: ["Stenotrophomonas maltophilia (Active option; IDSA 2026 guidance identifies Cefiderocol monotherapy as preferred for invasive disease, with TMP-SMX as a component of combination therapy or step-down monotherapy)", "Burkholderia cepacia", "Haemophilus influenzae", "Moraxella catarrhalis", "Escherichia coli (susceptible)", "Klebsiella pneumoniae (susceptible)"],
      notCovered: ["Pseudomonas aeruginosa (lacks activity)", "Acinetobacter baumannii", "ESBL-producing Enterobacterales (frequent resistance)"]
    },
    anaerobes: {
      covered: [],
      notCovered: ["Bacteroides fragilis", "Clostridium spp.", "Peptostreptococcus spp."]
    },
    atypicalsFungi: {
      covered: ["Pneumocystis jirovecii (PJP/PCP)"],
      notCovered: ["Aspergillus spp.", "Candida spp.", "Cryptococcus spp.", "Mucorales"]
    },
    notableGaps: ["Pseudomonas aeruginosa", "Anaerobes", "Enterococcus", "Mycoplasma", "Aspergillus"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC)",
    halfLife: "Trimethoprim: 8–10 hours; Sulfamethoxazole: 10–12 hours (prolonged to 20–30h in ESRD)",
    proteinBinding: "Trimethoprim: 44%; Sulfamethoxazole: 70%",
    metabolism: "Hepatic CYP2C9 metabolism of sulfamethoxazole; minor liver metabolism of trimethoprim",
    elimination: "Primary renal excretion of both active drugs and metabolites via glomerular filtration and tubular secretion",
    vdNotes: "Trimethoprim: 1.3 L/kg (lipophilic, excellent tissue penetration including lung and CSF); Sulfamethoxazole: 0.3 L/kg"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Important Stenotrophomonas-active agent: Current IDSA 2026 guidance identifies Cefiderocol monotherapy as the preferred initial approach for invasive S. maltophilia infection (supporting clinical evidence is limited; treatment depends on susceptibility, site, severity, and response). TMP-SMX is an important active option that may be used as a component of combination therapy for invasive disease when clinically appropriate, with transition to TMP-SMX monotherapy considered after clear and sustained clinical improvement.",
      "First-line agent for treatment and prophylaxis of Pneumocystis jirovecii pneumonia (PJP/PCP) in immunocompromised patients (dosed strictly by TMP component).",
      "First-line therapy for cerebral and systemic Nocardiosis."
    ],
    whyIDont: [
      "High incidence of severe hyperkalemia in ICU patients due to trimethoprim amiloride-like ENaC potassium channel block (heightened in CKD, AKI, ACEi/ARB/MRA use).",
      "Inhibits renal OCT2/MATE1 tubular creatinine secretion, raising serum creatinine without true GFR decline; however, true acute interstitial nephritis (AIN) or crystalluria can also occur.",
      "Severe hypersensitivity risk (Stevens-Johnson syndrome, Toxic Epidermal Necrolysis, DRESS)."
    ],
    bedsidePearl: "ALWAYS DOSE TMP-SMX BY THE TRIMETHOPRIM (TMP) COMPONENT! For invasive Stenotrophomonas maltophilia, current IDSA 2026 guidance identifies Cefiderocol monotherapy as the preferred initial approach (supporting clinical evidence is limited). TMP-SMX is an important active option that may be used as a component of combination therapy for invasive infection; transition to TMP-SMX monotherapy may be considered after clear and sustained clinical improvement. IMPORTANT: Before selecting therapy, determine whether S. maltophilia represents true infection or colonization, particularly when isolated from respiratory specimens — a positive respiratory culture is not an automatic indication for antimicrobial treatment."
  },
  dosing: {
    routine: "Invasive Stenotrophomonas / Severe Infections: 10–15 mg TMP/kg/day IV divided every 6 to 8 hours (dosed strictly by Trimethoprim component).",
    syndromeSpecific: [
      {
        syndrome: "Pneumocystis jirovecii Pneumonia (PJP/PCP) Treatment",
        regimen: "15–20 mg TMP/kg/day IV (calculated strictly by Trimethoprim component) divided every 6 hours (or q8h) for 21 days.",
        reference: "CDC/NIH/IDSA Opportunistic Infection Guidelines (2026).",
        note: "DOSE CALCULATED BY TRIMETHOPRIM COMPONENT. Add adjunctive Prednisone (40mg bid x5d, 40mg daily x5d, 20mg daily x11d) if PaO2 < 70 mmHg or A-a gradient ≥ 35 mmHg."
      },
      {
        syndrome: "PJP / PCP Prophylaxis",
        regimen: "1 Double Strength (DS) tablet PO daily (160 mg TMP / 800 mg SMX) or 1 DS tablet PO 3 times weekly.",
        reference: "IDSA Immunocompromised Host Guidelines.",
        note: "1 DS tablet contains 160 mg Trimethoprim and 800 mg Sulfamethoxazole."
      },
      {
        syndrome: "Stenotrophomonas maltophilia Invasive Infection",
        regimen: "10–15 mg TMP/kg/day IV divided every 6 to 8 hours (dosed strictly by Trimethoprim component).",
        reference: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections (Tamma PD et al. Clin Infect Dis 2026).",
        note: "Educational framework based on IDSA AMR Guidance 2026: For invasive S. maltophilia infection, Cefiderocol monotherapy is identified as the preferred treatment approach (supporting clinical evidence is limited; treatment depends on susceptibility, site, severity, and response). TMP-SMX is an important active option that may be used as a component of combination therapy for invasive infection; transition to TMP-SMX monotherapy may be considered after clear and sustained clinical improvement. Before selecting therapy, determine whether S. maltophilia represents true infection or colonization, particularly when isolated from respiratory specimens."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 30 mL/min", dose: "100% of standard dose." },
      { crclRange: "CrCl 15–30 mL/min", dose: "50% of standard dose (or standard dose q12h)." },
      { crclRange: "CrCl < 15 mL/min", dose: "50% of standard dose with serum level monitoring or select alternative." }
    ],
    hdDosing: "50% of standard dose given once daily; administer supplemental dose post-hemodialysis (HD removes trimethoprim and sulfamethoxazole).",
    crrtDosing: "Example regimen: 5 to 7.5 mg TMP/kg IV every 12 hours with TDM guidance; individualize based on effluent rate and residual GFR."
  },
  organFailure: {
    renalConsiderations: "Trimethoprim and sulfamethoxazole accumulate in renal failure. Trimethoprim inhibits distal tubule ENaC channels (hyperkalemia) and OCT2/MATE1 transporters (raising serum creatinine). Dose reduction required when CrCl < 30 mL/min.",
    hepaticConsiderations: "Sulfamethoxazole hepatic metabolism is impaired in severe cirrhosis; monitor for prolonged half-life and liver toxicity."
  },
  toxicity: {
    majorWarnings: [
      "Severe Hyperkalemia: Trimethoprim acts like amiloride, blocking ENaC channels in the distal nephron; risk is heightened in CKD, AKI, and with ACEi/ARB/MRA co-administration.",
      "Creatinine Elevation Nuance: OCT2 inhibition causes pseudo-creatinine elevation without true GFR drop, BUT true allergic interstitial nephritis (AIN) or crystalluria can also occur.",
      "Severe Cutaneous Adverse Reactions (SCAR): Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN)."
    ],
    organToxicities: [
      { organ: "Renal & Electrolyte", description: "Hyperkalemia (ENaC block), pseudo-elevation of serum creatinine (OCT2 block), acute interstitial nephritis, crystalluria." },
      { organ: "Hematologic", description: "Neutropenia, thrombocytopenia, megaloblastic anemia (folate deficiency), methemoglobinemia." },
      { organ: "Dermatologic", description: "Morbilliform rash, SJS, TEN, DRESS syndrome, photosensitivity." }
    ]
  },
  interactions: [
    {
      drug: "ACE Inhibitors / ARBs / MRAs (Lisinopril, Losartan, Spironolactone)",
      mechanism: "Additive inhibition of renal potassium excretion (trimethoprim ENaC block + renin-angiotensin-aldosterone blockade)",
      consequence: "Synergistic, severe hyperkalemia leading to cardiac arrhythmias and arrest",
      icuAction: "Monitor serum K+ daily; hold potassium-sparing agents or adjust doses."
    },
    {
      drug: "Warfarin",
      mechanism: "Inhibition of CYP2C9 warfarin metabolism and gut vitamin K flora destruction",
      consequence: "Profound increase in INR and severe bleeding risk",
      icuAction: "Reduce warfarin dose by 25–50% and check INR within 48 hours of starting TMP-SMX."
    },
    {
      drug: "Methotrexate",
      mechanism: "Displacement from protein binding sites and cumulative DHFR inhibition",
      consequence: "Severe bone marrow suppression and pancytopenia",
      icuAction: "Avoid co-administration or monitor CBC closely."
    }
  ],
  monitoring: {
    parameters: [
      "Serum Potassium (K+) daily (especially with renal impairment, ACEi/ARB/MRA use, or baseline hyperkalemia)",
      "Serum Creatinine, BUN, and urine output (distinguish benign OCT2 inhibition from true AKI/AIN)",
      "Complete Blood Count (CBC) with differential weekly for bone marrow suppression",
      "Signs of hypersensitivity rash or mucositis"
    ]
  },
  stewardship: {
    deEscalationNotes: "For Stenotrophomonas, first determine whether S. maltophilia represents true infection or colonization, particularly in respiratory cultures. For invasive infection, TMP-SMX may be used as a component of combination therapy, with transition to TMP-SMX monotherapy considered after clear and sustained clinical improvement.",
    broadNotBetterPoint: "TMP-SMX lacks activity against Pseudomonas aeruginosa or obligate anaerobes. Do not use it as empiric monotherapy for hospital-acquired pneumonia or intra-abdominal sepsis."
  },
  evidenceTraceability: {
    guidelineIds: ["amr-guideline-idsa-2026"],
    claimCitations: [
      {
        claim: "IDSA 2026 AMR Guidance identifies Cefiderocol monotherapy as preferred for invasive S. maltophilia (supporting evidence is limited), with TMP-SMX as an important active option used as a component of combination therapy followed by transition to TMP-SMX monotherapy after clear sustained clinical improvement.",
        source: "IDSA 2026 Guidance on Antimicrobial-Resistant Infections. Clin Infect Dis 2026.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov"
      },
      {
        claim: "PJP treatment regimen is TMP-SMX 15–20 mg TMP/kg/day IV divided q6h for 21 days (dosed strictly by Trimethoprim component).",
        source: "Guidelines for Prevention and Treatment of Opportunistic Infections in Adults with HIV (CDC/NIH/IDSA 2026).",
        citationUrl: "https://clinicalinfo.hiv.gov"
      }
    ]
  },
  patientScenarios: [
    {
      title: "PJP Pneumonia in Immunocompromised Patient",
      clinicalContext: "A 48-year-old renal transplant patient on tacrolimus develops severe hypoxemic respiratory failure, bilateral ground-glass opacities, and PCR positive for PJP.",
      decision: "Initiate TMP-SMX 15 mg TMP/kg/day IV (calculated strictly by Trimethoprim component) divided q6h PLUS IV Methylprednisolone 40 mg q12h.",
      rationale: "TMP-SMX is the primary bactericidal therapy for PJP; adjunctive corticosteroids reduce mortality when PaO2 < 70 mmHg."
    },
    {
      title: "Stenotrophomonas maltophilia Invasive VAP vs Colonization",
      clinicalContext: "BAL culture in a prolonged ICU patient with worsening infiltrates and shock grows Stenotrophomonas maltophilia.",
      decision: "Determine whether S. maltophilia represents true invasive infection vs colonization. If invasive infection, current IDSA 2026 guidance identifies Cefiderocol monotherapy as the preferred treatment approach (supporting clinical evidence is limited; treatment depends on susceptibility, site, severity, and response). TMP-SMX is an active option that may be used as a component of combination therapy for invasive infection; transition to TMP-SMX monotherapy may be considered after clear and sustained clinical improvement.",
      rationale: "Per IDSA 2026 AMR guidance, Cefiderocol monotherapy is the preferred initial approach for invasive S. maltophilia (evidence limited), while TMP-SMX is an active option used as a component of combination therapy for invasive disease, with step-down to monotherapy upon clear sustained improvement."
    }
  ],
  examTraps: [
    {
      misconception: "Every positive sputum culture growing Stenotrophomonas maltophilia requires immediate TMP-SMX monotherapy.",
      reality: "FALSE. Before selecting therapy, determine whether S. maltophilia represents true infection or colonization, particularly when isolated from respiratory specimens. A positive respiratory culture is not an automatic indication for antimicrobial treatment.",
      explanation: "For true invasive infection, IDSA 2026 guidance identifies Cefiderocol monotherapy as preferred (supporting clinical evidence is limited). TMP-SMX is an active option used as a component of combination therapy for invasive infection, with transition to TMP-SMX monotherapy considered after clear and sustained clinical improvement."
    }
  ],
  searchAliases: ["tmp-smx", "bactrim", "septra", "cotrimoxazole", "trimethoprim sulfamethoxazole", "stenotrophomonas", "pjp"],
  relatedTopicIds: ["mdr-organisms", "pneumonia", "hyperkalemia", "immunocompromised-oncologic-critical-illness"]
};
