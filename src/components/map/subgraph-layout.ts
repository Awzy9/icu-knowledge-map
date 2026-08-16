import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";
import type { GraphNode } from "@/registry/build-graph";
import type { RelationshipType } from "@/content-types";
import type { ActiveSubgraph } from "@/lib/normalized-graph";

export interface SubgraphPositionedNode extends GraphNode {
  readonly x: number;
  readonly y: number;
  readonly isCenter: boolean;
  readonly isLevel1: boolean;
  readonly isLevel2: boolean;
}

export interface SubgraphPositionedEdge {
  readonly id: string;
  readonly type: RelationshipType;
  readonly label?: string;
  readonly isBidirectional: boolean;
  readonly source: SubgraphPositionedNode;
  readonly target: SubgraphPositionedNode;
}

export interface SubgraphLayout {
  readonly nodes: readonly SubgraphPositionedNode[];
  readonly edges: readonly SubgraphPositionedEdge[];
  readonly centerNode: SubgraphPositionedNode;
}

type SimNode = GraphNode &
  SimulationNodeDatum & {
    isCenter: boolean;
    isLevel1: boolean;
    isLevel2: boolean;
  };

type SimLink = SimulationLinkDatum<SimNode> & {
  id: string;
  type: RelationshipType;
  label?: string;
  isBidirectional: boolean;
};

const DIRECT_TYPES = new Set<RelationshipType>([
  "prerequisite",
  "treated-with",
  "complication",
  "physiology",
]);

/**
 * Computes a calm, radial concentric layout for the active clinical subgraph.
 * Centered on the selected topic, with direct clinical connections in the inner ring
 * and differential/related connections in outer rings.
 */
export function computeFocusedSubgraphLayout(
  subgraph: ActiveSubgraph,
  width: number,
  height: number,
): SubgraphLayout {
  const centerX = width / 2;
  const centerY = height / 2;
  const centerId = subgraph.centerNode.id;

  // Categorize neighbors by clinical type
  const directL1Nodes: GraphNode[] = [];
  const otherL1Nodes: GraphNode[] = [];
  const l2Nodes: GraphNode[] = [];

  for (const node of subgraph.nodes) {
    if (node.id === centerId) continue;
    if (subgraph.level1Ids.has(node.id)) {
      // Check if direct or related/differential
      const pairKey = [centerId, node.id].sort().join("<->");
      const edge = subgraph.edges.find((e) => e.id === pairKey);
      if (edge && DIRECT_TYPES.has(edge.primaryType)) {
        directL1Nodes.push(node);
      } else {
        otherL1Nodes.push(node);
      }
    } else if (subgraph.level2Ids.has(node.id)) {
      l2Nodes.push(node);
    }
  }

  // Initial radial placement
  const simNodes: SimNode[] = [
    {
      ...subgraph.centerNode,
      x: centerX,
      y: centerY,
      fx: centerX, // Fixed at center
      fy: centerY,
      isCenter: true,
      isLevel1: false,
      isLevel2: false,
    },
  ];

  // Direct ring (R ~ 190)
  const rDirect = 190;
  directL1Nodes.forEach((node, idx) => {
    const total = directL1Nodes.length;
    const angle = (idx * (2 * Math.PI)) / Math.max(1, total) - Math.PI / 2;
    simNodes.push({
      ...node,
      x: centerX + rDirect * Math.cos(angle),
      y: centerY + rDirect * Math.sin(angle),
      isCenter: false,
      isLevel1: true,
      isLevel2: false,
    });
  });

  // Other L1 ring (R ~ 280)
  const rOther = 280;
  otherL1Nodes.forEach((node, idx) => {
    const total = otherL1Nodes.length;
    const offset = Math.PI / Math.max(2, total);
    const angle = (idx * (2 * Math.PI)) / Math.max(1, total) + offset - Math.PI / 2;
    simNodes.push({
      ...node,
      x: centerX + rOther * Math.cos(angle),
      y: centerY + rOther * Math.sin(angle),
      isCenter: false,
      isLevel1: true,
      isLevel2: false,
    });
  });

  // L2 ring (R ~ 370)
  const rL2 = 370;
  l2Nodes.forEach((node, idx) => {
    const total = l2Nodes.length;
    const angle = (idx * (2 * Math.PI)) / Math.max(1, total) - Math.PI / 2;
    simNodes.push({
      ...node,
      x: centerX + rL2 * Math.cos(angle),
      y: centerY + rL2 * Math.sin(angle),
      isCenter: false,
      isLevel1: false,
      isLevel2: true,
    });
  });

  const nodeMap = new Map<string, SimNode>(simNodes.map((n) => [n.id, n]));

  // Build links
  const simLinks: SimLink[] = subgraph.edges
    .filter((e) => nodeMap.has(e.sourceId) && nodeMap.has(e.targetId))
    .map((e) => ({
      source: e.sourceId,
      target: e.targetId,
      id: e.id,
      type: e.primaryType,
      label: e.label,
      isBidirectional: e.isBidirectional,
    }));

  // Quick simulation (60 ticks) for collision resolution
  const simulation = forceSimulation(simNodes)
    .force(
      "link",
      forceLink<SimNode, SimLink>(simLinks)
        .id((d) => d.id)
        .distance((l) => {
          const isDirect = DIRECT_TYPES.has(l.type);
          return isDirect ? 170 : 250;
        })
        .strength(0.3),
    )
    .force("charge", forceManyBody().strength(-200))
    .force("collide", forceCollide(36))
    .force("center", forceCenter(centerX, centerY).strength(0.08))
    .stop();

  for (let i = 0; i < 60; i++) {
    simulation.tick();
  }

  const positionedNodes = simNodes.map((n) => ({
    ...n,
    x: Math.max(50, Math.min(width - 50, n.x ?? centerX)),
    y: Math.max(50, Math.min(height - 50, n.y ?? centerY)),
  }));

  const positionedNodesMap = new Map<string, SubgraphPositionedNode>(
    positionedNodes.map((n) => [n.id, n]),
  );

  const positionedEdges: SubgraphPositionedEdge[] = [];
  for (const link of simLinks) {
    const sId = typeof link.source === "object" ? link.source.id : String(link.source);
    const tId = typeof link.target === "object" ? link.target.id : String(link.target);
    const s = positionedNodesMap.get(sId);
    const t = positionedNodesMap.get(tId);
    if (!s || !t) continue;

    positionedEdges.push({
      id: link.id,
      type: link.type,
      label: link.label,
      isBidirectional: link.isBidirectional,
      source: s,
      target: t,
    });
  }

  const centerNode = positionedNodesMap.get(centerId) || positionedNodes[0];

  return {
    nodes: positionedNodes,
    edges: positionedEdges,
    centerNode,
  };
}
