import type { ClinicalCase } from "@/content-types/clinical-case";

export const hypertensiveEmergencyCase: ClinicalCase = {
  id: "case-htn-emergency",
  slug: "hypertensive-emergency",
  title: "Hypertensive Emergency with End-Organ Dysfunction",
  subtitle: "Targeted blood pressure titration in acute encephalopathy and aortic dissection",
  difficulty: "intermediate",
  system: "cardiovascular",
  tags: ["hypertension", "nicardipine", "clevidipine", "esmolol", "neurology"],
  objectives: [
    "Differentiate hypertensive emergency (acute target-organ damage) from asymptomatic severe hypertension",
    "Apply safe cerebral autoregulation limits (reduce MAP by no more than 20–25% in the first hour)",
    "Distinguish general controlled reduction from critical phenotype exceptions (aortic dissection, stroke, SCAPE, preeclampsia)",
    "Execute rapid anti-impulse reduction (dP/dt) in acute aortic syndromes using beta-blockers prior to vasodilators"
  ],
  initialPresentation: {
    history: "A 58-year-old male with long-standing poorly controlled hypertension presents with severe generalized headache, visual blurring, nausea, and progressive confusion. He ran out of his antihypertensive prescriptions 3 weeks ago.",
    vitals: { "HR": "96/min", "BP": "238/132 mmHg", "MAP": "167 mmHg", "RR": "18/min", "SpO2": "98%", "Temp": "37.0°C" },
    keyFindings: [
      "Bilateral optic disc edema with flame hemorrhages on fundoscopic exam (grade IV hypertensive retinopathy)",
      "Serum Creatinine 2.6 mg/dL (baseline 1.1 mg/dL) with microscopic hematuria and proteinuria",
      "Non-contrast CT Head: No acute intracranial hemorrhage; MRI brain shows bilateral posterior white matter vasogenic edema consistent with Posterior Reversible Encephalopathy Syndrome (PRES)"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient has Hypertensive Emergency with acute encephalopathy (PRES) and acute kidney injury. His baseline blood pressure is chronically elevated.",
      question: "What is your initial blood pressure reduction target during the first hour?",
      options: [
        {
          id: "1-a",
          text: "Lower Mean Arterial Pressure (MAP) by no more than 20–25% in the first hour, aiming for SBP ~160–180 mmHg over the first 2–6 hours",
          isCorrect: true,
          explanation: "In chronic hypertension, cerebral and renal autoregulatory curves are right-shifted. Lowering BP too rapidly or precipitously normalizing it (to 120/80) drops perfusion below the shifted autoregulatory threshold, triggering watershed cerebral ischemic infarction and acute tubular necrosis. Current guidelines recommend a controlled 20–25% MAP reduction in hour 1, with exceptions for acute aortic dissection, acute stroke, and SCAPE.",
          physiologicReasoning: "Maintains cerebral perfusion pressure within the shifted autoregulatory plateau while relieving capillary hydrostatic breakthrough and vasogenic edema.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "MAP decreases smoothly from 167 to ~128–135 mmHg",
              "Cerebral capillary leakage decreases without inducing watershed cerebral ischemia",
              "Renal arteriolar vasospasm begins to relax"
            ],
            clinicalResponse: "Over the first hour, blood pressure is titrated down to 178/102 mmHg (MAP 127 mmHg). The patient's headache improves and his confusion begins to clear.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Normalize blood pressure to 120/80 mmHg within 30 minutes using high-dose IV vasodilators",
          isCorrect: false,
          explanation: "Precipitously plunging blood pressure to 'normal' levels in a chronically hypertensive patient drops perfusion below the shifted cerebral and renal autoregulatory threshold, triggering massive ischemic stroke and acute tubular necrosis.",
          whyNot: "Rapid normalization causes watershed ischemic cerebral infarction due to right-shifted autoregulation curves.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Cerebral blood flow plummets below the autoregulatory limit",
              "Acute watershed ischemic stroke and anuric acute kidney injury"
            ],
            clinicalResponse: "Blood pressure drops to 118/72 mmHg. The patient acutely develops left-sided hemiplegia and dense lethargy from watershed cerebral ischemia."
          }
        },
        {
          id: "1-c",
          text: "Administer sublingual Nifedipine 10 mg capsule",
          isCorrect: false,
          explanation: "Sublingual nifedipine causes uncontrolled, precipitous drops in blood pressure with severe reflex tachycardia and is associated with strokes and MI. It is strictly condemned by hypertension guidelines.",
          whyNot: "Sublingual nifedipine causes erratic, dangerous hypotension and reflex tachycardia.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Uncontrollable sudden hypotension with severe reflex tachycardia"
            ],
            clinicalResponse: "Blood pressure drops uncontrollably to 90/50 mmHg with severe myocardial ischemia on ECG."
          }
        }
      ],
      physiologyDisplay: {
        afterload: "up-up",
        svr: "up-up",
        co: "neutral",
        map: "up-up"
      }
    },
    {
      id: "step-2",
      prompt: "You are selecting an IV continuous infusion for titratable, precise blood pressure reduction.",
      question: "Which IV agent is first-line for hypertensive encephalopathy and acute renal impairment?",
      options: [
        {
          id: "2-a",
          text: "Nicardipine IV (start at 5 mg/hr, titrate by 2.5 mg/hr every 5–15 mins up to 15 mg/hr) or Clevidipine IV",
          isCorrect: true,
          explanation: "Dihydropyridine calcium channel blockers (Nicardipine, Clevidipine) provide smooth, predictable arteriolar vasodilation without increasing intracranial pressure or causing rebound hypertension. They are renally safe and easily titratable.",
          physiologicReasoning: "Selectively blocks L-type calcium channels in vascular smooth muscle, reducing systemic vascular resistance with minimal myocardial depression.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Smooth linear decrease in systemic vascular resistance",
              "Zero adverse impact on intracranial pressure",
              "Stable cardiac output without reflex tachycardia"
            ],
            clinicalResponse: "Nicardipine infusion smoothly achieves the target MAP of 130 mmHg at 7.5 mg/hr. The patient's visual symptoms and headache completely resolve.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Sodium Nitroprusside continuous infusion at high doses",
          isCorrect: false,
          explanation: "Nitroprusside causes cerebral vasodilation that can acutely increase intracranial pressure, and its metabolite (cyanide/thiocyanate) rapidly accumulates in renal impairment (Cr 2.6).",
          whyNot: "Nitroprusside increases ICP and carries severe thiocyanate/cyanide toxicity risk in renal dysfunction.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Increased intracranial blood volume and elevated ICP",
              "Thiocyanate metabolite accumulation in setting of acute kidney injury"
            ],
            clinicalResponse: "The patient experiences worsening lethargy and elevated ICP symptoms."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Consider a critical exception: The patient presents with tearing chest/back pain and is diagnosed with an Acute Stanford Type A Aortic Dissection with BP 210/115 mmHg and HR 98 bpm.",
      question: "How does the anti-impulse management strategy fundamentally differ for acute aortic dissection?",
      options: [
        {
          id: "3-a",
          text: "Rapidly target SBP < 120 mmHg and HR < 60 bpm within 20 minutes, administering IV Beta-Blocker (Esmolol/Labetalol) FIRST before any vasodilator",
          isCorrect: true,
          explanation: "Aortic dissection is the paramount exception to the 'slow 20–25% reduction' rule. The primary goal is minimizing aortic wall shear stress (dP/dt = rate of pressure rise). Under current aortic guidelines (2022 ACC/AHA), a short-acting IV beta-blocker (Esmolol) MUST precede vasodilators (Nicardipine) to eliminate reflex tachycardia that propagates the intimal tear.",
          physiologicReasoning: "Beta-1 blockade decreases left ventricular contractility and heart rate (lowering dP/dt); following with vasodilation lowers aortic distending pressure without reflex tachycardia.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Heart rate drops to 55–60 bpm (reducing ventricular ejection velocity dP/dt)",
              "Systolic pressure is safely reduced below 120 mmHg without propagating the false lumen",
              "Aortic rupture risk is minimized prior to emergency cardiothoracic surgery"
            ],
            clinicalResponse: "Esmolol bolus and drip slow the HR to 56 bpm, followed by Nicardipine bringing SBP to 110 mmHg. The patient is safely transported to the operating suite for aortic repair."
          }
        },
        {
          id: "3-b",
          text: "Start Nicardipine vasodilator monotherapy first, and allow reflex tachycardia to maintain cardiac output",
          isCorrect: false,
          explanation: "Vasodilators without prior beta-blockade trigger reflex sympathetic tachycardia, increasing left ventricular ejection velocity (dP/dt) and tearing the dissection flap further.",
          whyNot: "Vasodilator monotherapy causes reflex tachycardia and increases dP/dt, propagating aortic dissection and rupture.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Reflex tachycardia accelerates heart rate to 125 bpm",
              "Massive increase in dP/dt shear stress extends the aortic dissection flap into the pericardium"
            ],
            clinicalResponse: "The dissection tears retrogradely into the pericardial space, causing acute cardiac tamponade."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["nicardipine", "clevidipine", "esmolol", "nitroprusside", "labetalol"],
  relatedTopicIds: ["hypertensive-emergencies", "aki"],
  relatedPathwaySlugs: ["neurologic-deterioration-workflow", "vasopressor-titration-workflow"],
  relatedProblemSlugs: ["acute-hypertension", "acute-altered-mental-status"],
  references: [
    "McEvoy JW, McCarthy CP, Bruno RM, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024;45(38):3912-4018.",
    "Isselbacher EM, Preventza O, Black JH 3rd, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 2022;146(24):e329-e400.",
    "Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults (Foundational Guidance). Hypertension 2018;71(6):e13-e115."
  ]
};