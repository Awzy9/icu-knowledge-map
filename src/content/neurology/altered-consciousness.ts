import type { Topic } from "@/content-types";

export const alteredConsciousness: Topic = {
  id: "altered-consciousness",
  slug: "altered-consciousness",
  title: "Altered Consciousness, Coma, & Delirium in the ICU",
  category: "neurology",
  oneLiner: "ARAS neuroanatomy, structural vs toxic-metabolic coma, the comprehensive Coma Exam (pupils, cold calorics, posturing), FOUR score, and CAM-ICU delirium.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Coma, Brain Death, Delirium and Sedation in the ICU, and Neurocritical Care Monitoring",
    },
    {
      title: "Plum and Posner's Diagnosis of Stupor and Coma",
      edition: "5th Edition, 2019",
    },
  ],
  currentStatus: "Current as of the SCCM PADIS Guidelines on Delirium, Neurocritical Care Society consensus on coma assessment, and the Salzburg Criteria for NCSE.",
  otherReferences: [
    "Wijdicks EF, et al. Validation of a new coma scale: The FOUR score. Ann Neurol. 2005;58(4):585-593.",
    "Ely EW, et al. Evaluation of delirium in critically ill patients: validation of the Confusion Assessment Method for the Intensive Care Unit (CAM-ICU). Crit Care Med. 2001;29(7):1370-1379.",
    "Devlin JW, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption (PADIS) in Adult Patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.",
  ],
  relationships: [
    { type: "differential", targetId: "status-epilepticus", label: "Nonconvulsive status epilepticus mimicking coma" },
    { type: "differential", targetId: "intracranial-hypertension", label: "Mass effect, cerebral edema, and impending herniation" },
    { type: "differential", targetId: "brain-death", label: "Complete and irreversible cessation of all brain function" },
    { type: "related-to", targetId: "sepsis", label: "Sepsis-associated encephalopathy" },
    { type: "related-to", targetId: "hypoxemic-respiratory-failure", label: "Hypoxic-ischemic encephalopathy" },
    { type: "related-to", targetId: "hypercapnic-respiratory-failure", label: "Severe acute CO2 narcosis" },
    { type: "related-to", targetId: "acid-base-disorders", label: "Severe metabolic derangements and toxic encephalopathy" },
  ],
  sections: [
    {
      id: "altered-consciousness.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "altered-guideline-padis-2018",
          relevance: "SCCM PADIS guidelines on ICU delirium screening, prevention, and sedation management"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Altered consciousness in the ICU represents acute neuro-axial dysfunction ranging from hypoactive delirium to unarousable coma, requiring systematic distinction between structural lesions and diffuse toxic-metabolic insults.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Consciousness comprises two independent neurobiological components: (1) Arousal (wakefulness: mediated by the Ascending Reticular Activating System [ARAS] in the brainstem tegmentum and thalamus); and (2) Awareness (content: mediated by functional, bilateral frontoparietal cerebral cortices). Coma results from either bilateral diffuse cortical dysfunction or acute anatomical disruption/compression of the brainstem ARAS.",
        },
        {
          type: "paragraph",
          text: "Bedside evaluation must rapidly differentiate structural surgical emergencies (intracranial hemorrhage, uncal herniation, basilar artery occlusion, acute hydrocephalus) from reversible toxic-metabolic encephalopathies (hypoglycemia, sedative accumulation, sepsis-associated encephalopathy, uremia, hyperammonemia, nonconvulsive status epilepticus).",
        },
      ],
    },
    {
      id: "altered-consciousness.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Unresponsive Coma in the ICU",
      summary: "Systematic anatomical breakdown: Structural brainstem/hemispheric lesions vs diffuse toxic-metabolic encephalopathy.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
          "Nonconvulsive Status Epilepticus (NCSE): Subtle or absent motor signs with persistent profound coma; continuous EEG is the only definitive diagnostic test.",
          "Toxic-Metabolic Encephalopathy: Hepatic encephalopathy, uremia, severe electrolyte derangements, septic encephalopathy (diffuse symmetric slowing on EEG, intact brainstem reflexes).",
          "Basilar Artery Occlusion / Locked-In Syndrome: Preserved vertical eye movements and consciousness with complete tetraplegia; easily mistaken for coma without careful cranial nerve testing.",
          "Psychogenic Unresponsiveness: Normal pupil reflexes, resistance to eye opening, forced downward gaze, normal EEG."
]
        }
      ]
    },
    {
      id: "altered-consciousness.terminology",
      kind: "definition",
      title: "Clinical Spectrum: Coma, Delirium, Sedation, & Locked-In Syndrome",
      summary: "Crucial diagnostic differentiation between coma, hypoactive/hyperactive delirium, sedative accumulation, locked-in syndrome, and brain death.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            {
              label: "Coma",
              value: "Unarousable unresponsiveness. The eyes remain closed, and the patient exhibits no purposeful response to external or noxious stimuli, and no comprehensible speech.",
            },
            {
              label: "Delirium",
              value: "An acute, fluctuating disturbance of attention, awareness, and cognition. Subtypes: (1) Hyperactive (agitation, hallucinations); (2) Hypoactive (withdrawn, somnolent, flat affect — easily misdiagnosed as depression or coma; carries higher mortality); (3) Mixed. Screened via CAM-ICU or ICDSC.",
            },
            {
              label: "Sedative Accumulation",
              value: "Iatrogenic drug-induced depression of consciousness due to prolonged infusions of lipophilic sedatives (propofol, midazolam, fentanyl) or impaired renal/hepatic clearance. Reversible upon spontaneous awakening trial (SAT).",
            },
            {
              label: "Locked-In Syndrome",
              value: "Ventral pontine infarction (basilar artery thrombosis). Complete loss of all voluntary motor function and lower cranial nerves, but cognitive awareness, vertical eye movements, and upper eyelid blinking remain intact. Patient is fully conscious inside a paralyzed body.",
            },
            {
              label: "Brain Death / DNC",
              value: "Permanent, irreversible cessation of all clinical functions of the entire brain, including the brainstem. (See dedicated Brain Death topic).",
            },
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.exam",
      kind: "diagnosis",
      title: "The Comprehensive Coma Examination Protocol",
      summary: "Systematic neuro-localization: pupillary light reflex, oculocephalic/cold calorics, corneal reflex, and decorticate vs decerebrate posturing.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "A disciplined neuro-ophthalmologic and brainstem examination localizes the level of neural injury within minutes:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Pupillary Light Reflexes (CN II / III)",
              value: "• Unilateral Fixed & Dilated (Anisocoria > 6 mm): Compressive uncal herniation stretching ipsilateral CN III parasympathetic fibers (neurosurgical emergency).\n• Bilateral Pinpoint Reactive (< 1.5 mm): Pontine tegmental hemorrhage (loss of sympathetic descending fibers) OR opioid/organophosphate overdose.\n• Bilateral Midposition Fixed (4–5 mm): Midbrain tectal/tegmental damage.\n• Bilateral Fixed & Dilated: Severe global anoxic-ischemic midbrain damage.",
            },
            {
              label: "2. Ocular Motility & Vestibulo-Ocular Reflexes",
              value: "• Oculocephalic Reflex ('Doll's Eyes'): Rapid passive horizontal head rotation (ensure cervical spine clearance). Normal comatose response: Eyes conjugately rotate opposite to head motion (intact pons/midbrain/MLF).\n• Oculovestibular Reflex (Cold Caloric Test): Confirm intact tympanic membrane, elevate head 30°, instill 30–50 mL ice-cold water into ear canal. Intact Brainstem: Slow conjugate tonic deviation of both eyes toward the irrigated cold ear (lasts 2–3 mins). Absent Response: Bilateral destruction of pontomedullary vestibular nuclei or MLF.",
            },
            {
              label: "3. Corneal & Gag Reflexes",
              value: "• Corneal Reflex: CN V1 sensory -> CN VII motor (pons).\n• Gag / Cough Reflexes: CN IX sensory -> CN X motor (medulla).",
            },
            {
              label: "4. Motor Patterns & Posturing",
              value: "• Decorticate Posturing (Abnormal Flexion): Arm adduction and flexion at elbows, extension of legs. Indicates destructive hemispheric or diencephalic injury above the red nucleus (rubrospinal tract intact).\n• Decerebrate Posturing (Abnormal Extension): Rigid arm extension, internal rotation, pronation with leg extension. Indicates injury below the red nucleus at the midbrain / rostral pontine level (uninhibited vestibulospinal excitation; carries worse prognosis).\n• Flaccid / Atonic: Medullary compression or catastrophic spinal shock.",
            },
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.scores",
      kind: "severity",
      title: "Coma Severity: The FOUR Score versus Glasgow Coma Scale (GCS)",
      summary: "Full Outline of UnResponsiveness (FOUR) score advantages in intubated patients over traditional GCS.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "The Full Outline of UnResponsiveness (FOUR) Score (Wijdicks et al., Ann Neurol 2005) is specifically designed for the ICU, evaluating four testable domains (scores 0–4 each; total score 0–16):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "Eye Response (0–4)",
              value: "4 = Eyelids open, tracking or blinking to command; 3 = Eyelids open but not tracking; 2 = Eyelids closed, opens to loud voice; 1 = Eyelids closed, opens to pain; 0 = Eyelids remain closed with pain.",
            },
            {
              label: "Motor Response (0–4)",
              value: "4 = Thumbs-up, fist, or peace sign to command; 3 = Localizing to pain; 2 = Flexion response to pain; 1 = Extensor posturing; 0 = No motor response or generalized myoclonus.",
            },
            {
              label: "Brainstem Reflexes (0–4)",
              value: "4 = Pupillary and corneal reflexes present; 3 = One pupil wide and fixed; 2 = Pupillary OR corneal reflexes absent; 1 = Pupillary AND corneal reflexes absent; 0 = Absent pupil, corneal, AND cough reflexes.",
            },
            {
              label: "Respiration (0–4)",
              value: "4 = Regular breathing pattern; 3 = Cheyne-Stokes breathing; 2 = Spontaneous breathing over ventilator rate; 1 = Breathing at ventilator rate; 0 = Apnea or breathing completely at machine rate.",
            },
          ],
        },
        {
          type: "callout",
          tone: "guideline",
          text: "The FOUR score avoids the major limitation of the Glasgow Coma Scale (GCS) in intubated patients, where the verbal component cannot be tested (e.g. GCS '1T'). Furthermore, the FOUR score explicitly detects early brainstem herniation and vegetative/locked-in states.",
        },
      ],
    },
    {
      id: "altered-consciousness.delirium",
      kind: "diagnosis",
      title: "ICU Delirium Assessment & Prevention (PADIS Guidelines)",
      summary: "CAM-ICU and ICDSC diagnostic criteria, non-pharmacologic sleep/mobility bundles, and avoiding routine antipsychotics.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Delirium occurs in 50–80% of mechanically ventilated patients and is an independent predictor of mortality, prolonged mechanical ventilation, and long-term cognitive impairment (dementia):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "CAM-ICU Protocol (4 Features)",
              value: "1. Acute Onset or Fluctuating Course (RASS fluctuation from baseline);\nAND\n2. Inattention (Save-A-Ha-Art letter squeeze test: > 2 errors);\nAND EITHER\n3. Altered Level of Consciousness (current RASS anything other than 0);\nOR\n4. Disorganized Thinking (simple 4-question logic test + command: > 1 error).\nPositive CAM-ICU = Feature 1 + 2 + (3 or 4).",
            },
            {
              label: "PADIS Multi-Component Prevention Bundle",
              value: "• A — Assess, Prevent, and Manage Pain (analgesia-first approach)\n• B — Both SAT and SBT daily\n• C — Choice of Sedation (prefer Dexmedetomidine over Benzodiazepines)\n• D — Delirium Monitoring & Management (early mobility, cognitive stimulation)\n• E — Early Mobility and Exercise\n• F — Family Engagement and Sleep Promotion (noise reduction, day/night light cycling).",
            },
            {
              label: "Antipsychotic Evidence",
              value: "The 2018 PADIS guidelines recommend AGAINST routine use of haloperidol, quetiapine, or atypicals to prevent or treat delirium, as large RCTs (MIND-USA) showed zero effect on delirium duration, ICU stay, or mortality; reserved strictly for severe refractory distressing agitation.",
            },
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.algorithm",
      kind: "management",
      title: "Immediate Resuscitation & Diagnostic Workup Sequence",
      summary: "Emergency 'Coma Cocktail', continuous cEEG for nonconvulsive status epilepticus, emergent neuroimaging, and lumbar puncture.",
      provenance: "guideline",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Emergency Stabilization (ABC & Glucose): Secure the airway (ETT intubation if GCS ≤ 8 or unprotectable airway). Point-of-care capillary glucose immediately; administer 50 mL D50W IV if hypoglycemic. (Administer Thiamine 100–500 mg IV before or with dextrose if malnutrition or alcohol use is suspected to prevent Wernicke's encephalopathy).",
            "Targeted Reversal Trial: Naloxone (0.04–0.4 mg IV) for suspected opioid intoxication (titrated to restore ventilation without precipitating acute withdrawal storm). Flumazenil is CONTRAINDICATED in undifferentiated ICU coma due to fatal seizure risk in chronic benzodiazepine users.",
            "Emergent Non-Contrast Head CT: Mandatory for any coma with focal neurological signs, pupillary asymmetry, history of trauma, anticoagulation, or unexplained acute coma.",
            "Continuous Electroencephalography (cEEG): Mandatory in patients who fail to awaken within 24–48 hours after cardiac arrest, witnessed seizures, or unexplained coma to rule out Nonconvulsive Status Epilepticus (NCSE: present in 15–30% of comatose ICU patients; diagnosed via Salzburg Criteria).",
            "Lumbar Puncture: Perform promptly if CNS infection (bacterial meningitis, HSV encephalitis) is suspected after CT head rules out brain shift and mass effect; do not delay empiric Ceftriaxone + Vancomycin + Ampicillin + Acyclovir + Dexamethasone for the LP.",
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.complications",
      kind: "complications",
      title: "Complications of Coma & Prolonged Delirium",
      summary: "Brainstem herniation, aspiration pneumonia, corneal ulcerations, and long-term Post-Intensive Care Syndrome (PICS).",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Transtentorial Brainstem Herniation and irreversible secondary brainstem hemorrhage (Duret hemorrhages).",
            "Massive Gastric Aspiration Pneumonia and secondary ARDS.",
            "Corneal Ulceration and exposure keratitis from absent blinking (requires scheduled ophthalmic lubricants).",
            "Post-Intensive Care Syndrome (PICS): Severe long-term executive cognitive impairment, memory deficits, and PTSD in up to 50% of ICU delirium survivors.",
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls",
      summary: "Critical diagnostic and therapeutic pitfalls in altered consciousness.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Missing Nonconvulsive Status Epilepticus (NCSE): A comatose patient with subtle facial twitching, nystagmus, or unexplained coma may be in continuous status epilepticus; obtain emergent cEEG.",
            "Diagnosing Locked-In Syndrome as Coma: Always specifically command comatose-appearing patients to 'look up at the ceiling' and 'blink twice' to test vertical eye movements.",
            "Failing to recognize Hypoactive Delirium: The quiet, docile, sleepy patient on the ventilator frequently has severe hypoactive delirium with higher mortality than the hyperactive patient; screen routinely with CAM-ICU.",
            "Administering Flumazenil for undifferentiated benzodiazepine overdose: Can precipitate refractory status epilepticus and cardiac arrhythmias in chronic users or co-ingestions.",
            "Assuming sedation is the sole cause of coma without performing a Spontaneous Awakening Trial (SAT): Always stop continuous sedatives to assess true baseline neurological function.",
          ],
        },
      ],
    },
    {
      id: "altered-consciousness.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Prognostication after cardiac arrest and pupillometry versus manual exams.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Automated Quantitative Pupillometry (NPi) vs Manual Pupillary Exam: Automated infrared pupillometers calculate the Neurological Pupil index (NPi, scale 0–5; NPi < 3 is abnormal). In post-cardiac arrest and traumatic brain injury, an NPi of 0 has 100% specificity with zero false positives for predicting unfavorable neurological outcomes, eliminating inter-observer variability inherent in manual penlight exams.",
        },
      ],
    },
  ],
};
