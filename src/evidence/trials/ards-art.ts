import type { Trial } from "@/content-types";

/**
 * Landmark ART Trial (Cavalcanti AB et al. JAMA 2017;318(14):1335-1345).
 * Investigated aggressive staircase lung recruitment maneuvers and titrated PEEP in moderate-to-severe ARDS.
 */
export const ardsArt: Trial = {
  id: "ards-art",
  name: "ART",
  title: "Effect of Lung Recruitment and Titrated PEEP vs Low PEEP on Mortality in Patients With Acute Respiratory Distress Syndrome",
  year: 2017,
  journal: "JAMA",
  studyType: "rct",
  significance: "landmark",
  design: "Multicenter, randomized controlled trial in 120 intensive care units across 9 countries (Alveolar Recruitment for ARDS Trial investigators)",
  clinicalQuestion: "Does an aggressive lung recruitment maneuver strategy with titrated PEEP reduce mortality in moderate-to-severe ARDS, compared with a conventional low-PEEP strategy?",
  population: "1,010 adult patients with moderate-to-severe ARDS (PaO2/FiO2 <= 200 mmHg) on mechanical ventilation < 72 hours.",
  inclusionCriteria: [
    "Moderate-to-severe ARDS by Berlin definition",
    "Mechanically ventilated for less than 72 hours",
    "PaO2/FiO2 ratio <= 200 mmHg with PEEP >= 10 cmH2O and FiO2 >= 0.50"
  ],
  intervention: "A stepwise lung recruitment maneuver protocol (PEEP escalated up to 45 cmH2O and airway pressure up to 60 cmH2O) followed by decremental PEEP titration to best respiratory-system static compliance + 2 cmH2O.",
  comparator: "Conventional low-PEEP lung-protective ventilation (ARDSNet-style table targeting SpO2 88-95%).",
  primaryOutcome: "28-day all-cause mortality.",
  secondaryOutcomes: [
    "Length of ICU and hospital stay",
    "Ventilator-free days through day 28",
    "Pneumothorax or barotrauma requiring drainage within 7 days",
    "6-month all-cause mortality"
  ],
  result: {
    summary:
      "The aggressive recruitment and titrated-PEEP strategy was associated with significantly higher 28-day mortality (55.3% vs 45.3%) and increased barotrauma compared with conventional low-PEEP.",
    effectSize: "HR 1.20 (95% CI 1.03-1.39); 28-day mortality 55.3% (279/501) vs 45.3% (231/509)",
    pValue: "P = 0.041",
  },
  resultDirection: "negative-neutral",
  whatItFound:
    "In moderate-to-severe ARDS, an aggressive lung recruitment maneuver and titrated-PEEP strategy resulted in worse 28-day survival (55.3% vs 45.3%, P=0.041), higher 6-month mortality (65.3% vs 59.9%, P=0.04), and increased pneumothorax requiring chest tube drainage (5.6% vs 1.6%, P=0.001).",
  clinicalInterpretation:
    "ART demonstrates that aggressive staircase recruitment maneuvers up to 60 cmH2O and high compliance-titrated PEEP cause hemodynamic collapse and barotrauma that outweigh alveolar recruitment benefit. Routine high-pressure recruitment maneuvers are harmful and not recommended.",
  currentGuidelinePosition:
    "Current ATS/ESICM ARDS guidelines recommend against routine aggressive stepwise lung recruitment maneuvers and caution against excessive PEEP titration in unselected ARDS patients.",
  limitations: [
    "Unblinded design, unavoidable in ventilator strategy trials.",
    "Recruitment maneuver tested was particularly aggressive (airway pressures up to 60 cmH2O), which may not represent gentler brief recruitment maneuvers.",
    "High baseline mortality across study centers (45-55%)."
  ],
  relatedTopicIds: ["ards"],
  certainty: "high",
};
