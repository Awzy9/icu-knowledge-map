"use client";

import React, { useState } from "react";
import type { WhyNotEntry } from "@/content-types/medication-challenge";

interface WhyNotProps {
  alternatives: WhyNotEntry[];
}

export function WhyNot({ alternatives }: WhyNotProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!alternatives || alternatives.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold text-ink mb-3 uppercase tracking-wider">Why Not?</h4>
      <div className="flex flex-col gap-2">
        {alternatives.map((alt) => {
          const isExpanded = expandedId === alt.optionId;
          
          return (
            <div key={alt.optionId} className="border border-border rounded-lg overflow-hidden bg-surface transition-colors">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                onClick={() => setExpandedId(isExpanded ? null : alt.optionId)}
                aria-expanded={isExpanded}
              >
                <span className="font-medium text-ink">{alt.drug}</span>
                <svg
                  className={`w-4 h-4 text-ink-muted transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-3 pt-1 text-sm text-ink-muted border-t border-border/50 bg-canvas/30 leading-relaxed">
                  {alt.reasoning}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
