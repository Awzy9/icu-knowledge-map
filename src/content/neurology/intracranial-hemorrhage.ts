import type { Topic } from "@/content-types";

export const intracranialHemorrhage: Topic = {
  id: "intracranial-hemorrhage",
  slug: "intracranial-hemorrhage",
  title: "Intracranial Hemorrhage: ICH & SAH",
  category: "neurology",
  oneLiner: "Spontaneous ICH vs Aneurysmal SAH, INTERACT-2/ATACH-2 blood pressure targets, emergency anticoagulant reversal, ENRICH minimally invasive evacuation, ISAT coiling, and Nimodipine for delayed cerebral ischemia.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Intracerebral Hemorrhage, Aneurysmal Subarachnoid Hemorrhage, and Neurocritical Care Hemostasis",
    },
    {
      title: "2022 AHA/ASA Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage",
      edition: "Stroke 2022;53(7):e282-e361",
    },
    {
      title: "2023 AHA/ASA Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage",
      edition: "Stroke 2023;54(7):e314-e370",
    },
  ],
  currentStatus: "Current as of the 2022 AHA/ASA ICH Guidelines, the 2023 AHA/ASA aSAH Guidelines, the ENRICH trial, and the ANNEXA-I and PATCH trials.",
  otherReferences: [
    "Greenberg SM, et al. 2022 AHA/ASA Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage. Stroke. 2022;53(7):e282-e361.",
    "Hoh BL, et al. 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke. 2023;54(7):e314-e370.",
    "Pradilla G, et al. Trial of Early Minimally Invasive Removal of Intracerebral Hemorrhage (ENRICH trial). N Engl J Med. 2024;390(14):1277-1289.",
    "Baharoglu MI, et al. Platelet transfusion versus standard care after acute stroke due to spontaneous cerebral haemorrhage associated with antiplatelet therapy (PATCH trial). Lancet. 2016;387(10038):2605-2613.",
    "Molyneux AJ, et al. International Subarachnoid Aneurysm Trial (ISAT) of neurosurgical clipping versus endovascular coiling. Lancet. 2005;366(9488):809-817.",
  ],
  relationships: [
    { type: "complication", targetId: "intracranial-hypertension", label: "Mass effect, hydrocephalus, and herniation management" },
    { type: "differential", targetId: "altered-consciousness", label: "Coma, sudden neurological collapse, and encephalopathy" },
    { type: "prerequisite", targetId: "anticoagulation", label: "Emergency anticoagulant reversal protocols (PCC, Idarucizumab, Andexanet)" },
    { type: "complication", targetId: "status-epilepticus", label: "Post-hemorrhagic cortical seizures and nonconvulsive status epilepticus" },
    { type: "related-to", targetId: "bleeding", label: "Coagulopathy correction and viscoelastic testing" },
  ],
  sections: [
    {
      id: "intracranial-hemorrhage.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "ich-guideline-aha-asa-2022",
          relevance: "AHA/ASA guideline on acute blood pressure management and anticoagulant reversal in ICH"
        },
        {
          kind: "trial",
          id: "ich-interact2-trial",
          relevance: "INTERACT-2 trial establishing safety and functional benefit of targeting SBP 130-140 mmHg in acute ICH"
        },
        {
          kind: "trial",
          id: "ich-patch-trial",
          relevance: "PATCH trial demonstrating platelet transfusion harm in antiplatelet-associated acute spontaneous ICH"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Intracranial Hemorrhage represents a critical neurovascular emergency encompassing Spontaneous Intracerebral Hemorrhage (ICH) and Aneurysmal Subarachnoid Hemorrhage (aSAH), each requiring distinct, disease-specific diagnostic and therapeutic protocols.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Nontraumatic Intracranial Hemorrhage is a high-mortality neurological emergency. While Spontaneous Intracerebral Hemorrhage (ICH, bleeding directly into the brain parenchyma) and Aneurysmal Subarachnoid Hemorrhage (aSAH, bleeding into the subarachnoid space from aneurysm rupture) share common neurocritical care principles (ICP management, airway protection, blood pressure control), their underlying pathophysiology, risk profiles, surgical indications, and secondary complications differ fundamentally.",
        },
        {
          type: "paragraph",
          text: "In the neuro-ICU, the primary management priorities are: (1) Rapid non-contrast head CT and CTA to differentiate ICH from aSAH and detect underlying vascular lesions; (2) Immediate blood pressure control tailored to the pathology; (3) Rapid reversal of anticoagulation; (4) Emergency neurosurgical intervention (external ventricular drain for hydrocephalus, aneurysm securing, or minimally invasive hematoma evacuation); and (5) Prevention of delayed cerebral ischemia (DCI) and secondary brain injury.",
        },
      ],
    },
    {
      id: "intracranial-hemorrhage.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Spontaneous Intracranial Hemorrhage",
      summary: "Differentiate hypertensive deep intraparenchymal hemorrhage from aneurysmal SAH, cerebral amyloid angiopathy, and hemorrhagic venous infarction.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Aneurysmal Subarachnoid Hemorrhage (SAH): 'Worst headache of life' with diffuse blood in basal cisterns and sylvian fissures; requires emergent CTA to identify ruptured berry aneurysm.",
          "Cerebral Amyloid Angiopathy (CAA): Lobar (cortical/subcortical) hemorrhages in elderly patients, sparing deep basal ganglia structures; associated with microbleeds on gradient-echo MRI.",
          "Cerebral Venous Sinus Thrombosis (CVST) with Hemorrhagic Infarction: Headache, seizures, bilateral parasagittal or temporal lobe hemorrhagic infarctions on CT/MR venography.",
          "Coagulopathy-Related Hemorrhage: Anticoagulant-associated bleeding (warfarin, DOACs) presenting with extensive hematoma expansion."
]
        }
      ]
    },
    {
      id: "intracranial-hemorrhage.ich",
      kind: "diagnosis",
      title: "Spontaneous Intracerebral Hemorrhage (ICH): Pathophysiology, Scoring & Management",
      summary: "Deep vs lobar hemorrhage, ICH score calculation, INTERACT-2/ATACH-2 blood pressure targets, emergency anticoagulant reversal, and the ENRICH trial.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Pathophysiological mechanisms, severity stratification, and medical management of spontaneous ICH:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Etiology & Pathophysiology",
              value: "• Deep Hypertensive Arteriolosclerosis (Lipohyalinosis): Involves small penetrating lenticulostriate and thalamoperforating vessels; localized to the basal ganglia (putamen 50%), thalamus (15%), pons (10%), and deep cerebellar nuclei.\n• Cerebral Amyloid Angiopathy (CAA): Deposition of beta-amyloid in cortical and leptomeningeal arteries; causes Lobar Hemorrhages (frontal, parietal, occipital, temporal) in elderly patients, frequently recurrent.\n• Hematoma Expansion: Occurs in 30–40% of patients within the first 6 hours; heralded by the CTA 'Spot Sign' (active contrast extravasation into the hematoma) and strongly predicts neurological deterioration and death.",
            },
            {
              label: "2. The ICH Score (Mortality Risk 0–6)",
              value: "• GCS Score: 3–4 (2 pts), 5–12 (1 pt), 13–15 (0 pts)\n• ICH Volume (ABC/2 formula): ≥ 30 mL (1 pt), < 30 mL (0 pts)\n• Intraventricular Hemorrhage (IVH): Present (1 pt), Absent (0 pts)\n• Infratentorial Origin (Pons/Cerebellum): Yes (1 pt), No (0 pts)\n• Age ≥ 80 Years: Yes (1 pt), No (0 pts)\n• 30-Day Mortality: Score 0 (0%), Score 1 (13%), Score 2 (26%), Score 3 (72%), Score 4 (97%), Score 5–6 (100%).",
            },
            {
              label: "3. Blood Pressure Management (INTERACT-2 & ATACH-2 Trials)",
              value: "• Target: Rapid, smooth lowering of SBP to target 130–140 mmHg within 2 hours of presentation using IV Nicardipine (5–15 mg/hr) or Clevidipine (1–2 mg/hr).\n• Critical Safety Boundary: Avoid aggressive SBP reduction < 130 mmHg (ATACH-2 showed SBP < 130 was associated with increased renal and cardiac adverse events without functional benefit); avoid persistent SBP > 150 mmHg.",
            },
            {
              label: "4. Emergency Anticoagulant Reversal",
              value: "• Warfarin: 4-Factor Prothrombin Complex Concentrate (4F-PCC 25–50 U/kg or fixed 2000 U) PLUS IV Vitamin K 10 mg slow IV infusion (restores INR < 1.3 within 15–30 minutes).\n• Factor Xa Inhibitors (Apixaban, Rivaroxaban): Andexanet alfa (ANNEXA-I trial demonstrated superior hemostatic efficacy compared to standard care) OR 4F-PCC 2000–3000 U IV.\n• Direct Thrombin Inhibitor (Dabigatran): Idarucizumab 5.0 g IV (two 2.5 g boluses).\n• Heparin / LMWH: IV Protamine sulfate.\n• CRITICAL CONTRAINDICATION (PATCH Trial): Platelet transfusions are HARMFUL in patients with acute spontaneous non-surgical ICH on antiplatelet therapy (higher mortality and disability; withhold platelets unless undergoing emergent craniotomy).",
            },
            {
              label: "5. Surgical Management & The ENRICH Trial",
              value: "• Cerebellar ICH: Emergent surgical decompression is mandatory for cerebellar hematoma > 3 cm diameter, brainstem compression, or acute hydrocephalus.\n• Minimally Invasive Surgery (ENRICH Trial 2024): Transsulcal parafascicular endoscopic evacuation of hematoma within 24 hours of onset significantly improved functional independence (modified Rankin Scale 0–3 at 180 days) in patients with anterior lobar ICH (volume 30–80 mL) compared to medical management alone.",
            },
          ],
        },
      ],
    },
    {
      id: "intracranial-hemorrhage.sah",
      kind: "management",
      title: "Aneurysmal Subarachnoid Hemorrhage (aSAH): Securing, Vasospasm & DCI",
      summary: "Hunt & Hess / WFNS grading, ISAT aneurysm coiling vs clipping, Nimodipine, Transcranial Doppler monitoring, Delayed Cerebral Ischemia (DCI), and hyponatremia.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Emergency resuscitation and neurocritical management of aneurysmal SAH:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Clinical Grading & Risk Assessment",
              value: "• Hunt & Hess Scale: Grade 1 (asymptomatic/mild headache) to Grade 5 (deep coma, decerebrate posturing).\n• WFNS Scale: Combines GCS and motor deficit.\n• Modified Fisher CT Score: Quantifies thick subarachnoid clot (Grade 3) and intraventricular hemorrhage (Grade 4) to predict delayed cerebral vasospasm risk.",
            },
            {
              label: "2. Immediate Aneurysm Securing (ISAT Trial)",
              value: "• Pre-Securing Blood Pressure: Maintain SBP < 140–160 mmHg with titratable IV antihypertensives to minimize rebleeding risk (rebleeding carries > 70% mortality).\n• Early Securing (< 24 Hours): Secure aneurysm via Endovascular Coiling (preferred over surgical clipping in anatomically amenable anterior circulation aneurysms per the landmark ISAT trial, reducing 1-year disability and mortality by 24%) or Neurosurgical Clipping (preferred in middle cerebral artery bifurcations or wide-neck aneurysms with large parenchymal hematomas).",
            },
            {
              label: "3. Acute Hydrocephalus & EVD Placement",
              value: "Obstructive hydrocephalus occurs in 20–30% of aSAH from blood products clogging the arachnoid villi or aqueduct of Sylvius. Emergent placement of an External Ventricular Drain (EVD) relieves elevated ICP and restores consciousness.",
            },
            {
              label: "4. Nimodipine & Prevention of Vasospasm",
              value: "Oral Nimodipine (60 mg PO/NG every 4 hours for exactly 21 days) is the ONLY pharmacological agent proven to improve neurological outcomes and reduce death after aSAH (BRANT trial). If systemic hypotension occurs, dose should be halved (30 mg q2h) rather than discontinued.",
            },
            {
              label: "5. Delayed Cerebral Ischemia (DCI) & Vasospasm Protocol",
              value: "• Time Window: Occurs between Days 4 to 14 post-bleed (peak Days 7–8).\n• Surveillance: Daily Transcranial Doppler (TCD: Mean velocity > 120 cm/s indicates mild vasospasm, > 200 cm/s indicates severe vasospasm; Lindegaard Ratio [MCA velocity / extracranial ICA velocity] > 3.0 indicates true intracranial vasospasm vs hyperemia).\n• Treatment of Clinical DCI: (1) Induced Hypertension (titrate IV Norepinephrine to achieve SBP > 160–180 mmHg or MAP > 90–100 mmHg to force blood through vasospastic vessels); (2) Maintain strict Euvolemia (avoid outdated 'triple-H' hypervolemia/hemodilution which causes pulmonary edema without benefit); (3) Endovascular Rescue (intra-arterial nicardipine/milrinone or balloon angioplasty for refractory territorial ischemia).",
            },
            {
              label: "6. Hyponatremia: CSW vs SIADH",
              value: "Hyponatremia occurs in 30–50% of aSAH. Cerebral Salt Wasting (CSW, hypovolemic natriuresis from elevated BNP) is common. CRITICAL RULE: NEVER fluid-restrict a patient with aSAH (fluid restriction causes hypovolemia and precipitates fatal DCI infarction); treat with isotonic/hypertonic saline and Fludrocortisone (0.1–0.2 mg bid).",
            },
          ],
        },
      ],
    },
    {
      id: "intracranial-hemorrhage.complications",
      kind: "complications",
      title: "Complications of Intracranial Hemorrhage",
      summary: "Rebleeding, intraventricular extension, neurogenic stunned myocardium, acute hydrocephalus, and seizures.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Aneurysmal Rebleeding: Occurs in 4–14% within the first 24 hours prior to securing; carries an 80% case-fatality rate.",
            "Delayed Cerebral Ischemia (DCI) & Infarction: Secondary territorial ischemic stroke occurring 4–14 days after aSAH due to combination of arterial vasospasm, cortical spreading depolarization, microvascular thrombosis, and neuroinflammation.",
            "Neurogenic Pulmonary Edema (NPE) & Neurogenic Stunned Myocardium (Takotsubo-like cardiomyopathy): Massive central sympathetic catecholamine discharge causing acute LV apical ballooning, cardiogenic shock, and severe non-cardiogenic pulmonary capillary leak.",
            "Acute Obstructive & Chronic Communicating Hydrocephalus: Requiring temporary EVD drainage or permanent ventriculoperitoneal (VP) shunting.",
            "Cortical Seizures & Nonconvulsive Status Epilepticus (NCSE): Routine 7-day seizure prophylaxis (Levetiracetam 500–1000 mg IV bid) is recommended in aSAH and lobar ICH with cortical involvement.",
          ],
        },
      ],
    },
    {
      id: "intracranial-hemorrhage.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "High-risk errors in the management of ICH and aSAH.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transfusing platelets for non-surgical spontaneous ICH: The PATCH trial demonstrated that platelet transfusion in patients on antiplatelet therapy increased mortality and disability; withhold platelets unless emergency neurosurgery is performed.",
            "Fluid-restricting an aSAH patient with hyponatremia: Fluid restriction causes intravascular hypovolemia, collapsing cerebral perfusion pressure and triggering catastrophic delayed cerebral ischemic infarction; maintain strict euvolemia or hypervolemia with hypertonic/isotonic saline.",
            "Discontinuing oral Nimodipine due to mild hypotension: Nimodipine is a neuroprotective calcium channel blocker that prevents DCI-related death; if SBP drops, reduce dose to 30 mg every 2 hours and co-administer vasopressors rather than stopping it.",
            "Allowing SBP to drop < 130 mmHg in acute ICH: Overzealous blood pressure reduction causes renal injury and cerebral hypoperfusion around the peri-hematomal penumbra; maintain SBP smoothly between 130–140 mmHg.",
            "Failing to place an EVD in an aSAH or ICH patient with acute somnolence and ventriculomegaly: Acute hydrocephalus rapidly progresses to tonsillar herniation; urgent CSF diversion immediately restores neurological function.",
          ],
        },
      ],
    },
    {
      id: "intracranial-hemorrhage.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Intraventricular Thrombolysis (CLEAR III) and Ultra-Early Antifibrinolytic Therapy.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Intraventricular Thrombolysis for Severe Intraventricular Hemorrhage (CLEAR III Trial): The CLEAR III trial evaluated low-dose intraventricular Alteplase (tPA 1.0 mg via EVD q8h) for severe IVH. While it did not improve the primary functional outcome (mRS 0–3) in the overall population, it significantly reduced 180-day mortality (from 45% to 35%) and accelerated hematoma clearance in patients with large intraventricular clots (> 20 mL).",
        },
        {
          type: "paragraph",
          text: "Short-Course Antifibrinolytic Therapy (Tranexamic Acid) in aSAH: The ULTRA trial evaluated short-course TXA (1.0 g IV bolus + 1.0 g/8h until aneurysm securing) to prevent early rebleeding. While TXA reduced ultra-early rebleeding, it did NOT improve 6-month functional outcomes or mortality, and routine antifibrinolytic therapy is currently not recommended outside clinical trial protocols.",
        },
      ],
    },
  ],
};
