import type { Question } from "@/content-types";

export const obstetricCriticalCareQuestions: readonly Question[] = [
  {
    id: "ob.q.preeclampsia-antihypertensive-drug",
    topicId: "obstetric-critical-care",
    sectionId: "preeclampsia-severe-features-eclampsia",
    stem: "A 32-year-old primigravida at 34 weeks gestation presents with headache, visual blurring, and blood pressure 185/115 mmHg. In addition to starting magnesium sulfate for seizure prophylaxis, what is the best first-line intravenous antihypertensive regimen?",
    options: [
      { id: "a", text: "Intravenous Labetalol (20 mg bolus, then 40–80 mg q10–20 min) or Nicardipine infusion", isCorrect: true },
      { id: "b", text: "Sodium Nitroprusside infusion titrated to SBP < 120 mmHg", isCorrect: false },
      { id: "c", text: "Intravenous Enalaprilat (ACE inhibitor)", isCorrect: false },
      { id: "d", text: "Sublingual immediate-release Nifedipine 30 mg", isCorrect: false }
    ],
    explanation: "First-line IV agents for acute severe hypertension in pregnancy are IV labetalol, hydralazine, or nicardipine infusion (target SBP 140–150 mmHg within 30–60 min to prevent hemorrhagic stroke). Nitroprusside carries fetal cyanide toxicity risk, and ACE inhibitors/ARBs cause fetal renal dysgenesis.",
    difficulty: "basic",
    category: "Pharmacotherapy",
    references: ["ACOG Practice Bulletin No. 222."]
  },
  {
    id: "ob.q.woman-trial-txa-timing",
    topicId: "obstetric-critical-care",
    sectionId: "obstetric-hemorrhage-massive-transfusion",
    stem: "A 26-year-old woman develops massive postpartum hemorrhage (blood loss 1800 mL) 45 minutes after Cesarean delivery due to refractory uterine atony. In addition to uterotonics and blood products, what did the WOMAN trial prove regarding tranexamic acid?",
    options: [
      { id: "a", text: "Administering TXA 1 g IV within 3 hours significantly reduces death due to bleeding without increasing thromboembolic risk", isCorrect: true },
      { id: "b", text: "TXA is effective only if administered after 4 units of PRBCs have been transfused", isCorrect: false },
      { id: "c", text: "TXA increases venous thromboembolism rates in postpartum patients", isCorrect: false },
      { id: "d", text: "TXA eliminates the need for surgical uterine compression sutures", isCorrect: false }
    ],
    explanation: "The WOMAN trial (Lancet 2017) demonstrated that early IV tranexamic acid (1 g IV over 10 min, repeatable after 30 min) reduces maternal bleeding mortality by ~31% when given within 3 hours of delivery (RR 0.69, P = 0.008) without increasing thrombotic complications.",
    difficulty: "basic",
    category: "Evidence",
    references: ["WOMAN Trial Collaborators. Lancet 2017."]
  },
  {
    id: "ob.q.resuscitative-hysterotomy-time-rule",
    topicId: "obstetric-critical-care",
    sectionId: "maternal-cardiac-arrest-resuscitative-hysterotomy",
    stem: "A 29-year-old woman at 32 weeks gestation suffers a witnessed cardiac arrest in the ICU. Standard CPR and manual Left Uterine Displacement are ongoing. At 4 minutes of resuscitation, there is no ROSC. What is the immediate life-saving intervention?",
    options: [
      { id: "a", text: "Perform immediate bedside Resuscitative Hysterotomy (Perimortem Cesarean Delivery) on site, aiming for delivery by minute 5", isCorrect: true },
      { id: "b", text: "Transport the patient immediately to the operating room for sterile Cesarean section", isCorrect: false },
      { id: "c", text: "Continue standard chest compressions and administer double-dose epinephrine", isCorrect: false },
      { id: "d", text: "Place the patient in the Trendelenburg position to improve cerebral blood flow", isCorrect: false }
    ],
    explanation: "If no ROSC occurs within 4 minutes in a pregnant patient >= 20 weeks, bedside resuscitative hysterotomy must be initiated immediately at the site of arrest to achieve delivery by minute 5. Decompressing the IVC/aorta increases maternal CPR cardiac output by > 30–60% and provides the best chance of maternal and fetal survival.",
    difficulty: "basic",
    category: "Resuscitation",
    references: ["2020 AHA Scientific Statement on Cardiac Arrest in Pregnancy."]
  },
  {
    id: "ob.q.afe-anaphylactoid-collapse",
    topicId: "obstetric-critical-care",
    sectionId: "amniotic-fluid-embolism",
    stem: "During active labor, a 34-year-old woman suddenly develops acute severe dyspnea, cyanosis, seizure, and pulseless electrical activity arrest. Resuscitation achieves ROSC, but she develops massive bleeding from IV puncture sites with fibrinogen < 80 mg/dL and severe RV dilation on POCUS. What is the diagnosis?",
    options: [
      { id: "a", text: "Amniotic Fluid Embolism (AFE / Anaphylactoid Syndrome of Pregnancy)", isCorrect: true },
      { id: "b", text: "Acute pulmonary thromboembolism", isCorrect: false },
      { id: "c", text: "Peripartum cardiomyopathy", isCorrect: false },
      { id: "d", text: "Eclamptic seizure with aspiration pneumonia", isCorrect: false }
    ],
    explanation: "The classic triad of Amniotic Fluid Embolism is: (1) sudden profound hypoxemic respiratory failure, (2) cardiovascular collapse with acute RV failure, and (3) fulminant consumptive DIC with severe hypofibrinogenemia.",
    difficulty: "intermediate",
    category: "Diagnosis",
    references: ["Chest Critical Care Medicine in Pregnancy Series."]
  },
  {
    id: "ob.q.pregnancy-abg-respiratory-acidosis",
    topicId: "obstetric-critical-care",
    sectionId: "physiology",
    stem: "A 24-year-old pregnant woman at 28 weeks gestation with severe asthma exacerbation has an ABG: pH 7.36, PaCO2 39 mmHg, PaO2 75 mmHg, HCO3 21 mEq/L. How should this blood gas be interpreted in the context of pregnancy?",
    options: [
      { id: "a", text: "Severe respiratory acidosis and impending respiratory exhaustion; normal pregnancy PaCO2 is 28–32 mmHg", isCorrect: true },
      { id: "b", text: "Completely normal physiological acid-base status", isCorrect: false },
      { id: "c", text: "Compensated metabolic alkalosis", isCorrect: false },
      { id: "d", text: "Mild hyperventilation with respiratory alkalosis", isCorrect: false }
    ],
    explanation: "Normal pregnancy is characterized by chronic respiratory alkalosis (PaCO2 28–32 mmHg) driven by progesterone. A PaCO2 of 39 mmHg represents marked CO2 retention, severe diaphragmatic fatigue, and impending respiratory arrest in a pregnant patient.",
    difficulty: "basic",
    category: "Physiology",
    references: ["Irwin & Rippe's Intensive Care Medicine 9th Ed."]
  },
  {
    id: "ob.q.aflp-swansea-dextrose",
    topicId: "obstetric-critical-care",
    sectionId: "acute-fatty-liver-pregnancy",
    stem: "A 27-year-old woman at 36 weeks gestation presents with vomiting, jaundice, encephalopathy, blood glucose 38 mg/dL, creatinine 2.1 mg/dL, AST 320 U/L, and prolonged PT/INR. What are the two immediate critical therapeutic priorities?",
    options: [
      { id: "a", text: "Continuous high-dose IV dextrose infusion to prevent fatal hypoglycemia AND immediate emergency delivery", isCorrect: true },
      { id: "b", text: "Therapeutic plasma exchange AND expectant outpatient management", isCorrect: false },
      { id: "c", text: "High-dose IV methylprednisolone AND delay delivery until 39 weeks", isCorrect: false },
      { id: "d", text: "Aggressive loop diuresis AND fluid restriction", isCorrect: false }
    ],
    explanation: "Acute Fatty Liver of Pregnancy (AFLP) causes life-threatening microvesicular hepatic failure with profound hypoglycemia. Immediate continuous IV dextrose and emergency delivery regardless of gestational age are life-saving.",
    difficulty: "intermediate",
    category: "Management",
    references: ["ACOG Practice Bulletin 222."]
  }
];
