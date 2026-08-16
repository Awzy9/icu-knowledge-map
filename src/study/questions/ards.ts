import type { Question } from "@/content-types";

export const ardsQuestions: readonly Question[] = [
  {
    id: "ards.q.pf-ratio-severity",
    topicId: "ards",
    sectionId: "ards.severity",
    stem: "A ventilated patient has a PaO2 of 78 mmHg on FiO2 0.6, with PEEP 8 cmH2O. Bilateral infiltrates are present and onset was 2 days ago with no evidence of cardiac cause. What ARDS severity category does this PaO2/FiO2 ratio fall into?",
    options: [
      { id: "a", text: "Mild (200-300)", isCorrect: false },
      { id: "b", text: "Moderate (100-200)", isCorrect: true },
      { id: "c", text: "Severe (≤100)", isCorrect: false },
      { id: "d", text: "Does not meet ARDS criteria", isCorrect: false },
    ],
    explanation:
      "PaO2/FiO2 = 78 / 0.6 = 130, which falls in the moderate range (100-200). PEEP is ≥5 cmH2O, so the ratio is valid for Berlin grading.",
    difficulty: "basic",
    references: ["ARDS Definition Task Force. Berlin Definition of ARDS. JAMA 2012."],
  },
  {
    id: "ards.q.arma-tidal-volume",
    topicId: "ards",
    sectionId: "ards.management.lung-protective-ventilation",
    stem: "According to the ARMA (ARDSNet) trial, what tidal volume strategy reduced mortality in ARDS?",
    options: [
      { id: "a", text: "12 mL/kg predicted body weight", isCorrect: false },
      { id: "b", text: "6 mL/kg predicted body weight with plateau pressure ≤ 30 cmH2O", isCorrect: true },
      { id: "c", text: "10 mL/kg actual body weight", isCorrect: false },
      { id: "d", text: "Tidal volume titrated to normalize PaCO2 only", isCorrect: false },
    ],
    explanation:
      "ARMA compared 6 mL/kg (with a 30 cmH2O plateau pressure ceiling) against a traditional 12 mL/kg strategy and found lower mortality with the lower tidal volume approach.",
    difficulty: "basic",
    references: [{ kind: "trial", id: "ards-arma", relevance: "Direct source of this finding." }],
  },
  {
    id: "ards.q.proning-threshold",
    topicId: "ards",
    sectionId: "ards.management.prone-positioning",
    stem: "Prone positioning has the strongest evidence for mortality benefit in which ARDS population?",
    options: [
      { id: "a", text: "Mild ARDS (PaO2/FiO2 200-300)", isCorrect: false },
      { id: "b", text: "Any ARDS regardless of severity", isCorrect: false },
      { id: "c", text: "Severe ARDS (PaO2/FiO2 < 150)", isCorrect: true },
      { id: "d", text: "Only post-extubation patients", isCorrect: false },
    ],
    explanation:
      "PROSEVA enrolled patients with severe ARDS (PaO2/FiO2 < 150) and showed a substantial mortality reduction with early, prolonged (≥16h/day) prone positioning; benefit has not been consistently demonstrated in milder disease.",
    difficulty: "intermediate",
    references: [{ kind: "trial", id: "ards-proseva", relevance: "Defines the population in which proning shows benefit." }],
  },
  {
    id: "ards.q.nmb-controversy",
    topicId: "ards",
    sectionId: "ards.controversies",
    stem: "ACURASYS reported a mortality benefit with early neuromuscular blockade, but ROSE did not. What is the most likely explanation for this discrepancy?",
    options: [
      { id: "a", text: "ROSE enrolled a healthier population with lower baseline mortality risk", isCorrect: false },
      { id: "b", text: "ROSE's comparator arm used a lighter-sedation strategy, which may itself be protective", isCorrect: true },
      { id: "c", text: "ACURASYS used a different neuromuscular blocking agent with superior efficacy", isCorrect: false },
      { id: "d", text: "ROSE was underpowered to detect a mortality difference", isCorrect: false },
    ],
    explanation:
      "ACURASYS's comparator arm used deep sedation, while ROSE's comparator used a lighter-sedation, as-needed paralysis strategy. The lighter-sedation comparator itself may confer benefit, which would narrow or eliminate the apparent advantage of routine paralysis seen in ACURASYS. ROSE was large (1006 patients) and stopped early for futility, not for being underpowered.",
    difficulty: "advanced",
    references: [
      { kind: "trial", id: "ards-acurasys", relevance: "Reported the initial mortality benefit." },
      { kind: "trial", id: "ards-rose", relevance: "The larger, contradicting trial discussed here." },
    ],
  },
  {
    id: "ards.q.peep-strategy",
    topicId: "ards",
    sectionId: "ards.management.peep",
    stem: "Current guidance on PEEP strategy in moderate-to-severe ARDS recommends:",
    options: [
      { id: "a", text: "A fixed PEEP of 5 cmH2O for all patients", isCorrect: false },
      { id: "b", text: "A higher-PEEP strategy, titrated against oxygenation and mechanics", isCorrect: true },
      { id: "c", text: "Avoiding PEEP entirely to minimize barotrauma risk", isCorrect: false },
      { id: "d", text: "PEEP titrated solely to normalize PaCO2", isCorrect: false },
    ],
    explanation:
      "The ATS/ESICM/SCCM guideline gives a conditional recommendation favoring a higher-PEEP strategy over lower PEEP in moderate-to-severe ARDS, titrated against the individual patient's oxygenation and respiratory mechanics rather than fixed at one value.",
    difficulty: "intermediate",
    references: [{ kind: "guideline", id: "ards-guideline-higher-peep", relevance: "States this exact recommendation." }],
  },
  {
    id: "ards.q.eolia-interpretation",
    topicId: "ards",
    sectionId: "ards.management.rescue-therapies",
    stem: "The EOLIA trial's primary mortality endpoint was not statistically significant, yet many guidelines still support ECMO in very severe ARDS. Why?",
    options: [
      { id: "a", text: "The trial was later retracted and replaced with a positive result", isCorrect: false },
      { id: "b", text: "A large proportion of the control group crossed over to ECMO, complicating a strict intention-to-treat interpretation", isCorrect: true },
      { id: "c", text: "The primary endpoint was changed after unblinding", isCorrect: false },
      { id: "d", text: "EOLIA only enrolled patients who were already improving", isCorrect: false },
    ],
    explanation:
      "28% of the control arm crossed over to ECMO during the trial, which dilutes the intention-to-treat comparison and makes the null primary result harder to interpret at face value — subsequent reanalyses have suggested a plausible benefit.",
    difficulty: "advanced",
    references: [{ kind: "trial", id: "ards-eolia", relevance: "Source of the crossover issue discussed here." }],
  },
];
