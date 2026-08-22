import type { Medication } from "@/content-types/medication";

export const dexamethasone: Medication = {
  id: "dexamethasone",
  slug: "dexamethasone",
  name: "Dexamethasone",
  genericName: "Dexamethasone Sodium Phosphate",
  brandNames: ["Decadron", "Dexasone", "Diodex"],
  class: "Long-Acting Synthetic Fluorinated Glucocorticoid (High Anti-Inflammatory Potency) with Negligible Mineralocorticoid Activity",
  category: "corticosteroids",
  subcategory: "Corticosteroids",
  summary: "Ultra-potent long-acting glucocorticoid with negligible mineralocorticoid activity and superior blood-brain barrier penetration — standard of care for acute bacterial meningitis (given before/with initial antibiotics), vasogenic brain tumor edema, post-extubation airway edema prevention, and early severe ARDS (DEXA-ARDS trial).",
  mechanism: {
    title: "High-Affinity Glucocorticoid Receptor Transrepression & BBB Stabilization",
    steps: [
      "Fluorinated synthetic steroid with high glucocorticoid receptor (GR) selectivity and potent anti-inflammatory action (approximate glucocorticoid equivalence: 0.75 mg dexamethasone ≈ 20 mg hydrocortisone).",
      "Rapidly crosses the blood-brain barrier due to lipophilicity and stabilizes endothelial tight junctions, dramatically attenuating vasogenic cerebral edema.",
      "In bacterial meningitis, blunts the massive burst of subarachnoid space cytokine release (TNF-α, IL-1β) triggered by antibiotic-induced bacterial cell wall lysis.",
      "Downregulates angiopoietin-2 and VEGF in tumor-associated cerebral endothelium, reducing blood-brain barrier permeability.",
      "Negligible mineralocorticoid receptor activity (~0 relative to hydrocortisone), causing minimal direct mineralocorticoid-mediated renal sodium retention or potassium excretion compared to hydrocortisone."
    ],
    visualDiagram: "High-Potency GR Activation → BBB Tight Junction Repair (Vasogenic Edema ↓) + Subarachnoid Cytokine Lysis Blockade"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Intracranial pressure reduction, neurological injury prevention, PaO2/FiO2 improvement",
    halfLife: "Plasma t1/2: 3–5 hours (Biological tissue effect: 36–54 hours)",
    proteinBinding: "68% (binds mostly to albumin; low affinity for corticosteroid-binding globulin / transcortin)",
    metabolism: "Hepatic CYP3A4-mediated 6-hydroxylation to inactive polar metabolites",
    elimination: "Renal excretion of conjugated metabolites (<10% unchanged)",
    vdNotes: "Vd ~0.7–1.0 L/kg; high lipophilicity provides good blood-brain barrier and CSF penetration."
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line adjunctive corticosteroid when indicated for adult acute bacterial meningitis (10 mg or 0.15 mg/kg IV q6h × 4 days): administered prior to or concurrently with the first dose of antimicrobial therapy to blunt antibiotic-induced subarachnoid inflammatory cascades and reduce hearing loss / neurological sequelae; continuation is re-evaluated based on microbiological results.",
      "Drug of choice for peritumoral vasogenic cerebral edema and acute spinal cord compression due to superior BBB penetration and rapid edema reduction.",
      "Prophylaxis against post-extubation laryngeal edema / stridor in high-risk patients with a negative cuff leak test (20 mg IV starting 12–24h prior to planned extubation).",
      "Proven mortality reduction in early severe ARDS (DEXA-ARDS trial: 20 mg/day IV × 5 days, then 10 mg/day × 5 days increased ventilator-free days and reduced 60-day mortality).",
      "Negligible mineralocorticoid activity makes it optimal when sodium retention or volume expansion must be avoided (e.g., neuro-ICU patients)."
    ],
    whyIDont: [
      "Do NOT use for acute Traumatic Brain Injury (TBI) — large randomized evidence (CRASH trial: 10,008 patients) demonstrated corticosteroids increase 2-week and 6-month mortality in acute head trauma.",
      "Ineffective as sole monotherapy for acute primary adrenal crisis because it provides negligible mineralocorticoid / aldosterone replacement.",
      "Prolonged biological duration (36–54 hours) produces sustained, difficult-to-control hyperglycemia lasting well over 24 hours per dose.",
      "Severe prolonged HPA axis suppression after extended courses due to high receptor affinity; structured taper indicated after extended therapy."
    ],
    bedsidePearl: "Timing is critical in bacterial meningitis: When indicated, dexamethasone should be started before or concurrently with the initial antimicrobial dose to blunt the bactericidal inflammatory burst. Corticosteroids should not be used in acute traumatic brain injury (CRASH trial demonstrated increased mortality)!"
  },
  dosing: {
    routine: "Bacterial Meningitis: 10 mg (or 0.15 mg/kg) IV q6h × 4 days. Vasogenic Cerebral Edema: 4–10 mg IV q6h. Post-Extubation Stridor: 20 mg IV 12h and 4h prior to extubation. ARDS (DEXA-ARDS): 20 mg IV daily × 5 days, then 10 mg daily × 5 days.",
    syndromeSpecific: [
      {
        syndrome: "Acute Bacterial Meningitis (Adults)",
        regimen: "10 mg IV q6h (or 0.15 mg/kg IV q6h) for 4 days total. Give first dose 10–20 minutes prior to or simultaneously with first antibiotic dose.",
        reference: "IDSA / ESCMID Bacterial Meningitis Guidelines; de Gans & van de Beek Trial",
        note: "If Streptococcus pneumoniae is confirmed on CSF Gram stain/culture, complete the full 4-day course. If other organisms or non-bacterial etiology are identified, dexamethasone may be discontinued."
      },
      {
        syndrome: "Peritumoral Vasogenic Brain Edema / Herniation Risk",
        regimen: "Loading dose 10 mg IV stat, then 4–8 mg IV q6h. Wean to lowest effective maintenance dose over 1–2 weeks.",
        reference: "EANO / Neuro-Oncology Clinical Practice Guidelines",
        note: "Indicated specifically for vasogenic edema (disrupted BBB around tumors or metastases). NOT indicated for cytotoxic edema from ischemic stroke or TBI."
      },
      {
        syndrome: "Post-Extubation Stridor Prophylaxis (Failed Cuff Leak Test)",
        regimen: "20 mg IV single dose 12–24h prior to extubation, OR 20 mg IV 12h and 4h prior to extubation (or 4 mg IV q4h × 4 doses).",
        reference: "Francois et al. Lancet 2007; Cheng et al. Ann Intern Med",
        note: "Indicated only in patients identified as high risk for laryngeal edema (e.g., negative cuff leak test, prolonged intubation >6 days, traumatic intubation, female gender)."
      },
      {
        syndrome: "Early Moderate-to-Severe ARDS (DEXA-ARDS Protocol)",
        regimen: "20 mg IV once daily on days 1 to 5, then 10 mg IV once daily on days 6 to 10.",
        reference: "Villar J et al. DEXA-ARDS Trial. Lancet Respir Med 2020;8:267-276",
        note: "Specific trial criteria: PaO2/FiO2 ≤ 200 with PEEP ≥ 10 cmH2O and FiO2 ≥ 0.5 measured 24h after ARDS onset."
      }
    ],
    renallyAdjusted: [
      {
        crclRange: "Any CrCl / AKI / ESRD",
        dose: "No dosage adjustment required."
      }
    ],
    hdDosing: "No supplemental dose required post-hemodialysis.",
    crrtDosing: "No dosage adjustment required for CRRT."
  },
  organFailure: {
    renalConsiderations: "Negligible mineralocorticoid activity; does not significantly promote renal sodium retention or potassium wasting compared to hydrocortisone.",
    hepaticConsiderations: "Hepatic CYP3A4 clearance is reduced in severe hepatic dysfunction; prolonged biological tissue effect can exacerbate extended glycemic excursions."
  },
  toxicity: {
    majorWarnings: [
      "Acute Traumatic Brain Injury (TBI): Corticosteroids should not be used to treat acute head trauma because randomized evidence (CRASH trial: RR 1.18 for death at 2 weeks, p=0.0001) demonstrated increased mortality.",
      "Profound, prolonged hyperglycemia: because tissue half-life is 36–54 hours, a single dose produces hyperglycemia lasting >24–48 hours.",
      "Steroid-induced psychosis and agitation: high CNS penetration increases incidence of acute mania, hallucinations, and sleep disruption.",
      "Suppression of febrile response: blunts fever spikes, masking occult bacterial or fungal sepsis."
    ],
    organToxicities: [
      {
        organ: "Central Nervous System",
        description: "Increased mortality in TBI (CRASH trial), steroid psychosis, delirium, severe insomnia, euphoria followed by depression."
      },
      {
        organ: "Endocrine & Metabolic",
        description: "Persistent hyperglycemia, severe hyperosmolarity, prolonged HPA axis suppression."
      },
      {
        organ: "Gastrointestinal",
        description: "Stress ulceration, upper gastrointestinal hemorrhage, bowel perforation in high-risk abdominal surgical patients."
      },
      {
        organ: "Immunological",
        description: "Suppression of cell-mediated immunity, reactivation of latent tuberculosis, Pneumocystis jirovecii pneumonia (PJP) with courses >3–4 weeks."
      }
    ]
  },
  interactions: [
    {
      drug: "CYP3A4 Inducers (Phenytoin, Carbamazepine, Rifampin)",
      mechanism: "Marked acceleration of dexamethasone hepatic metabolism via CYP3A4 induction",
      consequence: "Substantially decreased dexamethasone serum concentrations, risking diminished anti-inflammatory efficacy in critical indications",
      icuAction: "Strong CYP3A4 inducers accelerate dexamethasone clearance and may reduce clinical efficacy; assess therapeutic response and consult indication-specific guidelines rather than applying empiric dose doubling."
    },
    {
      drug: "NSAIDs (Ketorolac, Ibuprofen, Aspirin)",
      mechanism: "Synergistic inhibition of gastric mucosal protective prostaglandins",
      consequence: "High risk of severe peptic ulceration and life-threatening gastrointestinal hemorrhage",
      icuAction: "Avoid concurrent systemic NSAIDs; provide PPI (pantoprazole 40 mg IV daily) stress ulcer prophylaxis."
    }
  ],
  monitoring: {
    parameters: [
      "Blood glucose every 4–6 hours (anticipate prolonged glycemic excursions due to 36–54h biological half-life)",
      "Intracranial pressure (ICP) and cerebral perfusion pressure (CPP) in neuro-ICU patients",
      "Neurological status (GCS, pupil reactivity, focal signs)",
      "Cuff leak test volume / airway patency prior to planned extubation",
      "Surveillance for secondary hospital-acquired infections (VAP, CAUTI, bacteremia)"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["meningitis-guideline-idsa-2004"],
    trialIds: ["ards-dexa-ards-trial", "tbi-crash-trial"],
    claimCitations: [
      {
        claim: "IDSA and European guidelines recommend early adjunctive dexamethasone (10 mg IV q6h × 4 days) before or with first antibiotic in acute adult bacterial meningitis.",
        source: "Tunkel AR, et al. Practice Guidelines for the Management of Bacterial Meningitis. Clin Infect Dis 2004;39:1267-1284."
      },
      {
        claim: "The CRASH trial (10,008 patients) proved corticosteroids increase 2-week and 6-month mortality in traumatic brain injury — corticosteroids should not be used to treat acute TBI.",
        source: "CRASH Trial Collaborators. Effect of intravenous corticosteroids on death within 14 days in 10008 adults with clinically significant head injury. Lancet 2004;364:1321-1328."
      },
      {
        claim: "Dexamethasone provides potent anti-inflammatory activity with approximate glucocorticoid equivalence of 0.75 mg dexamethasone ≈ 20 mg hydrocortisone and negligible mineralocorticoid effect.",
        source: "Villar J, et al. Dexamethasone treatment for the acute respiratory distress syndrome (DEXA-ARDS). Lancet Respir Med 2020;8:267-276."
      }
    ]
  },
  patientScenarios: [
    {
      title: "Acute Bacterial Meningitis on Presentation",
      clinicalContext: "A 48-year-old brought to the ICU with high fever (39.5°C), severe headache, altered mental status (GCS 11), nuchal rigidity, and petechial rash. Lumbar puncture is ordered immediately.",
      decision: "Administer dexamethasone 10 mg IV concurrently with ceftriaxone 2 g IV, vancomycin 25 mg/kg IV, and ampicillin 2 g IV.",
      rationale: "When indicated for acute bacterial meningitis, adjunctive dexamethasone should be administered before or concurrently with the first antibiotic dose to suppress the inflammatory cytokine surge from bactericidal lysis."
    },
    {
      title: "Severe Traumatic Brain Injury with Brain Swelling",
      clinicalContext: "A 22-year-old involved in a high-speed motor vehicle collision has severe TBI, GCS 6, multiple hemorrhagic contusions, and ICP 28 mmHg on monitor. A junior clinician suggests starting dexamethasone for brain edema.",
      decision: "Refuse dexamethasone; initiate 3% hypertonic saline bolus, head-of-bed elevation 30°, maintain PaCO2 35–38 mmHg, and target CPP >60 mmHg.",
      rationale: "Corticosteroids should not be used in acute TBI. The landmark CRASH trial proved steroids increase mortality in head trauma. Osmotherapy and targeted hemodynamics are the standard of care."
    }
  ],
  examTraps: [
    {
      misconception: "Dexamethasone is beneficial for all types of cerebral edema, including head trauma, acute ischemic stroke, and tumors.",
      reality: "Dexamethasone is indicated for vasogenic edema (brain tumors, metastases). Corticosteroids should NOT be used for acute traumatic brain injury (CRASH trial proved harm) and are ineffective for cytotoxic edema from ischemic stroke.",
      explanation: "Vasogenic edema is mediated by broken blood-brain barrier tight junctions responsive to steroids; cytotoxic edema is intracellular cellular swelling driven by energy failure, which steroids cannot reverse."
    },
    {
      misconception: "Adjunctive dexamethasone must be continued for 4 days in every patient with suspected meningitis regardless of culture results.",
      reality: "Adjunctive dexamethasone is started empirically with initial antibiotics but continuation is reassessed once CSF microbiology is available (strongest benefit established in Streptococcus pneumoniae).",
      explanation: "If CSF cultures confirm an organism where adjunctive steroid benefit is not established (or a non-bacterial cause), discontinuation of dexamethasone avoids unnecessary steroid exposure."
    }
  ],
  searchAliases: [
    "dexamethasone",
    "decadron",
    "meningitis steroid",
    "vasogenic edema steroid",
    "cuff leak steroid",
    "dexa-ards"
  ],
  relatedTopicIds: [
    "meningitis-encephalitis",
    "intracranial-hypertension",
    "severe-tbi",
    "ards",
    "mechanical-ventilation"
  ]
};
