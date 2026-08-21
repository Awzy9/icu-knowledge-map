import type { Medication } from "@/content-types/medication";

export const ceftriaxone: Medication = {
  id: "ceftriaxone",
  slug: "ceftriaxone",
  name: "Ceftriaxone",
  genericName: "Ceftriaxone Sodium",
  brandNames: ["Rocephin"],
  class: "3rd-Generation Cephalosporin Antibiotic",
  category: "antimicrobials",
  subcategory: "Cephalosporins",
  summary: "Workhorse 3rd-generation cephalosporin with strong Gram-negative and pneumococcal coverage, dual biliary/renal clearance, and high CNS penetration at 2g IV q12h for bacterial meningitis.",
  mechanism: {
    title: "Inhibition of Penicillin-Binding Proteins (PBPs)",
    steps: [
      "Binds high-affinity Penicillin-Binding Proteins (PBP 1a, 1b, and 3) on the bacterial cell membrane.",
      "Inhibits peptidoglycan transpeptidation, halting bacterial cell-wall synthesis.",
      "Activates bacterial autolytic enzymes (autolysins/murein hydrolases), resulting in rapid cell lysis and bactericidal action."
    ],
    visualDiagram: "Ceftriaxone → PBP Binding → Blocked Peptidoglycan Transpeptidation → Murein Autolysis → Cell Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: ["Streptococcus pneumoniae (penicillin-susceptible & intermediate)", "Streptococcus pyogenes (Group A)", "Streptococcus agalactiae (Group B)", "Methicillin-susceptible Staphylococcus aureus (MSSA)"],
      notCovered: ["Methicillin-resistant Staphylococcus aureus (MRSA)", "Enterococcus faecalis", "Enterococcus faecium", "Listeria monocytogenes"]
    },
    gramNegative: {
      covered: ["Neisseria meningitidis", "Haemophilus influenzae", "Escherichia coli (wild-type)", "Klebsiella pneumoniae (wild-type)", "Proteus mirabilis"],
      notCovered: ["Pseudomonas aeruginosa", "Acinetobacter baumannii", "ESBL-producing Enterobacterales", "AmpC derepressed species (Enterobacter, Citrobacter, Serratia)"]
    },
    anaerobes: {
      covered: ["Peptostreptococcus spp."],
      notCovered: ["Bacteroides fragilis group", "Clostridioides difficile"]
    },
    atypicalsFungi: {
      covered: [],
      notCovered: ["Mycoplasma pneumoniae", "Legionella pneumophila", "Chlamydia pneumoniae", "Candida spp."]
    },
    notableGaps: ["Pseudomonas aeruginosa", "MRSA", "Enterococcus", "Listeria monocytogenes", "ESBL Enterobacterales", "Bacteroides fragilis"]
  },
  pkPd: {
    type: "time-dependent",
    targetParameter: "% Time free drug concentration exceeds MIC (%fT > MIC ≥ 40–50%)",
    halfLife: "6 to 9 hours (longest half-life among cephalosporins, allowing once-daily routine dosing)",
    proteinBinding: "85% to 95% (concentration-dependent albumin binding)",
    metabolism: "Minimal hepatic metabolism; excreted unchanged via dual pathways",
    elimination: "Dual elimination: 40–65% renal excretion, 35–50% biliary/fecal excretion",
    vdNotes: "0.15 L/kg (extracellular distribution; increases in sepsis and fluid overload)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line empiric coverage for severe Community-Acquired Pneumonia (CAP) in combination with Macrolide/Doxycycline.",
      "First-line empiric treatment for Adult Bacterial Meningitis when dosed at 2.0 g IV every 12 hours.",
      "Dual biliary/renal clearance means NO renal dose adjustment is required even in ESRD or hemodialysis!"
    ],
    whyIDont: [
      "Zero activity against Pseudomonas aeruginosa or Acinetobacter baumannii.",
      "Inactivated by Extended-Spectrum Beta-Lactamases (ESBL) and AmpC beta-lactamases.",
      "Inherently INEFFECTIVE against Listeria monocytogenes (must co-administer Ampicillin when Listeria risk is present)."
    ],
    bedsidePearl: "Never mix routine infection dosing (1–2 g q24h) with CNS bacterial meningitis dosing (2.0 g IV q12h) — high meningeal drug levels are required to overcome the blood-brain barrier."
  },
  dosing: {
    routine: "Routine Severe Infections / CAP: 1.0–2.0 g IV every 24 hours (infused over 30 minutes).",
    syndromeSpecific: [
      {
        syndrome: "Adult Bacterial Meningitis",
        regimen: "2.0 g IV every 12 hours (Total: 4.0 g/day IV infused over 30 minutes).",
        reference: "IDSA Practice Guidelines for Bacterial Meningitis (Tunkel AR et al. Clin Infect Dis 2004;39:1267-1284).",
        note: "High dose mandatory for CSF penetration. Empiric multi-drug meningitis coverage (e.g. adding Vancomycin or Ampicillin) depends on patient age, immune status, and epidemiology (see Meningitis clinical pathway)."
      },
      {
        syndrome: "Severe Community-Acquired Pneumonia (CAP)",
        regimen: "1.0–2.0 g IV every 24 hours PLUS Azithromycin 500 mg IV q24h (or Doxycycline 100 mg IV q12h).",
        reference: "ATS/IDSA CAP Guidelines (Metlay JP et al. Am J Respir Crit Care Med 2019;200:e45-e67)."
      },
      {
        syndrome: "Infective Endocarditis (Streptococcal / Susceptible Enterococcal)",
        regimen: "2.0 g IV every 24 hours (or 2.0 g IV q12h for selected native valve endocarditis).",
        reference: "AHA Infective Endocarditis Guidelines (Baddour LM et al. Circulation 2015;132:1435-1486)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl > 10 mL/min", dose: "No dose adjustment required." },
      { crclRange: "CrCl < 10 mL/min / ESRD", dose: "No dose adjustment required (maximum 2.0 g/day for routine non-CNS infections due to dual biliary excretion)." }
    ],
    hdDosing: "No supplemental dose required after hemodialysis (dual hepatic/biliary clearance maintains therapeutic levels).",
    crrtDosing: "2.0 g IV every 24 hours for systemic infections; 2.0 g IV every 12 hours for CNS bacterial meningitis."
  },
  organFailure: {
    renalConsiderations: "No dose reduction needed in renal failure because biliary elimination compensates. However, monitor in combined renal and hepatic failure.",
    hepaticConsiderations: "Biliary excretion compensates for renal failure; no adjustment required for isolated hepatic failure unless severe combined hepatorenal failure."
  },
  toxicity: {
    majorWarnings: [
      "Biliary sludging / pseudolithiasis (reversible ceftriaxone-calcium precipitates in gallbladder).",
      "Immune-mediated hemolytic anemia (rare but severe).",
      "CONTRAINDICATED in neonates ≤28 days receiving IV calcium-containing solutions (risk of fatal pulmonary/renal calcium-ceftriaxone precipitates)."
    ],
    organToxicities: [
      { organ: "Hepato-Biliary", description: "Biliary pseudolithiasis, elevated transaminases, cholestatic jaundice." },
      { organ: "Gastrointestinal", description: "Clostridioides difficile colitis, diarrhea, nausea." },
      { organ: "Hematologic", description: "Eosinophilia, thrombocytosis, leucopenia, positive Coombs test." }
    ]
  },
  interactions: [
    {
      drug: "IV Calcium-Containing Solutions (Ringer's Lactate, TPN)",
      mechanism: "Precipitation of insoluble ceftriaxone-calcium salts",
      consequence: "Fatal organ precipitation in neonates; physical line precipitation in adults",
      icuAction: "Do NOT co-infuse ceftriaxone and calcium solutions through the same IV line."
    },
    {
      drug: "Warfarin",
      mechanism: "Displacement from plasma albumin and inhibition of vitamin K-producing gut flora",
      consequence: "Increased INR and bleeding risk",
      icuAction: "Monitor INR closely when initiating ceftriaxone in warfarin-treated patients."
    }
  ],
  monitoring: {
    parameters: [
      "Clinical signs of infection resolution",
      "Complete Blood Count (CBC) with differential",
      "Liver function tests (ALT, AST, total bilirubin) during prolonged therapy",
      "Stool C. difficile toxin testing if new onset diarrhea occurs"
    ]
  },
  stewardship: {
    deEscalationNotes: "Narrow to penicillin G or ampicillin if Streptococcus pneumoniae is confirmed fully penicillin-susceptible (MIC < 0.06 mcg/mL).",
    broadNotBetterPoint: "Ceftriaxone does NOT cover Pseudomonas, Enterococcus, or anaerobes. Adding metronidazole or switching to Pip-Tazo is only indicated when anaerobic intra-abdominal infection is documented or strongly suspected."
  },
  evidenceTraceability: {
    guidelineIds: ["meningitis-guideline-idsa-2004", "cap-guideline-ats-idsa-2019"],
    claimCitations: [
      {
        claim: "Adult Bacterial Meningitis requires Ceftriaxone 2.0 g IV every 12 hours.",
        source: "IDSA Practice Guidelines for the Management of Bacterial Meningitis. Clin Infect Dis 2004;39(9):1267-1284.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/15496941/"
      },
      {
        claim: "Severe CAP empiric beta-lactam regimen is Ceftriaxone 1–2 g IV daily combined with Azithromycin or Fluoroquinolone.",
        source: "ATS/IDSA Official Clinical Practice Guideline on CAP. Am J Respir Crit Care Med 2019;200(7):e45-e67.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/31573350/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Suspected Bacterial Meningitis in 28-Year-Old",
      clinicalContext: "Presents with fever, nuchal rigidity, and petechial rash. GCS 14.",
      decision: "Administer Dexamethasone 10 mg IV + Ceftriaxone 2.0 g IV q12h + Vancomycin 25 mg/kg IV loading dose immediately.",
      rationale: "Requires high CNS drug concentrations (2g q12h) to penetrate inflamed meninges and overcome potential penicillin-resistant S. pneumoniae."
    },
    {
      title: "Severe CAP in Patient with ESRD on Hemodialysis",
      clinicalContext: "Admitted to ICU with severe lobar pneumonia and septic shock. CrCl < 10 mL/min.",
      decision: "Administer Ceftriaxone 2.0 g IV every 24 hours + Azithromycin 500 mg IV q24h.",
      rationale: "No dose reduction is needed for ESRD because ceftriaxone undergoes dual biliary elimination."
    }
  ],
  examTraps: [
    {
      misconception: "Ceftriaxone 1 g IV daily is adequate for acute bacterial meningitis in adults.",
      reality: "FALSE. Adult bacterial meningitis REQUIRES 2.0 g IV every 12 hours (4.0 g/day total).",
      explanation: "Standard 1–2g once-daily dosing achieves insufficient CSF concentrations across the blood-brain barrier to clear S. pneumoniae and N. meningitidis."
    }
  ],
  searchAliases: ["ceftriaxone", "rocephin", "3rd gen cephalosporin", "meningitis antibiotic"],
  relatedTopicIds: ["meningitis-encephalitis", "pneumonia", "sepsis"]
};
