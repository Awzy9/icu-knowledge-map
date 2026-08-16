import { z } from "zod";
import { nodeIdSchema, studyDifficultySchema } from "./common";
import { studyReferenceSchema } from "./relationship";

export const questionOptionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
  isCorrect: z.boolean(),
});
export type QuestionOption = z.infer<typeof questionOptionSchema>;

export const questionSchema = z.object({
  id: z.string().min(1),
  topicId: nodeIdSchema,
  sectionId: nodeIdSchema.optional(),
  stem: z.string().min(1),
  options: z.array(questionOptionSchema).min(2),
  explanation: z.string().min(1),
  difficulty: studyDifficultySchema,
  category: z.string().optional(),
  references: z.array(studyReferenceSchema).min(1),
});
export type Question = z.infer<typeof questionSchema>;
