"use client";

import { useState, useMemo, useEffect } from "react";
import type { GraphData } from "@/registry/build-graph";
import type { TopicCategory } from "@/content-types";
import { buildNormalizedGraph } from "@/lib/normalized-graph";
import { KnowledgeMapControls } from "./KnowledgeMapControls";
import { LibraryOverviewGrid } from "./LibraryOverviewGrid";
import { RelationshipExplorerGraph } from "./RelationshipExplorerGraph";
import { SelectedTopicPanel } from "./SelectedTopicPanel";

interface KnowledgeMapRootProps {
  readonly graphData: GraphData;
}

export function KnowledgeMapRoot({ graphData }: KnowledgeMapRootProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | "all">("all");
  const [viewMode, setViewMode] = useState<"library" | "relationships">("library");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Close panel on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedNodeId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute normalized visual graph once for the entire view tree
  const normalizedGraph = useMemo(
    () => buildNormalizedGraph(graphData),
    [graphData],
  );

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<TopicCategory, number> = {
      respiratory: 0,
      cardiovascular: 0,
      neurology: 0,
      renal: 0,
      "infectious-disease": 0,
      hematology: 0,
      "gi-hepatic": 0,
      procedures: 0,
    };
    for (const node of graphData.nodes) {
      if (counts[node.category] !== undefined) {
        counts[node.category]++;
      }
    }
    return counts;
  }, [graphData.nodes]);

  // Filter nodes based on search and category
  const filteredNodes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return graphData.nodes.filter((node) => {
      // Category filter
      if (selectedCategory !== "all" && node.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (!query) return true;

      const titleMatch = node.title.toLowerCase().includes(query);
      const shortMatch = node.shortName ? node.shortName.toLowerCase().includes(query) : false;
      const descMatch = node.oneLiner ? node.oneLiner.toLowerCase().includes(query) : false;
      const categoryMatch = node.category.toLowerCase().includes(query);

      return titleMatch || shortMatch || descMatch || categoryMatch;
    });
  }, [graphData.nodes, searchQuery, selectedCategory]);

  const selectedNode = useMemo(
    () => (selectedNodeId ? graphData.nodes.find((n) => n.id === selectedNodeId) || null : null),
    [selectedNodeId, graphData.nodes],
  );

  const handleSelectTopic = (topicId: string) => {
    setSelectedNodeId((current) => (current === topicId ? null : topicId));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Controls Bar: Search + Category Filters + Mode Switcher */}
      <KnowledgeMapControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalTopicsCount={graphData.nodes.length}
        filteredCount={filteredNodes.length}
        categoryCounts={categoryCounts}
      />

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Main Section (Spans 12 columns if no panel, or 8 columns on large screens when panel is open) */}
        <div className={`transition-all duration-200 ${selectedNode ? "lg:col-span-8" : "lg:col-span-12"}`}>
          {viewMode === "library" ? (
            <LibraryOverviewGrid
              filteredNodes={filteredNodes}
              graphData={graphData}
              normalizedGraph={normalizedGraph}
              selectedNodeId={selectedNodeId}
              onSelectTopic={handleSelectTopic}
              selectedCategory={selectedCategory}
            />
          ) : (
            <RelationshipExplorerGraph
              graphData={graphData}
              normalizedGraph={normalizedGraph}
              selectedNodeId={selectedNodeId}
              onSelectTopic={handleSelectTopic}
              selectedCategory={selectedCategory}
            />
          )}
        </div>

        {/* Right Section: Selected Topic Information Panel */}
        {selectedNode && (
          <div className="lg:col-span-4 sticky top-6">
            <SelectedTopicPanel
              selectedNode={selectedNode}
              graphData={graphData}
              normalizedGraph={normalizedGraph}
              onSelectTopic={(id) => setSelectedNodeId(id)}
              onClose={() => setSelectedNodeId(null)}
              onViewModeChange={setViewMode}
              isRelationshipMode={viewMode === "relationships"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
