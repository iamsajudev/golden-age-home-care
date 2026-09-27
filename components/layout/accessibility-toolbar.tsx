"use client";

import { useEffect, useState } from "react";
import { Accessibility, Contrast, Type, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "golden-sun-a11y";

type A11yPrefs = {
  largeText: boolean;
  highContrast: boolean;
  dyslexia: boolean;
};

const defaults: A11yPrefs = {
  largeText: false,
  highContrast: false,
  dyslexia: false,
};

export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(defaults);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPrefs({ ...defaults, ...JSON.parse(saved) });
    } catch {}
  }, []);

  // Apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("a11y-large-text", prefs.largeText);
    root.classList.toggle("a11y-high-contrast", prefs.highContrast);
    root.classList.toggle("a11y-dyslexia", prefs.dyslexia);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  const toggle = (key: keyof A11yPrefs) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {open && (
        <div className="mb-3 w-64 rounded-xl border border-sand-200 bg-white p-2 shadow-lift">
          <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-sand-500">
            Accessibility
          </p>
          <ToolItem
            icon={<Type className="h-4 w-4" />}
            label="Larger text"
            active={prefs.largeText}
            onClick={() => toggle("largeText")}
          />
          <ToolItem
            icon={<Contrast className="h-4 w-4" />}
            label="High contrast"
            active={prefs.highContrast}
            onClick={() => toggle("highContrast")}
          />
          <ToolItem
            icon={<BookOpen className="h-4 w-4" />}
            label="Dyslexia-friendly"
            active={prefs.dyslexia}
            onClick={() => toggle("dyslexia")}
          />
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Accessibility options"
        aria-expanded={open}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-sun-500 text-white shadow-lift transition hover:bg-sun-600",
          open && "rotate-90"
        )}
      >
        <Accessibility className="h-5 w-5" />
      </button>
    </div>
  );
}

function ToolItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-left transition",
        active
          ? "bg-sun-100 text-sun-800 font-medium"
          : "text-sand-700 hover:bg-sand-100"
      )}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {active && <span className="text-xs text-sun-600">On</span>}
    </button>
  );
}