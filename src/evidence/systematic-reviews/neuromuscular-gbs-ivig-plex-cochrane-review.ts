import type { SystematicReview } from "@/content-types";

export const neuromuscularGbsIvigPlexCochraneReview: SystematicReview = {
  id: "neuromuscular-gbs-ivig-plex-cochrane-review",
  title: "Intravenous Immunoglobulin for Guillain-Barré Syndrome",
  year: 2014,
  authorsOrGroup: "Hughes RA, et al. (Cochrane Neuromuscular Group)",
  pmid: "25238327",
  doi: "10.1002/14651858.CD002063.pub6",
  studiesIncluded: 12,
  summary:
    "Cochrane systematic review and meta-analysis of 12 randomized trials involving 1,171 participants comparing IVIG with plasma exchange or supportive care in moderate to severe Guillain-Barré syndrome.",
  conclusion:
    "IVIG started within two weeks of onset hastens recovery as effectively as plasma exchange, with no significant difference in disability improvement, mortality, or time to ventilator liberation, while demonstrating greater treatment completion and fewer adverse events.",
  certainty: "high",
  relatedTopicIds: ["neuromuscular-critical-illness", "mechanical-ventilation"],
};
