import { BadgeCheck, Calendar, Phone, PhoneCall, Heart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { siteConfig } from "@/lib/site-config";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-2.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
        aria-hidden
      />

      {/* Overlay — light cream wash so dark text stays readable */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-50/20 via-sand-50/85 to-sand-50/95"
      />

      <Container className="relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32">
        {/* ── Left: Content ── */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-red-800 shadow-soft backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5" />
            New York&apos;s #1 by Client Choice
          </span>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-sand-900 md:text-5xl lg:text-6xl">
            Compassionate Home Care for{" "}
            <span className="text-red-600">New York Families</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base text-sand-700 md:text-lg">
            Six branches across Queens, Brooklyn, the Bronx, Staten Island,
            Manhattan, and Westchester. We help elderly New Yorkers stay in
            their homes — safe, comfortable, and cared for.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 text-white shadow-card hover:bg-red-700 hover:shadow-lift"
              >
                <Calendar className="h-4 w-4" />
                Check Eligibility
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
              <Button size="lg" variant="outline">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-sand-200 pt-6">
            <Stat label="Branches" value="6" />
            <Stat label="Medicaid" value="Accepted" />
            <Stat label="Training" value="HHA" />
          </dl>
        </div>

        {/* ── Right: Animated Modern Image ── */}
        <div className="relative animate-fade-in-up">
          {/* Rotating conic glow behind the image */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-2xl animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-red-300), var(--color-red-500), var(--color-red-200), var(--color-red-300))",
            }}
          />

          {/* Main image frame */}
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-white/60">
            {/* The image itself — subtle zoom on hover */}
            <Image
              src="/images/homecare_min.webp"
              alt="A Golden Age Home Care caregiver assisting an elderly client at home"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Shimmer sweep */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            {/* Bottom fade for the stats strip */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-950/70 to-transparent"
            />

            {/* Floating stat strip inside the image */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/30 text-white">
                  <Heart className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">
                    500+ Families
                  </p>
                  <p className="text-[10px] text-white/70">Cared for in NY</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/30 text-white">
                  <Shield className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">Licensed</p>
                  <p className="text-[10px] text-white/70">NY State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating "Emergency Response" card */}
          <div className="absolute bottom-28 -left-6 hidden animate-float md:block lg:-left-12">
            <div className="flex items-center gap-3 rounded-2xl border border-sand-200 bg-white/95 p-4 shadow-card backdrop-blur">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                {/* Pulsing ring */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-red-300/60 animate-ping-slow"
                />
                <PhoneCall className="relative h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-sand-900">
                  Emergency Response
                </p>
                <p className="text-xs text-sand-600">We reach you in no time</p>
              </div>
            </div>
          </div>

          {/* Small floating accent badge — top right */}
          <div className="absolute -right-4 -top-4 hidden animate-float-delayed md:block">
            <div className="flex items-center gap-2 rounded-full border border-red-200 bg-white/95 px-3 py-1.5 shadow-card backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-red-600" />
              <span className="text-xs font-semibold text-sand-900">
                Medicaid Accepted
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-sand-500">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-2xl font-semibold text-sand-900">
        {value}
      </dd>
    </div>
  );
}

export default HeroSection;