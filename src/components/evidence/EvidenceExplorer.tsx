"use client";

import { useMemo, useState } from "react";
import type { EvidenceCategory, Guideline, SystematicReview, Topic, Trial, TrialResultDirection, TrialSignificance } from "@/content-types";
import { EmptyState } from "@/components/ui/EmptyState";
import { evidenceCategoryStyle, getGuidelineEvidenceCategory, getTrialEvidenceCategory, resultDirectionLabel, significanceLabel } from "@/lib/evidence-style";
import { TrialCard } from "./TrialCard";
import { GuidelineCard } from "./GuidelineCard";
import { SystematicReviewCard } from "./SystematicReviewCard";

const EVIDENCE_CATEGORIES = Object.keys(evidenceCategoryStyle) as EvidenceCategory[];

interface EvidenceExplorerProps {
  readonly trials: readonly Trial[];
  readonly guidelines: readonly Guideline[];
  readonly reviews: readonly SystematicReview[];
  readonly topics: readonly Topic[];
}

const ALL = "all";

export function EvidenceExplorer({ trials, guidelines, reviews, topics }: EvidenceExplorerProps) {
  const [category, setCategory] = useState<string>(ALL);
  const [topicId, setTopicId] = useState<string>(ALL);
  const [year, setYear] = useState<string>(ALL);
  const [organization, setOrganization] = useState<string>(ALL);
  const [journal, setJournal] = useState<string>(ALL);
  const [significance, setSignificance] = useState<string>(ALL);
  const [resultDirection, setResultDirection] = useState<string>(ALL);

  const completedTopics = topics.filter((topic) => topic.status === "complete");
  const organizations = useMemo(() => [...new Set(guidelines.map((g) => g.society))].sort(), [guidelines]);
  const journals = useMemo(() => [...new Set(trials.map((t) => t.journal))].sort(), [trials]);
  const years = useMemo(
    () => [...new Set([...trials.map((t) => t.year), ...guidelines.map((g) => g.year), ...reviews.map((r) => r.year)])].sort(
      (a, b) => b - a,
    ),
    [trials, guidelines, reviews],
  );

  // Journal/Landmark-Recent/Result-direction only apply to trials, and Organization only applies to
  // guidelines — setting one of those filters correctly excludes the entity types it can't describe,
  // rather than ignoring the filter for them.
  const trialOnlyFiltersActive = journal !== ALL || significance !== ALL || resultDirection !== ALL;
  const organizationFilterActive = organization !== ALL;

  const matchesTopic = (relatedTopicIds: readonly string[]) => topicId === ALL || relatedTopicIds.includes(topicId);
  const matchesYear = (itemYear: number) => year === ALL || itemYear === Number(year);
  const matchesCategory = (itemCategory: EvidenceCategory) => category === ALL || itemCategory === category;

  const filteredTrials = organizationFilterActive
    ? []
    : trials.filter(
        (trial) =>
          matchesTopic(trial.relatedTopicIds) &&
          matchesYear(trial.year) &&
          matchesCategory(getTrialEvidenceCategory(trial)) &&
          (journal === ALL || trial.journal === journal) &&
          (significance === ALL || trial.significance === (significance as TrialSignificance)) &&
          (resultDirection === ALL || trial.resultDirection === (resultDirection as TrialResultDirection)),
      );

  const filteredGuidelines =
    trialOnlyFiltersActive
      ? []
      : guidelines.filter(
          (guideline) =>
            matchesTopic(guideline.relatedTopicIds) &&
            matchesYear(guideline.year) &&
            matchesCategory(getGuidelineEvidenceCategory(guideline)) &&
            (organization === ALL || guideline.society === organization),
        );

  const filteredReviews =
    trialOnlyFiltersActive || organizationFilterActive
      ? []
      : reviews.filter(
          (review) => matchesTopic(review.relatedTopicIds) && matchesYear(review.year) && matchesCategory("meta-analysis"),
        );

  const isEmpty = filteredTrials.length === 0 && filteredGuidelines.length === 0 && filteredReviews.length === 0;

  const selectClass = "rounded-md border border-border bg-surface px-2 py-1.5 text-sm";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClass}>
          <option value={ALL}>All evidence types</option>
          {EVIDENCE_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {evidenceCategoryStyle[c].label}
            </option>
          ))}
        </select>

        <select value={topicId} onChange={(e) => setTopicId(e.target.value)} className={selectClass}>
          <option value={ALL}>All topics</option>
          {completedTopics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)} className={selectClass}>
          <option value={ALL}>All years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select value={organization} onChange={(e) => setOrganization(e.target.value)} className={selectClass}>
          <option value={ALL}>All organizations</option>
          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>

        <select value={journal} onChange={(e) => setJournal(e.target.value)} className={selectClass}>
          <option value={ALL}>All journals</option>
          {journals.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>

        <select value={significance} onChange={(e) => setSignificance(e.target.value)} className={selectClass}>
          <option value={ALL}>Landmark or recent</option>
          <option value="landmark">{significanceLabel.landmark}</option>
          <option value="recent">{significanceLabel.recent}</option>
        </select>

        <select value={resultDirection} onChange={(e) => setResultDirection(e.target.value)} className={selectClass}>
          <option value={ALL}>Any result</option>
          <option value="positive">{resultDirectionLabel.positive}</option>
          <option value="negative-neutral">{resultDirectionLabel["negative-neutral"]}</option>
          <option value="contradictory">{resultDirectionLabel.contradictory}</option>
        </select>
      </div>

      {isEmpty ? (
        <EmptyState title="No evidence matches these filters" description="Try loosening one of the filters above." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredTrials.map((trial) => (
            <TrialCard key={trial.id} trial={trial} compact />
          ))}
          {filteredGuidelines.map((guideline) => (
            <GuidelineCard key={guideline.id} guideline={guideline} compact />
          ))}
          {filteredReviews.map((review) => (
            <SystematicReviewCard key={review.id} review={review} compact />
          ))}
        </div>
      )}
    </div>
  );
}
