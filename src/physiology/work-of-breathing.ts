import type { PhysiologyConcept } from "@/content-types";

export const workOfBreathing: PhysiologyConcept = {
  id: "physiology.work-of-breathing",
  slug: "work-of-breathing",
  title: "Work of Breathing",
  system: "respiratory",
  summary: "The mechanical effort the respiratory muscles expend to move air in and out of the lungs.",
  definition:
    "Work of breathing is the energy the respiratory muscles must generate to overcome the elastic recoil of the lung and chest wall (compliance) and the resistance to airflow (resistance) with each breath.",
  mechanism:
    "Anything that raises resistance (bronchospasm, secretions, a narrow endotracheal tube) or lowers compliance (pulmonary edema, ARDS, a stiff chest wall) increases the pressure the muscles must generate for a given tidal volume, raising work of breathing. Auto-PEEP compounds this further by requiring the muscles to first overcome the trapped alveolar pressure before inspiratory flow can even begin. Sustained high work of breathing eventually outpaces respiratory muscle endurance, leading to fatigue and, if unaddressed, ventilatory failure.",
  clinicalSignificance:
    "Rising work of breathing is one of the most reliable bedside signs that a patient's respiratory status is deteriorating, often preceding a measurable change in blood gases, and is a key driver of the decision to intubate or to escalate ventilator support.",
  icuApplications: [
    "Bedside signs — accessory muscle use, tachypnea, paradoxical abdominal movement — are a direct, real-time readout of work of breathing and a core part of the decision to intubate.",
    "Ventilator settings (trigger sensitivity, flow rate, pressure support level) are tuned specifically to minimize imposed work of breathing during weaning trials.",
    "Persistently high work of breathing despite adequate oxygenation and ventilation is itself an indication for ongoing ventilatory support, since respiratory muscle fatigue is a distinct failure mode from gas exchange failure.",
  ],
  relatedConceptIds: ["physiology.resistance", "physiology.compliance", "physiology.auto-peep"],
  relatedTopicIds: [
  "respiratory-failure-basics",
  "mechanical-ventilation"
],
};
