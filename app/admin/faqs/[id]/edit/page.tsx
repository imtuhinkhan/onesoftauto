import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaqForm } from "@/components/admin/faq-form";
import { updateFaq, deleteFaq } from "@/actions/admin/faqs";
import { getAdminFaqById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");
  const { id } = await params;
  let faq;
  try {
    faq = await getAdminFaqById(id);
  } catch {
    notFound();
  }
  if (!faq) notFound();

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/admin/faqs"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to FAQs
      </Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit FAQ</h1>
        <DeleteButton onDelete={deleteFaq.bind(null, id)} redirectTo="/admin/faqs" label="FAQ" />
      </div>
      <FaqForm action={updateFaq.bind(null, id)} faq={faq} />
    </div>
  );
}
