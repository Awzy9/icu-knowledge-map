"use client";

import Link from "next/link";
import type { KnowledgeMapNode } from "@/registry/build-knowledge-map";
import { evidenceCategoryStyle } from "@/lib/evidence-style";
import { Accordion } from "@/components/ui/Accordion";

interface KnowledgeMapTreeProps {
  readonly root: KnowledgeMapNode;
}

/** Mobile/tablet substitute for KnowledgeMap — the same generic tree, rendered as nested interactive links and accordions. */
export function KnowledgeMapTree({ root }: KnowledgeMapTreeProps) {
  const children = root.children ?? [];
  if (children.length === 0) {
    return <p className="text-sm text-ink-faint">No structure to show yet.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {children.map((node) => (
        <KnowledgeMapTreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}

function KnowledgeMapTreeNode({ node }: { readonly node: KnowledgeMapNode }) {
  const isAnchor = node.href?.startsWith("#");

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor && node.href) {
      e.preventDefault();
      const targetId = node.href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("ring-2", "ring-accent", "transition-all", "duration-500");
        setTimeout(() => el.classList.remove("ring-2", "ring-accent"), 1500);
        window.history.pushState(null, "", node.href);
      } else {
        window.history.pushState(null, "", node.href);
      }
    }
  };

  if (node.href && (!node.children || node.children.length === 0)) {
    if (isAnchor) {
      return (
        <a
          href={node.href}
          onClick={handleAnchorClick}
          className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
        >
          {node.label}
        </a>
      );
    }

    return (
      <Link
        href={node.href}
        className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
      >
        {node.evidenceCategory && (
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${evidenceCategoryStyle[node.evidenceCategory].dotClass}`} aria-hidden />
        )}
        {node.label}
      </Link>
    );
  }

  if (node.children && node.children.length > 0) {
    return (
      <Accordion summary={node.label}>
        <div className="flex flex-col gap-2 pt-1">
          {node.href && (
            <a
              href={node.href}
              onClick={handleAnchorClick}
              className="text-xs text-accent font-medium hover:underline px-1 py-0.5"
            >
              View overview of {node.label} &rarr;
            </a>
          )}
          {node.children.map((child) => (
            <KnowledgeMapTreeNode key={child.id} node={child} />
          ))}
        </div>
      </Accordion>
    );
  }

  return (
    <p className="rounded-md border border-dashed border-border px-3 py-2 text-sm text-ink-faint">{node.label}</p>
  );
}
