// app/(main)/blogs/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/section";
import {
    getPostBySlug,
    getAllPostSlugs,
    getRelatedPosts,
} from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import { BackToBlog } from "@/components/blog/BackToBlog";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogCTA } from "@/components/blog/BlogCTA";

/* ─────────────────────────────────────────────
   STATIC PARAMS
   ───────────────────────────────────────────── */

export function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
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
    const post = getPostBySlug(slug);

    if (!post) return { title: "Article Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            type: "article",
            title: `${post.title} | ${siteConfig.name}`,
            description: post.excerpt,
            publishedTime: post.date,
            authors: [post.author],
            images: [{ url: post.image }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    const related = getRelatedPosts(slug, 3);

    return (
        <>
            {/* ═══════════ HERO ═══════════ */}
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blogs" },
                    { label: post.category },
                ]}
                eyebrow={post.category}
                title={post.title}
                description={post.excerpt}
                backgroundImage={post.image}
                showCtas={false}
            />

            {/* ═══════════ ARTICLE BODY ═══════════ */}
            <Section className="bg-white">
                {/* Back link */}
                <div className="mx-auto max-w-7xl">
                    <BackToBlog />
                </div>

                {/* Hero image */}
                <div className="mx-auto mt-8 max-w-7xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 900px"
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Article header (title, meta) */}
                <div className="mx-auto mt-14 max-w-7xl">
                    <ArticleHeader post={post} />
                </div>

                {/* Article body */}
                <div className="mx-auto mt-14 max-w-7xl">
                    <ArticleBody content={post.content} />
                </div>

                {/* Author box */}
                <AuthorBox name={post.author} role={post.authorRole} />
            </Section>

            {/* ═══════════ RELATED POSTS ═══════════ */}
            <RelatedPosts posts={related} />

            {/* ═══════════ FINAL CTA ═══════════ */}
            <BlogCTA />
        </>
    );
}