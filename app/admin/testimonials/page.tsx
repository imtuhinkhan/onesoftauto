import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminTestimonials } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteTestimonial } from "@/actions/admin/testimonials";

export default async function AdminTestimonialsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  let error: string | null = null;
  let testimonials: Awaited<ReturnType<typeof getAdminTestimonials>> = [];
  try { testimonials = await getAdminTestimonials(); } catch (e) { error = e instanceof Error ? e.message : "Failed to load"; }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="font-display text-3xl font-bold">Testimonials</h1><p className="text-sm text-muted-foreground mt-1">{testimonials.length} testimonials</p></div>
        <Button variant="gradient" asChild><Link href="/admin/testimonials/new"><Plus className="h-4 w-4" /> Add testimonial</Link></Button>
      </div>
      {error ? <p className="text-destructive">{error}</p> : (
        <ResourceList emptyMessage="No testimonials yet." items={testimonials.map((t) => ({
          id: String(t._id), title: t.author, subtitle: `${t.role} at ${t.company}`,
          badges: [...(!t.published ? [{ label: "Draft", variant: "secondary" as const }] : [{ label: `${t.rating}★`, variant: "outline" as const }])],
          editHref: `/admin/testimonials/${t._id}/edit`,
          deleteAction: deleteTestimonial.bind(null, String(t._id)),
          deleteRedirect: "/admin/testimonials", deleteLabel: "testimonial",
        }))} />
      )}
    </div>
  );
}
