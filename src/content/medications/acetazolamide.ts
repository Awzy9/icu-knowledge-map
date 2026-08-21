import type { Medication } from "@/content-types/medication";

export const acetazolamide: Medication = {
  id: "acetazolamide",
  slug: "acetazolamide",
  name: "Acetazolamide",
  genericName: "Acetazolamide",
  brandNames: ["Diamox"],
  class: "Carbonic Anhydrase Inhibitor",
  category: "diuretics",
  subcategory: "Diuretics",
  summary:
    "Proximal-tubule diuretic that inhibits carbonic anhydrase, producing bicarbonaturia and mild natriuresis — an ADVOR-trial-supported adjunct to loop diuretics for resistant decongestion, and useful for its opposite-direction acid-base effect (metabolic acidosis) when a loop diuretic has driven contraction alkalosis.",
  mechanism: {
    title: "Proximal Tubule Carbonic Anhydrase Inhibition",
    steps: [
      "Inhibits carbonic anhydrase in the proximal tubule (and elsewhere, including red blood cells, CNS, and the eye), preventing the conversion of CO2 and H2O to carbonic acid and its dissociation into H+ and HCO3-.",
      "This reduces the H+ available to the Na+/H+ exchanger (NHE3) that normally drives proximal sodium-bicarbonate reabsorption, causing bicarbonaturia and a mild natriuresis/diuresis.",
      "Because bicarbonate — rather than chloride — is lost in the urine, acetazolamide produces a non-anion-gap metabolic acidosis over time, the opposite acid-base direction of loop diuretics — which is exactly why it can correct loop-diuretic-induced metabolic alkalosis.",
      "Delivering more sodium and bicarbonate to more distal nephron segments (where loop diuretics act) also produces a synergistic diuretic effect when combined with a loop diuretic — the mechanistic basis for its ADVOR-trial-supported role in resistant decongestion."
    ],
    visualDiagram: "Acetazolamide → Carbonic Anhydrase Inhibition (Proximal Tubule) → Bicarbonate Reabsorption ↓ → Bicarbonaturia → Serum HCO3- ↓ + Natriuresis"
  },
  pkPd: {
    type: "other",
    targetParameter: "Correction of metabolic alkalosis and/or adjunctive natriuretic effect — not a single fixed serum-level target",
    halfLife: "Approximately 2.4–5.8 hours; renally eliminated, so prolonged in renal impairment",
    proteinBinding: "~90–95%",
    metabolism: "Not metabolized",
    elimination: "Renal excretion of unchanged drug (filtration plus tubular secretion)",
    vdNotes: "Concentrates within red blood cells (where it binds carbonic anhydrase) in addition to plasma, which affects its overall distribution and duration of pharmacologic effect."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Adjunct in diuretic-resistant congestion when added to an existing loop diuretic, supported by the ADVOR trial's finding of increased successful decongestion, given its complementary proximal-tubule mechanism.",
      "Directly corrects loop-diuretic-associated metabolic alkalosis via bicarbonate wasting, which can otherwise blunt respiratory drive and worsen hypoventilation in some ventilated patients.",
      "A reasonable option in select ventilated patients where a primary metabolic alkalosis is contributing to difficulty weaning."
    ],
    whyIDont: [
      "Not a first-line or standalone decongestive agent — the ADVOR trial studied it strictly as an add-on to a loop diuretic, not a substitute.",
      "Can worsen or cause a non-anion-gap metabolic acidosis with overuse.",
      "Carries sulfonamide-related hypersensitivity potential given its chemical structure, and requires caution in significant hepatic disease."
    ],
    bedsidePearl: "Know exactly what ADVOR did and didn't test. The trial studied acetazolamide as an ADD-ON to an existing loop diuretic, specifically in acutely decompensated heart failure with clinical signs of volume overload, with a composite 'successful decongestion' outcome — not mortality, and not standalone use. Extrapolating beyond that specific population and outcome overstates the evidence."
  },
  dosing: {
    routine: "500 mg IV once daily, typically added to an existing loop diuretic regimen (per the ADVOR trial protocol) for diuretic-resistant congestion. Oral dosing (250–375 mg once or twice daily) is used for other indications such as correcting chronic metabolic alkalosis; exact regimens are indication-dependent.",
    syndromeSpecific: [
      {
        syndrome: "Adjunct to Loop Diuretic for Diuretic-Resistant ADHF Congestion",
        regimen: "500 mg IV once daily, added to the existing loop diuretic regimen.",
        reference: "ADVOR trial (Mullens W, et al., N Engl J Med 2022) — studied specifically in acutely decompensated heart failure with clinical volume overload, on a background loop diuretic.",
        note: "This is the specific population and regimen the trial evidence supports — do not extrapolate the ADVOR result to unrelated indications or populations without qualification."
      },
      {
        syndrome: "Correction of Metabolic Alkalosis (e.g., in a ventilated patient with alkalosis contributing to hypoventilation)",
        regimen: "250–375 mg IV or PO once or twice daily, titrated to acid-base response; institutional protocols vary.",
        note: "Used here specifically for its acid-base effect, distinct from its decongestive role."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl < 10 mL/min or significant renal impairment", dose: "Generally avoided or used with significant caution — reduced renal clearance prolongs drug effect and reduces efficacy (the drug must reach the tubular lumen to act), and the risk of significant metabolic acidosis rises." }
    ],
    hdDosing: "Not typically used in dialysis-dependent renal failure given both reduced efficacy (requires tubular delivery) and accumulation risk; individualize with nephrology if considered.",
    crrtDosing: "Not well characterized on CRRT; individualize rather than apply a fixed regimen, given the drug's requirement for tubular delivery to exert its effect."
  },
  organFailure: {
    renalConsiderations: "Efficacy declines and toxicity risk (accumulation, worsening acidosis) rises as renal function declines, since the drug must reach the tubular lumen and is renally eliminated — use with caution and reduced expectations of efficacy in significant renal impairment.",
    hepaticConsiderations: "Use with caution in significant hepatic impairment or cirrhosis — carbonic anhydrase inhibition can theoretically impair renal ammonia handling, and there are case reports of precipitating or worsening hepatic encephalopathy; monitor mental status closely if used in this population."
  },
  toxicity: {
    majorWarnings: [
      "Non-anion-gap metabolic acidosis with overuse or prolonged therapy.",
      "Hypokalemia, additive to any concurrent loop diuretic effect.",
      "Sulfonamide-related hypersensitivity potential given chemical structure.",
      "Caution in hepatic impairment given case reports associating it with precipitating hepatic encephalopathy."
    ],
    organToxicities: [
      { organ: "Acid-Base/Electrolyte", description: "Non-anion-gap metabolic acidosis; hypokalemia, additive with loop diuretics." },
      { organ: "Hepatic/Neurologic", description: "Case reports of precipitating or worsening hepatic encephalopathy in patients with significant liver disease, plausibly related to effects on renal ammonia handling." }
    ]
  },
  interactions: [
    {
      drug: "Loop diuretics",
      mechanism: "Complementary, synergistic nephron-site natriuretic effect (proximal tubule + thick ascending limb blockade)",
      consequence: "Enhanced decongestion, but also additive hypokalemia risk",
      icuAction: "This combination is often intentional (per ADVOR); monitor potassium closely given the additive kaliuretic effect of both agents."
    },
    {
      drug: "Other renally-cleared drugs with a narrow therapeutic index",
      mechanism: "Acetazolamide alkalinizes the urine, which can alter the renal clearance of certain concurrent drugs",
      consequence: "Altered drug levels for select concurrent medications",
      icuAction: "Be aware of urinary pH-dependent clearance changes for relevant concurrent medications."
    }
  ],
  monitoring: {
    parameters: [
      "Serum bicarbonate and chloride (acid-base trend)",
      "Serum potassium",
      "Renal function",
      "Urine output/decongestion response when used in combination with a loop diuretic",
      "Mental status in patients with significant hepatic disease"
    ]
  },
  evidenceTraceability: {
    claimCitations: [
      {
        claim: "In acute decompensated heart failure with volume overload, adding acetazolamide to a loop diuretic significantly increased the proportion of patients achieving successful decongestion.",
        source: "Mullens W, et al. Acetazolamide in Acute Decompensated Heart Failure with Volume Overload. N Engl J Med. 2022;387(13):1185-1195.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/36027559/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Diuretic-Resistant Congestion Despite High-Dose Loop Diuretic",
      clinicalContext: "A patient with ADHF has persistent volume overload despite an appropriately escalated loop diuretic infusion.",
      decision: "Add acetazolamide 500 mg IV once daily to the existing loop diuretic regimen.",
      rationale: "ADVOR-trial-supported combination that increases successful decongestion by adding complementary proximal-tubule natriuresis and blunting the compensatory bicarbonate/sodium reabsorption that partially offsets loop diuretic monotherapy."
    },
    {
      title: "Ventilated Patient with Contraction Alkalosis Impairing Weaning",
      clinicalContext: "A ventilated patient has a significant metabolic alkalosis from diuretic use, with a compensatory elevated PaCO2 complicating ventilator weaning.",
      decision: "Add acetazolamide to correct the metabolic alkalosis, alongside standard weaning approaches.",
      rationale: "Acetazolamide directly corrects the alkalosis via bicarbonaturia, addressing a specific, reversible contributor to hypoventilation and weaning difficulty."
    }
  ],
  examTraps: [
    {
      misconception: "The ADVOR trial supports acetazolamide as a first-line, standalone diuretic in heart failure.",
      reality: "FALSE. ADVOR studied acetazolamide strictly as an ADD-ON to an existing loop diuretic, in a specific population (ADHF with clinical volume overload), with a specific composite decongestion outcome.",
      explanation: "Extrapolating the trial's positive finding to standalone use, different populations, or different outcomes (e.g., mortality, which was not the primary endpoint) overstates what the evidence actually supports."
    },
    {
      misconception: "Acetazolamide and furosemide have the same effect on acid-base status.",
      reality: "FALSE — they push acid-base status in OPPOSITE directions.",
      explanation: "Furosemide tends to cause metabolic alkalosis (chloride/potassium loss); acetazolamide causes bicarbonaturia and metabolic acidosis. This opposing effect is exactly why combining them can be roughly acid-base-neutral while still achieving additive natriuresis."
    }
  ],
  searchAliases: ["acetazolamide", "diamox", "carbonic anhydrase inhibitor", "advor trial"],
  relatedTopicIds: ["acute-heart-failure", "metabolic-acidosis", "acid-base-disorders"]
};
