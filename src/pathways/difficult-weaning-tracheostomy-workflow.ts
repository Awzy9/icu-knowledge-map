import type { Pathway } from "@/content-types";

export const difficultWeaningTracheostomyWorkflow: Pathway = {
  id: "difficult-weaning-tracheostomy-workflow",
  slug: "difficult-weaning-tracheostomy-workflow",
  title: "Difficult Ventilator Weaning & Tracheostomy Workflow",
  oneLiner: "From identifying weaning failure pathophysiology to progressive conditioning, tracheostomy timing (days 7–14), and speaking valve decannulation.",
  startingProblem: "Prolonged Mechanical Ventilation (>7 Days) / Repeated SBT Failures",
  relatedTopicIds: ["mechanical-ventilation", "airway-management-rsi", "respiratory-failure-basics"],
  flow: {
    id: "systematic-weaning-failure-workup",
    label: "Perform systematic weaning failure diagnostic workup",
    kind: "step",
    role: "assessment",
    detail: "Evaluate four categories: 1. Neuromuscular (ICU-acquired weakness, diaphragmatic atrophy); 2. Cardiovascular (occult myocardial ischemia, diastolic dysfunction unmasked by positive pressure removal); 3. Respiratory load (Auto-PEEP, high airway resistance, dynamic collapse); 4. Neuropsychological (delirium, panic, severe anxiety).",
    topicId: "mechanical-ventilation",
    children: [
      {
        id: "optimize-reversible-contributors",
        label: "Correct reversible contributors & implement diaphragmatic rest cycles",
        kind: "step",
        role: "intervention",
        detail: "Optimize volume status (negative fluid balance), correct hypophosphatemia/hypomagnesemia/hypokalemia, treat occult bronchospasm, and ensure full nocturnal ventilator rest to avoid diaphragmatic fatigue.",
        children: [
          {
            id: "evaluate-tracheostomy-indication",
            label: "Evaluate tracheostomy timing and indication (anticipated ventilation >10–14 days)",
            kind: "branch",
            role: "decision",
            detail: "Early/timely tracheostomy (days 7–14) reduces dead space and airway resistance, facilitates bronchopulmonary toilet, improves patient comfort, enables oral nutrition, and shortens ICU stay.",
            topicId: "airway-management-rsi",
            children: [
              {
                id: "perform-percutaneous-tracheostomy",
                label: "Execute Bedside Percutaneous Dilatational Tracheostomy (PDT)",
                kind: "step",
                role: "intervention",
                detail: "Perform under simultaneous real-time bronchoscopic visualization and ultrasound guidance. Place between 1st–2nd or 2nd–3rd tracheal rings.",
              },
              {
                id: "progressive-tracheostomy-weaning",
                label: "Progressive tracheostomy collar sprints & Passy-Muir speaking valve",
                kind: "step",
                role: "intervention",
                detail: "Initiate progressive daily tracheostomy collar trials (increasing from 1h to 12h/day); deflate cuff and place one-way speaking valve to restore subglottic pressure and laryngeal sensation.",
                children: [
                  {
                    id: "decannulation-criteria",
                    label: "Decannulation criteria: 24h continuous collar + strong cough + cuff leak",
                    kind: "step",
                    role: "reassessment",
                    detail: "Tolerates 24h collar breathing, clears secretions independently without frequent suctioning (<2 suctions/shift), and demonstrates swallow competence.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  redFlags: [
    { id: "trach-accidental-decannulation-early", text: "Accidental decannulation within the first 7–10 days post-procedure (before mature tract formation) — do NOT attempt blind reinsertion through the stoma; perform immediate oral endotracheal re-intubation." },
    { id: "trach-innominate-artery-fistula", text: "Pulsatile tracheostomy tube or sentinel bleeding from the stoma — suspect tracheoinnominate artery fistula; hyperinflate cuff, apply digital pressure against sternum, and transport immediately to operating room." },
  ],
};
