import type { Topic } from "@/content-types";

export const intracranialHypertension: Topic = {
  id: "intracranial-hypertension",
  slug: "intracranial-hypertension",
  title: "Intracranial Hypertension & Cerebral Edema",
  category: "neurology",
  oneLiner: "Monro-Kellie doctrine, ICP waveforms (P2>P1, Lundberg A-waves), CPP targets (60–70 mmHg), herniation syndromes, and the 4-tier BTF management protocol.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Traumatic Brain Injury, Intracranial Pressure Monitoring and Management, and Cerebral Edema",
    },
    {
      title: "Brain Trauma Foundation Guidelines for the Management of Severe Traumatic Brain Injury",
      edition: "4th Edition, 2016 (with 2020 Decompressive Craniectomy update)",
    },
  ],
  currentStatus: "Current as of the Brain Trauma Foundation 4th Edition Guidelines, the Neurocritical Care Society Tiered ICP consensus, and landmark trials (RESCUEicp, DECRA, Eurotherm3239).",
  otherReferences: [
    "Carney N, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15.",
    "Hutchinson PJ, et al. Trial of Decompressive Craniectomy for Traumatic Intracranial Hypertension (RESCUEicp). N Engl J Med. 2016;375(12):1119-1130.",
    "Cooper DJ, et al. Decompressive Craniectomy in Diffuse Traumatic Brain Injury (DECRA). N Engl J Med. 2011;364(16):1493-1502.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "altered-consciousness", label: "Foundational coma examination and FOUR score" },
    { type: "complication", targetId: "brain-death", label: "Catastrophic uncal or central herniation causing brainstem death" },
    { type: "related-to", targetId: "severe-tbi", label: "Traumatic intracranial hypertension and BTF 4th edition tiered protocols" },
    { type: "related-to", targetId: "intracranial-hemorrhage", label: "Mass effect, peri-hematomal edema, and acute hydrocephalus" },
    { type: "related-to", targetId: "acute-ischemic-stroke", label: "Malignant MCA edema and decompressive hemicraniectomy" },
    { type: "related-to", targetId: "severe-sodium-disorders", label: "Target hypernatremia with 3% saline and avoiding hypotonic fluids" },
    { type: "related-to", targetId: "status-epilepticus", label: "Seizures driving metabolic demand and secondary ICP elevation" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "PaCO2 regulation and avoiding high intrathoracic PEEP" },
    { type: "related-to", targetId: "shock", label: "Maintenance of cerebral perfusion pressure (CPP = MAP - ICP)" },
  ],
  sections: [
    {
      id: "intracranial-hypertension.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "intracranial-hypertension-guideline-btf-2016",
          relevance: "Brain Trauma Foundation guidelines on ICP monitoring threshold (>22 mmHg) and CPP target (60-70 mmHg)"
        },
        {
          kind: "trial",
          id: "intracranial-hypertension-rescueicp",
          relevance: "RESCUEicp trial evaluating decompressive craniectomy for refractory intracranial hypertension"
        },
        {
          kind: "trial",
          id: "intracranial-hypertension-decra",
          relevance: "DECRA trial evaluating early bifrontal decompressive craniectomy in moderate intracranial hypertension"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Intracranial hypertension is a life-threatening neurocritical emergency where intracranial pressure exceeds 22 mmHg, risking catastrophic brainstem herniation and secondary cerebral ischemia.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Elevated Intracranial Pressure (ICP > 22 mmHg) complicates severe traumatic brain injury (TBI), massive aneurysmal subarachnoid hemorrhage (aSAH), malignant middle cerebral artery infarction, large intracerebral hemorrhages, acute hydrocephalus, and fulminant hepatic failure. Because the cranium is a rigid, non-compliant bony vault, expanding volume rapidly compromises cerebral perfusion pressure (CPP) and forces brain tissue through rigid internal dural apertures.",
        },
        {
          type: "paragraph",
          text: "Neurocritical care aims to maintain CPP between 60–70 mmHg and keep ICP < 22 mmHg using a disciplined, tiered protocol: baseline neuroprotection (Tier 0), targeted osmotherapy and CSF drainage (Tier 1), neuromuscular blockade and temporary mild hyperventilation (Tier 2), and salvage decompressive craniectomy or barbiturate coma (Tier 3).",
        },
      ],
    },
    {
      id: "intracranial-hypertension.physiology",
      kind: "physiology",
      title: "Monro-Kellie Doctrine, CPP Targets, & ICP Waveform Analysis",
      summary: "The intracranial pressure-volume curve, CPP = MAP - ICP formula, P1/P2/P3 wave morphology, and Lundberg A-waves.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Intracranial dynamics are governed by biophysical volume-pressure relationships and microvascular autoregulation:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. The Monro-Kellie Doctrine",
              value: "Total Intracranial Volume = Volume(Brain ~80%) + Volume(Blood ~10%) + Volume(CSF ~10%) = CONSTANT. Early mass lesions or cerebral edema are buffered by translocating CSF into the spinal subarachnoid space and squeezing venous blood into the jugular veins. Once this compensatory reserve is exhausted, the compliance curve steepens exponentially: tiny increases in volume produce massive spikes in ICP.",
            },
            {
              label: "2. Cerebral Perfusion Pressure (CPP)",
              value: "CPP = Mean Arterial Pressure (MAP) - Intracranial Pressure (ICP) [or CVP, whichever is higher].\nTarget: Maintain CPP strictly between 60–70 mmHg. Avoid CPP < 60 mmHg (triggers severe cerebral ischemia, tissue hypoxia, and secondary neuronal death). Avoid CPP > 70 mmHg (induces hyperdynamic fluid extravasation, worsens vasogenic edema, and increases ARDS risk by 5-fold).",
            },
            {
              label: "3. ICP Pulse Waveform Morphology",
              value: "Normal ICP waveform has 3 synchronized peaks: P1 (Percussion wave: arterial choroid plexus pulsation, tallest); P2 (Tidal wave: cerebral elastance/rebound); P3 (Dicrotic wave: venous dicrotic notch).\nNon-Compliant Brain (Pathognomonic): P2 amplitude exceeds P1 (P2 > P1), indicating critically depleted intracranial compliance.",
            },
            {
              label: "4. Lundberg Pathologic ICP Waves",
              value: "• Lundberg A-Waves ('Plateau Waves'): Sudden steep rises in ICP to 50–100 mmHg lasting 5–20 minutes, accompanied by transient cerebral ischemia; heralds imminent herniation.\n• Lundberg B-Waves: Rhythmic oscillations (0.5–2/min) reaching 20–30 mmHg, reflecting cerebral vasospasm or unstable respiratory drive.\n• Lundberg C-Waves: Small rhythmic fluctuations (4–8/min) synchronized with systemic blood pressure (Traube-Hering waves).",
            },
          ],
        },
        { type: "calculator-embed", calculatorId: "driving-pressure" },
      ],
    },
    {
      id: "intracranial-hypertension.herniation",
      kind: "definition",
      title: "Herniation Syndromes Taxonomy & Clinical Localization",
      summary: "Subfalcine, uncal (CN III compression, Kernohan's notch), central transtentorial, and tonsillar herniation with Cushing's triad.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "When pressure differentials shift brain parenchyma across rigid dural partitions (falx cerebri, tentorium cerebelli, foramen magnum), distinct clinical syndromes emerge:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Uncal (Lateral Transtentorial) Herniation",
              value: "Medial temporal lobe uncus is displaced over the tentorial edge. Compresses the ipsilateral CN III (producing ipsilateral fixed, dilated pupil [anisocoria]) and posterior cerebral artery (PCA infarction causing cortical blindness). Compresses the ipsilateral cerebral peduncle (causing contralateral hemiplegia) OR compresses the contralateral cerebral peduncle against the edge of the tentorium (Kernohan's Notch Phenomenon: causing paradoxical ipsilateral hemiplegia).",
            },
            {
              label: "2. Central (Downward Transtentorial) Herniation",
              value: "Bilateral downward displacement of diencephalon through the tentorial notch. Causes progressive rostrocaudal deterioration: small reactive pupils -> midposition fixed pupils -> decorticate posturing -> decerebrate posturing -> bilateral flaccidity and respiratory arrest. Causes tearing of paramedian basilar perforating arteries (fatal Duret hemorrhages in brainstem).",
            },
            {
              label: "3. Subfalcine (Cingulate) Herniation",
              value: "Cingulate gyrus pushed beneath the falx cerebri. Compresses the anterior cerebral artery (ACA), resulting in contralateral leg weakness and abulia.",
            },
            {
              label: "4. Tonsillar Herniation & Cushing's Triad",
              value: "Cerebellar tonsils forced through the foramen magnum, compressing the medulla oblongata.\nCushing's Triad: (1) Severe Systemic Hypertension with widened pulse pressure; (2) Severe Bradycardia; (3) Irregular Respiration / Apnea. Cushing's triad is a pre-terminal clinical reflex requiring instantaneous emergency intervention.",
            },
          ],
        },
      ],
    },
    {
      id: "intracranial-hypertension.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute Elevated Intracranial Pressure",
      summary: "Differentiate mass lesions, hydrocephalus, diffuse brain edema, and impaired venous outflow.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Acute Obstructive Hydrocephalus: Ventricular enlargement with periventricular transependymal edema; requires emergent External Ventricular Drain (EVD).",
          "Diffuse Cytotoxic Cerebral Edema: Post-cardiac arrest hypoxic-ischemic injury or fulminant hepatic failure; effacement of basal cisterns and sulci.",
          "Extracranial Venous Obstruction: Tight cervical collar or internal jugular vein thrombosis obstructing cerebral venous drainage and causing acute ICP spikes."
]
        }
      ]
    },
    {
      id: "intracranial-hypertension.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Invasive Multimodal Neuromonitoring & Neuroimaging",
      summary: "Invasive ICP measurement criteria, non-invasive optic nerve sheath ultrasound, and CT herniation signs.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Invasive ICP Monitoring (The Gold Standard)", value: "External Ventricular Drain (EVD) or intraparenchymal fiberoptic probe. Indicated in: Severe TBI (GCS <= 8) with abnormal CT, or normal CT with >= 2 risk factors (age > 40, motor posturing, SBP < 90). Pathologic threshold: Sustained ICP > 20-22 mmHg." },
            { label: "CT Radiographic Markers", value: "Effacement of basal cisterns (perimesencephalic/ambient cisterns), midline shift > 5 mm, loss of grey-white differentiation, compressed lateral ventricles." },
            { label: "Optic Nerve Sheath Diameter (ONSD) Ultrasound", value: "Bedside ocular POCUS: ONSD measured 3 mm behind the globe. ONSD > 5.5-6.0 mm has >90% sensitivity for elevated ICP > 20 mmHg." }
          ]
        }
      ]
    },
    {
      id: "intracranial-hypertension.management",
      kind: "management",
      title: "Tiered ICP Management Protocol (BTF 4th Edition & NCS)",
      summary: "Tier 0 (baseline neuroprotection), Tier 1 (hypertonic saline, mannitol, EVD drainage), Tier 2 (paralysis, mild hyperventilation), and Tier 3 (decompressive craniectomy, barbiturates).",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The Brain Trauma Foundation and Neurocritical Care Society recommend a disciplined 4-tiered escalation framework for ICP > 22 mmHg:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Tier 0: Baseline Neuroprotection & Prophylaxis (All Patients)",
              value: "• Head-of-Bed Elevation: 30° with head in neutral midline position (prevents internal jugular vein compression).\n• Avoid Constrictive Collars: Loosen cervical collars and ETT ties.\n• Normothermia: Maintain core temperature strictly 36.0–37.0°C (fever drastically increases cerebral metabolic rate of oxygen CMRO2).\n• Normoglycemia: Target blood glucose 140–180 mg/dL.\n• Baseline Analgesia & Sedation: Propofol + Fentanyl infusions to prevent coughing, straining, or ventilator dyssynchrony.\n• Arterial Line & ICP Monitor / External Ventricular Drain (EVD) placement.",
            },
            {
              label: "Tier 1: First-Line Medical Therapies",
              value: "• CSF Drainage via EVD: Open EVD to drain 5–10 mL CSF intermittently or continuous drainage at +10–15 cmH2O above the external auditory meatus (tragus).\n• Hypertonic Saline (HTS): 3% NaCl (250–500 mL IV bolus over 15 min) OR 23.4% NaCl (30 mL IV bolus over 10 min via central line). Target Serum Sodium: 145–155 mEq/L; target Serum Osmolality < 320 mOsm/kg.\n• Mannitol: 20% solution (0.5–1.0 g/kg IV bolus over 20 min). Acts via rapid rheologic reduction in blood viscosity and osmotic gradient. Caution: Causes profound osmotic diuresis; hold if serum osmolar gap > 20 mOsm/kg or serum osm > 320 mOsm/kg to prevent acute renal tubular injury.",
            },
            {
              label: "Tier 2: Second-Line Medical Rescue",
              value: "• Neuromuscular Blockade: Administer Cisatracurium (bolus + infusion) with Train-of-Four monitoring to abolish shivering, posturing, and intrathoracic venous pressure surges.\n• Temporary Mild Hyperventilation: Titrate mechanical ventilation to PaCO2 30–35 mmHg. Causes cerebral arteriolar vasoconstriction, rapidly reducing cerebral blood volume. WARNING: Never use prophylactic hyperventilation; prolonged or severe hyperventilation (PaCO2 < 30) causes severe cerebral ischemia.\n• Repeat Emergent Non-Contrast Head CT: Rule out new expanding surgical hematoma or hydrocephalus.",
            },
            {
              label: "Tier 3: Refractory Salvage Therapies",
              value: "• High-Dose Barbiturate Coma: Pentobarbital (10 mg/kg loading dose over 30 min, then 5 mg/kg/hr x 3 hours, then 1–2 mg/kg/hr maintenance). Suppresses cerebral metabolism (burst suppression pattern on continuous cEEG: 1 burst every 10–15 seconds). Requires continuous norepinephrine infusion due to profound myocardial depression and vasoplegia.\n• Decompressive Craniectomy: Large unilateral frontotemporoparietal hemicraniectomy (≥ 12 × 15 cm) or bifrontal craniectomy.",
            },
          ],
        },
      ],
    },
    {
      id: "intracranial-hypertension.trials",
      kind: "landmark-trials",
      title: "Landmark Trials: RESCUEicp, DECRA, & Eurotherm3239",
      summary: "Decompressive craniectomy mortality vs functional outcome trade-offs, and why hypothermia failed in Eurotherm3239.",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Major randomized trials have established the precise benefits and boundaries of refractory interventions:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "RESCUEicp Trial (NEJM 2016)",
              value: "In 408 TBI patients with refractory ICP > 25 mmHg despite Tier 1/2 therapies, decompressive craniectomy significantly reduced 6-month mortality compared to medical therapy (26.9% vs 48.9%, p < 0.001). However, craniectomy resulted in higher rates of vegetative state (8.5% vs 2.1%) and severe upper/lower disability, with identical rates of good functional recovery (approx 42%). Lower mortality comes with increased long-term dependence.",
            },
            {
              label: "DECRA Trial (NEJM 2011)",
              value: "Early bifrontal craniectomy for mild diffuse TBI with ICP > 20 mmHg lowered ICP and ICU days but increased unfavorable functional outcomes (GOSE score) at 6 months; established that craniectomy should NOT be performed early for mild diffuse swelling.",
            },
            {
              label: "Eurotherm3239 Trial (NEJM 2015)",
              value: "Therapeutic hypothermia (32–35°C) for refractory ICP in TBI was stopped early for harm: hypothermia failed to improve outcomes and resulted in significantly worse functional recovery and higher mortality compared to standard normothermic care.",
            },
          ],
        },
      ],
    },
    {
      id: "intracranial-hypertension.complications",
      kind: "complications",
      title: "Complications of Intracranial Hypertension & Its Therapies",
      summary: "Cerebral herniation, neurogenic pulmonary edema, hypernatremic renal failure, and barbiturate shock.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Irreversible Brainstem Herniation and Progression to Brain Death.",
            "Neurogenic Pulmonary Edema (NPE): Massive sympathetic surge causing acute pulmonary capillary hypertension, protein-rich edema, and severe hypoxemia.",
            "Osmotherapy Toxicity: Severe hyperosmolar metabolic state, acute tubular necrosis, and rebound ICP elevation upon rapid cessation.",
            "Barbiturate Hemodynamic Collapse & Sepsis: Severe cardiac depression, vasoplegic shock, hypokalemia, and delayed awakening lasting days.",
            "Syndrome of the Trephined ('Sinking Skin Flap'): Atmospheric pressure causing neurological deficit months after decompressive craniectomy; reversed by cranioplasty.",
          ],
        },
      ],
    },
    {
      id: "intracranial-hypertension.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical mistakes in elevated ICP management.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Using prolonged prophylactic hyperventilation (PaCO2 < 30 mmHg): Induces intense cerebral vasoconstriction, causing severe secondary cerebral infarction in penumbral tissue.",
            "Treating elevated ICP without monitoring blood pressure: Lowering MAP in a patient with elevated ICP collapses cerebral perfusion pressure (CPP = MAP - ICP); always maintain CPP 60–70 mmHg.",
            "Tightening endotracheal tube ties or neck collars: Directly compresses external and internal jugular veins, blocking intracranial venous outflow and causing massive ICP spikes.",
            "Administering hypotonic IV fluids (0.45% NaCl or D5W): Free water rapidly crosses the blood-brain barrier into injured brain parenchyma, drastically worsening cerebral edema; use only isotonic or hypertonic solutions.",
            "Ignoring P2 > P1 on the ICP waveform: Indicates critically exhausted intracranial compliance; even minimal stimulation will trigger catastrophic plateau waves.",
          ],
        },
      ],
    },
    {
      id: "intracranial-hypertension.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Brain tissue oxygenation (PbtO2) guided management (BOOST-3 trial) and optimal osmotherapy agent (3% HTS vs Mannitol).",
      provenance: "trial",
      body: [
        {
          type: "paragraph",
          text: "Brain Tissue Oxygenation (PbtO2) vs ICP-Only Monitoring: Invasive parenchymal Clarke-type oxygen micro-probes directly measure brain interstitial tissue oxygen tension (PbtO2; normal > 20 mmHg). Cerebral tissue hypoxia (PbtO2 < 20 mmHg) frequently occurs even when ICP is < 20 mmHg. The phase-2 BOOST-2 trial demonstrated that protocolized management targeting both ICP < 20 mmHg AND PbtO2 > 20 mmHg significantly reduced brain tissue hypoxia and showed favorable trends in neurological recovery compared to ICP-only monitoring. The definitive phase-3 BOOST-3 trial evaluates this in severe TBI.",
        },
        {
          type: "paragraph",
          text: "Hypertonic Saline (HTS) vs Mannitol: Meta-analyses show equimolar 3% HTS produces slightly faster reduction in ICP and longer duration of effect than 20% mannitol, without the risk of intravascular hypovolemia from osmotic diuresis, though long-term functional neurological outcomes remain comparable.",
        },
      ],
    },
  ],
};
