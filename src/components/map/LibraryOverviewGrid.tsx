"use client";

import { useMemo } from "react";
import type { TopicCategory } from "@/content-types";
import type { GraphData, GraphNode } from "@/registry/build-graph";
import { categoryStyle } from "@/lib/category-style";
import { buildNormalizedGraph, type NormalizedGraph } from "@/lib/normalized-graph";

interface LibraryOverviewGridProps {
  readonly filteredNodes: readonly GraphNode[];
  readonly graphData: GraphData;
  readonly normalizedGraph?: NormalizedGraph;
  readonly selectedNodeId: string | null;
  readonly onSelectTopic: (topicId: string) => void;
  readonly selectedCategory: TopicCategory | "all";
}

export function LibraryOverviewGrid({
  filteredNodes,
  graphData,
  normalizedGraph: propNormalized,
  selectedNodeId,
  onSelectTopic,
  selectedCategory,
}: LibraryOverviewGridProps) {
  const allCategories = Object.keys(categoryStyle) as TopicCategory[];

  const normalized = useMemo(
    () => propNormalized || buildNormalizedGraph(graphData),
    [propNormalized, graphData],
  );

  // Categories to render
  const categoriesToRender = selectedCategory === "all"
    ? allCategories
    : [selectedCategory];

  if (filteredNodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-surface rounded-xl border border-border text-center">
        <svg className="w-12 h-12 text-ink-faint mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-base font-semibold text-ink">No matching ICU topics found</h3>
        <p className="text-sm text-ink-muted mt-1 max-w-md">
          Try adjusting your search keywords or switching category filters to view more of the knowledge map.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {categoriesToRender.map((category) => {
        const nodesInCategory = filteredNodes.filter((node) => node.category === category);
        if (nodesInCategory.length === 0) return null;

        const style = categoryStyle[category];

        return (
          <section key={category} className="space-y-4" aria-labelledby={`category-heading-${category}`}>
            {/* Category Header */}
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div className="flex items-center gap-2.5">
                <span className={`h-3 w-3 rounded-full ${style.dotClass}`} aria-hidden />
                <h2 id={`category-heading-${category}`} className="text-base font-bold text-ink">
                  {style.label}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-surface-muted border border-border text-ink-muted font-medium">
                  {nodesInCategory.length} {nodesInCategory.length === 1 ? "topic" : "topics"}
                </span>
              </div>
            </div>

            {/* Topic Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {nodesInCategory.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const connections = normalized.uniqueNeighborsByNode.get(node.id)?.size || 0;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => onSelectTopic(node.id)}
                    className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-150 relative group ${
                      isSelected
                        ? "bg-accent-soft/30 border-accent shadow-md ring-2 ring-accent/30"
                        : "bg-surface border-border hover:border-border-strong hover:shadow-sm hover:bg-surface-muted/30"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {/* Top Row: Title + Connections Pill */}
                    <div className="flex items-start justify-between gap-2 mb-2 w-full">
                      <h3
                        className={`text-sm font-bold leading-tight line-clamp-2 transition-colors ${
                          isSelected ? "text-accent-strong" : "text-ink group-hover:text-accent"
                        }`}
                      >
                        {node.title}
                      </h3>
                      {connections > 0 && (
                        <span
                          className={`shrink-0 text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                            isSelected
                              ? "bg-accent text-white"
                              : "bg-surface-muted border border-border text-ink-muted group-hover:bg-accent-soft group-hover:text-accent-strong"
                          }`}
                          title={`${connections} unique clinical connections mapped`}
                        >
                          {connections}
                        </span>
                      )}
                    </div>

                    {/* One Liner / Clinical Pearl */}
                    <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed flex-1">
                      {node.oneLiner || "Explore clinical pathways, guidelines, and landmark trial evidence."}
                    </p>

                    {/* Card Footer: Domain Tag + Open hint */}
                    <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[11px] text-ink-faint">
                      <span className="capitalize">{node.category.replace("-", " ")}</span>
                      <span className="group-hover:text-accent group-hover:translate-x-0.5 transition-all">
                        {isSelected ? "Selected ✓" : "Details →"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
