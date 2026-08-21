import type { ClinicalCase } from "@/content-types/clinical-case";

export const afHemodynamicInstabilityCase: ClinicalCase = {
  id: "case-afib-rvr",
  slug: "af-hemodynamic-instability",
  title: "Atrial Fibrillation with Hemodynamic Instability",
  subtitle: "Emergency cardioversion, rate vs rhythm control, and vasopressor integration in rapid AFib shock",
  difficulty: "advanced",
  system: "cardiovascular",
  tags: ["arrhythmia", "shock", "cardioversion", "esmolol", "norepinephrine"],
  objectives: [
    "Identify hemodynamic instability attributable to rapid atrial fibrillation requiring urgent cardioversion",
    "Execute urgent synchronized electrical cardioversion with appropriate biphasic energy selection",
    "Select safe pharmacotherapy in recurrent rapid AF in the critically ill (titratable ultra-short acting beta-blockade)",
    "Integrate vasopressor support (Norepinephrine) with rate control and systemic underlying trigger management"
  ],
  initialPresentation: {
    history: "A 72-year-old male with severe multi-lobar pneumonia is in the ICU on broad-spectrum antibiotics and 40% high-flow nasal cannula. Overnight, his telemetry alarms as his heart rate abruptly accelerates from 88 to 168 bpm.",
    vitals: { "HR": "165/min", "BP": "74/40 mmHg", "MAP": "51 mmHg", "RR": "28/min", "SpO2": "89%", "Temp": "38.8°C" },
    keyFindings: [
      "12-Lead ECG: Irregularly irregular, narrow-complex tachycardia at 165 bpm with undulating baseline and absent P-waves",
      "Hemodynamic Instability Attributable to Tachycardia: acutely confused, cool, mottled extremities, profound diaphoresis, and weak radial pulses"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient has Atrial Fibrillation with Rapid Ventricular Response (RVR) at 165 bpm directly causing acute hemodynamic instability (MAP 51 mmHg, altered sensorium, organ hypoperfusion).",
      question: "What is your mandatory immediate first action according to current guidelines?",
      options: [
        {
          id: "1-a",
          text: "Perform immediate Synchronized Electrical Cardioversion (120–200 J biphasic initial energy with sedation if feasible)",
          isCorrect: true,
          explanation: "Current AF guidelines (ACC/AHA/ACCP/HRS and ESC) mandate immediate synchronized electrical cardioversion for rapid atrial fibrillation causing acute hemodynamic instability (hypotension/shock, ongoing myocardial ischemia, acute pulmonary edema, or altered mental status). Synchronizing to the R-wave prevents triggering ventricular fibrillation (R-on-T phenomenon). Initiation of parenteral anticoagulation should occur as soon as feasible without delaying emergent electrical cardioversion.",
          physiologicReasoning: "Severe tachycardia shortens diastolic filling time, while loss of atrial kick decreases left ventricular end-diastolic volume by 20–30%, precipitating forward cardiac output collapse in non-compliant ventricles.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Immediate restoration of sinus rhythm at 85 bpm",
              "Diastolic filling time and stroke volume rebound",
              "Blood pressure immediately rises to 108/62 mmHg (MAP 77 mmHg)"
            ],
            clinicalResponse: "Following a 150 J synchronized shock under light procedural sedation, the patient immediately converts to sinus rhythm at 84 bpm. Sensorium rapidly clears and blood pressure normalizes.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Administer IV Diltiazem 20 mg bolus over 2 minutes followed by a continuous infusion",
          isCorrect: false,
          explanation: "Non-dihydropyridine calcium channel blockers (diltiazem) are potent negative inotropes and peripheral vasodilators. Administering them to an already hypotensive patient in unstable shock risks cardiovascular collapse and refractory cardiac arrest.",
          whyNot: "Diltiazem causes peripheral vasodilation and negative inotropy, precipitating cardiac arrest in hypotensive tachyarrhythmias.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Negative inotropic effect halts remaining compensatory stroke volume",
              "Peripheral vasodilation worsens MAP to 40 mmHg"
            ],
            clinicalResponse: "Within 90 seconds of diltiazem injection, blood pressure drops to 52/28 mmHg with loss of peripheral pulses, requiring emergency CPR."
          }
        },
        {
          id: "1-c",
          text: "Deliver an unsynchronized 200 J Defibrillation shock immediately",
          isCorrect: false,
          explanation: "In a patient with an organized rhythm and pulse, delivering an unsynchronized shock risks shocking during the vulnerable repolarization phase (T-wave), triggering ventricular fibrillation or torsades de pointes.",
          whyNot: "Unsynchronized shocks on organized tachycardias cause lethal R-on-T ventricular fibrillation.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "R-on-T shock induces instantaneous coarse ventricular fibrillation"
            ],
            clinicalResponse: "The patient immediately loses consciousness and pulseless VF arrest ensues, requiring emergency defibrillation and chest compressions."
          }
        }
      ],
      physiologyDisplay: {
        co: "down-down",
        map: "down-down",
        preload: "down",
        hr: "up-up"
      }
    },
    {
      id: "step-2",
      prompt: "After successful cardioversion, the patient converts back into rapid AFib at 155 bpm 10 minutes later due to intense adrenergic stress and systemic inflammation from sepsis. Blood pressure drops back to 84/48 mmHg (MAP 60 mmHg).",
      question: "Which hemodynamic and pharmacologic strategy is safest to manage this recurrent rapid AFib in severe sepsis?",
      vitalsUpdate: { "HR": "155/min", "BP": "84/48 mmHg", "MAP": "60 mmHg" },
      options: [
        {
          id: "2-a",
          text: "Initiate Norepinephrine infusion to secure coronary perfusion pressure (MAP ≥65), concurrent with cautious titratable ultra-short acting Esmolol or Amiodarone",
          isCorrect: true,
          explanation: "In sepsis with recurrent AFib RVR, initiating norepinephrine maintains coronary perfusion and SVR, preventing hemodynamic collapse while a titratable, short-acting AV nodal agent (like Esmolol, elimination half-life ~9 mins) or Amiodarone controls ventricular response.",
          physiologicReasoning: "Norepinephrine maintains diastolic aortic pressure ensuring coronary blood flow to the ischemic tachycardic myocardium.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "MAP is secured at 70 mmHg via alpha-1 vasoconstriction",
              "Esmolol titration slows ventricular response from 155 to 105 bpm without unresuscitable hypotension",
              "Stroke volume increases as diastolic filling is restored"
            ],
            clinicalResponse: "Ventricular rate settles to 98 bpm on esmolol 50 mcg/kg/min with norepinephrine running at 0.08 mcg/kg/min. Lactate stabilizes and urine output resumes.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Administer high-dose IV Metoprolol 15 mg in divided doses without any vasopressor support",
          isCorrect: false,
          explanation: "Metoprolol is long-acting (half-life 3–7 hours). If profound hypotension or cardiogenic collapse occurs, it cannot be rapidly reversed.",
          whyNot: "Long-acting beta-blockers lack rapid reversibility if cardiovascular collapse occurs in sepsis.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Severe myocardial depression lasting several hours",
              "Worsening organ hypoperfusion requiring high-dose pressor rescue"
            ],
            clinicalResponse: "The patient becomes bradycardic and profoundly hypotensive (MAP 48 mmHg) for over 4 hours."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "The ventricular rate is controlled at 95 bpm and MAP is maintained at 70 mmHg on low-dose norepinephrine. The patient is stable.",
      question: "What is the primary definitive therapeutic objective to prevent recurrent AFib destabilization?",
      options: [
        {
          id: "3-a",
          text: "Aggressively treat the underlying sepsis, hypoxemia, fever, and electrolyte derangements (Mg ≥ 2.0 mg/dL, K ≥ 4.0 mEq/L)",
          isCorrect: true,
          explanation: "In critically ill patients, secondary AFib is a symptom of adrenergic excess, systemic inflammation, atrial stretch, and metabolic disturbance. Long-term rhythm stability depends entirely on resolving the underlying acute precipitant.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Decreased systemic adrenergic surge",
              "Spontaneous conversion to sinus rhythm within 24 hours of infection control"
            ],
            clinicalResponse: "With antibiotic therapy, fever control, and magnesium repletion, the patient spontaneously converts to sinus rhythm and vasopressors are weaned off."
          }
        },
        {
          id: "3-b",
          text: "Initiate chronic oral Sotalol and schedule an emergency catheter ablation in the ICU",
          isCorrect: false,
          explanation: "Catheter ablation and class III antiarrhythmics (sotalol) are contraindicated in acute septic shock with electrolyte flux due to high pro-arrhythmic torsades risk.",
          whyNot: "Invasive ablation is not performed during acute sepsis; antiarrhythmics risk lethal QT prolongation.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Prolonged QTc and pro-arrhythmic danger"
            ],
            clinicalResponse: "The patient experiences runs of polymorphic ventricular tachycardia due to drug-induced QT prolongation."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["esmolol", "norepinephrine", "phenylephrine"],
  relatedTopicIds: ["arrhythmias", "shock"],
  relatedPathwaySlugs: ["hemodynamic-resuscitation-workflow", "vasopressor-titration-workflow"],
  relatedProblemSlugs: ["new-tachycardia", "acute-hypotension"],
  references: [
    "Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 2024;149:e1-e156.",
    "Morelli A, et al. Effect of heart rate control with esmolol on hemodynamic and clinical outcomes in patients with septic shock: a randomized clinical trial. JAMA 2013;310:1683-1691."
  ]
};