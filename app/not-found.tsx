// app/not-found.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight, Phone, Search, Compass } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    robots: { index: false, follow: false },
};

/* Popular destinations to help lost users */
const quickLinks = [
    { href: "/services", label: "Our Services", icon: Compass },
    { href: "/blogs", label: "Blog & Guides", icon: Search },
    { href: "/contact", label: "Contact Us", icon: Phone },
];

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sand-50 px-5 py-20">
            {/* Ambient glows */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-red-100/50 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-100/50 blur-[120px]"
            />

            {/* Subtle grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative mx-auto w-full max-w-2xl text-center">
                {/* ── Big 404 with red gradient ── */}
                <div className="relative inline-block">
                    <p
                        aria-hidden
                        className="select-none bg-gradient-to-br from-red-500 via-red-600 to-red-800 bg-clip-text font-serif text-[120px] font-bold leading-none tracking-tight text-transparent md:text-[180px]"
                    >
                        404
                    </p>

                    {/* Floating label over the "0" */}
                    <span className="absolute -right-2 top-2 rotate-6 rounded-full border border-red-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 shadow-card md:top-6">
                        Not Found
                    </span>
                </div>

                {/* ── Heading ── */}
                <h1 className="mt-8 text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
                    This page has moved on to better things
                </h1>

                {/* ── Subtext ── */}
                <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
                    The link may be broken, or the page may have been moved. Let&apos;s
                    get you back on track.
                </p>

                {/* ── Primary CTA ── */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                    >
                        <Home className="h-4 w-4" />
                        Back to Home
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-3 rounded-xl border-2 border-sand-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-sand-700 transition-all duration-300 hover:border-red-400 hover:text-red-700"
                    >
                        <Phone className="h-4 w-4" />
                        Call Us
                    </a>
                </div>

                {/* ── Divider ── */}
                <div className="mx-auto mt-14 max-w-md">
                    <div className="flex items-center gap-3">
                        <span className="h-px flex-1 bg-sand-200" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sand-400">
                            Or try these
                        </span>
                        <span className="h-px flex-1 bg-sand-200" />
                    </div>
                </div>

                {/* ── Quick links ── */}
                <ul className="mx-auto mt-8 grid max-w-lg gap-3 sm:grid-cols-3">
                    {quickLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group flex flex-col items-center gap-3 rounded-2xl border border-sand-200 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lift"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-sand-700 transition-colors duration-300 group-hover:text-red-700">
                                        {link.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* ── Help hint ── */}
                <p className="mt-10 text-xs text-sand-500">
                    Still lost? Email us at{" "}
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium text-red-600 hover:text-red-700"
                    >
                        {siteConfig.email}
                    </a>
                </p>
            </div>
        </div>
    );
}