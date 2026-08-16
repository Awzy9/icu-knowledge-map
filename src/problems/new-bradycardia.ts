import type { ClinicalProblem } from "@/content-types";

export const newBradycardia: ClinicalProblem = {
  id: "new-bradycardia",
  slug: "new-bradycardia",
  title: "New Bradycardia & Conduction Blocks",
  category: "hemodynamic",
  oneLiner: "Acute bradyarrhythmia management: identifying hemodynamic instability, distinguishing sinus node arrest vs high-grade AV block, medical chronotropic support (atropine, epinephrine), and emergent pacing.",
  relatedTopicIds: [
      "arrhythmias",
      "hyperkalemia",
      "intracranial-hypertension",
      "acute-coronary-syndrome",
      "shock",
      "cardiac-arrest-post-arrest"
    ],
  body: [
    {
      type: "paragraph",
      text: "New-onset bradycardia (heart rate < 50–60 bpm) in the critically ill patient can result from intrinsic cardiac conduction system disease, severe electrolyte derangements, autonomic/reflex vagal activation, drug toxicity, or life-threatening raised intracranial pressure (the Cushing reflex). The first clinical objective is identifying signs of poor perfusion and rapidly distinguishing nodal from infranodal conduction block to guide medical therapy versus emergency electrical pacing.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Severe Hyperkalemia (presenting with progressive bradycardia, peaked T-waves, PR prolongation, and sine wave arrest), Mobitz II or Complete (3rd-degree) Heart Block with wide QRS escape, Acute Inferior/Posterior STEMI with RCA nodal ischemia, and the Cushing Triad (bradycardia, hypertension, irregular breathing) signaling impending brain herniation.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & ASSESS STABILITY",
          value: "• Immediate Hemodynamic Screen: Check for hypotension (MAP < 65), altered mental status, chest pain (ischemia), acute pulmonary edema, or cold mottled extremities.\n• Continuous Cardiac Monitoring: Obtain an immediate 12-lead ECG to analyze P-wave morphology, PR interval, P:QRS conduction ratio, and QRS complex duration.",
        },
        {
          label: "2. DIFFERENTIAL BY CONDUCTION LEVEL",
          value: "• Sinus Bradycardia & Sinus Arrest: High vagal tone (endotracheal suctioning, vomiting), hypothermia, severe hypothyroidism (myxedema), medications (beta-blockers, CCBs, dexmedetomidine, clonidine, digoxin, amiodarone).\n• Atrioventricular (AV) Blocks:\n  - 1st Degree / Mobitz I (Wenckebach): AV nodal level; usually benign, responsive to atropine.\n  - Mobitz II 2nd-Degree Block: Infranodal (His-Purkinje system); high risk of sudden progression to complete heart block.\n  - 3rd-Degree (Complete) Heart Block: Total AV dissociation; narrow QRS escape (junctional, rate 40–55 bpm) vs wide bizarre QRS escape (ventricular, rate 20–40 bpm, highly unstable).\n• Metabolic & Autonomic Triggers: Severe hyperkalemia, profound hypoxemia, severe acidemia, raised intracranial pressure (Cushing reflex).",
        },
        {
          label: "3. IMMEDIATE MEDICAL RESUSCITATION (FOR UNSTABLE PATIENTS)",
          value: "• Step 1: Atropine Sulfate 1.0 mg IV push every 3–5 minutes (maximum 3.0 mg total). Highly effective for sinus bradycardia and Mobitz I block; minimally effective in Mobitz II or 3rd-degree block with wide QRS escape.\n• Step 2: Chronotropic Infusions (if atropine is ineffective or pacing is being prepared):\n  - Epinephrine Infusion: 2–10 mcg/min continuous IV infusion.\n  - Dopamine Infusion: 5–20 mcg/kg/min continuous IV infusion.\n  - Isoproterenol Infusion: 2–10 mcg/min (useful in denervated post-heart transplant patients or beta-blocker overdose; avoid in acute coronary ischemia).",
        },
        {
          label: "4. EMERGENCY PACING PROTOCOLS",
          value: "• Transcutaneous Pacing (TCP): Apply pacing pads immediately (anteroposterior placement preferred); set pacing rate to 60–80 bpm on demand mode; increase current (mA) until electrical capture (broad QRS and T-wave following each pacing spike) AND mechanical capture (palpable femoral pulse and arterial line waveform pulsatility) are confirmed. Provide procedural sedation/analgesia as TCP is painful.\n• Emergent Transvenous Pacing (TVP): Insert a 5–6 Fr bipolar pacing catheter via internal jugular or femoral access into the right ventricular apex for reliable definitive endocardial capture.",
        },
        {
          label: "5. TARGETED TOXICOLOGY & METABOLIC RESCUE",
          value: "• Suspected Hyperkalemia: Administer IV Calcium Gluconate (30 mL 10%) or Calcium Chloride (10 mL 10%) immediately to stabilize the cardiac membrane.\n• Beta-Blocker Toxicity: High-Dose Insulin Euglycemia (HDIE: 1 U/kg regular insulin bolus + 0.5–1.0 U/kg/hr infusion with D10W/D50W) and IV Glucagon (5–10 mg IV).\n• Calcium Channel Blocker Toxicity: High-Dose Insulin Euglycemia + IV Calcium Chloride + IV Lipid Emulsion (Intralipid 20%).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Relying solely on electrical capture on the monitor during transcutaneous pacing without confirming mechanical capture (palpating a femoral pulse or seeing arterial line pulsatility). Electrical spikes with muscle twitching can mimic capture while the patient remains in asystolic arrest.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Arrhythmias: Conduction system taxonomy, pacing thresholds, and antiarrhythmic reversal.\n• Cardiac Arrest: ACLS bradycardia algorithms and pulseless electrical activity protocols.\n• Hyperkalemia: Membrane stabilization and emergent elimination.\n• Intracranial Hypertension: Cushing reflex and emergency osmotherapy.\n• Acute Coronary Syndromes: Inferior STEMI and right coronary artery perfusion.",
        },
      ],
    },
  ],
};
