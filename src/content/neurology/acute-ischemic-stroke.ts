import type { Topic } from "@/content-types";

export const acuteIschemicStroke: Topic = {
  id: "acute-ischemic-stroke",
  slug: "acute-ischemic-stroke",
  title: "Acute Ischemic Stroke",
  category: "neurology",
  oneLiner: "Core vs penumbra dynamics, ASPECTS & CT perfusion, Tenecteplase/Alteplase thrombolysis, DAWN/DEFUSE 3 extended thrombectomy, BP targets, and malignant MCA hemicraniectomy.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Acute Ischemic Stroke, Neurocritical Care, and Malignant Cerebral Edema",
    },
    {
      title: "2019 AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke",
      edition: "Stroke 2019;50(12):e344-e418",
    },
  ],
  currentStatus: "Current as of the 2019/2023 AHA/ASA Stroke Guidelines, the ESO 2021/2023 Guidelines on Tenecteplase and Thrombectomy, and the DAWN, DEFUSE 3, and ELAN trials.",
  otherReferences: [
    "Powers WJ, et al. 2019 Update to the 2018 Guidelines for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418.",
    "Nogueira RG, et al. Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct (DAWN trial). N Engl J Med. 2018;378(1):11-21.",
    "Albers GW, et al. Thrombectomy for Stroke at 6 to 16 Hours with Selection by Perfusion Imaging (DEFUSE 3 trial). N Engl J Med. 2018;378(8):708-718.",
    "Fischer U, et al. Early versus Later Anticoagulation for Stroke with Atrial Fibrillation (ELAN trial). N Engl J Med. 2023;388(26):2411-2421.",
    "Vahedi K, et al. Early decompressive surgery in malignant middle cerebral artery infarction (DECIMAL trial). Lancet Neurol. 2007;6(3):215-222.",
  ],
  relationships: [
    { type: "complication", targetId: "intracranial-hypertension", label: "Malignant MCA cerebral edema and herniation syndromes" },
    { type: "differential", targetId: "altered-consciousness", label: "Coma, stroke mimics, basilar artery occlusion, and encephalopathy" },
    { type: "prerequisite", targetId: "anticoagulation", label: "Post-stroke antithrombotic timing and hemorrhagic transformation risks" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Airway protection and neuroprotective ventilation targets" },
  ],
  sections: [
    {
      id: "acute-ischemic-stroke.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ais-guideline-aha-asa-2019",
          relevance: "AHA/ASA guidelines for early management of acute ischemic stroke and mechanical thrombectomy"
        },
        {
          kind: "trial",
          id: "ais-dawn-trial",
          relevance: "DAWN landmark trial establishing mechanical thrombectomy benefit up to 24 hours in clinical-core mismatch"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Acute Ischemic Stroke (AIS) is the sudden disruption of regional cerebral blood flow caused by arterial thrombosis or embolism, generating an irreversible ischemic core surrounded by an electrophysiologically silent but metabolically salvageable ischemic penumbra.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Acute Ischemic Stroke (AIS) accounts for ~85% of all strokes and is a primary cause of adult disability and mortality. In the neurocritical care unit, management focuses on immediate vessel recanalization (intravenous thrombolysis and endovascular mechanical thrombectomy), penumbral salvage via tight blood pressure control, airway protection, and early recognition and surgical decompression of malignant cerebral edema.",
        },
        {
          type: "paragraph",
          text: "The clinical priority is rapid triage: (1) Immediate non-contrast head CT and CTA; (2) Rapid administration of IV Tenecteplase or Alteplase within 4.5 hours of last known well; (3) Immediate Endovascular Thrombectomy (EVT) for Large Vessel Occlusion (LVO) within 0–6 hours (or 6–24 hours with perfusion mismatch); (4) Strict hemodynamic management; and (5) Early decompressive hemicraniectomy for malignant MCA infarction.",
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.physiology",
      kind: "physiology",
      title: "Pathophysiology: Ischemic Core, Penumbra & Malignant Edema",
      summary: "Cerebral blood flow thresholds, excitotoxic cell death, microvascular thrombosis, and cytotoxic vs vasogenic cerebral edema.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The biophysical and cellular mechanisms of cerebral ischemia:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Cerebral Blood Flow (CBF) Thresholds",
              value: "• Normal Resting CBF: 50–60 mL/100g brain tissue/min.\n• Ischemic Penumbra (CBF 12–22 mL/100g/min): Synaptic transmission halts (electrical failure leading to acute clinical deficit), but cellular ATP generation is partially maintained by leptomeningeal collateral vessels. This tissue is salvageable if reperfused promptly.\n• Ischemic Core (CBF < 10–12 mL/100g/min): Terminal energy failure, Na+/K+-ATPase failure, massive intracellular calcium influx, glutamate excitotoxicity, mitochondrial collapse, and irreversible cellular necrosis occurring within minutes.",
            },
            {
              label: "2. The Collateral Circulation & Penumbral Decay",
              value: "The duration of penumbral survival depends heavily on native collateral vessels (Circle of Willis and pial-leptomeningeal anastomoses). Collateral perfusion is exquisitely pressure-dependent; systemic hypotension (e.g. from overzealous antihypertensive therapy) collapses collateral flow, converting the penumbra into irreversible infarcted core.",
            },
            {
              label: "3. Malignant Edema & Blood-Brain Barrier (BBB) Breakdown",
              value: "Within hours, cellular energy depletion causes cytotoxic edema (astrocytic swelling). By 24–48 hours, endothelial degradation and upregulation of matrix metalloproteinases (MMP-9) compromise the BBB, leading to severe vasogenic edema. Edema peaks on Days 2 to 5, generating severe mass effect, midline shift, and fatal transtentorial uncal or central brain herniation in large MCA/ICA infarctions.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: NIHSS, Multimodal CT & Perfusion Mismatch",
      summary: "NIHSS scoring, non-contrast CT (ASPECTS score), CTA for Large Vessel Occlusion (LVO), and CT Perfusion (CTP) mismatch criteria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Comprehensive neurovascular and radiological workup:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. National Institutes of Health Stroke Scale (NIHSS)",
              value: "A 15-item quantitative neurological exam scoring 0–42 points:\n• 0: No stroke symptoms\n• 1–4: Minor stroke\n• 5–15: Moderate stroke\n• 16–20: Moderate to severe stroke\n• 21–42: Severe stroke.\n• Note: NIHSS ≥ 6 with acute cortical signs (gaze deviation, aphasia, neglect, hemiparesis) strongly indicates Large Vessel Occlusion (LVO).",
            },
            {
              label: "2. Non-Contrast Head CT (NCCT) & ASPECTS Score",
              value: "• Immediate goal: Exclude intracranial hemorrhage and evaluate early ischemic changes (loss of gray-white differentiation, insular ribbon sign, lentiform obscuration, sulcal effacement, dense MCA sign).\n• ASPECTS (Alberta Stroke Program Early CT Score): 10-point quantitative score assessing 10 distinct MCA regions. 1 point subtracted for each area of hypodensity. ASPECTS ≥ 6 indicates limited core and favorable EVT eligibility; ASPECTS 0–5 indicates extensive core infarction.",
            },
            {
              label: "3. CT Angiography (CTA Head & Neck)",
              value: "Identifies Large Vessel Occlusion (LVO) in the intracranial ICA, MCA (M1 or proximal M2 segments), Anterior Cerebral Artery (A1), or Basilar Artery, while evaluating cervical carotid dissection, atherosclerotic stenosis, and collateral vascular score.",
            },
            {
              label: "4. CT Perfusion (CTP) Automated Mismatch Mapping",
              value: "• Ischemic Core: Defined by regional CBF (rCBF) < 30% of normal contralateral tissue.\n• Hypoperfused Tissue (Core + Penumbra): Defined by Time-to-Maximum (Tmax) > 6.0 seconds.\n• Target Mismatch Criteria (DEFUSE 3 / DAWN): Mismatch ratio (hypoperfused volume / core volume) ≥ 1.8 with absolute mismatch volume ≥ 15 mL and core volume < 70 mL.",
            },
            {
              label: "5. Stroke Mimics to Exclude Immediately",
              value: "Hypoglycemia (mandatory point-of-care glucose before lytics!), post-ictal Todd's paralysis, hemiplegic migraine, conversion disorder, acute Wernicke encephalopathy, and focal encephalitis.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Focal Neurological Deficits",
      summary: "Differentiate acute ischemic stroke from intracranial hemorrhage, post-ictal Todd's paralysis, and metabolic stroke mimics.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Intracranial Hemorrhage (ICH): Differentiated definitively by non-contrast head CT; clinical features of severe headache, vomiting, and rapid GCS decline favor ICH.",
          "Todd's Post-Ictal Paresis: Transient focal weakness following unwitnessed focal motor seizure; non-contrast CT and CTA are normal; EEG shows post-ictal slowing or epileptiform spikes.",
          "Hypoglycemia Stroke Mimic: Neuroglycopenia mimicking acute focal hemiparesis or aphasia; immediately ruled out by fingerstick glucose.",
          "Complex Hemiplegic Migraine / Functional Neurological Disorder: Normal CTA/CTP and diffusion-weighted MRI (DWI)."
]
        }
      ]
    },
    {
      id: "acute-ischemic-stroke.management",
      kind: "management",
      title: "Stepped Reperfusion & Critical Care Management",
      summary: "Tenecteplase/Alteplase protocols, mechanical thrombectomy (0–6h and 6–24h), blood pressure targets, and DAPT.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped reperfusion and intensive care protocols:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Intravenous Thrombolysis (0–4.5 Hours Window)",
              value: "• Tenecteplase (TNK): 0.25 mg/kg IV single bolus over 5–10 seconds (max 25 mg). Preferred over Alteplase in modern practice due to higher fibrin specificity, greater reperfusion rates in LVO, and immediate single-bolus administration.\n• Alteplase (tPA): 0.9 mg/kg IV (max 90 mg); 10% administered as a 1-minute IV bolus, remaining 90% infused over 60 minutes.\n• Extended Window (4.5–9 Hours or Wake-Up Stroke per EXTEND trial): Indicated in patients with significant CTP core-penumbra mismatch or MRI DWI-FLAIR mismatch.\n• Critical Contraindications: Active internal bleeding, SBP > 185 or DBP > 110 despite antihypertensive therapy, therapeutic anticoagulation (DOAC intake within 48h or INR > 1.7), platelet count < 100,000/uL, intracranial hemorrhage history, major surgery within 14 days, or infective endocarditis.",
            },
            {
              label: "2. Endovascular Mechanical Thrombectomy (EVT)",
              value: "• Standard Window (0–6 Hours per HERMES Meta-Analysis): Stent retriever and/or contact aspiration thrombectomy for confirmed LVO (ICA, MCA M1) with NIHSS ≥ 6 and ASPECTS ≥ 6.\n• Extended Window (6–24 Hours per DAWN & DEFUSE 3 Trials): Mandatory for patients with LVO who meet clinical-core mismatch (DAWN: age-stratified NIHSS vs CTP core volume) or perfusion-core mismatch (DEFUSE 3: core < 70 mL, mismatch ratio ≥ 1.8) up to 24 hours from last known normal.",
            },
            {
              label: "3. Blood Pressure Management Protocol",
              value: "• If Receiving IV Thrombolysis: Maintain BP strictly < 185/110 mmHg BEFORE initiating lytics, and maintain BP < 180/105 mmHg for at least 24 hours post-lysis (IV Nicardipine 5–15 mg/hr, Clevidipine 1–2 mg/hr, or Labetalol 10–20 mg IV boluses).\n• If NOT Receiving Thrombolysis/EVT: Permissive hypertension up to 220/120 mmHg for the first 24–48 hours to sustain penumbral collateral blood flow; treat ONLY if SBP > 220 or DBP > 120 mmHg (or in concurrent acute MI, aortic dissection, or severe heart failure).\n• Post-EVT Target: If successful reperfusion (TICI 2b/3) achieved, maintain SBP < 140–160 mmHg to prevent reperfusion injury and hemorrhagic transformation. Avoid SBP < 120–130 mmHg.",
            },
            {
              label: "4. Antiplatelet & Anticoagulation Timing",
              value: "• Minor Stroke (NIHSS ≤ 3) or High-Risk TIA (ABCD2 ≥ 4): Dual Antiplatelet Therapy (DAPT: Aspirin 300 mg loading + 81 mg daily PLUS Clopidogrel 300 mg loading + 75 mg daily) initiated within 24 hours and continued for exactly 21 days (POINT and CHANCE trials; reduces recurrent ischemic stroke without increasing major bleeding).\n• If IV Thrombolysis Given: Withhold all antiplatelets and anticoagulants for 24 hours until follow-up CT confirms absence of intracranial hemorrhage.\n• Atrial Fibrillation / Cardioembolic Stroke: The ELAN trial (NEJM 2023) established that early DOAC initiation (within 48h for minor stroke, day 6–7 for moderate stroke, day 12–14 for large stroke) is safe and reduces recurrent ischemic events without increasing symptomatic intracranial hemorrhage.",
            },
          ],
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.complications",
      kind: "complications",
      title: "Malignant MCA Infarction & ICU Complications",
      summary: "Decompressive hemicraniectomy indications, hemorrhagic transformation, neurogenic dysphagia, and post-stroke fever/hyperglycemia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Malignant Middle Cerebral Artery (MCA) Infarction: Massive cerebral edema involving > 50% of the MCA territory (often with ICA occlusion) causing midline shift, lethargy, pupillary asymmetry, and fatal uncal herniation (70–80% mortality with medical therapy alone). Early Decompressive Hemicraniectomy (large bone flap ≥ 12 cm with duraplasty within 48 hours of onset in patients ≤ 60 years per DECIMAL, DESTINY, and HAMLET trials) reduces mortality from 71% to 22% and increases favorable functional survival.",
            "Hemorrhagic Transformation: Graded as Hemorrhagic Infarction (HI1/HI2: petechial bleeding without mass effect; continue antiplatelets) vs Parenchymal Hematoma (PH1/PH2: dense hematoma with mass effect causing clinical deterioration; stop antithrombotics, treat as intracranial hemorrhage).",
            "Neurogenic Dysphagia & Aspiration Pneumonia: Aspiration occurs in > 30% of acute strokes; maintain strict NPO until formal bedside swallow screen is passed.",
            "Post-Stroke Hyperthermia & Hyperglycemia: Temperature > 37.5°C and blood glucose > 180 mg/dL independently accelerate ischemic neuronal apoptosis; aggressively treat fever with scheduled acetaminophen/cooling and maintain blood glucose 140–180 mg/dL with IV insulin.",
          ],
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical errors in the acute management of ischemic stroke.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acutely lowering blood pressure in non-thrombolysis patients with SBP < 220 mmHg: Abrupt BP drops precipitate penumbral collapse and massive infarct expansion; maintain permissive hypertension.",
            "Dismissing patients outside the rigid 4.5-hour window without ordering CTA/CTP: Mechanical thrombectomy is highly effective up to 24 hours in patients selected by perfusion imaging (DAWN/DEFUSE 3 trials); always obtain CTA/CTP.",
            "Administering antiplatelets or heparin within 24 hours of IV thrombolysis: Increases symptomatic intracerebral hemorrhage risk; always obtain a 24-hour post-lysis NCCT before starting antiplatelets.",
            "Delaying surgical consultation for Decompressive Hemicraniectomy until pupil dilation occurs: Pupillary dilation indicates irreversible uncal herniation; perform hemicraniectomy within 24–48 hours based on early CT hypodensity and progressive somnolence.",
            "Administering hypotonic IV fluids (e.g. 0.45% Saline or D5W): Low serum osmolarity exacerbates cerebral edema and accelerates herniation; use isotonic Normal Saline or Plasmalyte.",
          ],
        },
      ],
    },
    {
      id: "acute-ischemic-stroke.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Thrombectomy in large ischemic core (ASPECTS < 6) and Bridging Thrombolysis before EVT.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Mechanical Thrombectomy in Large Ischemic Core (Low ASPECTS 0–5): Landmark trials (RESCUE-JAPAN LIMIT, SELECT2, ANGEL-ASPECT, and TENSION) published between 2022 and 2024 proved that EVT is superior to medical therapy alone even in patients with large core infarcts (ASPECTS 3–5 or core volume ≥ 50 mL), resulting in improved functional independence without excessive symptomatic intracranial hemorrhage.",
        },
        {
          type: "paragraph",
          text: "Direct Thrombectomy vs Bridging Thrombolysis (IV tPA/TNK + EVT): Multiple randomized trials (DIRECT-MT, MR CLEAN-NO IV, SWIFT DIRECT) showed that direct EVT without prior IV thrombolysis achieved non-inferior functional outcomes in patients presenting directly to thrombectomy-capable centers. However, IV thrombolysis remains the standard of care for eligible patients presenting to non-thrombectomy centers prior to transfer.",
        },
      ],
    },
  ],
};
