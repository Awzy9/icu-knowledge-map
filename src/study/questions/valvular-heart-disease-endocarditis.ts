import type { Question } from "@/content-types";

export const valvularHeartDiseaseEndocarditisQuestions: readonly Question[] = [
  {
    id: "valvular.q.critical-as-hypotension-pressor",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "critical-aortic-stenosis",
    stem: "An 82-year-old woman with known severe calcific aortic stenosis (valve area 0.6 cm2, mean gradient 52 mmHg) is admitted to the ICU with urosepsis. Her blood pressure drops to 78/42 mmHg with heart rate 72 bpm in sinus rhythm. What is the most appropriate first-line vasopressor to restore coronary perfusion pressure?",
    options: [
      { id: "a", text: "Phenylephrine or Norepinephrine infusion targeting high-normal diastolic blood pressure", isCorrect: true },
      { id: "b", text: "Milrinone infusion to enhance inotropic forward flow", isCorrect: false },
      { id: "c", text: "Dobutamine infusion at 15 mcg/kg/min", isCorrect: false },
      { id: "d", text: "Aggressive aggressive bolus of 3 liters 0.9% saline", isCorrect: false }
    ],
    explanation: "In critical aortic stenosis with concentric LVH, coronary perfusion pressure is critically dependent on maintaining systemic diastolic arterial pressure (CPP = DBP - LVEDP). Phenylephrine or norepinephrine restores vascular resistance without inducing tachycardia, preserving myocardial perfusion. Inodilators like milrinone cause peripheral vasodilation without overcoming fixed stenosis, inducing ventricular fibrillation.",
    difficulty: "basic",
    category: "Management",
    references: ["Otto CM et al. 2020 ACC/AHA Valvular Heart Disease Guideline."]
  },
  {
    id: "valvular.q.acute-mr-post-mi-murmur",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "acute-severe-mitral-regurgitation",
    stem: "On day 4 post-inferior STEMI, a 64-year-old man develops sudden profound dyspnea, bilateral alveolar infiltrates, and cardiogenic shock. Auscultation reveals a soft, short early systolic murmur at the apex. What is the underlying mechanical catastrophe?",
    options: [
      { id: "a", text: "Rupture of the posteromedial papillary muscle causing acute severe mitral regurgitation", isCorrect: true },
      { id: "b", text: "Ventricular septal rupture with left-to-right shunt", isCorrect: false },
      { id: "c", text: "Acute free wall rupture with pericardial tamponade", isCorrect: false },
      { id: "d", text: "Dynamic left ventricular outflow tract obstruction", isCorrect: false }
    ],
    explanation: "Posteromedial papillary muscle rupture occurs 3–7 days post-inferior MI due to its single blood supply from the posterior descending artery (RCA). Unlike chronic MR, the murmur is often soft or inaudible due to rapid equalization of LV and LA pressures in late systole. Immediate TEE and emergency surgical repair are indicated.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: ["Braunwald's Heart Disease 12th Ed."]
  },
  {
    id: "valvular.q.ease-trial-vegetation-surgery",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "infective-endocarditis",
    stem: "A 48-year-old man with native aortic valve Enterococcus faecalis endocarditis has completed 48 hours of IV ampicillin and ceftriaxone. Repeat TEE reveals severe aortic regurgitation and a mobile 14 mm vegetation on the non-coronary cusp. He is currently hemodynamically stable. Based on the EASE trial (NEJM 2012) and 2023 ESC guidelines, what is the best management strategy?",
    options: [
      { id: "a", text: "Urgent surgical valve replacement within 48 hours", isCorrect: true },
      { id: "b", text: "Continue antibiotics alone for 4 weeks and re-evaluate vegetation size", isCorrect: false },
      { id: "c", text: "Perform therapeutic anticoagulation with therapeutic heparin to prevent embolization", isCorrect: false },
      { id: "d", text: "Discharge on outpatient parenteral antibiotic therapy (OPAT)", isCorrect: false }
    ],
    explanation: "The EASE trial (Kang et al. NEJM 2012) proved that in left-sided IE with large vegetations (> 10 mm) and severe valve disease, early surgery (<= 48 hours) dramatically reduces embolic stroke and all-cause mortality (3% vs 23%, P = 0.03). ESC 2023 guidelines give early surgery a Class 1 recommendation.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["Kang DH et al. EASE Trial. NEJM 2012."]
  },
  {
    id: "valvular.q.prosthetic-thrombosis-prometheus",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "prosthetic-valve-emergencies",
    stem: "A 70-year-old woman with a mechanical mitral valve and subtherapeutic INR (1.4) presents with NYHA Class IV dyspnea and pulmonary edema. Cine-fluoroscopy and TEE show an obstructive mobile thrombus on the mechanical valve with mean gradient 18 mmHg. She is deemed extremely high risk for emergency open heart surgery. What is the evidence-based medical rescue regimen?",
    options: [
      { id: "a", text: "Ultra-slow infusion of low-dose recombinant tPA (25 mg over 25 hours without a bolus)", isCorrect: true },
      { id: "b", text: "High-dose bolus of 100 mg tPA over 2 hours", isCorrect: false },
      { id: "c", text: "Therapeutic subcutaneous enoxaparin monotherapy", isCorrect: false },
      { id: "d", text: "High-dose IV nitroglycerin infusion alone", isCorrect: false }
    ],
    explanation: "The TROIA / PROMETHEUS protocols (Ozkan et al. JACC 2013) proved that an ultra-slow low-dose tPA regimen (25 mg over 25 hours without bolus) achieves a 90% thrombus resolution rate with <2% major bleeding, making it the preferred rescue regimen in high-risk surgical candidates.",
    difficulty: "advanced",
    category: "Management",
    references: ["Ozkan M et al. JACC 2013."]
  },
  {
    id: "valvular.q.acute-ar-iabp-contraindication",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "acute-aortic-regurgitation",
    stem: "A 55-year-old man presents with acute cardiogenic shock and severe pulmonary edema. TEE confirms acute severe aortic regurgitation from a flail right coronary cusp. The fellow suggests placing an intra-aortic balloon pump (IABP) for mechanical circulatory support. What should be your response?",
    options: [
      { id: "a", text: "IABP is absolutely contraindicated because balloon inflation in diastole will worsen regurgitant volume into the LV and trigger arrest.", isCorrect: true },
      { id: "b", text: "IABP is indicated at 1:1 augmentation to reduce LV afterload.", isCorrect: false },
      { id: "c", text: "IABP should be set at 1:2 timing to prevent coronary ischemia.", isCorrect: false },
      { id: "d", text: "IABP should be combined with high-dose phenylephrine.", isCorrect: false }
    ],
    explanation: "IABP inflates during diastole to augment coronary perfusion pressure. In aortic regurgitation, this directly forces massive retrograde blood flow across the incompetent aortic valve into the left ventricle, causing acute catastrophic LV overdistension and pulmonary capillary rupture.",
    difficulty: "basic",
    category: "Contraindication",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "valvular.q.mitral-stenosis-af-rvr",
    topicId: "valvular-heart-disease-endocarditis",
    sectionId: "mitral-stenosis",
    stem: "A 38-year-old woman with severe rheumatic mitral stenosis (valve area 1.0 cm2) develops new-onset atrial fibrillation with rapid ventricular response (HR 155 bpm). She develops immediate tachypnea, pink frothy sputum, and SpO2 81%. What is the physiological mechanism of her flash pulmonary edema?",
    options: [
      { id: "a", text: "Tachycardia markedly shortens diastolic filling time, causing an exponential increase in left atrial pressure and pulmonary capillary flooding.", isCorrect: true },
      { id: "b", text: "Sudden development of severe tricuspid regurgitation.", isCorrect: false },
      { id: "c", text: "Acute loss of systemic vascular resistance.", isCorrect: false },
      { id: "d", text: "Coronary artery vasospasm induced by atrial fibrillation.", isCorrect: false }
    ],
    explanation: "Transmitral flow occurs only in diastole. As heart rate increases, diastolic filling time shortens disproportionately, forcing left atrial pressure to spike exponentially: LAP = Flow^2 / (Filling Time^2), producing immediate hydrostatic alveolar edema.",
    difficulty: "intermediate",
    category: "Physiology",
    references: ["Braunwald's Heart Disease 12th Ed."]
  }
];
