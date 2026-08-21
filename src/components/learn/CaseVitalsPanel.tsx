"use client";

import React from "react";

interface CaseVitalsPanelProps {
  vitals: Record<string, string>;
  previousVitals?: Record<string, string>;
}

export function CaseVitalsPanel({ vitals, previousVitals }: CaseVitalsPanelProps) {
  const isAbnormal = (key: string, value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return false;
    
    key = key.toLowerCase();
    if (key.includes("map") && num < 65) return true;
    if (key.includes("hr") && num > 120) return true;
    if (key.includes("spo2") && num < 90) return true;
    if (key.includes("lactate") && num > 2) return true;
    
    return false;
  };

  return (
    <div className="bg-surface rounded-xl border border-border shadow-sm p-4 my-4">
      <h4 className="text-sm font-semibold text-ink-muted mb-3 uppercase tracking-wider">Vital Signs</h4>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
        {Object.entries(vitals).map(([key, value]) => {
          const prevValue = previousVitals?.[key];
          const changed = prevValue !== undefined && prevValue !== value;
          const abnormal = isAbnormal(key, value);
          
          return (
            <div 
              key={key} 
              className={`flex flex-col p-2 rounded-lg transition-colors ${
                changed ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/50 border" : "bg-canvas border border-transparent"
              }`}
            >
              <span className="text-xs text-ink-muted font-medium uppercase">{key}</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className={`text-base font-bold ${abnormal ? "text-red-600 dark:text-red-500" : "text-ink"}`}>
                  {value}
                </span>
                {abnormal && (
                  <span className="w-2 h-2 rounded-full bg-red-500" aria-label="Abnormal value indicator" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
