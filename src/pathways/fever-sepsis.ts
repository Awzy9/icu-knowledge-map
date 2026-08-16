import type { Pathway } from "@/content-types";

export const feverSepsis: Pathway = {
  id: "fever-sepsis",
  slug: "fever-sepsis",
  title: "Fever / Suspected Sepsis",
  oneLiner: "From recognizing organ dysfunction to source identification and time-sensitive empiric therapy.",
  startingProblem: "Fever / Suspected Sepsis",
  relatedTopicIds: [
      "sepsis",
      "septic-shock",
      "mdr-organisms",
      "necrotizing-soft-tissue-infections",
      "hap",
      "vap",
      "meningitis-encephalitis",
      "shock"
    ],
  flow: {
    id: "confirm-fever-and-severity",
    label: "Confirm the fever and assess severity",
    kind: "step",
    detail: "Temperature plus the full vital sign set — heart rate, respiratory rate, blood pressure, and mentation.",
    children: [
      {
        id: "screen-organ-dysfunction",
        label: "Screen for organ dysfunction",
        kind: "step",
        detail: "Altered mentation, hypotension, tachypnea, and a rising lactate — organ dysfunction is what separates sepsis from simple infection.",
        topicId: "sepsis",
        children: [
          {
            id: "identify-source",
            label: "Identify a likely source",
            kind: "step",
            detail: "Focused exam and history — lungs, urinary tract, abdomen, skin/soft tissue, and any indwelling line or device.",
            children: [
              {
                id: "obtain-cultures",
                label: "Obtain cultures before antibiotics, without delaying therapy",
                kind: "step",
                detail: "Two sets of blood cultures plus other site-specific cultures as indicated — but never let culture collection delay the first antibiotic dose.",
                children: [
                  {
                    id: "start-empiric-therapy",
                    label: "Start empiric therapy within the first hour",
                    kind: "step",
                    detail: "Broad-spectrum antibiotics targeted to the likely source, plus fluid resuscitation if hypotensive or hypoperfused.",
                    topicId: "sepsis",
                    children: [
                      {
                        id: "reassess-3-6-hours",
                        label: "Reassess at 3–6 hours",
                        kind: "step",
                        detail: "Repeat vitals, lactate clearance, and urine output to judge the response to initial therapy.",
                        children: [
                          {
                            id: "responding",
                            label: "Responding",
                            kind: "branch",
                            detail: "Continue source-directed therapy, narrow antibiotics once culture data returns, and de-escalate monitoring as appropriate.",
                          },
                          {
                            id: "not-responding",
                            label: "Not responding / worsening",
                            kind: "branch",
                            detail: "Escalate: reassess source control, start vasopressors if not already on board, and move to ICU-level monitoring.",
                            topicId: "shock",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "sepsis-fluid-refractory-hypotension", text: "Hypotension refractory to an initial fluid bolus — start vasopressors promptly rather than continuing large-volume fluid resuscitation alone." },
    { id: "sepsis-source-control", text: "A source amenable to drainage or debridement (abscess, empyema, necrotizing infection) — antibiotics alone will not control it; escalate for procedural or surgical source control." },
  ],
};
