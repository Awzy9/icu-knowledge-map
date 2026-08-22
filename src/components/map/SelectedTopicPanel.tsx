"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { GraphData, GraphNode } from "@/registry/build-graph";
import { categoryStyle } from "@/lib/category-style";
import { relationshipTypeLabel } from "@/lib/relationship-style";
import { buildNormalizedGraph, type NormalizedGraph } from "@/lib/normalized-graph";

interface SelectedTopicPanelProps {
  readonly selectedNode: GraphNode | null;
  readonly graphData: GraphData;
  readonly normalizedGraph?: NormalizedGraph;
  readonly onSelectTopic: (topicId: string) => void;
  readonly onClose: () => void;
  readonly onViewModeChange?: (mode: "library" | "relationships") => void;
  readonly isRelationshipMode?: boolean;
}

export function SelectedTopicPanel({
  selectedNode,
  graphData,
  normalizedGraph: propNormalized,
  onSelectTopic,
  onClose,
  onViewModeChange,
  isRelationshipMode = false,
}: SelectedTopicPanelProps) {
  const normalized = useMemo(
    () => propNormalized || buildNormalizedGraph(graphData),
    [propNormalized, graphData],
  );

  if (!selectedNode) return null;

  const style = categoryStyle[selectedNode.category];
  const summary = normalized.connectionsSummaryByNode.get(selectedNode.id) || {
    totalUniqueCount: 0,
    direct: [],
    differential: [],
    related: [],
  };

  return (
    <aside
      className="flex flex-col h-full bg-surface border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-200"
      aria-label={`Selected topic: ${selectedNode.title}`}
    >
      {/* Header Bar */}
      <div className="flex items-start justify-between gap-3 p-5 border-b border-border bg-surface-muted/30">
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent-soft text-accent border border-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              You are here
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border ${style.chipClass}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${style.dotClass}`} />
              {style.label}
            </span>
          </div>
          <h2 className="text-lg font-bold text-ink leading-snug truncate" title={selectedNode.title}>
            {selectedNode.title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors"
          aria-label="Close topic panel"
          title="Close panel (Esc)"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Body Content */}
      <div className="flex-1 p-5 overflow-y-auto space-y-6 text-sm">
        {/* One-Liner Description */}
        {selectedNode.oneLiner && (
          <div className="p-3.5 rounded-lg bg-surface-muted/50 border border-border/80 text-ink leading-relaxed">
            {selectedNode.oneLiner}
          </div>
        )}

        {/* Primary Navigation Action */}
        <div className="flex flex-col gap-2">
          {selectedNode.status !== "stub" ? (
            <Link
              href={`/topics/${selectedNode.slug}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-strong transition-colors shadow-sm"
            >
              <span>Open Complete Topic</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          ) : (
            <div className="px-4 py-2 rounded-lg bg-surface-muted text-center text-xs text-ink-muted">
              Full topic content in progress
            </div>
          )}

          {selectedNode.status !== "stub" && (
            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/questions/${selectedNode.slug}`}
                className="flex items-center justify-center gap-1.5 w-full px-3 py-1.5 rounded-lg border border-border text-ink-muted hover:text-accent hover:border-accent font-medium transition-colors text-xs text-center"
              >
                <span>Questions</span>
              </Link>
              <Link
                href={`/flashcards/${selectedNode.slug}`}
                className="flex items-center justify-center gap-1.5 w-full px-3 py-1.5 rounded-lg border border-border text-ink-muted hover:text-accent hover:border-accent font-medium transition-colors text-xs text-center"
              >
                <span>Flashcards</span>
              </Link>
            </div>
          )}

          {!isRelationshipMode && onViewModeChange && (
            <button
              type="button"
              onClick={() => onViewModeChange("relationships")}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg border border-border text-ink-muted hover:text-ink hover:bg-surface-muted font-medium transition-colors text-xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Explore in Relationship Graph</span>
            </button>
          )}
        </div>

        {/* Where it Connects: Direct Clinical Connections */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-accent rounded" />
              Direct Connections ({summary.direct.length})
            </h3>
            <span className="text-[11px] text-ink-faint">Solid edge</span>
          </div>

          {summary.direct.length === 0 ? (
            <p className="text-xs text-ink-faint italic pl-3">No direct prerequisite or complication links mapped.</p>
          ) : (
            <div className="grid gap-2">
              {summary.direct.map((conn) => {
                const targetStyle = categoryStyle[conn.node.category];
                return (
                  <button
                    key={conn.node.id}
                    type="button"
                    onClick={() => onSelectTopic(conn.node.id)}
                    className="flex flex-col text-left p-2.5 rounded-lg border border-border hover:border-accent/40 hover:bg-accent-soft/20 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="flex items-center gap-2 font-medium text-ink group-hover:text-accent transition-colors">
                        <span className={`h-2 w-2 rounded-full ${targetStyle.dotClass}`} />
                        {conn.node.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        {conn.types.map((t) => (
                          <span
                            key={t}
                            className="shrink-0 text-[11px] font-medium px-2 py-0.5 rounded bg-surface-muted text-ink-muted group-hover:bg-accent-soft group-hover:text-accent-strong"
                          >
                            {relationshipTypeLabel[t] || t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {conn.labels.length > 0 && (
                      <div className="space-y-1 mt-1 pl-3.5 border-l border-border/80 ml-1 text-xs text-ink-muted">
                        {conn.labels.map((lbl, idx) => (
                          <div key={idx}>{lbl}</div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Differential Diagnosis */}
        {summary.differential.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                <span className="w-2 h-0.5 bg-border-strong rounded" />
                Differential Diagnoses ({summary.differential.length})
              </h3>
              <span className="text-[11px] text-ink-faint">Dashed edge</span>
            </div>

            <div className="grid gap-2">
              {summary.differential.map((conn) => {
                const targetStyle = categoryStyle[conn.node.category];
                return (
                  <button
                    key={conn.node.id}
                    type="button"
                    onClick={() => onSelectTopic(conn.node.id)}
                    className="flex flex-col text-left p-2.5 rounded-lg border border-border/80 hover:border-border-strong hover:bg-surface-muted/40 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="flex items-center gap-2 font-medium text-ink group-hover:text-accent transition-colors">
                        <span className={`h-2 w-2 rounded-full ${targetStyle.dotClass}`} />
                        {conn.node.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        {conn.types.map((t) => (
                          <span
                            key={t}
                            className="shrink-0 text-[11px] text-ink-faint px-1.5 py-0.5 rounded bg-surface-muted"
                          >
                            {relationshipTypeLabel[t] || t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {conn.labels.length > 0 && (
                      <div className="space-y-1 mt-1 pl-3.5 border-l border-border/80 ml-1 text-xs text-ink-muted">
                        {conn.labels.map((lbl, idx) => (
                          <div key={idx}>{lbl}</div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Topics */}
        {summary.related.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                <span className="w-2 h-0.5 bg-border rounded" />
                Related Topics ({summary.related.length})
              </h3>
              <span className="text-[11px] text-ink-faint">Dashed edge</span>
            </div>

            <div className="grid gap-2">
              {summary.related.map((conn) => {
                const targetStyle = categoryStyle[conn.node.category];
                return (
                  <button
                    key={conn.node.id}
                    type="button"
                    onClick={() => onSelectTopic(conn.node.id)}
                    className="flex flex-col text-left p-2.5 rounded-lg border border-border/80 hover:border-border-strong hover:bg-surface-muted/40 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="flex items-center gap-2 font-medium text-ink group-hover:text-accent transition-colors">
                        <span className={`h-2 w-2 rounded-full ${targetStyle.dotClass}`} />
                        {conn.node.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        {conn.types.map((t) => (
                          <span
                            key={t}
                            className="shrink-0 text-[11px] text-ink-faint px-1.5 py-0.5 rounded bg-surface-muted"
                          >
                            {relationshipTypeLabel[t] || t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {conn.labels.length > 0 && (
                      <div className="space-y-1 mt-1 pl-3.5 border-l border-border/80 ml-1 text-xs text-ink-muted">
                        {conn.labels.map((lbl, idx) => (
                          <div key={idx}>{lbl}</div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
