"use client";

import React from "react";
import type { PhysiologyProfile } from "@/content-types/physiology-profile";
import type { Direction } from "@/content-types/clinical-case";

interface PhysiologyEngineProps {
  profile: PhysiologyProfile;
}

const VARIABLE_LABELS: Record<string, string> = {
  svr: "SVR",
  hr: "Heart Rate",
  contractility: "Contractility",
  preload: "Preload",
  afterload: "Afterload",
  co: "Cardiac Output",
  map: "MAP",
  pvr: "PVR",
  venousReturn: "Venous Return",
  myocardialO2Demand: "Myocardial O₂ Demand",
};

export function renderArrow(direction?: Direction) {
  if (!direction) return null;

  switch (direction) {
    case "up-up":
      return (
        <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-500" aria-label="strongly increased">
          <span>↑↑</span>
          <span className="text-sm">Strongly Increased</span>
        </span>
      );
    case "up":
      return (
        <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-500" aria-label="increased">
          <span>↑</span>
          <span className="text-sm">Increased</span>
        </span>
      );
    case "down":
      return (
        <span className="inline-flex items-center gap-1 font-bold text-red-600 dark:text-red-500" aria-label="decreased">
          <span>↓</span>
          <span className="text-sm">Decreased</span>
        </span>
      );
    case "down-down":
      return (
        <span className="inline-flex items-center gap-1 font-bold text-red-600 dark:text-red-500" aria-label="strongly decreased">
          <span>↓↓</span>
          <span className="text-sm">Strongly Decreased</span>
        </span>
      );
    case "neutral":
      return (
        <span className="inline-flex items-center gap-1 font-medium text-slate-500 dark:text-slate-400" aria-label="neutral">
          <span>↔</span>
          <span className="text-sm">Neutral</span>
        </span>
      );
    case "variable":
      return (
        <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-500" aria-label="variable">
          <span>↑↓</span>
          <span className="text-sm">Variable</span>
        </span>
      );
    default:
      return null;
  }
}

export function PhysiologyEngine({ profile }: PhysiologyEngineProps) {
  const variables = Object.entries(profile.variables).filter(
    ([_, value]) => value !== undefined
  );

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
        <h3 className="font-semibold text-ink text-lg">{profile.name}</h3>
        <span className="text-xs font-medium px-2 py-1 bg-accent-soft text-accent rounded-full uppercase tracking-wider">
          {profile.type}
        </span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {variables.map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border shadow-xs">
              <span className="font-medium text-ink-muted">
                {VARIABLE_LABELS[key] || key}
              </span>
              <div className="flex items-center justify-end min-w-[120px]">
                {renderArrow(value as Direction)}
              </div>
            </div>
          ))}
        </div>

        {profile.mechanism && (
          <div className="mt-6 pt-5 border-t border-border">
            <h4 className="text-sm font-semibold text-ink mb-2">Mechanism</h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              {profile.mechanism}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
