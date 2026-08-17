import type { ClinicalProblem } from "@/content-types";

export const rapidlyProgressiveWeaknessVentilatoryFailure: ClinicalProblem = {
  id: "rapidly-progressive-weakness-ventilatory-failure",
  slug: "rapidly-progressive-weakness-ventilatory-failure",
  title: "Rapidly Progressive Weakness / Impending Ventilatory Failure",
  category: "neurologic",
  oneLiner: "Bedside assessment and airway decision-making in rapidly ascending or fatiguable weakness risking ventilatory pump failure.",
  relatedTopicIds: [
    "neuromuscular-critical-illness",
    "mechanical-ventilation",
    "hypercapnic-respiratory-failure",
    "toxicologic-emergencies",
    "severe-sodium-disorders",
    "hyperkalemia",
    "icu-sedation-delirium",
  ],
  body: [
    {
      type: "paragraph",
      text: "Rapidly progressive neuromuscular weakness in the ICU signals impending ventilatory pump failure. Unlike parenchymal lung disease, patients with neuromuscular failure maintain normal arterial blood gases until terminal diaphragmatic exhaustion occurs. Bedside decision-making relies on serial pulmonary mechanics, cough strength, bulbar airway protection, and autonomic stability.",
    },
    {
      type: "callout",
      tone: "caution",
      text: "Fatal Medication Mistake: Succinylcholine is strictly contraindicated in Guillain-Barré syndrome, motor neuron disease, spinal cord injury, and prolonged immobility due to denervation-induced extrajunctional receptor upregulation causing catastrophic hyperkalemic cardiac arrest. Always use Rocuronium.",
    },
    {
      type: "key-value-table",
      rows: [
        {
          label: "1. SERIAL 20/30/40 BEDSIDE MECHANICS",
          value: "• Forced Vital Capacity (FVC): < 20 mL/kg represents critical ventilatory reserve loss indicating elective intubation.\n• Negative Inspiratory Force (NIF/MIP): Worse than -30 cmH2O (-20 to 0 cmH2O) indicates inspiratory muscle exhaustion.\n• Maximum Expiratory Pressure (MEP): < 40 cmH2O indicates loss of abdominal expulsive force predicting ineffective cough and secretion asphyxiation.\n• Single-Breath Count: Inability to count to 20 on a single breath correlates with FVC < 20 mL/kg.",
        },
        {
          label: "2. BULBAR & TRAJECTORY ASSESSMENT",
          value: "• Bulbar Failure Indicators: Dysphagia, nasal speech, pooling of oral secretions, weak cough, inability to clear saliva.\n• Neck Flexor Weakness: Inability to lift head from pillow strongly correlates with impending diaphragmatic paralysis.\n• Trajectory: A rapid downward trajectory over 6–12 hours supersedes single threshold numbers.",
        },
        {
          label: "3. SYNDROMIC DIFFERENTIATION",
          value: "• Guillain-Barré Syndrome (GBS): Ascending symmetric flaccid paralysis, areflexia, autonomic blood pressure lability, bradyarrhythmias.\n• Myasthenic Crisis: Fatiguable weakness, ptosis, diplopia, prominent bulbar weakness, triggered by infection, surgery, or medications.\n• Botulism: Acute descending paralysis, early dilated pupils, dry mouth, clear sensorium.\n• ICU-Acquired Weakness (CIP/CIM): Diffuse weakness in septic or prolonged mechanically ventilated patients (MRC score < 48/60).",
        },
        {
          label: "4. TARGETED IMMUNOTHERAPY & RESCUE",
          value: "• GBS: IVIG (2 g/kg over 2–5 days) or Plasma Exchange (5 exchanges over 10–14 days). Corticosteroids are NOT effective.\n• Myasthenic Crisis: Plasma Exchange or IVIG + hold oral pyridostigmine + initiate corticosteroids with IVIG/PLEX cover.\n• Botulism: Immediate Heptavalent Botulinum Antitoxin (BAT).",
        },
      ],
    },
  ],
};
