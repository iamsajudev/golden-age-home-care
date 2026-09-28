// components/Video/VideoGrid.tsx
"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import {
  videos,
  videoCategories,
  type VideoCategory,
} from "@/lib/videos-data";
import { VideoCard } from "./VideoCard";
import { VideoLightbox } from "./VideoLightbox";

const ALL: "All" | VideoCategory = "All";

export function VideoGrid() {
  const [active, setActive] = useState<typeof ALL>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(() => {
    if (active === ALL) return videos;
    return videos.filter((v) => v.category === active);
  }, [active]);

  return (
    <>
      <Section className="bg-white" id="videos">
        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <FilterPill
            label="All"
            count={videos.length}
            active={active === ALL}
            onClick={() => setActive(ALL)}
          />
          {videoCategories.map((cat) => {
            const count = videos.filter((v) => v.category === cat.key).length;
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
          {visible.map((video) => {
            const globalIndex = videos.findIndex((v) => v === video);
            return (
              <VideoCard
                key={video.title}
                video={video}
                onClick={() => setOpenIndex(globalIndex)}
              />
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-sm text-sand-500">
            No videos in this category yet.
          </p>
        )}
      </Section>

      {/* Lightbox */}
      {openIndex !== null && (
        <VideoLightbox
          videos={videos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
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