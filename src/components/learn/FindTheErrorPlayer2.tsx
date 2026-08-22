"use client";

import { useMemo, useState } from "react";
import type { IcuError } from "@/content/icu-errors";
import {
  CLASSIFICATION_META,
  managementItemsByError,
  type ManagementClassification,
} from "@/content/icu-errors/management-items";
import { updateUnifiedLearningState } from "@/lib/learning-state";
import { cn } from "@/lib/cn";

const OPTIONS: ManagementClassification[] = ["correct", "questionable", "context-dependent", "dangerous"];
const LEGACY_OPTIONS = ["foundation", "intermediate", "advanced"] as const;

/**
 * 2.0 player: classify EACH management line (correct / questionable /
 * context-dependent / dangerous). Falls back transparently to the classic
 * single-answer exercise for any case without 2.0 data.
 */
export function FindTheErrorPlayer2({ errors }: { errors: readonly IcuError[] }) {
  const [difficulty, setDifficulty] = useState<"all" | (typeof LEGACY_OPTIONS)[number]>("all");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ManagementClassification>>({});
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(
    () => (difficulty === "all" ? errors : errors.filter((e) => e.difficulty === difficulty)),
    [errors, difficulty],
  );
  const current = filtered[index];
  const items = current ? managementItemsByError[current.id] : undefined;

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const advance = () => {
    reset();
    if (index < filtered.length - 1) setIndex(index + 1);
    else setIndex(-1);
  };

  const record = (itemId: string, c: ManagementClassification) => {
    if (submitted) setSubmitted(false);
    setAnswers((prev) => ({ ...prev, [itemId]: c }));
  };

  /** Persist one completed attempt into the v3 errorHunts store. */
  const persist = () => {
    if (!current || !items) return;
    const now = new Date().toISOString();
    const lineClassifications = items.map((item, lineIndex) => {
      const selected = answers[item.id];
      return {
        lineIndex,
        selected,
        expected: item.classification,
        isMatch: selected === item.classification,
        attemptedAt: now,
      };
    });
    const matched = lineClassifications.filter((l) => l.isMatch).length;

    updateUnifiedLearningState((prev) => {
      const existing = prev.errorHunts?.[current.id];
      return {
        ...prev,
        errorHunts: {
          ...(prev.errorHunts ?? {}),
          [current.id]: {
            attempts: [
              ...(existing?.attempts ?? []),
              {
                selectedOptionId: `lines:${matched}/${items.length}`,
                correct: matched === items.length,
                attemptedAt: now,
              },
            ],
            lineClassifications,
            lastAttemptedAt: now,
          },
        },
      };
    });
  };

  if (index === -1) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-lg font-bold text-ink">Session complete</p>
        <button
          type="button"
          onClick={() => {
            setIndex(0);
            reset();
          }}
          className="mt-4 min-h-11 cursor-pointer rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center text-sm text-ink-muted">
        No scenarios match this difficulty filter.
      </div>
    );
  }

  if (!items) {
    return (
      <LegacySingleAnswer
        key={current.id}
        scenarioNumber={index + 1}
        total={filtered.length}
        difficulty={difficulty}
        onDifficulty={(d) => {
          setDifficulty(d);
          setIndex(0);
        }}
        error={current}
        onNext={advance}
      />
    );
  }

  const allAnswered = items.every((i) => answers[i.id]);

  let correctCount = 0,
    dangerousTotal = 0,
    dangerousCaught = 0,
    falseDanger = 0,
    ctxTotal = 0,
    ctxCaught = 0;

  for (const item of items) {
    const given = submitted ? answers[item.id] : undefined;
    if (given === item.classification) correctCount += 1;
    if (item.classification === "dangerous") {
      dangerousTotal += 1;
      if (given === "dangerous") dangerousCaught += 1;
    }
    if (item.classification === "context-dependent") {
      ctxTotal += 1;
      if (given === "context-dependent") ctxCaught += 1;
    }
    if (given === "dangerous" && item.classification !== "dangerous") falseDanger += 1;
  }
  const pct = Math.round((correctCount / items.length) * 100);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink">
          Scenario {index + 1} of {filtered.length}
        </p>
        <label className="flex items-center gap-2 text-xs text-ink-muted">
          <span>Difficulty</span>
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value as typeof difficulty);
              setIndex(0);
              reset();
            }}
            className="min-h-9 cursor-pointer rounded-md border border-border bg-surface px-2 py-1 text-xs capitalize text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {["all", ...LEGACY_OPTIONS].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
        <h2 className="text-base font-bold text-ink sm:text-lg">{current.title}</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Evaluate every order line, then submit
        </p>

        <ul className="mt-4 space-y-4">
          {items.map((item) => {
            const given = answers[item.id];
            const meta = submitted ? CLASSIFICATION_META[item.classification] : undefined;
            const isRight = submitted && given === item.classification;
            return (
              <li
                key={item.id}
                className={cn(
                  "rounded-xl border p-3",
                  submitted && isRight && "border-emerald-500/60 bg-emerald-500/5",
                  submitted && !isRight && "border-rose-500/60 bg-rose-500/5",
                  !submitted && "border-border",
                )}
              >
                <p className="text-sm font-medium leading-relaxed text-ink">{item.text}</p>
                {!submitted ? (
                  <fieldset className="mt-2">
                    <legend className="sr-only">Classify: {item.text}</legend>
                    <div className="flex flex-wrap gap-1.5">
                      {OPTIONS.map((o) => (
                        <label
                          key={o}
                          className={cn(
                            "min-h-9 cursor-pointer rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-accent",
                            given === o
                              ? "border-accent bg-accent text-white"
                              : "border-border bg-canvas text-ink-muted hover:text-ink",
                          )}
                        >
                          <input
                            type="radio"
                            name={`${current.id}-${item.id}`}
                            className="sr-only"
                            checked={given === o}
                            onChange={() => record(item.id, o)}
                          />
                          {CLASSIFICATION_META[o].glyph} {CLASSIFICATION_META[o].label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ) : (
                  <div className="mt-2 space-y-2 text-sm text-ink">
                    <p className={cn("font-bold", isRight ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400")}>
                      Your call: {given ? `${CLASSIFICATION_META[given].glyph} ${CLASSIFICATION_META[given].label}` : "—"} · Truth: {meta!.glyph} {meta!.label}
                    </p>
                    <p><span className="font-bold">WHY?</span> {item.explanation}</p>
                    {item.consequence && (
                      <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-2">
                        <span className="font-bold">WHAT COULD HAPPEN?</span> {item.consequence}
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => {
              setSubmitted(true);
              persist();
            }}
            className="mt-4 min-h-11 w-full cursor-pointer rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {allAnswered
              ? "Submit classifications"
              : `Classify all ${items.length} lines to submit (${Object.keys(answers).length}/${items.length})`}
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4" role="status">
              {[
                ["Accuracy", `${pct}%`],
                ["Dangerous caught", `${dangerousCaught}/${dangerousTotal}`],
                ["False alarms", String(falseDanger)],
                ["Context caught", `${ctxCaught}/${ctxTotal}`],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border p-2">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">{k}</p>
                  <p className="text-lg font-extrabold text-ink">{v}</p>
                </div>
              ))}
            </div>
            {falseDanger > 0 && (
              <p className="text-xs text-amber-600 dark:text-amber-400">
                Marking everything dangerous scores zero on those lines — precision matters.
              </p>
            )}
            <button
              type="button"
              onClick={advance}
              className="min-h-11 w-full cursor-pointer rounded-xl border border-accent bg-accent/5 px-4 py-3 text-sm font-bold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {index < filtered.length - 1 ? "Next Scenario →" : "View Summary →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* Classic exercise retained for cases without 2.0 data. */
function LegacySingleAnswer(p: {
  scenarioNumber: number;
  total: number;
  difficulty: string;
  onDifficulty: (d: "all" | "foundation" | "intermediate" | "advanced") => void;
  error: IcuError;
  onNext: () => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const correctOpt = p.error.options.find((o) => o.isCorrect);
  const chosen = p.error.options.find((o) => o.id === picked);
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink">
          Scenario {p.scenarioNumber} of {p.total}
        </p>
        <label className="flex items-center gap-2 text-xs text-ink-muted">
          <span>Difficulty</span>
          <select
            value={p.difficulty}
            onChange={(e) => p.onDifficulty(e.target.value as "all")}
            className="min-h-9 cursor-pointer rounded-md border border-border bg-surface px-2 py-1 text-xs text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {["all", "foundation", "intermediate", "advanced"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <h2 className="mt-2 text-base font-bold text-ink sm:text-lg">{p.error.title}</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-ink-muted">
        {p.error.icuPlan.map((line) => <li key={line}>{line}</li>)}
      </ol>
      <p className="mt-4 text-sm font-semibold text-ink">Which line represents the critical management error?</p>
      <div className="mt-2 space-y-2">
        {p.error.options.map((o) => (
          <button
            key={o.id}
            type="button"
            disabled={picked !== null}
            onClick={() => setPicked(o.id)}
            className={cn(
              "w-full cursor-pointer rounded-lg border p-3 text-left text-sm text-ink transition-colors disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent",
              picked === o.id
                ? o.isCorrect
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-rose-500 bg-rose-500/10"
                : o.isCorrect && picked
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-border bg-canvas",
            )}
          >
            {picked && o.isCorrect ? "✓ " : picked === o.id ? "✕ " : ""}
            {o.text}
          </button>
        ))}
      </div>
      {picked && chosen && (
        <div className="mt-4 space-y-2 rounded-xl border border-border p-3 text-sm text-ink">
          <p className="font-bold">{chosen.isCorrect ? "✓ Error identified" : "✕ Incorrect"}</p>
          <p><span className="font-bold">WHY?</span> {(chosen.isCorrect ? chosen : correctOpt)?.explanation}</p>
          <p><span className="font-bold">Physiology:</span> {p.error.physiology}</p>
          <p><span className="font-bold">Correct approach:</span> {p.error.correctApproach}</p>
          <button
            type="button"
            onClick={p.onNext}
            className="mt-2 min-h-11 w-full cursor-pointer rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            Next Scenario →
          </button>
        </div>
      )}
    </div>
  );
}
