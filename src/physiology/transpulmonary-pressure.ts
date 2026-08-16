import type { PhysiologyConcept } from "@/content-types";

export const transpulmonaryPressure: PhysiologyConcept = {
  id: "physiology.transpulmonary-pressure",
  slug: "transpulmonary-pressure",
  title: "Transpulmonary Pressure",
  system: "respiratory",
  summary: "The pressure that actually stretches the lung itself, once chest wall and pleural pressure are accounted for.",
  definition:
    "Transpulmonary pressure (PL) is the difference between alveolar pressure and pleural pressure (PL = Palv − Ppl). It represents the true distending pressure across the lung, separate from the pressure needed to move the chest wall and abdomen.",
  mechanism:
    "Plateau pressure alone doesn't distinguish how much of the applied airway pressure is spent distending the lung versus moving a stiff chest wall or a distended abdomen. In a patient with a very compliant chest wall, a given Pplat corresponds to a higher transpulmonary pressure (more of it reaches the lung); in a patient with a stiff chest wall or high intra-abdominal pressure, the same Pplat corresponds to a lower transpulmonary pressure, because more of the applied pressure is absorbed by the chest wall itself. Estimating pleural pressure (commonly with an esophageal balloon) allows transpulmonary pressure to be calculated directly rather than inferred from Pplat alone.",
  clinicalSignificance:
    "Two patients with an identical plateau pressure can have very different true lung stress if their chest wall compliance differs — transpulmonary pressure resolves this ambiguity, which matters most in patients with obesity, ascites, or abdominal compartment physiology, where Pplat alone can be misleading.",
  icuApplications: [
    "Esophageal balloon-guided ventilation is used in select severe ARDS cases, particularly with a stiff chest wall or elevated intra-abdominal pressure, to titrate PEEP by transpulmonary rather than plateau pressure.",
    "Explains why a 'high' plateau pressure may still be lung-protective in a patient with a stiff chest wall (e.g. morbid obesity, large-volume ascites) once transpulmonary pressure is accounted for.",
    "Provides the physiologic rationale for interpreting plateau pressure cautiously rather than as an absolute lung-stress number in every patient.",
  ],
  relatedConceptIds: ["physiology.plateau-pressure", "physiology.driving-pressure", "physiology.compliance"],
  relatedTopicIds: ["ards", "mechanical-ventilation"],
};
