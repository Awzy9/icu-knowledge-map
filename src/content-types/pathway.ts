import { z } from "zod";
import { nodeIdSchema } from "./common";
import { evidenceRefSchema } from "./relationship";

export const pathwayNodeKindSchema = z.enum(["step", "branch"]);
export type PathwayNodeKind = z.infer<typeof pathwayNodeKindSchema>;

export const pathwayNodeRoleSchema = z.enum([
  "assessment",
  "decision",
  "mechanism",
  "diagnosis",
  "intervention",
  "reassessment",
  "warning",
]);
export type PathwayNodeRole = z.infer<typeof pathwayNodeRoleSchema>;

/**
 * One box in a pathway flowchart. "step" nodes form the linear assessment
 * chain; "branch" nodes are one arm of a differential/decision point — a
 * node with more than one child is rendered as a fan-out, so branching is a
 * property of the tree shape, not a separate data structure. A node with a
 * topicId/sectionId/calculatorId is a real navigable link (e.g. a named
 * diagnosis linking to its topic); a node with only `detail` surfaces that
 * text on hover; a bare node is a plain label.
 */
export interface PathwayNode {
  readonly id: string;
  readonly label: string;
  readonly kind: PathwayNodeKind;
  readonly role?: PathwayNodeRole;
  readonly detail?: string;
  readonly topicId?: string;
  readonly sectionId?: string;
  readonly calculatorId?: string;
  readonly children?: readonly PathwayNode[];
}

export const pathwayNodeSchema: z.ZodType<PathwayNode> = z.lazy(() =>
  z.object({
    id: z.string().min(1),
    label: z.string().min(1),
    kind: pathwayNodeKindSchema,
    role: pathwayNodeRoleSchema.optional(),
    detail: z.string().optional(),
    topicId: nodeIdSchema.optional(),
    sectionId: nodeIdSchema.optional(),
    calculatorId: z.string().optional(),
    children: z.array(pathwayNodeSchema).optional(),
  }),
);

export const pathwayRedFlagSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
});
export type PathwayRedFlag = z.infer<typeof pathwayRedFlagSchema>;

export const pathwaySchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  oneLiner: z.string().min(1),
  /** The presenting problem the pathway starts from (e.g. "Hypoxemia") — shown as the flowchart's top banner. */
  startingProblem: z.string().min(1),
  /** The assessment-steps-and-branches flowchart, as a single tree. */
  flow: pathwayNodeSchema,
  redFlags: z.array(pathwayRedFlagSchema).optional(),
  relatedTopicIds: z.array(nodeIdSchema).min(1),
  references: z.array(evidenceRefSchema).optional(),
});
export type Pathway = z.infer<typeof pathwaySchema>;
