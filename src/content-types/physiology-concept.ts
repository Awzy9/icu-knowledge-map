import { z } from "zod";
import { nodeIdSchema } from "./common";
import { evidenceRefSchema } from "./relationship";

export const physiologySystemSchema = z.enum(["respiratory", "cardiovascular", "renal", "acid-base"]);
export type PhysiologySystem = z.infer<typeof physiologySystemSchema>;

export const chainNodeSchema = z.object({
  /** The physiologic event text. */
  text: z.string().min(1),
  /** Optional arrow direction — always accompanied by a text label. */
  direction: z.enum(["up", "down", "neutral"]).optional(),
  /** Highlight this node for emphasis. */
  emphasis: z.boolean().optional(),
  /** Small annotation below the node. */
  annotation: z.string().optional(),
});
export type ChainNode = z.infer<typeof chainNodeSchema>;

export const chainStateSchema = z.object({
  /** Toggle-button label (e.g. "Normal", "Disease", "+ Norepinephrine"). */
  label: z.string().min(1),
  /** Brief description shown below the toggle row. */
  description: z.string().optional(),
  /** Ordered chain nodes, top to bottom. Must have at least 1 node. */
  chain: z.array(chainNodeSchema).min(1),
  /** Colour theme for nodes in this state. */
  color: z.enum(["blue", "red", "green", "amber", "default"]).optional(),
});
export type ChainState = z.infer<typeof chainStateSchema>;

/**
 * A small, fixed library of reusable interactive visual kinds — each backed
 * by a deterministic, client-side-only formula (no AI, no network calls).
 * A concept just declares which kind it wants plus starting values; the
 * widget itself lives in components/physiology and is shared across every
 * concept that uses that kind.
 */
export const physiologyVisualSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("pressure-relationship"),
    defaultPlateauPressure: z.number(),
    defaultPeep: z.number(),
  }),
  z.object({
    kind: z.literal("vq-spectrum"),
    /** 0 = pure shunt, 1 = normal V/Q, 2 = pure dead space. */
    defaultRatio: z.number().min(0).max(2),
  }),
  z.object({
    kind: z.literal("do2-breakdown"),
    defaultCardiacOutput: z.number(),
    defaultHemoglobin: z.number(),
    defaultSao2: z.number(),
  }),
  z.object({
    kind: z.literal("starling-curve"),
    defaultPreload: z.number().min(0).max(100),
    defaultContractility: z.enum(["reduced", "normal", "increased"]),
  }),
  z.object({
    kind: z.literal("acid-base-map"),
    defaultPh: z.number(),
    defaultPaco2: z.number(),
    defaultHco3: z.number(),
    defaultNa: z.number(),
    defaultCl: z.number(),
  }),
  z.object({
    kind: z.literal("causal-chain"),
    /** Initial state label shown (e.g. "normal", "disease", "treatment") */
    defaultState: z.string().min(1),
    /** Ordered list of toggle states with full node chains. */
    states: z.array(chainStateSchema).min(1),
  }),
]);
export type PhysiologyVisual = z.infer<typeof physiologyVisualSchema>;

/**
 * Standalone, topic-independent physiology concept (e.g. "Driving Pressure")
 * that multiple topics can reference via relatedTopicIds, instead of
 * duplicating the same physiology explanation inside every topic that
 * touches it. Concepts also cross-link each other via relatedConceptIds,
 * forming a small web within the physiology library itself.
 */
export const physiologyConceptSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  system: physiologySystemSchema,
  summary: z.string().min(1),
  definition: z.string().min(1),
  mechanism: z.string().min(1),
  clinicalSignificance: z.string().min(1),
  icuApplications: z.array(z.string().min(1)).min(1),
  relatedConceptIds: z.array(nodeIdSchema).optional(),
  relatedTopicIds: z.array(nodeIdSchema).min(1),
  references: z.array(evidenceRefSchema).optional(),
  visual: physiologyVisualSchema.optional(),
});
export type PhysiologyConcept = z.infer<typeof physiologyConceptSchema>;
