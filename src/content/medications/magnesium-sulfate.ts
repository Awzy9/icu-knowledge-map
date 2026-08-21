import type { Medication } from "@/content-types/medication";

export const magnesiumSulfate: Medication = {
  id: "magnesium-sulfate",
  slug: "magnesium-sulfate",
  name: "Magnesium Sulfate",
  genericName: "Magnesium Sulfate",
  brandNames: [],
  class: "Electrolyte / Multi-Mechanism Membrane & Neuromuscular Modulator",
  category: "electrolytes-emergency",
  subcategory: "Electrolytes & Emergency Reversal",
  summary:
    "Spans four genuinely distinct ICU indications — torsades de pointes, adjunctive severe asthma therapy, eclampsia/severe preeclampsia, and simple hypomagnesemia repletion — each with its own mechanism-relevant dosing; no single dose or single mechanism explains all of its uses.",
  mechanism: {
    title: "Calcium-Channel Antagonism Across Cardiac, Pulmonary, and Neurologic Tissue",
    steps: [
      "Physiologic magnesium is a cofactor for the Na+/K+-ATPase pump and many ATP-dependent enzymes, and acts as a natural calcium-channel antagonist across multiple tissue types — this is why its clinical effects span cardiac, neuromuscular, pulmonary, and vascular smooth muscle systems rather than being explained by one single receptor mechanism.",
      "In torsades de pointes, magnesium suppresses early afterdepolarizations by inhibiting calcium influx during the action potential, terminating the arrhythmia independent of the measured serum magnesium level.",
      "In severe asthma, magnesium acts as an adjunctive bronchodilator via calcium-channel antagonism in bronchial smooth muscle and by stabilizing mast cells, reducing mediator release.",
      "In eclampsia/severe preeclampsia, magnesium's primary role is anticonvulsant — thought to act via NMDA-receptor antagonism and cerebral vasodilation that raises seizure threshold — rather than through a primary antihypertensive mechanism (its blood-pressure effect is modest and incidental).",
      "At toxic levels, the same calcium-antagonist properties that make magnesium therapeutic become dangerous, producing a predictable, dose-dependent sequence: loss of deep tendon reflexes, then respiratory depression, then cardiac conduction abnormalities."
    ],
    visualDiagram: "Mg2+ → Calcium Channel Antagonism (Multiple Tissues) → CARDIAC: EAD Suppression (Torsades) // PULMONARY: Bronchial Smooth Muscle Relaxation (Asthma) // NEUROLOGIC: NMDA Antagonism, Seizure Threshold ↑ (Eclampsia)"
  },
  pkPd: {
    type: "other",
    targetParameter: "Indication-specific — arrhythmia termination (torsades), improved response to bronchodilators (asthma), seizure prevention (eclampsia), or a normalized serum magnesium level (repletion)",
    halfLife: "Highly dependent on renal function — roughly a few hours with normal renal function, extending to days with significant renal impairment",
    proteinBinding: "~30%; the majority of circulating magnesium is unbound (ionized) and physiologically active",
    metabolism: "Not metabolized — magnesium is an elemental ion",
    elimination: "Almost entirely renal — the single most important pharmacokinetic fact about this drug, since it directly drives both dosing caution and toxicity risk in renal impairment",
    vdNotes: "Only a small fraction (roughly 1%) of total body magnesium is in the extracellular fluid actually measured by a serum level — the vast majority is intracellular or in bone, meaning a 'normal' serum level does not exclude significant total body depletion."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Rapid, effective, and often life-saving therapy for torsades de pointes, regardless of the measured serum magnesium level.",
      "Evidence-supported adjunctive bronchodilator in severe asthma exacerbation with an inadequate response to first-line therapy.",
      "Standard, guideline-based anticonvulsant (not primarily antihypertensive) therapy for eclampsia and severe preeclampsia with neurologic features.",
      "Straightforward repletion therapy for documented symptomatic hypomagnesemia, particularly given its common co-occurrence with refractory hypokalemia that will not correct until magnesium is also repleted."
    ],
    whyIDont: [
      "Renal impairment dramatically changes the risk-benefit calculus — accumulation risk rises sharply, so the same indication still applies but requires closer monitoring and dose reduction rather than a fixed regimen.",
      "Different indications require materially different doses — there is no single 'magnesium dose' that applies equally to torsades, asthma, eclampsia, and simple repletion.",
      "Toxicity progresses in a predictable, monitorable sequence — but that's only reassuring if someone is actually checking reflexes and respiratory status."
    ],
    bedsidePearl: "Check deep tendon reflexes as your earliest bedside toxicity marker — loss of reflexes precedes respiratory depression, which precedes dangerous cardiac conduction changes. And if toxicity does develop, IV calcium is the antidote: as a calcium-channel antagonist, magnesium's effects are directly opposed by calcium, similar in spirit to (but mechanistically distinct from) calcium's role in hyperkalemia."
  },
  dosing: {
    routine: "Dosing is strictly indication-specific — see Syndrome-Specific Regimens below. There is no single universal magnesium dose across its several distinct ICU indications.",
    syndromeSpecific: [
      {
        syndrome: "Torsades de Pointes",
        regimen: "1–2 g IV, given faster (e.g., over 5–20 minutes, or as a rapid push in cardiac arrest) if the patient is unstable/pulseless, or slower (over 15–60 minutes) if relatively stable with a pulse; follow with a continuous infusion (e.g., 0.5–1 g/hr) if recurrent.",
        note: "Give regardless of the measured serum magnesium level — torsades is a treat-the-rhythm, not treat-the-lab-value, indication."
      },
      {
        syndrome: "Severe Asthma Exacerbation (Adjunctive)",
        regimen: "2 g IV over 20 minutes as a single dose, added to standard bronchodilator/corticosteroid therapy in patients with an inadequate initial response.",
        reference: "GINA current strategy report",
        note: "This is typically a one-time adjunctive dose, not a repeated/titrated infusion — distinct from the torsades and eclampsia regimens."
      },
      {
        syndrome: "Eclampsia / Severe Preeclampsia with Neurologic Features",
        regimen: "4–6 g IV loading dose over 15–20 minutes, followed by a continuous infusion of 1–2 g/hr, continued per obstetric protocol (commonly at least 24 hours postpartum or post-seizure).",
        reference: "Per obstetric/ACOG-aligned protocols",
        note: "This obstetric-specific regimen should be managed in conjunction with obstetrics — dosing, duration, and monitoring intervals differ from the other indications above."
      },
      {
        syndrome: "Symptomatic Hypomagnesemia (Repletion)",
        regimen: "1–2 g IV over 1–2 hours for moderate deficiency, or up to 4–6 g IV over several hours for severe/symptomatic deficiency, titrated to serum magnesium and clinical response; oral repletion may suffice for mild, asymptomatic deficiency.",
        note: "Repletion dosing and rate are more flexible and less emergent than the torsades regimen — match the urgency of administration to clinical severity, not a single fixed protocol."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl ≥ 30 mL/min (normal-to-mild impairment)", dose: "Standard dosing as above, with routine monitoring." },
      { crclRange: "CrCl < 30 mL/min / significant renal impairment", dose: "Reduce the total dose (commonly by roughly half) and/or extend the infusion duration, with more frequent magnesium level and deep tendon reflex monitoring — no single universal reduced dose applies across all indications; individualize." }
    ],
    hdDosing: "Magnesium is dialyzable; dosing in dialysis-dependent patients should be individualized with nephrology input and more frequent monitoring, since both the underlying renal failure and the dialysis session itself affect levels.",
    crrtDosing: "CRRT provides ongoing magnesium clearance; repletion dosing should be individualized based on frequent magnesium level checks rather than a fixed protocol, since CRRT effluent composition and rate affect clearance."
  },
  organFailure: {
    renalConsiderations: "Renal impairment is the single most important modifier of magnesium dosing and safety — since elimination is almost entirely renal, accumulation and toxicity risk rise sharply as renal function declines. Reduce doses and monitor more closely (levels and deep tendon reflexes) rather than applying standard dosing.",
    hepaticConsiderations: "No specific hepatic dose adjustment — magnesium is not hepatically metabolized or cleared."
  },
  toxicity: {
    majorWarnings: [
      "Hypermagnesemia risk rises sharply in renal impairment — toxicity progresses in a predictable, dose-dependent sequence: loss of deep tendon reflexes first, then respiratory depression, then cardiac conduction abnormalities (PR/QRS/QT prolongation) and cardiac arrest at very high levels.",
      "Hypotension and bradycardia, particularly with rapid administration.",
      "Respiratory depression at higher toxic levels — a particular concern when combined with other CNS/respiratory depressants (opioids, benzodiazepines) or neuromuscular blockade.",
      "Loss of deep tendon reflexes is a reliable, easily checked early bedside warning sign that should prompt reassessment before more dangerous toxicity develops."
    ],
    organToxicities: [
      { organ: "Neuromuscular", description: "Progressive loss of deep tendon reflexes (an early, easily monitored warning sign), followed by generalized weakness at higher levels." },
      { organ: "Respiratory", description: "Respiratory depression and, at very high levels, respiratory arrest — occurs after the neuromuscular warning signs in the typical toxicity progression." },
      { organ: "Cardiovascular", description: "Hypotension, bradycardia, PR/QRS/QT prolongation, and, at very high levels, cardiac arrest (asystole)." }
    ]
  },
  interactions: [
    {
      drug: "Neuromuscular blocking agents",
      mechanism: "Additive neuromuscular blockade — magnesium itself has calcium-antagonist effects adjacent to the neuromuscular junction",
      consequence: "Prolonged or enhanced neuromuscular blockade",
      icuAction: "Use caution and consider reduced NMBA dosing or closer train-of-four monitoring with concurrent use."
    },
    {
      drug: "CNS/respiratory depressants (opioids, benzodiazepines)",
      mechanism: "Additive respiratory depression",
      consequence: "Increased risk of clinically significant respiratory depression",
      icuAction: "Monitor respiratory status more closely with concurrent use, especially at higher magnesium doses or infusion rates."
    },
    {
      drug: "Calcium-channel blockers",
      mechanism: "Additive calcium-channel-antagonist effect",
      consequence: "Increased risk of hypotension and cardiac conduction abnormalities",
      icuAction: "Monitor blood pressure and cardiac rhythm more closely with concurrent use."
    }
  ],
  monitoring: {
    parameters: [
      "Deep tendon reflexes (patellar) — a key, easily checked early bedside toxicity marker, particularly during eclampsia infusions",
      "Respiratory rate and effort",
      "Serum magnesium level, especially with renal impairment, higher doses, or continuous infusions",
      "Continuous ECG/telemetry, particularly for the torsades indication and at higher cumulative doses",
      "Blood pressure and heart rate",
      "Urine output, as a marker of ongoing renal clearance capacity during infusion, particularly in the eclampsia protocol"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["gina-guideline-current"],
    claimCitations: [
      {
        claim: "GINA recommends IV magnesium sulfate as an adjunctive therapy in severe asthma exacerbations with an inadequate response to initial bronchodilator therapy.",
        source: "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention.",
        citationUrl: "https://ginasthma.org"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Polymorphic VT with a Prolonged QT Interval",
      clinicalContext: "A patient develops polymorphic VT (torsades) with a baseline prolonged QTc, in the setting of a QT-prolonging medication.",
      decision: "Give magnesium sulfate 1–2 g IV regardless of the measured serum magnesium level, and address or discontinue the offending QT-prolonging agent.",
      rationale: "Magnesium suppresses the early afterdepolarizations driving torsades independent of the serum magnesium concentration — this is a treat-the-rhythm, not treat-the-lab-value, indication."
    },
    {
      title: "Magnesium Infusion in a Patient with CrCl 18 mL/min",
      clinicalContext: "A patient with severe renal impairment is receiving a magnesium sulfate infusion for eclampsia.",
      decision: "Reduce the infusion rate, check deep tendon reflexes more frequently, and check magnesium levels more often than the standard protocol interval.",
      rationale: "Since magnesium elimination is almost entirely renal, significant renal impairment sharply increases accumulation and toxicity risk, requiring closer bedside and laboratory monitoring rather than a fixed standard-protocol interval."
    }
  ],
  examTraps: [
    {
      misconception: "There is one universal magnesium sulfate dose used across all its ICU indications.",
      reality: "FALSE. Torsades, severe asthma, eclampsia, and simple repletion each use materially different doses, rates, and durations.",
      explanation: "Applying the eclampsia loading-dose-plus-infusion regimen to a simple repletion case (or vice versa) risks either under-treatment or unnecessary toxicity exposure."
    },
    {
      misconception: "A normal serum magnesium level rules out the need for magnesium in torsades.",
      reality: "FALSE. Magnesium is given empirically for torsades regardless of the measured level, since only a small fraction of total body magnesium is reflected in the serum value.",
      explanation: "Waiting for or requiring a low serum magnesium level before treating torsades delays a potentially life-saving, low-risk intervention for a rhythm that can degenerate into ventricular fibrillation."
    }
  ],
  searchAliases: ["magnesium sulfate", "mgso4", "torsades magnesium", "asthma magnesium", "eclampsia magnesium", "hypomagnesemia"],
  relatedTopicIds: ["arrhythmias", "asthma", "obstetric-critical-care"]
};
