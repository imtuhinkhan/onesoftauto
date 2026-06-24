import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminClients } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteClient } from "@/actions/admin/clients";

export default async function AdminClientsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  let error: string | null = null;
  let clients: Awaited<ReturnType<typeof getAdminClients>> = [];
  try {
    clients = await getAdminClients();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load clients";
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Clients</h1>
          <p className="text-sm text-muted-foreground mt-1">{clients.length} client logos</p>
        </div>
        <Button variant="gradient" asChild>
          <Link href="/admin/clients/new">
            <Plus className="h-4 w-4" /> Add client
          </Link>
        </Button>
      </div>
      {error ? (
        <p className="text-destructive">{error}</p>
      ) : (
        <ResourceList
          emptyMessage="No clients yet. Add your first client logo."
          items={clients.map((client) => ({
            id: String(client._id),
            title: client.name,
            subtitle: client.logo,
            badges: [
              ...(!client.published ? [{ label: "Draft", variant: "secondary" as const }] : []),
              { label: `Order ${client.order}`, variant: "outline" as const },
            ],
            editHref: `/admin/clients/${client._id}/edit`,
            deleteAction: deleteClient.bind(null, String(client._id)),
            deleteRedirect: "/admin/clients",
            deleteLabel: "client",
          }))}
        />
      )}
    </div>
  );
}
