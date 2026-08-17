import type { Trial } from "@/content-types";

export const obstetricChapTrial: Trial = {
  id: "obstetric-chap-trial",
  name: "CHAP",
  title: "Treatment for Mild Chronic Hypertension during Pregnancy",
  year: 2022,
  journal: "N Engl J Med",
  pmid: "35363951",
  doi: "10.1056/NEJMoa2201295",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, pragmatic open-label trial",
  clinicalQuestion:
    "Does treating mild chronic hypertension in pregnancy to target blood pressure <140/90 mmHg reduce adverse pregnancy outcomes without impairing fetal growth?",
  population: "2408 pregnant women with mild chronic hypertension (blood pressure <160/100 mmHg)",
  intervention: "Antihypertensive therapy (labetalol or nifedipine) targeting BP < 140/90 mmHg (n = 1208)",
  comparator: "Standard care: no antihypertensive therapy unless severe hypertension (BP >= 160/105 mmHg) developed (n = 1200)",
  primaryOutcome: "Composite of preeclampsia with severe features, medically indicated preterm birth <35 weeks, placental abruption, or fetal/neonatal death",
  result: {
    summary:
      "Treatment to target <140/90 mmHg significantly lowered the primary composite outcome (30.2% vs 37.0%, RR 0.82, 95% CI 0.74–0.92, P < 0.001) without increasing small-for-gestational-age birth weight (11.2% vs 10.4%, P = 0.56).",
    effectSize: "RR 0.82 (95% CI 0.74–0.92)",
    pValue: "<0.001",
  },
  resultDirection: "positive",
  whatItFound:
    "Treating mild chronic hypertension during pregnancy to a target below 140/90 mmHg reduces severe adverse maternal and perinatal events without impairing fetal growth.",
  clinicalInterpretation:
    "Overturned decades of restrictive blood pressure management, defining blood pressure targets of <140/90 mmHg throughout pregnancy.",
  currentGuidelinePosition:
    "Adopted by ACOG and SMFM clinical guidance as the standard blood pressure target in pregnant patients.",
  relatedTopicIds: ["obstetric-critical-care", "hypertensive-emergencies"],
  certainty: "high",
};
