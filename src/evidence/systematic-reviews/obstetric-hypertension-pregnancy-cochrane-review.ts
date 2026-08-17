import type { SystematicReview } from "@/content-types";

export const obstetricHypertensionPregnancyCochraneReview: SystematicReview = {
  id: "obstetric-hypertension-pregnancy-cochrane-review",
  title: "Antihypertensive Drug Therapy for Mild to Moderate Hypertension during Pregnancy",
  year: 2018,
  authorsOrGroup: "Abalos E, et al. (Cochrane Pregnancy and Childbirth Group)",
  pmid: "30277579",
  doi: "10.1002/14651858.CD002252.pub4",
  studiesIncluded: 65,
  summary:
    "Cochrane systematic review of 65 randomized trials including 5,348 women evaluating blood pressure targets and antihypertensive drug classes in pregnancy-induced and chronic hypertension.",
  conclusion:
    "Treating mild to moderate hypertension in pregnancy halves the risk of developing severe hypertension (RR 0.50, 95% CI 0.41–0.61), maternal hospital admission, and preeclampsia with severe features without increasing fetal growth restriction or adverse perinatal outcomes.",
  certainty: "high",
  relatedTopicIds: ["obstetric-critical-care", "hypertensive-emergencies"],
};
