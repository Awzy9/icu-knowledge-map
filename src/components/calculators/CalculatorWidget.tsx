"use client";

import { useMemo, useState } from "react";
import type { Calculator, CalculatorInputValues } from "@/content-types";
import { getCalculator } from "@/registry";
import { Card } from "@/components/ui/Card";
import { CalculatorInputField, rangeError } from "./CalculatorInputField";

function defaultValues(calculator: Calculator): CalculatorInputValues {
  const values: CalculatorInputValues = {};
  for (const input of calculator.inputs) {
    if (input.type === "boolean") values[input.id] = false;
    else if (input.type === "select") values[input.id] = input.options?.[0]?.value ?? "";
    else values[input.id] = "";
  }
  return values;
}

interface CalculatorWidgetProps {
  /**
   * Looked up by id inside this client component rather than accepted as a
   * `calculator` prop — a Calculator includes a `compute` function, and
   * functions can't be passed from a Server Component across the RSC
   * boundary as props.
   */
  readonly calculatorId: string;
}

/** One generic, data-driven shell for every calculator — not one component per formula. All computation is local and synchronous; no network calls, no patient data ever leaves the browser. */
export function CalculatorWidget({ calculatorId }: CalculatorWidgetProps) {
  const calculator = getCalculator(calculatorId);
  const [values, setValues] = useState<CalculatorInputValues>(() =>
    calculator ? defaultValues(calculator) : {},
  );

  const numberInputs = calculator ? calculator.inputs.filter((input) => input.type === "number") : [];
  const numberInputsFilled = numberInputs.every(
    (input) => values[input.id] !== "" && !Number.isNaN(Number(values[input.id])),
  );
  const rangeErrors = numberInputs
    .map((input) => rangeError(input, values[input.id]))
    .filter((message): message is string => message !== null);
  const numberInputsValid = numberInputsFilled && rangeErrors.length === 0;

  const { result, computeError } = useMemo((): { result: number | null; computeError: string | null } => {
    if (!calculator || !numberInputsValid) return { result: null, computeError: null };
    try {
      const value = calculator.compute(values);
      if (!Number.isFinite(value)) return { result: null, computeError: "This combination of values doesn't produce a valid result." };
      return { result: value, computeError: null };
    } catch (error) {
      return { result: null, computeError: error instanceof Error ? error.message : "This combination of values doesn't produce a valid result." };
    }
  }, [calculator, values, numberInputsValid]);

  if (!calculator) return null;

  const band = result !== null ? calculator.resultBands?.find((b) => result >= b.min && result <= b.max) : undefined;
  const displayResult = result !== null ? Math.round(result * 100) / 100 : null;

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-semibold text-ink">{calculator.title}</p>
        <p className="text-xs text-ink-muted">{calculator.description}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Formula</p>
        <p className="mt-1 rounded-md bg-surface-sunken px-3 py-2 font-mono text-xs text-ink">{calculator.formula}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {calculator.inputs.map((input) => (
          <CalculatorInputField
            key={input.id}
            input={input}
            value={values[input.id]}
            onChange={(next) => setValues((prev) => ({ ...prev, [input.id]: next }))}
          />
        ))}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Result</p>
        <div className="mt-1 rounded-md bg-surface-sunken p-3">
          {rangeErrors.length > 0 ? (
            <p className="text-sm text-rose-700">Correct the highlighted value{rangeErrors.length > 1 ? "s" : ""} above to see a result.</p>
          ) : computeError ? (
            <p className="text-sm text-rose-700">{computeError}</p>
          ) : displayResult === null ? (
            <p className="text-sm text-ink-faint">Enter all values to see the result.</p>
          ) : (
            <div>
              <p className="text-lg font-semibold text-ink">
                {displayResult} <span className="text-sm font-normal text-ink-muted">{calculator.resultUnit}</span>
              </p>
              {band && (
                <p className="mt-1 text-sm text-ink-muted">
                  <span className="font-medium text-ink">{band.label}</span> — {band.interpretation}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Limitations</p>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 text-xs leading-relaxed text-ink-muted">
          {calculator.limitations.map((limitation, i) => (
            <li key={i}>{limitation}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">References</p>
        <ul className="mt-1 flex flex-col gap-1 text-xs text-ink-faint">
          {calculator.references.map((reference, i) => (
            <li key={i}>{reference}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
