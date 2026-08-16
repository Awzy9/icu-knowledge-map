import type { Topic } from "@/content-types";

export const hit: Topic = {
  id: "hit",
  slug: "hit",
  title: "Heparin-Induced Thrombocytopenia (HIT)",
  category: "hematology",
  oneLiner: "PF4-heparin antibody Fc-gamma-RIIa platelet activation, the 4Ts score, ELISA OD values vs Serotonin Release Assay (SRA), and direct thrombin inhibitor protocols.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Heparin-Induced Thrombocytopenia, Platelet Disorders in the ICU, and Antithrombotic Management",
    },
    {
      title: "American Society of Hematology 2018 Guidelines for Management of VTE: Heparin-Induced Thrombocytopenia",
      edition: "Blood Adv 2018;2(22):3360-3392",
    },
  ],
  currentStatus: "Current as of the 2018 ASH HIT Guidelines, the CHEST 2021 antithrombotic recommendations, and modern optical density (OD) diagnostic thresholds.",
  otherReferences: [
    "Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.",
    "Warkentin TE, et al. Laboratory testing for heparin-induced thrombocytopenia: a primer. Pharmacotherapy. 2014;34(6):630-642.",
    "Greinacher A. Heparin-Induced Thrombocytopenia. N Engl J Med. 2015;373(3):252-261.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "anticoagulation", label: "Heparin exposure and immediate transition to direct thrombin inhibitors" },
    { type: "differential", targetId: "dic", label: "Isolated immune platelet consumption vs global factor depletion" },
    { type: "differential", targetId: "bleeding", label: "Paradoxical prothrombotic state despite low platelet count" },
    { type: "related-to", targetId: "transfusion", label: "Platelet transfusion contraindication in acute HIT" },
  ],
  sections: [
    {
      id: "hit.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hit-guideline-ash-2018",
          relevance: "ASH 2018 guidelines for management of heparin-induced thrombocytopenia and non-heparin anticoagulation"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Heparin-Induced Thrombocytopenia (HIT Type 2) is a life-threatening, immune-mediated prothrombotic emergency where anti-PF4/heparin antibodies cause massive platelet activation, thrombin explosion, and multi-vessel thrombosis.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Heparin-Induced Thrombocytopenia (HIT) is an immune complication occurring in 0.5–5% of patients exposed to Unfractionated Heparin (UFH) and < 0.5% exposed to Low-Molecular-Weight Heparin (LMWH). Unlike other drug-induced thrombocytopenias, HIT does NOT typically cause bleeding; instead, it triggers a catastrophic, hypercoagulable state with a 30- to 50-fold increased risk of venous and arterial thrombosis.",
        },
        {
          type: "paragraph",
          text: "The clinical imperative in the ICU is: (1) Rapid risk estimation via the 4Ts Score; (2) Immediate cessation of all heparin sources (including flushes and catheter locks); (3) Prompt initiation of a non-heparin parenteral anticoagulant (Argatroban, Bivalirudin, or Fondaparinux); and (4) Two-step laboratory confirmation with PF4-ELISA optical density and the gold-standard Serotonin Release Assay (SRA).",
        },
      ],
    },
    {
      id: "hit.physiology",
      kind: "physiology",
      title: "Pathophysiology: PF4-Heparin Complexes & Fc-gamma-RIIa Platelet Activation",
      summary: "Type 1 (benign non-immune) vs Type 2 (immune), IgG-PF4-heparin multimers, platelet microparticle release, and the thrombin explosion.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Understanding the distinction between Type 1 and Type 2 HIT and the molecular mechanisms of immune platelet activation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. HIT Type 1 (Non-Immune Heparin-Associated Thrombocytopenia)",
              value: "A benign, direct non-immune interaction between heparin and platelets. Onset: Days 1–2 of heparin therapy. Platelet nadir is rarely < 100,000/uL. Zero thrombosis risk. Resolves spontaneously without stopping heparin.",
            },
            {
              label: "2. HIT Type 2 (Immune-Mediated Pathologic HIT)",
              value: "Platelet Factor 4 (PF4) is a positively charged chemokine stored in platelet alpha-granules. Negatively charged heparin binds PF4, forming multimolecular PF4-heparin ultra-large complexes that expose a conformational neo-epitope, stimulating the synthesis of pathogenic IgG antibodies.",
            },
            {
              label: "3. The Fc-gamma-RIIa Receptor Cascade & Thrombin Explosion",
              value: "The Fc tails of the anti-PF4/heparin IgG antibodies bind directly to Fc-gamma-RIIa receptors on platelet membranes. This crosslinking triggers massive, explosive platelet activation, granular release of more PF4 (creating a vicious positive feedback loop), procoagulant platelet microparticle shedding, and intense Tissue Factor upregulation on monocytes, driving an uncontrollable systemic thrombin surge.",
            },
            {
              label: "4. Thrombosis Predominance",
              value: "Platelet count falls (consumed in widespread microvascular and macrovascular thrombi and cleared by splenic macrophages), but the dominant clinical threat is Thrombosis (HITT: Heparin-Induced Thrombocytopenia and Thrombosis occurs in 30–50% of untreated patients within 30 days).",
            },
          ],
        },
      ],
    },
    {
      id: "hit.4ts-score",
      kind: "diagnosis",
      title: "Clinical Risk Stratification: The 4Ts Pretest Probability Score",
      summary: "Systematic calculation across Thrombocytopenia, Timing, Thrombosis, and oTher causes (Low 0–3, Intermediate 4–5, High 6–8).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The 2018 ASH guidelines strongly recommend calculating the 4Ts Score prior to ordering laboratory assays:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Thrombocytopenia Magnitude",
              value: "• 2 Points: Platelet fall > 50% AND nadir ≥ 20,000/uL.\n• 1 Point: Platelet fall 30–50% OR nadir 10,000–19,000/uL.\n• 0 Points: Platelet fall < 30% OR nadir < 10,000/uL.",
            },
            {
              label: "2. Timing of Platelet Count Fall",
              value: "• 2 Points: Clear onset between Days 5–10 of heparin; OR ≤ 1 day if exposed to heparin within the past 30 days (pre-formed circulating antibodies).\n• 1 Point: Consistent with Days 5–10 fall, but missing baseline counts; OR onset after Day 10; OR fall ≤ 1 day with heparin exposure in prior 31–100 days.\n• 0 Points: Platelet fall < 4 days of heparin without recent exposure.",
            },
            {
              label: "3. Thrombosis or Other Sequelae",
              value: "• 2 Points: Proven new thrombosis (DVT, PE, arterial occlusion); skin necrosis at heparin injection sites; OR acute systemic anaphylactoid reaction following IV heparin bolus.\n• 1 Point: Progressive or recurrent thrombosis; erythematous skin lesions at injection sites; OR suspected but unproven thrombosis.\n• 0 Points: None.",
            },
            {
              label: "4. oTher Causes of Thrombocytopenia",
              value: "• 2 Points: No other explanation evident.\n• 1 Point: Possible alternative explanation present (e.g. sepsis, post-op dilution, medications).\n• 0 Points: Definite alternative cause present (e.g. severe septic shock, DIC, massive hemorrhage/transfusion).",
            },
            {
              label: "Score Interpretation & Action Pathway",
              value: "• Low Probability (0–3 points): Negative Predictive Value > 99%. DO NOT stop heparin; DO NOT order PF4-ELISA. Investigate alternative ICU causes.\n• Intermediate Probability (4–5 points): Stop all heparin immediately. Send PF4-ELISA. Start non-heparin anticoagulant (prophylactic or therapeutic dose based on bleeding risk).\n• High Probability (6–8 points): Stop all heparin immediately. Start therapeutic-dose non-heparin anticoagulant. Send PF4-ELISA and order confirmatory SRA.",
            },
          ],
        },
      ],
    },
    {
      id: "hit.laboratory",
      kind: "diagnosis",
      title: "Laboratory Testing: Immunoassays (ELISA OD) vs Functional Assays (SRA)",
      summary: "Interpreting PF4 Optical Density (OD < 0.40 vs > 1.00–2.00) and the gold-standard 14C-Serotonin Release Assay.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Laboratory diagnosis requires a two-step testing approach combining a rapid antigen-binding immunoassay with a confirmatory platelet activation functional assay:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Polyspecific / IgG-Specific Anti-PF4/Heparin ELISA",
              value: "• High Sensitivity (> 98%), lower specificity (detects non-pathogenic non-activating antibodies, especially post-cardiopulmonary bypass).\n• Optical Density (OD) Quantification:\n  - OD < 0.40: Negative (rules out HIT).\n  - OD 0.40–0.99: Weakly positive / Low clinical significance (only ~10% are true functional HIT).\n  - OD 1.00–1.99: Moderately positive (~50% true functional HIT).\n  - OD ≥ 2.00: Strongly positive (> 90% true functional HIT).",
            },
            {
              label: "2. Serotonin Release Assay (SRA) — Gold Standard",
              value: "• Principle: Washed donor platelets loaded with 14C-serotonin are incubated with patient serum in the presence of therapeutic low-dose (0.1–0.5 U/mL) and supratherapeutic high-dose (100 U/mL) heparin.\n• Positive SRA: > 20% serotonin release at low heparin concentration with > 50% suppression/inhibition at 100 U/mL heparin (demonstrating heparin-dependent functional activation). Sensitivity & Specificity > 95–98%.",
            },
          ],
        },
      ],
    },
    {
      id: "hit.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Thrombocytopenia in the ICU",
      summary: "Differentiate Heparin-Induced Thrombocytopenia from sepsis-induced consumption, DIC, and drug-induced immune thrombocytopenia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Sepsis-Associated Thrombocytopenia: Gradual platelet drop during severe infection without thrombosis; 4Ts score <= 3 (low probability).",
          "Disseminated Intravascular Coagulation (DIC): Thrombocytopenia accompanied by prolonged PT/INR, low fibrinogen (<100 mg/dL), and high D-dimer.",
          "Drug-Induced Immune Thrombocytopenia (DITP): Rapid severe platelet drop (<20,000/uL) from antibiotics (vancomycin, piperacillin-tazobactam) without thrombosis.",
          "Post-Transfusion Purpura: Severe acute thrombocytopenia occurring 5-10 days after blood product transfusion in sensitized patients."
]
        }
      ]
    },
    {
      id: "hit.management",
      kind: "management",
      title: "Therapeutic Management: Direct Thrombin Inhibitors & Warfarin Avoidance",
      summary: "Argatroban and Bivalirudin protocols, Fondaparinux, strictly avoiding platelet transfusions, and the danger of early Warfarin limb gangrene.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Management upon suspecting intermediate or high probability HIT:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Immediate Cessation of All Heparin",
              value: "Stop all UFH, LMWH infusions, subcutaneous injections, heparin flushes, and remove heparin-coated vascular catheters and dialysis circuits. Mark medical record as 'Heparin Allergic'.",
            },
            {
              label: "2. Argatroban Protocol (Preferred in Renal Impairment)",
              value: "• Direct univalent thrombin inhibitor. 100% Hepatic clearance (biliary).\n• Starting Dose: 2.0 mcg/kg/min continuous IV infusion. (Reduce starting dose to 0.5 mcg/kg/min in hepatic impairment [bilirubin > 1.5 mg/dL], heart failure, or critically ill ICU anasarca/shock).\n• Monitoring: Titrate to target aPTT 1.5–3.0 times baseline (typically 60–85 seconds), checked every 2–4 hours until stable.\n• Note: Argatroban causes artifactual prolongation of the PT/INR (INR typically rises to 2.5–4.5 on monotherapy).",
            },
            {
              label: "3. Bivalirudin Protocol (Preferred in Hepatorenal Failure & ECMO)",
              value: "• Direct bivalent thrombin inhibitor. Cleared by intravascular proteases (80%) and kidneys (20%; half-life 25 min).\n• Starting Dose: 0.15 mg/kg/hr IV (reduce in renal failure). Titrate to aPTT 1.5–2.5 times baseline. Drug of choice for HIT patients requiring urgent cardiac surgery or supported on ECMO/CRRT.",
            },
            {
              label: "4. CRITICAL CONTRAINDICATION: Platelet Transfusions",
              value: "Prophylactic platelet transfusions are strictly CONTRAINDICATED in HIT. Adding donor platelets provides fuel for antibody-mediated activation, causing massive microvascular thrombosis and ischemic limb gangrene.",
            },
            {
              label: "5. CRITICAL CONTRAINDICATION: Early Warfarin & Venous Limb Gangrene",
              value: "NEVER initiate Warfarin during acute HIT. Warfarin rapidly depletes short-half-life natural Protein C before procoagulant factors fall, triggering microvascular thrombosis that leads to Venous Limb Gangrene (bilateral lower extremity necrosis despite patent pulses) and Skin Necrosis. ONLY start Warfarin after platelet count has fully normalized (> 150,000/uL); overlap with DTI for ≥ 5 days until INR is therapeutic on two consecutive days.",
            },
          ],
        },
      ],
    },
    {
      id: "hit.complications",
      kind: "complications",
      title: "Complications of Heparin-Induced Thrombocytopenia",
      summary: "Venous limb gangrene, bilateral adrenal hemorrhagic infarction, acute pulmonary embolism, and catheter-associated thrombosis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Venous Limb Gangrene: Extensive microvascular thrombosis of the microcirculation in a limb with deep vein thrombosis, leading to distal dry gangrene requiring amputation (precipitated by early warfarin use).",
            "Bilateral Adrenal Hemorrhagic Infarction: Thrombosis of the central adrenal veins causing acute adrenal necrosis, primary adrenal insufficiency, and refractory vasodilation/shock.",
            "Cerebral Venous Sinus Thrombosis (CVST) and Ischemic Stroke.",
            "Severe Limb-Threatening Arterial Thrombosis ('White Clot Syndrome'): Occlusion of iliofemoral or brachial arteries by platelet-rich white thrombi.",
          ],
        },
      ],
    },
    {
      id: "hit.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in HIT diagnosis and management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transfusing Platelets to treat thrombocytopenia in HIT: Triggers widespread thrombosis and acute limb loss; platelets are contraindicated unless life-threatening hemorrhage occurs.",
            "Starting Warfarin while platelets are < 150,000/uL: Causes microvascular thrombosis and Venous Limb Gangrene; wait until platelets fully recover, and overlap with a DTI for ≥ 5 days.",
            "Ordering PF4-ELISA in low-probability (4Ts 0–3) patients: Leads to false-positive results, unnecessary cessation of heparin, and dangerous over-anticoagulation with expensive DTIs.",
            "Stopping Heparin without starting an alternative non-heparin anticoagulant: Merely stopping heparin leaves the patient in a violent prothrombotic state (30-day thrombosis rate 50%); immediately initiate Argatroban, Bivalirudin, or Fondaparinux.",
            "Overdosing Argatroban in ICU shock and hepatic dysfunction: The standard 2.0 mcg/kg/min dose causes severe coagulopathy and intracranial bleeding in liver dysfunction; start at 0.5 mcg/kg/min.",
          ],
        },
      ],
    },
    {
      id: "hit.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Direct Oral Anticoagulants (DOACs) for acute HIT and Autoimmune HIT.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Direct Oral Anticoagulants (DOACs) in Acute HIT: The 2018 ASH guidelines conditionally recommend DOACs (Rivaroxaban 15 mg bid, Apixaban 10 mg bid) as an alternative to parenteral DTIs in clinically stable, non-critically ill patients with HIT. In the ICU, IV DTIs (Argatroban/Bivalirudin) remain preferred during acute hemodynamic instability and multiorgan failure due to rapid titratability.",
        },
        {
          type: "paragraph",
          text: "Autoimmune / Heparin-Independent HIT: A severe variant where antibodies activate platelets even in the complete absence of heparin, causing persistent thrombocytopenia and thrombosis lasting weeks. Treated with High-Dose IV Immunoglobulin (IVIG 1 g/kg/day x 2 days) to block platelet Fc-gamma-RIIa receptors.",
        },
      ],
    },
  ],
};
