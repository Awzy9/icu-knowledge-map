import type { Trial } from "@/content-types";

export const cardiogenicShockShockTrial: Trial = {
  id: "cardiogenic-shock-shock-trial",
  name: "SHOCK",
  title: "Early Revascularization in Acute Myocardial Infarction Complicated by Cardiogenic Shock",
  year: 1999,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJM199908263410901",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial.",
  clinicalQuestion: "Does emergency revascularization improve survival compared with initial medical stabilization in cardiogenic shock complicating acute MI?",
  population: "302 patients with cardiogenic shock due to left ventricular failure complicating acute MI.",
  intervention: "Emergency revascularization (PCI or CABG).",
  comparator: "Initial medical stabilization, with delayed revascularization if the patient improved.",
  primaryOutcome: "All-cause mortality at 30 days.",
  secondaryOutcomes: ["6-month mortality."],
  result: {
    summary: "No significant difference in 30-day mortality, but a significant survival benefit with early revascularization by 6 months.",
  },
  resultDirection: "positive",
  whatItFound:
    "Emergency revascularization did not significantly reduce mortality at 30 days, but the survival curves separated by 6 months in favor of early revascularization, establishing it as standard of care.",
  clinicalInterpretation:
    "SHOCK established emergency revascularization as the standard approach to MI-related cardiogenic shock, based primarily on its longer-term (6-month) survival benefit rather than a significant 30-day effect — an important nuance often lost in shorthand summaries of the trial.",
  currentGuidelinePosition:
    "Emergency revascularization for MI-related cardiogenic shock remains standard of care in current ACC/AHA guidance, built on this trial.",
  limitations: [
    "Underpowered relative to its original target enrollment.",
    "30-day primary outcome was not statistically significant; the guideline-shaping result is the 6-month secondary finding.",
  ],
  relatedTopicIds: ["cardiogenic-shock"],
  certainty: "moderate",
};
