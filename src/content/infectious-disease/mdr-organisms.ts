import type { Topic } from "@/content-types";

export const mdrOrganisms: Topic = {
  id: "mdr-organisms",
  slug: "mdr-organisms",
  title: "Multidrug-Resistant (MDR) Pathogens & IDSA AMR Guidance",
  category: "infectious-disease",
  oneLiner: "Molecular resistance mechanisms (ESBL, AmpC, KPC, NDM, OXA-48, DTR-Pseudomonas, CRAB), the MERINO trial, and modern novel beta-lactamase inhibitor therapeutics.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Multidrug-Resistant Pathogens in Critical Illness, Antimicrobial Stewardship, and Sepsis Pharmacotherapy",
    },
    {
      title: "IDSA Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections",
      edition: "2024 Update / 2026 Living Guidance",
    },
  ],
  currentStatus: "Current as of the IDSA 2024/2026 Living AMR Guidance on Gram-Negative Resistance, the MERINO trial, and the 2023 IDSA/SHEA Antimicrobial Stewardship Guidelines.",
  otherReferences: [
    "Tamma PD, et al. Infectious Diseases Society of America 2024 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections. Clin Infect Dis. 2024;79(Suppl 2):S1-S85.",
    "Harris PNA, et al. Effect of Piperacillin-Tazobactam vs Meropenem on 30-Day Mortality for Patients With E coli or Klebsiella pneumoniae Bloodstream Infection and Ceftriaxone Resistance (MERINO Trial). JAMA. 2018;320(10):984-994.",
    "Rybak MJ, et al. Therapeutic monitoring of vancomycin for serious methicillin-resistant Staphylococcus aureus infections: A revised consensus guideline. Am J Health Syst Pharm. 2020;77(11):835-864.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "sepsis", label: "Fundamental host response and early antimicrobial timing" },
    { type: "related-to", targetId: "hap", label: "Nosocomial pneumonia pathogen coverage" },
    { type: "related-to", targetId: "vap", label: "Ventilator-associated resistant Gram-negatives" },
    { type: "related-to", targetId: "septic-shock", label: "Empiric broad-spectrum coverage in refractory septic shock" },
    { type: "related-to", targetId: "aki", label: "Avoidance of nephrotoxic salvage agents (colistin/aminoglycosides)" },
  ],
  sections: [
    {
      id: "mdr-organisms.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "mdr-organisms-guideline-idsa-amr-2026",
          relevance: "IDSA 2023 guidance on treatment of antimicrobial-resistant Gram-negative infections (CRE, CRAB, DTR-P. aeruginosa)"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Multidrug-resistant (MDR), extensively drug-resistant (XDR), and difficult-to-treat (DTR) pathogens represent a premier challenge in critical care, driven by prior antimicrobial exposure and invasive devices.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Multidrug-resistant (MDR) bacterial infections in the ICU are associated with delayed active antimicrobial therapy, increased length of stay, excessive nephrotoxicity from older salvage agents, and crude mortality rates exceeding 40–50% in septic shock. The emergence of plasmid-mediated carbapenemases (KPC, NDM, OXA-48) and difficult-to-treat Pseudomonas aeruginosa has rendered traditional empiric regimens ineffective.",
        },
        {
          type: "paragraph",
          text: "The modern paradigm synthesized in the IDSA Living AMR Guidance prioritizes: (1) Understanding precise molecular resistance mechanisms (ESBL, AmpC, Serine vs Metallo-Carbapenemases); (2) Deploying targeted novel beta-lactam/beta-lactamase inhibitor (BL/BLI) combinations (Ceftazidime-Avibactam, Meropenem-Vaborbactam, Imipenem-Relebactam, Ceftolozane-Tazobactam) or siderophore cephalosporins (Cefiderocol) instead of toxic polymyxins; and (3) Practicing aggressive, culture-directed de-escalation.",
        },
      ],
    },
    {
      id: "mdr-organisms.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Multidrug-Resistant Bacterial Pathogens",
      summary: "Differentiate CRE, ESBL, DTR-Pseudomonas, and MRSA colonization from invasive infection.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Asymptomatic Colonization vs True Invasive Infection: Colonization in endotracheal secretions, urinary catheter bags, or open chronic wounds does NOT warrant systemic antibiotic therapy unless accompanied by systemic inflammatory response (SIRS) and organ dysfunction.",
          "ESBL Enterobacterales vs Carbapenem-Resistant Enterobacterales (CRE): ESBL remains susceptible to carbapenems (meropenem/ertapenem); CRE requires novel beta-lactamase inhibitor combinations (ceftazidime-avibactam, meropenem-vaborbactam).",
          "C. difficile Colitis vs Antibiotic-Associated Diarrhea: Severe profuse watery diarrhea with marked leukocytosis (>20,000/uL) and toxic megacolon risk; confirmed by C. diff NAAT / toxin EIA."
]
        }
      ]
    },
    {
      id: "mdr-organisms.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Rapid Phenotypic & Molecular Resistance Detection",
      summary: "PCR multiplex panels, modified carbapenem inactivation methods, and automated AST interpretation.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Rapid Molecular Resistance Testing", value: "Direct blood culture PCR panels detect specific resistance genes within 1-2 hours: mecA/C (MRSA), vanA/B (VRE), blaKPC, blaNDM, blaVIM, blaIMP, blaOXA-48 (Carbapenemases)." },
            { label: "Phenotypic Confirmatory Testing", value: "Modified Carbapenem Inactivation Method (mCIM) and EDTA-Carbapenem Inactivation Method (eCIM) to differentiate serine carbapenemases (KPC, OXA-48) from metallo-beta-lactamases (NDM, VIM)." },
            { label: "Broth Microdilution MIC", value: "Gold standard for minimum inhibitory concentration (MIC) confirmation, particularly for colistin and novel beta-lactamase inhibitor combinations." }
          ]
        }
      ]
    },
    {
      id: "mdr-organisms.gram-negative",
      kind: "definition",
      title: "Gram-Negative Resistance Phenotypes & Preferred Therapies",
      summary: "Comprehensive classification: ESBL (MERINO trial), AmpC producers, CRE (KPC, NDM, OXA-48), DTR-Pseudomonas, CRAB, and Stenotrophomonas.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Treatment recommendations based on the 2024–2026 IDSA Antimicrobial-Resistant Gram-Negative Guidance:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. ESBL-Producing Enterobacterales",
              value: "Mechanisms: Plasmid-mediated CTX-M, TEM, SHV enzymes hydrolyzing penicillins, 3rd/4th-gen cephalosporins, and aztreonam.\nEvidence: The landmark MERINO Trial (JAMA 2018) proved that Meropenem is superior to Piperacillin-Tazobactam for ESBL bacteremia; Pip-Tazo resulted in significantly higher 30-day mortality (12.3% vs 3.7%, p=0.002).\nPreferred Therapy: Meropenem (1 g IV q8h extended infusion) or Imipenem-Cilastatin (500 mg IV q6h).",
            },
            {
              label: "2. AmpC Beta-Lactamase Producers (SPACE/HECK Organisms)",
              value: "Organisms: Serratia, Pseudomonas, Acinetobacter, Citrobacter freundii, Enterobacter cloacae, Klebsiella aerogenes, Morganella morganii, Providencia.\nMechanism: Inducible chromosomal AmpC cephalosporinase. Ceftriaxone or Pip-Tazo selects for stably derepressed AmpC hyper-producing mutants during therapy, causing clinical failure.\nPreferred Therapy: Cefepime (2 g IV q8h extended infusion; stable to AmpC if MIC ≤ 2 mcg/mL) OR Meropenem.",
            },
            {
              label: "3. Carbapenem-Resistant Enterobacterales (CRE)",
              value: "• KPC (Ambler Class A Serine Carbapenemase): Preferred: Ceftazidime-Avibactam (2.5 g IV q8h) OR Meropenem-Vaborbactam (4 g IV q8h) OR Imipenem-Cilastatin-Relebactam (1.25 g IV q6h).\n• NDM / VIM / IMP (Ambler Class B Metallo-Beta-Lactamases): Zinc-dependent enzymes that hydrolyze all beta-lactams EXCEPT Aztreonam. Preferred: Ceftazidime-Avibactam + Aztreonam (CZA + ATM) combination (Avibactam protects Aztreonam from co-carried ESBLs/AmpCs while Aztreonam resists the MBL) OR Cefiderocol.\n• OXA-48-Like (Ambler Class D Serine Carbapenemase): Spares extended-spectrum cephalosporins but hydrolyzes carbapenems. Preferred: Ceftazidime-Avibactam.",
            },
            {
              label: "4. Difficult-to-Treat Resistance (DTR) Pseudomonas aeruginosa",
              value: "Defined as resistance to piperacillin-tazobactam, cefepime, ceftazidime, meropenem, and ciprofloxacin.\nPreferred Therapy: Ceftolozane-Tazobactam (3 g IV q8h extended 3-hr infusion) OR Ceftazidime-Avibactam OR Imipenem-Cilastatin-Relebactam OR Cefiderocol.",
            },
            {
              label: "5. Carbapenem-Resistant Acinetobacter baumannii (CRAB)",
              value: "Extreme intrinsic and acquired resistance (OXA-23/24). Polymyxins have poor lung penetration and high nephrotoxicity.\nPreferred Therapy: High-Dose Ampicillin-Sulbactam (total dose 27 g/day [9 g sulbactam component] continuous infusion) PLUS a second agent (Minocycline 200 mg PO/IV q12h, Tigecycline 100 mg IV q12h, or Cefiderocol). Sulbactam has direct intrinsic bactericidal affinity for PBP1 and PBP3 in Acinetobacter.",
            },
            {
              label: "6. Stenotrophomonas maltophilia",
              value: "Intrinsically resistant to all carbapenems due to chromosomal L1 metallo-beta-lactamase and L2 serine beta-lactamase.\nPreferred Therapy: High-dose Trimethoprim-Sulfamethoxazole (TMP-SMX 15 mg/kg/day TMP component divided q6–8h) OR Minocycline (200 mg q12h) OR Cefiderocol.",
            },
          ],
        },
      ],
    },
    {
      id: "mdr-organisms.gram-positive",
      kind: "definition",
      title: "Gram-Positive Resistance: MRSA & VRE Therapeutics",
      summary: "Vancomycin AUC/MIC monitoring, linezolid, daptomycin surfactant constraints, ceftaroline, and VRE management.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Methicillin-Resistant S. aureus (MRSA)",
              value: "Mechanism: mecA/mecC gene encoding penicillin-binding protein 2a (PBP2a) with low affinity for beta-lactams.\n• Vancomycin: Target AUC24/MIC ratio 400–600 mg·h/L (replaces traditional trough monitoring 15–20 mcg/mL to reduce acute kidney injury by > 50% per 2020 consensus guidelines). Loading dose: 25–30 mg/kg.\n• Linezolid: 600 mg IV q12h. Synthetic oxazolidinone inhibiting 50S ribosomal protein synthesis. Preferred in MRSA necrotizing pneumonia (inhibits Panton-Valentine Leukocidin toxin production) and in patients with baseline AKI.\n• Daptomycin: 8–10 mg/kg IV daily. Bactericidal lipopeptide. CONTRAINDICATED in pneumonia (inactivated by pulmonary surfactant). Ideal for MRSA bacteremia and right-sided endocarditis.\n• Ceftaroline: 5th-generation cephalosporin designed specifically to bind PBP2a.",
            },
            {
              label: "2. Vancomycin-Resistant Enterococci (VRE)",
              value: "Mechanism: vanA/vanB operons altering cell wall peptidoglycan precursors from D-Ala-D-Ala to D-Ala-D-Lac, reducing vancomycin binding affinity 1,000-fold. (E. faecium accounts for > 90% of ICU VRE).\nPreferred Therapy: High-Dose Daptomycin (10–12 mg/kg/day IV) OR Linezolid (600 mg IV q12h).",
            },
          ],
        },
      ],
    },
    {
      id: "mdr-organisms.stewardship",
      kind: "management",
      title: "Antimicrobial Stewardship & Toxic Salvage Agent Replacement",
      summary: "Replacing polymyxin/aminoglycoside toxicity with novel BL/BLIs, rapid diagnostic multiplex PCR, and early de-escalation.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Retiring Routine Polymyxin B / Colistin Monotherapy: Older salvage polymyxins are associated with severe nephrotoxicity (AKI in 40–50% of patients), neurotoxicity, poor pulmonary penetration, and higher mortality compared to modern BL/BLI agents (ceftazidime-avibactam, meropenem-vaborbactam). The IDSA guidance explicitly recommends against polymyxins when novel BL/BLIs are available.",
            "Rapid Multiplex Molecular Diagnostics: Implement direct-from-blood and lower-respiratory PCR panels (e.g., detecting mecA, vanA, KPC, NDM, OXA-48, VIM, CTX-M) to identify resistance genes within 1–2 hours of culture positivity, enabling targeted therapy 24–48 hours before phenotypic susceptibility profiles return.",
            "Daily Antimicrobial De-escalation: Reassess broad-spectrum double Gram-negative and MRSA coverage at 48–72 hours; narrow therapy immediately to single targeted agents once sensitivities are confirmed.",
          ],
        },
      ],
    },
    {
      id: "mdr-organisms.complications",
      kind: "complications",
      title: "Complications of MDR Infections & Antibiotic Toxicities",
      summary: "Inappropriate initial therapy mortality, vancomycin nephrotoxicity, linezolid cytopenias, and Clostridioides difficile.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Discordant Initial Empiric Therapy: Failure to cover an MDR pathogen in septic shock is independently associated with a 2- to 3-fold increase in hospital mortality.",
            "Vancomycin-Induced Acute Kidney Injury: Synergistic nephrotoxicity when combined with Piperacillin-Tazobactam ('Zosyn + Vanc' nephrotoxicity syndrome); target AUC/MIC 400–600 or switch to Cefepime.",
            "Linezolid Toxicities: Reversible bone marrow suppression (thrombocytopenia, anemia) after > 10–14 days; irreversible peripheral/optic neuropathy; and Serotonin Syndrome when combined with SSRIs/MAOIs.",
            "Daptomycin-Induced Rhabdomyolysis & Eosinophilic Pneumonia: Requires weekly serum CPK monitoring.",
          ],
        },
      ],
    },
    {
      id: "mdr-organisms.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and therapeutic pitfalls in MDR pathogen management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Using Piperacillin-Tazobactam for severe ESBL bloodstream infections: The MERINO trial proved Pip-Tazo has higher 30-day mortality than Meropenem for ESBL bacteremia; use carbapenems.",
            "Treating MRSA or Enterococcal pneumonia with Daptomycin: Pulmonary surfactant binds and neutralizes daptomycin, rendering it completely ineffective in alveolar lung tissue; use Linezolid or Vancomycin for pneumonia.",
            "Using 3rd-generation cephalosporins for AmpC-producing Enterobacterales: Induces AmpC expression and causes clinical failure; use Cefepime or Meropenem.",
            "Monotherapy with Ceftazidime-Avibactam for NDM Metallo-Beta-Lactamase producers: Avibactam does NOT inhibit NDM; must combine Ceftazidime-Avibactam PLUS Aztreonam (CZA + ATM) or use Cefiderocol.",
            "Targeting traditional Vancomycin troughs (15–20 mcg/mL) instead of AUC/MIC: Trough-guided dosing causes unnecessary supratherapeutic exposures and high rates of acute kidney injury without increasing clinical efficacy.",
          ],
        },
      ],
    },
    {
      id: "mdr-organisms.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Cefiderocol in CR-Acinetobacter (CREDIBLE-CR trial) and carbapenem-sparing strategies.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Cefiderocol in Acinetobacter baumannii Infections (CREDIBLE-CR Trial): Cefiderocol is a novel siderophore cephalosporin with potent in vitro activity against all carbapenemase classes. However, in the CREDIBLE-CR randomized trial, an unexpected signal of higher all-cause mortality was observed in the subgroup with CR-Acinetobacter infections compared to best available therapy. The IDSA guidance recommends Cefiderocol only as part of a combination regimen (e.g. with high-dose ampicillin-sulbactam) rather than monotherapy for severe CRAB infections.",
        },
      ],
    },
  ],
};
