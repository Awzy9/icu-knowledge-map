import Link from "next/link";
import type { Question } from "@/content-types";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { Tag } from "@/components/ui/Tag";
import { difficultyLabel } from "@/lib/study-style";
import { cn } from "@/lib/cn";
import { resolveStudyReference } from "./resolveStudyReference";

interface QuestionCardProps {
  readonly question: Question;
  readonly selectedOptionId: string | null;
  readonly onSelect: (optionId: string) => void;
}

export function QuestionCard({ question, selectedOptionId, onSelect }: QuestionCardProps) {
  const revealed = selectedOptionId !== null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <Tag>{difficultyLabel[question.difficulty]}</Tag>
        <BookmarkToggle type="question" id={question.id} />
      </div>

      <p className="text-base text-ink">{question.stem}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const isSelected = option.id === selectedOptionId;
          return (
            <button
              key={option.id}
              type="button"
              disabled={revealed}
              onClick={() => onSelect(option.id)}
              className={cn(
                "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                !revealed && "border-border hover:border-border-strong",
                revealed && option.isCorrect && "border-emerald-400 bg-emerald-50 text-emerald-900 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-300",
                revealed && isSelected && !option.isCorrect && "border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-300",
                revealed && !isSelected && !option.isCorrect && "border-border text-ink-faint",
              )}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="flex flex-col gap-3">
          <div className="rounded-md bg-surface-sunken p-3.5 text-sm text-ink border border-border/60">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-accent-strong">Why?</p>
            <p className="leading-relaxed">{question.explanation}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-ink-faint">
              {question.references.map((reference, i) => {
                const resolved = resolveStudyReference(reference);
                return resolved.href ? (
                  <Link key={i} href={resolved.href} className="hover:text-accent font-medium">
                    {resolved.text}
                  </Link>
                ) : (
                  <span key={i}>{resolved.text}</span>
                );
              })}
            </div>

            <Link
              href={`/topics/${question.topicId}${question.sectionId ? `#${question.sectionId}` : ""}`}
              className="font-semibold text-accent hover:text-accent-strong flex items-center gap-1"
            >
              Review this concept &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
