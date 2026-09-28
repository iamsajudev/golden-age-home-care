"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  User,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  /* Delay closing so users can move mouse into the dropdown */
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  /* Escape closes the desktop dropdown */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openNow = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(href);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  /* Active state helper — also considers child routes */
  const isItemActive = (item: (typeof siteConfig.nav)[number]) => {
    const href = item.href;
    const exact = href === "/" ? pathname === "/" : pathname.startsWith(href);

    const childActive =
      "children" in item && Array.isArray(item.children)
        ? item.children.some(
          (c) =>
            pathname === c.href ||
            pathname.startsWith(c.href + "/")
        )
        : false;

    return exact || childActive;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? " bg-sand-50/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {/* ═══════════ TOP UTILITY BAR — RED ═══════════ */}
      <div
        className={cn(
          " bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white transition-all duration-300",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        )}
      >
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="h-3 w-3" />
              Serving all 5 boroughs &amp; Westchester
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="h-3 w-3" />
              {siteConfig.hours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-1.5 transition hover:text-red-100 sm:flex"
            >
              <Mail className="h-3 w-3" />
              {siteConfig.email}
            </a>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 font-medium transition hover:text-red-100"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <Link href={"/login"} title="Login">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════ MAIN NAV ═══════════ */}
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex items-center justify-center text-white shadow-soft">
            <Image
              src="/logo.png"
              alt="Golden Age Home Care Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold text-sand-900">
              Golden Age
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-sand-500">
              Home Care
            </span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const hasChildren =
              "children" in item &&
              Array.isArray(item.children) &&
              item.children.length > 0;
            const active = isItemActive(item);
            const isOpen = openMenu === item.href;

            /* ── No submenu: plain link ── */
            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition",
                    active
                      ? "text-red-700"
                      : "text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            /* ── Has submenu: hover dropdown ── */
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => openNow(item.href)}
                onMouseLeave={closeSoon}
              >
                <Link
                  href={item.href}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition",
                    active
                      ? "text-red-700"
                      : "text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Link>

                {/* Dropdown panel */}
                <div
                  role="menu"
                  className={cn(
                    "absolute left-0 top-full z-50 mt-1 w-52 origin-top-left  border border-sand-200 bg-white p-2 shadow-lift transition-all duration-200",
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  {item.children!.map((child) => {
                    const childActive =
                      pathname === child.href ||
                      pathname.startsWith(child.href + "/");
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "flex items-center rounded-sm px-3 py-2.5 text-sm transition",
                          childActive
                            ? "bg-red-50 font-medium text-red-700"
                            : "text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-red-600 text-white hover:bg-red-700 rounded-sm"
            >
              <Calendar className="h-4 w-4" />
              Check Eligibility
            </Button>
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-sand-800 hover:bg-sand-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ═══════════ MOBILE DRAWER ═══════════ */}
      {mobileOpen && (
        <div className="border-t border-sand-200 bg-sand-50 md:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => {
              const hasChildren =
                "children" in item &&
                Array.isArray(item.children) &&
                item.children.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-sand-800 hover:bg-sand-100"
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileExpanded === item.href;

              return (
                <div key={item.href} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((v) =>
                        v === item.href ? null : item.href
                      )
                    }
                    aria-expanded={expanded}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-sand-800 hover:bg-sand-100"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        expanded && "rotate-180"
                      )}
                    />
                  </button>

                  {expanded && (
                    <div className="ml-2 flex flex-col border-l border-sand-200 pl-3">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTAs */}
            <div className="mt-3 flex flex-col gap-2 border-t border-sand-200 pt-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-sand-300 py-3 text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  <Calendar className="h-4 w-4" />
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}