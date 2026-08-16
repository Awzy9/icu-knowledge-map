import type { Topic } from "@/content-types";

export const arrhythmias: Topic = {
  id: "arrhythmias",
  slug: "arrhythmias",
  title: "Arrhythmias in Critical Illness",
  category: "cardiovascular",
  oneLiner: "Algorithmic tachy- and bradyarrhythmia management, new-onset ICU atrial fibrillation, wide-complex tachycardia differentiation, and refractory Torsades overdrive pacing protocols.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapters on Cardiac Arrhythmias, Cardioversion and Defibrillation, and Antiarrhythmic Therapy in the ICU",
    },
    {
      title: "AHA/ACC/HRS Guidelines for Management of Patients with Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
      edition: "Circulation 2018",
    },
  ],
  currentStatus: "Current as of the 2023 ACC/AHA/ACCP/HRS Atrial Fibrillation Guidelines, the 2018 AHA/ACC/HRS Ventricular Arrhythmia Guidelines, and current ACLS resuscitation protocols.",
  otherReferences: [
    "Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156.",
    "Al-Khatib SM, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. Circulation. 2018;138(13):e272-e391.",
    "Brugada P, et al. A new approach to the differential diagnosis of a regular tachycardia with a wide QRS complex. Circulation. 1991;83(5):1649-1659.",
    "Tisdale JE, et al. Predictors of torsades de pointes in the intensive care unit. J Cardiovasc Electrophysiol. 2020;31(8):2133-2140.",
  ],
  relationships: [
    { type: "prerequisite", targetId: "shock", label: "Foundational hemodynamic determinants and perfusion physiology" },
    { type: "complication", targetId: "cardiogenic-shock", label: "Arrhythmogenic pump failure and low-output shock" },
    { type: "complication", targetId: "rv-failure", label: "Loss of atrial kick precipitating acute RV decompensation" },
    { type: "related-to", targetId: "hyperkalemia", label: "Electrolyte derangements triggering malignant arrhythmias" },
    { type: "related-to", targetId: "anticoagulation", label: "Thromboembolic prophylaxis in new-onset atrial fibrillation" },
    { type: "related-to", targetId: "septic-shock", label: "Sepsis-induced systemic inflammation and new-onset atrial fibrillation" },
  ],
  sections: [
    {
      id: "arrhythmias.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Triad: Hemodynamic Stability, 12-Lead ECG & Rhythm Strips",
      summary: "First determine hemodynamic stability, then capture a clean 12-lead ECG with long rhythm strip, search for AV dissociation, and measure QTc and QRS duration.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Step 1: Hemodynamic Triage", value: "Assess for unstable signs: Hypotension (SBP < 90), acute altered mental status, ischemic chest pain, or acute pulmonary edema. If unstable: immediate synchronized cardioversion or pacing." },
            { label: "Step 2: 12-Lead ECG Analysis", value: "Assess rate, rhythm regularity, QRS width (<120 ms vs >=120 ms), P-wave relationship (AV dissociation, fusion/capture beats in VT), and QTc interval (>500 ms risk of Torsades)." },
            { label: "Step 3: Laboratory & Metabolic Screen", value: "Stat serum potassium, ionized calcium, magnesium, high-sensitivity troponin, arterial blood gas with lactate, and toxicology/drug screen (digoxin, antiarrhythmics)." }
          ]
        }
      ]
    },
    {
      id: "arrhythmias.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Tachy- and Bradyarrhythmias",
      summary: "Systematic differentiation of narrow vs wide tachycardias, and benign sinus tachycardia from pathologic re-entrant SVT.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Sinus Tachycardia vs SVT: Sinus tachycardia has gradual onset/offset, rate typically < 150-160 bpm, visible upright P waves in lead II, and responds to treating underlying pain/fever/hypovolemia rather than nodal blockers.",
            "Ventricular Tachycardia (VT) vs SVT with Aberrancy: Assume VT in wide-complex tachycardia (>80-90% accuracy). AV dissociation, fusion beats, and capture beats confirm VT.",
            "Atrial Fibrillation with WPW Pre-Excitation vs Polymorphic VT: AF with WPW has extremely rapid (>250 bpm), bizarre, irregularly irregular wide QRS complexes; AV nodal blockers are strictly contraindicated.",
            "Sinus Bradycardia vs Complete (3rd Degree) Heart Block: Complete heart block displays total AV dissociation with slow regular wide/narrow escape rhythm unaffected by atropine."
          ]
        }
      ]
    },
    {
      id: "arrhythmias.overview",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "arrhythmias-guideline-af-2023",
          relevance: "2023 ACC/AHA/ACCP/HRS guideline for the management of atrial fibrillation"
        },
        {
          kind: "guideline",
          id: "arrhythmias-guideline-aha-acc-hrs-va-2017",
          relevance: "2018 AHA/ACC/HRS guideline on ventricular arrhythmias, wide-complex tachycardia, and Torsades protocols"
        }
      ],
      kind: "overview",
      title: "Overview",
      summary: "Arrhythmias are exceptionally common in critically ill patients, driven by systemic inflammation, autonomic surges, electrolyte shifts, ischemia, and exogenous catecholamines, requiring rapid algorithmic triage based on hemodynamic stability.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Cardiac arrhythmias in the ICU range from benign compensatory sinus rhythms to immediately fatal pulseless arrest. New-onset Atrial Fibrillation occurs in 15% to 30% of septic shock and post-cardiac surgery patients, while Ventricular Tachycardia (VT), Ventricular Fibrillation (VF), Torsades de Pointes, and High-Grade AV blocks require instantaneous algorithm-directed intervention.",
        },
        {
          type: "paragraph",
          text: "The primary clinical branch point in critical care is always hemodynamic stability, not rhythm classification. Any tachyarrhythmia or bradyarrhythmia causing hypotension, acute heart failure, ischemic chest discomfort, or altered mental status mandates immediate electrical cardioversion, defibrillation, or emergent pacing before detailed diagnostic workup.",
        },
      ],
    },
    {
      id: "arrhythmias.classification",
      kind: "physiology",
      title: "ICU Arrhythmia Taxonomy & Wide-Complex Differentiation",
      summary: "Narrow vs wide-complex tachycardia, Brugada criteria for Monomorphic VT vs SVT aberrancy, and the dangers of calcium channel blockers.",
      provenance: "textbook",
      body: [
        {
          type: "paragraph",
          text: "Systematic categorization based on QRS width, regularity, and electrophysiological mechanism:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Narrow Regular Tachycardia (QRS < 120 ms)",
              value: "• Sinus Tachycardia: Physiologic compensatory response to shock, pain, fever, hypoxia, anemia, hypovolemia, or catecholamines. DO NOT suppress pharmacologically; treat the underlying etiology.\n• AVNRT / Orthodromic AVRT: Re-entrant SVTs; treated with vagal maneuvers and IV Adenosine (6 mg, then 12 mg rapid flush).\n• Atrial Flutter: Fixed AV conduction (classic 2:1 block at rate ~150 bpm with baseline sawtooth F-waves in II, III, aVF).",
            },
            {
              label: "2. Narrow Irregular Tachycardia",
              value: "• Atrial Fibrillation: Irregularly irregular R-R intervals, absent P-waves.\n• Multifocal Atrial Tachycardia (MAT): ≥ 3 distinct P-wave morphologies; common in severe decompensated COPD, pulmonary hypertension, and theophylline toxicity; treated by correcting hypoxemia and magnesium.",
            },
            {
              label: "3. Wide Regular Tachycardia (QRS ≥ 120 ms) — The VT Rule",
              value: "• GOLDEN ICU RULE: Assume every wide-complex tachycardia is Ventricular Tachycardia (VT) until proven otherwise (> 80–90% of ICU cases are VT).\n• Brugada Criteria for VT: (1) Absence of RS complex in all precordial leads V1–V6 (concordance); (2) RS interval > 100 ms in any precordial lead; (3) AV dissociation (independent P-waves, fusion beats, capture beats); (4) Classic morphological criteria (e.g. monophasic R or qR in V1).\n• CRITICAL PITFALL: NEVER administer IV Calcium Channel Blockers (Diltiazem/Verapamil) or Adenosine to a patient with undifferentiated wide-complex tachycardia; in VT, CCBs cause profound peripheral vasodilation, myocardial depression, and immediate cardiovascular collapse.",
            },
            {
              label: "4. Wide Irregular Tachycardia",
              value: "• Polymorphic VT / Torsades de Pointes (twisting QRS axis associated with prolonged QTc > 500 ms).\n• Pre-Excited Atrial Fibrillation (AF with WPW accessory pathway): Characterized by irregular wide bizarre QRS complexes at rates > 200–250 bpm. STRICTLY CONTRAINDICATED to give AV nodal blockers (adenosine, beta-blockers, CCBs, digoxin); treated with IV Procainamide (10–15 mg/kg) or synchronized cardioversion.",
            },
          ],
        },
      ],
    },
    {
      id: "arrhythmias.emergency-algorithms",
      kind: "management",
      title: "Algorithmic Resuscitation: Unstable Tachycardia & Symptomatic Bradycardia",
      summary: "Synchronized cardioversion energy levels, transcutaneous/transvenous pacing protocols, and chronotropic infusions.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Protocolized ICU resuscitation based on hemodynamic stability:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Unstable Tachyarrhythmia with Pulse",
              value: "Immediate Synchronized Electrical Cardioversion (ensure SYNC button is engaged to avoid shocking on the T-wave and precipitating VF):\n• Narrow Regular (SVT / Atrial Flutter): 50–100 J biphasic.\n• Narrow Irregular (Atrial Fibrillation): 120–200 J biphasic.\n• Wide Regular (Monomorphic VT): 100 J biphasic.\n• Administer procedural sedation (Ketamine 0.5–1.0 mg/kg or Etomidate 0.1–0.2 mg/kg) if time permits, but do not delay shock if patient is rapidly deteriorating.",
            },
            {
              label: "2. Stable Monomorphic VT Management",
              value: "• Pharmacologic Conversion: IV Amiodarone (150 mg IV over 10 minutes, then 1.0 mg/min for 6 hours, then 0.5 mg/min for 18 hours) OR IV Procainamide (20–50 mg/min until arrhythmia suppressed, hypotension ensues, or QRS widens > 50%; max 17 mg/kg).\n• If pharmacotherapy fails: Elective synchronized cardioversion (100–200 J biphasic) under procedural sedation.",
            },
            {
              label: "3. Symptomatic Bradyarrhythmia Algorithm",
              value: "• Step 1: Atropine 1.0 mg IV push every 3–5 minutes (maximum 3.0 mg total; effective for sinus bradycardia and Mobitz I block; ineffective in Mobitz II or 3rd-degree complete heart block with wide QRS escape).\n• Step 2: Transcutaneous Pacing (TCP): Apply pads immediately, set pacing rate 60–80 bpm on demand mode, increase current (mA) until electrical capture (wide QRS following each spike) AND mechanical capture (palpable femoral pulse and arterial line pulsatility) are confirmed.\n• Step 3: Chronotropic Infusions: Epinephrine (2–10 mcg/min) or Dopamine (5–20 mcg/kg/min).\n• Step 4: Emergent Transvenous Pacing (TVP): Place 5–6 Fr bipolar pacing catheter via internal jugular or femoral vein into the RV apex for definitive capture.",
            },
          ],
        },
      ],
    },
    {
      id: "arrhythmias.torsades-de-pointes",
      kind: "management",
      title: "Refractory Torsades de Pointes & Overdrive Pacing Protocols",
      summary: "Recognition, long QTc triggers, IV magnesium, potassium targets, pause-dependent dynamics, and temporary overdrive pacing.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Stepped critical care protocol for Polymorphic Ventricular Tachycardia and Torsades de Pointes (TdP):",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Pathophysiology & Differentiation: TdP vs Ischemic Polymorphic VT",
              value: "• Torsades de Pointes (TdP): Specifically defined as polymorphic VT occurring in the setting of prolonged ventricular repolarization (QTc interval > 500 ms). Characterized by sinusoidal twisting of the QRS complexes around the isoelectric line at 200–250 bpm, triggered by pause-dependent ('short-long-short' sequence) early afterdepolarizations (EADs).\n• Contrast with Ischemic Polymorphic VT: Polymorphic VT in the setting of acute myocardial ischemia / ACS occurs with a NORMAL baseline QT interval, is NOT pause-dependent, and is driven by re-entry in ischemic myocardium. Treatment is emergent coronary reperfusion, IV beta-blockers, and anti-ischemic therapy. Overdrive pacing and Isoproterenol are STRICTLY CONTRAINDICATED in ischemic polymorphic VT (accelerates ischemia and precipitates refractory VF).",
            },
            {
              label: "2. Immediate Pharmacological Therapy for Acquired Long-QT TdP",
              value: "• IV Magnesium Sulfate: Administer 2.0 g IV push/infusion over 10–15 minutes, repeated in 15 minutes if needed (followed by continuous infusion at 1–2 g/hr). Magnesium suppresses early afterdepolarizations and terminates TdP regardless of baseline serum magnesium concentration.\n• Aggressive Potassium Repletion: Infuse IV Potassium Chloride to maintain serum K+ strictly between 4.5 to 5.0 mEq/L (enhances rapid delayed rectifier potassium current IKr).\n• Stop All QT-Prolonging Drugs IMMEDIATELY: Antiarrhythmics (Amiodarone, Sotalol), antibiotics (Fluoroquinolones, Macrolides, Azoles), psychotropics (Haloperidol, Quetiapine), antiemetics (Ondansetron), and Methadone.",
            },
            {
              label: "3. Overdrive Pacing Protocol (The Definitive Therapy for Refractory TdP)",
              value: "• Rationale: Increasing the baseline heart rate shortens the cardiac action potential duration and shortens the QTc interval, completely extinguishing pause-dependent early afterdepolarizations.\n• Protocol: Initiate Temporary Transcutaneous or Transvenous Pacing at a rate of 90 to 110 bpm (or faster if needed). Maintain continuous overdrive pacing until underlying QT prolongation resolves.\n• Pharmacologic Overdrive Bridge (IV Isoproterenol): If electrical pacing is not immediately available and acute myocardial ischemia has been definitively excluded, infuse IV Isoproterenol (2–10 mcg/min continuous infusion titrated to maintain heart rate > 90–100 bpm) to shorten the QT interval.",
            },
            {
              label: "4. Hemodynamically Unstable / Pulseless TdP",
              value: "Immediate Unsynchronized Defibrillation at maximum biphasic energy (200 J biphasic). Defibrillators cannot synchronize reliably to shifting polymorphic axes; do not waste time attempting synchronization.",
            },
          ],
        },
      ],
    },
    {
      id: "arrhythmias.new-onset-af",
      kind: "management",
      title: "New-Onset Atrial Fibrillation in Critical Illness (AF-CI)",
      summary: "Trigger reversal, rate control (beta-blockers vs CCBs vs amiodarone/digoxin in shock), rhythm control indications, and anticoagulation.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "New-onset AF in the ICU is predominantly a manifestation of acute systemic illness rather than primary electrophysiologic disease:",
        },
        {
          type: "key-value-table",
          rows: [
            {
              label: "1. Aggressive Trigger Reversal",
              value: "Correct Hypokalemia (target K+ > 4.5 mEq/L) and Hypomagnesemia (target Mg2+ > 2.0–2.5 mg/dL). Treat underlying sepsis, optimize fluid balance, and down-titrate exogenous catecholamines (epinephrine/norepinephrine) if feasible.",
            },
            {
              label: "2. Pharmacologic Rate Control (Preserved LV Function)",
              value: "Target resting ventricular rate < 110 bpm. Short-acting IV Beta-Blockers: Esmolol (loading dose 500 mcg/kg over 1 min, then infusion 50–300 mcg/kg/min; ideal for rapid titration) or Metoprolol (2.5–5 mg IV q5m, max 15 mg). Non-dihydropyridine CCBs: Diltiazem (0.25 mg/kg IV bolus over 2 min, then infusion 5–15 mg/hr).",
            },
            {
              label: "3. Pharmacologic Rate Control (Reduced LV Function / Shock)",
              value: "In patients with EF < 40%, acute decompensated heart failure, or borderline shock, beta-blockers and CCBs can precipitate acute collapse. Use IV Amiodarone (150 mg IV over 10 min, then 1 mg/min for 6 hrs, then 0.5 mg/min for 18 hrs) OR IV Digoxin (0.25–0.5 mg IV loading, max 1.0–1.5 mg over 24 hrs).",
            },
            {
              label: "4. Rhythm Control Indications",
              value: "Indicated when AF causes severe hemodynamic instability, refractory heart failure, or in patients with severe right ventricular failure where the atrial kick is required for survival.",
            },
          ],
        },
      ],
    },
    {
      id: "arrhythmias.pitfalls",
      kind: "monitoring",
      title: "Common ICU Pitfalls in Arrhythmia Management",
      summary: "Critical mistakes to avoid in managing arrhythmias in the critically ill.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Administering IV Diltiazem or Verapamil for undifferentiated wide-complex tachycardia: If the rhythm is VT, calcium channel blockers cause immediate cardiovascular collapse and cardiac arrest; treat all wide-complex tachycardias as VT.",
            "Treating compensatory sinus tachycardia with rate-controlling drugs: Sinus tachycardia maintains cardiac output in shock, hypovolemia, and sepsis; suppressing it precipitates acute hemodynamic collapse.",
            "Attempting synchronized cardioversion in Polymorphic VT / Torsades: Irregular polymorphic peaks prevent synchronizer discharge or cause shock delivery on the T-wave; use unsynchronized defibrillation.",
            "Administering Amiodarone for Torsades de Pointes: Amiodarone further prolongs the QTc interval and worsens Torsades; the treatment of choice is IV Magnesium and Overdrive Pacing.",
            "Failing to engage the SYNC button before cardioverting Monomorphic VT or AF: Delivering an unsynchronized shock on the vulnerable T-wave induces immediate Ventricular Fibrillation (R-on-T phenomenon).",
          ],
        },
      ],
    },
    {
      id: "arrhythmias.controversies",
      kind: "controversies",
      title: "Controversies & Areas of Uncertainty",
      summary: "Early Anticoagulation for New-Onset Atrial Fibrillation in Septic Shock.",
      provenance: "guideline",
      body: [
        {
          type: "paragraph",
          text: "Anticoagulation in Sepsis-Induced New-Onset AF: While new-onset AF carries an elevated stroke risk, septic ICU patients have high baseline bleeding risks from coagulopathy, thrombocytopenia, and invasive lines. Large observational studies (such as Walkey et al.) showed parenteral therapeutic anticoagulation during acute septic shock did not reduce ischemic stroke rates but significantly increased major gastrointestinal and procedural bleeding. Current practice favors withholding therapeutic anticoagulation during the acute vasoplegic phase, reassessing indication when the patient achieves stability.",
        },
      ],
    },
    {
      id: "arrhythmias.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of acute hemodynamic collapse, thromboembolism, and proarrhythmic drug toxicity.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Cardiogenic shock and acute pulmonary edema from loss of atrial kick in stiff LV; degeneration into ventricular fibrillation / pulseless cardiac arrest; asystole during adenosine administration." },
            { label: "Treatment-Related", value: "Profound cardiovascular collapse from calcium channel blockers mistakenly given in VT; Torsades de Pointes from QTc-prolonging antiarrhythmics (amiodarone, sotalol, ibutilide); embolic stroke following cardioversion of unrecognized chronic atrial fibrillation." },
            { label: "Late / Delayed", value: "Tachycardia-induced cardiomyopathy from unmanaged prolonged rapid ventricular rates; recurrence of refractory electrical storm." },
            { label: "Escalation Triggers", value: "Refractory VT/VF electrical storm requiring deep sedation, sympathetic blockade (esmolol/stellate ganglion block), and mechanical circulatory support (VA-ECMO/Impella); complete heart block unresponsive to transcutaneous pacing requiring emergent transvenous pacing." }
          ]
        }
      ]
    },
],
};
