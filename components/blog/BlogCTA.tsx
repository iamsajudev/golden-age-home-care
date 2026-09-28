// components/Blog/BlogCTA.tsx
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function BlogCTA() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
            <div
                aria-hidden
                className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
            />

            <Container className="relative py-20 text-center md:py-24">
                <h2 className="mx-auto text-white max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
                    Have questions? Let&apos;s talk.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-white/85 md:text-lg">
                    Reading is a great start — but a conversation with our team is even
                    better. Free consultation, no obligation.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-50"
                    >
                        <Mail className="h-4 w-4" />
                        Contact Us
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20"
                    >
                        <Phone className="h-4 w-4" />
                        {siteConfig.phone}
                    </a>
                </div>
            </Container>
        </section>
    );
}