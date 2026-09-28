// components/About/AboutFounder.tsx
import Image from "next/image";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";

export function AboutFounder() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 hidden h-[88%] w-[88%] rounded-3xl bg-amber-100/60 lg:block"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
            <Image
              src="/images/President-CEO-Shah-Nawaz-2.jpg"
              alt="Shah Nawaz, Founder and CEO"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-950/70 to-transparent"
            />

            <div className="absolute bottom-4 left-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                Founder &amp; CEO
              </p>
              <p className="mt-0.5 font-serif text-base font-semibold text-white">
                Shah Nawaz
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Meet Our Founder
            </p>
          </div>

          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
            A Personal Mission to Serve
          </h2>

          <div className="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            <p>
              Shah Nawaz founded Golden Age Home Care after years of watching
              New York families struggle to find reliable, compassionate care
              for their aging parents.
            </p>
            <p>
              He built the agency around three promises: that caregivers would
              be trained to the highest standard, that families would always
              have a real person to call, and that elders would never be treated
              as numbers.
            </p>
          </div>

          {/* Quote */}
          <figure className="mt-8 rounded-2xl border border-amber-200 bg-sand-50 p-6">
            <Quote className="h-6 w-6 text-red-500" strokeWidth={2} />
            <blockquote className="mt-3 text-pretty text-sm italic leading-relaxed text-sand-700 md:text-base">
              &ldquo;Every elder deserves to age with dignity, in their own
              home, surrounded by people who treat them as family. That
              promise is why we exist.&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-sand-200 pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-serif text-xs font-bold text-red-800">
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
        </div>
      </div>
    </Section>
  );
}