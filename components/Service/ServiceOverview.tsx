// components/Service/ServiceOverview.tsx
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { Service } from "@/lib/services-data";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <Section className="bg-white">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: long description + benefits */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Overview
            </p>
          </div>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
            About This Service
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-sand-600">
            {service.longDescription}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="mt-4 font-serif text-base font-semibold text-sand-900">
                  {b.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-sand-600">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: features card + inline CTA */}
        <aside className="lg:col-span-5">
          <div className="rounded-3xl border border-sand-200 bg-sand-50 p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              What&apos;s Included
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-sand-900">
              Service Features
            </h3>

            <ul className="mt-6 space-y-3">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-sand-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-sand-200 pt-6">
              <p className="text-xs text-sand-500">
                Ready to start? Free eligibility check.
              </p>
              <Link
                href="/contact"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
              >
                Check Eligibility
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}