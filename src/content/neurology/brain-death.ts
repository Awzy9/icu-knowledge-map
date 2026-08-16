import type { Topic } from "@/content-types";

export const brainDeath: Topic = {
  id: "brain-death",
  slug: "brain-death",
  title: "Brain Death / Death by Neurologic Criteria (BD/DNC)",
  category: "neurology",
  oneLiner: "2023 AAN/AAP/CNS/SCCM consensus guideline: prerequisites, brainstem reflex examination, apnea testing on and off ECMO, valid ancillary tests, and donor management goals.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter on Determination of Brain Death and Management of the Brain-Dead Organ Donor",
    },
    {
      title: "2023 AAN/AAP/CNS/SCCM Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline",
      edition: "Neurology 2023;101(24):1112-1132",
    },
  ],
  currentStatus: "Current as of the 2023 AAN/AAP/CNS/SCCM Unified Pediatric and Adult Brain Death Consensus Practice Guideline, the Uniform Determination of Death Act (UDDA), and international ECMO apnea testing standards.",
  otherReferences: [
    "Greer DM, et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline: Report of the AAN, AAP, CNS, and SCCM. Neurology. 2023;101(24):1112-1132.",
    "Wijdicks EF, et al. Evidence-based guideline update: determining brain death in adults. Neurology. 2010;74(23):1911-1918.",
    "Kotloff RM, et al. Management of the potential organ donor in the ICU: Society of Critical Care Medicine/American College of Chest Physicians/Association of Organ Procurement Organizations Consensus Statement. Crit Care Med. 2015;43(6):1291-1325.",
    "Bravo L, et al. Apnea testing during extracorporeal membrane oxygenation in the determination of death by neurologic criteria. Neurocrit Care. 2021;35(2):541-550.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "altered-consciousness", label: "Foundational neuro-localization and distinguishing coma from brain death" },
    { type: "prerequisite", targetId: "intracranial-hypertension", label: "Catastrophic ICP elevation leading to global cerebral herniation and arrest" },
    { type: "related-to", targetId: "severe-tbi", label: "Severe traumatic brain injury progressing to brainstem death" },
    { type: "related-to", targetId: "intracranial-hemorrhage", label: "Massive spontaneous hemorrhage precipitating whole-brain infarction" },
    { type: "related-to", targetId: "status-epilepticus", label: "Exclusion of nonconvulsive status epilepticus as a reversible mimic" },
    { type: "related-to", targetId: "mechanical-ventilation", label: "Apnea testing mechanics, pre-oxygenation, and apneic CPAP" },
  ],
  sections: [
    {
      id: "brain-death.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "brain-death-guideline-aan-2023",
          relevance: "AAN/AAP/CNS/SCCM consensus practice guideline on brain death / death by neurologic criteria"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Death by Neurologic Criteria (BD/DNC) is the permanent, irreversible cessation of all functions of the entire brain, including the brainstem, with identical legal and ethical status as cardiopulmonary death.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Brain death, formally designated Death by Neurologic Criteria (BD/DNC), is a definitive determination of death recognized by law (Uniform Determination of Death Act [UDDA]) and medical consensus. It is NOT a coma, vegetative state, prognosis, or decision to withdraw life-sustaining therapy; it is the physical cessation of biological life. Note: Clinicians must always adhere to applicable local, state, national legal statutes and institutional policies governing declaration.",
        },
        {
          type: "paragraph",
          text: "The 2023 unified consensus practice guideline issued jointly by the American Academy of Neurology (AAN), American Academy of Pediatrics (AAP), Child Neurology Society (CNS), and Society of Critical Care Medicine (SCCM) establishes an unambiguous 5-step determination pathway: (1) Establish irreversible etiology and fulfill strict prerequisites; (2) Rigorous clinical brainstem reflex examination; (3) Protocolized Apnea Testing; (4) Valid Ancillary Testing (when required); and (5) Systematic Organ Donor Management Goals (DMGs).",
        },
      ],
    },
    {
      id: "brain-death.differential-states",
      kind: "differential-diagnosis",
      title: "Altered States of Consciousness: Brain Death vs Coma vs Vegetative State",
      summary: "Rigorous clinical distinction between Death by Neurologic Criteria, Coma, Unresponsive Wakefulness Syndrome (Vegetative State), and Minimally Conscious State.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Clinical differentiation across the spectrum of severe consciousness disorders:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Brain Death / Death by Neurologic Criteria (BD/DNC)",
              value: "Pathology: Complete irreversible destruction of cerebral hemispheres AND brainstem. Clinical Features: Deep coma, total absence of all brainstem reflexes, complete apnea (zero respiratory drive). Sleep-wake cycles: ABSENT. EEG: Electrocerebral silence. Prognosis: Biological death.",
            },
            {
              label: "2. Coma",
              value: "Pathology: Acute depression of cerebral hemispheres and/or the ascending reticular activating system (ARAS). Clinical Features: Unarousable unresponsiveness, closed eyes, absence of sleep-wake cycles. Crucially, BRAINSTEM REFLEXES AND/OR SPONTANEOUS BREATHING ARE PRESERVED. Prognosis: Potentially reversible depending on underlying etiology.",
            },
            {
              label: "3. Vegetative State / Unresponsive Wakefulness Syndrome (UWS)",
              value: "Pathology: Severe bilateral cortical/subcortical injury with PRESERVED hypothalamic and brainstem function. Clinical Features: Spontaneous eye opening, intact sleep-wake cycles, preserved spontaneous respiration, normal cranial nerve reflexes, but TOTAL ABSENCE of cognitive awareness or purposeful interaction with the environment.",
            },
            {
              label: "4. Minimally Conscious State (MCS)",
              value: "Pathology: Severe brain injury with fragmented cortical networks. Clinical Features: Inconsistent but reproducible, discernible behavioral evidence of consciousness (e.g. sustained visual pursuit/fixation, reaching for objects, following simple commands, contingent vocalizations).",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.prerequisites",
      kind: "definition",
      title: "The 4 Mandatory Prerequisites & Confounder Exclusion Checklist",
      summary: "Irreversible structural etiology, normothermia (≥ 36.0°C), hemodynamic stability (SBP ≥ 100), clearance of sedatives/NMBAs, and hypothermia/TTM waiting periods.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Before initiating a clinical brain death evaluation, all four prerequisites must be rigorously satisfied without exception:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Established Irreversible Catastrophic Brain Injury",
              value: "Neuroimaging (CT or MRI) or clinical history demonstrating a catastrophic structural insult (massive trauma, catastrophic intracranial hemorrhage, massive ischemic stroke, or documented global hypoxic-ischemic brain injury) capable of causing total brain destruction.",
            },
            {
              label: "2. Core Normothermia (≥ 36.0°C / 96.8°F)",
              value: "Core temperature (esophageal, bladder, or rectal) must be ≥ 36.0°C (≥ 35.5°C in pediatrics). Hypothermia suppresses brainstem reflexes and slows drug clearance; active warming must be applied.",
            },
            {
              label: "3. Hemodynamic Stability (SBP ≥ 100 mmHg)",
              value: "Systolic blood pressure ≥ 100 mmHg (or MAP ≥ 75 mmHg in adults; age-appropriate MAP in pediatrics) to ensure adequate end-organ and brainstem perfusion, using IV fluids and vasopressors (norepinephrine/vasopressin) as needed.",
            },
            {
              label: "4. Complete Exclusion of Pharmacologic Confounders & Drug Clearance",
              value: "• Pharmacologic Clearance Assessment (2023 AAN Guideline): Five elimination half-lives is only a theoretical minimum baseline for patients with normal organ function. Drug clearance is substantially delayed by acute kidney injury, hepatic failure, targeted temperature management (TTM), ECMO, or prolonged high-dose infusions with lipophilic accumulation. Clinicians must account for active metabolites (e.g. morphine-6-glucuronide, normeperidine).\n• Therapeutic Drug Monitoring: When available, measure drug levels (e.g. serum pentobarbital < 10 mcg/mL or undetectable). If drug clearance cannot be assured with certainty or drug levels are unavailable, clinical evaluation alone is insufficient and an ANCILLARY TEST is mandatory.\n• Neuromuscular Blockade Clearance: Document Train-of-Four (TOF) 4/4 twitches AND presence of deep tendon reflexes before testing.\n• Post-Cardiac Arrest Targeted Temperature Management (TTM): Hypothermia severely impairs cytochrome P450 and renal sedative clearance; guidelines mandate waiting at least 24 hours AFTER rewarming to core normothermia (≥ 36.0°C) before initiating clinical evaluation (longer if sedatives were administered during TTM).",
            },
            {
              label: "5. Metabolic & Endocrine Confounder Correction",
              value: "Exclude profound electrolyte disturbances (Na+ must be 130–160 mEq/L), severe acid-base derangements (pH > 7.20), and severe uncorrected endocrine collapse (myxedema, panhypopituitarism, adrenal crisis).",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.exam",
      kind: "diagnosis",
      title: "Step-by-Step Clinical Brainstem Reflex Examination",
      summary: "Coma, bilateral fixed pupils, absent corneal, oculocephalic, cold calorics, gag, and cough reflexes.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The clinical examination must demonstrate complete absence of cerebral and brainstem function across all domains:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Coma / Unresponsiveness",
              value: "Complete absence of any cerebral motor response to noxious stimuli (nailbed pressure, supraorbital ridge, temporomandibular joint). No grimacing, decorticate/decerebrate posturing, or purposeful movement. (Spinal reflexes such as plantar flexion, abdominal reflexes, or Lazarus sign originate from the spinal cord and do NOT invalidate brain death).",
            },
            {
              label: "2. Pupillary Light Reflex (CN II / III)",
              value: "Pupils fixed bilaterally to intense light (midposition 4–6 mm or dilated; zero constriction).",
            },
            {
              label: "3. Corneal Reflex (CN V / VII)",
              value: "No blink or facial twitching upon touching the cornea bilaterally with a sterile cotton swab or saline drops.",
            },
            {
              label: "4. Oculocephalic Reflex ('Doll's Eyes', CN III / VI / VIII)",
              value: "Complete absence of eye movement during rapid horizontal and vertical head rotation (test only after clearing cervical spine).",
            },
            {
              label: "5. Oculovestibular Reflex (Cold Caloric Test, CN III / VI / VIII)",
              value: "Elevate head 30°. Confirm tympanic membranes are intact. Irrigate each EAC with 50 mL of ice-cold water over 30 seconds. Observe eyes for 1 minute. Complete absence of any eye movement in both eyes (wait ≥ 5 minutes before testing the opposite ear).",
            },
            {
              label: "6. Pharyngeal & Tracheal Reflexes (CN IX / X)",
              value: "• Gag Reflex: Absent pharyngeal contraction upon vigorous stimulation of bilateral posterior pharynx.\n• Cough Reflex: Absent cough upon deep endotracheal suctioning down to the carina.",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.apnea-test",
      kind: "diagnosis",
      title: "Protocolized Apnea Testing: Standard & ECMO Protocols",
      summary: "Pre-oxygenation, baseline ABG, disconnect mechanics, PaCO2 ≥ 60 mmHg threshold (or ΔPaCO2 ≥ 20), abort criteria, and ECMO sweep gas adjustments.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The Apnea Test definitively assesses the integrity of the medullary respiratory center by providing a maximum hypercapnic and acidemic respiratory stimulus:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Step 1: Pre-Oxygenation & Baseline Setup",
              value: "Pre-oxygenate with 100% FiO2 for ≥ 10 minutes to achieve baseline PaO2 ≥ 200 mmHg. Titrate ventilator to achieve baseline PaCO2 35–45 mmHg and normal arterial pH. Ensure SBP ≥ 100 mmHg.",
            },
            {
              label: "Step 2: Disconnection & Apneic Oxygenation",
              value: "Disconnect patient from mechanical ventilator. Deliver 100% oxygen via an insufflation catheter placed at the level of the carina (6–8 L/min) OR deliver oxygen via a CPAP valve (5–10 cmH2O CPAP with 100% FiO2) to prevent alveolar derecruitment.",
            },
            {
              label: "Step 3: Observation for Spontaneous Respiratory Effort",
              value: "Observe continuously for 8 to 10 minutes for any respiratory effort (abdominal or chest wall excursion). PaCO2 typically rises by 2.5–3.0 mmHg per minute of apnea.",
            },
            {
              label: "Step 4: Confirmatory ABG & Diagnostic Thresholds",
              value: "Draw arterial blood gas at 8–10 minutes. A positive apnea test confirming death requires: (1) Zero spontaneous respiratory effort; AND (2) PaCO2 ≥ 60 mmHg (or a rise of ≥ 20 mmHg above baseline in chronic hypercapnia) with arterial pH < 7.30.",
            },
            {
              label: "Step 5: Apnea Testing on Extracorporeal Membrane Oxygenation (ECMO)",
              value: "In patients on VV-ECMO or VA-ECMO: (1) Pre-oxygenate with 100% FiO2 via both ventilator and ECMO gas blender; (2) Decrease ECMO sweep gas flow to 0.5–1.0 L/min to allow CO2 accumulation while maintaining 100% O2 flow; (3) Provide apneic CPAP with 100% FiO2 to the endotracheal tube; (4) Monitor patient continuously for respiratory effort; (5) Draw serial ABGs until arterial PaCO2 is ≥ 60 mmHg with pH < 7.30.",
            },
            {
              label: "Abort Criteria",
              value: "Immediately reconnect ventilator and abort test if: SBP < 90 mmHg, SpO2 < 85% for > 30 seconds, or malignant cardiac arrhythmias occur. If the patient is hemodynamically unable to complete apnea testing, an Ancillary Test is mandatory.",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.ancillary",
      kind: "diagnosis",
      title: "Valid Ancillary Testing Modalities",
      summary: "Four-vessel cerebral angiography, radionuclide cerebral scintigraphy (HMPAO), and transcranial Doppler criteria.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Ancillary testing is indicated ONLY when: (1) Clinical examination cannot be fully completed (e.g. severe facial trauma, pupillary damage); (2) Apnea testing cannot be completed due to profound hypoxemia/hypotension; or (3) Significant drug/metabolic confounders cannot be cleared. Note: The 2023 AAN guideline does NOT recommend EEG or CT Angiography as standalone ancillary tests due to inadequate sensitivity/specificity.",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Conventional 4-Vessel Cerebral Angiography (Gold Standard)",
              value: "Catheter angiography demonstrating complete absence of intracranial blood flow at the level of the carotid bifurcations and vertebral entry into the skull base (filling of external carotid branches confirms technique).",
            },
            {
              label: "2. Radionuclide Cerebral Scintigraphy (99mTc-HMPAO / ECD SPECT)",
              value: "Demonstrates total absence of radiotracer uptake in cerebral hemispheres and cerebellum (the 'empty lightbulb' sign or 'halo' sign) with preserved external carotid / scalp flow (the 'hot nose' sign).",
            },
            {
              label: "3. Transcranial Doppler (TCD) Ultrasonography",
              value: "Bilateral insonation of anterior and posterior circulation showing complete absence of diastolic flow with reverberating flow (biphasic oscillatory flow) or small systolic spikes (< 50 cm/s) across two examinations separated by ≥ 30 minutes.",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.donor-management",
      kind: "management",
      title: "Organ Donor Management Goals (DMGs) & Resuscitation",
      summary: "Rule of 100s, hormone replacement protocol (levothyroxine, methylprednisolone, vasopressin, insulin), and lung-protective ventilation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Systematic physiologic management after declaration of death to preserve organ transplant viability:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. The 'Rule of 100s' Hemodynamic Targets",
              value: "• SBP > 100 mmHg (or MAP 65–85 mmHg).\n• Urine Output: 1.0–3.0 mL/kg/hr (100–250 mL/hr).\n• PaO2 > 100 mmHg on FiO2 ≤ 0.40 and PEEP 5–8 cmH2O (PaO2/FiO2 > 300).\n• Hemoglobin > 7.0–8.0 g/dL.\n• Blood Glucose: 100–180 mg/dL.",
            },
            {
              label: "2. The 4-Drug Hormone Replacement Protocol",
              value: "Brain death destroys the hypothalamic-pituitary axis. Initiate hormone replacement immediately:\n1. Vasopressin: Continuous infusion at 0.5–2.4 U/hr (0.01–0.04 U/min) to treat Central Diabetes Insipidus and reduce high-dose adrenergic vasopressor exposure.\n2. Methylprednisolone: 15 mg/kg IV bolus (or 1000 mg IV) to blunt donor systemic cytokine storm and improve lung transplant recovery.\n3. Levothyroxine (T4): 20 mcg IV bolus, then 10 mcg/hr infusion (or T3 4 mcg bolus, then 3 mcg/hr) to restore depleted intracellular ATP and cardiac contractility.\n4. Regular Insulin: Continuous IV infusion titrated to maintain blood glucose strictly 110–180 mg/dL.",
            },
          ],
        },
      ],
    },
    {
      id: "brain-death.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Brain Death Evaluation",
      summary: "Critical diagnostic errors to avoid during determination of death by neurologic criteria.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Confusing spinal cord reflexes (Lazarus sign, triple flexion, plantar flexion) with cerebral motor responses: Spinal reflexes originate from viable spinal cord segments and do not invalidate brain death; educate bedside staff and families.",
            "Initiating apnea testing in a hypothermic (< 36.0°C) or hypotensive (SBP < 100) patient: Violates mandatory prerequisites and triggers rapid cardiac arrest during testing.",
            "Relying on CTA or EEG as standalone ancillary tests: The 2023 AAN consensus does not recognize CTA or EEG as definitive ancillary tests; use 4-vessel angiography, nuclear scintigraphy (HMPAO), or TCD.",
            "Failing to wait adequate half-lives after therapeutic hypothermia or sedation: Hypothermia severely impairs liver and renal drug clearance; wait at least 24 hours after rewarming before testing.",
            "Allowing severe hypernatremia (Na+ > 165) or severe acidosis (pH < 7.10) to persist: Severe metabolic derangements can mimic brainstem reflex suppression; correct before declaring death.",
          ],
        },
      ],
    },
    {
      id: "brain-death.complications",
      kind: "complications",
      title: "Complications & Apnea Test Safety Triggers",
      summary: "Structured recognition of neurogenic autonomic storm, panhypopituitarism, and apnea test hemodynamic instability.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Autonomic Storm", value: "Massive catecholamine storm during herniation causing extreme hypertension and neurogenic cardiomyopathy, followed immediately by total loss of sympathetic tone, profound vasodilatory shock, and severe hypothermia." },
            { label: "Endocrine & Metabolic Collapse", value: "Acute panhypopituitarism causing central diabetes insipidus (polyuria > 4-5 L/day, hypernatremia Na+ > 155), severe central hypothyroidism, and adrenal insufficiency." },
            { label: "Apnea Testing Complications", value: "Severe hypoxemia, tension pneumothorax, life-threatening hypotension (SBP < 90), or malignant ventricular arrhythmias during the apnea trial." },
            { label: "Apnea Test Abort Criteria", value: "If SBP drops < 90 mmHg or SpO2 drops < 85% despite preoxygenation: IMMEDIATELY reconnect mechanical ventilator, draw blood gas, and if PaCO2 >= 60 mmHg (and >= 20 mmHg above baseline), the test is valid; if not, proceed to Ancillary Testing (Four-vessel cerebral angiography, radionuclide brain scan, or transcranial Doppler)." }
          ]
        }
      ]
    },
],
};
