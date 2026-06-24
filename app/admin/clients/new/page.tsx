import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ClientForm } from "@/components/admin/client-form";
import { createClient } from "@/actions/admin/clients";

export default async function NewClientPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/admin/clients"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to clients
      </Link>
      <h1 className="font-display text-3xl font-bold mb-8">Add client</h1>
      <ClientForm action={createClient} />
    </div>
  );
}
