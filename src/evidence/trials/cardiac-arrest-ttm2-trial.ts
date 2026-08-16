import type { Trial } from "@/content-types";

export const cardiacArrestTtm2Trial: Trial = {
  "id": "cardiac-arrest-ttm2-trial",
  "name": "TTM2",
  "title": "Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest",
  "year": 2021,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2100591",
  "pmid": "34133854",
  "design": "Multicenter randomized open-label trial with blinded outcome assessment (n=1900)",
  "clinicalQuestion": "Does targeted hypothermia at 33°C improve 6-month survival and functional outcome compared with targeted normothermia (<=37.5°C) with early fever treatment in comatose post-cardiac arrest adults?",
  "population": "Adults with out-of-hospital cardiac arrest of presumed cardiac or unknown cause who remained comatose after ROSC",
  "intervention": "Targeted hypothermia at 33°C for 28 hours followed by controlled rewarming",
  "comparator": "Targeted normothermia with early fever treatment (temperature maintained <= 37.5°C with device cooling if >= 37.8°C)",
  "primaryOutcome": "All-cause mortality at 6 months",
  "result": {
    "summary": "6-month mortality was 50% in the hypothermia group and 48% in the normothermia group (relative risk 1.04; 95% CI, 0.94 to 1.14; P=0.37). Functional outcome (modified Rankin Scale score 0-3) was identical (45% vs 45%, P=0.76). Arrhythmias causing hemodynamic compromise were significantly more common with hypothermia (24% vs 17%, P<0.001).",
    "pValue": "P=0.37"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Targeted hypothermia at 33°C did not improve survival or functional neurological outcome compared with targeted normothermia and active fever prevention.",
  "clinicalInterpretation": "Shifted international post-ROSC practice from mandatory 33°C hypothermia toward strict targeted normothermia (<= 37.5°C) with rapid fever prevention.",
  "currentGuidelinePosition": "Class I recommendation in ILCOR and ERC 2022 post-resuscitation updates.",
  "relatedTopicIds": [
    "cardiac-arrest-post-arrest"
  ]
};
