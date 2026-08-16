import type { ClinicalProblem } from "@/content-types";

export const newTachycardia: ClinicalProblem = {
  id: "new-tachycardia",
  slug: "new-tachycardia",
  title: "New Tachycardia & Tachyarrhythmias",
  category: "hemodynamic",
  oneLiner: "Algorithmic triage of acute heart rates > 100–150 bpm: stability screen (immediate cardioversion if unstable), narrow vs wide QRS differentiation, Brugada VT rules, and sinus tachycardia etiology search.",
  relatedTopicIds: [
      "arrhythmias",
      "shock",
      "cardiogenic-shock",
      "pulmonary-embolism",
      "hyperkalemia",
      "endocrine-emergencies",
      "sepsis"
    ],
  body: [
    {
      type: "paragraph",
      text: "New tachycardia (heart rate > 100 bpm, particularly > 140–150 bpm) in the critically ill patient is a high-yield diagnostic and therapeutic fork. The primary clinical decision is assessing hemodynamic stability: if unstable (hypotension, acute heart failure, ischemic chest pain, altered mental status), immediate synchronized electrical cardioversion is required. If stable, algorithmic differentiation based on QRS width (narrow < 120 ms vs wide ≥ 120 ms) and regularity guides safe intervention.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Monomorphic Ventricular Tachycardia (assume every wide-complex tachycardia is VT until proven otherwise), Pre-Excited Atrial Fibrillation (WPW with irregular wide QRS at rates > 200 bpm), and Sinus Tachycardia masking occult internal hemorrhage, septic shock, or acute pulmonary embolism.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. STABILITY SCREEN (THE ACLS BRANCH POINT)",
          value: "• Signs of Instability: Hypotension (MAP < 65), acute pulmonary edema, acute myocardial ischemia (angina, ST-segment shifts), or altered mental status.\n• Unstable Management: Immediate Synchronized Electrical Cardioversion (Narrow Regular: 50–100 J; Narrow Irregular [AF]: 120–200 J; Wide Regular [Monomorphic VT]: 100 J biphasic). Ensure SYNC mode is engaged.",
        },
        {
          label: "2. NARROW REGULAR TACHYCARDIA (QRS < 120 ms)",
          value: "• Sinus Tachycardia: Physiologic compensatory response to fever, pain, shock, hypovolemia, hypoxia, anemia, or exogenous catecholamines. DO NOT suppress pharmacologically; identify and treat the underlying trigger.\n• SVT (AVNRT / AVRT): Sudden onset/termination, rate 150–220 bpm, p-waves buried. Treat with vagal maneuvers -> IV Adenosine (6 mg rapid IV push, then 12 mg if needed).\n• Atrial Flutter: Fixed AV block (classic 2:1 block at rate ~150 bpm with sawtooth F-waves in leads II, III, aVF).",
        },
        {
          label: "3. NARROW IRREGULAR TACHYCARDIA",
          value: "• New-Onset Atrial Fibrillation in Critical Illness (AF-CI): Rate control with short-acting beta-blockers (Esmolol/Metoprolol) or non-dihydropyridine CCBs (Diltiazem) if LV function is preserved. In reduced ejection fraction (EF < 40%) or borderline shock, use IV Amiodarone or IV Digoxin.\n• Multifocal Atrial Tachycardia (MAT): ≥ 3 distinct P-wave morphologies; common in severe COPD exacerbation; treat with oxygen, bronchodilators, and magnesium.",
        },
        {
          label: "4. WIDE REGULAR TACHYCARDIA (QRS ≥ 120 ms) — THE VT RULE",
          value: "• The Golden Rule: > 80–90% of wide-complex tachycardias in the ICU are Ventricular Tachycardia (VT).\n• Brugada Criteria for VT: Precordial concordance (absence of RS in V1–V6), RS interval > 100 ms in any precordial lead, AV dissociation (fusion/capture beats), or classic morphological criteria.\n• Pharmacotherapy for Stable Monomorphic VT: IV Amiodarone (150 mg over 10 min, then 1 mg/min for 6h) OR IV Procainamide (20–50 mg/min, max 17 mg/kg).\n• CRITICAL PITFALL: NEVER administer IV Calcium Channel Blockers (Diltiazem/Verapamil) or Adenosine to undifferentiated wide-complex tachycardia; CCBs cause immediate cardiovascular collapse and arrest in VT.",
        },
        {
          label: "5. WIDE IRREGULAR TACHYCARDIA",
          value: "• Torsades de Pointes (TdP): Polymorphic VT with twisting QRS axis in prolonged QTc (> 500 ms); treat with IV Magnesium Sulfate 2.0 g, Potassium repletion (target 4.5–5.0 mEq/L), and Overdrive Pacing (90–110 bpm).\n• Pre-Excited AF (WPW): AV nodal blockers (adenosine, beta-blockers, CCBs, digoxin) are STRICTLY CONTRAINDICATED (induce 1:1 accessory pathway conduction and VF); treat with IV Procainamide or electrical cardioversion.",
        },
        {
          label: "6. REASSESSMENT & TRIGGER REVERSAL",
          value: "• Electrolyte Optimization: Serum K+ > 4.0–4.5 mEq/L and Mg2+ > 2.0–2.5 mg/dL.\n• Taper Exogenous Catecholamines: Reduce high-dose epinephrine or dobutamine if tachyarrhythmias compromise ventricular filling time.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Treating compensatory sinus tachycardia with rate-controlling medications (beta-blockers/diltiazem). In septic shock, hypovolemia, or acute PE, sinus tachycardia maintains cardiac output (CO = HR x SV); suppressing heart rate precipitates profound cardiogenic collapse.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Arrhythmias: Full diagnostic criteria, Brugada algorithms, and antiarrhythmic dosing.\n• Shock: Hemodynamic monitoring and perfusion endpoints in tachycardia.\n• Cardiogenic Shock: Arrhythmogenic pump failure and inotrope selection.\n• Pulmonary Embolism: S1Q3T3 patterns and RV strain in tachycardia.\n• Hyperkalemia: Conduction abnormalities and membrane stabilization.",
        },
      ],
    },
  ],
};
