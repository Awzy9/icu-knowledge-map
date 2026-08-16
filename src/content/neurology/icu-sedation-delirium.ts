import type { Topic } from "@/content-types";

export const icuSedationDelirium: Topic = {
  id: "icu-sedation-delirium",
  slug: "icu-sedation-delirium",
  title: "ICU Sedation, Analgesia, Delirium & Liberation",
  category: "neurology",
  oneLiner: "Analgesia-first sedation, light sedation targets, ABCDEF bundle, spontaneous breathing trials, and non-pharmacologic delirium mitigation.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 152: Sedation, Analgesia, and Neuromuscular Blockade in the ICU"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 11: Pain, Sedation and Delirium in Intensive Care"
    }
  ],
  currentStatus: "Current as of the 2018 SCCM PADIS Clinical Practice Guidelines and recent sedation trial recommendations (SPICE III, ABC trial).",
  otherReferences: [
    "Devlin JW, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU. Crit Care Med. 2018;46(9):e825-e873.",
    "Shehabi Y, et al. Early Sedation with Dexmedetomidine in Critically Ill Patients (SPICE III). N Engl J Med. 2019;380(26):2506-2517.",
    "Girard TD, et al. Efficacy and safety of a paired sedation and ventilator weaning protocol for mechanically ventilated patients in intensive care (Awakening and Breathing Controlled trial): an open-label randomised controlled trial. Lancet. 2008;371(9607):126-134."
  ],
  relationships: [
    { type: "prerequisite", targetId: "mechanical-ventilation", label: "Paired Spontaneous Awakening and Breathing Trials (SAT/SBT) for liberation" },
    { type: "differential", targetId: "altered-consciousness", label: "Differentiating iatrogenic drug-induced sedation from acute organic encephalopathy/coma" },
    { type: "related-to", targetId: "ards", label: "Neuromuscular blockade and deep sedation requirements in severe patient-ventilator dyssynchrony" }
  ],
  sections: [
    {
      id: "icu-sedation-delirium.overview",
      kind: "overview",
      title: "The Modern PADIS Paradigm: Analgesia-First & Light Sedation",
      summary: "Modern critical care sedation focuses on treating pain first (analgesia-first), maintaining a light sedation depth (RASS -1 to 0), active daily awakening, and aggressive multi-component non-pharmacologic delirium prevention.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "sedation-guideline-padis-sccm-2018",
          relevance: "SCCM PADIS guidelines establishing analgesia-first, light sedation targets, non-benzodiazepine preference, and multi-component delirium bundles"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "Historically, mechanically ventilated ICU patients were kept deeply sedated and paralyzed, resulting in prolonged ventilator duration, severe ICU-acquired weakness (ICUAW), delirium, and post-intensive care syndrome (PICS). Contemporary practice emphasizes an analgesia-first strategy: unrecognized pain is the leading driver of patient distress and agitation. Sedative medications should be added only after adequate analgesia is established."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Target Sedation Depth", value: "Light Sedation (RASS -1 to 0 / SAS 3-4): The patient is calm, awake or easily arousable with eye contact to voice, able to communicate distress, and actively participate in physical therapy." },
            { label: "Deep Sedation Indications (RASS -4 to -5)", value: "Reserved strictly for specific clinical indications: Severe ARDS with refractory patient-ventilator dyssynchrony, therapeutic neuromuscular blockade, severe intracranial hypertension (elevated ICP), status epilepticus, and open surgical abdomen with active evisceration risk." }
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.diagnosis-assessment",
      kind: "diagnosis",
      title: "Validated ICU Assessment Scales: Pain, Sedation & Delirium",
      summary: "Objective validated bedside scoring tools must be performed systematically every 2 to 4 hours by bedside clinicians.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pain Assessment: CPOT / BPS", value: "Critical-Care Pain Observation Tool (CPOT) or Behavioral Pain Scale (BPS) in non-verbal mechanically ventilated patients: Evaluates facial expression, body movements, muscle tension, and ventilator compliance/vocalization. A CPOT score >= 3 indicates significant pain requiring analgesia." },
            { label: "Sedation Depth: RASS Scale", value: "Richmond Agitation-Sedation Scale (+4 combative, +3 very agitated, +2 agitated, +1 restless, 0 alert and calm, -1 drowsy, -2 light sedation, -3 moderate sedation, -4 deep sedation, -5 unarousable). Target RASS -1 to 0." },
            { label: "Delirium Screening: CAM-ICU", value: "Confusion Assessment Method for the ICU (CAM-ICU): Feature 1 (Acute onset or fluctuating course) AND Feature 2 (Inattention — squeeze on letter 'A' in 'SAVEAHAART') PLUS EITHER Feature 3 (Altered level of consciousness — any RASS other than 0) OR Feature 4 (Disorganized thinking). Evaluated at least once every shift." }
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Acute ICU Agitation & Altered Sensorium",
      summary: "Search for organic, metabolic, and mechanical causes of agitation before escalating sedatives.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Hypoxemia / Hypercapnia: Sudden agitation or combative behavior secondary to endotracheal tube obstruction, pneumothorax, or ventilator disconnect.",
            "Under-Treated Severe Pain: Surgical incision pain, full urinary bladder (foley catheter kink), endotracheal tube cuff pressure, or unrecognized pressure injury.",
            "Drug Withdrawal: Alcohol withdrawal delirium tremens, opioid withdrawal, or benzodiazepine withdrawal.",
            "Nonconvulsive Status Epilepticus (NCSE): Persistent unresponsiveness or fluctuating encephalopathy with subtle twitching; requires urgent continuous EEG.",
            "Central Anticholinergic Delirium: Dry mouth, mydriasis, urinary retention, flushed skin from antihistamines, neuroleptics, or atropinics."
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.pharmacology",
      kind: "management",
      title: "Pharmacological Strategy: Non-Benzodiazepine Preference & HIET",
      summary: "Non-benzodiazepine sedatives (propofol, dexmedetomidine) reduce mechanical ventilation duration and ICU delirium compared to benzodiazepines.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "sedation-mids-spice3-trial",
          relevance: "SPICE III landmark randomized trial (n=3918) evaluating early dexmedetomidine sedation vs standard care, demonstrating safety, increased days alive and free of coma/delirium, and less ventilator dependency"
        }
      ],
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Propofol (GABA-A Agonist)", value: "Ultra-rapid onset (1-2 min) and offset (5-15 min). Dose: 5-50 mcg/kg/min (0.3-3.0 mg/kg/h). Ideal for light-to-moderate sedation and neurotrauma. Pitfalls: Vasodilation/hypotension, hypertriglyceridemia, and Propofol Infusion Syndrome (PRIS) with doses > 4-5 mg/kg/h (>65-80 mcg/kg/min) for > 48 hours." },
            { label: "Dexmedetomidine (Selective Alpha-2 Agonist)", value: "Provides 'cooperative sedation' — patients remain easily arousable, responsive, and maintain respiratory drive without respiratory depression. Dose: 0.2-1.4 mcg/kg/h (no bolus needed). Facilitates extubation and reduces delirium. Pitfalls: Sinus bradycardia and hypotension (central sympatholysis)." },
            { label: "Opioid Analgesia (Fentanyl / Hydromorphone)", value: "IV Fentanyl (25-100 mcg boluses or 25-200 mcg/h infusion) has rapid onset and no active renal metabolites. IV Hydromorphone is preferred for intermittent boluses. Minimize continuous opioid infusions to prevent gut dysmotility and opioid-induced hyperalgesia." },
            { label: "Avoid Routine Benzodiazepines", value: "Benzodiazepine infusions (midazolam, lorazepam) are independent risk factors for prolonged mechanical ventilation, severe ICU delirium, and cognitive decline. Restrict benzodiazepines to alcohol withdrawal, refractory status epilepticus, and intractable agitation failing other agents." }
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.abcdef-bundle",
      kind: "management",
      title: "The ABCDEF Liberation Bundle & Paired SAT/SBT",
      summary: "Systematic implementation of the evidence-based ABCDEF bundle significantly improves 1-year survival, shortens ICU length of stay, and halves delirium incidence.",
      provenance: "trial",
      evidenceRefs: [
        {
          kind: "trial",
          id: "sedation-abc-girard-trial",
          relevance: "ABC Girard landmark trial (Lancet 2008) showing paired daily Spontaneous Awakening Trials (SAT) + Spontaneous Breathing Trials (SBT) reduces 1-year mortality by 14% and shortens ICU stay"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The ABCDEF bundle is an evidence-based operational framework that integrates pain control, sedation minimization, ventilator weaning, delirium management, and early rehabilitation."
        },
        {
          type: "list",
          ordered: false,
          items: [
            "A — Assess, Prevent, and Manage Pain: Regular CPOT/BPS scoring, proactive analgesia prior to wound care or repositioning.",
            "B — Both SAT and SBT: Daily Spontaneous Awakening Trial (stopping all sedative/opioid infusions every morning) paired with a Spontaneous Breathing Trial (SBT on CPAP/PS 5/5 for 30-120 min). The Girard ABC trial showed paired SAT+SBT significantly reduced 1-year mortality (NNT = 7) and liberated patients 3 days earlier from mechanical ventilation.",
            "C — Choice of Analgesia and Sedation: Target light sedation using propofol or dexmedetomidine; avoid benzodiazepines.",
            "D — Delirium: Assess, Prevent, and Manage: Daily CAM-ICU screening. Delirium prevention is primarily NON-PHARMACOLOGIC: sleep promotion (dimming lights, minimizing nocturnal alarms), reorientation, hearing aids/glasses, early mobilization, and minimizing physical restraints. Antipsychotics (haloperidol, quetiapine) do NOT shorten delirium duration or improve mortality, but may be used short-term strictly for acute dangerous agitation.",
            "E — Early Mobility and Exercise: Active out-of-bed physical therapy, passive range of motion, standing and walking while intubated.",
            "F — Family Engagement and Empowerment: Involving family members at the bedside to provide emotional security and reorientation."
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.monitoring",
      kind: "monitoring",
      title: "ICU Sedation Safety & PRIS Surveillance",
      summary: "Continuous monitoring for Propofol Infusion Syndrome (PRIS) and sedation over-accumulation.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "PRIS Surveillance", value: "Daily serum triglycerides, creatine kinase (CK), arterial blood gas (lactate/base deficit), and potassium in any patient receiving propofol > 4 mg/kg/h (>65 mcg/kg/min) for > 48 hours. Triad: Unexplained severe metabolic acidosis, rhabdomyolysis, and acute refractory cardiac failure/Brugada-like ECG changes." },
            { label: "Sedation & Delirium Frequency", value: "RASS recorded hourly; CAM-ICU recorded every 8-12 hours and after any major change in mental status." },
            { label: "Telemetry for Dexmedetomidine", value: "Continuous rhythm monitoring for severe sinus bradycardia (HR < 40 bpm) and sinus pauses." }
          ]
        }
      ]
    },
    {
      id: "icu-sedation-delirium.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of acute sedation toxicity, delirium sequelae, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Accidental self-extubation during uncontrolled agitation, acute hemodynamic collapse during propofol/dexmedetomidine bolusing, severe respiratory depression." },
            { label: "Treatment-Related", value: "Propofol Infusion Syndrome (PRIS) with high mortality, severe bradycardia/heart block from dexmedetomidine, opioid-induced paralytic ileus, benzodiazepine-induced prolonged coma." },
            { label: "Late / Delayed", value: "ICU-Acquired Weakness (ICUAW) from prolonged immobility/sedation, Post-Intensive Care Syndrome (PICS) with long-term cognitive and neuropsychiatric impairment." },
            { label: "Escalation Triggers", value: "Severe hyperactive delirium with violence risking line/airway loss failing non-pharmacologic bundles; unexplained severe lactic acidosis and hyperkalemia on propofol (immediate propofol cessation and switch to alternative agent)." }
          ]
        }
      ]
    }
  ]
};
