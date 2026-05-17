import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminCaseStudies } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteCaseStudy } from "@/actions/admin/case-studies";

export default async function AdminCaseStudiesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  let error: string | null = null;
  let studies: Awaited<ReturnType<typeof getAdminCaseStudies>> = [];
  try { studies = await getAdminCaseStudies(); } catch (e) { error = e instanceof Error ? e.message : "Failed to load"; }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="font-display text-3xl font-bold">Case Studies</h1><p className="text-sm text-muted-foreground mt-1">{studies.length} studies</p></div>
        <Button variant="gradient" asChild><Link href="/admin/case-studies/new"><Plus className="h-4 w-4" /> Add case study</Link></Button>
      </div>
      {error ? <p className="text-destructive">{error}</p> : (
        <ResourceList emptyMessage="No case studies yet." items={studies.map((s) => ({
          id: String(s._id), title: s.title, subtitle: s.client,
          badges: [{ label: s.category, variant: "outline" as const }, ...(s.featured ? [{ label: "Featured", variant: "gradient" as const }] : []), ...(!s.published ? [{ label: "Draft", variant: "secondary" as const }] : [])],
          publicHref: s.published ? `/case-studies/${s.slug}` : undefined,
          editHref: `/admin/case-studies/${s._id}/edit`,
          deleteAction: deleteCaseStudy.bind(null, String(s._id)),
          deleteRedirect: "/admin/case-studies", deleteLabel: "case study",
        }))} />
      )}
    </div>
  );
}
