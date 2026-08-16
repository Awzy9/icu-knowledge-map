"use client";

import { useState } from "react";

interface AcidBaseVisualProps {
  readonly defaultPh: number;
  readonly defaultPaco2: number;
  readonly defaultHco3: number;
  readonly defaultNa: number;
  readonly defaultCl: number;
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

/** Anion gap, Winter's formula, and delta ratio from a shared set of lab inputs. Deterministic arithmetic only. */
export function AcidBaseVisual({ defaultPh, defaultPaco2, defaultHco3, defaultNa, defaultCl }: AcidBaseVisualProps) {
  const [ph, setPh] = useState(defaultPh);
  const [paco2, setPaco2] = useState(defaultPaco2);
  const [hco3, setHco3] = useState(defaultHco3);
  const [na, setNa] = useState(defaultNa);
  const [cl, setCl] = useState(defaultCl);

  const anionGap = na - (cl + hco3);
  const expectedPaco2Low = 1.5 * hco3 + 8 - 2;
  const expectedPaco2High = 1.5 * hco3 + 8 + 2;
  const compensationNote =
    paco2 < expectedPaco2Low
      ? "Lower than expected — a concurrent respiratory alkalosis is present."
      : paco2 > expectedPaco2High
        ? "Higher than expected — a concurrent respiratory acidosis is present."
        : "Within the expected range — appropriate respiratory compensation for a simple metabolic acidosis.";

  const deltaAG = anionGap - 12;
  const deltaHCO3 = 24 - hco3;
  const deltaRatio = deltaHCO3 !== 0 ? deltaAG / deltaHCO3 : null;
  const deltaNote =
    deltaRatio === null
      ? null
      : deltaRatio < 0.4
        ? "Suggests a concurrent normal-anion-gap (hyperchloremic) acidosis."
        : deltaRatio <= 2
          ? "Consistent with a pure high-anion-gap metabolic acidosis."
          : "Suggests a concurrent metabolic alkalosis (bicarbonate higher than the anion gap alone would predict).";

  const fields: ReadonlyArray<{ label: string; value: number; set: (value: number) => void; step: number }> = [
    { label: "pH", value: ph, set: setPh, step: 0.01 },
    { label: "PaCO2", value: paco2, set: setPaco2, step: 1 },
    { label: "HCO3", value: hco3, set: setHco3, step: 1 },
    { label: "Na", value: na, set: setNa, step: 1 },
    { label: "Cl", value: cl, set: setCl, step: 1 },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {fields.map((field) => (
          <label key={field.label} className="flex flex-col gap-1 text-sm text-ink">
            {field.label}
            <input
              type="number"
              step={field.step}
              value={field.value}
              onChange={(event) => field.set(Number(event.target.value))}
              className="rounded-md border border-border bg-surface px-2 py-1.5 text-sm text-ink"
            />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-2 rounded-md bg-surface-sunken p-3 text-sm text-ink">
        <p>
          Anion gap = Na − (Cl + HCO3) = {na} − ({cl} + {hco3}) = <span className="font-semibold">{round1(anionGap)}</span>
        </p>
        <p>
          Winter&apos;s expected PaCO2 = 1.5 × HCO3 + 8 ± 2 ={" "}
          <span className="font-semibold">
            {round1(expectedPaco2Low)}–{round1(expectedPaco2High)}
          </span>
        </p>
        <p className="text-ink-muted">{compensationNote}</p>
        {deltaRatio !== null && (
          <>
            <p>
              Delta ratio = (AG − 12) / (24 − HCO3) = <span className="font-semibold">{round1(deltaRatio)}</span>
            </p>
            <p className="text-ink-muted">{deltaNote}</p>
          </>
        )}
      </div>
      <p className="text-xs text-ink-faint">pH is shown for reference and isn&apos;t used in these particular calculations.</p>
    </div>
  );
}
