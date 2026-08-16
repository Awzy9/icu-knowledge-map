import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  type SimulationLinkDatum,
  type SimulationNodeDatum,
} from "d3-force";
import type { GraphData, GraphEdge, GraphNode } from "@/registry/build-graph";

type SimNode = GraphNode & SimulationNodeDatum;
type SimLink = SimulationLinkDatum<SimNode> & { type: GraphEdge["type"]; label?: string };

export interface PositionedNode extends GraphNode {
  readonly x: number;
  readonly y: number;
}

export interface PositionedEdge {
  readonly type: GraphEdge["type"];
  readonly label?: string;
  readonly source: PositionedNode;
  readonly target: PositionedNode;
}

export interface GraphLayout {
  readonly nodes: readonly PositionedNode[];
  readonly edges: readonly PositionedEdge[];
}

/**
 * Runs a d3-force simulation headlessly (no DOM, no internal timer) and ticks
 * it forward synchronously until it settles, so the caller gets one final
 * static layout rather than a continuously-animated physics sim — matching
 * the "settle once, no ongoing animation" requirement.
 */
export function computeGraphLayout(
  data: GraphData,
  width: number,
  height: number,
  ticks = 300,
): GraphLayout {
  if (data.nodes.length === 0) return { nodes: [], edges: [] };

  // d3-force falls back to Math.random() for any node whose x/y isn't set,
  // which made this simulation produce a slightly different layout on the
  // server render than on the client and triggered a hydration mismatch.
  // Seeding every node on a deterministic circle removes that randomness —
  // the simulation still settles the same way, just from a fixed start.
  const simNodes: SimNode[] = data.nodes.map((node, i) => {
    const angle = (i / data.nodes.length) * 2 * Math.PI;
    const radius = Math.min(width, height) / 3;
    return {
      ...node,
      x: width / 2 + radius * Math.cos(angle),
      y: height / 2 + radius * Math.sin(angle),
    };
  });
  const nodeIds = new Set(simNodes.map((node) => node.id));

  // Drop edges whose target isn't a graph node (e.g. a relationship pointing
  // at a section id rather than a topic) — those aren't rendered as nodes here.
  const simLinks: SimLink[] = data.edges
    .filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target))
    .map((edge) => ({ source: edge.source, target: edge.target, type: edge.type, label: edge.label }));

  const simulation = forceSimulation(simNodes)
    .force("charge", forceManyBody().strength(-220))
    .force(
      "link",
      forceLink<SimNode, SimLink>(simLinks)
        .id((node) => node.id)
        .distance(110),
    )
    .force("center", forceCenter(width / 2, height / 2))
    .force("collide", forceCollide(36))
    .stop();

  for (let i = 0; i < ticks; i++) simulation.tick();

  const nodesById = new Map<string, PositionedNode>(
    simNodes.map((node) => [node.id, { ...node, x: node.x ?? width / 2, y: node.y ?? height / 2 }]),
  );

  const edges: PositionedEdge[] = simLinks
    .map((link) => {
      const sourceId = typeof link.source === "object" ? link.source.id : String(link.source);
      const targetId = typeof link.target === "object" ? link.target.id : String(link.target);
      const source = nodesById.get(sourceId);
      const target = nodesById.get(targetId);
      if (!source || !target) return undefined;
      const edge: PositionedEdge = { type: link.type, label: link.label, source, target };
      return edge;
    })
    .filter((edge): edge is PositionedEdge => edge !== undefined);

  return { nodes: [...nodesById.values()], edges };
}

/** Filters a full graph down to a focus node plus its N-hop neighborhood, for the per-topic ego-graph view. */
export function filterEgoGraph(data: GraphData, focusNodeId: string, hops: number): GraphData {
  const neighbors = new Map<string, Set<string>>();
  const link = (a: string, b: string) => {
    if (!neighbors.has(a)) neighbors.set(a, new Set());
    neighbors.get(a)?.add(b);
  };
  for (const edge of data.edges) {
    link(edge.source, edge.target);
    link(edge.target, edge.source);
  }

  const visited = new Set<string>([focusNodeId]);
  let frontier = new Set<string>([focusNodeId]);
  for (let hop = 0; hop < hops; hop++) {
    const next = new Set<string>();
    for (const id of frontier) {
      for (const neighbor of neighbors.get(id) ?? []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          next.add(neighbor);
        }
      }
    }
    frontier = next;
  }

  return {
    nodes: data.nodes.filter((node) => visited.has(node.id)),
    edges: data.edges.filter((edge) => visited.has(edge.source) && visited.has(edge.target)),
  };
}
