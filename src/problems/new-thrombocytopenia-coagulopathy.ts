import type { ClinicalProblem } from "@/content-types";

export const newThrombocytopeniaCoagulopathy: ClinicalProblem = {
  id: "new-thrombocytopenia-coagulopathy",
  slug: "new-thrombocytopenia-coagulopathy",
  title: "New Thrombocytopenia & Coagulopathy in the ICU",
  category: "hematology-gi",
  oneLiner: "Differential diagnosis of acute platelet drops and clotting derangements: 4T score for HIT, ISTH score for DIC, distinguishing TTP/aHUS (normal PT/fibrinogen, schistocytes), and targeted replacement therapy.",
  relatedTopicIds: [
    "dic",
    "hit",
    "transfusion",
    "anticoagulation",
    "sepsis",
    "aki",
  ],
  body: [
    {
      type: "paragraph",
      text: "New-onset thrombocytopenia (platelet count < 100,000/µL or acute drop > 50% from baseline) and coagulopathy (prolongation of PT/INR or aPTT, or hypofibrinogenemia) occur in over 30–50% of critically ill ICU patients. The bedside priority is to rapidly distinguish benign dilution/bone marrow suppression from catastrophic prothrombotic microangiopathies (HIT, TTP/HUS, DIC) where incorrect management—such as transfusing platelets in TTP or continuing heparin in HIT—causes fatal thrombosis.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Heparin-Induced Thrombocytopenia (HIT with limb/organ thrombosis), Thrombotic Thrombocytopenic Purpura (TTP: emergent plasma exchange required; platelet transfusions contraindicated), Sepsis-Induced Disseminated Intravascular Coagulation (DIC), and Acute Catastrophic Hemorrhage.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & INITIAL SAFETY SCREEN",
          value: "• Screen for Pseudothrombocytopenia: Draw blood in a Citrate or Heparin tube; review peripheral blood smear to exclude EDTA-dependent platelet clumping.\n• Bleeding Screen: Mucosal bleeding, purpura, petechiae, spontaneous bleeding from vascular puncture sites.\n• Thrombosis Screen: Inspect for new DVT, acute arterial limb ischemia, purpura fulminans, skin necrosis at heparin injection sites, or acute stroke.",
        },
        {
          label: "2. THE 4 CARDINAL CONSUMPTIVE / PROTHROMBOTIC SYNDROMES",
          value: "• 1. Disseminated Intravascular Coagulation (DIC):\n  - Labs: Platelets < 50k, prolonged PT/INR and aPTT, low Fibrinogen (< 100–150 mg/dL), markedly elevated D-Dimer (> 7x ULN).\n  - Mechanism: Tissue factor thrombin burst consuming platelets AND clotting factors.\n  - Management: Eradicate underlying cause (sepsis, obstetric crisis, trauma) + targeted blood components for active bleeding.\n• 2. Thrombotic Thrombocytopenic Purpura (TTP):\n  - Labs: Profound thrombocytopenia (< 20k), NORMAL PT/INR and NORMAL Fibrinogen, marked microangiopathic hemolytic anemia (MAHA) with prominent schistocytes (> 1% on smear), elevated LDH, decreased haptoglobin.\n  - Mechanism: Severe deficiency of ADAMTS13 (< 10%) producing ultra-large vWF multimers.\n  - Emergency Therapy: Immediate Therapeutic Plasma Exchange (TPE) + Caplacizumab (anti-vWF nanobody) + Corticosteroids. (PLATELET TRANSFUSIONS ARE CONTRAINDICATED; they fuel microvascular thrombosis).\n• 3. Heparin-Induced Thrombocytopenia (HIT):\n  - Labs: Platelet drop > 50% (typically 5–10 days post-heparin exposure, or < 24h if recent exposure), NORMAL PT/INR and NORMAL Fibrinogen.\n  - 4T Score: Calculate 4T score (Thrombocytopenia, Timing, Thrombosis, oTher causes).\n  - Emergency Therapy: IMMEDIATELY STOP ALL HEPARIN (including flushes) -> initiate non-heparin direct thrombin inhibitor (Argatroban or Bivalirudin).\n• 4. Hemolytic Uremic Syndrome (STEC-HUS / aHUS):\n  - Labs: Thrombocytopenia, prominent schistocytes, acute anuric renal failure, normal coagulation factors; complement-mediated aHUS treated with C5 inhibitors (Eculizumab/Ravulizumab).",
        },
        {
          label: "3. TARGETED BEDSIDE INVESTIGATIONS",
          value: "• Peripheral Blood Smear: Examine for schistocytes (helmet cells; confirms microangiopathic hemolytic anemia [TTP/HUS/DIC]).\n• Coagulation Profile: PT/INR, aPTT, Fibrinogen level, and D-Dimer / FDP.\n• Hemolysis Panel: Serum LDH, total and indirect bilirubin, haptoglobin, reticulocyte count, direct antiglobulin (Coombs) test.\n• Specific Assays: ADAMTS13 activity level and inhibitor (draw PRIOR to first plasma exchange in suspected TTP); Anti-PF4/Heparin ELISA antibodies and serotonin release assay (SRA) for suspected HIT.",
        },
        {
          label: "4. EVIDENCE-BASED TRANSFUSION PROTOCOL",
          value: "• Platelet Transfusion Thresholds:\n  - In Non-Bleeding Patients: Transfuse ONLY for profound thrombocytopenia (Platelets < 10,000/µL; or < 20,000/µL if high fever/sepsis).\n  - In Minor Procedures (Central line placement, paracentesis): Platelets > 20,000–50,000/µL.\n  - In Active Bleeding / Major Surgery: Maintain Platelets > 50,000/µL (or > 100,000/µL in intracranial hemorrhage or neurosurgery).\n  - Absolute Contraindications: Do NOT transfuse platelets in TTP or HIT unless life-threatening bleeding is occurring.\n• Fibrinogen Repletion: Transfuse Cryoprecipitate (10–20 units) or Fibrinogen Concentrate (2–4 g) to maintain Fibrinogen > 150 mg/dL (1.5 g/L) in active bleeding.",
        },
        {
          label: "5. REASSESSMENT & ANTICOAGULATION MANAGEMENT",
          value: "• Daily Coagulation & CBC Tracking: Monitor platelet trajectory daily; in HIT, continue non-heparin anticoagulation until platelets recover > 150,000/µL before transitioning to oral anticoagulants.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Transfusing platelets to a patient with Thrombotic Thrombocytopenic Purpura (TTP) because the platelet count is 12,000/µL. In TTP, infused platelets bind to ultra-large vWF multimers, precipitating catastrophic microvascular thrombosis, acute myocardial infarction, stroke, and death. Never transfuse platelets in TTP unless catastrophic life-threatening hemorrhage is present.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• DIC: ISTH scoring, fibrinolytic phenotypes, and targeted replacement.\n• HIT: 4T score calculation, PF4 antibodies, and argatroban dosing.\n• Transfusion: Restrictive triggers, component therapy, and platelet refractoriness.\n• Anticoagulation: Non-heparin anticoagulation and reversal strategies.\n• Sepsis: Sepsis-induced coagulopathy and endothelial dysfunction.\n• AKI: Uremic platelet dysfunction and thrombotic microangiopathy in renal failure.",
        },
      ],
    },
  ],
};
