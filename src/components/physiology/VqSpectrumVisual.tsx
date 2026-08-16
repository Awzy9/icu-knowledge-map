"use client";

import { useState } from "react";

interface VqSpectrumVisualProps {
  readonly defaultRatio: number;
}

const ZONES = [
  {
    max: 0.4,
    label: "Shunt",
    description:
      "Alveoli are perfused but not ventilated. Hypoxemia responds poorly to supplemental oxygen — the fix is recruitment (PEEP, prone positioning), not more FiO2.",
  },
  {
    max: 0.8,
    label: "Low V/Q",
    description: "Some ventilation still reaches these alveoli, but perfusion outstrips it. Hypoxemia here usually improves with supplemental oxygen.",
  },
  {
    max: 1.2,
    label: "Normal V/Q",
    description: "Ventilation and perfusion are well matched — efficient gas exchange, roughly 0.8–1.0 in healthy lung units.",
  },
  {
    max: 1.6,
    label: "High V/Q",
    description: "Ventilation outstrips perfusion — wasted ventilation. Doesn't cause hypoxemia by itself, but increases the minute ventilation needed to clear CO2.",
  },
  {
    max: 2,
    label: "Dead space",
    description:
      "Alveoli are ventilated but not perfused (e.g. pulmonary embolism). Raises PaCO2 for a given minute ventilation rather than causing hypoxemia.",
  },
];

function zoneFor(ratio: number) {
  return ZONES.find((zone) => ratio <= zone.max) ?? ZONES[ZONES.length - 1];
}

/** V/Q spectrum from pure shunt (0) through normal (1) to pure dead space (2). Deterministic zone lookup, no formulas needed. */
export function VqSpectrumVisual({ defaultRatio }: VqSpectrumVisualProps) {
  const [ratio, setRatio] = useState(defaultRatio);
  const zone = zoneFor(ratio);
  const pct = (ratio / 2) * 100;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      <label className="flex flex-col gap-1 text-sm text-ink">
        V/Q ratio
        <input type="range" min={0} max={2} step={0.05} value={ratio} onChange={(event) => setRatio(Number(event.target.value))} />
      </label>

      <div>
        <div className="relative h-2 w-full rounded-full bg-surface-sunken">
          <div
            className="absolute -top-1 h-4 w-1 rounded-full bg-accent"
            style={{ left: `calc(${pct}% - 2px)` }}
            aria-hidden
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-ink-faint">
          <span>0 (shunt)</span>
          <span>1 (normal)</span>
          <span>2 (dead space)</span>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-ink">
          {zone.label} <span className="font-normal text-ink-faint">(V/Q ≈ {ratio.toFixed(2)})</span>
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{zone.description}</p>
      </div>
    </div>
  );
}
