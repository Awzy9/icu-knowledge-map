import type { PhysiologyConcept } from "@/content-types";

export const ardsPathophysiology: PhysiologyConcept = {
  "id": "physiology.ards-pathophysiology",
  "slug": "ards-pathophysiology",
  "title": "ARDS: Alveolar-Capillary Permeability, Shunt, and PEEP Mechanics",
  "system": "respiratory",
  "summary": "Diffuse alveolar-capillary barrier disruption leading to non-cardiogenic pulmonary edema, severe intrapulmonary shunt, and the protective mechanics of positive end-expiratory pressure (PEEP).",
  "definition": "Acute Respiratory Distress Syndrome (ARDS) is an acute, diffuse, inflammatory lung injury resulting in increased alveolar-capillary permeability, non-hydrostatic protein-rich alveolar flooding, loss of functional residual capacity, and severe hypoxemia refractory to supplemental oxygen due to intrapulmonary right-to-left shunt.",
  "mechanism": "The hallmark of ARDS is disruption of both the microvascular endothelium and the alveolar epithelium by direct (pneumonia, aspiration) or indirect (sepsis, pancreatitis, trauma) insults. Activated neutrophils and alveolar macrophages release proteases, reactive oxygen species, and pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha), degrading the alveolar-capillary membrane.\n\nProtein-rich fluid floods the alveoli, inactivating pulmonary surfactant and causing widespread microatelectasis. This creates a massive intrapulmonary right-to-left shunt (perfusion without ventilation), meaning deoxygenated mixed venous blood traverses non-aerated alveolar capillary beds unchanged.\n\nApplying Positive End-Expiratory Pressure (PEEP) counteracts cyclic end-expiratory alveolar collapse (atelectrauma), recruits instable alveoli, increases functional residual capacity (FRC), and decreases intrapulmonary shunt, improving PaO2 while distributing tidal volume more homogeneously across the aerated 'baby lung'.",
  "clinicalSignificance": "Understanding ARDS as an inhomogeneous 'baby lung' dictates lung-protective ventilation (low tidal volumes 4–6 mL/kg PBW, driving pressure <14 cmH2O, Pplat ≤30 cmH2O). Excessive tidal volumes overdistend the few aerated alveoli (volutrauma/barotrauma), worsening systemic inflammation and multi-organ failure.",
  "icuApplications": [
    "Target tidal volumes to 4–6 mL/kg Predicted Body Weight (PBW) based on height/sex, never actual body weight.",
    "Titrate PEEP using high-PEEP vs low-PEEP ARDSNet tables or driving pressure minimization (Pplat - PEEP).",
    "Prone positioning (≥16 hours/day) redistributes dorsal transpulmonary pressure gradients, recruits dorsal alveoli, and reduces 28-day mortality in moderate-to-severe ARDS.",
    "Neuromuscular blockade for 48 hours in early severe ARDS eliminates patient-ventilator dyssynchrony, breath-stacking, and pendelluft gas shifting."
  ],
  "relatedConceptIds": [
    "physiology.shunt",
    "physiology.compliance",
    "physiology.driving-pressure",
    "physiology.plateau-pressure"
  ],
  "relatedTopicIds": [
    "ards",
    "mechanical-ventilation",
    "hypoxemic-respiratory-failure"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Alveolar Injury & Shunt",
    states: [
        {
            label: "Alveolar Injury & Shunt",
            description: "Permeability pulmonary edema, surfactant inactivation, and right-to-left intrapulmonary shunt",
            color: "red",
            chain: [
                {
                    text: "Direct or indirect inflammatory lung injury"
                },
                {
                    text: "Alveolar-capillary barrier disruption & permeability increase",
                    direction: "up"
                },
                {
                    text: "Protein-rich exudative fluid floods alveolar spaces",
                    direction: "up"
                },
                {
                    text: "Surfactant inactivation and destruction",
                    direction: "down"
                },
                {
                    text: "Microatelectasis and extensive alveolar collapse",
                    direction: "down"
                },
                {
                    text: "Ventilated lung volume ('baby lung') decreases",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Perfusion of unventilated alveoli creates right-to-left intrapulmonary shunt",
                    direction: "up"
                },
                {
                    text: "Refractory hypoxemia poorly responsive to supplemental FiO2",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "+ PEEP Recruitment",
            description: "Application of positive end-expiratory pressure to stent open recruitables and restore FRC",
            color: "blue",
            chain: [
                {
                    text: "Positive end-expiratory pressure (PEEP) applied",
                    direction: "up"
                },
                {
                    text: "End-expiratory alveolar collapse and cyclic decruitment prevented",
                    direction: "down"
                },
                {
                    text: "Recruitment of previously atelectatic alveolar units",
                    direction: "up"
                },
                {
                    text: "Functional residual capacity (FRC) and compliance improve",
                    direction: "up"
                },
                {
                    text: "Intrapulmonary shunt fraction decreases",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Arterial oxygenation improves at lower FiO2",
                    direction: "up"
                },
                {
                    text: "Caution: excessive PEEP causes alveolar overdistension, increased RV afterload, and impaired venous return",
                    direction: "neutral",
                    annotation: "Titrate to driving pressure <14 cmH2O and Pplat ≤30 cmH2O"
                }
            ]
        }
    ]
},
};
