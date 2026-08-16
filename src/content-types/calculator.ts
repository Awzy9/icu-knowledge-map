import { z } from "zod";
import { nodeIdSchema } from "./common";

export const calculatorCategorySchema = z.enum(["respiratory", "hemodynamics", "acid-base", "renal", "electrolytes"]);
export type CalculatorCategory = z.infer<typeof calculatorCategorySchema>;

export const calculatorInputTypeSchema = z.enum(["number", "select", "boolean"]);
export type CalculatorInputType = z.infer<typeof calculatorInputTypeSchema>;

export const calculatorInputSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  type: calculatorInputTypeSchema,
  unit: z.string().optional(),
  options: z
    .array(z.object({ value: z.union([z.string(), z.number()]), label: z.string() }))
    .optional(),
  /** Valid physiologic/mathematical range for this input — enforced in the UI before compute runs, not just an HTML hint. */
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
});
export type CalculatorInput = z.infer<typeof calculatorInputSchema>;

export const calculatorResultBandSchema = z.object({
  min: z.number(),
  max: z.number(),
  label: z.string().min(1),
  interpretation: z.string().min(1),
});
export type CalculatorResultBand = z.infer<typeof calculatorResultBandSchema>;

export type CalculatorInputValues = Record<string, number | string | boolean>;

export const calculatorSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: calculatorCategorySchema,
  description: z.string().min(1),
  /** Human-readable formula shown to the user, e.g. "Driving pressure = Plateau pressure − PEEP". */
  formula: z.string().min(1),
  inputs: z.array(calculatorInputSchema).min(1),
  /**
   * Compute is expected to throw a descriptive Error (not just return NaN or
   * Infinity) for impossible input combinations — e.g. a zero denominator,
   * or PEEP exceeding plateau pressure — so the widget can surface a
   * specific message instead of a silent bad number. Input-level min/max
   * already blocks most single-value edge cases before compute ever runs;
   * compute's own checks are the backstop for cross-field impossibilities.
   */
  compute: z.custom<(inputs: CalculatorInputValues) => number>(
    (fn) => typeof fn === "function",
    { message: "compute must be a function" },
  ),
  resultUnit: z.string().min(1),
  resultBands: z.array(calculatorResultBandSchema).optional(),
  limitations: z.array(z.string().min(1)).min(1),
  references: z.array(z.string().min(1)).min(1),
  relatedTopicIds: z.array(nodeIdSchema).min(1),
});
export type Calculator = z.infer<typeof calculatorSchema>;
