import type { Topic } from "@/content-types";

interface TopicClinicalOrientationProps {
  readonly topic: Topic;
}

export function TopicClinicalOrientation({ topic }: TopicClinicalOrientationProps) {
  const overview = topic.sections.find((s) => s.kind === "overview");
  const diagnosis = topic.sections.find(
    (s) => s.kind === "diagnosis" || s.kind === "clinical-presentation",
  );
  const management = topic.sections.find((s) => s.kind === "management");
  const complications = topic.sections.find((s) => s.kind === "complications");

  const items = [
    { label: "WHAT IS THIS?", text: topic.oneLiner },
    overview && overview.summary && overview.summary !== topic.oneLiner
      ? { label: "WHY DOES IT MATTER?", text: overview.summary }
      : null,
    diagnosis && diagnosis.summary ? { label: "WHAT SHOULD I RECOGNIZE?", text: diagnosis.summary } : null,
    management && management.summary ? { label: "WHAT SHOULD I DO?", text: management.summary } : null,
    complications && complications.summary ? { label: "WHAT CAN GO WRONG?", text: complications.summary } : null,
  ].filter(Boolean) as { label: string; text: string }[];

  if (items.length <= 1) return null;

  return (
    <section aria-label="Clinical Orientation" className="rounded-xl border border-border/80 bg-surface-muted/30 p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-2 border-b border-border/60 pb-2">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
          Clinical Orientation
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent-strong">
              {item.label}
            </span>
            <p className="text-xs leading-relaxed text-ink">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
