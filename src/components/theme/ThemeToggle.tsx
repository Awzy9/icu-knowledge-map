"use client";

import { useTheme, type Theme } from "./ThemeProvider";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { readonly className?: string }) {
  const { theme, setTheme } = useTheme();

  const options: ReadonlyArray<{
    value: Theme;
    label: string;
    icon: React.ReactNode;
  }> = [
    {
      value: "light",
      label: "Light theme",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
        </svg>
      ),
    },
    {
      value: "system",
      label: "System theme",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.5a5.5 5.5 0 0 1 0 11V2.5z" />
        </svg>
      ),
    },
    {
      value: "dark",
      label: "Dark theme",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M13.5 9.5a5.5 5.5 0 1 1-7-7 4.5 4.5 0 0 0 7 7z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="group"
      aria-label="Change theme"
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface-sunken p-0.5",
        className,
      )}
    >
      {options.map((opt) => {
        const isActive = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            aria-pressed={isActive}
            aria-label={opt.label}
            title={opt.label}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-sm text-ink-muted transition-all",
              isActive
                ? "bg-surface font-medium text-accent shadow-xs"
                : "hover:text-ink",
            )}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
}
