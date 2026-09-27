// components/Home/CaregiverCTA.tsx
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  CalendarClock, 
  MapPin, 
  HeartHandshake 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Award,
    title: "Free HHA Training",
    description: "Get state-certified at zero out-of-pocket cost.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Hours",
    description: "Schedules tailored around your family's routine.",
  },
  {
    icon: MapPin,
    title: "Local Placement",
    description: "Matched with clients directly in your community.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Direct access to care coordinators whenever needed.",
  },
];

export function CaregiverCTA() {
  return (
    <Section id="caregivers" className="py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sand-200/80 bg-gradient-to-b from-white via-sand-50/50 to-sand-100/70 p-8 shadow-2xl shadow-sand-900/5 md:p-14 lg:p-16">
          {/* Ambient background accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-100/60 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand-300/80 bg-white/90 px-3.5 py-1 text-xs font-medium text-sand-800 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span>Paid Family Caregiver Program</span>
              </div>

              <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-sand-950 sm:text-4xl lg:text-5xl">
                You can be paid to care for the ones you love
              </h2>

              <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-sand-600 md:text-lg">
                If you are already caring for an aging parent, spouse, or relative in New York, you may qualify for programs like CDPAP to earn reliable income for the care you already provide.
              </p>

              {/* Benefits Feature Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="group rounded-2xl border border-sand-200/60 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 hover:bg-white hover:shadow-md hover:shadow-sand-900/5"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sand-100 text-sand-800 transition-colors duration-300 group-hover:bg-amber-100 group-hover:text-amber-800">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-sand-900">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-sand-500">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/careers">
                  <Button
                    size="lg"
                    className="group inline-flex items-center gap-2 rounded-full bg-sand-950 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-900/10"
                  >
                    <span>Apply as a Caregiver</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link
                  href="/cdpap-guide"
                  className="px-4 py-2 text-sm font-medium text-sand-700 transition-colors hover:text-sand-950"
                >
                  Learn how CDPAP works &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Modern Visual Composition */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-sand-900/10 bg-sand-200 shadow-2xl shadow-sand-900/10">
                <Image
                  src="/images/caregiver-hero.jpg"
                  alt="A compassionate caregiver helping a senior woman in a bright home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Subtle vignette overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/60 via-transparent to-transparent"
                />

                {/* Floating Metric Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/80 p-4.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-sand-500">
                        Training Program
                      </p>
                      <p className="text-sm font-bold text-sand-900">
                        100% Free Certification
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                      $0 Tuition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}