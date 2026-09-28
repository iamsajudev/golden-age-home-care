// components/Careers/CareersTraining.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";

const steps = [
  {
    step: "01",
    title: "Apply Online",
    description: "Fill out a short form. We'll call you within 2 business days.",
  },
  {
    step: "02",
    title: "Get Screened",
    description:
      "Background check, health screening, and a conversation with our team.",
  },
  {
    step: "03",
    title: "Free Training",
    description:
      "3–4 weeks of classroom + hands-on training. 100% covered by us.",
  },
  {
    step: "04",
    title: "Start Working",
    description:
      "Get certified, meet your family, and start earning — usually within 2 weeks.",
  },
];

export function CareersTraining() {
  return (
    <Section className="relative overflow-hidden bg-sand-50">
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Image */}
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 hidden h-[88%] w-[88%] rounded-3xl bg-red-100/50 lg:block"
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
            <Image
              src="/images/hero-2.jpg"
              alt="HHA training session at Golden Age Home Care"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-red-600" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              Free HHA Training
            </p>
          </div>

          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl lg:text-[42px]">
            No Experience? We&apos;ll Train You.
          </h2>

          <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            Our HHA certification program is completely free. We cover tuition,
            materials, and certification fees. In exchange, you commit to
            working with the families we place you with.
          </p>

          <ul className="mt-7 space-y-4">
            {steps.map((s) => (
              <li key={s.step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-serif text-xs font-semibold text-white shadow-card">
                  {s.step}
                </span>
                <div>
                  <p className="font-serif text-base font-semibold text-sand-900">
                    {s.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-sand-600">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/careers/apply"
              className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
            >
              Start Training
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-500">
              <CheckCircle2 className="h-4 w-4 text-red-600" />
              100% Free · No Obligation
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}