import type { ClinicalProblem } from "@/content-types";

export const criticallyIllPregnantPostpartumPatient: ClinicalProblem = {
  id: "critically-ill-pregnant-postpartum-patient",
  slug: "critically-ill-pregnant-postpartum-patient",
  title: "Critically Ill Pregnant or Postpartum Patient",
  category: "hemodynamic",
  oneLiner: "Rapid syndromic differentiation, maternal stabilization, and multidisciplinary escalation in acute obstetric critical illness.",
  relatedTopicIds: [
    "obstetric-critical-care",
    "bleeding",
    "pulmonary-embolism",
    "sepsis",
    "cardiogenic-shock",
    "dic",
    "acute-liver-failure",
    "cardiac-arrest-post-arrest",
    "hypertensive-emergencies",
    "status-epilepticus",
  ],
  body: [
    {
      type: "paragraph",
      text: "The critically ill pregnant or postpartum patient presents unique physiological challenges. Maternal resuscitation is the primary driver of fetal survival. Normal pregnancy baseline values (PaCO2 28–32 mmHg, creatinine 0.4–0.6 mg/dL) must guide clinical interpretation, and aortocaval compression must be relieved immediately.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Resuscitation Invariant: Never manage a pregnant patient (>= 20 weeks) flat supine. Perform continuous manual Left Uterine Displacement (LUD) to relieve inferior vena cava compression and restore venous return.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. MATERNAL STABILIZATION & RESCUSCITATION",
          value: "• Aortocaval Decompression: Manual Left Uterine Displacement (LUD) or 15–30 degree left lateral tilt.\n• Airway Management: Friable, edematous mucosa; use smaller ETT (6.5–7.0 mm), rapid desaturation due to low FRC; always use videolaryngoscopy.\n• Blood Gas Target: Normal pregnancy PaCO2 is 28–32 mmHg. A PaCO2 of 40 mmHg indicates severe ventilatory failure.",
        },
        {
          label: "2. RAPID SYNDROMIC DIFFERENTIATION",
          value: "• Hypertensive Crisis / Eclampsia: SBP >= 160 or DBP >= 110 with seizures or end-organ injury -> Magnesium sulfate (4–6 g load then 1–2 g/h) + IV Labetalol/Nicardipine.\n• Massive Obstetric Hemorrhage: Postpartum bleeding -> Obstetric MTP (1:1:1) + Tranexamic Acid (1 g IV <= 3h per WOMAN trial) + Cryoprecipitate (target fibrinogen > 200 mg/dL) + Uterotonics.\n• Sepsis & Septic Shock: Group A Strep toxic shock, endometritis, chorioamnionitis -> 1-hour broad-spectrum antibiotics (Pip-Tazo + Vanco + Clindamycin) + Norepinephrine + urgent source control.\n• Acute Pulmonary Embolism: Severe dyspnea/shock -> Pregnancy YEARS algorithm -> CTPA (fetal radiation < 0.1 mGy) -> Therapeutic LMWH or systemic thrombolysis for massive shock.\n• Amniotic Fluid Embolism (AFE): Anaphylactoid collapse, acute RV failure, fulminant DIC -> High-flow O2, vasopressors/inotropes, A-OK regimen, MTP.\n• Acute Fatty Liver of Pregnancy (AFLP): Profound hypoglycemia, encephalopathy, coagulopathy -> IV dextrose + immediate emergency delivery.",
        },
        {
          label: "3. MULTIDISCIPLINARY TEAM & DELIVERY DECISION",
          value: "• Immediate Assembly: Critical Care, Maternal-Fetal Medicine (MFM), Obstetric Anesthesiology, and Neonatology.\n• Resuscitative Hysterotomy: In maternal cardiac arrest >= 20 weeks gestation, if no ROSC within 4 minutes of CPR, perform immediate bedside hysterotomy/delivery on site by minute 5.",
        },
      ],
    },
  ],
};
