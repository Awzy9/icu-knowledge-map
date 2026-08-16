import type { ClinicalProblem } from "@/content-types";

export const newSeizureStatusEpilepticus: ClinicalProblem = {
  id: "new-seizure-status-epilepticus",
  slug: "new-seizure-status-epilepticus",
  title: "New Seizure & Status Epilepticus",
  category: "neurologic",
  oneLiner: "Time-critical stepped seizure protocol: immediate airway/oxygen/glucose check, first-line IV benzodiazepines at 5 minutes, second-line non-sedating AEDs at 10–20 minutes, and general anesthetic induction at 30 minutes for refractory status.",
  relatedTopicIds: [
    "status-epilepticus",
    "altered-consciousness",
    "intracranial-hypertension",
    "severe-sodium-disorders",
    "severe-tbi",
    "intracranial-hemorrhage",
  ],
  body: [
    {
      type: "paragraph",
      text: "A new seizure or Status Epilepticus (SE)—defined as continuous seizure activity lasting ≥ 5 minutes or ≥ 2 discrete seizures without complete interictal recovery—is a time-critical neurological emergency. Prolonged epileptic activity causes permanent excitotoxic neuronal injury, pharmacoresistance (GABA receptor internalization and NMDA receptor upregulation), hyperthermia, rhabdomyolysis, and autonomic collapse requiring stepped, protocol-driven treatment.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Refractory Nonconvulsive Status Epilepticus (NCSE: subtle gaze preference or twitching in an unresponsive patient), Acute Severe Hyponatremia ([Na+] < 120 mEq/L), Acute Intracranial Hemorrhage, and CNS Infection (bacterial meningitis / viral encephalitis).",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. TIME-CRITICAL PROTOCOL: 0 TO 5 MINUTES (STABILIZE & SCREEN)",
          value: "• Airway, Breathing, Circulation: Place in lateral recovery position if non-intubated; deliver 100% O2 via non-rebreather mask; obtain immediate IV access.\n• Fingerstick Glucose: If < 70 mg/dL, administer 50 mL of D50W (plus 100 mg IV thiamine in chronic alcohol use).\n• Draw Stat Labs: Serum electrolytes (Na+, K+, Ca2+, Mg2+), venous/arterial blood gas, antiepileptic drug (AED) levels, and toxicology screen.",
        },
        {
          label: "2. PHASE 1: FIRST-LINE THERAPY (5 TO 10 MINUTES — BENZODIAZEPINES)",
          value: "• IV Access Available: IV Lorazepam 4 mg IV bolus (0.1 mg/kg) over 2 minutes (can repeat once in 5–10 min) OR IV Diazepam 10 mg IV (0.15–0.2 mg/kg).\n• No IV Access: IM Midazolam 10 mg (for weight > 40 kg; 5 mg for 13–40 kg) OR Rectal Diazepam 10–20 mg.\n• CRITICAL PRINCIPLE: Do NOT underdose benzodiazepines; giving subtherapeutic 1–2 mg lorazepam is the single most common cause of early treatment failure.",
        },
        {
          label: "3. PHASE 2: SECOND-LINE THERAPY (10 TO 30 MINUTES — NON-SEDATING AEDs)",
          value: "Administer one of three guideline-recommended IV AEDs over 10–15 minutes (ESETT Trial: equal ~50% efficacy):\n• IV Levetiracetam (Keppra): 60 mg/kg IV (maximum 4500 mg) over 10 minutes.\n• IV Fosphenytoin: 20 mg PE/kg IV (maximum 1500 mg PE) at 150 mg PE/min with continuous cardiac/BP monitoring.\n• IV Valproate Sodium: 40 mg/kg IV (maximum 3000 mg) over 10 minutes (avoid in acute liver failure or suspected mitochondrial disease).\n• Alternative: IV Lacosamide 200–400 mg IV over 5–10 minutes.",
        },
        {
          label: "4. PHASE 3: REFRACTORY STATUS EPILEPTICUS (RSE > 30 MINUTES)",
          value: "If seizures persist beyond 30 minutes despite adequate benzodiazepine + second-line AED:\n• Endotracheal Intubation & General Anesthesia Induction:\n  - IV Propofol: 1.0–2.0 mg/kg IV bolus, then continuous infusion at 30–100 mcg/kg/min (monitor for Propofol Infusion Syndrome).\n  - IV Midazolam: 0.2 mg/kg IV bolus, then continuous infusion at 0.05–2.0 mg/kg/hr.\n  - IV Ketamine: 1.5–3.0 mg/kg bolus, then 1.0–5.0 mg/kg/hr (potent NMDA receptor antagonist; highly effective in GABA-refractory SE).\n• EEG Goal: Continuous IV anesthetics titrated to achieve Electrographic Seizure Suppression or Burst Suppression (10–15 seconds of isoelectricity between bursts) for 24–48 hours.",
        },
        {
          label: "5. TARGETED INVESTIGATIONS FOR ETIOLOGY",
          value: "• Urgent Non-Contrast Head CT: Immediately after stabilizing airway to exclude ICH, tumor, or massive ischemic stroke.\n• Continuous Video-EEG Monitoring (cEEG): Mandatory for all ICU status epilepticus patients; motor convulsions typically cease after 20–30 minutes, but electrographic seizures persist nonconvulsively in > 30–40% of patients.\n• Lumbar Puncture: Mandatory if febrile, immunocompromised, or etiology remains unproven (check opening pressure, CSF cell count, protein, glucose, viral PCRs).",
        },
        {
          label: "6. REASSESSMENT & NEUROPROTECTION",
          value: "• Prevent Secondary Brain Injury: Defend cerebral perfusion (MAP > 75–80 mmHg), maintain strict normothermia (T < 37.5°C; fever accelerates neuronal injury), and maintain normoglycemia (140–180 mg/dL).\n• Track Systemic Complications: Check serial creatine kinase (CK) and urine myoglobin (rhabdomyolysis / acute tubular necrosis), arterial blood gas (lactic acidosis usually clears within 1 hour of motor termination).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Assuming status epilepticus has stopped because visible motor jerking has abated following sedatives. 'Subtle' or nonconvulsive status epilepticus frequently continues electrographically, quietly causing ongoing excitotoxic brain damage; continuous EEG monitoring is essential.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Status Epilepticus: ESETT trial analysis, continuous EEG patterns, and super-refractory protocols.\n• Altered Consciousness: Coma recovery and postictal states.\n• Severe Sodium Disorders: 3% hypertonic saline bolus protocols for hyponatremic seizures.\n• Severe TBI: Post-traumatic seizure prophylaxis and ICP management.\n• Intracranial Hemorrhage: Seizure-related hematoma expansion and control.",
        },
      ],
    },
  ],
};
