"use client";

import React, { useState } from "react";
import type { PhysiologyProfile } from "@/content-types/physiology-profile";
import { PhysiologyCompare } from "@/components/physiology/PhysiologyCompare";
import { PhysiologyEngine } from "@/components/physiology/PhysiologyEngine";

export function PhysiologyCompareClient({ profiles }: { profiles: readonly PhysiologyProfile[] }) {
  const [profile1, setProfile1] = useState<string>(profiles[0]?.id || "");
  const [profile2, setProfile2] = useState<string>(profiles[1]?.id || "");

  const p1 = profiles.find(p => p.id === profile1);
  const p2 = profiles.find(p => p.id === profile2);

  return (
    <div className="space-y-12">
      <section className="bg-surface border border-border p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-ink mb-6">Compare Profiles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-2">Profile 1</label>
            <select 
              value={profile1} 
              onChange={(e) => setProfile1(e.target.value)}
              className="w-full p-2 border border-border rounded-md bg-canvas text-ink"
            >
              {profiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/70 mb-2">Profile 2</label>
            <select 
              value={profile2} 
              onChange={(e) => setProfile2(e.target.value)}
              className="w-full p-2 border border-border rounded-md bg-canvas text-ink"
            >
              {profiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
        </div>

        {p1 && p2 && (
          <PhysiologyCompare profileA={p1} profileB={p2} />
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-ink mb-6">Browse Individual Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map(profile => (
            <div key={profile.id} className="border border-border rounded-xl overflow-hidden">
              <PhysiologyEngine profile={profile} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
