import { z } from "zod";

/**
 * Reusable structured clinical comparison (Compare Everywhere).
 * One schema drives every comparison — no hard-coded per-disease components.
 */
export const comparisonEntitySchema = z.object({
  /** Stable local id, reused as row-value key (matches entity ids below). */
  id: z.string().min(1),
  label: z.string().min(1),
  /** Optional deep-link, e.g. "/topics/ards". */
  href: z.string().optional(),
});
export type ComparisonEntity = z.infer<typeof comparisonEntitySchema>;

export const comparisonRowValueSchema = z.object({
  entityId: z.string().min(1),
  content: z.string().min(1),
  /** Emphasis marks the discriminating cell(s) — never colour alone (bold + border). */
  emphasis: z.boolean().optional(),
});
export type ComparisonRowValue = z.infer<typeof comparisonRowValueSchema>;

export const comparisonGroupSchema = z.enum([
  "mechanism",
  "assessment",
  "management",
  "traps",
]);

export const comparisonRowSchema = z.object({
  label: z.string().min(1),
  group: comparisonGroupSchema.optional(),
  values: z.array(comparisonRowValueSchema).min(1),
});
export type ComparisonRow = z.infer<typeof comparisonRowSchema>;

/** Plain-text provenance only — never fabricate registry evidence ids here. */
export const comparisonReferenceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url().optional(),
});

export const comparisonSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  system: z.string().min(1),
  entities: z.array(comparisonEntitySchema).min(2),
  rows: z.array(comparisonRowSchema).min(2),
  /** Editorial caveat (e.g. DI framing, FeNa limitations). Rendered verbatim. */
  caveat: z.string().optional(),
  references: z.array(comparisonReferenceSchema).optional(),
});
export type Comparison = z.infer<typeof comparisonSchema>;
