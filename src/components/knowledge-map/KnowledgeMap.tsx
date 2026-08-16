"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { KnowledgeMapNode } from "@/registry/build-knowledge-map";
import { evidenceCategoryColor } from "@/lib/evidence-style";
import { cn } from "@/lib/cn";

interface KnowledgeMapProps {
  readonly root: KnowledgeMapNode;
  readonly width?: number;
  readonly height?: number;
}

interface RingPosition {
  readonly node: KnowledgeMapNode;
  readonly x: number;
  readonly y: number;
}

/** Splits a label onto up to 3 short lines so it fits inside a small node without truncation. */
function wrapLabel(label: string, maxChars: number): string[] {
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function isExpandable(node: KnowledgeMapNode): boolean {
  return Boolean(node.children && node.children.length > 0);
}

function isNavigable(node: KnowledgeMapNode): boolean {
  return Boolean(node.href && node.href.trim().length > 0);
}

const NO_CHILDREN: readonly KnowledgeMapNode[] = [];

/**
 * Generic progressive-disclosure concept map supporting dual-action nodes:
 * - Clicking the main node body navigates to the section content.
 * - Clicking the dedicated '+' control expands into child subsections.
 */
export function KnowledgeMap({ root, width = 320, height = 380 }: KnowledgeMapProps) {
  const router = useRouter();
  const [focusPath, setFocusPath] = useState<readonly KnowledgeMapNode[]>([root]);
  const ringRefs = useRef<Array<SVGGElement | null>>([]);
  const centerRef = useRef<SVGGElement | null>(null);
  const isFirstRender = useRef(true);

  const current = focusPath[focusPath.length - 1];
  const ring = current.children ?? NO_CHILDREN;
  const canDrillOut = focusPath.length > 1;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    centerRef.current?.focus();
  }, [current.id]);

  const centerX = width / 2;
  const centerY = height / 2 + 6;
  const radius = Math.min(width, height) / 2 - 66;

  const positioned: readonly RingPosition[] = useMemo(() => {
    const n = ring.length;
    if (n === 0) return [];
    return ring.map((node, i) => {
      const angle = ((-90 + (360 / n) * i) * Math.PI) / 180;
      return { node, x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
    });
  }, [ring, centerX, centerY, radius]);

  const handleNodeNavigate = (node: KnowledgeMapNode) => {
    if (!node.href) return;
    const href = node.href;
    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.classList.add("ring-2", "ring-accent", "transition-all", "duration-500");
        setTimeout(() => {
          element.classList.remove("ring-2", "ring-accent");
        }, 1500);
        window.history.pushState(null, "", href);
      } else {
        router.push(href);
      }
      return;
    }
    router.push(href);
  };

  const handleNodeExpand = (node: KnowledgeMapNode, event?: React.SyntheticEvent) => {
    if (event) {
      event.stopPropagation();
    }
    if (isExpandable(node)) {
      setFocusPath((path) => [...path, node]);
    }
  };

  const drillOut = () => {
    setFocusPath((path) => (path.length > 1 ? path.slice(0, -1) : path));
  };

  const jumpTo = (index: number) => {
    setFocusPath((path) => path.slice(0, index + 1));
  };

  const handleRingKeyDown = (event: React.KeyboardEvent, node: KnowledgeMapNode, index: number) => {
    const canNav = isNavigable(node);
    const canExp = isExpandable(node);

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (canNav) {
        handleNodeNavigate(node);
      } else if (canExp) {
        handleNodeExpand(node);
      }
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      ringRefs.current[(index + 1) % positioned.length]?.focus();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      ringRefs.current[(index - 1 + positioned.length) % positioned.length]?.focus();
    } else if ((event.key === "Backspace" || event.key === "Escape") && canDrillOut) {
      event.preventDefault();
      drillOut();
    }
  };

  const handleCenterKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === "Enter" || event.key === " " || event.key === "Backspace" || event.key === "Escape") && canDrillOut) {
      event.preventDefault();
      drillOut();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <nav aria-label="Knowledge map path" className="flex flex-wrap items-center gap-1 text-xs text-ink-faint">
        {focusPath.map((node, i) => (
          <span key={node.id} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {i === focusPath.length - 1 ? (
              <span className="text-ink-muted">{node.label}</span>
            ) : (
              <button type="button" onClick={() => jumpTo(i)} className="transition-colors hover:text-accent">
                {node.label}
              </button>
            )}
          </span>
        ))}
      </nav>

      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`${current.label} concept map`} className="h-auto w-full">
        <g aria-hidden>
          {positioned.map(({ node, x, y }) => (
            <line key={node.id} x1={centerX} y1={centerY} x2={x} y2={y} stroke="var(--color-border)" strokeWidth={1.5} />
          ))}
        </g>

        <g key={current.id} className="km-ring-enter">
          {positioned.map(({ node, x, y }, i) => {
            const canNav = isNavigable(node);
            const canExp = isExpandable(node);
            const canInteract = canNav || canExp;
            const hasDualAction = canNav && canExp;

            const lines = wrapLabel(node.label, 13);
            const isRouteNav = canNav && !node.href?.startsWith("#");
            const fill = isRouteNav && node.evidenceCategory ? evidenceCategoryColor[node.evidenceCategory] : "var(--color-surface)";
            const textColor = isRouteNav ? "#ffffff" : "var(--color-ink)";

            return (
              <g
                key={node.id}
                ref={(el) => {
                  ringRefs.current[i] = el;
                }}
                transform={`translate(${x}, ${y})`}
                tabIndex={canInteract ? 0 : -1}
                role={canInteract ? "button" : undefined}
                aria-label={
                  hasDualAction
                    ? `${node.label}, view content (press + badge to expand)`
                    : canNav
                      ? `${node.label}, view section`
                      : canExp
                        ? `${node.label}, expand subsections`
                        : node.label
                }
                className={cn("outline-none", canInteract ? "cursor-pointer group" : "cursor-default")}
                onClick={() => {
                  if (canNav) {
                    handleNodeNavigate(node);
                  } else if (canExp) {
                    handleNodeExpand(node);
                  }
                }}
                onKeyDown={(event) => handleRingKeyDown(event, node, i)}
              >
                <title>{node.label}</title>
                
                {/* Main Node Circle */}
                <circle
                  r={22}
                  fill={fill}
                  stroke={isRouteNav && node.evidenceCategory ? fill : "var(--color-border-strong)"}
                  strokeWidth={canInteract ? 1.5 : 1}
                  opacity={canInteract ? 1 : 0.55}
                  className={canInteract ? "transition-[stroke,opacity] duration-150 group-hover:stroke-accent focus-visible:stroke-accent" : undefined}
                />

                {/* If expandable only (no own content), show '+' in center */}
                {canExp && !canNav && (
                  <text y={2} textAnchor="middle" className="pointer-events-none select-none fill-ink-faint text-[12px] font-bold">
                    +
                  </text>
                )}

                {/* If route navigation (external trial/guideline), show external arrow icon */}
                {isRouteNav && (
                  <path
                    d="M-3 3 L3 -3 M-1 -3 L3 -3 L3 1"
                    stroke={textColor}
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none"
                  />
                )}

                {/* Node Text Label */}
                <text
                  y={22 + 12}
                  textAnchor="middle"
                  className={cn("pointer-events-none select-none text-[10px]", canInteract ? "fill-ink" : "fill-ink-faint")}
                >
                  {lines.map((line, li) => (
                    <tspan key={li} x={0} dy={li === 0 ? 0 : 11}>
                      {line}
                    </tspan>
                  ))}
                </text>

                {/* Dedicated Expand '+' Control Badge for Dual-Action Nodes */}
                {hasDualAction && (
                  <g
                    transform="translate(14, -14)"
                    tabIndex={0}
                    role="button"
                    aria-label={`Expand ${node.label} child nodes`}
                    className="cursor-pointer outline-none group/expand"
                    onClick={(e) => handleNodeExpand(node, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNodeExpand(node, e);
                      }
                    }}
                  >
                    <title>Expand {node.label} subsections</title>
                    <circle
                      r={7.5}
                      fill="var(--color-surface)"
                      stroke="var(--color-border-strong)"
                      strokeWidth={1.2}
                      className="transition-all duration-150 group-hover/expand:fill-accent-soft group-hover/expand:stroke-accent focus-visible:stroke-accent"
                    />
                    <text
                      y={2.5}
                      textAnchor="middle"
                      className="pointer-events-none select-none fill-ink text-[10px] font-bold transition-colors group-hover/expand:fill-accent-strong"
                    >
                      +
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* Center Node (Drills Out / Jump To Group Content) */}
        <g
          ref={centerRef}
          transform={`translate(${centerX}, ${centerY})`}
          tabIndex={canDrillOut ? 0 : -1}
          role={canDrillOut ? "button" : undefined}
          aria-label={canDrillOut ? `${current.label}, go back` : current.label}
          className={cn("outline-none", canDrillOut ? "cursor-pointer" : "cursor-default")}
          onClick={() => canDrillOut && drillOut()}
          onKeyDown={handleCenterKeyDown}
        >
          <title>{current.label}</title>
          <circle
            r={34}
            fill="var(--color-accent-soft)"
            stroke="var(--color-accent)"
            strokeWidth={2}
            className={canDrillOut ? "transition-opacity duration-150 hover:opacity-80 focus-visible:opacity-80" : undefined}
          />
          <text textAnchor="middle" className="pointer-events-none select-none fill-accent-strong text-[10px] font-semibold">
            {wrapLabel(current.label, 14).map((line, li, arr) => (
              <tspan key={li} x={0} dy={li === 0 ? -((arr.length - 1) * 5.5) : 11}>
                {line}
              </tspan>
            ))}
          </text>
        </g>
      </svg>
    </div>
  );
}
