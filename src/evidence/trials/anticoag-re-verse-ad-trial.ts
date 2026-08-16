import type { Trial } from "@/content-types";

export const anticoagReVerseAdTrial: Trial = {
  "id": "anticoag-re-verse-ad-trial",
  "name": "RE-VERSE AD",
  "title": "Idarucizumab for Dabigatran Reversal - Full Cohort Analysis",
  "year": 2017,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa1707278",
  "pmid": "28693366",
  "design": "Multicenter open-label prospective cohort study (n=503)",
  "clinicalQuestion": "Does idarucizumab rapidly and completely reverse the anticoagulant effect of dabigatran in patients with life-threatening bleeding or urgent surgery?",
  "population": "Patients taking dabigatran who had uncontrolled bleeding (Group A, n=301) or required emergency surgery/procedures within 8 hours (Group B, n=202)",
  "intervention": "Idarucizumab 5 g IV (administered as two 2.5 g boluses 15 min apart)",
  "comparator": "Single-arm prospective trial",
  "primaryOutcome": "Maximum percentage reversal of the anticoagulant effect of dabigatran within 4 hours (by dilute thrombin time or ecarin clotting time)",
  "result": {
    "summary": "Median maximum percentage reversal of dabigatran was 100% (95% CI 100 to 100). Normal intraoperative hemostasis was reported in 93.4% of surgical patients. Median time to cessation of bleeding in Group A was 2.5 hours.",
    "pValue": "P<0.001"
  },
  "resultDirection": "positive",
  "whatItFound": "Idarucizumab achieves immediate, complete, and sustained reversal of dabigatran without prothrombotic excess.",
  "clinicalInterpretation": "Established Idarucizumab (Praxbind) 5 g IV as the definitive specific reversal agent for dabigatran-associated hemorrhage.",
  "currentGuidelinePosition": "Class I recommendation in ACC, ASH, and neurocritical care reversal guidelines.",
  "relatedTopicIds": [
    "anticoagulation",
    "bleeding",
    "intracranial-hemorrhage"
  ]
};
