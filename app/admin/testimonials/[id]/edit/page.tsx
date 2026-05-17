import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { updateTestimonial, deleteTestimonial } from "@/actions/admin/testimonials";
import { getAdminTestimonialById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");
  const { id } = await params;
  let testimonial;
  try { testimonial = await getAdminTestimonialById(id); } catch { notFound(); }
  if (!testimonial) notFound();
  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/testimonials" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit testimonial</h1>
        <DeleteButton onDelete={deleteTestimonial.bind(null, id)} redirectTo="/admin/testimonials" label="testimonial" />
      </div>
      <TestimonialForm action={updateTestimonial.bind(null, id)} testimonial={testimonial} />
    </div>
  );
}
