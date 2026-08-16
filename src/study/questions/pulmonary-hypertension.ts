import type { Question } from "@/content-types";

export const pulmonaryHypertensionQuestions: readonly Question[] = [
  {
    "id": "pulmonary-hypertension.q.1",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.overview",
    "stem": "A patient undergoing right heart catheterization has a mean Pulmonary Artery Pressure (mPAP) of 38 mmHg, Pulmonary Artery Wedge Pressure (PAWP) of 11 mmHg, and Pulmonary Vascular Resistance (PVR) of 5.2 Wood Units. How is this hemodynamically classified?",
    "options": [
      {
        "id": "a",
        "text": "Isolated Post-Capillary Pulmonary Hypertension",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Pre-Capillary Pulmonary Hypertension (PAH / Group 1, 3, or 4)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Combined Post- and Pre-Capillary Pulmonary Hypertension",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Normal pulmonary hemodynamics",
        "isCorrect": false
      }
    ],
    "explanation": "mPAP > 20 mmHg, PAWP <= 15 mmHg, and PVR > 2 Wood Units defines Pre-capillary Pulmonary Hypertension per 2022 ESC/ERS guidelines.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "ph-guideline-esc-ers-2022",
        "relevance": "Hemodynamic definition."
      }
    ]
  },
  {
    "id": "pulmonary-hypertension.q.2",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.classification",
    "stem": "A 72-year-old male with severe ischemic cardiomyopathy and EF 25% has mPAP 42 mmHg and PAWP 26 mmHg. Why are targeted PAH vasodilators (e.g. Sildenafil or Bosentan) contraindicated?",
    "options": [
      {
        "id": "a",
        "text": "They cause fatal coronary spasm",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "They increase blood flow into a failing left atrium/ventricle, causing acute flash pulmonary edema",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "They cause irreversible pulmonary fibrosis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "They induce severe hypercalcemia",
        "isCorrect": false
      }
    ],
    "explanation": "In Group 2 PH (left heart disease), the pulmonary venous hypertension is passive. Vasodilating the pulmonary arterioles floods the failing left heart, precipitating flash alveolar edema.",
    "difficulty": "intermediate",
    "references": [
      "ESC/ERS Guidelines 2022"
    ]
  },
  {
    "id": "pulmonary-hypertension.q.3",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "stem": "A 44-year-old female with idiopathic PAH is admitted in acute RV failure crisis with BP 82/50 mmHg, CVP 22 mmHg, and severe hypoxemia. What is the initial vasopressor of choice to restore right coronary perfusion?",
    "options": [
      {
        "id": "a",
        "text": "Phenylephrine infusion",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Norepinephrine infusion",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Isoproterenol boluses",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-dose Hydralazine",
        "isCorrect": false
      }
    ],
    "explanation": "Norepinephrine restores systemic MAP, raising the right coronary artery perfusion gradient (MAP - CVP) above RV peak systolic pressure without substantially increasing PVR.",
    "difficulty": "intermediate",
    "references": [
      "Price LC et al. Intensive Care Med 2010"
    ]
  },
  {
    "id": "pulmonary-hypertension.q.4",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.acute-crisis-management",
    "stem": "Why does Inhaled Nitric Oxide (iNO) selectively reduce pulmonary vascular resistance without causing systemic hypotension?",
    "options": [
      {
        "id": "a",
        "text": "It is destroyed by gastric acid",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "It diffuses only into ventilated alveoli and is rapidly bound and inactivated by hemoglobin as soon as it enters systemic blood",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "It selectively stimulates alpha-1 receptors in the aorta",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "It acts exclusively on the left ventricle",
        "isCorrect": false
      }
    ],
    "explanation": "iNO selectively reaches ventilated alveoli (improving V/Q matching) and is instantly scavenged by oxyhemoglobin to form methemoglobin and nitrate, preventing systemic vasodilation.",
    "difficulty": "basic",
    "references": [
      "Irwin & Rippe 9th Edition"
    ]
  },
  {
    "id": "pulmonary-hypertension.q.5",
    "topicId": "pulmonary-hypertension",
    "sectionId": "pulmonary-hypertension.overview",
    "stem": "What did the AMBITION trial establish as the standard of care for treatment-naive PAH?",
    "options": [
      {
        "id": "a",
        "text": "Sequential monotherapy starting with calcium channel blockers",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Initial upfront dual oral combination therapy (Ambrisentan + Tadalafil)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Immediate bilateral lung transplantation upon diagnosis",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "High-dose aspirin and warfarin anticoagulation alone",
        "isCorrect": false
      }
    ],
    "explanation": "The AMBITION trial showed upfront combination therapy reduced clinical failure and hospitalizations by 50% compared with monotherapy in newly diagnosed PAH.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ph-ambition-trial",
        "relevance": "AMBITION trial findings."
      }
    ]
  }
];
