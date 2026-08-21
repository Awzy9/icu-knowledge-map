import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getClinicalCase, getAllClinicalCaseSlugs } from "@/registry";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CasePlayer } from "@/components/learn/CasePlayer";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllClinicalCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const caseData = getClinicalCase(params.slug);
  if (!caseData) {
    return { title: "Case Not Found" };
  }
  return {
    title: `${caseData.title} | ICU Knowledge Map`,
    description: caseData.subtitle,
  };
}

export default function CasePage({ params }: Props) {
  const caseData = getClinicalCase(params.slug);

  if (!caseData) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <Breadcrumbs 
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Clinical Reasoning", href: "/learn/clinical-reasoning" },
            { label: caseData.title, href: `/learn/clinical-reasoning/${caseData.slug}` }
          ]} 
        />
      </div>

      <Suspense fallback={<div className="h-96 bg-surface animate-pulse rounded-xl" />}>
        <CasePlayer caseData={caseData} />
      </Suspense>
    </div>
  );
}
