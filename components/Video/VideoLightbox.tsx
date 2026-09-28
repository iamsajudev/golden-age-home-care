// components/Video/VideoLightbox.tsx
"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  type Video,
  getVideoEmbedUrl,
} from "@/lib/videos-data";
import { cn } from "@/lib/utils";

export function VideoLightbox({
  videos,
  index,
  onClose,
  onIndexChange,
}: {
  videos: Video[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const video = videos[index];

  const next = () => onIndexChange((index + 1) % videos.length);
  const prev = () =>
    onIndexChange((index - 1 + videos.length) % videos.length);

  /* Keyboard controls */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  /* Lock body scroll */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-sand-950/95 backdrop-blur-md"
    >
      {/* Top bar */}
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(videos.length).padStart(2, "0")}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Prev */}
      {videos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous video"
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:left-6 md:h-14 md:w-14"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Next */}
      {videos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next video"
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:right-6 md:h-14 md:w-14"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Player + caption */}
      <div
        className="relative mx-auto w-full max-w-5xl px-4 md:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lift">
          {video.type === "mp4" ? (
            <video
              src={video.id}
              controls
              autoPlay
              className="h-full w-full"
            />
          ) : (
            <iframe
              key={video.id}
              src={getVideoEmbedUrl(video)}
              title={video.title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Caption */}
        <div className="mt-5 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">
            {video.category}
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold text-white md:text-2xl">
            {video.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}