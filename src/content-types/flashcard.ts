import { z } from "zod";
import { nodeIdSchema, studyDifficultySchema } from "./common";
import { studyReferenceSchema } from "./relationship";

export const flashcardSchema = z.object({
  id: z.string().min(1),
  topicId: nodeIdSchema,
  sectionId: nodeIdSchema.optional(),
  question: z.string().min(1),
  answer: z.string().min(1),
  explanation: z.string().min(1),
  difficulty: studyDifficultySchema,
  category: z.string().optional(),
  references: z.array(studyReferenceSchema).min(1),
  tags: z.array(z.string()).optional(),
});
export type Flashcard = z.infer<typeof flashcardSchema>;
