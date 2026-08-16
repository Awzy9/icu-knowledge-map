import Link from "next/link";
import {
  getAllCalculators,
  getAllClinicalProblems,
  getAllPathways,
  getAllTopics,
  getGraph,
} from "@/registry";
import { categoryStyle } from "@/lib/category-style";
import { RelationshipGraph } from "@/components/graph/RelationshipGraph";
import { GraphLegend } from "@/components/graph/GraphLegend";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { TopicCategory } from "@/content-types";

const ACTION_PILLARS = [
  {
    step: "LEARN",
    title: "Explore ICU Topics",
    description: "Understand diseases, physiology, diagnosis, management, complications, and evidence.",
    badge: "60 Core Topics",
    href: "/topics",
    action: "Open Topics",
  },
  {
    step: "SOLVE",
    title: "Start with a Clinical Problem",
    description: "Start with the patient presentation rather than the disease name.",
    badge: "25 Bedside Problems",
    href: "/problems",
    action: "Open Clinical Problems",
  },
  {
    step: "DECIDE",
    title: "Follow a Clinical Pathway",
    description: "Work through structured bedside decision-making from presentation to escalation.",
    badge: "27 Decision Protocols",
    href: "/pathways",
    action: "Open Pathways",
  },
  {
    step: "VERIFY",
    title: "Explore the Evidence",
    description: "Find guidelines, landmark trials, and evidence synthesis kept in clear layers.",
    badge: "143 Evidence Records",
    href: "/evidence",
    action: "Open Evidence Explorer",
  },
  {
    step: "PRACTICE",
    title: "Test Your Knowledge",
    description: "Use scenario-based clinical questions and active recall flashcard decks.",
    badge: "391 Cards · 208 Questions",
    href: "/flashcards",
    action: "Open Questions / Flashcards",
  },
  {
    step: "CALCULATE",
    title: "Use ICU Calculators",
    description: "Access formula-based point-of-care critical care calculators computed locally.",
    badge: "18 Bedside Calculators",
    href: "/calculators",
    action: "Open Calculators",
  },
];

// Curated representative mix across ICU domains
const FEATURED_PROBLEM_SLUGS = [
  "sudden-hypoxemia",
  "refractory-shock",
  "acute-altered-mental-status",
  "severe-hyperkalemia",
  "suspected-sepsis",
  "acute-bleeding-falling-hemoglobin",
];

const FEATURED_PATHWAY_SLUGS = [
  "ards-first-6-hours",
  "vasopressor-titration-workflow",
  "sepsis-bundle-workflow",
  "hyperkalemia-management-workflow",
  "status-epilepticus-workflow",
  "massive-hemorrhage-protocol",
];

export default function HomePage() {
  const topics = getAllTopics();
  const graph = getGraph();
  const categories = Object.keys(categoryStyle) as TopicCategory[];
  const allPathways = getAllPathways();
  const allProblems = getAllClinicalProblems();
  const calculators = getAllCalculators();

  const featuredProblems = FEATURED_PROBLEM_SLUGS.map((slug) =>
    allProblems.find((p) => p.slug === slug),
  ).filter((p): p is NonNullable<typeof p> => p !== undefined);

  const featuredPathways = FEATURED_PATHWAY_SLUGS.map((slug) =>
    allPathways.find((p) => p.slug === slug),
  ).filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6">
      {/* HERO */}
      <section className="flex max-w-3xl flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">
            Unified ICU Clinical Knowledge System
          </p>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          From Bedside Problem to Clinical Decision & Evidence.
        </h1>
        <p className="text-base leading-relaxed text-ink-muted">
          A coherent critical-care knowledge workflow. Move naturally from patient presentations to deep
          disease understanding, structured decision pathways, point-of-care calculators, landmark trial
          evidence, and active recall assessment across exactly 60 core ICU topics.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/topics"
            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-accent-strong"
          >
            Explore 60 Topics
          </Link>
          <Link
            href="/problems"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Bedside Problems
          </Link>
          <Link
            href="/pathways"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Clinical Pathways
          </Link>
          <Link
            href="/map"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Knowledge Map
          </Link>
        </div>
      </section>

      {/* WHAT ARE YOU TRYING TO DO? — PRIMARY ACTION-ORIENTED ENTRY POINTS */}
      <section className="flex flex-col gap-6 border-t border-border pt-12">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">
            Action-Oriented Navigation
          </p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What are you trying to do?</h2>
          <p className="text-sm text-ink-muted">
            Choose your entry point into the ICU Knowledge System based on your immediate clinical need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTION_PILLARS.map((pillar) => (
            <Link
              key={pillar.step}
              href={pillar.href}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent hover:bg-surface-elevated hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block rounded-md bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent-strong">
                    {pillar.step}
                  </span>
                  <span className="text-[11px] font-medium text-ink-faint">{pillar.badge}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">{pillar.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/60 text-xs font-semibold text-accent flex items-center justify-between">
                <span>{pillar.action}</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CORE CONTENT TYPES ROLE DISTINCTION */}
      <section className="rounded-2xl border border-border/80 bg-surface-muted/40 p-6 sm:p-8">
        <div className="flex flex-col gap-1 border-b border-border/60 pb-4">
          <h2 className="text-lg font-bold text-ink">Understanding the Core Knowledge Types</h2>
          <p className="text-xs text-ink-muted">
            Each resource serves a distinct purpose in your clinical reasoning process.
          </p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Topics</span>
            <p className="text-sm font-semibold text-ink">Comprehensive Disease Reference</p>
            <p className="text-xs text-ink-muted leading-relaxed">
              Understand the underlying pathophysiology, diagnostic criteria, evidence-based management, monitoring targets, complications, and practice red lines.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Clinical Problems</span>
            <p className="text-sm font-semibold text-ink">Bedside Presentation Prioritization</p>
            <p className="text-xs text-ink-muted leading-relaxed">
              Start with the acute patient presentation and determine immediate bedside priorities, life-threats, diagnostic branches, and what changes the pathway.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-strong">Decision Pathways</span>
            <p className="text-sm font-semibold text-ink">Structured Action Protocols</p>
            <p className="text-xs text-ink-muted leading-relaxed">
              Move step-by-step through actionable ICU algorithms: Trigger &rarr; Assess &rarr; Decision &rarr; Intervene &rarr; Reassess &rarr; Escalate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: BEDSIDE CLINICAL PROBLEMS */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">Clinical Problems</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Start with the patient in front of you. Immediate bedside recognition, life-threat assessment, and diagnostic branches.
            </p>
          </div>
          <Link href="/problems" className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
            View all 25 Clinical Problems →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProblems.map((problem) => (
            <Card key={problem.id}>
              <Tag>{problem.category ? problem.category.replace("-", " / ") : "Clinical Problem"}</Tag>
              <Link href={`/problems/${problem.slug}`} className="mt-1.5 block text-sm font-semibold text-ink hover:text-accent">
                {problem.title}
              </Link>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">{problem.oneLiner}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 5: CLINICAL PATHWAYS (BROAD ICU REPRESENTATION) */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">Clinical Decision Pathways</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Step-by-step reasoning from presentation to intervention, reassessment, and rescue escalation.
            </p>
          </div>
          <Link href="/pathways" className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
            View all 27 Decision Pathways →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPathways.map((pathway) => (
            <Card key={pathway.id}>
              <Tag>{pathway.startingProblem}</Tag>
              <Link href={`/pathways/${pathway.slug}`} className="mt-1.5 block text-sm font-semibold text-ink hover:text-accent">
                {pathway.title}
              </Link>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2 leading-relaxed">{pathway.oneLiner}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 6: CLINICAL DOMAINS (60 TOPICS) */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">ICU Knowledge Library (60 Topics)</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">Browse all 60 core ICU topics by organ system.</p>
          </div>
          <Link href="/topics" className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
            Explore all 60 Topics →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const items = topics.filter((topic) => topic.category === category);
            return (
              <Link
                key={category}
                href={`/topics#${category}`}
                className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent hover:shadow-xs"
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${categoryStyle[category].dotClass}`} aria-hidden />
                  <span className="text-sm font-semibold text-ink">{categoryStyle[category].label}</span>
                </span>
                <span className="text-xs text-ink-faint font-medium">
                  {items.length} Topics
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: EVIDENCE HIERARCHY */}
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold text-ink">Clinical Evidence Hierarchy</h2>
          <p className="mt-1 max-w-2xl text-sm text-ink-muted">
            Evidence kept in clear layers: what societies recommend, what trials proved, and what syntheses show.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Guidelines",
              body: "Professional society recommendations tagged current, historical, superseded, or public-review draft.",
              href: "/guidelines",
              label: "Browse 69 Guidelines",
            },
            {
              title: "Landmark Trials",
              body: "Study design, primary results, what was found, and what guidelines recommend based on evidence.",
              href: "/trials",
              label: "Browse 64 Trials",
            },
            {
              title: "Evidence Explorer",
              body: "Systematic reviews, meta-analyses, trials, and guidelines searchable and filterable in one unified registry.",
              href: "/evidence",
              label: "Open 143-Item Explorer",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-strong">
              <p className="text-base font-bold text-ink">{item.title}</p>
              <p className="text-xs leading-relaxed text-ink-muted">{item.body}</p>
              <Link href={item.href} className="mt-2 text-xs font-semibold text-accent hover:text-accent-strong">
                {item.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE KNOWLEDGE MAP */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">The Knowledge Map</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Select any node to see how it connects to the rest of critical care — prerequisites,
              complications, treatment, and supporting evidence.
            </p>
          </div>
          <Link href="/map" className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
            Full screen map →
          </Link>
        </div>
        <div className="hidden rounded-xl border border-border bg-surface p-4 lg:block shadow-xs">
          <RelationshipGraph data={graph} width={840} height={460} />
          <div className="mt-4">
            <GraphLegend />
          </div>
        </div>
        <Link
          href="/map"
          className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong lg:hidden"
        >
          <span className="text-sm font-semibold text-ink">Open the Knowledge Map</span>
          <span className="text-xs text-ink-muted">
            The interactive map works best with more screen space — tap to open the full map, with a
            mobile-friendly list view grouped by system.
          </span>
        </Link>
      </section>

      {/* FORMULA CALCULATORS */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">Bedside ICU Calculators</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              {calculators.length} formula-based calculators computed locally in your browser.
            </p>
          </div>
          <Link href="/calculators" className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
            All {calculators.length} Calculators →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${calculator.id}`}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink-muted transition-colors hover:border-emerald-500 hover:text-ink"
            >
              {calculator.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


