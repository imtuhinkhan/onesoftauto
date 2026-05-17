import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudyForm } from "@/components/admin/case-study-form";
import { createCaseStudy } from "@/actions/admin/case-studies";

export default async function NewCaseStudyPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");
  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
      <h1 className="font-display text-3xl font-bold mb-8">New case study</h1>
      <CaseStudyForm action={createCaseStudy} />
    </div>
  );
}
