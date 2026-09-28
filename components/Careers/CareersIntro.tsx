// components/Careers/CareersIntro.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";

const perks = [
    {
        icon: Heart,
        title: "Meaningful Work",
        description:
            "Every shift you change someone's day. This isn't a job — it's a calling.",
    },
    {
        icon: GraduationCap,
        title: "Free HHA Training",
        description:
            "We cover tuition, materials, and certification fees — 100% free.",
    },
    {
        icon: Users,
        title: "Real Support",
        description:
            "A case manager is on call for you, not just for the client.",
    },
    {
        icon: Sparkles,
        title: "Competitive Pay",
        description:
            "Weekly direct deposit, flexible schedules, and healthcare benefits.",
    },
];

export function CareersIntro() {
    return (
        <Section className="relative overflow-hidden bg-white">
            {/* Ambient blur */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left: Content */}
                <div>
                    <div className="flex items-center gap-3">
                        <span aria-hidden className="h-px w-8 bg-red-600" />
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                            Why Golden Age
                        </p>
                    </div>

                    <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl lg:text-[42px]">
                        A Career That Cares Back
                    </h2>

                    <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
                        We hire for heart first. If you&apos;re patient, kind, and reliable
                        — we&apos;ll teach you everything else. Most of our caregivers
                        started with no experience. Today, many have been with us for
                        years.
                    </p>

                    {/* Perks grid */}
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {perks.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="flex gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-serif text-base font-semibold text-sand-900">
                                            {p.title}
                                        </p>
                                        <p className="mt-1 text-xs leading-relaxed text-sand-600">
                                            {p.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <Link
                            href="#openings"
                            className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                        >
                            View Open Positions
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Right: Photo collage */}
                <div className="relative">
                    <div
                        aria-hidden
                        className="absolute -bottom-6 -right-6 hidden h-[88%] w-[88%] rounded-3xl bg-red-100/50 lg:block"
                    />

                    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
                        <Image
                            src="/images/timeline.jpg"
                            alt="Golden Age caregiver at work"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Bottom row */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-sand-200">
                            <Image
                                src="/images/hero-2.jpg"
                                alt="Training session"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-sand-200">
                            <Image
                                src="/images/homecare_min.webp"
                                alt="Caregiver with client"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-sand-200 bg-white px-4 py-3 shadow-card lg:block">
                        <p className="font-serif text-2xl font-semibold text-sand-900">
                            500+
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
                            Caregivers
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}