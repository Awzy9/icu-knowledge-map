import type { Trial } from "@/content-types";

export const cardiogenicShockCulpritShock: Trial = {
  id: "cardiogenic-shock-culprit-shock",
  name: "CULPRIT-SHOCK",
  title: "PCI Strategies in Patients with Acute Myocardial Infarction and Cardiogenic Shock",
  year: 2017,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1710261",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, open-label trial.",
  clinicalQuestion: "In cardiogenic shock with multivessel coronary disease, does culprit-lesion-only PCI (with optional staged revascularization) improve outcomes compared with immediate multivessel PCI?",
  population: "706 patients with multivessel disease and cardiogenic shock complicating acute MI.",
  intervention: "Culprit-lesion-only PCI, with staged revascularization of other lesions if needed.",
  comparator: "Immediate multivessel PCI.",
  primaryOutcome: "Composite of 30-day death or severe renal failure requiring renal replacement therapy.",
  result: {
    summary: "Culprit-lesion-only PCI reduced the composite of 30-day death or severe renal failure compared with immediate multivessel PCI.",
    effectSize: "45.9% (culprit-only) vs 55.4% (multivessel)",
  },
  resultDirection: "positive",
  whatItFound:
    "An initial strategy of treating only the culprit lesion, rather than all significant lesions immediately, reduced 30-day death and severe renal failure in cardiogenic shock with multivessel disease.",
  clinicalInterpretation:
    "This shifted practice away from treating all lesions at the index procedure in cardiogenic shock — the extra contrast load, procedure time, and hemodynamic stress of complete revascularization in an unstable patient appear to outweigh any benefit of immediately opening non-culprit vessels.",
  currentGuidelinePosition:
    "Current guidance favors culprit-lesion-only PCI as the initial strategy in cardiogenic shock with multivessel disease, based on this trial.",
  limitations: [
    "Open-label design.",
    "One-year follow-up (a separate report) showed no significant difference in mortality between strategies, narrowing the durability of the 30-day composite benefit.",
  ],
  relatedTopicIds: ["cardiogenic-shock"],
  certainty: "high",
};
