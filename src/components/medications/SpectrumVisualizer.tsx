"use client";

import React from "react";
import type { AntimicrobialSpectrum } from "@/content-types/medication";

interface SpectrumVisualizerProps {
  spectrum: AntimicrobialSpectrum;
  drugName: string;
}

export function SpectrumVisualizer({ spectrum, drugName }: SpectrumVisualizerProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-card p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <h3 className="text-base font-semibold text-ink flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Antimicrobial Spectrum & Coverage Framework — {drugName}
        </h3>
        <span className="text-xs text-ink-muted font-medium">Educational Reference</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Gram-Positive */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-4">
          <h4 className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
            Gram-Positive Organisms
          </h4>
          <div className="mb-3">
            <p className="text-xs font-medium text-ink-muted mb-1">Covered:</p>
            <ul className="flex flex-wrap gap-1.5">
              {spectrum.gramPositive.covered.map((org, i) => (
                <li key={i} className="rounded bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  ✓ {org}
                </li>
              ))}
            </ul>
          </div>
          {spectrum.gramPositive.notCovered.length > 0 && (
            <div>
              <p className="text-xs font-medium text-ink-muted mb-1">Not Covered:</p>
              <ul className="flex flex-wrap gap-1.5">
                {spectrum.gramPositive.notCovered.map((org, i) => (
                  <li key={i} className="rounded bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 text-xs text-rose-800 dark:text-rose-300 font-medium">
                    ✕ {org}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Gram-Negative */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-4">
          <h4 className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
            Gram-Negative Organisms
          </h4>
          <div className="mb-3">
            <p className="text-xs font-medium text-ink-muted mb-1">Covered:</p>
            <ul className="flex flex-wrap gap-1.5">
              {spectrum.gramNegative.covered.map((org, i) => (
                <li key={i} className="rounded bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 text-xs text-blue-800 dark:text-blue-300 font-medium">
                  ✓ {org}
                </li>
              ))}
            </ul>
          </div>
          {spectrum.gramNegative.notCovered.length > 0 && (
            <div>
              <p className="text-xs font-medium text-ink-muted mb-1">Not Covered:</p>
              <ul className="flex flex-wrap gap-1.5">
                {spectrum.gramNegative.notCovered.map((org, i) => (
                  <li key={i} className="rounded bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 text-xs text-rose-800 dark:text-rose-300 font-medium">
                    ✕ {org}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Anaerobes & Others */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-4">
          <h4 className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-2">
            Anaerobes & Special Pathogens
          </h4>
          <div className="mb-3">
            <p className="text-xs font-medium text-ink-muted mb-1">Covered:</p>
            <ul className="flex flex-wrap gap-1.5">
              {spectrum.anaerobes.covered.map((org, i) => (
                <li key={i} className="rounded bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 text-xs text-purple-800 dark:text-purple-300 font-medium">
                  ✓ {org}
                </li>
              ))}
              {spectrum.atypicalsFungi?.covered.map((org, i) => (
                <li key={i} className="rounded bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 text-xs text-purple-800 dark:text-purple-300 font-medium">
                  ✓ {org}
                </li>
              ))}
            </ul>
          </div>
          {(spectrum.anaerobes.notCovered.length > 0 || (spectrum.atypicalsFungi?.notCovered && spectrum.atypicalsFungi.notCovered.length > 0)) && (
            <div>
              <p className="text-xs font-medium text-ink-muted mb-1">Not Covered:</p>
              <ul className="flex flex-wrap gap-1.5">
                {spectrum.anaerobes.notCovered.map((org, i) => (
                  <li key={i} className="rounded bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 text-xs text-rose-800 dark:text-rose-300 font-medium">
                    ✕ {org}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* NOTABLE GAPS PROMINENT CALLOUT */}
      {spectrum.notableGaps.length > 0 && (
        <div className="rounded-lg border border-amber-300 dark:border-amber-900/60 bg-amber-500/10 p-3.5">
          <div className="flex items-center gap-2 mb-1.5">
            <svg className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              High-Yield Exam & Clinical Gaps
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {spectrum.notableGaps.map((gap, i) => (
              <span key={i} className="inline-flex items-center rounded-md bg-amber-100 dark:bg-amber-950/80 px-2.5 py-1 text-xs font-bold text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                ⚠️ {gap}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
