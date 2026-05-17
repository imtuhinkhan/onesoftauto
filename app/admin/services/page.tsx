import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminServices } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteService } from "@/actions/admin/services";

export default async function AdminServicesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  let error: string | null = null;
  let services: Awaited<ReturnType<typeof getAdminServices>> = [];
  try { services = await getAdminServices(); } catch (e) { error = e instanceof Error ? e.message : "Failed to load"; }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Services</h1>
          <p className="text-sm text-muted-foreground mt-1">{services.length} services</p>
        </div>
        <Button variant="gradient" asChild><Link href="/admin/services/new"><Plus className="h-4 w-4" /> Add service</Link></Button>
      </div>
      {error ? <p className="text-destructive">{error}</p> : (
        <ResourceList emptyMessage="No services yet." items={services.map((s) => ({
          id: String(s._id), title: s.title, subtitle: s.shortDescription,
          badges: [...(!s.published ? [{ label: "Draft", variant: "secondary" as const }] : [])],
          publicHref: s.published ? `/services/${s.slug}` : undefined,
          editHref: `/admin/services/${s._id}/edit`,
          deleteAction: deleteService.bind(null, String(s._id)),
          deleteRedirect: "/admin/services", deleteLabel: "service",
        }))} />
      )}
    </div>
  );
}
