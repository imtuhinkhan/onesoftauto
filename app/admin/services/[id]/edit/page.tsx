import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceForm } from "@/components/admin/service-form";
import { updateService, deleteService } from "@/actions/admin/services";
import { getAdminServiceById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");
  const { id } = await params;
  let service;
  try { service = await getAdminServiceById(id); } catch { notFound(); }
  if (!service) notFound();
  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit service</h1>
        <DeleteButton onDelete={deleteService.bind(null, id)} redirectTo="/admin/services" label="service" />
      </div>
      <ServiceForm action={updateService.bind(null, id)} service={service} />
    </div>
  );
}
