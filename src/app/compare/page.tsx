import Link from "next/link";
import { getAllComparisons } from "@/content/comparisons";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/learn/MedicalDisclaimer";

export const metadata = { title: "Clinical Comparisons" };

export default function CompareIndexPage() {
  const comparisons = getAllComparisons();
  const systems = [...new Set(comparisons.map((c) => c.system))];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-24 pt-6 sm:pb-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Compare" }]} />
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Clinical Comparisons</h1>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
        Side-by-side differentials for the confusions that cost the most time at the bedside.
      </p>

      {systems.map((system) => (
        <section key={system} className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink-muted">{system}</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {comparisons.filter((c) => c.system === system).map((c) => (
              <li key={c.id}>
                <Link
                  href={`/compare/${c.id}`}
                  className="block rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span className="font-semibold text-ink">{c.title}</span>
                  {c.subtitle && <span className="mt-1 block text-sm text-ink-muted">{c.subtitle}</span>}
                  <span className="mt-2 inline-block text-xs font-semibold text-accent">
                    {c.entities.length} entities · Open comparison →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-10">
        <MedicalDisclaimer />
      </div>
    </main>
  );
}
