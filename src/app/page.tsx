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

const WORKFLOW_PILLARS = [
  {
    step: "SOLVE",
    title: "Bedside Clinical Problems",
    description: "Start with the patient presentation (e.g. sudden hypoxemia, acute hypercapnia, falling urine output) and determine immediate priorities.",
    badge: "25 Bedside Matrices",
    href: "/problems",
    action: "Solve Bedside Problems",
  },
  {
    step: "DECIDE",
    title: "Clinical Decision Pathways",
    description: "Move through structured clinical decision sequences: Trigger → Assess → Decision → Intervene → Reassess → Escalate.",
    badge: "27 Decision Protocols",
    href: "/pathways",
    action: "Follow Decision Pathways",
  },
  {
    step: "LEARN",
    title: "Comprehensive Topic Library",
    description: "Understand disease pathophysiology, diagnostic criteria, evidence-based management protocols, monitoring targets, and practice red lines.",
    badge: "60 Core Topics",
    href: "/topics",
    action: "Explore 60 Topics",
  },
  {
    step: "EVALUATE",
    title: "Clinical Evidence Hierarchy",
    description: "Explore what societies recommend (Guidelines), what trials proved (Landmark Trials), and what the totality of evidence shows (Systematic Reviews).",
    badge: "143 Evidence Records",
    href: "/evidence",
    action: "Examine Evidence",
  },
  {
    step: "TEST",
    title: "Active Recall & Reasoning",
    description: "Reinforce clinical recall with 391 spaced-repetition flashcards and test decision-making with 208 board-style scenario questions.",
    badge: "391 Cards · 208 Questions",
    href: "/flashcards",
    action: "Test Clinical Knowledge",
  },
];

export default function HomePage() {
  const topics = getAllTopics();
  const graph = getGraph();
  const categories = Object.keys(categoryStyle) as TopicCategory[];
  const pathways = getAllPathways().slice(0, 4);
  const problems = getAllClinicalProblems().slice(0, 4);
  const calculators = getAllCalculators();

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
            href="/map"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Knowledge Map
          </Link>
        </div>
      </section>

      {/* WHAT DO YOU WANT TO DO? — 5 CLINICAL WORKFLOW PILLARS */}
      <section className="flex flex-col gap-6 border-t border-border pt-12">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">
            Clinical Workflow Navigation
          </p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What do you want to do?</h2>
          <p className="text-sm text-ink-muted">
            Choose your entry point into the ICU Knowledge System based on your immediate clinical or educational need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW_PILLARS.map((pillar) => (
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

          {/* Direct Calculator Utility Card */}
          <Link
            href="/calculators"
            className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-all hover:border-emerald-500 hover:bg-surface-elevated hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  CALCULATE
                </span>
                <span className="text-[11px] font-medium text-ink-faint">18 Formula Calculators</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Point-of-Care Calculators
              </h3>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                Compute driving pressure, PaO2/FiO2 ratio, static compliance, anion gap, delta ratio, and FeNa directly in browser.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-border/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
              <span>Open ICU Calculators</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CORE CONTENT TYPES EXPLANATION */}
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

      {/* INTERACTIVE KNOWLEDGE MAP */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">The Knowledge Map</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Select any node to see why it connects to the rest of critical care — prerequisites,
              complications, treatment, and the evidence behind it.
            </p>
          </div>
          <Link href="/map" className="shrink-0 text-sm text-accent hover:text-accent-strong">
            Full screen →
          </Link>
        </div>
        <div className="hidden rounded-md border border-border bg-surface p-4 lg:block">
          <RelationshipGraph data={graph} width={840} height={460} />
          <div className="mt-4">
            <GraphLegend />
          </div>
        </div>
        <Link
          href="/map"
          className="flex flex-col gap-1 rounded-md border border-border bg-surface p-5 transition-colors hover:border-border-strong lg:hidden"
        >
          <span className="text-sm font-semibold text-ink">Open the Knowledge Map</span>
          <span className="text-sm text-ink-muted">
            The interactive map works best with more screen space — tap to open the full map, with a
            mobile-friendly list view grouped by system.
          </span>
        </Link>
      </section>

      {/* CLINICAL DOMAINS (60 TOPICS) */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Clinical Domains</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">Browse all 60 core ICU topics by organ system.</p>
          </div>
          <Link href="/topics" className="shrink-0 text-sm text-accent hover:text-accent-strong">
            All 60 topics →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const items = topics.filter((topic) => topic.category === category);
            const complete = items.filter((topic) => topic.status === "complete").length;
            return (
              <Link
                key={category}
                href={`/topics#${category}`}
                className="flex flex-col gap-1.5 rounded-md border border-border bg-surface p-4 transition-colors hover:border-border-strong"
              >
                <span className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${categoryStyle[category].dotClass}`} aria-hidden />
                  <span className="text-sm font-semibold text-ink">{categoryStyle[category].label}</span>
                </span>
                <span className="text-xs text-ink-faint">
                  {items.length} topic{items.length === 1 ? "" : "s"}
                  {complete > 0 && ` · ${complete} verified complete`}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CLINICAL PATHWAYS PREVIEW */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Clinical Decision Pathways</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Step-by-step reasoning from presentation to intervention and rescue escalation.
            </p>
          </div>
          <Link href="/pathways" className="shrink-0 text-sm text-accent hover:text-accent-strong">
            All 27 pathways →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {pathways.map((pathway) => (
            <Card key={pathway.id}>
              <Tag>{pathway.startingProblem}</Tag>
              <Link href={`/pathways/${pathway.slug}`} className="mt-1.5 block text-sm font-semibold text-ink hover:text-accent">
                {pathway.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{pathway.oneLiner}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* BEDSIDE CLINICAL PROBLEMS PREVIEW */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Bedside Clinical Problems</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              Immediate bedside recognition, life-threat assessment, and diagnostic branches.
            </p>
          </div>
          <Link href="/problems" className="shrink-0 text-sm text-accent hover:text-accent-strong">
            All 25 clinical problems →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.id}>
              <Tag>{problem.category ? problem.category.replace("-", " / ") : "Clinical Problem"}</Tag>
              <Link href={`/problems/${problem.slug}`} className="mt-1.5 block text-sm font-semibold text-ink hover:text-accent">
                {problem.title}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{problem.oneLiner}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* EVIDENCE HIERARCHY */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-ink">Evidence, Kept in Layers</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Guidelines",
              body: "Professional society recommendations tagged current, historical, superseded, or public-review draft.",
              href: "/guidelines",
              label: "Browse 69 guidelines",
            },
            {
              title: "Landmark Trials",
              body: "Study design, primary results, what was found, and what guidelines recommend based on evidence.",
              href: "/trials",
              label: "Browse 64 trials",
            },
            {
              title: "Evidence Explorer",
              body: "Systematic reviews, meta-analyses, trials, and guidelines searchable and filterable in one registry.",
              href: "/evidence",
              label: "Open 143-item explorer",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-t border-border pt-4">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
              <Link href={item.href} className="mt-1 text-sm text-accent hover:text-accent-strong">
                {item.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULA CALCULATORS */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg font-semibold text-ink">Bedside ICU Calculators</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">
              {calculators.length} formula-based calculators computed locally in your browser.
            </p>
          </div>
          <Link href="/calculators" className="shrink-0 text-sm text-accent hover:text-accent-strong">
            All {calculators.length} calculators →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {calculators.map((calculator) => (
            <Link
              key={calculator.id}
              href={`/calculators/${calculator.id}`}
              className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
            >
              {calculator.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

