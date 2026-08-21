import type { Medication } from "@/content-types/medication";

export const succinylcholine: Medication = {
  id: "succinylcholine",
  slug: "succinylcholine",
  name: "Succinylcholine",
  genericName: "Succinylcholine Chloride",
  brandNames: ["Anectine", "Quelicin"],
  class: "Depolarizing Neuromuscular Blocking Agent",
  category: "neuromuscular-blockers",
  subcategory: "Depolarizing NMBAs",
  summary: "Ultra-rapid onset (30–60s) depolarizing neuromuscular blocker for emergency intubation — requires clear distinction between Product-Label Dosing (0.6 mg/kg IV) and Clinical RSI Dosing (1.0–1.5 mg/kg IV), and is strictly contraindicated in denervation, burns >24h, and hyperkalemia.",
  mechanism: {
    title: "Post-Junctional Nicotinic Acetylcholine Receptor Agonism",
    steps: [
      "Succinylcholine binds post-junctional nicotinic acetylcholine (nAChR) receptors at the neuromuscular junction.",
      "Induces prolonged sarcolemmal depolarization, causing transient muscle fasciculations.",
      "Remains bound because it is not degraded by acetylcholinesterase, leading to desensitization and flaccid paralysis (Phase I block).",
      "Spontaneous recovery occurs as succinylcholine diffuses away and is hydrolyzed by plasma pseudocholinesterase (butyrylcholinesterase)."
    ],
    visualDiagram: "Succinylcholine → nAChR Agonism → Persistent Depolarization → Fasciculations → Flaccid Paralysis"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Complete twitch suppression at neuromuscular junction",
    halfLife: "47 seconds (plasma pseudocholinesterase hydrolysis)",
    proteinBinding: "Minimal",
    metabolism: "Rapid hydrolysis by plasma pseudocholinesterase into succinylmonocholine and choline",
    elimination: "Renal excretion of metabolites (<10% unchanged drug in urine)",
    vdNotes: "0.4 L/kg (hydrophilic, rapid plasma distribution)"
  },
  icuReasoning: {
    whyIChooseIt: [
      "Ultra-rapid onset of paralysis (30–60 seconds) for emergency airway management.",
      "Shortest duration of flaccid paralysis (5–10 minutes), ideal when immediate return of spontaneous respiration is desirable.",
      "Proven efficacy in full-stomach rapid sequence intubation (RSI) when no hyperkalemic risk factors exist."
    ],
    whyIDont: [
      "Lethal hyperkalemic cardiac arrest risk in subacute denervation, major burns >24h, crush injury, or baseline hyperkalemia.",
      "Triggers Malignant Hyperthermia (MH) in genetically susceptible individuals.",
      "Triggers muscle fasciculations, increased intracranial pressure (ICP), intraocular pressure, and intragastric pressure."
    ],
    bedsidePearl: "Never give Succinylcholine to a patient immobilized in the ICU for >48–72 hours or recovering from stroke/burns — extrajunctional receptor proliferation causes catastrophic, refractory hyperkalemic cardiac arrest."
  },
  dosing: {
    routine: "Product Label Adult IV Intubation: 0.6 mg/kg IV (range 0.3–1.1 mg/kg IV). Clinical RSI Airway Strategy: 1.0–1.5 mg/kg IV (actual body weight).",
    adultIntubationDose: "PRODUCT LABEL: 0.6 mg/kg IV (range 0.3–1.1 mg/kg IV). COMMON RSI CLINICAL STRATEGY: 1.0–1.5 mg/kg IV based on actual body weight (standard 1.5 mg/kg IV ensures rapid vocal cord relaxation within 45s).",
    pediatricDoseNotes: "Pediatric IV Intubation: 1.5–2.0 mg/kg IV (infants/young children require higher dose due to larger Vd). Pre-treat with Atropine 0.02 mg/kg to prevent profound vagal bradycardia.",
    imDoseNotes: "Emergency IM Dosing (no IV access): 3.0–4.0 mg/kg IM (maximum total dose 150 mg). Onset 2–3 minutes, duration 10–30 minutes.",
    maintenanceInfusionNotes: "Maintenance / Repeated Administration: 0.04–0.07 mg/kg IV intermittently as needed, or continuous IV infusion of 0.5–10 mg/min (titrated to peripheral nerve twitch suppression; risk of Phase II dual block with cumulative doses >500 mg).",
    renallyAdjusted: [
      { crclRange: "Any CrCl without hyperkalemia", dose: "0.6 mg/kg IV label (or 1.0–1.5 mg/kg IV RSI strategy). No dose reduction for low CrCl alone." },
      { crclRange: "Hyperkalemia (K+ > 5.0 mEq/L) or Severe AKI with unknown K+", dose: "STRICTLY CONTRAINDICATED (Use Rocuronium 1.2 mg/kg IV)." }
    ],
    hdDosing: "No dose adjustment required for dialytic clearance, but CONTRAINDICATED if serum potassium is elevated or unknown.",
    crrtDosing: "No clearance adjustment required; monitor serum potassium continuously."
  },
  organFailure: {
    renalConsiderations: "Renal failure alone does not impair metabolism (plasma pseudocholinesterase clearing), but severe AKI/ESRD frequently causes hyperkalemia — making succinylcholine unsafe.",
    hepaticConsiderations: "Severe hepatic failure reduces plasma pseudocholinesterase synthesis, prolonging paralysis duration from 5–10 minutes up to 30–60 minutes."
  },
  toxicity: {
    majorWarnings: [
      "BOXED WARNING: Severe hyperkalemic cardiac arrest in pediatric patients with undiagnosed skeletal muscle myopathies (e.g. Duchenne muscular dystrophy).",
      "Lethal Hyperkalemia in extramuscular receptor upregulation (burns >24h, denervation, spinal cord injury, prolonged ICU immobility).",
      "Malignant Hyperthermia (MH) trigger (hypercapnia, muscle rigidity, hyperthermia, rhabdomyolysis)."
    ],
    organToxicities: [
      { organ: "Cardiovascular", description: "Hyperkalemic cardiac arrest, sinus bradycardia/asystole (especially after second dose), malignant arrhythmias." },
      { organ: "Musculoskeletal", description: "Generalized muscle fasciculations, severe post-intubation myalgias, rhabdomyolysis." },
      { organ: "Ocular & Neurologic", description: "Transient increase in intraocular pressure (3–8 mmHg) and intracranial pressure (ICP)." }
    ],
    blackBoxWarning: "Risk of cardiac arrest from hyperkalemic rhabdomyolysis in pediatric patients with unrecognised myopathy."
  },
  interactions: [
    {
      drug: "Inhaled Volatile Anesthetics (Isoflurane, Sevoflurane)",
      mechanism: "Synergistic rhabdomyolysis and intracellular calcium release",
      consequence: "Precipitates Malignant Hyperthermia",
      icuAction: "Immediately stop agent, administer IV Dantrolene 2.5 mg/kg, and hyperventilate with 100% O2."
    },
    {
      drug: "Cholinesterase Inhibitors (Neostigmine, Pyridostigmine)",
      mechanism: "Inhibition of plasma pseudocholinesterase",
      consequence: "Profoundly prolongs succinylcholine neuromuscular blockade",
      icuAction: "Do NOT attempt neostigmine reversal for succinylcholine Phase I block."
    }
  ],
  monitoring: {
    parameters: [
      "Serum Potassium prior to administration",
      "Continuous ECG monitoring for bradycardia, peaked T waves, or QRS widening",
      "End-tidal CO2 (etCO2) monitoring for early hypercapnia (MH sign)",
      "Peripheral nerve stimulator (Train-of-Four) for prolonged blockade"
    ]
  },
  stewardship: {
    deEscalationNotes: "Single-dose agent for intubation; no maintenance stewardship de-escalation applicable.",
    broadNotBetterPoint: "Succinylcholine provides NO sedation or analgesia. Always co-administer induction sedatives and analgesics."
  },
  evidenceTraceability: {
    guidelineIds: ["airway-rsi-guideline-asa"],
    claimCitations: [
      {
        claim: "Product Labeling specifies an average adult IV intubation dose of 0.6 mg/kg IV (range 0.3–1.1 mg/kg).",
        source: "FDA / DailyMed Succinylcholine Chloride Prescribing Information (2024).",
        citationUrl: "https://dailymed.nlm.nih.gov"
      },
      {
        claim: "Clinical emergency airway guidelines recommend 1.0–1.5 mg/kg IV (actual body weight) for rapid sequence intubation to ensure optimal vocal cord relaxation within 45–60s.",
        source: "Walls RM et al. Manual of Emergency Airway Management (5th ed); ASA Practice Guidelines.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov"
      },
      {
        claim: "Extrajunctional AChR proliferation causes catastrophic hyperkalemia >24-48 hours after denervation, burns, or prolonged immobility.",
        source: "Martyn JA, Richtsfeld M. Anesthesiology 2006;104(1):158-169.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/16380749/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "RSI in Acute Severe Asthma",
      clinicalContext: "A 32-year-old asthmatic requires intubation for impending respiratory arrest. Serum K+ is 4.2 mEq/L, no neuromuscular history.",
      decision: "Administer Ketamine 2 mg/kg IV + Succinylcholine 1.5 mg/kg IV (RSI clinical strategy).",
      rationale: "Provides ultra-rapid paralysis (45s) and full neuromuscular relaxation, facilitating rapid intubation without hyperkalemic risk."
    },
    {
      title: "Intubation in Subacute Burn Injury",
      clinicalContext: "A 45-year-old patient with 30% TBSA burns on day 10 develops acute VAP and respiratory shock requiring intubation.",
      decision: "STRICTLY AVOID Succinylcholine. Administer Rocuronium 1.2 mg/kg IV.",
      rationale: "Extrajunctional nAChR upregulation across denervated/burned muscle will trigger lethal hyperkalemic cardiac arrest if succinylcholine is given."
    }
  ],
  examTraps: [
    {
      misconception: "The FDA product label and emergency RSI practice use identical Succinylcholine dosing numbers.",
      reality: "FALSE. The FDA prescribing information states an average dose of 0.6 mg/kg IV (range 0.3–1.1 mg/kg), whereas RSI clinical practice recommends 1.0–1.5 mg/kg IV.",
      explanation: "RSI practice uses 1.0–1.5 mg/kg IV (actual body weight) to guarantee rapid vocal cord paralysis within 45 seconds during emergency airway management, whereas the official product label specifies 0.6 mg/kg IV for routine surgical intubation."
    }
  ],
  searchAliases: ["succinylcholine", "anectine", "quelicin", "suxamethonium", "depolarizing paralytic"],
  relatedTopicIds: ["airway-management-rsi", "neuromuscular-critical-illness", "hyperkalemia", "burns-critical-care"]
};
