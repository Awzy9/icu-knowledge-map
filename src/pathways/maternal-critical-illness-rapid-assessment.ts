import type { Pathway } from "@/content-types";

export const maternalCriticalIllnessRapidAssessment: Pathway = {
  id: "maternal-critical-illness-rapid-assessment",
  slug: "maternal-critical-illness-rapid-assessment",
  title: "Maternal Critical Illness Rapid Assessment",
  oneLiner: "Urgent maternal stabilization, left uterine displacement, syndromic differentiation, and multidisciplinary escalation.",
  startingProblem: "Critically Ill Pregnant or Postpartum Patient",
  relatedTopicIds: [
    "obstetric-critical-care",
    "bleeding",
    "pulmonary-embolism",
    "sepsis",
    "cardiogenic-shock",
    "dic",
    "acute-liver-failure",
    "cardiac-arrest-post-arrest",
  ],
  flow: {
    id: "trigger-maternal-collapse",
    label: "Trigger: Pregnant (>= 20w) or Postpartum Patient in Shock, Respiratory Failure, Hypertensive Crisis, or Seizure",
    kind: "step",
    role: "assessment",
    detail: "Immediate Left Uterine Displacement (LUD), high-flow O2, large-bore IV access, arterial line, and fetal heart rate check if viable.",
    topicId: "obstetric-critical-care",
    children: [
      {
        id: "syndromic-differentiation-branch",
        label: "Differentiate Dominant Maternal Syndrome",
        kind: "branch",
        role: "assessment",
        detail: "Hypertension/Seizure vs Massive Hemorrhage vs Maternal Sepsis vs PE vs PPCM/AFE.",
        children: [
          {
            id: "preeclampsia-eclampsia-protocol",
            label: "Severe Preeclampsia / Eclampsia: Magnesium Sulfate + IV Labetalol/Nicardipine",
            kind: "step",
            role: "intervention",
            detail: "Magnesium 4–6 g load then 1–2 g/h; target BP 140–150/90–100 mmHg; deliver when stabilized.",
          },
          {
            id: "obstetric-hemorrhage-protocol",
            label: "Massive Postpartum Hemorrhage: Obstetric MTP + TXA 1 g IV + Cryoprecipitate + Uterotonics",
            kind: "step",
            role: "intervention",
            detail: "TXA within 3 hours (WOMAN trial); maintain fibrinogen > 200 mg/dL; intrauterine balloon tamponade / surgery.",
          },
          {
            id: "maternal-septic-shock-protocol",
            label: "Maternal Septic Shock: 1-Hour Broad-Spectrum Antibiotics (Pip-Tazo + Vanco + Clindamycin)",
            kind: "step",
            role: "intervention",
            detail: "Norepinephrine for MAP >= 65 mmHg; emergency surgical source control for necrotizing myometritis / chorioamnionitis.",
          },
          {
            id: "maternal-arrest-resuscitative-hysterotomy",
            label: "Maternal Cardiac Arrest: ACLS + Manual LUD -> Resuscitative Hysterotomy at Minute 4–5",
            kind: "step",
            role: "intervention",
            detail: "If no ROSC within 4 minutes in pregnancy >= 20 weeks, perform immediate bedside delivery on site by minute 5.",
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "supine-cpr-trap", text: "Performing CPR on a supine pregnant patient without Left Uterine Displacement reduces cardiac output by 40%." },
    { id: "hysterotomy-delay-flag", text: "Delaying Resuscitative Hysterotomy beyond 4–5 minutes of cardiac arrest drastically reduces maternal and fetal survival." },
  ],
};
