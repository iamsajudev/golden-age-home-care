// components/Resources/FeaturedResources.tsx
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { resources } from "@/lib/resources-data";

export function FeaturedResources() {
  const featured = resources.filter((r) => r.featured).slice(0, 3);

  if (!featured.length) return null;

  return (
    <Section className="relative overflow-hidden bg-sand-50">
      {/* Ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/40 blur-3xl"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-red-600" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
            Most Requested
          </p>
        </div>

        <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-sand-900 md:text-4xl">
          Start With These
        </h2>

        {/* Featured cards — a tighter, horizontal layout */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((r) => {
            const Icon = r.icon;
            const isExternal = r.href.startsWith("http");
            return (
              <Link
                key={r.title}
                href={r.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    Featured
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-sand-900 transition-colors group-hover:text-red-700">
                  {r.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-600">
                  {r.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-sand-100 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors group-hover:text-red-600">
                  Open
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}