"use client";

import { useMemo, useState } from "react";
import type { Medication } from "@/content-types/medication";
import { MedicationCard } from "@/components/medications/MedicationCard";

type CategoryId = Medication["category"];

const CATEGORY_LABELS: Record<CategoryId, string> = {
  "antimicrobials": "Antimicrobials",
  "vasopressors-inotropes": "Vasopressors & Inotropes",
  "sedatives-analgesics": "Sedatives & Analgesics",
  "corticosteroids": "Corticosteroids",
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
  "corticosteroids",
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
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = useMemo(() => {
    const counts = new Map<CategoryId, number>();
    for (const med of medications) {
      counts.set(med.category, (counts.get(med.category) ?? 0) + 1);
    }
    return counts;
  }, [medications]);

  const filteredMedications = useMemo(() => {
    let result = selectedCategory === "all"
      ? medications
      : medications.filter((med) => med.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.genericName.toLowerCase().includes(q) ||
          m.brandNames.some((b) => b.toLowerCase().includes(q)) ||
          m.summary.toLowerCase().includes(q) ||
          m.class.toLowerCase().includes(q)
      );
    }
    return result;
  }, [medications, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Category Tabs & Search */}
      <div className="space-y-4 border-b border-border pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-ink">
            Browse All {medications.length} ICU Medications
          </h2>
          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by drug, brand, class..."
              className="w-full rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1.5 text-xs text-ink-muted hover:text-ink cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Badges */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar" role="group" aria-label="Filter medications by category">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            aria-pressed={selectedCategory === "all"}
            className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === "all"
                ? "bg-primary text-white border-primary"
                : "bg-surface border-border text-ink-muted hover:text-ink"
            }`}
          >
            All Medications ({medications.length})
          </button>
          {CATEGORY_ORDER.map((catId) => {
            const isSelected = selectedCategory === catId;
            const count = categoryCounts.get(catId) ?? 0;
            if (count === 0) return null;
            return (
              <button
                key={catId}
                type="button"
                onClick={() => setSelectedCategory(catId)}
                aria-pressed={isSelected}
                className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "bg-surface border-border text-ink-muted hover:text-ink"
                }`}
              >
                {CATEGORY_LABELS[catId]} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Results */}
      {filteredMedications.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMedications.map((med) => (
            <MedicationCard key={med.id} medication={med} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center text-ink-muted">
          No medications found matching your criteria.
        </div>
      )}
    </div>
  );
}
