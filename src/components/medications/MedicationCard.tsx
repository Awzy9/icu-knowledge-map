"use client";

import React from "react";
import Link from "next/link";
import type { Medication } from "@/content-types/medication";

interface MedicationCardProps {
  medication: Medication;
}

export function MedicationCard({ medication }: MedicationCardProps) {
  const getCategoryColor = (cat: Medication["category"]) => {
    switch (cat) {
      case "antimicrobials":
        return "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200 border-teal-200 dark:border-teal-900";
      case "vasopressors-inotropes":
        return "bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border-rose-200 dark:border-rose-900";
      case "sedatives-analgesics":
        return "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border-purple-200 dark:border-purple-900";
      case "neuromuscular-blockers":
        return "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-200 dark:border-amber-900";
      case "antihypertensives-vasodilators":
        return "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border-blue-200 dark:border-blue-900";
      case "antiarrhythmics":
        return "bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-200 border-orange-200 dark:border-orange-900";
      case "anticoagulants":
        return "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200 border-red-200 dark:border-red-900";
      case "endocrine-metabolic":
        return "bg-cyan-50 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200 border-cyan-200 dark:border-cyan-900";
      case "diuretics":
        return "bg-lime-50 text-lime-800 dark:bg-lime-950 dark:text-lime-200 border-lime-200 dark:border-lime-900";
      case "electrolytes-emergency":
        return "bg-fuchsia-50 text-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-200 border-fuchsia-200 dark:border-fuchsia-900";
      default:
        return "bg-slate-50 text-slate-800 border-slate-200";
    }
  };

  return (
    <Link
      href={`/medications/${medication.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/50 hover:shadow-md"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(medication.category)}`}>
            {medication.subcategory}
          </span>
          <span className="text-[10px] font-mono text-ink-muted">
            {medication.brandNames[0] || ""}
          </span>
        </div>

        <h3 className="text-base font-bold text-ink group-hover:text-primary transition-colors">
          {medication.name}
        </h3>
        <p className="text-xs text-ink-muted italic mb-3">{medication.genericName}</p>

        <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed mb-4">
          {medication.summary}
        </p>
      </div>

      <div className="border-t border-border/60 pt-3 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
        <span>Explore Drug Profile →</span>
        <span className="text-[10px] text-ink-muted font-normal">14 Sections</span>
      </div>
    </Link>
  );
}
