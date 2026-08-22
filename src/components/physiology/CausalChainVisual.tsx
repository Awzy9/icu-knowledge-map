"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { InterventionToggle } from "./InterventionToggle";

/* -------------------------------------------------------------------------- */
/*  Types                                                                       */
/* -------------------------------------------------------------------------- */

interface ChainNode {
  /** The physiologic event text. */
  text: string;
  /** Optional arrow direction — always accompanied by a text label. */
  direction?: "up" | "down" | "neutral";
  /** Highlight this node for emphasis. */
  emphasis?: boolean;
  /** Small annotation below the node. */
  annotation?: string;
}

interface ChainState {
  /** Toggle-button label (e.g. "Normal", "Disease", "+ Norepinephrine"). */
  label: string;
  /** Brief description shown below the toggle row. */
  description?: string;
  /** Ordered chain nodes, top to bottom. */
  chain: ChainNode[];
  /** Colour theme for nodes in this state. */
  color?: "blue" | "red" | "green" | "amber" | "default";
}

interface CausalChainVisualProps {
  readonly states: ChainState[];
  /** Label of the initially active state. Defaults to the first state. */
  readonly defaultState?: string;
  readonly title?: string;
  readonly subtitle?: string;
}

/* -------------------------------------------------------------------------- */
/*  Direction indicator — text is always present alongside the symbol           */
/* -------------------------------------------------------------------------- */

function DirectionIndicator({ direction }: { direction: "up" | "down" | "neutral" }) {
  if (direction === "up") {
    return (
      <span
        className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-400"
        aria-label="increased"
      >
        <span aria-hidden="true">↑</span>
        <span>increased</span>
      </span>
    );
  }
  if (direction === "down") {
    return (
      <span
        className="inline-flex items-center gap-0.5 text-xs font-bold text-red-700 dark:text-red-400"
        aria-label="decreased"
      >
        <span aria-hidden="true">↓</span>
        <span>decreased</span>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-0.5 text-xs font-medium text-slate-500 dark:text-slate-400"
      aria-label="unchanged"
    >
      <span aria-hidden="true">↔</span>
      <span>unchanged</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Node colour themes                                                          */
/* -------------------------------------------------------------------------- */

const COLOR_CLASSES: Record<
  NonNullable<ChainState["color"]>,
  { node: string; emphasis: string }
> = {
  blue: {
    node: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
    emphasis:
      "border-blue-500 bg-blue-100 font-semibold dark:border-blue-500 dark:bg-blue-900",
  },
  red: {
    node: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
    emphasis:
      "border-red-500 bg-red-100 font-semibold dark:border-red-500 dark:bg-red-900",
  },
  green: {
    node: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950",
    emphasis:
      "border-emerald-500 bg-emerald-100 font-semibold dark:border-emerald-500 dark:bg-emerald-900",
  },
  amber: {
    node: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950",
    emphasis:
      "border-amber-500 bg-amber-100 font-semibold dark:border-amber-500 dark:bg-amber-900",
  },
  default: {
    node: "border-border bg-surface-elevated",
    emphasis: "border-accent bg-accent-soft font-semibold text-accent-strong",
  },
};

/* -------------------------------------------------------------------------- */
/*  Single chain node card                                                      */
/* -------------------------------------------------------------------------- */

function ChainNodeCard({
  node,
  colorKey,
}: {
  node: ChainNode;
  colorKey: NonNullable<ChainState["color"]>;
}) {
  const colors = COLOR_CLASSES[colorKey];
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex min-h-[2.5rem] w-full max-w-sm items-center justify-center rounded-lg border px-3 py-2 text-center text-sm text-ink",
          node.emphasis ? colors.emphasis : colors.node,
        )}
      >
        <span>
          {node.text}
          {node.direction && (
            <span className="ml-1.5">
              <DirectionIndicator direction={node.direction} />
            </span>
          )}
        </span>
      </div>
      {node.annotation && (
        <p className="mt-0.5 text-xs italic text-ink-faint">{node.annotation}</p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Renders a causal-chain physiology visualization with togglable states.
 * Fully accessible: every ↑/↓ arrow has a text label alongside it.
 * Role hierarchy: tablist → tab → tabpanel.
 */
export function CausalChainVisual({
  states,
  defaultState,
  title,
  subtitle,
}: CausalChainVisualProps) {
  const initialLabel = defaultState ?? states[0]?.label ?? "";
  const [activeLabel, setActiveLabel] = useState(initialLabel);

  const activeState = states.find((s) => s.label === activeLabel) ?? states[0];
  if (!activeState) return null;

  const colorKey = activeState.color ?? "default";

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      {(title || subtitle) && (
        <div className="flex flex-col gap-0.5">
          {title && <p className="text-sm font-semibold text-ink">{title}</p>}
          {subtitle && <p className="text-xs text-ink-muted">{subtitle}</p>}
        </div>
      )}

      {/* Toggle row */}
      <InterventionToggle
        options={states.map((s) => s.label)}
        selected={activeLabel}
        onChange={setActiveLabel}
        label="State"
      />

      {/* State description */}
      {activeState.description && (
        <p className="text-xs text-ink-muted">{activeState.description}</p>
      )}

      {/* Vertical chain */}
      <div
        role="tabpanel"
        aria-label={activeLabel}
        className="flex flex-col items-center gap-0"
      >
        {activeState.chain.map((node, index) => (
          <div key={index} className="flex w-full flex-col items-center">
            <ChainNodeCard node={node} colorKey={colorKey} />
            {index < activeState.chain.length - 1 && (
              <div
                aria-hidden="true"
                className="my-0.5 h-5 w-0.5 bg-border"
              />
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-ink-faint">
        An educational causal-chain illustration. Not a patient simulation.
      </p>
    </div>
  );
}
