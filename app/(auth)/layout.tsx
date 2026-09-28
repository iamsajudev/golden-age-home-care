// app/(auth)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in to your Golden Age Home Care admin account.",
    robots: { index: false, follow: false }, // don't index auth pages
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sand-50">
            {/* Ambient glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-red-100/50 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-100/50 blur-[120px]"
            />

            {/* Subtle grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative w-full">{children}</div>
        </div>
    );
}