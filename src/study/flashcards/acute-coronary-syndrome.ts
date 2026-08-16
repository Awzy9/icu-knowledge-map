import type { Flashcard } from "@/content-types";

export const acuteCoronarySyndromeFlashcards: readonly Flashcard[] = [
  {
    "id": "acs.fc.stemi-door-to-balloon",
    "topicId": "acute-coronary-syndrome",
    "question": "What is the guideline-mandated Door-to-Balloon time target for primary PCI in STEMI?",
    "answer": "≤ 90 minutes from first medical contact at a PCI-capable facility (≤ 120 minutes if transfer is required).",
    "explanation": "Rapid mechanical reperfusion minimizes myocardial necrosis, preserves left ventricular ejection fraction, and reduces cardiogenic shock and death.",
    "difficulty": "basic",
    "category": "Guidelines",
    "references": [
      "ACC/AHA STEMI Guidelines 2023; ESC Guidelines 2023."
    ]
  },
  {
    "id": "acs.fc.stemi-equivalents",
    "topicId": "acute-coronary-syndrome",
    "question": "What ECG patterns represent 'STEMI Equivalents' requiring emergent catheterization?",
    "answer": "1. Sgarbossa criteria in LBBB/paced rhythm; 2. De Winter T-waves (LAD occlusion); 3. Wellens syndrome (critical proximal LAD stenosis); 4. Isolated posterior STEMI (ST depression V1–V3); 5. aVR ST-elevation with diffuse ST depression (LMCA/multivessel).",
    "explanation": "These patterns represent acute coronary occlusion despite the absence of classic convex ST elevation on standard 12-lead ECG.",
    "difficulty": "intermediate",
    "category": "Diagnosis",
    "references": [
      "ACC/AHA Expert Consensus on STEMI Equivalents 2022."
    ]
  },
  {
    "id": "acs.fc.sgarbossa-criteria-modified",
    "topicId": "acute-coronary-syndrome",
    "question": "What is the Modified Sgarbossa Rule for identifying acute MI in left bundle branch block (LBBB)?",
    "answer": "1. Concordant ST elevation ≥ 1 mm (5 pts); 2. Concordant ST depression ≥ 1 mm in V1–V3 (3 pts); 3. Excessively discordant ST elevation with ST/S ratio ≤ -0.25 (Smith rule).",
    "explanation": "Smith's modified rule replaces the arbitrary 5 mm discordant ST elevation criterion with a proportional ST/S ratio, boosting sensitivity to >90%.",
    "difficulty": "advanced",
    "category": "Diagnosis",
    "references": [
      "Smith SW et al. Diagnosis of ST-elevation myocardial infarction in the presence of left bundle branch block. Ann Emerg Med 2012."
    ]
  },
  {
    "id": "acs.fc.mechanical-complications-timing",
    "topicId": "acute-coronary-syndrome",
    "question": "What are the three classic mechanical complications of acute MI, and when do they typically occur?",
    "answer": "Free wall rupture, Ventricular Septal Rupture (VSR), and Acute Papillary Muscle Rupture (causing acute MR); typically occur 3 to 7 days post-MI.",
    "explanation": "Present with sudden catastrophic hemodynamic collapse, new harsh holosystolic murmur (VSR/MR), or cardiac tamponade (free wall rupture) requiring emergent bedside echocardiography and surgical intervention.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Irwin and Rippe's Intensive Care Medicine, 9th Edition."
    ]
  },
  {
    "id": "acs.fc.type1-vs-type2",
    "topicId": "acute-coronary-syndrome",
    "question": "What is the fundamental pathophysiological difference between Type 1 and Type 2 Myocardial Infarction?",
    "answer": "Type 1 is acute atherothrombotic plaque rupture or erosion. Type 2 is myocardial oxygen supply-demand mismatch (sepsis, tachyarrhythmia, severe anemia, hypotension) without acute plaque rupture.",
    "explanation": "Management fundamentally differs: Type 1 mandates emergent antiplatelet, anticoagulation, and invasive coronary revascularization; Type 2 requires treating the underlying physiological stressor.",
    "difficulty": "intermediate",
    "category": "Pathophysiology",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-coronary-syndrome"
    ]
  },
  {
    "id": "acs.fc.aortic-dissection-trap",
    "topicId": "acute-coronary-syndrome",
    "question": "Why is a Type A aortic dissection a lethal diagnostic trap in suspected inferior STEMI?",
    "answer": "Dissection flap extending into the right coronary artery (RCA) ostium causes acute inferior ST-elevation. Administering thrombolysis or dual antiplatelets is universally fatal.",
    "explanation": "Check bilateral arm blood pressures and pulse symmetry; perform bedside POCUS or urgent CTA if chest pain radiates to the back or is accompanied by severe tearing character.",
    "difficulty": "advanced",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-coronary-syndrome"
    ]
  },
  {
    "id": "acs.fc.mechanical-complications",
    "topicId": "acute-coronary-syndrome",
    "question": "What are the 3 major mechanical complications of acute MI that present with sudden cardiogenic shock 3-7 days post-infarction?",
    "answer": "1. Ventricular Septal Rupture (harsh holosystolic murmur with thrill); 2. Acute Mitral Regurgitation from papillary muscle rupture (apical systolic murmur and flash pulmonary edema); 3. Free Wall Rupture (sudden tamponade and PEA arrest).",
    "explanation": "All 3 represent surgical emergencies requiring immediate bedside echocardiography and emergent cardiac surgical repair.",
    "difficulty": "intermediate",
    "category": "Complications",
    "references": [
      "Clinical Guidelines and Landmark ICU Evidence in acute-coronary-syndrome"
    ]
  }
];
