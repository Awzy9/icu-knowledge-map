import type { Question } from "@/content-types";

export const acuteCoronarySyndromeQuestions: readonly Question[] = [
  {
    "id": "acs.q.sgarbossa-recognition",
    "topicId": "acute-coronary-syndrome",
    "stem": "A 68-year-old woman presents with severe retrosternal chest pain and diaphoresis. Her ECG demonstrates a Left Bundle Branch Block (LBBB). Lead V5 shows 2 mm of concordant ST elevation with a positive QRS complex. What does this finding indicate?",
    "options": [
      {
        "id": "a",
        "text": "Normal secondary repolarization abnormality of LBBB requiring no urgent intervention",
        "isCorrect": false
      },
      {
        "id": "b",
        "text": "Acute transmural myocardial infarction (STEMI Equivalent) requiring emergency cardiac catheterization",
        "isCorrect": true
      },
      {
        "id": "c",
        "text": "Acute pericarditis without coronary artery involvement",
        "isCorrect": false
      },
      {
        "id": "d",
        "text": "Severe hyperkalemia with pseudo-infarction pattern",
        "isCorrect": false
      }
    ],
    "explanation": "Concordant ST elevation ≥ 1 mm in leads with a positive QRS is the most specific Sgarbossa criterion (>98% specificity) for acute coronary occlusion in the presence of LBBB. It represents a STEMI equivalent mandating emergency catheterization.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "Smith SW et al. Ann Emerg Med 2012; Sgarbossa EB et al. NEJM 1996."
    ]
  }
,
  {
    id: "acs.q.de-winter-ecg",
    topicId: "acute-coronary-syndrome",
    stem: "A 52-year-old male with severe crushing chest pain has an ECG showing 1–2 mm upsloping ST depression at the J-point in precordial leads V1–V4, followed by tall, prominent, symmetric T waves, and 1 mm ST elevation in lead aVR. What does this pattern represent?",
    options: [
      { id: "a", text: "Benign early repolarization requiring outpatient stress testing.", isCorrect: false },
      { id: "b", text: "de Winter T-wave pattern indicating acute proximal Left Anterior Descending (LAD) occlusion requiring emergent PCI.", isCorrect: true },
      { id: "c", text: "Hyperacute T-wave changes of acute hyperkalemia requiring calcium gluconate.", isCorrect: false },
      { id: "d", text: "Subendocardial ischemia from tachycardia that should be managed with oral beta-blockers alone.", isCorrect: false }
    ],
    explanation: "The de Winter ECG pattern (upsloping ST depression with tall symmetric T waves in precordial leads) is a STEMI-equivalent seen in ~2% of acute proximal LAD occlusions. It mandates immediate emergent coronary angiography/PCI.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: [
      "de Winter RJ, et al. NEJM 2008; ACC/AHA STEMI Guidelines."
    ]
  },
  {
    id: "acs.q.cardiogenic-shock-revasc",
    topicId: "acute-coronary-syndrome",
    stem: "A 66-year-old female presents with acute anterior STEMI complicated by severe cardiogenic shock (MAP 55, CI 1.6 L/min/m2). According to the SHOCK and CULPRIT-SHOCK landmark trials, what is the recommended revascularization strategy?",
    options: [
      { id: "a", text: "Immediate medical stabilization with thrombolytics followed by elective CABG at 48 hours.", isCorrect: false },
      { id: "b", text: "Immediate PCI of the culprit-lesion only during the acute index procedure.", isCorrect: true },
      { id: "c", text: "Immediate complete multivessel PCI of all non-culprit stenoses during the index procedure.", isCorrect: false },
      { id: "d", text: "Routine prophylactic placement of an IABP prior to any coronary angiography.", isCorrect: false }
    ],
    explanation: "The CULPRIT-SHOCK trial (NEJM 2017) demonstrated that culprit-lesion-only PCI significantly reduced 30-day mortality and renal replacement therapy compared with immediate multivessel PCI in acute myocardial infarction with cardiogenic shock. Immediate revascularization of the culprit is mandatory (SHOCK trial).",
    difficulty: "advanced",
    category: "Management",
    references: [
      "Thiele H, et al. CULPRIT-SHOCK Trial. NEJM 2017; Hochman JS, et al. SHOCK Trial. NEJM 1999."
    ]
  }
];
