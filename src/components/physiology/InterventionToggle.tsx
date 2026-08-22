"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

interface InterventionToggleProps {
  readonly options: string[];
  readonly selected: string;
  readonly onChange: (option: string) => void;
  readonly label?: string;
}

/**
 * Simple horizontal tab/toggle group for physiology pages.
 * Keyboard-accessible: arrow keys navigate between tabs.
 */
export function InterventionToggle({ options, selected, onChange, label }: InterventionToggleProps) {
  const tabsRef = useRef<HTMLDivElement>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const total = options.length;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % total;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + total) % total;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = total - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
      if (tabs) {
        tabs[nextIndex]?.focus();
        onChange(options[nextIndex]);
      }
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</p>
      )}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label={label ?? "Intervention states"}
        className="flex flex-wrap gap-1.5"
      >
        {options.map((option, index) => {
          const isSelected = option === selected;
          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(option)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isSelected
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface text-ink-muted hover:border-border-strong hover:text-ink",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
