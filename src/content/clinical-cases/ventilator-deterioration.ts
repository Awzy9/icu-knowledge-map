import type { ClinicalCase } from "@/content-types/clinical-case";

export const ventilatorDeteriorationCase: ClinicalCase = {
  id: "case-vent-deterioration",
  slug: "ventilator-deterioration",
  title: "Sudden Ventilator Deterioration (DOPE Protocol)",
  subtitle: "Systematic troubleshooting of high peak pressures, acute desaturation, and tension pneumothorax",
  difficulty: "intermediate",
  system: "respiratory",
  tags: ["mechanical-ventilation", "troubleshooting", "pneumothorax", "dope", "emergencies"],
  objectives: [
    "Execute the DOPE algorithm (Dislodgement, Obstruction, Pneumothorax, Equipment) in acute ventilator crisis",
    "Differentiate Peak Inspiratory Pressure (resistance) from Plateau Pressure (compliance)",
    "Perform emergency needle decompression and tube thoracostomy for tension pneumothorax",
    "Recognize acute dead space ventilation and perfusion failure on capnography"
  ],
  initialPresentation: {
    history: "A 60-year-old male intubated on Day 4 for severe ARDS (Set Vt 380 mL, PEEP 14 cmH2O) suddenly triggers persistent high-pressure alarms. He becomes acutely agitated, diaphoretic, and combative on the ventilator.",
    vitals: { "HR": "142/min", "BP": "78/42 mmHg", "MAP": "54 mmHg", "RR": "36/min", "SpO2": "80%" },
    keyFindings: [
      "Ventilator Peak Inspiratory Pressure has surged from baseline 32 to 58 cmH2O",
      "Trachea is palpably deviated to the right side; neck veins are engorged",
      "Auscultation: Complete absence of breath sounds on the left hemithorax with hyperresonance to percussion"
    ]
  },
  steps: [
    {
      id: "step-1",
      prompt: "The patient is acutely hypoxic and hypotensive with unilateral absent left breath sounds and tracheal deviation. Peak pressure is 58 cmH2O.",
      question: "What is your immediate mandatory sequence of actions?",
      options: [
        {
          id: "1-a",
          text: "Disconnect the patient from the ventilator, bag manually with 100% O2, and perform immediate left-sided needle/finger thoracostomy",
          isCorrect: true,
          explanation: "Disconnecting eliminates ventilator equipment malfunction and allows immediate assessment of pulmonary compliance. The clinical triad of absent breath sounds, tracheal deviation, and shock establishes tension pneumothorax—a clinical diagnosis requiring instantaneous decompression without waiting for X-rays.",
          physiologicReasoning: "Tension pneumothorax creates a one-way valve in the pleural space, compressing the vena cava and right atrium, collapsing venous return and cardiac output.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Immediate decompression of pressurized intrapleural air",
              "Mediastinal shift normalizes, restoring vena caval blood flow",
              "MAP rises from 54 to 76 mmHg within 30 seconds"
            ],
            clinicalResponse: "Upon inserting an 14-gauge catheter at the 2nd intercostal space (or finger thoracostomy at 5th intercostal space), an audible rush of air is released. Blood pressure immediately rebounds to 114/68 mmHg.",
            nextStepId: "step-2"
          }
        },
        {
          id: "1-b",
          text: "Administer IV Propofol 100 mg bolus to treat patient-ventilator fighting",
          isCorrect: false,
          explanation: "The agitation is caused by severe air hunger, cerebral hypoxemia, and shock from a tension pneumothorax. Propofol causes systemic vasodilation and will precipitate severe hemodynamic collapse.",
          whyNot: "Sedating an unrecognized tension pneumothorax abolishes remaining sympathetic tone, causing immediate cardiovascular collapse.",
          nextStepId: "step-branch-delayed-decompression",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Propofol vasodilation eliminates remaining compensatory vascular tone",
              "Blood pressure collapses to 48/24 mmHg with profound bradycardia"
            ],
            clinicalResponse: "Blood pressure plummets to 48/24 mmHg. The code team is called for impending pulseless arrest.",
            nextStepId: "step-branch-delayed-decompression"
          }
        },
        {
          id: "1-c",
          text: "Order an urgent portable stat chest X-ray and wait at the bedside",
          isCorrect: false,
          explanation: "Tension pneumothorax is a pure clinical diagnosis. Waiting 15–20 minutes for a radiograph in an unstable crashing patient causes fatal cardiac arrest.",
          whyNot: "Imaging must never delay decompression in a hemodynamically unstable tension pneumothorax.",
          nextStepId: "step-branch-delayed-decompression",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Progressive intrapleural pressure accumulation leads to complete venous inflow obstruction"
            ],
            clinicalResponse: "While waiting for the X-ray technician, the patient develops severe bradycardia (HR 35 bpm) and hemodynamic collapse.",
            nextStepId: "step-branch-delayed-decompression"
          }
        }
      ]
    },
    {
      id: "step-branch-delayed-decompression",
      isBranchStep: true,
      parentDecisionRef: "step-1",
      prompt: "Due to delayed decompression, pressurized air in the left hemithorax has almost completely obstructed vena caval venous return. Blood pressure is 50/25 mmHg and heart rate has dropped to 38 bpm in severe bradycardic peri-arrest shock.",
      question: "What emergency bedside procedure must be executed immediately without waiting for equipment trays or imaging?",
      options: [
        {
          id: "branch-vent-a",
          text: "Perform immediate emergency left-sided needle decompression or finger thoracostomy",
          isCorrect: true,
          explanation: "Immediate pleural decompression relieves the tension physiology, restores venous return to the right heart, and aborts cardiac arrest.",
          physiologicReasoning: "Decompressing the intrapleural space restores atmospheric or negative thoracic pressure, allowing immediate right atrial filling and stroke volume generation.",
          nextStepId: "step-2",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Pressurized air rushes out through the thoracostomy site",
              "Mediastinum returns to midline, restoring right heart venous inflow",
              "Heart rate rebounds to 105 bpm and BP recovers to 110/65 mmHg"
            ],
            clinicalResponse: "A dramatic hiss of escaping pressurized air is heard. Within 20 seconds, heart rate rebounds to 105 bpm and blood pressure surges to 114/68 mmHg, successfully averting cardiac arrest.",
            nextStepId: "step-2"
          }
        },
        {
          id: "branch-vent-b",
          text: "Administer 1 mg IV Atropine and 1 ampule of Calcium Chloride without decompressing the chest",
          isCorrect: false,
          explanation: "Pharmacotherapy cannot overcome the physical mechanical obstruction of venous return caused by high intrapleural pressure.",
          whyNot: "Mechanical outflow obstruction must be treated with physical mechanical decompression.",
          outcome: {
            classification: "potentially-harmful",
            immediateEffects: [
              "Fails to relieve physical vena caval obstruction"
            ],
            clinicalResponse: "The patient progresses into pulseless electrical activity (PEA) until the chest is decompressed."
          }
        }
      ]
    },
    {
      id: "step-2",
      prompt: "Needle decompression yields an immediate rush of air and stabilizes vital signs (BP 114/68, HR 105, SpO2 95%). However, the needle catheter is easily kinked and temporary.",
      question: "What is the mandatory definitive procedure?",
      vitalsUpdate: { "BP": "114/68 mmHg", "HR": "105/min", "SpO2": "95%" },
      options: [
        {
          id: "2-a",
          text: "Place a formal tube thoracostomy (chest tube) connected to water seal and -20 cmH2O suction",
          isCorrect: true,
          explanation: "Needle decompression is merely a temporary bridge. In mechanically ventilated patients on positive pressure, an ongoing bronchopleural air leak requires a large-bore or pigtail chest tube to maintain continuous pleural evacuation.",
          nextStepId: "step-3",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Continuous evacuation of ongoing alveolar air leak",
              "Full re-expansion of the left lung confirmed on post-procedure X-ray"
            ],
            clinicalResponse: "A 28 Fr chest tube is placed at the 5th intercostal space anterior axillary line. Continuous bubbling is observed in the water seal chamber, and lung mechanics normalize.",
            nextStepId: "step-3"
          }
        },
        {
          id: "2-b",
          text: "Remove the needle catheter and extubate the patient immediately",
          isCorrect: false,
          explanation: "The patient remains in severe ARDS and cannot sustain spontaneous ventilation.",
          whyNot: "The patient has ongoing acute respiratory failure requiring positive pressure support.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Acute respiratory failure and severe hypoxemic relapse"
            ],
            clinicalResponse: "Extubation fails within 2 minutes due to severe ARDS gas exchange impairment."
          }
        }
      ]
    },
    {
      id: "step-3",
      prompt: "Two hours later, the ventilator alarms again. Suctioning passes easily without resistance and bilateral breath sounds are clear and equal, but the end-tidal CO2 (EtCO2) waveform abruptly drops from 38 mmHg to 6 mmHg with acute hypotension.",
      question: "What does an abrupt drop in EtCO2 with clear airways signify?",
      vitalsUpdate: { "BP": "72/38 mmHg", "HR": "138/min", "SpO2": "84%" },
      options: [
        {
          id: "3-a",
          text: "Acute massive pulmonary blood flow cessation (Massive Pulmonary Embolism or impending cardiac arrest with alveolar dead space expansion)",
          isCorrect: true,
          explanation: "End-tidal CO2 reflects both cellular metabolism and pulmonary capillary blood flow. When ventilation is maintained (clear airway) but pulmonary blood flow suddenly drops to zero (massive PE, acute RV failure, severe shock), alveolar dead space skyrockets and EtCO2 collapses.",
          physiologicReasoning: "Alveolar ventilation without pulmonary capillary perfusion results in pure dead-space gas without excreted carbon dioxide.",
          outcome: {
            classification: "appropriate",
            immediateEffects: [
              "Immediate recognition of acute catastrophic perfusion failure",
              "Rapid initiation of bedside echocardiography and ACLS protocols"
            ],
            clinicalResponse: "Bedside ultrasound immediately reveals a massive saddle pulmonary embolus with acute RV dilation, guiding emergent thrombolytic rescue."
          }
        },
        {
          id: "3-b",
          text: "Endotracheal tube mainstem intubation into the right bronchus",
          isCorrect: false,
          explanation: "Mainstem intubation causes asymmetric breath sounds and elevated peak pressures, but does not cause an instantaneous collapse of EtCO2 down to 6 mmHg.",
          whyNot: "Mainstem intubation still provides ventilation and CO2 clearance to one entire lung.",
          outcome: {
            classification: "suboptimal",
            immediateEffects: [
              "Incorrect diagnostic path delaying treatment of circulatory arrest"
            ],
            clinicalResponse: "Failing to recognize acute perfusion collapse delays life-saving thrombolysis."
          }
        }
      ]
    }
  ],
  relatedMedicationSlugs: ["propofol", "cisatracurium", "fentanyl", "norepinephrine"],
  relatedTopicIds: ["pneumothorax", "mechanical-ventilation"],
  relatedPathwaySlugs: ["mechanical-ventilation-initiation"],
  relatedProblemSlugs: ["sudden-ventilator-deterioration", "sudden-hypoxemia"],
  references: [
    "Hess DR. Respiratory mechanics in mechanically ventilated patients. Respir Care 2014;59:1773-1794.",
    "Roberts DJ, et al. Management of tension pneumothorax. Lancet Respir Med 2015;3:3-5."
  ]
};