import type { TopicCategory } from "@/content-types";
import type { UnifiedLearningState } from "@/lib/learning-state";

/* -------------------------------------------------------------------------- */
/*  Learning Mastery model                                                    */
/* -------------------------------------------------------------------------- */

/**
 * A transparent, deterministic engagement score per ICU system.
 *
 * This is a SITE PROGRESS SCORE reflecting activity and accuracy inside this
 * app. It is explicitly NOT an examination-readiness estimate, and must never
 * be presented as a probability of passing anything.
 *
 * Formula (documented so the number is explainable, not opaque):
 *   coverage  = topics viewed / topics in system          (weight 0.4)
 *   accuracy  = correct attempts / total attempts         (weight 0.6)
 * Systems with no attempts fall back to coverage alone, so a learner who has
 * only read (not practised) does not appear falsely "accurate".
 */
export interface SystemMastery {
  readonly system: TopicCategory;
  readonly label: string;
  /** 0–100, rounded. */
  readonly score: number;
  readonly topicsViewed: number;
  readonly topicsTotal: number;
  readonly attempts: number;
  readonly correct: number;
  /** True when there is too little data for the score to mean much. */
  readonly sparse: boolean;
}

export interface MasteryInput {
  readonly state: UnifiedLearningState;
  /** topicId -> system, for every non-stub topic. */
  readonly topicSystems: ReadonlyMap<string, TopicCategory>;
  /** questionId -> topicId */
  readonly questionTopics: ReadonlyMap<string, string>;
  /** caseSlug -> system label (already normalized to a TopicCategory). */
  readonly caseSystems: ReadonlyMap<string, TopicCategory>;
  /** rapidDecisionId -> topicId */
  readonly rapidDecisionTopics: ReadonlyMap<string, string>;
  readonly systemLabels: Readonly<Record<TopicCategory, string>>;
}

interface Tally {
  topicsViewed: number;
  topicsTotal: number;
  attempts: number;
  correct: number;
}

const MIN_ATTEMPTS_FOR_CONFIDENCE = 3;

export function computeSystemMastery(input: MasteryInput): readonly SystemMastery[] {
  const { state, topicSystems, questionTopics, caseSystems, rapidDecisionTopics, systemLabels } = input;

  const tallies = new Map<TopicCategory, Tally>();
  const ensure = (system: TopicCategory): Tally => {
    let tally = tallies.get(system);
    if (!tally) {
      tally = { topicsViewed: 0, topicsTotal: 0, attempts: 0, correct: 0 };
      tallies.set(system, tally);
    }
    return tally;
  };

  // Coverage
  for (const [topicId, system] of topicSystems) {
    const tally = ensure(system);
    tally.topicsTotal += 1;
    if (state.topics[topicId]?.viewed) tally.topicsViewed += 1;
  }

  // Question accuracy
  for (const [questionId, record] of Object.entries(state.questions ?? {})) {
    const topicId = questionTopics.get(questionId);
    const system = topicId ? topicSystems.get(topicId) : undefined;
    if (!system) continue;
    const tally = ensure(system);
    for (const attempt of record.attempts) {
      tally.attempts += 1;
      if (attempt.correct) tally.correct += 1;
    }
  }

  // Rapid decision accuracy
  for (const [decisionId, record] of Object.entries(state.rapidDecisions ?? {})) {
    const topicId = rapidDecisionTopics.get(decisionId);
    const system = topicId ? topicSystems.get(topicId) : undefined;
    if (!system) continue;
    const tally = ensure(system);
    for (const attempt of record.attempts) {
      tally.attempts += 1;
      if (attempt.correct) tally.correct += 1;
    }
  }

  // Clinical reasoning case step accuracy
  for (const [caseSlug, record] of Object.entries(state.cases ?? {})) {
    const system = caseSystems.get(caseSlug);
    if (!system) continue;
    const tally = ensure(system);
    for (const result of Object.values(record.stepResults ?? {})) {
      tally.attempts += 1;
      if (result.correct) tally.correct += 1;
    }
  }

  return Array.from(tallies.entries())
    .map(([system, tally]): SystemMastery => {
      const coverage = tally.topicsTotal > 0 ? tally.topicsViewed / tally.topicsTotal : 0;
      const accuracy = tally.attempts > 0 ? tally.correct / tally.attempts : null;

      const score =
        accuracy === null
          ? Math.round(coverage * 100 * 0.4)
          : Math.round((coverage * 0.4 + accuracy * 0.6) * 100);

      return {
        system,
        label: systemLabels[system] ?? system,
        score: Math.max(0, Math.min(100, score)),
        topicsViewed: tally.topicsViewed,
        topicsTotal: tally.topicsTotal,
        attempts: tally.attempts,
        correct: tally.correct,
        sparse: tally.attempts < MIN_ATTEMPTS_FOR_CONFIDENCE,
      };
    })
    .sort((a, b) => a.score - b.score || a.label.localeCompare(b.label));
}

/* -------------------------------------------------------------------------- */
/*  Recommendations                                                           */
/* -------------------------------------------------------------------------- */

export type RecommendationReason =
  | "missed-questions"
  | "weakest-system"
  | "resume-in-progress"
  | "unstarted-core"
  | "review-flagged-cards";

export interface RecommendationStep {
  readonly label: string;
  readonly href: string;
  /** Rough minutes, used only to set expectations. */
  readonly minutes: number;
}

export interface Recommendation {
  readonly id: string;
  readonly title: string;
  readonly reason: RecommendationReason;
  /** Plain-language explanation shown to the learner. Never opaque. */
  readonly why: string;
  readonly steps: readonly RecommendationStep[];
  readonly estimatedMinutes: number;
  readonly priority: number;
}

export interface RecommendationInput {
  readonly state: UnifiedLearningState;
  readonly mastery: readonly SystemMastery[];
  /** topicId -> { title, slug, system } for non-stub topics. */
  readonly topics: ReadonlyMap<string, { title: string; slug: string; system: TopicCategory }>;
  /** questionId -> topicId */
  readonly questionTopics: ReadonlyMap<string, string>;
  /** Case slugs by topic id, so a recommendation can chain into a case. */
  readonly caseSlugsByTopic: ReadonlyMap<string, readonly { slug: string; title: string }[]>;
  /** Physiology slugs by topic id. */
  readonly physiologyByTopic: ReadonlyMap<string, readonly { slug: string; title: string }[]>;
}

/** Counts incorrect question attempts per topic (most recent attempt wins). */
function missedQuestionsByTopic(
  state: UnifiedLearningState,
  questionTopics: ReadonlyMap<string, string>,
): Map<string, number> {
  const missed = new Map<string, number>();
  for (const [questionId, record] of Object.entries(state.questions ?? {})) {
    const last = record.attempts[record.attempts.length - 1];
    if (!last || last.correct) continue;
    const topicId = questionTopics.get(questionId);
    if (!topicId) continue;
    missed.set(topicId, (missed.get(topicId) ?? 0) + 1);
  }
  return missed;
}

/**
 * Builds an explainable study plan. Every recommendation carries a `why` that
 * names the concrete evidence behind it (a count of missed questions, a named
 * weakest system, an unfinished case) — no black-box scoring.
 */
export function buildRecommendations(input: RecommendationInput): readonly Recommendation[] {
  const { state, mastery, topics, questionTopics, caseSlugsByTopic, physiologyByTopic } = input;
  const recommendations: Recommendation[] = [];

  /* 1. Topics with the most recently-missed questions ---------------------- */
  const missed = missedQuestionsByTopic(state, questionTopics);
  const rankedMissed = Array.from(missed.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  for (const [topicId, count] of rankedMissed) {
    const topic = topics.get(topicId);
    if (!topic) continue;

    const steps: RecommendationStep[] = [
      { label: `Review ${topic.title}`, href: `/topics/${topic.slug}`, minutes: 6 },
    ];

    const physiology = physiologyByTopic.get(topicId)?.[0];
    if (physiology) {
      steps.push({
        label: `Open ${physiology.title} physiology`,
        href: `/physiology/${physiology.slug}`,
        minutes: 3,
      });
    }

    const kase = caseSlugsByTopic.get(topicId)?.[0];
    if (kase) {
      steps.push({
        label: `Complete ${kase.title}`,
        href: `/learn/clinical-reasoning/${kase.slug}`,
        minutes: 8,
      });
    }

    steps.push({
      label: "Re-answer the questions you missed",
      href: `/questions/${topic.slug}`,
      minutes: 4,
    });

    recommendations.push({
      id: `missed-${topicId}`,
      title: topic.title,
      reason: "missed-questions",
      why:
        count === 1
          ? `Recommended because you missed 1 ${topic.title} question.`
          : `Recommended because you missed ${count} ${topic.title} questions.`,
      steps,
      estimatedMinutes: steps.reduce((sum, step) => sum + step.minutes, 0),
      priority: 100 + count,
    });
  }

  /* 2. Resume an unfinished clinical reasoning case ------------------------ */
  const inProgressCase = Object.values(state.cases ?? {})
    .filter((record) => !record.completedAt && record.currentStepIndex > 0)
    .sort((a, b) => (a.caseId < b.caseId ? -1 : 1))[0];

  if (inProgressCase) {
    recommendations.push({
      id: `resume-${inProgressCase.caseId}`,
      title: "Continue where you stopped",
      reason: "resume-in-progress",
      why: "Continue where you stopped — this case is part-way through.",
      steps: [
        {
          label: "Resume clinical reasoning case",
          href: `/learn/clinical-reasoning/${inProgressCase.caseId}`,
          minutes: 7,
        },
      ],
      estimatedMinutes: 7,
      priority: 90,
    });
  }

  /* 3. Weakest system with enough data to be meaningful -------------------- */
  const weakest = mastery.find((entry) => !entry.sparse);
  if (weakest) {
    const candidate = Array.from(topics.values()).find(
      (topic) => topic.system === weakest.system && !state.topics[topic.slug]?.completed,
    );
    if (candidate) {
      recommendations.push({
        id: `weakest-${weakest.system}`,
        title: `Strengthen ${weakest.label}`,
        reason: "weakest-system",
        why: `Your lowest recent system score is ${weakest.label} (${weakest.score}%, based on ${weakest.correct}/${weakest.attempts} correct).`,
        steps: [
          { label: `Review ${candidate.title}`, href: `/topics/${candidate.slug}`, minutes: 6 },
          { label: "Practise rapid decisions", href: "/learn/rapid-decisions", minutes: 5 },
        ],
        estimatedMinutes: 11,
        priority: 80,
      });
    }
  }

  /* 4. Flashcards explicitly marked "review" ------------------------------- */
  const reviewCards = Object.values(state.flashcards ?? {}).filter(
    (card) => card.status === "review",
  ).length;
  if (reviewCards >= 3) {
    recommendations.push({
      id: "review-cards",
      title: "Clear your review pile",
      reason: "review-flagged-cards",
      why: `You flagged ${reviewCards} flashcards for review.`,
      steps: [{ label: "Review flagged flashcards", href: "/flashcards", minutes: 6 }],
      estimatedMinutes: 6,
      priority: 60,
    });
  }

  /* 5. Nothing studied yet — offer a concrete starting point --------------- */
  if (recommendations.length === 0) {
    const first = Array.from(topics.values())[0];
    if (first) {
      recommendations.push({
        id: "start-here",
        title: "Start here",
        reason: "unstarted-core",
        why: "You have not recorded any practice yet — this is a good first pass.",
        steps: [
          { label: `Read ${first.title}`, href: `/topics/${first.slug}`, minutes: 6 },
          { label: "Try today's challenge", href: "/learn/daily-challenge", minutes: 3 },
        ],
        estimatedMinutes: 9,
        priority: 10,
      });
    }
  }

  return recommendations.sort((a, b) => b.priority - a.priority).slice(0, 4);
}
