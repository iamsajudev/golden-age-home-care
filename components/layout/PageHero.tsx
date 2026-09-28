// components/layout/PageHero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

type Crumb = { label: string; href?: string };

export function PageHero({
    breadcrumbs,
    eyebrow,
    icon: Icon,
    title,
    description,
    backgroundImage = "/images/callto-action.jpg",
    showCtas = true,
    ctaLabel = "Check Eligibility",
    ctaHref = "/contact",
    showPhone = true,
}: {
    breadcrumbs: Crumb[];
    eyebrow?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    backgroundImage?: string;
    showCtas?: boolean;
    ctaLabel?: string;
    ctaHref?: string;
    showPhone?: boolean;
}) {
    return (
        <section className="relative overflow-hidden text-white">
            {/* Background image */}
            <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-20"
                aria-hidden
            />

            {/* Red gradient overlay */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900/95 via-red-800/85 to-red-950/90"
            />

            {/* Vignette */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.5)_100%)]"
            />

            {/* Ambient glows */}
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
                    className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/60"
                >
                    {breadcrumbs.map((crumb, i) => (
                        <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                            {i > 0 && <span>/</span>}
                            {crumb.href ? (
                                <Link
                                    href={crumb.href}
                                    className="transition hover:text-white"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-white">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>

                {/* Eyebrow + icon */}
                {(eyebrow || Icon) && (
                    <div className="mt-8 flex items-center gap-4">
                        {Icon && (
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                                <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                            </span>
                        )}
                        {eyebrow && (
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                                {eyebrow}
                            </p>
                        )}
                    </div>
                )}

                {/* Title */}
                <h1 className="mt-6 max-w-3xl text-white text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[60px]">
                    {title}
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
                    {description}
                </p>

                {/* CTAs */}
                {showCtas && (
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href={ctaHref}
                            className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-50"
                        >
                            <Calendar className="h-4 w-4" />
                            {ctaLabel}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {showPhone && (
                            <a
                                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                                className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20"
                            >
                                <Phone className="h-4 w-4" />
                                {siteConfig.phone}
                            </a>
                        )}
                    </div>
                )}
            </Container>
        </section>
    );
}