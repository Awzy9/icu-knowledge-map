import type { Question } from "@/content-types";

export const asthmaQuestions: readonly Question[] = [
  {
    "id": "asthma.q.abg-fatigue-progression",
    "topicId": "asthma",
    "stem": "A 28-year-old woman with severe chronic asthma presents to the ICU with acute severe breathlessness, diaphoresis, and inability to speak in full sentences. Initial ABG on room air reveals: pH 7.40, PaCO2 40 mmHg, PaO2 62 mmHg, HCO3 24 mEq/L. Which statement best interprets these blood gas findings?",
    "options": [
      {
        "id": "a",
        "text": "The normal PaCO2 is reassuring and indicates mild disease.",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "The normal PaCO2 represents respiratory muscle exhaustion and impending hypercapnic failure.",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "The patient has pure metabolic compensation without respiratory impairment.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "The findings indicate chronic hypercapnia with acute overventilation.",
        "isCorrect": false
      }
    ],
    "explanation": "In acute asthma exacerbations, intense hyperventilation normally drives PaCO2 down to <30 mmHg. A 'normal' PaCO2 of 40 mmHg in a struggling asthmatic indicates respiratory muscle exhaustion, loss of compensatory minute ventilation, and impending arrest.",
    "difficulty": "basic",
    "category": "Diagnosis",
    "references": [
      "Global Initiative for Asthma (2026 GINA Report); British Thoracic Society Asthma Guidelines."
    ]
  },
  {
    "id": "asthma.q.ventilator-stacking-intervention",
    "topicId": "asthma",
    "stem": "A 35-year-old intubated asthmatic on volume-control ventilation (Vt 450 mL, RR 18, PEEP 5, FiO2 0.5) develops severe hypotension (BP 72/40 mmHg) and high peak airway pressures (55 cmH2O). End-expiratory occlusion reveals an intrinsic PEEP (Auto-PEEP) of 18 cmH2O. Which ventilator adjustment is most appropriate?",
    "options": [
      {
        "id": "a",
        "text": "Increase respiratory rate to 24 bpm to clear carbon dioxide.",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Increase extrinsic PEEP to 18 cmH2O to match intrinsic PEEP.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Decrease respiratory rate to 10 bpm and increase peak inspiratory flow rate to 80 L/min to prolong expiratory time.",
        "isCorrect": true
      },
      {
        "id": "d",
        "text": "Switch to Pressure Support ventilation with zero PEEP.",
        "isCorrect": false
      }
    ],
    "explanation": "Severe Auto-PEEP is caused by insufficient expiratory time. Lowering the respiratory rate from 18 to 10 bpm and increasing inspiratory flow shortens inspiratory time, maximizing expiratory time (prolonging Te and expanding the I:E ratio to 1:4), allowing trapped alveolar volume to empty.",
    "difficulty": "advanced",
    "category": "Management",
    "references": [
      "Tuxen DV. Detrimental effects of positive end-expiratory pressure in patients with severe airflow obstruction. Am Rev Respir Dis 1989."
    ]
  },
  {
    "id": "asthma.q.magnesium-evidence",
    "topicId": "asthma",
    "stem": "A patient with acute severe asthma has persistent severe bronchospasm despite 1 hour of continuous nebulized albuterol, ipratropium, and 60 mg IV methylprednisolone. What is the next guideline-recommended adjunctive pharmacologic agent?",
    "options": [
      {
        "id": "a",
        "text": "Intravenous Magnesium Sulfate (2 g IV over 20 minutes)",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Intravenous Theophylline infusion",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Subcutaneous Epinephrine in all non-pregnant adults",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Inhaled budesonide dry powder inhaler",
        "isCorrect": false
      }
    ],
    "explanation": "IV Magnesium Sulfate (2 g IV over 20 minutes) is recommended by GINA and British Thoracic Society guidelines for patients with severe acute asthma unresponsive to initial continuous beta-agonist and anticholinergic nebulization.",
    "difficulty": "intermediate",
    "category": "Management",
    "references": [
      "3Mg Trial; Cochrane Database Syst Rev 2014; 2026 GINA Report."
    ]
  },
  {
    "id": "asthma.q.post-intubation-arrest",
    "topicId": "asthma",
    "stem": "Immediately following rapid sequence intubation of a patient with near-fatal asthma, the patient develops pulseless electrical activity (PEA). Ventilator shows high peak pressures and no chest excursion. What is the most immediate life-saving action?",
    "options": [
      {
        "id": "a",
        "text": "Administer 1 mg IV epinephrine and start chest compressions immediately.",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Disconnect the endotracheal tube from the circuit and perform bilateral manual chest decompression.",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Perform emergent needle cricothyroidotomy.",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Increase PEEP to 15 cmH2O to stent open small airways.",
        "isCorrect": false
      }
    ],
    "explanation": "In intubated asthmatics, acute PEA arrest is most commonly caused by severe breath-stacking and massive dynamic hyperinflation (tension Auto-PEEP), which obliterates right heart preload. Immediate circuit disconnection allows passive expiration of trapped gas and restores venous return.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  }
];
