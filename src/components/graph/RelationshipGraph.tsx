"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GraphData, GraphNode } from "@/registry/build-graph";
import type { RelationshipType } from "@/content-types";
import { categoryStyle } from "@/lib/category-style";
import { relationshipTypeLabel } from "@/lib/relationship-style";
import { computeGraphLayout, filterEgoGraph, type PositionedNode } from "./graph-layout";

interface RelationshipGraphProps {
  readonly data: GraphData;
  /** When set, renders an N-hop ego-graph around this topic instead of the full graph. */
  readonly focusNodeId?: string;
  readonly hops?: 1 | 2;
  readonly width?: number;
  readonly height?: number;
}

const DASHED_TYPES = new Set<RelationshipType>(["related-to", "differential", "evidence", "guideline"]);

interface ConnectionRow {
  readonly type: RelationshipType;
  readonly label?: string;
  readonly node: GraphNode;
}

/** Both-direction edges touching `nodeId`, resolved to display rows for the "why this connects" panel. */
function connectionsFor(nodeId: string, data: GraphData): readonly ConnectionRow[] {
  const nodesById = new Map(data.nodes.map((node) => [node.id, node]));
  const rows: ConnectionRow[] = [];
  for (const edge of data.edges) {
    if (edge.source === nodeId) {
      const node = nodesById.get(edge.target);
      if (node) rows.push({ type: edge.type, label: edge.label, node });
    } else if (edge.target === nodeId) {
      const node = nodesById.get(edge.source);
      if (node) rows.push({ type: edge.type, label: edge.label, node });
    }
  }
  return rows;
}

export function RelationshipGraph({
  data,
  focusNodeId,
  hops = 1,
  width = 560,
  height = 420,
}: RelationshipGraphProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const scoped = useMemo(
    () => (focusNodeId ? filterEgoGraph(data, focusNodeId, hops) : data),
    [data, focusNodeId, hops],
  );

  // Settles once on mount (memoized on scoped/size), not re-simulated on every render.
  const layout = useMemo(() => computeGraphLayout(scoped, width, height), [scoped, width, height]);

  const selectedNode = selectedId ? layout.nodes.find((node) => node.id === selectedId) : undefined;
  const connections = useMemo(
    () => (selectedId ? connectionsFor(selectedId, scoped) : []),
    [selectedId, scoped],
  );
  const neighborIds = useMemo(() => new Set(connections.map((row) => row.node.id)), [connections]);

  if (layout.nodes.length === 0) {
    return <p className="text-sm text-ink-faint">No related topics yet.</p>;
  }

  const selectNode = (node: PositionedNode) => {
    setSelectedId((current) => (current === node.id ? null : node.id));
  };

  const isDimmed = (nodeId: string) =>
    selectedId !== null && nodeId !== selectedId && !neighborIds.has(nodeId);

  const edgeTouchesSelection = (source: string, target: string) =>
    selectedId === null || source === selectedId || target === selectedId;

  return (
    <div className="flex flex-col gap-3">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Topic relationship graph — select a node to see how it connects"
        className="h-auto w-full"
        onKeyDown={(event) => {
          if (event.key === "Escape") setSelectedId(null);
        }}
      >
        {/* Invisible full-canvas rect so clicking empty space deselects. */}
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="transparent"
          onClick={() => setSelectedId(null)}
        />
        <g>
          {layout.edges.map((edge, i) => {
            const touches = edgeTouchesSelection(edge.source.id, edge.target.id);
            return (
              <line
                key={i}
                x1={edge.source.x}
                y1={edge.source.y}
                x2={edge.target.x}
                y2={edge.target.y}
                stroke="var(--color-border-strong)"
                strokeWidth={touches && selectedId !== null ? 2 : 1.5}
                strokeDasharray={DASHED_TYPES.has(edge.type) ? "4 3" : undefined}
                opacity={touches ? 1 : 0.15}
                className="motion-safe:transition-opacity motion-safe:duration-200"
              />
            );
          })}
        </g>
        <g>
          {layout.nodes.map((node) => {
            const isFocus = node.id === focusNodeId;
            const isSelected = node.id === selectedId;
            const isStub = node.status === "stub";
            const dimmed = isDimmed(node.id);
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer motion-safe:transition-opacity motion-safe:duration-200"
                opacity={dimmed ? 0.25 : 1}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={
                  isStub
                    ? `${node.title} (coming soon) — select to see connections`
                    : `${node.title} — select to see connections`
                }
                onClick={() => selectNode(node)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectNode(node);
                  }
                }}
                onMouseEnter={() => setHoveredId(node.id)}
                onMouseLeave={() => setHoveredId((id) => (id === node.id ? null : id))}
                onFocus={() => setHoveredId(node.id)}
                onBlur={() => setHoveredId((id) => (id === node.id ? null : id))}
              >
                {/* Larger invisible hit area — the visible dot is only 7-10px, too small a target on
                    its own, and a click landing in the gap between dot and label would otherwise fall
                    through to the deselect-on-background-click rect below. */}
                <circle r={22} fill="transparent" />
                <circle
                  r={isFocus || isSelected ? 10 : 7}
                  fill={categoryStyle[node.category].graphColor}
                  opacity={isStub ? 0.35 : 1}
                  stroke={isSelected ? "var(--color-accent)" : isFocus ? "var(--color-ink)" : "none"}
                  strokeWidth={isSelected ? 3 : 2}
                  className="pointer-events-none"
                />
                <g transform={`translate(0, ${isFocus || isSelected ? 22 : 18})`}>
                  <rect
                    x={-50}
                    y={-8}
                    width={100}
                    height={16}
                    rx={8}
                    fill="var(--color-surface)"
                    stroke="var(--color-border)"
                    strokeWidth={0.75}
                    opacity={0.9}
                  />
                  <text
                    x={0}
                    y={3}
                    textAnchor="middle"
                    className="fill-ink text-[9.5px] font-medium"
                    opacity={hoveredId === node.id || isFocus || isSelected ? 1 : 0.85}
                  >
                    {node.title.length > 18 ? `${node.title.slice(0, 16)}…` : node.title}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>

      {selectedNode ? (
        <div className="rounded-md border border-accent/30 bg-accent-soft p-4" aria-live="polite">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">Why this connects</p>
              <h3 className="text-sm font-semibold text-ink">{selectedNode.title}</h3>
            </div>
            {selectedNode.status !== "stub" && (
              <Link
                href={`/topics/${selectedNode.slug}`}
                className="shrink-0 text-xs font-medium text-accent hover:text-accent-strong"
              >
                Open topic →
              </Link>
            )}
          </div>
          {connections.length === 0 ? (
            <p className="text-sm text-ink-muted">No registered connections for this topic yet.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {connections.map((row, i) => (
                <li key={`${row.type}-${row.node.id}-${i}`} className="flex flex-col gap-0.5 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${categoryStyle[row.node.category].dotClass}`}
                      aria-hidden
                    />
                    <span className="font-medium text-ink">{row.node.title}</span>
                    <span className="text-xs text-ink-faint">— {relationshipTypeLabel[row.type]}</span>
                  </span>
                  {row.label && <span className="pl-3 text-ink-muted">{row.label}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p className="text-xs text-ink-faint">Select a node to see why it connects to the rest of the map.</p>
      )}
    </div>
  );
}
