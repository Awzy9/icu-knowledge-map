import type {
  CertaintyGrade,
  EvidenceCategory,
  EvidenceTier,
  Guideline,
  RecommendationStrength,
  Trial,
  TrialResultDirection,
  TrialSignificance,
} from "@/content-types";

interface EvidenceCategoryStyle {
  readonly label: string;
  readonly badgeClass: string;
  readonly dotClass: string;
}

/** Single source of truth for evidence-category color coding, so badges stay consistent everywhere they appear. */
export const evidenceCategoryStyle: Record<EvidenceCategory, EvidenceCategoryStyle> = {
  guideline: {
    label: "Guideline",
    badgeClass: "border-evidence-guideline/30 bg-evidence-guideline-tint text-evidence-guideline-text",
    dotClass: "bg-evidence-guideline",
  },
  rct: {
    label: "RCT",
    badgeClass: "border-evidence-rct/30 bg-evidence-rct-tint text-evidence-rct-text",
    dotClass: "bg-evidence-rct",
  },
  "meta-analysis": {
    label: "Meta-Analysis",
    badgeClass: "border-evidence-meta-analysis/30 bg-evidence-meta-analysis-tint text-evidence-meta-analysis-text",
    dotClass: "bg-evidence-meta-analysis",
  },
  observational: {
    label: "Observational",
    badgeClass: "border-evidence-observational/30 bg-evidence-observational-tint text-evidence-observational-text",
    dotClass: "bg-evidence-observational",
  },
  review: {
    label: "Review",
    badgeClass: "border-evidence-review/30 bg-evidence-review-tint text-evidence-review-text",
    dotClass: "bg-evidence-review",
  },
  consensus: {
    label: "Consensus",
    badgeClass: "border-evidence-consensus/30 bg-evidence-consensus-tint text-evidence-consensus-text",
    dotClass: "bg-evidence-consensus",
  },
};

/** Hex color per evidence category, for SVG contexts (e.g. KnowledgeMap nodes) where Tailwind classes don't apply. */
export const evidenceCategoryColor: Record<EvidenceCategory, string> = {
  guideline: "#2f5d82",
  rct: "#4a4fa0",
  "meta-analysis": "#7a4a8c",
  observational: "#3d7a78",
  review: "#556c99",
  consensus: "#8a6f4e",
};

/**
 * Section provenance (who authored the prose) maps loosely onto an evidence
 * category for the section-header badge — "textbook" sections have no
 * mapping and render no badge at all, since paraphrased physiology isn't
 * "evidence" in the same sense a trial or guideline is.
 */
export const provenanceToEvidenceCategory: Partial<Record<EvidenceTier, EvidenceCategory>> = {
  guideline: "guideline",
  trial: "rct",
  "systematic-review": "meta-analysis",
};

/** Single source of truth for trial → badge-category derivation (used by TrialCard, /sources, TopicReferencesSection, ...). */
export function getTrialEvidenceCategory(trial: Trial): EvidenceCategory {
  return trial.studyType === "observational" ? "observational" : "rct";
}

/** Single source of truth for guideline → badge-category derivation. */
export function getGuidelineEvidenceCategory(guideline: Guideline): EvidenceCategory {
  return guideline.strength === "expert-opinion" ? "consensus" : "guideline";
}

/** Small, typographic tag labels — binary/ternary flags, not a full color-coded category system like evidenceCategoryStyle. */
export const significanceLabel: Record<TrialSignificance, string> = {
  landmark: "Landmark",
  recent: "Recent",
};

export const resultDirectionLabel: Record<TrialResultDirection, string> = {
  positive: "Positive",
  "negative-neutral": "Negative / neutral",
  contradictory: "Contradictory",
};

export const certaintyLabel: Record<CertaintyGrade, string> = {
  high: "High certainty",
  moderate: "Moderate certainty",
  low: "Low certainty",
  "very-low": "Very low certainty",
};

/** Filled-dot count out of 4, used for a compact typographic certainty indicator (no gimmicky meter graphics). */
export const certaintyDots: Record<CertaintyGrade, number> = {
  high: 4,
  moderate: 3,
  low: 2,
  "very-low": 1,
};

export const recommendationStrengthLabel: Record<RecommendationStrength, string> = {
  strong: "Strong recommendation",
  conditional: "Conditional recommendation",
  "expert-opinion": "Expert opinion",
};
