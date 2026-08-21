import React, { Suspense } from "react";
import type { Metadata } from "next";
import { physiologyProfiles } from "@/content/physiology-profiles";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhysiologyCompareClient } from "./PhysiologyCompareClient";

export const metadata: Metadata = {
  title: "Physiology Compare | ICU Knowledge Map",
  description: "Compare hemodynamic and physiology profiles side-by-side.",
};

export default function PhysiologyComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs 
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Physiology Compare", href: "/learn/physiology-compare" }
        ]} 
      />

      <h1 className="text-4xl font-bold text-ink mt-6 mb-4">Physiology Compare</h1>
      <p className="text-xl text-ink/70 mb-12">Compare how different clinical states and vasoactive agents affect hemodynamics.</p>

      <Suspense fallback={<div className="h-96 bg-surface animate-pulse rounded-xl" />}>
        <PhysiologyCompareClient profiles={physiologyProfiles} />
      </Suspense>
    </div>
  );
}
