import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getCaseStudies } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default async function AdminCaseStudiesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const studies = await getCaseStudies();

  return (
    <div className="p-6 lg:p-8">
      <h1 className="font-display text-3xl font-bold mb-8">Case Studies</h1>
      <div className="space-y-3">
        {studies.map((study) => (
          <Card key={study.slug} className="glass border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{study.title}</p>
                <Badge variant="outline" className="text-xs mt-1">{study.category}</Badge>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/case-studies/${study.slug}`} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
