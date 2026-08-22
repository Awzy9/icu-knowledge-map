/**
 * Stable Content ID System
 *
 * A single canonical identifier format shared by favorites, study sets,
 * search, recommendations, progress, and cross-links:
 *
 *     "<kind>:<localId>"      e.g. "topic:ards", "medication:norepinephrine"
 *
 * Rules:
 * - Page titles are NEVER used as persistent identifiers.
 * - The localId is whatever that content type already uses as its own stable
 *   key in the registry (topic id, medication slug, case slug, rapid decision
 *   id, …). We do not renumber or re-key existing content.
 * - Parsing is tolerant of a legacy bare id (no prefix) so previously stored
 *   bookmarks continue to resolve after migration.
 */

export const CONTENT_KINDS = [
  "topic",
  "section",
  "medication",
  "physiology",
  "pathway",
  "problem",
  "case",
  "rapid-decision",
  "error-hunt",
  "flashcard",
  "question",
  "trial",
  "guideline",
  "systematic-review",
  "calculator",
  "comparison",
] as const;

export type ContentKind = (typeof CONTENT_KINDS)[number];

const KIND_SET: ReadonlySet<string> = new Set(CONTENT_KINDS);

export interface ParsedContentId {
  readonly kind: ContentKind;
  readonly localId: string;
}

/** Builds a canonical content id, e.g. formatContentId("topic", "ards") -> "topic:ards". */
export function formatContentId(kind: ContentKind, localId: string): string {
  return `${kind}:${localId}`;
}

/**
 * Parses a canonical content id. Returns undefined for malformed input rather
 * than throwing, so a corrupted localStorage entry can be skipped instead of
 * crashing a render.
 */
export function parseContentId(value: string): ParsedContentId | undefined {
  if (typeof value !== "string" || value.length === 0) return undefined;
  const separator = value.indexOf(":");
  if (separator <= 0) return undefined;

  const kind = value.slice(0, separator);
  const localId = value.slice(separator + 1);
  if (localId.length === 0) return undefined;
  if (!KIND_SET.has(kind)) return undefined;

  return { kind: kind as ContentKind, localId };
}

export function isContentKind(value: string): value is ContentKind {
  return KIND_SET.has(value);
}

/**
 * Normalizes a possibly-legacy stored reference into a canonical content id.
 *
 * Legacy bookmarks were stored as `{ id, type }` where `type` used the older
 * BookmarkableType vocabulary. This maps those onto the canonical kinds so
 * saved items survive the upgrade instead of silently disappearing.
 */
const LEGACY_TYPE_MAP: Readonly<Record<string, ContentKind>> = {
  topic: "topic",
  medication: "medication",
  physiology: "physiology",
  pathway: "pathway",
  problem: "problem",
  case: "case",
  flashcard: "flashcard",
  question: "question",
  trial: "trial",
  guideline: "guideline",
  "systematic-review": "systematic-review",
  calculator: "calculator",
  // Older aliases seen in v1/v2 payloads
  review: "systematic-review",
  challenge: "rapid-decision",
};

export function normalizeLegacyRef(type: string, id: string): string | undefined {
  const kind = LEGACY_TYPE_MAP[type];
  if (!kind) return undefined;
  // If the id already carries a prefix, trust it.
  const parsed = parseContentId(id);
  if (parsed) return formatContentId(parsed.kind, parsed.localId);
  return formatContentId(kind, id);
}

/** Human-facing label for a content kind (UI grouping, badges, filters). */
export const CONTENT_KIND_LABEL: Readonly<Record<ContentKind, string>> = {
  topic: "Topic",
  section: "Section",
  medication: "Medication",
  physiology: "Physiology",
  pathway: "Pathway",
  problem: "Clinical Problem",
  case: "Clinical Reasoning",
  "rapid-decision": "Rapid Decision",
  "error-hunt": "Find the Error",
  flashcard: "Flashcard",
  question: "Question",
  trial: "Trial",
  guideline: "Guideline",
  "systematic-review": "Systematic Review",
  calculator: "Calculator",
  comparison: "Comparison",
};

/** Plural label, used for grouped result headers and set summaries. */
export const CONTENT_KIND_LABEL_PLURAL: Readonly<Record<ContentKind, string>> = {
  topic: "Topics",
  section: "Sections",
  medication: "Medications",
  physiology: "Physiology",
  pathway: "Pathways",
  problem: "Clinical Problems",
  case: "Clinical Reasoning",
  "rapid-decision": "Rapid Decisions",
  "error-hunt": "Find the Error",
  flashcard: "Flashcards",
  question: "Questions",
  trial: "Trials",
  guideline: "Guidelines",
  "systematic-review": "Systematic Reviews",
  calculator: "Calculators",
  comparison: "Comparisons",
};
