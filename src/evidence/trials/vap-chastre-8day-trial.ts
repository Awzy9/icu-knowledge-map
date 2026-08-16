import type { Trial } from "@/content-types";

export const vapChastre8dayTrial: Trial = {
  "id": "vap-chastre-8day-trial",
  "name": "Chastre 8-day vs 15-day",
  "title": "Comparison of 8 vs 15 Days of Antibiotic Therapy for Ventilator-Associated Pneumonia in Adults",
  "year": 2003,
  "journal": "JAMA",
  "doi": "10.1001/jama.290.19.2588",
  "pmid": "14625336",
  "design": "Prospective randomized double-blind multicenter trial in 51 French ICUs (n=401)",
  "clinicalQuestion": "Is an 8-day course of antibiotic therapy as effective as a 15-day course for microbiologically confirmed ventilator-associated pneumonia?",
  "population": "Adults with microbiologically confirmed VAP by quantitative bronchoscopic sampling",
  "intervention": "8-day course of appropriate antibiotic therapy",
  "comparator": "15-day course of appropriate antibiotic therapy",
  "primaryOutcome": "28-day all-cause mortality and VAP recurrence",
  "result": {
    "summary": "28-day mortality was similar between the 8-day (18.8%) and 15-day (17.2%) groups (difference 1.6%; 90% CI -3.7% to 6.9%). Patients in the 8-day group had significantly more antibiotic-free days (13.1 vs 8.7 days, P<0.001) and fewer MDR superinfections upon recurrence (42% vs 62%, P=0.04).",
    "pValue": "P<0.001 (antibiotic-free days)"
  },
  "resultDirection": "positive",
  "whatItFound": "An 8-day antibiotic course for VAP produces equivalent clinical cure and survival while markedly reducing antibiotic exposure and multidrug-resistant pathogen emergence.",
  "clinicalInterpretation": "Established the short 7-8 day antibiotic duration as standard of care in VAP.",
  "currentGuidelinePosition": "Strong recommendation in IDSA/ATS 2016 VAP guidelines.",
  "relatedTopicIds": [
    "vap",
    "hap"
  ]
};
