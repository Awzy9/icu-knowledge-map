import type { ClinicalCase } from "@/content-types/clinical-case";

export const cardiogenicShockMiCase: ClinicalCase = {
  "id": "case-cardiogenic-shock-mi",
  "slug": "cardiogenic-shock-mi",
  "title": "Cardiogenic Shock Post-Acute Myocardial Infarction",
  "subtitle": "SCAI Shock staging, inopressor combinations (Norepinephrine + Dobutamine), and mechanical circulatory support (MCS) evaluation",
  "difficulty": "advanced",
  "system": "cardiovascular",
  "tags": [
    "cardiogenic-shock",
    "acute-coronary-syndrome",
    "dobutamine",
    "norepinephrine",
    "milrinone"
  ],
  "objectives": [
    "Classify cardiogenic shock severity using the SCAI Shock Staging criteria (Stages A to E)",
    "Select first-line vasoactive support: Norepinephrine for MAP preservation + Dobutamine for inotropic support (superior to Dopamine per SOAP II trial)",
    "Recognize acute mechanical complications of MI (acute MR, VSD, free wall rupture) on point-of-care echocardiography",
    "Identify indications for temporary Mechanical Circulatory Support (Impella, IABP, VA-ECMO)"
  ],
  "initialPresentation": {
    "history": "A 68-year-old male undergoes successful primary PCI with stenting of the proximal LAD for acute anterior STEMI. Upon arrival in the CCU 2 hours post-PCI, he is pale, cold, oliguric, and obtunded with blood pressure 76/46 mmHg (MAP 56 mmHg) and bilateral diffuse lung crackles.",
    "vitals": {
      "HR": "118/min sinus tachycardia",
      "BP": "76/46 mmHg",
      "MAP": "56 mmHg",
      "RR": "30/min",
      "SpO2": "87% on HFNC",
      "Lactate": "4.8 mmol/L",
      "Cardiac Index": "1.6 L/min/m2",
      "PCWP": "26 mmHg"
    },
    "keyFindings": [
      "Classic cold-and-wet cardiogenic shock (SCAI Stage C / D): low cardiac index (1.6) and high filling pressures (PCWP 26)",
      "POCUS reveals extensive anterior and apical akinesis with LVEF ~18–20%, moderate secondary mitral regurgitation, and clean non-ruptured septum",
      "Severe lactic acidosis and oliguria (<10 mL/hr)"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is in SCAI Stage C cardiogenic shock with severe hypotension (MAP 56 mmHg), pulmonary congestion, and cardiac index 1.6 L/min/m2.",
      "question": "What is the guideline-recommended first-line pharmacologic strategy?",
      "options": [
        {
          "id": "1-a",
          "text": "Initiate Norepinephrine (titrated for MAP ≥ 65 mmHg to restore coronary perfusion) + Dobutamine (titrated 2.5–10 mcg/kg/min for cardiac index > 2.2 L/min/m2)",
          "isCorrect": true,
          "explanation": "In cardiogenic shock with profound hypotension, the combination of Norepinephrine (first-line vasopressor of choice with less arrhythmogenicity and lower mortality than Dopamine per SOAP II trial) and Dobutamine (inotropic beta-1 contractility augmentation) is the evidence-based standard.",
          "physiologicReasoning": "Norepinephrine restores aortic diastolic coronary perfusion pressure. Dobutamine stimulates beta-1 adrenergic receptors, shifting the depressed Frank-Starling ventricular function curve upward to restore forward stroke volume.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "MAP increases to 68 mmHg, restoring right and left coronary artery driving pressure",
              "Left ventricular stroke volume and cardiac index rise from 1.6 to 2.4 L/min/m2",
              "PCWP decreases from 26 to 19 mmHg as forward stroke volume unloads the LV"
            ],
            "clinicalResponse": "With Norepinephrine at 0.15 mcg/kg/min and Dobutamine at 5 mcg/kg/min, blood pressure reaches 96/60 mmHg, urine output begins at 40 mL/hr, and extremities warm."
          }
        },
        {
          "id": "1-b",
          "text": "Start Dopamine infusion as single-agent monotherapy at 20 mcg/kg/min",
          "isCorrect": false,
          "explanation": "The SOAP II randomized trial proved that Dopamine is associated with significantly increased mortality and double the incidence of life-threatening tachyarrhythmias compared to Norepinephrine in cardiogenic shock.",
          "whyNot": "Dopamine increases arrhythmogenicity and mortality in cardiogenic shock compared to norepinephrine.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "Severe sinus tachycardia (HR 155 bpm) triggering non-sustained ventricular tachycardia",
              "Myocardial oxygen consumption spikes, worsening ischemic injury"
            ],
            "clinicalResponse": "Patient develops runs of VT and blood pressure crashes further."
          }
        }
      ],
      "physiologyDisplay": {
        "contractility": "up-up",
        "co": "up-up",
        "map": "up",
        "preload": "down",
        "svr": "neutral"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "norepinephrine",
    "dobutamine",
    "milrinone"
  ],
  "relatedTopicIds": [
    "cardiogenic-shock",
    "acute-coronary-syndrome",
    "acute-heart-failure"
  ],
  "relatedPathwaySlugs": [],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "Comparison of Dopamine and Norepinephrine in the Treatment of Shock (SOAP II Trial)",
  "SCAI Clinical Expert Consensus Statement on the Classification of Cardiogenic Shock"
]
};
