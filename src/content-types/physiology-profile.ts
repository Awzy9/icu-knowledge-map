import { z } from "zod";
import { directionSchema } from "./clinical-case";

/* -------------------------------------------------------------------------- */
/*  Physiology profile — hemodynamic variable visualization data             */
/* -------------------------------------------------------------------------- */

export const physiologyProfileSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  type: z.enum(["drug", "disease"]),
  variables: z.object({
    svr: directionSchema.optional(),
    hr: directionSchema.optional(),
    contractility: directionSchema.optional(),
    preload: directionSchema.optional(),
    afterload: directionSchema.optional(),
    co: directionSchema.optional(),
    map: directionSchema.optional(),
    pvr: directionSchema.optional(),
    venousReturn: directionSchema.optional(),
    myocardialO2Demand: directionSchema.optional(),
  }),
  mechanism: z.string().optional(),
  clinicalContext: z.string().optional(),
});
export type PhysiologyProfile = z.infer<typeof physiologyProfileSchema>;
