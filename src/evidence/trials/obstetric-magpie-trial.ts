import type { Trial } from "@/content-types";

export const obstetricMagpieTrial: Trial = {
  id: "obstetric-magpie-trial",
  name: "Magpie",
  title: "Do Women with Pre-eclampsia, and Their Babies, Benefit from Magnesium Sulphate? The Magpie Trial: A Randomised Placebo-Controlled Trial",
  year: 2002,
  journal: "Lancet",
  pmid: "12057549",
  doi: "10.1016/s0140-6736(02)08778-0",
  studyType: "rct",
  significance: "landmark",
  design: "International, multicenter, randomized, double-blind, placebo-controlled trial",
  clinicalQuestion:
    "Does magnesium sulfate prevent eclamptic seizures and reduce maternal/fetal mortality in women with preeclampsia?",
  population: "10,141 pregnant or postpartum women with preeclampsia across 33 countries",
  intervention: "Intravenous/intramuscular magnesium sulfate regimen (n = 5071)",
  comparator: "Matching placebo infusion (n = 5070)",
  primaryOutcome: "Occurrence of eclampsia and maternal/perinatal death",
  result: {
    summary:
      "Magnesium sulfate reduced the risk of eclampsia by 58% (0.8% vs 1.9%, RR 0.42, 95% CI 0.29–0.60, P < 0.0001) and significantly reduced maternal mortality (RR 0.55, 95% CI 0.26–1.14), with NNT of 63 in severe preeclampsia.",
    effectSize: "RR 0.42 (95% CI 0.29–0.60)",
    pValue: "<0.0001",
  },
  resultDirection: "positive",
  whatItFound:
    "Magnesium sulfate dramatically halves the incidence of eclampsia in preeclampsia without significant maternal or fetal harm.",
  clinicalInterpretation:
    "Definitive landmark trial establishing magnesium sulfate as the global standard of care for seizure prophylaxis and treatment in preeclampsia with severe features.",
  currentGuidelinePosition:
    "ACOG, WHO, and SMFM give an unambiguous Class 1 / strong recommendation for magnesium sulfate in preeclampsia with severe features.",
  relatedTopicIds: ["obstetric-critical-care", "status-epilepticus", "hypertensive-emergencies"],
  certainty: "high",
};
