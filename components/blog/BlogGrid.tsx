// components/Blog/BlogGrid.tsx
"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import {
  blogPosts,
  blogCategories,
  type BlogCategory,
} from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";

const ALL: "All" | BlogCategory = "All";

export function BlogGrid() {
  const [active, setActive] = useState<typeof ALL>(ALL);

  const visible = useMemo(() => {
    if (active === ALL) return blogPosts;
    return blogPosts.filter((p) => p.category === active);
  }, [active]);

  return (
    <Section className="bg-white" id="posts">
      {/* Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FilterPill
          label="All"
          count={blogPosts.length}
          active={active === ALL}
          onClick={() => setActive(ALL)}
        />
        {blogCategories.map((cat) => {
          const count = blogPosts.filter((p) => p.category === cat.key).length;
          if (count === 0) return null;
          return (
            <FilterPill
              key={cat.key}
              label={cat.label}
              count={count}
              active={active === cat.key}
              onClick={() => setActive(cat.key)}
            />
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {visible.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-16 text-center text-sm text-sand-500">
          No articles in this category yet.
        </p>
      )}
    </Section>
  );
}

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300",
        active
          ? "border-red-600 bg-red-600 text-white shadow-card"
          : "border-sand-200 bg-white text-sand-700 hover:border-red-300 hover:text-red-700"
      )}
    >
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
          active ? "bg-white/20 text-white" : "bg-sand-100 text-sand-600"
        )}
      >
        {count}
      </span>
    </button>
  );
}