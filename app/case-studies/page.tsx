import { getCaseStudies } from "@/lib/data";
import { CaseStudyFilterGrid } from "@/components/case-studies/filter-grid";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore our portfolio of successful web, SaaS, mobile, and AI projects.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto mb-4">
          <Badge variant="gradient" className="mb-4">
            Case Studies
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Work That <span className="gradient-text">Speaks</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Real results for real clients — explore our portfolio of transformative projects.
          </p>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-custom">
          <CaseStudyFilterGrid caseStudies={caseStudies} />
        </div>
      </section>
    </>
  );
}
