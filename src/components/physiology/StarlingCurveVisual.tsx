"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface StarlingCurveVisualProps {
  readonly defaultPreload: number;
  readonly defaultContractility: "reduced" | "normal" | "increased";
}

const CONTRACTILITY_PARAMS: Record<"reduced" | "normal" | "increased", { cMax: number; k: number; label: string }> = {
  reduced: { cMax: 60, k: 0.02, label: "Reduced contractility" },
  normal: { cMax: 100, k: 0.035, label: "Normal contractility" },
  increased: { cMax: 130, k: 0.05, label: "Increased contractility" },
};

function curveValue(preload: number, cMax: number, k: number): number {
  return cMax * (1 - Math.exp(-k * preload));
}

const WIDTH = 280;
const HEIGHT = 160;
const Y_SCALE = 130;

function buildPath(cMax: number, k: number): string {
  const points: string[] = [];
  for (let x = 0; x <= 100; x += 4) {
    const y = curveValue(x, cMax, k);
    const px = (x / 100) * WIDTH;
    const py = HEIGHT - (y / Y_SCALE) * HEIGHT;
    points.push(`${x === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return points.join(" ");
}

/**
 * Illustrative Frank-Starling relationship (a generic saturating curve, not
 * a specific patient's measured data) — moving along a curve shows a
 * preload change, switching curves shows a contractility change.
 */
export function StarlingCurveVisual({ defaultPreload, defaultContractility }: StarlingCurveVisualProps) {
  const [preload, setPreload] = useState(defaultPreload);
  const [contractility, setContractility] = useState(defaultContractility);

  const params = CONTRACTILITY_PARAMS[contractility];
  const output = curveValue(preload, params.cMax, params.k);
  const px = (preload / 100) * WIDTH;
  const py = HEIGHT - (output / Y_SCALE) * HEIGHT;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-ink">
          Preload
          <input type="range" min={0} max={100} value={preload} onChange={(event) => setPreload(Number(event.target.value))} />
        </label>
        <div className="flex flex-col gap-1 text-sm text-ink">
          Contractility
          <div className="flex gap-1.5">
            {(Object.keys(CONTRACTILITY_PARAMS) as Array<keyof typeof CONTRACTILITY_PARAMS>).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setContractility(key)}
                className={cn(
                  "rounded-md border px-2 py-1 text-xs capitalize transition-colors",
                  contractility === key
                    ? "border-accent bg-accent-soft text-accent-strong"
                    : "border-border text-ink-muted hover:border-border-strong",
                )}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT + 24}`} className="h-auto w-full" role="img" aria-label="Frank-Starling curve">
        <line x1={0} y1={HEIGHT} x2={WIDTH} y2={HEIGHT} stroke="var(--color-border)" strokeWidth={1} />
        <line x1={0} y1={0} x2={0} y2={HEIGHT} stroke="var(--color-border)" strokeWidth={1} />
        <path d={buildPath(params.cMax, params.k)} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <circle cx={px} cy={py} r={4} fill="var(--color-accent-strong)" />
        <text x={4} y={HEIGHT + 18} className="fill-ink-faint text-[10px]">
          Preload →
        </text>
        <text x={4} y={12} className="fill-ink-faint text-[10px]">
          Cardiac output
        </text>
      </svg>

      <p className="text-sm text-ink">
        {params.label}: at this preload, cardiac output sits near <span className="font-semibold">{Math.round(output)}</span>% of this curve&apos;s
        plateau.
      </p>
      <p className="text-xs text-ink-faint">
        An illustrative Frank-Starling relationship, not a specific patient&apos;s measured curve.
      </p>
    </div>
  );
}
