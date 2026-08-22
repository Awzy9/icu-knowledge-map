import type { PhysiologyConcept } from "@/content-types";

export const positivePressureVentilationPhysiology: PhysiologyConcept = {
  id: "physiology.positive-pressure-ventilation-physiology",
  slug: "positive-pressure-ventilation-physiology",
  title: "Positive-Pressure Ventilation: Cardiovascular Effects",
  system: "cardiovascular",
  summary:
    "How mechanical ventilation simultaneously reduces preload (harmful in hypovolaemia and RV failure) and reduces LV afterload (beneficial in LV failure) — the same intervention can save or kill depending on what is failing.",
  definition:
    "Positive-pressure ventilation (PPV) alters cardiovascular physiology by raising intrathoracic pressure, which imposes opposing effects on the right and left ventricles: it reduces RV preload by impeding venous return, increases RV afterload by compressing pulmonary vasculature at high lung volumes, and simultaneously reduces LV afterload by lowering LV transmural pressure.",
  mechanism:
    "During spontaneous inspiration, intrathoracic pressure falls below atmospheric, increasing the pressure gradient from the peripheral venous system to the right atrium. This augments venous return and RV filling — the natural respiratory 'bellows' effect on circulation. The LV simultaneously faces increased transmural pressure (intracavitary pressure minus intrathoracic pressure) because pleural pressure is sub-atmospheric; this functionally increases LV afterload.\n\nPositive-pressure ventilation reverses these relationships. Raised intrathoracic pressure narrows the venous return gradient (mean systemic filling pressure minus right atrial pressure), reducing RV preload. If tidal volumes are large enough to cause lung overdistension, alveolar capillaries are compressed and PVR rises, increasing RV afterload further. The consequences are most severe in hypovolaemic or RV-failure patients who are already near the limit of their RV reserve.\n\nHowever, PPV simultaneously helps the left ventricle. Positive pleural pressure raises the external pressure on the LV, reducing transmural pressure for the same intracavitary pressure — the LV effectively 'works less' against a lower afterload. For patients with severe LV failure, PPV can be dramatically beneficial: reducing LV afterload increases stroke volume and reduces pulmonary oedema. This is why non-invasive ventilation in acute cardiogenic pulmonary oedema improves haemodynamics within minutes.",
  clinicalSignificance:
    "The cardiovascular effects of PPV are not uniform — they depend entirely on which ventricle is the limiting factor. PPV helps LV failure and harms RV failure and hypovolaemia. A clinician who intubates a patient with severe RV failure or haemorrhagic shock without understanding this physiology risks precipitating cardiovascular collapse at the moment of most extreme physiologic stress.",
  icuApplications: [
    "Volume-loading before intubation in hypovolaemic patients is a direct application of PPV physiology: anticipating the preload reduction that will occur and compensating before it happens.",
    "Non-invasive ventilation in acute cardiogenic pulmonary oedema works partly by reducing LV afterload and partly by offloading respiratory muscles — it is not simply oxygen delivery.",
    "Peri-intubation hypotension in a patient without obvious volume depletion should prompt consideration of whether the intubated disease (e.g. ARDS) or haemodynamic state (tamponade, RV failure) is incompatible with the venous-return consequences of PPV.",
    "The pulse pressure variation (PPV) and stroke volume variation (SVV) indices use the cyclic preload changes of mechanical ventilation to assess volume responsiveness — exploiting the same physiology in a diagnostic direction.",
    "Reducing tidal volume in patients with elevated PVR (ARDS-related cor pulmonale) is partly to limit the lung-volume-dependent increase in RV afterload from overdistension.",
  ],
  relatedConceptIds: [
    "physiology.venous-return",
    "physiology.transpulmonary-pressure",
    "physiology.preload",
    "physiology.afterload",
    "physiology.rv-failure-physiology",
    "physiology.rv-failure-dynamic",
  ],
  relatedTopicIds: [
  "mechanical-ventilation",
  "rv-failure",
  "acute-heart-failure",
  "ards"
],
  visual: {
    kind: "causal-chain",
    defaultState: "Positive-Pressure Ventilation (PPV)",
    states: [
        {
            label: "Spontaneous Breathing",
            description: "Negative pleural pressure generation augmenting systemic venous return",
            color: "blue",
            chain: [
                {
                    text: "Diaphragm contracts and moves downward"
                },
                {
                    text: "Pleural pressure becomes negative (down to -5 to -8 cmH2O)",
                    direction: "down"
                },
                {
                    text: "Right atrial pressure drops relative to mean systemic filling pressure",
                    direction: "down"
                },
                {
                    text: "Venous return gradient (Pmsf - Pra) increases",
                    direction: "up"
                },
                {
                    text: "Right ventricular filling and forward stroke volume increase",
                    direction: "up"
                },
                {
                    text: "LV transmural afterload is slightly increased by negative intrathoracic pressure",
                    direction: "neutral"
                }
            ]
        },
        {
            label: "Positive-Pressure Ventilation (PPV)",
            description: "Positive intrathoracic pressure suppressing RV venous return while unloading failing LV",
            color: "amber",
            chain: [
                {
                    text: "Ventilator delivers positive-pressure breath (Pmean > 0 cmH2O)",
                    direction: "up"
                },
                {
                    text: "Intrathoracic and pleural pressures become positive throughout inspiration",
                    direction: "up"
                },
                {
                    text: "Right atrial pressure increases, narrowing the venous return gradient",
                    direction: "down"
                },
                {
                    text: "Systemic venous return and right ventricular preload decrease",
                    direction: "down",
                    emphasis: true
                },
                {
                    text: "Alveolar expansion compresses pulmonary capillaries, increasing RV afterload",
                    direction: "up"
                },
                {
                    text: "Simultaneously, positive intrathoracic pressure lowers LV transmural systolic wall stress (afterload reduction)",
                    direction: "down"
                },
                {
                    text: "Net effect: beneficial in cardiogenic edema; potentially hypotensive in hypovolemic/preload-dependent states",
                    direction: "neutral",
                    emphasis: true
                }
            ]
        }
    ]
},
};
