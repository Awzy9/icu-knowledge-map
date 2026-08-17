import type { Trial } from "@/content-types";

export const immunocompromisedElianaCartTrial: Trial = {
  id: "immunocompromised-eliana-cart-trial",
  name: "ELIANA",
  title: "Tisagenlecleucel in Children and Young Adults with B-Cell Lymphoblastic Leukemia",
  year: 2018,
  journal: "N Engl J Med",
  pmid: "29385370",
  doi: "10.1056/NEJMoa1709866",
  studyType: "observational",
  significance: "landmark",
  design: "International, multicenter, single-arm, phase 2 registration trial",
  clinicalQuestion:
    "What is the efficacy and toxicity profile of anti-CD19 chimeric antigen receptor (CAR) T-cell therapy in relapsed/refractory B-ALL?",
  population: "75 patients with relapsed or refractory B-cell acute lymphoblastic leukemia",
  intervention: "Single intravenous infusion of tisagenlecleucel CAR T-cells",
  comparator: "Historical refractory cohort",
  primaryOutcome: "Overall remission rate within 3 months and incidence of severe toxicities (CRS and ICANS)",
  result: {
    summary:
      "Overall remission rate was 81% (95% CI 71–89). Cytokine release syndrome occurred in 77% (46% Grade 3 or 4), managed with tocilizumab in 47% and corticosteroids in 33%, with complete resolution of toxicities and no deaths attributed to CRS.",
    effectSize: "81% remission, 77% CRS (46% Gr 3/4)",
    pValue: "<0.001",
  },
  resultDirection: "positive",
  whatItFound:
    "Tisagenlecleucel achieved durable remissions in relapsed/refractory B-ALL, but was accompanied by high rates of cytokine release syndrome requiring standardized ICU management with tocilizumab.",
  clinicalInterpretation:
    "Pivotal landmark trial establishing the therapeutic reality of CAR T-cell therapy and defining the protocolized management of Cytokine Release Syndrome (CRS) in critical care.",
  currentGuidelinePosition:
    "FDA and ASTCT consensus guidelines incorporate the ELIANA toxicity management algorithms (tocilizumab +/- corticosteroids) as the cornerstone of CAR-T critical care.",
  relatedTopicIds: ["immunocompromised-oncologic-critical-illness", "sepsis", "septic-shock"],
  certainty: "moderate",
};
