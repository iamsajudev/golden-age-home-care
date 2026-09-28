// app/(admin)/layout.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AdminSidebar } from "@/components/Admin/AdminSidebar";
import { AdminTopbar } from "@/components/Admin/AdminTopbar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();

    /* Not logged in → bounce to login */
    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen bg-sand-50">
            {/* Sidebar */}
            <AdminSidebar user={session} />

            {/* Main */}
            <div className="flex flex-1 flex-col">
                <AdminTopbar user={session} />
                <main className="flex-1 px-5 py-8 md:px-8 lg:px-10">
                    {children}
                </main>
            </div>
        </div>
    );
}