// components/Blog/FeaturedPost.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Star } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="group relative">
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={post.title}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <span className="sr-only">{post.title}</span>
      </Link>

      <div className="pointer-events-none relative grid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-red-300 group-hover:shadow-lift lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-100 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={post.image}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />

          {/* Featured pill */}
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-card">
            <Star className="h-3 w-3 fill-white text-white" />
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          {/* Category */}
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
            {post.category}
          </p>

          {/* Title */}
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-3xl lg:text-4xl">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-5 text-pretty text-sm leading-relaxed text-sand-600 md:text-base">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-sand-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-red-600" />
              {post.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-sand-300" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-red-600" />
              {post.readTime}
            </span>
            <span className="h-1 w-1 rounded-full bg-sand-300" />
            <span>{post.author}</span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Read Article
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}