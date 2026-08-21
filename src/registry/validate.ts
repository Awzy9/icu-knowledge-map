import {
  calculatorSchema,
  clinicalProblemSchema,
  flashcardSchema,
  guidelineSchema,
  pathwaySchema,
  physiologyConceptSchema,
  questionSchema,
  systematicReviewSchema,
  topicSchema,
  trialSchema,
  clinicalCaseSchema,
  medicationChallengeSchema,
  type Calculator,
  type ClinicalProblem,
  type ContentSection,
  type EvidenceRef,
  type Flashcard,
  type Guideline,
  type Pathway,
  type PathwayNode,
  type PhysiologyConcept,
  type Question,
  type SystematicReview,
  type Topic,
  type Trial,
  type ClinicalCase,
  type MedicationChallenge,
} from "@/content-types";

export interface RegistryInput {
  readonly topics: readonly Topic[];
  readonly trials: readonly Trial[];
  readonly guidelines: readonly Guideline[];
  readonly systematicReviews: readonly SystematicReview[];
  readonly calculators: readonly Calculator[];
  readonly physiologyConcepts: readonly PhysiologyConcept[];
  readonly pathways: readonly Pathway[];
  readonly problems: readonly ClinicalProblem[];
  readonly flashcards: readonly Flashcard[];
  readonly questions: readonly Question[];
  readonly cases?: readonly ClinicalCase[];
  readonly challenges?: readonly MedicationChallenge[];
}

function collectSectionIds(sections: readonly ContentSection[], out: Set<string>): void {
  for (const section of sections) {
    out.add(section.id);
    if (section.children) collectSectionIds(section.children, out);
  }
}

function walkSections(
  sections: readonly ContentSection[],
  visit: (section: ContentSection) => void,
): void {
  for (const section of sections) {
    visit(section);
    if (section.children) walkSections(section.children, visit);
  }
}

function walkPathwayNodes(node: PathwayNode, visit: (node: PathwayNode) => void): void {
  visit(node);
  for (const child of node.children ?? []) walkPathwayNodes(child, visit);
}

export function validateContent(input: RegistryInput): void {
  for (const topic of input.topics) {
    const result = topicSchema.safeParse(topic);
    if (!result.success) {
      throw new Error(`Invalid topic "${topic.id}": ${result.error.message}`);
    }
  }
  for (const trial of input.trials) {
    const result = trialSchema.safeParse(trial);
    if (!result.success) throw new Error(`Invalid trial "${trial.id}": ${result.error.message}`);
  }
  for (const guideline of input.guidelines) {
    const result = guidelineSchema.safeParse(guideline);
    if (!result.success) {
      throw new Error(`Invalid guideline "${guideline.id}": ${result.error.message}`);
    }
  }
  for (const review of input.systematicReviews) {
    const result = systematicReviewSchema.safeParse(review);
    if (!result.success) {
      throw new Error(`Invalid systematic review "${review.id}": ${result.error.message}`);
    }
  }
  for (const calculator of input.calculators) {
    const result = calculatorSchema.safeParse(calculator);
    if (!result.success) {
      throw new Error(`Invalid calculator "${calculator.id}": ${result.error.message}`);
    }
  }
  for (const concept of input.physiologyConcepts) {
    const result = physiologyConceptSchema.safeParse(concept);
    if (!result.success) {
      throw new Error(`Invalid physiology concept "${concept.id}": ${result.error.message}`);
    }
  }
  for (const pathway of input.pathways) {
    const result = pathwaySchema.safeParse(pathway);
    if (!result.success) throw new Error(`Invalid pathway "${pathway.id}": ${result.error.message}`);
  }
  for (const problem of input.problems) {
    const result = clinicalProblemSchema.safeParse(problem);
    if (!result.success) throw new Error(`Invalid clinical problem "${problem.id}": ${result.error.message}`);
  }
  for (const flashcard of input.flashcards) {
    const result = flashcardSchema.safeParse(flashcard);
    if (!result.success) {
      throw new Error(`Invalid flashcard "${flashcard.id}": ${result.error.message}`);
    }
  }
  for (const question of input.questions) {
    const result = questionSchema.safeParse(question);
    if (!result.success) {
      throw new Error(`Invalid question "${question.id}": ${result.error.message}`);
    }
  }
  if (input.cases) {
    for (const c of input.cases) {
      const result = clinicalCaseSchema.safeParse(c);
      if (!result.success) {
        throw new Error(`Invalid clinical case "${c.id}": ${result.error.message}`);
      }
    }
  }
  if (input.challenges) {
    for (const ch of input.challenges) {
      const result = medicationChallengeSchema.safeParse(ch);
      if (!result.success) {
        throw new Error(`Invalid medication challenge "${ch.id}": ${result.error.message}`);
      }
    }
  }

  const topicIds = new Set(input.topics.map((topic) => topic.id));
  const sectionIds = new Set<string>();
  for (const topic of input.topics) collectSectionIds(topic.sections, sectionIds);

  const trialIds = new Set(input.trials.map((trial) => trial.id));
  const guidelineIds = new Set(input.guidelines.map((guideline) => guideline.id));
  const reviewIds = new Set(input.systematicReviews.map((review) => review.id));
  const calculatorIds = new Set(input.calculators.map((calculator) => calculator.id));

  const evidenceIdExists = (kind: "trial" | "guideline" | "systematic-review", id: string) => {
    if (kind === "trial") return trialIds.has(id);
    if (kind === "guideline") return guidelineIds.has(id);
    return reviewIds.has(id);
  };

  for (const topic of input.topics) {
    for (const relationship of topic.relationships) {
      if (!topicIds.has(relationship.targetId) && !sectionIds.has(relationship.targetId)) {
        throw new Error(
          `Topic "${topic.id}" has a relationship targeting unknown id "${relationship.targetId}"`,
        );
      }
    }

    const topicEvidenceRefKeys = new Set<string>();
    walkSections(topic.sections, (section) => {
      for (const ref of section.evidenceRefs ?? []) {
        const key = `${ref.kind}:${ref.id}`;
        if (topicEvidenceRefKeys.has(key)) {
          throw new Error(
            `[Evidence Validation Error] Topic "${topic.id}" contains duplicate evidence reference "${ref.kind}" ID "${ref.id}" in section "${section.id}"`
          );
        }
        topicEvidenceRefKeys.add(key);

        if (!evidenceIdExists(ref.kind, ref.id)) {
          throw new Error(
            `[Evidence Validation Error] Section "${section.id}" (topic "${topic.id}") references unknown ${ref.kind} "${ref.id}"`,
          );
        }
      }
      for (const block of section.body) {
        if (block.type === "calculator-embed" && !calculatorIds.has(block.calculatorId)) {
          throw new Error(
            `Section "${section.id}" (topic "${topic.id}") embeds unknown calculator "${block.calculatorId}"`,
          );
        }
      }
      for (const relationship of section.relationships ?? []) {
        if (!topicIds.has(relationship.targetId) && !sectionIds.has(relationship.targetId)) {
          throw new Error(
            `Section "${section.id}" (topic "${topic.id}") has a relationship targeting unknown id "${relationship.targetId}"`,
          );
        }
      }
    });
  }

  const physiologyConceptIds = new Set(input.physiologyConcepts.map((concept) => concept.id));
  for (const concept of input.physiologyConcepts) {
    for (const relatedId of concept.relatedConceptIds ?? []) {
      if (!physiologyConceptIds.has(relatedId)) {
        throw new Error(`Physiology concept "${concept.id}" relatedConceptIds references unknown concept "${relatedId}"`);
      }
    }
    for (const ref of concept.references ?? []) {
      if (!evidenceIdExists(ref.kind, ref.id)) {
        throw new Error(`Physiology concept "${concept.id}" references unknown ${ref.kind} "${ref.id}"`);
      }
    }
  }

  for (const pathway of input.pathways) {
    walkPathwayNodes(pathway.flow, (node) => {
      if (node.topicId && !topicIds.has(node.topicId)) {
        throw new Error(`Pathway "${pathway.id}" node "${node.id}" references unknown topic "${node.topicId}"`);
      }
      if (node.sectionId && !sectionIds.has(node.sectionId)) {
        throw new Error(`Pathway "${pathway.id}" node "${node.id}" references unknown section "${node.sectionId}"`);
      }
      if (node.calculatorId && !calculatorIds.has(node.calculatorId)) {
        throw new Error(`Pathway "${pathway.id}" node "${node.id}" references unknown calculator "${node.calculatorId}"`);
      }
    });
    for (const ref of pathway.references ?? []) {
      if (!evidenceIdExists(ref.kind, ref.id)) {
        throw new Error(`Pathway "${pathway.id}" references unknown ${ref.kind} "${ref.id}"`);
      }
    }
  }

  const checkRelatedTopicIds = (label: string, id: string, relatedTopicIds: readonly string[]) => {
    for (const targetId of relatedTopicIds) {
      if (!topicIds.has(targetId)) {
        throw new Error(`${label} "${id}" relatedTopicIds references unknown topic "${targetId}"`);
      }
    }
  };
  input.trials.forEach((trial) => checkRelatedTopicIds("Trial", trial.id, trial.relatedTopicIds));
  input.guidelines.forEach((guideline) =>
    checkRelatedTopicIds("Guideline", guideline.id, guideline.relatedTopicIds),
  );
  input.systematicReviews.forEach((review) =>
    checkRelatedTopicIds("Systematic review", review.id, review.relatedTopicIds),
  );
  input.calculators.forEach((calculator) =>
    checkRelatedTopicIds("Calculator", calculator.id, calculator.relatedTopicIds),
  );
  input.physiologyConcepts.forEach((concept) =>
    checkRelatedTopicIds("Physiology concept", concept.id, concept.relatedTopicIds),
  );
  input.pathways.forEach((pathway) =>
    checkRelatedTopicIds("Pathway", pathway.id, pathway.relatedTopicIds),
  );
  input.problems.forEach((problem) =>
    checkRelatedTopicIds("Clinical problem", problem.id, problem.relatedTopicIds),
  );

  const checkStudyReferences = (label: string, id: string, references: readonly (EvidenceRef | string)[]) => {
    for (const ref of references) {
      if (typeof ref === "string") continue;
      if (!evidenceIdExists(ref.kind, ref.id)) {
        throw new Error(`${label} "${id}" references unknown ${ref.kind} "${ref.id}"`);
      }
    }
  };

  for (const flashcard of input.flashcards) {
    if (!topicIds.has(flashcard.topicId)) {
      throw new Error(`Flashcard "${flashcard.id}" references unknown topic "${flashcard.topicId}"`);
    }
    checkStudyReferences("Flashcard", flashcard.id, flashcard.references);
  }
  for (const question of input.questions) {
    if (!topicIds.has(question.topicId)) {
      throw new Error(`Question "${question.id}" references unknown topic "${question.topicId}"`);
    }
    checkStudyReferences("Question", question.id, question.references);
  }
}
