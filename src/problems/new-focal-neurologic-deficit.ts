import type { ClinicalProblem } from "@/content-types";

export const newFocalNeurologicDeficit: ClinicalProblem = {
  id: "new-focal-neurologic-deficit",
  slug: "new-focal-neurologic-deficit",
  title: "New Focal Neurologic Deficit in the ICU",
  category: "neurologic",
  oneLiner: "Rapid code-stroke protocol in critical illness: emergent non-contrast CT and CTA, distinguishing acute ischemic stroke (LVO candidate) from intracranial hemorrhage, and managing post-procedural neurological loss.",
  relatedTopicIds: [
    "acute-ischemic-stroke",
    "intracranial-hemorrhage",
    "intracranial-hypertension",
    "altered-consciousness",
    "anticoagulation",
    "arrhythmias",
  ],
  body: [
    {
      type: "paragraph",
      text: "The acute development of a new focal neurologic deficit (unilateral hemiparesis, facial droop, acute aphasia, visual field cut, gaze preference, or pupillary asymmetry) in an ICU patient mandates an immediate 'Code Stroke' response. In critically ill patients, acute deficits can result from large vessel ischemic stroke (embolic or hypoperfusion), acute intracranial hemorrhage, intracranial mass effect/herniation, or metabolic mimics.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute Large Vessel Occlusion (LVO) Ischemic Stroke (treatable with endovascular thrombectomy up to 24 hours), Acute Intracerebral Hemorrhage / Hematoma Expansion (requiring urgent anticoagulant reversal and SBP control), and Expanding Mass / Uncal Herniation (unilateral dilated pupil).",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. IMMEDIATE 5-MINUTE BEDSIDE TRIAGE",
          value: "• Fingerstick Blood Glucose: Rule out hypoglycemia (mimics acute focal hemiparesis/aphasia; treat with D50W).\n• Focused Neurologic Exam (NIHSS / BE-FAST):\n  - Cranial Nerves: Pupil reactivity and symmetry, visual fields, facial symmetry, gaze deviation (eyes look toward cortical stroke, away from seizure focus).\n  - Motor & Sensory: Hemiparesis, pronator drift, localization to noxious stimuli.\n  - Language: Expressive or receptive aphasia, dysarthria.\n• Establish 'Last Known Well' (LKW) Time: Review nursing records, sedation holds, and physician notes.",
        },
        {
          label: "2. DIFFERENTIAL DIAGNOSIS",
          value: "• Acute Ischemic Stroke (AIS):\n  - Cardioembolic: New-onset AF, mural thrombus, infective endocarditis.\n  - Large Vessel Atherothrombosis / Carotid Dissection.\n  - Watershed / Low-Flow Infarction: Severe hypoperfusion during shock/cardiac arrest.\n• Acute Intracranial Hemorrhage (ICH):\n  - Spontaneous hypertensive ICH, anticoagulation-related hemorrhage, hemorrhagic transformation of ischemic stroke, ruptured cerebral aneurysm (SAH).\n• Structural Non-Vascular: Acute subdural/epidural hematoma, expanding brain tumor/abscess with uncal herniation.\n• Stroke Mimics: Todd's postictal paresis (following unwitnessed seizure), severe hypoglycemia, complex migraine, severe septic encephalopathy with unmasking of old stroke deficits.",
        },
        {
          label: "3. EMERGENCY NEUROIMAGING WORKUP",
          value: "• Emergent Non-Contrast Head CT (NCCT): Instantly rules in/out acute intracranial hemorrhage, hyperdense vessel sign, and early ischemic changes (loss of gray-white differentiation, sulcal effacement, ASPECTS score).\n• CT Angiography (CTA) from Arch to Vertex: Mandatory to detect treatable Large Vessel Occlusions (ICA, MCA M1/M2, Basilar artery) for mechanical thrombectomy.\n• CT Perfusion (CTP) / MRI Brain: Evaluates ischemic core volume vs salvageable ischemic penumbra in extended time windows (6–24 hours).",
        },
        {
          label: "4. TIME-CRITICAL ACUTE INTERVENTIONS",
          value: "• If Ischemic Stroke (LVO on CTA):\n  - Endovascular Thrombectomy (EVT): Activate interventional neuroradiology immediately (proven benefit up to 24h in anterior circulation LVO with favorable penumbra).\n  - IV Thrombolysis (Tenecteplase 0.25 mg/kg or Alteplase 0.9 mg/kg): Screen for absolute ICU contraindications (active internal bleeding, recent surgery within 14d, severe coagulopathy/anticoagulation, intracranial hemorrhage).\n• If Intracranial Hemorrhage (ICH):\n  - Emergency Anticoagulant Reversal: 4F-PCC (for warfarin or DOACs) + Vitamin K; Idarucizumab (for dabigatran); Andexanet alfa (for factor Xa inhibitors); Protamine (for heparin).\n  - Blood Pressure Target: Smoothly lower SBP to 130–140 mmHg with IV Nicardipine or Clevidipine.\n  - Neurosurgical Consultation: Evaluate for emergent hematoma evacuation or EVD placement.",
        },
        {
          label: "5. REASSESSMENT & NEURO-INTENSIVE MONITORING",
          value: "• Post-Intervention Neurologic Checks: Repeat NIHSS every 15–30 minutes for the first 2–4 hours.\n• Hemodynamic Goals: Defend cerebral perfusion pressure (CPP); maintain euvolemia, normothermia (T < 37.5°C), and euglycemia (140–180 mg/dL).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Delaying neurovascular imaging (CTA) because 'the patient is outside the 4.5-hour thrombolysis window'. Mechanical thrombectomy is effective up to 24 hours for anterior circulation LVO and up to 24–48 hours for basilar artery occlusion. Always obtain a CTA.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Ischemic Stroke: Reperfusion eligibility, thrombectomy trials (DAWN/DEFUSE-3), and permissive hypertension.\n• Intracranial Hemorrhage: Hematoma expansion kinetics, reversal agents, and surgical decompression.\n• Intracranial Hypertension: ICP monitoring, hyperosmolar therapy (mannitol/hypertonic saline), and CPP targets.\n• Anticoagulation: Coagulation assay interpretation and reversal protocols.\n• Arrhythmias: Cardioembolic risk stratification and new-onset atrial fibrillation.",
        },
      ],
    },
  ],
};
