"use client";

import { useMemo, useState } from "react";
import type { Medication } from "@/content-types/medication";
import { MedicationCard } from "@/components/medications/MedicationCard";

type CategoryId = Medication["category"];

const CATEGORY_LABELS: Record<CategoryId, string> = {
  "antimicrobials": "Antimicrobials",
  "vasopressors-inotropes": "Vasopressors & Inotropes",
  "sedatives-analgesics": "Sedatives & Analgesics",
  "neuromuscular-blockers": "Neuromuscular Blockers",
  "antihypertensives-vasodilators": "Antihypertensives & Vasodilators",
  "antiarrhythmics": "Antiarrhythmics",
  "anticoagulants": "Anticoagulants",
  "endocrine-metabolic": "Endocrine & Metabolic",
  "diuretics": "Diuretics",
  "electrolytes-emergency": "Electrolytes & Emergency Reversal",
};

const CATEGORY_ORDER: readonly CategoryId[] = [
  "antimicrobials",
  "vasopressors-inotropes",
  "sedatives-analgesics",
  "neuromuscular-blockers",
  "antihypertensives-vasodilators",
  "antiarrhythmics",
  "anticoagulants",
  "endocrine-metabolic",
  "diuretics",
  "electrolytes-emergency",
];

interface MedicationLibraryBrowserProps {
  medications: readonly Medication[];
}

export function MedicationLibraryBrowser({ medications }: MedicationLibraryBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">("all");

  const categoryCounts = useMemo(() => {
    const counts = new Map<CategoryId, number>();
    for (const med of medications) {
      counts.set(med.category, (counts.get(med.category) ?? 0) + 1);
    }
    return counts;
  }, [medications]);

  const filteredMedications = useMemo(() => {
    if (selectedCategory === "all") return medications;
    return medications.filter((med) => med.category === selectedCategory);
  }, [medications, selectedCategory]);

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border pb-4">
        <h2 className="text-xl font-bold text-ink">Browse All {medications.length} ICU Medications</h2>
        <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar" role="group" aria-label="Filter medications by category">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-accent text-accent-contrast border-accent"
                : "bg-surface border-border text-ink-muted hover:text-ink"
            }`}
          >
            All Medications ({medications.length})
          </button>
          {CATEGORY_ORDER.map((catId) => {
            const isSelected = selectedCategory === catId;
            const count = categoryCounts.get(catId) ?? 0;
            return (
              <button
                key={catId}
                type="button"
                onClick={() => setSelectedCategory(catId)}
                aria-pressed={isSelected}
                className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-accent text-accent-contrast border-accent"
                    : "bg-surface border-border text-ink-muted hover:text-ink"
                }`}
              >
                {CATEGORY_LABELS[catId]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filteredMedications.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMedications.map((med) => (
            <MedicationCard key={med.id} medication={med} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-surface px-6 py-12 text-center text-sm text-ink-muted">
          No medications match this filter.
        </div>
      )}
    </>
  );
}
