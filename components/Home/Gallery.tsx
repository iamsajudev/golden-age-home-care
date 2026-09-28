// components/Home/Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/section";
import { Lightbox } from "@/components/ui/lightbox";

const galleryItems = [
  {
    tag: "Care Routine",
    headline: "Home Health Care",
    subtext: "Earn money while caring for your elderly parents and loved ones at home.",
    image: "/images/gallery-1.jpg",
    featured: true,
  },
  {
    tag: "Patient Comfort",
    headline: "Patient's Needs First",
    subtext: "Delivering thoughtful comfort tailored to every patient's daily routine.",
    image: "/images/gallery-2.jpg",
  },
  {
    tag: "Assistance",
    headline: "Easy Sign-Up Process",
    subtext: "Straightforward onboarding support to get care started right away.",
    image: "/images/gallery-3.jpg",
  },
  {
    tag: "Credentials",
    headline: "Licensed Agency",
    subtext: "Affiliated with major Managed Long Term Care (MLTC) insurance providers.",
    image: "/images/gallery-1.jpg",
  },
  {
    tag: "Lifestyle",
    headline: "Safe, Social & Supportive",
    subtext: "Fostering joy, social enrichment, and daily companionship.",
    image: "/images/gallery-2.jpg",
  },
];

const TOTAL_PHOTOS = 8;

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (i: number) => {
    setActiveIndex(i);
    setOpen(true);
  };    

  return (
    <>
      <Section id="gallery" className="relative overflow-hidden bg-sand-50/60 pb-24 pt-0 -mt-20">
        <div className="relative mx-auto max-w-7xl px-4 ">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white/80 px-3.5 py-1 text-xs font-medium tracking-wide text-sand-800 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Life at {siteConfig.name}
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-sand-950 sm:text-4xl lg:text-5xl">
                Moments of genuine care & companionship
              </h2>

              <p className="mt-4 text-balance text-sm leading-relaxed text-sand-600 sm:text-base">
                A quiet look into how our licensed aides support families across New York every day.
              </p>
            </div>

            {/* Desktop View All Link */}
            <div className="hidden md:flex md:flex-col md:items-end">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-sand-900 transition-colors hover:text-amber-700"
              >
                <span>Browse Full Archive</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand-200/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-sand-900 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Dynamic Grid */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <GalleryCard
                key={i}
                item={item}
                index={i}
                onClick={() => openAt(i)}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 flex flex-col items-center gap-3 md:hidden">
            <Link
              href="/gallery"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sand-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sand-800"
            >
              Browse Full Archive
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="text-xs text-sand-400">
              Showing {galleryItems.length} of {TOTAL_PHOTOS} photos
            </p>
          </div>
        </div>
      </Section>

      {open && (
        <Lightbox
          items={galleryItems.map((g) => ({
            src: g.image,
            alt: g.headline,
            headline: g.headline,
            subtext: g.subtext,
          }))}
          index={activeIndex}
          onClose={() => setOpen(false)}
          onIndexChange={setActiveIndex}
        />
      )}
    </>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View photo: ${item.headline}`}
      className={`group relative min-h-[340px] w-full cursor-pointer overflow-hidden rounded-3xl bg-sand-100 p-6 text-left ring-1 ring-sand-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-sand-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:min-h-[380px] ${
        item.featured ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Background Image */}
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Layered Gradient for contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/85 via-sand-950/25 to-transparent transition-opacity duration-300 group-hover:from-sand-950/90"
      />

      {/* Top Floating Badges */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
          {item.tag}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-80 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-sand-950 group-hover:opacity-100">
          <Plus className="h-4 w-4" />
        </span>
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-10 mt-auto flex h-full flex-col justify-end pt-28">
        <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <h3 className="font-serif text-xl font-medium tracking-tight text-white md:text-2xl">
            {item.headline}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-sand-200/80 md:text-sm">
            {item.subtext}
          </p>
        </div>
      </div>
    </button>
  );
}