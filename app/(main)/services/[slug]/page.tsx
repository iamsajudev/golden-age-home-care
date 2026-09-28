// app/(main)/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceOverview } from "@/components/Service/ServiceOverview";
import { ServiceImageSection } from "@/components/Service/ServiceImageSection";
import { ServiceRichText } from "@/components/Service/ServiceRichText";
import { ServiceFaqs } from "@/components/Service/ServiceFaqs";
import { RelatedServices } from "@/components/Service/RelatedServices";
import { ServiceFinalCta } from "@/components/Service/ServiceFinalCta";
import {
    services,
    getServiceBySlug,
    getAllServiceSlugs,
} from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

/* ─────────────────────────────────────────────
   STATIC PARAMS
   ───────────────────────────────────────────── */

export function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) return { title: "Service Not Found" };

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: `${service.title} | ${siteConfig.name}`,
            description: service.description,
            images: [{ url: service.image }],
        },
    };
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) notFound();

    const related = services
        .filter((s) => s.slug !== service.slug)
        .slice(0, 3);

    return (
        <>
            {/* ── Hero ── */}
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: service.shortTitle },
                ]}
                eyebrow={service.category}
                icon={service.icon}
                title={service.title}
                description={service.description}
                backgroundImage={service.image}
            />
            {/* ── Overview + features ── */}
            <ServiceOverview service={service} />
            {/* ── Image + text section (optional) ── */}
            {service.imageSection && (
                <ServiceImageSection data={service.imageSection} />
            )}
            {/* ── Rich text section (optional) ── */}
            {service.richTextSection && (
                <ServiceRichText data={service.richTextSection} />
            )}
            {/* ── FAQ ── */}
            <ServiceFaqs service={service} />
            {/* ── Related services ── */}
            <RelatedServices services={related} />
            {/* ── Final CTA ── */}
            <ServiceFinalCta serviceName={service.shortTitle} />
        </>
    );
}