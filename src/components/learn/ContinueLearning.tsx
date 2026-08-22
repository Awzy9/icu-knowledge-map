"use client";

import React from "react";
import Link from "next/link";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { useRecentActivity } from "@/hooks/useRecentActivity";

interface ContinueLearningProps {
  totalTopics?: number;
  totalCases?: number;
}

export function ContinueLearning({ totalTopics = 64, totalCases = 10 }: ContinueLearningProps = {}) {
  const stats = useLearningProgress({ totalTopics, totalCases });
  const { getRecentItems } = useRecentActivity();
  
  const overallPercentage = stats.totalTopics > 0 ? (stats.topicsCompleted / stats.totalTopics) * 100 : 0;
  const recentItems = getRecentItems(3);

  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-ink mb-4">Continue Learning</h2>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-ink/70">Overall Progress</span>
          <span className="font-medium text-ink">{Math.round(overallPercentage)}%</span>
        </div>
        <div className="w-full bg-canvas rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all" 
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
      </div>

      {recentItems.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-ink/70 uppercase tracking-wider">Recent Activity</h3>
          {recentItems.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="block p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <div className="text-sm font-medium text-ink">{item.title}</div>
              <div className="text-xs text-ink/60">{item.type} • {new Date(item.timestamp).toLocaleDateString()}</div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-ink/70 text-sm">No recent activity. Start exploring cases or challenges!</p>
      )}
    </div>
  );
}
