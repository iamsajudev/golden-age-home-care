// components/Blog/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative">
      {/* Full-card link */}
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={post.title}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <span className="sr-only">{post.title}</span>
      </Link>

      {/* Card visual */}
      <div className="pointer-events-none relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:border-red-300 group-hover:shadow-lift">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-100">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />

          {/* Top gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/50 via-transparent to-transparent"
          />

          {/* Category chip */}
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-sand-950/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Meta */}
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-sand-500">
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
          <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-[22px]">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-600 line-clamp-3">
            {post.excerpt}
          </p>

          {/* CTA row */}
          <div className="mt-6 flex items-center justify-between border-t border-sand-100 pt-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors duration-300 group-hover:text-red-600">
              Read Article
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500 group-hover:w-full"
        />
      </div>
    </article>
  );
}