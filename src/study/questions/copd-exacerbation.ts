import type { Question } from "@/content-types";

export const copdExacerbationQuestions: readonly Question[] = [
  {
    "id": "copd.q.niv-selection-trial",
    "topicId": "copd-exacerbation",
    "stem": "A 68-year-old man with severe COPD (GOLD Stage 4) presents with severe dyspnea and somnolence. Initial blood gas on 2 L/min nasal cannula shows: pH 7.26, PaCO2 74 mmHg, PaO2 58 mmHg, HCO3 32 mEq/L. He is cooperative and able to clear his secretions. What is the most appropriate next step in management?",
    "options": [
      {
        "id": "a",
        "text": "Immediate endotracheal intubation and volume-control ventilation",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Initiation of noninvasive bilevel positive airway pressure (NIV/BiPAP)",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Increase supplemental oxygen to a 50% Venturi mask and recheck ABG in 4 hours",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Intravenous sodium bicarbonate infusion and high-flow nasal cannula",
        "isCorrect": false
      }
    ],
    "explanation": "NIV is the standard of care for acute-on-chronic hypercapnic respiratory failure in COPD with pH < 7.35. Randomized trials have demonstrated that early NIV reduces intubation rates by >60% and lowers in-hospital mortality compared with standard medical therapy alone.",
    "difficulty": "basic",
    "category": "Management",
    "references": [
      "Plant PK et al. Lancet 2000; GOLD 2024 Guidelines."
    ]
  },
  {
    "id": "copd.q.steroid-reduce-trial",
    "topicId": "copd-exacerbation",
    "stem": "According to the landmark REDUCE trial, what is the optimal duration of systemic corticosteroid therapy for an acute COPD exacerbation?",
    "options": [
      {
        "id": "a",
        "text": "5 days of oral Prednisone 40 mg daily",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "14 days of IV Methylprednisolone with a 2-week oral taper",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "21 days of high-dose Dexamethasone",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "A single 1-day dose of IV Hydrocortisone 100 mg",
        "isCorrect": false
      }
    ],
    "explanation": "The REDUCE trial (JAMA 2013) demonstrated that 5 days of prednisone 40 mg/day was non-inferior to 14 days with respect to time to next exacerbation and all-cause mortality, while significantly reducing cumulative glucocorticoid exposure.",
    "difficulty": "intermediate",
    "category": "Evidence",
    "references": [
      "Leuppi JD et al. REDUCE Randomized Trial. JAMA 2013."
    ]
  },
  {
    "id": "copd.q.hyperoxia-mechanism",
    "topicId": "copd-exacerbation",
    "stem": "A COPD patient receives 100% FiO2 via non-rebreather mask, resulting in PaO2 280 mmHg, but his PaCO2 rises from 52 to 86 mmHg with acute somnolence. What is the primary physiological mechanism causing this acute hypercapnia?",
    "options": [
      {
        "id": "a",
        "text": "Loss of hypoxic drive to breathe as the primary mechanism",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Release of hypoxic pulmonary vasoconstriction worsening dead space and the Haldane effect",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Acute metabolic lactic acidosis causing compensatory hypoventilation",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Severe acute bronchospasm induced by cold dry oxygen",
        "isCorrect": false
      }
    ],
    "explanation": "The traditional 'loss of hypoxic drive' concept is a minor factor. The dominant mechanisms of hyperoxia-induced hypercapnia in COPD are: 1) Reversal of hypoxic pulmonary vasoconstriction, which redistributes blood flow to poorly ventilated alveoli (worsening V/Q mismatch and physiological dead space); and 2) The Haldane effect, where oxygenated hemoglobin has lower affinity for CO2, unloading CO2 into plasma.",
    "difficulty": "advanced",
    "category": "Pathophysiology",
    "references": [
      "Aubier M et al. Am Rev Respir Dis 1980; West's Respiratory Physiology."
    ]
  }
];
