import type { Trial } from "@/content-types";

export const ecmoEclsShockTrial: Trial = {
  "id": "ecmo-ecls-shock-trial",
  "name": "ECLS-SHOCK",
  "title": "Extracorporeal Life Support in Infarct-Related Cardiogenic Shock",
  "year": 2023,
  "journal": "NEJM",
  "doi": "10.1056/NEJMoa2307227",
  "pmid": "37634148",
  "design": "Multicenter randomized open-label trial across 44 centers in Germany and Slovenia (n=420)",
  "clinicalQuestion": "Does routine early VA-ECMO reduce 30-day mortality in acute myocardial infarction complicated by cardiogenic shock undergoing early revascularization?",
  "population": "Patients with acute MI complicated by cardiogenic shock scheduled for early revascularization with planned active medical therapy",
  "intervention": "Routine early VA-ECMO (extracorporeal life support) plus standard medical therapy",
  "comparator": "Usual medical therapy alone (with rescue VA-ECMO permitted only for refractory hemodynamic collapse)",
  "primaryOutcome": "All-cause mortality at 30 days",
  "result": {
    "summary": "30-day mortality was 47.8% in the VA-ECMO group and 49.0% in the control group (relative risk 0.98; 95% CI, 0.80 to 1.19; P=0.81). Moderate or severe bleeding was significantly higher with ECMO (23.4% vs 9.6%, P<0.001) and peripheral vascular complications requiring intervention were more frequent (11.0% vs 3.8%, P=0.01).",
    "pValue": "P=0.81"
  },
  "resultDirection": "negative-neutral",
  "whatItFound": "Routine early VA-ECMO did not reduce 30-day mortality in acute MI cardiogenic shock and significantly increased major bleeding and vascular complications.",
  "clinicalInterpretation": "Reversed unselected early VA-ECMO deployment in AMI shock; established that VA-ECMO should be reserved as bailout for refractory SCAI Stage E shock.",
  "currentGuidelinePosition": "Class IIb/III for routine use in updated ESC and AHA cardiogenic shock guidance.",
  "relatedTopicIds": [
    "ecmo-fundamentals",
    "cardiogenic-shock"
  ]
};
