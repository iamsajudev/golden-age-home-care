// app/(admin)/dashboard/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
    Mail,
    Users,
    FileText,
    TrendingUp,
    ArrowRight,
} from "lucide-react";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
    title: "Dashboard",
    robots: { index: false, follow: false },
};

const stats = [
    {
        label: "New Messages",
        value: "12",
        icon: Mail,
        href: "/dashboard/messages",
    },
    {
        label: "Applications",
        value: "8",
        icon: Users,
        href: "/dashboard/applications",
    },
    {
        label: "Published Posts",
        value: "14",
        icon: FileText,
        href: "/dashboard/posts",
    },
    {
        label: "This Week",
        value: "+23%",
        icon: TrendingUp,
        href: "/dashboard",
    },
];

export default async function DashboardPage() {
    const session = await getSession();

    return (
        <div className="space-y-8">
            {/* Heading */}
            <div>
                <div className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-red-600" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                        Dashboard
                    </p>
                </div>
                <h1 className="mt-4 font-serif text-3xl font-semibold text-sand-900">
                    Good to see you, {session?.name.split(" ")[0]}.
                </h1>
                <p className="mt-2 text-sm text-sand-600">
                    Here&apos;s what&apos;s happening at Golden Age Home Care.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => {
                    const Icon = s.icon;
                    return (
                        <Link
                            key={s.label}
                            href={s.href}
                            className="group rounded-2xl border border-sand-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lift"
                        >
                            <div className="flex items-start justify-between">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                                    <Icon className="h-4 w-4" />
                                </span>
                                <ArrowRight className="h-4 w-4 text-sand-300 transition group-hover:translate-x-0.5 group-hover:text-red-600" />
                            </div>
                            <p className="mt-5 font-serif text-3xl font-semibold text-sand-900">
                                {s.value}
                            </p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-sand-500">
                                {s.label}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* Recent activity placeholder */}
            <div className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
                <h2 className="font-serif text-lg font-semibold text-sand-900">
                    Recent Activity
                </h2>
                <p className="mt-2 text-sm text-sand-600">
                    Once the contact form and job applications are wired to MongoDB,
                    recent submissions will appear here.
                </p>
            </div>
        </div>
    );
}