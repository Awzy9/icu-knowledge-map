import type { PhysiologyConcept } from "@/content-types";

export const ventilationPerfusionMismatch: PhysiologyConcept = {
  id: "physiology.ventilation-perfusion-mismatch",
  slug: "ventilation-perfusion-mismatch",
  title: "Ventilation-Perfusion Mismatch",
  system: "respiratory",
  summary: "Why inflamed, fluid-filled alveoli cause hypoxemia that often resists supplemental oxygen alone.",
  definition:
    "The V/Q ratio compares alveolar ventilation to alveolar perfusion. Normal gas exchange depends on the two being matched at the alveolar level (V/Q ≈ 0.8–1.0); mismatch occurs whenever a lung unit's ventilation and perfusion fall out of proportion to each other.",
  mechanism:
    "When alveoli are perfused but inadequately ventilated — filled with inflammatory exudate, as in ARDS, or collapsed, as in atelectasis — blood passes through without picking up oxygen, producing low-V/Q physiology. At the extreme, when ventilation is essentially zero, this becomes true shunt. Low-V/Q hypoxemia still improves somewhat with supplemental oxygen because some ventilation is still reaching the unit; true shunt does not improve, because the shunted blood never contacts a ventilated alveolus regardless of the inspired oxygen fraction.",
  clinicalSignificance:
    "The response of hypoxemia to supplemental oxygen is a bedside clue to where a patient sits on the V/Q spectrum: poor response points toward shunt and the need for alveolar recruitment (PEEP, prone positioning) rather than more FiO2.",
  icuApplications: [
    "Explains why severe ARDS hypoxemia often persists despite FiO2 of 1.0 — the underlying problem is unventilated, perfused lung, not insufficient inspired oxygen.",
    "Provides the physiologic rationale for PEEP and prone positioning: both aim to reopen collapsed or fluid-filled alveoli and reduce shunt fraction.",
    "Helps distinguish shunt-dominant hypoxemia (ARDS, pneumonia, atelectasis) from dead-space-dominant processes (pulmonary embolism), which raise PaCO2 rather than lower PaO2.",
  ],
  relatedConceptIds: ["physiology.shunt", "physiology.dead-space", "physiology.oxygen-delivery-equation"],
  relatedTopicIds: [
  "ards"
],
  visual: { kind: "vq-spectrum", defaultRatio: 1 },
};
