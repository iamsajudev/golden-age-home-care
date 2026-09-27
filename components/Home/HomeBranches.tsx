// components/Home/Branches.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function HomeBranches() {
  return (
    <Section className="relative overflow-hidden bg-sand-50 -mb-20 md:-mb-28">
      {/* Ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Left: Content ── */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-amber-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
              Our Locations
            </p>
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-sand-900 md:text-4xl lg:text-[42px]">
            Learn More About Our Branch Locations
          </h2>

          {/* Body */}
          <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            {siteConfig.name} operates from eight branch offices across Queens,
            Brooklyn, the Bronx, Staten Island, Manhattan, and Westchester
            county. Get in touch with our local representatives.
          </p>

          {/* Branch list — two columns */}
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {siteConfig.branches.map((branch) => (
              <li
                key={branch.name}
                className="flex items-center gap-2 text-sm text-sand-700"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                {branch.name}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-amber-600 bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:border-amber-700 hover:bg-amber-700 hover:shadow-lift"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Right: Photo collage ── */}
        <div className="relative">
          {/* Main photo — president */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-lift ring-1 ring-sand-200">
            <Image
              src="/images/President-CEO-Shah-Nawaz-2.jpg"
              alt="Golden Age Home Care branch manager"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom row: two storefront photos */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-sand-200">
              <Image
                src="/images/golden-home-lady.jpg"
                alt="Golden Age Home Care storefront"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-sand-200">
              <Image
                src="/images/golden-home-office.jpg"
                alt="Golden Age Home Care office interior"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Floating badge — top-right of the collage */}
          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-sand-200 bg-white px-4 py-3 shadow-card lg:block">
            <p className="font-serif text-2xl font-semibold text-sand-900">08</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
              Branches
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}