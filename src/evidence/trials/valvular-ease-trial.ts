import type { Trial } from "@/content-types";

export const valvularEaseTrial: Trial = {
  id: "valvular-ease-trial",
  name: "EASE",
  title: "Early Surgery versus Conventional Treatment for Infective Endocarditis",
  year: 2012,
  journal: "N Engl J Med",
  pmid: "22738096",
  doi: "10.1056/NEJMoa1112854",
  studyType: "rct",
  significance: "landmark",
  design: "Prospective, randomized, open-label trial",
  clinicalQuestion:
    "Does early surgery (within 48 hours) reduce death and embolic events in severe left-sided infective endocarditis with large vegetations?",
  population: "120 patients with left-sided native valve infective endocarditis, severe valve disease, and large vegetations (>10 mm)",
  intervention: "Early surgery within 48 hours of randomization (n = 60)",
  comparator: "Conventional medical therapy with surgery only if indicated by clinical deterioration (n = 60)",
  primaryOutcome: "Composite of in-hospital death and embolic events within 6 weeks",
  result: {
    summary:
      "Early surgery significantly reduced the composite endpoint of death and embolic events (3% vs 23%, HR 0.10, 95% CI 0.01–0.82, P = 0.03), driven by a complete reduction in embolic events (0% vs 21%, P = 0.005).",
    effectSize: "HR 0.10 (95% CI 0.01–0.82)",
    pValue: "0.03",
  },
  resultDirection: "positive",
  whatItFound:
    "Early surgery within 48 hours in patients with left-sided infective endocarditis and large vegetations (>10 mm) significantly reduced embolic complications without increasing operative mortality.",
  clinicalInterpretation:
    "Defines the standard of care for urgent surgical consultation and intervention in patients with large vegetations and severe valvular dysfunction before embolic stroke or annular destruction occurs.",
  currentGuidelinePosition:
    "ESC and ACC/AHA guidelines give a Class 1 recommendation for early surgery in left-sided IE with large vegetations (>10 mm) or acute severe regurgitation.",
  relatedTopicIds: ["valvular-heart-disease-endocarditis", "sepsis"],
  certainty: "high",
};
