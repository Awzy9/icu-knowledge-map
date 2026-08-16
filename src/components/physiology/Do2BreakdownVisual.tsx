"use client";

import { useState } from "react";

interface Do2BreakdownVisualProps {
  readonly defaultCardiacOutput: number;
  readonly defaultHemoglobin: number;
  readonly defaultSao2: number;
}

/** CaO2/DO2 breakdown from CO, Hb, and SaO2. Deterministic arithmetic only. */
export function Do2BreakdownVisual({ defaultCardiacOutput, defaultHemoglobin, defaultSao2 }: Do2BreakdownVisualProps) {
  const [co, setCo] = useState(defaultCardiacOutput);
  const [hb, setHb] = useState(defaultHemoglobin);
  const [sao2, setSao2] = useState(defaultSao2);

  const cao2 = 1.34 * hb * (sao2 / 100);
  const do2 = co * cao2 * 10;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="flex flex-col gap-1 text-sm text-ink">
          Cardiac output
          <input type="range" min={1} max={12} step={0.1} value={co} onChange={(event) => setCo(Number(event.target.value))} />
          <span className="text-xs text-ink-faint">{co.toFixed(1)} L/min</span>
        </label>
        <label className="flex flex-col gap-1 text-sm text-ink">
          Hemoglobin
          <input type="range" min={4} max={17} step={0.1} value={hb} onChange={(event) => setHb(Number(event.target.value))} />
          <span className="text-xs text-ink-faint">{hb.toFixed(1)} g/dL</span>
        </label>
        <label className="flex flex-col gap-1 text-sm text-ink">
          SaO2
          <input type="range" min={50} max={100} step={1} value={sao2} onChange={(event) => setSao2(Number(event.target.value))} />
          <span className="text-xs text-ink-faint">{sao2}%</span>
        </label>
      </div>

      <div className="flex flex-col gap-1.5 rounded-md bg-surface-sunken p-3 text-sm text-ink">
        <p>
          CaO2 = 1.34 × Hb × SaO2 = 1.34 × {hb.toFixed(1)} × {(sao2 / 100).toFixed(2)} = <span className="font-semibold">{cao2.toFixed(1)}</span> mL O2/dL
        </p>
        <p>
          DO2 = CO × CaO2 × 10 = {co.toFixed(1)} × {cao2.toFixed(1)} × 10 = <span className="font-semibold">{Math.round(do2)}</span> mL/min
        </p>
      </div>
      <p className="text-xs text-ink-faint">
        Dissolved oxygen (0.003 × PaO2) is omitted here — it contributes negligibly to CaO2 at normal atmospheric pressure.
      </p>
    </div>
  );
}
