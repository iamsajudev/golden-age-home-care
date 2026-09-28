// components/Resources/ResourceCard.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/resources-data";

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  const isExternal = resource.href.startsWith("http");

  return (
    <article className="group relative">
      {/* Full-card link */}
      <Link
        href={resource.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={resource.title}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <span className="sr-only">{resource.title}</span>
      </Link>

      {/* Card visual */}
      <div className="pointer-events-none relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:border-red-300 group-hover:shadow-lift">
        {/* Top gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />

        {/* Icon + tag */}
        <div className="relative flex items-start justify-between">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
            <span
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-red-400/40 opacity-0 transition-opacity duration-500 group-hover:animate-ping-slow group-hover:opacity-100"
            />
            <Icon className="relative h-6 w-6" strokeWidth={2} />
          </span>

          <span className="rounded-full border border-sand-200 bg-sand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-sand-600 transition-colors duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-600">
            {resource.tag}
          </span>
        </div>

        {/* Category */}
        <p className="relative mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
          {resource.category}
        </p>

        {/* Title */}
        <h3 className="relative mt-2 font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-[22px]">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-sand-600">
          {resource.description}
        </p>

        {/* CTA row */}
        <div className="relative mt-auto mt-6 flex items-center justify-between border-t border-sand-100 pt-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors duration-300 group-hover:text-red-600">
            {isExternal ? "Open Link" : "View"}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>

        {/* Bottom accent bar */}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500 group-hover:w-full"
        />
      </div>
    </article>
  );
}