import type { Pathway } from "@/content-types";

export const bleeding: Pathway = {
  id: "bleeding",
  slug: "bleeding",
  title: "Bleeding",
  oneLiner: "From assessing hemodynamic stability to correcting reversible contributors to coagulopathy.",
  startingProblem: "Bleeding",
  relatedTopicIds: [
      "bleeding",
      "transfusion",
      "anticoagulation",
      "upper-gi-bleeding",
      "lower-gi-bleeding",
      "dic",
      "shock",
      "hit"
    ],
  flow: {
    id: "assess-hemodynamic-stability",
    label: "Assess hemodynamic stability first",
    kind: "step",
    detail: "Vital signs, mentation, and capillary refill determine whether this is major, life-threatening bleeding.",
    topicId: "shock",
    children: [
      {
        id: "identify-bleeding-source",
        label: "Identify the source",
        kind: "step",
        detail: "Exam plus history — gastrointestinal, a surgical or procedural site, trauma, or an occult source (retroperitoneal, thoracic).",
        children: [
          {
            id: "send-labs-and-crossmatch",
            label: "Send type & screen/crossmatch and coagulation labs",
            kind: "step",
            detail: "CBC, coagulation panel, and fibrinogen; activate the massive transfusion protocol if bleeding is major.",
            topicId: "bleeding",
            children: [
              {
                id: "correct-reversible-contributors",
                label: "Correct reversible contributors",
                kind: "step",
                detail: "Identify and address anything actively worsening the bleeding, in parallel with source control.",
                children: [
                  {
                    id: "anticoagulant-associated",
                    label: "Anticoagulant-associated",
                    kind: "branch",
                    detail: "Identify the specific agent and last dose; use targeted reversal where one exists rather than empiric plasma.",
                  },
                  {
                    id: "coagulopathy-critical-illness",
                    label: "Coagulopathy of critical illness",
                    kind: "branch",
                    detail: "Correct with blood products guided by actual coagulation labs, not empirically.",
                    topicId: "bleeding",
                  },
                  {
                    id: "thrombocytopenia",
                    label: "Thrombocytopenia",
                    kind: "branch",
                    detail: "Assess platelet count and function; transfuse according to bleeding severity and the relevant threshold.",
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
    { id: "bleeding-hemorrhagic-shock", text: "Signs of hemorrhagic shock (tachycardia, hypotension, altered mentation) — activate the massive transfusion protocol and pursue source control in parallel with resuscitation, not after it." },
    { id: "bleeding-doac-reversal", text: "Life-threatening hemorrhage on a direct oral anticoagulant — give targeted reversal (e.g. andexanet alfa or idarucizumab, per agent) rather than relying on plasma alone." },
  ],
};
