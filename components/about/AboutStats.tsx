// components/About/AboutStats.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Users, MapPin, GraduationCap, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Families Served" },
  { icon: MapPin, value: 6, suffix: "", label: "Branch Offices" },
  { icon: GraduationCap, value: 100, suffix: "%", label: "Free HHA Training" },
  { icon: Clock, value: 24, suffix: "/7", label: "Emergency Line" },
];

export function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
      />

      <div className="container-page relative py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
            By the Numbers
          </p>
          <h2 className="mt-4 text-balance text-white font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Trusted Across New York
          </h2>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <li className="flex flex-col items-center gap-3 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
        <Icon className="h-6 w-6 text-white" />
      </span>
      <span
        ref={ref}
        className="block font-serif text-4xl font-semibold text-white"
      >
        {n}
        {suffix}
      </span>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
        {label}
      </p>
    </li>
  );
}