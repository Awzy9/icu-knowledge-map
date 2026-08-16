import type { Trial } from "@/content-types";

export const cardiogenicShockDangerShock: Trial = {
  id: "cardiogenic-shock-danger-shock",
  name: "DanGer Shock",
  title: "Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock",
  year: 2024,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa2312572",
  studyType: "rct",
  significance: "landmark",
  design: "International, multicenter, randomized, open-label trial.",
  clinicalQuestion: "In STEMI-related cardiogenic shock, does routine use of a microaxial flow pump (Impella CP) added to standard care improve survival compared with standard care alone?",
  population: "355 patients with STEMI and cardiogenic shock.",
  intervention: "Microaxial flow pump (Impella CP) plus standard care.",
  comparator: "Standard care alone.",
  primaryOutcome: "All-cause mortality at 180 days.",
  secondaryOutcomes: ["Composite safety endpoint: severe bleeding, limb ischemia, hemolysis, device failure, worsening aortic regurgitation."],
  result: {
    summary: "Reduced 180-day mortality with the microaxial flow pump, but a higher rate of the composite safety endpoint (bleeding, limb ischemia, hemolysis, device complications).",
    effectSize: "Absolute 180-day mortality reduction of approximately 12.7 percentage points",
  },
  resultDirection: "positive",
  whatItFound:
    "Routine use of a microaxial flow pump in STEMI-related cardiogenic shock reduced 180-day mortality, at the cost of significantly more bleeding, limb ischemia, and other device-related complications.",
  clinicalInterpretation:
    "This is the first RCT to show a mortality benefit from a mechanical circulatory support device in cardiogenic shock, a genuinely practice-relevant result — but it is a single trial, in a population restricted to STEMI-related shock, with a real and significant complication trade-off. It should not be read as establishing benefit for cardiogenic shock from all causes, or as a device without meaningful downside.",
  currentGuidelinePosition:
    "Too recent for full incorporation into all major society guidelines at the time of this writing; it is expected to influence updated guidance on mechanical circulatory support in STEMI-related shock.",
  limitations: [
    "Open-label design.",
    "Restricted to STEMI-related cardiogenic shock — does not establish benefit in other etiologies.",
    "Significantly higher rate of bleeding, limb ischemia, and device-related complications in the intervention arm.",
  ],
  relatedTopicIds: ["cardiogenic-shock"],
  certainty: "moderate",
};
