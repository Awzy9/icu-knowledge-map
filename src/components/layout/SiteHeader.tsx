import Link from "next/link";
import { getSearchIndex } from "@/registry";
import { SearchTrigger } from "@/components/search/SearchTrigger";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { DesktopNavMore } from "./DesktopNavMore";
import { MobileNav } from "./MobileNav";

const primaryLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/map", label: "Knowledge Map" },
  { href: "/medications", label: "Medications" },
  { href: "/topics", label: "Topics" },
  { href: "/problems", label: "Clinical Problems" },
  { href: "/pathways", label: "Pathways" },
];

const secondaryLinks = [
  { href: "/evidence", label: "Evidence Explorer" },
  { href: "/physiology", label: "Physiology" },
  { href: "/trials", label: "Trials" },
  { href: "/guidelines", label: "Guidelines" },
  { href: "/calculators", label: "Calculators" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/questions", label: "Questions" },
  { href: "/progress", label: "Progress" },
  { href: "/sources", label: "Sources" },
];

const allLinks = [...primaryLinks, ...secondaryLinks, { href: "/library", label: "My Library" }, { href: "/about", label: "About" }];

export function SiteHeader() {
  const searchIndex = getSearchIndex();

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-lg font-semibold text-ink">ICU Knowledge Map</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-ink-muted lg:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
          <DesktopNavMore links={secondaryLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <SearchTrigger index={searchIndex} variant="full" />
          </div>
          <div className="lg:hidden">
            <SearchTrigger index={searchIndex} variant="icon" />
          </div>
          <Link
            href="/library"
            className="hidden text-sm text-ink-muted transition-colors hover:text-accent lg:block"
          >
            My Library
          </Link>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <MobileNav links={allLinks} />
        </div>
      </div>
    </header>
  );
}
