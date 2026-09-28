// components/Admin/AdminSidebar.tsx
import Link from "next/link";
import {
  LayoutDashboard,
  Mail,
  Users,
  FileText,
  Settings,
  ExternalLink,
} from "lucide-react";
import type { Session } from "@/lib/auth";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/messages", label: "Contact Messages", icon: Mail },
  { href: "/dashboard/applications", label: "Applications", icon: Users },
  { href: "/dashboard/posts", label: "Blog Posts", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar({ user }: { user: Session }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sand-200 bg-white lg:flex">
      {/* Brand */}
      <div className="border-b border-sand-200 p-6">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 font-serif text-[11px] font-bold text-white shadow-card">
            GA
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-sm font-semibold text-sand-900">
              Golden Age
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-sand-500">
              Admin Panel
            </span>
          </span>
        </Link>
      </div>

      {/* Links */}
      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sand-700 transition hover:bg-red-50 hover:text-red-700"
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-sand-200 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium text-sand-500 transition hover:bg-sand-50 hover:text-sand-900"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          View Public Site
        </Link>
      </div>
    </aside>
  );
}