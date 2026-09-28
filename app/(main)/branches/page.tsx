// app/(main)/branches/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Branches } from "@/components/Home/Branches";
import MainBrance from "@/components/branches/MainBrance";

export const metadata: Metadata = {
    title: "Office Branches",
    description:
        "Golden Age Home Care operates from six branch offices across Queens, Brooklyn, the Bronx, Staten Island, Manhattan, and Westchester. Find your local office.",
};

export default function BranchesPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Office Branches" },
                ]}
                eyebrow="Our Locations"
                icon={undefined}
                title="Six Branches Across New York"
                description="We're local. From Queens to Westchester, our branch offices put a real person within reach of every family we serve."
                backgroundImage="/images/branches-hero.jpg"
                ctaLabel="Call Us"
                ctaHref="/contact"
            />

            <Branches />
            <MainBrance />
        </>
    );
}