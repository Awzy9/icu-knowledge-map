import type { ClinicalCase } from "@/content-types/clinical-case";

export const massivePeCase: ClinicalCase = {
  id: "case-massive-pe",
  slug: "massive-pe",
  title: "High-Risk Pulmonary Embolism with Obstructive Shock",
  subtitle: "Right ventricular resuscitation, coronary perfusion, and advanced reperfusion strategy",
  difficulty: "advanced",
  system: "cardiovascular",
  tags: ["pe", "obstructive-shock", "thrombolysis", "norepinephrine", "rv-failure"],
  objectives: [
    "Differentiate acute PE risk categories under the 2026 multisociety framework: distinguish Category D (incipient cardiopulmonary failure: D1 transient hypotension, D2 normotensive with severe tissue hypoperfusion) from Category E (cardiopulmonary failure: E1 sustained hypotension/shock requiring vasopressor/inotropic support, E2 cardiopulmonary collapse/arrest)",
    "Preserve right ventricular perfusion pressure with Norepinephrine to break the ischemic RV failure cycle",
    "Avoid excessive fluid boluses that worsen right ventricular dilation and interventricular interdependence",
    "Select advanced reperfusion strategies (systemic thrombolysis vs catheter-directed therapies vs surgical embolectomy) based on clinical category, bleeding risk, and institutional capabilities"
  ],
  initialPresentation: {
    history: "A 45-year-old female recovering from uncomplicated laparoscopic surgery 10 days ago presents with sudden collapse, acute dyspnea, and pleuritic chest pain. She is cyanotic, clammy, and obtunded.",
    vitals: { "HR": "134/min", "BP": "68/38 mmHg", "MAP": "48 mmHg", "RR": "34/min", "SpO2": "82% on 15L Non-Rebreather", "Temp": "36.4°C" },
    keyFindings: [
      "High-Risk PE presenting with Category E1 Cardiopulmonary Failure: sustained SBP < 90 mmHg (or MAP < 65 mmHg) for ≥ 15 min requiring vasopressor infusion with profound tissue hypoperfusion (lactate 5.8 mmol/L)",
      "Distended non-pulsatile jugular veins to the angle of the jaw with clear lung fields",
      "Bedside echocardiogram: Severely dilated right ventricle (RV:LV ratio >1.0), McConnell's sign (hyperdynamic RV apex with akinetic free wall), interventricular septal flattening into the LV ('D-shaped LV'), and plethoric non-collapsing IVC",
      "12-Lead ECG: Sinus tachycardia at 134 bpm with S1Q3T3 pattern and anterior T-wave inversions (V1–V4)"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient is in acute obstructive shock due to high-risk pulmonary embolism presenting with Category E1 cardiopulmonary failure. The right ventricle is severely dilated and failing against massive pulmonary vascular resistance.",
      question: "What is your immediate primary hemodynamic intervention to prevent cardiovascular collapse?",
      options: [
        {
          id: "1-a",
          text: "Start Norepinephrine infusion immediately to elevate MAP and restore right coronary artery perfusion",
          isCorrect: true,
          explanation: "In acute RV failure from high-risk PE, elevated RV wall tension compresses the right coronary artery (RCA). Norepinephrine raises aortic root pressure (MAP), breaking the vicious spiral of RV ischemia, while providing modest inotropic support without increasing PVR.",
          physiologicReasoning: "Restoring aortic root perfusion pressure relative to elevated RV intracavitary pressure restores right coronary microvascular flow.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Aortic root diastolic pressure increases",
              "Right coronary artery perfusion is restored, halting acute ischemic RV dilation",
              "MAP rises from 48 to 68 mmHg"
            ],
            clinicalResponse: "Norepinephrine is rapidly titrated to 0.2 mcg/kg/min. MAP increases to 70 mmHg, radial pulses become palpable, and the patient opens her eyes.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Administer 2 Liters of Normal Saline rapidly as an empiric volume challenge",
          isCorrect: false,
          explanation: "In acute cor pulmonale, the RV is already overfilled and operating on the descending limb of the Starling curve. Giving rapid large fluid boluses increases RV end-diastolic volume, worsens ventricular interdependence (interventricular septum bows into the LV), drastically decreases LV filling and stroke volume, and triggers cardiac arrest.",
          whyNot: "Aggressive fluids in acute RV failure cause interventricular septal flattening, compromising LV filling and risking cardiovascular collapse.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "RV dilates further, worsening tricuspid regurgitation",
              "Interventricular septum bows severely into the LV cavity",
              "LV stroke volume declines, risking profound hemodynamic collapse"
            ],
            clinicalResponse: "Empiric large-volume crystalloid loading exacerbates right ventricular dilation, and blood pressure drops further to 54/30 mmHg with rising central venous pressure."
          }
        },
        {
          id: "1-c",
          text: "Start Milrinone infusion at 0.5 mcg/kg/min as initial monotherapy",
          isCorrect: false,
          explanation: "Milrinone causes systemic arteriolar vasodilation. Starting it in an already hypotensive patient without a vasopressor drops MAP further, precipitating fatal coronary hypoperfusion.",
          whyNot: "Inodilators cause systemic vasodilation, collapsing coronary perfusion pressure in unresuscitable hypotension.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Profound systemic vasodilation without adequate vasoconstrictor support",
              "Aortic root pressure and right coronary perfusion pressure drop"
            ],
            clinicalResponse: "Starting milrinone monotherapy causes arterial pressure to decline from 68/38 to 50/26 mmHg, worsening end-organ perfusion."
          }
        }
      ],
      physiologyDisplay: {
        pvr: "up-up",
        preload: "down",
        co: "down-down",
        map: "down",
        hr: "up-up"
      }
    },
    {
      id: "step-2",
      prompt: "Norepinephrine has temporarily stabilized MAP at 66 mmHg, but the patient remains in severe obstructive shock with persistent hypoxemia (SpO2 86% on high-flow) and rising lactate (5.8 mmol/L), confirming Category E1 cardiopulmonary failure.",
      question: "Under the 2026 multisociety guideline, what is the appropriate advanced reperfusion strategy for this patient?",
      options: [
        {
          id: "2-a",
          text: "Initiate prompt advanced reperfusion, selecting among guideline-reasonable modalities (Systemic Thrombolysis [Alteplase 100 mg IV over 2 hours], Catheter-Directed Thrombolysis, Mechanical Thrombectomy, or Surgical Embolectomy) based on bleeding risk, time to reperfusion, and institutional capabilities",
          isCorrect: true,
          explanation: "Under the 2026 AHA/ACC multisociety guideline, acute PE with sustained shock/cardiopulmonary failure (Category E1) warrants prompt advanced reperfusion. Rather than designating a single mandatory default, the guideline recognizes several guideline-reasonable modalities (Class 2a for systemic thrombolysis, catheter-directed thrombolysis, and mechanical thrombectomy; surgical embolectomy may also be considered). Modality selection is tailored to bleeding risk, severity, speed to therapy, and institutional resources (such as catheterization laboratory or PERT availability). Systemic thrombolysis (Alteplase 100 mg IV over 2 hours) is rapidly deployable at the bedside when bleeding risk is low, whereas catheter-directed therapies (CDT or mechanical thrombectomy) or surgical embolectomy are supported options when systemic lysis is contraindicated, bleeding risk is high, or specialized procedural expertise is immediately available.",
          physiologicReasoning: "Rapid clot lysis or mechanical extraction relieves pulmonary arterial obstruction, rapidly decreasing pulmonary vascular resistance and unloading the failing right ventricle.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Pulmonary arterial clot burden begins to lyse or is mechanically extracted",
              "Pulmonary vascular resistance decreases significantly",
              "RV stroke volume and forward cardiac output recover"
            ],
            clinicalResponse: "Advanced reperfusion is initiated promptly. Within 90 minutes, RV pressure overload decreases, SpO2 rises to 96%, and norepinephrine is successfully weaned to minimal doses.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Start an unfractionated heparin drip with a standard PTT target and observe without advanced reperfusion",
          isCorrect: false,
          explanation: "Unfractionated heparin only prevents propagation of new thrombi; it does not dissolve or remove the existing obstructing clot that is causing acute right heart failure and death in high-risk shock.",
          whyNot: "Heparin alone does not relieve massive mechanical vascular obstruction; high-risk shock will proceed to fatal arrest without advanced reperfusion.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Anticoagulation is achieved without relieving mechanical pulmonary obstruction",
              "Right ventricle remains under massive pressure overload"
            ],
            clinicalResponse: "The patient remains in refractory shock with rising inotrope and vasopressor requirements."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "If the patient develops worsening exhaustion and requires invasive airway management, which physiological principle is most critical during intubation?",
      question: "Why is endotracheal intubation exceptionally hazardous in acute right ventricular failure?",
      options: [
        {
          id: "3-a",
          text: "Positive pressure ventilation increases intrathoracic pressure, decreasing venous return to the failing RV while induction agents cause systemic vasodilation",
          isCorrect: true,
          explanation: "The failing, dilated RV is exquisitely preload-dependent. Positive intrathoracic pressure decreases venous return, and induction drugs abolish compensatory sympathetic tone, precipitating peri-intubation circulatory arrest.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Recognition of hemodynamic collapse risk",
              "Preparation of push-dose pressors and avoidance of high PEEP or excessive tidal volumes"
            ],
            clinicalResponse: "The team uses hemodynamically neutral induction (Ketamine), pre-loads with vasopressors, and avoids high PEEP, safely securing the airway."
          }
        },
        {
          id: "3-b",
          text: "High oxygen concentrations cause paradoxical pulmonary vasoconstriction",
          isCorrect: false,
          explanation: "Oxygen is a potent pulmonary vasodilator, decreasing PVR.",
          whyNot: "Oxygen decreases pulmonary resistance, not increases it.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Misunderstanding of basic respiratory physiology"
            ],
            clinicalResponse: "Incorrect physiological rationale."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["norepinephrine", "epinephrine", "milrinone", "ketamine"],
  relatedTopicIds: ["pulmonary-embolism", "shock"],
  relatedPathwaySlugs: ["vasopressor-titration-workflow"],
  relatedProblemSlugs: ["refractory-shock", "acute-hypotension"],
  references: [
    "2026 AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN Guideline for the Evaluation and Management of Acute Pulmonary Embolism in Adults. Circulation. 2026.",
    "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS) (Prior European Guidance). Eur Heart J. 2020;41(4):543-603.",
    "Meyer G, Vicaut E, Danays T, et al. Fibrinolysis for patients with intermediate-risk pulmonary embolism (PEITHO Trial: Intermediate-Risk Evidence). N Engl J Med. 2014;370(15):1402-1411.",
    "Jaff MR, McMurtry MS, Archer SL, et al. Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension (Historical AHA Statement). Circulation. 2011;123(16):1788-1830."
  ]
};