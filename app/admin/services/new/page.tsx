import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceForm } from "@/components/admin/service-form";
import { createService } from "@/actions/admin/services";

export default async function NewServicePage() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
      <h1 className="font-display text-3xl font-bold mb-8">New service</h1>
      <ServiceForm action={createService} />
    </div>
  );
}
