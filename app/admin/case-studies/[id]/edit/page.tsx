import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudyForm } from "@/components/admin/case-study-form";
import { updateCaseStudy, deleteCaseStudy } from "@/actions/admin/case-studies";
import { getAdminCaseStudyById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");
  const { id } = await params;
  let caseStudy;
  try { caseStudy = await getAdminCaseStudyById(id); } catch { notFound(); }
  if (!caseStudy) notFound();
  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit case study</h1>
        <DeleteButton onDelete={deleteCaseStudy.bind(null, id)} redirectTo="/admin/case-studies" label="case study" />
      </div>
      <CaseStudyForm action={updateCaseStudy.bind(null, id)} caseStudy={caseStudy} />
    </div>
  );
}
