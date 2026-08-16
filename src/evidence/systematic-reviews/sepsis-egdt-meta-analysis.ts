import type { SystematicReview } from "@/content-types";

export const sepsisEgdtMetaAnalysis: SystematicReview = {
  id: "sepsis-egdt-meta-analysis",
  title: "Early, Goal-Directed Therapy for Septic Shock — A Patient-Level Meta-Analysis (PRISM)",
  year: 2017,
  authorsOrGroup: "PRISM Investigators",
  doi: "10.1056/NEJMoa1701380",
  studiesIncluded: 3,
  summary:
    "A prospectively planned, individual-patient-data meta-analysis pooling the three large multicenter trials (ProCESS, ARISE, ProMISe, 2014-2015) that re-tested the original 2001 Rivers protocolized early goal-directed therapy (EGDT) — central-line-guided, ScvO2/CVP-targeted resuscitation — against usual, unprotocolized early sepsis care.",
  conclusion:
    "Protocolized EGDT did not reduce mortality compared with usual care across the pooled trials, and was associated with a higher use of ICU resources. This ended the mandate for the specific 2001 Rivers protocol as a fixed algorithm; it did not overturn the underlying principles of early recognition, cultures, timely antibiotics, and fluid resuscitation that both the protocolized and usual-care arms of these trials still received.",
  certainty: "high",
  relatedTopicIds: ["sepsis", "septic-shock"],
};
