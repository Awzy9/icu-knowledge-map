import type { Flashcard } from "@/content-types";

export const valvularHeartDiseaseEndocarditisFlashcards: readonly Flashcard[] = [
  {
    id: "valvular.fc.critical-as-hemodynamic-targets",
    topicId: "valvular-heart-disease-endocarditis",
    question: "What are the core hemodynamic targets in critical aortic stenosis in the ICU?",
    answer: "1. Maintain high-normal SVR with phenylephrine or norepinephrine (preserves diastolic coronary perfusion); 2. Maintain strict sinus rhythm at 60–80 bpm; 3. Maintain adequate preload in a non-compliant LV.",
    explanation: "Coronary perfusion pressure equals Diastolic Arterial Pressure minus LVEDP. Because LVEDP is high in severe LVH, sudden vasodilation or tachycardia causes immediate subendocardial ischemia and arrest.",
    difficulty: "basic",
    category: "Physiology",
    references: ["Otto CM et al. 2020 ACC/AHA Valvular Heart Disease Guideline."]
  },
  {
    id: "valvular.fc.as-inodilator-danger",
    topicId: "valvular-heart-disease-endocarditis",
    question: "Why are pure vasodilators and inodilators (milrinone/nitroprusside) dangerous in critical aortic stenosis?",
    answer: "They cause peripheral vasodilation without increasing stroke volume through the fixed anatomical valve stenosis, precipitating profound hypotension, coronary hypoperfusion, and ventricular fibrillation.",
    explanation: "Forward cardiac output cannot increase across a fixed orifice (< 0.8–1.0 cm2); drop in SVR leads directly to circulatory collapse.",
    difficulty: "intermediate",
    category: "Pitfalls",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "valvular.fc.acute-ar-vs-chronic-ar",
    topicId: "valvular-heart-disease-endocarditis",
    question: "How does acute severe aortic regurgitation differ hemodynamically and clinically from chronic AR?",
    answer: "In acute AR, massive regurgitant volume enters a normal-sized, non-compliant LV -> sharp spike in LVEDP exceeding LA pressure -> premature mitral valve closure, flash pulmonary edema, and narrow pulse pressure with a soft/silent murmur.",
    explanation: "Chronic AR allows eccentric LV dilation with wide pulse pressure, whereas acute AR causes sudden low-output cardiogenic shock and pulmonary capillary rupture.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: ["Otto CM et al. 2020 ACC/AHA Valvular Heart Disease Guideline."]
  },
  {
    id: "valvular.fc.iabp-in-ar-contraindication",
    topicId: "valvular-heart-disease-endocarditis",
    question: "Why is an Intra-Aortic Balloon Pump (IABP) absolutely contraindicated in aortic regurgitation?",
    answer: "Diastolic balloon inflation in the ascending aorta directly forces massive retrograde blood flow across the incompetent aortic valve into the left ventricle, causing fatal LV distension and pulmonary edema.",
    explanation: "Counterpulsation augments diastolic root pressure, which is lethal when the aortic valve cannot close.",
    difficulty: "basic",
    category: "Contraindication",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "valvular.fc.acute-mr-mechanics-v-waves",
    topicId: "valvular-heart-disease-endocarditis",
    question: "What waveform finding on a pulmonary artery catheter suggests acute severe mitral regurgitation?",
    answer: "Giant systolic v-waves (often > 50–70 mmHg) on the pulmonary capillary wedge pressure (PCWP) tracing.",
    explanation: "A non-compliant left atrium receives massive systolic regurgitation, creating huge pressure spikes transmitted directly into pulmonary capillaries.",
    difficulty: "intermediate",
    category: "Monitoring",
    references: ["Braunwald's Heart Disease 12th Ed."]
  },
  {
    id: "valvular.fc.ease-trial-ie-surgery-timing",
    topicId: "valvular-heart-disease-endocarditis",
    question: "What did the landmark EASE trial (NEJM 2012) establish regarding surgical timing in infective endocarditis with large vegetations?",
    answer: "Early surgery (<= 48 hours) significantly reduced the composite endpoint of death and embolic events (3% vs 23%, P = 0.03) without increasing operative mortality in patients with vegetations > 10 mm and severe valve disease.",
    explanation: "Kang et al. proved that urgent surgery prevents catastrophic embolic strokes and annular destruction compared to conventional medical therapy.",
    difficulty: "advanced",
    category: "Evidence",
    references: ["Kang DH et al. EASE Trial. NEJM 2012."]
  },
  {
    id: "valvular.fc.ie-stroke-surgery-timing",
    topicId: "valvular-heart-disease-endocarditis",
    question: "In infective endocarditis with acute neurological complications, what are the surgery timing guidelines for ischemic stroke vs intracranial hemorrhage?",
    answer: "After acute ischemic stroke, early surgery (within 48–72 hours) is indicated if severe heart failure or uncontrolled infection is present; after intracranial hemorrhage (ICH), surgery should be delayed >= 3–4 weeks if stable.",
    explanation: "Cardiopulmonary bypass heparinization risks fatal hemorrhagic transformation after ICH, but does not increase hemorrhagic risk after non-massive ischemic stroke.",
    difficulty: "advanced",
    category: "Guideline",
    references: ["Delgado V et al. 2023 ESC Guidelines on Endocarditis."]
  },
  {
    id: "valvular.fc.troia-prosthetic-thrombosis",
    topicId: "valvular-heart-disease-endocarditis",
    question: "What is the low-dose ultra-slow fibrinolysis protocol for obstructive mechanical valve thrombosis (TROIA/PROMETHEUS)?",
    answer: "Recombinant tPA 25 mg infused intravenously over 25 hours without an initial bolus.",
    explanation: "Achieves ~90% thrombus resolution with <2% major bleeding and 0.5% mortality, vastly safer than accelerated high-dose regimens.",
    difficulty: "advanced",
    category: "Pharmacotherapy",
    references: ["Ozkan M et al. JACC 2013."]
  },
  {
    id: "valvular.fc.mitral-stenosis-tachycardia",
    topicId: "valvular-heart-disease-endocarditis",
    question: "Why does tachycardia precipitate sudden flash pulmonary edema in mitral stenosis?",
    answer: "Transmitral filling occurs exclusively in diastole; shortening diastolic filling time causes an exponential rise in LA pressure: LAP = Flow^2 / Filling Time^2.",
    explanation: "Heart rate acceleration Drastically increases left atrial and pulmonary venous hydrostatic pressures.",
    difficulty: "intermediate",
    category: "Physiology",
    references: ["Braunwald's Heart Disease 12th Ed."]
  },
  {
    id: "valvular.fc.periannular-abscess-telemetry",
    topicId: "valvular-heart-disease-endocarditis",
    question: "What telemetry finding in a patient with aortic valve endocarditis signals periannular root abscess formation?",
    answer: "New-onset PR interval prolongation, bundle branch block, or complete AV block.",
    explanation: "Infection is extending through the aortic annulus into the membranous septum and the AV conduction axis, requiring emergency surgical root debridement.",
    difficulty: "basic",
    category: "Monitoring",
    references: ["Delgado V et al. 2023 ESC Guidelines on Endocarditis."]
  }
];
