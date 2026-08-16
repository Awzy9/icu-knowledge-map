import type { Topic } from "@/content-types";

export const bleeding: Topic = {
  id: "bleeding",
  slug: "bleeding",
  title: "Major Bleeding, Hemorrhagic Shock, & Damage Control Resuscitation",
  category: "hematology",
  oneLiner: "The trauma lethal diamond (hypothermia, acidosis, coagulopathy, hypocalcemia), 1:1:1 massive transfusion (PROPPR trial), early TXA (CRASH-2), and TEG/ROTEM algorithms.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Hemorrhagic Shock, Massive Transfusion, Damage Control Resuscitation, and Coagulopathies",
    },
    {
      title: "European Guideline on Management of Major Bleeding and Coagulopathy Following Trauma",
      edition: "6th Edition, Crit Care 2023;27(1):80",
    },
  ],
  currentStatus: "Current as of the 2023 6th Edition European Trauma Hemorrhage Guidelines, the PROPPR trial (1:1:1 vs 1:1:2), and the CRASH-2 / CRASH-3 trials on Tranexamic Acid.",
  otherReferences: [
    "Rossaint R, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023;27(1):80.",
    "Holcomb JB, et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma: The PROPPR Randomized Clinical Trial. JAMA. 2015;313(5):471-482.",
    "CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2): a randomised, placebo-controlled trial. Lancet. 2010;376(9734):23-32.",
  ],
  relationships: [
    { type: "differential", targetId: "dic", label: "Consumptive coagulopathy from sepsis vs acute trauma coagulopathy" },
    { type: "differential", targetId: "hit", label: "Prothrombotic thrombocytopenia vs hemorrhagic coagulopathy" },
    { type: "treated-with", targetId: "transfusion", label: "Massive transfusion protocols and blood component delivery" },
    { type: "related-to", targetId: "anticoagulation", label: "Targeted reversal of DOACs, warfarin, and heparin" },
    { type: "complication", targetId: "shock", label: "Hemorrhagic shock and end-organ hypoperfusion" },
  ],
  sections: [
    {
      id: "bleeding.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "bleeding-guideline-european-trauma-6th-edition",
          relevance: "European guideline on management of major bleeding and coagulopathy following trauma"
        },
        {
          kind: "trial",
          id: "bleeding-crash-2",
          relevance: "CRASH-2 landmark trial establishing tranexamic acid within 3 hours reduces death from bleeding"
        },
        {
          kind: "trial",
          id: "bleeding-proppr",
          relevance: "PROPPR landmark trial establishing 1:1:1 balanced blood component transfusion in hemorrhagic shock"
        },
        {
          kind: "trial",
          id: "transfusion-tricc-trial",
          relevance: "TRICC trial establishing restrictive RBC transfusion threshold in critically ill patients"
        },
        {
          kind: "systematic-review",
          id: "transfusion-restrictive-cochrane-review",
          relevance: "Cochrane systematic review on transfusion strategies in major bleeding and critical illness"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Major hemorrhage in critical illness triggers the lethal diamond of trauma, requiring rapid surgical/interventional source control, permissive hypotension, balanced 1:1:1 blood component resuscitation, and viscoelastic-guided hemostasis.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Exsanguinating hemorrhage—from trauma, ruptured vascular aneurysms, major gastrointestinal bleeding, surgical dehiscence, or obstetric emergencies—is a leading cause of preventable in-hospital mortality. Massive blood loss combined with cold crystalloid infusion rapidly precipitates the 'Lethal Diamond' of trauma: hypothermia, severe metabolic acidemia, dilutional/consumptive coagulopathy, and hypocalcemia.",
        },
        {
          type: "paragraph",
          text: "Modern Damage Control Resuscitation (DCR) replaces historical crystalloid boluses with three foundational pillars: (1) Permissive hypotension (maintaining MAP 50–60 mmHg / SBP 80–90 mmHg until surgical hemostasis); (2) Immediate balanced 1:1:1 Massive Transfusion Protocol (PRBC : FFP : Platelets); and (3) Rapid administration of Tranexamic Acid (TXA) within 3 hours of injury.",
        },
      ],
    },
    {
      id: "bleeding.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Coagulopathy in Major Hemorrhage",
      summary: "Differentiate Trauma-Induced Coagulopathy (TIC), dilutional coagulopathy, hypothermic dysfunction, and hyperfibrinolysis.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Trauma-Induced Coagulopathy (TIC): Endogenous acute coagulopathy driven by endothelial glycocalyx shedding, tissue factor release, and hyperfibrinolysis before fluid dilution.",
          "Resuscitation-Induced Dilutional Coagulopathy: Secondary dilution of clotting factors and platelets caused by large-volume crystalloid resuscitation.",
          "Hypothermic & Acidemic Coagulation Impairment: Severe core hypothermia (<35°C) and acidosis (pH < 7.20) inactivate coagulation enzyme complexes even with normal laboratory factor levels."
]
        }
      ]
    },
    {
      id: "bleeding.lethal-diamond",
      kind: "physiology",
      title: "The Lethal Diamond of Trauma & Acute Coagulopathy of Trauma (ATC)",
      summary: "The biophysical interplay between hypothermia (< 35°C), acidosis (pH < 7.20), hypocalcemia (iCa < 0.9 mmol/L), and endothelial glycocalyx breakdown.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Acute Coagulopathy of Trauma (ATC) is an endogenous failure of hemostasis developing within minutes of severe injury, accelerated by shock and resuscitation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Hypothermia (< 35.0°C)",
              value: "Coagulation cascade enzymes are temperature-dependent. Clotting factor activity drops by 10% for every 1.0°C fall in core body temperature below 37°C. Severe hypothermia (< 34°C) causes irreversible platelet dysfunction and blocks thrombin generation.",
            },
            {
              label: "2. Acidemia (Arterial pH < 7.20)",
              value: "Lactic acidosis and hyperchloremia directly inhibit the assembly of the prothrombinase (Xa/Va) and tenase (IXa/VIIIa) enzyme complexes on platelet phospholipid membranes. At pH 7.0, thrombin generation is reduced by > 70%.",
            },
            {
              label: "3. Hypocalcemia (Ionized Ca < 0.9–1.0 mmol/L)",
              value: "Ionized calcium is Factor IV, mandatory for tenase and prothrombinase complex anchoring. Massive transfusion citrate chelates calcium. Severe hypocalcemia (iCa < 0.9 mmol/L) causes profound cardiac contractile failure, vasoplegia, and complete coagulopathy arrest.",
            },
            {
              label: "4. Endothelial Glycocalyx Shedding & Hyperfibrinolysis",
              value: "Ischemia-reperfusion and sympathoadrenal surge cause massive shedding of the endothelial glycocalyx (releasing endogenous heparinoids, 'auto-heparinization') and huge surges in tissue plasminogen activator (tPA) from Weibel-Palade bodies, triggering fulminant systemic hyperfibrinolysis.",
            },
          ],
        },
      ],
    },
    {
      id: "bleeding.dcr-protocol",
      kind: "management",
      title: "Damage Control Resuscitation & Massive Transfusion Protocols",
      summary: "Permissive hypotension, 1:1:1 balanced ratio transfusion (PROPPR trial), and early Tranexamic Acid (CRASH-2 trial).",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Resuscitation protocol for active severe hemorrhage based on the European Trauma Guidelines and landmark clinical trials:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Permissive Hypotension",
              value: "Target SBP 80–90 mmHg (MAP 50–60 mmHg) until surgical or endovascular hemostasis is achieved ('pop the clot' avoidance). Restrict crystalloid infusions (< 1–1.5 L). EXCEPTION: In patients with concurrent Traumatic Brain Injury (TBI), maintain SBP ≥ 100–110 mmHg to preserve cerebral perfusion pressure.",
            },
            {
              label: "2. Balanced 1:1:1 Massive Transfusion Protocol (MTP)",
              value: "Transfuse Packed Red Blood Cells, Fresh Frozen Plasma, and Platelets in a strict 1:1:1 ratio (e.g. 6 units PRBC : 6 units FFP : 1 apheresis platelet unit / 6 pooled units).\nEvidence: The PROPPR Trial (JAMA 2015, 680 trauma patients) demonstrated that 1:1:1 transfusion achieved anatomical hemostasis significantly faster (86% vs 78%, p=0.006) and significantly reduced 24-hour exsanguination mortality (9.2% vs 14.6%, p=0.03) compared to 1:1:2.",
            },
            {
              label: "3. Tranexamic Acid (TXA) Protocol",
              value: "Dose: 1.0 g IV bolus infused over 10 minutes, followed immediately by 1.0 g IV infusion over 8 hours.\nEvidence: The CRASH-2 Trial (Lancet 2010, 20,211 patients) proved that TXA administered within 3 hours of injury significantly reduces all-cause mortality (RR 0.91, p=0.0035) and risk of death due to bleeding (RR 0.85, p=0.0077). CRITICAL WARNING: TXA administered > 3 hours after injury INCREASES mortality from bleeding (RR 1.44); never start TXA after the 3-hour window.",
            },
            {
              label: "4. Aggressive Calcium & Temperature Management",
              value: "Administer 1.0 g IV Calcium Chloride (or 3.0 g Calcium Gluconate) for every 2–4 units of blood products transfused, targeting ionized calcium > 1.10–1.25 mmol/L. Utilize active external forced-air warmers and high-flow rapid fluid warmers (e.g. Belmont/Level 1) to keep core temp ≥ 36.0°C.",
            },
          ],
        },
      ],
    },
    {
      id: "bleeding.viscoelastic",
      kind: "diagnosis",
      title: "Viscoelastic Testing: TEG & ROTEM Goal-Directed Hemostasis",
      summary: "Thromboelastography (TEG) and Rotational Thromboelastometry (ROTEM) parameters, diagnostic tracings, and targeted product replacement.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Point-of-care viscoelastic testing measures the entire kinetics of clot formation, propagation, maximum tensile strength, and fibrinolysis within 10–15 minutes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Reaction Time (R-Time / CT)",
              value: "• Parameter: Time until first detectable fibrin formation (normal 5–10 min on TEG, 30–240 s on ROTEM EXTEM).\n• Physiology: Clotting factor initiation and thrombin generation.\n• Abnormal (Prolonged R > 10 min): Indicates factor deficiency. Treatment: Fresh Frozen Plasma (10–15 mL/kg) OR 4-Factor PCC.",
            },
            {
              label: "2. Kinetics & Alpha Angle (K-Time / Alpha Angle / CFT)",
              value: "• Parameter: Speed of clot propagation (normal K 1–3 min, angle 53–72°).\n• Physiology: Fibrinogen cleavage and fibrin polymerization.\n• Abnormal (Low Alpha < 53° or prolonged K): Indicates severe hypofibrinogenemia. Treatment: Cryoprecipitate (10 units) OR Fibrinogen Concentrate (2–4 g IV).",
            },
            {
              label: "3. Maximum Amplitude (MA / MCF)",
              value: "• Parameter: Peak physical strength of the clot (normal MA 50–70 mm on TEG, MCF 50–70 mm on ROTEM).\n• Physiology: 80% Platelet count/function + 20% Fibrinogen.\n• Abnormal (Low MA < 50 mm): Indicates severe thrombocytopenia / platelet dysfunction. Treatment: Platelet transfusion (1 apheresis unit) +/- Cryoprecipitate.",
            },
            {
              label: "4. Lysis at 30 Minutes (LY30 / ML)",
              value: "• Parameter: Percentage reduction in clot area at 30 minutes after MA (normal LY30 0–3% on TEG, Maximum Lysis < 15% on ROTEM).\n• Physiology: Fibrinolysis.\n• Abnormal (Elevated LY30 > 3% or classic 'Teardrop' tracing): Diagnostic of Hyperfibrinolysis. Treatment: Tranexamic Acid (TXA 1–2 g IV).",
            },
          ],
        },
      ],
    },
    {
      id: "bleeding.complications",
      kind: "complications",
      title: "Complications of Major Hemorrhage & Massive Transfusion",
      summary: "Abdominal Compartment Syndrome (ACS), secondary DIC, post-resuscitation ARDS, and rebound thromboembolism.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Abdominal Compartment Syndrome (ACS): Massive retroperitoneal/pelvic hematomas and large-volume fluid resuscitation elevating intra-abdominal pressure > 20 mmHg with new organ dysfunction (oliguria, high peak airway pressures); requires surgical decompression (laparostomy).",
            "Transfusion-Related Acute Lung Injury (TRALI) & TACO: High-volume plasma and platelet transfusions causing non-cardiogenic and hydrostatic pulmonary edema.",
            "Severe Citrate-Induced Hypocalcemia & Hypomagnesemia.",
            "Late Rebound Hypercoagulability: Massive thrombin generation and depleted endogenous anticoagulants (Protein C/S, antithrombin) predisposing to acute pulmonary embolism and DVT once bleeding ceases.",
          ],
        },
      ],
    },
    {
      id: "bleeding.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in major bleeding resuscitation.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering large-volume cold crystalloid boluses (0.9% Normal Saline): Induces hypothermia, dilutes clotting factors, disrupts formed clots, and causes hyperchloremic acidosis, accelerating the lethal diamond.",
            "Administering Tranexamic Acid > 3 hours after trauma: CRASH-2 proved that delayed TXA (> 3 hours) increases death from bleeding; administer strictly within the 3-hour window.",
            "Failing to aggressively replace ionized calcium during massive transfusion: Citrate in blood products rapidly depresses ionized calcium, paralyzing clotting enzyme complexes and myocardial function; give 1 g IV Calcium Chloride every 2–4 units of blood.",
            "Relying on standard INR / aPTT to assess trauma coagulopathy: Conventional coagulation tests are performed on warm (37°C) platelet-poor plasma and do not reflect in vivo platelet function, hypothermia, or hyperfibrinolysis; use point-of-care TEG/ROTEM.",
            "Delaying definitive surgical or interventional source control while attempting medical resuscitation: Blood products cannot fix an open arterial laceration; resuscitation must occur en route to the OR or angiography suite.",
          ],
        },
      ],
    },
    {
      id: "bleeding.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Whole blood vs component therapy and Viscoelastic-guided versus fixed 1:1:1 empiric resuscitation.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Viscoelastic-Guided Resuscitation vs Fixed 1:1:1 Component Ratios (iTACTIC Trial): The multicenter iTACTIC trial evaluated viscoelastic-guided hemostatic resuscitation vs conventional laboratory-guided protocols in trauma. While 28-day overall mortality did not differ across the full cohort, viscoelastic-guided resuscitation significantly improved 24-hour survival in the prespecified subgroup of patients presenting with severe baseline coagulopathy.",
        },
      ],
    },
  ],
};
