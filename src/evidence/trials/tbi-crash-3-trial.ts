import type { Trial } from "@/content-types";

export const tbiCrash3Trial: Trial = {
  "id": "tbi-crash-3-trial",
  "name": "CRASH-3",
  "title": "Effects of Tranexamic Acid on Death, Disability, and Vascular Occlusive Events in Traumatic Brain Injury",
  "year": 2019,
  "journal": "Lancet",
  "doi": "10.1016/S0140-6736(19)32233-0",
  "pmid": "31623894",
  "design": "International multicenter randomized double-blind placebo-controlled trial (n=12,737)",
  "clinicalQuestion": "Does early tranexamic acid reduce head injury-related mortality in patients with acute traumatic brain injury?",
  "population": "Patients with TBI within 3 hours of injury with GCS <= 12 or any intracranial bleeding on CT",
  "intervention": "Tranexamic Acid (1 g loading dose over 10 min, then 1 g infusion over 8 h)",
  "comparator": "Matching placebo infusion",
  "primaryOutcome": "Head injury-related death in hospital within 28 days",
  "result": {
    "summary": "In mild-to-moderate TBI (GCS 9-15), TXA significantly reduced head injury death (5.8% vs 7.5%; RR 0.78, 95% CI 0.64-0.95, P=0.016) when administered within 3 hours. Benefit was greatest with earlier administration.",
    "pValue": "P=0.016 (GCS 9-15)"
  },
  "resultDirection": "positive",
  "whatItFound": "Early tranexamic acid administration within 3 hours reduces head injury mortality in mild-to-moderate TBI without increasing thromboembolic risk.",
  "clinicalInterpretation": "Supports early TXA for non-severe TBI presenting within 3 hours of injury.",
  "currentGuidelinePosition": "Incorporated into international trauma and neurotrauma resuscitation algorithms.",
  "relatedTopicIds": [
    "severe-tbi",
    "bleeding"
  ]
};
