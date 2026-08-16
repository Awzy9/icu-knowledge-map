import type { Topic } from "@/content-types";

export const transfusion: Topic = {
  id: "transfusion",
  slug: "transfusion",
  title: "Blood Product Transfusion in Critical Care",
  category: "hematology",
  oneLiner: "Restrictive RBC transfusion strategy (Hb < 7.0 g/dL; TRICC/TRISS trials), platelet/plasma/cryoprecipitate thresholds, and the TRALI vs TACO diagnostic matrix.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Blood and Blood Product Transfusions, Coagulation and Transfusion in Critical Illness, and Transfusion Reactions",
    },
    {
      title: "Carson JL, et al. Red Blood Cell Transfusion: 2023 AABB International Guidelines",
      edition: "JAMA 2023;330(19):1892-1902",
    },
  ],
  currentStatus: "Current as of the 2023 AABB International Red Blood Cell Transfusion Guidelines, the TRICC/TRISS/MINT trials, and international consensus on TRALI/TACO definitions.",
  otherReferences: [
    "Carson JL, et al. Red Blood Cell Transfusion: 2023 AABB International Guidelines. JAMA. 2023;330(19):1892-1902.",
    "Hebert PC, et al. A multicenter, randomized, controlled clinical trial of transfusion requirements in critical care (TRICC). N Engl J Med. 1999;340(6):409-417.",
    "Holst LB, et al. Lower versus higher hemoglobin threshold for transfusion in septic shock (TRISS). N Engl J Med. 2014;371(15):1381-1391.",
    "Rao SV, et al. Restrictive or Liberal Transfusion Strategy in Myocardial Infarction and Anemia (MINT Trial). N Engl J Med. 2023;389(26):2446-2456.",
  ],
  relationships: [
    { type: "related-to", targetId: "bleeding", label: "Massive transfusion protocols and hemorrhagic resuscitation" },
    { type: "related-to", targetId: "dic", label: "Consumptive coagulopathy component replacement" },
    { type: "related-to", targetId: "hit", label: "Platelet transfusion contraindication in prothrombotic state" },
    { type: "complication", targetId: "ards", label: "Transfusion-Related Acute Lung Injury (TRALI)" },
    { type: "differential", targetId: "cardiogenic-pulmonary-edema", label: "Transfusion-Associated Circulatory Overload (TACO)" },
  ],
  sections: [
    {
      id: "transfusion.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "transfusion-guideline-aabb-2023",
          relevance: "AABB 2023 clinical practice guidelines on restrictive RBC transfusion thresholds (Hb < 7.0 g/dL)"
        },
        {
          kind: "trial",
          id: "transfusion-tricc-trial",
          relevance: "TRICC landmark trial proving restrictive RBC transfusion (Hb < 7.0 g/dL) is safe and reduces blood use by 54%"
        },
        {
          kind: "trial",
          id: "transfusion-triss-trial",
          relevance: "TRISS trial confirming safety of restrictive transfusion threshold (Hb <= 7.0 g/dL) specifically in septic shock"
        },
        {
          kind: "systematic-review",
          id: "transfusion-restrictive-cochrane-review",
          relevance: "Cochrane systematic review establishing safety and efficacy of restrictive transfusion"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Blood product transfusion in critical care requires a restrictive, evidence-based strategy balancing cellular oxygen delivery against the serious risks of volume overload, immunomodulation, and acute lung injury.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Anemia affects over 60–80% of all critically ill ICU patients, driven by blunted erythropoietin production, inflammatory functional iron deficiency, coagulopathy, and repeated diagnostic phlebotomy. However, multiple landmark randomized controlled trials have definitively established that liberal transfusion strategies (transfusing to 'normal' hemoglobin > 10 g/dL) do NOT improve survival, and significantly increase mortality, nosocomial infections, and acute lung injury.",
        },
        {
          type: "paragraph",
          text: "The 2023 AABB International Guidelines recommend a restrictive threshold (transfusion triggered at Hemoglobin < 7.0 g/dL) for almost all hemodynamically stable ICU patients, including those with septic shock, ARDS, and critical illness. Component therapy (platelets, fresh frozen plasma, cryoprecipitate, 4-factor PCC) must be reserved for active bleeding or high-risk invasive procedures rather than cosmetic laboratory correction.",
        },
      ],
    },
    {
      id: "transfusion.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Transfusion Thresholds & Viscoelastic Hemostatic Assays",
      summary: "Laboratory indications for component therapy and point-of-care TEG/ROTEM diagnostic algorithms.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "RBC Transfusion Trigger", value: "Restrictive threshold: Hemoglobin < 7.0 g/dL in general ICU patients (TRICC trial); Hemoglobin < 8.0 g/dL in acute coronary syndrome or perioperative cardiac surgery." },
            { label: "Platelet Transfusion Triggers", value: "• < 10,000/uL: Prophylactic in non-bleeding patients.\n• < 50,000/uL: Active bleeding, major invasive procedures (central line, lumbar puncture, major surgery).\n• < 100,000/uL: Intracranial hemorrhage, neurosurgery, or ocular surgery." },
            { label: "Viscoelastic Testing (TEG / ROTEM)", value: "• Prolonged R-time / CT: Coagulation factor deficiency -> Fresh Frozen Plasma (FFP) or 4F-PCC.\n• Decreased Alpha angle / CFT: Fibrinogen deficiency -> Cryoprecipitate or Fibrinogen concentrate.\n• Decreased MA / MCF: Severe thrombocytopenia or platelet dysfunction -> Platelet transfusion.\n• Elevated LY30 / ML (>3%): Hyperfibrinolysis -> Tranexamic Acid (TXA)." }
          ]
        }
      ]
    },
    {
      id: "transfusion.rbc-thresholds",
      kind: "management",
      title: "Red Blood Cell Transfusion Thresholds & Landmark Trials",
      summary: "The 2023 AABB restrictive threshold (Hb < 7.0 g/dL), special cardiac subgroups, and the TRICC, TRISS, and MINT trials.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "RBC transfusion triggers based on the 2023 AABB International Guidelines and randomized clinical trials:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. General ICU Patients & Septic Shock",
              value: "Restrictive Threshold: Transfuse at Hemoglobin < 7.0 g/dL (Target 7.0–9.0 g/dL).\nEvidence: TRICC Trial (NEJM 1999) demonstrated lower 30-day mortality with restrictive transfusion in younger and less severe ICU patients. TRISS Trial (NEJM 2014) showed restrictive transfusion halved blood use with identical 90-day mortality in septic shock.",
            },
            {
              label: "2. Pre-Existing Cardiovascular Disease / Post-Cardiac Surgery",
              value: "Restrictive Threshold: Transfuse at Hemoglobin < 7.5–8.0 g/dL.\nEvidence: TRACS and TITRe2 trials confirmed non-inferiority of 7.5–8.0 g/dL thresholds in cardiac surgery.",
            },
            {
              label: "3. Acute Coronary Syndromes (ACS / Acute MI)",
              value: "MINT Trial (NEJM 2023, 3504 patients with acute MI and Hb < 10 g/dL): Liberal transfusion (< 10 g/dL) showed a non-statistically significant trend toward reduced 30-day death or reinfarction (14.5% vs 16.9%, RR 0.85; 95% CI 0.72–1.00; p=0.07). The 2023 AABB guideline suggests considering a threshold of 8.0–10.0 g/dL for symptomatic acute myocardial infarction.",
            },
            {
              label: "4. Active Major Exsanguination / Hemorrhagic Shock",
              value: "Hemoglobin concentration does NOT reflect acute blood loss due to delayed intravascular redistribution. Transfuse immediately based on hemodynamic instability and initiate 1:1:1 Massive Transfusion Protocol.",
            },
          ],
        },
      ],
    },
    {
      id: "transfusion.components",
      kind: "definition",
      title: "Blood Components: Platelets, FFP, Cryoprecipitate, & 4F-PCC",
      summary: "Indications, dosing, and procedural thresholds for non-RBC blood products.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Specific thresholds and dosing metrics for plasma, platelets, and procoagulants:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Platelet Concentrates (Apheresis single donor)",
              value: "1 apheresis unit raises platelet count by 30,000–50,000/uL.\n• Prophylactic in non-bleeding ICU patient: Transfuse if Platelets < 10,000/uL.\n• Central Venous Line placement (femoral/internal jugular): Transfuse if Platelets < 20,000/uL.\n• Lumbar Puncture / Percutaneous Tracheostomy / Paracentesis / Endoscopy with Biopsy: Transfuse if Platelets < 50,000/uL.\n• Major Surgery / Active Bleeding / Neurosurgery / Intracranial Hemorrhage: Transfuse to maintain Platelets > 100,000/uL.\n• CONTRAINDICATION: Prophylactic platelets are contraindicated in Heparin-Induced Thrombocytopenia (HIT) and Thrombotic Thrombocytopenic Purpura (TTP) due to catastrophic thrombotic risk.",
            },
            {
              label: "2. Fresh Frozen Plasma (FFP)",
              value: "Dose: 10–15 mL/kg (typically 3–4 units in adults). Contains all soluble clotting factors (~1 unit/mL). Indicated for active severe bleeding with INR > 1.5–2.0 or prior to major invasive procedures in coagulopathic patients. Plasma is INEFFECTIVE and contraindicated for mild isolated INR elevations (1.3–1.7) because FFP itself has an INR of ~1.2–1.3.",
            },
            {
              label: "3. Cryoprecipitate / Fibrinogen Concentrate",
              value: "1 pool (10 units) contains ~2.0–2.5 g of Fibrinogen, Factor VIII, von Willebrand Factor, and Factor XIII. Indicated when plasma Fibrinogen < 150–200 mg/dL in active major bleeding or trauma.",
            },
            {
              label: "4. 4-Factor Prothrombin Complex Concentrate (4F-PCC)",
              value: "Contains high concentrations of Factors II, VII, IX, X and Proteins C/S. First-line emergency reversal of Warfarin (dose 25–50 units/kg based on baseline INR + 10 mg IV Vitamin K) with rapid INR correction in < 15–30 minutes without volume overload.",
            },
          ],
        },
      ],
    },
    {
      id: "transfusion.reactions",
      kind: "differential-diagnosis",
      title: "Transfusion Reactions Diagnostic Matrix: TRALI versus TACO",
      summary: "Distinguishing Transfusion-Related Acute Lung Injury (TRALI) from Transfusion-Associated Circulatory Overload (TACO) and acute hemolytic reactions.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute reactions occurring during or within 6 hours of transfusion require immediate cessation and targeted differentiation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Transfusion-Related Acute Lung Injury (TRALI)",
              value: "• Mechanism: Two-hit immune-mediated non-cardiogenic capillary leak. Donor anti-HLA or anti-HNA antibodies bind recipient pulmonary neutrophils, triggering massive alveolar capillary destruction.\n• Timing: Within 6 hours of transfusion (most within 1–2 hours).\n• Clinical Signs: Severe hypoxemia, bilateral pulmonary infiltrates, fever, transient hypotension or normotension, non-elevated CVP/PAOP, normal BNP, and copious frothy pink endotracheal secretions with protein-rich exudate.\n• Management: Supportive lung-protective mechanical ventilation. Diuretics are INEFFECTIVE and may cause hypovolemic shock. Report donor to blood bank to prevent further plasma donation.",
            },
            {
              label: "2. Transfusion-Associated Circulatory Overload (TACO)",
              value: "• Mechanism: Hydrostatic / cardiogenic pulmonary edema from intravascular volume expansion, especially in elderly, renal, or heart failure patients.\n• Clinical Signs: Severe dyspnea, hypertension, elevated CVP, elevated jugular venous distension, positive fluid balance, elevated BNP/NT-proBNP (> 1.5x baseline), and dramatic clinical improvement with loop diuretics.\n• Management: Stop transfusion, administer IV Furosemide (40–80 mg IV), and initiate non-invasive positive pressure ventilation (NIV/CPAP).",
            },
            {
              label: "3. Acute Hemolytic Transfusion Reaction (AHTR)",
              value: "• Mechanism: ABO incompatibility causing IgM-mediated complement activation and intravascular hemolysis.\n• Clinical Signs: Sudden fever, flank/back pain, dyspnea, dark red urine (hemoglobinuria), hypotension, and acute DIC.\n• Management: Stop transfusion immediately, send blood bank workup (direct antiglobulin test DAT, repeat crossmatch), vigorously hydrate with IV saline to maintain urine output > 100–200 mL/hr, and monitor for acute renal failure.",
            },
            {
              label: "4. Febrile Non-Hemolytic Reaction (FNHTR)",
              value: "Fever and chills without hemolysis or hypoxemia, caused by leukocyte-derived cytokines accumulating during storage. Benign self-limiting; manage with antipyretics (acetaminophen). Prevented by universal leukoreduction.",
            },
          ],
        },
      ],
    },
    {
      id: "transfusion.complications",
      kind: "complications",
      title: "Complications of Massive Transfusion & Blood Storage Lesions",
      summary: "Citrate-induced hypocalcemia, hyperkalemia from stored RBC lysis, hypothermia, and Transfusion-Related Immunomodulation (TRIM).",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Citrate-Induced Hypocalcemia: Trisodium citrate anticoagulant in blood products chelates ionized calcium (iCa < 0.9 mmol/L), impairing cardiac contractility and worsening coagulopathy; mandates prophylactic 1 g IV Calcium Gluconate / Chloride for every 2–3 units of blood products.",
            "Hyperkalemia: Extracellular potassium in stored PRBC units reaches 30–50 mEq/L due to progressive red cell lysis; rapid rapid-infusion can trigger fatal ventricular fibrillation and asystole.",
            "Severe Hypothermia: Transfusion of refrigerated (4°C) blood products rapidly drops core body temperature, paralyzing coagulation cascade enzymes (clotting factor activity drops 10% per 1°C decrease in temperature); mandates rapid high-flow fluid warmers.",
            "Transfusion-Related Immunomodulation (TRIM): Transfusion-induced immunosuppression increasing nosocomial infection rates, multi-organ dysfunction, and tumor recurrence.",
          ],
        },
      ],
    },
    {
      id: "transfusion.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in blood product administration.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transfusing PRBCs for hemoglobin 7.0–9.0 g/dL in a stable, non-bleeding ICU patient: Increases hospital mortality, nosocomial infections, and TRALI without improving oxygen delivery.",
            "Transfusing FFP for mild asymptomatic elevations of INR (1.3–1.8): FFP itself has an INR of ~1.3; administering plasma fails to correct the INR and causes dangerous volume overload.",
            "Administering Platelets in Heparin-Induced Thrombocytopenia (HIT) or TTP: Platelets act as 'fuel on the fire', causing widespread microvascular thrombosis and limb gangrene.",
            "Treating TRALI with aggressive loop diuretics: TRALI is capillary leak, not volume overload; diuretics induce profound hypovolemic shock in TRALI patients.",
            "Failing to administer IV calcium during massive transfusion: Citrate rapidly depresses ionized calcium, rendering the coagulation cascade dysfunctional.",
          ],
        },
      ],
    },
    {
      id: "transfusion.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Age of transfused blood products (standard issue vs fresh blood) and whole blood in trauma.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Age of Transfused Red Blood Cells (ABLE and TRANSFUSE Trials): While laboratory studies show stored red cells develop biochemical 'storage lesions' (depletion of 2,3-DPG and ATP, membrane deformability loss), large multicenter randomized trials (ABLE in ICU patients, TRANSFUSE in critically ill adults) demonstrated that transfusing freshest available RBCs (< 7–10 days old) provided zero clinical or survival advantage over standard-issue stored blood (average 21–28 days old).",
        },
        {
          type: "paragraph",
          text: "Low-Titer Group O Whole Blood (LTOWB) vs Component Therapy: Whole blood resuscitation in hemorrhagic shock preserves balanced physiological ratios with lower citrate preservative volumes. Ongoing large-scale trauma trials evaluate LTOWB vs 1:1:1 component therapy.",
        },
      ],
    },
  ],
};
