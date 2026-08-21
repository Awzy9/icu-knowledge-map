"use client";

import React from "react";
import Link from "next/link";
import { useRecentActivity } from "@/hooks/useRecentActivity";

export function ContinueLearning() {
  const { getRecentItems } = useRecentActivity();
  const recentItems = getRecentItems(3);

  if (recentItems.length === 0) {
    return (
      <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-ink mb-2">Welcome to ICU Knowledge Map</h3>
        <p className="text-sm text-ink-muted mb-4">
          Start exploring clinical cases, medications, and physiology profiles to build your knowledge.
        </p>
        <Link 
          href="/cases"
          className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-strong transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
        >
          Start your first clinical case →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-ink">Continue Learning</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentItems.map((item) => (
          <Link
            key={`${item.type}-${item.id}`}
            href={item.href}
            className="group flex flex-col justify-between p-4 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:border-accent/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent-soft text-accent mb-2">
                {item.type}
              </span>
              <h4 className="text-sm font-medium text-ink group-hover:text-accent transition-colors line-clamp-2">
                {item.title}
              </h4>
              {item.type === "case" && item.resumeState?.stepIndex !== undefined && (
                <p className="text-xs text-ink-muted mt-1">
                  Resume at step {item.resumeState.stepIndex + 1}
                </p>
              )}
            </div>
            
            <div className="mt-4 flex items-center text-xs font-medium text-accent">
              Continue
              <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
