import type { Topic } from "@/content-types";

export const anticoagulation: Topic = {
  id: "anticoagulation",
  slug: "anticoagulation",
  title: "Therapeutic Anticoagulation & Emergency Reversal in the ICU",
  category: "hematology",
  oneLiner: "UFH vs LMWH vs DTIs (Argatroban/Bivalirudin), anti-Xa vs aPTT monitoring, and targeted reversal antidotes (Protamine, 4F-PCC, Idarucizumab, Andexanet alfa).",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Antithrombotic Therapy, Anticoagulant Reversal in Critical Care, and Venous Thromboembolism",
    },
    {
      title: "CHEST Guidelines for Antithrombotic Therapy for VTE Disease",
      edition: "2021 Update / 2024 Guidance",
    },
  ],
  currentStatus: "Current as of the CHEST Antithrombotic Guidelines, the ASRA Neuraxial Anesthesia & Anticoagulation Guidelines, and the RE-VERSE AD and ANNEXA-I trials.",
  otherReferences: [
    "Stevens SM, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.",
    "Pollack CV Jr, et al. Idarucizumab for Dabigatran Reversal - Full Cohort Analysis (RE-VERSE AD). N Engl J Med. 2017;377(5):431-441.",
    "Connolly SJ, et al. Andexanet for Factor Xa Inhibitor-Associated Acute Intracranial Hemorrhage (ANNEXA-I Trial). N Engl J Med. 2024;390(23):2145-2155.",
  ],
  relationships: [
    { type: "complication", targetId: "hit", label: "Heparin-induced thrombocytopenia and switch to DTIs" },
    { type: "complication", targetId: "bleeding", label: "Anticoagulant-associated life-threatening hemorrhage" },
    { type: "related-to", targetId: "transfusion", label: "4-Factor PCC and component therapy" },
    { type: "related-to", targetId: "obstructive-shock", label: "Immediate therapeutic anticoagulation for acute PE" },
    { type: "related-to", targetId: "crrt", label: "Circuit anticoagulation and direct thrombin inhibitors" },
  ],
  sections: [
    {
      id: "anticoagulation.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "anticoag-guideline-acc-2020",
          relevance: "ACC 2020 expert consensus on emergency reversal of direct oral anticoagulants and warfarin"
        },
        {
          kind: "trial",
          id: "anticoag-re-verse-ad-trial",
          relevance: "RE-VERSE AD landmark prospective study establishing Idarucizumab 5 g IV for immediate dabigatran reversal"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Anticoagulation in critical illness requires precision agent selection balancing organ clearance (renal vs hepatic), invasive procedure timing, and rapid reversal protocols for life-threatening bleeding.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Critically ill patients frequently require therapeutic anticoagulation for acute venous thromboembolism (DVT/PE), atrial fibrillation, mechanical heart valves, acute coronary syndromes, ECMO, or vascular bypass grafts. However, ICU patients carry a high baseline risk of major hemorrhage driven by acute kidney injury, hepatic synthetic failure, invasive line placement, and stress ulceration.",
        },
        {
          type: "paragraph",
          text: "Parenteral agents (Unfractionated Heparin [UFH], Low-Molecular-Weight Heparin [LMWH], and Direct Thrombin Inhibitors [Argatroban, Bivalirudin]) are preferred over oral agents in the acute phase due to predictable pharmacokinetics and rapid reversibility. Therapeutic drug monitoring has shifted towards Anti-Factor Xa chromogenic assays, and dedicated reversal antidotes (Idarucizumab, Andexanet alfa, 4-Factor PCC, Protamine) allow immediate hemostatic recovery.",
        },
      ],
    },
    {
      id: "anticoagulation.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Anticoagulant-Induced Bleeding & Reversal Urgency",
      summary: "Differentiate true anticoagulant overdose from underlying anatomical vascular lesions and consumptive coagulopathy.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Anticoagulant-Associated Hemorrhage vs Systemic DIC: Anticoagulant bleeding has isolated target pathway inhibition without severe hypofibrinogenemia or microangiopathic hemolysis.",
          "Hidden Anatomical Bleeding Source: Anticoagulation frequently unmasks underlying structural lesions (diverticulosis, arteriovenous malformations, occult gastrointestinal or bladder malignancies).",
          "Heparin Resistance: Inability to achieve therapeutic aPTT despite high heparin doses due to antithrombin III deficiency (common in sepsis, liver failure, ECMO); requires anti-Xa monitoring or antithrombin concentrate."
]
        }
      ]
    },
    {
      id: "anticoagulation.agent-selection",
      kind: "definition",
      title: "Parenteral & Oral Anticoagulant Pharmacokinetics in the ICU",
      summary: "UFH, Enoxaparin, Argatroban, Bivalirudin, DOACs, and Warfarin clearance and indications.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Pharmacokinetic properties and dosing considerations in critical illness:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Unfractionated Heparin (UFH)",
              value: "• Mechanism: Accelerates Antithrombin III (ATIII) inhibition of thrombin (IIa) and Xa in a 1:1 ratio.\n• Clearance: Rapid reticuloendothelial clearance (half-life 60–90 min).\n• Advantages: Zero dependence on renal function; 100% reversible with Protamine. Preferred in severe renal failure (CrCl < 30 mL/min), hemodynamic shock, and patients with planned surgical interventions.",
            },
            {
              label: "2. Low-Molecular-Weight Heparin (LMWH / Enoxaparin)",
              value: "• Mechanism: Higher ratio of anti-Xa to anti-IIa activity (approx 4:1).\n• Clearance: 100% Renal elimination (half-life 4–6 hours).\n• Dosing: Therapeutic dose 1 mg/kg SC q12h (or 1.5 mg/kg SC daily). In CrCl < 30 mL/min, reduce dose to 1 mg/kg SC q24h or switch to UFH due to high risk of bioaccumulation and catastrophic retroperitoneal/intracranial bleeding.",
            },
            {
              label: "3. Direct Thrombin Inhibitors (Argatroban & Bivalirudin)",
              value: "• Argatroban: Direct univalent thrombin inhibitor. Hepatic clearance (biliary). Drug of choice for HIT in renal impairment. Prolongs baseline INR (artifactual prolongation).\n• Bivalirudin: Direct bivalent thrombin inhibitor. Cleared by intravascular proteases (80%) and kidneys (20%; half-life 25 min). Drug of choice in HIT with combined hepatic/renal failure and for anticoagulation during ECMO.",
            },
            {
              label: "4. Direct Oral Anticoagulants (DOACs: Apixaban, Rivaroxaban, Dabigatran)",
              value: "Contraindicated in acute shock, active multiorgan failure, gastrointestinal malabsorption, or mechanical heart valves. Safe for transition once patient is extubated, hemodynamically stable, and taking enteral nutrition.",
            },
          ],
        },
      ],
    },
    {
      id: "anticoagulation.monitoring",
      kind: "diagnosis",
      title: "Therapeutic Monitoring: Anti-Xa Assay versus aPTT",
      summary: "Why anti-Xa monitoring is superior to aPTT in the ICU, and target therapeutic ranges.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "In critically ill patients, monitoring heparin with aPTT is severely confounded by acute-phase reactants (elevated Factor VIII and fibrinogen cause false 'heparin resistance' with low aPTT despite therapeutic anti-Xa; elevated lupus anticoagulant causes falsely high aPTT):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Anti-Factor Xa Chromogenic Assay (Preferred)",
              value: "Directly measures the inhibition of Factor Xa by heparin-antithrombin complexes.\n• Target for Therapeutic UFH: 0.30–0.70 IU/mL.\n• Target for Therapeutic Enoxaparin (Peak 4-hr post-dose): 0.60–1.00 IU/mL (twice-daily) or 1.00–2.00 IU/mL (once-daily).\nAdvantages: Unaffected by factor VIII, fibrinogen, or lupus anticoagulants; achieves therapeutic range significantly faster with fewer dose titrations and less bleeding.",
            },
            {
              label: "Activated Partial Thromboplastin Time (aPTT)",
              value: "Traditional target: 1.5–2.5 times control (typically 60–85 seconds). Highly variable between reagent lots. If aPTT is < 50 s despite escalating heparin (> 35,000 units/day), check Anti-Xa level and Antithrombin III activity before increasing heparin further.",
            },
          ],
        },
      ],
    },
    {
      id: "anticoagulation.reversal",
      kind: "management",
      title: "Emergency Anticoagulant Reversal Protocol: Specific Antidotes",
      summary: "Protamine sulfate, 4-Factor PCC, Idarucizumab (Praxbind), and Andexanet alfa (Andexxa) dosing and trials.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Emergency management of life-threatening bleeding or emergent surgery under active anticoagulation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Unfractionated Heparin -> Protamine Sulfate",
              value: "Dose: 1.0 mg Protamine per 100 units of UFH infused over the preceding 2–3 hours (maximum single dose 50 mg). Infuse slowly over 10–15 minutes. Rapid push causes catastrophic hypotension, bradycardia, and fatal anaphylactoid pulmonary hypertension (high risk in patients with prior NPH insulin use or fish allergies).",
            },
            {
              label: "2. LMWH (Enoxaparin) -> Protamine Sulfate",
              value: "Dose: 1.0 mg Protamine per 1.0 mg Enoxaparin administered within the past 8 hours (0.5 mg Protamine per 1 mg if given 8–12h prior). Reverses 100% of anti-IIa activity and ~60% of anti-Xa activity.",
            },
            {
              label: "3. Warfarin -> 4-Factor PCC + IV Vitamin K",
              value: "• 4-Factor PCC (Kcentra): Dose 25–50 units/kg IV based on baseline INR (e.g. INR 2–4: 25 U/kg; INR 4–6: 35 U/kg; INR > 6: 50 U/kg; max 5000 units). Normalizes INR within 15–30 minutes without volume overload.\n• Vitamin K1 (Phytonadione): 10 mg slow IV in 50 mL saline over 20 min to maintain sustained factor synthesis as PCC wears off.",
            },
            {
              label: "4. Dabigatran (Pradaxa) -> Idarucizumab (Praxbind)",
              value: "Dose: 5.0 g IV administered as two consecutive 2.5 g IV boluses/infusions. Humanized Fab antibody fragment with 350-fold higher affinity for dabigatran than thrombin. RE-VERSE AD trial proved 100% complete reversal within minutes. (Hemodialysis also clears 60% of dabigatran if idarucizumab is unavailable).",
            },
            {
              label: "5. Oral Factor Xa Inhibitors (Apixaban / Rivaroxaban) -> Andexanet Alfa OR 4F-PCC",
              value: "• Andexanet Alfa (Andexxa): Recombinant modified decoy Factor Xa lacking catalytic activity. Low Dose: 400 mg IV bolus + 480 mg infusion over 2h (if apixaban or rivaroxaban ≤ 10mg taken > 8h ago). High Dose: 800 mg IV bolus + 960 mg infusion over 2h (if rivaroxaban > 10mg or unknown timing). ANNEXA-I trial (NEJM 2024) confirmed superior hemostatic efficacy in acute intracranial hemorrhage compared to usual care.\n• 4-Factor PCC: 2000 units fixed dose or 50 units/kg IV is an acceptable alternative where andexanet is unavailable.",
            },
          ],
        },
      ],
    },
    {
      id: "anticoagulation.periprocedural",
      kind: "management",
      title: "Periprocedural Interruption & Neuraxial Anesthesia Guidelines",
      summary: "Holding times for invasive procedures and American Society of Regional Anesthesia (ASRA) epidural safety windows.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Safe interruption intervals to prevent catastrophic epidural/spinal hematoma and procedural hemorrhage (per ASRA and CHEST guidelines):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. IV Unfractionated Heparin",
              value: "Hold infusion 4–6 hours prior to high-risk procedure or epidural placement/removal. Confirm normal aPTT / Anti-Xa before proceeding. Restart infusion 1 hour after removal.",
            },
            {
              label: "2. Prophylactic LMWH (Enoxaparin 40 mg SC daily)",
              value: "Hold for ≥ 12 hours before neuraxial needle placement or removal. Restart ≥ 4 hours after catheter removal.",
            },
            {
              label: "3. Therapeutic LMWH (Enoxaparin 1 mg/kg SC q12h)",
              value: "Hold for ≥ 24 hours before neuraxial needle placement or major surgery. In CrCl < 30 mL/min, hold for ≥ 48 hours or check anti-Xa level.",
            },
            {
              label: "4. Direct Oral Anticoagulants (Apixaban, Rivaroxaban)",
              value: "Hold for 48–72 hours prior to high-bleeding-risk surgery or neuraxial procedures (hold 4–5 days for Dabigatran if CrCl < 50 mL/min).",
            },
          ],
        },
      ],
    },
    {
      id: "anticoagulation.complications",
      kind: "complications",
      title: "Complications of Anticoagulant Therapy",
      summary: "Spontaneous retroperitoneal hemorrhage, heparin resistance, warfarin skin necrosis, and protamine anaphylaxis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Spontaneous Retroperitoneal & Iliopsoas Hemorrhage: Sudden unexplained femoral neuropathy, back pain, and hemorrhagic shock in an anticoagulated ICU patient; diagnosed via emergent abdominal CT.",
            "Heparin Resistance (Antithrombin III Deficiency): Requiring > 35,000 units/day UFH to achieve therapeutic aPTT; treated by switching to Argatroban or administering Antithrombin III concentrate.",
            "Warfarin-Induced Skin Necrosis: Microvascular thrombosis in fatty tissue (breasts, thighs, buttocks) occurring on days 3–5 of warfarin monotherapy due to rapid depletion of short-half-life natural Protein C before procoagulant factors fall.",
            "Protamine Shock: Life-threatening non-cardiogenic pulmonary edema, severe bronchospasm, and cardiovascular collapse from rapid protamine administration.",
          ],
        },
      ],
    },
    {
      id: "anticoagulation.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in anticoagulation and reversal management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Using therapeutic Enoxaparin (1 mg/kg q12h) in acute kidney injury (CrCl < 30 mL/min): Enoxaparin bioaccumulates rapidly, leading to fatal spontaneous retroperitoneal or intracranial bleeding; switch to IV UFH.",
            "Rapid intravenous push of Protamine Sulfate: Infusing protamine in < 10 minutes precipitates catastrophic histamine release, pulmonary vasoconstriction, and circulatory collapse; infuse slowly over 15 minutes.",
            "Initiating Warfarin without parenteral bridging in acute thrombosis: Triggers a transient hypercoagulable state due to rapid Protein C clearance, risking clot extension and skin necrosis; always bridge with heparin for ≥ 5 days.",
            "Relying on aPTT in patients with high Factor VIII or Lupus Anticoagulant: Falsely skews heparin titration; switch immediately to an Anti-Xa chromogenic assay.",
            "Placing or removing an epidural catheter within 12–24 hours of therapeutic LMWH: Extreme risk of spinal epidural hematoma and permanent paraplegia; strictly adhere to ASRA time windows.",
          ],
        },
      ],
    },
    {
      id: "anticoagulation.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Andexanet alfa vs 4-Factor PCC for Factor Xa inhibitor reversal cost-efficacy and thrombotic risk.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Andexanet Alfa vs 4-Factor PCC in Factor Xa Inhibitor Bleeding: While the randomized ANNEXA-I trial (NEJM 2024) demonstrated superior hemostatic efficacy for Andexanet alfa over usual care in intracerebral hemorrhage (67.0% vs 53.1%, p=0.003), it showed a significantly higher rate of thrombotic events (10.3% vs 5.6%, p=0.048) including ischemic stroke and myocardial infarction. Given the extreme drug cost and thrombotic signal, many centers utilize 4-Factor PCC (2000–3000 units IV) as a first-line alternative.",
        },
      ],
    },
  ],
};
