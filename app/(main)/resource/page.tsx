// app/(main)/resources/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FeaturedResources } from "@/components/Resources/FeaturedResources";
import { ResourceGrid } from "@/components/Resources/ResourceGrid";
import { ResourceHelp } from "@/components/Resources/ResourceHelp";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Guides, forms, and helpful links for New York families navigating home care, Medicaid, CDPAP, and caregiver training.",
};

export default function ResourcesPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Resources" },
                ]}
                eyebrow="Helpful Downloads"
                title="Resources & Guides"
                description="Everything New York families need to understand home care, Medicaid, CDPAP, and caregiver training — in plain language."
                backgroundImage="/images/callto-action.jpg"
                ctaLabel="Talk to Us"
                ctaHref="/contact"
            />

            <FeaturedResources />

            <ResourceGrid />

            <ResourceHelp />
        </>
    );
}