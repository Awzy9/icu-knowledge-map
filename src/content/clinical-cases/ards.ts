import type { ClinicalCase } from "@/content-types/clinical-case";

export const ardsCase: ClinicalCase = {
  id: "case-ards-management",
  slug: "ards",
  title: "Severe ARDS Ventilator Strategy",
  subtitle: "Navigating lung-protective ventilation, driving pressure, and prone positioning",
  difficulty: "intermediate",
  system: "respiratory",
  tags: ["ards", "mechanical-ventilation", "hypoxemia", "proning"],
  objectives: [
    "Apply lung-protective low tidal volume ventilation (4–6 mL/kg IBW)",
    "Monitor and calculate driving pressure and plateau pressure",
    "Recognize evidence-based indications for prone positioning (PROSEVA)",
    "Evaluate rescue neuromodulation with cisatracurium"
  ],
  initialPresentation: {
    history: "A 52-year-old female (height 165 cm, Ideal Body Weight 57 kg) with severe viral pneumonia was intubated yesterday. She is deeply sedated with continuous propofol and fentanyl infusions.",
    vitals: { "HR": "98/min", "BP": "115/70 mmHg", "SpO2": "88%", "Temp": "38.5°C" },
    keyFindings: [
      "Bilateral dense alveolar infiltrates in dependent zones on CXR",
      "Ventilator settings: Volume Control (VC-AC), Set Vt 480 mL (8.4 mL/kg IBW), RR 20, PEEP 10 cmH2O, FiO2 70%",
      "ABG: pH 7.32, PaCO2 48 mmHg, PaO2 55 mmHg (P/F ratio = 78, Severe ARDS)",
      "Inspiratory hold: Peak Inspiratory Pressure (PIP) 40 cmH2O, Plateau Pressure (Pplat) 35 cmH2O"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient has severe ARDS (P/F 78) with an elevated plateau pressure of 35 cmH2O and a driving pressure of 25 cmH2O (35 - 10), indicating high lung stress on the 'baby lung'.",
      question: "What is your immediate, most crucial ventilator adjustment?",
      options: [
        {
          id: "1-a",
          text: "Decrease tidal volume to 6 mL/kg IBW (340 mL) and increase respiratory rate to 28/min",
          isCorrect: true,
          explanation: "ARMA trial (ARDS Network) proved that lower tidal volumes (4–6 mL/kg IBW) targeting Pplat ≤ 30 cmH2O and minimizing driving pressure (<14–15 cmH2O) reduce ventilator-induced lung injury (volutrauma/biotrauma) and improve survival.",
          physiologicReasoning: "Decreasing tidal volume unloads non-aerated lung tissue, reduces cyclic alveolar overdistension, and lowers driving pressure below 14–15 cmH2O.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Tidal volume drops to 340 mL (6 mL/kg IBW)",
              "Plateau pressure falls from 35 to 28 cmH2O",
              "Driving pressure decreases from 25 to 18 cmH2O"
            ],
            clinicalResponse: "Alveolar stress is significantly reduced. PaCO2 increases mildly to 54 mmHg with pH 7.29 (permissive hypercapnia), which is well tolerated hemodynamically.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Increase PEEP from 10 to 18 cmH2O immediately without reducing tidal volume",
          isCorrect: false,
          explanation: "Adding PEEP on top of unreduced high tidal volumes will push plateau pressure further above 40 cmH2O, accelerating barotrauma and hemodynamic compromise.",
          whyNot: "Plateau pressure is already dangerously elevated (35 cmH2O); raising PEEP without lowering tidal volume worsens alveolar strain.",
          nextStepId: "step-branch-excessive-driving-pressure",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Plateau pressure spikes to 42 cmH2O",
              "Right ventricular afterload increases, lowering stroke volume",
              "Blood pressure drops to 90/50 mmHg"
            ],
            clinicalResponse: "The ventilator sounds high-pressure alarms. Cardiac output decreases due to excessive intrathoracic pressure impeding venous return.",
            nextStepId: "step-branch-excessive-driving-pressure"
          }
        },
        {
          id: "1-c",
          text: "Increase tidal volume to 600 mL to blow off PaCO2 and normalize arterial pH",
          isCorrect: false,
          explanation: "Normalizing PaCO2 at the expense of tidal volumes >6 mL/kg causes severe volutrauma and increases mortality. Permissive hypercapnia may be accepted when necessary to maintain lung-protective ventilation. Tolerance depends on the degree of acidemia, hemodynamics, RV function/pulmonary hypertension, intracranial pressure, arrhythmias, and overall clinical context.",
          whyNot: "Volutrauma is fatal in ARDS; mild respiratory acidosis is preferred over alveolar rupture.",
          nextStepId: "step-branch-excessive-driving-pressure",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "PIP exceeds 46 cmH2O",
              "Diffuse cyclic shear stress causes microvascular pulmonary hemorrhage"
            ],
            clinicalResponse: "The patient develops subcutaneous emphysema, and lung compliance deteriorates further.",
            nextStepId: "step-branch-excessive-driving-pressure"
          }
        }
      ],
      physiologyDisplay: {
        pvr: "up-up",
        co: "variable",
        preload: "down",
        afterload: "up"
      }
    },
    {
      id: "step-branch-excessive-driving-pressure",
      isBranchStep: true,
      parentDecisionRef: "step-1",
      prompt: "Due to excessive tidal volume and airway pressures, an inspiratory pause shows a plateau pressure of 42 cmH2O and driving pressure of 28 cmH2O. The patient's lung compliance has plummeted to 18 mL/cmH2O and she is acutely worsening from severe ventilator-induced lung injury (VILI).",
      question: "How do you immediately correct the ventilator prescription to halt volutrauma and restore safe driving pressure?",
      options: [
        {
          id: "branch-ards-a",
          text: "Calculate Ideal Body Weight (57 kg) and reduce tidal volume to 6 mL/kg (340 mL), titrating down toward 4 mL/kg if Pplat remains > 30 cmH2O",
          isCorrect: true,
          explanation: "Scaling tidal volumes strictly to Ideal Body Weight (IBW) rather than actual weight reduces transpulmonary shear strain on the small functional lung volume ('baby lung') and brings driving pressure below 14–15 cmH2O.",
          physiologicReasoning: "Reduces mechanical energy delivery (ergotrauma) and normalizes cyclic alveolar strain.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Tidal volume drops to 340 mL",
              "Plateau pressure drops from 42 to 28 cmH2O",
              "Driving pressure drops from 28 to 14 cmH2O"
            ],
            clinicalResponse: "Airway pressures drop immediately into the safe zone, halting progressive alveolar damage.",
            nextStepId: "step-2"
          }
        },
        {
          id: "branch-ards-b",
          text: "Maintain the high tidal volume and add deep neuromuscular blockade monotherapy to stop fighting",
          isCorrect: false,
          explanation: "Neuromuscular blockade without lowering the excessive tidal volume fails to protect the lung from ongoing high-volume volutrauma.",
          whyNot: "Paralysis does not mitigate volutrauma if delivered tidal volumes remain excessively large.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Plateau pressure remains dangerously elevated at 40 cmH2O"
            ],
            clinicalResponse: "Alveolar barotrauma persists despite chemical paralysis."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "Tidal volume is optimized at 340 mL with PEEP 14 cmH2O and FiO2 100%. Pplat is 28 cmH2O. Despite 4 hours of lung-protective ventilation and deep sedation, repeat ABG shows: pH 7.28, PaCO2 54 mmHg, PaO2 62 mmHg (P/F ratio = 62).",
      question: "Which evidence-based intervention has a proven mortality reduction in this stage of severe ARDS (P/F < 150)?",
      vitalsUpdate: { "SpO2": "89%", "HR": "104/min", "BP": "108/64 mmHg" },
      newInformation: [
        "Patient has substantial patient-ventilator dyssynchrony with breath-stacking",
        "P/F ratio remains 62 despite FiO2 1.0 and PEEP 14 cmH2O"
      ],
      options: [
        {
          id: "2-a",
          text: "Initiate Prone Positioning for a minimum of 16 consecutive hours daily",
          isCorrect: true,
          explanation: "The PROSEVA landmark trial demonstrated a dramatic 90-day mortality reduction (16% vs 32.8%) for prone positioning in severe ARDS (P/F < 150) when maintained for ≥16 hours/day.",
          physiologicReasoning: "Prone positioning creates a more uniform transpulmonary pressure gradient, unloads dorsal dependent lung units from cardiac compression, and dramatically improves ventilation-perfusion matching.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Dorsal lung zones recruit without increasing global airway pressures",
              "V/Q mismatch decreases as blood flow matches re-aerated dorsal alveoli",
              "SpO2 rises from 89% to 96% over the first 4 hours prone"
            ],
            clinicalResponse: "Four hours after proning, repeat ABG shows PaO2 110 mmHg on FiO2 60% (P/F ratio improves to 183). FiO2 is successfully weaned to non-toxic levels.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Immediately cannulate for Veno-Venous (V-V) ECMO as initial escalation",
          isCorrect: false,
          explanation: "While ECMO (EOLIA trial) is a viable rescue therapy for ultra-refractory ARDS, prone positioning is non-invasive, highly effective, and must be attempted prior to high-risk ECMO cannulation.",
          whyNot: "Prone positioning is the first-line non-invasive standard of care before proceeding to invasive ECMO circuits.",
          outcome: {
            classification: "reasonable-alternative",
            immediateEffects: [
              "ECMO circuit relieves hypoxemia but introduces anticoagulation and cannulation hemorrhage risks"
            ],
            clinicalResponse: "Cannulation is invasive and carries significant vascular and bleeding complications. Proning should always precede ECMO when not contraindicated."
          }
        },
        {
          id: "2-c",
          text: "Administer high-dose inhaled nitric oxide (iNO) monotherapy",
          isCorrect: false,
          explanation: "Inhaled pulmonary vasodilators improve transient oxygenation numbers but meta-analyses show no improvement in survival or ventilator-free days.",
          whyNot: "Inhaled vasodilators do not confer a mortality benefit and cannot substitute for prone positioning.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Transient mild improvement in PaO2 without structural alveolar recruitment"
            ],
            clinicalResponse: "PaO2 improves briefly by 12 mmHg, but dorsal lung atelectasis persists and lung injury progression continues."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "The patient is successfully placed in the prone position. At hour 14 of the prone session, she exhibits transient fighting of the ventilator with breath-stacking and elevated peak pressures.",
      question: "What is your best initial pharmacologic management for patient-ventilator dyssynchrony in severe early ARDS?",
      newInformation: [
        "Inspiratory hold shows repeated double-triggering and patient-generated negative deflections",
        "Driving pressure has increased to 19 cmH2O during active dyssynchrony"
      ],
      options: [
        {
          id: "3-a",
          text: "Administer a continuous Cisatracurium neuromuscular blockade infusion for up to 48 hours",
          isCorrect: true,
          explanation: "In early severe ARDS (P/F < 150) with persistent dyssynchrony, short-course neuromuscular blockade (ACURASYS / ROSE trials) abolishes patient-ventilator asynchrony, reduces transpulmonary pressure swings, and prevents patient-self-inflicted lung injury (P-SILI).",
          physiologicReasoning: "Eliminates active diaphragmatic contraction that causes Pendelluft gas shifting and regional alveolar overdistension.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Complete abolition of breath-stacking and double-triggering",
              "Plateau pressure and driving pressure stabilize below safety thresholds",
              "Oxygen consumption by respiratory muscles decreases"
            ],
            clinicalResponse: "The patient synchronizes perfectly with the ventilator. Gas exchange stabilizes, and the 16-hour prone protocol is completed safely."
          }
        },
        {
          id: "3-b",
          text: "Switch ventilator mode to Pressure Support (PSV) so the patient sets her own rate",
          isCorrect: false,
          explanation: "In severe early ARDS, unassisted spontaneous breathing in PSV can generate massive transpulmonary pressure swings (P-SILI) and uncontrolled tidal volumes.",
          whyNot: "Spontaneous breathing in severe ARDS worsens lung injury through high transpulmonary pressures and Pendelluft phenomenon.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Tidal volume spikes to 12 mL/kg IBW during deep spontaneous efforts",
              "Severe Pendelluft effect shifts gas between injured lung units"
            ],
            clinicalResponse: "The patient becomes severely tachypneic with high minute ventilation and worsening alveolar flooding."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["cisatracurium", "propofol", "fentanyl"],
  relatedTopicIds: ["ards", "mechanical-ventilation"],
  relatedPathwaySlugs: ["ards-first-6-hours", "prone-positioning-protocol"],
  relatedProblemSlugs: ["sudden-hypoxemia", "sudden-ventilator-deterioration"],
  references: [
    "Grasselli G, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med 2023;49:727-759.",
    "Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome (ARMA). N Engl J Med 2000;342:1301-1308.",
    "Guérin C, et al. Prone positioning in severe acute respiratory distress syndrome (PROSEVA). N Engl J Med 2013;368:2159-2168.",
    "Papazian L, et al. Neuromuscular blockers in early acute respiratory distress syndrome (ACURASYS). N Engl J Med 2010;363:1107-1116.",
    "Amato MB, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med 2015;372:747-755."
  ]
};