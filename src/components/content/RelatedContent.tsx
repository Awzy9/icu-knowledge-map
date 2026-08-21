import React from "react";
import Link from "next/link";

interface RelatedContentProps {
  items: Array<{
    type: string;
    title: string;
    href: string;
    subtitle?: string;
  }>;
}

export function RelatedContent({ items }: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-ink mb-4">Continue Learning</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.slice(0, 6).map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className="group block p-4 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:border-accent/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="flex flex-col h-full justify-between gap-3">
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-canvas text-ink-muted group-hover:bg-accent-soft group-hover:text-accent transition-colors mb-2">
                  {item.type}
                </span>
                <h4 className="text-sm font-medium text-ink group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs text-ink-muted mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View detail
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
