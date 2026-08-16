import type { SystematicReview } from "@/content-types";

export const ardsNmbMetaAnalysis: SystematicReview = {
  id: "ards-nmb-meta-analysis",
  title: "Neuromuscular Blocking Agents in Moderate-to-Severe ARDS: A Meta-Analysis",
  year: 2020,
  authorsOrGroup: "Cochrane Emergency and Critical Care Group",
  studiesIncluded: 7,
  summary:
    "Pooled randomized trials of early neuromuscular blockade in moderate-to-severe ARDS, spanning the earlier ACURASYS-era trials and the larger, more recent ROSE trial, which used a lighter-sedation comparator.",
  conclusion:
    "When trials are pooled, early neuromuscular blockade shows no clear mortality benefit overall, and the effect estimate is highly sensitive to whether the sedation strategy used in the comparator arm is light or deep — the studies are not answering quite the same clinical question, which limits how confidently they can be combined.",
  certainty: "low",
  relatedTopicIds: ["ards"],
};
