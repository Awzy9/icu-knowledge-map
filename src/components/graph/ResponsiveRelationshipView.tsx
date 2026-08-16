import type { GraphData, ResolvedRelationship } from "@/registry/build-graph";
import { RelationshipGraph } from "./RelationshipGraph";
import { RelationshipTree } from "./RelationshipTree";
import { GraphLegend } from "./GraphLegend";

interface ResponsiveRelationshipViewProps {
  readonly graphData: GraphData;
  readonly relationships: readonly ResolvedRelationship[];
  readonly focusNodeId?: string;
}

/**
 * CSS-switches between the desktop graph and the mobile accordion rather
 * than branching in JS, so there's one data source and no hydration flash.
 */
export function ResponsiveRelationshipView({
  graphData,
  relationships,
  focusNodeId,
}: ResponsiveRelationshipViewProps) {
  return (
    <div>
      <div className="hidden lg:block">
        <RelationshipGraph data={graphData} focusNodeId={focusNodeId} />
        <div className="mt-3">
          <GraphLegend />
        </div>
      </div>
      <div className="lg:hidden">
        <RelationshipTree relationships={relationships} />
      </div>
    </div>
  );
}
