import type { Medication } from "@/content-types/medication";

export const unfractionatedHeparin: Medication = {
  id: "unfractionated-heparin",
  slug: "unfractionated-heparin",
  name: "Unfractionated Heparin",
  genericName: "Heparin Sodium",
  brandNames: [],
  class: "Indirect Anticoagulant — Antithrombin-Dependent Factor IIa & Xa Inhibitor",
  category: "anticoagulants",
  subcategory: "Anticoagulants",
  summary:
    "Antithrombin-dependent anticoagulant with balanced factor IIa and Xa inhibition — immediate onset, short half-life, non-renal clearance, and full protamine reversibility make it the ICU workhorse anticoagulant for VTE, ACS, and procedural/circuit contexts, at the cost of frequent monitoring and a meaningful HIT risk.",
  mechanism: {
    title: "Antithrombin-Mediated Factor IIa & Xa Inhibition",
    steps: [
      "Binds antithrombin (AT) via a specific pentasaccharide sequence, inducing a conformational change that accelerates antithrombin's inhibition of thrombin (factor IIa) and factor Xa roughly 1000-fold.",
      "Full-length heparin chains are required to physically bridge antithrombin to thrombin for factor IIa inhibition, while shorter chains can still catalyze factor Xa inhibition without bridging — giving unfractionated heparin balanced (~1:1) anti-IIa and anti-Xa activity, unlike LMWH.",
      "The resulting inhibition of thrombin and factor Xa halts propagation of the coagulation cascade and new fibrin formation — it does not lyse existing clot.",
      "Onset is immediate with IV administration, and the anticoagulant effect resolves within a few hours of stopping the infusion given the drug's short half-life."
    ],
    visualDiagram: "UFH + Antithrombin → Factor IIa Inhibition + Factor Xa Inhibition → Thrombin Generation ↓ → Fibrin Formation ↓"
  },
  pkPd: {
    type: "concentration-dependent",
    targetParameter: "Institution-specific therapeutic aPTT range (commonly ~1.5–2.5x control, though exact ranges are reagent- and institution-dependent) or anti-Xa 0.3–0.7 IU/mL",
    halfLife: "Dose-dependent and nonlinear — approximately 30–90 minutes at usual therapeutic infusion rates, effectively longer at higher doses due to saturable clearance",
    proteinBinding: "High and variable, non-specific binding to plasma proteins, endothelial cells, and macrophages",
    metabolism: "Combination of rapid, saturable reticuloendothelial/hepatic uptake at lower concentrations and slower, first-order (renal-contributing) clearance at higher concentrations",
    elimination: "Predominantly non-renal (reticuloendothelial system) at therapeutic doses; the renal contribution to clearance increases at higher/supratherapeutic concentrations",
    vdNotes: "Largely confined to the intravascular compartment. The clinically important pharmacokinetic feature is not volume of distribution but the extensive, non-specific plasma-protein binding — this is what produces heparin's notoriously unpredictable dose-response and is the reason monitoring is mandatory rather than optional."
  },
  icuReasoning: {
    whyIChooseIt: [
      "Immediate onset with IV administration and a short, titratable half-life make it ideal whenever rapid on/off control is needed — peri-procedurally, in patients at high bleeding risk, or with mechanical circulatory/extracorporeal support.",
      "Predominantly non-renal clearance at therapeutic doses makes it preferred over LMWH in significant renal impairment or on CRRT.",
      "Fully and rapidly reversible with protamine when reversal is urgently needed."
    ],
    whyIDont: [
      "Requires frequent laboratory monitoring (aPTT or anti-Xa) and dose titration via a weight-based nomogram — a meaningfully higher nursing/pharmacy burden than LMWH.",
      "Carries a higher risk of heparin-induced thrombocytopenia (HIT) than LMWH with prolonged therapeutic exposure.",
      "The dose-response is genuinely unpredictable given extensive non-specific protein binding — two patients on an identical weight-based dose can land at very different levels."
    ],
    bedsidePearl: "aPTT and anti-Xa can genuinely disagree. If the aPTT looks supratherapeutic but the clinical picture doesn't fit — no bleeding, or discordant with a simultaneous anti-Xa — consider that acute-phase-reactant elevations in factor VIII or fibrinogen can falsely prolong the aPTT (or, less commonly, a lupus anticoagulant is present). This discordance is exactly why many institutions now prefer anti-Xa monitoring in critically ill patients."
  },
  dosing: {
    routine: "Dosing is strictly indication-specific — see Syndrome-Specific Regimens below. All regimens are weight-based, typically an initial bolus (where indicated) plus a continuous infusion titrated to an institutional aPTT or anti-Xa nomogram; do not apply one universal regimen across indications, since VTE, ACS, and procedural/circuit dosing intensities differ meaningfully.",
    syndromeSpecific: [
      {
        syndrome: "Venous Thromboembolism (Acute PE/DVT) — Full Therapeutic Anticoagulation",
        regimen: "Weight-based bolus (commonly on the order of 80 units/kg, institution-dependent) followed by a continuous infusion (commonly starting around 18 units/kg/hr), titrated per institutional nomogram to a therapeutic aPTT or anti-Xa 0.3–0.7 IU/mL.",
        reference: "2021 CHEST/ACCP Antithrombotic Therapy for VTE Disease Guideline",
        note: "Exact bolus and starting-rate numbers vary meaningfully by institutional nomogram — verify the local protocol rather than assuming one fixed number applies everywhere."
      },
      {
        syndrome: "Acute Coronary Syndrome (ACS)",
        regimen: "A lower-intensity weight-based bolus and infusion than full VTE dosing, following the institutional ACS/PCI protocol, generally targeting a lower aPTT range or a different anti-Xa target than full-intensity VTE therapy.",
        note: "ACS heparin dosing is intentionally lower-intensity than VTE dosing — do not substitute the VTE nomogram for an ACS patient."
      },
      {
        syndrome: "Mechanical Heart Valve / Bridging Anticoagulation",
        regimen: "Full therapeutic weight-based dosing per institutional protocol, individualized to valve type/position and bleeding risk in conjunction with cardiology.",
        note: "Bridging strategy and target intensity should be individualized with cardiology/anticoagulation specialists rather than following one fixed universal regimen."
      },
      {
        syndrome: "Procedural / Extracorporeal Circuit Anticoagulation (e.g., ECMO, cardiac catheterization, CRRT circuit anticoagulation)",
        regimen: "Protocol- and context-specific bolus/infusion dosing guided by activated clotting time (ACT) or a circuit-specific target, distinct from systemic VTE/ACS dosing.",
        note: "These indications are monitored with ACT (not aPTT) and use different targets entirely — do not apply systemic VTE dosing logic to a procedural or circuit-anticoagulation context."
      }
    ],
    renallyAdjusted: [
      { crclRange: "Any CrCl", dose: "No formal renal dose reduction required at therapeutic doses given predominantly non-renal (reticuloendothelial) clearance — UFH is often specifically preferred over LMWH for this reason in significant renal impairment." }
    ],
    hdDosing: "Not removed by intermittent hemodialysis; systemic therapeutic dosing requires no supplemental adjustment for HD itself (distinct from any separate procedural anticoagulation protocol used during the HD session).",
    crrtDosing: "Systemic therapeutic UFH dosing is not altered specifically because a patient is on CRRT. If UFH is instead being used as CRRT circuit anticoagulation (rather than systemic therapy), that is a separate, much lower-intensity, circuit-specific protocol targeting a different endpoint — the two should not be conflated."
  },
  organFailure: {
    renalConsiderations: "Preferred over LMWH in severe renal impairment or on CRRT given predominantly non-renal clearance; still requires the same monitoring, since critical illness itself (not just renal function) affects the aPTT/anti-Xa response.",
    hepaticConsiderations: "Use with caution in significant hepatic synthetic dysfunction. Baseline coagulopathy (low antithrombin, prolonged baseline PT/aPTT) can make both dosing and monitoring less reliable, and reduced antithrombin levels can themselves blunt heparin's mechanism of action."
  },
  toxicity: {
    majorWarnings: [
      "Bleeding is the primary dose-limiting toxicity — risk rises with supratherapeutic levels, concurrent antiplatelet/anticoagulant therapy, recent procedures, and renal or hepatic dysfunction.",
      "Heparin-Induced Thrombocytopenia (HIT) is an immune-mediated, paradoxically PROthrombotic syndrome, not simply a low platelet count (see below).",
      "Can suppress aldosterone synthesis, causing hyperkalemia, particularly with higher doses or prolonged therapy.",
      "Osteoporosis with prolonged (weeks-to-months) therapy — not typically relevant to a short ICU course but worth flagging for patients continuing therapy after discharge."
    ],
    organToxicities: [
      {
        organ: "Hematologic",
        description: "Bleeding at any site. Heparin-Induced Thrombocytopenia: heparin-PF4 immune complexes activate platelets, causing a platelet fall (classically days 5–10 of exposure, or within hours with recent prior exposure) alongside a PARADOXICAL increase in arterial and venous thrombosis risk — assess with a 4Ts score, stop all heparin exposure (including line flushes and heparin-coated catheters) when intermediate/high probability, and start a non-heparin anticoagulant while confirmatory testing (e.g., PF4 antibody assay, serotonin release assay) is pending."
      },
      {
        organ: "Endocrine/Metabolic",
        description: "Suppressed aldosterone synthesis can cause hyperkalemia, particularly with higher doses or prolonged therapy."
      }
    ]
  },
  interactions: [
    {
      drug: "Antiplatelet agents (aspirin, P2Y12 inhibitors) and other anticoagulants",
      mechanism: "Additive antihemostatic effect",
      consequence: "Increased bleeding risk",
      icuAction: "Weigh the combined bleeding risk against the indication for combined therapy (e.g., ACS); monitor closely for bleeding when these are intentionally combined."
    },
    {
      drug: "High-dose/prolonged IV nitroglycerin infusion",
      mechanism: "Reported to increase heparin clearance and/or alter its protein binding",
      consequence: "Reduced anticoagulant effect at a given heparin dose",
      icuAction: "Monitor aPTT/anti-Xa closely when starting or stopping a high-dose nitroglycerin infusion in a heparinized patient; the heparin rate may need adjustment."
    }
  ],
  monitoring: {
    parameters: [
      "aPTT or anti-Xa per institutional protocol/nomogram, checked serially until therapeutic and then per protocol",
      "Platelet count at baseline and serially — trended over days for HIT surveillance, not just a single value",
      "Hemoglobin/hematocrit and clinical signs of bleeding",
      "Serum potassium with prolonged therapy"
    ]
  },
  evidenceTraceability: {
    guidelineIds: ["chest-accp-vte-guideline-2021", "ash-hit-guideline-2018"],
    claimCitations: [
      {
        claim: "The 2021 CHEST/ACCP guideline provides the current evidence-based framework for antithrombotic therapy in VTE disease, including unfractionated heparin's role.",
        source: "Stevens SM, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/34352278/"
      },
      {
        claim: "The ASH 2018 guideline provides the current evidence-based approach to diagnosing and managing heparin-induced thrombocytopenia, including immediate heparin cessation and non-heparin alternative anticoagulation.",
        source: "Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.",
        citationUrl: "https://pubmed.ncbi.nlm.nih.gov/30482768/"
      }
    ]
  },
  patientScenarios: [
    {
      title: "Acute Submassive Pulmonary Embolism",
      clinicalContext: "A patient with confirmed PE and RV strain is hemodynamically stable but being considered for possible escalation to catheter-directed therapy.",
      decision: "Initiate a weight-based UFH bolus and infusion per the institutional VTE nomogram, titrated to a therapeutic aPTT or anti-Xa.",
      rationale: "UFH's rapid onset, short half-life, and full reversibility make it preferable to LMWH whenever escalation to thrombolysis or catheter-directed therapy remains a realistic possibility."
    },
    {
      title: "Platelet Count Falls 55% on Hospital Day 6 of Therapeutic Heparin",
      clinicalContext: "A patient on a therapeutic UFH infusion for 6 days has a platelet count that has fallen from 220,000 to 95,000/uL with no other obvious explanation.",
      decision: "Calculate a 4Ts score; if intermediate/high probability, stop all heparin exposure immediately (including line flushes) and start a non-heparin anticoagulant while confirmatory testing is pending.",
      rationale: "The timing (day 5–10) and magnitude of the platelet fall are classic for HIT; heparin must be stopped before laboratory confirmation returns, given the syndrome's prothrombotic risk."
    }
  ],
  examTraps: [
    {
      misconception: "HIT is simply 'low platelets from heparin' and is mainly a bleeding concern.",
      reality: "FALSE. HIT is an immune-mediated, paradoxically prothrombotic syndrome — the danger is thrombosis, not bleeding.",
      explanation: "Heparin-PF4 immune complexes activate platelets, driving arterial and venous thrombosis. Treating HIT like a bleeding risk — e.g., withholding all anticoagulation rather than switching to a non-heparin anticoagulant — leaves the patient prothrombotic."
    },
    {
      misconception: "Protamine fully reverses heparin's anticoagulant effect no matter when it's given during the infusion.",
      reality: "Protamine should be dosed to the estimated heparin remaining in the circulation (accounting for UFH's short half-life), not to the total cumulative dose given — over-dosing protamine can itself cause anticoagulant/antiplatelet effects and hypotension.",
      explanation: "Because UFH's half-life is short, a protamine dose calculated from the total infusion given hours earlier — rather than the estimated residual heparin — can substantially overshoot what's actually needed for reversal."
    }
  ],
  searchAliases: ["heparin", "ufh", "unfractionated heparin", "heparin drip", "hit heparin", "protamine reversal"],
  relatedTopicIds: ["pulmonary-embolism", "acute-coronary-syndrome", "hit", "anticoagulation", "bleeding"]
};
