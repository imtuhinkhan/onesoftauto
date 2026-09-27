import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminFaqs } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteFaq } from "@/actions/admin/faqs";

export default async function AdminFaqsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  let error: string | null = null;
  let faqs: Awaited<ReturnType<typeof getAdminFaqs>> = [];
  try {
    faqs = await getAdminFaqs();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load FAQs";
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">FAQs</h1>
          <p className="text-sm text-muted-foreground mt-1">{faqs.length} entries</p>
        </div>
        <Button variant="gradient" asChild>
          <Link href="/admin/faqs/new">
            <Plus className="h-4 w-4" />
            Add FAQ
          </Link>
        </Button>
      </div>
      {error ? (
        <p className="text-destructive">{error}</p>
      ) : (
        <ResourceList
          emptyMessage="No FAQs yet. Create your first entry."
          items={faqs.map((faq) => ({
            id: String(faq._id),
            title: faq.question,
            subtitle: faq.group,
            badges: [
              { label: faq.group, variant: "outline" as const },
              ...(!faq.published ? [{ label: "Draft", variant: "secondary" as const }] : []),
            ],
            editHref: `/admin/faqs/${faq._id}/edit`,
            deleteAction: deleteFaq.bind(null, String(faq._id)),
            deleteRedirect: "/admin/faqs",
            deleteLabel: "FAQ",
          }))}
        />
      )}
    </div>
  );
}
