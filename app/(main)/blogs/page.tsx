// app/(main)/blogs/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { blogPosts } from "@/lib/blog-data";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogCTA } from "@/components/blog/BlogCTA";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Guides, tips, and updates for New York families navigating home care, Medicaid, CDPAP, and caregiver careers.",
};

export default function BlogsPage() {
    const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

    return (
        <>
            <PageHero
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
                eyebrow="From Our Blog"
                title="Guides, Tips & Updates"
                description="Practical information for NYC families navigating home care, Medicaid benefits, and caregiver careers."
                backgroundImage="/images/callto-action.jpg"
                ctaLabel="Contact Us"
                ctaHref="/contact"
                showPhone={false}
            />

            {/* Featured post */}
            <section className="bg-sand-50 py-20 md:py-24">
                <div className="container-page">
                    <div className="flex items-center gap-3">
                        <span aria-hidden className="h-px w-8 bg-red-600" />
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                            Featured Article
                        </p>
                    </div>

                    <div className="mt-10">
                        <FeaturedPost post={featured} />
                    </div>
                </div>
            </section>

            {/* Grid with filters */}
            <BlogGrid />

            {/* CTA */}
            <BlogCTA />
        </>
    );
}