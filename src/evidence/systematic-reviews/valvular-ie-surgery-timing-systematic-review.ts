import type { SystematicReview } from "@/content-types";

export const valvularIeSurgeryTimingSystematicReview: SystematicReview = {
  id: "valvular-ie-surgery-timing-systematic-review",
  title: "Early versus Delayed Surgery for Infective Endocarditis: A Systematic Review and Meta-Analysis",
  year: 2016,
  authorsOrGroup: "Anantha-Narayanan M, et al.",
  pmid: "27083236",
  studiesIncluded: 21,
  summary:
    "Meta-analysis of 21 studies evaluating >6,000 patients with left-sided infective endocarditis comparing early surgery (median <=7 days) versus delayed conventional management.",
  conclusion:
    "Early surgery was associated with a significant 40% reduction in all-cause mortality (OR 0.61, 95% CI 0.50–0.74, P < 0.001) and marked reduction in embolic events without increasing perioperative mortality in patients with heart failure, large vegetations, or uncontrolled infection.",
  certainty: "moderate",
  relatedTopicIds: ["valvular-heart-disease-endocarditis", "sepsis"],
};
