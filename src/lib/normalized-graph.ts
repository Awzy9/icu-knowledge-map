import type { GraphData, GraphNode } from "@/registry/build-graph";
import type { RelationshipType } from "@/content-types";

export interface RelationshipDeclaration {
  readonly sourceId: string;
  readonly targetId: string;
  readonly type: RelationshipType;
  readonly label?: string;
}

export interface NormalizedVisualEdge {
  readonly id: string; // pairKey: "min(u,v)<->max(u,v)"
  readonly sourceId: string;
  readonly targetId: string;
  readonly primaryType: RelationshipType; // highest priority for visual layout
  readonly relationshipTypes: readonly RelationshipType[]; // all unique semantic types preserved
  readonly declarations: readonly RelationshipDeclaration[]; // all underlying declarations
  readonly label?: string;
  readonly isBidirectional: boolean;
}

export interface TopicConnectionItem {
  readonly node: GraphNode;
  readonly types: readonly RelationshipType[];
  readonly labels: readonly string[];
  readonly primaryType: RelationshipType;
}

export interface TopicConnectionsSummary {
  readonly totalUniqueCount: number;
  readonly direct: readonly TopicConnectionItem[];
  readonly differential: readonly TopicConnectionItem[];
  readonly related: readonly TopicConnectionItem[];
}

export interface NormalizedGraph {
  readonly nodesById: ReadonlyMap<string, GraphNode>;
  readonly uniqueEdges: readonly NormalizedVisualEdge[];
  readonly uniqueEdgesByPairKey: ReadonlyMap<string, NormalizedVisualEdge>;
  readonly uniqueNeighborsByNode: ReadonlyMap<string, ReadonlySet<string>>;
  readonly connectionsSummaryByNode: ReadonlyMap<string, TopicConnectionsSummary>;
}

const RELATIONSHIP_PRIORITY: Record<RelationshipType, number> = {
  "prerequisite": 7,
  "treated-with": 6,
  "complication": 5,
  "physiology": 4,
  "guideline": 3,
  "evidence": 3,
  "differential": 2,
  "related-to": 1,
};

const DIRECT_TYPES = new Set<RelationshipType>([
  "prerequisite",
  "treated-with",
  "complication",
  "physiology",
]);

/**
 * Normalizes raw graph edges into unique visual relationships,
 * merging reciprocal declarations while preserving ALL distinct semantic relationship types.
 */
export function buildNormalizedGraph(graphData: GraphData): NormalizedGraph {
  const nodesById = new Map<string, GraphNode>(graphData.nodes.map((n) => [n.id, n]));
  
  const pairMap = new Map<
    string,
    {
      sourceId: string;
      targetId: string;
      typesSet: Set<RelationshipType>;
      declarations: RelationshipDeclaration[];
    }
  >();

  const neighborsMap = new Map<string, Set<string>>();
  for (const node of graphData.nodes) {
    neighborsMap.set(node.id, new Set());
  }

  for (const edge of graphData.edges) {
    if (edge.source === edge.target) continue;
    if (!nodesById.has(edge.source) || !nodesById.has(edge.target)) continue;

    // Track unique neighbor sets
    neighborsMap.get(edge.source)?.add(edge.target);
    neighborsMap.get(edge.target)?.add(edge.source);

    // Canonical unordered key
    const [u, v] = [edge.source, edge.target].sort();
    const pairKey = `${u}<->${v}`;
    const entry = pairMap.get(pairKey);

    const decl: RelationshipDeclaration = {
      sourceId: edge.source,
      targetId: edge.target,
      type: edge.type,
      label: edge.label,
    };

    if (!entry) {
      pairMap.set(pairKey, {
        sourceId: edge.source,
        targetId: edge.target,
        typesSet: new Set([edge.type]),
        declarations: [decl],
      });
    } else {
      entry.typesSet.add(edge.type);
      entry.declarations.push(decl);
    }
  }

  const uniqueEdges: NormalizedVisualEdge[] = Array.from(pairMap.entries()).map(([pairKey, val]) => {
    const typesArray = Array.from(val.typesSet);
    // Sort types by priority descending
    typesArray.sort((a, b) => (RELATIONSHIP_PRIORITY[b] ?? 0) - (RELATIONSHIP_PRIORITY[a] ?? 0));
    const primaryType = typesArray[0] || "related-to";
    
    // Extract most informative label
    const labelWithText = val.declarations.find((d) => d.label)?.label;
    
    // Check if there are declarations in both directions
    const hasForward = val.declarations.some((d) => d.sourceId === val.sourceId);
    const hasReverse = val.declarations.some((d) => d.sourceId === val.targetId);

    return {
      id: pairKey,
      sourceId: val.sourceId,
      targetId: val.targetId,
      primaryType,
      relationshipTypes: typesArray,
      declarations: val.declarations,
      label: labelWithText,
      isBidirectional: hasForward && hasReverse,
    };
  });

  const uniqueEdgesByPairKey = new Map<string, NormalizedVisualEdge>(
    uniqueEdges.map((e) => [e.id, e]),
  );

  // Compute connections summary per topic preserving all semantic types
  const connectionsSummaryByNode = new Map<string, TopicConnectionsSummary>();

  for (const node of graphData.nodes) {
    const neighborIds = neighborsMap.get(node.id) || new Set();
    const direct: TopicConnectionItem[] = [];
    const differential: TopicConnectionItem[] = [];
    const related: TopicConnectionItem[] = [];

    for (const neighborId of neighborIds) {
      const neighborNode = nodesById.get(neighborId);
      if (!neighborNode) continue;

      const pairKey = [node.id, neighborId].sort().join("<->");
      const normEdge = uniqueEdgesByPairKey.get(pairKey);
      if (!normEdge) continue;

      const types = normEdge.relationshipTypes;
      const relevantDecls = normEdge.declarations.filter(
        (d) => (d.sourceId === node.id && d.targetId === neighborId) || (d.sourceId === neighborId && d.targetId === node.id),
      );
      const labels = Array.from(new Set(relevantDecls.map((d) => d.label).filter((l): l is string => Boolean(l))));

      const hasDirect = types.some((t) => DIRECT_TYPES.has(t));
      const hasDifferential = types.includes("differential");
      const hasRelated = types.some((t) => !DIRECT_TYPES.has(t) && t !== "differential");

      const item: TopicConnectionItem = {
        node: neighborNode,
        types,
        labels,
        primaryType: normEdge.primaryType,
      };

      if (hasDirect) {
        direct.push(item);
      }
      if (hasDifferential) {
        differential.push(item);
      }
      if (hasRelated && !hasDirect && !hasDifferential) {
        related.push(item);
      }
    }

    connectionsSummaryByNode.set(node.id, {
      totalUniqueCount: neighborIds.size,
      direct,
      differential,
      related,
    });
  }

  return {
    nodesById,
    uniqueEdges,
    uniqueEdgesByPairKey,
    uniqueNeighborsByNode: neighborsMap,
    connectionsSummaryByNode,
  };
}

export interface ActiveSubgraph {
  readonly centerNode: GraphNode;
  readonly nodes: readonly GraphNode[];
  readonly edges: readonly NormalizedVisualEdge[];
  readonly level1Ids: ReadonlySet<string>;
  readonly level2Ids: ReadonlySet<string>;
}

/**
 * Extracts ONLY the active neighborhood subgraph for the selected topic.
 * Unrelated nodes are completely excluded.
 */
export function extractActiveSubgraph(
  normalized: NormalizedGraph,
  selectedNodeId: string,
  expandTwoHops = false,
): ActiveSubgraph | null {
  const centerNode = normalized.nodesById.get(selectedNodeId);
  if (!centerNode) return null;

  const level1Ids = new Set<string>(normalized.uniqueNeighborsByNode.get(selectedNodeId) || []);
  const level2Ids = new Set<string>();

  if (expandTwoHops) {
    for (const l1Id of level1Ids) {
      const l2Neighbors = normalized.uniqueNeighborsByNode.get(l1Id) || new Set();
      for (const candidate of l2Neighbors) {
        if (candidate !== selectedNodeId && !level1Ids.has(candidate)) {
          level2Ids.add(candidate);
        }
      }
    }
  }

  const allActiveNodeIds = new Set<string>([selectedNodeId, ...level1Ids, ...level2Ids]);

  const activeNodes: GraphNode[] = [];
  for (const id of allActiveNodeIds) {
    const n = normalized.nodesById.get(id);
    if (n) activeNodes.push(n);
  }

  // Filter edges that connect active nodes
  const activeEdges: NormalizedVisualEdge[] = [];
  for (const edge of normalized.uniqueEdges) {
    if (allActiveNodeIds.has(edge.sourceId) && allActiveNodeIds.has(edge.targetId)) {
      // In 1-hop view, only include edges touching center
      if (!expandTwoHops) {
        if (edge.sourceId === selectedNodeId || edge.targetId === selectedNodeId) {
          activeEdges.push(edge);
        }
      } else {
        activeEdges.push(edge);
      }
    }
  }

  return {
    centerNode,
    nodes: activeNodes,
    edges: activeEdges,
    level1Ids,
    level2Ids,
  };
}
