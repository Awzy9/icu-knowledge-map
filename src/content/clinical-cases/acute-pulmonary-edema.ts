import type { ClinicalCase } from "@/content-types/clinical-case";

export const acutePulmonaryEdemaCase: ClinicalCase = {
  id: "case-scape",
  slug: "acute-pulmonary-edema",
  title: "Sympathetic Crashing Acute Pulmonary Edema (SCAPE)",
  subtitle: "Emergency management of acute afterload crisis and flash hypertensive pulmonary edema",
  difficulty: "intermediate",
  system: "cardiovascular",
  tags: ["heart-failure", "hypertension", "pulmonary-edema", "nitroglycerin", "nippv"],
  objectives: [
    "Distinguish hypertensive pulmonary edema (SCAPE) from normotensive congestion and cardiogenic shock",
    "Administer rapid IV vasodilators (nitroglycerin) for acute arterial afterload reduction",
    "Utilize Non-Invasive Positive Pressure Ventilation (NIPPV/CPAP) to decrease preload and afterload",
    "Avoid premature intubation and excessive initial loop diuretics in acute fluid redistribution"
  ],
  initialPresentation: {
    history: "A 65-year-old male with chronic ischemic cardiomyopathy (EF 30%) presents to the emergency resuscitation bay in severe respiratory distress that developed over 45 minutes. He is sitting bolt upright, gasping for air, and profusely diaphoretic.",
    vitals: { "HR": "128/min", "BP": "228/124 mmHg", "MAP": "158 mmHg", "RR": "38/min", "SpO2": "81% on room air" },
    keyFindings: [
      "Hypertensive Acute Pulmonary Edema phenotype: extreme SBP > 200 mmHg, flash onset (<2 hours), marked sympathetic overdrive",
      "Diffuse bilateral wet rales throughout all lung zones with pink frothy sputum",
      "Jugular venous distension with cold/clammy limbs from intense systemic vasoconstriction",
      "Point-of-care lung ultrasound shows diffuse coalescent B-lines ('wet lungs') in all 8 zones"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient is in acute hypertensive respiratory failure (SCAPE phenotype). Extreme systemic vasoconstriction is driving backward fluid shift into the pulmonary capillaries despite minimal total body weight gain.",
      question: "What is your immediate primary simultaneous therapeutic intervention?",
      options: [
        {
          id: "1-a",
          text: "Initiate Non-Invasive Positive Pressure Ventilation (CPAP or BiPAP) and start rapid IV Nitroglycerin for afterload reduction",
          isCorrect: true,
          explanation: "SCAPE is a vascular redistribution crisis driven by sympathetic afterload surge, distinct from chronic volume overload or hypoperfusive cardiogenic shock. High-dose nitrates rapidly reduce arterial impedance, while NIPPV reduces LV transmural pressure, augments functional residual capacity, and clears alveolar fluid.",
          physiologicReasoning: "High-dose nitroglycerin induces systemic arteriolar vasodilation reducing LV afterload, while positive intrathoracic pressure reduces venous return and LV wall stress.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Systemic vascular resistance falls rapidly",
              "LV stroke volume improves against reduced impedance",
              "Alveolar fluid recruitment begins via positive airway pressure"
            ],
            clinicalResponse: "BiPAP (IPAP 12, EPAP 6) is applied and sublingual/IV nitroglycerin boluses are started. Within 5 minutes, dyspnea begins to ease and SpO2 rises to 90%.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Perform immediate endotracheal intubation with standard induction",
          isCorrect: false,
          explanation: "Immediate intubation without trying NIPPV carries high hemodynamic collapse risk, removes the benefits of spontaneous negative intrathoracic phase, and is often completely avoidable with rapid vasodilator therapy.",
          whyNot: "NIPPV with high-dose nitrates resolves >90% of SCAPE presentations within 60 minutes without requiring invasive ventilation.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Induction agents in severe decompensated heart failure risk sudden profound hypotension",
              "Conversion to invasive mechanical ventilation increases ICU stay and pneumonia risk"
            ],
            clinicalResponse: "The patient is exposed to invasive airway risks that could have been avoided with medical afterload reduction."
          }
        },
        {
          id: "1-c",
          text: "Administer IV Furosemide 120 mg bolus as the sole primary initial therapy",
          isCorrect: false,
          explanation: "Diuretics have a delayed onset of action (30–60 minutes) and can acutely worsen renal perfusion through intrarenal vasoconstriction before diuresis occurs. SCAPE is fluid redistribution, not massive hypervolemia.",
          whyNot: "Diuretics do not address the acute afterload emergency and provide zero immediate afterload relief.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Delayed therapeutic onset while the patient remains in flash pulmonary edema",
              "Persistent extreme afterload continues to strain the left ventricle"
            ],
            clinicalResponse: "After 20 minutes of waiting for diuretic action, the patient exhausts his respiratory muscles and develops worsening hypoxemia (SpO2 78%)."
          }
        },
        {
          id: "1-d",
          text: "Administer IV Metoprolol 5 mg to control the sinus tachycardia",
          isCorrect: false,
          explanation: "Beta-blockers are strictly contraindicated in acute decompensated heart failure with pulmonary edema due to acute negative inotropy that can trigger cardiogenic shock.",
          whyNot: "Beta-blockers acutely depress myocardial contractility in decompensated heart failure, precipitating cardiovascular collapse.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Negative inotropic effect abruptly drops stroke volume",
              "Cardiac output collapses, precipitating acute cardiogenic shock"
            ],
            clinicalResponse: "Blood pressure plummets to 70/40 mmHg with worsening pulmonary edema and severe hypoperfusion."
          }
        }
      ],
      physiologyDisplay: {
        afterload: "up-up",
        preload: "up",
        co: "down",
        map: "up-up",
        hr: "up"
      }
    },
    {
      id: "step-2",
      prompt: "BiPAP (IPAP 14, EPAP 8, FiO2 100%) is running. BP is now 204/112 mmHg (MAP 142 mmHg) and the patient continues to have severe tachypnea (RR 32/min). An IV nitroglycerin drip is running at 20 mcg/min.",
      question: "How should the nitroglycerin regimen be optimized to break the acute afterload crisis?",
      vitalsUpdate: { "BP": "204/112 mmHg", "MAP": "142 mmHg", "SpO2": "90%", "HR": "118/min" },
      options: [
        {
          id: "2-a",
          text: "Aggressively escalate nitroglycerin (IV boluses of 400–1000 mcg or rapid infusion titration >100–300 mcg/min)",
          isCorrect: true,
          explanation: "At standard low doses (<50 mcg/min), nitroglycerin is predominantly a venodilator. In hypertensive flash pulmonary edema (SCAPE), higher doses (>100–300 mcg/min or repetitive pushes) provide potent arteriolar vasodilation to overcome massive sympathetic vasoconstriction.",
          physiologicReasoning: "Arterial vasodilation reduces systemic vascular resistance, decreasing LV end-systolic wall stress and promoting forward flow.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Arterial impedance plummets within 3 to 5 minutes",
              "Blood pressure decreases from 204/112 to 152/88 mmHg",
              "Work of breathing and diaphoresis rapidly improve"
            ],
            clinicalResponse: "Within 10 minutes of high-dose nitrate therapy, the patient's respiratory rate drops from 32 to 22/min, diaphoresis clears, and SpO2 rises to 97% on FiO2 50%.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Maintain the 20 mcg/min drip and slowly increase by 5 mcg/min every 15 minutes",
          isCorrect: false,
          explanation: "Slow titration fails to provide the arteriolar afterload reduction necessary in SCAPE. The patient will tire out from respiratory fatigue before effective doses are reached.",
          whyNot: "Low-dose titration only affects venous capacitance and fails to reduce the severe arterial resistance.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Inadequate arteriolar vasodilation",
              "Prolonged extreme respiratory muscle fatigue"
            ],
            clinicalResponse: "The patient remains in distress for another 30 minutes without meaningful hemodynamic improvement."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "After 25 minutes of high-dose nitroglycerin and BiPAP, the patient's vital signs are: BP 142/80 mmHg (MAP 100 mmHg), HR 86/min, RR 18/min, SpO2 98% on BiPAP (FiO2 40%). He is comfortable and speaking in full sentences.",
      question: "What is your next clinical transition plan?",
      vitalsUpdate: { "BP": "142/80 mmHg", "HR": "86/min", "RR": "18/min", "SpO2": "98%" },
      options: [
        {
          id: "3-a",
          text: "Taper nitroglycerin gradually, administer modest loop diuretic for residual hypervolemia once hemodynamically stable, and wean BiPAP to nasal cannula",
          isCorrect: true,
          explanation: "Once the afterload crisis is terminated, nitrates should be gradually weaned to avoid rebound vasoconstriction. Moderate diuresis can address any true excess intravascular volume, and NIPPV can be transitioned to low-flow oxygen as pulmonary edema clears.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Smooth hemodynamic stability without rebound hypertension or overshoot hypotension",
              "Safe transition to oral guideline-directed medical therapy"
            ],
            clinicalResponse: "The patient is successfully transferred to the cardiac step-down unit after 4 hours without requiring intubation."
          }
        },
        {
          id: "3-b",
          text: "Abruptly stop the nitroglycerin infusion immediately since BP is normal",
          isCorrect: false,
          explanation: "Sudden cessation of IV nitroglycerin causes intense rebound vasoconstriction and recurrent flash pulmonary edema.",
          whyNot: "Abrupt withdrawal triggers rebound sympathetic surge and recurrent hypertensive failure.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Rebound arterial vasoconstriction within 15 minutes",
              "Blood pressure rebounds to 195/110 mmHg"
            ],
            clinicalResponse: "The patient develops acute recurrence of shortness of breath and frothy secretions."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["nitroglycerin", "nitroprusside", "nicardipine"],
  relatedTopicIds: ["cardiogenic-pulmonary-edema", "hypertensive-emergencies", "acute-heart-failure"],
  relatedPathwaySlugs: ["respiratory-support-escalation", "vasopressor-titration-workflow"],
  relatedProblemSlugs: ["acute-respiratory-distress", "acute-hypertension"],
  references: [
    "McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (and 2023 Focused Update). Eur Heart J 2021;42:3599-3726.",
    "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 2022;145:e895-e1032.",
    "Levy P, et al. Treatment of Severe Decompensated Heart Failure with High-Dose Intravenous Nitroglycerin. Ann Emerg Med 2007;50:144-152.",
    "Cotter G, et al. Randomised trial of high-dose isosorbide dinitrate plus low-dose furosemide versus high-dose furosemide plus low-dose isosorbide dinitrate in severe pulmonary oedema. Lancet 1998;351:389-393."
  ]
};