import React, { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllClinicalCases } from "@/registry";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Clinical Reasoning Cases | ICU Knowledge Map",
  description: "Interactive clinical cases to test your clinical reasoning skills.",
};

export default function ClinicalReasoningIndex() {
  const cases = getAllClinicalCases();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs 
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Clinical Reasoning", href: "/learn/clinical-reasoning" }
        ]} 
      />

      <h1 className="text-4xl font-bold text-ink mt-6 mb-4">Clinical Reasoning</h1>
      <p className="text-xl text-ink/70 mb-12">Apply your knowledge with interactive clinical scenarios.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <Link key={c.slug} href={`/learn/clinical-reasoning/${c.slug}`} className="block h-full">
            <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <Badge className={c.difficulty === "advanced" ? "bg-amber-100 text-amber-800" : c.difficulty === "intermediate" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                  {c.difficulty}
                </Badge>
                <Badge>{c.system}</Badge>
              </div>
              <h2 className="text-xl font-bold text-ink mb-2">{c.title}</h2>
              <p className="text-ink/70 text-sm flex-grow mb-4">{c.subtitle}</p>
              
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
                <span className="text-sm font-medium text-accent">Start Case &rarr;</span>
                <Suspense fallback={<div className="w-16 h-4 bg-canvas animate-pulse rounded" />}>
                  <CaseStatusBadge slug={c.slug} />
                </Suspense>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Need a small client component for this
import { CaseStatusBadgeClient } from "./CaseStatusBadgeClient";

function CaseStatusBadge({ slug }: { slug: string }) {
  return <CaseStatusBadgeClient slug={slug} />;
}
