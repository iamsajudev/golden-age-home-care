// app/(main)/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
    Heart,
    ShieldCheck,
    Users,
    GraduationCap,
    Stethoscope,
    Home as HomeIcon,
    CheckCircle2,
    ArrowRight,
    Phone,
    Calendar,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Services",
    description:
        "In-home personal care, health monitoring, companionship, Medicaid coordination, caregiver training, and family-as-caregiver programs across New York.",
};

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const services = [
    {
        icon: HomeIcon,
        category: "Personal Care",
        title: "In-Home Personal Care",
        description:
            "Dignified assistance with daily activities — bathing, dressing, mobility, and meal preparation in the comfort of home.",
        features: [
            "Bathing, grooming & dressing",
            "Mobility & fall prevention",
            "Meal planning & preparation",
            "Light housekeeping & laundry",
        ],
    },
    {
        icon: Stethoscope,
        category: "Health",
        title: "Health Monitoring",
        description:
            "Routine wellness checks, medication reminders, and coordination with physicians and family members.",
        features: [
            "Vital signs & wellness checks",
            "Medication reminders",
            "Physician coordination",
            "Family progress updates",
        ],
    },
    {
        icon: Heart,
        category: "Companionship",
        title: "Companionship",
        description:
            "Warm, consistent companionship that reduces isolation and supports emotional wellbeing.",
        features: [
            "Conversation & social engagement",
            "Games, reading & hobbies",
            "Walks & light outings",
            "Emotional support",
        ],
    },
    {
        icon: ShieldCheck,
        category: "Insurance",
        title: "Medicaid Coordination",
        description:
            "We handle the paperwork. Our team works directly with NY State benefits so your family doesn't have to.",
        features: [
            "Eligibility screening",
            "Application assistance",
            "MLTC coordination",
            "Ongoing benefits support",
        ],
    },
    {
        icon: GraduationCap,
        category: "Training",
        title: "Caregiver Training",
        description:
            "Become a certified Home Health Aide. We provide training and place you with families who need your care.",
        features: [
            "Free HHA certification",
            "Hands-on practical training",
            "Job placement support",
            "Ongoing mentorship",
        ],
    },
    {
        icon: Users,
        category: "Family",
        title: "Family as Caregiver",
        description:
            "A son-in-law caring for his mother-in-law. A daughter-in-law for her father. Family can be paid to care.",
        features: [
            "Family members as paid caregivers",
            "CDPAP program guidance",
            "Same great training & support",
            "Flexible scheduling",
        ],
    },
];

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

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ServicesPage() {
    return (
        <>
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative overflow-hidden text-white">
                {/* ── Background image ── */}
                <Image
                    src="/images/callto-action.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center -z-20"
                    aria-hidden
                />

                {/* ── Red gradient overlay ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-red-600/95 via-red-600/85 to-red-350/90"
                />

                {/* ── Radial vignette for depth ── */}
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.5)_100%)]"
                />

                {/* ── Ambient glows ── */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-500/25 blur-3xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
                />

                <Container className="relative py-20 md:py-28">
                    {/* Breadcrumb */}
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
                        <ServiceCard key={service.title} {...service} index={i} />
                    ))}
                </div>
            </Section>

            {/* ═══════════ HOW IT WORKS (short) ═══════════ */}
            <Section className="bg-sand-50">
                <SectionHeading
                    eyebrow="Getting Started"
                    title="How It Works"
                    description="Three simple steps from eligibility check to a caregiver in your family's home."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {[
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
                            description:
                                "We handle the paperwork, scheduling, and ongoing support.",
                        },
                    ].map((item) => (
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
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:border-red-200 open:bg-white open:shadow-soft"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg font-semibold text-sand-900 transition-colors group-open:text-red-700">
                                {item.q}
                                <span
                                    aria-hidden
                                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand-300 text-red-600 transition-transform duration-300 group-open:rotate-45 group-open:border-red-600 group-open:bg-red-600 group-open:text-white"
                                >
                                    +
                                </span>
                            </summary>
                            <p className="mt-4 text-sm leading-relaxed text-sand-600">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>

            {/* ═══════════ CTA ═══════════ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
                />
                <Container className="relative py-20 text-center md:py-24">
                    <h2 className="mx-auto max-w-2xl text-white text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
                        Not sure which service fits?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-pretty text-white/85 md:text-lg">
                        Call us for a free consultation. We&apos;ll walk through your
                        situation and recommend the right path.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </>
    );
}

/* ─────────────────────────────────────────────
   SERVICE CARD
   ───────────────────────────────────────────── */

function ServiceCard({
    icon: Icon,
    category,
    title,
    description,
    features,
    index,
}: {
    icon: React.ComponentType<{ className?: string }>;
    category: string;
    title: string;
    description: string;
    features: string[];
    index: number;
}) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-lift">
            {/* Top gradient wash */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Corner glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Content */}
            <div className="relative flex flex-1 flex-col">
                {/* Icon + index */}
                <div className="flex items-start justify-between">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                        <span
                            aria-hidden
                            className="absolute inset-0 rounded-2xl bg-red-400/40 opacity-0 transition-opacity duration-500 group-hover:animate-ping-slow group-hover:opacity-100"
                        />
                        <Icon className="relative h-6 w-6" strokeWidth={2} />
                    </span>

                    <span className="font-serif text-xs font-semibold tracking-[0.15em] text-sand-400 transition-colors duration-300 group-hover:text-red-500">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Category */}
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
                    {category}
                </p>

                {/* Title */}
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-[22px]">
                    {title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-sand-600">
                    {description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2.5">
                    {features.map((f) => (
                        <li
                            key={f}
                            className="flex items-start gap-2.5 text-xs text-sand-700"
                        >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto flex items-center justify-between border-t border-sand-100 pt-5 mt-6">
                    <Link
                        href="/contact"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors duration-300 group-hover:text-red-600"
                    >
                        Request Service
                    </Link>
                    <Link
                        href="/contact"
                        aria-label={`Request ${title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"
                    >
                        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>

            {/* Bottom accent bar */}
            <span
                aria-hidden
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500 group-hover:w-full"
            />
        </article>
    );
}