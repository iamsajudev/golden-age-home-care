// components/branches/Branches.tsx
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { branches } from "@/lib/branches-data";
import { BranchCard } from "../branches/BranchCard";

export function Branches() {
  return (
    <>
      {/* ═══════════ BRANCH GRID ═══════════ */}
      <Section id="branches" className="relative overflow-hidden bg-white">
        {/* Ambient blur */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
        />

        <div className="relative">
          <SectionHeading
            eyebrow="Our Locations"
            title="Six Branches Across New York"
            description="Golden Age Home Care operates from six branch offices across the five boroughs and Westchester county. We can reach your emergencies in no time."
          />

          {/* Quick stats strip */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <MapPin className="h-3.5 w-3.5 text-red-600" />
              6 Branches
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <Phone className="h-3.5 w-3.5 text-red-600" />
              Local support in every borough
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <Clock className="h-3.5 w-3.5 text-red-600" />
              Open Mon–Sat
            </span>
          </div>

          {/* Branch cards grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {branches.map((branch) => (
              <BranchCard key={branch.code} branch={branch} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}