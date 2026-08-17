import type { Trial } from "@/content-types";

export const valvularPrometheusTrial: Trial = {
  id: "valvular-prometheus-trial",
  name: "TROIA / PROMETHEUS",
  title: "Ultra-Slow Infusion of Low-Dose Recombinant Tissue Plasminogen Activator for Obstructive Prosthetic Valve Thrombosis",
  year: 2013,
  journal: "J Am Coll Cardiol",
  pmid: "23500318",
  doi: "10.1016/j.jacc.2013.01.042",
  studyType: "observational",
  significance: "landmark",
  design: "Prospective cohort study of consecutive protocolized fibrinolytic regimens",
  clinicalQuestion:
    "Does an ultra-slow low-dose tPA infusion achieve successful lysis with minimal hemorrhage in obstructive prosthetic valve thrombosis?",
  population: "182 episodes of obstructive prosthetic heart valve thrombosis",
  intervention: "Low-dose (25 mg), ultra-slow (25-hour) intravenous infusion of tPA without bolus",
  comparator: "Accelerated and conventional high-dose fibrinolytic regimens",
  primaryOutcome: "Thrombus resolution, mortality, and major bleeding complications",
  result: {
    summary:
      "The ultra-slow 25-hour low-dose tPA regimen achieved a 90% success rate with 0.5% mortality and 1.6% major bleeding, compared to ~15–20% complications with accelerated regimens.",
    effectSize: "90% success, 1.6% major bleeding",
    pValue: "<0.001",
  },
  resultDirection: "positive",
  whatItFound:
    "Slow infusion of low-dose tPA (25 mg over 25 hours) without a bolus effectively dissolves obstructive mechanical valve thrombi with exceptionally low major bleeding and embolic risk.",
  clinicalInterpretation:
    "Establishes slow-infusion low-dose fibrinolysis as the preferred first-line medical rescue regimen for critically ill patients with obstructive prosthetic valve thrombosis who are poor surgical candidates or have right-sided valve thrombosis.",
  currentGuidelinePosition:
    "Supported in 2020 ACC/AHA and 2021 ESC/EACTS valvular heart disease guidelines as a safe alternative to urgent reoperation.",
  relatedTopicIds: ["valvular-heart-disease-endocarditis", "cardiogenic-shock", "bleeding"],
  certainty: "moderate",
};
