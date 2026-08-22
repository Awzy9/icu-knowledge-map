/**
 * Bedside Mode layer — DERIVED summaries of existing reviewed topics.
 * Single-source rule: every guide keys off an EXISTING topic id and adds no
 * new medical knowledge base. Topics lacking enough structure are marked
 * coverage: "partial" and simply omit unsupported sections.
 */

export interface BedsideSections {
  whatMattersNow?: readonly string[];
  firstFiveMinutes?: readonly string[];
  initialOrders?: readonly string[];
  medications?: readonly string[];
  monitor?: readonly string[];
  reassess?: readonly string[];
  redFlags?: readonly string[];
  escalateWhen?: readonly string[];
  doNotMiss?: readonly string[];
  references?: readonly string[];
}

export interface BedsideGuide {
  /** Must match an existing topic id (validated against the registry). */
  topicId: string;
  coverage: "full" | "partial";
  sections: BedsideSections;
}

export const bedsideGuides: readonly BedsideGuide[] = [
  {
    topicId: "septic-shock",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Septic shock = suspected infection + hypotension or lactate >2 mmol/L.",
        "Two simultaneous goals: antimicrobials + source control FAST; restore perfusion (MAP ≥65).",
      ],
      firstFiveMinutes: [
        "Two large-bore IVs; draw 2 sets of blood cultures (never delay antimicrobials >45 min for cultures).",
        "Lactate, CBC, CMP, coags; supplemental O₂ to target SpO₂.",
        "Begin balanced crystalloid for hypoperfusion.",
      ],
      initialOrders: [
        "Broad-spectrum antimicrobials within the first hour; escalate for neutropenia/MDR risk.",
        "Balanced crystalloid 30 mL/kg for hypoperfusion — individualize; reassess responsiveness between boluses.",
        "Source-directed cultures (urine, respiratory, wound, ascites) + imaging to find the source.",
        "Norepinephrine early if MAP <65 despite initial fluids — do not wait for completion of fluids.",
      ],
      medications: [
        "Norepinephrine: first-line vasopressor, titrate to MAP ≥65 (peripheral start acceptable per local policy).",
        "Vasopressin ~0.03 units/min: add as second agent when norepinephrine escalates.",
        "Hydrocortisone 200 mg/day IV: if shock persists despite fluids + moderate-to-high-dose vasopressors.",
      ],
      monitor: [
        "Arterial line once on vasopressors; MAP trend.",
        "Lactate q2–4h until cleared; urine output ≥0.5 mL/kg/h; mentation; cap refill/mottling.",
      ],
      reassess: [
        "Dynamic responsiveness (passive leg raise / stroke-volume variation) before each further bolus.",
        "Once vasopressor-independent: actively shift to de-resuscitation (fluid removal).",
      ],
      redFlags: [
        "Rising lactate or worsening mottling despite therapy.",
        "MAP falling despite escalating norepinephrine (refractory shock).",
        "New arrhythmia, falling urine output, declining mentation.",
      ],
      escalateWhen: [
        "Refractory hypotension on NE + vasopressin ± hydrocortisone → consider epinephrine/adjuncts, urgent source-control intervention, advanced support per center.",
      ],
      doNotMiss: [
        "Occult immunocompromise/neutropenia; abdominal source needing early operative control.",
        "Adrenal-insufficiency history; candidemia risk factors.",
      ],
      references: ["Surviving Sepsis Campaign + project guideline entries."],
    },
  },
  {
    topicId: "ards",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Definition check: bilateral opacities, hypoxemia (P/F), not fully explained by cardiac failure.",
        "Protect the lung IMMEDIATELY: every hour of injurious ventilation matters.",
        "Treat the underlying trigger in parallel.",
      ],
      firstFiveMinutes: [
        "Set tidal volume 4–6 mL/kg PREDICTED body weight (height-based, not actual).",
        "Check plateau pressure ≤30 cmH₂O; adjust PEEP/FiO₂ per protocol table.",
        "ABG; adequate sedation; document P/F ratio.",
      ],
      initialOrders: [
        "Ventilator: VT 6 (→4 if Pplat high) mL/kg PBW; PEEP/FiO₂ per ARDSNet-style table; SpO₂ target 88–95%.",
        "Analgesia-first sedation; minimize deliriogenic agents.",
        "Early enteral nutrition; VTE + stress-ulcer prophylaxis; head-of-bed 30°.",
      ],
      medications: [
        "Short-course neuromuscular blockade for P/F <150 with dyssynchrony (ESICM 2023 guidance).",
        "Consider corticosteroids per institutional protocol — see project dexamethasone page.",
        "Avoid unnecessary fluids; diurese once shock-resolving.",
      ],
      monitor: [
        "Pplat, driving pressure (≤15 goal), minute ventilation, SpO₂/FiO₂ balance q4–6h minimum.",
        "Daily: sedation depth, P/F trajectory, barotrauma surveillance.",
      ],
      reassess: [
        "P/F <150 with PEEP ≥10 + FiO₂ ≥0.6 → PRONE ≥16 h/session (PROSEVA protocol).",
        "Persistently refractory → discuss ECMO referral per EOLIA-style thresholds.",
      ],
      redFlags: [
        "Driving pressure persistently >15; rising Pplat.",
        "New hypotension with distended neck veins → RV strain check (echo).",
        "Sudden deterioration: think pneumothorax, tube obstruction, auto-PEEP.",
      ],
      escalateWhen: ["P/F <80 after optimization, or rapid deterioration → ECMO center discussion."],
      doNotMiss: [
        "Missed extrapulmonary trigger (abdomen, lines, drugs).",
        "Overdistention from actual-body-weight settings; unaddressed RV failure.",
      ],
      references: ["ESICM 2023 ARDS guideline suite; ARMA; PROSEVA (project evidence entries)."],
    },
  },
  {
    topicId: "asthma",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Status asthmaticus: relieve obstruction before the patient tires; quiet chest and rising CO₂ are DANGER signs, not improvement.",
      ],
      firstFiveMinutes: [
        "Continuous or q20-min nebulized SABA + ipratropium ×3.",
        "Systemic corticosteroid NOW (oral = IV efficacy).",
        "Controlled oxygen; cardiac monitor; consider IV magnesium 2 g if severe.",
      ],
      initialOrders: [
        "Scheduled SABA/ipratropium per response; systemic steroid dosing per project med page.",
        "VBG/ABG if worsening; CXR if complication suspected; avoid routine sedatives.",
      ],
      medications: [
        "Inhaled SABA ± ipratropium; systemic corticosteroids; IV magnesium sulfate (severe).",
        "If intubating: ketamine induction reasonable; avoid histamine-liberating agents where possible.",
      ],
      monitor: [
        "Work of breathing, pulsus paradoxus, mental status, VBG/etCO₂ trend.",
        "IF INTUBATED: auto-PEEP check (expiratory hold) every assessment.",
      ],
      reassess: [
        "Low threshold to intubate for exhaustion/rising CO₂/altered mentation — NIV rarely suffices here.",
        "Ventilated settings: small VT (5–6 mL/kg PBW), LOW RR (8–10), longest expiratory time, permissive hypercapnia.",
      ],
      redFlags: [
        "Silent chest, bradycardia, exhaustion, rising PaCO₂.",
        "On ventilator: sudden hypotension → DISCONNECT circuit 15–20 s (auto-PEEP trial) before reaching for pressors.",
      ],
      escalateWhen: ["Refractory case → anesthesia/ENT airway support; ECMO considered per center; bronchoscopy for mucus plugging."],
      doNotMiss: [
        "Auto-PEEP as the cause of ventilated shock; tension pneumothorax mimic; under-dosed steroids.",
      ],
      references: ["GINA strategy (project guideline entry); project severe-asthma topic."],
    },
  },
  {
    topicId: "hyperkalemia",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Sequence: STABILIZE membrane → SHIFT K⁺ → REMOVE K⁺. ECG changes set the tempo.",
        "Confirm it is real (hemolysis?) — but treat immediately if ECG changes regardless.",
      ],
      firstFiveMinutes: [
        "12-lead ECG; IV calcium gluconate if any ECG changes.",
        "Stop K⁺ intake: hold K-sparing drugs, ACEi/ARB, K supplements.",
        "Stat serum K⁺; point-of-care if available.",
      ],
      initialOrders: [
        "Calcium gluconate 1 g IV (repeat ×1 if ECG changes persist).",
        "Regular insulin 5–10 units IV WITH dextrose 25 g; protocolized glucose checks afterward.",
        "High-dose nebulized albuterol; loop diuretic if making urine; K⁺ binder per protocol.",
      ],
      medications: [
        "Membrane: calcium gluconate. Shift: insulin+dextrose, albuterol. Remove: diuretics, binders, dialysis (definitive).",
        "Bicarbonate: adjunct only in acidemia — weak solo shifter.",
      ],
      monitor: [
        "Continuous ECG during stabilization phase.",
        "Glucose q30–60 min × 4–6 h post-insulin (hypoglycemia risk highest in CKD).",
        "Repeat K⁺ at 1–2 h; urine output.",
      ],
      reassess: [
        "ECG normalization does NOT mean K⁺ normalized — continue shifting/removal.",
        "Plan for rebound (shifts fade in hours): continue binder or schedule dialysis.",
      ],
      redFlags: [
        "Progression to wide-complex/VT/VF.",
        "Post-insulin hypoglycemia (often delayed in renal failure).",
        "Rebound hyperkalemia 4–6 h later.",
      ],
      escalateWhen: ["Severe K⁺ (>6.5) with refractory ECG changes, oliguria/ESRD → emergent dialysis (nephrology)."],
      doNotMiss: [
        "Insulin WITHOUT dextrose/glucose monitoring (fatal hypoglycemia).",
        "Hidden K⁺ loaders: succinylcholine, transfusion, trimethoprim, NSAIDs.",
      ],
      references: ["UK Renal Association hyperkalemia guideline (project entry)."],
    },
  },
  {
    topicId: "diabetic-ketoacidosis",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Order of operations: FLUIDS → CHECK K⁺ → INSULIN. Never insulin into a K⁺ <3.5.",
        "Hunt the trigger: infection, non-adherence, new-onset DM, MI, drugs (SGLT2i).",
      ],
      firstFiveMinutes: [
        "Isotonic crystalloid 1 L over the first hour.",
        "STAT potassium BEFORE insulin; if <3.5 → hold insulin, replace K⁺ first.",
        "Glucose, ketones (β-hydroxybutyrate), anion gap, VBG.",
      ],
      initialOrders: [
        "IV regular insulin 0.1 units/kg/h (pre-bolus not mandatory per current consensus).",
        "Hourly glucose; electrolytes/anion gap q2–4h.",
        "Add dextrose to fluids when glucose <200–250 mg/dL so insulin continues until the GAP closes.",
        "Potassium replacement to keep serum K⁺ ~4–5 mEq/L.",
      ],
      medications: ["IV regular insulin infusion; KCl per protocol; bicarbonate ONLY if pH <6.9."],
      monitor: [
        "Glucose q1h; K⁺/bicarbonate/anion gap q2–4h; mentation; ECG if K⁺ abnormal.",
        "Expected glucose fall ~50–75 mg/dL/h — slower → check delivery/hydration.",
      ],
      reassess: [
        "Drive therapy by ANION GAP/ketones, not glucose.",
        "Transition: overlap SC basal-bolus with the infusion for 1–2 h before stopping.",
      ],
      redFlags: [
        "Hypoglycemia; hypokalemia (esp. post-insulin); cerebral edema (young patients: headache/rapid mental change → hypertonic therapy + imaging, slow corrections).",
      ],
      escalateWhen: ["pH <6.9, refractory K⁺ derangements, unresponsive patient, suspected cerebral edema."],
      doNotMiss: [
        "Starting insulin with K⁺ <3.5; routine bicarbonate at pH 7.1; premature infusion stop (gap not closed).",
      ],
      references: ["ADA hyperglycemic crises consensus (project entry)."],
    },
  },
  {
    topicId: "pulmonary-embolism",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Hypotension = high-risk PE → the question is REPERFUSION, not just anticoagulation.",
        "Assess RV (echo/CT) — the RV determines everything.",
      ],
      firstFiveMinutes: [
        "O₂; two IVs; UFH bolus + infusion (preferred if lysis possible).",
        "Bedside echo: RV size/function, McConnell sign.",
        "Norepinephrine for MAP; contact IR/cardiac surgery proactively if shock.",
      ],
      initialOrders: [
        "UFH infusion; troponin ± NT-proBNP for risk stratification.",
        "Arterial line; strict input/output; minimize additional punctures if lysis anticipated.",
      ],
      medications: [
        "Systemic alteplase 100 mg over 2 h for PE with shock/arrest (half-dose convention in arrest).",
        "Pressor strategy: norepinephrine ± dobutamine; SMALL cautious fluid challenges ONLY if RV underfilled.",
      ],
      monitor: [
        "MAP/HR/SpO₂/UOP/lactate trends; repeat echo if deteriorating.",
        "Post-lysis: neuro checks, no IM injections, pressure on puncture sites.",
      ],
      reassess: [
        "Stabilized on anticoagulation → continue; reassess for escalation at any deterioration.",
        "Intermediate-risk deterioration (rising troponin/RV dilation) → escalate care level; catheter-directed therapy per center.",
      ],
      redFlags: ["Falling BP/rising HR, new hypoxia on O₂, syncope, arrest."],
      escalateWhen: ["Shock despite anticoagulation → thrombolysis / catheter embolectomy / surgical embolectomy; lysis contraindicated → IR/surgical route."],
      doNotMiss: [
        "Flooding a failing RV with fluid (dilates → septal shift → LV choke).",
        "Heparin-alone in true shock.",
      ],
      references: ["ESC PE guidance / project PE & obstructive-shock entries."],
    },
  },
  {
    topicId: "rv-failure",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "The RV is a volume pump under a low-pressure system: optimize PRELOAD (carefully), AFTERLOAD, CONTRACTILITY.",
        "Identify the driver: PE, post-MI, hypoxia/acidosis, sepsis, valve, pericardium.",
      ],
      firstFiveMinutes: [
        "Bedside echo: RV size, septal shift, TAPSE, TR jet, IVC.",
        "Normalize oxygenation; correct acidosis/hypercapnia (acute pulmonary vasoconstrictors).",
        "Maintain rhythm — AV synchrony matters; treat ischemia.",
      ],
      initialOrders: [
        "NO reflex fluid bolus. If truly underfilled: 250 mL trial with immediate reassessment.",
        "Start inotrope (dobutamine or milrinone) for low output; low-dose norepinephrine to preserve coronary perfusion if vasodilated.",
        "Cause-specific: PE → reperfusion path; pulmonary vasoconstriction → inhaled pulmonary vasodilator where available.",
      ],
      medications: ["Dobutamine/milrinone; avoid pure α-agonists (raise PVR); diurese once improving."],
      monitor: [
        "Serial echo, lactate, renal function (congestion), liver enzymes, urine output; CVP trend (not target).",
      ],
      reassess: [
        "Every fluid challenge: STOP if CVP jumps, CI does not improve, or TR worsens — you are hurting the LV via septal shift.",
      ],
      redFlags: [
        "After fluids: rising JVP + falling output = classic RV dilation spiral.",
        "New AF (poorly tolerated); escalating pressor requirement with falling urine output.",
      ],
      escalateWhen: ["Refractory low output → PA-catheter-guided management; ECMO consult per project pathway."],
      doNotMiss: [
        "Volume-loading the dilated RV; mistaking RV failure for sepsis; pericardial constraint.",
      ],
      references: ["AHA RV-failure guidance (project entry)."],
    },
  },
  {
    topicId: "severe-sodium-disorders",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Severity = SYMPTOMS (seizure/coma = emergency); chronicity = HISTORY. Correction pace prevents osmotic demyelination.",
      ],
      firstFiveMinutes: [
        "Active seizures/coma: 3% saline 100–150 mL IV over 10–20 min; repeat up to ×2 if needed.",
        "Stat paired serum + urine osmolality & sodium; hold diuretics.",
      ],
      initialOrders: [
        "Symptom-driven hypertonic protocol; Na⁺ checks q2–4h during active correction.",
        "If SIADH phenotype once stable: free-water restriction ± protocol adjuncts.",
        "Replete K⁺ — raising K⁺ raises Na⁺.",
      ],
      medications: [
        "3% NaCl (symptomatic/severe); treat causes: glucocorticoid if adrenal, thyroid replacement if myxedema; vasopressin antagonists short-term per protocol only.",
      ],
      monitor: [
        "Na⁺ q4–6h minimum while correcting; urine output EVERY HOUR — sudden dilute diuresis predicts overcorrection.",
      ],
      reassess: [
        "Target ≤8–10 mEq/L rise per 24 h. Overshoot or brisk UOP → overcorrection protocol: desmopressin + D5W.",
      ],
      redFlags: [
        "Seizures, coma, respiratory irregularity.",
        "Correction overshoot; delayed (days 2–5) dysarthria/paraparesis = suspect osmotic demyelination.",
      ],
      escalateWhen: ["Seizures/coma not responding to boluses → continuous-infusion hypertonic protocol per local guideline."],
      doNotMiss: [
        "0.9% saline in SIADH can WORSEN Na⁺ (desalination).",
        "Treating the number, not the chronicity; missing post-bolus water diuresis.",
      ],
      references: ["European hyponatraemia guideline (project entry)."],
    },
  },
  {
    topicId: "acute-aortic-syndromes",
    coverage: "full",
    sections: {
      whatMattersNow: [
        "Type A = operating room, NOW. While organizing: kill the shear (HR first, then BP).",
      ],
      firstFiveMinutes: [
        "Arterial line; IV esmolol (or labetalol) titrating heart rate down FIRST.",
        "THEN add nicardipine/clevidipine for blood pressure control.",
        "CT angiogram; CT surgery consult immediately; aggressive analgesia.",
      ],
      initialOrders: [
        "Type & cross; head-to-toe malperfusion survey: pulses, neuro, abdomen, urine.",
        "Strict bed rest; avoid anticoagulation until dissection confirmed/type known.",
      ],
      medications: [
        "β-blockade first (esmolol/labetalol); vasodilator second. NEVER isolated vasodilator first (reflex rise in dP/dt extends the tear).",
      ],
      monitor: [
        "Beat-to-beat BP; hourly pulse exams; urine output; neuro checks (cord/carotids); abdominal exam; lactate/Hgb.",
      ],
      reassess: [
        "Migrating pain, new pulse deficit, rising lactate, pericardial effusion on echo → immediate escalation.",
      ],
      redFlags: [
        "Rupture physiology (hypotension + effusion); tamponade; mesenteric/limb/renal malperfusion.",
      ],
      escalateWhen: ["Any Type A, or Type B with malperfusion/rupture/refractory pain → surgical/interventional team immediately."],
      doNotMiss: [
        "Vasodilator-before-beta-blocker sequencing error.",
        "Controlling numbers while malperfusion silently progresses.",
      ],
      references: ["2022 ACC/AHA + 2024 ESC aortic disease guidelines (project entries)."],
    },
  },
];

export function getBedsideGuide(topicId: string): BedsideGuide | undefined {
  return bedsideGuides.find((g) => g.topicId === topicId);
}

export function bedsideCoverageCount(): { full: number; partial: number } {
  let full = 0, partial = 0;
  for (const g of bedsideGuides) {
    if (g.coverage === "full") full += 1;
    else partial += 1;
  }
  return { full, partial };
}
