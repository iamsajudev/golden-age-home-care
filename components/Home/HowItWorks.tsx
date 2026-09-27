// components/Home/HowItWorks.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Banknote,
  Users,
  GraduationCap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const steps = [
  {
    step: "01",
    icon: Banknote,
    eyebrow: "Eligibility",
    title: "Your Medicaid or NY State Benefit Card",
    description:
      "You may be eligible if you have Medicaid, live in New York, and need help with day-to-day activities.",
    image: "/images/timeline.jpg",
  },
  {
    step: "02",
    icon: Users,
    eyebrow: "Choose Caregiver",
    title: "Pick a Family Member or Choose Your Caregiver",
    description:
      "A son-in-law for his mother-in-law. A daughter-in-law for her father. Family can be paid to care.",
    image: "/images/homecare_min.webp",
  },
  {
    step: "03",
    icon: GraduationCap,
    eyebrow: "Get Certified",
    title: "Get Trained & Serve Others",
    description:
      "Get certified with us and become an HHA. We train you and connect you with families who need care.",
    image: "/images/hero-2.jpg",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden bg-sand-50">
      {/* Soft ambient blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-sand-200/60 blur-3xl"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Insurance Simplified"
          title="How Does It Work?"
          description="Three simple steps from eligibility to a caregiver in your family's home."
        />

        {/* ── Steps grid with connector arrows ── */}
        <div className="relative mt-16">
          <ol className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
            {steps.map((item, i) => (
              <li key={item.step} className="relative">
                <StepCard {...item} />

                {/* Connector arrow between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-6 top-1/2 z-10 hidden -translate-y-1/2 md:flex lg:-right-8"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 shadow-card">
                      <ChevronRight className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 flex justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-red-600 text-white shadow-card hover:bg-red-700 hover:shadow-lift"
            >
              Check My Eligibility
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   STEP CARD
   ───────────────────────────────────────────── */

function StepCard({
  step,
  icon: Icon,
  eyebrow,
  title,
  description,
  image,
}: {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group relative flex h-full flex-col">
      {/* ── Image with floating number badge ── */}
      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200/70">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
          />

          {/* Top gradient overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/70 via-sand-950/10 to-transparent"
          />

          {/* Eyebrow pill top-left */}
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            {eyebrow}
          </span>

          {/* Glass strip bottom — icon + step title */}
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-md">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
              <Icon className="h-4.5 w-4.5" />
            </span>
            <span className="truncate text-xs font-semibold uppercase tracking-wider text-white/90">
              Step {step}
            </span>
          </div>
        </div>

        {/* ── Big floating number — overlapping the image ── */}
        <span
          aria-hidden
          className="absolute -top-5 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 font-serif text-xl font-semibold text-white shadow-lift ring-4 ring-sand-50 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
        >
          {step}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors group-hover:text-red-700">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-600">
          {description}
        </p>

        {/* Accent line */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-red-200 via-sand-200 to-transparent transition-all duration-500 group-hover:from-red-400 group-hover:via-red-200" />
      </div>
    </article>
  );
}