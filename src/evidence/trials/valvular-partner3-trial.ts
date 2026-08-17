import type { Trial } from "@/content-types";

export const valvularPartner3Trial: Trial = {
  id: "valvular-partner3-trial",
  name: "PARTNER 3",
  title: "Transcatheter Aortic-Valve Replacement with a Balloon-Expandable Valve in Low-Risk Patients",
  year: 2019,
  journal: "N Engl J Med",
  pmid: "30877772",
  doi: "10.1056/NEJMoa1814052",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized, open-label trial",
  clinicalQuestion:
    "Is TAVR non-inferior or superior to surgical aortic-valve replacement in patients with severe aortic stenosis at low surgical risk?",
  population: "1000 patients with severe aortic stenosis and low surgical risk (STS score < 4%)",
  intervention: "Transcatheter aortic-valve replacement (TAVR) with a balloon-expandable SAPIEN 3 valve",
  comparator: "Surgical aortic-valve replacement (SAVR)",
  primaryOutcome: "Composite of death from any cause, stroke, or rehospitalization at 1 year",
  result: {
    summary:
      "TAVR was superior to surgery at 1 year (8.5% vs 15.1%, HR 0.54, 95% CI 0.37–0.79, P = 0.001 for superiority), with lower rates of stroke and new AF.",
    effectSize: "HR 0.54 (95% CI 0.37–0.79)",
    pValue: "0.001",
  },
  resultDirection: "positive",
  whatItFound:
    "TAVR demonstrated lower 1-year rates of death, stroke, and rehospitalization compared to SAVR across the surgical risk spectrum.",
  clinicalInterpretation:
    "Solidifies TAVR as an established therapeutic alternative to open surgery in critical AS, including emergent transcatheter rescue procedures in hemodynamic instability.",
  currentGuidelinePosition:
    "Class 1 recommendation in ACC/AHA and ESC guidelines for patients with severe symptomatic AS based on age, anatomy, and surgical risk.",
  relatedTopicIds: ["valvular-heart-disease-endocarditis", "cardiogenic-shock"],
  certainty: "high",
};
