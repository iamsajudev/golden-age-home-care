// components/Home/Branches.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BadgeCheck, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function HomeBranches() {
  return (
    <Section className="relative overflow-hidden bg-sand-50">
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
              Our CEO
            </p>
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-sand-900 md:text-4xl lg:text-[42px]">
            Leadership Rooted in Service
          </h2>

          {/* Body */}
          <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            <span className="font-semibold text-sand-900">
              Mr. Shah Nawaz
            </span>{" "}
            founded {siteConfig.name} to give New York families what he wished
            for his own — dependable, dignified home care that treats elders
            like family. His leadership guides every branch we open and every
            caregiver we train.
          </p>

          {/* Quote block */}
          <figure className="mt-8 rounded-2xl border border-amber-200 bg-white/70 p-6 shadow-soft backdrop-blur-sm">
            <Quote
              aria-hidden
              className="h-6 w-6 text-amber-500"
              strokeWidth={2}
            />
            <blockquote className="mt-3 text-pretty text-sm italic leading-relaxed text-sand-700 md:text-base">
              &ldquo;Every elder deserves to age with dignity, in their own
              home, surrounded by people who treat them as family. That
              promise is why we exist.&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-sand-200 pt-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 font-serif text-xs font-bold text-amber-800">
                SN
              </span>
              <div className="leading-tight">
                <p className="font-serif text-sm font-semibold text-sand-900">
                  Shah Nawaz
                </p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-sand-500">
                  Founder &amp; CEO
                </p>
              </div>
            </figcaption>
          </figure>

          {/* Quick facts row */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <BadgeCheck className="h-4 w-4 text-amber-600" />
              Licensed NY Agency
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <MapPin className="h-4 w-4 text-amber-600" />
              {siteConfig.branches.length} Branch Offices
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-amber-600 bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-700 hover:bg-amber-700 hover:shadow-lift"
            >
              More About Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/branches"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sand-600 transition-colors hover:text-amber-700"
            >
              View All Branches
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Right: Photo collage ── */}
        <div className="relative">
          {/* Main photo — president/CEO */}
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-lift ring-1 ring-sand-200">
            <Image
              src="/images/President-CEO-Shah-Nawaz-2.jpg"
              alt="Shah Nawaz, Founder and CEO of Golden Age Home Care"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Bottom gradient for name tag */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-950/70 to-transparent"
            />

            {/* CEO name tag overlay */}
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                Founder &amp; CEO
              </p>
              <p className="mt-0.5 font-serif text-sm font-semibold text-white">
                Shah Nawaz
              </p>
            </div>
          </div>

          {/* Bottom row: two photos */}
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
            <p className="font-serif text-2xl font-semibold text-sand-900">
              {String(siteConfig.branches.length).padStart(2, "0")}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
              Branches
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}