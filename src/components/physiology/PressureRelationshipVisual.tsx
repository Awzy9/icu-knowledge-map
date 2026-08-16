"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface PressureRelationshipVisualProps {
  readonly defaultPlateauPressure: number;
  readonly defaultPeep: number;
}

const MAX_SCALE = 40;

/** Pplat / PEEP / driving-pressure relationship, adjustable and computed live. Deterministic arithmetic only. */
export function PressureRelationshipVisual({ defaultPlateauPressure, defaultPeep }: PressureRelationshipVisualProps) {
  const [pplat, setPplat] = useState(defaultPlateauPressure);
  const [peep, setPeep] = useState(defaultPeep);
  const drivingPressure = pplat - peep;
  const favorable = drivingPressure <= 15;

  const peepPct = Math.min(100, Math.max(0, (peep / MAX_SCALE) * 100));
  const pplatPct = Math.min(100, Math.max(0, (pplat / MAX_SCALE) * 100));

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-ink">
          Plateau pressure
          <input
            type="range"
            min={0}
            max={MAX_SCALE}
            value={pplat}
            onChange={(event) => setPplat(Number(event.target.value))}
          />
          <span className="text-xs text-ink-faint">{pplat} cmH2O</span>
        </label>
        <label className="flex flex-col gap-1 text-sm text-ink">
          PEEP
          <input
            type="range"
            min={0}
            max={MAX_SCALE}
            value={peep}
            onChange={(event) => setPeep(Number(event.target.value))}
          />
          <span className="text-xs text-ink-faint">{peep} cmH2O</span>
        </label>
      </div>

      <div>
        <div className="relative h-8 w-full overflow-hidden rounded-md bg-surface-sunken">
          <div className="absolute inset-y-0 left-0 bg-border-strong" style={{ width: `${peepPct}%` }} aria-hidden />
          <div
            className={cn("absolute inset-y-0", favorable ? "bg-emerald-400" : "bg-rose-400")}
            style={{ left: `${peepPct}%`, width: `${Math.max(0, pplatPct - peepPct)}%` }}
            aria-hidden
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-ink-faint">
          <span>0</span>
          <span>{MAX_SCALE} cmH2O</span>
        </div>
      </div>

      <p className="text-sm text-ink">
        Driving pressure = P<sub>plat</sub> − PEEP = {pplat} − {peep} = <span className="font-semibold">{drivingPressure}</span> cmH2O
      </p>
      <p className={cn("text-xs", favorable ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400")}>
        {favorable
          ? "Within the ≤ 15 cmH2O range associated with lower mortality in retrospective analyses of ARDSNet trial data."
          : "Above the 15 cmH2O range associated with higher mortality — consider reassessing tidal volume, PEEP, and sedation depth."}
      </p>
    </div>
  );
}
