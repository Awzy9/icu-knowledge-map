"use client";

import type { CalculatorInput } from "@/content-types";

interface CalculatorInputFieldProps {
  readonly input: CalculatorInput;
  readonly value: number | string | boolean | undefined;
  readonly onChange: (value: number | string | boolean) => void;
}

/** Returns a validation message if a filled numeric value is outside the input's declared range, else null. */
export function rangeError(input: CalculatorInput, value: number | string | boolean | undefined): string | null {
  if (input.type !== "number" || value === undefined || value === "") return null;
  const num = Number(value);
  if (Number.isNaN(num)) return "Enter a number.";
  if (input.min !== undefined && num < input.min) return `Must be ≥ ${input.min}${input.unit ? ` ${input.unit}` : ""}.`;
  if (input.max !== undefined && num > input.max) return `Must be ≤ ${input.max}${input.unit ? ` ${input.unit}` : ""}.`;
  return null;
}

export function CalculatorInputField({ input, value, onChange }: CalculatorInputFieldProps) {
  if (input.type === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm text-ink">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="h-4 w-4 rounded border-border"
        />
        {input.label}
      </label>
    );
  }

  if (input.type === "select") {
    return (
      <label className="flex flex-col gap-1 text-sm text-ink">
        {input.label}
        <select
          value={String(value ?? "")}
          onChange={(event) => onChange(event.target.value)}
          className="rounded-md border border-border bg-surface px-2 py-2 text-sm text-ink"
        >
          {input.options?.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  const error = rangeError(input, value);

  return (
    <label className="flex flex-col gap-1 text-sm text-ink">
      {input.label} {input.unit && <span className="text-ink-faint">({input.unit})</span>}
      <input
        type="number"
        inputMode="decimal"
        value={value === undefined ? "" : String(value)}
        min={input.min}
        max={input.max}
        step={input.step ?? "any"}
        onChange={(event) => onChange(event.target.value === "" ? "" : Number(event.target.value))}
        className={`rounded-md border bg-surface px-2 py-2 text-sm text-ink ${error ? "border-rose-400" : "border-border"}`}
        aria-invalid={error ? true : undefined}
      />
      {error && <span className="text-xs text-rose-700 dark:text-rose-400">{error}</span>}
    </label>
  );
}
