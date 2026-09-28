// components/Blog/ArticleHeader.tsx
import { Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Category */}
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
        {post.category}
      </p>

      {/* Title */}
      <h1 className="mt-5 text-balance font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-sand-900 md:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-sand-600 md:text-lg">
        {post.excerpt}
      </p>

      {/* Meta row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-wider text-sand-500">
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
        <span className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5 text-red-600" />
          {post.author}
        </span>
      </div>
    </div>
  );
}