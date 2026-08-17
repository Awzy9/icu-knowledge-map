import type { Trial } from "@/content-types";

export const obstetricWomanTrial: Trial = {
  id: "obstetric-woman-trial",
  name: "WOMAN",
  title: "Effect of Early Tranexamic Acid on Death, Hysterectomy, and Other Morbidities in Women with Post-partum Haemorrhage: An International, Randomised, Double-Blind, Placebo-Controlled Trial",
  year: 2017,
  journal: "Lancet",
  pmid: "28456509",
  doi: "10.1016/S0140-6736(17)30638-4",
  studyType: "rct",
  significance: "landmark",
  design: "International, randomized, double-blind, placebo-controlled trial",
  clinicalQuestion:
    "Does early intravenous tranexamic acid reduce mortality and hysterectomy in postpartum hemorrhage?",
  population: "20,060 women with clinically diagnosed postpartum hemorrhage after vaginal delivery or caesarean section across 21 countries",
  intervention: "Intravenous tranexamic acid 1 g over 10 minutes, with second 1 g dose if bleeding continued at 30 min (n = 10,051)",
  comparator: "Matching placebo (n = 10,009)",
  primaryOutcome: "Maternal death from all causes or hysterectomy within 42 days",
  result: {
    summary:
      "Tranexamic acid significantly reduced death due to bleeding (1.5% vs 1.9%, RR 0.81, 95% CI 0.65–1.00, P = 0.045), with maximal benefit when administered within 3 hours of delivery (RR 0.69, 95% CI 0.52–0.91, P = 0.008), without increasing thromboembolic events.",
    effectSize: "RR 0.81 (95% CI 0.65–1.00); <=3h RR 0.69",
    pValue: "0.045",
  },
  resultDirection: "positive",
  whatItFound:
    "Early administration of tranexamic acid within 3 hours of delivery significantly reduces maternal death from postpartum hemorrhage without increasing adverse thromboembolic complications.",
  clinicalInterpretation:
    "Establishes early TXA (1 g IV) as an essential component of obstetric massive hemorrhage resuscitation protocols.",
  currentGuidelinePosition:
    "WHO, ACOG, and SMFM guidelines recommend early IV tranexamic acid in all women with postpartum hemorrhage.",
  relatedTopicIds: ["obstetric-critical-care", "bleeding", "transfusion", "dic"],
  certainty: "high",
};
