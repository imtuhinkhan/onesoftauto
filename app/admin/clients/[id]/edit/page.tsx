import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ClientForm } from "@/components/admin/client-form";
import { updateClient, deleteClient } from "@/actions/admin/clients";
import { getAdminClientById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  let client;
  try {
    client = await getAdminClientById(id);
  } catch {
    notFound();
  }
  if (!client) notFound();

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/admin/clients"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to clients
      </Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit client</h1>
        <DeleteButton
          onDelete={deleteClient.bind(null, id)}
          redirectTo="/admin/clients"
          label="client"
        />
      </div>
      <ClientForm action={updateClient.bind(null, id)} client={client} />
    </div>
  );
}
