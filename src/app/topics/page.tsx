import Link from "next/link";
import type { Metadata } from "next";
import { getAllTopics } from "@/registry";
import { categoryStyle } from "@/lib/category-style";
import type { TopicCategory } from "@/content-types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = { title: "Topics" };

export default function TopicsIndexPage() {
  const topics = getAllTopics();
  const categories = Object.keys(categoryStyle) as TopicCategory[];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Topics" }]} />
        <h1 className="text-2xl font-semibold text-ink">Topics</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          Browse by system. Topics marked &quot;coming soon&quot; already exist on the Knowledge Map but
          don&apos;t have written content yet; topics marked &quot;placeholder&quot; have their section
          structure in place with TODO markers instead of verified content.
        </p>
      </div>

      {categories.map((category) => {
        const items = topics.filter((topic) => topic.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} id={category} className="flex scroll-mt-24 flex-col gap-3">
            <h2 className={`text-sm font-semibold uppercase tracking-wide ${categoryStyle[category].textClass}`}>
              {categoryStyle[category].label}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((topic) => (
                <div key={topic.id} className="rounded-md border border-border bg-surface p-4">
                  {topic.status === "stub" ? (
                    <p className="text-sm font-semibold text-ink-faint">
                      {topic.title} <span className="text-xs font-normal">(coming soon)</span>
                    </p>
                  ) : (
                    <Link href={`/topics/${topic.slug}`} className="text-sm font-semibold text-ink hover:text-accent">
                      {topic.title}
                      {topic.status === "placeholder" && (
                        <span className="ml-1.5 text-xs font-normal text-ink-faint">(placeholder)</span>
                      )}
                    </Link>
                  )}
                  <p className="mt-1 text-sm text-ink-muted">{topic.oneLiner}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
