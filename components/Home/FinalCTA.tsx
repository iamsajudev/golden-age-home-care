// components/Home/FinalCTA.tsx
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, Mail, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* ── Background image ── */}
      <Image
        src="/images/callto-action.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center -z-20"
        aria-hidden
      />

      {/* ── Deep red gradient overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900/95 via-red-800/85 to-red-950/90"
      />

      {/* ── Radial vignette for depth ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]"
      />

      {/* ── Red glow accents ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-400/20 blur-3xl"
      />

      <Container className="relative py-24 text-center md:py-32">
        {/* ── Badge ── */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Ready to start
        </span>

        {/* ── Headline ── */}
        <h2 className="mx-auto mt-7 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[56px]">
          Let Golden Age{" "}
          <span className="relative inline-block">
            Manage
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-white/80"
            />
          </span>{" "}
          Your Case
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
          We provide excellent care. Your loved ones stay in their homes —
          comfortable and safe. We handle the paperwork and the scheduling.
        </p>

        {/* ── CTAs ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-50 hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.4)]"
          >
            <Calendar className="h-4 w-4" />
            Check Eligibility
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>

        {/* ── Trust chips ── */}
        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {[
            { icon: CheckCircle2, label: "Medicaid accepted" },
            { icon: CheckCircle2, label: "Free consultation" },
            { icon: Mail, label: siteConfig.email },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-white/40 hover:bg-white/15"
            >
              <item.icon className="h-3.5 w-3.5 text-white" />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}