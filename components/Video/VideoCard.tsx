// components/Video/VideoCard.tsx
import Image from "next/image";
import { Play } from "lucide-react";
import { type Video, getVideoThumbnail } from "@/lib/videos-data";

export function VideoCard({
  video,
  onClick,
}: {
  video: Video;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Play: ${video.title}`}
      className="group relative cursor-pointer flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-sand-200/80 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-xl hover:shadow-sand-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      {/* ── Media Container ── */}
      <div className="relative aspect-video w-full overflow-hidden bg-sand-900">
        <Image
          src={getVideoThumbnail(video)}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient overlay gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand-950/80 via-sand-950/20 to-transparent transition-opacity duration-300 group-hover:from-sand-950/90"
        />

        {/* Category Chip */}
        <div className="absolute left-3.5 top-3.5">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-sand-950/40 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md">
            {video.category}
          </span>
        </div>

        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 rounded-md border border-white/10 bg-sand-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-white backdrop-blur-md">
            {video.duration}
          </div>
        )}

        {/* Play Action Hub */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-13 w-13 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-red-400 group-hover:bg-red-500 group-hover:text-sand-950 group-hover:shadow-red-500/30">
            <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={0} />
          </span>
        </div>
      </div>

      {/* ── Metadata & Typography ── */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="line-clamp-2 font-serif text-lg font-medium leading-snug tracking-tight text-sand-950 transition-colors duration-300 group-hover:text-red-800">
            {video.title}
          </h3>

          {video.description && (
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-sand-600 sm:text-sm">
              {video.description}
            </p>
          )}
        </div>

        {/* Subtle accent line on hover */}
        <div className="mt-5 pt-1">
          <span
            aria-hidden
            className="block h-0.5 w-0 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-red-300 transition-all duration-500 ease-out group-hover:w-full"
          />
        </div>
      </div>
    </button>
  );
}