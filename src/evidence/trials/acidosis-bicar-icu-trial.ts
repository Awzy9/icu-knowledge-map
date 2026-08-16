import type { Trial } from "@/content-types";

export const acidosisBicarIcuTrial: Trial = {
  "id": "acidosis-bicar-icu-trial",
  "name": "BICAR-ICU",
  "title": "Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the ICU",
  "year": 2018,
  "journal": "Lancet",
  "doi": "10.1016/S0140-6736(18)31080-8",
  "pmid": "29910040",
  "design": "Multicenter randomized open-label controlled trial (n=389)",
  "clinicalQuestion": "Does sodium bicarbonate infusion reduce mortality in ICU patients with severe metabolic acidemia?",
  "population": "ICU patients within 48 hours of admission with severe acidemia (pH <= 7.20, PaCO2 <= 45, HCO3 <= 20)",
  "intervention": "4.2% Sodium Bicarbonate IV infusion targeting pH >= 7.30",
  "comparator": "No sodium bicarbonate",
  "primaryOutcome": "Composite of 28-day mortality or presence of at least one organ failure at day 7",
  "result": {
    "summary": "In the pre-specified AKI stratum (AKIN 2-3), 28-day mortality was significantly lower with bicarbonate (46% vs 63%, P=0.015) and need for renal replacement therapy was reduced (51% vs 73%, P=0.002).",
    "pValue": "P=0.015 (in AKI subgroup)"
  },
  "resultDirection": "positive",
  "whatItFound": "Sodium bicarbonate significantly reduced mortality and dialysis requirement in patients with severe metabolic acidosis and acute kidney injury.",
  "clinicalInterpretation": "Established a definitive role for sodium bicarbonate infusion in severe metabolic acidemia (pH <= 7.20) with concomitant AKI.",
  "currentGuidelinePosition": "Recommended in Surviving Sepsis Campaign 2021 guidelines.",
  "relatedTopicIds": [
    "metabolic-acidosis",
    "acid-base-disorders",
    "aki",
    "septic-shock"
  ]
};
