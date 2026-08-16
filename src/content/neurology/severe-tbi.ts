import type { Topic } from "@/content-types";

export const severeTbi: Topic = {
  id: "severe-tbi",
  slug: "severe-tbi",
  title: "Severe Traumatic Brain Injury",
  category: "neurology",
  oneLiner: "Brain Trauma Foundation (BTF 4th edition) guidelines: avoiding hypotension/hypoxia, tiered ICP/CPP resuscitation, hyperosmolar therapy, 7-day seizure prophylaxis, and decompressive craniectomy.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Traumatic Brain Injury, Critical Care Neurotrauma, and Multimodal Intracranial Monitoring",
    },
    {
      title: "Brain Trauma Foundation Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition",
      edition: "Neurosurgery 2017;80(1):6-15",
    },
  ],
  currentStatus: "Current as of the Brain Trauma Foundation (BTF) 4th Edition Guidelines, the Seattle International Severe Traumatic Brain Injury Consensus Conference (SIBICC), and the RESCUEicp and CRASH-3 trials.",
  otherReferences: [
    "Carney N, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15.",
    "Hawryluk GWJ, et al. A management algorithm for patients with intracranial pressure monitoring: the Seattle International Severe Traumatic Brain Injury Consensus Conference (SIBICC). Intensive Care Med. 2019;45(12):1783-1794.",
    "Hutchinson PJ, et al. Trial of Decompressive Craniectomy for Traumatic Intracranial Hypertension (RESCUEicp trial). N Engl J Med. 2016;375(12):1119-1130.",
    "CRASH-3 Trial Collaborators. Effects of tranexamic acid on death and disability in patients with traumatic brain injury. Lancet. 2019;394(10210):1713-1723.",
    "Andrews PJ, et al. Hypothermia for Intracranial Hypertension after Traumatic Brain Injury (Eurotherm3239 trial). N Engl J Med. 2015;373(25):2403-2412.",
  ],
  relationships: [
    { type: "complication", targetId: "intracranial-hypertension", label: "Tiered management of refractory intracranial hypertension" },
    { type: "differential", targetId: "altered-consciousness", label: "Post-traumatic coma, diffuse axonal injury, and brainstem herniation" },
    { type: "complication", targetId: "status-epilepticus", label: "Early post-traumatic seizures and nonconvulsive status epilepticus" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Normocapnia, avoiding prophylactic hyperventilation, and PEEP titration" },
    { type: "related-to", targetId: "shock", label: "Avoiding hypotension (SBP < 100/110 mmHg) and maintaining CPP 60–70 mmHg" },
    { type: "related-to", targetId: "bleeding", label: "Trauma-induced coagulopathy and early tranexamic acid" },
  ],
  sections: [
    {
      id: "severe-tbi.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: GCS Staging, Pupillary Exam & Trauma CT",
      summary: "Immediate non-contrast head CT with cervical spine imaging, GCS <= 8 determination, and baseline pupillary light reflex assessment.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Glasgow Coma Scale (GCS <= 8)", value: "Defines severe TBI after initial resuscitation and exclusion of paralytics/intoxication. Mandates immediate airway protection and ICP monitoring consideration." },
            { label: "Emergency Head CT Findings", value: "Identify surgical lesions: Epidural hematoma (lenticular, arterial middle meningeal rupture), Subdural hematoma (crescentic, bridging veins), traumatic SAH, diffuse axonal injury (DAI — microbleeds at grey-white junction), and midline shift (> 5 mm predicts elevated ICP)." },
            { label: "Pupillary Reactivity & Asymmetry", value: "Unilateral dilated, unreactive pupil indicates impending uncal herniation and 3rd nerve compression; bilateral fixed dilated pupils indicate severe brainstem ischemia." }
          ]
        }
      ]
    },
    {
      id: "severe-tbi.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Traumatic Neurological Catastrophe",
      summary: "Distinguish primary traumatic brain parenchymal injury from secondary post-traumatic ischemic or metabolic insults.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Concomitant Hypoxemic-Ischemic Injury: Post-arrest or prolonged apnea following trauma producing diffuse brain edema superimposed on focal contusions.",
            "Traumatic Vertebral / Carotid Artery Dissection: Blunt cerebrovascular injury (BCVI) causing delayed thromboembolic stroke in severe facial or base of skull fractures; screen with CTA head/neck (Denver/Memphis criteria).",
            "Severe Drug / Alcohol Intoxication: Superimposed CNS depression causing disproportionate GCS reduction; do NOT attribute pupillary abnormalities or focal motor deficits to intoxication."
          ]
        }
      ]
    },
    {
      id: "severe-tbi.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "intracranial-hypertension-guideline-btf-2016",
          relevance: "Brain Trauma Foundation 4th edition guidelines for management of severe TBI"
        },
        {
          kind: "trial",
          id: "tbi-crash-3-trial",
          relevance: "CRASH-3 trial demonstrating early tranexamic acid reduces head injury mortality in mild-to-moderate TBI"
        },
        {
          kind: "trial",
          id: "intracranial-hypertension-rescueicp",
          relevance: "RESCUEicp trial on surgical decompression in refractory post-traumatic ICP"
        },
        {
          kind: "trial",
          id: "intracranial-hypertension-decra",
          relevance: "DECRA trial on early surgical decompression in traumatic brain injury"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Severe Traumatic Brain Injury (TBI, post-resuscitation GCS ≤ 8) is a dynamic biomechanical disease where immediate primary structural damage is compounded by secondary physiological insults (hypotension, hypoxemia, hyperpyrexia, and intracranial hypertension), mandating protocolized neurocritical care.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Severe Traumatic Brain Injury (TBI) is defined by a post-resuscitation Glasgow Coma Scale (GCS) score ≤ 8 following blunt or penetrating head trauma. While the primary biomechanical injury (tissue shearing, focal contusions, hematomas, and diffuse axonal injury) occurs instantaneously at impact and cannot be reversed medically, the fundamental mission of ICU care is the aggressive prevention and reversal of Secondary Brain Injury.",
        },
        {
          type: "paragraph",
          text: "Secondary injury is driven by systemic physiological derangements (hypotension, hypoxemia, hypocapnic ischemia, hyperthermia, hyperglycemia) and intracranial cascades (intracranial hypertension, microvascular collapse, mitochondrial failure, excitotoxicity, and seizures). Management adheres strictly to the Brain Trauma Foundation (BTF 4th Edition) tiered resuscitation algorithm.",
        },
      ],
    },
    {
      id: "severe-tbi.physiology",
      kind: "physiology",
      title: "Pathophysiology: Primary vs Secondary Injury & The Lethal Thresholds",
      summary: "Biomechanical shear stresses, Diffuse Axonal Injury (DAI), pressure autoregulation curve loss, and the devastating impact of hypotension and hypoxemia.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "The cellular and physiological mechanisms governing severe traumatic brain injury:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Primary Biomechanical Injury Patterns",
              value: "• Epidural Hematoma (EDH): Middle meningeal artery laceration (pterion fracture); biconvex lens on CT; rapid expansion with classic lucid interval.\n• Acute Subdural Hematoma (ASDH): Tearing of bridging cortical veins or cortical arterial rupture; crescentic hyperdensity crossing suture lines; high underlying parenchymal injury.\n• Cerebral Contusions: Coup and contrecoup parenchymal hemorrhagic necrosis (inferior frontal and anterior temporal lobes).\n• Diffuse Axonal Injury (DAI): Rotational acceleration/deceleration forces causing microscopic shear-strain injury to axons at the gray-white junction, corpus callosum, and dorsolateral brainstem.",
            },
            {
              label: "2. The Secondary Injury Cascade",
              value: "Mechanical trauma triggers widespread release of excitotoxic glutamate, massive intracellular calcium and sodium influx, mitochondrial permeability transition pore opening, production of reactive oxygen species, and intense microglial neuroinflammation, leading to secondary progressive neuronal apoptosis.",
            },
            {
              label: "3. The Two Lethal Secondary Insults: Hypotension & Hypoxemia",
              value: "• Hypotension: A single episode of SBP < 90 mmHg independently DOUBLES mortality. The BTF 4th edition updated the threshold: maintain SBP ≥ 100 mmHg for patients 50–69 years and SBP ≥ 110 mmHg for patients 15–49 or ≥ 70 years.\n• Hypoxemia: PaO2 < 60 mmHg or SpO2 < 90% independently doubles mortality. Combining hypotension and hypoxemia increases mortality by nearly 300%.",
            },
            {
              label: "4. Loss of Cerebral Autoregulation & CPP",
              value: "Traumatized brain tissue loses the myogenic ability to maintain constant Cerebral Blood Flow across MAP fluctuations. The brain becomes pressure-passive: CBF = CPP / CVR, where CPP = MAP - ICP. If MAP drops or ICP rises, CBF falls directly into ischemic territory (< 18 mL/100g/min).",
            },
          ],
        },
      ],
    },
    {
      id: "severe-tbi.btf-guidelines",
      kind: "management",
      title: "Stepped Neuro-ICU Resuscitation: The BTF 4th Edition & SIBICC Tiered Algorithm",
      summary: "Tier 0 (baseline neuroprotection), Tier 1 (osmocenter, CSF drainage), Tier 2 (neuromuscular blockade, temporary mild hyperventilation), and Tier 3 (barbiturates, craniectomy).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Tiered management algorithm for severe TBI with an ICP monitor / External Ventricular Drain:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Tier 0: Universal Baseline Neuroprotection (All Patients)",
              value: "• Airway & Intubation: Endotracheal intubation for GCS ≤ 8 (avoiding bag-valve hyperventilation).\n• Hemodynamics: Maintain SBP ≥ 100–110 mmHg; target Cerebral Perfusion Pressure (CPP) strictly 60–70 mmHg using Norepinephrine infusion and isotonic fluids. (Avoid CPP > 70 due to risk of ARDS/pulmonary edema per the landmark Rosner vs Marshall data).\n• Positioning: Head of bed elevated 30 degrees with neck in neutral alignment (facilitates internal jugular venous drainage).\n• Ventilation: Target normocapnia (PaCO2 35–45 mmHg) and normoxemia (PaO2 80–120 mmHg, SpO2 ≥ 95%). AVOID prophylactic hyperventilation!\n• Analgesia & Sedation: Titratable IV Propofol and Fentanyl infusions to suppress agitation, coughing, and ventilator dyssynchrony.\n• Normothermia: Core temperature maintained 36.0–37.0°C with antipyretics and targeted temperature management (surface cooling blankets).",
            },
            {
              label: "Tier 1: Mild to Moderate Intracranial Hypertension (ICP > 22 mmHg)",
              value: "• Hyperosmolar Therapy: 3% Hypertonic Saline (250 mL IV bolus over 15 min, target serum Na+ 145–155 mEq/L, serum Osm < 320 mOsm/kg) OR 20% Mannitol (0.5–1.0 g/kg IV bolus over 20 min if euvolemic and SBP stable).\n• CSF Diversion: External Ventricular Drain (EVD) opened to drain intermittent CSF boluses (3–5 mL) or set to continuous drainage at 10–15 cmH2O above the external auditory meatus.",
            },
            {
              label: "Tier 2: Progressive ICP Elevation Failing Tier 1",
              value: "• Neuromuscular Blockade: Continuous IV infusion of Cisatracurium or Rocuronium (titrated to 1–2 twitches on train-of-four) to eliminate shivering, posturing, and intrathoracic venous backpressure.\n• Temporary Rescue Hyperventilation: Mild, short-term hyperventilation to PaCO2 30–35 mmHg strictly as a temporary bridge to definitive surgery or osmotherapy; never sustain for > 2 hours without brain tissue oxygenation (PbtO2) monitoring.",
            },
            {
              label: "Tier 3: Refractory Intracranial Hypertension",
              value: "• High-Dose Barbiturate Coma: IV Pentobarbital (10 mg/kg loading over 30 min, then 1–3 mg/kg/hr infusion) titrated to electroencephalographic burst suppression (1 burst per 10–15 seconds) on continuous cEEG; mandates continuous arterial line and vasopressor support for barbiturate-induced myocardial depression.\n• Secondary Decompressive Craniectomy: Large unilateral bifrontal or frontotemporoparietal bone flap removal (RESCUEicp trial: reduced 6-month mortality from 48.9% to 26.9% compared to medical therapy alone in refractory TBI).",
            },
          ],
        },
      ],
    },
    {
      id: "severe-tbi.adjunctive-care",
      kind: "management",
      title: "Adjunctive ICU Care: Seizure Prophylaxis, Tranexamic Acid & Coagulopathy",
      summary: "7-day Levetiracetam protocol, CRASH-3 TXA evidence, glucose control, and targeted temperature management.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Critical adjunctive medical management in the neuro-trauma ICU:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Seizure Prophylaxis (7-Day Course)",
              value: "• Levetiracetam (Keppra): 1000 mg IV q12h (or Phenytoin 20 mg/kg loading + 100 mg q8h) for exactly 7 days post-injury.\n• Indication: Prevents Early Post-Traumatic Seizures (occurring within the first 7 days, which cause catastrophic spikes in cerebral metabolic rate CMRO2 and ICP). Anti-seizure prophylaxis does NOT prevent late post-traumatic epilepsy and must be stopped on Day 7 unless clinical/electrographic seizures occur.",
            },
            {
              label: "2. Tranexamic Acid (CRASH-3 Trial)",
              value: "Administer TXA (1.0 g IV bolus over 10 min + 1.0 g over 8 hours) strictly within 3 hours of injury in patients with mild-to-moderate TBI (GCS 9–15) or reactive pupils (CRASH-3 showed significant reduction in head injury-related death; no benefit if given after 3 hours or in non-reactive comatose GCS 3).",
            },
            {
              label: "3. Glycemic & Nutritional Targets",
              value: "Maintain blood glucose 140–180 mg/dL with IV regular insulin (hyperglycemia accelerates lactic acidosis in ischemic brain tissue; hypoglycemia < 70 mg/dL causes rapid neuronal death). Initiate enteral nutrition within 72 hours (reaches full caloric replacement by Day 7 per BTF guidelines).",
            },
            {
              label: "4. CRITICAL AVOIDANCE: Therapeutic Hypothermia",
              value: "The Eurotherm3239 trial (NEJM 2015) proved that routine early therapeutic hypothermia (32–35°C) in severe TBI did NOT improve functional outcomes and significantly increased mortality and systemic infectious complications compared to standard normothermic control.",
            },
          ],
        },
      ],
    },
    {
      id: "severe-tbi.complications",
      kind: "complications",
      title: "Complications & Monitoring in Severe TBI",
      summary: "Brain tissue hypoxia (PbtO2 < 20 mmHg), autonomic storming (paroxysmal sympathetic hyperactivity), neurogenic diabetes insipidus, and ventilator-associated pneumonia.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Brain Tissue Hypoxia (PbtO2 < 20 mmHg): Measured via invasive Licox parenchymal catheter; indicates critical microvascular ischemia despite normal ICP and CPP; treated by increasing FiO2, increasing MAP, or transfusing PRBCs for hemoglobin > 8–9 g/dL.",
            "Paroxysmal Sympathetic Hyperactivity (PSH / 'Autonomic Storming'): Severe episodic surges in heart rate, blood pressure, respiratory rate, diaphoresis, hyperthermia, and extensor dystonic posturing triggered by noxious stimuli in patients with diffuse axonal injury; treated with Bromocriptine, Propranolol, Clonidine, and Gabapentin.",
            "Central Diabetes Insipidus (DI): Pituitary stalk traction or hypothalamic injury causing sudden polyuria (urine output > 200–300 mL/hr, urine specific gravity < 1.005, hypernatremia Na+ > 150 mEq/L); treated with IV Desmopressin (DDAVP 1–2 mcg) and enteral free water replacement.",
            "Syndrome of Inappropriate ADH (SIADH) & Cerebral Salt Wasting (CSW): Causing severe hyponatremia and exacerbating cerebral edema.",
            "Ventilator-Associated Pneumonia (VAP) & ARDS: High risk due to prolonged mechanical ventilation, microaspiration during coma, and blunt chest trauma.",
          ],
        },
      ],
    },
    {
      id: "severe-tbi.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Life-threatening pitfalls in severe traumatic brain injury.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Allowing SBP to drop < 100–110 mmHg: Even brief hypotension causes irreversible ischemic cell death in the pressure-passive injured brain; initiate norepinephrine early.",
            "Routine prophylactic hyperventilation to PaCO2 < 30 mmHg: Causes intense cerebral vasoconstriction and worsens focal brain ischemia; keep PaCO2 strictly 35–45 mmHg.",
            "Administering hypotonic crystalloids (e.g. 0.45% Saline, Lactated Ringer's, D5W): Hypotonic fluids lower plasma osmolality and exacerbate cytotoxic cerebral edema; use strictly isotonic Normal Saline or Plasmalyte.",
            "Continuing anti-seizure prophylaxis beyond 7 days without documented seizures: Does not prevent chronic epilepsy and causes unnecessary drug toxicity; discontinue Levetiracetam on Day 7.",
            "Failing to recognize Central Diabetes Insipidus in sudden polyuria: Attributing massive urine output to 'fluid clearing' leads to catastrophic hypernatremia (Na+ > 165) and cardiovascular collapse.",
          ],
        },
      ],
    },
    {
      id: "severe-tbi.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "ICP-Guided vs Imaging/Exam-Guided Care (BEST:TRIP Trial) and Optimal Osmotherapy Selection.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "ICP Monitoring vs Clinical/Imaging Management (The BEST:TRIP Trial): The landmark BEST:TRIP trial (Chesnut 2012) evaluated whether routine invasive ICP monitoring improved outcomes compared to a protocol based on serial clinical examinations and CT scans. The trial showed equivalent functional outcomes at 6 months, demonstrating that aggressive physiological management (maintaining normal BP, oxygenation, and temperature) is the key driver of survival. Nonetheless, invasive ICP monitoring remains the international standard of care to guide precise tiered therapies.",
        },
        {
          type: "paragraph",
          text: "3% Hypertonic Saline vs 20% Mannitol: While both agents reduce ICP effectively, hypertonic saline expands intravascular volume and supports systemic blood pressure without causing osmotic diuresis and hypovolemic hypotension. Hypertonic saline is generally preferred as first-line osmotherapy in trauma patients with borderline hemodynamics.",
        },
      ],
    },
  ],
};
