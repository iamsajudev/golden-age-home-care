// components/Admin/AdminTopbar.tsx
import { logoutAction } from "@/app/actions/auth";
import { LogOut } from "lucide-react";
import type { Session } from "@/lib/auth";

export function AdminTopbar({ user }: { user: Session }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="flex h-16 items-center justify-between border-b border-sand-200 bg-white px-5 md:px-8">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sand-400">
          Admin
        </p>
        <p className="font-serif text-base font-semibold text-sand-900">
          Welcome back, {user.name.split(" ")[0]}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 font-serif text-xs font-bold text-white">
          {initials}
        </span>

        {/* Logout */}
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg border border-sand-200 bg-white px-3 py-2 text-xs font-medium text-sand-700 transition hover:border-red-300 hover:text-red-700"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}