// components/About/AboutIntro.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";

export function AboutIntro() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Left: Content ── */}
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Our Story
            </p>
          </div>

          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl lg:text-[42px]">
            Compassionate Care, Built on Family Values
          </h2>

          <div className="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            <p>
              Golden Age Home Care was founded with a simple belief:{" "}
              <span className="font-semibold text-sand-900">
                every elder deserves to age with dignity, in their own home,
                surrounded by people who treat them as family.
              </span>
            </p>
            <p>
              What began as one small office in Jackson Heights has grown into
              six branches across New York — serving thousands of families
              across Queens, Brooklyn, the Bronx, Staten Island, Manhattan, and
              Westchester.
            </p>
            <p>
              We&apos;re proud to be New York&apos;s leading Bangladeshi-owned
              home care agency — but more importantly, we&apos;re proud of the
              trust our families place in us every day.
            </p>
          </div>

          {/* Quick facts */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <Award className="h-4 w-4 text-red-600" />
              Licensed NY Agency
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-700">
              <MapPin className="h-4 w-4 text-red-600" />
              6 Branch Offices
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Right: Photo collage ── */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 hidden h-[88%] w-[88%] rounded-3xl bg-red-100/50 lg:block"
          />

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
            <Image
              src="/images/President-CEO-Shah-Nawaz-2.jpg"
              alt="Shah Nawaz, Founder and CEO of Golden Age Home Care"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom row */}
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
        </div>
      </div>
    </Section>
  );
}