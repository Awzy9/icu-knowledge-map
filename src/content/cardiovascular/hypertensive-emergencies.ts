import type { Topic } from "@/content-types";

export const hypertensiveEmergencies: Topic = {
  id: "hypertensive-emergencies",
  slug: "hypertensive-emergencies",
  title: "Hypertensive Emergencies",
  category: "cardiovascular",
  oneLiner: "Target organ damage assessment, intravenous antihypertensive titration, and emergency-specific blood pressure targets.",
  status: "complete",
  lastReviewed: "2026-08-15",
  version: "2.0",
  foundationSources: [
    {
      title: "Irwin & Rippe's Intensive Care Medicine",
      edition: "9th Edition, 2023",
      note: "Chapter 31: Hypertensive Crises and Emergencies in Critical Care"
    },
    {
      title: "Oh's Intensive Care Manual",
      edition: "9th Edition, 2025",
      note: "Chapter 22: Hypertensive Emergencies"
    }
  ],
  currentStatus: "Current as of the 2017 AHA/ACC Comprehensive Guideline on High Blood Pressure in Adults and the 2023 ESH Guidelines for the Management of Arterial Hypertension.",
  otherReferences: [
    "Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248.",
    "Mancia G, et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens. 2023;41(12):1874-2071."
  ],
  relationships: [
    { type: "prerequisite", targetId: "acute-aortic-syndromes", label: "Anti-impulse shear stress control in acute aortic dissection" },
    { type: "related-to", targetId: "cardiogenic-pulmonary-edema", label: "Sympathetic crashing acute pulmonary edema (SCAPE) management" },
    { type: "related-to", targetId: "intracranial-hemorrhage", label: "Careful blood pressure reduction targets in acute ICH" },
    { type: "differential", targetId: "toxicologic-emergencies", label: "Sympathomimetic toxicity (cocaine/methamphetamine) induced severe hypertension" },
    { type: "differential", targetId: "endocrine-emergencies", label: "Pheochromocytoma crisis-induced catecholamine surges" }
  ],
  sections: [
    {
      id: "hypertensive-emergencies.overview",
      kind: "overview",
      title: "Definition & Fundamental Distinction",
      summary: "A Hypertensive Emergency is defined by severe blood pressure elevation (typically SBP > 180 mmHg or DBP > 120 mmHg) accompanied by ACUTE, PROGRESSIVE TARGET ORGAN DAMAGE, requiring immediate admission to the ICU and intravenous titratable antihypertensives.",
      provenance: "guideline",
      evidenceRefs: [
        {
          kind: "guideline",
          id: "hypertension-guideline-aha-acc-2017",
          relevance: "AHA/ACC Guideline establishing organ-specific blood pressure targets and differentiating emergency from urgency"
        }
      ],
      body: [
        {
          type: "paragraph",
          text: "The absolute level of blood pressure is less important than the rate of rise and the presence or absence of acute end-organ damage. Patients with chronic severe hypertension can tolerate SBP > 200 mmHg without acute symptoms due to adaptive rightward shift of cerebral autoregulation. Conversely, a previously normotensive patient (such as a pregnant patient with eclampsia) can develop fatal encephalopathy at SBP 160/100 mmHg."
        },
        {
          type: "key-value-table",
          rows: [
            { label: "Hypertensive Emergency", value: "Severe BP elevation WITH acute target organ damage (acute aortic dissection, acute coronary ischemia, acute pulmonary edema / SCAPE, hypertensive encephalopathy, acute ischemic stroke, intracranial hemorrhage, eclampsia, acute renal failure). Mandates ICU admission, continuous arterial line, and IV titratable agents." },
            { label: "Hypertensive Urgency", value: "Severe BP elevation WITHOUT acute target organ damage. Does NOT require ICU admission or IV antihypertensives; managed with oral antihypertensive adjustments and outpatient follow-up. Precipitous IV BP reduction in urgency can cause stroke or myocardial infarction." }
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.diagnosis",
      kind: "diagnosis",
      title: "Diagnostic Evaluation: Searching for End-Organ Damage",
      summary: "Systematic screening of neurological, cardiovascular, renal, and ocular systems to identify specific acute end-organ dysfunction.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: true,
          items: [
            "Neurological Evaluation: Screen for hypertensive encephalopathy (headache, confusion, altered sensorium, seizures, visual loss), acute ischemic stroke, or intracranial hemorrhage. Order emergent non-contrast CT brain if focal deficits or altered mental status are present.",
            "Cardiovascular Evaluation: 12-lead ECG and high-sensitivity troponin for acute coronary syndrome; chest X-ray and bedside POCUS for pulmonary edema and bilateral B-lines; check bilateral arm blood pressures and CTA if acute aortic dissection is suspected.",
            "Renal & Hematologic Evaluation: Serum creatinine, BUN, electrolytes, urinalysis (proteinuria, RBC casts indicating acute glomerulonephritis/malignant nephrosclerosis), complete blood count and peripheral blood smear (microangiopathic hemolytic anemia with schistocytes in thrombotic microangiopathy).",
            "Fundoscopic Examination: Look for grade III (flame hemorrhages, cotton wool spots) or grade IV (papilledema) hypertensive retinopathy."
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.differential-diagnosis",
      kind: "differential-diagnosis",
      title: "Differential Diagnosis of Hypertensive Crises",
      summary: "Identify primary neurohumoral, toxicologic, or withdrawal states driving acute hypertensive surges.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Severe Sympathomimetic Toxicity: Cocaine, methamphetamine, synthetic cathinones ('bath salts'); treat with high-dose benzodiazepines + phentolamine/nicardipine; avoid pure beta-blockers.",
            "Pheochromocytoma Crisis: Episodic headache, sweating, palpitations, severe hypertension; alpha-blockade (phentolamine/phenoxybenzamine) must precede beta-blockade.",
            "Acute Antihypertensive Withdrawal: Clonidine or beta-blocker rebound hypertension; restart agent or use IV labetalol / nicardipine.",
            "Preeclampsia with Severe Features / Eclampsia: Hypertension in pregnancy (>20 weeks) with proteinuria or end-organ injury; IV labetalol, hydralazine, and IV magnesium sulfate for seizure prophylaxis.",
            "Sepsis / Agitation Surges: Severe pain or hyperactive delirium triggering secondary sympathetic hypertension; treat underlying pain and distress before aggressive vasodilators."
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.target-matrix",
      kind: "management",
      title: "Organ-Specific Blood Pressure Target Matrix",
      summary: "Blood pressure targets must be customized to the specific presenting end-organ emergency. Universal rapid lowering is dangerous in ischemic stroke but life-saving in aortic dissection.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Acute Aortic Dissection", value: "Rapid reduction within 20 minutes: SBP < 120 mmHg and Heart Rate < 60 bpm. IV Esmolol FIRST, then IV Nicardipine or Nitroprusside." },
            { label: "Acute Ischemic Stroke (Thrombolysis / EVT)", value: "If candidate for IV thrombolysis or EVT: SBP < 185 mmHg and DBP < 110 mmHg prior to therapy; maintain < 180/105 mmHg for 24h post-treatment using IV Labetalol or Nicardipine." },
            { label: "Acute Ischemic Stroke (Non-Reperfusion)", value: "Permissive hypertension: Do NOT treat unless BP > 220/120 mmHg. If >220/120, lower MAP by 15% over first 24 hours." },
            { label: "Acute Intracranial Hemorrhage (ICH)", value: "Target SBP 130-140 mmHg smoothly and rapidly (within 1-2 hours) using IV Nicardipine or Clevidipine; avoid SBP < 130 mmHg (INTERACT2/ATACH-2)." },
            { label: "Acute Pulmonary Edema / SCAPE", value: "Rapid afterload reduction: High-dose IV Nitroglycerin boluses (0.4-2 mg IV every 3-5 min) + infusion (50-200 mcg/min) plus non-invasive ventilation (BiPAP/CPAP). Reduce SBP by 20-30% rapidly." },
            { label: "Hypertensive Encephalopathy / General Emergency", value: "Reduce MAP by no more than 20-25% in the first hour; if stable, target 160/100 mmHg over next 2-6 hours, then normalize over 24-48 hours." },
            { label: "Preeclampsia / Eclampsia", value: "Target SBP 140-150 mmHg and DBP 90-100 mmHg using IV Labetalol or Hydralazine; IV Magnesium sulfate (4-6g loading, 1-2g/h infusion) for seizure prevention." }
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.pharmacology",
      kind: "management",
      title: "First-Line Intravenous Antihypertensive Agents",
      summary: "Continuous IV infusions with rapid onset and offset allow precise bedside titration and prevent precipitous hypotension.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Nicardipine (DHP Calcium Blocker)", value: "Onset 5-15 min, offset 15-30 min. Dose: 5 mg/h IV, titrate by 2.5 mg/h every 5-15 min to max 15 mg/h. Ideal for acute stroke, ICH, and encephalopathy. Does not increase ICP." },
            { label: "Clevidipine (Ultra-Short CCB)", value: "Onset 1-2 min, offset 5-15 min (metabolized by blood esterases). Dose: 1-2 mg/h, double every 90 sec to max 32 mg/h. Excellent for tight arterial line titration." },
            { label: "Labetalol (Alpha-1 & Non-Selective Beta Blocker)", value: "Onset 5 min, offset 3-6 hours. Dose: 20 mg IV bolus, then 40-80 mg every 10 min up to 300 mg max, or 1-2 mg/min infusion. Ideal in aortic dissection, pregnancy, and stroke. Avoid in severe asthma or decompensated heart failure." },
            { label: "Esmolol (Ultra-Short Beta-1 Blocker)", value: "Onset 1-2 min, offset 10-20 min. Dose: 500 mcg/kg loading over 1 min, then 50-300 mcg/kg/min infusion. First-line for aortic dissection anti-impulse control." },
            { label: "Nitroglycerin (Venodilator & Arteriodilator)", value: "Onset 1-2 min, offset 3-5 min. Dose: 10-200 mcg/min infusion, or high-dose boluses for SCAPE. First-line for acute cardiogenic pulmonary edema and acute myocardial ischemia." },
            { label: "Sodium Nitroprusside (Direct NO Donor)", value: "Onset immediate, offset 1-2 min. Dose: 0.25-10 mcg/kg/min. Potent balanced vasodilator. CAUTION: Risk of cyanide and thiocyanate toxicity with infusions >2 mcg/kg/min >24-48h or in renal/hepatic impairment; causes reflex tachycardia and intracranial pressure elevation." }
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.monitoring",
      kind: "monitoring",
      title: "ICU Hemodynamic & Neurological Monitoring",
      summary: "Invasive monitoring guarantees safety during rapid drug titration and prevents overshooting hypotension.",
      provenance: "textbook",
      body: [
        {
          type: "list",
          ordered: false,
          items: [
            "Continuous Radial Arterial Line: Mandatory during continuous IV vasodilator/beta-blocker infusions to prevent unrecognized precipitous hypotension.",
            "Hourly Neurological Assessments: GCS and focal deficit checks to detect cerebral hypoperfusion (watershed ischemia) or evolving intracranial hemorrhage.",
            "Hourly Urine Output: Confirms renal perfusion pressure (>0.5 mL/kg/h).",
            "Thiocyanate / Cyanide Screen: Mandatory if nitroprusside is used >24 hours or if unexplained lactic acidosis, confusion, or methemoglobinemia develops."
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.complications",
      kind: "complications",
      title: "Complications & Escalation Triggers",
      summary: "Structured recognition of immediate organ failure, treatment-related overshoots, and escalation criteria.",
      provenance: "textbook",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Early / Immediate", value: "Acute hemorrhagic transformation of ischemic stroke, acute pulmonary edema, acute aortic rupture, hypertensive encephalopathy seizures." },
            { label: "Treatment-Related", value: "Precipitous hypotension causing cerebral watershed infarction or acute coronary hypoperfusion; cyanide/thiocyanate toxicity from nitroprusside; reflex tachycardia from pure vasodilators." },
            { label: "Late / Delayed", value: "Rebound severe hypertension upon abrupt IV drug cessation; progressive ischemic nephrosclerosis." },
            { label: "Escalation Triggers", value: "New acute focal neurologic deficit during BP lowering; refractory pulmonary edema requiring intubation; rising serum troponin or refractory ischemic ECG changes." }
          ]
        }
      ]
    },
    {
      id: "hypertensive-emergencies.pitfalls",
      kind: "controversies",
      title: "Critical Care Hypertensive Pitfalls & Practice Red Lines",
      summary: "High-yield bedside errors in BP lowering including watershed infarction, reflex tachycardia, and pure vasodilators.",
      provenance: "guideline",
      body: [
        {
          type: "key-value-table",
          rows: [
            { label: "Pitfall: Over-Aggressive BP Drop in Stroke", value: "Lowering blood pressure >15-20% in acute ischemic stroke (non-thrombolysis candidates) causes severe cerebral hypoperfusion and extends the ischemic penumbra into irreversible infarction." },
            { label: "Pitfall: Pure Vasodilator Without Beta-Blockade", value: "Administering pure vasodilators (nitroprusside, hydralazine, nicardipine) without prior beta-blockade in aortic dissection; reflex sympathetic tachycardia increases LV dP/dt and propagates the dissection flap." },
            { label: "Pitfall: Sublingual Nifedipine / Oral Hydralazine", value: "Using short-acting oral/sublingual agents for hypertensive emergencies; erratic absorption produces un-titratable, precipitous hypotension with coronary or cerebral hypoperfusion." },
            { label: "Pitfall: Diuretics Alone for SCAPE", value: "Relying on loop diuretics rather than aggressive high-dose IV nitroglycerin and non-invasive ventilation in flash pulmonary edema (SCAPE); these patients have acute sympathetic vasoconstrictive afterload mismatch rather than total-body hypervolemia." },
            { label: "Pitfall: Beta-Blockers in Cocaine / Methamphetamine Crisis", value: "Administering pure beta-blockers in sympathomimetic toxidromes without prior alpha-blockade; unopposed alpha-1 receptor stimulation causes severe coronary vasospasm and hypertensive crisis." }
          ]
        }
      ]
    }
  ]
};
