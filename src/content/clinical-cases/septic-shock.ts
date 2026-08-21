import type { ClinicalCase } from "@/content-types/clinical-case";

export const septicShockCase: ClinicalCase = {
  id: "case-septic-shock",
  slug: "septic-shock",
  title: "Septic Shock Resuscitation",
  subtitle: "Initial management of distributive shock from community-acquired pneumonia",
  difficulty: "foundation",
  system: "cardiovascular",
  tags: ["sepsis", "hemodynamics", "resuscitation", "norepinephrine"],
  objectives: [
    "Identify early signs of distributive vasoplegia and hypovolemia",
    "Select appropriate initial fluid and vasoactive management",
    "Recognize hemodynamic consequences of pure alpha agonists vs inodilators in septic vasoplegia",
    "Determine bedside endpoints of restored microvascular organ perfusion"
  ],
  initialPresentation: {
    history: "A 68-year-old male with a history of COPD presents to the ED with 3 days of productive cough, fever, and progressive confusion. He is lethargic but arousable.",
    vitals: { "HR": "118/min", "BP": "82/45 mmHg", "MAP": "57 mmHg", "RR": "28/min", "SpO2": "90% on 4L NC", "Temp": "39.2°C" },
    keyFindings: [
      "Warm extremities with bounding peripheral pulses and flash capillary refill (<1 sec)",
      "Tachypnea with right lower lobe bronchial breath sounds and crackles",
      "Serum Lactate 4.2 mmol/L; Point-of-care ultrasound shows hyperdynamic LV with IVC collapsing >50%"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient has a right lower lobe infiltrate on CXR and is diagnosed with severe pneumonia and septic shock. Blood cultures are drawn and broad-spectrum antibiotics are ordered. He remains hypotensive with MAP 57 mmHg.",
      question: "What is your best initial hemodynamic intervention?",
      options: [
        {
          id: "1-a",
          text: "Administer 30 mL/kg of IV balanced crystalloid rapidly over 30–60 minutes",
          isCorrect: true,
          explanation: "In early septic shock, an initial fluid challenge of 30 mL/kg of balanced crystalloid is recommended by Surviving Sepsis Campaign guidelines to restore intravascular volume and unstressed venous volume.",
          physiologicReasoning: "Sepsis causes systemic venodilation and increased microvascular permeability, resulting in decreased effective circulating volume and reduced preload despite warm extremities.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Venous return and end-diastolic volume increase",
              "Transient rise in stroke volume and cardiac index",
              "MAP increases slightly toward autoregulatory threshold"
            ],
            clinicalResponse: "After 2 L of Lactated Ringer's, the heart rate settles to 108/min, and blood pressure rises modestly to 84/48 mmHg (MAP 60 mmHg). Peripheral perfusion remains warm, but hypotension persists due to profound arterial vasoplegia."
          }
        },
        {
          id: "1-b",
          text: "Start a dobutamine infusion at 5 mcg/kg/min as monotherapy",
          isCorrect: false,
          explanation: "Dobutamine is a potent inotrope and mild peripheral vasodilator. While it increases myocardial contractility, starting it in vasodilatory shock without vasopressor support exacerbates systemic hypotension.",
          whyNot: "Dobutamine causes beta-2 mediated peripheral vasodilation and tachyarrhythmias, worsening MAP in uncorrected vasoplegia.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Beta-2 mediated vasodilation reduces already depressed SVR",
              "Heart rate accelerates to 135/min with frequent PVCs",
              "MAP drops from 57 to 48 mmHg"
            ],
            clinicalResponse: "Within 10 minutes of starting dobutamine, the patient becomes more tachycardic (HR 134/min), and blood pressure drops to 74/38 mmHg (MAP 50 mmHg). Dobutamine is immediately discontinued."
          }
        },
        {
          id: "1-c",
          text: "Start pure phenylephrine infusion to rapidly raise MAP without volume",
          isCorrect: false,
          explanation: "Phenylephrine provides pure alpha-1 vasoconstriction without beta-1 inotropy. While MAP may increase on the monitor, it increases afterload without restoring volume, risking a sharp fall in stroke volume.",
          whyNot: "Phenylephrine lacks beta-1 inotropic support, increases LV afterload, and can decrease stroke volume and microvascular tissue perfusion in hypovolemic sepsis.",
          nextStepId: "step-branch-phenylephrine",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "SVR increases dramatically, elevating MAP superficially to 66 mmHg",
              "Reflex bradycardia and elevated afterload reduce stroke volume",
              "Extremities turn cool with delayed capillary refill"
            ],
            clinicalResponse: "The monitor shows MAP 66 mmHg, but urine output stops completely and the patient's extremities become mottled and cool. Cardiac output is reduced.",
            nextStepId: "step-branch-phenylephrine"
          }
        },
        {
          id: "1-d",
          text: "Administer 1 L of 5% Albumin immediately as primary fluid",
          isCorrect: false,
          explanation: "Balanced crystalloids are the standard first-line fluid. Albumin is an adjunctive colloid reserved for patients requiring substantial crystalloid volumes, not initial monotherapy.",
          whyNot: "Crystalloids are the first-line evidence-based standard; routine first-line colloid resuscitation adds cost without proven mortality benefit.",
          outcome: {
            classification: "reasonable-alternative",
            immediateEffects: [
              "Intravascular oncotic pressure increases with volume expansion",
              "Effective circulating volume partially restored"
            ],
            clinicalResponse: "Blood pressure rises to 84/46 mmHg (MAP 59 mmHg), but guideline-recommended balanced crystalloid resuscitation should have been prioritized."
          }
        }
      ],
      physiologyDisplay: {
        svr: "down-down",
        preload: "down",
        co: "up",
        map: "down",
        hr: "up"
      }
    },
    {
      id: "step-branch-phenylephrine",
      isBranchStep: true,
      parentDecisionRef: "step-1",
      prompt: "Following Phenylephrine monotherapy, the monitor displays MAP 66 mmHg. However, the patient's extremities have become cold and mottled, capillary refill is prolonged to 4.5 seconds, urine output has dropped to zero, and repeat lactate has surged from 4.2 to 5.4 mmol/L. Pure alpha-1 vasoconstriction has increased afterload against an underfilled, septic heart with falling stroke volume.",
      question: "How do you immediately correct your hemodynamic strategy to restore microvascular organ perfusion?",
      options: [
        {
          id: "branch-1-a",
          text: "Discontinue Phenylephrine, complete balanced crystalloid resuscitation, and initiate Norepinephrine continuous infusion",
          isCorrect: true,
          explanation: "Transitioning to Norepinephrine provides balanced alpha-1 vasoconstriction with modest beta-1 inotropic support. Coupled with adequate intravascular volume expansion, this restores forward stroke volume, cardiac output, and microvascular tissue perfusion.",
          physiologicReasoning: "Restores unstressed venous volume and balanced vascular resistance without excessive afterload mismatch.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Restores cardiac forward flow and stroke volume",
              "Extremities warm and capillary refill normalizes to 2 seconds",
              "MAP stabilizes at 70 mmHg with robust urine output"
            ],
            clinicalResponse: "Switching to Norepinephrine and completing volume resuscitation rapidly warms the extremities, drops lactate to 3.1 mmol/L, and restores urine output.",
            nextStepId: "step-3"
          }
        },
        {
          id: "branch-1-b",
          text: "Add high-dose Vasopressin monotherapy (0.06 units/min) to force MAP > 80 mmHg",
          isCorrect: false,
          explanation: "Adding another potent vasoconstrictor to an underfilled circulation worsens stroke volume and precipitates splanchnic and digital ischemic necrosis.",
          whyNot: "Further vasoconstriction in unresuscitated hypovolemia severely drops cardiac output and microvascular flow.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Excessive peripheral and mesenteric vasoconstriction",
              "Stroke volume falls further"
            ],
            clinicalResponse: "Lactate continues to rise and digital cyanosis develops."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "The patient has received 30 mL/kg of Lactated Ringer's over the first hour. Repeat assessment reveals BP 84/48 mmHg (MAP 60 mmHg), HR 106/min. Urine output over the past hour was only 12 mL.",
      question: "Which vasoactive regimen is the best next step to restore perfusion pressure?",
      vitalsUpdate: { "HR": "106/min", "BP": "84/48 mmHg", "MAP": "60 mmHg", "RR": "24/min" },
      newInformation: ["Repeat bedside echo shows hyperdynamic left ventricle with full IVC (respiratory variation <10%)"],
      options: [
        {
          id: "2-a",
          text: "Initiate Norepinephrine continuous infusion titrated to target MAP ≥ 65 mmHg",
          isCorrect: true,
          explanation: "Norepinephrine is the first-line vasopressor of choice for septic shock (Surviving Sepsis Campaign). It restores vascular tone via alpha-1 agonism and maintains stroke volume via modest beta-1 support.",
          physiologicReasoning: "Alpha-1 vasoconstriction increases SVR and venous return (unstressed to stressed volume shift), restoring renal and coronary perfusion pressure above the autoregulatory breakpoint.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Systemic vascular resistance increases",
              "MAP rises reliably to 68–72 mmHg",
              "Renal perfusion pressure is restored"
            ],
            clinicalResponse: "Norepinephrine is titrated to 0.12 mcg/kg/min. MAP rises to 70 mmHg within 10 minutes. The patient is more alert, and clear urine starts dripping into the catheter bag.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Administer another 3 L of normal saline rapidly without vasopressors",
          isCorrect: false,
          explanation: "Continuing aggressive fluid loading once the intravascular compartment is replenished causes fluid overload, tissue edema, worsening oxygenation, and hyperchloremic metabolic acidosis without solving vasoplegia.",
          whyNot: "Excess fluid after adequate preload restoration worsens lung compliance and increases ICU mortality without correcting vascular tone.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Hyperchloremic metabolic acidosis develops",
              "SpO2 falls from 94% to 88% requiring high-flow oxygen",
              "MAP remains inadequate at 60 mmHg"
            ],
            clinicalResponse: "The patient develops bibasilar crackles and rising oxygen requirements. MAP remains stubbornly at 61 mmHg because systemic vascular resistance is still severely depressed."
          }
        },
        {
          id: "2-c",
          text: "Start Dopamine infusion at 10 mcg/kg/min",
          isCorrect: false,
          explanation: "Dopamine is no longer recommended as first-line for septic shock. The SOAP II trial demonstrated significantly higher incidence of tachyarrhythmias and increased mortality in cardiogenic shock compared to norepinephrine.",
          whyNot: "Dopamine carries a significantly higher tachyarrhythmia burden compared to norepinephrine without superior hemodynamic stability.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Heart rate spikes to 142/min in sinus tachycardia",
              "Myocardial oxygen demand escalates",
              "Marginal MAP elevation to 63 mmHg with high arrhythmia risk"
            ],
            clinicalResponse: "The patient develops rapid heart rate (HR 140/min) with runs of atrial premature beats, while MAP only rises to 63 mmHg. Dopamine is transitioned to norepinephrine."
          }
        },
        {
          id: "2-d",
          text: "Start Vasopressin 0.03 units/min monotherapy as initial agent",
          isCorrect: false,
          explanation: "Vasopressin is an effective adjunct added to norepinephrine (VASST trial) when norepinephrine dose is 0.25–0.5 mcg/kg/min, but is not recommended as sole initial first-line vasopressor monotherapy.",
          whyNot: "Norepinephrine remains the primary first-line catecholamine with broader titratability and superior clinical trial backing.",
          outcome: {
            classification: "reasonable-alternative",
            immediateEffects: [
              "V1 vascular smooth muscle vasoconstriction increases SVR",
              "No direct inotropic stimulation"
            ],
            clinicalResponse: "MAP improves to 66 mmHg, but guideline-directed care dictates norepinephrine as the initial first-line agent with vasopressin added as a secondary catecholamine-sparing infusion."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Norepinephrine is infusing at 0.14 mcg/kg/min. Vital signs are now BP 108/58 mmHg (MAP 72 mmHg), HR 92/min, SpO2 95% on 3L NC.",
      question: "Which combination of bedside markers best confirms that microvascular resuscitation and organ perfusion are resolving?",
      vitalsUpdate: { "HR": "92/min", "BP": "108/58 mmHg", "MAP": "72 mmHg" },
      newInformation: [
        "Urine output over the last 2 hours has been 65 mL/hr (0.8 mL/kg/hr)",
        "Serial blood gas and lactate are drawn at the bedside"
      ],
      options: [
        {
          id: "3-a",
          text: "Serial lactate downtrend interpreted in clinical context, capillary refill time normalization (≤2 seconds), urine output ≥0.5 mL/kg/hr, and clearing sensorium",
          isCorrect: true,
          explanation: "Surviving Sepsis Campaign guidelines recommend guiding resuscitation to normalize capillary refill time and guide serial lactate reduction in clinical context. Resuscitation should not be continued with fluid boluses solely to chase a normal lactate number once volume responsiveness is exhausted.",
          physiologicReasoning: "Macrohemodynamic parameters (MAP) provide perfusion pressure, but cellular resuscitation is confirmed by resolution of anaerobic glycolysis (falling lactate) and capillary microcirculatory flow.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Serum lactate downtrends to 2.4 mmol/L",
              "Capillary refill time is brisk at 1.5 seconds",
              "Patient is fully oriented and urine output is maintained at 0.8 mL/kg/hr"
            ],
            clinicalResponse: "Perfusion goals are successfully achieved. Norepinephrine is successfully weaned over the next 24 hours as antimicrobials control the underlying infection."
          }
        },
        {
          id: "3-b",
          text: "Central Venous Pressure (CVP) reaching exactly 14 mmHg",
          isCorrect: false,
          explanation: "Static CVP numbers do not correlate with fluid responsiveness or cellular oxygen delivery. Guidelines strongly discourage titrating resuscitation to static CVP targets alone.",
          whyNot: "Static CVP has poor predictive value for fluid responsiveness and tissue oxygenation.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Provides static filling pressure without information on microvascular flow"
            ],
            clinicalResponse: "Focusing on static CVP targets risks either inadequate resuscitation or fluid overload without assuring cellular recovery."
          }
        },
        {
          id: "3-c",
          text: "Increasing MAP to >85 mmHg by escalating norepinephrine dose",
          isCorrect: false,
          explanation: "Targeting MAP >85 mmHg in patients without chronic hypertension increases vasopressor exposure, arrhythmia risk, and myocardial oxygen consumption without clinical benefit (SEPSISPAM trial).",
          whyNot: "Excessive vasopressor titration causes digital/splanchnic vasoconstriction and arrhythmia without improving microvascular perfusion.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Excessive peripheral vasoconstriction",
              "Increased cardiac afterload and myocardial oxygen demand"
            ],
            clinicalResponse: "Forcing MAP to 88 mmHg causes the patient's fingers to become cool and blanched without improving urine output or lactate clearance."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["norepinephrine", "vasopressin", "dobutamine", "phenylephrine"],
  relatedTopicIds: ["septic-shock", "shock", "cardiogenic-shock"],
  relatedPathwaySlugs: ["sepsis-bundle-workflow", "vasopressor-titration-workflow"],
  relatedProblemSlugs: ["suspected-sepsis", "refractory-shock"],
  references: [
    "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026. Crit Care Med 2026.",
    "De Backer D, et al. Comparison of Dopamine and Norepinephrine in the Treatment of Shock (SOAP II). N Engl J Med 2010;362:779-789.",
    "Hernández G, et al. Effect of a Resuscitation Strategy Targeting Peripheral Perfusion Status vs Serum Lactate Level on 28-Day Mortality (ANDROMEDA-SHOCK). JAMA 2019;321:654-664."
  ]
};