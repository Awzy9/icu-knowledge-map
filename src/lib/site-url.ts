/**
 * Base URL for absolute links (sitemap, canonical/OG tags). Set
 * NEXT_PUBLIC_SITE_URL once this is deployed to a real domain; falls back to
 * localhost so sitemap/robots generation doesn't break in dev.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
