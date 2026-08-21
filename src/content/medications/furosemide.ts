import type { Medication } from "@/content-types/medication";

export const furosemide: Medication = {
  id: "furosemide",
  slug: "furosemide",
  name: "Furosemide",
  genericName: "Furosemide",
  brandNames: ["Lasix"],
  class: "Loop Diuretic — NKCC2 Inhibitor",
  category: "diuretics",
  subcategory: "Diuretics",
  summary:
    "The most potent diuretic class in clinical use and the first-line agent for acute decongestion in ADHF, pulmonary edema, and volume overload — must reach the tubular lumen via active secretion to work, which is the mechanistic root of 'diuretic resistance' independent of dose.",
  mechanism: {
    title: "Thick Ascending Limb NKCC2 Blockade",
    steps: [
      "Reaches its site of action by active tubular secretion (via organic anion transporters) in the proximal tubule, since furosemide is highly protein-bound and not effectively filtered at the glomerulus — this secretion step is impaired in renal impairment, contributing to diuretic resistance independent of dose.",
      "Once in the tubular lumen, blocks the Na+/K+/2Cl- (NKCC2) cotransporter on the luminal membrane of the thick ascending limb of the loop of Henle.",
      "This abolishes the lumen-positive transepithelial voltage that normally drives paracellular reabsorption of Ca2+ and Mg2+, and disrupts the medullary concentration gradient — producing potent natriuresis, diuresis, and loss of Ca2+, Mg2+, and K+.",
      "Because roughly two-thirds of the thick ascending limb's sodium reabsorption capacity is blocked, furosemide is the most potent diuretic class available — but the distal nephron adapts over days of continued use (see diuretic resistance)."
    ],
    visualDiagram: "Furosemide → Tubular Secretion (Proximal Tubule) → Thick Ascending Limb NKCC2 Blockade → Na+/K+/Cl- Reabsorption ↓ → Natriuresis + Diuresis"
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "Adequate urine output / net negative fluid balance for the clinical volume target — commonly assessed via spot urine sodium roughly 2 hours after a dose",
    halfLife: "~1.5–2 hours in normal renal function, prolonged significantly in renal impairment",
    proteinBinding: "~95% (albumin) — this high binding is why the drug must be actively secreted into the tubule rather than relying on glomerular filtration, and why hypoalbuminemia can alter free-drug pharmacokinetics",
    metabolism: "Partial hepatic glucuronidation",
    elimination: "Primarily renal — both filtration of the small unbound fraction and, more importantly, active tubular secretion; hepatic glucuronidation accounts for the remainder",
    vdNotes: "Oral bioavailability is variable and often substantially lower and less predictable than IV — reported to range widely depending on gut wall perfusion/edema, which is why a patient's home oral dose does not translate 1:1 to an IV dose."
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line, most potent diuretic class for acute decongestion in ADHF, pulmonary edema, and volume overload.",
      "IV administration bypasses the unpredictable, often reduced GI absorption seen in decompensated heart failure with bowel wall edema.",
      "Rapid onset (minutes with IV administration) supports acute symptom relief in pulmonary edema."
    ],
    whyIDont: [
      "Must reach its site of action via active tubular secretion — a step impaired both by reduced renal function and by competing retained organic anions — contributing to true diuretic resistance independent of the dose given.",
      "Causes significant electrolyte losses (K+, Mg2+, Ca2+) and metabolic alkalosis with repeated dosing.",
      "Can cause ototoxicity with rapid high-dose IV administration, particularly in renal impairment or with concurrent aminoglycosides."
    ],
    bedsidePearl: "Reassess before you re-dose. Check a spot urine sodium roughly 2 hours after a dose to judge whether the response was adequate, rather than reflexively escalating the dose on a fixed schedule — and remember that a home oral dose is NOT a 1:1 conversion to IV, since oral bioavailability is often meaningfully lower, especially in decompensated heart failure."
  },
  dosing: {
    routine: "For loop-diuretic-naïve patients: 40 mg IV bolus initially. For patients on a home oral loop diuretic: an initial IV dose approximating the total daily oral home dose (or higher per protocol), given as bolus dosing or a low-dose continuous infusion. Reassess urine output/spot urine sodium roughly 2 hours after each dose or rate change and escalate based on that response rather than dosing empirically.",
    syndromeSpecific: [
      {
        syndrome: "Acute Decompensated Heart Failure / Pulmonary Edema — Loop-Diuretic-Naïve",
        regimen: "40 mg IV bolus initially; reassess urine output and spot urine sodium at 2 hours and escalate (e.g., double the dose) if the response is inadequate.",
        reference: "DOSE trial-informed approach"
      },
      {
        syndrome: "Acute Decompensated Heart Failure — Chronic Loop-Diuretic User",
        regimen: "Initial IV dose on the order of 1–2.5x the total daily oral home dose, given as bolus dosing or continuous infusion per institutional protocol.",
        reference: "Felker GM, et al. DOSE Trial, N Engl J Med 2011",
        note: "The DOSE trial found no significant difference between bolus and continuous-infusion strategies, or between higher- and lower-intensity dosing, on its co-primary endpoints — do not assume continuous infusion is inherently superior to intermittent bolus dosing."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl ≥ 30 mL/min", dose: "Standard dosing as above; effect may still be somewhat blunted in acutely decompensated states independent of CrCl." },
      { crclRange: "CrCl < 30 mL/min / advanced CKD", dose: "Higher doses are often required to achieve an adequate intratubular concentration given reduced tubular secretion — dose escalation, not necessarily more frequent dosing, is the usual strategy; individualize with nephrology input for advanced CKD." }
    ],
    hdDosing: "Diuretic therapy is generally not relevant once a patient is anuric and fully dialysis-dependent, though furosemide may still be used in select dialysis patients to preserve residual native urine output per nephrology guidance — individualize.",
    crrtDosing: "Not typically indicated as a primary decongestive strategy once CRRT is providing ultrafiltration, though it may be continued in some cases to preserve residual native urine output — individualize with the care team rather than applying a fixed regimen."
  },
  organFailure: {
    renalConsiderations: "Higher doses are typically required as renal function declines, since furosemide must be actively secreted into the tubular lumen — a step impaired by reduced GFR and by competition from retained organic anions — to reach its site of action. This is a distinct, pharmacokinetic mechanism of diuretic resistance from the distal-nephron-adaptation mechanism seen with chronic use.",
    hepaticConsiderations: "Use with caution in decompensated cirrhosis with ascites — aggressive diuresis can precipitate hepatorenal physiology, hyponatremia, and hepatic encephalopathy. A more gradual approach, often combined with an aldosterone antagonist, is generally preferred in that specific context rather than the acute-ADHF dosing approach described here."
  },
  toxicity: {
    majorWarnings: [
      "Electrolyte depletion — hypokalemia, hypomagnesemia, and hypochloremic metabolic alkalosis with repeated or high-dose use.",
      "Ototoxicity — tinnitus and hearing loss, usually reversible, with risk increased by rapid high-dose IV administration, renal impairment, and concurrent ototoxic drugs (e.g., aminoglycosides).",
      "Hypotension and pre-renal azotemia with over-diuresis.",
      "Sulfonamide-related hypersensitivity potential (furosemide is a sulfonamide derivative), though true cross-reactivity with antimicrobial sulfonamides is now considered lower-risk than classically taught."
    ],
    organToxicities: [
      { organ: "Renal/Electrolyte", description: "Hypokalemia, hypomagnesemia, hypocalcemia (from impaired paracellular Ca2+ reabsorption), hypochloremic metabolic alkalosis, and pre-renal azotemia with over-diuresis." },
      { organ: "Otologic", description: "Tinnitus and hearing loss, usually reversible, with rapid high-dose IV administration." },
      { organ: "Cardiovascular", description: "Hypotension with aggressive diuresis, particularly in relatively volume-depleted or preload-dependent patients." }
    ]
  },
  interactions: [
    {
      drug: "Aminoglycosides",
      mechanism: "Additive ototoxicity",
      consequence: "Increased risk of hearing loss",
      icuAction: "Use the lowest effective doses of both agents when concurrent use is necessary, and monitor for auditory symptoms."
    },
    {
      drug: "Digoxin",
      mechanism: "Furosemide-induced hypokalemia increases myocardial sensitivity to digoxin",
      consequence: "Increased risk of digoxin toxicity/arrhythmia",
      icuAction: "Monitor potassium closely and replete proactively in patients on concurrent digoxin."
    },
    {
      drug: "NSAIDs",
      mechanism: "Inhibit renal prostaglandin synthesis, blunting furosemide's natriuretic effect and renal blood flow",
      consequence: "Reduced diuretic efficacy and increased AKI risk",
      icuAction: "Avoid NSAIDs where possible in patients dependent on loop diuretic therapy for decongestion."
    }
  ],
  monitoring: {
    parameters: [
      "Urine output and net fluid balance",
      "Serum electrolytes (K+, Mg2+, Na+, Cl-) and renal function, at least daily during active diuresis",
      "Spot urine sodium roughly 2 hours post-dose to assess adequacy of natriuretic response",
      "Blood pressure and orthostatic symptoms",
      "Auditory symptoms with high-dose or rapid IV administration"
    ]
  },
  evidenceTraceability: {
    claimCitations: [
      {
        claim: "The DOSE trial found no significant difference in the co-primary endpoints between bolus and continuous infusion, or between higher- and lower-intensity furosemide dosing strategies, in acute decompensated heart failure.",
        source: "Felker GM, et al. Diuretic Strategies in Patients with Acute Decompensated Heart Failure. N Engl J Med. 2011;364(9):797-805.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/21366472/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Acute Pulmonary Edema, Loop-Diuretic-Naïve",
      clinicalContext: "A patient presents with acute pulmonary edema and volume overload with no home diuretic use.",
      decision: "Give furosemide 40 mg IV bolus; reassess urine output and spot urine sodium at 2 hours.",
      rationale: "A standard starting IV dose in a diuretic-naïve patient, with reassessment — rather than reflexive re-dosing — guiding the next step."
    },
    {
      title: "Diuretic-Resistant Volume Overload on Chronic Home Furosemide",
      clinicalContext: "A patient on chronic home furosemide 80 mg PO daily is admitted with volume overload and an inadequate response to an equivalent IV dose.",
      decision: "Escalate the IV dose (rather than simply increasing frequency without reassessment), and consider sequential nephron blockade — adding a thiazide-type agent or acetazolamide — if resistance persists.",
      rationale: "Chronic loop diuretic exposure drives distal nephron adaptation (increased distal Na+ reabsorption capacity), which is a mechanistic reason to add a second agent acting at a different nephron site rather than only escalating the loop diuretic dose indefinitely."
    }
  ],
  examTraps: [
    {
      misconception: "An oral home furosemide dose converts 1:1 to an equivalent IV dose.",
      reality: "FALSE. Oral furosemide bioavailability is variable and often substantially less than complete, especially in decompensated heart failure with gut wall edema — a given IV dose delivers more drug to the site of action.",
      explanation: "Assuming a 1:1 oral-to-IV conversion risks under-dosing a patient switched to IV therapy during decompensation."
    },
    {
      misconception: "Furosemide resistance always means the patient simply needs a higher dose.",
      reality: "Not necessarily — diuretic resistance has multiple distinct mechanisms (impaired tubular secretion in renal impairment, distal nephron adaptation with chronic use, inadequate renal perfusion/cardiac output), and the correct next step depends on which mechanism is actually driving it.",
      explanation: "Reflexively escalating the dose without considering whether the real issue is secretion, adaptation, or perfusion can miss more effective interventions like sequential nephron blockade or addressing the underlying hemodynamics."
    }
  ],
  searchAliases: ["furosemide", "lasix", "loop diuretic", "diuretic resistance"],
  relatedTopicIds: ["acute-heart-failure", "cardiogenic-pulmonary-edema", "aki"]
};
