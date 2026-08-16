import type {
  NodeId,
  RelationshipType,
  Topic,
  TopicCategory,
  TopicSlug,
  TopicStatus,
} from "@/content-types";

export interface GraphNode {
  readonly id: NodeId;
  readonly slug: TopicSlug;
  readonly title: string;
  readonly shortName?: string;
  readonly oneLiner?: string;
  readonly category: TopicCategory;
  readonly status: TopicStatus;
}

export interface GraphEdge {
  readonly source: NodeId;
  readonly target: NodeId;
  readonly type: RelationshipType;
  readonly label?: string;
}

export interface GraphData {
  readonly nodes: readonly GraphNode[];
  readonly edges: readonly GraphEdge[];
}

export function buildGraph(topics: readonly Topic[]): GraphData {
  const nodes: GraphNode[] = topics.map((topic) => ({
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    shortName: topic.shortName,
    oneLiner: topic.oneLiner,
    category: topic.category,
    status: topic.status,
  }));

  const edges: GraphEdge[] = topics.flatMap((topic) =>
    topic.relationships.map((relationship) => ({
      source: topic.id,
      target: relationship.targetId,
      type: relationship.type,
      label: relationship.label,
    })),
  );

  return { nodes, edges };
}

export interface ResolvedRelationship {
  readonly direction: "outgoing" | "incoming";
  readonly type: RelationshipType;
  readonly label?: string;
  readonly relatedTopic: GraphNode;
}

/**
 * Edges are authored in one direction, but "what treats X" and "what is a
 * complication of X" both need to resolve regardless of which topic the
 * relationship was declared on — so this checks both source and target.
 */
export function resolveRelationships(
  topicId: NodeId,
  graph: GraphData,
): readonly ResolvedRelationship[] {
  const nodesById = new Map(graph.nodes.map((node) => [node.id, node]));
  const resolved: ResolvedRelationship[] = [];

  for (const edge of graph.edges) {
    if (edge.source === topicId) {
      const relatedTopic = nodesById.get(edge.target);
      if (relatedTopic) {
        resolved.push({ direction: "outgoing", type: edge.type, label: edge.label, relatedTopic });
      }
    } else if (edge.target === topicId) {
      const relatedTopic = nodesById.get(edge.source);
      if (relatedTopic) {
        resolved.push({ direction: "incoming", type: edge.type, label: edge.label, relatedTopic });
      }
    }
  }

  return resolved;
}
