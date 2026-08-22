import type { PhysiologyConcept } from "@/content-types";

export const dkaPhysiology: PhysiologyConcept = {
  "id": "physiology.dka-physiology",
  "slug": "dka-physiology",
  "title": "Diabetic Ketoacidosis: Insulin Deficiency, Ketogenesis, and Potassium Paradox",
  "system": "acid-base",
  "summary": "Severe absolute or relative insulin deficiency driving lipolysis, hepatic ketogenesis, profound osmotic diuresis, and whole-body potassium depletion.",
  "definition": "Diabetic Ketoacidosis (DKA) is a life-threatening metabolic disorder characterized by the triad of hyperglycemia, high anion gap metabolic acidosis, and ketonemia resulting from absolute or severe relative insulin deficiency combined with counter-regulatory hormone excess (glucagon, catecholamines, cortisol).",
  "mechanism": "Insulin deficiency combined with high glucagon uninhibits hormone-sensitive lipase in adipose tissue, releasing massive quantities of free fatty acids (FFAs) into the circulation. In hepatocytes, carnitine palmitoyltransferase-1 (CPT-1) channels FFAs into mitochondrial beta-oxidation, producing acetoacetate and beta-hydroxybutyrate.\n\nThese ketoacids dissociate into hydrogen ions and ketoacid anions, consuming serum bicarbonate and creating a severe High Anion Gap Metabolic Acidosis (HAGMA). Concurrently, severe hyperglycemia exceeds the renal tubular absorptive threshold (180 mg/dL), driving profound osmotic diuresis with massive urinary loss of water, sodium, potassium, and magnesium.\n\nThe Potassium Paradox: Acidosis, insulinopenia, and hyperosmolarity shift potassium OUT of cells into the bloodstream, making initial serum potassium appear normal or high despite catastrophic total-body potassium deficits (300–600 mEq). Starting insulin drives potassium rapidly back into cells, causing lethal hypokalemia unless potassium is repleted concurrently.",
  "clinicalSignificance": "Understanding the potassium paradox prevents the fatal mistake of starting insulin in hypokalemic DKA patients (K+ < 3.5 mEq/L).",
  "icuApplications": [
    "Restore intravascular volume with isotonic balanced crystalloids (1–2 L in the first 1–2 hours).",
    "Verify serum potassium is > 3.5 mEq/L before starting regular insulin infusion (0.1 units/kg/hr).",
    "When blood glucose drops to ~200–250 mg/dL, add Dextrose (D5W / D10W) to IV fluids and continue the insulin infusion until the anion gap closes.",
    "Monitor beta-hydroxybutyrate and venous blood gas rather than urine ketones (which detect acetoacetate, not beta-hydroxybutyrate)."
  ],
  "relatedConceptIds": [
    "physiology.anion-gap",
    "physiology.potassium-handling",
    "physiology.delta-gap"
  ],
  "relatedTopicIds": [
    "diabetic-ketoacidosis",
    "metabolic-acidosis",
    "acid-base-disorders"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Pathogenesis (Insulin Deficiency & Ketosis)",
    states: [
        {
            label: "Pathogenesis (Insulin Deficiency & Ketosis)",
            description: "Absolute insulin lack driving lipolysis, ketogenesis, and severe osmotic diuresis",
            color: "red",
            chain: [
                {
                    text: "Absolute or relative insulin deficiency + counter-regulatory hormone surge (glucagon, cortisol, catecholamines)"
                },
                {
                    text: "Hepatic gluconeogenesis & glycogenolysis uninhibited → severe hyperglycemia (>250–500 mg/dL)",
                    direction: "up"
                },
                {
                    text: "Uninhibited adipose lipolysis releases free fatty acids into circulation",
                    direction: "up"
                },
                {
                    text: "Hepatic beta-oxidation converts free fatty acids into acetoacetate & beta-hydroxybutyrate",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Ketoacid accumulation produces high anion gap metabolic acidosis",
                    direction: "up"
                },
                {
                    text: "Renal glucose threshold exceeded → profound osmotic diuresis and electrolyte wasting (5–8 L deficit)",
                    direction: "down"
                },
                {
                    text: "Hypovolemia, prerenal AKI, and compensatory Kussmaul hyperventilation",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Resuscitation (+ Fluids, Insulin, K+)",
            description: "Restoration of volume, suppression of ketogenesis, and potassium repletion",
            color: "green",
            chain: [
                {
                    text: "Isotonic balanced crystalloid resuscitation restores effective circulating volume and GFR",
                    direction: "up"
                },
                {
                    text: "Verify serum K+ ≥ 3.5 mEq/L before starting insulin to prevent fatal hypokalemic arrhythmia",
                    direction: "neutral",
                    emphasis: true
                },
                {
                    text: "Continuous IV regular insulin infusion (0.1 units/kg/h) initiated",
                    direction: "up"
                },
                {
                    text: "Insulin halts adipose lipolysis and shuts down hepatic ketoacid production",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Bicarbonate regenerates as circulating ketoacids are metabolized",
                    direction: "up"
                },
                {
                    text: "Anion gap closes and metabolic acidosis resolves",
                    direction: "down"
                },
                {
                    text: "Dextrose added when glucose < 200–250 mg/dL to permit continued insulin until ketoacidosis clears",
                    direction: "neutral"
                }
            ]
        }
    ]
},
};
