// components/Blog/RelatedPosts.tsx
import { Section, SectionHeading } from "@/components/ui/section";
import type { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
    if (!posts.length) return null;

    return (
        <Section className="bg-sand-50">
            <SectionHeading
                eyebrow="Keep Reading"
                title="Related Articles"
                description="More guides for NYC families navigating home care."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </Section>
    );
}