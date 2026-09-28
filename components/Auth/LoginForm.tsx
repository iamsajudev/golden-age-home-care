// components/Auth/LoginForm.tsx
"use client";

import { useState, useActionState } from "react";
import Link from "next/link";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    AlertCircle,
    Loader2,
    ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { loginAction, type LoginState } from "@/app/actions/auth";

const initialState: LoginState = {};

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [state, formAction, isPending] = useActionState(
        loginAction,
        initialState
    );

    return (
        <div className="w-full max-w-md">
            <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-lift md:p-10">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 font-serif text-sm font-bold text-white shadow-card">
                        GA
                    </span>
                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-base font-semibold text-sand-900">
                            Golden Age
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-500">
                            Home Care
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="mt-8">
                    <h1 className="font-serif text-2xl font-semibold text-sand-900 md:text-3xl">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-sand-600">
                        Sign in to access the admin dashboard.
                    </p>
                </div>

                {/* Form */}
                <form action={formAction} className="mt-8 space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-xs font-bold uppercase tracking-wider text-sand-700"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sand-400" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                defaultValue="admin@goldenagehomecare.com"
                                className="w-full rounded-xl border border-sand-200 bg-white pl-10 pr-4 py-3 text-sm text-sand-800 outline-none transition placeholder:text-sand-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-xs font-bold uppercase tracking-wider text-sand-700"
                            >
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-xs font-medium text-red-600 hover:text-red-700"
                            >
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sand-400" />
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                autoComplete="current-password"
                                defaultValue="admin1234"
                                className="w-full rounded-xl border border-sand-200 bg-white pl-10 pr-11 py-3 text-sm text-sand-800 outline-none transition placeholder:text-sand-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute cursor-pointer right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-sand-400 transition hover:bg-sand-100 hover:text-sand-700"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember me */}
                    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-sand-600">
                        <input
                            type="checkbox"
                            name="remember"
                            defaultChecked
                            className="h-4 w-4 rounded border-sand-300 text-red-600 focus:ring-2 focus:ring-red-100"
                        />
                        Remember me for 30 days
                    </label>

                    {/* Error */}
                    {state.error && (
                        <div
                            role="alert"
                            className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-800"
                        >
                            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                            <p className="text-xs leading-relaxed">{state.error}</p>
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className={cn(
                            "group inline-flex cursor-pointer w-full items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300",
                            isPending
                                ? "cursor-not-allowed bg-red-400"
                                : "bg-red-600 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                        )}
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Signing In
                            </>
                        ) : (
                            <>
                                Sign In
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                        )}
                    </button>
                </form>

                {/* Demo hint */}
                {/* <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-3.5">
                    <p className="text-[11px] leading-relaxed text-amber-800">
                        <strong>Demo credentials pre-filled.</strong> Email:{" "}
                        <code className="font-mono">admin@goldenagehomecare.com</code> ·
                        Password: <code className="font-mono">admin1234</code>
                    </p>
                </div> */}

                {/* Security notice */}
                <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-sand-200 bg-sand-50 p-3.5">
                    <ShieldCheck className=" h-4 w-4 shrink-0 text-sand-500" />
                    <p className="text-[11px] leading-relaxed text-sand-500">
                        This is a private system. All access is logged.
                    </p>
                </div>
            </div>

            <p className="mt-6 text-center text-sm text-sand-600">
                Not an admin?{" "}
                <Link
                    href="/"
                    className="font-medium cursor-pointer text-red-600 hover:text-red-700"
                >
                    Return to site
                </Link>
            </p>
        </div>
    );
}