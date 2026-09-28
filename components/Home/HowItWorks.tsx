// components/Home/HowItWorks.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  Users,
  GraduationCap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   DATA — unchanged
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
  {
    step: "04",
    icon: Heart,
    eyebrow: "Compassionate Care",
    title: "Receive Personalized In-Home Care",
    description:
      "Your caregiver arrives at your home — with a personalized plan built around your needs, routine, and preferences.",
    image: "/images/timeline.jpg",
  },
  {
    step: "05",
    icon: ShieldCheck,
    eyebrow: "Ongoing Support",
    title: "Health Monitoring & Family Updates",
    description:
      "We track wellness, coordinate with doctors, and keep family informed with regular progress reports.",
    image: "/images/homecare_min.webp",
  },
  {
    step: "06",
    icon: Stethoscope,
    eyebrow: "Peace of Mind",
    title: "Comfort, Safety & Independence",
    description:
      "Your loved one stays in their own home — comfortable, safe, and surrounded by people who care.",
    image: "/images/hero-2.jpg",
  },
];

const TOTAL = String(steps.length).padStart(2, "0");

/* ─────────────────────────────────────────────
   COMPONENT — unchanged except padding
   ───────────────────────────────────────────── */

export function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      containScroll: false,
      slidesToScroll: 1,
      duration: 25,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const onVisibility = () => {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (!autoplay) return;
      if (document.hidden) autoplay.stop();
      else autoplay.play();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.reset();
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.reset();
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (i: number) => {
      emblaApi?.plugins()?.autoplay?.reset();
      emblaApi?.scrollTo(i);
    },
    [emblaApi]
  );

  return (
    <Section
      id="how-it-works"
      className="relative overflow-hidden bg-sand-50 py-24 md:py-32"
    >
      {/* Ambient blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-sand-200/60 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ HEADER ROW ═══════════ */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                Insurance Simplified
              </p>
            </div>

            <h2 className="mt-5 text-balance font-serif text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-sand-900 md:text-5xl lg:text-[56px]">
              How Does It{" "}
              <span className="relative inline-block">
                Work?
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-300"
                />
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
              Six simple steps from eligibility to ongoing care — a clear path
              to the support your family needs.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous step"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sand-300 bg-white text-sand-800 transition-all duration-300 hover:-translate-x-0.5 hover:border-red-400 hover:text-red-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next step"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-card transition-all duration-300 hover:translate-x-0.5 hover:bg-red-700 hover:shadow-lift"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ═══════════ EMBLA CAROUSEL ═══════════ */}
        <div className="relative mt-16">
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-sand-50 to-transparent md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-sand-50 to-transparent md:block"
          />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-5 [-webkit-tap-highlight-color:transparent]">
              {steps.map((item, i) => (
                <StepSlide key={item.step} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ DOTS + CTA ═══════════ */}
        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to step ${i + 1}`}
                aria-current={selectedIndex === i}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  selectedIndex === i
                    ? "w-10 bg-red-600"
                    : "w-2 bg-sand-300 hover:bg-sand-400"
                )}
              />
            ))}
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
          >
            Check My Eligibility
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   SLIDE — now taller
   ───────────────────────────────────────────── */

function StepSlide({
  step,
  icon: Icon,
  eyebrow,
  title,
  description,
  image,
  index,
}: {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-[85vw] select-none sm:basis-[420px] lg:basis-1/3 py-8">
      <article className="group relative flex h-full flex-col">
        {/* Image — now 3:4 portrait (taller) */}
        <div className="relative">
          <div className="relative aspect-[4/4] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200/70">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 33vw"
              className="pointer-events-none object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
            />

            {/* Gradient overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/80 via-sand-950/20 to-transparent"
            />

            {/* Eyebrow pill */}
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              {eyebrow}
            </span>

            {/* Glass strip — pinned to bottom of image */}
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="truncate text-xs font-semibold uppercase tracking-wider text-white/90">
                Step {step} / {TOTAL}
              </span>
            </div>
          </div>

          {/* Floating number badge */}
          <span
            aria-hidden
            className="absolute -top-5 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 font-serif text-2xl font-semibold text-white shadow-lift ring-4 ring-sand-50 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
          >
            {step}
          </span>
        </div>

        {/* Content — more vertical padding */}
        <div className="mt-8 flex flex-1 flex-col">
          <h3 className="font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors group-hover:text-red-700 md:text-2xl">
            {title}
          </h3>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-sand-600 md:text-base">
            {description}
          </p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-red-200 via-sand-200 to-transparent transition-all duration-500 group-hover:from-red-400 group-hover:via-red-200" />
        </div>
      </article>
    </div>
  );
}