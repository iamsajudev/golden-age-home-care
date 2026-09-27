// components/Home/TrustBar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
    BadgeCheck,
    MapPin,
    GraduationCap,
    Stethoscope,
    Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const trustBadges = [
    { icon: BadgeCheck, label: "Medicaid Accepted" },
    { icon: MapPin, value: 6, suffix: "", label: "NYC Branches" },
    { icon: GraduationCap, value: 100, suffix: "%", label: "Free HHA Training" },
    { icon: Stethoscope, value: 24, suffix: "/7", label: "Skilled Care" },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function TrustBar() {
    return (
        <section className="relative overflow-hidden text-white">
            {/* ── Fixed background image ── */}
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/callto-action.jpg')" }}
            />

            {/* ── Red overlay (gradient for depth) ── */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-br from-red-700/85 via-red-600/75 to-red-800/85"
            />

            {/* ── Soft radial highlight (keeps center readable) ── */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)]"
            />

            {/* ── Animated shine sweep ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />

            <Container className="relative">
                <div className="flex flex-col items-center py-14 text-center md:py-16">
                    {/* ── Badge ── */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        Trusted by New York Families
                    </span>

                    {/* ── Title ── */}
                    <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                        Care You Can Count On
                    </h2>

                    {/* ── Subtitle ── */}
                    <p className="mt-4 max-w-2xl text-pretty text-sm text-white/85 md:text-base">
                        Licensed, compassionate, and available across all five boroughs
                        and Westchester. Here&rsquo;s what sets Golden Age apart.
                    </p>

                    {/* Divider */}
                    <div
                        aria-hidden
                        className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />

                    {/* ── Counters ── */}
                    <ul className="mt-10 flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6">
                        {trustBadges.map((badge) => (
                            <li
                                key={badge.label}
                                className="flex items-center gap-3 text-left text-sm"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm">
                                    <badge.icon className="h-5 w-5 text-white" />
                                </span>

                                <span className="flex flex-col leading-tight">
                                    {badge.value !== undefined ? (
                                        <>
                                            <CountUp
                                                end={badge.value}
                                                suffix={badge.suffix}
                                                className="font-serif text-2xl font-semibold text-white"
                                            />
                                            <span className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/75">
                                                {badge.label}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="font-serif text-lg font-semibold text-white">
                                            {badge.label}
                                        </span>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}

/* ─────────────────────────────────────────────
   COUNT UP — animates when the bar enters the viewport
   ───────────────────────────────────────────── */

function CountUp({
    end,
    suffix = "",
    duration = 1400,
    className,
}: {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let frame: number;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));

            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [started, end, duration]);

    return (
        <span ref={ref} className={className}>
            {value}
            {suffix}
        </span>
    );
}