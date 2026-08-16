import type { Metadata } from "next";
import { getGraph } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { KnowledgeMapRoot } from "@/components/map/KnowledgeMapRoot";

export const metadata: Metadata = {
  title: "ICU Knowledge Map — Clinical Navigation & Relationship Atlas",
  description:
    "Interactive clinical knowledge map of intensive care medicine. Explore 60 core ICU topics organized by clinical domain, direct pathophysiologic connections, and differential relationships.",
};

export default function MapPage() {
  const graph = getGraph();

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <Breadcrumbs items={[{ label: "Knowledge Map" }]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">ICU Knowledge Map</h1>
            <p className="mt-1.5 max-w-3xl text-sm text-ink-muted leading-relaxed">
              Clinical navigation atlas across {graph.nodes.length} core critical care topics. Browse by organ system in{" "}
              <strong className="text-ink">Library Overview</strong>, or select any topic to reveal its immediate{" "}
              <strong className="text-ink">Direct, Causal, and Differential Connections</strong> in the Relationship Explorer.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-ink-muted">
              <strong className="text-ink">{graph.nodes.length}</strong> Topics
            </span>
            <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-ink-muted">
              <strong className="text-ink">{graph.edges.length}</strong> Mapped Connections
            </span>
          </div>
        </div>
      </div>

      {/* Main Knowledge Map Interactive System */}
      <KnowledgeMapRoot graphData={graph} />
    </div>
  );
}
