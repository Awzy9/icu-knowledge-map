import type { Medication } from "@/content-types/medication";

export const anidulafungin: Medication = {
  id: "anidulafungin",
  slug: "anidulafungin",
  name: "Anidulafungin",
  genericName: "Anidulafungin",
  brandNames: ["Eraxis"],
  class: "Echinocandin Antifungal Agent",
  category: "antimicrobials",
  subcategory: "Echinocandins",
  summary: "First-line echinocandin for candidemia and invasive candidiasis in critically ill patients — features unique non-enzymatic spontaneous chemical degradation, with no dosage adjustment required for renal or hepatic impairment per prescribing information.",
  mechanism: {
    title: "Non-Competitive Beta-(1,3)-D-Glucan Synthase Inhibition",
    steps: [
      "Binds non-competitively to the catalytic subunit of beta-(1,3)-D-glucan synthase enzyme in fungal cell walls.",
      "Inhibits synthesis of glucan polymers, a major structural component of the fungal cell wall.",
      "Causes cell wall thinning, osmotic instability, and fungal cell lysis.",
      "Exhibits potent fungicidal activity against Candida species and fungistatic activity against Aspergillus hyphae."
    ],
    visualDiagram: "Anidulafungin → Beta-(1,3)-D-Glucan Synthase Inhibition → Glucan Polymer Depletion → Fungal Osmotic Lysis"
  },
  spectrum: {
    gramPositive: {
      covered: [],
      notCovered: ["All Bacteria (Echinocandins target fungal β-(1,3)-D-glucan synthesis and have no antibacterial activity)"]
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
      covered: ["Candida albicans", "Candida glabrata (azole-resistant)", "Candida tropicalis", "Candida krusei (inherently fluconazole-resistant)", "Candida parapsilosis (fungistatic/higher MICs)", "Aspergillus fumigatus (fungistatic)"],
      notCovered: ["Cryptococcus neoformans (lacks 1,3-beta-glucan)", "Trichosporon spp.", "Fusarium spp.", "Mucorales (Rhizopus, Mucor)", "Histoplasma capsulatum"]
    },
    notableGaps: ["Cryptococcus neoformans", "Mucorales", "Fusarium", "Candida UTI (poor urine excretion)", "All Bacteria"]
  },
  pkPd: {
    type: "auc-mic",
    targetParameter: "AUC24 / MIC ratio (Cmax/MIC and AUC/MIC drive fungicidal efficacy)",
    halfLife: "24 to 26 hours (terminal elimination half-life; allows once-daily dosing)",
    proteinBinding: ">84% to 99% (highly bound to human plasma proteins)",
    metabolism: "Non-enzymatic spontaneous chemical degradation at physiologic body temperature and pH into inactive peptide fragments",
    elimination: "Biliary/fecal excretion of degradation products (<1% unchanged drug excreted in urine)",
    vdNotes: "0.6 to 0.7 L/kg (extensive tissue distribution into liver, spleen, lungs, and abdominal organs)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line preferred initial antifungal therapy for candidemia and invasive candidiasis in critically ill septic patients.",
      "Unique PK feature: Spontaneous chemical degradation means no dosage adjustment is required for renal impairment, hepatic cirrhosis, hemodialysis, or CRRT per prescribing information.",
      "Fungicidal against azole-resistant Candida glabrata and inherently fluconazole-resistant Candida krusei."
    ],
    whyIDont: [
      "Poor urinary tract penetration: Ineffective for Candida pyelonephritis or cystitis.",
      "Poor CNS and intraocular penetration: Ineffective for fungal meningitis or endophthalmitis.",
      "Higher MICs against Candida parapsilosis (though clinical outcomes remain generally favorable)."
    ],
    bedsidePearl: "Candida recovered from blood should be considered clinically significant and evaluated as candidemia rather than dismissed as contamination. Immediate antifungal therapy is indicated. If a central venous catheter is considered the likely source AND can be safely removed, early catheter removal should be performed according to current guidance and clinical context. Catheter decisions should be individualized based on suspected source, ability to safely remove/replace access, organism, persistence of candidemia, clinical stability, and other possible infection sources. Conversely, Candida in sputum represents colonization in >95% of cases — do NOT treat respiratory colonization!"
  },
  dosing: {
    routine: "Candidemia / Invasive Candidiasis: Loading dose 200 mg IV ONCE on Day 1, followed by 100 mg IV daily thereafter.",
    syndromeSpecific: [
      {
        syndrome: "Candidemia & Invasive Candidiasis (ICU Initial Therapy)",
        regimen: "Loading dose 200 mg IV ONCE (infused over 120 min), then 100 mg IV daily (infused over 60 min).",
        reference: "IDSA Clinical Practice Guideline for the Management of Candidiasis (Pappas PG et al. Clin Infect Dis 2016;62:e1-50).",
        note: "Continue for at least 14 days after first negative blood culture and resolution of signs."
      },
      {
        syndrome: "Esophageal Candidiasis",
        regimen: "Loading dose 100 mg IV ONCE, then 50 mg IV daily for 14–21 days.",
        reference: "IDSA Candidiasis Guidelines."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl (Normal to ESRD)", dose: "No dosage adjustment required (200 mg load, then 100 mg daily) per prescribing information." }
    ],
    hdDosing: "No dosage adjustment or supplemental dose required post-hemodialysis.",
    crrtDosing: "No dosage adjustment required in CVVH, CVVHD, or CVVHDF."
  },
  organFailure: {
    renalConsiderations: "Less than 1% excreted unchanged in urine. Renal impairment, hemodialysis, and CRRT do not alter pharmacokinetics. No dosage adjustment required according to prescribing information.",
    hepaticConsiderations: "Does not undergo hepatic CYP metabolism. No dosage adjustment required for hepatic impairment (Child-Pugh A, B, C) per prescribing information. Periodic LFT monitoring is still recommended."
  },
  toxicity: {
    majorWarnings: [
      "Histamine-mediated Infusion Reactions: Rapid IV infusion (<1 hour) may cause histamine release leading to flushing, rash, hypotension, and dyspnea.",
      "Transient LFT Elevations: Mild elevation of serum transaminases and alkaline phosphatase (requires periodic LFT monitoring)."
    ],
    organToxicities: [
      { organ: "Cardiovascular", description: "Hypotension, flushing, phlebitis at IV site if infused rapidly." },
      { organ: "Hepatic", description: "Transient elevation of ALT, AST, alkaline phosphatase, and total bilirubin." },
      { organ: "Gastrointestinal", description: "Nausea, vomiting, diarrhea." }
    ]
  },
  interactions: [
    {
      drug: "Tacrolimus / Cyclosporine / Sirolimus",
      mechanism: "Spontaneous chemical degradation avoids CYP3A4 pathway",
      consequence: "No drug-drug interaction or calcineurin inhibitor level changes",
      icuAction: "No dose adjustment of immunosuppressants required (unlike azole antifungals)."
    },
    {
      drug: "Rifampin / Carbamazepine",
      mechanism: "Non-enzymatic degradation",
      consequence: "No significant CYP induction interaction",
      icuAction: "Standard dosing maintained."
    }
  ],
  monitoring: {
    parameters: [
      "Daily Blood Cultures to document clearance of candidemia",
      "Ophthalmologic Evaluation: IDSA guidelines recommend routine dilated eye exam; AAO consensus favors targeted exam for symptomatic visual complaints or high-risk patients",
      "Liver Function Tests (ALT, AST, Bilirubin) periodically",
      "Infusion rate monitoring (ensure infusion time ≥ 60 minutes for 100mg dose)"
    ]
  },
  stewardship: {
    deEscalationNotes: "Step down from Anidulafungin to oral Fluconazole (400–800 mg daily) after 5–7 days if Candida albicans is isolated, patient is clinically stable, and strain is susceptible.",
    broadNotBetterPoint: "Reserving Echinocandins for systemic candidemia/invasive candidiasis and avoiding treatment of respiratory Candida colonization prevents echinocandin resistance (FKS gene mutations)."
  },
  evidenceTraceability: {
    guidelineIds: ["candidiasis-guideline-idsa-2016"],
    claimCitations: [
      {
        claim: "IDSA Candidiasis Guidelines recommend an echinocandin (Anidulafungin, Caspofungin, Micafungin) as preferred initial therapy for candidemia in critically ill patients.",
        source: "Clinical Practice Guideline for Management of Candidiasis: 2016 Update. Clin Infect Dis 2016;62(4):e1-e50.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/26679728/"
      },
      {
        claim: "Anidulafungin undergoes non-enzymatic spontaneous chemical degradation; prescribing information states no dosage adjustment is required for renal or hepatic impairment.",
        source: "FDA / DailyMed Eraxis (Anidulafungin) Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Candidemia in Septic Shock with ESRD & Hepatic Failure",
      clinicalContext: "A 58-year-old in septic shock on CRRT with acute-on-chronic liver failure has blood cultures positive for yeast.",
      decision: "Initiate Anidulafungin 200 mg IV loading dose, then 100 mg IV daily.",
      rationale: "Anidulafungin undergoes organ-independent chemical degradation, with no dosage adjustment required for renal or hepatic impairment per prescribing information."
    },
    {
      title: "Candida Isolated in Endotracheal Tube Aspirate",
      clinicalContext: "Sputum culture from an intubated patient grows Candida albicans 3+.",
      decision: "DO NOT administer Anidulafungin or any antifungal.",
      rationale: "Candida in sputum represents airway colonization, not true Candida pneumonia. Antifungal therapy is non-indicated."
    }
  ],
  examTraps: [
    {
      misconception: "Anidulafungin requires dose reduction in severe hepatic cirrhosis or CRRT.",
      reality: "FALSE. Prescribing information specifies no dosage adjustment is required based on renal or hepatic impairment.",
      explanation: "Anidulafungin degrades spontaneously in plasma at body pH and temperature. Its clearance does not depend on enzymatic liver metabolism or renal excretion."
    },
    {
      misconception: "Guideline authorities universally agree that every asymptomatic candidemia patient must undergo immediate routine dilated eye examination.",
      reality: "GUIDELINE DIFFERENCE. IDSA 2016 guidelines recommend routine screening, whereas AAO retina consensus questions routine exams in asymptomatic non-neutropenic patients.",
      explanation: "While IDSA guidelines recommend routine dilated eye exams within 1 week of candidemia, ophthalmology consensus notes low yield (<1%) in asymptomatic non-neutropenic patients, favoring exam for visual symptoms or high risk."
    }
  ],
  searchAliases: ["anidulafungin", "eraxis", "echinocandin", "candidemia treatment"],
  relatedTopicIds: ["immunocompromised-oncologic-critical-illness", "sepsis", "mdr-organisms"]
};
