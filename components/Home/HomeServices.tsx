// components/Home/Services.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Home as HomeIcon,
  Stethoscope,
  Heart,
  ShieldCheck,
  GraduationCap,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   DATA — unchanged
   ───────────────────────────────────────────── */

const services = [
  {
    icon: HomeIcon,
    category: "Personal Care",
    title: "In-Home Personal Care",
    description:
      "Dignified assistance with daily activities — bathing, dressing, mobility, and meal preparation.",
    image: "/images/timeline.jpg",
  },
  {
    icon: Stethoscope,
    category: "Health",
    title: "Health Monitoring",
    description:
      "Routine wellness checks, medication reminders, and coordination with physicians.",
    image: "/images/callto-action.jpg",
  },
  {
    icon: Heart,
    category: "Companionship",
    title: "Companionship",
    description:
      "Warm, consistent companionship that reduces isolation and supports wellbeing.",
    image: "/images/homecare_min.webp",
  },
  {
    icon: ShieldCheck,
    category: "Insurance",
    title: "Medicaid Coordination",
    description:
      "We handle the paperwork with NY State benefits so your family doesn't have to.",
    image: "/images/timeline.jpg",
  },
  {
    icon: GraduationCap,
    category: "Training",
    title: "Caregiver Training",
    description:
      "Become a certified Home Health Aide. We train you and place you with families.",
    image: "/images/callto-action.jpg",
  },
  {
    icon: Users,
    category: "Family",
    title: "Family as Caregiver",
    description:
      "A son-in-law caring for his mother-in-law. Family can be paid to care.",
    image: "/images/homecare_min.webp",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function HomeServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,                 // ← INFINITE
      dragFree: false,
      containScroll: false,       // ← must be false when loop is true
      slidesToScroll: 1,
      duration: 25,
    },
    [
      Autoplay({
        delay: 3500,              // ← 3.5s between slides
        stopOnInteraction: false, // keep going after arrow clicks
        stopOnMouseEnter: true,   // pause while hovering
        stopOnFocusIn: true,      // pause while keyboard-focused
      }),
    ]
  );

  const [progress, setProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setProgress(emblaApi.scrollProgress() * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    // Pause autoplay when tab is hidden, resume when visible
    const onVisibility = () => {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (!autoplay) return;
      if (document.hidden) autoplay.stop();
      else autoplay.play();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onSelect);
    emblaApi.on("reInit", onSelect);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  /* Restart autoplay after manual navigation, so it doesn't fire too soon */
  const handleManualNav = useCallback(
    (action: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      autoplay?.reset();
      action();
    },
    [emblaApi]
  );

  return (
    <Section id="services" className="relative overflow-hidden bg-sand-50">
      {/* Soft ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red-100/40 blur-3xl"
      />

      <div className="relative -mt-20">
        {/* ═══════════ HEADER ROW ═══════════ */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                What We Offer
              </p>
            </div>

            <h2 className="mt-5 text-balance font-serif text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-sand-900 md:text-5xl lg:text-[64px]">
              Complete
              <br />
              <span className="inline-flex items-baseline gap-3">
                Service
                <span className="relative inline-block">
                  List
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-300"
                  />
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
              Skilled caregivers, coordinated benefits, and warm companionship
              — everything your family needs, under one agency.
            </p>
          </div>

          {/* ── Controls ── */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-2.5">
              {/* With loop:true, prev/next are always enabled */}
              <button
                type="button"
                onClick={() => handleManualNav(scrollPrev)}
                aria-label="Previous services"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-sand-300 bg-white text-sand-800 transition-all duration-300 hover:-translate-x-0.5 hover:border-red-400 hover:text-red-600"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleManualNav(scrollNext)}
                aria-label="Next services"
                className="group flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-card transition-all duration-300 hover:translate-x-0.5 hover:bg-red-700 hover:shadow-lift"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="hidden w-48 md:block">
              <div className="h-1 w-full overflow-hidden rounded-full bg-sand-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-[width] duration-300 ease-out"
                  style={{ width: `${Math.max(progress, 6)}%` }}
                />
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
                Auto-play · Hover to pause
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════ EMBLA CAROUSEL ═══════════ */}
        <div className="relative mt-14">
          {/* Edge fades — with loop:true, both edges always show content */}
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
              {services.map((service, i) => (
                <ServiceSlide key={service.title} index={i} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   SLIDE — unchanged from your version
   ───────────────────────────────────────────── */

function ServiceSlide({
  icon: Icon,
  category,
  title,
  description,
  image,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-[85vw] select-none sm:basis-[400px]">
      <article className="group relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand-200 shadow-soft ring-1 ring-sand-200/60 transition-shadow duration-500 group-hover:shadow-lift">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 85vw, 400px"
            priority={index < 2}
            draggable={false}
            className="pointer-events-none object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/85 via-sand-950/20 to-transparent"
          />

          <span className="pointer-events-none absolute right-4 top-4 font-serif text-xs font-semibold tracking-wider text-white/70">
            {String(index + 1).padStart(2, "0")} / 06
          </span>

          <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-sand-950/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            <Icon className="h-3 w-3" />
            {category}
          </span>

          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 p-4 shadow-card backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-lift">
            <span
              aria-hidden
              className="absolute left-4 top-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 group-hover:w-16"
            />

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-serif text-base font-bold uppercase leading-tight tracking-tight text-sand-900 md:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-sand-500 md:text-sm">
                  {description}
                </p>
              </div>

              <Link
                href="/services"
                aria-label={`Learn more about ${title}`}
                draggable={false}
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand-200 text-red-600 transition-all duration-300",
                  "group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"
                )}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}