import type { PhysiologyConcept } from "@/content-types";

export const shunt: PhysiologyConcept = {
  id: "physiology.shunt",
  slug: "shunt",
  title: "Shunt",
  system: "respiratory",
  summary: "Blood that bypasses ventilated alveoli entirely, producing hypoxemia that resists supplemental oxygen.",
  definition:
    "Shunt is the extreme end of the V/Q spectrum (V/Q = 0): blood perfuses a lung unit that receives no ventilation at all, so it returns to the arterial circulation without picking up oxygen. Physiologic shunt (from collapsed or fluid-filled alveoli) is distinguished from true anatomic shunt (structural vascular connections that bypass the lung entirely, such as an intracardiac shunt).",
  mechanism:
    "Because shunted blood never contacts a ventilated alveolus, raising the inspired oxygen fraction cannot improve its oxygen content — only the blood that does pass through ventilated alveoli benefits from a higher FiO2, which is diluted by the desaturated shunted blood once they mix. This is why hypoxemia from a large shunt fraction plateaus despite escalating FiO2, in contrast to low-V/Q hypoxemia, which keeps improving as FiO2 rises. The only way to improve oxygenation from true shunt is to convert the unventilated units back into ventilated ones — recruitment.",
  clinicalSignificance:
    "Poor response of PaO2 to rising FiO2 is a bedside signature of significant shunt and should redirect management toward recruitment strategies rather than simply increasing oxygen delivery to the airway.",
  icuApplications: [
    "Explains the physiologic rationale for PEEP and prone positioning in ARDS — both aim to reopen shunted alveolar units.",
    "A patient who remains severely hypoxemic on FiO2 1.0 despite a 'reasonable' PEEP has, by definition, a large shunt fraction that recruitment maneuvers are meant to address.",
    "Helps set expectations at the bedside: chasing FiO2 higher in a shunt-dominant patient has diminishing and eventually negligible returns.",
  ],
  relatedConceptIds: ["physiology.ventilation-perfusion-mismatch", "physiology.dead-space", "physiology.oxygen-delivery-equation"],
  relatedTopicIds: [
  "ards",
  "cardiogenic-pulmonary-edema"
],
  visual: { kind: "vq-spectrum", defaultRatio: 0.1 },
};
