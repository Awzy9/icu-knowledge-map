import type { SystematicReview } from "@/content-types";

export const immunocompromisedIcuCancerOutcomesSystematicReview: SystematicReview = {
  id: "immunocompromised-icu-cancer-outcomes-systematic-review",
  title: "Intensive Care Outcomes for Patients with Cancer: A Systematic Review and Meta-Analysis",
  year: 2014,
  authorsOrGroup: "Puxty K, et al.",
  pmid: "25164223",
  doi: "10.1007/s00134-014-3450-4",
  studiesIncluded: 42,
  summary:
    "Systematic review and meta-analysis of 42 studies comprising 122,860 critically ill cancer patients admitted to modern intensive care units.",
  conclusion:
    "Overall hospital mortality for cancer patients admitted to the ICU was 44%, with significant progressive decadal survival improvements. Prognosis is predominantly determined by the number and severity of acute physiological organ dysfunctions and mechanical ventilation requirement rather than cancer type or stage per se.",
  certainty: "moderate",
  relatedTopicIds: ["immunocompromised-oncologic-critical-illness", "sepsis", "ards"],
};
