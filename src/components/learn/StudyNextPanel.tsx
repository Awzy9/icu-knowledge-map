"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { TopicCategory } from "@/content-types";
import {
  getUnifiedLearningState,
  subscribeToLearningState,
  DEFAULT_LEARNING_STATE,
} from "@/lib/learning-state";
import { computeSystemMastery, buildRecommendations } from "@/lib/mastery";

/**
 * Serializable lookup tables built on the server. Kept to plain id→id strings
 * so this stays small; the heavy content never crosses the boundary.
 */
export interface StudyNextData {
  readonly topics: readonly { id: string; title: string; slug: string; system: TopicCategory }[];
  readonly questionTopics: readonly (readonly [string, string])[];
  readonly rapidDecisionTopics: readonly (readonly [string, string])[];
  readonly caseSystems: readonly (readonly [string, TopicCategory])[];
  readonly caseSlugsByTopic: readonly (readonly [string, readonly { slug: string; title: string }[]])[];
  readonly physiologyByTopic: readonly (readonly [string, readonly { slug: string; title: string }[]])[];
  readonly systemLabels: Readonly<Record<TopicCategory, string>>;
}

function scoreBarClass(score: number): string {
  if (score >= 75) return "bg-emerald-500";
  if (score >= 50) return "bg-amber-500";
  return "bg-rose-500";
}

/** Fetched once per session; the tables are static per deployment. */
let studyDataPromise: Promise<StudyNextData> | null = null;

function loadStudyData(): Promise<StudyNextData> {
  if (!studyDataPromise) {
    studyDataPromise = fetch("/study-index.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Study index ${response.status}`);
        return response.json() as Promise<StudyNextData>;
      })
      .catch((error) => {
        studyDataPromise = null;
        throw error;
      });
  }
  return studyDataPromise;
}

const EMPTY_DATA: StudyNextData = {
  topics: [],
  questionTopics: [],
  rapidDecisionTopics: [],
  caseSystems: [],
  caseSlugsByTopic: [],
  physiologyByTopic: [],
  systemLabels: {} as StudyNextData["systemLabels"],
};

export function StudyNextPanel() {
  const state = useSyncExternalStore(
    subscribeToLearningState,
    getUnifiedLearningState,
    () => DEFAULT_LEARNING_STATE,
  );

  const [data, setData] = useState<StudyNextData>(EMPTY_DATA);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadStudyData()
      .then((tables) => {
        if (!cancelled) {
          setData(tables);
          setLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topicSystems = useMemo(
    () => new Map(data.topics.map((t) => [t.id, t.system] as const)),
    [data.topics],
  );

  const mastery = useMemo(
    () =>
      computeSystemMastery({
        state,
        topicSystems,
        questionTopics: new Map(data.questionTopics),
        caseSystems: new Map(data.caseSystems),
        rapidDecisionTopics: new Map(data.rapidDecisionTopics),
        systemLabels: data.systemLabels,
      }),
    [state, topicSystems, data],
  );

  const recommendations = useMemo(
    () =>
      buildRecommendations({
        state,
        mastery,
        topics: new Map(
          data.topics.map((t) => [t.id, { title: t.title, slug: t.slug, system: t.system }] as const),
        ),
        questionTopics: new Map(data.questionTopics),
        caseSlugsByTopic: new Map(data.caseSlugsByTopic),
        physiologyByTopic: new Map(data.physiologyByTopic),
      }),
    [state, mastery, data],
  );

  return (
    <div className="space-y-8">
      {/* ---------------------------------------------------------------- */}
      <section aria-labelledby="study-next-heading">
        <h2 id="study-next-heading" className="text-xl font-bold text-ink">
          Recommended for you
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          Built from your own recorded activity. Every suggestion says why it appeared.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {recommendations.map((rec) => (
            <article
              key={rec.id}
              className="rounded-xl border border-border bg-surface p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-ink">{rec.title}</h3>
                <span className="text-xs font-medium text-ink-faint">
                  ~{rec.estimatedMinutes} min
                </span>
              </div>

              <p className="mt-1.5 text-sm text-accent-strong">{rec.why}</p>

              <ol className="mt-3 space-y-1.5">
                {rec.steps.map((step, i) => (
                  <li key={step.href + i} className="flex items-start gap-2 text-sm">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[11px] font-semibold text-ink-muted"
                    >
                      {i + 1}
                    </span>
                    <Link
                      href={step.href}
                      className="min-h-6 text-ink underline-offset-2 transition-colors hover:text-accent hover:underline"
                    >
                      {step.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section aria-labelledby="mastery-heading">
        <h2 id="mastery-heading" className="text-xl font-bold text-ink">
          Learning mastery by system
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          A site progress score combining how much you have opened (40%) with your accuracy on
          answered items (60%).{" "}
          <strong className="font-semibold text-ink">
            This is not an exam-readiness or pass-probability estimate.
          </strong>
        </p>

        {!loaded ? (
          <p className="mt-4 rounded-lg border border-dashed border-border bg-surface px-4 py-6 text-center text-sm text-ink-muted">
            Loading your progress…
          </p>
        ) : mastery.length === 0 ? (
          <p className="mt-4 rounded-lg border border-dashed border-border bg-surface px-4 py-6 text-center text-sm text-ink-muted">
            No activity recorded yet. Open a topic or answer a question to start building your
            progress score.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {mastery.map((entry) => (
              <li key={entry.system}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium text-ink">{entry.label}</span>
                  <span className="tabular-nums text-ink-muted">
                    {entry.score}%
                    {entry.sparse && (
                      <span className="ml-1.5 text-xs text-ink-faint">(limited data)</span>
                    )}
                  </span>
                </div>
                <div
                  className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-surface-muted"
                  role="img"
                  aria-label={`${entry.label}: ${entry.score} percent site progress score`}
                >
                  <div
                    className={`h-full rounded-full ${scoreBarClass(entry.score)}`}
                    style={{ width: `${entry.score}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-ink-faint">
                  {entry.topicsViewed}/{entry.topicsTotal} topics opened
                  {entry.attempts > 0 && ` · ${entry.correct}/${entry.attempts} correct`}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
