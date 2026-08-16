import type { ClinicalProblem } from "@/content-types";

export const suddenHypoxemia: ClinicalProblem = {
  id: "sudden-hypoxemia",
  slug: "sudden-hypoxemia",
  title: "Sudden Hypoxemia",
  category: "respiratory",
  oneLiner: "Bedside triage of acute desaturation: signal verification, immediate danger screening (DOPE / tension pneumothorax), oxygen escalation ladder, and mechanism-based differential.",
  relatedTopicIds: [
    "hypoxemic-respiratory-failure",
    "respiratory-failure-basics",
    "ards",
    "pneumothorax",
    "pulmonary-embolism",
    "cardiogenic-pulmonary-edema",
    "rv-failure",
    "pneumonia",
    "mechanical-ventilation",
  ],
  body: [
    {
      type: "paragraph",
      text: "Sudden arterial oxygen desaturation (SpO2 < 90% or acute drop > 4–5% from baseline) is an immediate critical care emergency. The priority is not contemplating a comprehensive differential diagnosis, but rapidly verifying the signal, screening for immediately fatal mechanical airway/ventilator crises, and escalating oxygenation while narrowing the physiological mechanism (shunt vs V/Q mismatch vs alveolar hypoventilation).",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Tension Pneumothorax in a positive-pressure ventilated patient, or Acute Massive Pulmonary Embolism with obstructive shock. If breath sounds are absent unilaterally with hypotension, decompress the chest immediately without waiting for an X-ray.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & VERIFY",
          value: "• Immediate Signal Check: Check the plethysmographic pulse oximeter waveform; motion artifact, severe peripheral vasoconstriction, hypothermia, and ambient light frequently cause false desaturations.\n• Clinical Assessment: Examine the patient directly: mental status, respiratory rate, sternocleidomastoid retractions, cyanosis, and sweating.",
        },
        {
          label: "2. IMMEDIATE DANGER SCREEN",
          value: "• In Non-Intubated Patients: Look for upper airway obstruction (stridor, foreign body, tongue displacement, secretions), impending exhaustion, and severe hemodynamic collapse.\n• In Mechanically Ventilated Patients — The DOPE Framework:\n  - D (Displacement): ETT mainstem migration or accidental extubation.\n  - O (Obstruction): Kinked ETT, mucous plugging, or biting.\n  - P (Pneumothorax): Tension pneumothorax with unilateral silence and hypotension.\n  - E (Equipment): Ventilator circuit disconnection, valve malfunction, or gas supply loss.",
        },
        {
          label: "3. STABILIZE",
          value: "• Non-Intubated: Increase supplemental oxygen immediately (Non-Rebreather at 15 L/min + flush or High-Flow Nasal Cannula at 50–60 L/min and 100% FiO2).\n• Ventilated: Switch to 100% FiO2 immediately. If any question of equipment or ventilator failure arises, disconnect from the machine and ventilate manually with a self-inflating bag-valve-mask on 100% O2 to isolate the patient from the ventilator.",
        },
        {
          label: "4. DIFFERENTIAL BY MECHANISM",
          value: "• Airway & Mechanical: ETT obstruction, mucus plugging, foreign body, bronchospasm, massive atelectasis.\n• Pulmonary Parenchymal (Shunt / Alveolar Flooding): Severe ARDS, lobar pneumonia, cardiogenic flash pulmonary edema (SCAPE), diffuse alveolar hemorrhage, aspiration.\n• Pulmonary Vascular: Acute Pulmonary Embolism (dead space + V/Q mismatch), intracardiac right-to-left shunt (patent foramen ovale reopening during acute RV hypertension).\n• Chest Wall / Pleural: Tension or simple pneumothorax, massive pleural effusion, severe abdominal distension.",
        },
        {
          label: "5. INITIAL INVESTIGATIONS",
          value: "• Suction Catheter Passage: Pass a sterile suction catheter down the ETT; inability to pass confirms tube obstruction or malposition.\n• Bedside POCUS (BLUE Protocol): Check bilateral anterior and lateral lung sliding (rules out pneumothorax in seconds), B-lines (pulmonary edema/ARDS), or consolidations (pneumonia/atelectasis).\n• Arterial Blood Gas (ABG): Check PaO2, PaCO2, and calculate A-a gradient and PaO2/FiO2 ratio.\n• Portable Chest Radiograph: Confirm ETT depth, evaluate parenchymal infiltrates and pneumothorax after patient stabilization.",
        },
        {
          label: "6. INTERPRETATION & ACTION",
          value: "• Unresponsive to High FiO2 (PaO2 remains < 100–150 on 100% FiO2): True intrapulmonary shunt (severe ARDS, dense consolidation, large PFO); requires positive end-expiratory pressure (PEEP) titration or prone positioning rather than simply escalating FiO2.\n• Responsive to Modest FiO2 Elevation: V/Q mismatch (mild edema, COPD, atelectasis).\n• Elevated PaCO2 with Normal A-a Gradient: Pure hypoventilation (CNS depression, muscle weakness); requires ventilatory support rather than just oxygenation.",
        },
        {
          label: "7. REASSESSMENT & ESCALATION",
          value: "• Reassess within 5–15 minutes: SpO2, respiratory rate, work of breathing, and hemodynamics.\n• Escalation Triggers: If the patient fails to stabilize on HFNC (ROX index < 3.85, worsening accessory muscle use, exhaustion), proceed to prompt endotracheal intubation. If already intubated with refractory hypoxemia (P/F < 100–150), initiate ARDS neuromuscular blockade, prone positioning, or ECMO consultation.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Reflexively giving fluid boluses for hypoxemia and borderline blood pressure when the underlying cause is acute right ventricular failure or cardiogenic pulmonary edema. Fluids worsen septal flattening and exacerbate pulmonary transudation.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Hypoxemic Respiratory Failure: Oxygen escalation ladder, ROX index trajectories, and P-SILI physiology.\n• ARDS: Lung-protective ventilation (6 mL/kg PBW, driving pressure < 14), high PEEP, and prone positioning.\n• Pneumothorax: Immediate needle decompression and chest tube thoracostomy.\n• Pulmonary Embolism & Obstructive Shock: Thrombolysis, anticoagulation, and RV resuscitation.\n• Cardiogenic Pulmonary Edema: SCAPE nitrates and noninvasive CPAP.",
        },
      ],
    },
  ],
};
