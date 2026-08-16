"use client";

import { useCompletedTopics } from "@/hooks/useCompletedTopics";
import { cn } from "@/lib/cn";

interface TopicCompleteToggleProps {
  readonly topicId: string;
  readonly className?: string;
}

export function TopicCompleteToggle({ topicId, className }: TopicCompleteToggleProps) {
  const { isCompleted, toggleCompleted } = useCompletedTopics();
  const complete = isCompleted(topicId);

  return (
    <button
      type="button"
      onClick={() => toggleCompleted(topicId)}
      aria-pressed={complete}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
        complete
          ? "border-emerald-400 bg-emerald-50 text-emerald-900"
          : "border-border text-ink-muted hover:border-border-strong hover:text-ink",
        className,
      )}
    >
      {complete ? "✓ Completed" : "Mark complete"}
    </button>
  );
}
