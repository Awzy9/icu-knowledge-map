"use client";

import { useState, useMemo, useRef } from "react";
import type { GraphData } from "@/registry/build-graph";
import type { RelationshipType, TopicCategory } from "@/content-types";
import { categoryStyle } from "@/lib/category-style";
import { buildNormalizedGraph, extractActiveSubgraph, type NormalizedGraph } from "@/lib/normalized-graph";
import { computeFocusedSubgraphLayout, type SubgraphLayout, type SubgraphPositionedNode } from "./subgraph-layout";

interface RelationshipExplorerGraphProps {
  readonly graphData: GraphData;
  readonly normalizedGraph?: NormalizedGraph;
  readonly selectedNodeId: string | null;
  readonly onSelectTopic: (topicId: string) => void;
  readonly selectedCategory: TopicCategory | "all";
}

const DASHED_TYPES = new Set<RelationshipType>(["related-to", "differential"]);
const CAUSAL_TYPES = new Set<RelationshipType>(["physiology", "complication", "treated-with", "prerequisite"]);

export function RelationshipExplorerGraph({
  graphData,
  normalizedGraph: propNormalized,
  selectedNodeId,
  onSelectTopic,
  selectedCategory,
}: RelationshipExplorerGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [expandTwoHops, setExpandTwoHops] = useState(false);

  // Zoom & Pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const canvasWidth = 1000;
  const canvasHeight = 720;

  // Normalized Graph Dataset
  const normalized = useMemo(
    () => propNormalized || buildNormalizedGraph(graphData),
    [propNormalized, graphData],
  );

  // Extract Active Subgraph ONLY
  const activeSubgraph = useMemo(() => {
    if (!selectedNodeId) return null;
    return extractActiveSubgraph(normalized, selectedNodeId, expandTwoHops);
  }, [normalized, selectedNodeId, expandTwoHops]);

  // Compute Layout on the Active Subgraph ONLY
  const layout: SubgraphLayout | null = useMemo(() => {
    if (!activeSubgraph) return null;
    return computeFocusedSubgraphLayout(activeSubgraph, canvasWidth, canvasHeight);
  }, [activeSubgraph, canvasWidth, canvasHeight]);

  const nodesById = useMemo(() => {
    if (!layout) return new Map<string, SubgraphPositionedNode>();
    return new Map<string, SubgraphPositionedNode>(layout.nodes.map((n) => [n.id, n]));
  }, [layout]);

  // Reset view
  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setExpandTwoHops(false);
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z * 1.25, 2.5));
  const handleZoomOut = () => setZoom((z) => Math.max(z / 1.25, 0.6));

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: dragStartRef.current.panX + dx,
      y: dragStartRef.current.panY + dy,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setZoom((z) => Math.min(Math.max(z * zoomFactor, 0.6), 2.5));
  };

  const hoveredNode = hoveredNodeId ? nodesById.get(hoveredNodeId) : null;
  const selectedNode = selectedNodeId ? normalized.nodesById.get(selectedNodeId) : null;

  // Filter candidate topics for empty state selector
  const candidateTopics = useMemo(() => {
    return graphData.nodes.filter((node) => {
      if (selectedCategory !== "all" && node.category !== selectedCategory) return false;
      return true;
    });
  }, [graphData.nodes, selectedCategory]);

  return (
    <div className="flex flex-col bg-surface border border-border rounded-xl shadow-sm overflow-hidden relative">
      {/* Top Toolbar / Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 border-b border-border bg-surface-muted/40 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Relationship Explorer
          </span>
          <span className="text-ink-faint">|</span>
          <span className="text-ink-muted">
            {selectedNode && activeSubgraph ? (
              <>
                Focused on <strong className="text-ink">{selectedNode.title}</strong> (
                {activeSubgraph.level1Ids.size} direct {activeSubgraph.level1Ids.size === 1 ? "neighbor" : "neighbors"}
                {expandTwoHops && activeSubgraph.level2Ids.size > 0 && ` + ${activeSubgraph.level2Ids.size} 2nd-degree`})
              </>
            ) : (
              "Select any topic to explore its clinical neighborhood"
            )}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          {selectedNodeId && (
            <button
              type="button"
              onClick={() => setExpandTwoHops((h) => !h)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-medium transition-colors ${
                expandTwoHops
                  ? "bg-accent-soft text-accent border-accent/40 font-semibold"
                  : "bg-surface text-ink-muted border-border hover:text-ink hover:bg-surface-muted"
              }`}
              title="Expand to show 2nd-degree connected topics"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{expandTwoHops ? "2 Hops Active" : "Expand 2 Hops"}</span>
            </button>
          )}

          {selectedNodeId && (
            <button
              type="button"
              onClick={() => {
                setZoom(1);
                setPan({ x: 0, y: 0 });
              }}
              className="px-2.5 py-1 rounded-md bg-surface border border-border text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors font-medium"
              title="Re-center graph"
            >
              Re-Center
            </button>
          )}

          <div className="flex items-center rounded-md border border-border bg-surface overflow-hidden">
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1.5 text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors"
              title="Zoom In (+)"
              aria-label="Zoom in"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1.5 text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors border-l border-border"
              title="Zoom Out (-)"
              aria-label="Zoom out"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleResetView}
              className="px-2 py-1 text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors border-l border-border text-[11px] font-medium"
              title="Reset Zoom and Pan"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Main Graph Area */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className={`w-full h-[580px] sm:h-[640px] lg:h-[700px] bg-canvas relative overflow-hidden select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {layout ? (
          <svg
            viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
            className="w-full h-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
          >
            <defs>
              {/* Arrow Marker for causal/direct relationships */}
              <marker
                id="subgraph-arrow"
                viewBox="0 0 10 10"
                refX="22"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--color-accent)" />
              </marker>

              {/* Background Grid Pattern */}
              <pattern id="subgraph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="var(--color-border)" opacity="0.3" />
              </pattern>
            </defs>

            <rect width={canvasWidth} height={canvasHeight} fill="url(#subgraph-grid)" />

            {/* Concentric Guide Rings */}
            <g className="guide-rings pointer-events-none" opacity={0.25}>
              <circle
                cx={canvasWidth / 2}
                cy={canvasHeight / 2}
                r={190}
                fill="none"
                stroke="var(--color-accent)"
                strokeDasharray="4 6"
                strokeWidth={1}
              />
              <circle
                cx={canvasWidth / 2}
                cy={canvasHeight / 2}
                r={280}
                fill="none"
                stroke="var(--color-border-strong)"
                strokeDasharray="3 6"
                strokeWidth={1}
              />
              {expandTwoHops && (
                <circle
                  cx={canvasWidth / 2}
                  cy={canvasHeight / 2}
                  r={370}
                  fill="none"
                  stroke="var(--color-border)"
                  strokeDasharray="2 6"
                  strokeWidth={1}
                />
              )}
            </g>

            {/* EDGES LAYER */}
            <g className="edges-layer">
              {layout.edges.map((edge) => {
                const isDashed = DASHED_TYPES.has(edge.type);
                const isCausal = CAUSAL_TYPES.has(edge.type);
                const touchesCenter = edge.source.isCenter || edge.target.isCenter;
                const isHovered = hoveredNodeId === edge.source.id || hoveredNodeId === edge.target.id;

                return (
                  <g key={edge.id}>
                    <line
                      x1={edge.source.x}
                      y1={edge.source.y}
                      x2={edge.target.x}
                      y2={edge.target.y}
                      stroke={isHovered ? "var(--color-accent-strong)" : touchesCenter ? "var(--color-accent)" : "var(--color-border-strong)"}
                      strokeWidth={isHovered ? 3 : touchesCenter ? 2.25 : 1.5}
                      strokeDasharray={isDashed ? "5 4" : undefined}
                      markerEnd={isCausal || touchesCenter ? "url(#subgraph-arrow)" : undefined}
                      opacity={isHovered ? 1 : touchesCenter ? 0.85 : 0.4}
                      className="transition-all duration-150"
                    />
                    {isHovered && edge.label && (
                      <g transform={`translate(${(edge.source.x + edge.target.x) / 2}, ${(edge.source.y + edge.target.y) / 2 - 8})`}>
                        <rect
                          x={-Math.min(100, edge.label.length * 3.5 + 8)}
                          y={-9}
                          width={Math.min(200, edge.label.length * 7 + 16)}
                          height={18}
                          rx={9}
                          fill="var(--color-surface)"
                          stroke="var(--color-accent)"
                          strokeWidth={1}
                          className="shadow-sm"
                        />
                        <text
                          x={0}
                          y={3}
                          textAnchor="middle"
                          fontSize={9.5}
                          fontWeight={600}
                          fill="var(--color-accent-strong)"
                          className="pointer-events-none select-none"
                        >
                          {edge.label.length > 32 ? edge.label.slice(0, 30) + "…" : edge.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* NODES LAYER */}
            <g className="nodes-layer">
              {layout.nodes.map((node) => {
                const isCenter = node.isCenter;
                const isHovered = node.id === hoveredNodeId;
                const style = categoryStyle[node.category];

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer transition-transform duration-150"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTopic(node.id);
                    }}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId((id) => (id === node.id ? null : id))}
                  >
                    {/* Hit Target */}
                    <circle r={isCenter ? 36 : 28} fill="transparent" />

                    {/* Center Pulse Ring */}
                    {isCenter && (
                      <circle
                        r={30}
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        className="animate-spin"
                        style={{ transformOrigin: "0 0", animationDuration: "16s" }}
                      />
                    )}

                    {/* Node Circle */}
                    <circle
                      r={isCenter ? 20 : node.isLevel1 ? 14 : 11}
                      fill={style.graphColor}
                      stroke={isCenter ? "var(--color-accent)" : isHovered ? "var(--color-ink)" : "var(--color-surface)"}
                      strokeWidth={isCenter ? 3.5 : 2}
                      className="shadow-md transition-all duration-200"
                    />

                    {/* Inner Core */}
                    <circle
                      r={isCenter ? 8 : 4}
                      fill="var(--color-surface)"
                      className="pointer-events-none"
                    />

                    {/* Node Label Card */}
                    <g className="pointer-events-none" transform={`translate(0, ${isCenter ? 30 : 22})`}>
                      <rect
                        x={-70}
                        y={-10}
                        width={140}
                        height={20}
                        rx={10}
                        fill="var(--color-surface)"
                        stroke={isCenter ? "var(--color-accent)" : isHovered ? "var(--color-ink-muted)" : "var(--color-border)"}
                        strokeWidth={isCenter ? 1.5 : 1}
                        className="shadow-sm"
                      />
                      <text
                        x={0}
                        y={3.5}
                        textAnchor="middle"
                        fontSize={isCenter ? 11 : 10}
                        fontWeight={isCenter ? 700 : 600}
                        fill={isCenter ? "var(--color-accent-strong)" : "var(--color-ink)"}
                        className="select-none"
                      >
                        {node.shortName || (node.title.length > 20 ? node.title.slice(0, 18) + "…" : node.title)}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        ) : (
          /* Empty State: Focused Navigation Prompt */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-canvas">
            <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4 shadow-sm border border-accent/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-ink">Select a Topic to Explore Relationships</h3>
            <p className="text-xs text-ink-muted mt-1.5 max-w-md leading-relaxed">
              Explore focused clinical neighborhoods. Selecting a topic reveals its direct prerequisites, complications, physiology, and differential diagnoses without network clutter.
            </p>

            {/* Quick Pick Domain Chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-xl">
              {candidateTopics.slice(0, 10).map((t) => {
                const style = categoryStyle[t.category];
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onSelectTopic(t.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-accent hover:bg-accent-soft/30 transition-all text-xs font-medium text-ink"
                  >
                    <span className={`h-2 w-2 rounded-full ${style.dotClass}`} />
                    <span>{t.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Hovered Node Tooltip Overlay */}
        {hoveredNode && (
          <div className="absolute top-4 left-4 p-3 bg-surface/95 backdrop-blur border border-border rounded-xl shadow-lg max-w-xs text-xs pointer-events-none animate-in fade-in duration-100 z-10">
            <div className="font-bold text-ink mb-1 flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${categoryStyle[hoveredNode.category].dotClass}`} />
              <span>{hoveredNode.title}</span>
            </div>
            <p className="text-ink-muted leading-relaxed line-clamp-2">
              {hoveredNode.oneLiner || "Click to explore relationships."}
            </p>
            <div className="mt-2 text-[10px] text-accent font-medium">Click node to focus neighborhood →</div>
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 border-t border-border bg-surface-muted/20 text-xs text-ink-muted">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold text-ink">Legend:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-accent" />
            <span>Direct Clinical (Inner Ring)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 border-b border-dashed border-ink-muted" />
            <span>Related & Differential (Outer Ring)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-accent font-bold">→</span>
            <span>Causal Link</span>
          </span>
        </div>

        <div className="text-ink-faint text-[11px]">
          Pan: Drag canvas | Zoom: Scroll or toolbar
        </div>
      </div>
    </div>
  );
}
