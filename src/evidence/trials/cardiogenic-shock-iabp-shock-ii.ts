import type { Trial } from "@/content-types";

export const cardiogenicShockIabpShockIi: Trial = {
  id: "cardiogenic-shock-iabp-shock-ii",
  name: "IABP-SHOCK II",
  title: "Intraaortic Balloon Support for Myocardial Infarction with Cardiogenic Shock",
  year: 2012,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1208410",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, open-label trial.",
  clinicalQuestion: "Does routine intra-aortic balloon pump (IABP) support improve survival in MI-related cardiogenic shock undergoing early revascularization?",
  population: "600 patients with cardiogenic shock complicating acute MI, undergoing early revascularization.",
  intervention: "IABP placement.",
  comparator: "No IABP (standard medical therapy).",
  primaryOutcome: "30-day all-cause mortality.",
  result: {
    summary: "No significant difference in 30-day mortality; long-term follow-up to 6 years confirmed no mortality benefit.",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "Routine IABP use did not reduce 30-day mortality in patients with MI-related cardiogenic shock undergoing early revascularization, despite prior registry data and a class I guideline recommendation supporting its use.",
  clinicalInterpretation:
    "This trial reversed a previously guideline-endorsed practice that had been based mainly on registry and observational data — a clear example of randomized evidence overturning weaker prior evidence. IABP is no longer used routinely for MI-related cardiogenic shock.",
  currentGuidelinePosition:
    "Current guidelines no longer give a strong/routine recommendation for IABP in MI-related cardiogenic shock, reflecting this trial.",
  limitations: [
    "Open-label design.",
    "Restricted to MI-related cardiogenic shock with early revascularization; does not address IABP use in other cardiogenic shock etiologies.",
  ],
  relatedTopicIds: ["cardiogenic-shock"],
  certainty: "high",
};
