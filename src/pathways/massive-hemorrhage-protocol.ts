import type { Pathway } from "@/content-types";

export const massiveHemorrhageProtocol: Pathway = {
  id: "massive-hemorrhage-protocol",
  slug: "massive-hemorrhage-protocol",
  title: "Massive Hemorrhage & Hemostatic Resuscitation",
  oneLiner: "From emergent MTP activation and balanced 1:1:1 component transfusion to lethal triad reversal, targeted factor antidotes, and source control.",
  startingProblem: "Massive Hemorrhage / Exsanguinating Trauma / Severe GI Bleeding",
  relatedTopicIds: [
      "bleeding",
      "transfusion",
      "anticoagulation",
      "dic",
      "upper-gi-bleeding",
      "lower-gi-bleeding",
      "shock",
      "hit"
    ],
  flow: {
    id: "activate-massive-transfusion-protocol",
    label: "Activate Massive Transfusion Protocol (MTP) immediately",
    kind: "step",
    role: "intervention",
    detail: "Criteria: hemodynamic instability with active severe hemorrhage, anticipated transfusion >4 PRBC units in 1h or >10 units in 24h. Notify blood bank and establish blood-warmer rapid infusor.",
    topicId: "bleeding",
    children: [
      {
        id: "balanced-component-transfusion",
        label: "Deliver balanced 1:1:1 transfusion: PRBC : FFP : Platelets",
        kind: "step",
        role: "intervention",
        detail: "Prevents dilutional coagulopathy and thrombocytopenia. Administer 1 adult dose of platelets for every 4–6 units of PRBCs and FFPs.",
        children: [
          {
            id: "administer-tranexamic-acid",
            label: "Administer Tranexamic Acid (TXA 1 g IV bolus over 10 min, then 1 g over 8h)",
            kind: "step",
            role: "intervention",
            detail: "Give as early as possible within 3 hours of bleeding onset (CRASH-2 trial demonstrated significant mortality reduction).",
            children: [
              {
                id: "reverse-lethal-triad-and-anticoagulants",
                label: "Simultaneously correct the 'Lethal Triad' & reverse specific anticoagulants",
                kind: "branch",
                role: "decision",
                detail: "Target: Temperature > 36°C (forced-air warmer/fluids), pH > 7.20, Ionized Calcium > 1.1 mmol/L (give 1 g IV calcium chloride per 4 units blood to counter citrate).",
                children: [
                  {
                    id: "target-specific-anticoagulant-reversal",
                    label: "DOAC / Warfarin / Heparin Reversal",
                    kind: "step",
                    role: "intervention",
                    detail: "Warfarin: 4-Factor PCC (25–50 U/kg) + IV Vitamin K 10 mg. Dabigatran: Idarucizumab 5 g. Apixaban/Rivaroxaban: Andexanet alfa or 4-Factor PCC (50 U/kg). Heparin: Protamine sulfate.",
                  },
                  {
                    id: "definitive-source-control",
                    label: "Pursue definitive endoscopic / surgical / interventional source control",
                    kind: "step",
                    role: "intervention",
                    detail: "Endoscopy for GI bleed, surgical packing/hemostasis, or interventional radiology angioembolization.",
                  },
                ],
              },
              {
                id: "monitor-viscoelastic-labs-de-escalation",
                label: "Guide targeted replacement with TEG/ROTEM & de-escalate MTP",
                kind: "step",
                role: "reassessment",
                detail: "Target: Fibrinogen > 1.5–2.0 g/L (give Cryoprecipitate if low), Platelets > 50,000 (100,000 in neurotrauma), INR < 1.5. De-escalate MTP once surgical hemostasis is verified.",
                topicId: "bleeding",
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "mtp-citrate-hypocalcemia", text: "Severe hypocalcemia during rapid massive transfusion — ionized calcium falls precipitously as citrate binds calcium, causing electromechanical dissociation and profound myocardial depression; replace 1 g IV calcium chloride every 4 blood units." },
    { id: "mtp-hyperkalemia-stored-blood", text: "Hyperkalemic cardiac arrest during rapid transfusion of stored PRBC units in acidotic/hypotensive patients — monitor potassium continuously and have calcium chloride and shifting agents ready." },
  ],
};
