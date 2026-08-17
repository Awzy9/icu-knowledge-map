import type { Trial } from "@/content-types";

export const neuromuscularGbsIvigPlexTrial: Trial = {
  id: "neuromuscular-gbs-ivig-plex-trial",
  name: "GBS IVIG vs PLEX",
  title: "Randomised Trial of Plasma Exchange, Intravenous Immunoglobulin, and Combined Treatments in Guillain-Barré Syndrome",
  year: 1997,
  journal: "Lancet",
  pmid: "9012797",
  doi: "10.1016/S0140-6736(96)06095-2",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial",
  clinicalQuestion:
    "Is IVIG equivalent to plasma exchange, and does combining both provide additional benefit in severe Guillain-Barré syndrome?",
  population: "383 adult patients with severe Guillain-Barré syndrome unable to walk unaided within 14 days of onset",
  intervention: "IVIG (0.4 g/kg/day for 5 days) alone or Plasma Exchange (5 exchanges) followed by IVIG",
  comparator: "Plasma Exchange alone (5 exchanges over 8–13 days)",
  primaryOutcome: "Change in disability scale grade at 4 weeks",
  result: {
    summary:
      "Mean disability grade improvement at 4 weeks was identical between IVIG (0.97) and Plasma Exchange (0.87, P = 0.67). Combining plasma exchange and IVIG conferred no significant additional benefit (1.10, P = 0.19).",
    effectSize: "Mean difference 0.10 (95% CI -0.10 to 0.33)",
    pValue: "0.67",
  },
  resultDirection: "positive",
  whatItFound:
    "IVIG has equivalent efficacy to plasma exchange in severe Guillain-Barré syndrome, and combining both modalities provides no added benefit.",
  clinicalInterpretation:
    "Establishes IVIG (2 g/kg total) and plasma exchange as equally efficacious first-line disease-modifying therapies, with IVIG preferred in many centers due to convenience and ease of administration in ICU.",
  currentGuidelinePosition:
    "Class 1 recommendation in AAN/EAN guidelines for either IVIG or plasma exchange in severe GBS.",
  relatedTopicIds: ["neuromuscular-critical-illness", "mechanical-ventilation"],
  certainty: "high",
};
