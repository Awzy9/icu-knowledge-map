import type { ClinicalProblem } from "@/content-types";

export const acuteHypertension: ClinicalProblem = {
  id: "acute-hypertension",
  slug: "acute-hypertension",
  title: "Acute Severe Hypertension & Hypertensive Emergencies",
  category: "hemodynamic",
  oneLiner: "Differentiating hypertensive emergency (acute target organ damage) from asymptomatic hypertension: tailored pressure targets for SCAPE, aortic dissection, hemorrhagic stroke, and ischemic stroke.",
  relatedTopicIds: [
      "hypertensive-emergencies",
      "acute-aortic-syndromes",
      "cardiogenic-pulmonary-edema",
      "intracranial-hemorrhage",
      "acute-ischemic-stroke",
      "intracranial-hypertension",
      "acute-coronary-syndrome"
    ],
  body: [
    {
      type: "paragraph",
      text: "Acute severe blood pressure elevation (typically SBP > 180 mmHg or DBP > 110–120 mmHg) requires immediate clinical differentiation between a Hypertensive Emergency (evidence of acute, progressive target organ damage) and Hypertensive Urgency / Asymptomatic Hypertension. In a hypertensive emergency, immediate parenteral blood pressure lowering is required, but the speed, depth, and choice of agent depend strictly on the specific organ system at risk.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Dangerous Diagnosis Not to Miss: Acute Aortic Dissection (Type A/B), Acute Intracranial Hemorrhage (ICH/SAH), Sympathetic Crashing Acute Pulmonary Edema (SCAPE), Acute Myocardial Infarction, Hypertensive Encephalopathy / Posterior Reversible Encephalopathy Syndrome (PRES), and Eclampsia.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. RECOGNIZE & TARGET ORGAN DAMAGE SCREEN",
          value: "• Neurologic Screen: Severe headache, altered mental status, seizures, visual loss (papilledema), focal deficits -> CT head (ICH, ischemic stroke, PRES).\n• Cardiovascular Screen: Tearing chest/back pain (aortic dissection), ischemic chest discomfort (ACS), dyspnea/orthopnea (flash pulmonary edema) -> ECG, troponin, chest X-ray/CTA.\n• Renal Screen: Acute oliguria, hematuria, rising creatinine -> UA, creatinine, electrolytes.\n• Obstetric Screen: Pregnancy > 20 weeks with hypertension, headache, epigastric pain -> check preeclampsia labs (platelets, LFTs, urine protein).",
        },
        {
          label: "2. ORGAN-SPECIFIC BLOOD PRESSURE TARGETS",
          value: "• Acute Aortic Dissection: Ultra-rapid lowering within 20 minutes:\n  - Heart Rate Target: HR < 60 bpm FIRST (IV Esmolol or Labetalol) to reduce aortic wall shear stress (dP/dt).\n  - Blood Pressure Target: SBP < 120 mmHg (add Nicardipine or Nitroprusside only AFTER beta-blockade to prevent reflex tachycardia).\n• Sympathetic Crashing Acute Pulmonary Edema (SCAPE):\n  - Target: Rapid SBP reduction by 20–30% with high-dose IV Nitroglycerin boluses (400–1000 mcg) + NIV (CPAP/BiPAP).\n• Acute Intracerebral Hemorrhage (ICH):\n  - Target: Smoothly lower SBP to 130–140 mmHg within hours (avoid SBP < 130 mmHg) using IV Nicardipine or Clevidipine.\n• Acute Ischemic Stroke (Candidate for Thrombolysis/Thrombectomy):\n  - Pre-tPA Target: SBP < 185 mmHg and DBP < 110 mmHg.\n  - Post-tPA Target: SBP < 180 mmHg and DBP < 105 mmHg for at least 24 hours.\n• Acute Ischemic Stroke (Non-Reperfusion Candidate):\n  - Permissive Hypertension: Lower blood pressure ONLY if SBP > 220 mmHg or DBP > 120 mmHg (modest 15% reduction in 24h to avoid expanding cerebral ischemic penumbra).",
        },
        {
          label: "3. FIRST-LINE PARENTERAL ANTIHYPERTENSIVE AGENTS",
          value: "• IV Nicardipine: DHP calcium channel blocker; start 5 mg/hr, titrate by 2.5 mg/hr q5–15m (max 15 mg/hr); predictable, preserves cerebral autoregulation.\n• IV Clevidipine: Ultra-short-acting lipid emulsion CCB; start 1–2 mg/hr, double q90s (max 32 mg/hr); ideal for rapid micro-titration.\n• IV Labetalol: Combined alpha-1 and non-selective beta-blocker (1:7 ratio); 10–20 mg IV bolus over 2 min, repeated q10m (or infusion 1–8 mg/min); avoid in severe asthma, bradycardia, or acute decompensated heart failure.\n• IV Nitroglycerin: Predominant venodilator; high doses reduce afterload; drug of choice in SCAPE and ischemic ACS.",
        },
        {
          label: "4. REASSESSMENT & ESCALATION",
          value: "• Continuous Arterial Line Monitoring: Mandatory for all patients on titratable parenteral antihypertensive infusions.\n• Monitor Cerebral Perfusion: Watch for new neurological deficits or lethargy during rapid pressure reduction (signs of watershed hypoperfusion); if neurologic deficit worsens, immediately relax blood pressure target.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      text: "Common Diagnostic Trap: Overzealous, precipitous blood pressure reduction in acute ischemic stroke or chronic severe hypertension. Rapid drops shift cerebral perfusion below the autoregulatory plateau, converting viable ischemic penumbral tissue into irreversible cerebral infarction.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "Destination Topics",
          value: "• Cardiogenic Pulmonary Edema: SCAPE physiology and high-dose nitrate therapy.\n• Intracranial Hemorrhage: Blood pressure reduction targets, hematoma expansion, and reversal.\n• Ischemic Stroke: Permissive hypertension, post-thrombectomy perfusion, and rtPA criteria.\n• Intracranial Hypertension: Cerebral perfusion pressure (CPP = MAP - ICP) targets.\n• Acute Coronary Syndromes: Coronary perfusion pressure and afterload reduction.",
        },
      ],
    },
  ],
};
