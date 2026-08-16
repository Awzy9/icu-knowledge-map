import type { ClinicalProblem } from "@/content-types";

export const suddenVentilatorDeterioration: ClinicalProblem = {
  id: "sudden-ventilator-deterioration",
  slug: "sudden-ventilator-deterioration",
  title: "Sudden Ventilator Deterioration & High Airway Pressures",
  category: "respiratory",
  oneLiner: "Algorithmic troubleshooting of acute patient-ventilator collapse: the DOPE framework, peak vs plateau pressure differentiation, auto-PEEP evaluation, and manual bagging separation.",
  relatedTopicIds: [
    "mechanical-ventilation",
    "pneumothorax",
    "asthma",
    "ards",
    "airway-management-rsi",
    "pulmonary-embolism",
    "obstructive-shock",
    "hypoxemic-respiratory-failure",
  ],
  body: [
    {
      type: "paragraph",
      text: "Sudden respiratory or hemodynamic deterioration in a mechanically ventilated patient—heralded by high pressure alarms, sudden hypoxemia, or abrupt hypotension—is an immediate life-threatening emergency. The cardinal clinical principle is to instantly decouple the patient from the machine: disconnect the ventilator and ventilate manually with a bag-valve-mask on 100% O2 to differentiate patient pathology from equipment failure while ruling out fatal mechanical emergencies.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Tension Pneumothorax under positive pressure (unilateral silence, hypotension, high plateau pressure), complete endotracheal tube obstruction / biting, and dynamic auto-PEEP generating tension cardiac arrest. If tension pneumothorax is suspected, decompress immediately.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & INITIAL ACTION",
          value: "• Immediate Disconnection: Disconnect patient from the ventilator circuit immediately and initiate manual bag-valve ventilation with 100% O2.\n• Feel the Bag:\n  - Easy to Bag: The problem was the ventilator or circuit (malfunction, dyssynchrony, incorrect settings).\n  - Hard to Bag (High Resistance / Low Compliance): The problem is the patient or the endotracheal tube.",
        },
        {
          label: "2. IMMEDIATE DANGER SCREEN — THE DOPE MNEMONIC",
          value: "• D — Displacement: Check ETT depth at the teeth/lips against documented baseline; assess for mainstem bronchus intubation (right mainstem -> left lung atelectasis) or accidental extubation.\n• O — Obstruction: Pass a suction catheter down the ETT; failure to pass confirms tube kinking, patient biting, cuff herniation, or dense mucus plugging.\n• P — Pneumothorax: Listen for asymmetric breath sounds, check for subcutaneous emphysema, tracheal deviation, and hypotension (tension physiology).\n• E — Equipment: Check for circuit leaks, exhalation valve failure, gas supply failure, or water condensation in tubing.",
        },
        {
          label: "3. STABILIZE",
          value: "• Airway Patency: Insert an oral bite block if biting; perform vigorous in-line suctioning; if tube is completely obstructed and cannot be cleared, deflate cuff and reintubate immediately.\n• Decompress Tension Pneumothorax: Perform emergent needle thoracostomy or finger thoracostomy if breath sounds are absent unilaterally with hemodynamic collapse.\n• Relieve Dynamic Hyperinflation (Auto-PEEP): If the patient is an asthmatic/COPD patient with high pressures and hypotension, disconnect the ETT and allow 20–30 seconds of passive exhalation while compressing the chest to purge trapped gas.",
        },
        {
          label: "4. DIFFERENTIAL: PEAK VS PLATEAU PRESSURE",
          value: "Perform an end-inspiratory pause on the ventilator:\n• High Peak Pressure, Normal Plateau Pressure (High Airway Resistance [R = (Ppeak - Pplat) / Flow]):\n  - Endotracheal tube kinking, biting, or secretions.\n  - Severe acute bronchospasm.\n• High Peak Pressure AND High Plateau Pressure (Low Respiratory System Compliance [Cstat = Vt / (Pplat - PEEP)]):\n  - Tension or simple pneumothorax.\n  - Worsening ARDS / pulmonary edema.\n  - Lobar atelectasis / mainstem intubation.\n  - Chest wall rigidity (fentanyl-induced), severe abdominal compartment syndrome.",
        },
        {
          label: "5. INITIAL INVESTIGATIONS",
          value: "• In-Line Suctioning Test: Diagnostic and therapeutic.\n• Bedside Thoracic Ultrasound (POCUS): Confirm presence/absence of lung sliding bilaterally; look for lung point (pneumothorax) and B-lines.\n• End-Expiratory Pause: Measure auto-PEEP (intrinsic PEEP).\n• Urgent Portable Chest Radiograph: Confirm ETT tip position (3–5 cm above carina) and exclude barotrauma or new consolidations.",
        },
        {
          label: "6. REASSESSMENT & ESCALATION",
          value: "• Reconnect to Ventilator under Controlled Mode: Verify driving pressure (Pplat - PEEP < 14 cmH2O) and tidal volume (6 mL/kg PBW).\n• In Refractory Patient-Ventilator Dyssynchrony: Optimize sedation, ensure adequate analgesia, and consider temporary neuromuscular blockade (cisatracurium/rocuronium) if severe dyssynchrony generates dangerous transpulmonary pressure swings.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Adjusting ventilator pressure alarm limits upward or giving boluses of sedatives to suppress 'fighting the vent' without diagnosing the underlying cause (e.g. developing pneumothorax or mucus plug). Always troubleshoot the patient first.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Mechanical Ventilation: Pressure vs volume modes, driving pressure, and synchrony waveforms.\n• Pneumothorax: Tension pathophysiology, ultrasound diagnosis, and chest tube thoracostomy.\n• Asthma: Auto-PEEP kinetics, permissive hypercapnia, and bronchodilator delivery.\n• ARDS: Lung-protective ventilation and compliance optimization.\n• Difficult Airway: Urgent reintubation and rescue surgical airways.",
        },
      ],
    },
  ],
};
