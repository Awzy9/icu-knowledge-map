import type { ClinicalProblem } from "@/content-types";

export const acuteHypotension: ClinicalProblem = {
  id: "acute-hypotension",
  slug: "acute-hypotension",
  title: "Acute Hypotension & Undifferentiated Shock",
  category: "hemodynamic",
  oneLiner: "Rapid bedside hemodynamic categorization: confirming MAP < 65 mmHg, assessing peripheral perfusion, POCUS cardiac/IVC profiling, and differentiating hypovolemic, distributive, cardiogenic, and obstructive etiologies.",
  relatedTopicIds: [
    "shock",
    "septic-shock",
    "cardiogenic-shock",
    "obstructive-shock",
    "rv-failure",
    "transfusion",
  ],
  body: [
    {
      type: "paragraph",
      text: "Acute hypotension (Mean Arterial Pressure [MAP] < 65 mmHg or Systolic Blood Pressure [SBP] < 90 mmHg, or a drop > 40 mmHg from baseline) in the ICU signals inadequate tissue perfusion until proven otherwise. The immediate objective is not to normalize blood pressure mechanically, but to screen for immediately treatable life threats, categorize the physiological shock phenotype (distributive vs hypovolemic vs cardiogenic vs obstructive), and initiate phenotype-directed resuscitation.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Tension Pneumothorax, Cardiac Tamponade, Massive Pulmonary Embolism, Catastrophic Internal Hemorrhage (retroperitoneal/GI), and Acute STEMI / Cardiogenic Shock. Perform a rapid ultrasound screen (RUSH protocol) within minutes.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. CONFIRM & SCREEN FOR LIFE THREATS",
          value: "• Verify Arterial Line / Cuff: Check arterial line transducer level (phlebostatic axis), zero reference, and flush test (damped waveform gives false hypotension); verify with manual cuff.\n• Rapid Perfusion Screen: Assess the 3 clinical windows of perfusion: (1) Brain (altered mental status, agitation, coma); (2) Kidneys (oliguria < 0.5 mL/kg/hr); (3) Skin (cool clammy extremities, mottled knees, capillary refill time > 3 seconds).",
        },
        {
          label: "2. IMMEDIATE STABILIZATION",
          value: "• First-Line Vasopressor: Start Norepinephrine infusion (titrated to defend MAP ≥ 65 mmHg) via central venous or dedicated peripheral IV while diagnostic workup proceeds.\n• Passive Leg Raise (PLR) Test: Perform a 1-minute PLR test (legs elevated 45°, torso flat) to assess dynamic preload responsiveness before administering unguided fluid boluses.",
        },
        {
          label: "3. PHENOTYPE-BASED DIFFERENTIAL (RUSH PROTOCOL)",
          value: "• Distributive Shock (Warm shock, bounding pulses, wide pulse pressure, hyperdynamic LV, collapsible IVC): Septic shock (most common), anaphylaxis, neurogenic shock, acute adrenal crisis, post-cardiac arrest vasoplegia.\n• Hypovolemic Shock (Cool extremities, flat neck veins, hyperdynamic collapsing LV, flat IVC): Hemorrhagic shock (GI bleed, trauma, retroperitoneal hematoma), dehydration, burns, third-spacing.\n• Cardiogenic Shock (Cool extremities, elevated JVP, pulmonary crackles, dilated poorly contracting LV, plethoric IVC): Acute myocardial infarction, acute decompensated heart failure, severe myocarditis, acute valvular catastrophe.\n• Obstructive Shock (Elevated JVP, severe hypotension, distinct mechanical blockage):\n  - Massive Pulmonary Embolism (dilated failing RV, septal D-sign, McConnell's sign).\n  - Cardiac Tamponade (pericardial effusion with diastolic RA/RV collapse, pulsus paradoxus).\n  - Tension Pneumothorax (unilateral absent breath sounds, tracheal deviation, hyperresonance).",
        },
        {
          label: "4. TARGETED INVESTIGATIONS",
          value: "• Point-of-Care Ultrasound (POCUS / RUSH Exam):\n  - The Pump: Global LV/RV contractility, pericardial effusion/tamponade.\n  - The Tank: IVC diameter and collapsibility, B-lines (edema), FAST exam for intra-abdominal free fluid.\n  - The Pipes: Aorta for dissection/aneurysm, lower extremity DVT compression.\n• Laboratory Markers: Serum lactate and lactate clearance kinetics, CBC (hemoglobin drop), blood gas (pH, base deficit), cardiac troponin, and blood cultures.",
        },
        {
          label: "5. INITIAL MANAGEMENT BY PHENOTYPE",
          value: "• Distributive / Sepsis: 30 mL/kg balanced crystalloids within 3 hours if volume-responsive + early Norepinephrine + broad-spectrum antimicrobials within 1 hour.\n• Hypovolemic / Hemorrhagic: Restrictive crystalloid resuscitation; initiate Massive Transfusion Protocol (1:1:1 PRBC:FFP:Platelets) and urgent surgical/endoscopic hemostasis.\n• Cardiogenic: Norepinephrine to defend MAP + Dobutamine / Milrinone inotropy + urgent coronary revascularization / MCS evaluation.\n• Obstructive: Immediate needle/finger thoracostomy for tension pneumothorax; emergent pericardiocentesis for tamponade; systemic thrombolysis or catheter embolectomy for massive PE.",
        },
        {
          label: "6. REASSESSMENT & ESCALATION",
          value: "• Perfusion Tracking: Reassess serial serum lactate every 2–4 hours in clinical context, normalize capillary refill time (≤ 2 seconds), and track urine output (≥ 0.5 mL/kg/hr).\n• Refractory Vasoplegia: If norepinephrine dose exceeds 0.25–0.50 mcg/kg/min, add Vasopressin (fixed 0.03 U/min) and consider stress-dose Hydrocortisone (200 mg/day).",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Reflexively administering repeated 1–2 liter crystalloid boluses for all hypotensive patients. If the patient has acute RV failure, cardiogenic shock, or severe capillary leak, excess fluid worsens ventricular interdependence, causes cardiorenal venous congestion (VExUS grade 3), and dramatically increases mortality.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Shock: Hemodynamic classification, oxygen delivery equations, and perfusion endpoints.\n• Septic Shock: SSC 1-hour bundle, vasopressor algorithms, and source control.\n• Cardiogenic Shock: SCAI shock staging, inotropes, and mechanical circulatory support.\n• Obstructive Shock: Pulmonary embolism, tamponade, and tension pneumothorax.\n• Hemodynamic Monitoring: Arterial line damping, stroke volume variation, and PAC indices.",
        },
      ],
    },
  ],
};
