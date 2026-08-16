import type { KnowledgeMapNode } from "@/registry/build-knowledge-map";
import { KnowledgeMap } from "./KnowledgeMap";
import { KnowledgeMapTree } from "./KnowledgeMapTree";

interface ResponsiveKnowledgeMapProps {
  readonly root: KnowledgeMapNode;
}

/** CSS-switches between the desktop radial map and the mobile accordion tree — one data source, no hydration flash. */
export function ResponsiveKnowledgeMap({ root }: ResponsiveKnowledgeMapProps) {
  return (
    <div>
      <div className="hidden lg:block">
        <KnowledgeMap root={root} />
      </div>
      <div className="lg:hidden">
        <KnowledgeMapTree root={root} />
      </div>
    </div>
  );
}
