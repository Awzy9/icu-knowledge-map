import type { ClinicalProblem } from "@/content-types";

export const acuteBleedingFallingHemoglobin: ClinicalProblem = {
  id: "acute-bleeding-falling-hemoglobin",
  slug: "acute-bleeding-falling-hemoglobin",
  title: "Acute Bleeding & Falling Hemoglobin",
  category: "hematology-gi",
  oneLiner: "Bedside triage of acute blood loss: active hemorrhage vs occult bleeding vs hemodilution, restrictive transfusion thresholds (Hb 7.0 g/dL), Massive Transfusion Protocol (MTP 1:1:1), and anticoagulant reversal.",
  relatedTopicIds: [
      "bleeding",
      "transfusion",
      "upper-gi-bleeding",
      "lower-gi-bleeding",
      "dic",
      "anticoagulation",
      "shock",
      "aki"
    ],
  body: [
    {
      type: "paragraph",
      text: "An acute drop in hemoglobin (Hb drop ≥ 2.0 g/dL in 24 hours) or overt clinical bleeding in the ICU requires immediate triage across three critical domains: (1) Hemodynamic stability and tissue perfusion; (2) Distinguishing active hemorrhage from occult bleeding, hemodilution, or acute hemolysis; and (3) Rapid identification of the bleeding source, coagulation status, and anticoagulant reversal.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Exsanguinating Upper GI Bleeding (ruptured esophageal varices / bleeding peptic ulcer), Massive Retroperitoneal Hematoma (especially post-femoral arterial/venous catheterization or pelvic trauma; can hold 2–3 liters of blood with zero external signs), Intra-Abdominal Hemorrhage, and Trauma-Induced / Sepsis-Induced DIC.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & INITIAL SAFETY SCREEN",
          value: "• Overt Bleeding Signs: Hematemesis, melena, bright red blood per rectum (hematochezia), hemoptysis, surgical drain bleeding (> 100–200 mL/hr), spontaneous oozing from line sites or venipunctures.\n• Occult Bleeding Clues: Unexplained tachycardia, acute hypotension, increasing vasopressor requirements, rising serum lactate, abdominal distension / rising intra-abdominal pressure, flank ecchymosis (Grey Turner sign), periumbilical ecchymosis (Cullen sign).\n• Hemodilution vs True Loss: Massive crystalloid fluid administration drops hemoglobin purely by hemodilution without tissue hypoxia; true acute hemorrhage is accompanied by tachycardia, narrowing pulse pressure, and elevated shock index (HR / SBP > 0.9–1.0).",
        },
        {
          label: "2. MASSIVE TRANSFUSION PROTOCOL (MTP) VS RESTRICTIVE TRANSFUSION",
          value: "• Massive Hemorrhage (> 150 mL/min blood loss or transfusion of ≥ 4 PRBCs in 1 hour with ongoing shock):\n  - Activate Massive Transfusion Protocol (MTP) immediately.\n  - Balanced 1:1:1 Hemostatic Resuscitation: Transfuse Packed Red Blood Cells (PRBCs), Fresh Frozen Plasma (FFP), and Platelets in a strict 1:1:1 ratio (PROPPR trial) to prevent dilutional coagulopathy.\n  - Fibrinogen Repletion: Transfuse Cryoprecipitate (10–20 units) or Fibrinogen Concentrate (2–4 g) to maintain Fibrinogen strictly > 150–200 mg/dL.\n  - Calcium Replacement: Check ionized calcium after every 2–4 units of blood; infuse IV Calcium Chloride (1 g) to treat citrate-induced hypocalcemia (maintain iCa2+ > 1.15 mmol/L; calcium is essential for coagulation factor complexes).\n  - Prevent the Lethal Triad: Active warming (core temp > 36.0°C), reverse acidemia (pH > 7.25), and correct hypocalcemia.\n• Non-Massive / Stable Anemia (TRICC & TRISS Trials):\n  - Restrictive Transfusion Threshold: Transfuse PRBCs strictly when Hemoglobin < 7.0 g/dL (target Hb 7.0–8.0 g/dL; 1 unit PRBC raises Hb by ~1.0 g/dL).\n  - Exception (Acute Coronary Syndrome): Maintain Hb > 8.0 g/dL (MINT trial).",
        },
        {
          label: "3. TARGETED DIFFERENTIAL BY BLEEDING SITE",
          value: "• Gastrointestinal Bleeding: Upper GI (peptic ulcer, esophageal/gastric varices, Dieulafoy lesion, Mallory-Weiss tear); Lower GI (diverticulosis, angiodysplasia, ischemic colitis, post-polypectomy).\n• Retroperitoneal & Pelvic: Post-femoral vascular access cannulation, spontaneous retroperitoneal hemorrhage in anticoagulated patients, pelvic ring fractures.\n• Surgical & Thoracic: Anastomotic disruption, surgical bed bleeding, hemothorax, mediastinal hemorrhage post-cardiac surgery.\n• Intracranial: Hemorrhagic stroke, traumatic subdural/epidural hematoma.\n• Diffuse Microvascular / Consumptive: Disseminated Intravascular Coagulation (DIC), hypofibrinogenemia, severe thrombocytopenia.",
        },
        {
          label: "4. EMERGENCY ANTICOAGULANT REVERSAL PROTOCOLS",
          value: "• Unfractionated Heparin (UFH): IV Protamine Sulfate (1 mg per 100 Units heparin given in the last 2 hours; max 50 mg IV over 10 min).\n• Low Molecular Weight Heparin (Enoxaparin): IV Protamine Sulfate (1 mg per 1 mg enoxaparin given in last 8 hours).\n• Warfarin (VKA): 4-Factor Prothrombin Complex Concentrate (4F-PCC [Kcentra] 25–50 U/kg based on INR) + IV Vitamin K1 10 mg IV over 30 min (reverses INR in < 15 minutes).\n• Dabigatran (Direct Thrombin Inhibitor): Idarucizumab (Praxbind) 5.0 g IV (two 2.5 g vials bolus).\n• Direct Factor Xa Inhibitors (Apixaban / Rivaroxaban): Andexanet alfa (Andexxa) bolus + infusion OR 4F-PCC (50 U/kg IV).",
        },
        {
          label: "5. DEFINITIVE EMERGENCY SOURCE CONTROL",
          value: "• Urgent Endoscopy: Esophagogastroduodenoscopy (EGD) within 12–24 hours for upper GI bleeding (IV Erythromycin 250 mg 30–60 min prior; dual endoscopic therapy with hemoclips + epinephrine / thermal coagulation).\n• Interventional Radiology (IR): Transcatheter Angiography and Embolization for active arterial extravasation in retroperitoneal, pelvic, mesenteric, or non-variceal GI bleeds.\n• Emergent Exploratory Laparotomy / Surgical Hemostasis: For refractory surgical bed hemorrhage or intra-abdominal bleeding with abdominal compartment syndrome.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Relying on initial hemoglobin/hematocrit levels to judge the severity of acute massive hemorrhage. In sudden acute exsanguination, whole blood is lost equally; hemodilution occurs only after hours of fluid shifts or crystalloid resuscitation. A patient bleeding to death can have an initial hemoglobin of 14.0 g/dL; vital signs, shock index, and clinical blood loss must guide transfusion.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Transfusion: TRICC trial, restrictive thresholds, massive transfusion protocols, and TRALI/TACO risks.\n• Upper GI Bleed: Glasgow-Blatchford score, variceal banding, octreotide, and endoscopic techniques.\n• DIC: Consumptive coagulopathy, ISTH scoring, and cryoprecipitate repletion.\n• Anticoagulation: Direct oral anticoagulant reversal agents and laboratory assays.\n• Shock: Hemorrhagic shock physiology and resuscitation endpoints.\n• Intra-Abdominal Hypertension: Abdominal compartment syndrome in massive transfusion.",
        },
      ],
    },
  ],
};
