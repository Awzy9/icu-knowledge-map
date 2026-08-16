import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";
import type { GraphData, GraphEdge, GraphNode } from "@/registry/build-graph";
import type { TopicCategory, RelationshipType } from "@/content-types";

export interface ClusteredPositionedNode extends GraphNode {
  readonly x: number;
  readonly y: number;
}

export interface ClusteredPositionedEdge {
  readonly type: GraphEdge["type"];
  readonly label?: string;
  readonly source: ClusteredPositionedNode;
  readonly target: ClusteredPositionedNode;
}

export interface ClusteredGraphLayout {
  readonly nodes: readonly ClusteredPositionedNode[];
  readonly edges: readonly ClusteredPositionedEdge[];
}

type SimNode = GraphNode & SimulationNodeDatum;
type SimLink = SimulationLinkDatum<SimNode> & { type: GraphEdge["type"]; label?: string };

// Deterministic cluster centers by category
const CATEGORY_CLUSTER_OFFSETS: Record<TopicCategory, { xFrac: number; yFrac: number }> = {
  respiratory: { xFrac: 0.25, yFrac: 0.25 },
  cardiovascular: { xFrac: 0.72, yFrac: 0.25 },
  neurology: { xFrac: 0.78, yFrac: 0.65 },
  renal: { xFrac: 0.22, yFrac: 0.68 },
  "infectious-disease": { xFrac: 0.42, yFrac: 0.78 },
  hematology: { xFrac: 0.48, yFrac: 0.20 },
  "gi-hepatic": { xFrac: 0.62, yFrac: 0.80 },
  procedures: { xFrac: 0.50, yFrac: 0.48 },
};

/**
 * Computes a calm, domain-clustered layout with collision avoidance
 * so that nodes are grouped by organ system / clinical category without overlapping.
 */
export function computeClusteredGraphLayout(
  data: GraphData,
  width: number,
  height: number,
  ticks = 300,
): ClusteredGraphLayout {
  if (data.nodes.length === 0) return { nodes: [], edges: [] };

  // Initialize nodes near their category cluster center
  const simNodes: SimNode[] = data.nodes.map((node, i) => {
    const cluster = CATEGORY_CLUSTER_OFFSETS[node.category] || { xFrac: 0.5, yFrac: 0.5 };
    const targetX = width * cluster.xFrac;
    const targetY = height * cluster.yFrac;

    // Small deterministic radial offset around cluster center
    const angle = (i * 1.37) % (2 * Math.PI);
    const radius = 30 + ((i * 17) % 45);

    return {
      ...node,
      x: targetX + radius * Math.cos(angle),
      y: targetY + radius * Math.sin(angle),
    };
  });

  const nodeIds = new Set(simNodes.map((n) => n.id));

  // Edges
  const simLinks: SimLink[] = data.edges
    .filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target))
    .map((edge) => ({
      source: edge.source,
      target: edge.target,
      type: edge.type,
      label: edge.label,
    }));

  const simulation = forceSimulation(simNodes)
    .force(
      "x",
      forceX<SimNode>((d) => width * (CATEGORY_CLUSTER_OFFSETS[d.category]?.xFrac ?? 0.5)).strength(0.45),
    )
    .force(
      "y",
      forceY<SimNode>((d) => height * (CATEGORY_CLUSTER_OFFSETS[d.category]?.yFrac ?? 0.5)).strength(0.45),
    )
    .force("charge", forceManyBody().strength(-140))
    .force(
      "link",
      forceLink<SimNode, SimLink>(simLinks)
        .id((d) => d.id)
        .distance(70)
        .strength(0.12),
    )
    .force("collide", forceCollide(34))
    .force("center", forceCenter(width / 2, height / 2).strength(0.05))
    .stop();

  for (let i = 0; i < ticks; i++) {
    simulation.tick();
  }

  const nodesById = new Map<string, ClusteredPositionedNode>(
    simNodes.map((node) => [
      node.id,
      {
        ...node,
        x: Math.max(30, Math.min(width - 30, node.x ?? width / 2)),
        y: Math.max(30, Math.min(height - 30, node.y ?? height / 2)),
      },
    ]),
  );

  // Deduplicate reciprocal visual edges (A -> B and B -> A -> single visual edge)
  const edgePriority: Record<RelationshipType, number> = {
    "prerequisite": 6,
    "treated-with": 5,
    "complication": 4,
    "physiology": 3,
    "guideline": 2,
    "evidence": 2,
    "differential": 1,
    "related-to": 0,
  };

  const edgeMap = new Map<string, { type: RelationshipType; label?: string; source: ClusteredPositionedNode; target: ClusteredPositionedNode }>();

  for (const link of simLinks) {
    const sourceId = typeof link.source === "object" ? link.source.id : String(link.source);
    const targetId = typeof link.target === "object" ? link.target.id : String(link.target);
    const source = nodesById.get(sourceId);
    const target = nodesById.get(targetId);
    if (!source || !target || sourceId === targetId) continue;

    // Unordered pair key so A-B and B-A map to the same visual edge
    const pairKey = [sourceId, targetId].sort().join("<->");
    const existing = edgeMap.get(pairKey);

    if (!existing) {
      edgeMap.set(pairKey, {
        type: link.type,
        label: link.label,
        source,
        target,
      });
    } else {
      // If new edge has higher priority type or provides label, update type / label
      if (edgePriority[link.type] > edgePriority[existing.type]) {
        edgeMap.set(pairKey, {
          type: link.type,
          label: link.label || existing.label,
          source,
          target,
        });
      }
    }
  }

  const edges: ClusteredPositionedEdge[] = Array.from(edgeMap.values());

  return { nodes: [...nodesById.values()], edges };
}
