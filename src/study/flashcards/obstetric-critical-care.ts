import type { Flashcard } from "@/content-types";

export const obstetricCriticalCareFlashcards: readonly Flashcard[] = [
  {
    id: "ob.fc.pregnancy-normal-abg",
    topicId: "obstetric-critical-care",
    question: "What is the normal baseline arterial blood gas (ABG) in pregnancy, and why is PaCO2 40 mmHg abnormal?",
    answer: "Normal pregnancy ABG: PaCO2 28–32 mmHg, pH 7.40–7.45, HCO3 18–22 mEq/L. A PaCO2 of 40 mmHg indicates severe hypercapnia and impending respiratory arrest in a pregnant patient.",
    explanation: "Progesterone-induced hyperventilation creates a normal physiological respiratory alkalosis; non-pregnant 'normal' values represent acute ventilatory failure.",
    difficulty: "basic",
    category: "Physiology",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "ob.fc.left-uterine-displacement",
    topicId: "obstetric-critical-care",
    question: "Why must manual Left Uterine Displacement (LUD) be performed in pregnant patients >= 20 weeks during resuscitation?",
    answer: "Aortocaval compression by the gravid uterus compresses the IVC and aorta, reducing venous return by 30–40% and drastically reducing cardiac output during CPR.",
    explanation: "Perform continuous manual displacement of the uterus to the left; avoid whole-body tilt during active chest compressions.",
    difficulty: "basic",
    category: "Resuscitation",
    references: ["2020 AHA Scientific Statement on Cardiac Arrest in Pregnancy."]
  },
  {
    id: "ob.fc.magpie-trial-magnesium",
    topicId: "obstetric-critical-care",
    question: "What did the landmark Magpie trial (Lancet 2002) establish for preeclampsia?",
    answer: "Magnesium sulfate reduced the risk of eclampsia by 58% (0.8% vs 1.9%, RR 0.42, P < 0.0001) and significantly lowered maternal mortality.",
    explanation: "Established magnesium sulfate (4–6 g load then 1–2 g/h) as the international standard for seizure prophylaxis in preeclampsia with severe features.",
    difficulty: "basic",
    category: "Evidence",
    references: ["Magpie Trial Collaborative Group. Lancet 2002."]
  },
  {
    id: "ob.fc.woman-trial-txa",
    topicId: "obstetric-critical-care",
    question: "What were the primary findings of the WOMAN trial (Lancet 2017) regarding tranexamic acid in postpartum hemorrhage?",
    answer: "Tranexamic acid (1 g IV) significantly reduced death due to bleeding (RR 0.81, P = 0.045), with maximal benefit when administered within 3 hours of delivery (RR 0.69, P = 0.008), without increasing thromboembolism.",
    explanation: "Early TXA is an essential component of obstetric massive transfusion protocols.",
    difficulty: "intermediate",
    category: "Evidence",
    references: ["WOMAN Trial Collaborators. Lancet 2017."]
  },
  {
    id: "ob.fc.resuscitative-hysterotomy-timing",
    topicId: "obstetric-critical-care",
    question: "What is the time threshold for performing Resuscitative Hysterotomy (Perimortem Cesarean Delivery) in maternal cardiac arrest?",
    answer: "If there is no ROSC within 4 minutes of CPR in a pregnant patient >= 20 weeks gestation, initiate immediate bedside hysterotomy with delivery completed by minute 5.",
    explanation: "Emptying the uterus immediately relieves aortocaval compression, increasing maternal venous return and CPR cardiac output by > 30–60%, while rescuing a viable fetus.",
    difficulty: "basic",
    category: "Resuscitation",
    references: ["2020 AHA Scientific Statement on Cardiac Arrest in Pregnancy."]
  },
  {
    id: "ob.fc.hellp-vs-aflp",
    topicId: "obstetric-critical-care",
    question: "How is Acute Fatty Liver of Pregnancy (AFLP) distinguished clinically and biochemically from HELLP syndrome?",
    answer: "AFLP causes profound hypoglycemia, severe coagulopathy with low fibrinogen, marked hyperammonemia, and acute liver failure, meeting Swansea criteria (>= 6 of 14 features).",
    explanation: "HELLP syndrome features hemolysis, elevated transaminases, and thrombocytopenia with preserved glucose and normal PT/fibrinogen (unless DIC develops).",
    difficulty: "advanced",
    category: "Diagnosis",
    references: ["ACOG Practice Bulletin 222."]
  },
  {
    id: "ob.fc.antihypertensives-contraindicated-pregnancy",
    topicId: "obstetric-critical-care",
    question: "Which antihypertensives are strictly contraindicated in pregnancy, and what agents are first-line for severe hypertension?",
    answer: "Contraindicated: Nitroprusside (fetal cyanide poisoning) and ACE inhibitors / ARBs (fetal renal dysgenesis/fetotoxicity). First-line: IV Labetalol, Hydralazine, or Nicardipine infusion.",
    explanation: "Target SBP 140–150 and DBP 90–100 mmHg within 30–60 minutes to prevent maternal hemorrhagic stroke.",
    difficulty: "basic",
    category: "Pharmacotherapy",
    references: ["ACOG Practice Bulletin 222."]
  },
  {
    id: "ob.fc.ppcm-bromocriptine-anticoagulation",
    topicId: "obstetric-critical-care",
    question: "What disease-specific medical therapies are used in Peripartum Cardiomyopathy (PPCM) with severe LV dysfunction?",
    answer: "Bromocriptine (blocks 16-kDa prolactin cleavage fragment) PLUS mandatory therapeutic anticoagulation (due to high ventricular mural thrombus and embolic risk when LVEF <= 35%).",
    explanation: "ESC guidelines recommend bromocriptine combined with heparin/LMWH for severe acute PPCM.",
    difficulty: "advanced",
    category: "Pharmacotherapy",
    references: ["Regitz-Zagrosek V et al. 2018 ESC Pregnancy Guidelines."]
  },
  {
    id: "ob.fc.amniotic-fluid-embolism-triad",
    topicId: "obstetric-critical-care",
    question: "What is the classic clinical triad of Amniotic Fluid Embolism (AFE)?",
    answer: "1. Sudden profound hypoxemic respiratory failure; 2. Sudden cardiovascular collapse (acute RV failure progressing to LV shock); 3. Fulminant consumptive DIC with severe hemorrhage.",
    explanation: "Anaphylactoid syndrome triggered by fetal antigens entering maternal circulation; managed with aggressive supportive ICU care and obstetric MTP.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: ["Chest Critical Care Medicine in Pregnancy Series."]
  },
  {
    id: "ob.fc.ctpa-radiation-in-pregnancy",
    topicId: "obstetric-critical-care",
    question: "Why should CT Pulmonary Angiography (CTPA) never be withheld in a pregnant patient with suspected pulmonary embolism?",
    answer: "Fetal radiation from a CTPA is < 0.1 mGy (far below the 50 mGy teratogenic threshold), whereas untreated pulmonary embolism carries up to a 30% maternal mortality rate.",
    explanation: "Maternal diagnostic accuracy takes absolute priority; CTPA or V/Q scan is mandatory for suspected high-risk PE.",
    difficulty: "basic",
    category: "Safety",
    references: ["2018 ESC Guidelines for Cardiovascular Diseases in Pregnancy."]
  }
];
