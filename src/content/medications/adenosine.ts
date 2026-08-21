import type { Medication } from "@/content-types/medication";

export const adenosine: Medication = {
  id: "adenosine",
  slug: "adenosine",
  name: "Adenosine",
  genericName: "Adenosine",
  brandNames: ["Adenocard", "Adenoscan"],
  class: "Endogenous Purine Nucleoside / AV Nodal Blocking Agent",
  category: "antiarrhythmics",
  subcategory: "Antiarrhythmics",
  summary:
    "Ultra-short-acting agent that transiently blocks AV nodal conduction to terminate AV-node-dependent reentrant SVT — its sub-10-second half-life makes the rapid-push-plus-immediate-flush administration technique as important as the dose itself.",
  mechanism: {
    title: "A1 Adenosine Receptor Agonism at the AV Node",
    steps: [
      "Binds A1 adenosine receptors on sinoatrial and atrioventricular nodal tissue.",
      "Activates Gi-protein-coupled potassium channels (IKAdo), hyperpolarizing nodal cell membranes.",
      "Produces a transient but profound slowing/block of AV nodal conduction, interrupting reentrant circuits that require the AV node as part of the loop (e.g., AVNRT, orthodromic AVRT).",
      "Effect terminates within seconds because circulating adenosine is almost immediately taken up by erythrocytes and vascular endothelium and deaminated by adenosine deaminase — it is not cleared by the liver or kidneys."
    ],
    visualDiagram: "Adenosine → A1 Receptor Activation → AV Nodal Conduction Transiently Blocked → AV-Node-Dependent Reentry Interrupted"
  },
  pkPd: {
    type: "receptor-occupancy",
    targetParameter: "Transient AV nodal block sufficient to interrupt a reentrant circuit or unmask the underlying atrial rhythm",
    halfLife: "Under 10 seconds — cleared almost instantly by cellular uptake (erythrocytes, vascular endothelium) and deamination by adenosine deaminase",
    proteinBinding: "Not clinically relevant",
    metabolism: "Rapid intracellular deamination; not hepatically metabolized",
    elimination: "Not meaningfully renally or hepatically eliminated — the drug's effect ends via cellular uptake/deamination, independent of organ clearance",
    vdNotes: "This near-instantaneous clearance is the entire rationale for the specific administration technique (rapid push via a proximal, large-bore IV, immediately followed by a rapid flush) — a technically correct dose given the wrong way will simply be cleared before reaching the heart in an effective concentration."
  },
  icuReasoning: {
    whyIChooseIt: [
      "First-line pharmacologic agent for terminating a hemodynamically stable, regular narrow-complex (AV-node-dependent) SVT.",
      "Diagnostic as well as therapeutic — even when it doesn't terminate the arrhythmia, the transient AV block can unmask the true underlying atrial rhythm (e.g., flutter waves, an atrial tachycardia focus) that was otherwise obscured by the rapid ventricular rate.",
      "Because the half-life is measured in seconds, most adverse effects — even uncomfortable ones — resolve almost as quickly as they appear."
    ],
    whyIDont: [
      "No mechanistic benefit — and potential harm — in an irregular or uncertain-mechanism wide-complex tachycardia, since adenosine only interrupts AV-node-dependent circuits.",
      "Can be dangerous in pre-excited atrial fibrillation (AF in a patient with WPW): AV nodal blockade can preferentially accelerate conduction down an accessory pathway, precipitating ventricular fibrillation.",
      "Produces transient but often intensely unpleasant symptoms (flushing, chest pressure, dyspnea, a sense of impending doom) — brief, but worth warning a cooperative patient about beforehand."
    ],
    bedsidePearl: "Technique is as important as dose. Give it as a rapid IV push (over 1–2 seconds) through the most proximal, largest-bore IV available, immediately followed by a brisk 20 mL saline flush — ideally with a stopcock/two-syringe setup so there's no delay between the drug and the flush. Given slowly through a small distal IV, a technically 'correct' dose will fail simply because the drug is cleared before it reaches the AV node in sufficient concentration."
  },
  dosing: {
    routine: "6 mg rapid IV push (over 1–2 seconds) via the most proximal/largest-bore IV available, immediately followed by a rapid 20 mL saline flush. If no conversion within 1–2 minutes, give 12 mg rapid IV push (may repeat once). Central line administration may warrant a lower initial dose given faster delivery to the heart — follow institutional protocol.",
    pediatricDoseNotes: "Weight-based, unlike the fixed adult dose: 0.1 mg/kg rapid IV push (maximum initial dose 6 mg); may increase to 0.2 mg/kg (maximum 12 mg) if the first dose does not terminate the arrhythmia.",
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No renal dose adjustment — adenosine is cleared by cellular uptake and deamination, not the kidneys." }
    ],
    hdDosing: "Not applicable — adenosine's effect terminates via cellular uptake and deamination within seconds, entirely independent of dialysis.",
    crrtDosing: "Not applicable for the same reason; dose exactly as usual regardless of CRRT."
  },
  organFailure: {
    renalConsiderations: "None — adenosine clearance is independent of renal function.",
    hepaticConsiderations: "None — adenosine is not hepatically metabolized."
  },
  toxicity: {
    majorWarnings: [
      "Transient but often intense flushing, chest pressure or burning, dyspnea, and a sense of impending doom are expected and self-limited within seconds — anticipate and briefly warn the patient beforehand if time allows.",
      "Several seconds of sinus pause, high-grade AV block, or asystole on the monitor is the intended mechanism, not a code event — but it can be alarming to bystanders and new staff without preparation.",
      "Can trigger bronchospasm in patients with reactive airway disease (asthma/COPD).",
      "Dangerous in irregular wide-complex tachycardia or pre-excited atrial fibrillation, where AV nodal blockade can accelerate conduction down an accessory pathway."
    ],
    organToxicities: [
      { organ: "Cardiovascular", description: "Transient sinus pause, high-grade AV block, or several seconds of asystole (expected mechanism of action); can rarely precipitate new atrial fibrillation." },
      { organ: "Pulmonary", description: "Bronchospasm, particularly in patients with underlying reactive airway disease." }
    ]
  },
  interactions: [
    {
      drug: "Dipyridamole",
      mechanism: "Inhibits cellular adenosine uptake, potentiating and prolonging its effect",
      consequence: "Markedly exaggerated or prolonged AV block from a standard dose",
      icuAction: "Substantially reduce the adenosine dose (commonly to roughly a quarter of usual) in patients on dipyridamole."
    },
    {
      drug: "Methylxanthines (theophylline, caffeine)",
      mechanism: "Competitive antagonism at the adenosine receptor",
      consequence: "Blunted or absent adenosine effect",
      icuAction: "Higher doses may be required; consider an alternative agent if the patient has recently received a significant methylxanthine load."
    },
    {
      drug: "Carbamazepine",
      mechanism: "Potentiates AV nodal blockade through a mechanism distinct from dipyridamole",
      consequence: "Increased risk of high-grade heart block",
      icuAction: "Use caution and consider dose reduction."
    }
  ],
  monitoring: {
    parameters: [
      "Continuous ECG/rhythm strip during and immediately after administration, to document the mechanism of termination (or the unmasked underlying rhythm)",
      "Blood pressure",
      "Respiratory status, particularly in patients with reactive airway disease"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["acls-guideline-aha-2020"],
    claimCitations: [
      {
        claim: "The 2020 AHA ACLS guidelines recommend adenosine as first-line pharmacologic therapy for stable, regular narrow-complex SVT.",
        source: "Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/33081529/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Regular Narrow-Complex SVT",
      clinicalContext: "Hemodynamically stable patient presents with a regular narrow-complex tachycardia at 180 bpm.",
      decision: "Give adenosine 6 mg rapid IV push via a proximal, large-bore IV, immediately followed by a rapid saline flush; escalate to 12 mg if there is no conversion.",
      rationale: "AV-node-dependent reentrant SVT — the most common cause of this presentation — is interrupted by transient AV nodal blockade."
    },
    {
      title: "Irregular Wide-Complex Tachycardia of Uncertain Origin",
      clinicalContext: "A patient presents with an irregular wide-complex tachycardia; pre-excited atrial fibrillation (WPW) cannot be excluded from the presentation.",
      decision: "Avoid adenosine. Treat as possible pre-excited AF or VT and involve cardiology urgently rather than giving an AV-nodal blocking agent.",
      rationale: "In pre-excited AF, AV nodal blockade can preferentially accelerate conduction down the accessory pathway, precipitating ventricular fibrillation."
    }
  ],
  examTraps: [
    {
      misconception: "Adenosine is safe to try in any regular-appearing wide-complex tachycardia just to 'see what happens.'",
      reality: "FALSE for an irregular or uncertain-mechanism wide-complex tachycardia — adenosine should be avoided whenever pre-excited atrial fibrillation cannot be excluded.",
      explanation: "AV nodal blockade in pre-excited AF can promote conduction down an accessory pathway and precipitate VF; adenosine's role is specific to regular narrow-complex (or select stable, regular, monomorphic wide-complex) tachycardia, not irregular wide-complex rhythms."
    },
    {
      misconception: "Slow, steady IV administration of adenosine is fine as long as the total dose given is correct.",
      reality: "FALSE. Administration technique is essential to efficacy given adenosine's sub-10-second half-life.",
      explanation: "Given too slowly, or without an immediate rapid flush, adenosine is cleared by cellular uptake before it reaches a therapeutic concentration at the AV node — the drug fails not because the dose was wrong, but because the technique was wrong."
    }
  ],
  searchAliases: ["adenosine", "adenocard", "svt adenosine", "av nodal blocker", "narrow complex tachycardia"],
  relatedTopicIds: ["arrhythmias"]
};
