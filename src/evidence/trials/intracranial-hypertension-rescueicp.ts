import type { Trial } from "@/content-types";

export const intracranialHypertensionRescueicp: Trial = {
  id: "intracranial-hypertension-rescueicp",
  name: "RESCUEicp",
  title: "Trial of Decompressive Craniectomy for Traumatic Intracranial Hypertension",
  year: 2016,
  journal: "New England Journal of Medicine",
  doi: "10.1056/NEJMoa1605215",
  studyType: "rct",
  significance: "landmark",
  design: "International, multicenter, randomized controlled trial (2004-2014).",
  clinicalQuestion: "In TBI with intracranial hypertension refractory to medical therapy, does decompressive craniectomy improve outcome compared with continued medical management?",
  population: "408 patients aged 10-65 with TBI and intracranial pressure sustained above 25 mmHg despite tiered medical therapy.",
  intervention: "Decompressive craniectomy.",
  comparator: "Continued medical management (which could include barbiturates as a further tier).",
  primaryOutcome: "Extended Glasgow Outcome Scale (GOS-E) at 6 months.",
  result: {
    summary: "Craniectomy reduced mortality but increased the proportion of survivors in a vegetative state or with severe disability; rates of moderate disability and good recovery were similar between groups.",
  },
  resultDirection: "contradictory",
  whatItFound:
    "In refractory intracranial hypertension after TBI, decompressive craniectomy reduced 6-month mortality compared with continued medical management, but this came with an increased rate of vegetative state and severe disability among survivors — the rate of a good functional outcome was not clearly improved.",
  clinicalInterpretation:
    "RESCUEicp shows that decompressive craniectomy trades death for survival with a substantial chance of severe disability in many patients, rather than clearly improving overall outcome — this trade-off should be discussed explicitly in shared decision-making with family, rather than framed simply as 'craniectomy saves lives.'",
  currentGuidelinePosition:
    "Incorporated into the Brain Trauma Foundation 4th edition guideline's 2020 update on decompressive craniectomy, which recommends a large frontotemporoparietal craniectomy over a smaller one when the procedure is performed, without resolving the fundamental mortality-versus-disability trade-off this trial identified.",
  limitations: [
    "Long enrollment period (2004-2014) during which other aspects of TBI care evolved.",
    "The mortality-benefit/disability-cost trade-off makes 'benefit' highly dependent on how outcomes are weighted, which is a value judgment as much as a clinical one.",
  ],
  relatedTopicIds: ["intracranial-hypertension"],
  certainty: "high",
};
