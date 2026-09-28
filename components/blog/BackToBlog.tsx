// components/Blog/BackToBlog.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToBlog() {
  return (
    <Link
      href="/blogs"
      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors hover:text-red-600"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
      Back to Blog
    </Link>
  );
}