// components/Service/ServiceCard.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  slug: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
};

export function ServiceCard({
  icon: Icon,
  category,
  title,
  description,
  features,
  slug,
  image,
  imageAlt,
  index,
  activeByDefault = false,   // ← NEW prop
}: Service & { index: number; activeByDefault?: boolean }) {
  /* Treat "active" as: default-active OR hovered */
  const isActive = activeByDefault;

  return (
    <article className="group relative">
      {/* Full-card link */}
      <Link
        href={`/services/${slug}`}
        aria-label={`Learn more about ${title}`}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        <span className="sr-only">{title}</span>
      </Link>

      {/* Card visual */}
      <div
        className={cn(
          "pointer-events-none relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-7 shadow-soft transition-all duration-500",
          // Card lift + border + shadow
          "group-hover:-translate-y-2 group-hover:border-red-300 group-hover:shadow-lift",
          // Default-active state
          isActive && "-translate-y-2 border-red-300 shadow-lift"
        )}
      >
        {/* ── Hover image — slides in from the LEFT ── */}
        {image && (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 w-2/3 -translate-x-full opacity-0 transition-all duration-700 ease-out",
              "group-hover:translate-x-0 group-hover:opacity-100",
              // Default-active state reveals the image immediately
              isActive && "translate-x-0 opacity-100"
            )}
          >
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              sizes="(max-width: 1024px) 66vw, 33vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-l from-white via-white/85 to-white/30"
            />
          </div>
        )}

        {/* Top gradient wash */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-bl from-red-50/80 via-transparent to-transparent opacity-0 transition-opacity duration-500",
            "group-hover:opacity-100",
            isActive && "opacity-100"
          )}
        />

        {/* Icon + index */}
        <div className="relative flex items-start justify-between">
          <span
            className={cn(
              "relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500",
              "bg-red-50 text-red-600",
              "group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white",
              isActive && "rotate-[-6deg] scale-110 bg-red-600 text-white"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "absolute inset-0 rounded-2xl bg-red-400/40 opacity-0 transition-opacity duration-500",
                "group-hover:animate-ping-slow group-hover:opacity-100",
                isActive && "animate-ping-slow opacity-100"
              )}
            />
            <Icon className="relative h-6 w-6" strokeWidth={2} />
          </span>

          <span
            className={cn(
              "font-serif text-xs font-semibold tracking-[0.15em] text-black transition-colors duration-300",
              "group-hover:text-red-500",
              isActive && "text-red-500"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Category */}
        <p className="relative mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600">
          {category}
        </p>

        {/* Title */}
        <h3
          className={cn(
            "relative mt-2 font-serif text-xl font-semibold leading-snug text-black transition-colors duration-300",
            "group-hover:text-red-700",
            isActive && "text-red-700"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="relative mt-3 text-sm leading-relaxed text-black">
          {description}
        </p>

        {/* Features */}
        <ul className="relative mt-5 space-y-2.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-xs text-black"
            >
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="relative mt-auto mt-6 flex items-center justify-between border-t border-sand-100 pt-5">
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300",
              "group-hover:text-red-600",
              isActive && "text-red-600"
            )}
          >
            Learn More
          </span>
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-black transition-all duration-300",
              "group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white",
              isActive && "rotate-45 border-red-600 bg-red-600 text-white"
            )}
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>

        {/* Bottom accent bar */}
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500",
            "w-0 group-hover:w-full",
            isActive && "w-full"
          )}
        />
      </div>
    </article>
  );
}