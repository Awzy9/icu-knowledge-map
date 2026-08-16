import type { MetadataRoute } from "next";
import {
  getAllCalculatorIds,
  getAllClinicalProblemSlugs,
  getAllGuidelineIds,
  getAllPathwaySlugs,
  getAllPhysiologySlugs,
  getAllSystematicReviewIds,
  getAllTopicSlugs,
  getAllTrialIds,
  getTopicSlugsWithFlashcards,
  getTopicSlugsWithQuestions,
} from "@/registry";
import { SITE_URL } from "@/lib/site-url";

const STATIC_ROUTES = [
  "",
  "/about",
  "/calculators",
  "/evidence",
  "/flashcards",
  "/guidelines",
  "/library",
  "/map",
  "/pathways",
  "/physiology",
  "/problems",
  "/progress",
  "/questions",
  "/sources",
  "/topics",
  "/trials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({ url: `${SITE_URL}${path}` }));

  const dynamicGroups: ReadonlyArray<readonly [string, readonly string[]]> = [
    ["/topics/", getAllTopicSlugs()],
    ["/trials/", getAllTrialIds()],
    ["/guidelines/", getAllGuidelineIds()],
    ["/evidence/", getAllSystematicReviewIds()],
    ["/calculators/", getAllCalculatorIds()],
    ["/pathways/", getAllPathwaySlugs()],
    ["/physiology/", getAllPhysiologySlugs()],
    ["/problems/", getAllClinicalProblemSlugs()],
    ["/flashcards/", getTopicSlugsWithFlashcards()],
    ["/questions/", getTopicSlugsWithQuestions()],
  ];

  for (const [prefix, ids] of dynamicGroups) {
    for (const id of ids) entries.push({ url: `${SITE_URL}${prefix}${id}` });
  }

  return entries;
}
