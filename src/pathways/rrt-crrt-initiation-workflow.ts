import type { Pathway } from "@/content-types";

export const rrtCrrtInitiationWorkflow: Pathway = {
  id: "rrt-crrt-initiation-workflow",
  slug: "rrt-crrt-initiation-workflow",
  title: "Renal Replacement Therapy & CRRT Initiation",
  oneLiner: "From urgent 'AEIOU' indication screening and modality selection to vascular access, dosing, and anticoagulation.",
  startingProblem: "Severe Acute Kidney Injury (KDIGO Stage 3) / Metabolic Urgency",
  relatedTopicIds: [
      "crrt",
      "aki",
      "metabolic-acidosis",
      "hyperkalemia",
      "severe-sodium-disorders",
      "toxicologic-emergencies"
    ],
  flow: {
    id: "evaluate-urgent-aeiou-indications",
    label: "Evaluate urgent 'AEIOU' indications for emergency dialysis",
    kind: "step",
    role: "assessment",
    detail: "Acidosis (refractory pH < 7.15), Electrolytes (refractory K+ > 6.5 mEq/L), Ingestion (toxic alcohols/salicylates/lithium), Overload (refractory pulmonary edema), Uremia (encephalopathy, pericardial friction rub, bleeding).",
    topicId: "crrt",
    children: [
      {
        id: "select-rrt-modality",
        label: "Select RRT modality based on hemodynamic stability",
        kind: "branch",
        role: "decision",
        detail: "Continuous Renal Replacement Therapy (CRRT: CVVHDF/CVVH) is preferred for hemodynamically unstable patients or elevated ICP; Intermittent Hemodialysis (IHD) or SLED for stable patients.",
        children: [
          {
            id: "place-dialysis-catheter",
            label: "Insert temporary non-tunneled dialysis catheter",
            kind: "step",
            role: "intervention",
            detail: "Preferred site: Right Internal Jugular vein under real-time ultrasound guidance. Second-line: Femoral vein (>=20–24 cm length catheter). Avoid subclavian vein to prevent central vein stenosis.",
            children: [
              {
                id: "prescribe-effluent-dose",
                label: "Prescribe delivered effluent dose: 20–25 mL/kg/hour",
                kind: "step",
                role: "intervention",
                detail: "KDIGO guideline standard. Prescribe 25–30 mL/kg/h to account for expected downtime (filter clotted, procedures, bag changes).",
                topicId: "aki",
                children: [
                  {
                    id: "select-circuit-anticoagulation",
                    label: "Select circuit anticoagulation strategy",
                    kind: "branch",
                    role: "decision",
                    detail: "Regional Citrate Anticoagulation (RCA) is first-line per KDIGO guidelines. Systemic unfractionated heparin or no anticoagulation if severe bleeding risk / coagulopathy.",
                    children: [
                      {
                        id: "rca-monitoring-protocol",
                        label: "Regional Citrate: Monitor post-filter iCa & Total/Free Calcium ratio",
                        kind: "step",
                        role: "reassessment",
                        detail: "Target post-filter ionized Ca 0.25–0.35 mmol/L. Monitor systemic ionized Ca (target 1.1–1.3) and total-to-ionized calcium ratio (<2.5 to exclude citrate accumulation).",
                      },
                      {
                        id: "heparin-monitoring-protocol",
                        label: "Heparin / No Anticoagulation: Monitor circuit pressures & filter life",
                        kind: "step",
                        role: "reassessment",
                        detail: "Track transmembrane pressure (TMP) and filter pressure drop. Flush circuit periodically with normal saline if no anticoagulation used.",
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
    { id: "crrt-citrate-toxicity-triad", text: "Citrate toxicity / 'citrate lock' — marked anion gap metabolic acidosis, rising total-to-ionized calcium ratio > 2.5, and refractory ionized hypocalcemia. Stop citrate infusion immediately and escalate calcium replacement." },
    { id: "crrt-dialysis-disequilibrium", text: "Rapid BUN reduction causing severe cerebral edema and seizures (Dialysis Disequilibrium Syndrome) — use gentle initiation (low blood flow rate, short duration, or CRRT) in patients with baseline BUN > 100–150 mg/dL." },
  ],
};
