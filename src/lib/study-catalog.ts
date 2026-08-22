import {
  getAllTopics,
  getAllMedications,
  getAllPhysiologyConcepts,
  getAllPathways,
  getAllClinicalProblems,
  getAllClinicalCases,
} from "@/registry";
import { rapidDecisions } from "@/content/rapid-decisions";
import { icuErrors } from "@/content/icu-errors";
import { formatContentId } from "@/lib/content-id";
import type { ResolvedItem } from "@/components/library/StudySetsPanel";

/**
 * The set of content a learner can put into a study set.
 *
 * Deliberately excludes individual flashcards/questions — those are studied
 * per-topic, and listing ~1,600 of them would bloat the payload of the library
 * page for no practical benefit.
 */
export function getStudySetCatalog(): readonly ResolvedItem[] {
  const items: ResolvedItem[] = [];

  for (const topic of getAllTopics()) {
    if (topic.status === "stub") continue;
    items.push({
      contentId: formatContentId("topic", topic.id),
      kind: "topic",
      title: topic.title,
      subtitle: topic.oneLiner,
      href: `/topics/${topic.slug}`,
    });
  }

  for (const med of getAllMedications()) {
    items.push({
      contentId: formatContentId("medication", med.slug),
      kind: "medication",
      title: med.name,
      subtitle: med.class,
      href: `/medications/${med.slug}`,
    });
  }

  for (const concept of getAllPhysiologyConcepts()) {
    items.push({
      contentId: formatContentId("physiology", concept.slug),
      kind: "physiology",
      title: concept.title,
      subtitle: concept.summary,
      href: `/physiology/${concept.slug}`,
    });
  }

  for (const pathway of getAllPathways()) {
    items.push({
      contentId: formatContentId("pathway", pathway.slug),
      kind: "pathway",
      title: pathway.title,
      subtitle: pathway.oneLiner,
      href: `/pathways/${pathway.slug}`,
    });
  }

  for (const problem of getAllClinicalProblems()) {
    items.push({
      contentId: formatContentId("problem", problem.slug),
      kind: "problem",
      title: problem.title,
      subtitle: problem.oneLiner,
      href: `/problems/${problem.slug}`,
    });
  }

  for (const kase of getAllClinicalCases()) {
    items.push({
      contentId: formatContentId("case", kase.slug),
      kind: "case",
      title: kase.title,
      subtitle: kase.subtitle,
      href: `/learn/clinical-reasoning/${kase.slug}`,
    });
  }

  for (const decision of rapidDecisions) {
    items.push({
      contentId: formatContentId("rapid-decision", decision.id),
      kind: "rapid-decision",
      title: decision.question,
      subtitle: "Rapid ICU Decision",
      href: `/learn/rapid-decisions#${decision.id}`,
    });
  }

  for (const error of icuErrors) {
    items.push({
      contentId: formatContentId("error-hunt", error.id),
      kind: "error-hunt",
      title: error.title,
      subtitle: "Find the ICU Error",
      href: `/learn/find-the-error#${error.id}`,
    });
  }

  return items;
}
