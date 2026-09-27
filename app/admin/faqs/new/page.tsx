import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaqForm } from "@/components/admin/faq-form";
import { createFaq } from "@/actions/admin/faqs";

export default async function NewFaqPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="p-6 lg:p-8">
      <Link
        href="/admin/faqs"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to FAQs
      </Link>
      <h1 className="font-display text-3xl font-bold mb-8">New FAQ</h1>
      <FaqForm action={createFaq} />
    </div>
  );
}
