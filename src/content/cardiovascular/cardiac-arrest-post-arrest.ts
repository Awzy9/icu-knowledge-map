import type { Topic } from "@/content-types";

export const cardiacArrestPostArrest: Topic = {
  id: "cardiac-arrest-post-arrest",
  slug: "cardiac-arrest-post-arrest",
  title: "Cardiac Arrest & Post–Cardiac Arrest Care",
  category: "cardiovascular",
  oneLiner: "Multimodal resuscitation, post-cardiac arrest syndrome management, targeted temperature control, and delayed neuroprognostication.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 28: Management of Cardiac Arrest and the Post-Resuscitation Syndrome"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 18: Cardiopulmonary Resuscitation and Post-Arrest Intensive Care"
    }
  ],
  currentStatus: "Current as of the 2021 AHA/ERC/ILCOR International Consensus on Post-Resuscitation Care and the 2021 TTM2 trial guidelines.",
  otherReferences: [
    "Dankiewicz J, et al. Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest (TTM2). N Engl J Med. 2021;384(24):2283-2294.",
    "Lemkes JS, et al. Coronary Angiography after Cardiac Arrest without ST-Segment Elevation (COACT). N Engl J Med. 2019;380(15):1397-1407.",
    "Nolan JP, et al. European Resuscitation Council and European Society of Intensive Care Medicine guidelines 2021: post-resuscitation care. Intensive Care Med. 2021;47(4):369-421."
  ],
  relationships: [
    { type: "prerequisite", targetId: "arrhythmias", label: "Identification and emergency management of arrest rhythms" },
    { type: "complication", targetId: "cardiogenic-shock", label: "Post-cardiac arrest myocardial stunning and hemodynamic collapse" },
    { type: "complication", targetId: "altered-consciousness", label: "Hypoxic-ischemic brain injury and comatose state evaluation" },
    { type: "differential", targetId: "obstructive-shock", label: "Pulmonary embolism or tamponade as primary cause of arrest" },
    { type: "related-to", targetId: "brain-death", label: "Formal brain death determination after multimodal neuroprognostication" }
  ],
  sections: [
    {
      id: "cardiac-arrest-post-arrest.overview",
      kind: "overview",
      title: "Clinical Context & Four Phases of Care",
      summary: "Cardiac arrest is the ultimate critical care emergency. Survival with favorable neurological outcome requires seamless execution of intra-arrest ACLS, immediate post-ROSC stabilization, targeted ICU neuroprotection, and delayed multimodal prognostication.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "cardiac-arrest-guideline-aha-erc-ilcor-2021",
          relevance: "AHA/ERC/ILCOR consensus guideline on post-cardiac arrest resuscitation and neuroprognostication"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The post-cardiac arrest syndrome (PCAS) is a complex pathophysiological state consisting of four key components: (1) post-cardiac arrest brain injury, (2) post-cardiac arrest myocardial dysfunction (stunning), (3) systemic ischemia-reperfusion response (resembling severe distributive septic shock with massive cytokine release and endothelial activation), and (4) persistent precipitating pathology (acute coronary occlusion, pulmonary embolism, toxic ingestion, or electrolyte crisis)."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Phase 1: Intra-Arrest", value: "High-quality chest compressions (100-120/min, 5-6 cm depth), rapid defibrillation for shockable rhythms (VF/pVT), minimal hands-off time (<10 sec), early epinephrine for non-shockable rhythms, and algorithmic search for reversible causes." },
            { label: "Phase 2: Immediate ROSC (0-6h)", value: "Airway control, oxygenation titration (SpO2 92-98%), hemodynamic stabilization (MAP >= 65-70 mmHg), 12-lead ECG, emergent coronary angiography for STEMI, and immediate initiation of targeted temperature management." },
            { label: "Phase 3: ICU Neuroprotection (6-72h)", value: "Strict normothermia (<=37.5°C) or hypothermia (32-36°C) for >=72h, sedation, continuous EEG monitoring, lung-protective ventilation, normoglycemia, and inotropic support for myocardial stunning." },
            { label: "Phase 4: Delayed Prognostication (>=72h)", value: "Structured multimodal assessment (clinical exam, SSEP N20 waves, continuous EEG, neuron-specific enolase, brain MRI/CT) performed at least 72 hours after ROSC and following full rewarming." }
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.pathophysiology",
      kind: "physiology",
      title: "Pathophysiology of Reperfusion & Myocardial Stunning",
      summary: "Whole-body ischemia triggers cellular ATP depletion, intracellular calcium overload, and oxygen radical generation upon reperfusion, resulting in transient bi-ventricular stunning and systemic vasodilation.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Post-cardiac arrest myocardial dysfunction is characterized by global systolic and diastolic dysfunction that typically peaks at 24 to 48 hours post-ROSC and is largely reversible by 48 to 72 hours if adequate coronary and systemic perfusion are maintained. Unlike acute myocardial infarction with necrosis, myocardial stunning represents a functional metabolic hibernation secondary to troponin degradation, excitation-contraction uncoupling, and mitochondrial calcium overload."
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Cerebral Autoregulation Shift: Hypoxic-ischemic encephalopathy impairs cerebral autoregulation, causing cerebral blood flow to depend linearly on mean arterial pressure (MAP). Hypotension leads directly to secondary ischemic brain necrosis.",
            "Systemic Inflammatory Response: Whole-body reperfusion activates complement, leukocyte adhesion, and endothelial barrier breakdown, causing capillary leak, intravascular hypovolemia, and marked vasodilation resembling septic shock.",
            "Intracellular Acidosis & Calcium Loading: Anaerobic glycolysis drives intracellular H+ and Na+ accumulation; upon reperfusion, the Na+/Ca2+ exchanger drives toxic Ca2+ influx into mitochondria, opening permeability transition pores and triggering neuronal apoptosis."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.diagnosis-etiology",
      kind: "diagnosis",
      title: "Diagnostic Evaluation & The 5Hs and 5Ts",
      summary: "Rapid bedside diagnostic testing must simultaneously confirm ROSC stability, identify the precipitating etiology, and detect life-threatening reversible arrest causes.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Diagnostic evaluation must be systematic and immediate following ROSC. The critical clinical questions are: (1) Is there an acute coronary occlusion requiring emergent percutaneous coronary intervention (PCI)? (2) Is there a treatable mechanical or metabolic trigger (5Hs & 5Ts)? (3) What is the degree of cerebral injury and electrographic seizure activity?"
        },
        {
          type: "key-value-table",
          rows: [
            { label: "First Test to Order", value: "Immediate 12-lead ECG: Check for ST-segment elevation or new LBBB. STEMI post-ROSC mandates immediate activation of the cardiac catheterization laboratory regardless of comatose status." },
            { label: "Bedside POCUS / Echocardiography", value: "Assess for cardiac tamponade (pericardial effusion with RV diastolic collapse), acute RV strain / McConnell's sign (massive PE), global severe hypokinesis (stunning vs severe ischemic cardiomyopathy), and pneumothorax." },
            { label: "Emergency Laboratory Panel", value: "Arterial blood gas with lactate, potassium, ionized calcium, magnesium, high-sensitivity troponin, complete blood count, toxicology panel, and coagulation profile." },
            { label: "Non-Contrast Head CT", value: "Mandatory in comatose patients without clear cardiac etiology to exclude subarachnoid hemorrhage (SAH), massive intracranial hemorrhage, or malignant stroke that caused the initial collapse." }
          ]
        },
        {
          type: "list",
          ordered: false,
          items: [
            "The 5 Hs: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia.",
            "The 5 Ts: Tension pneumothorax, Tamponade (cardiac), Toxins (overdose), Thrombosis (pulmonary), Thrombosis (coronary)."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Sudden Collapse & Non-Cardiac Arrest",
      summary: "Distinguish primary arrhythmic/ischemic cardiac arrest from catastrophic non-cardiac events that present identically with sudden unconsciousness and pulselessness.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Massive Pulmonary Embolism: Sudden arrest with PEA, severe RV strain on echo, refractory hypoxemia; consider systemic thrombolysis or VA-ECMO/surgical embolectomy.",
            "Aneurysmal Subarachnoid Hemorrhage (SAH): Can trigger sudden neurogenic stunning, malignant arrhythmias (torsades/VF), and apnea mimicking primary cardiac arrest; head CT reveals diffuse blood in basal cisterns.",
            "Acute Aortic Dissection with Pericardial Tamponade: Retrograde dissection into pericardium presenting as sudden PEA arrest; POCUS reveals hemopericardium, and urgent surgical sternotomy is required.",
            "Tension Pneumothorax: Tracheal deviation, absent breath sounds, high peak pressures during ventilation; immediate needle decompression / thoracostomy.",
            "Lethal Toxic Ingestion: Cardiotoxic beta-blockers, calcium channel blockers, or tricyclic antidepressants presenting with refractory bradyarrhythmias or wide-complex QRS."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.management",
      kind: "management",
      title: "Immediate Post-ROSC Hemodynamic & Ventilatory Stabilization",
      summary: "Aggressive physiological optimization prevents secondary hypoxic-ischemic brain damage and supports stunned myocardium.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Hemodynamic and ventilatory management directly impacts neurological survival. Blood pressure targets must avoid cerebral hypoperfusion while limiting excess myocardial oxygen consumption."
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Blood Pressure Target: Maintain MAP >= 65-75 mmHg (or individualized higher MAP 75-85 mmHg in chronic hypertensive patients) using norepinephrine as the primary vasopressor.",
            "Inotropic Support: For persistent post-arrest myocardial stunning and low cardiac index (<2.2 L/min/m2) despite adequate MAP, add dobutamine (2.5-10 mcg/kg/min) or epinephrine infusion.",
            "Oxygenation Strategy: Avoid both hypoxemia and hyperoxemia. Titrate FiO2 to maintain SpO2 92-98% (PaO2 70-100 mmHg). Hyperoxemia (PaO2 > 200-300 mmHg) exacerbates cerebral free-radical reperfusion injury and worsens neurological outcomes.",
            "Ventilatory Strategy: Target strict normocapnia (PaCO2 35-45 mmHg). Hypocapnia (PaCO2 < 35 mmHg) induces severe cerebral vasoconstriction and worsens ischemia; hypercapnia (PaCO2 > 45 mmHg) causes cerebral vasodilation and intracranial hypertension."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.ttm",
      kind: "management",
      title: "Targeted Temperature Management (TTM2 Paradigm)",
      summary: "Targeted temperature control is mandatory for all comatose post-arrest patients. Strict normothermia (<= 37.5°C) with active fever prevention achieves equivalent survival to hypothermia (33°C).",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "cardiac-arrest-ttm2-trial",
          relevance: "TTM2 randomized trial (n=1900) showing targeted normothermia (<=37.5°C) is equivalent to 33°C hypothermia"
        },
        {
          kind: "systematic-review",
          id: "cardiac-arrest-ttm-cochrane-review",
          relevance: "Cochrane meta-analysis of 13 RCTs (n=4249) demonstrating no difference in survival or functional outcome between active normothermia and hypothermia"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The landmark TTM2 trial (NEJM 2021) demonstrated that targeted hypothermia at 33°C did not reduce 6-month mortality or improve functional neurological outcomes compared with targeted normothermia (core temperature maintained <= 37.5°C with active fever prevention using cooling devices when temperature reached 37.8°C)."
        },
        {
          type: "callout",
          tone: "guideline",
          text: "TTM2 Modern Practice: Targeted temperature management is mandatory for all comatose post-cardiac arrest patients. Clinicians may maintain targeted hypothermia (32-36°C) or strict targeted normothermia (<= 37.5°C) with feedback-controlled cooling for at least 72 hours. Active fever prevention is the core neuroprotective requirement."
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Duration of Temperature Control: Maintain targeted temperature for at least 72 hours in comatose patients. Fever (>37.8°C) during this period is strongly neurotoxic and must be actively suppressed.",
            "Feedback-Controlled Device: Use an automated surface cooling blanket with hydrogel pads or an intravascular cooling catheter connected to continuous core temperature measurement (esophageal or bladder probe).",
            "Shivering Management: Manage shivering with a stepwise protocol: skin warming, acetaminophen, buspirone, magnesium sulfate, low-dose dexmedetomidine, and neuromuscular blockade if shivering produces uncontrolled metabolic heat."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.coronary-angiography",
      kind: "management",
      title: "Coronary Angiography & Percutaneous Intervention Strategy",
      summary: "Immediate coronary angiography is mandatory for STEMI. In non-STEMI post-arrest patients without ST elevation, the COACT and TOMAHAWK trials establish that routine unselected immediate angiography does not improve survival over delayed/selective angiography.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "cardiac-arrest-coact-trial",
          relevance: "COACT trial establishing that delayed angiography is non-inferior to immediate angiography in shockable non-STEMI post-arrest patients"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Coronary artery disease is the underlying cause in >70% of out-of-hospital cardiac arrests. Determining the timing of cardiac catheterization depends on the post-ROSC 12-lead ECG and clinical trajectory."
        },
        {
          type: "list",
          ordered: true,
          items: [
            "ST-Elevation (STEMI) on Post-ROSC ECG: Emergent coronary angiography (<2 hours from ROSC) is strongly recommended (Class I recommendation) regardless of coma status.",
            "Non-ST-Elevation (No STEMI) with Shockable Rhythm: The COACT trial demonstrated that immediate emergency angiography did not improve 90-day survival compared with delayed angiography (65% vs 67%, P=0.51) in stable patients without shock.",
            "Non-STEMI with Cardiogenic Shock or Electrical Instability: Emergent catheterization remains indicated if the patient has persistent refractory shock, recurrent malignant arrhythmias, or high clinical suspicion of acute coronary occlusion."
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.monitoring",
      kind: "monitoring",
      title: "Continuous ICU Multimodal Monitoring",
      summary: "Intensive monitoring identifies occult seizures, secondary brain injury, and dynamic circulatory collapse.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Continuous Core Temperature", value: "Continuous esophageal or bladder temperature sensor to guide feedback cooling." },
            { label: "Invasive Arterial Pressure", value: "Radial or femoral arterial line for beat-to-beat pressure monitoring and blood gas sampling." },
            { label: "Continuous EEG (cEEG)", value: "Mandatory in all comatose patients for >=24-48 hours. Electrographic seizures or nonconvulsive status epilepticus occur in 10-30% of post-arrest patients and require aggressive antiepileptic treatment." },
            { label: "Serial Lactate & Blood Gases", value: "Serial blood gases every 2-4 hours to confirm clearance of metabolic acidosis and maintain strict normocapnia / normoxemia." }
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of early, treatment-related, and delayed complications of cardiac arrest resuscitation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Post-cardiac arrest syndrome (PCAS) distributive vasodilation, profound myocardial stunning, refractory ventricular arrhythmias, pulmonary edema, rib fractures/flail chest from chest compressions." },
            { label: "Treatment-Related", value: "Overcooling-induced coagulopathy and lethal arrhythmias (<30°C), shivering-induced metabolic spikes, hypokalemia during cooling and hyperkalemia during rewarming, aspiration pneumonia during unprotected airway resuscitation." },
            { label: "Late / Delayed", value: "Hypoxic-ischemic encephalopathy (HIE), myoclonic status epilepticus (Lance-Adams vs generalized myoclonus), acute kidney injury requiring CRRT, critical illness myopathy." },
            { label: "Escalation Triggers", value: "Refractory cardiogenic shock requiring mechanical circulatory support (VA-ECMO, Impella, IABP); nonconvulsive status epilepticus requiring continuous IV anesthetic infusions (propofol, midazolam)." }
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.neuroprognostication",
      kind: "controversies",
      title: "Multimodal Neuroprognostication Timeline",
      summary: "Prognostication must never rely on a single test and must be delayed until at least 72 hours post-ROSC after complete rewarming and clearance of sedation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Premature withdrawal of life-sustaining therapy (WLST) based on early examination is a major cause of preventable mortality. Modern guidelines mandate waiting at least 72 hours post-ROSC before formal prognostication in comatose patients (extending to 5-7 days if residual sedation or targeted hypothermia was used)."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Clinical Examination (>=72h)", value: "Bilateral absent pupillary light reflexes and bilateral absent corneal reflexes at >=72h strongly predict poor outcome (false-positive rate <1%). Motor response of extension or no response (M <= 2) is sensitive but has high false-positive rate alone." },
            { label: "Somatosensory Evoked Potentials (SSEP)", value: "Bilateral absent cortical N20 responses to median nerve stimulation (performed >=24-72h) has a false-positive rate <1% for poor neurological recovery." },
            { label: "Continuous EEG Patterns", value: "Highly malignant patterns at >=24h: suppressed background (<10 uV), burst suppression with generalized periodic discharges, or persistent non-reactive background predict poor outcome." },
            { label: "Biomarkers & Neuroimaging", value: "Neuron-Specific Enolase (NSE) > 60-80 mcg/L at 48-72h suggests extensive neuronal necrosis. Brain MRI (DWI) showing extensive diffuse cortical and basal ganglia restricted diffusion, or Brain CT showing grey-white matter ratio (GWR) < 1.10." }
          ]
        }
      ]
    },
    {
      id: "cardiac-arrest-post-arrest.pitfalls",
      kind: "controversies",
      title: "Critical Care Post-Arrest Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors in post-ROSC care including premature neuroprognostication, hyperoxia, and hyperthermia.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Premature Neuroprognostication", value: "Formulating a definitive poor neurological prognosis or withdrawing life support prior to 72 hours post-ROSC (or before clearance of sedatives/hypothermia effects); early exam findings have high false-positive rates." },
            { label: "Pitfall: Post-Arrest Hyperthermia", value: "Permitting rebound pyrexia (>37.8°C) in comatose patients post-ROSC; fever exacerbates secondary ischemic-reperfusion neuronal injury and doubles mortality." },
            { label: "Pitfall: Severe Hyperoxia Toxicity", value: "Leaving post-ROSC patients on 100% FiO2 with PaO2 > 200-300 mmHg; excessive hyperoxia induces oxygen free-radical generation, coronary vasoconstriction, and worsened neuronal apoptosis (titrate FiO2 to maintain SpO2 92-98%)." },
            { label: "Pitfall: Prophylactic Hyperventilation", value: "Hyperventilating comatose patients to PaCO2 < 35 mmHg to reduce presumed cerebral edema; hypocapnia causes profound cerebral vasoconstriction, worsening brain ischemia." },
            { label: "Pitfall: Unrecognized Non-Convulsive Status", value: "Failing to connect continuous EEG in comatose post-arrest patients; electrographic status epilepticus occurs in up to 20-30% of comatose patients without visible motor twitches." }
          ]
        }
      ]
    }
  ]
};
