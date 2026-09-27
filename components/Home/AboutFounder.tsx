// components/Home/AboutFounder.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";
import { Section } from "@/components/ui/section";

export function AboutFounder() {
    return (
        <Section className="relative overflow-hidden bg-white">
            {/* Faint contour/map pattern background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, var(--color-sand-400) 1px, transparent 1px), radial-gradient(circle at 70% 60%, var(--color-sand-400) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                }}
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* ── Left: Founder photo (offset frame) ── */}
                <div className="relative">
                    {/* Background offset panel */}
                    <div
                        aria-hidden
                        className="absolute -bottom-6 -left-6 hidden h-[90%] w-[90%] rounded-3xl bg-sand-100 lg:block"
                    />

                    {/* Photo frame */}
                    <div className="relative aspect-[5/6] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
                        <Image
                            src="/images/founder.jpg"
                            alt="Founder of Golden Age Home Care"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                            priority
                        />

                        {/* Subtle bottom gradient */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-950/60 to-transparent"
                        />

                        {/* Founder name tag — bottom-left */}
                        <div className="absolute bottom-4 left-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                                Founder
                            </p>
                            <p className="mt-0.5 font-serif text-base font-semibold text-white">
                                Mr. Shah Nawaz
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Right: Bio content ── */}
                <div>
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <span aria-hidden className="h-px w-8 bg-amber-600" />
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
                            Meet Our Founder
                        </p>
                    </div>

                    {/* Headline */}
                    <h2 className="mt-5 text-balance font-serif text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-sand-900 md:text-4xl lg:text-[42px]">
                        Let Golden Age Home Care Manage Your Case
                    </h2>

                    {/* Body copy */}
                    <div className="mt-6 space-y-4 text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
                        <p>
                            So you can flexibly earn more. We provide excellent care to our
                            clients. They remain in their homes — comfortable and safe.
                            Golden Age Home Care is the leading Bangladeshi home health care
                            provider in New York.
                        </p>
                        <p>
                            Reputed businessman{" "}
                            <span className="font-semibold text-sand-900">
                                Mr. Shah Nawaz
                            </span>{" "}
                            runs this elderly home care and caregiver training facility with a
                            commitment to dignity, culture, and community.
                        </p>
                    </div>

                    {/* Signature row */}
                    <div className="mt-7 flex items-center gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                            <Crown className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
                                Founded & Led By
                            </p>
                            <p className="mt-0.5 font-serif text-base font-semibold text-sand-900">
                                Shah Nawaz
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 rounded-xl border-2 border-amber-600 bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:border-amber-700 hover:bg-amber-700 hover:shadow-lift"
                        >
                            Read More
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}