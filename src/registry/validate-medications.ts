import { medicationSchema, type Medication } from "@/content-types/medication";
import { allMedications } from "@/content/medications";
import { allTopics } from "@/content";

export function validateAllMedications(): readonly Medication[] {
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const topicIds = new Set(allTopics.map((t) => t.id));

  for (const med of allMedications) {
    const result = medicationSchema.safeParse(med);
    if (!result.success) {
      throw new Error(`Medication validation failed for ${med.id}: ${JSON.stringify(result.error.format(), null, 2)}`);
    }

    if (seenIds.has(med.id)) {
      throw new Error(`Duplicate medication ID found: ${med.id}`);
    }
    seenIds.add(med.id);

    if (seenSlugs.has(med.slug)) {
      throw new Error(`Duplicate medication slug found: ${med.slug}`);
    }
    seenSlugs.add(med.slug);

    // Validate relatedTopicIds
    for (const tid of med.relatedTopicIds || []) {
      if (!topicIds.has(tid)) {
        throw new Error(`Medication "${med.id}" has relatedTopicId pointing to unknown topic "${tid}"`);
      }
    }

    if (!med.evidenceTraceability.claimCitations || med.evidenceTraceability.claimCitations.length === 0) {
      throw new Error(`Medication ${med.id} missing claim-level citations in evidenceTraceability`);
    }
  }

  return allMedications;
}
