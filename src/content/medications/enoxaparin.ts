import type { Medication } from "@/content-types/medication";

export const enoxaparin: Medication = {
  id: "enoxaparin",
  slug: "enoxaparin",
  name: "Enoxaparin",
  genericName: "Enoxaparin Sodium",
  brandNames: ["Lovenox"],
  class: "Low-Molecular-Weight Heparin (LMWH) — Predominantly Factor Xa Inhibitor",
  category: "anticoagulants",
  subcategory: "Anticoagulants",
  summary:
    "Depolymerized derivative of unfractionated heparin with predominantly anti-Xa activity — predictable, weight-based subcutaneous dosing without routine monitoring in most patients, but renally cleared and only partially reversible with protamine, unlike UFH.",
  mechanism: {
    title: "Antithrombin-Mediated, Predominantly Factor Xa Inhibition",
    steps: [
      "Produced by controlled enzymatic or chemical depolymerization of unfractionated heparin into shorter polysaccharide chains.",
      "Like UFH, binds antithrombin via the pentasaccharide sequence, accelerating antithrombin's inhibition of factor Xa.",
      "Most enoxaparin chains are too short to bridge antithrombin to thrombin (factor IIa), so anti-IIa activity is comparatively minor — yielding a predominantly anti-Xa profile (roughly 3–4:1 anti-Xa to anti-IIa activity, versus UFH's ~1:1).",
      "This more selective mechanism, combined with near-complete subcutaneous bioavailability and less non-specific plasma protein binding than UFH, produces a far more predictable, linear dose-response — which is why fixed weight-based dosing works without routine monitoring in most patients."
    ],
    visualDiagram: "LMWH + Antithrombin → Factor Xa Inhibition >>> Factor IIa Inhibition → Predictable Weight-Based Anticoagulant Effect"
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "Anti-Xa level — reserved for select populations (obesity, pregnancy, significant renal impairment, mechanical valve); typically 0.6–1.0 IU/mL for twice-daily therapeutic dosing",
    halfLife: "Approximately 4.5–7 hours after subcutaneous injection (roughly 2–4x longer than UFH), further prolonged in renal impairment",
    proteinBinding: "Substantially less non-specific plasma protein binding than UFH, a major contributor to its more predictable pharmacokinetics",
    metabolism: "Minimal hepatic metabolism",
    elimination: "Predominantly renal excretion — clearance falls significantly as CrCl declines, unlike UFH's non-renal clearance",
    vdNotes: "Subcutaneous bioavailability is essentially complete (~100%), in contrast to UFH's more variable subcutaneous absorption — this is a second major contributor to enoxaparin's predictable dosing."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Predictable, weight-based subcutaneous dosing without routine laboratory monitoring in most patients — simpler than a titrated UFH infusion for straightforward VTE treatment or prophylaxis.",
      "Lower incidence of heparin-induced thrombocytopenia than UFH.",
      "Once- or twice-daily subcutaneous dosing supports easier logistics for VTE prophylaxis, treatment, and eventual discharge planning."
    ],
    whyIDont: [
      "Predominantly renal clearance means significant accumulation risk in renal impairment, requiring dose reduction or a switch to an alternative agent.",
      "Only PARTIALLY reversible with protamine, unlike UFH's near-complete reversibility — a meaningful disadvantage if urgent reversal becomes necessary.",
      "The longer half-life and subcutaneous absorption profile make it less attractive than UFH whenever rapid on/off control may be needed — anticipated procedures, active or high bleeding risk, or hemodynamic instability."
    ],
    bedsidePearl: "Anti-Xa monitoring is NOT routine for enoxaparin — reserve it for obesity, pregnancy, significant renal impairment, or a mechanical heart valve. And never use an aPTT to confirm 'therapeutic' enoxaparin dosing: because the drug's activity is predominantly anti-Xa, the aPTT does not reliably track it the way it tracks UFH."
  },
  dosing: {
    routine: "VTE Treatment: 1 mg/kg SC every 12 hours (or 1.5 mg/kg SC once daily in select lower-risk patients), based on actual body weight. VTE Prophylaxis: 30 mg SC every 12 hours or 40 mg SC once daily, per institutional protocol and renal function.",
    syndromeSpecific: [
      {
        syndrome: "VTE Treatment (PE/DVT)",
        regimen: "1 mg/kg SC every 12 hours (or 1.5 mg/kg SC once daily in select patients), based on actual body weight.",
        reference: "2021 CHEST/ACCP Antithrombotic Therapy for VTE Disease Guideline"
      },
      {
        syndrome: "Acute Coronary Syndrome (per institutional ACS/PCI protocol)",
        regimen: "1 mg/kg SC every 12 hours; some STEMI protocols add an initial IV loading dose — verify the local ACS pathway.",
        note: "ACS dosing may include an IV component distinct from the SC-only VTE regimen — do not assume an identical administration route across indications."
      },
      {
        syndrome: "VTE Prophylaxis",
        regimen: "30 mg SC every 12 hours or 40 mg SC once daily, per institutional protocol and renal function."
      }
    ],
    renallyAdjusted: [
      { crclRange: "CrCl ≥ 30 mL/min", dose: "No dose adjustment for treatment or prophylaxis dosing." },
      { crclRange: "CrCl < 30 mL/min", dose: "Reduce treatment dosing to 1 mg/kg SC once daily (from twice daily); reduce prophylaxis dosing to 30 mg SC once daily, per FDA labeling. Consider anti-Xa-guided dosing or switching to UFH given accumulation risk." }
    ],
    hdDosing: "Not generally recommended as a primary anticoagulation strategy in dialysis-dependent renal failure given unpredictable accumulation — UFH is generally preferred. If enoxaparin is used, anti-Xa-guided dosing is advised rather than a fixed regimen.",
    crrtDosing: "Enoxaparin clearance on CRRT is not well characterized by a single universal regimen; individualized, anti-Xa-guided dosing (or preference for UFH) is generally recommended rather than a fixed CRRT dose."
  },
  organFailure: {
    renalConsiderations: "Significant renal impairment (CrCl < 30 mL/min) requires dose reduction given predominantly renal clearance; severe or dialysis-dependent renal failure generally favors UFH instead, given its more predictable non-renal clearance and full reversibility.",
    hepaticConsiderations: "No specific dose adjustment is defined for hepatic impairment alone, though concurrent coagulopathy from liver disease should prompt closer bleeding monitoring."
  },
  toxicity: {
    majorWarnings: [
      "Bleeding — accumulation risk is particularly pronounced in renal impairment given renal clearance.",
      "Heparin-Induced Thrombocytopenia — lower incidence than UFH, but not absent; LMWH cross-reacts with existing HIT antibodies and should NOT be substituted for UFH as a 'safe alternative' in a patient with active or suspected HIT.",
      "Spinal/epidural hematoma risk with neuraxial anesthesia or spinal puncture — timing relative to dosing is critical."
    ],
    organToxicities: [
      { organ: "Hematologic", description: "Bleeding, with accumulation risk in renal impairment; HIT (lower incidence than UFH but cross-reactive with existing HIT antibodies)." },
      { organ: "Neurologic (procedural)", description: "Spinal/epidural hematoma when a neuraxial procedure is performed at the wrong time relative to dosing, which can result in long-term or permanent paralysis." }
    ],
    blackBoxWarning: "Boxed warning for epidural or spinal hematoma risk in patients receiving neuraxial anesthesia or undergoing spinal puncture while on enoxaparin or other LMWH/heparinoids, which can result in long-term or permanent paralysis."
  },
  interactions: [
    {
      drug: "Antiplatelet agents and other anticoagulants",
      mechanism: "Additive antihemostatic effect",
      consequence: "Increased bleeding risk",
      icuAction: "Weigh the combined bleeding risk against the indication for combined therapy; monitor closely for bleeding."
    },
    {
      drug: "Neuraxial anesthesia / spinal procedures (timing interaction, not a pharmacologic one)",
      mechanism: "Residual anticoagulant effect present at the time of needle placement or catheter removal",
      consequence: "Spinal/epidural hematoma risk",
      icuAction: "Follow institutional or anesthesiology-society (e.g., ASRA) timing guidance for holding enoxaparin before and after neuraxial procedures rather than assuming a single universal hold time."
    }
  ],
  monitoring: {
    parameters: [
      "Anti-Xa level — reserved for obesity, pregnancy, significant renal impairment, or mechanical heart valve; NOT routine for standard-weight patients with normal renal function",
      "Platelet count at baseline and serially for HIT surveillance",
      "Hemoglobin/hematocrit and clinical signs of bleeding",
      "Serum creatinine/CrCl, since dosing is renally adjusted"
    ],
    tdmProtocol: {
      targetPeak: "0.6–1.0 IU/mL for twice-daily therapeutic dosing; roughly 1.0–2.0 IU/mL for once-daily therapeutic dosing",
      timing: "Draw 4 hours after a subcutaneous dose, at steady state (typically after the 3rd dose) — only in the specific populations where monitoring is indicated."
    }
  },
  evidenceTraceability: {
    guidelineIds: ["chest-accp-vte-guideline-2021"],
    claimCitations: [
      {
        claim: "The 2021 CHEST/ACCP guideline provides the current evidence-based framework for antithrombotic therapy in VTE disease, including LMWH dosing and monitoring.",
        source: "Stevens SM, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/34352278/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Standard-Weight Patient with Acute DVT, Normal Renal Function",
      clinicalContext: "A 70 kg patient with a confirmed proximal DVT has a CrCl of 90 mL/min and is a candidate for treatment without hospital admission.",
      decision: "Start enoxaparin 70 mg (1 mg/kg) SC every 12 hours without routine anti-Xa monitoring.",
      rationale: "Predictable weight-based dosing in a patient with normal renal function does not require routine monitoring, unlike a titrated UFH infusion."
    },
    {
      title: "Enoxaparin Candidate with CrCl 22 mL/min",
      clinicalContext: "A patient with an acute PE is being considered for enoxaparin but has a CrCl of 22 mL/min.",
      decision: "Either reduce to the renally-adjusted once-daily dose (1 mg/kg SC once daily) or preferentially switch to UFH given its more predictable non-renal clearance and full reversibility.",
      rationale: "Enoxaparin's predominantly renal clearance risks drug accumulation and bleeding in significant renal impairment; UFH is often preferred in this setting."
    }
  ],
  examTraps: [
    {
      misconception: "Protamine fully reverses enoxaparin the same way it reverses UFH.",
      reality: "FALSE. Protamine only PARTIALLY reverses enoxaparin's anticoagulant effect — roughly up to 60% of anti-Xa activity at best — because it binds and neutralizes the longer heparin chains more effectively than enoxaparin's shorter chains.",
      explanation: "This matters clinically: telling a bleeding patient or family that protamine will 'reverse' their enoxaparin the same way it reverses UFH overstates what reversal actually achieves."
    },
    {
      misconception: "An aPTT can be used to confirm therapeutic enoxaparin dosing.",
      reality: "FALSE. Enoxaparin's predominantly anti-Xa activity does not reliably prolong the aPTT.",
      explanation: "When monitoring is actually indicated (obesity, renal impairment, pregnancy, mechanical valve), an anti-Xa level — not an aPTT — is the correct test."
    }
  ],
  searchAliases: ["enoxaparin", "lovenox", "lmwh", "low molecular weight heparin"],
  relatedTopicIds: ["pulmonary-embolism", "acute-coronary-syndrome", "hit", "anticoagulation"]
};
