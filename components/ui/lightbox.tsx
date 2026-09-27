// components/ui/lightbox.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
    src: string;
    alt: string;
    headline?: string;
    subtext?: string;
};

export function Lightbox({
    items,
    index,
    onClose,
    onIndexChange,
}: {
    items: LightboxItem[];
    index: number;
    onClose: () => void;
    onIndexChange: (i: number) => void;
}) {
    const [zoomed, setZoomed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const next = useCallback(
        () => onIndexChange((index + 1) % items.length),
        [index, items.length, onIndexChange]
    );
    const prev = useCallback(
        () => onIndexChange((index - 1 + items.length) % items.length),
        [index, items.length, onIndexChange]
    );

    /* Keyboard controls */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev, onClose]);

    /* Lock body scroll while open */
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    /* Reset zoom when the slide changes */
    useEffect(() => {
        setZoomed(false);
    }, [index]);

    /* Touch swipe */
    const touchStartX = useRef(0);
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) {
            dx < 0 ? next() : prev();
        }
    };

    const item = items[index];

    return (
        <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-sand-950/95 backdrop-blur-md animate-fade-in"
            onClick={onClose}
        >
            {/* ── Top bar ── */}
            <div
                className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 md:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Counter */}
                <div className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(items.length).padStart(2, "0")}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setZoomed((v) => !v)}
                        aria-label={zoomed ? "Zoom out" : "Zoom in"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                        {zoomed ? (
                            <ZoomOut className="h-4 w-4" />
                        ) : (
                            <ZoomIn className="h-4 w-4" />
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close viewer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* ── Prev button ── */}
            {items.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        prev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:left-6 md:h-14 md:w-14"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
            )}

            {/* ── Next button ── */}
            {items.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        next();
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:right-6 md:h-14 md:w-14"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            )}

            {/* ── Image + caption ── */}
            <div
                className="relative mx-auto flex h-full max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center px-4 md:px-16"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={cn(
                        "relative w-full overflow-hidden rounded-2xl transition-transform duration-500 ease-out",
                        zoomed ? "cursor-zoom-out scale-[1.6]" : "cursor-zoom-in scale-100"
                    )}
                    style={{ aspectRatio: "4 / 5" }}
                    onClick={() => setZoomed((v) => !v)}
                >
                    <Image
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="90vw"
                        className="object-contain animate-fade-in"
                        priority
                    />
                </div>

                {/* Caption */}
                {(item.headline || item.subtext) && (
                    <div className="mt-5 max-w-2xl text-center">
                        {item.headline && (
                            <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">
                                {item.headline}
                            </h3>
                        )}
                        {item.subtext && (
                            <p className="mt-1.5 text-sm text-white/70">{item.subtext}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}