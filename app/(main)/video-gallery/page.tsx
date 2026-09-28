// app/(main)/video-gallery/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { VideoGrid } from "@/components/Video/VideoGrid";
import { VideoCTA } from "@/components/Video/VideoCTA";

export const metadata: Metadata = {
    title: "Video Gallery",
    description:
        "Watch videos from Golden Age Home Care — testimonials, caregiving tips, HHA training, and community events.",
};

export default function VideoGalleryPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Video Gallery" },
                ]}
                eyebrow="Watch"
                title="Video Gallery"
                description="Testimonials, caregiver stories, training highlights, and more — all in one place."
                backgroundImage="/images/homecare_min.webp"
                ctaLabel="Contact Us"
                ctaHref="/contact"
                showPhone={false}
            />
            <VideoGrid />
            <VideoCTA />
        </>
    );
}