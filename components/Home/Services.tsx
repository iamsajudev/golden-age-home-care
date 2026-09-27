// components/Home/Services.tsx
import Link from "next/link";
import {
    Heart,
    ShieldCheck,
    Users,
    GraduationCap,
    Stethoscope,
    Home as HomeIcon,
    ArrowUpRight,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const services = [
    {
        icon: HomeIcon,
        category: "Personal Care",
        title: "In-Home Personal Care",
        description:
            "Dignified assistance with daily activities — bathing, dressing, mobility, and meal preparation.",
    },
    {
        icon: Stethoscope,
        category: "Health",
        title: "Health Monitoring",
        description:
            "Routine wellness checks, medication reminders, and coordination with physicians and family.",
    },
    {
        icon: Heart,
        category: "Companionship",
        title: "Companionship",
        description:
            "Warm, consistent companionship that reduces isolation and supports emotional wellbeing.",
    },
    {
        icon: ShieldCheck,
        category: "Insurance",
        title: "Medicaid Coordination",
        description:
            "We handle the paperwork with NY State benefits so your family doesn't have to.",
    },
    {
        icon: GraduationCap,
        category: "Training",
        title: "Caregiver Training",
        description:
            "Become a certified Home Health Aide. We train you and place you with families who need care.",
    },
    {
        icon: Users,
        category: "Family",
        title: "Family as Caregiver",
        description:
            "A son-in-law caring for his mother-in-law. A daughter-in-law for her father. Family can be paid to care.",
    },
];

const TOTAL = String(services.length).padStart(2, "0");

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function Services() {
    return (
        <Section className="relative overflow-hidden bg-white" id="services">
            {/* Ambient blurs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-sand-100/70 blur-3xl"
            />

            <div className="relative">
                <SectionHeading
                    eyebrow="What We Offer"
                    title="Care You Can Rely On"
                    description="Skilled caregivers, coordinated benefits, and warm companionship — everything your family needs under one agency."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {services.map((service, i) => (
                        <ServiceCard
                            key={service.title}
                            index={i}
                            total={TOTAL}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

/* ─────────────────────────────────────────────
   CARD
   ───────────────────────────────────────────── */

function ServiceCard({
    icon: Icon,
    category,
    title,
    description,
    index,
    total,
}: {
    icon: React.ComponentType<{ className?: string }>;
    category: string;
    title: string;
    description: string;
    index: number;
    total: string;
}) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-lift">
            {/* ── Top gradient wash (appears on hover) ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* ── Corner glow ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* ── Content (above the wash) ── */}
            <div className="relative flex flex-1 flex-col">
                {/* Top row: icon tile + index */}
                <div className="flex items-start justify-between">
                    {/* Icon tile */}
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-[-6deg]">
                        {/* Pulse ring — appears on hover */}
                        <span
                            aria-hidden
                            className="absolute inset-0 rounded-2xl bg-red-400/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-ping-slow"
                        />
                        <Icon className="relative h-6 w-6" strokeWidth={2} />
                    </span>

                    {/* Index counter */}
                    <span className="font-serif text-xs font-semibold tracking-[0.15em] text-sand-400 transition-colors duration-300 group-hover:text-red-500">
                        {String(index + 1).padStart(2, "0")} / {total}
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-600">
                    {description}
                </p>

                {/* CTA row */}
                <div className="mt-7 flex items-center justify-between border-t border-sand-100 pt-5 transition-colors duration-300 group-hover:border-red-100">
                    <Link
                        href="/services"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors duration-300 group-hover:text-red-600"
                    >
                        Learn More
                    </Link>

                    <Link
                        href="/services"
                        aria-label={`Learn more about ${title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"
                    >
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>

            {/* ── Bottom accent bar ── */}
            <span
                aria-hidden
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500 group-hover:w-full"
            />
        </article>
    );
}