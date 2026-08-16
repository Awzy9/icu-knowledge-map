import type { Topic, ClinicalProblem, Pathway, Calculator } from "@/content-types";
import type { TopicReferences } from "@/registry";
import { categoryStyle } from "@/lib/category-style";
import { Tag } from "@/components/ui/Tag";
import { BookmarkToggle } from "@/components/bookmarks/BookmarkToggle";
import { TopicCompleteToggle } from "@/components/bookmarks/TopicCompleteToggle";
import { TopicActionBar } from "@/components/layout/TopicActionBar";

interface TopicHeaderProps {
  readonly topic: Topic;
  readonly problems?: readonly ClinicalProblem[];
  readonly pathways?: readonly Pathway[];
  readonly calculators?: readonly Calculator[];
  readonly references?: TopicReferences;
  readonly flashcardCount?: number;
  readonly questionCount?: number;
}

export function TopicHeader({
  topic,
  problems = [],
  pathways = [],
  calculators = [],
  references = { trials: [], guidelines: [], systematicReviews: [] },
  flashcardCount = 0,
  questionCount = 0,
}: TopicHeaderProps) {
  const category = categoryStyle[topic.category];

  return (
    <header className="flex flex-col gap-4 border-b border-border pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${category.dotClass}`} aria-hidden />
          <span className={`text-xs font-medium uppercase tracking-wide ${category.textClass}`}>
            {category.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TopicCompleteToggle topicId={topic.id} />
          <BookmarkToggle type="topic" id={topic.id} />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-ink sm:text-3xl">{topic.title}</h1>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink-muted">{topic.oneLiner}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-ink-faint">
        <Tag>Last reviewed {topic.lastReviewed}</Tag>
        {topic.version && <Tag>v{topic.version}</Tag>}
        {topic.currentStatus && <span className="italic">{topic.currentStatus}</span>}
      </div>

      {/* Dynamic Topic Action Bar */}
      <TopicActionBar
        topicSlug={topic.slug}
        problems={problems}
        pathways={pathways}
        calculators={calculators}
        references={references}
        flashcardCount={flashcardCount}
        questionCount={questionCount}
      />
    </header>
  );
}

