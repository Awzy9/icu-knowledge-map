import type { Trial } from "@/content-types";

export const cardiacArrestCoactTrial: Trial = {
  "id": "cardiac-arrest-coact-trial",
  "name": "COACT",
  "title": "Coronary Angiography after Cardiac Arrest without ST-Segment Elevation",
  "year": 2019,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1816897",
  "pmid": "30883057",
  "design": "Multicenter randomized clinical trial in 19 centers in the Netherlands (n=552)",
  "clinicalQuestion": "Does immediate coronary angiography improve 90-day survival compared with delayed angiography in comatose patients after OHCA without ST-segment elevation?",
  "population": "Adults with successfully resuscitated out-of-hospital cardiac arrest, initial shockable rhythm, and no ST-segment elevation on post-ROSC ECG",
  "intervention": "Immediate emergency coronary angiography (median time 2.3 hours)",
  "comparator": "Delayed coronary angiography performed after neurologic recovery (median time 121.9 hours)",
  "primaryOutcome": "Overall survival at 90 days",
  "result": {
    "summary": "90-day survival was 64.5% in the immediate angiography group vs 67.2% in the delayed group (odds ratio 0.89; 95% CI, 0.62 to 1.27; P=0.51). Time to target temperature and ICU length of stay were similar.",
    "pValue": "P=0.51"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Immediate coronary angiography provided no survival or neurological benefit over delayed angiography in post-cardiac arrest patients without ST-segment elevation.",
  "clinicalInterpretation": "Supports prioritizing ICU hemodynamic and neuroprotective stabilization over immediate emergent catheterization in non-STEMI post-arrest patients without shock.",
  "currentGuidelinePosition": "Supported in AHA and ESC 2021 post-arrest guidelines.",
  "relatedTopicIds": [
    "cardiac-arrest-post-arrest"
  ]
};
