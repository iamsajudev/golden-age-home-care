// components/Service/ServiceImageSection.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services-data";

export function ServiceImageSection({
  data,
}: {
  data: NonNullable<Service["imageSection"]>;
}) {
  const imageFirst = data.imagePosition === "left";

  return (
    <Section className="relative overflow-hidden bg-sand-50">
      {/* Ambient blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-100/40 blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Image column ── */}
        <div
          className={cn(
            "relative",
            imageFirst ? "lg:order-1" : "lg:order-2"
          )}
        >
          {/* Offset panel behind the image */}
          <div
            aria-hidden
            className={cn(
              "absolute hidden h-[88%] w-[88%] rounded-3xl bg-red-100/50 lg:block",
              imageFirst ? "-bottom-6 -right-6" : "-bottom-6 -left-6"
            )}
          />

          {/* Image frame */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200/70">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Bottom gradient */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sand-950/50 to-transparent"
            />
          </div>
        </div>

        {/* ── Text column ── */}
        <div className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              {data.eyebrow}
            </p>
          </div>

          {/* Title */}
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
            {data.title}
          </h2>

          {/* Descriptions */}
          <p className="mt-6 text-pretty text-base leading-relaxed text-sand-600">
            {data.description}
          </p>

          {data.paragraph && (
            <p className="mt-4 text-pretty text-base leading-relaxed text-sand-600">
              {data.paragraph}
            </p>
          )}

          {/* Bullets */}
          {data.bullets && data.bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {data.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-sand-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
            >
              Check Eligibility
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}