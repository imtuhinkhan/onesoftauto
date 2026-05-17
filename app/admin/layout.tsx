import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen flex bg-background">
      {session && <AdminSidebar />}
      <div className={session ? "flex-1 lg:pl-64" : "flex-1 w-full"}>
        {children}
      </div>
    </div>
  );
}
