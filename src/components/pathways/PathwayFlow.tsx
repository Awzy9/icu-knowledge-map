"use client";

import Link from "next/link";
import type { PathwayNode } from "@/content-types";
import { getNodeSemanticRole, ROLE_VISUAL_CONFIG } from "@/lib/pathway-semantic";
import { Tooltip } from "@/components/ui/Tooltip";
import { cn } from "@/lib/cn";

interface PathwayFlowProps {
  readonly startingProblem: string;
  readonly root: PathwayNode;
  /** topicId -> slug, so nodes can resolve a real /topics/[slug] href. */
  readonly topicSlugById: ReadonlyMap<string, string>;
}

function ArrowDown({ className }: { readonly className?: string }) {
  return (
    <div className={cn("my-1.5 flex flex-col items-center select-none", className)} aria-hidden>
      <div className="h-3 w-0.5 bg-border-strong" />
      <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 fill-current text-ink-muted">
        <path d="M5 6L0 0h10z" />
      </svg>
    </div>
  );
}

function LinkArrowIcon() {
  return (
    <svg viewBox="0 0 12 12" className="inline h-3 w-3 shrink-0" aria-hidden>
      <path
        d="M3 9L9 3M5 3h4v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveHref(
  node: PathwayNode,
  topicSlugById: ReadonlyMap<string, string>,
): string | undefined {
  const topicSlug = node.topicId ? topicSlugById.get(node.topicId) : undefined;
  if (topicSlug) return `/topics/${topicSlug}${node.sectionId ? `#${node.sectionId}` : ""}`;
  if (node.calculatorId) return `/calculators/${node.calculatorId}`;
  return undefined;
}

interface NodeViewProps {
  readonly node: PathwayNode;
  readonly parent?: PathwayNode;
  readonly depth?: number;
  readonly topicSlugById: ReadonlyMap<string, string>;
  readonly isRoot?: boolean;
}

function PathwayNodeCard({
  node,
  parent,
  depth = 0,
  topicSlugById,
  isRoot = false,
}: NodeViewProps) {
  const role = isRoot ? "assessment" : getNodeSemanticRole(node, parent, depth);
  const config = ROLE_VISUAL_CONFIG[role];
  const href = resolveHref(node, topicSlugById);

  const isDiagnosis = role === "diagnosis";
  const isMechanism = role === "mechanism";
  const isDecision = role === "decision";

  const cardClasses = cn(
    "relative flex flex-col items-center justify-center rounded-lg border text-center transition-all duration-150",
    "px-3.5 py-2.5 sm:px-4 sm:py-3 w-full",
    isRoot && "border-2 border-accent bg-accent-soft text-accent-strong shadow-xs max-w-md mx-auto",
    !isRoot && isDecision && "border-amber-400/80 bg-surface text-ink shadow-xs max-w-md mx-auto ring-1 ring-amber-400/30",
    !isRoot && isMechanism && "border-sky-400/70 bg-surface text-ink font-semibold shadow-2xs min-w-[170px] max-w-[240px] mx-auto",
    !isRoot && isDiagnosis && "border-border-strong bg-surface text-ink shadow-2xs min-w-[160px] max-w-[240px] mx-auto",
    !isRoot && !isDecision && !isMechanism && !isDiagnosis && "border-border bg-surface text-ink shadow-2xs max-w-md mx-auto",
    href && "hover:border-accent hover:bg-accent-soft/60 hover:text-accent-strong cursor-pointer",
  );

  const content = (
    <div className="flex w-full flex-col items-center gap-1">
      {!isRoot && (
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider",
            config.badgeClass,
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", config.dotClass)} aria-hidden />
          {config.tag}
        </span>
      )}
      <span className={cn("text-sm leading-snug", isRoot ? "font-bold" : "font-medium")}>
        {node.label}
      </span>

      {href && (
        <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-medium text-accent hover:underline">
          Explore Topic <LinkArrowIcon />
        </span>
      )}
    </div>
  );

  const card = href ? (
    <Link href={href} className={cardClasses}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>{content}</div>
  );

  return node.detail ? <Tooltip label={node.detail}>{card}</Tooltip> : card;
}

interface BranchTreeProps {
  readonly node: PathwayNode;
  readonly parent?: PathwayNode;
  readonly depth?: number;
  readonly topicSlugById: ReadonlyMap<string, string>;
  readonly isInsideBranchColumn?: boolean;
}

function PathwayTreeNode({
  node,
  parent,
  depth = 0,
  topicSlugById,
  isInsideBranchColumn = false,
}: BranchTreeProps) {
  const children = node.children ?? [];

  // If we are already inside a branch column (e.g. under Shunt), stack children vertically
  if (isInsideBranchColumn) {
    return (
      <div className="flex w-full flex-col items-center">
        <PathwayNodeCard
          node={node}
          parent={parent}
          depth={depth}
          topicSlugById={topicSlugById}
        />
        {children.map((child) => (
          <div key={child.id} className="flex w-full flex-col items-center">
            <ArrowDown />
            <PathwayTreeNode
              node={child}
              parent={node}
              depth={depth + 1}
              topicSlugById={topicSlugById}
              isInsideBranchColumn={true}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center">
      <PathwayNodeCard
        node={node}
        parent={parent}
        depth={depth}
        topicSlugById={topicSlugById}
      />

      {children.length === 1 && (
        <>
          <ArrowDown />
          <PathwayTreeNode
            node={children[0]}
            parent={node}
            depth={depth + 1}
            topicSlugById={topicSlugById}
            isInsideBranchColumn={false}
          />
        </>
      )}

      {children.length > 1 && (
        <div className="flex w-full flex-col items-center pt-1">
          <ArrowDown />

          {/* Desktop & Tablet Branch Layout */}
          <div className="hidden sm:flex w-full flex-col items-center">
            {/* Orthogonal Distribution Line */}
            <div className="relative w-full max-w-5xl py-2" aria-hidden>
              <div className="absolute inset-x-8 top-2 h-0.5 bg-border-strong" />
              <div className="absolute left-1/2 -top-1 h-3 w-0.5 -translate-x-1/2 bg-border-strong" />
            </div>

            {/* Branch Columns Tier */}
            <div className="flex w-full flex-wrap justify-center items-start gap-4 lg:gap-6 pt-1">
              {children.map((child) => (
                <div
                  key={child.id}
                  className="relative flex flex-col items-center min-w-[170px] max-w-[240px]"
                >
                  {/* Vertical drop stem from distribution bus */}
                  <div className="mb-1 h-3 w-0.5 bg-border-strong select-none" aria-hidden />
                  <PathwayTreeNode
                    node={child}
                    parent={node}
                    depth={depth + 1}
                    topicSlugById={topicSlugById}
                    isInsideBranchColumn={true}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Linear Flow (< 640px) */}
          <div className="flex sm:hidden w-full flex-col gap-3 pt-2">
            <div className="rounded-md border border-amber-400/40 bg-amber-500/10 px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
              Differential Branches ({children.length})
            </div>
            <div className="flex flex-col gap-3 pl-3 border-l-2 border-accent/40">
              {children.map((child, idx) => (
                <div key={child.id} className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-muted">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] text-white">
                      {idx + 1}
                    </span>
                    Branch
                  </div>
                  <PathwayTreeNode
                    node={child}
                    parent={node}
                    depth={depth + 1}
                    topicSlugById={topicSlugById}
                    isInsideBranchColumn={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const STAGE_CAPTION = [
  "Recognize",
  "Assess",
  "Decide",
  "Differential",
  "Intervene",
  "Reassess",
];

export function PathwayFlow({ startingProblem, root, topicSlugById }: PathwayFlowProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-xl border border-border bg-canvas p-4 sm:p-6 lg:p-8 transition-colors">
      {/* Top Clinical Stage Progression Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-ink-faint">
        {STAGE_CAPTION.map((stage, i) => (
          <span key={stage} className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-ink-muted">
              {stage}
            </span>
            {i < STAGE_CAPTION.length - 1 && (
              <span className="text-ink-faint" aria-hidden>
                &rarr;
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Starting Problem Banner (Level 1) */}
      <div className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent-soft px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-strong shadow-xs">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
        {startingProblem}
      </div>

      <ArrowDown className="my-2" />

      {/* Clinical Reasoning Flow Tree */}
      <div className="w-full">
        <PathwayTreeNode
          node={root}
          topicSlugById={topicSlugById}
        />
      </div>
    </div>
  );
}
