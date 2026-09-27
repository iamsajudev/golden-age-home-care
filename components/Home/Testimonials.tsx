// components/Home/Testimonials.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "Golden Age Home Care made it possible for us to provide quality in-home care for our mom and dad. Trustworthy, skilled and reliable caretakers. Our experience allows me to highly recommend them.",
    author: "Client Family",
    relation: "Family caregiver",
    initials: "CF",
    rating: 5,
  },
  {
    quote:
      "Golden Age Home has taken care of my aunt and my mother, both in their 90's. The aides are very caring and have become family. They continue to care for my 96-year-old mother who has Alzheimer's with patience and kindness.",
    author: "Long-term Client Family",
    relation: "Family of two clients",
    initials: "LC",
    rating: 5,
  },
  {
    quote:
      "Working for Golden Age Home Care is a pleasure. Like no other agency, the big boss makes sure her employees and clients get the best treatment possible. At Golden Age you will always be a priority.",
    author: "Caregiver",
    relation: "HHA team member",
    initials: "CG",
    rating: 5,
  },
];

const TOTAL = String(testimonials.length).padStart(2, "0");

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function Testimonials() {
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
        delay: 5000,
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
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
    };
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
    <Section id="testimonials" className="relative overflow-hidden bg-white">
      {/* Ambient blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ HEADER ROW ═══════════ */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow with line */}
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-amber-600" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
                Our Clients Say
              </p>
            </div>

            {/* Editorial headline */}
            <h2 className="mt-5 text-balance font-serif text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-sand-900 md:text-5xl lg:text-[56px]">
              Families &amp; Caregivers
              <br />
              <span className="relative inline-block">
                Trust Us
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200"
                />
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
              Real words from the families we serve and the caregivers on our
              team — honest experiences from across New York.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sand-300 bg-white text-sand-800 transition-all duration-300 hover:-translate-x-0.5 hover:border-amber-400 hover:text-amber-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-card transition-all duration-300 hover:translate-x-0.5 hover:bg-amber-600 hover:shadow-lift"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ═══════════ EMBLA CAROUSEL ═══════════ */}
        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y [-webkit-tap-highlight-color:transparent]">
            {testimonials.map((t, i) => (
              <TestimonialSlide key={i} {...t} />
            ))}
          </div>
        </div>

        {/* ═══════════ DOT INDICATORS ═══════════ */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={selectedIndex === i}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                selectedIndex === i
                  ? "w-10 bg-amber-500"
                  : "w-2 bg-sand-300 hover:bg-sand-400"
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   SLIDE
   ───────────────────────────────────────────── */

function TestimonialSlide({
  quote,
  author,
  relation,
  initials,
  rating,
}: {
  quote: string;
  author: string;
  relation: string;
  initials: string;
  rating: number;
}) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full px-3 md:basis-1/2 md:px-4 lg:basis-1/3">
      <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-lift md:p-8">
        {/* Top amber accent line — grows on hover */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 transition-all duration-500 group-hover:w-full"
        />

        {/* Decorative large quote mark — background */}
        <Quote
          aria-hidden
          className="absolute -right-2 -top-4 h-24 w-24 text-amber-100 transition-colors duration-500 group-hover:text-amber-200/80"
          strokeWidth={1}
        />

        {/* ── Rating stars ── */}
        <div className="relative flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-sand-300"
              )}
            />
          ))}
        </div>

        {/* ── Quote ── */}
        <blockquote className="relative mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-sand-700 md:text-base">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* ── Divider ── */}
        <div
          aria-hidden
          className="my-6 h-px w-full bg-gradient-to-r from-amber-200 via-sand-200 to-transparent"
        />

        {/* ── Author ── */}
        <figcaption className="flex items-center gap-3.5">
          {/* Avatar initial */}
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 font-serif text-sm font-bold text-amber-800 ring-1 ring-amber-300/50 transition-transform duration-500 group-hover:scale-105">
            {initials}
          </span>

          <div className="min-w-0 leading-tight">
            <p className="font-serif text-base font-semibold text-sand-900">
              {author}
            </p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-sand-500">
              {relation}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}