// app/(main)/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { ServiceCtaBanner } from "@/components/Service/ServiceCtaBanner";
import { FaqItem } from "@/components/Service/FaqItem";
import { ServiceCard } from "@/components/Service/ServiceCard";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
    title: "Services",
    description:
        "In-home personal care, health monitoring, companionship, Medicaid coordination, caregiver training, and family-as-caregiver programs across New York.",
};

/* ─────────────────────────────────────────────
   PAGE-LEVEL DATA — only what's NOT in services-data
   ───────────────────────────────────────────── */

const faqs = [
    {
        q: "Do I need Medicaid to receive care?",
        a: "Not necessarily. While Medicaid and NY State benefits cover most of our clients, we also work with private pay and long-term care insurance. Contact us for a free eligibility screening.",
    },
    {
        q: "Can a family member be my caregiver?",
        a: "Yes. Through the CDPAP program, a son-in-law, daughter-in-law, or other close relative can be trained, certified, and paid to care for you.",
    },
    {
        q: "How quickly can care start?",
        a: "Once eligibility is confirmed, we can typically place a caregiver within 3–7 days. Emergency placements may be possible — call us for details.",
    },
];

const howItWorks = [
    {
        step: "01",
        title: "Check Eligibility",
        description:
            "Free screening to see if you qualify for Medicaid or NY State benefits.",
    },
    {
        step: "02",
        title: "Choose Your Caregiver",
        description:
            "Pick a trained family member or select from our vetted caregiver team.",
    },
    {
        step: "03",
        title: "Start Care",
        description: "We handle the paperwork, scheduling, and ongoing support.",
    },
];

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ServicesPage() {
    return (
        <>
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative overflow-hidden text-white">
                <Image
                    src="/images/callto-action.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center -z-20"
                    aria-hidden
                />

                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900/95 via-red-800/85 to-red-950/90"
                />

                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.5)_100%)]"
                />

                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-500/25 blur-3xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
                />

                <Container className="relative py-20 md:py-28">
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-xs font-medium text-white/60"
                    >
                        <Link href="/" className="transition hover:text-white">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-white">Services</span>
                    </nav>

                    <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[60px]">
                        Care You Can{" "}
                        <span className="relative inline-block">
                            Rely On
                            <span
                                aria-hidden
                                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200"
                            />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
                        From personal care to Medicaid coordination, Golden Age Home Care
                        provides the full spectrum of services New York families need — all
                        under one agency.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-50"
                        >
                            <Calendar className="h-4 w-4" />
                            Check Eligibility
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

            {/* ═══════════ SERVICES GRID ═══════════ */}
            <Section className="bg-white" id="services-list">
                <SectionHeading
                    eyebrow="What We Offer"
                    title="Complete Service List"
                    description="Six core services designed to keep your loved ones safe, comfortable, and cared for — in their own home."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={service.slug}
                            icon={service.icon}
                            category={service.category}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            slug={service.slug}
                            index={i}
                        />
                    ))}
                </div>
            </Section>

            {/* ═══════════ HOW IT WORKS ═══════════ */}
            <Section className="bg-sand-50">
                <SectionHeading
                    eyebrow="Getting Started"
                    title="How It Works"
                    description="Three simple steps from eligibility check to a caregiver in your family's home."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {howItWorks.map((item) => (
                        <div
                            key={item.step}
                            className="relative rounded-2xl border border-sand-200 bg-white p-7 shadow-soft"
                        >
                            <span className="font-serif text-4xl font-semibold text-red-100">
                                {item.step}
                            </span>
                            <h3 className="mt-4 font-serif text-xl font-semibold text-sand-900">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-sand-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ═══════════ FAQ ═══════════ */}
            <Section className="bg-white">
                <SectionHeading
                    eyebrow="Common Questions"
                    title="Frequently Asked"
                    description="Straight answers to the questions families ask us most."
                />

                <div className="mx-auto mt-14 max-w-3xl space-y-4">
                    {faqs.map((item) => (
                        <FaqItem key={item.q} {...item} />
                    ))}
                </div>
            </Section>

            {/* ═══════════ CTA ═══════════ */}
            <ServiceCtaBanner />
        </>
    );
}