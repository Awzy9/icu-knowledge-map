import type { RelationshipType } from "@/content-types";

/** Single source of truth for relationship-type display labels — used by RelationshipTree, the graph's "why this connects" panel, and the topic page's "Where Next?" section. */
export const relationshipTypeLabel: Record<RelationshipType, string> = {
  "related-to": "Related topics",
  "treated-with": "Treated with",
  complication: "Complications",
  physiology: "Physiology",
  evidence: "Evidence",
  guideline: "Guidelines",
  differential: "Differential diagnosis",
  prerequisite: "Prerequisite knowledge",
};
