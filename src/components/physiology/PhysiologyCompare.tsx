"use client";

import React from "react";
import type { PhysiologyProfile } from "@/content-types/physiology-profile";
import type { Direction } from "@/content-types/clinical-case";
import { renderArrow } from "./PhysiologyEngine";

interface PhysiologyCompareProps {
  profileA: PhysiologyProfile;
  profileB: PhysiologyProfile;
}

const VARIABLE_LABELS: Record<string, string> = {
  svr: "SVR (Systemic Vascular Resistance)",
  hr: "Heart Rate",
  contractility: "Inotropy / Contractility",
  preload: "Preload (End-Diastolic Vol)",
  afterload: "Afterload (LV Impedance)",
  co: "Cardiac Output (CO)",
  map: "Mean Arterial Pressure (MAP)",
  pvr: "Pulmonary Vascular Resistance",
  venousReturn: "Venous Return",
  myocardialO2Demand: "Myocardial O₂ Demand",
};

export function PhysiologyCompare({ profileA, profileB }: PhysiologyCompareProps) {
  const varsA = profileA.variables as Record<string, Direction | undefined>;
  const varsB = profileB.variables as Record<string, Direction | undefined>;

  // Collect all unique variables used in either profile
  const allVars = Array.from(
    new Set<string>([
      ...Object.keys(profileA.variables).filter((k) => varsA[k]),
      ...Object.keys(profileB.variables).filter((k) => varsB[k]),
    ])
  );

  return (
    <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
      {/* Header comparison row */}
      <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-border bg-surface-elevated border-b border-border">
        {/* Profile A Header */}
        <div className="p-4 md:p-5 flex flex-col justify-center">
          <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 bg-accent-soft text-accent rounded w-fit uppercase tracking-wider mb-1">
            {profileA.type}
          </span>
          <h3 className="font-bold text-ink text-base md:text-lg">{profileA.name}</h3>
        </div>

        {/* Center column label header on desktop */}
        <div className="hidden md:flex p-5 items-center justify-center text-xs font-bold text-ink-muted uppercase tracking-wider bg-surface-elevated/40">
          Hemodynamic Variable
        </div>

        {/* Profile B Header */}
        <div className="p-4 md:p-5 flex flex-col justify-center md:items-end">
          <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 bg-accent-soft text-accent rounded w-fit uppercase tracking-wider mb-1">
            {profileB.type}
          </span>
          <h3 className="font-bold text-ink text-base md:text-lg">{profileB.name}</h3>
        </div>
      </div>

      {/* Variables Rows */}
      <div className="divide-y divide-border">
        {allVars.map((key) => {
          const valA = varsA[key];
          const valB = varsB[key];

          return (
            <div key={key} className="hover:bg-surface-elevated/30 transition-colors">
              {/* Mobile variable header */}
              <div className="md:hidden px-4 pt-3 pb-1 bg-canvas/60 border-b border-border/40 text-xs font-bold text-ink-muted">
                {VARIABLE_LABELS[key] || key}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-border p-3 md:p-0">
                {/* Profile A Value */}
                <div className="p-2 md:p-4 flex items-center justify-center">
                  {renderArrow(valA)}
                </div>

                {/* Desktop Center Variable Name */}
                <div className="hidden md:flex p-4 items-center justify-center bg-canvas/20 text-center">
                  <span className="font-semibold text-ink text-xs md:text-sm">
                    {VARIABLE_LABELS[key] || key}
                  </span>
                </div>

                {/* Profile B Value */}
                <div className="p-2 md:p-4 flex items-center justify-center">
                  {renderArrow(valB)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
