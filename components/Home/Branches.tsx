// components/Home/Branches.tsx
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function Branches() {
  return (
    <Section id="branches" className="relative overflow-hidden bg-sand-50 -mb-20 md:-mb-28">
      {/* Ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ HEADER ROW ═══════════ */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                Our Locations
              </p>
            </div>

            {/* Headline */}
            <h2 className="mt-5 text-balance font-serif text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-sand-900 md:text-5xl lg:text-[56px]">
              Six Branches Across{" "}
              <span className="relative inline-block">
                New York
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-300"
                />
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
              Golden Age Home Care operates from six branch offices. We reach
              our clients&apos; emergencies in no time — fast, local, and
              personal.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
          >
            <Phone className="h-4 w-4" />
            Talk to a Local Rep
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ═══════════ BRANCH GRID ═══════════ */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.branches.map((branch, i) => (
            <BranchCard key={branch.name} index={i} {...branch} />
          ))}
        </div>

        {/* ═══════════ FOOT NOTE ═══════════ */}
        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-sand-500">
          Serving all 5 boroughs &amp; Westchester county
        </p>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   CARD
   ───────────────────────────────────────────── */

function BranchCard({
  name,
  region,
  index,
}: {
  name: string;
  region: string;
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-lift">
      {/* Top accent line */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-300 transition-all duration-500 group-hover:w-full"
      />

      {/* Corner index number */}
      <span className="pointer-events-none absolute right-5 top-5 font-serif text-2xl font-semibold text-sand-100 transition-colors duration-500 group-hover:text-red-100">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start gap-4">
        {/* Icon tile */}
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
          <span
            aria-hidden
            className="absolute inset-0 rounded-xl bg-red-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-ping-slow"
          />
          <MapPin className="relative h-5 w-5" strokeWidth={2.25} />
        </span>

        {/* Text */}
        <div className="min-w-0 pt-1">
          <p className="font-serif text-lg font-semibold leading-tight text-sand-900 transition-colors duration-300 group-hover:text-red-700">
            {name}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-sand-500">
            {region}
          </p>
        </div>
      </div>

      {/* Bottom marker */}
      <div className="mt-5 flex items-center gap-2 border-t border-sand-100 pt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-sand-500 transition-colors duration-300 group-hover:text-red-600">
        <span className="h-1 w-1 rounded-full bg-red-500" />
        Local support available
      </div>
    </div>
  );
}