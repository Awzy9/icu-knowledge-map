import type { ClinicalProblem } from "@/content-types";

export const acuteAlteredMentalStatus: ClinicalProblem = {
  id: "acute-altered-mental-status",
  slug: "acute-altered-mental-status",
  title: "Acute Altered Mental Status & ICU Delirium",
  category: "neurologic",
  oneLiner: "Systematic neurologic evaluation: immediate metabolic/toxic screening (glucose, hypoxia, hypercapnia), nonconvulsive status epilepticus exclusion, structural CT triage, and CAM-ICU delirium management.",
  relatedTopicIds: [
      "altered-consciousness",
      "icu-sedation-delirium",
      "acute-liver-failure",
      "endocrine-emergencies",
      "toxicologic-emergencies",
      "diabetic-ketoacidosis",
      "meningitis-encephalitis",
      "status-epilepticus",
      "acute-ischemic-stroke",
      "intracranial-hemorrhage",
      "intracranial-hypertension",
      "severe-sodium-disorders",
      "sepsis"
    ],
  body: [
    {
      type: "paragraph",
      text: "Acute altered mental status (AMS)—ranging from hyperactive delirium and acute agitation to hypoactive somnolence, stupor, and unresponsiveness—is one of the most common acute decompensations in the ICU. The bedside priority is a rapid, stepwise elimination of immediately fatal metabolic, hypoxic, toxic, and structural insults before attributing mental status changes to non-specific ICU delirium or sedation.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute Hypoglycemia (permanent brain injury in minutes), Acute Hypercapnic Coma (CO2 narcosis), Nonconvulsive Status Epilepticus (NCSE), Acute Intracranial Hemorrhage / Herniation, Basilar Artery Occlusion, and Bacterial Meningitis/Encephalitis.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. IMMEDIATE BEDSCREEN (THE 60-SECOND CHECK)",
          value: "• Airway & Oxygenation: Verify patent airway, SpO2 ≥ 92%, and respiratory pattern.\n• Point-of-Care Blood Glucose: Mandatory immediate fingerstick; treat glucose < 70 mg/dL immediately with 1 ampule D50W (25 g dextrose).\n• Arterial Blood Gas: Check for severe hypercapnia (PaCO2 > 60–70 mmHg with acidemia) and severe metabolic acidosis.\n• Pupils & Brainstem Screen: Assess pupil size, symmetry, and reactivity (unilateral fixed dilated pupil = uncal herniation until proven otherwise).",
        },
        {
          label: "2. DIFFERENTIAL BY MECHANISTIC DOMAIN",
          value: "• Metabolic & Endocrine: Hypoglycemia, severe hyponatremia (< 120) or hypernatremia (> 160), hepatic encephalopathy (hyperammonemia), uremic encephalopathy, myxedema coma, adrenal crisis.\n• Toxic & Pharmacologic: Opioid overdose (miosis, bradypnea; reverse with IV Naloxone 0.04–0.4 mg), benzodiazepine toxicity, anticholinergic toxidrome, alcohol/sedative withdrawal (delirium tremens), cefepime/fluoroquinolone neurotoxicity.\n• Structural Neurologic: Acute ischemic stroke (especially basilar artery thrombosis), intracranial hemorrhage (ICH/SAH), subdural hematoma, acute obstructive hydrocephalus, brain abscess.\n• Epileptic: Nonconvulsive Status Epilepticus (NCSE: subtle rhythmic twitching of eyes/fingers, gaze deviation, or pure unresponsiveness; confirmed on EEG).\n• Infectious: Sepsis-associated encephalopathy (SAE), bacterial meningitis, viral encephalitis, line sepsis.",
        },
        {
          label: "3. TARGETED BEDSIDE INVESTIGATIONS",
          value: "• Urgent Non-Contrast Head CT: Indicated immediately for new focal neurologic deficits, pupillary asymmetry, post-trauma, anticoagulated patients, or unexplained persistent coma.\n• Continuous or Routine EEG: Mandatory for patients with unexplained fluctuating consciousness, post-cardiac arrest, or subtle motor twitches to rule out NCSE.\n• Lumbar Puncture: Indicated for fever + AMS with meningismus, or negative CT with suspected subarachnoid hemorrhage / encephalitis.\n• Delirium Screening: Perform CAM-ICU (Confusion Assessment Method for the ICU) or ICDSC to detect hypoactive delirium.",
        },
        {
          label: "4. INITIAL MANAGEMENT & DELIRIUM BUNDLE",
          value: "• Reverse Toxic / Metabolic Drivers: Give D50W for hypoglycemia; Naloxone for suspected opioids; correct severe sodium derangements slowly.\n• Treat Nonconvulsive Status: IV Lorazepam (4 mg) or Levetiracetam (60 mg/kg, max 4500 mg).\n• Non-Pharmacologic ICU Delirium Bundle (ABCDEF):\n  - A/B: Spontaneous Awakening & Breathing Trials.\n  - C: Choice of sedation (minimize benzodiazepines; prefer Dexmedetomidine or Propofol).\n  - D: Delirium monitoring and management.\n  - E: Early mobility and physical therapy.\n  - F: Family engagement, sleep-wake cycle preservation (daytime light, nighttime noise reduction).",
        },
        {
          label: "5. REASSESSMENT & ESCALATION",
          value: "• Re-evaluate CAM-ICU and GCS score every shift and following any medication change.\n• Intubation Triggers: Severe loss of airway reflexes (absent gag/cough), GCS ≤ 8 with hypoventilation, or severe agitation refractory to dexmedetomidine requiring general anesthesia for patient safety.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Dismissing hypoactive altered mental status as 'the patient is just quiet or tired'. Hypoactive delirium carries higher ICU mortality than hyperactive delirium and frequently conceals severe sepsis, hypercapnia, metabolic failure, or nonconvulsive seizures.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Altered Consciousness: Glasgow Coma Scale, FOUR score, and coma localization pathways.\n• Status Epilepticus: Nonconvulsive status criteria, EEG monitoring, and anticonvulsant protocols.\n• Ischemic Stroke: Large vessel occlusion screening and neurovascular rescue.\n• Intracranial Hemorrhage: Hematoma expansion, blood pressure targets, and reversal.\n• Severe Sodium Disorders: Osmotic shifts, cerebral edema, and ODS prevention.\n• Sepsis: Sepsis-associated encephalopathy and systemic inflammation.",
        },
      ],
    },
  ],
};
