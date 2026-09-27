// components/Home/Blogs.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const posts = [
    {
        category: "Medicaid",
        title: "Understanding Medicaid & NY State Home Care Benefits",
        excerpt:
            "A plain-language guide to eligibility, enrollment, and what home care services are covered in New York.",
        image: "/images/timeline.jpg",
        date: "Jan 12, 2025",
        readTime: "6 min read",
        featured: true,
    },
    {
        category: "Caregiving",
        title: "5 Signs Your Parent May Need In-Home Care",
        excerpt:
            "The subtle indicators families often miss — and how to respond with compassion.",
        image: "/images/timeline.jpg",
        date: "Jan 06, 2025",
        readTime: "4 min read",
    },
    {
        category: "Careers",
        title: "How to Become a Certified HHA in New York",
        excerpt:
            "Step-by-step: training requirements, cost, timeline, and placement with agencies like ours.",
        image: "/images/timeline.jpg",
        date: "Dec 28, 2024",
        readTime: "5 min read",
    },
];

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function Blogs() {
    const [featured, ...rest] = posts;

    return (
        <Section id="blog" className="relative overflow-hidden bg-sand-50">
            {/* Ambient blur */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
            />

            <div className="relative">
                {/* ═══════════ HEADER ROW ═══════════ */}
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3">
                            <span aria-hidden className="h-px w-8 bg-red-600" />
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                                From Our Blog
                            </p>
                        </div>

                        <h2 className="mt-5 text-balance font-serif text-4xl font-semibold uppercase leading-[0.98] tracking-[-0.02em] text-sand-900 md:text-5xl lg:text-[56px]">
                            Guides, Tips &amp;{" "}
                            <span className="relative inline-block">
                                Updates
                                <span
                                    aria-hidden
                                    className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-300"
                                />
                            </span>
                        </h2>

                        <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
                            Practical information for NYC families navigating home care,
                            Medicaid benefits, and caregiver careers.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-3 rounded-xl border-2 border-sand-900 bg-sand-900 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-600 hover:shadow-lift"
                    >
                        View All Posts
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* ═══════════ GRID ═══════════ */}
                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {/* Featured post — spans 2 rows on desktop */}
                    <FeaturedCard post={featured} />

                    {/* Rest of the posts */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
                        {rest.map((post) => (
                            <CompactCard key={post.title} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

/* ─────────────────────────────────────────────
   FEATURED CARD
   ───────────────────────────────────────────── */

function FeaturedCard({
    post,
}: {
    post: {
        category: string;
        title: string;
        excerpt: string;
        image: string;
        date: string;
        readTime: string;
    };
}) {
    return (
        <Link
            href="/blog"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift lg:col-span-2"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-200">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {/* Gradient for the category chip */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/60 via-transparent to-transparent"
                />

                {/* Category chip */}
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-sand-950/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {post.category}
                </span>

                {/* Featured pill */}
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-card">
                    Featured
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-7 md:p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-sand-500">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-red-600" />
                        {post.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-sand-300" />
                    <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-red-600" />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-3xl">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-600 md:text-base">
                    {post.excerpt}
                </p>

                {/* CTA */}
                <div className="mt-7 flex items-center justify-between border-t border-sand-100 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                        Read Article
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-red-600 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                </div>
            </div>
        </Link>
    );
}

/* ─────────────────────────────────────────────
   COMPACT CARD
   ───────────────────────────────────────────── */

function CompactCard({
    post,
}: {
    post: {
        category: string;
        title: string;
        excerpt: string;
        image: string;
        date: string;
        readTime: string;
    };
}) {
    return (
        <Link
            href="/blog"
            className="group relative flex gap-4 overflow-hidden rounded-2xl border border-sand-200 bg-white p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-red-200 hover:shadow-lift sm:flex-col sm:p-0 lg:flex-row lg:p-4"
        >
            {/* Thumbnail */}
            <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl bg-sand-200 sm:aspect-[16/10] sm:w-full lg:aspect-square lg:w-24">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 50vw, 100px"
                    className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col">
                {/* Category */}
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                    {post.category}
                </p>

                {/* Title */}
                <h3 className="mt-1.5 line-clamp-2 font-serif text-base font-semibold leading-snug text-sand-900 transition-colors duration-300 group-hover:text-red-700">
                    {post.title}
                </h3>

                {/* Meta */}
                <div className="mt-auto flex items-center gap-3 pt-3 text-[10px] font-semibold uppercase tracking-wider text-sand-500">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-sand-300" />
                    <span>{post.readTime}</span>
                </div>
            </div>
        </Link>
    );
}