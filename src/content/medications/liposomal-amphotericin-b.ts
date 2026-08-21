import type { Medication } from "@/content-types/medication";

export const liposomalAmphotericinB: Medication = {
  id: "liposomal-amphotericin-b",
  slug: "liposomal-amphotericin-b",
  name: "Liposomal Amphotericin B",
  genericName: "Amphotericin B Liposome for Injection",
  brandNames: ["AmBisome", "L-AmB"],
  class: "Polyene Antifungal Agent (Liposomal Formulation)",
  category: "antimicrobials",
  subcategory: "Polyenes",
  summary: "Broadest-spectrum fungicidal polyene for Mucormycosis, invasive Molds, and Cryptococcus — significantly less nephrotoxic than conventional amphotericin B, but FORMULATIONS ARE NOT INTERCHANGEABLE MG-FOR-MG.",
  mechanism: {
    title: "Ergosterol Membrane Binding & Pore Formation",
    steps: [
      "Binds with high affinity to ergosterol in the fungal cell membrane.",
      "Forms transmembrane aqueous pores/channels, altering membrane permeability.",
      "Causes rapid leakage of intracellular potassium, magnesium, and essential monovalent ions.",
      "Triggers cell depolarization, metabolic shutdown, and fungicidal cell lysis.",
      "Liposomal Encapsulation (AmBisome): Liposomes deliver drug preferentially to fungal cells and reticuloendothelial system, drastically reducing binding to mammalian cholesterol and decreasing nephrotoxicity compared to deoxycholate."
    ],
    visualDiagram: "L-AmB → Ergosterol Binding → Transmembrane Pore Formation → K+/Mg+ Efflux → Fungicidal Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: [],
      notCovered: ["All Bacteria (Zero antibacterial activity)"]
    },
    gramNegative: {
      covered: [],
      notCovered: ["All Bacteria"]
    },
    anaerobes: {
      covered: [],
      notCovered: ["All Bacteria"]
    },
    atypicalsFungi: {
      covered: ["Mucorales (Rhizopus, Mucor, Lichtheimia - Drug of Choice)", "Aspergillus fumigatus / flavus / terreus", "Candida albicans & non-albicans species", "Cryptococcus neoformans", "Histoplasma capsulatum", "Blastomyces dermatitidis", "Coccidioides immitis"],
      notCovered: ["Pseudallescheria boydii / Scedosporium apiospermum", "Trichosporon spp. (variable)"]
    },
    notableGaps: ["Scedosporium apiospermum", "All Bacteria"]
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "Cmax / MIC ratio and AUC / MIC ratio",
    halfLife: "100 to 150 hours (terminal elimination half-life due to extensive tissue retention)",
    proteinBinding: ">90% bound to plasma proteins",
    metabolism: "Extensive reticuloendothelial uptake; metabolic fate not fully characterized",
    elimination: "Biliary and slow renal excretion (less than 10% excreted in urine)",
    vdNotes: "131 L/kg (extensive volume of distribution, concentrates in liver, spleen, and lungs)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line Drug of Choice for life-threatening Mucormycosis (zygomycosis) at high dose (5.0 mg/kg/day of Liposomal Amphotericin B).",
      "Broadest spectrum fungicidal agent covering Molds, Yeasts, Dimorphic fungi, and Cryptococcus.",
      "Liposomal delivery significantly reduces nephrotoxicity compared to conventional Amphotericin B Deoxycholate."
    ],
    whyIDont: [
      "CRITICAL MEDICATION SAFETY WARNING: Formulations are NOT interchangeable mg-for-mg! Giving Conventional Amphotericin B Deoxycholate at Liposomal doses (5.0 mg/kg/day) is fatal.",
      "Causes renal vasoconstriction, acute kidney injury, and distal tubular potassium and magnesium wasting.",
      "Infusion-related reactions (fever, chills, rigors, chest tightness, hypoxia)."
    ],
    bedsidePearl: "NEVER CONFUSE AMPHOTERICIN B FORMULATIONS! 1. Liposomal Amphotericin B (AmBisome): 3–5 mg/kg/day IV. 2. Amphotericin B Lipid Complex (ABLC/Abelcet): 5 mg/kg/day IV. 3. Conventional Amphotericin B Deoxycholate (Fungizone): 0.5–1.0 mg/kg/day IV (MAX 1.5 mg/kg/day). Mis-substituting deoxycholate at 5 mg/kg causes catastrophic fatal multi-organ failure!"
  },
  dosing: {
    routine: "Liposomal Amphotericin B (AmBisome): 3.0 to 5.0 mg/kg IV once daily (infused over 2 hours). Doses must explicitly specify the formulation.",
    syndromeSpecific: [
      {
        syndrome: "Mucormycosis (Rhinocerebral / Pulmonary / Disseminated)",
        regimen: "Liposomal Amphotericin B (AmBisome): 5.0 mg/kg IV once daily (up to 10 mg/kg/day for CNS involvement).",
        reference: "ECMM/MSG Global Guideline for Mucormycosis (Cornely OA et al. Lancet Infect Dis 2019;19:e405-e421).",
        note: "Combine with emergent surgical debridement. Standard 3 mg/kg dose is INADEQUATE for Mucorales."
      },
      {
        syndrome: "Cryptococcal Meningitis (Induction Phase)",
        regimen: "Liposomal Amphotericin B (AmBisome): 3.0–4.0 mg/kg IV once daily PLUS Flucytosine 25 mg/kg PO q6h for 2 weeks.",
        reference: "IDSA Cryptococcal Guidelines (Perfect JR et al. Clin Infect Dis 2010;50:291-322)."
      },
      {
        syndrome: "Invasive Aspergillosis (Alternative to Voriconazole)",
        regimen: "Liposomal Amphotericin B (AmBisome): 3.0–5.0 mg/kg IV once daily.",
        reference: "IDSA Aspergillosis Guidelines (Patterson TF et al. Clin Infect Dis 2016;63:e1-e60)."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl / Renal Failure", dose: "Liposomal Amphotericin B: 3.0–5.0 mg/kg IV once daily (weight-based dosing; no GFR reduction required). Hydration status must be individualized based on volume status." }
    ],
    hdDosing: "Liposomal Amphotericin B: 3.0–5.0 mg/kg IV once daily. Not dialyzable; no supplemental post-HD dose.",
    crrtDosing: "Liposomal Amphotericin B: 3.0–5.0 mg/kg IV once daily. No CRRT clearance adjustment required."
  },
  organFailure: {
    renalConsiderations: "Amphotericin causes afferent arteriolar vasoconstriction and distal renal tubular acidosis with K+ and Mg2+ wasting. For conventional deoxycholate, pre-infusion saline loading attenuated vasoconstriction; for liposomal amphotericin B (AmBisome), nephrotoxicity is ~60% lower, and pre-infusion saline loading is NOT universally mandatory. Hydration must be individualized to prevent fluid overload in patients with heart failure, oliguria, or ARDS.",
    hepaticConsiderations: "Minimal hepatic CYP metabolism; no dose reduction required in isolated hepatic impairment."
  },
  toxicity: {
    majorWarnings: [
      "FATAL DOSING ERROR RISK: Amphotericin B formulations are NOT interchangeable. Liposomal AmBisome = 3–5 mg/kg/day; ABLC Abelcet = 5 mg/kg/day; Conventional Deoxycholate = 0.5–1 mg/kg/day (MAX 1.5 mg/kg/day).",
      "Nephrotoxicity & AKI: Afferent arteriolar vasoconstriction + tubular toxicity (reduced with liposomal vehicle).",
      "Hypokalemia & Hypomagnesemia: Distal tubular transport damage causing renal electrolyte wasting."
    ],
    organToxicities: [
      { organ: "Renal & Electrolytes", description: "Acute Kidney Injury, hypokalemia, hypomagnesemia, renal tubular acidosis (RTA)." },
      { organ: "Cardiovascular / Infusion", description: "Infusion-related fever, rigors, chills, hypotension, hypoxia, dyspnea." },
      { organ: "Hematologic", description: "Normocytic normochromic anemia (suppression of erythropoietin production)." }
    ],
    blackBoxWarning: "Verify product name and dosage! Amphotericin B Deoxycholate overdose (>1.5 mg/kg) can result in fatal cardiac arrest."
  },
  interactions: [
    {
      drug: "Nephrotoxic Drugs (Aminoglycosides, Tacrolimus, Cyclosporine, Vancomycin, Contrast)",
      mechanism: "Additive renal tubular ischemia and nephrotoxicity",
      consequence: "Synergistic, severe Acute Kidney Injury",
      icuAction: "Avoid co-administration when possible; assess volume status and monitor serum creatinine daily."
    },
    {
      drug: "Digoxin",
      mechanism: "Amphotericin-induced hypokalemia sensitizes myocardium to digoxin",
      consequence: "Digitalis toxicity and lethal cardiac arrhythmias",
      icuAction: "Aggressively maintain serum potassium > 4.0 mEq/L."
    }
  ],
  monitoring: {
    parameters: [
      "Serum Potassium (K+) and Magnesium (Mg2+) DAILY — repletion guided by levels",
      "Serum Creatinine, BUN, and urine output daily",
      "Volume status and fluid balance (individualize hydration; avoid routine saline overload in heart failure/ARDS)",
      "Infusion reaction monitoring (vital signs every 30 min during infusion)"
    ]
  },
  stewardship: {
    deEscalationNotes: "Step down to oral Isavuconazole or Posaconazole for Mucormycosis once stable and tolerating oral intake.",
    broadNotBetterPoint: "Liposomal Amphotericin B is reserved for documented invasive mold/Mucor infections or severe cryptococcal disease; it is not indicated for uncomplicated Candida UTI or localized Thrush."
  },
  evidenceTraceability: {
    guidelineIds: ["mucormycosis-guideline-ecmm-2019", "aspergillosis-guideline-idsa-2016"],
    claimCitations: [
      {
        claim: "Global Mucormycosis Guidelines recommend Liposomal Amphotericin B (AmBisome) 5.0 mg/kg/day IV as first-line therapy.",
        source: "Global guideline for the diagnosis and management of mucormycosis: an initiative of the ECMM. Lancet Infect Dis 2019;19(12):e405-e421.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/31699664/"
      },
      {
        claim: "Amphotericin formulations are NOT interchangeable mg-for-mg; conventional deoxycholate overdose >1.5 mg/kg is fatal.",
        source: "FDA / DailyMed AmBisome (Liposomal Amphotericin B) Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Rhinocerebral Mucormycosis in Uncontrolled DKA",
      clinicalContext: "A 52-year-old diabetic in DKA develops black palatal eschar, proptosis, fever, and facial numbness.",
      decision: "Initiate Liposomal Amphotericin B (AmBisome) 5.0 mg/kg IV daily + Urgent ENT/Surgical Debridement.",
      rationale: "Mucormycosis requires emergency high-dose L-AmB (5.0 mg/kg/day) and surgical debridement. Standard 3 mg/kg dosing is inadequate."
    },
    {
      title: "K+ and Mg2+ Wasting during L-AmB Therapy",
      clinicalContext: "On day 4 of Liposomal Amphotericin B for invasive aspergillosis, serum K+ drops to 2.8 mEq/L and Mg2+ to 1.1 mg/dL.",
      decision: "Administer IV Potassium Chloride 40 mEq and IV Magnesium Sulfate 4g; assess fluid balance before saline loading.",
      rationale: "Amphotericin causes distal tubular electrolyte wasting requiring aggressive repletion. Hydration must be tailored to patient volume status."
    }
  ],
  examTraps: [
    {
      misconception: "Liposomal Amphotericin B can be substituted with Conventional Amphotericin B Deoxycholate at the same 5.0 mg/kg dose.",
      reality: "FALSE. Administering Conventional Amphotericin B Deoxycholate at 5.0 mg/kg causes FATAL cardiac arrest and renal shutdown.",
      explanation: "Conventional Amphotericin B Deoxycholate maximum safe dose is 1.0 mg/kg/day (max 1.5 mg/kg). Liposomal Amphotericin B (AmBisome) is encapsulated in lipid vehicles allowing 3.0–5.0 mg/kg/day. They are NOT interchangeable."
    }
  ],
  searchAliases: ["liposomal amphotericin b", "ambisome", "l-amb", "mucormycosis antifungal", "polyene"],
  relatedTopicIds: ["immunocompromised-oncologic-critical-illness", "sepsis", "mdr-organisms"]
};
