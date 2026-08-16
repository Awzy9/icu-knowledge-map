import type { Pathway } from "@/content-types";

export const alteredConsciousness: Pathway = {
  id: "altered-consciousness",
  slug: "altered-consciousness",
  title: "Altered Consciousness",
  oneLiner: "From securing the basics to categorizing structural, toxic-metabolic, infectious, and seizure-related causes.",
  startingProblem: "Altered Consciousness",
  relatedTopicIds: [
      "altered-consciousness",
      "icu-sedation-delirium",
      "acute-liver-failure",
      "endocrine-emergencies",
      "toxicologic-emergencies",
      "diabetic-ketoacidosis",
      "sepsis",
      "aki"
    ],
  flow: {
    id: "assess-airway-and-hemodynamics",
    label: "Assess airway and hemodynamics first",
    kind: "step",
    detail: "Airway, breathing, and circulation before further workup — a falling level of consciousness threatens airway protection.",
    children: [
      {
        id: "check-fingerstick-glucose",
        label: "Check a fingerstick glucose immediately",
        kind: "step",
        detail: "Hypoglycemia is rapidly reversible and easy to miss if the workup jumps straight to imaging.",
        children: [
          {
            id: "focused-neuro-exam",
            label: "Perform a focused neurologic exam",
            kind: "step",
            detail: "Pupils, symmetry, focal deficits, Glasgow Coma Scale, and any signs of trauma.",
            children: [
              {
                id: "identify-category",
                label: "Identify likely category",
                kind: "step",
                detail: "The exam findings above usually place the picture into one of four broad categories.",
                children: [
                  {
                    id: "structural-focal",
                    label: "Structural / focal cause",
                    kind: "branch",
                    detail: "An asymmetric exam or new focal deficit points here — obtain emergent neuroimaging.",
                    topicId: "altered-consciousness",
                    children: [
                      { id: "structural-stroke", label: "Stroke / intracranial hemorrhage", kind: "branch" },
                      { id: "structural-mass", label: "Mass lesion / herniation", kind: "branch" },
                    ],
                  },
                  {
                    id: "toxic-metabolic",
                    label: "Toxic-metabolic (diffuse, symmetric)",
                    kind: "branch",
                    detail: "A symmetric exam without focal signs points here — review medications and metabolic labs.",
                    children: [
                      { id: "toxic-sedatives", label: "Sedative / opioid effect", kind: "branch" },
                      { id: "toxic-uremic-hepatic", label: "Hepatic / uremic encephalopathy", kind: "branch", topicId: "aki" },
                      { id: "toxic-glucose", label: "Severe hypo- or hyperglycemia", kind: "branch" },
                    ],
                  },
                  {
                    id: "infectious",
                    label: "Infectious",
                    kind: "branch",
                    detail: "Sepsis-associated encephalopathy or CNS infection — check for fever, meningismus, and a septic source.",
                    topicId: "sepsis",
                  },
                  {
                    id: "seizure",
                    label: "Seizure / postictal state",
                    kind: "branch",
                    detail: "Consider a witnessed or unwitnessed seizure, especially with a gradually improving exam over time.",
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
    { id: "altered-consciousness-focal-deficit", text: "New focal neurologic deficit or asymmetric pupils — obtain emergent neuroimaging; do not attribute the picture to metabolic causes without excluding a structural lesion." },
    { id: "altered-consciousness-airway", text: "GCS ≤ 8 or loss of airway-protective reflexes — secure the airway before continuing further in the workup." },
  ],
};
