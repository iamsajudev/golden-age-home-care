// components/Service/RelatedServices.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Service } from "@/lib/services-data";

export function RelatedServices({ services }: { services: Service[] }) {
  if (!services.length) return null;

  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="More Services"
        title="You Might Also Need"
        description="Other services New York families pair with this one."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((r) => {
          const Icon = r.icon;
          return (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-lift"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:bg-red-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
                  {r.category}
                </p>

                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-sand-900 transition-colors group-hover:text-red-700">
                  {r.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-sand-600">
                  {r.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors group-hover:text-red-600">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}