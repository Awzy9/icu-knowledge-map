import type { ClinicalCase } from "@/content-types/clinical-case";

export const rvFailurePostIntubationCase: ClinicalCase = {
  "id": "case-rv-failure-post-intubation",
  "slug": "rv-failure-post-intubation",
  "title": "Acute RV Failure Post-Intubation",
  "subtitle": "Hemodynamic collapse immediately following positive pressure ventilation in severe pulmonary hypertension",
  "difficulty": "advanced",
  "system": "cardiovascular",
  "tags": [
    "rv-failure",
    "pulmonary-hypertension",
    "post-intubation",
    "hemodynamics",
    "norepinephrine"
  ],
  "objectives": [
    "Recognize the lethal impact of positive intrathoracic pressure on failing right ventricular afterload and preload",
    "Select the appropriate first-line vasopressor to preserve RV coronary perfusion pressure (CPP)",
    "Optimize ventilator settings to avoid hypercapnic and hypoxic pulmonary vasoconstriction"
  ],
  "initialPresentation": {
    "history": "A 58-year-old female with known Group 1 Pulmonary Arterial Hypertension is intubated for acute hypercapnic respiratory failure. Immediately following positive-pressure ventilation (VT 450 mL, PEEP 10 cmH2O, RR 18), her blood pressure crashes.",
    "vitals": {
      "HR": "128/min",
      "BP": "62/38 mmHg",
      "MAP": "46 mmHg",
      "SpO2": "86%",
      "CVP": "22 mmHg"
    },
    "keyFindings": [
      "Severe hypotension within 3 minutes of initiating positive-pressure ventilation",
      "Distended jugular veins, prominent 'a' waves, cool mottled extremities",
      "Bedside echocardiogram reveals a massively dilated, hypokinetic RV with severe leftward septal flattening ('D-shaped LV') and an underfilled left ventricle"
    ]
  },
  "steps": [
    {
      "id": "step-1",
      "prompt": "The patient is acutely hypotensive with MAP 46 mmHg and acute RV failure on bedside echo immediately after intubation.",
      "question": "What is your immediate primary hemodynamic intervention?",
      "options": [
        {
          "id": "1-a",
          "text": "Initiate Norepinephrine infusion immediately and titrate rapidly to restore aortic root pressure (MAP > 65–70 mmHg)",
          "isCorrect": true,
          "explanation": "In acute RV failure, RV perfusion occurs in both systole and diastole and depends critically on systemic aortic pressure. Norepinephrine elevates MAP/SVR, restoring RV coronary perfusion pressure without excessively increasing PVR.",
          "physiologicReasoning": "When RV systolic pressure equals or exceeds LV pressure, RV subendocardial ischemia develops. Restoring systemic MAP restores the right coronary artery perfusion gradient and breaks the RV death spiral.",
          "outcome": {
            "classification": "appropriate",
            "immediateEffects": [
              "Systemic vascular resistance and aortic root pressure rise",
              "RV coronary perfusion restored"
            ],
            "clinicalResponse": "With norepinephrine titrated to 0.20 mcg/kg/min, blood pressure rises to 92/58 mmHg (MAP 69 mmHg)."
          }
        },
        {
          "id": "1-b",
          "text": "Administer a rapid 1,000 mL bolus of Lactated Ringer's to boost preload",
          "isCorrect": false,
          "explanation": "In acute RV failure with volume overload, fluid loading worsens RV dilation, stretches the tricuspid annulus, and exaggerates leftward septal flattening, further impeding LV filling.",
          "whyNot": "The failing RV is already on the flat or descending limb of the Frank-Starling curve; volume increases RV wall stress and exacerbates LV collapse.",
          "outcome": {
            "classification": "potentially-harmful",
            "immediateEffects": [
              "RV distends further",
              "LV cavity obliterated"
            ],
            "clinicalResponse": "Following fluid, MAP drops to 40 mmHg and cardiac arrest threatens."
          }
        }
      ],
      "physiologyDisplay": {
        "svr": "down",
        "pvr": "up-up",
        "contractility": "down-down",
        "preload": "up-up",
        "co": "down-down",
        "map": "down-down"
      }
    }
  ],
  "relatedMedicationSlugs": [
    "norepinephrine",
    "dobutamine"
  ],
  "relatedTopicIds": [
    "rv-failure",
    "mechanical-ventilation",
    "shock"
  ],
  "relatedPathwaySlugs": [
    "mechanical-ventilation-initiation"
  ],
  "relatedProblemSlugs": [
    "acute-hypotension"
  ],
  "references": [
  "Evaluation and Management of Right-Sided Heart Failure: AHA Scientific Statement"
]
};
