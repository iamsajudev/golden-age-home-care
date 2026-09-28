// app/actions/auth.ts
"use server";

import { redirect } from "next/navigation";
import {
    verifyCredentials,
    createSession,
    destroySession,
} from "@/lib/auth";

export type LoginState = {
    error?: string;
};

export async function loginAction(
    _prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
        return { error: "Email and password are required." };
    }

    const session = verifyCredentials(email, password);

    if (!session) {
        return { error: "Invalid email or password." };
    }

    await createSession(session);

    /* Redirect — happens server-side, so we don't need the client to do it */
    redirect("/dashboard");
}

export async function logoutAction() {
    await destroySession();
    redirect("/login");
}