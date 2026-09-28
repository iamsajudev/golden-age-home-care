// lib/auth.ts
import { cookies } from "next/headers";

const COOKIE_NAME = "ga_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/* ─────────────────────────────────────────────
   Demo credentials — replace with real auth later
   ───────────────────────────────────────────── */

const DEMO_ADMIN = {
  email: "admin@goldenagehomecare.com",
  password: "admin1234",
  name: "Shah Nawaz",
  role: "admin",
};

export type Session = {
  email: string;
  name: string;
  role: string;
  issuedAt: number;
};

/* ─────────────────────────────────────────────
   Auth check — call from the login form's server action
   ───────────────────────────────────────────── */

export function verifyCredentials(email: string, password: string): Session | null {
  if (
    email.trim().toLowerCase() === DEMO_ADMIN.email &&
    password === DEMO_ADMIN.password
  ) {
    return {
      email: DEMO_ADMIN.email,
      name: DEMO_ADMIN.name,
      role: DEMO_ADMIN.role,
      issuedAt: Date.now(),
    };
  }
  return null;
}

/* ─────────────────────────────────────────────
   Cookie read/write — server-side only
   ───────────────────────────────────────────── */

export async function createSession(session: Session) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}