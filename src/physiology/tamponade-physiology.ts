import type { PhysiologyConcept } from "@/content-types";

export const tamponadePhysiology: PhysiologyConcept = {
  "id": "physiology.tamponade-physiology",
  "slug": "tamponade-physiology",
  "title": "Cardiac Tamponade: Intrapericardial Pressure & Equalization",
  "summary": "Fluid accumulation in a fixed pericardial space causing diastolic chamber compression, equalization of end-diastolic pressures, and pulsus paradoxus.",
  "system": "cardiovascular",
  "definition": "Cardiac tamponade is an acute hemodynamic emergency where accumulation of pericardial fluid increases intrapericardial pressure above intracardiac diastolic filling pressures, impairing venous return and collapsing cardiac output.",
  "mechanism": "The normal pericardial space contains 15–50 mL of lubricating fluid. When fluid accumulates faster than the fibroelastic pericardium can stretch, intrapericardial pressure rises exponentially along its steep volume-pressure curve.\n\nElevated intrapericardial pressure compresses all four cardiac chambers, equalizing diastolic filling pressures across the right atrium, right ventricle, left atrium, and left ventricle (equalization of diastolic pressures).\n\nDuring inspiration, negative intrathoracic pressure increases venous return to the right heart. Because total cardiac volume is fixed within the tense pericardium, RV expansion can only occur by bowing the interventricular septum into the LV cavity. This sharply reduces LV end-diastolic volume and stroke volume, producing the clinical sign of Pulsus Paradoxus (>10 mmHg inspiratory drop in systolic blood pressure).",
  "clinicalSignificance": "Tamponade patients are critically dependent on tachycardia and intravascular preload to maintain marginal stroke volume. Positive pressure ventilation, vasodilators, or negative inotropes will cause immediate PEA arrest.",
  "icuApplications": [
    "Beck's Triad: Hypotension, Jugular Venous Distension, and Muffled Heart Sounds (present in only ~30% of cases; POCUS is diagnostic).",
    "POCUS hallmarks: Diastolic right ventricular outflow tract collapse, late-diastolic right atrial collapse (>1/3 of cardiac cycle), and plethoric non-collapsing IVC.",
    "Emergent pericardiocentesis is the definitive treatment — removing even 20–50 mL of fluid dramatically drops pressure on the steep compliance curve.",
    "Avoid positive pressure ventilation and intubation prior to relieving tamponade whenever possible."
  ],
  "relatedConceptIds": [
    "physiology.preload",
    "physiology.cardiac-output",
    "physiology.venous-return"
  ],
  "relatedTopicIds": [
    "shock",
    "acute-heart-failure"
  ],
  visual: {
    kind: "causal-chain",
    defaultState: "Pericardial Tamponade",
    states: [
        {
            label: "Pericardial Tamponade",
            description: "Elevated intrapericardial pressure equalizing diastolic pressures and restricting filling",
            color: "red",
            chain: [
                {
                    text: "Fluid/blood accumulates rapidly in non-compliant pericardial sac",
                    direction: "up"
                },
                {
                    text: "Intrapericardial pressure rises above normal subatmospheric levels",
                    direction: "up"
                },
                {
                    text: "Intrapericardial pressure exceeds right atrial and RV diastolic pressures",
                    direction: "up",
                    emphasis: true
                },
                {
                    text: "Diastolic chamber equalization (RAP = RVD = PAP diastolic = PCWP)",
                    direction: "neutral"
                },
                {
                    text: "Cardiac chambers compressed throughout diastole, restricting filling",
                    direction: "down"
                },
                {
                    text: "Stroke volume and cardiac output collapse (Pulsus paradoxus > 10 mmHg)",
                    direction: "down"
                },
                {
                    text: "Severe hypotension, distant heart sounds, and elevated JVP (Beck's Triad)",
                    direction: "down",
                    emphasis: true
                }
            ]
        },
        {
            label: "Pericardiocentesis Relief",
            description: "Aspiration of pericardial fluid instantly removing extrinsic constraint",
            color: "green",
            chain: [
                {
                    text: "Needle/catheter pericardiocentesis evacuates pericardial space",
                    emphasis: true
                },
                {
                    text: "Intrapericardial pressure drops immediately below intracardiac pressures",
                    direction: "down"
                },
                {
                    text: "Extrinsic compression on right and left ventricles eliminated",
                    direction: "down"
                },
                {
                    text: "Diastolic filling gradient and venous return restored",
                    direction: "up"
                },
                {
                    text: "End-diastolic volumes of all four chambers normalize",
                    direction: "up"
                },
                {
                    text: "Stroke volume and systemic arterial pressure rapidly rebound",
                    direction: "up",
                    emphasis: true
                }
            ]
        }
    ]
},
};
