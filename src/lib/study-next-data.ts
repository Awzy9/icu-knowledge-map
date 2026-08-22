import type { TopicCategory } from "@/content-types";
import {
  getAllTopics,
  getAllClinicalCases,
  getPhysiologyConceptsForTopic,
} from "@/registry";
import { questions } from "@/study/questions";
import { rapidDecisions } from "@/content/rapid-decisions";
import { categoryStyle } from "@/lib/category-style";
import type { StudyNextData } from "@/components/learn/StudyNextPanel";

/**
 * Clinical cases carry a free-text `system` label that does not always match
 * the TopicCategory vocabulary. Map the known values; anything unmapped is
 * skipped rather than guessed into the wrong bucket.
 */
const CASE_SYSTEM_MAP: Readonly<Record<string, TopicCategory>> = {
  cardiovascular: "cardiovascular",
  respiratory: "respiratory",
  renal: "renal",
  infectious: "infectious-disease",
  "infectious-disease": "infectious-disease",
  neurological: "neurology",
  neurology: "neurology",
  // "endocrine" has no TopicCategory equivalent — intentionally unmapped.
};

/**
 * Builds the compact lookup tables the Study Next panel needs.
 * Only id→id strings cross to the client; no content bodies.
 */
export function getStudyNextData(): StudyNextData {
  const topics = getAllTopics().filter((topic) => topic.status !== "stub");
  const cases = getAllClinicalCases();

  const topicList = topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    slug: topic.slug,
    system: topic.category,
  }));

  const questionTopics = questions.map((q) => [q.id, q.topicId] as const);

  const rapidDecisionTopics = rapidDecisions
    .filter((decision) => Boolean(decision.relatedTopicId))
    .map((decision) => [decision.id, decision.relatedTopicId as string] as const);

  const caseSystems = cases
    .map((kase) => {
      const mapped = CASE_SYSTEM_MAP[kase.system];
      return mapped ? ([kase.slug, mapped] as const) : undefined;
    })
    .filter((entry): entry is readonly [string, TopicCategory] => entry !== undefined);

  // topicId -> cases that reference it
  const caseSlugsByTopicMap = new Map<string, { slug: string; title: string }[]>();
  for (const kase of cases) {
    for (const topicId of kase.relatedTopicIds) {
      const bucket = caseSlugsByTopicMap.get(topicId) ?? [];
      bucket.push({ slug: kase.slug, title: kase.title });
      caseSlugsByTopicMap.set(topicId, bucket);
    }
  }

  // topicId -> physiology concepts, limited to the first two per topic
  const physiologyByTopic = topics
    .map((topic) => {
      const concepts = getPhysiologyConceptsForTopic(topic.id)
        .slice(0, 2)
        .map((concept) => ({ slug: concept.slug, title: concept.title }));
      return concepts.length > 0
        ? ([topic.id, concepts] as const)
        : undefined;
    })
    .filter((entry): entry is readonly [string, { slug: string; title: string }[]] => entry !== undefined);

  const systemLabels = Object.fromEntries(
    Object.entries(categoryStyle).map(([key, value]) => [key, value.label]),
  ) as Record<TopicCategory, string>;

  return {
    topics: topicList,
    questionTopics,
    rapidDecisionTopics,
    caseSystems,
    caseSlugsByTopic: Array.from(caseSlugsByTopicMap.entries()).map(
      ([topicId, list]) => [topicId, list] as const,
    ),
    physiologyByTopic,
    systemLabels,
  };
}
