import type { Topic } from "@/content-types";

export const acuteAorticSyndromes: Topic = {
  id: "acute-aortic-syndromes",
  slug: "acute-aortic-syndromes",
  title: "Acute Aortic Syndromes",
  category: "cardiovascular",
  oneLiner: "Emergency classification, anti-impulse medical stabilization, and surgical vs endovascular management of aortic dissection, intramural hematoma, and penetrating atherosclerotic ulcer.",
  status: "complete",
  lastReviewed: "2026-08-16",
  version: "2.1",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 32: Thoracic Aortic Dissection and Acute Aortic Syndromes"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 23: Acute Aortic Emergencies"
    }
  ],
  currentStatus: "Current as of the 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease and the 2024 ESC Guidelines on Aortic Diseases.",
  otherReferences: [
    "Isselbacher EM, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022;146(24):e334-e482.",
    "Nienaber CA, et al. Randomized Comparison of Strategies for Type B Aortic Dissection: INSTEAD-XL Trial. Circ Cardiovasc Interv. 2013;6(4):407-416."
  ],
  relationships: [
    { type: "prerequisite", targetId: "hypertensive-emergencies", label: "Acute anti-impulse pressure and heart rate control" },
    { type: "differential", targetId: "acute-coronary-syndrome", label: "Distinguishing aortic dissection with coronary malperfusion from primary STEMI" },
    { type: "complication", targetId: "obstructive-shock", label: "Hemopericardium and cardiac tamponade from ascending aortic rupture" },
    { type: "complication", targetId: "acute-mesenteric-ischemia", label: "True vs false lumen mesenteric malperfusion syndrome" },
    { type: "related-to", targetId: "bleeding", label: "Massive hemorrhage and coagulopathy during open aortic repair" }
  ],
  sections: [
    {
      id: "acute-aortic-syndromes.overview",
      kind: "overview",
      title: "Clinical Spectrum & The Three Variants",
      summary: "Acute Aortic Syndrome (AAS) encompasses three interrelated life-threatening thoracic aortic emergencies sharing a common clinical presentation of severe tearing chest or back pain: Classic Aortic Dissection (AD), Intramural Hematoma (IMH), and Penetrating Atherosclerotic Ulcer (PAU).",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "aortic-syndromes-guideline-acc-aha-2022",
          relevance: "ACC/AHA 2022 Comprehensive Guideline for the Diagnosis and Management of Aortic Disease"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Acute Aortic Syndrome is a hyper-acute vascular emergency with high untreated mortality in the first 24 to 48 hours for ascending aortic pathology. The Stanford anatomical classification determines the immediate management pathway: Stanford Type A involves the ascending aorta (regardless of entry tear site or distal extension) and represents a surgical emergency; Stanford Type B does not involve the ascending aorta (typically originating in the descending thoracic aorta distal to the left subclavian artery) and is managed primarily with medical anti-impulse therapy unless complicated."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Classic Aortic Dissection (85%)", value: "Intimal tear allowing pulsatile blood to dissect within the media layer, creating a true lumen and an expanding false lumen with true/false lumen pressure gradients and risk of branch-vessel malperfusion." },
            { label: "Intramural Hematoma (IMH, 10-15%)", value: "Spontaneous rupture of aortic wall vasa vasorum leading to blood within the aortic media without an identifiable intimal entry tear or true/false lumen communication on imaging." },
            { label: "Penetrating Atherosclerotic Ulcer (PAU, 2-7%)", value: "Ulcerating atherosclerotic plaque eroding through the internal elastic lamina into the aortic media, with high risk of saccular aneurysm formation, progressive IMH, or free rupture." }
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Strategy & Imaging Gold Standard",
      summary: "Immediate ECG-gated CTA is the primary diagnostic imaging modality. POCUS bedside echocardiography identifies tamponade or severe aortic regurgitation in hemodynamically unstable patients.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Diagnostic evaluation must be rapid and definitive. In any patient presenting with sudden-onset tearing, ripping, or sharp chest/back/abdominal pain, the diagnosis must be confirmed or excluded within minutes."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Initial Test of Choice", value: "Biphasic Contrast-Enhanced CT Angiography (CTA) of the chest, abdomen, and pelvis is the preferred diagnostic modality in suspected acute aortic syndrome (sensitivity and specificity >95% on modern multidetector CT). Defines Stanford classification, entry tear location, true vs false lumen, extent of dissection, and end-organ branch vessel malperfusion." },
            { label: "Transesophageal Echo (TEE)", value: "Reserved for hemodynamically unstable patients unable to travel to the CT scanner, or intraoperatively in the operating room. Evaluates ascending aortic intimal flap, pericardial effusion/tamponade, and acute aortic valve regurgitation." },
            { label: "D-Dimer Sensitivity vs Pitfall", value: "D-dimer < 500 ng/mL within the first 6-24 hours has a high negative predictive value (>97%) and may help rule out AAS in low-risk patients; however, D-dimer CANNOT be used to exclude AAS in high-risk patients or in isolated PAU/IMH where thrombosis is localized." },
            { label: "12-Lead ECG & STEMI Pitfall", value: "Dissection flap extending into the right coronary artery (RCA) ostium causes acute inferior STEMI in 3-5% of Type A dissections. Administering thrombolysis or dual antiplatelets for misdiagnosed STEMI in a Type A dissection is catastrophic." }
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis & High-Yield Distinctions",
      summary: "Distinguish acute aortic syndrome from primary cardiac, pulmonary, and esophageal catastrophes that present with severe acute chest or back pain.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Acute Coronary Syndrome (ACS): Gradual or crescendo pain rather than maximal at onset; no pulse deficits; troponin elevation with typical wall motion abnormality on echo.",
            "Acute Pulmonary Embolism: Pleuritic chest pain, severe dyspnea, acute RV strain on ECG/echo, CTA shows pulmonary arterial thrombus rather than aortic flap.",
            "Boerhaave Syndrome (Esophageal Rupture): Severe chest pain following forceful vomiting, pneumomediastinum on CT/X-ray, subcutaneous emphysema.",
            "Acute Pericarditis: Pleuritic, positional chest pain relieved by sitting forward; diffuse PR depression and widespread ST elevation without aortic enlargement.",
            "Spinal Epidural Hematoma / Cord Infarction: Sudden severe back pain with paraplegia; MRI spine confirms epidural blood or anterior spinal artery infarction."
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.anti-impulse",
      kind: "management",
      title: "Medical Anti-Impulse Therapy (Step-by-Step)",
      summary: "Immediate reduction of aortic wall shear stress (dP/dt) and blood pressure is mandatory for all acute aortic syndrome patients from the moment of clinical suspicion.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Aortic shear stress is driven by the rate of left ventricular pressure rise (dP/dt) multiplied by blood pressure. Lowering heart rate reduces both the number of stress cycles per minute and the mechanical impulse generated with each ventricular systole."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Step 1: Heart Rate Control (dP/dt Reduction)", value: "Intravenous short-acting Beta-Blocker FIRST: IV Esmolol (0.5 mg/kg bolus over 1 min, then 50-300 mcg/kg/min infusion) or IV Labetalol (20 mg bolus, then 40-80 mg every 10 min up to 300 mg, or 1-2 mg/min infusion). Target Heart Rate <= 60 bpm." },
            { label: "Step 2: Blood Pressure Reduction", value: "Vasodilator therapy ONLY AFTER target heart rate <= 60 bpm is achieved: IV Nicardipine (5 mg/h, titrate by 2.5 mg/h every 5-15 min to max 15 mg/h) or IV Nitroprusside. Target SBP 100-120 mmHg (or lowest tolerated pressure with preserved brain/renal perfusion)." },
            { label: "CRITICAL PITFALL: Vasodilator Alone", value: "Never administer a pure vasodilator (nitroprusside, hydralazine, or nicardipine) without prior beta-blockade. Vasodilator-induced reflex tachycardia markedly increases dP/dt and propagates aortic dissection tear length or triggers fatal rupture." },
            { label: "Step 3: Adequate Analgesia", value: "Intravenous Opioids (Fentanyl or Morphine) to abolish sympathetic surges and pain-induced hypertension." }
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.surgical-endovascular",
      kind: "management",
      title: "Definitive Management: Type A Surgery vs Type B TEVAR",
      summary: "Stanford Type A mandates emergent open surgical repair. Stanford Type B is managed medically unless complicated by malperfusion, rupture, refractory pain, or high-risk anatomical features.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "aortic-syndromes-instead-xl-trial",
          relevance: "INSTEAD-XL trial demonstrating that proactive TEVAR in stable uncomplicated Type B dissection reduces 5-year aorta-specific mortality (6.9% vs 19.3%, P=0.04) and delays disease progression (27.0% vs 46.1%, P=0.04) with favorable false-lumen remodeling"
        }
      ],
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Stanford Type A Repair: Emergent median sternotomy with cardiopulmonary bypass and deep hypothermic circulatory arrest. Surgical resection of the primary intimal tear, replacement of ascending aorta with a synthetic graft, and repair/resuspension or replacement of the aortic valve.",
            "Stanford Type B (Uncomplicated): Initial medical anti-impulse therapy in the ICU is the foundational strategy for stable patients without overt complications.",
            "Stanford Type B (Complicated): Emergent TEVAR (or open surgery if endovascularly unsuitable) is indicated for established life-threatening complications: branch-vessel malperfusion syndromes (mesenteric, renal, spinal cord, or lower extremity ischemia), contained or impending aortic rupture/hemothorax, refractory or recurrent severe pain despite maximal medical therapy, and uncontrolled hypertension despite multi-agent IV infusions.",
            "Stanford Type B (High-Risk Features): Proactive TEVAR or escalated surveillance is considered in selected stable patients exhibiting guideline-defined high-risk anatomical features (per 2022 ACC/AHA and 2024 ESC guidelines), such as maximal aortic diameter > 40 mm, false-lumen diameter > 20–22 mm, primary entry tear > 10 mm or on the lesser curvature, interval enlargement > 5 mm between serial studies, or bloody pleural effusion; the INSTEAD-XL trial demonstrated reduced 5-year aorta-specific mortality (6.9% vs 19.3%, P=0.04) and positive false-lumen remodeling with proactive TEVAR in stable survivors with favorable endovascular anatomy, though the decision must weigh perioperative risks against long-term benefits on an individualized basis."
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.monitoring",
      kind: "monitoring",
      title: "ICU Hemodynamic & Perfusion Monitoring",
      summary: "Continuous monitoring for limb/organ malperfusion, cardiac tamponade, and false lumen propagation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Dual Arterial Lines", value: "Right radial arterial line (monitors innominate/subclavian perfusion) plus femoral arterial line (detects distal true-lumen collapse or iliofemoral malperfusion)." },
            { label: "Serial Neurological & Pulse Checks", value: "Hourly evaluation of cranial nerves, bilateral upper and lower extremity pulses, and motor/sensory function to detect acute spinal cord or limb malperfusion." },
            { label: "End-Organ Perfusion Markers", value: "Hourly urine output (>0.5 mL/kg/h), serial serum creatinine, serum lactate, and abdominal examinations for mesenteric ischemia." }
          ]
        }
      ]
    },
    {
      id: "acute-aortic-syndromes.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of catastrophic acute, treatment-related, and delayed complications.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Life-Threatening", value: "Aortic rupture into pericardium (tamponade) or pleural cavity, acute severe aortic regurgitation with pulmonary edema, coronary malperfusion (inferior STEMI), dynamic/static mesenteric or renal malperfusion." },
            { label: "Tamponade in Type A Dissection", value: "Pericardiocentesis is generally avoided due to the risk of rapid false-lumen decompression increasing trans-mural pressure and precipitating fatal recurrent rupture. When severe obstructive shock occurs prior to the OR, cautious, controlled volume aspiration (strictly to relieve life-threatening arrest physiology) may be considered as a bridge to emergent sternotomy rather than full evacuation." },
            { label: "Treatment-Related", value: "Profound bradycardia/heart block from aggressive beta-blockade, severe hypotension causing cerebral watershed stroke, contrast-induced nephropathy from repeat CTA, spinal cord ischemia / paraplegia post-TEVAR." },
            { label: "Late / Delayed", value: "False lumen aneurysmal degeneration, endoleak post-TEVAR, chronic dissection-related hypertension, late graft infection." },
            { label: "Escalation Triggers", value: "New neurological deficit (stroke/paraplegia), refractory hypertension requiring multiple IV infusions, new pulse deficit in a previously perfused limb, acute rise in serum lactate." }
          ]
        }
      ]
    }
  ]
};
