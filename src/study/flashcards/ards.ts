import type { Flashcard } from "@/content-types";

export const ardsFlashcards: readonly Flashcard[] = [
  {
    "id": "ards.fc.definition-elements",
    "topicId": "ards",
    "sectionId": "ards.definition",
    "question": "What four elements make up the Berlin Definition of ARDS?",
    "answer": "Timing (within 1 week of an insult), bilateral opacities on imaging, edema not fully explained by cardiac failure/fluid overload, and a defined degree of hypoxemia (PaO2/FiO2) at PEEP ≥ 5 cmH2O.",
    "explanation": "All four must be present together — there's no single lab value or imaging finding that defines ARDS on its own. The cardiac-exclusion element is why an echo or BNP is often needed before the diagnosis is considered secure.",
    "difficulty": "basic",
    "references": [
      "ARDS Definition Task Force. Berlin Definition of ARDS. JAMA 2012."
    ]
  },
  {
    "id": "ards.fc.severity-bands",
    "topicId": "ards",
    "sectionId": "ards.severity",
    "question": "What PaO2/FiO2 ranges define mild, moderate, and severe ARDS?",
    "answer": "Mild 200-300, moderate 100-200, severe ≤ 100 — all measured at PEEP ≥ 5 cmH2O.",
    "explanation": "The PEEP requirement matters: measuring PaO2/FiO2 on a lower PEEP (or no PEEP) can make the ratio look falsely severe, since inadequate PEEP itself worsens oxygenation independent of the underlying lung injury.",
    "difficulty": "basic",
    "references": [
      "ARDS Definition Task Force. Berlin Definition of ARDS. JAMA 2012."
    ]
  },
  {
    "id": "ards.fc.shunt-physiology",
    "topicId": "ards",
    "sectionId": "ards.physiology",
    "question": "Why does hypoxemia in ARDS respond poorly to increasing FiO2 alone?",
    "answer": "Perfused-but-unventilated alveoli create true intrapulmonary shunt; shunted blood never contacts ventilated alveoli, so raising FiO2 doesn't help — alveolar recruitment (PEEP, proning) is needed instead.",
    "explanation": "This is the physiologic argument against simply escalating oxygen therapy in severe ARDS: once shunt fraction is large enough, PaO2 plateaus no matter how high FiO2 goes, because the shunted blood dilutes the oxygenated blood on the way back to the left heart.",
    "difficulty": "intermediate",
    "references": [
      "See Shunt and Ventilation-Perfusion Mismatch in the Physiology Library."
    ]
  },
  {
    "id": "ards.fc.tidal-volume-target",
    "topicId": "ards",
    "sectionId": "ards.management.lung-protective-ventilation",
    "question": "What tidal volume and plateau pressure targets define lung-protective ventilation?",
    "answer": "Approximately 6 mL/kg predicted body weight (range 4-8 mL/kg), with plateau pressure kept ≤ 30 cmH2O.",
    "explanation": "Both numbers matter together — tidal volume is dosed to predicted body weight, not actual weight, because lung size tracks height and sex, not body mass. The plateau pressure ceiling is the backstop for patients whose lungs are too stiff for even 6 mL/kg to stay safe.",
    "difficulty": "basic",
    "references": [
      {
        "kind": "guideline",
        "id": "ards-guideline-low-tidal-volume",
        "relevance": "States this exact recommendation."
      },
      {
        "kind": "trial",
        "id": "ards-arma",
        "relevance": "The trial that established this target."
      }
    ]
  },
  {
    "id": "ards.fc.arma-finding",
    "topicId": "ards",
    "sectionId": "ards.management.lung-protective-ventilation",
    "question": "What did the ARMA (ARDSNet) trial find?",
    "answer": "6 mL/kg tidal volume reduced mortality compared with 12 mL/kg (31.0% vs 39.8%), establishing low tidal volume ventilation as standard of care.",
    "explanation": "ARMA is the single most-cited ARDS trial because it changed practice worldwide from a physiology-driven approach (bigger breaths help gas exchange) to an injury-avoidance approach (smaller breaths avoid ventilator-induced lung injury), even though it came at the cost of some hypercapnia.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ards-arma",
        "relevance": "Direct source of this finding."
      }
    ]
  },
  {
    "id": "ards.fc.proning-indication",
    "topicId": "ards",
    "sectionId": "ards.management.prone-positioning",
    "question": "Which patients should be considered for prone positioning, and for how long per session?",
    "answer": "Severe ARDS (PaO2/FiO2 < 150) despite optimized ventilation; sessions of at least 16 hours per day, started early.",
    "explanation": "Both the severity threshold and the session duration came directly from how PROSEVA was designed and run — trials of proning in milder ARDS, or with shorter daily sessions, have not shown the same mortality benefit.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ards-proseva",
        "relevance": "Defines both the population and the protocol."
      }
    ]
  },
  {
    "id": "ards.fc.driving-pressure",
    "topicId": "ards",
    "sectionId": "ards.management.peep",
    "question": "How is driving pressure calculated, and what target is associated with better outcomes?",
    "answer": "Driving pressure = plateau pressure − PEEP. Values ≤ 15 cmH2O have been associated with lower mortality in retrospective analyses.",
    "explanation": "Driving pressure is really tidal volume normalized to how much lung is actually available to receive it — which is why it tracks outcomes more closely than tidal volume or PEEP alone. It's a retrospective association, not a proven causal target from a dedicated randomized trial.",
    "difficulty": "intermediate",
    "references": [
      "Amato MB, et al. Driving Pressure and Survival in the Acute Respiratory Distress Syndrome. NEJM 2015."
    ]
  },
  {
    "id": "ards.fc.acurasys-vs-rose",
    "topicId": "ards",
    "sectionId": "ards.controversies",
    "question": "Why did ACURASYS and ROSE reach different conclusions about neuromuscular blockade in ARDS?",
    "answer": "ACURASYS's comparator arm used deep sedation; ROSE's comparator used a lighter-sedation, as-needed approach. The difference in comparator strategy — not just the paralytic itself — likely explains the diverging results.",
    "explanation": "This is a classic lesson in trial interpretation: a negative trial doesn't always mean the intervention doesn't work — sometimes the comparator arm has quietly gotten better between trials, narrowing or eliminating the apparent benefit.",
    "difficulty": "advanced",
    "references": [
      {
        "kind": "trial",
        "id": "ards-acurasys",
        "relevance": "One side of the controversy."
      },
      {
        "kind": "trial",
        "id": "ards-rose",
        "relevance": "The other side of the controversy."
      }
    ]
  },
  {
    "id": "ards.fc.nmb-current-practice",
    "topicId": "ards",
    "sectionId": "ards.management.neuromuscular-blockade",
    "question": "What is current practice for neuromuscular blockade in ARDS, after ROSE?",
    "answer": "Reserve it for patients with severe ventilator dyssynchrony or refractory hypoxemia despite adequate sedation, rather than applying it routinely to all severe ARDS patients.",
    "explanation": "ROSE's null result, combined with its larger sample size and more contemporary sedation comparator, was practice-changing — it shifted neuromuscular blockade from a default early intervention to a targeted rescue option.",
    "difficulty": "intermediate",
    "references": [
      {
        "kind": "trial",
        "id": "ards-rose",
        "relevance": "The trial that shifted practice toward selective use."
      }
    ]
  },
  {
    "id": "ards.fc.eolia-caveat",
    "topicId": "ards",
    "sectionId": "ards.management.rescue-therapies",
    "question": "What complicates a straightforward interpretation of the EOLIA ECMO trial?",
    "answer": "28% of the control group crossed over to ECMO, which undermines a strict intention-to-treat reading of the non-significant primary mortality result.",
    "explanation": "This is why EOLIA is taught as a case study in crossover bias: a large enough crossover can pull a truly beneficial therapy's intention-to-treat result toward null, since some of the 'control' group actually received the treatment being tested.",
    "difficulty": "advanced",
    "references": [
      {
        "kind": "trial",
        "id": "ards-eolia",
        "relevance": "Source of the crossover issue discussed here."
      }
    ]
  },
  {
    "id": "ards.fc.diagnostic-pitfall",
    "topicId": "ards",
    "sectionId": "ards.diagnosis",
    "question": "What is the most common diagnostic pitfall when evaluating suspected ARDS?",
    "answer": "Cardiogenic pulmonary edema and volume overload, which can mimic bilateral opacities and hypoxemia — objective cardiac assessment (echo, BNP) is needed when the cause isn't obvious.",
    "explanation": "The Berlin definition explicitly requires that the edema not be fully explained by cardiac failure or fluid overload — this pitfall is built into the diagnostic criteria themselves, not just a bedside teaching point.",
    "difficulty": "basic",
    "references": [
      "See Cardiogenic Pulmonary Edema for the differential this pitfall refers to."
    ]
  }
];
