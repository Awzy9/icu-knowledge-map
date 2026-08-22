import type { PhysiologyConcept } from "@/content-types";

export const oxygenDeliveryDo2: PhysiologyConcept = {
  "id": "physiology.oxygen-delivery-do2",
  "slug": "oxygen-delivery-do2",
  "title": "Oxygen Delivery (DO2): The 3 Pillars & Failure Modes",
  "system": "cardiovascular",
  "summary": "The definitive oxygen delivery equation (DO2 = CO × CaO2), arterial oxygen content determinants, and the three distinct physiological modes of circulatory delivery failure.",
  "definition": "Oxygen Delivery (DO2) is the total volume of oxygen delivered to the systemic microcirculation per minute, calculated as the product of Cardiac Output (CO) and Arterial Oxygen Content (CaO2): DO2 = CO × [(1.34 × Hb × SaO2) + (0.003 × PaO2)]. Normal resting DO2 is ~900–1,100 mL O2/min (or ~500–600 mL/min/m2).",
  "mechanism": "Arterial oxygen content (CaO2) is determined overwhelmingly by hemoglobin-bound oxygen; dissolved oxygen in plasma (0.003 × PaO2) contributes less than 2% of total content under normobaric conditions.\n\nOxygen Delivery can fail through three distinct physiological mechanisms:\n1. Flow Failure (Cardiogenic/Hypovolemic Shock): Cardiac output collapses, but hemoglobin and arterial oxygen saturation are normal. (Treated with inotropes, vasopressors, or fluids).\n2. Anemic Failure (Severe Hemorrhage / Critical Anemia): Hemoglobin drops below critical thresholds, halving CaO2 despite hyperdynamic cardiac output. (Treated with red blood cell transfusion).\n3. Hypoxic Failure (Severe ARDS / Shunt / Hypoventilation): SaO2 plummets due to severe alveolar gas exchange impairment, desaturating available hemoglobin. (Treated with PEEP, recruitment, FiO2, prone positioning).\n\nWhen DO2 drops below the critical oxygen delivery threshold (DO2crit), tissue oxygen consumption (VO2) becomes supply-dependent, forcing cells into anaerobic glycolysis with lactate generation and cellular death.",
  "clinicalSignificance": "Analyzing DO2 breakdown reveals that administering inotropes for anemic hypoxia is useless, and transfusing blood for cardiogenic pump failure is suboptimal. Targeted therapy must address the specific failing component of the DO2 equation.",
  "icuApplications": [
    "Track Mixed Venous Oxygen Saturation (SvO2 > 65–70%) or ScvO2 (> 70%) as a surrogate for global oxygen delivery/consumption balance.",
    "Restrictive transfusion threshold (Hb < 7 g/dL) is safe in most non-bleeding ICU patients; liberal thresholds (Hb < 8 g/dL) apply to acute myocardial ischemia.",
    "In severe hypoxemia with SaO2 80%, raising SaO2 to 95% via PEEP/proning increases DO2 by ~18% without touching cardiac output.",
    "Elevated lactate with low ScvO2 (<60%) indicates critical supply-dependency requiring immediate DO2 optimization."
  ],
  "relatedConceptIds": [
    "physiology.oxygen-delivery-equation",
    "physiology.do2-vo2-relationship",
    "physiology.cardiac-output",
    "physiology.shunt"
  ],
  "relatedTopicIds": [
    "shock",
    "ards",
    "septic-shock",
    "cardiogenic-shock"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Shock / Inadequate DO2",
    states: [
        {
            label: "Shock / Inadequate DO2",
            description: "Critical delivery mismatch below VO2 threshold causing supply dependency and anaerobic metabolism",
            color: "red",
            chain: [
                {
                    text: "Impairment in one or more DO2 components: DO2 = CO × [ (1.34 × Hb × SaO2) + (0.0031 × PaO2) ]"
                },
                {
                    text: "Hemorrhage (Hb ↓), severe hypoxia (SaO2 ↓), or pump failure (CO ↓)",
                    direction: "down"
                },
                {
                    text: "Total systemic oxygen delivery falls below critical DO2 threshold (~7.3 mL/kg/min)",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Tissue oxygen consumption (VO2) becomes pathologically supply-dependent",
                    direction: "down"
                },
                {
                    text: "Cellular mitochondrial respiration fails to sustain ATP generation",
                    direction: "down"
                },
                {
                    text: "Anaerobic glycolysis increases pyruvate conversion to lactate",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Elevated serum lactate, base deficit, and progressive metabolic dysoxia",
                    direction: "up"
                }
            ]
        },
        {
            label: "DO2 Optimization",
            description: "Targeted support of cardiac output, hemoglobin, and arterial saturation",
            color: "green",
            chain: [
                {
                    text: "Identify and correct limiting variables in DO2 equation",
                    emphasis: true
                },
                {
                    text: "Optimize cardiac output via volume resuscitation and inotropic/vasopressor support",
                    direction: "up"
                },
                {
                    text: "Restore hemoglobin concentration with packed red blood cell transfusion when indicated (target Hb ≥7 g/dL)",
                    direction: "up"
                },
                {
                    text: "Optimize oxygenation to maintain SaO2 ≥92–96%",
                    direction: "up"
                },
                {
                    text: "Total systemic oxygen delivery (DO2) rises above critical supply threshold",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Mitochondrial aerobic oxidative phosphorylation resumes",
                    direction: "up"
                },
                {
                    text: "Lactate clearance accelerates and tissue dysoxia resolves",
                    direction: "down",
                    emphasis: true
                }
            ]
        }
    ]
},
};
