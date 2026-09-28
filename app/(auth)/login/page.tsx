// app/(auth)/login/page.tsx
import type { Metadata } from "next";
import { LoginForm } from "@/components/Auth/LoginForm";

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in to your Golden Age Home Care admin account.",
    robots: { index: false, follow: false },
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center px-5 py-12">
            <LoginForm />
        </div>
    );
}