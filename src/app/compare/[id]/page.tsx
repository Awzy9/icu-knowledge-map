import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllComparisons, getComparison } from "@/content/comparisons";
import { ClinicalComparisonView } from "@/components/compare/ClinicalComparisonView";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/learn/MedicalDisclaimer";

interface PageProps { readonly params: Promise<{ id: string }> }

export function generateStaticParams() {
  return getAllComparisons().map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  return { title: getComparison(id)?.title ?? "Comparison" };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const comparison = getComparison(id);
  if (!comparison) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:pb-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: comparison.title }]} />
      <div className="mt-2">
        <ClinicalComparisonView comparison={comparison} />
      </div>
      <div className="mt-10"><MedicalDisclaimer /></div>
      <p className="mt-6">
        <Link href="/compare" className="text-sm font-semibold text-accent hover:underline">← All comparisons</Link>
      </p>
    </main>
  );
}
