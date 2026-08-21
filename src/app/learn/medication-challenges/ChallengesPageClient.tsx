"use client";

import React, { useState } from "react";
import type { MedicationChallenge } from "@/content-types/medication-challenge";
import { ChallengeCard } from "@/components/learn/ChallengeCard";

export function ChallengesPageClient({ challenges }: { challenges: readonly MedicationChallenge[] }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const types = Array.from(new Set(challenges.map(c => c.challengeType)));

  const filteredChallenges = activeTab === "all" 
    ? challenges 
    : challenges.filter(c => c.challengeType === activeTab);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
            activeTab === "all" ? "bg-accent text-white" : "bg-surface border border-border text-ink/70 hover:text-ink"
          }`}
        >
          All Challenges
        </button>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              activeTab === type ? "bg-accent text-white" : "bg-surface border border-border text-ink/70 hover:text-ink"
            }`}
          >
            {type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map(challenge => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
